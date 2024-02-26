import { useContext, lazy, Suspense } from "react";
import Navbar from "./components/navbar/Navbar.component";
import { ThemeContext } from "./context/theme.context";
import { Routes, Route } from "react-router-dom";
import CustomeLinearProgress from "./components/custome-linear-progress/CustomeLinearProgress.component";

// Import with lazy loading
const Home = lazy(() => import("./pages/home/Home.page"));
const Companies = lazy(() => import("./pages/companies/Companies.page"));
const AddCompany = lazy(() => import("./pages/companies/AddCompany.page"));
const Jobs = lazy(() => import("./pages/jobs/Jobs.page"));
const AddJob = lazy(() => import("./pages/jobs/AddJob.page"));

const App = () => {
  const { darkMode } = useContext(ThemeContext);

  var appStyles = darkMode ? "app dark" : "app";

  return (
    <div className={appStyles}>
      <Navbar />
      <div className="wrapper">
        <Suspense fallback={<CustomeLinearProgress />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/companies">
              <Route index element={<Companies />} />
              <Route path="add" index element={<AddCompany />} />
            </Route>
            <Route path="/jobs">
              <Route index element={<Jobs />} />
              <Route path="add" index element={<AddJob />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
