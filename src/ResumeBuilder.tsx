import LetsBeginButton from "./LetsBeginButton";

export default function ResumeBuilder() {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="shadow-2xl flex max-w-200 mx-auto rounded-xl">
                <img className="rounded-l-xl" src="/resume.png" />

                <div className="p-8 flex flex-col w-full">
                    <h1 className="text-4xl font-bold text-center bg-linear-to-r from-purple-700 to-cyan-500 text-transparent bg-clip-text">Build Your Resume</h1>
                    <p className="max-w-96 mx-auto mt-4">
                        Do you have a dream job in mind but aren't sure how to get there? Well, fear not! There are various career paths you can choose from that will help you gain the skills and reach the milestones required for your dream job.

                    </p>

                    <div className="flex justify-end">
                        <div className="w-1/2">
                            <LetsBeginButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}