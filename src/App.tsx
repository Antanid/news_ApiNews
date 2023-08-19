import { Route, Routes } from "react-router";
import "./App.css";
import MenuPage from "./page/MenuPage/MenuPage";
import { lazy, Suspense } from "react";
import TopHeadlinesPage from "./page/TopHeadlinesPage/TopHeadlinesPage";

const BusinessPage = lazy(() => import("./page/BusinessPage/BusinessPage"));
const EntertainmentPage = lazy(() => import("./page/EntertainmentPage/EntertainmentPage"));
const GeneralPage = lazy(() => import("./page/GeneralPage/GeneralPage"));
const HealthPage = lazy(() => import("./page/HealthPage/HealthPage"));
const SciencePage = lazy(() => import("./page/ SciencePage/ SciencePage"));
const SportsPage = lazy(() => import("./page/SportsPage/SportsPage"));
const TechnologyPage = lazy(() => import("./page/TechnologyPage/TechnologyPage"));
const SourcesPage = lazy(() => import("./page/SourcesPage/SourcesPage"));

function App() {
  return (
    <div className="App">
      <MenuPage />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense>
              <TopHeadlinesPage />
            </Suspense>
          }
        />
        <Route
          path="/business"
          element={
            <Suspense>
              <BusinessPage />
            </Suspense>
          }
        />
        <Route
          path="/entertainment"
          element={
            <Suspense>
              <EntertainmentPage />{" "}
            </Suspense>
          }
        />
        <Route
          path="/general"
          element={
            <Suspense>
              <GeneralPage />{" "}
            </Suspense>
          }
        />
        <Route
          path="/health"
          element={
            <Suspense>
              <HealthPage />
            </Suspense>
          }
        />
        <Route
          path="/science"
          element={
            <Suspense>
              <SciencePage />
            </Suspense>
          }
        />
        <Route
          path="/sports"
          element={
            <Suspense>
              <SportsPage />
            </Suspense>
          }
        />
        <Route
          path="/technology"
          element={
            <Suspense>
              <TechnologyPage />
            </Suspense>
          }
        />
        <Route
          path="/sources"
          element={
            <Suspense>
              <SourcesPage />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
