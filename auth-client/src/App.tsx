import { Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin/signin";
import Signup from "./pages/Signup/signup";
import Welcome from "./pages/Welcome/welcome";
import Home from "./pages/Home/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}

export default App;
