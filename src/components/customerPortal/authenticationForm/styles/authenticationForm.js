import styled, { keyframes } from "styled-components/macro";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
  height: 85vh;
  margin: 2rem;
`;

export const Inner = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
`;

const show = keyframes`
  0%, 49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%, 100% {
    opacity: 1;
    z-index: 5;
  }
`;

export const SigninContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in;
  left: 0;
  width: 50%;
  z-index: 2;

  &.right-panel-active {
    transform: translateX(100%);
  }
`;

export const SignupContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in;

  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;

  &.right-panel-active {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: ${show} 0.6s;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  margin: 0;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

export const Form = styled.form`
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Input = styled.input`
  font-size: 12px;
  background: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

export const Link = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
  cursor: pointer;
`;

export const SocialLinks = styled.div`
  margin: 20px 0;

  & ${Link} {
    border: 1px solid #ddd;
    font-size: 18px;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 8px;
    height: 40px;
    width: 40px;
  }
`;

export const Submit = styled.button`
  border-radius: 20px;
  border: 1px solid #fff;
  background: #ff4b2b;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;

  :active {
    transform: scale(0.95);
  }

  :focus {
    outline: none;
  }
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;

  &.right-panel-active {
    transform: translateX(-100%);
  }
`;

export const Overlay = styled.div`
  background: #FF416C;
	background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
	background: linear-gradient(to right, #FF4B2B, #FF416C);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
  transform: translateX(0);
	transition: transform 0.6s ease-in-out;

  &.right-panel-active {
  	transform: translateX(50%);
  }
`;

export const OverlayTitle = styled.h1``;

export const OverlayRight = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;

  right: 0;
	transform: translateX(0);

  ${Submit} {
    background: transparent;
    border-color: #fff;
  }

  &.right-panel-active {
    transform: translateX(20%);
  }
`;

export const OverlayLeft = styled.div`
  position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;

  transform: translateX(-20%);

  ${Submit} {
    background: transparent;
    border-color: #fff;
  }

  &.right-panel-active {
    transform: translateX(0);
  }
`;
