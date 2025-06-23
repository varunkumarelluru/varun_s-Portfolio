import { BackgroundShapes } from "@/components/BackgroundShapes";

export const NotFound = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex items-center justify-center">
      <BackgroundShapes />
      <div className="z-10">NotFound</div>
    </div>
  );
};
