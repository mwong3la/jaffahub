import ContactForm from "./ContactForm";

interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

interface ProcessSectionProps {
    title?: string;
    steps?: ProcessStep[];
}

const defaultSteps: ProcessStep[] = [
    {
        number: "1",
        title: "Intro call",
        description: "During a 30-minute meeting, our domain expert dives into your business and describes the steps for future collaboration."
    },
    {
        number: "2",
        title: "Free discovery workshop",
        description: "Together with you, our technical team defines the user flow, feature list, and project risks."
    },
    {
        number: "3",
        title: "Project planning",
        description: "We provide the implementation plan, timelines and estimations for your project."
    }
];

const ProcessSection = ({
    title = "How does it work?",
    steps = defaultSteps
}: ProcessSectionProps) => {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">
                            {title}
                        </h2>

                        <div className="max-w-2xl">
                            <div className="relative">
                                {steps.map((step, index) => (
                                    <div key={index} className="flex gap-6 mb-12 last:mb-0">
                                        <div className="relative flex flex-col items-center">
                                            <div className="w-3 h-3 bg-teal-500 rounded-full z-10"></div>

                                            {index < steps.length - 1 && (
                                                <div className="w-0.5 bg-black mt-2 mb-2" style={{ height: '80px' }}></div>
                                            )}
                                        </div>
                                        <div className="flex-1 pt-0">
                                            <h3 className="text-xl font-bold text-slate-800 mb-3">
                                                {step.number}. {step.title}
                                            </h3>
                                            <p className="text-slate-600 leading-relaxed text-base">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-lg">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};



export default ProcessSection;