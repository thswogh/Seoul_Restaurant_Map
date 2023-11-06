import styled from "styled-components";

const StyleFormBtn = styled.button`
    width: 360px;
    height:44px;
    border-radius: 10px;
    border: none;
    font-size: 16px;
    margin: 5px;
`;

const FormBtn = (props) => {
    const [value, setValue] = props;
    return (
        <StyleFormBtn onClick={setValue}> {value} </StyleFormBtn>
    )
};

export default FormBtn;