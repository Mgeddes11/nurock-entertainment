import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./commerce/cartContext";
import { MainLayout } from "./templates/MainLayout";
import { HomePage } from "./pages/HomePage";
import { ContactsPage } from "./pages/ContactsPage";
import { ProductionLessonsPage } from "./pages/ProductionLessonsPage";
import { StudioSessionsPage } from "./pages/StudioSessionsPage";
import { InstrumentalsPage } from "./pages/InstrumentalsPage";
import { LiveEventsPage } from "./pages/LiveEventsPage";
import { ArtistDevelopmentPage } from "./pages/ArtistDevelopmentPage";
import { MeetHollyPage } from "./pages/MeetHollyPage";
import { ShopHomePage } from "./pages/shop/ShopHomePage";
import { CollectionsIndexPage } from "./pages/shop/CollectionsIndexPage";
import { CollectionPage } from "./pages/shop/CollectionPage";
import { ProductPage } from "./pages/shop/ProductPage";
import { CartPage } from "./pages/shop/CartPage";
import { LookbookPage } from "./pages/shop/LookbookPage";
import { AboutApparelPage } from "./pages/shop/AboutApparelPage";
import { UnlockPage } from "./pages/shop/UnlockPage";
import { PolicyPage } from "./pages/shop/PolicyPage";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="meet-holly" element={<MeetHollyPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="production-lessons" element={<ProductionLessonsPage />} />
            <Route path="studio-sessions" element={<StudioSessionsPage />} />
            <Route path="instrumentals" element={<InstrumentalsPage />} />
            <Route path="live-events" element={<LiveEventsPage />} />
            <Route path="artist-development" element={<ArtistDevelopmentPage />} />

            <Route path="shop" element={<ShopHomePage />} />
            <Route path="shop/collections" element={<CollectionsIndexPage />} />
            <Route path="shop/collections/:slug" element={<CollectionPage />} />
            <Route path="shop/product/:slug" element={<ProductPage />} />
            <Route path="shop/cart" element={<CartPage />} />
            <Route path="shop/lookbook" element={<LookbookPage />} />
            <Route path="shop/about" element={<AboutApparelPage />} />
            <Route path="shop/shipping" element={<PolicyPage />} />
            <Route path="shop/returns" element={<PolicyPage />} />
            <Route path="shop/privacy" element={<PolicyPage />} />
            <Route path="shop/terms" element={<PolicyPage />} />
            <Route path="shop/faq" element={<PolicyPage />} />
            <Route path="unlock" element={<UnlockPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
