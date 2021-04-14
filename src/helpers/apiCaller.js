import {history, store} from '../store/store';
import {apiURL} from '../configs/config';
import axios from "axios/index";
import moment from "moment";
// import auth_actions from "../redux/auth/actions";
// import {clearToken} from '../helpers/utility';

const user = () => {
  return store.getState().Auth;
};

export const apiVersion = apiURL;

const microServices = {
  ID: apiVersion + '/id',
  USER: apiVersion + '/user',
  PORTAL_MGT: apiVersion + '/portal-mgt',
  PHONE_NUMBER: apiVersion + '/cloud-pbx',
};
const getConfig = async (headers = {}) => {
  const user_data = user();

  if (Date.now() > moment(user().created).add(14, 'days').valueOf()) {
    clearToken();
    store.dispatch({
      type: auth_actions.LOGOUT_SUCCESS
    });
    history.replace('/signin');
  }

  if (!headers)
    headers = {};

  return {
    ...headers,
    'Authorization': user_data.idToken,
  };
};


// const codeMessage = {
//   200: 'Kết nối thành công',
//   201: 'Tạo Dữ liệu mới hoặc sửa đổi thành công.',
//   202: 'Yêu cầu đã cho vào hàng đợi',
//   204: 'Xóa thành công.',
//   400: 'Tthực hiện yêu cầu có lỗi và máy chủ không thực hiện bất kỳ hoạt động tạo dữ liệu mới hoặc sửa đổi nào.',
//   401: 'Vui lòng đăng nhập.',
//   403: 'Bạn không có quyền truy cập.',
//   404: 'Yêu cầu được thực hiện cho một bản ghi không tồn tại.',
//   406: 'Định dạng của yêu cầu không có sẵn.',
//   410: 'Tài nguyên được yêu cầu sẽ bị xóa vĩnh viễn và sẽ không được truy cập.',
//   422: 'Đã xảy ra lỗi xác thực khi tạo đối tượng.',
//   500: 'Đã xảy ra lỗi trên máy chủ.',
//   502: 'Lỗi cổng.',
//   503: 'Dịch vụ không khả dụng.',
//   504: 'Hết thời gian chờ.',
// };

const callApi = (url, data = null, headers = {}, method = 'GET', responseType = 'json', isRenderHeaderButton = false) => {
  if (!headers)
    headers = {};

  headers = {
    ...headers,
    'Accept': 'application/json',
    'platform': 1
  };

  let params = {};
  if (typeof data === 'object') {
    if (data instanceof FormData) {
      let key;
      for (key of data.keys()) {
        if (data.get(key) === 'null' || data.get(key) === 'undefined') {
          data.set(key, '');
        }
      }
    } else {
      let prop_name;
      for (prop_name in data) {
        if (data[prop_name] === null || data[prop_name] === undefined) {
          data[prop_name] = '';
        }
      }
    }

  }

  if (!(method === 'PUT' || method === 'POST' || method === 'PATCH')) {
    params = data;
    data = {};
  }

  return axios({
    method,
    url,
    data,
    params,
    headers,
    responseType: responseType
  }).then(function (response) {
    return response;
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      const status = error.response.status;
      if (status === 401) {
        clearToken();
        store.dispatch({
          type: auth_actions.LOGOUT_SUCCESS
        });
        history.replace('/signin');
        return;
      }
      // environment should not be used
      if (status === 403) {
        history.replace('/404');
        // return error.response;
      }
      if (status <= 504 && status >= 500) {
        // router.push('/exception/500');
        return;
      }
      if (status >= 404 && status < 422) {
        history.replace('/404');
        return;
      }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    //Error config
    console.log(error.config);

  });
};

// export const renderHeaderButton = (btn_arr = []) => {
//     if(btn_arr !== undefined && btn_arr !== null){
//         store.dispatch({
//             type: headerButtonAction.UPDATE_HEADER_BUTTON,
//             payload: btn_arr
//         });
//     }
// };

export const apiGet = async (url, params = null, headers = {}, isRenderHeaderButton = false) => {
  return await callApi(url, params, headers, 'GET', 'json', isRenderHeaderButton);
};

export const apiPost = async (url, params = null, headers = {}, isRenderHeaderButton = false) => {
  return await callApi(url, params, headers, 'POST', 'json', isRenderHeaderButton);
};

export const apiPut = async (url, params = null, headers = {}, isRenderHeaderButton = false) => {
  return await callApi(url, params, headers, 'PUT', 'json', isRenderHeaderButton);
};

