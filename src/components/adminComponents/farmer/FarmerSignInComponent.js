import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { requestLogout } from "../../../reducers/loginSlice";

const FarmerSigInComponent = () => {

    const {email , nickname} = useSelector(state => state.login)

    const navigate = useNavigate();
    const dispach = useDispatch();

    console.log("로그인 네비게이션 가기전에 확인" , email, nickname)

    const handleLogOut = () => {

        dispach(requestLogout())
        navigate("/login")

    }


    if(email !== ''){
        return (
        <div>
            {nickname} 님 환영합니다.
      
          <button
          onClick={handleLogOut}
          className="border-gray-400 m-3 mt-7 p-1 border-2 rounded-md
          hover:bg-black hover:text-white text-center text-sm">
          LogOut
      </button>
      </div>
        )
    }
    



    return (  
        <></>
    );
}
 
export default FarmerSigInComponent;