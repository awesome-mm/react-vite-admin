import {Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import NavigateTransition from "../components/common/navigateTransition/navigateTransition";

import NotFound from "@/components/common/notFounds/NotFound";
// layouts
import MainLayout from "@/pages/layout/MainLayout";
import LoginLayout from "@/pages/layout/LoginLayout.jsx";

// pages
import AdminLogin from "@/pages/auth/AdminLogin";
import MainAdminPage from "@/pages/main/MainAdminPage";

export default function MainRouetes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<NavigateTransition />}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainAdminPage />} />
            <Route path="zxc" element={<MainAdminPage />} />
          </Route>

          <Route path="/login" element={<LoginLayout />}>
            <Route index element={<AdminLogin />} />
          </Route>
        </Route>

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}
