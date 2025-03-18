export const SET_ACCOUNT = "SET_ACCOUNT";
export const LOGIN_ACCOUNT = "LOGIN_ACCOUNT";

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
};
