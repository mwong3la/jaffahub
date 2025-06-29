import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const HomeHero = () => {
    return (
        <section id="home" className="pt-10 h-screen  bg-[#171717] overflow-hidden">
            <div className="p-4 sm:pl-32 sm:pr-18 h-full">
                <div className="grid lg:grid-cols-2 gap-12 h-full">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center space-y-8 h-full">
                        <div className="space-y-6">
                            <h1 className="text-3xl lg:text-6xl font-bold text-white leading-tight">
                                Scale and build faster
                                <br />
                                without hiring struggles
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                                Whether you need a full product team or just a few extra hands, we're here to support you with a
                                seamless development experience, every step of the way.
                            </p>
                        </div>
                        <div>
                            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 text-base rounded-full">
                                Contact Us
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>


                    {/* Right Content - World Map Image */}
                    <div className="flex justify-center items-end h-full">
                        <img
                            src="/images/ellipse.png"
                            alt="Dotted world map"
                            className="w-[1000px] h-auto"
                        />

                    </div>
                </div>
            </div>
        </section>
    )
}
