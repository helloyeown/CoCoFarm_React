import AdminHeader from "../../components/adminComponents/AdminHeaderComponent";
import BoardReadComponent from "../../components/adminComponents/board/BoardReadComponent";
import Footer from "../../components/commonComponents/Footer";

const BoardReadPage = () => {
    return (  
        <div>
            <AdminHeader></AdminHeader>
            <BoardReadComponent></BoardReadComponent>
            <Footer></Footer>
        </div>
    );
}
 
export default BoardReadPage;