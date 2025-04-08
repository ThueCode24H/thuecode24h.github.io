import { Outlet } from "react-router"
import Header from "./header/Header"

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="main" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "8px" }}>
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout