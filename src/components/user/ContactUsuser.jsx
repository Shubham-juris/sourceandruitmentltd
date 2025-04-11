import { useState } from 'react';

export default function ContactUsuser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', { name, email, message });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 mb-8 py-8">
      <h1 className="text-5xl font-bold text-center text-orange-500 mb-4">Contact Us</h1>
      
      <div className="border-t border-gray-200 w-24 mx-auto mb-8"></div>
      
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-medium mb-4">For Questions or Quotes:</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4 mt-7">
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>
            
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email*"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-orange-500"
                required
              />
            </div>
            
            <div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                rows="6"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-orange-500"
              ></textarea>
            </div>
            <div className="py-4">
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full uppercase"
            >
              SEND
            </button>
            </div>
          </form>
          
          
          <p className="text-xs text-gray-500 text-center mt-3">
            This site is protected by reCAPTCHA and the Google 
            <a href="#" className="text-orange-500 hover:text-orange-700 mx-1">Privacy Policy</a>
            and
            <a href="#" className="text-orange-500 hover:text-orange-700 mx-1">Terms of Service</a>
            apply.
          </p>
        </div>
        
        <div>
          <p className="text-gray-700 py-5 px-4">
            Let us tailor a service package that meets your needs. Tell us a little 
            about your business, and we will get back to you with some ideas as 
            soon as possible.
          </p>
          
          <h3 className="text-lg font-medium px-4 mb-2">Source and Recruitment</h3>
          
          <h4 className="text-lg font-medium px-4 mb-2">Hours</h4>
          <div>
          <ul className="text-gray-700 mb-6 px-4">
            <li className="flex mb-1">
              <span className="w-10 ">Mon</span>
              <span>09:00 a.m. – 05:00 p.m.</span>
            </li>
            <li className="flex mb-1 ">
              <span className="w-10">Tue</span>
              <span>09:00 a.m. – 05:00 p.m.</span>
            </li>
            <li className="flex mb-1">
              <span className="w-10">Wed</span>
              <span>09:00 a.m. – 05:00 p.m.</span>
            </li>
            <li className="flex mb-1">
              <span className="w-10">Thu</span>
              <span>09:00 a.m. – 05:00 p.m.</span>
            </li>
            <li className="flex mb-1">
              <span className="w-10">Fri</span>
              <span>09:00 a.m. – 05:00 p.m.</span>
            </li>
            <li className="flex mb-1">
              <span className="w-10">Sat</span>
              <span>Closed</span>
            </li>
            <li className="flex mb-1">
              <span className="w-10">Sun</span>
              <span>Closed</span>
            </li>
          </ul>
          
          <p className="text-gray-700 px-4">
            Monday - Friday: 9am - 5pm<br />
            Saturday - Sunday: Closed
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}