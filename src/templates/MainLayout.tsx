import { Outlet } from "react-router-dom";
import { Navigation } from "../components/organisms/Navigation";
import { Footer } from "../components/organisms/Footer";

export function MainLayout() {
  return (
    <div className="page-shell flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
