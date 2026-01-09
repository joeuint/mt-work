import { Icon } from '@iconify/react';
import LetsBeginButton from './LetsBeginButton';

export default function EmployeeOverview() {
  return (
    <div className="p-4">
      <div className="shadow-xl p-8 rounded-lg mt-16 max-w-[70vw] mx-auto">
        <h1 className="text-3xl font-medium text-gray-600 text-center">
          What is your main goal on{' '}
          <span className="bg-linear-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text font-bold">
            Metatalent
          </span>
        </h1>
        <p className="text-center">Select one option</p>
        <div className="flex gap-x-16 mt-16 px-8 justify-center">
          <div className="shadow-2xl rounded-xl max-w-90">
            <img className="w-full rounded-t-xl object-cover" src="/up-skill.png" alt="Option 1" />
            <div className="p-8">
              <h2 className="text-3xl flex items-center mb-2">
                <span>
                  <Icon width={37} height={37} icon="mdi:fire" />
                </span>{' '}
                Upskill
              </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              <LetsBeginButton />
            </div>
          </div>
          <div className="shadow-2xl rounded-xl max-w-90">
            <img
              className="w-full rounded-t-xl object-cover"
              src="/cross-skill.png"
              alt="Option 2"
            />
            <div className="p-8">
              <h2 className="text-3xl flex items-center mb-2">
                <span>
                  <Icon width={37} height={37} icon="mdi:fire" />
                </span>{' '}
                Cross-Skill
              </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              <LetsBeginButton />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#44196A] text-white rounded-md p-4 font-medium mt-12">
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
}
