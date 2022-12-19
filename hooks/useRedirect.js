import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function useRedirect(time) {
  const [countdown, setCountdown] = useState(time);
  const router = useRouter();

  useEffect(() => {
    //redirect to homepage after 5sec
    const timer = setTimeout(() => {
      setCountdown(countdown => countdown - 1);
    }, 1000);

    if (countdown < 1) router.push("/");

    return () => clearTimeout(timer);
  }, [router, countdown]);

  return { countdown };
}
