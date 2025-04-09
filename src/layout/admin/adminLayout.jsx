import { Outlet } from "react-router"
import Sidebar from "~/components/admin/sidebar/Sidebar"

const AdminLayout = () => {
    return (
        <div>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default AdminLayout