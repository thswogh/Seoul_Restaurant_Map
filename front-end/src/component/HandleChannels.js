import { ChannelNames } from "../data/ChannelName";
import React, { useState } from 'react';
import SelectedTag from "./common/SelectedTag";

const ChannelTags = () => {
    const [selectedTags, setSelectedTags] = useState({});

    const handleToggleSelection = (tagName) => {
        console.log(tagName);
        setSelectedTags((prevSelectedTags) => ({
            ...prevSelectedTags,
            [tagName]: !prevSelectedTags[tagName],
        }));
    };
    const selectedChannelTagArray = Object.keys(selectedTags).filter(tagName => selectedTags[tagName]);
    console.log(selectedChannelTagArray);
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