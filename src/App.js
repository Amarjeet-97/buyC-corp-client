import { Route,Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import { Buffer } from 'buffer';
import CreatePage from "./pages/CreatePage";
global.Buffer = Buffer;
function App() {
  const {loading}=useSelector(state=>state.alerts)
  return (
    <>
      {
        loading ? <Spinner/>:
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <HomePage/>
            </ProtectedRoute>
          }/><Route path="/create" element={
            <ProtectedRoute>
              <CreatePage/>
            </ProtectedRoute>
          }/>
          <Route path="/register" element={
            <PublicRoute>
              <RegisterPage/>
            </PublicRoute>
          }/>
          <Route path="/login" element={
            <PublicRoute>
              <LoginPage/>
            </PublicRoute>
          }/>
        </Routes>

      }
      
      
    </>
  );
}

export default App;
