import { Outlet } from "react-router-dom"
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"

const Layout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout