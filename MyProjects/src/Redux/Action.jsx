export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

export const fetch_user = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetch_Users_Success = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetch_User_Error = (error) => ({
  type: FETCH_USERS_ERROR,
  payload: error,
});
