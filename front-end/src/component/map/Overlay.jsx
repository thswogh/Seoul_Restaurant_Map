import React, { useState } from 'react';
import '../../css/overlay.css'
import PngLeftArrow from '../../img/LeftArrow.png'
import PngRightArrow from '../../img/RightArrow.png'
import ShortcutIcon from '../../img/ShortcutIcon.png'
import ShortcutBtn from '../../img/shortcutBtn.png'

const Overlay = ({ marker, handleMarkerClick }) => {
    const [curVideoIdx, setCurVideoIdx] = useState(0);
    const handleNextVideo = () => {
        setCurVideoIdx((prevIdx) => (prevIdx + 1) % marker.videoData.length);
    };
    const handlePrevVideo = () => {
        setCurVideoIdx((prevIdx) => (prevIdx - 1 + marker.videoData.length) % marker.videoData.length);
    }

    return (
        <div className='wrap'>
            <div className='top'
                style={{
                    backgroundImage: `url(${marker.videoData[curVideoIdx].thumb})`,
                    backgroundSize: '100% 100%'
                }}>
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
            </div>

            <div className='bottom'>
                <div className='stick'></div>
                <div className='restaurantName'>{marker.restaurant_name}</div>
                <a href={marker.placeUrl} target="_blank" >
                    <img src={ShortcutBtn} />
                </a>
            </div>
        </div >
    );
};

export default Overlay;