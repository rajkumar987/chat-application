import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/authContext";

function useAuth() {
  const router = useRouter();
  const { user } = useAuthContext();

  const [isLoading, setIsloading] = useState(true); // Replace this with your actual user data or authentication state

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [router, user]);

  return { isLoading };
}

export default useAuth;
