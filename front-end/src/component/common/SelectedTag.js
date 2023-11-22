import styled from 'styled-components';

// const StyleSelectedTag = styled.span`
//     padding: 5px 10px;
//     border-radius: 14px;
//     color: #FF7A00;
//     display: inline-block;
//     border: #FF7A00 1px solid;
//     margin-right: 10px;
//     margin-bottom: 7px;       
// `;

// const StyleUnSelectedTag = styled.div`
//     background-color: #FF7A00;
//     padding: 5px 10px;
//     border-radius: 14px;
//     color: white;
//     display: inline-block;
//     margin-right: 10px;
//     margin-bottom: 7px;       
// `;
const StyledTag = styled.div`
    padding: 5px 10px;
    border-radius: 14px;
    color: ${({ isSelected }) => (!isSelected ? "#FF7A00" : "white")};
    background-color: ${({ isSelected }) => (!isSelected ? "white" : "#FF7A00")};
    border: ${({ isSelected }) => (!isSelected ? "#FF7A00 1px solid" : "none")};
    margin-right: 10px;
    width: fit-content;
    &:hover{cursor: pointer;}
    display: inline-block;
    margin-bottom: 7px;       
`;

const SelectedTag = ({ text, isSelected, onClick }) => {
    return (
        <StyledTag $isSelected={isSelected} onClick={onClick}>{text}</StyledTag>
    )
}

export default SelectedTag;