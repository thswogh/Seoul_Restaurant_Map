import React from "react";
import { RegionData } from "../data/RegionData";

const SelectBox = (props) => {
    return (
        <select style={{ marginBottom: "5vh", fontSize: "1rem" }}>
            {props.options.map((option) => (
                <option
                    key={option.value}  // Added a key for each option to avoid a React warning
                    value={option.value}
                    defaultValue={props.defaultValue === option.value}
                >
                    {option.name}
                </option>
            ))}
        </select>
    );
};

const RegionDropdown = () => {
    return <SelectBox options={RegionData} defaultValue="서울" />;
};

export default RegionDropdown;
