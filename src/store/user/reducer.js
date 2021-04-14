import actions from './action';

const initState = {
  listLoading: false,
  detailLoading: false,
  user: [],
  detailData: null,
};

export default function reducer(state = initState, {type, payload}) {
  switch (type) {
    case actions.CLEAR_VIEW:
      return {
        ...initState
      }
    case actions.GET_USER_REQUEST:
      return {
        ...state,
        listLoading: true,
        user: [],
      };
    case actions.GET_USER_SUCCESS:
      return {
        ...state,
        listLoading: false,
        user: payload.user
      };
    case actions.GET_USER_ERROR:
      return {
        ...state,
        listLoading: false,
        user: []
      };
    case actions.GET_DETAIL_USER_REQUEST:
      return {
        ...state,
        detailLoading: true,
        detailData: null
      }
    case actions.GET_DETAIL_USER_SUCCESS:
      return {
        ...state,
        detailLoading: false,
        detailData: payload
      }
    case actions.GET_DETAIL_USER_ERROR:
      return {
        ...state,
        detailLoading: false,
        detailData: null
      }
    default:
      return state;
  }
}
