
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Home/Dashboard";
import Interviewprep from "./pages/Interviewprep/Interviewprep";

const App = () => {
  return (
    <>
      {/* 🔔 Toaster must be OUTSIDE Router */}
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      />

      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/interview-prep/:sessionId"
            element={<Interviewprep />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
