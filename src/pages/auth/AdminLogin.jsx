import "./AdminLogin.css";

export default function AdminLogin() {
  return (
    <div className="admin_login">
      관리자 로그인
      <div className="login_box">
        <label htmlFor="userId">아이디</label>
        <input id="userId" name="userId" type="text" />
        <label htmlFor="userPassword">패스워드</label>
        <input id="userPassword" name="userPassword" type="text" />
      </div>
      <a href="/" className="btn_login">
        로그인
      </a>
    </div>
  );
}
