import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from "./pages/Login"
import Register from "./pages/Register"
import Jobs from "./pages/Jobs"
import Applications from "./pages/Applications"


// ฟังก์ชันเช็คว่า user logged in หรือยัง
function isAuthenticated() {
  return !!localStorage.getItem('token')
}

// Component สำหรับ Route ที่ต้องล็อกอินก่อนเข้าใช้งาน
function PrivateRoute({ children }: { children: JSX.Element }) {
  return isAuthenticated() ? children : <Navigate to="/login" />
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route
          path="/jobs"
          element={
            <PrivateRoute>
              <Jobs />
            </PrivateRoute>
          }
        />
        <Route
          path="/applications"
          element={
            <PrivateRoute>
              <Applications />
            </PrivateRoute>
          }
        />

        {/* ถ้า path อื่น ๆ ที่ไม่รู้จัก ให้ไป login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  )
}
