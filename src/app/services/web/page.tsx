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
            <InteractiveProcessSection steps={processSteps} />
            <ProcessSection
                className='bg-[#F8F5F1]'
            />
            <CTASection />
        </div>
    )
}

export default page