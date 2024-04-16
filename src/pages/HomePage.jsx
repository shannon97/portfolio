// import React from "react";
// import { useNavigate } from "react-router-dom";

// import "../index.css"

// function HomePage() {

//     const navigate = useNavigate();

//     return (
//         <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, white 45%, #ffe2c0 55%)' }} className="font-raleway flex items-center justify-center">
//             <div className="container mx-auto flex flex-col md:flex-row p-5 items-center">

//                 <div className="flex-1 flex justify-center items-center mb-4 md:mb-0">
//                     <img src="/imgs/sofa.jpg" alt="Sofa" className="max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-lg" />
//                 </div>

//                 <div className="flex-1 flex flex-col justify-center items-center space-y-4">
//                     {/* Name Image */}
//                     <img src="/imgs/name.png" alt="Name" className="w-full mb-5" />

//                     {/* "About Me" Button */}
//                     <button 
//                     onClick={() => navigate('/about')} 
//                     className="py-2 px-4 w-[100%] md:w-[400px] lg:w-[600px] bg-orange-600 opacity-90 text-white font-semibold rounded-lg shadow-md hover:bg-amber-500 transition duration-300">
//                         Get To Know Me
//                     </button>

//                     {/* "Projects" Button */}
//                     <button 
//                     onClick={() => navigate('/projects')} 
//                     className="py-2 px-4 w-[100%] md:w-[400px] lg:w-[600px] bg-orange-600 opacity-90 text-white font-semibold rounded-lg shadow-md hover:bg-amber-500 transition duration-300">
//                         SheCodes Projects
//                     </button>

//                     {/* "Contact" Button */}
//                     <button 
//                     onClick={() => navigate('/contact')} 
//                     className="py-2 px-4 w-[100%] md:w-[400px] lg:w-[600px] bg-orange-600 opacity-90 text-white font-semibold rounded-lg shadow-md hover:bg-amber-500 transition duration-300">
//                         Let's Connect!
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }



// export default HomePage;


import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import About from './About';
import { useForm } from '@formspree/react';

const HomePage = () => {

  const [state, handleSubmit] = useForm("mleyallg");

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center h-screen" style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, white 45%, #ffe2c0 55%)' }}>
        <div className="text-center space-y-4">
          <p className="text-xl font-medium">Thank you for contacting me.</p>
          <p className="text-xl font-medium">Speak soon!</p>
        </div>
        {/* <div> */}
        <button
          onClick={() => location.reload()}
          style={{ backgroundColor: '#ea580b' }}
          className="mt-3 items-center justify-center py-2 px-4 border border-transparent shadow-sm text-m font-medium rounded-md text-white">
          Back to Contact Form
        </button>
        {/* </div> */}
      </div>
    )
  }

  return (
    <ReactFullpage
      scrollingSpeed={1000}
      render={({ state, fullpageApi }) => {

        return (
          <ReactFullpage.Wrapper>
            {/* Section 1 - Welcome */}
            <div className="section relative flex flex-col items-center justify-center h-screen bg-mobile-welcome md:bg-desktop-welcome bg-cover bg-no-repeat bg-center">
              <div className="mt-auto"></div>
              <button onClick={() => fullpageApi.moveSectionDown()} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-orange-300 text-white rounded-full p-4">
                <ChevronDoubleDownIcon className="h-8 w-8 text-white animate-bounce" />
              </button>
            </div>

            {/* Section 2 - About Me */}
            <div className="section flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white to-[#ffe2c0]">
              <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-1 items-start w-full max-w-4xl mx-auto bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-lg p-4">
                <div className="md:col-span-1">
                  <img src="/imgs/sofa.jpg" alt="Sofa" className="w-full lg:max-w-lg rounded-sm shadow-md mb-4 md:mb-0" />
                </div>
                <div className="md:col-span-1 flex flex-col justify-between">
                  <div className="text-center">
                    <h1 className='font-bold'>Nice to meet you, my name is</h1>
                    <img src="/imgs/name.png" alt="Name" className="mb-4 w-full max-w-lg self-center" />
                  </div>
                  <About />
                </div>
              </div>
            </div>

            {/* Section 3 - Projects */}
            <div className="section flex flex-col items-center justify-center min-h-screen" style={{ background: 'linear-gradient(to top left, white 45%, #ffe2c0 55%)' }}>
              <div className="container mx-auto px-5 py-12 bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-lg p-4">
                <img src="/imgs/work.png" alt="Work" className="w-1/2 md:w-1/3 mb-5 mx-auto" />
                <div className="flex justify-center items-center py-4">
                  <a href="https://github.com/shannon97" target="_blank" rel="noopener noreferrer"
                    className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mb-4">
                    Visit My GitHub
                  </a>
                </div>
                <div className="w-full overflow-hidden">
                  <div className="flex gap-4 animate-scroll">
                    <img src="/imgs/project1.png" alt="Project 1" className="min-w-full" />
                    <img src="/imgs/project2.png" alt="Project 2" className="min-w-full" />
                    <img src="/imgs/project3.png" alt="Project 1" className="min-w-full" />
                    <img src="/imgs/project4.png" alt="Project 2" className="min-w-full" />
                  </div>
                </div>
              </div>
            </div>



            {/* Section 4 - Contact */}
            <div className="section flex flex-col items-center justify-center min-h-screen" style={{ background: 'linear-gradient(to bottom right, white 45%, #ffe2c0 55%)' }}>
              <div className="container mx-auto px-5 py-12 bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-lg p-4">
                <div className="flex flex-col text-center w-full mb-12">
                  <img src="/imgs/contact.png" alt="Contact" className="w-1/2 md:w-1/3 mb-5 mx-auto" />
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Have a question? Or just want to say 'Hi!'? Reach out with the form below.</p>
                </div>
                <form onSubmit={handleSubmit} className="mx-auto">
                  <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                      <div className="p-2 w-1/2">
                        <div className="relative">
                          <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                          <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                      </div>
                      <div className="p-2 w-1/2">
                        <div className="relative">
                          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                          <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                          <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-300 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <button type="submit" disabled={state.submitting} className="flex mx-auto text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Section 5 - Footer */}
            <div className="section relative flex flex-col items-center justify-center h-screen bg-mobile-thanks md:bg-desktop-thanks bg-cover bg-no-repeat bg-center">
              <div className="mt-auto"></div>
              <button onClick={() => fullpageApi.moveTo(1)} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-orange-300 text-white rounded-full p-4">
                <ChevronDoubleUpIcon className="h-8 w-8 text-white animate-bounce" />
              </button>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default HomePage;


