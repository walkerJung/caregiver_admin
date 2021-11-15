import React, { useState } from "react";
import "../assets/css/login.css";
import simbol from "../assets/img/simbol.png";
function Login() {
  const [memberId, setMemberId] = useState("");
  const [memberPw, setMemberPw] = useState("");
  const handleMemberId = (e) => {
    setMemberId(e.target.value);
  };

  const handleMemberPw = (e) => {
    setMemberPw(e.target.value);
  };
  return (
    <>
      <div className="LoginWrap">
        <div className="login-container">
          <div className="login-tit-box flex">
            <img src={simbol} alt="" className="login-simbol" />
            <h2 className="login-tit">케어코리아 관리자 로그인</h2>
          </div>

          <div className="login-form-group">
            <label htmlFor="member_id" className="control-label hidden">
              아이디
            </label>
            <input
              type="text"
              id="member_id"
              className="login-form-control"
              value={memberId}
              onChange={handleMemberId}
              placeholder="아이디"
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="member_password" className="control-label hidden">
              비밀번호
            </label>
            <input
              type="password"
              id="member_password"
              className="login-form-control"
              value={memberPw}
              onChange={handleMemberPw}
              placeholder="비밀번호"
            />
          </div>
          <div className="flex-both">
            <div className="login-checkbox">
              <input
                type="checkbox"
                name="id_remember"
                id="id_remember"
                value=""
              />
              <label
                htmlFor="id_remember"
                style={{ marginLeft: 5, marginBottom: 0 }}
              >
                아이디 저장
              </label>
            </div>
          </div>
          <div className="btn-area">
            <button type="button" className="btn btn-full-large btn-block">
              로그인
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
