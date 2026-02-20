import { Outlet } from "react-router";
import Footer from "./shared/components/Footer";
import Navbar from "./shared/components/Navbar";

export default function App() {
  return (
    <main className="col-flex gap-5 min-w-97.5 max-w-360 w-full mx-auto lg:px-28">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer/>
    </main>
  );
}
