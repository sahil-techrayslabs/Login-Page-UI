// import React from 'react'
// import './App.css'
// import RegisterForm from './Components/RegisterForm';
// import TestimonialCard from './Components/TestimonialCard';
// function App() {

//   return (
//     <>
//       <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4"> 
//       <div className="max-w-4xl w-full bg-white shadow-md rounded-lg overflow-hidden md:flex">
//         <div className="w-full md:w-1/2 p-8">
//           <RegisterForm />
//         </div>
//         <div className="hidden md:flex w-full md:w-1/2 bg-gray-50 items-center justify-center">
//           <TestimonialCard />
//         </div>
//       </div>
//     </div>
//     </>
//   )
// }

// export default App
import RegisterForm from './Components/RegisterForm';
import TestimonialCard from './Components/TestimonialCard';

function App() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center p-6">
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg overflow-hidden md:flex md:max-w-4xl">
          {/* Left side - Registration form */}
          <div className="w-full md:w-1/2 p-6">
            <RegisterForm />
          </div>

          {/* Right side - Testimonial card */}
          <div className="hidden md:flex md:w-1/2 bg-gray-50 items-center justify-center">
            <TestimonialCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
