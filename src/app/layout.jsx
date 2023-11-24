// THEME PROVIDER
import ThemeProvider from "theme/ThemeProvider"; // SITE SETTINGS CONTEXT

import AuthProvider from "contexts/AuthProvider";

import SettingsProvider from "contexts/settingsContext"; // FIREBASE AUTH PROVIDER

import { inter } from "utils/font"; // RIGHT-TO-LEFT SUPPORT COMPONENT

import { RTL } from "components/rtl"; // MULTI LANGUAGE FEATURE

import DashboardLayout from "layouts/dashboard/DashboardLayout";

import "./global.css";

import "i18n"; // THIRD PARTY LIBRARY CSS

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-quill/dist/quill.snow.css";
import "simplebar-react/dist/simplebar.min.css";
import "pure-react-carousel/dist/react-carousel.es.css";
export const metadata = {
  title: "WooYano",
  description: "WooYaNo 사장님 서비스"
};

const RootLayout = ({
  children
}) => {
  return <html lang="ko">
    <body className={inter.className} suppressHydrationWarning>
      <AuthProvider>
        <ThemeProvider>
          <RTL>
            <DashboardLayout>{children}</DashboardLayout>
          </RTL>
        </ThemeProvider>
      </AuthProvider>

    </body>
  </html>;
};

export default RootLayout;