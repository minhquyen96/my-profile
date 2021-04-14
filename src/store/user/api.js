import apiResource, {apiGetAuth, apiPatchAuth, genFilterQuery} from "../../helpers/apiCaller";

const fetchData = {
  fetchUserList: (order, limit, skip, where) => {
    return apiGetAuth(apiResource.ID + '/user', {
      filter: {order, limit, skip, where}
    });
  },
  fetchDetailUser: (id) => {
    return apiGetAuth(apiResource.ID + `/user/${id}`);
  }
};

export default fetchData;
