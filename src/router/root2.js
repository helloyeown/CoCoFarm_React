import { createBrowserRouter } from"react-router-dom";

import AdminPage from "../pages/admin/AdminPage";
import SupportListPage from "../pages/support/SupportListPage";
import FarmerListComponent from "../components/adminComponents/farmer/FarmerListComponent";
import SupportReadPage from "../pages/support/SupportReadPage";


const router2 = createBrowserRouter([
    {
        path: "/support/list",
        element: <SupportListPage></SupportListPage>
    },
    {
        path: "/support/read/:bno",
        element: <SupportReadPage></SupportReadPage>
    }
]);

export default router2;