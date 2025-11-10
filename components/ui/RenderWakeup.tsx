"use client ";

import { api } from "@/lib/api";
import { useEffect } from "react";

export function RenderWakeup() {
  useEffect(() => {
    const wakeUpBackend = async () => {
      try {
        await api.get("/health");
      } catch (error) {
        console.log("⚠️ Backend ainda está acordando...", error);
      }
    };

    wakeUpBackend();
  }, []);

  return null;
}
