"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react"; // CUSTOM DEFINED HOOK

import useAuth from "hooks/useAuth";

const GuestGuard = ({
  children
}) => {
  const router = useRouter();
  const {
    isAuthenticated
  } = useAuth();
  useEffect(() => {
    if (isAuthenticated) router.replace("/dashboard");
  }, [isAuthenticated]);
  return <>{children}</>;
};

export default GuestGuard;