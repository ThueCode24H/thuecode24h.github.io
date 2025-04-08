
import AccountForm from "~/components/accounts/AccountForm";
import Header from './components/layout/header/Header';
import { Route, Routes } from "react-router";
import HomePage from "./pages/homePage";
import MainLayout from "./components/layout/mainLayout";
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/contactPage";
import ProjectPage from "./pages/projectPage";


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="project" element={<ProjectPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
