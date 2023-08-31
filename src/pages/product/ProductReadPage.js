import { useEffect, useState } from "react";
import AdminHeader from "../../components/adminComponents/AdminHeaderComponent";
import Footer from "../../components/commonComponents/Footer";
import ProductReadComponent from "../../components/product/ProductReadComponent";
import useQueryObj from "../../hooks/useQueryObj";
import ReviewWrapper from "../../components/adminComponents/review/ReviewWrapper";
import { useParams } from "react-router-dom";

const ProductReadPage = () => {

    const {queryObj} = useQueryObj()
    const {pno} = useParams()

    console.log(pno)

    return (  
        <div className="container m-auto">
        <div>
            <AdminHeader></AdminHeader>
            <ProductReadComponent queryObj={queryObj}></ProductReadComponent>
            <ReviewWrapper pno={pno} queryObj={queryObj}></ReviewWrapper>
            <Footer></Footer>
        </div>
    </div>
    );
}
 
export default ProductReadPage;