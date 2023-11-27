import styled from "styled-components";
import FoodTags from "./HandleFoods";

const StyleFoodWrapper = styled.div`
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

const FoodWrapper = ({ onFoodTagsChange }) => {

    const handleSelectedTagsChange = (tags) => {
        onFoodTagsChange(tags);
    };
    return (
        <StyleFoodWrapper>
            <FoodTags onSelectedTagsChange={handleSelectedTagsChange} />
        </StyleFoodWrapper>
    )
};

export default FoodWrapper;