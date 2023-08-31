import { Outlet } from "react-router-dom";
import AdminHeaderComponent from "../components/adminComponents/AdminHeaderComponent";
import Footer from "../components/commonComponents/Footer";
import BasicLayout from "../layouts/BasicLayout";
import { useEffect } from "react";

const MainPage = () => {

    // useEffect(() => {

    //     if(getCookis("login")) -> 

    // }, [queryObj])

    return ( 
        <div className="container m-auto">
            <div className="">
                <AdminHeaderComponent></AdminHeaderComponent>
                <div>
                <BasicLayout>
                    <div className="bg-white">
                        <Outlet></Outlet>
                    </div>
                </BasicLayout>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
}
 
export default MainPage;