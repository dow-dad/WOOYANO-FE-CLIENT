import { AuthGuard } from "components/auth";
import DashboardLayout from "layouts/dashboard/DashboardLayout";

const Layout = ({
  children
}) => {
  return <AuthGuard>
      <DashboardLayout>{children}</DashboardLayout>
    </AuthGuard>;
};

export default Layout;