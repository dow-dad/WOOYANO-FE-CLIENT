"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation"; // CUSTOM DEFINED HOOK

import useAuth from "hooks/useAuth";

const AuthGuard = ({
  children
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const {
    isAuthenticated
  } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (!isAuthenticated) router.replace("/login");else setIsLoggedIn(true);
  }, [isAuthenticated]);
  if (isLoggedIn) return <>{children}</>;
  return null;
};

export default AuthGuard;