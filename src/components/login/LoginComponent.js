import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLoginThunk, requestLogin, requestLogout } from "../../reducers/loginSlice";
import { useNavigate } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";

const initState = {
    username:'aaa1@email.com',
    password:'1111'
}

const LoginComponent = () => {

    const loginSlice = useSelector(state => state.login)

    const [loginInfo , setloginInfo] = useState({...initState})
    const [msg , setMsg] = useState()

    const nav = useNavigate()

    useEffect(() => {
        
        if( loginSlice.email ){
            nav("..")
        }

    },[loginSlice.loading])
    
    const handleChange = (e) => {

        loginInfo[e.target.name] = e.target.value
        setloginInfo({...loginInfo})
    }
    const dispatch = useDispatch()

    const handleLogin = async () => {
        // 로그인 성공 후에 할 작업을 수행
        try {
          const actionResult = await dispatch(postLoginThunk(loginInfo));
          const result = unwrapResult(actionResult);
          
          if(result.roleName === 'ADMIN'){

            console.log('Login successful:', result.roleName);
            

          }else{
            
            dispatch(requestLogout())
            nav("/login")
            console.log('대실패:', result.roleName);
            setMsg('권한이 없는 아이디 입니다.')
          }
        
        } catch (error) {
          console.error('Login error:', error);
          dispatch(requestLogout())
          nav("/login")
          console.log('대실패:', '초초 대실패');
          setMsg('아이디 또는 비밀번호가 틀렸습니다.')

          // 로그인 에러 처리
        }
    };



    

    // 에러미시지 추출
    const errorMsg = loginSlice.errorMsg

    return ( 
        <div className="m-auto mt-36 w-3/5">
                        
            {errorMsg ? <div className="text-3xl">이메일과 패스워드를 다시 확인해 주세요.</div> :<></> }

            <div className="m-8 ml-32 text-4xl pl-2">Login Page</div>
            <table className="m-auto">
                <tr>
                    <td>
                        <label>Email</label>
                    </td>
                    <td className="border-2 bg-white">
                        <input type="text" name="username" value={loginInfo.username} onChange={handleChange}></input>
                    </td>
                </tr>

                <tr>
                    <td>
                    </td>
                </tr>
                
                <tr>
                    <td>
                        <label>Password</label>
                    </td>
                    <td className="border-2 bg-white">
                        <input type="text" name="password" value={loginInfo.password} onChange={handleChange}></input>
                    </td>
                </tr>
                <tr>
                    <td className="">

                    </td>
                    <td className=" pt-2 pl-0">
                        {/* <button className="border-4 border-gray-600 p-2 rounded-xl" onClick={() => {dispatch(postLoginThunk(loginInfo)) }}> */}
                        <button className="border-4 border-gray-600 p-2 rounded-xl" onClick={handleLogin}>
                            Login
                        </button>
                        <button className="ml-2 border-4 border-gray-600 p-2 rounded-xl" onClick={() => { {} }}>
                            Sign up
                        </button>
                    </td>
                </tr>

            </table>

            <div className="">{loginSlice.loading ? 
            <div className="absolute top-0 bg-gray-100 w-full h-[100vh]" style={{left:"0px"}}>
                <div className="m-auto mt-80 w-20 h-20 border-8 border-b-slate-600 border-slate-300 rounded-full animate-spin"></div>
                <div className="m-auto w-32 h-32 mt-8">Loding.....</div>
            </div> : <div className="text-center text-red-600 mt-3" style={{fontSize:"20px"}}>{msg}</div>
            }
            </div> 
        </div>

     );
}
 
export default LoginComponent;