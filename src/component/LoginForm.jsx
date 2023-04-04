import  { useState } from 'react';
import axios from 'axios';

const LoginForm =()=> {
  const [username,setUsername]=useState('');
  const [password,setPassword] = useState('');
  const [error,setError]=useState('');

  const handleSubmit = async(e)=>{
    e.preventDefault();

    const authObject={ 'Project-ID': "93ef9453-32b0-4c1d-ac36-83c4cca9f4bd",'User-Name' : username, 'User-Secret':password}
    try{
        await axios.get('https://api.chatengine.io/chats',{ headers : authObject})

        localStorage.setItem('username',username);
        localStorage.setItem('password',password);

        window.location.reload();
    }catch(error){
        setError ('Wrong credentials.')
    }
  }
  return (
    <div className="wrapper">
        <div className='form'>
            <h1 className='title  '> Chat Application</h1>
            <form onSubmit={handleSubmit}>
            <input type='text'  value={username} placeholder='username' onChange={(e) =>setUsername(e.target.value)} className='input' required ></input>
            <input type='password'  value={password} placeholder='password' onChange={(e) =>setPassword(e.target.value)} className='input' required ></input>
            <div align="center">
                <button tupe="submit" className='button'>
                    <span> Start Chatting</span>
                </button>

            </div>
            <h2 className='error'>{error}</h2>
            </form>
        </div>
    </div>
  )
}

export default LoginForm