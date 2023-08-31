import AdminHeaderComponent from "../../components/adminComponents/AdminHeaderComponent";
import AdminSearchComponent from "../../components/adminComponents/AdminSearchComponent";
import SupportListComponent from "../../components/adminComponents/support/SupportListComponent";
import Footer from "../../components/commonComponents/Footer";
import useQueryObj from "../../hooks/useQueryObj";

const SupportListPage = () => {

    const { queryObj ,setSearch, moveSupportReadPage } = useQueryObj();

    const movePage = (num) => {
        console.log("NUM---------------------------- " + num)
        // URL 변경시 useNavigate, setSearch 
        queryObj.page = num
        setSearch({ ...queryObj })
    }
    // 검색시 이동하는 함수
    const moveSearch = (type, keyword) => {
        queryObj.page = 1
        queryObj.type = type
        queryObj.keyword = keyword

        setSearch({ ...queryObj })
    }
    
    
    return (
        <div className="container m-auto">
            <div>
                <AdminHeaderComponent></AdminHeaderComponent>
                <AdminSearchComponent queryObj={queryObj} moveSearch={moveSearch}></AdminSearchComponent>
                <SupportListComponent queryObj={queryObj} moveSupportReadPage={moveSupportReadPage} movePage={movePage} moveSearch={moveSearch} ></SupportListComponent>
                <Footer></Footer>
            </div>
        </div>
    );
}
 
export default SupportListPage;