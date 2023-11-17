import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk"
import React, { useEffect, useRef, useState } from 'react';
import { MarkerPosition } from "../../data/MarkerPositions";
import axios from 'axios';
import OrangeBtn from '../common/OrangeBtn';
import markerImagePng from '../../img/marker.png'
import '../../css/map.css'
import '../../css/overlay.css'
import { joinPaths } from "@remix-run/router";


const BasicMap = () => {
    const [coordinates, setCoordinates] = useState(null); // 현재 위치의 좌표값을 저장할 상태
    const mapRef = useRef();
    const [markers, setMarkers] = useState(MarkerPosition);
    const [renderedContent, setRenderedContent] = useState(null);
    const config = {
        headers: {
            "Content-Type": "application/json", // 예시로 Content-Type 헤더를 추가했습니다.
        },
    };

    const [markerStates, setMarkerStates] = useState([]); //마커들의 상태 관리
    const handleMarkerClick = (index) => { //마커 오버레이 관리 누르고 닫기
        const newMarkerStates = [...markerStates];
        newMarkerStates[index] = !newMarkerStates[index];
        setMarkerStates(newMarkerStates);
    };


    //현재 지도 영역 얻어와서, 서버에 보내 지도 내에 marker 찍는 함수
    const GetMapBound = async () => {
        const map = mapRef.current;
        const bounds = map.getBounds(); //지도 현재 영역 얻어온다
        const swLatLng = bounds.getSouthWest(); //남서쪽 좌표
        const neLatLng = bounds.getNorthEast(); //북동쪽 좌표

        let x_start = swLatLng.getLng();
        let x_end = neLatLng.getLng();
        let y_start = swLatLng.getLat();
        let y_end = neLatLng.getLat();

        try {
            const response = await axios.get('http://35.216.106.118:8080/home/search', {
                params: {
                    x_start: x_start,
                    x_end: x_end,
                    y_start: y_start,
                    y_end: y_end,
                }
            }, config);
            setMarkers(response.data);
        } catch (error) {
            alert('서버 오류입니다. 관리자에게 문의하세요.');
            console.error(error);
            return false;
        };
    }

    // useEffect(() => {
    //     const newRenderedContent = markers.map((marker, index) => (
    //         <div key={index}>
    //             <MapMarker position={marker.latlng} onClick={() => handleMarkerClick(index)} />
    //             {markerStates[index] && (
    //                 <CustomOverlayMap position={marker.latlng}>
    //                     <div className="wrap">
    //                         <div className="info">
    //                             <div className="title">
    //                                 {marker.restaurant_name}
    //                                 <div
    //                                     className="close"
    //                                     onClick={() => handleMarkerClick(index)}
    //                                     title="닫기"
    //                                 ></div>
    //                             </div>
    //                             <div className="body">
    //                                 <div className="img">
    //                                     <img
    //                                         src={marker.thumbnail}
    //                                         width="73"
    //                                         height="70"
    //                                         alt="카카오 스페이스닷원"
    //                                     />
    //                                 </div>
    //                                 <div className="desc">
    //                                     <div className="ellipsis">
    //                                         {marker.address}
    //                                     </div>
    //                                     <div className="jibun ellipsis">
    //                                         {marker.view / 10000}만 VIEWS
    //                                     </div>
    //                                     <div>
    //                                         <a
    //                                             href={marker.placeUrl}
    //                                             target="_blank"
    //                                             className="link"
    //                                             rel="noreferrer"
    //                                         >
    //                                             주소 바로가기
    //                                         </a>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </CustomOverlayMap>
    //             )}
    //         </div>
    //     ));

    //     // renderedContent 업데이트
    //     console.log("markers", markers);
    //     setRenderedContent(newRenderedContent);
    // }, [markers]);


    return (
        <div div className={"mapContainer"} >
            <Map id="map" center={{ lat: 37.549186395087, lng: 127.07505567644, }}
                style={{ width: "100%", height: "100%", }}
                level={3}
                ref={mapRef}
            >
                {/* {renderedContent} */}
                {markers.map((marker, index) => (
                    <div key={index}>
                        <MapMarker position={marker.latlng} onClick={() => handleMarkerClick(index)} />
                        {markerStates[index] && (
                            <CustomOverlayMap position={marker.latlng}>
                                <div className="wrap">
                                    <div className="info">
                                        <div className="title">
                                            {marker.restaurant_name}
                                            <div
                                                className="close"
                                                onClick={() => handleMarkerClick(index)}
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
                                </div>
                            </CustomOverlayMap>
                        )}
                    </div>
                ))};
            </Map>
            {console.log("markers", markers)};
            <div className={"RightDown"}>
                <OrangeBtn onClick={GetMapBound} />
            </div>
        </div>
    )


}

export default BasicMap;