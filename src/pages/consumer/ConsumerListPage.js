import AdminHeader from "../../components/adminComponents/AdminHeaderComponent";
import ConsumerListComponent from "../../components/adminComponents/consumer/ConsumerListComponent";
import ConsumerSearchComponent from "../../components/adminComponents/consumer/ConsumerSearchComponent";
import Footer from "../../components/commonComponents/Footer";
import useQueryObj from "../../hooks/useQueryObj";

const ConsumerListPage = () => {

    const { queryObj ,setSearch, moveMemberReadPage } = useQueryObj();
    
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
                <AdminHeader></AdminHeader>
                <ConsumerSearchComponent queryObj={queryObj} moveSearch={moveSearch}></ConsumerSearchComponent>
                <ConsumerListComponent queryObj={queryObj} moveMemberReadPage={moveMemberReadPage} movePage={movePage} moveSearch={moveSearch}></ConsumerListComponent>
                <Footer></Footer>
            </div>
        </div>
    );
}
 
export default ConsumerListPage;