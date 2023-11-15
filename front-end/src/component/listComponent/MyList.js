import { myListData } from "../../data/myListData";
import { useState } from "react";
import OrangeTriangle from "../common/OrangeTriangle";
import InvertedOrangeTriangle from "../common/InvertedOrangeTrianlge";

const ToggleList = ({ list }) => {
    const [isListOpen, setIsListOpen] = useState(false);

    const handleToggle = () => {
        setIsListOpen(!isListOpen);
    };

    return (
        <div>
            <h3 onClick={handleToggle} style={{ display: 'flex', alignItems: 'center' }}>
                {isListOpen ? <OrangeTriangle /> : <InvertedOrangeTriangle />} {list.listName}
            </h3>
            {isListOpen && (
                <ul>
                    {list.restaurantInfo.map((info, index) => (
                        <li key={index}>
                            <span>{info.restaurantName}</span>
                            {/* <ul>
                                {info.restaurantTag.map((tag, tagIndex) => (
                                    <li key={tagIndex}>{tag}</li>
                                ))}
                            </ul> */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const MyList = () => {
    return (
        <div>
            {myListData.map((list, index) => (
                <ToggleList key={index} list={list} />
            ))}
        </div>
    );
};

export default MyList;