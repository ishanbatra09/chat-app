import { ChatEngine } from 'react-chat-engine';

import './App.css';

import ChatFeed from './component/chatFeed';
import LoginForm from './component/LoginForm';

const App = () =>{
    if(!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine
          height="100vh"
          projectID="93ef9453-32b0-4c1d-ac36-83c4cca9f4bd"
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={ (chatAppProps) => <ChatFeed {... chatAppProps}/>}
        />
    )
}
export default App;