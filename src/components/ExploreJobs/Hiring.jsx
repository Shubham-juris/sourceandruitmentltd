import React, { useState } from 'react';

export default function JobApplicationForm() {
  const [formData, setState] = useState({
    name: '',
    phone: '',
    email: '',
    coverLetter: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  
  return (
    <div className="max-w-6xl mx-auto mt-20 p-6 bg-white font-sans">
      <h1 className="text-4xl font-normal text-center text-orange-500 mb-3">Administrative Assistant</h1>
      <div className="border-t border-gray-400 w-30 mx-auto mb-8"></div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - Job Description */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Full Job Description</h2>
          
          <p className="mb-4 text-gray-700">
            We are seeking a highly organized and detail-oriented <span className="font-semibold">Administrative Assistant</span> to join the Arcfield team in Calgary. The ideal candidate will be responsible for providing administrative support to ensure efficient operation of the office.
          </p>
          
          <h3 className="font-semibold text-gray-800 mb-2">Responsibilities:</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
            <li>Greet and sign in visitors and contractors at the reception desk.</li>
            <li>Manage and coordinate office activities, including handling incoming calls, mail distribution, and other communications.</li>
            <li>Maintain office filing and storage systems.</li>
            <li>Maintain, organize, and order office supplies.</li>
            <li>Assist in the preparation of reports, presentations, and correspondence.</li>
            <li>Schedule and coordinate meetings, appointments, and travel arrangements.</li>
          </ul>
          
          <h3 className="font-semibold text-gray-800 mb-2">Minimum Qualifications:</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
            <li>3-5 years of administrative experience.</li>
            <li>Minimum High School diploma.</li>
            <li>Knowledge of office administrative procedures.</li>
            <li>Large event planning experience.</li>
            <li>Intermediate proficiency in MS Office applications.</li>
            <li>Strong attention to detail and problem-solving skills.</li>
            <li>Excellent written and verbal communication skills.</li>
          </ul>
        </div>
        
        {/* Right Column - Application Form */}
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Apply Now</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name*"
                className="w-full border border-gray-300 p-3 rounded"
                required
              />
            </div>
            
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone*"
                className="w-full border border-gray-300 p-3 rounded"
                required
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                className="w-full border border-gray-300 p-3 rounded"
                required
              />
            </div>
            
            <div>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                placeholder="Cover Letter"
                className="w-full border border-gray-300 p-3 rounded h-40"
              />
            </div>
            
            <div className="flex items-center">
              <span className="text-orange-500 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                </svg>
              </span>
              <span className="text-orange-500">Attach Resume</span>
              <span className="ml-auto text-gray-500 text-sm">Attachments (0)</span>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-orange-500 text-white py-4 rounded-3xl font-semibold hover:bg-orange-600 transition-colors"
            >
              SUBMIT APPLICATION
            </button>
            
            <p className="text-sm text-gray-600 mt-2">
              This site is protected by reCAPTCHA and the Google 
              <span className="text-orange-500"> Privacy Policy</span> and 
              <span className="text-orange-500"> Terms of Service</span> apply.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}