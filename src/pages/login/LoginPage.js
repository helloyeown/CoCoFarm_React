import LoginComponent from "../../components/login/LoginComponent";
import BasicLayout from "../../layouts/BasicLayout";


const LoginPage = () => {
    return ( 

        <BasicLayout>
            {/* <div> Login Page </div> */}
            <LoginComponent></LoginComponent>
            {/* <KakaoLoginComponent></KakaoLoginComponent> */}
        </BasicLayout>

     );
}
 
export default LoginPage;