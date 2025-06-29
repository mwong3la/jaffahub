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
                title: "High-Performance Solutions",
                description:
                    "We craft web apps designed to handle heavy traffic and scale efficiently, delivering fast, responsive experiences that keep your users engaged.",
            },
            {
                title: "Full Stack Expertise",
                description:
                    "Our team excels in frontend and backend development, ensuring smooth integration between your web services, databases, and client-side interfaces for optimal user interaction.",
            },
            {
                title: "Continuous Optimization",
                description:
                    "We provide ongoing updates and optimization services, keeping your web app secure, up-to-date, and aligned with evolving business goals.",
            },
        ],
    }

    const processSteps = [
        {
            id: 1,
            title: "Product Discovery",
            description:
                "We define user journeys, analyze competition, and create wireframes and technical specifications.",
            peopleInvolved: ["Business Analyst", "Product Manager", "UI/UX Designer"],
            deliverables: ["Wireframes", "Technical requirements", "Product roadmap"],
        },
        {
            id: 2,
            title: "Development Planning",
            description:
                "We finalize the tech stack and architecture, preparing the development team and setting key milestones.",
            peopleInvolved: ["Product Manager", "Software Architect", "Web Developers"],
            deliverables: ["Development timeline", "Tech stack", "Team structure"],
        },
        {
            id: 3,
            title: "Web App Design and Development",
            description:
                "Our team builds the web app with a focus on scalability, performance, and security.",
            peopleInvolved: ["Front-end Developers", "Back-end Developers", "Quality Assurance", "UI/UX Designer"],
            deliverables: ["Fully functional web app", "Source code", "Deployment documentation"],
        },
        {
            id: 4,
            title: "Post-launch Support",
            description:
                "We offer ongoing monitoring, performance optimization, and feature scaling.",
            peopleInvolved: ["Technical Support", "Web Developers"],
            deliverables: ["Performance monitoring", "Feature updates", "Security improvements"],
        },
    ]

    return (
        <div className="min-h-screen">
            <HeroSection
                title="High-Performance "
                highlight="Web Apps that Excel"
                buttonText="Discuss My Project Needs"
                onButtonClick={() => router.push("/portfolio")}
            />

            <FeaturesSection
                title="Web applications are critical to your business. We build fast, secure, and scalable web apps that deliver an optimal user experience."
                subtitle='From small-scale apps to enterprise solutions, we ensure that your web app exceeds expectations in terms of performance and usability.'
                features={[
                    {
                        title: "Frontend",
                        description: "React, Angular, Vue.js"
                    },
                    {
                        title: "Backend",
                        description: "Node.js, Python, PHP, .NET"
                    },
                    {
                        title: "Databases",
                        description: "MySQL, MongoDB, PostgreSQL"
                    },
                    {
                        title: "DevOps",
                        description: "Docker, Jenkins, Kubernetes"
                    },
                    {
                        title: "Frameworks",
                        description: "Django, Express, Laravel"
                    },
                ]}
            />
            <Benefits
                headerText={benefitsData.headerText}
                accordionBenefits={benefitsData.accordionBenefits}
                imageSrc='/images/web.png'
                className='bg-[#F8F5F1]'
            />
            <InteractiveProcessSection
                steps={processSteps}
            />
            <ProcessSection
                className='bg-[#F8F5F1]'
            />
            <CTASection />
        </div>
    )
}

export default page