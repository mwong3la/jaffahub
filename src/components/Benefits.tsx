"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface Benefit {
    title: string
    description: string
}

interface BenefitsProps {
    headerText?: string
    accordionBenefits: Benefit[]
    imageSrc?: string
    imageAlt?: string
    className?: string
}

export default function Benefits({
    headerText = "What are the benefits of using us",
    accordionBenefits,
    imageSrc = "/images/saas-benefit.png",
    imageAlt = "Professional working on laptop",
    className = "",
}: BenefitsProps) {
    const [expandedIndex, setExpandedIndex] = useState<number>(0)

    const toggleAccordion = (index: number) => {
        setExpandedIndex(index)
    }

    return (
        <div className={`py-10 p-4 md:px-12 lg:px-32 ${className}`}>
            {/* Top Section - Image and Main Benefit */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex-shrink-0">
                    <div className="relative aspect-[4/3] w-full max-w-md mx-auto lg:max-w-none">
                        <Image
                            src={imageSrc || "/placeholder.svg"}
                            alt={imageAlt}
                            fill
                            className="object-cover rounded-2xl"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>

                {/* Accordion Section */}
                <div className="w-full lg:w-1/2 space-y-6">
                    <h2 className="bg-white rounded-lg py-1 px-2 text-teal-500 font-medium">{headerText}</h2>
                    {accordionBenefits.map((benefit, index) => (
                        <div key={index} className="border-b pb-4">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between text-left group focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 rounded-lg p-2 -m-2"
                                aria-expanded={expandedIndex === index}
                            >
                                <h3
                                    className={`text-xl lg:text-2xl font-semibold transition-colors duration-200 ${expandedIndex === index ? "text-[#0B335A]" : "text-[#6E928B]"
                                        }`}
                                >
                                    {benefit.title}
                                </h3>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${expandedIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedIndex === index ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="text-gray-600 text-base lg:text-lg leading-relaxed pr-8">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
