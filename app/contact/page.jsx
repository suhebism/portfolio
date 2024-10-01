'use client'
import React,{useState} from 'react'

const page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here, like sending data to an API or email service
    console.log('Form Data:', formData);
  };
  return (
    <div className="min-h-screen  flex flex-col gap-3 md:gap-10 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className='text-xl md:text-2xl lg:text-5xl 2xl:text-7xl text-center'>Get in touch at suhebism@gmail.com</h1>
      <div className='text-xl md:text-2xl lg:text-5xl 2xl:text-7xl'>OR</div>
      <h1 className='text-xl md:text-2xl lg:text-5xl 2xl:text-7xl'>+91 8660215481</h1>
      {/* <div className="max-w-md w-full space-y-8">
        <div>
        
          <h2 className="text-center text-3xl font-extrabold ">Contact</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We'd love to hear from you! Fill out the form below.
          </p>
        </div>
        <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
          <div className=" flex flex-col gap-5 shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border-b border-gray-800 placeholder-gray-500 text-gray-900 bg-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border-b  border-gray-800 placeholder-gray-500 text-gray-900  bg-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email Address"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border-b  border-gray-800 placeholder-gray-500 text-gray-900  bg-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Your Message"
                rows="4"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div> */}
    </div>
  );
}

export default page
