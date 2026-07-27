import { Outlet } from "react-router-dom";
import { Navigation } from "../components/organisms/Navigation";
import { Footer } from "../components/organisms/Footer";
import { CartDrawer } from "../components/shop/CartDrawer";

export function MainLayout() {
  return (
    <div className="page-shell">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
