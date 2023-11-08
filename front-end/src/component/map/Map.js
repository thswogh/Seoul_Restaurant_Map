import React, { useEffect, useState } from 'react';
import { marker, overlay } from './Marker';

const { kakao } = window; // kakao maps api를 심어서 가져오면 window전역 객체에 들어가게 됨. window객체에서 kakao를 뽑아야지 카카오 api 에서 사용하는 변수들을 리엑트가 알 수 있다. 

const Map = () => {
    console.log(marker);
    console.log("overlay", overlay);
    //지도 위치
    const [position, setPosition] = useState({
        x: 37.549186395087,
        y: 127.07505567644,
    });
    const positionHandler = (newX, newY) => {
        setPosition({
            x: newX,
            y: newY,
        });
    }
    //마커 위치
    const [markerPosition, setMarkerPostion] = useState({
        x: 37.549186395086,
        y: 127.07505567644,
    })
    const markerPositionHandler = (newX, newY) => {
        setMarkerPostion({
            x: newX,
            y: newY,
        })
    };

    const mapControl = (map, options) => {
        // console.log("map", map);
        // console.log("options", options);
        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        const mapTypeControl = new kakao.maps.MapTypeControl();
        // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
        // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        const zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    }

    // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
    function closeOverlay() {
        overlay.setMap(null);
    }

    const overlayControl = (map) => {
        // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
        kakao.maps.event.addListener(marker, 'click', function () {
            overlay.setMap(map);
        });
    };

    const isChangeMap = (map) => {
        kakao.maps.event.addListener(map, 'center_changed', function () {
            alert('center changed!');
        });
    };


    useEffect(() => {
        const container = document.getElementById('myMap');
        const options = {
            center: new kakao.maps.LatLng(position.x, position.y),
            level: 3,
        };
        const map = new kakao.maps.Map(container, options);
        mapControl(map, options);
        marker.setMap(map);
        overlayControl(map);
        // isChangeMap(map);
    }, []);

    return (
        <div id='myMap' style={{
            width: '100%',
            height: '100%'
        }}></div>
    );
}

export default Map; 