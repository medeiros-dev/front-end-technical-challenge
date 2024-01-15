import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="flex flex-col gap-2">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
