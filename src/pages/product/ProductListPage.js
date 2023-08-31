import AdminHeader from "../../components/adminComponents/AdminHeaderComponent";
import ConsumerListComponent from "../../components/adminComponents/consumer/ConsumerListComponent";
import ConsumerSearchComponent from "../../components/adminComponents/consumer/ConsumerSearchComponent";
import Footer from "../../components/commonComponents/Footer";
import ProductListComponent from "../../components/product/ProductListComponent";
import ProductSearchComponent from "../../components/product/ProductSearchComponent";
import useQueryObj from "../../hooks/useQueryObj";

const ProductListPage = () => {

    const { queryObj ,setSearch, moveProductReadPage } = useQueryObj();
    
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
                <ProductSearchComponent queryObj={queryObj} moveSearch={moveSearch}></ProductSearchComponent>
                <ProductListComponent queryObj={queryObj} moveProductReadPage={moveProductReadPage} movePage={movePage} moveSearch={moveSearch}></ProductListComponent>
                <Footer></Footer>
            </div>
        </div>
    );
}
 
export default ProductListPage;