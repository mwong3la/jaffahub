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
                "We analyze your product concept, define the MVP's core features, and prepare wireframes and prototypes.",
            peopleInvolved: ["Business Analyst", "UI/UX Designer", "Product Manager"],
            deliverables: ["Wireframes", "Prototypes", "MVP roadmap"],
        },
        {
            id: 2,
            title: "Development Planning",
            description:
                "We outline the tech stack, set timelines, and assign the development team for the MVP.",
            peopleInvolved: ["Product Manager", "Software Architect", "Development Team"],
            deliverables: ["Development timeline", "Success metrics", "Team structure"],
        },
        {
            id: 3,
            title: "MVP Design and Development",
            description:
                "We rapidly develop the MVP with prioritized core features and ensure thorough testing.",
            peopleInvolved: ["Front-end Developers", "Back-end Developers", "UI/UX Designer", "Quality Assurance"],
            deliverables: ["MVP version of the product", "Source code", "Deployment documentation"],
        },
        {
            id: 4,
            title: "Post-launch Support",
            description:
                "We collect feedback, iterate on features, and ensure the MVP evolves into a fully-featured product.",
            peopleInvolved: ["Product Manager", "Development Team", "Technical Support"],
            deliverables: ["User feedback reports", "Iterative updates", "Performance monitoring"],
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
            <InteractiveProcessSection
                steps={processSteps}
            />
            <ProcessSection
                className='bg-[#F7F1F8]'
            />
            <CTASection />
        </div>
    )
}

export default page