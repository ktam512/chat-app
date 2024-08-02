import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '331e02f0-97d5-4998-b1fd-e0b980301e5f',
        props.user.username,
        props.user.secret);
    return (
    <div style = {{height: '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style = {{height: '100%'}}/>
    </div>
    )
  };
  export default ChatsPage;