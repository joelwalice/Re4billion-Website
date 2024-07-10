import React, { useEffect, useState } from 'react';
import Solar from '../images/solar-bg.jpg';
import Logo from '../images/re4billion.png';
import axios from 'axios';
import Cookies from 'js-cookie';

const Login = () => {
  const [email, setEmail] = useState('');
  const [PasswordType, setPasswordType] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Cookies.get('token')) {
      if (Cookies.get("role") === "Admin") {
        window.location.href = "/admin/";
      }
      if (Cookies.get("role") === "User") {
        window.location.href = "/user/";
      }
    }
  }, [])

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Enter all the fields");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_HOST}/login`, { email, password });
      const token = response.data.data.token;
      const role = response.data.data.role;
      Cookies.set('token', token, { expires: 7 });
      Cookies.set('role', role, { expires: 7 });
      if (role === "Admin") {
        window.location.href = "/admin";
      }
      if (role === "User") {
        const location = response.data.data.location;
        Cookies.set('selectedItem', password);
        Cookies.set('selectedLocation', location);
        window.location.href = "/user";
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setError('Invalid login credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover w-full"
      style={{ backgroundImage: `url(${Solar})` }}
    >
      <div className='flex flex-col items-center justify-center w-[400px] md:w-[400px] lg:w-[500px] min-h-[450px] bg-[#282250] backdrop-filter backdrop-blur-lg bg-opacity-80 shadow-lg rounded-lg p-4 '>
        <div className='flex flex-col gap-4 items-center'>
          <img src={Logo} className='max-w-[250px] rounded-lg' alt="" />
          <h1 className='flex text-white text-2xl'>Login Page</h1>
          <p className="text-orange-500 font-semibold">{error}</p>
          <div className="text-white flex items-center shadow-lg w-full bg-[#282250] rounded-lg">
            <span className="bg-[#FFC312] p-3 rounded-l-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-7">
                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
              </svg>
            </span>
            <input
              type="text"
              required
              placeholder="username"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(''); }}
              className='p-3 bg-[#282250] focus:outline-none text-xl rounded-r-lg text-white'
            />
          </div>
          <div className="text-white flex items-center shadow-lg">
            <span className="bg-[#FFC312] p-3 rounded-l-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-7">
                <path fillRule="evenodd" d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z" clipRule="evenodd" />
              </svg>
            </span>
            <div className='w-full flex items-center bg-[#282250] rounded-lg shadow-lg'>
              <input
                type={`${PasswordType ? 'text' : 'password'}`}
                required
                placeholder="Password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                className='p-3 bg-[#282250] focus:outline-none text-xl rounded-r-lg text-white'
              />
              {
                PasswordType ? <div className='cursor-pointer px-2' onClick={() => setPasswordType(!PasswordType)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg></div> : <div className='cursor-pointer px-2' onClick={() => setPasswordType(!PasswordType)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg></div>

              }
            </div>
          </div>
          <div className="w-full p-4">
            <div className='flex items-center justify-center w-full'>
              <button onClick={handleLogin} className="flex p-2 text-2xl bg-[#FFC312] rounded font-semibold">
                {loading ? 'Loading...' : 'Login'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
