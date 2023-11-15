import { FoodDatas } from "../data/FoodType";
import React, { useState } from 'react';
import SelectedTag from "./common/SelectedTag";

const FoodTags = () => {
    const [selectedTags, setSelectedTags] = useState({});

    const handleToggleSelection = (tagName) => {
        setSelectedTags((prevSelectedTags) => ({
            ...prevSelectedTags,
            [tagName]: !prevSelectedTags[tagName],
        }));
    };

    const SelectedFoodsTagArray = Object.keys(selectedTags).filter(tagName => selectedTags[tagName])
    console.log(SelectedFoodsTagArray);

    return (
        <div>
            {FoodDatas.map((foodName, index) => (
                <SelectedTag
                    key={index}
                    text={foodName}
                    isSelected={selectedTags[foodName] || false}
                    onClick={() => handleToggleSelection(foodName)}
                />
            ))}
        </div>
    );
};
export default FoodTags;