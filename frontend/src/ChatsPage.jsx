import React from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
   const projectId = "331e02f0-97d5-4998-b1fd-e0b980301e5f";

  if (!projectId) {
    console.error("REACT_APP_CHAT_ENGINE_PROJECT_ID is not defined");
    return <div>Error: Project ID is not defined</div>;
  }


  
  const { user } = props;

  if (!user || !user.username || !user.secret) {
    console.error("User details are not provided correctly");
    return <div>Error: User details are missing</div>;
  }

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={projectId}
        username={user.username}
        secret={user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;