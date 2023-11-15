import { AuthProvider } from "contexts/jwtContext";
import RegisterView from "./RegisterView";

const RegisterWithJWT = () => {
  return <AuthProvider>
      <RegisterView />
    </AuthProvider>;
};

export default RegisterWithJWT;