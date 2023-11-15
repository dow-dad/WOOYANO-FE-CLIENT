import { AuthProvider } from "contexts/amplifyContext";
import LoginView from "./LoginView";

const LoginWithAmplify = () => {
  return <AuthProvider>
      <LoginView />
    </AuthProvider>;
};

export default LoginWithAmplify;