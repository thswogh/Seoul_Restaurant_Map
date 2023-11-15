import { FriendListData } from "../../data/friendListData";
import { useState } from "react";
import OrangeTriangle from "../common/OrangeTriangle";
import InvertedOrangeTriangle from "../common/InvertedOrangeTrianlge";

const SmallOrangeTriangle = () => (
    <span style={{ color: '#FFA500', marginRight: '5px' }}>▼</span>
);

const SmallInvertedOrangeTriangle = () => (
    <span style={{ color: '#FFA500', marginRight: '5px' }}>▲</span>
);

const ToggleList = ({ friend }) => {
    const [isFriendOpen, setIsFriendOpen] = useState(false);

    const handleFriendToggle = () => {
        setIsFriendOpen(!isFriendOpen);
    };

    return (
        <div>
            <h3 onClick={handleFriendToggle} style={{ display: 'flex', alignItems: 'center' }}>
                {isFriendOpen ? <OrangeTriangle /> : <InvertedOrangeTriangle />} {friend.friendId}
            </h3>
            {isFriendOpen && (
                <ul style={{ listStyle: 'none', }}>
                    {friend.listInfo.map((list, index) => (
                        <ToggleListItems key={index} list={list} />
                    ))}
                </ul>
            )}
        </div>
    );
};

const ToggleListItems = ({ list }) => {
    const [isListOpen, setIsListOpen] = useState(false);

    const handleListToggle = () => {
        setIsListOpen(!isListOpen);
    };

    return (
        <li>
            <h4 onClick={handleListToggle} style={{ display: 'flex', alignItems: 'center' }}>
                {isListOpen ? <SmallOrangeTriangle /> : <SmallInvertedOrangeTriangle />} {list.listName}
            </h4>
            {isListOpen && (
                <ul>
                    {list.restaurantInfo.map((restaurant, index) => (
                        <li key={index}>
                            <span>{restaurant.restaurantName}</span>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

const FriendList = () => {
    return (
        <div>
            {FriendListData.map((friend, index) => (
                <ToggleList key={index} friend={friend} />
            ))}
        </div>
    );
};

export default FriendList;