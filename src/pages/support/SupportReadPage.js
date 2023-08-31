import { useParams } from "react-router-dom";
import AdminHeader from "../../components/adminComponents/AdminHeaderComponent";
import SupportReadComponent from "../../components/adminComponents/support/SupportReadComponent";
import Footer from "../../components/commonComponents/Footer";
import useQueryObj from "../../hooks/useQueryObj";
import ReplyWrapper from "../../components/reply/ReplyWrapper";

const SupportReadPage = () => {

    const {moveList} = useQueryObj()
    const {bno} = useParams()

    console.log("=====================================================bno");
    console.log(bno);

    return ( 
    <div className="container m-auto">
        <div className="m-auto">
                   
            <AdminHeader></AdminHeader>

                <SupportReadComponent bno={bno} moveList={moveList}></SupportReadComponent>

                {/* 댓글 부분 */}
                <ReplyWrapper bno={bno}></ReplyWrapper>
            
            <Footer></Footer>

        </div>
    </div>
    );
}
 
export default SupportReadPage;