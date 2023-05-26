import { useContext, useEffect } from "react";
import { Dialog, styled, Box } from "@mui/material";

import { UserContext } from "../../context/UserProvider";

//components
import Menu from "./menu/Menu";
import ChatBox from "./chat/ChatBox";
import EmptyChat from "./chat/EmptyChat";

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)`
  min-width: 450px;
`;

const RightComponent = styled(Box)`
  width: 73%;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const dialogStyle = {
  height: "100vh",
  position: "relative",
  width: "100%",
  top:"30px",
  margin: "20px",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "6px",
  boxShadow: "none",
  overflow: "hidden",
  backgroundColor: "#FFD9EB",
  transition: "top 0.5s ease-in",
};

const ChatDialog = () => {
  const { person } = useContext(UserContext);

 

  return (
    <Dialog
      open={true}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
      PaperProps={{ sx: dialogStyle }}
      maxWidth={"md"}
      
    >
      <Component  >
        <LeftComponent>
          <Menu />
        </LeftComponent>
        <RightComponent>
          {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
        </RightComponent>
      </Component>
    </Dialog>
  );
};

export default ChatDialog;
