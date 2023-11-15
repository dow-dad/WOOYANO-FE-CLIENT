import { AuthProvider } from "contexts/firebaseContext";
import RegisterView from "./RegisterView";

const RegisterWithFirebase = () => {
  return <AuthProvider>
      <RegisterView />
    </AuthProvider>;
};

export default RegisterWithFirebase;