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
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
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

const ContactForm = () => {
  return (
    <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Company"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
          />
        </div>
      </div>
      
      <div>
        <textarea
          placeholder="How can we help you?"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none"
        ></textarea>
      </div>
      
      <div className="text-sm text-gray-500">
        By selecting this, you agree to the{" "}
        <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a> and{" "}
        <a href="#" className="text-teal-600 hover:underline">Cookie Policy</a>
      </div>
      
      <button
        type="submit"
        className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
      >
        Request Free Estimate
      </button>
    </form>
  );
};

export default ProcessSection;