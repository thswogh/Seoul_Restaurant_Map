import React, { useState } from 'react';
import '../../css/overlay.css'
import PngLeftArrow from '../../img/LeftArrow.png'
import PngRightArrow from '../../img/RightArrow.png'
import ShortcutBtn from '../../img/shortcutBtn.png'
import axios from 'axios';

const Overlay = ({ marker, handleMarkerClick }) => {
    const [curVideoIdx, setCurVideoIdx] = useState(0);
    const [showList, setShowList] = useState(false);
    const [findListData, setFindListData] = useState([]);

    const handleNextVideo = () => {
        setCurVideoIdx((prevIdx) => (prevIdx + 1) % marker.videoData.length);
    };
    const handlePrevVideo = () => {
        setCurVideoIdx((prevIdx) => (prevIdx - 1 + marker.videoData.length) % marker.videoData.length);
    }
    const playVideo = () => {
        const videoLink = marker.videoData[curVideoIdx].url;
        window.open(videoLink, '_blank');
    }

    const toggleList = async ({ }) => {
        const userId = sessionStorage.getItem("userId");
        setShowList(!showList);

        try {
            const response = await axios.get("/home/findList", {
                params: {
                    userId: userId
                }
            });
            console.log(response);
            setFindListData(response.data);
        } catch (error) {
            alert("Error fetching data:", error.response.data);
        }
    };

    const handleListItemClick = async (listId, restaurantName) => {
        try {
            const userId = sessionStorage.getItem("userId");
            let body = { userId: userId, listId, listId, restaurantName, restaurantName }
            const response = await axios.post("/home/addRestaurantToList", body);
            switch (response.data) {
                case 0:
                    alert("리스트에 추가하였습니다.");
                    break;
                case 1:
                    alert("중복된 레스토랑이 이미 리스트에 있습니다.");
                    break;
                case 2:
                    alert("레스토랑 이름이 없습니다.");
                    break;
                case 3:
                    alert("리스트가 유효하지 않습니다.");
                    break;
                case 4:
                    alert("세션이 유효하지 않습니다.");
                    break;
                default:
                    alert("알 수 없는 응답 코드입니다:", response.data);
                // 기타 처리
            }
        } catch (error) {
            console.error("Error handling click:", error);
        }
    };

    return (
        <div className='wrap'>

            <div className='top'
                style={{
                    backgroundImage: `url(${marker.videoData[curVideoIdx].thumb})`,
                    backgroundSize: '100% 100%'
                }}
            >
                <div
                    className="close"
                    onClick={handleMarkerClick}
                    title="닫기"
                >
                </div>

                <h3>{marker.videoData[curVideoIdx].channel} |
                    {Math.round(marker.videoData[curVideoIdx].view / 10000 * 10) / 10}만 VIEWS</h3>
                <div className='nextPrevContainer'>
                    <img onClick={handlePrevVideo} src={PngLeftArrow} alt="이전" title='이전' />
                    <img onClick={handleNextVideo} src={PngRightArrow} alt="다음" title='다음' />
                </div>
                <div><button onClick={playVideo}>영상 시청</button></div>

            </div>

            <div className='bottom'>
                <div className='stick'></div>
                <div className='restaurantName'>{marker.restaurant_name}</div>
                <div>
                    <a href={marker.placeUrl} target="_blank" >
                        <img src={ShortcutBtn} />
                    </a>
                </div>
                <span className='plusButton' onClick={toggleList} >+</span>
                {showList && (
                    <div className='toggle' >
                        {findListData.map((item) => (
                            <div key={item.listId} onClick={() => handleListItemClick(item.listId, marker.restaurant_name)}>{item.listName}</div>
                        ))}
                    </div>
                )}
            </div>
        </div >
    );
};

export default Overlay;