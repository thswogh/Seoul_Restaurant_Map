import styled from "styled-components";
import ChannelTags from "./HandleChannels";
import { useState } from "react";

const StyleChannelWrapper = styled.div`
    height: 20vh;
    border: black solid 1px;
    display: inline-block;
    overflow-y: scroll;
    padding: 15px;
    background-color: white;
    margin-bottom: 40px;
    &::-webkit-scrollbar {
    width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: black;
        height: auto;
    }
    &::-webkit-scrollbar-track {
        background-color: white;
        border: 1px solid black;
    }
`;


const ChannelWrapper = ({ onTagArrayChange }) => {
    const [selectedChannelTagArray, setSelectedChannelTagArray] = useState([]);

    const handleTagSelectionChange = (selectedTags) => {
        const newTagArray = Object.keys(selectedTags).filter(tagName => selectedTags[tagName]);
        setSelectedChannelTagArray(newTagArray);
        onTagArrayChange(newTagArray); // 여기서 onTagArrayChange를 호출하고 newTagArray를 전달
    };
    return (
        <StyleChannelWrapper>
            <ChannelTags onTagSelectionChange={handleTagSelectionChange} />
        </StyleChannelWrapper>
    )
};

export default ChannelWrapper;