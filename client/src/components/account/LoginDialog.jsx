import { useContext } from "react";

import { Dialog, Typography, List, ListItem, Box, styled } from "@mui/material";

import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

import { addUser } from "../../service/api";
import { AccountContext } from "../../context/AccountProvider";
import { qrCodeImage } from "../../constants/data";
import "./LoginDialog.css";

const Component = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const QRCOde = styled("img")({
  margin: "50px 0 0 50px",
  height: 264,
  width: 264,
});

const Title = styled(Typography)`
  font-size: 26px;
  margin-bottom: 25px;
  color: #525252;
  font-family: Segoe UI, Helvetica Neue, Helvetica, Lucida Grande, Arial, Ubuntu,
    Cantarell, Fira Sans, sans-serif;
  font-weight: 300;
`;

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
`;

const dialogStyle = {
  marginTop: "12%",
  height: "95%",
  width: "60%",
  maxWidth: "100",
  maxHeight: "100%",
  borderRadius: 0,
  boxShadow: "none",
  overflow: "hidden",
};

const LoginDialog = () => {
  const {
    setAccount,
    showloginButton,
    setShowloginButton,
    setShowlogoutButton,
  } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    let decoded = jwt_decode(res.credential);
    setAccount(decoded);
    setShowloginButton(false);
    setShowlogoutButton(true);
    await addUser(decoded);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  // const onSignoutSuccess = () => {
  //     alert("You have been logged out successfully");
  //     console.clear();
  //     setShowloginButton(true);
  //     setShowlogoutButton(false);
  // };

  return (
    <>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src="/logo.png" alt="" />
        </div>
        <div className="section1">
          <div style={{ display: "flex", alignItems: "center" }}>
            <p className="heading">BIT connections</p>
          </div>
          {showloginButton ? (
            <div style={{display:"flex",alignItems:"center",}} >
              <div >
                <button className="official-button" >
                    Log in 
                </button>
                <div className="innerSection">
                <GoogleLogin
                  buttonText=""
                  onSuccess={onLoginSuccess}
                  onError={onLoginFailure}
                />
              </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default LoginDialog;
