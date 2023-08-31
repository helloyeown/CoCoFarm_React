import AdminSearchComponent from "../components/adminComponents/AdminSearchComponent";
import Footer from "../components/commonComponents/Footer";

const BasicLayout = ({children}) => {
    return ( 
     <div className="container m-auto">

        {/* <div>
            <AdminSearchComponent></AdminSearchComponent>
        </div> */}

        <div>
            {children}
        </div>

        {/* <div className="m-auto">
            <Footer></Footer>
        </div>       */}
     </div>
    );
}
 
export default BasicLayout;