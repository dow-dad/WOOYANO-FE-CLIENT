import { AuthProvider } from "contexts/amplifyContext";
import RegisterView from "./RegisterView";

const RegisterWithAmplify = () => {
  return <AuthProvider>
      <RegisterView />
    </AuthProvider>;
};

export default RegisterWithAmplify;