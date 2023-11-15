import { AuthProvider } from "contexts/jwtContext";
import LoginView from "./LoginView";

const LoginWithJWT = () => {
  return <AuthProvider>
      <LoginView />
    </AuthProvider>;
};

export default LoginWithJWT;