import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactSectionProps {
    title?: string;
    subtitle?: string;
}

const ContactSection = ({
    title = "This is how we make it happen",
    subtitle = "From ideation to post-release support, we are active participants in your success and keep an eye on every possible opportunity to grow your product."
}: ContactSectionProps) => {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl w-3/4 font-bold text-gray-900 mb-12">
                            {title}
                        </h2>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    1
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        Product Discovery
                                    </h3>

                                </div>
                            </div>

                            <div className="flex gap-4 ">
                                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    2
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        Development Planning
                                    </h3>

                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    3
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        SaaS Design and Development
                                    </h3>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    4
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        Post-launch Support
                                    </h3>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="rounded-lg">
                        <p className="text-gray-600 mb-12 text-lg">
                            {subtitle}
                        </p>
                        <div className="space-y-6 border-10 rounded-xl p-6 ">
                            <p className="text-gray-600 text-lg">
                                We collaborate closely to understand your vision and the goals of your SaaS product. Our team researches market trends, competitors, and your target audience. We also create a roadmap for scalable architecture, define essential features, and develop wireframes.
                            </p>
                            <hr className="h-1 bg-black border-none" />
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-4">People involved</h4>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>Business Analyst</li>
                                        <li>Product Manager</li>
                                        <li>Software Architect</li>
                                        <li>Senior Developer</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-4">Deliverables</h4>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>Product roadmap</li>
                                        <li>Wireframes</li>
                                        <li>Technical Specs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;