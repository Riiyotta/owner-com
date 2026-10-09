import { Suspense, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { routes, REDIRECTS } from "./routes.js";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => { if (!hash) window.scrollTo(0, 0); }, [pathname, hash]);
  return null;
}

export default function App() {
  const Home = routes[0].Page;
  return (
    <Suspense fallback={null}>
      <ScrollToTop />
      <Routes>
        {routes.map((r) => <Route key={r.path} path={r.path} element={<r.Page />} />)}
        {REDIRECTS.map(([from, to]) => <Route key={from} path={from} element={<Navigate to={to} replace />} />)}
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
}
