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
                title: "Fast-to-Market",
                description:
                    "We rapidly develop MVPs to validate your idea, enabling early market entry and quick iterations based on real user feedback, saving time and resources.",
            },
            {
                title: "Core Functionality Focus",
                description:
                    "Our MVPs prioritize essential features, allowing you to test key aspects of your product while minimizing development costs and focusing on high-impact areas.",
            },
            {
                title: "Agile Adjustments",
                description:
                    "Our process allows for flexible and fast adjustments, ensuring your MVP evolves quickly in response to market needs or changing business objectives.",
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
                title="Launch Faster,"
                highlight="Validate Smarter"
                buttonText="Discuss My Project Needs"
                onButtonClick={() => router.push("/portfolio")}
            />

            <FeaturesSection
                title="We help startups and businesses rapidly bring their MVPs to market, focusing on core features and user experience to validate ideas quickly. "
                subtitle='Our agile approach allows for fast iterations, helping you gather feedback and adjust your product efficiently.'
                features={[
                    {
                        title: "Languages",
                        description: "JavaScript (Node.js), Python, Ruby on Rails"
                    },
                    {
                        title: "Frameworks",
                        description: "Spring, ASP.NET ,Django"
                    },
                    {
                        title: "Cloud",
                        description: "AWS, Heroku, Firebase"
                    },
                    {
                        title: "DevOps",
                        description: "Docker, Kubernetes, CI/CD pipelines"
                    },
                ]}
            />
            <Benefits
                headerText={benefitsData.headerText}
                accordionBenefits={benefitsData.accordionBenefits}
                imageSrc='/images/mvp.png'
                className='bg-[#F7F1F8]'
            />
            <InteractiveProcessSection steps={processSteps} />
            <ProcessSection
                className='bg-[#F7F1F8]'
            />
            <CTASection />
        </div>
    )
}

export default page