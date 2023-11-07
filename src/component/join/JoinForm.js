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

const StyleUserNameConfirmBtn = styled.input.attrs({ type: "button" })`
  width: 100px;
  height: 30px;
  border: solid 1px #FF7A00;
  font-family: "Noto Sans KR", sans-serif;
  background-color: white;
  color: #FF7A00;
  border-radius: 10px;
  /* margin-bottom: 10px; */
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 786px) {
    width: 50%;
    height: 70%;
  }
`;

const StyleErrorMessage = styled.div`
    font-size: 0.5rem;
    color: red;
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
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [idError, setIdError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const [isIdCheck, setIsIdCheck] = useState(false); //아이디 중복검사 했는지
    const [isIdAvailable, setIsIdAvailable] = useState(false); // 아이디 사용 가능한지 아닌지

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

    const onChangeEmailHandler = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        checkEmail(emailValue);
    };

    const onChangeIdHandler = (e) => {
        const idValue = e.target.value;
        setId(idValue);
        // idCheckHandler(idValue);
    };

    const onChangePasswordHandler = (e) => {
        const { name, value } = e.target;
        if (name === 'password') {
            setPassword(value);
            passwordCheckHandler(value, confirmPassword);
        } else {
            setConfirmPassword(value);
            passwordCheckHandler(password, value);
        }
    }

    const checkEmail = (email) => {
        if (!email.includes("@") || !email.includes(".")) {
            setEmailError('올바르지 않은 이메일 형식입니다.');
            return false;
        }
        setEmailError("");
        return true;
    };

    const passwordCheckHandler = (password, confirmPassword) => {
        const passwordRegex = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,}$/;
        if (password === '') {
            setPasswordError('비밀번호를 입력해주세요.');
            return false;
        } else if (!passwordRegex.test(password)) {
            setPasswordError('비밀번호는 8자 이상의 영소문자, 숫자, !@*&-_만 입력 가능합니다.');
            return false;
        } else if (confirmPassword !== password) {
            setPasswordError('');
            setConfirmPasswordError('비밀번호가 일치하지 않습니다.');
            return false;
        } else {
            setPasswordError('');
            setConfirmPasswordError('');
            return true;
        }
    }

    // const idCheckHandler = async (e) => {
    //     e.preventDefault();
    //     await axios
    //         .post("server url", {
    //             id: id,
    //         })
    //         .then((response) => {
    //             console.log(response);
    //             if (response.status === 200) {
    //                 setIdError("");
    //             } else {
    //                 setIdError("중복된 아이디입니다.");
    //             }
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
        // else if (checkPassword(password) === false)
        //     alert(
        //         "비밀번호는 영문자, 숫자, 특수문자를 포함한 8자리 이상이어야 합니다."
        //     );
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
                onChange={onChangeEmailHandler}
            />
            {<StyleErrorMessage>{emailError}</StyleErrorMessage>}

            <label>닉네임</label><StyleUserNameConfirmBtn value="닉네임 중복 검사" />
            <StyleInput
                laebl="userName"
                placeholder="홍박사"
                type="text"
                value={id}
                onChange={onChangeIdHandler}
            />

            <laebl>비밀번호</laebl>
            <StyleInput
                name="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={onChangePasswordHandler}
            />
            {<StyleErrorMessage>{passwordError}</StyleErrorMessage>}
            <StyleInput
                name="confirmPassword"
                placeholder="Confrim Password"
                type="password"
                value={confirmPassword}
                onChange={onChangePasswordHandler}
            />
            {<StyleErrorMessage>{confirmPasswordError}</StyleErrorMessage>}

            <StyleSubmitBtn>회원가입</StyleSubmitBtn>
            {/* <StyleSubmitBtn onClick={onSubmitHandler}>회원가입</StyleSubmitBtn> */}
        </StyleLoginForm>
    );
};

export default JoinForm;