import React from 'react';
import { MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import '../../css/overlay.css'
import markerImagePng from '../../img/marker.png'


const MapMarkerContainer = ({ marker, index, markerStates, handleMarkerClick }) => {
    return (
        <div key={index}>
            <MapMarker position={marker.latlng} onClick={() => handleMarkerClick(index)} />
            {
                markerStates[index] && (
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
                )
            }
        </div>
    )
};

export default MapMarkerContainer;