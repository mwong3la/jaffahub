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
                "We collaborate to understand your unique business needs, mapping out software architecture and core features.",
            peopleInvolved: ["Business Analyst", "Product Manager", "Software Architect"],
            deliverables: ["Product roadmap", "Wireframes", "Technical requirements"],
        },
        {
            id: 2,
            title: "Development Planning",
            description:
                "We define the tech stack, draft a timeline, and assign a team based on your software requirements.",
            peopleInvolved: ["Product Manager", "Software Architect", "Development Team"],
            deliverables: ["Development timeline", "Tech stack", "Success metrics"],
        },
        {
            id: 3,
            title: "Custom Software Design and Development",
            description:
                "We create the custom software with a focus on integrating key business functionalities and third-party systems.",
            peopleInvolved: ["Front-end Developers", "Back-end Developers", "Quality Assurance", "UI/UX Designer"],
            deliverables: ["Fully functional software", "Source code", "Technical documentation"],
        },
        {
            id: 4,
            title: "Post-launch Support",
            description:
                "We offer regular updates, performance monitoring, and bug fixing to ensure long-term usability.",
            peopleInvolved: ["Technical support", "Development Team"],
            deliverables: ["Maintenance reports", "Continuous updates", "Security patches"],
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