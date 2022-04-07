import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import { Outlet, Link } from "react-router-dom";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
    </div>
    <Outlet />
    <Footer />
  </div>
);

export default App;
