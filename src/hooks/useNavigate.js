import { useRouter } from "next/navigation";

const useNavigate = () => {
  const {
    push
  } = useRouter();
  return push;
};

export default useNavigate;