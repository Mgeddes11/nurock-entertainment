import { Outlet } from "react-router-dom";
import { Navigation } from "../components/organisms/Navigation";
import { Footer } from "../components/organisms/Footer";
import { CartDrawer } from "../components/shop/CartDrawer";
import { useShopChrome } from "../hooks/useShopChrome";

export function MainLayout() {
  const showShop = useShopChrome();

  return (
    <div className="page-shell">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      {showShop ? <CartDrawer /> : null}
    </div>
  );
}
