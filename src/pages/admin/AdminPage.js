import { useState } from "react";

import CenterBoardComponent from "../../components/adminComponents/CenterBoardComponent";


import LeftBoardComponent from "../../components/adminComponents/LeftBoardComponent";
import RightBoardComponent from "../../components/adminComponents/RightBoardComponent";
import TopCenterBoardComponent from "../../components/adminComponents/TopCenterBoardComponent";
import useQueryObj from "../../hooks/useQueryObj";
import BasicLayout from "../../layouts/BasicLayout";



const AdminPage = () => {

    const [list , setlist] = useState({});

    const { queryObj , moveSupportReadPage, moveMemberReadPage } = useQueryObj();
    


    return ( 
     <div className="container m-auto scrollbar-hide">
        <BasicLayout>
            <TopCenterBoardComponent></TopCenterBoardComponent> 

            <div className='rounded-2xl mt-2 mb-2 flex justify-between'>
                <LeftBoardComponent queryObj={queryObj}  moveMemberReadPage={moveMemberReadPage}>  </LeftBoardComponent>
                <CenterBoardComponent queryObj={queryObj} moveMemberReadPage={moveMemberReadPage}>  </CenterBoardComponent>
                <RightBoardComponent queryObj={queryObj} moveSupportReadPage={moveSupportReadPage}> </RightBoardComponent>
            </div>
        </BasicLayout>
     </div>
    );
}
 
export default AdminPage;