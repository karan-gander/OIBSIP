import { RegistrationForm, SignForm, Home } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { PrivateRoute } from "./context/PrivateRoute";
function App() {
  return (
    <>
      <AuthProvider >
        <Router>
          <Routes>
            <Route element={<PrivateRoute/>}>
              <Route path="/" element={<Home/>}/>
            </Route>
            <Route path="/login" element={<SignForm />} />
            <Route path="/signup" element={<RegistrationForm />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
