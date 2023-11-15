// import React, { useEffect, useRef, useState } from 'react';
// import { marker, overlay } from './Marker';
// import axios from 'axios';
// import OrangeBtn from '../common/OrangeBtn';
// import '../../css/map.css'

// const { kakao } = window; // kakao maps api를 심어서 가져오면 window전역 객체에 들어가게 됨. window객체에서 kakao를 뽑아야지 카카오 api 에서 사용하는 변수들을 리엑트가 알 수 있다. 

// const Map = () => {
//     const [map, setmap] = useState();

//     //지도 위치
//     const [position, setPosition] = useState({
//         x: 37.549186395087,
//         y: 127.07505567644,
//     });
//     const positionHandler = (newX, newY) => {
//         setPosition({
//             x: newX,
//             y: newY,
//         });
//     }
//     //마커 위치
//     const [markerPosition, setMarkerPostion] = useState({
//         x: 37.549186395086,
//         y: 127.07505567644,
//     })
//     const markerPositionHandler = (newX, newY) => {
//         setMarkerPostion({
//             x: newX,
//             y: newY,
//         })
//     };

//     const mapControl = (map, options) => {
//         // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
//         const mapTypeControl = new kakao.maps.MapTypeControl();
//         // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
//         // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
//         map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
//         // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
//         const zoomControl = new kakao.maps.ZoomControl();
//         map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
//     }

//     // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
//     const closeOverlay = () => {
//         overlay.setMap(null);
//         console.log("overlay", overlay);
//     }

//     const overlayControl = () => {
//         // 마커를 클릭했을 때 커스텀 오버레이를 표시
//         kakao.maps.event.addListener(marker, 'click', function () {
//             overlay.setMap(map);
//         });
//     };


//     const getMapBound = async () => {
//         const bounds = map.getBounds(); //지도 현재 영역 얻어온다
//         const swLatLng = bounds.getSouthWest(); //남서쪽 좌표
//         const neLatLng = bounds.getNorthEast(); //북동쪽 좌표

//         let x_start = swLatLng.getLng();
//         let x_end = swLatLng.getLat();
//         let y_start = neLatLng.getLng();
//         let y_end = neLatLng.getLat();
//         console.log(x_start, x_end, y_start, y_end);

//         try {
//             const response = await axios.get('http://35.216.106.118:8080/home/search', {
//                 parmas: {
//                     x_start: x_start,
//                     x_end: x_end,
//                     y_start: y_start,
//                     y_end: y_end,
//                 }
//             });
//             console.log(response);
//         } catch (error) {
//             alert('서버 오류입니다. 관리자에게 문의하세요.');
//             console.error(error);
//             return false;
//         };
//     }

//     const mapContainer = useRef(null);
//     const options = {
//         center: new kakao.maps.LatLng(position.x, position.y),
//         level: 3,
//     };

//     useEffect(() => {
//         const m = new kakao.maps.Map(mapContainer.current, options);
//         setmap(m);
//     }, []);

//     useEffect(() => {
//         marker.setMap(map);
//         overlayControl(map);
//         closeOverlay();
//         // mapControl(map, options);
//     }, [map, marker])

//     return (
//         <div className={"mapContainer"}>
//             <div id="myMap" ref={mapContainer} style={{ width: '100%', height: '100%' }}></div>

//             <div className={"RightDown"}>
//                 <OrangeBtn onClick={getMapBound} />
//             </div>
//         </div>
//     );
// }

// export default Map;

import { Map, MapMarker } from "react-kakao-maps-sdk"
import React, { useEffect, useRef, useState } from 'react';
import { MarkerPositions } from "../../data/MarkerPositions";
import { marker, overlay } from './Marker';
import axios from 'axios';
import OrangeBtn from '../common/OrangeBtn';
import markerImagePng from '../../img/marker.png'
import '../../css/map.css'


const BasicMap = () => {
    const [coordinates, setCoordinates] = useState(null); // 현재 위치의 좌표값을 저장할 상태
    const mapRef = useRef();
    const [info, setInfo] = useState()
    const [markers, setMarkers] = useState(MarkerPositions);


    //현재 지도 영역 얻어와서, 서버에 보내 지도 내에 marker 찍는 함수
    const getMapBound = async () => {
        const map = mapRef.current;
        const bounds = map.getBounds(); //지도 현재 영역 얻어온다
        const swLatLng = bounds.getSouthWest(); //남서쪽 좌표
        const neLatLng = bounds.getNorthEast(); //북동쪽 좌표

        let x_start = swLatLng.getLng();
        let x_end = swLatLng.getLat();
        let y_start = neLatLng.getLng();
        let y_end = neLatLng.getLat();
        console.log(x_start, x_end, y_start, y_end);

        try {
            const response = await axios.get('http://35.216.106.118:8080/home/search', {
                parmas: {
                    x_start: x_start,
                    x_end: x_end,
                    y_start: y_start,
                    y_end: y_end,
                }
            });
            console.log(response);
        } catch (error) {
            alert('서버 오류입니다. 관리자에게 문의하세요.');
            console.error(error);
            return false;
        };
    }

    return (
        <div className={"mapContainer"}>
            <Map id="map" center={{ lat: 33.450701, lng: 126.570667, }}
                style={{ width: "100%", height: "100%", }}
                level={3}
                ref={mapRef}
            >
                {markers.map((marker, idx) => (
                    <MapMarker
                        // key={`${loc.title}-${loc.latlng}`}
                        position={marker.latlng}
                        image={{
                            src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
                            size: { width: 24, height: 35 },
                        }}
                        title={marker.title}
                    />
                ))}
            </Map>
            <div className={"RightDown"}>
                <OrangeBtn onClick={getMapBound} />
            </div>
        </div>


    )
}

export default BasicMap;
