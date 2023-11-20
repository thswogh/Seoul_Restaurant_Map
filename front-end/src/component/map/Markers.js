import React, { useState } from 'react';
import { MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import Overlay from './Overlay';
import '../../css/overlay.css'
import PngMarker from '../../img/unSelectedMarker.png'
import PngSelectedMarker from '../../img/selectedMarker.png'



const MapMarkerContainer = ({ marker, index }) => {
    const [isOver, setIsOver] = useState(false); //마커에 커서 올릴 때 관리
    const [isClick, setIsClick] = useState(false); //마커클릭 관리, 마커 클릭 시 오버레이 나오게

    const handleMarkerClick = () => { //마커 오버레이 관리 누르고 닫기
        setIsClick(!isClick);
        console.log("clicked");
    };
    const handleMouseOver = (index) => {
        console.log(index, 'Mouse over');
        setIsOver(true);
    };

    const handleMouseOut = (index) => {
        console.log(index, 'Mouse out');
        setIsOver(false);
    };
    const ImgMarker = {
        src: PngMarker,
        size: {
            width: 26,
            height: 26,
        }
    }
    const ImgSelectedMarker = {
        src: PngSelectedMarker,
        size: {
            width: 36,
            height: 36,
        }
    }

    return (
        <div key={index}>
            <MapMarker
                position={marker.latlng}
                onClick={handleMarkerClick}
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={() => handleMouseOut(index)}
                image={isClick ? ImgSelectedMarker : ImgMarker}
            >
                {
                    isOver && !isClick && (
                        <CustomOverlayMap position={marker.latlng}>
                            <div className='info-title'>{marker.restaurant_name}</div>
                        </CustomOverlayMap>
                    )
                }
                {
                    isClick && (
                        <CustomOverlayMap position={marker.latlng} >
                            {/* <div className="wrap">
                                <div className="info">
                                    <div className="title">
                                        {marker.restaurant_name}
                                        <div
                                            className="close"
                                            onClick={handleMarkerClick}
                                            title="닫기"
                                        ></div>
                                    </div>
                                    <div className="body">
                                        <div className="img">
                                            <a href={marker.placeUrl} target="_blank" rel="noreferrer">
                                                <img
                                                    src={marker.videoData[0].thumb}
                                                    width="73"
                                                    height="70"
                                                    alt="카카오 스페이스닷원"
                                                />
                                            </a>
                                        </div>
                                        <div className="desc">
                                            <div className="ellipsis">
                                                {marker.videoData[0].channel}
                                            </div>
                                            <div className="ellipsis">
                                                {Math.round(marker.videoData[0].view / 10000 * 10) / 10}만 VIEWS
                                            </div>
                                            <div className="jibun ellipsis">
                                                {marker.address}
                                            </div>
                                            <div>
                                                <a
                                                    href={marker.placeUrl}
                                                    target="_blank"
                                                    className="link"
                                                    rel="noreferrer"
                                                >
                                                    주소 바로가기
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <Overlay marker={marker} handleMarkerClick={handleMarkerClick} />
                        </CustomOverlayMap>
                    )
                }

            </MapMarker>
        </div >
    )
};

export default MapMarkerContainer;

// <CustomOverlayMap position={marker.latlng} >
//                         <div className="wrap">
//                             <div className="info">
//                                 <div className="title">
//                                     {marker.restaurant_name}
//                                     <div
//                                         className="close"
//                                         onClick={() => handleMarkerClick()}
//                                         title="닫기"
//                                     ></div>
//                                 </div>
//                                 <div className="body">
//                                     <div className="img">
//                                         <a href={marker.placeUrl} target="_blank" rel="noreferrer">
//                                             <img
//                                                 src={marker.videoData[0].thumb}
//                                                 width="73"
//                                                 height="70"
//                                                 alt="카카오 스페이스닷원"
//                                             />
//                                         </a>
//                                     </div>
//                                     <div className="desc">
//                                         <div className="ellipsis">
//                                             {marker.videoData[0].channel}
//                                         </div>
//                                         <div className="ellipsis">
//                                             {Math.round(marker.videoData[0].view / 10000 * 10) / 10}만 VIEWS
//                                         </div>
//                                         <div className="jibun ellipsis">
//                                             {marker.address}
//                                         </div>
//                                         <div>
//                                             <a
//                                                 href={marker.placeUrl}
//                                                 target="_blank"
//                                                 className="link"
//                                                 rel="noreferrer"
//                                             >
//                                                 주소 바로가기
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </CustomOverlayMap>