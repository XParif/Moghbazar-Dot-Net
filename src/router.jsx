import {
    createBrowserRouter,
} from "react-router-dom";
import {
    Contact,
    FTP,
    Homepage,
    PayBill,
    Packages,
    Refer,
    NotFound
} from "@/webPages";
import Layout from "@/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Homepage />,
            },
            {
                path: "packages",
                element: <Packages />,
            },
            {
                path: "ftp",
                element: <FTP />,
            },
            {
                path: "paybill",
                element: <PayBill />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "refer",
                element: <Refer />,
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
]);

export default router;
