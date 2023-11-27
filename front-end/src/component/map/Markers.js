import React, { useState } from 'react';
import { MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import Overlay from './Overlay';
import SubOverlay from './SubOverlay';
import '../../css/overlay.css'
import PngMarker from '../../img/unSelectedMarker.png'
import PngSelectedMarker from '../../img/selectedMarker.png'



const MapMarkerContainer = ({ marker, index }) => {
    const [isOver, setIsOver] = useState(false); //마커에 커서 올릴 때 관리
    const [isClick, setIsClick] = useState(false); //마커클릭 관리, 마커 클릭 시 오버레이 나오게

    const handleMarkerClick = () => { //마커 오버레이 관리 누르고 닫기
        setIsClick(!isClick);
        console.log("clicked", isClick);
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
        },
        // options: {
        //     offset: {
        //         x: 27,
        //         y: 69,
        //     }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
        // },
    }
    const ImgSelectedMarker = {
        src: PngSelectedMarker,
        size: {
            width: 36,
            height: 36,
        },
        // options: {
        //     offset: {
        //         x: 27,
        //         y: 69,
        //     }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
        // },
    }

    return (
        <div key={index}>
            <MapMarker
                position={marker.latlng}
                onClick={handleMarkerClick}
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={() => handleMouseOut(index)}
                image={isClick ? ImgSelectedMarker : ImgMarker}
            />
            {
                (isOver && !isClick) && (
                    <CustomOverlayMap position={marker.latlng}>
                        <SubOverlay marker={marker} />
                    </CustomOverlayMap>
                )
            }
            {
                isClick && (
                    <CustomOverlayMap zIndex={1} position={marker.latlng} >
                        <Overlay marker={marker} handleMarkerClick={handleMarkerClick} />
                    </CustomOverlayMap>
                )
            }
        </div >
    )
};

export default MapMarkerContainer;