const actions = {
  GET_USER_REQUEST: 'GET_USER_REQUEST',
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_USER_ERROR: 'GET_USER_ERROR',

  GET_DETAIL_USER_REQUEST: 'GET_DETAIL_USER_REQUEST',
  GET_DETAIL_USER_SUCCESS: 'GET_DETAIL_USER_SUCCESS',
  GET_DETAIL_USER_ERROR: 'GET_DETAIL_USER_ERROR',

  CLEAR_VIEW: 'CLEAR_VIEW',

  getListUser: (order, limit, skip, where) => ({
    type: actions.GET_USER_REQUEST,
    payload: {order, limit, skip, where}
  }),
  getDetailUser: (id) => ({
    type: actions.GET_DETAIL_USER_REQUEST,
    payload: {id}
  }),
  clearView: () => ({
    type: actions.CLEAR_VIEW,
  })
};
export default actions;
