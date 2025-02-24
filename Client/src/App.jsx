import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import CourseList from "./Pages/CourseList";
import CourseDetail from "./Pages/CourseDetail";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import InstructorDashboard from "./Pages/InstructorDashboard";
import Payment from "./Pages/Payment";
import NotFound from "./Pages/NotFound";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
  
    <div className="bg-gray-900 text-white min-h-screen w-full flex item-center justify-center flex-col">
      
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/instructor" element={<InstructorDashboard />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        </div>
    </Router>
  );
}

export default App;