import { Route, Routes } from "react-router-dom";
import JobInfo from "@/components/JobInfo.tsx";
import Jobs from "@/components/Jobs.tsx";

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Jobs />} />

      <Route path="/job/:id" element={<JobInfo />} />

      <Route path="*" element={<h1>This page does not exist</h1>}></Route>
    </Routes>
  );
}

export default PublicRoutes;
