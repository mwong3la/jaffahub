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
                "We analyze market trends, identify key features, and map out user journeys to create wireframes and prototypes.",
            peopleInvolved: ["Business Analyst", "UI/UX Designer", "Product Manager"],
            deliverables: ["Product roadmap", "Wireframes", "Wireframers"],
        },
        {
            id: 2,
            title: "Development Planning",
            description:
                "We choose the tech stack (iOS, Android, or hybrid), finalize the architecture, and prepare the team for development.",
            peopleInvolved: ["Technical Lead", "Senior Developers", "DevOps Engineer", "QA Lead"],
            deliverables: ["Technical architecture", "Team structure", "Success metrics"],
        },
        {
            id: 3,
            title: "App Design and Development",
            description:
                "We develop the mobile app based on approved wireframes, following user-centric design principles.",
            peopleInvolved: ["Mobile Developers", "Quality Assurance", "UI/UX"],
            deliverables: ["MVP version of the app", "Source code", "App Store deployment"],
        },
        {
            id: 4,
            title: "Post-launch Support",
            description:
                "We provide ongoing bug fixes, performance optimization, and feature updates.",
            peopleInvolved: ["Mobile Developers ", "Technical Support", "Team"],
            deliverables: ["App performance reports", "Continuous updates", "Security improvements"],
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
            <InteractiveProcessSection
                steps={processSteps}
            />
            <ProcessSection
                className='bg-[#F1F1F8]'
            />
            <CTASection />
        </div>
    )
}

export default page