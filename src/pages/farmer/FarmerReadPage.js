
import AdminHeader from "../../components/adminComponents/AdminHeaderComponent";
import FarmerReadComponent from "../../components/adminComponents/farmer/FarmerReadComponent";
import Footer from "../../components/commonComponents/Footer";
import useQueryObj from "../../hooks/useQueryObj";

const FarmerReadPage = () => {
    
    const {queryObj, setSearch, moveMemberListPage, moveBoardReadPage, moveProductReadPage} = useQueryObj();

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
                <AdminHeader></AdminHeader>
                <FarmerReadComponent moveMemberListPage={moveMemberListPage} queryObj={queryObj} setSearch={setSearch} moveBoardReadPage={moveBoardReadPage} moveSearch={moveSearch} movePage={movePage} moveProductReadPage={moveProductReadPage}></FarmerReadComponent>
                <Footer></Footer>
            </div>
        </div>
    );
}
 
export default FarmerReadPage;