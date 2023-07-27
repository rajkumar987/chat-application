"use client";
import { ChatScreen, EmptyScreen, Sidebar } from "@/components/Index";
import Loading from "@/components/Loading";
import { useAuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuthContext();

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    } else {
      setIsLoading(false);
    }
  }, [user]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-4">
      <Sidebar />
      <ChatScreen />
      {/* <EmptyScreen /> */}
    </div>
  );
};

export default Home;
