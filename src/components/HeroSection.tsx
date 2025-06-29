import { Button } from "@/components/ui/button"

const HeroSection = ({
    title,
    highlight,
    buttonText,
    onButtonClick,
    className = "",
}: {
    title: string
    highlight: string
    buttonText: string
    onButtonClick?: () => void
    className?: string
}) => {
    return (
        <section className={`bg-gradient-to-br from-[#FDFDFE] to-[#E1F8F1] py-20 lg:py-32 ${className}`}>
            <div className="px-32">
                <div className="max-w-2xl">
                    <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                        {title} <span className="text-teal-600">{highlight}</span>
                    </h1>
                    <Button
                        className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full"
                        onClick={onButtonClick}
                    >
                        {buttonText}
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
