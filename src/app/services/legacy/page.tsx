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
                imageSrc = "/images/legacy.png"
                className='bg-[#F1F4F8]'
            />
            <InteractiveProcessSection steps={processSteps} />
            <ProcessSection
                className='bg-[#F1F4F8]'
            />
            <CTASection />
        </div>
    )
}

export default page