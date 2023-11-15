import { usePathname } from "next/navigation";

const useLocation = () => {
  const pathname = usePathname();
  return {
    pathname
  };
};

export default useLocation;