export const apiPatch = async (url, params = null, headers = {}, isRenderHeaderButton = false) => {
  return await callApi(url, params, headers, 'PATCH', 'json', isRenderHeaderButton);
};

export const apiDelete = async (url, params = null, headers = {}, isRenderHeaderButton = false) => {
  return await callApi(url, params, headers, 'DELETE', 'json', isRenderHeaderButton);
};

export const apiDownload = async (url, params = null, headers = {}) => {
  callApi(url, params, headers, 'GET', 'blob').then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'template.xlsx'); //or any other extension
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  });
};

export const apiDownloadAuth = async (url, params = null, headers = {}) => {
  const _headers = await getConfig(headers);
  return await callApi(url, params, _headers, 'GET', 'blob');
};

export const apiGetAuth = async (url, params = null, headers = {}, isRenderHeaderButton = false) => {
  const _headers = await getConfig(headers);
  return apiGet(url, params, _headers, isRenderHeaderButton);
};

export const apiPostAuth = async (url, params = null, headers = {}, isRenderHeaderButton = false) => {
  const _headers = await getConfig(headers);
  return apiPost(url, params, _headers, isRenderHeaderButton);
};

export const apiPutAuth = async (url, params = null, headers = {}, isRenderHeaderButton = false) => {
  const _headers = await getConfig(headers);
  return apiPut(url, params, _headers, isRenderHeaderButton);
};

export const apiPatchAuth = async (url, params = null, headers = {}, isRenderHeaderButton = false) => {
  const _headers = await getConfig(headers);
  return apiPatch(url, params, _headers, isRenderHeaderButton);
};

export const apiPostPatchAuth = async (url, id = null, params = null, headers = {}, isRenderHeaderButton = false) => {
  const _headers = await getConfig(headers);
  let _url = id ? url + '/' + id : url;
  if (id) {
    return apiPatchAuth(_url, params, _headers, isRenderHeaderButton);
  } else {
    return apiPostAuth(_url, params, _headers, isRenderHeaderButton);
  }
};

export const apiDeleteAuth = async (url, params = null, headers = {}, isRenderHeaderButton = false) => {
  const _headers = await getConfig(headers);
  return apiDelete(url, params, _headers, isRenderHeaderButton);
};

export const setFieldValue = (form, response_data) => {
  form.validateFields((error, values) => {
    if (!error) {
      let _arr_err = {};
      let key;
      for (key in response_data) {
        if (values[key] !== undefined) {
          _arr_err[key] = {
            value: values[key],
            errors: [new Error(response_data[key])],
          }
        }
      }
      form.setFields(_arr_err);
    }
  });
};

export const checkValidationSubmit = (form, response) => {
  if (response.status === -4 || response.status === -2) {
    setFieldValue(form, response.data);
  }
};

// const refreshToken = async () => {
//   try {
//     if (!user().access_token) {
//       clearToken();
//       store.dispatch({
//         type: auth_actions.LOGOUT_SUCCESS
//       });
//       // store.dispatch({
//       //   type: auth_actions.LOGOUT
//       // })
//     }
//
//     store.dispatch({
//       type: auth_actions.TOKEN_REFRESH_REQUEST,
//       payload: {
//         refresh_token: user().refresh_token
//       }
//     });
//
//     await new Promise((resolve, reject) => {
//       store.subscribe(() => {
//         if (!user().is_refreshing) {
//           if (!user().error)
//             resolve();
//           else
//             reject(user().error);
//         }
//       })
//     });
//
//   } catch (err) {
//     store.dispatch({
//       type: auth_actions.TOKEN_REFRESH_ERROR,
//       payload: {error: 'loi'}
//     });
//   }
// };

export const genFilterQuery = (filter) => {
  let filterArr = [];
  let filterQuery = '';
  if (filter && typeof (filter) === 'object') {
    let property;
    for (property in filter) {
      if (filter[property] !== undefined && filter[property] !== null && filter[property].toString().trim() !== '') {
        filterArr.push(`${property}(${filter[property]})`);
      }
    }
  }
  if (filterArr) {
    filterQuery = filterArr.join('.');
  }
  return filterQuery;
};

export const checkPermission = (permission) => {
  let check = false;
  let _permission = Array.isArray(permission) ? permission : [permission];
  user().user_info.permission.forEach(items => {
    if (_permission.indexOf(items.action_code) > -1) {
      check = true;
    }
  });
  return check;
};

// export function onStatisticFunc(code) {
//   apiPostAuth(microServices.STATISTIC + '/statistic_function', {code})
//     .catch((err) => {
//       console.log(err);
//     });
// };

export default microServices;
