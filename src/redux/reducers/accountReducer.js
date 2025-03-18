import { SET_ACCOUNT, LOGIN_ACCOUNT } from "../actions/accountActions";
import { AccountModel } from "../../models/accountModel";

const initialState = {
  account: AccountModel,
  isLoggedIn: false
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACCOUNT:
      return { ...state, account: action.payload };
    case LOGIN_ACCOUNT:
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
};

export default accountReducer;