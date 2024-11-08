import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_REQUEST,
  FETCH_USERS_ERROR,
} from "./Action";

const initialState = {
  loading: false,
  users: [],
  error: null,
};

const fetch_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, error: null };
    case FETCH_USERS_ERROR:
        return {...state, loading: false,error :null};
    default:
        return state;
  }
};

export default fetch_Reducer
