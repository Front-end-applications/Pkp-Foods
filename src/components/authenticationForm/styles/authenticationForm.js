import styled from "styled-components/macro";

export const Container = styled.div`
  box-sizing: border-box;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85vh;
  margin: 2rem;
`;

export const Inner = styled.div`
  backgoround: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
`;

export const SigninContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in;

  left: 0;
  width: 50%;
  z-index: 2;
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
`;

export const SocialLinks = styled.div`
  margin: 20px 0;

  & ${Link} {
    cursor: pointer;
    border: 1px solid #ddd;
    font-size: 42px;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
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
  width: 100%;
  height: 100%;
  overflow: hidden;
  transtition: transform 0.6s ease-in-out;
  z-index: 100;
`;

export const Overlay = styled.div`
  background: #ff416c;
  background: linear-gradient(to right, #ff4b2b, #ff416c) no-repeat 0 0 / cover;
  color: #fff;
  position: relative;
  left: 0%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const OverlayTitle = styled.h1``;

export const OverlayPanel = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;

  ${Submit} {
    background: transparent;
    border-color: #fff;
  }
`;

export const OverlayRight = styled.div``;

export const OverlayLeft = styled.div``;
