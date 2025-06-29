"use client"

import Benefits from '@/components/Benefits'
import { CTASection } from '@/components/CTASection'
import FeaturesSection from '@/components/FeatureSection'
import HeroSection from '@/components/HeroSection'
import InteractiveProcessSection from '@/components/InteractiveProcessSection'
import MoreBenefits from '@/components/InteractiveProcessSection'
import ProcessSection from '@/components/ProcessSection'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const router = useRouter()

  const benefitsData = {
    headerText: "What are the benefits of using us",
    accordionBenefits: [
      {
        title: "Proven Expertise",
        description:
          "Our team has years of experience delivering scalable SaaS solutions that are optimized for both growth and performance, ensuring high-value results for your business.",
      },
      {
        title: "End-to-End Support",
        description:
          "From initial concept to cloud deployment, we manage the entire process, ensuring seamless integration, timely delivery, and ongoing support tailored to your business needs.",
      },
      {
        title: "Scalability & Security",
        description:
          "Our solutions prioritize scalability with high availability, while adhering to industry-leading security standards, protecting your data and ensuring a cost-effective, future-proof setup.",
      },
    ],
  }
  const processSteps = [
    {
      id: 1,
      title: "Product Discovery",
      description:
        "We collaborate closely to understand your vision and the goals of your SaaS product. Our team researches market trends, competitors, and your target audience. We also create a roadmap for scalable architecture, define essential features, and develop wireframes.",
      peopleInvolved: ["Business Analyst", "Product Manager", "Software Architect", "Senior Developer"],
      deliverables: ["Product roadmap", "Wireframes", "Technical Specs"],
    },
    {
      id: 2,
      title: "Development Planning",
      description:
        "We create detailed technical specifications and development timelines. Our team establishes the technology stack, defines coding standards, and sets up development environments for optimal productivity.",
      peopleInvolved: ["Technical Lead", "Senior Developers", "DevOps Engineer", "QA Lead"],
      deliverables: ["Technical architecture", "Development timeline", "Resource allocation plan"],
    },
    {
      id: 3,
      title: "SaaS Design and Development",
      description:
        "Our experienced team builds your SaaS product using modern technologies and best practices. We focus on scalability, security, and user experience while maintaining clean, maintainable code.",
      peopleInvolved: ["Full-stack Developers", "UI/UX Designers", "QA Engineers", "Security Specialist"],
      deliverables: ["MVP application", "User interface design", "Quality assurance reports"],
    },
    {
      id: 4,
      title: "Post-launch Support",
      description:
        "We provide ongoing maintenance, monitoring, and feature enhancements to ensure your SaaS product continues to meet user needs and business objectives as it grows.",
      peopleInvolved: ["Support Engineers", "DevOps Team", "Product Manager", "Customer Success"],
      deliverables: ["Monitoring dashboard", "Performance reports", "Feature updates"],
    },
  ]
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Effortless Scaling with"
        highlight="SaaS Solutions"
        buttonText="Discuss My Project Needs"
        onButtonClick={() => router.push("/portfolio")}
      />

      <FeaturesSection />
      <Benefits
        headerText={benefitsData.headerText}
        accordionBenefits={benefitsData.accordionBenefits}
        className='bg-[#F1F8F7]'
      />
      <InteractiveProcessSection steps={processSteps} />
      <ProcessSection />
      <CTASection />
    </div>
  )
}

export default page