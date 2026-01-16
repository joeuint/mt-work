import { Icon } from '@iconify/react';

export default function ResumeBuilder2() {
  return (
    <div className="min-h-screen flex items-start justify-center p-8">
      <div className="shadow-2xl flex flex-col max-w-260 mx-auto rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center bg-linear-to-r from-purple-700 to-cyan-500 text-transparent bg-clip-text">
          What's the best way for employers to contact you?
        </h1>
        <p className="py-6 text-gray-600">You can edit this later</p>
        <div className="border-2 border-black rounded-md p-4 w-full">
          <div className="flex justify-between">
            <div className="">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                  <Icon className="transform rotate-90 bg-gray-200 rounded-md" icon="ph:dots-six" />
                  <p className="text-gray-400 font-semibold">AI Based Resume Builder</p>
                </div>
              </div>
              <h2 className="font-semibold text-purple-900 text-xl">Start Building Your Resume</h2>
            </div>
            <div className="">
              <div className="flex justify-end">
                <Icon className="text-purple-700" width={24} height={24} icon="mdi:pencil"></Icon>
              </div>
              <div className="relative inline-block">
                <img
                  src="/woman.png"
                  className="border-8 border-purple-700 w-32 h-32 object-cover rounded-full"
                  alt="profile"
                />
                <div className="absolute bottom-0 right-0 bg-purple-700 rounded-full p-1 shadow-lg">
                  <Icon icon="mdi:camera" width={20} height={20} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <form action="" className="mt-20 grid grid-cols-2 gap-x-10 gap-y-10">
          <div className="flex flex-col">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" className='py-5 px-5 border border-black rounded-2xl' />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName">Surname</label>
            <input type="text" name="lastName" id="lastName" className='py-5 px-5 border border-black rounded-2xl' />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" className='py-5 px-5 border border-black rounded-2xl' />
          </div>
          <div className="flex flex-col">
            <label htmlFor="number">Contact Number</label>
            <input type="text" name="number" id="number" className='py-5 px-5 border border-black rounded-2xl' />
          </div>
        </form>
        <button className='mt-20 bg-purple-100 p-8 rounded-2xl'>
          <div className="flex items-center justify-center">
            <Icon width={22} height={22} inline icon="mdi:plus"></Icon>
            <span>Add Social Links</span>
          </div>
        </button>
        <div className='flex justify-between mt-20'>
          <button className='bg-gray-200 text-purple-700 p-4 rounded-2xl'>Back</button>
          <button className='bg-[#8d65a9] text-white p-4 rounded-2xl'>Next: Choose a template</button>
        </div>
      </div>
    </div>
  );
}
