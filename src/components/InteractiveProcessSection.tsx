"use client"

import { useState } from "react"

interface ProcessStep {
  id: number
  title: string
  description: string
  peopleInvolved: string[]
  deliverables: string[]
}

interface InteractiveProcessSectionProps {
  title?: string
  subtitle?: string
  backgroundColor?: string
  steps: ProcessStep[]
}

const InteractiveProcessSection = ({
  title = "This is how we make it happen",
  subtitle = "From ideation to post-release support, we are active participants in your success and keep an eye on every possible opportunity to grow your product.",
  backgroundColor = "bg-white",
  steps,
}: InteractiveProcessSectionProps) => {
  const [activeStep, setActiveStep] = useState(1)

  const currentStep = steps.find((step) => step.id === activeStep) || steps[0]

  return (
    <section className={`py-20 px-4 md:px-8 lg:px-32 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl lg:w-3/4 font-bold text-gray-900 mb-12">{title}</h2>
            <div className="space-y-8">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="flex gap-4 cursor-pointer transition-all duration-200 hover:opacity-80"
                  onClick={() => setActiveStep(step.id)}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-sm font-medium transition-all duration-200 ${activeStep === step.id ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-600"
                      }`}
                  >
                    {step.id}
                  </div>
                  <div>
                    <h3
                      className={`text-xl font-semibold mb-2 transition-colors duration-200 ${activeStep === step.id ? "text-teal-600" : "text-gray-900"
                        }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="rounded-lg">
            <p className="text-gray-600 mb-12 text-lg">{subtitle}</p>
            <div className="space-y-6 border border-gray-200 rounded-xl p-6 bg-gray-50">
              <p className="text-gray-600 text-lg leading-relaxed">{currentStep.description}</p>
              <hr className="h-0.5 bg-gray-900 border-none" />
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">People involved</h4>
                  <ul className="space-y-2 text-gray-600">
                    {currentStep.peopleInvolved.map((person, index) => (
                      <li key={index}>{person}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Deliverables</h4>
                  <ul className="space-y-2 text-gray-600">
                    {currentStep.deliverables.map((deliverable, index) => (
                      <li key={index}>{deliverable}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveProcessSection
