import React from 'react';
import Commencing from '../../assets/images/Commencing.jpg';
import Facilitating from '../../assets/images/Facilitating.jpg';
import Guiding from '../../assets/images/Guiding.jpg';
import Empowering from '../../assets/images/Empowering.jpg';

export default function JobAssistanceSection() {
  return (
    <div className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-bold text-orange-500 mb-4">
          How We Assist You in Finding Employment
        </h2>
        <div className="w-24 h-0.5 bg-gray-300 mx-auto my-10"></div>
        <p className="text-gray-700 max-w-3xl mx-auto text-center text-2xl">
          Unlock innovative job search tools tailored to your needs. Our dedicated team is here to support
          you every step of the way, blending cutting-edge technology with personalized assistance to
          expedite your job search process.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center mb-16 py-8">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img 
            src={Commencing}
            alt="Person writing on notepad"
            className="rounded-lg shadow-lg w-full h-80 object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            1. Commencing Your Job Search at Zero Cost
          </h3>
          <p className="text-gray-700">
            Begin your job hunt hassle-free by either applying directly or uploading
            your resume. Gain access to a plethora of sought-after positions
            boasting competitive remuneration and perks.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center mb-16">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img 
            src={Facilitating}
            alt="Team reviewing documents"
            className="rounded-lg shadow-lg w-full h-80 object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 md:pr-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            2. Facilitating the Perfect Match
          </h3>
          <p className="text-gray-700">
            Receive customized job matches directly to your inbox and mobile
            device, ensuring you're always in the loop with the latest opportunities
            that align with your qualifications and preferences.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center mb-16">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img 
            src={Guiding} 
            alt="People collaborating at whiteboard"
            className="rounded-lg shadow-lg w-full h-80 object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            3. Guiding You to Job Success
          </h3>
          <p className="text-gray-700">
            From interview preparation to salary negotiation, we provide
            comprehensive support to help you secure your dream job. Our team
            acts as your advocate, ensuring your interests are represented with
            potential employers.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img 
            src={Empowering}
            alt="Person shaking hands after successful interview"
            className="rounded-lg shadow-lg w-full h-80 object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 md:pr-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            4. Empowering Your Career Trajectory
          </h3>
          <p className="text-gray-700">
            Stay focused on your future with our array of complimentary
            resources, including online training modules and expert advice. Keep
            your skills sharp, your profile up-to-date, and gain invaluable insights
            to propel your career forward.
          </p>
        </div>
      </div>
    </div>
  );
}