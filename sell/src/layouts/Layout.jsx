import { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function Layout() {
    const { user, logout, checkSession, loading } = useContext(AuthContext);

    const [sidebarOpen,setSidebarOpen] = useState(false)

    // // useBrowserFocus(() => {
    // //     checkSession();
    // // });

    // useEffect(() => {
    //     if (user) {
    //         checkSession();
    //     } else {
    //         logout();
    //     }
    // }, [])

    return (
        <div>
            <Navbar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}/>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout