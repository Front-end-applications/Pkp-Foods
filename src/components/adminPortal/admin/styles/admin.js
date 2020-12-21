import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
    background: #f4f4fb;
    padding: 3rem;
    font-family: sans-serif;
    font-size: 16px;
`;

export const Inner = styled.div`
    height: 100%;
`;

export const Tabs = styled.nav`

`;

export const Tab = styled.div`
    height: 36px;
    position: relative;
    top: 10px;
    background-color: #FcFcfc;
    left: 21px;
    display: inline-block;
    z-index: 2;
    margin-right:50px;
    color: #A3B4C9;
    cursor: pointer;

    &:hover {
        z-index: 3;
        color: #788EAB;
        background-color: #FFF;

        &:before,&:after {
            background-color: #FFF;
        }
    }

    &:before {
        height: 36px;
        width: 30px;
        border-radius: 10px 10px 0px 0px;
        background-color: #FcFcfc;
        content: "";
        position: absolute;
        left: -20px;
        top: 0px;
        z-index: -1;
    }

    &:after {
        height: 36px;
        width: 30px;
        border-radius: 10px 10px 0px 0px;
        background-color: #FcFcfc;
        content: "";
        position: absolute;
        right: -20px;
        top: 0px;
        -webkit-transform: skewX(20deg);
        transform: skewX(20deg);
        z-index: -1;
    }
`;

export const TabTitle = styled(ReactRouterLink)`
    display: inline-block;
    margin-left: 8px;
    margin-right: 8px;
    height: 36px;
    line-height: 40px;
    z-index: 3;
    font-size: 14px;
    font-weight: bold;
    outline: none;
    text-decoration: none;
`;

export const Page = styled.div`
    background-color: white;
    position: relative;
    top: 10px;
    left: 1px;
    padding: 30px;
    margin-bottom: 30px;
    border-radius: 0 10px 10px 10px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
`;