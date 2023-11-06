import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    margin: 0;
    display: flex;
    padding-top: 10px;
    height: 50px;
    align-items: center;
    /* background-color: gainsboro; */
`;

const Logo = styled.div`
    font-size: 25px;
    font-weight: 600;
    color: #FF7A00;
    margin-left: 20px;
    margin-right: 70px;
`;

const MenuItem = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s;
    ${(props) =>
        props.active &&
        `
    color: #FF7A00;
    transform: scale(1.01);
    `}
`;

const Header = () => {
    // const [menuIndex, setMenuIndex] = useState(0);

    // const handleMenuClick = (menuIndex) => {
    //     setMenuIndex(menuIndex);
    // };

    return (
        // <HeaderContainer>
        //     <Logo>Mat Zip</Logo>
        //     <MenuItem active={menuIndex === 0} onClick={() => handleMenuClick(0)}>
        //         지도 홈
        //     </MenuItem>
        //     <MenuItem active={menuIndex === 1} onClick={() => handleMenuClick(1)}>
        //         나의 Mat Zip
        //     </MenuItem>
        //     <MenuItem active={menuIndex === 2} onClick={() => handleMenuClick(2)}>
        //         Mat Zip 요청
        //     </MenuItem>
        //     <MenuItem active={menuIndex === 3} onClick={() => handleMenuClick(3)}>
        //         건의사항
        //     </MenuItem>


        // </HeaderContainer>
        <HeaderContainer>
            <Logo>Mat Zip</Logo>
            <MenuItem>
                <NavLink to="/">
                    지도 홈
                </NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink to="/list">
                    나의 Mat Zip
                </NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink to="/request">
                    Mat Zip 요청
                </NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink to="/question">
                    건의사항
                </NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink to="/loing">
                    Login
                </NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink to="/join">
                    Join
                </NavLink>
            </MenuItem>
        </HeaderContainer>
    );
};

export default Header;
