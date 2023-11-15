import { AuthProvider } from "contexts/auth0Context";
import LoginView from "./LoginView";

const LoginWithAuth0 = () => {
  return <AuthProvider>
      <LoginView />
    </AuthProvider>;
};

export default LoginWithAuth0;