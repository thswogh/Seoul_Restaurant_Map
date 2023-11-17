import { ChannelNames } from "../data/ChannelName";
import React, { useState } from 'react';
import SelectedTag from "./common/SelectedTag";

const ChannelTags = ({ onTagSelectionChange }) => {
    const [selectedTags, setSelectedTags] = useState({});

    const handleToggleSelection = (tagName) => {
        setSelectedTags((prevSelectedTags) => ({
            ...prevSelectedTags,
            [tagName]: !prevSelectedTags[tagName],
        }));
        onTagSelectionChange(selectedTags);
    };
    // const selectedChannelTagArray = Object.keys(selectedTags).filter(tagName => selectedTags[tagName]);

    return (
        <div>
            {ChannelNames.map((channelName, index) => (
                <SelectedTag
                    key={index}
                    text={channelName}
                    isSelected={selectedTags[channelName] || false}
                    onClick={() => handleToggleSelection(channelName)}
                />
            ))}
        </div>
    );
};
export default ChannelTags;