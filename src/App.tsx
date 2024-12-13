import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/Main/Layout";
import Login from "./components/Form/Form";
import InvalidPage from "./components/Invalid/InvalidPage";
import UserInfo from "./components/UserInfo/UserInfo";
import Analytics from "./components/Analytics/Analytics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route path="/dashboard/userdashboard" element={<UserInfo />}></Route>
          <Route path="/dashboard/analytics" element={<Analytics/>}></Route>
        </Route>
        <Route path="/invalid" element={<InvalidPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
