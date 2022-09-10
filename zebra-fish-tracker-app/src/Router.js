import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Job from "./pages/Job";
import JobList from "./pages/JobList";
import ModelInspect from "./pages/ModelInspect";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/jobs" element={<JobList />} />
                <Route exact path="/jobs/:jobid" element={<Job />} />
                <Route exact path="/model-inspect" element={<ModelInspect />} />
            </Routes>
        </BrowserRouter>
    );
}


export default AppRoutes;