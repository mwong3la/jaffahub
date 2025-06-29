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
                title: "Cross-Platform Mastery",
                description:
                    "We develop mobile apps that ensure seamless performance across both iOS and Android platforms, maximizing user reach and delivering a unified brand experience.",
            },
            {
                title: "Optimized Performance",
                description:
                    "Our apps are built to perform, with attention to speed, usability, and smooth transitions, providing engaging mobile experiences for users on any device.",
            },
            {
                title: "Security-First Approach",
                description:
                    "We implement robust security protocols in every app, ensuring data privacy, compliance, and protection from threats to safeguard both your business and your users.",
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
                title="Mobile-First Experiences"
                highlight="That Engage and Retain"
                buttonText="Discuss My Project Needs"
                onButtonClick={() => router.push("/portfolio")}
            />

            <FeaturesSection
                title="Mobile apps are at the core of user interaction. We develop mobile apps that deliver high performance and exceptional user experience, ensuring your brand engages customers on iOS, Android, and cross-platform frameworks like React Native and Flutter."
                features={[
                    {
                        title: "iOS",
                        description: "Swift, Objective-C"
                    },
                    {
                        title: "Android",
                        description: "Kotlin, Java"
                    },
                    {
                        title: "Cross-Platform",
                        description: "React Native, Flutter"
                    },
                    {
                        title: "Backend",
                        description: "AWS, Firebase, Node.js, Python"
                    },
                    {
                        title: "APIs",
                        description: "GraphQL, RESTful APIs, Firebase"
                    },
                ]}
            />
            <Benefits
                headerText={benefitsData.headerText}
                accordionBenefits={benefitsData.accordionBenefits}
                imageSrc='/images/mobile.png'
                className='bg-[#F1F1F8]'
            />
            <InteractiveProcessSection steps={processSteps} />
            <ProcessSection
                className='bg-[#F1F1F8]'
            />
            <CTASection />
        </div>
    )
}

export default page