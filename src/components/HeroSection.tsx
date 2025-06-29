import { Button } from "@/components/ui/button"

const HeroSection = ({
    title,
    highlight,
    buttonText,
    onButtonClick,
    className = "",
    backgroundImage
}: {
    title: string
    highlight: string
    buttonText: string
    onButtonClick?: () => void
    className?: string
    backgroundImage?: string
}) => {
    return (
        <section
            className={`relative bg-gradient-to-br from-[#FDFDFE] to-[#E1F8F1] py-20 lg:py-32 ${className}`}
            style={{
                backgroundImage: backgroundImage
                    ? `url(${backgroundImage}), linear-gradient(to bottom right, #FDFDFE, #E1F8F1)`
                    : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {backgroundImage && (
                <div className="absolute inset-0 bg-black opacity-50 pointer-events-none z-0" />
            )}

            <div className="relative z-10 p-4 md:px-12 lg:px-32">
                <div className="max-w-2xl">
                    <h1
                        className={`text-4xl lg:text-6xl font-bold mb-8 leading-tight ${backgroundImage ? "text-white" : "text-gray-900"
                            }`}
                    >
                        {title}{" "}
                        <span className={backgroundImage ? "text-white" : "text-teal-600"}>
                            {highlight}
                        </span>
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
