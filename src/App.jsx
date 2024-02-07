import {
  BrowserRouter,
  Routes,
  //  Navigate,
  Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./components/Homepage";
import Signup from "./pages/Signup";
import PatientSignup from "./pages/PatientSignup";
import DoctorSignup from "./pages/DoctorSignup";
import AppLayout from './ui/AppLayout'
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ui/ProtectedRoute";
// import Sidebar from './components/Sidebar';
// import Dashboard from './pages/Dashboard.jsx';
// import About from './pages/About.jsx';
// import Analytics from './pages/Analytics.jsx';
// import Comment from './pages/Comment.jsx';
// import Product from './pages/Product.jsx';
// import ProductList from './pages/ProductList.jsx';
// import Sidebar from "./pages/Sidebar.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/patient-signup" element={<PatientSignup />} />
        <Route path="/doctor-signup" element={<DoctorSignup />} />

        <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >

          {/* <Route index element={<Navigate replace to="dashboard" />}/> */}
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
