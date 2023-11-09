import markerImagePng from '../../img/marker.png'
import '../../css/overlay.css'
import { createElement } from 'react';

const { kakao } = window;

const imageSrc = markerImagePng// 마커이미지의 주소입니다    
const imageSize = new kakao.maps.Size(32, 36)// 마커이미지의 크기입니다
const imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
const markerPosition = new kakao.maps.LatLng(37.549186395086, 127.07505567644); // 마커가 표시될 위치입니다

const markerInfo = [
    {
        title: '세종대학교',
        latlng: new kakao.maps.LatLng(37.549186395086, 127.07505567644)
    },
];

// 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
const closeOverlay = () => {
    overlay.setMap(null);
}


var markerContent = '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    '            세종대학교 학식' +
    '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img">' +
    '                <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png" width="73" height="70">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' +
    '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' +
    '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

// const markerContent = () => {
//     const wrap = createElement('div');
//     wrap.classList("wrap");
//     const info = createElement('div');
//     info.classList("info");
//     const title = createElement('div');
//     title.classList("title");
//     const close = createElement('div');
//     close.classList("close");

//     const body = createElement('div');
//     body.classList("body");
//     const img = createElement('div');
//     img.classList("img");
//     const desc = createElement('div');
//     desc.classList("desc");
//     const ellipsis = createElement('div');
//     ellipsis.classList("ellipsis");
// }


// 마커를 생성합니다
export const marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage // 마커이미지 설정 

});

// 마커 위에 커스텀오버레이를 표시합니다
// 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
export const overlay = new kakao.maps.CustomOverlay({
    content: markerContent,
    position: marker.getPosition()
});

//marker를 하나의 함수로 만들어서, 



