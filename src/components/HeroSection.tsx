import { Button } from "@/components/ui/button"

const HeroSection = () => {
    return (
        <section className=" bg-gradient-to-br from-teal-50 to-green-50 py-20 lg:py-32">
            <div className="container mx-auto px-32 ">
                <div className="max-w-2xl">
                    <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                        Effortless Scaling with <span className="text-teal-600">SaaS Solutions</span>
                    </h1>
                    <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full">
                        Discover our project portfolio
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
