export const SET_ACCOUNT = "SET_ACCOUNT";
export const LOGIN_ACCOUNT = "LOGIN_ACCOUNT";
import { addDoc, collection } from "firebase/firestore";
import { db } from "~/firebase";

export const setAccount = (account) => ({
  type: SET_ACCOUNT,
  payload: account
});

export const loginAccount = (username, password) => (dispatch, getState) => {
  const { account } = getState();
  if (account.username === username && account.password === password) {
    alert("Đăng nhập thành công!");
    dispatch({ type: LOGIN_ACCOUNT, payload: true });
  } else {
    alert("Sai tài khoản hoặc mật khẩu!");
    dispatch({ type: LOGIN_ACCOUNT, payload: false });
  }
}
  export const signupAccount = (account) => async  (dispatch) => {
    if (!account.username || !account.password || !account.fullName || !account.phoneNumber) {
      // alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    try {
      await addDoc(collection(db, "accounts"), account, {
        username: account.username,
        password: account.password,
        fullName: account.fullName,
        phoneNumber: account.phoneNumber,
        isLoggedIn: false,
      });
      dispatch({ type: SET_ACCOUNT, payload: account });
      alert("dang ky thanh cong!!");
  
    } catch (err) {
      alert("dang ky that bai!!");
    }
}
