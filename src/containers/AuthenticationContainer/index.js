import React from "react";
import { FaFacebook, FaGooglePlus } from "react-icons/fa";

import { AuthenticationForm } from "../../components";

export default function AuthenticationContainer() {
  return (
    <AuthenticationForm>
      <AuthenticationForm.SigninContainer>
        <AuthenticationForm.Form>
          <AuthenticationForm.Title>Create Account</AuthenticationForm.Title>

          <AuthenticationForm.SocialLinks>
            <AuthenticationForm.Link>
              <FaFacebook />
            </AuthenticationForm.Link>
            <AuthenticationForm.Link>
              <FaGooglePlus />
            </AuthenticationForm.Link>
          </AuthenticationForm.SocialLinks>

          <AuthenticationForm.Text>
            or use your email for registration
          </AuthenticationForm.Text>
          <AuthenticationForm.Input />
          <AuthenticationForm.Input />
          <AuthenticationForm.Input />
          <AuthenticationForm.Submit>Sign up</AuthenticationForm.Submit>
        </AuthenticationForm.Form>
      </AuthenticationForm.SigninContainer>

      <AuthenticationForm.SignupContainer>
        <AuthenticationForm.Form>
          <AuthenticationForm.Title>Sign in</AuthenticationForm.Title>

          <AuthenticationForm.SocialLinks>
            <AuthenticationForm.Link>
              <FaFacebook />
            </AuthenticationForm.Link>
            <AuthenticationForm.Link>
              <FaGooglePlus />
            </AuthenticationForm.Link>
          </AuthenticationForm.SocialLinks>

          <AuthenticationForm.Text>or use your account</AuthenticationForm.Text>
          <AuthenticationForm.Input />
          <AuthenticationForm.Input />
          <AuthenticationForm.Link>
            Forgot your password?
          </AuthenticationForm.Link>
          <AuthenticationForm.Submit>Sign in</AuthenticationForm.Submit>
        </AuthenticationForm.Form>
      </AuthenticationForm.SignupContainer>

      <AuthenticationForm.OverlayContainer>
        <AuthenticationForm.Overlay>
          <AuthenticationForm.OverlayRight>
            <AuthenticationForm.OverlayPanel>
              <AuthenticationForm.OverlayTitle>
                Welcome Back!
              </AuthenticationForm.OverlayTitle>
              <AuthenticationForm.Text>
                To keep connected with us login with your personal information.
              </AuthenticationForm.Text>
              <AuthenticationForm.Submit>Sign in</AuthenticationForm.Submit>
            </AuthenticationForm.OverlayPanel>
          </AuthenticationForm.OverlayRight>

          <AuthenticationForm.OverlayLeft>
            <AuthenticationForm.OverlayPanel>
              <AuthenticationForm.OverlayTitle>
                Hello, Friend!
              </AuthenticationForm.OverlayTitle>
              <AuthenticationForm.Text>
                Enter your personal details and start your journey with us.
              </AuthenticationForm.Text>
              <AuthenticationForm.Submit>Sign in</AuthenticationForm.Submit>
            </AuthenticationForm.OverlayPanel>
          </AuthenticationForm.OverlayLeft>
        </AuthenticationForm.Overlay>
      </AuthenticationForm.OverlayContainer>
    </AuthenticationForm>
  );
}
