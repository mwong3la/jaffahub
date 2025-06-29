import { Shield, Users, Zap, Target } from "lucide-react";

interface Feature {
    title: string;
    description: string;
}

interface FeaturesSectionProps {
    title?: string;
    subtitle?: string;
    features?: Feature[];
}

const defaultFeatures: Feature[] = [
    {
        title: "Cloud Platforms",
        description: "AWS, Google Cloud, Microsoft Azure"
    },
    {
        title: "Backends",
        description: "Laravel, Django, Ruby on Rails, .NET"
    },
    {
        title: "Databases",
        description: "MySQL, PostgreSQL, MongoDB, Amazon Aurora"
    },
    {
        title: "DevOps",
        description: "Docker, Kubernetes, Jenkins, GitHub"
    }
];

const FeaturesSection = ({
    title = "Tech stack that stacks up",
    subtitle = "Your customers demand reliability and flexibility. We create SaaS platforms that offer scalable, secure, and high-performance solutions tailored to meet your business needs.",
    features = defaultFeatures
}: FeaturesSectionProps) => {
    return (
        <section className="py-20 px-32 bg-white">
            <div className="mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {subtitle}
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            With cloud-native architectures, your app scales effortlessly, adapting to growth while maintaining peak performance.
                        </p>
                    </div>

                    <div className="border p-6 rounded-xl">
                        <h3 className="text-2xl font-bold text-teal-600 mb-8">{title}</h3>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4 border-b last:border-b-0">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">
                                            {feature.title}:
                                        </h4>
                                        <p className="text-gray-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;