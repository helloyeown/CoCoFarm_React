import { createBrowserRouter } from"react-router-dom";

import MainPage from "../pages/MainPage";
import AdminPage from "../pages/admin/AdminPage";
import SupportListPage from "../pages/support/SupportListPage";
import FarmerListPage from "../pages/farmer/FarmerListPage";
import ConsumerListPage from "../pages/consumer/ConsumerListPage";
import SupportReadPage from "../pages/support/SupportReadPage";
import FarmerReadPage from "../pages/farmer/FarmerReadPage";

import FarmerListComponent from "../components/adminComponents/farmer/FarmerListComponent";
import LoginComponent from "../components/login/LoginComponent";
import ProductListPage from "../pages/product/ProductListPage";
import ProductReadPage from "../pages/product/ProductReadPage";
import BoardReadPage from "../pages/board/BoardReadPage";
import ProductRegisterComponent from "../components/product/ProductRegisterComponent";

const router = createBrowserRouter([
    
    {
        path: "",
        element: <MainPage></MainPage>,
        children: [
        {
            path: "",
            element: <AdminPage></AdminPage>               
        },
        {
            path: "/farmer/list",
            element: <FarmerListPage></FarmerListPage>
        },
    ]
    },
    {
        path: "/login",
        element: <LoginComponent></LoginComponent>              
    },

    {
        path: "/member/read/:mno",
        element: <FarmerReadPage></FarmerReadPage>
    },
    {
        path: "/consumer/list",
        element: <ConsumerListPage></ConsumerListPage>
    },
    {
        path: "/support/list",
        element: <SupportListPage></SupportListPage>
    },
    {
        path: "/support/read/:bno",
        element: <SupportReadPage></SupportReadPage>
    },

    
    {
        path: "/products/list",
        element: <ProductListPage></ProductListPage>
    },
    {
        path: "/products/read/:pno",
        element: <ProductReadPage></ProductReadPage>
    },
    {
        path: "/products/register",
        element: <ProductRegisterComponent></ProductRegisterComponent>
    },
    {
        path: "/board/read/:bno",
        element: <BoardReadPage></BoardReadPage>
    }
]);

export default router;