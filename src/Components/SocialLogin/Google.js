import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import theme from "../../Styles/Theme";
import axios from "axios";
import { googleLoginAPI } from "../../config";

function Google() {
  const googleLoginBtn = useRef(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    googleSDK();
  }, []);

  const googleSDK = () => {
    window.googleSDKLoaded = () => {
      console.log(window.gapi);
      window.gapi.load("auth2", () => {
        const auth2 = window.gapi.auth2.init({
          client_id:
            "347610267573-8r3r698evj630v56r5bes4q6dks1rqf0.apps.googleusercontent.com",
          scope: "profile email",
        });

        auth2.attachClickHandler(
          googleLoginBtn.current,
          {},
          (googleUser) => {
            const profile = googleUser.getBasicProfile();
            console.log(profile);
            console.log(googleUser.getAuthResponse());
            console.log(`Token || ${googleUser.getAuthResponse().id_token}`);
            setToken(googleUser.getAuthResponse().id_token);
            console.log(`ID: ${profile.getId()}`);
            console.log(`Name: ${profile.getName()}`);
            console.log(`Image URL: ${profile.getImageUrl()}`);
            console.log(`Email: ${profile.getEmail()}`);
            GoogleApiPOST(googleUser.getAuthResponse().id_token);
          },
          (error) => {
            alert(JSON.stringify(error, undefined, 2));
          }
        );
      });
    };
    (function (d, s, id) {
      let js;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "google-jssdk");
  };

  const GoogleApiPOST = (token) => {
    axios
      .get(`${googleLoginAPI}/google`, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        alert("로그인 되었습니다");
      })
      .catch((error) => alert("Error:", error));
  };

  return (
    <GoogleBtn id="gSignInWrapper">
      <span class="label" />
      <div ref={googleLoginBtn} id="customBtn" className="customGPlusSignIn">
        <span className="icon"></span>
        <span className="buttonText">Login with Google</span>
      </div>
    </GoogleBtn>
  );
}

export default Google;

const GoogleBtn = styled.div`
  #customBtn {
    width: 100%;
    height: 50px;
    border: none;
    margin-bottom: 3px;
    padding-left: 4%;
    display: flex;
    align-items: center;
    background-color: #dd4b39;
  }

  #customBtn:hover {
    cursor: pointer;
  }

  span.label {
    font-family: ${theme.fontContent};
    font-weight: normal;
  }

  span.icon {
    width: 100%;
    background: url("/images/google2.png");
    background-size: 120%;
    background-position: center;
    display: inline-block;
    vertical-align: middle;
    width: 42px;
    height: 42px;
  }

  span.buttonText {
    font-family: ${theme.fontContent};
    font-size: 16px;
    font-weight: bold;
    color: ${theme.white};
  }
`;
