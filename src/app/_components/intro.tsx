import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col flex items-center mt-16 mb-16">
      {/* ↓ ここに画像を追加 */}
      <div className="w-full mb-8">
        <img 
          src="/assets/blog/top_image.png"
          alt="Edmonton Life" 
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>
      
      <div className="flex-col md:flex-row flex items-center md:justify-between w-full">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Edmonton-Life-Blog
        </h1>
        <h4 className="text-center md:text-left text-lg mt-5">
          A collection of our family adventures in Edmonton, Canada.
        </h4>
      </div>
    </section>
  );
}
