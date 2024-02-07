import { QueryClient, Query, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  BrowserRouter,
  Routes,
  //  Navigate,
  Route,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import Homepage from "./components/Homepage";
import Signup from "./pages/Auth/Signup";
import PatientSignup from "./pages/Auth/PatientSignup";
import DoctorSignup from "./pages/Auth/DoctorSignup";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ui/ProtectedRoute";
import { Toaster } from "react-hot-toast";
// import Sidebar from './components/Sidebar';
// import Dashboard from './pages/Dashboard.jsx';
// import About from './pages/About.jsx';
// import Analytics from './pages/Analytics.jsx';
// import Comment from './pages/Comment.jsx';
// import Product from './pages/Product.jsx';
// import ProductList from './pages/ProductList.jsx';
// import Sidebar from "./pages/Sidebar.jsx";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,

    }
  }
})



function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
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
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Toaster position="top-center" gutter={12} containerStyle={{margin:"12px"}} toastOptions={{
      success: {
        duration: 3500
      }, error: {
        duration: 5000
      }, style: {
        fontSize:"17px", maxWidth:"500px", padding: "16px 24px" 
      }
    }}/> 
    </QueryClientProvider>
  );
}

export default App;
