import AdminHeader from "../../components/adminComponents/AdminHeaderComponent";
import FarmerListComponent from "../../components/adminComponents/farmer/FarmerListComponent";
import FarmerSearchComponent from "../../components/adminComponents/farmer/FarmerSearchComponent";
import SupportListComponent from "../../components/adminComponents/support/SupportListComponent";
import Footer from "../../components/commonComponents/Footer";
import PagingComponent from "../../components/commonComponents/PagingComponent";
import useQueryObj from "../../hooks/useQueryObj";

const FarmerListPage = () => {

    const {queryObj, setSearch, moveMemberReadPage} = useQueryObj()

    const movePage = (num) => {
        console.log("num-----------------------------", num)
        queryObj.page = num
        setSearch({...queryObj})
    }

    // 검색시 이동하는 함수
    const moveSearch = (type, keyword) => {
        queryObj.page = 1
        queryObj.type = type
        queryObj.keyword = keyword

        console.log("-----------------------------------")
        console.log(queryObj)

        setSearch({ ...queryObj })
    }


    return (  
        <div className="container m-auto">
            
            <div>
                {/* <AdminHeader></AdminHeader> */}
                <FarmerSearchComponent queryObj={queryObj} moveSearch={moveSearch}></FarmerSearchComponent>
                <FarmerListComponent queryObj={queryObj} moveMemberReadPage={moveMemberReadPage} movePage={movePage} moveSearch={moveSearch}></FarmerListComponent>
                {/* <Footer></Footer> */}
            </div>
        </div>
    );
}
 
export default FarmerListPage;