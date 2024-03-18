import ObjectDetection from "@/components/ObjectDetection";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-8">
      <h2 className="gradiant-title font-extrabold text-3xl md:text-4xl lg:text-6xl md:px-6 tracking-tighter text-center">
        AI Object Detection Alarm
      </h2>
      <ObjectDetection />
    </main>
  );
}
