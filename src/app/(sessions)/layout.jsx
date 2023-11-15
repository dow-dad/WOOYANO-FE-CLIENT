import { GuestGuard } from "components/auth";

const AuthLayout = ({
  children
}) => {
  return <GuestGuard>{children}</GuestGuard>;
};

export default AuthLayout;