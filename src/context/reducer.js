import {
  ACTIVE_PAGE,
  GET_DATA_BEGIN,
  GET_DATA_SUCCES,
  GET_DATA_ERROR,
} from "./action";
const reducer = (state, action) => {
  if (action.type === "OPEN_SIDEBAR") {
    return { ...state, sidebarOpen: true };
  } else if (action.type === "CLOSE_SIDEBAR") {
    return { ...state, sidebarOpen: false };
  }
  if (action.type === GET_DATA_BEGIN) {
    return { ...state, loadingData: true, errorData: false };
  } else if (action.type === GET_DATA_SUCCES) {
    return {
      ...state,
      loadingData: false,
      errorData: false,
      data: action.payload,
    };
  } else if (action.type === GET_DATA_ERROR) {
    return { ...state, loadingData: false, errorData: true };
  }
};

export default reducer;
