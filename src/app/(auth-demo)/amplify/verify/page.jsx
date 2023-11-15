import VerifyView from "./VerifyView";
import { AuthProvider } from "contexts/amplifyContext";

const VerifyWithAmplify = () => {
  return <AuthProvider>
      <VerifyView />
    </AuthProvider>;
};

export default VerifyWithAmplify;