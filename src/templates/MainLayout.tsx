import { Outlet } from "react-router-dom";
import { Navigation } from "../components/organisms/Navigation";
import { Footer } from "../components/organisms/Footer";

export function MainLayout() {
  return (
    <div className="page-shell">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
