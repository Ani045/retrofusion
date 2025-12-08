import React from "react";

const sliderImages = [
    "/images/gallery/Retrofusion1.jpg",
    "/images/gallery/image2.jpg",
    "/images/gallery/image4.jpg",
];

// Inline SVG Icons
const PersonalisedCelebrationsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M22 38h56v44H22z" />
        <path d="M50 38v44M22 60h56" />
        <path d="M50 38c0-8-6-14-12-14s-12 6-12 14M50 38c0-8 6-14 12-14s12 6 12 14" />
        <path d="M78 24l6-6M86 32l6-6M14 24l-6-6M22 32l-6-6" />
    </svg>
);

const InHouseChefIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M30 48h40c0-8 4-12 10-16S72 12 50 12c-22 0-30 12-30 20s10 8 10 16zM30 36h40" />
        <path d="M38 62s2 6 8 9l18 17" />
        <path d="M62 62s-2 6-8 9L36 88" />
        <path d="M36 60v8c0 3 2.5 5 5 5s5-2 5-5v-8M64 60v7c0 4-4 7-9 7" />
    </svg>
);

const PrivatePoolIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M15 30h70v45H15z" />
        <path d="M25 24v24M35 24v24M25 32h10M25 40h10M45 55c5 0 5-4 10-4s5 4 10 4 5-4 10-4" />
        <path d="M45 65c5 0 5-4 10-4s5 4 10 4 5-4 10-4" />
    </svg>
);

const LocalExperiencesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M50 15c-16.57 0-30 13.43-30 30 0 22.5 30 45 30 45s30-22.5 30-45c0-16.57-13.43-30-30-30z" />
        <path d="M35 55l8-12 7 7 15-15" />
        <path d="M60 45l5 10h-8" />
        <circle cx="65" cy="30" r="3" />
    </svg>
);

const CaretakerOnsiteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <circle cx="40" cy="35" r="10" />
        <path d="M18 80v-8c0-10 9-17 22-17M58 42l24 18v28H58" />
        <path d="M52 46.5L82 69" />
        <path d="M76 25c3-3 8-3 11 0s3 8 0 11l-11 11-11-11c-3-3-3-8 0-11s8-3 11 0z" />
    </svg>
);

const GamesRecreationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <rect x="15" y="35" width="50" height="30" rx="8" />
        <path d="M25 50h10M30 45v10" />
        <circle cx="55" cy="45" r="3" />
        <circle cx="48" cy="55" r="3" />
        <circle cx="78" cy="50" r="15" />
        <path d="M78 35v30M65 50h26M68 40l20 20M68 60l20-20" />
    </svg>
);

const ButlerServiceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M15 70h70" />
        <path d="M60 70v-4c0-14-8-26-24-26S12 52 12 66v4" />
        <path d="M32 40h8a4 4 0 0 0 0-8h-8a4 4 0 0 0 0 8z" />
        <path d="M70 70l12 12c3 3 6 3 9 0v-8c0-5-4-9-9-9h-6" />
        <path d="M82 82l-8 8" />
    </svg>
);

const GreenOpenSpaceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M10 70c15-10 35-10 50 0s30 5 30-5" />
        <path d="M10 85c20-8 40-5 60 5s25-5 25-15" />
        <path d="M75 25a10 10 0 0 1 0 20" />
        <path d="M75 25V18M85 25h7M82 39l5 5" />
        <path d="M30 55V40M25 45l5-5 5 5M25 50l5-5 5 5" />
    </svg>
);

const features = [
    { Icon: PersonalisedCelebrationsIcon, label: "Personalised\nCelebrations" },
    { Icon: InHouseChefIcon, label: "In-house\nChef" },
    { Icon: PrivatePoolIcon, label: "Private\nPool" },
    { Icon: LocalExperiencesIcon, label: "Local\nExperiences" },
    { Icon: CaretakerOnsiteIcon, label: "Caretaker\nOnsite" },
    { Icon: GamesRecreationIcon, label: "Games &\nRecreation" },
    { Icon: ButlerServiceIcon, label: "Butler\nService" },
    { Icon: GreenOpenSpaceIcon, label: "Green Open\nSpace" },
];

export default function RetrofusionStandard() {
    const [current, setCurrent] = React.useState(0);

    const next = () =>
        setCurrent((i) => (i === sliderImages.length - 1 ? 0 : i + 1));
    const prev = () =>
        setCurrent((i) => (i === 0 ? sliderImages.length - 1 : i - 1));

    return (
        <section className="bg-white px-4 sm:px-6 lg:px-16 py-10 lg:py-10">
            <div className="mx-auto max-w-7xl">
                {/* Heading Section */}
                <div className="mb-10 lg:mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-3">
                        The Retrofusion Standard
                    </h2>
                    <p className="text-base sm:text-lg text-stone-500">
                        Enjoy our signature features that make every stay effortless and enjoyable.
                    </p>
                </div>

                {/* Content Grid: Slider Left, Icons Right */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    {/* LEFT: Image Slider */}
                    <div className="w-full lg:w-[45%] lg:flex-shrink-0">
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                                src={sliderImages[current]}
                                alt="Retrofusion experience"
                                className="w-full h-[280px] sm:h-[340px] lg:h-[360px] object-cover"
                            />

                            {/* Navigation Arrow - Inside Image on Right */}
                            <button
                                onClick={next}
                                aria-label="Next image"
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white
                                flex items-center justify-center shadow-md transition-all duration-200"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-stone-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Left Arrow for mobile usability */}
                            <button
                                onClick={prev}
                                aria-label="Previous image"
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white
                                flex items-center justify-center shadow-md transition-all duration-200 sm:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-stone-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: Features grid - 2 rows × 4 columns */}
                    <div className="w-full lg:flex-1">
                        <div className="grid grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 lg:gap-x-8 lg:gap-y-10">
                            {features.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center text-center"
                                >
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-2 sm:mb-3">
                                        <item.Icon />
                                    </div>
                                    <p className="text-[10px] sm:text-xs lg:text-sm text-stone-700 leading-tight font-medium">
                                        {item.label.split("\n").map((line, i) => (
                                            <React.Fragment key={i}>
                                                {line}
                                                {i < item.label.split("\n").length - 1 && <br />}
                                            </React.Fragment>
                                        ))}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
