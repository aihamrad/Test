import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import { connect } from "react-redux";
import { login } from "./store/user";
import PostDetails from "./routes/PostDetails";

function App({ login }) {
  useEffect(() => {
    if (localStorage.getItem("user")) {
      login(JSON.parse(localStorage.getItem("user")));
    }
  }, [login]);

  return (
    <div className="container">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/dashboard/post/:id" element={<PostDetails />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

const mapDispatchToProps = {
  login: login,
};

const mapStateToProps = (store) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
