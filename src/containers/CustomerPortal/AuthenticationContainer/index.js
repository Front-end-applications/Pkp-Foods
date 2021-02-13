import React, { useState } from "react";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";

import { AuthenticationForm } from "../../../components/customerPortal";
import * as SERVICES from "./AuthenticationServices";

export default function AuthenticationContainer() {

  const registerUserDetails = {
    username: "",
    email: "",
    password: ""
  }

  const signinUserDetails = {
    username: "",
    password: ""
  }

  const [toggle, setToggle] = useState(false);
  const [registerUser, setRegisterUser] = useState(registerUserDetails);
  const [signinUser, setSigninUser] = useState(signinUserDetails);

  console.log(signinUser);

  return (
    <AuthenticationForm>
      <AuthenticationForm.SigninContainer className={toggle && 'right-panel-active'}>
        <AuthenticationForm.Form>
          <AuthenticationForm.Title>Sign in</AuthenticationForm.Title>
          <AuthenticationForm.SocialLinks>
            <AuthenticationForm.Link>
              <FaFacebookF />
            </AuthenticationForm.Link>
            <AuthenticationForm.Link>
              <FaGooglePlusG />
            </AuthenticationForm.Link>
          </AuthenticationForm.SocialLinks>
          <AuthenticationForm.Text>or use your account</AuthenticationForm.Text>
          <AuthenticationForm.Input
            placeholder="Email"
            value={signinUser.username}
            onChange={(event) => SERVICES.handleSigninUsername(event, setSigninUser)}
          />
          <AuthenticationForm.Input
            type="password"
            placeholder="Password"
            value={signinUser.password}
            onChange={(event) => SERVICES.handleSigninPassword(event, setSigninUser)}
          />
          <AuthenticationForm.Link>Forgot your password?</AuthenticationForm.Link>
          <AuthenticationForm.Submit
            onClick={(event) => SERVICES.signinUser(event, signinUser, setSigninUser, signinUserDetails)}
          >Sign in</AuthenticationForm.Submit>
        </AuthenticationForm.Form>
      </AuthenticationForm.SigninContainer>

      <AuthenticationForm.SignupContainer className={toggle && 'right-panel-active'}>
        <AuthenticationForm.Form>
          <AuthenticationForm.Title>Create Account</AuthenticationForm.Title>
          <AuthenticationForm.SocialLinks>
            <AuthenticationForm.Link>
              <FaFacebookF />
            </AuthenticationForm.Link>
            <AuthenticationForm.Link>
              <FaGooglePlusG />
            </AuthenticationForm.Link>
          </AuthenticationForm.SocialLinks>
          <AuthenticationForm.Text>
            or use your email for registration
          </AuthenticationForm.Text>
          <AuthenticationForm.Input
            placeholder="User Name"
            value={registerUser.username}
            onChange={(event) => SERVICES.handleRegisterUsername(event, setRegisterUser)}
          />
          <AuthenticationForm.Input
            type="email"
            placeholder="Email"
            value={registerUser.email}
            onChange={(event) => SERVICES.handleRegisterEmail(event, setRegisterUser)}
          />
          <AuthenticationForm.Input
            type="password"
            placeholder="Password"
            value={registerUser.password}
            onChange={(event) => SERVICES.handleRegisterPassword(event, setRegisterUser)}
          />
          <AuthenticationForm.Submit
            onClick={(event) => SERVICES.registerUser(event, registerUser, setRegisterUser, registerUserDetails)}
          >Sign up</AuthenticationForm.Submit>
        </AuthenticationForm.Form>
      </AuthenticationForm.SignupContainer>

      <AuthenticationForm.OverlayContainer className={toggle && 'right-panel-active'}>
        <AuthenticationForm.Overlay className={toggle && 'right-panel-active'}>

          <AuthenticationForm.OverlayLeft className={toggle && 'right-panel-active'}>
            <AuthenticationForm.OverlayTitle>
              Welcome Back!
            </AuthenticationForm.OverlayTitle>
            <AuthenticationForm.Text>
              To keep connected with us login with your personal information.
            </AuthenticationForm.Text>
            <AuthenticationForm.Submit onClick={(event) => setToggle(false)}>Sign in</AuthenticationForm.Submit>
          </AuthenticationForm.OverlayLeft>

          <AuthenticationForm.OverlayRight className={toggle && 'right-panel-active'}>
            <AuthenticationForm.OverlayTitle>
              Hello, Friend!
            </AuthenticationForm.OverlayTitle>
            <AuthenticationForm.Text>
              Enter your personal details and start your journey with us.
            </AuthenticationForm.Text>
            <AuthenticationForm.Submit onClick={(event) => setToggle(true)}>Sign up</AuthenticationForm.Submit>
          </AuthenticationForm.OverlayRight>

        </AuthenticationForm.Overlay>
      </AuthenticationForm.OverlayContainer>
    </AuthenticationForm>
  );
}
