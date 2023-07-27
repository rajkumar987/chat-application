"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { LoginForm, CreateProfile } from "@/components/Index";
import { createSession } from "@/api";
import { useAuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const [submitting, setSubmitting] = useState(false);
  const { setUser, newProfile, setNewProfile } = useAuthContext();

  const router = useRouter();
  const handleSubmit = async (phone) => {
    setSubmitting(true);
    const response = await createSession(phone);

    if (response) {
      const {
        data: { id },
        newUser,
      } = response;
      setUser(id);
      if (newUser) {
        setNewProfile(true);
      } else {
        router.replace("/");
      }
    }
    setSubmitting(false);
  };

  return (
    <main className="flex flex-col min-h-screen w-screen top-0 bottom-0">
      <div className="h-[28vh] bg-primary w-full"></div>
      <div className="min-h-[72vh] bg-gray-900"></div>
      <div className="absolute w-[70%] left-[15%] py-7 ">
        <div className="flex flex-col gap-16">
          <div className="flex gap-3 items-center">
            <Image src={"/favicon.svg"} width={39} height={39} alt="WhatsApp" />
            <p className="uppercase text-sm font-[500] text-white">
              WhatsApp Web
            </p>
          </div>
          <div className="w-full bg-white px-24 rounded-md flex flex-col justify-center items-center gap-2 divide-y divide-gray-300">
            {newProfile ? (
              <CreateProfile />
            ) : (
              <LoginForm handleSubmit={handleSubmit} submitting={submitting} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
