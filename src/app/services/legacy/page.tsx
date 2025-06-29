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
                title: "Modern Tech Stack",
                description:
                    "We upgrade legacy systems with modern technologies, ensuring improved performance, scalability, and security while maintaining the integrity of your existing operations.",
            },
            {
                title: "Minimal Disruption",
                description:
                    "Our modernization approach is designed to cause minimal disruption to your business operations, allowing you to continue using your existing systems while transitioning smoothly.",
            },
            {
                title: "Enhanced Security",
                description:
                    "We fortify legacy applications with the latest security protocols, reducing vulnerabilities and protecting your system from modern cybersecurity threats.",
            },
        ],
    }

    const processSteps = [
        {
            id: 1,
            title: "Product Discovery",
            description:
                "We assess your current systems, identify pain points, and outline the best strategy to modernize your legacy application.",
            peopleInvolved: ["Business Analyst", "Software Architect", "Product Manager"],
            deliverables: ["Modernization roadmap", "Technical architecture", "System audit"],
        },
        {
            id: 2,
            title: "Development Planning",
            description:
                "We choose the tech stack and finalize the modernization strategy, preparing the development team and setting milestones.",
            peopleInvolved: ["Product Manager", "Software Architect", "Development Team"],
            deliverables: ["Development timeline", "Success metrics", "Team composition"],
        },
        {
            id: 3,
            title: "Legacy Modernization and Development",
            description:
                "Our team updates your system with new technologies, improving performance, security, and scalability.",
            peopleInvolved: ["Front-end Developers", "Back-end Developers", "UI/UX Designer", "Quality Assurance"],
            deliverables: ["Modernized application", "Source code", "Deployment documentation"],
        },
        {
            id: 4,
            title: "Post-launch Support",
            description:
                "We provide ongoing support to ensure the modernized system runs smoothly, with updates as needed.",
            peopleInvolved: ["Technical Support", "Development Team"],
            deliverables: ["Maintenance reports", "Performance monitoring", "Updates"],
        },
    ]

    return (
        <div className="min-h-screen">
            <HeroSection
                title="Future-Proof your "
                highlight="Legacy Systems"
                buttonText="Discuss My Project Needs"
                onButtonClick={() => router.push("/portfolio")}
            />

            <FeaturesSection
                title='Outdated applications can hold your business back. We specialize in modernizing legacy systems, transitioning them to the latest technologies, improving performance, security, and user experience, while ensuring smooth operations during migration.'
                features={[
                    {
                        title: "Languages",
                        description: "Java, .NET, C++"
                    },
                    {
                        title: "Frameworks",
                        description: "Spring, ASP.NET Core"
                    },
                    {
                        title: "Databases",
                        description: "SQL Server, Oracle, MySQL"
                    },
                    {
                        title: "Cloud",
                        description: "AWS, Azure, Google Cloud"
                    },
                    {
                        title: "Microservices",
                        description: "Docker, Kubernetes"
                    }
                ]}
            />
            <Benefits
                headerText={benefitsData.headerText}
                accordionBenefits={benefitsData.accordionBenefits}
                imageSrc="/images/legacy.png"
                className='bg-[#F1F4F8]'
            />
            <InteractiveProcessSection
                steps={processSteps}
            />
            <ProcessSection
                className='bg-[#F1F4F8]'
            />
            <CTASection />
        </div>
    )
}

export default page