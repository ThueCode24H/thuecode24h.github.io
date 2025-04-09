import { Route, Routes } from "react-router";
import HomePage from "./pages/homePage";
import MainLayout from "./components/layout/mainLayout";
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/contactPage";
import ProjectPage from "./pages/projectPage";
import AdminLayout from "./layout/admin/adminLayout";
import Dashboard from "./pages/admin/dashboard";


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="project" element={<ProjectPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App
