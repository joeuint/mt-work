import React from 'react'

interface ExampleProps {
    name?: string
    onClick?: () => void
}

const CareerPath: React.FC<ExampleProps> = () => {
    return (
        <div className="min-h-screen flex items-start justify-center p-8">
            <div className="shadow-2xl flex flex-col max-w-260 mx-auto rounded-xl p-8">
                
            </div>
        </div>
    )
}

export default CareerPath
