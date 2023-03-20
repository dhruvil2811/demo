import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OpenAi from "./components/OpenAi";
import Dashboard from "./Dashboard";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/openai" element={<OpenAi />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
