"use client"

import Benefits from '@/components/Benefits'
import { CTASection } from '@/components/CTASection'
import FeaturesSection from '@/components/FeatureSection'
import HeroSection from '@/components/HeroSection'
import InteractiveProcessSection from '@/components/InteractiveProcessSection'
import ProcessSection from '@/components/ProcessSection'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter()

    const benefitsData = {
        headerText: "What are the benefits of using us",
        accordionBenefits: [
            {
                title: "Tailored to Your Needs",
                description:
                    "We develop mobile apps that ensure seamless performance across both iOS and Android platforms, maximizing user reach and delivering a unified brand experience.",
            },
            {
                title: "Seamless Integration",
                description:
                    "Our solutions ensure smooth interoperability with existing tools and platforms, helping you leverage your current infrastructure while introducing new efficiencies.",
            },
            {
                title: "Agile Development Process",
                description:
                    "We use an agile methodology to rapidly iterate, adapting your software to real-world demands and user feedback while maintaining high standards of quality and reliability.",
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
                title="Tailored Software to "
                highlight="Meet Your Exact Needs"
                buttonText="Discuss My Project Needs"
                onButtonClick={() => router.push("/portfolio")}
            />
            <FeaturesSection
                title="Off-the-shelf software often doesn’t meet the specific needs of businesses. We create custom solutions tailored to your operations, ensuring scalability, integration, and long-term success. "
                subtitle='Whether automating processes or developing entirely new platforms, we ensure our solutions work seamlessly for your business.'
                features={[
                    {
                        title: "Languages",
                        description: "Python, Java, C#, JavaScript"
                    },
                    {
                        title: "Frameworks",
                        description: "Spring, ASP.NET ,Django"
                    },
                    {
                        title: "Cloud",
                        description: "AWS, Azure, Google Cloud"
                    },
                    {
                        title: "Databases",
                        description: "SQL Server, Oracle, MySQL"
                    },
                ]}
            />
            <Benefits
                headerText={benefitsData.headerText}
                accordionBenefits={benefitsData.accordionBenefits}
                imageSrc='/images/custom.png'
                className='bg-[#F8F1F1]'
            />
            <InteractiveProcessSection steps={processSteps} />
            <ProcessSection
                className='bg-[#F8F1F1]'
            />
            <CTASection />
        </div>
    )
}

export default page