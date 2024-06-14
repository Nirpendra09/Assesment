import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="font-sans text-gray-900 antialiased flex flex-col h-screen bg-slate-50 xlske">
      <Navbar />

      <main className="p-6 mt-16 overflow-auto flex-grow bg-white">
        <Outlet />
      </main>

      {/* <footer className="bg-gray-200 p-4 mt-12 text-center">
        <p>© 2023 My App. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default Layout;
