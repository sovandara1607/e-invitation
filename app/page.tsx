import { Suspense } from "react";
import WeddingInvitation from "@/components/WeddingInvitation";

// Loading fallback for Suspense
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A3D2E] via-[#0D4A38] to-[#0A3D2E] flex items-center justify-center">
      <div className="text-[#F0D78C] text-center">
        <div className="animate-pulse font-moul text-2xl">កំពុងផ្ទុក...</div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <WeddingInvitation />
    </Suspense>
  );
}
