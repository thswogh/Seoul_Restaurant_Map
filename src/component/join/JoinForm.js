import styled from "styled-components";
import StyleInput from "../common/Input";
import FormBtn from "../common/FormBtn";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import JoinIntensity from "./JoinIntensity";

const StyleLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  padding: 20px;
  @media (max-width: 786px) {
    height: 100%;
    padding-right: 30px;
  }
`;

const StyleEmailConfirmBtn = styled.input.attrs({ type: "button" })`
  width: 100px;
  height: 30px;
  border: solid 1px #ebd500;
  font-family: "Noto Sans KR", sans-serif;
  background-color: white;
  color: #ebd500;
  border-radius: 10px;
  /* margin-bottom: 10px; */
  :hover {
    cursor: pointer;
  }
  @media (max-width: 786px) {
    width: 50%;
    height: 70%;
  }
`;

const onSubmitHandler = (event) => {

};

const checkEmail = () => {

}

const checkPassword = () => {

}

const checkConfirmPassword = () => {

}

const JoinForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <StyleLoginForm onSubmit={onSubmitHandler}>
            <laebl>이메일</laebl>
            <StyleInput
                laebl="email"
                placeholder="matzip@naver.com"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label>닉네임</label>
            <StyleInput
                laebl="name"
                placeholder="honggildong"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <laebl>비밀번호</laebl>
            <StyleInput
                laebl="password"
                placeholder="********"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <label>비밀번호 확인</label>
            <StyleInput
                laebl="password Confirm"
                placeholder="********"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {/* <FormBtn value="JOIN" /> */}
        </StyleLoginForm>
    );
};

export default JoinForm;