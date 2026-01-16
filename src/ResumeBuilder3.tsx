import { Icon } from '@iconify/react';

export default function ResumeBuilder3() {
    return (
        <div className="min-h-screen flex items-start justify-center p-8">
            <div className="shadow-2xl flex flex-col max-w-260 mx-auto rounded-xl p-8">
                <div className="border-2 border-black rounded-md p-4 w-full">
                    <div className="flex justify-center gap-x-48 items-center">
                        <div className="">
                            <p className='text-center text-sm font-semibold mb-12'>Professional Blue</p>
                            <img className="h-96 object-cover" src="/resumedoc.png" alt="A resume document" />
                        </div>
                        <div className="">
                            <p className='text-center text-sm font-semibold mb-12'>Contemporary</p>
                            <img className="h-96 object-cover" src="/resumedoc2.png" alt="Another resume document" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}