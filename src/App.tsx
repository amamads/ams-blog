import { Outlet } from "react-router";
import Footer from "./shared/components/Footer";
import Navbar from "./shared/components/Navbar";

export default function App() {
  return (
    <main className="col-flex gap-5 min-w-97.5 w-full">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer/>
    </main>
  );
}
