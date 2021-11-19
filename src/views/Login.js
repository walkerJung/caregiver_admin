import React from "react";
import "../assets/css/login.css";
import simbol from "../assets/img/simbol.png";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../config/Queries";
import { logUserIn } from "../apollo";
import { useForm } from "react-hook-form";
import FormError from "../components/FormError";
import { toast } from "react-toastify";
import { Button } from "reactstrap";

function Login() {
  const [logInMutation, { loading }] = useMutation(LOGIN_MUTATION);
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
  });
  const onSubmit = async (data) => {
    if (loading) {
      return;
    }
    const { data: LoginResult } = await logInMutation({
      variables: {
        userId: data.userId,
        password: data.password,
      },
    });
    const token = LoginResult.login.token;
    const error = LoginResult.login.error;
    if (token) {
      logUserIn(token);
    } else {
      toast.error("로그인 정보를 확인해주세요", {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <>
      <div className="LoginWrap">
        <div className="login-container">
          <div className="login-tit-box flex">
            <img src={simbol} alt="" className="login-simbol" />
            <h2 className="login-tit">케어코리아 관리자 로그인</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login-form-group">
              <label htmlFor="userId" className="control-label hidden">
                아이디
              </label>
              <input
                type="text"
                name="userId"
                className="login-form-control"
                placeholder="아이디"
                autoComplete="off"
                autoFocus
                ref={register({
                  required: "아이디를 입력해주세요.",
                })}
              />

              <FormError message={errors?.userId?.message} />
            </div>
            <div className="login-form-group">
              <label htmlFor="password" className="control-label hidden">
                비밀번호
              </label>
              <input
                type="password"
                name="password"
                className="login-form-control"
                placeholder="비밀번호"
                ref={register({
                  required: "비밀번호를 입력해주세요.",
                })}
              />

              <FormError message={errors?.userId?.message} />
            </div>

            <div className="flex-both">
              <div className="login-checkbox"></div>
            </div>
            <div className="btn-area">
              <Button type="submit" className="btn btn-full-large btn-block">
                로그인
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
