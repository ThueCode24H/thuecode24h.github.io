import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupAccount, loginAccount } from "../../redux/actions/accountActions";

const AccountForm = () => {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account.account);

  const [formData, setFormData] = useState(account);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    dispatch(signupAccount(formData));
  };

  const handleLogin = () => {
    dispatch(loginAccount(formData.username, formData.password));
  };

  return (
    <div>
      <h2>Quản lý tài khoản</h2>
      <input type="text" name="username" placeholder="Tên tài khoản" onChange={handleChange} />
      <input type="password" name="password" placeholder="Mật khẩu" onChange={handleChange} />
      <input type="text" name="fullName" placeholder="Họ và tên" onChange={handleChange} />
      <input type="text" name="phoneNumber" placeholder="Số điện thoại" onChange={handleChange} />
      <button onClick={handleRegister}>Đăng ký</button>
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
};

export default AccountForm;
