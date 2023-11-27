import MainLayout from "layouts/main/MainLayout";

const PublicLayout = ({
  children
}) => {
  return <MainLayout>{children}</MainLayout>;
};

export default PublicLayout;