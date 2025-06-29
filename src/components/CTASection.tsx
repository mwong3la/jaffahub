import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#007E76] to-[#71D1CB80] text-white">
      <div className="container mx-auto px-32">
        <div className="text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            All the tech expertise, none of the hassle
          </h2>

          <div className="flex flex-wrap justify-center gap-8 text-lg">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-teal-300 rounded-full"></span>
              <span>Faster time to market</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-teal-300 rounded-full"></span>
              <span>Zero hiring costs</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-teal-300 rounded-full"></span>
              <span>More time for strategy</span>
            </div>
          </div>

          <Button className="bg-[#52AAA6] hover:bg-[#52AAA6] text-white px-8 py-6 text-lg rounded-xl font-semibold">
            Get started
          </Button>
        </div>
      </div>
    </section>
  );
};