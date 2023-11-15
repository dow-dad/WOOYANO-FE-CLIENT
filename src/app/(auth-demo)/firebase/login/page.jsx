import { AuthProvider } from "contexts/firebaseContext";
import LoginView from "./LoginView";

const LoginWithFirebase = () => {
  return <AuthProvider>
      <LoginView />
    </AuthProvider>;
};

export default LoginWithFirebase;