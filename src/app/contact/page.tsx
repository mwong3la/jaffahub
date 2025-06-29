import { CTASection } from "@/components/CTASection"
import ProcessSection from "@/components/ProcessSection"

const ContactPage = () => {
    return (
        <div className="min-h-screen">
            <div
                className="relative h-96 md:h-[500px] bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/saas-benefit.png')",
                }}
            >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Content */}
                <div className="relative z-10 flex items-center h-full px-6 md:px-12 lg:px-32">
                    <div className="text-white max-w-2xl">
                        <p className="text-lg md:text-xl mb-4 font-medium">We are glad you are here</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Let's work together.</h1>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 px-6 py-12 md:px-12 lg:px-32">
                <div className="">
                    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                        {/* About section */}
                        <div className="md:col-span-1">
                            <p className="text-gray-600 leading-relaxed">
                                Looking to build game-changing digital products, innovative solutions, or seamless experiences? Let's
                                chat.
                            </p>
                        </div>

                        {/* Headquarters */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">HEADQUARTERS</h3>
                            <div className="text-[#0B335A] font-bold">
                                <p>1728 14th St NW</p>
                                <p>Washington, DC</p>
                            </div>
                        </div>

                        {/* Socials */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">SOCIALS</h3>
                            <div className="space-y-2">
                                <a href="#" className="block text-[#0B335A] font-bold transition-colors duration-200">
                                    Instagram
                                </a>
                                <a href="#" className="block text-[#0B335A] font-bold transition-colors duration-200">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProcessSection />
            <CTASection />
        </div>
    )
}

export default ContactPage