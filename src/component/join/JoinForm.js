import styled from "styled-components";
import StyleInput from "../common/Input";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import JoinIntensity from "./JoinIntensity";

const StyleLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const StyleSubmitBtn = styled.button`
    width: 350px;
    height: 200px;
    background-color: tomato;
    border: none;
    border-radius: 2px;
    color: white;
    font-size: 1rem;
    padding:10px 10px;
    &:hover {
        cursor: pointer;
    }
`;

// const SERVER_URL = 'http://'




const JoinForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // const onSubmitHandler = async (e) => {
    //     e.preventDefault();
    //     if (finalValidation() === true) {
    //         await axios
    //             .post("server url", {
    //                 email: email,
    //                 password: password,
    //                 userName: userName,
    //             })
    //             .then((response) => {
    //                 console.log(response);
    //                 if (response.status === 200) {
    //                     alert("회원가입에 성공하셨습니다.");
    //                     navigate("/login");
    //                 }
    //                 else {
    //                     alert("이미 회원가입 완료한 이메일입니다.");
    //                 }
    //             })
    //     }
    // };

    const checkEmail = (email) => {
        if (email !== "" && !email.includes("@") && !email.includes("."))
            alert("올바르지 않은 이메일 형식입니다.");
    };

    const checkPassword = (password) => {
        const regexpPassword = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,}$/;
        if (regexpPassword.test(password)) return true;
        return false;
    };

    // const checkUserName = async (e) => {
    //     e.preventDefault();
    //     await axios
    //         .post("server url", {
    //             userName: userName,
    //         })
    //         .then((response) => {
    //             console.log(response);
    //         })
    // };

    const finalValidation = () => {
        if (email === "") alert("이메일을 입력해주세요.");
        else if (password === "") alert("비밀번호를 입력해주세요.");
        else if (confirmPassword === "") alert("비밀번호 확인을 입력해주세요");
        else if (password !== confirmPassword)
            alert("비밀번호와 비밀번호 확인이 같지 않습니다.\n다시 입력해주세요.");
        else if (checkEmail(email) === false)
            alert("이메일 형식을 다시 확인해주세요.");
        else if (checkPassword(password) === false)
            alert(
                "비밀번호는 영문자, 숫자, 특수문자를 포함한 8자리 이상이어야 합니다."
            );
        else return true;
    };

    return (
        <StyleLoginForm>
            <laebl>이메일</laebl>
            <StyleInput
                laebl="email"
                placeholder="matzip@naver.com"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={checkEmail(email)}
            />
            <StyleEmailConfirmBtn onClick={checkUserName} value="닉네임 중복 검사" />

            <label>닉네임</label>
            <StyleInput
                laebl="userName"
                placeholder="홍박사"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />

            <laebl>비밀번호</laebl>
            <StyleInput
                laebl="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <label>비밀번호 확인</label>
            <StyleInput
                laebl="password Confirm"
                placeholder="Confrim Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <StyleSubmitBtn onClick={onSubmitHandler}>회원가입</StyleSubmitBtn>
        </StyleLoginForm>
    );
};

export default JoinForm;