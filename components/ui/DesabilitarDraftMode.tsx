"use client";

import { useDraftModeEnvironment } from "next-sanity/hooks";
import { useRouter } from "next/navigation";

export function DesabilitarDraftMode() {
  const enviroment = useDraftModeEnvironment();
  const router = useRouter();

  //only show the disable draft mode button when outside of Presentation Tool
  if (enviroment !== "live" && enviroment !== "unknown") {
    return null;
  }
  const handleClick = async () => {
    await fetch("/draft-mode/disable");
    router.refresh();
  };

  return (
    <button
      onClick={handleClick}
      className="fixed botton-4 right-4 bg-gray-50 px4 py-2 z-50"
    >
      Desabilitar Draft Mode
    </button>
  );
}
