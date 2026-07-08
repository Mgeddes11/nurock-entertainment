import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./templates/MainLayout";
import { HomePage } from "./pages/HomePage";
import { ContactsPage } from "./pages/ContactsPage";
import { ProductionLessonsPage } from "./pages/ProductionLessonsPage";
import { StudioSessionsPage } from "./pages/StudioSessionsPage";
import { InstrumentalsPage } from "./pages/InstrumentalsPage";
import { LiveEventsPage } from "./pages/LiveEventsPage";
import { ArtistDevelopmentPage } from "./pages/ArtistDevelopmentPage";
import { MeetHollyPage } from "./pages/MeetHollyPage";

function App() {
  return (
    <BrowserRouter>
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
