import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import TheVentureLayout from "../layouts/TheVentureLayout";




const router = createBrowserRouter([
    {
path: '/',
element:<HomeLayout></HomeLayout>,



    },
    {
        path:'/theventure',
        element:<TheVentureLayout></TheVentureLayout>
    }
   

]);
export default router;