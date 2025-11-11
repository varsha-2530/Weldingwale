// import React, { useState } from "react";
// import { Home, FileText, UserCheck } from "lucide-react";
// import DoorstepServices from "../../Components/HomePageSection/DoorstepServices";

// export default function HomeServicePage() {
//   const steps = [
//     {
//       icon: <Home className="w-20 h-20 text-blue-900" />,
//       title: "SELECT THE SERVICES YOU NEED",
//       description:
//         "Tell us what services you want — shutter work, welding work, steel work, and other related services.",
//     },
//     {
//       icon: <FileText className="w-20 h-20 text-blue-700" />,
//       title: "PROVIDE CONTACTABLE DETAILS",
//       description:
//         "Share your contact details including correct email ID and mobile number for easy coordination.",
//     },
//     {
//       icon: <UserCheck className="w-20 h-20 text-teal-600" />,
//       title: "GET QUOTES AND HIRE THE BEST",
//       description:
//         "Submit your requirements, get the best industry quotes, compare, and hire our professionals.",
//     },
//   ];

//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     service: "",
//     email: "",
//     address: "",
//     pincode: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert("Thank you! Your booking request has been submitted.");
//   };


  

//   return (
//     <div className="min-h-screen bg-gradient-to-br f  mt-20">
//       {/* Container */}
//       <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 lg:py-20">
//         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
//           <div className="grid grid-cols-1 lg:grid-cols-2">
//             {/* LEFT SIDE */}
//             <div className="relative bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 p-10 lg:p-16 flex flex-col justify-center">
//               {/* Gradient Circles */}
//               <div className="absolute inset-0 opacity-20">
//                 <div className="absolute top-0 left-0 w-48 h-48 bg-orange-300 rounded-full blur-3xl"></div>
//                 <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl"></div>
//               </div>

//               <div className="relative z-10 text-center lg:text-left">
//                 <h1 className="text-5xl sm:text-6xl md:text-7xl text-gray-900 mb-4 tracking-tight leading-tight ">
//                   Trusted <br />
//                   <span className="text-orange-500">Welding Experts</span>
//                 </h1>
//                 <p className="text-lg sm:text-xl text-gray-700 mb-8">
//                   Doorstep metal fabrication, repairs, and installation by
//                   skilled professionals.
//                 </p>

//                 <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-300">
//                   Book a Service
//                 </button>

//                 <div className="relative mt-10 flex justify-center lg:justify-start">
//                   <img
//                     src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80"
//                     alt="Professional Welder"
//                     className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT SIDE */}
//             <div className="bg-white p-10 sm:p-12 lg:p-16">
//               <div className="max-w-lg mx-auto">
//                 <h2 className="text-3xl sm:text-4xl text-gray-900 mb-3 text-center ">
//                   Book Now
//                 </h2>
//                 <p className="text-gray-600 text-center mb-10">
//                   Fill your details and our expert will reach out soon.
//                 </p>

//                 {/* FORM */}
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Name*"
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
//                     />
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="Phone Number*"
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
//                     />
//                   </div>

//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <select
//                       name="service"
//                       value={formData.service}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-orange-500 outline-none"
//                     >
//                       <option value="">Select Service*</option>
//                       <option value="metal-welding">Metal Welding & Repair</option>
//                       <option value="gate-installation">Gate Installation</option>
//                       <option value="railing">Railing & Grills</option>
//                       <option value="furniture">Metal Furniture</option>
//                       <option value="shutter">Shutter Services</option>
//                       <option value="staircase">Staircase Work</option>
//                       <option value="other">Other Services</option>
//                     </select>

//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="Email Address*"
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
//                     />
//                   </div>

//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <input
//                       type="text"
//                       name="address"
//                       value={formData.address}
//                       onChange={handleChange}
//                       placeholder="Address*"
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
//                     />
//                     <input
//                       type="text"
//                       name="pincode"
//                       value={formData.pincode}
//                       onChange={handleChange}
//                       placeholder="Pincode"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
//                     />
//                   </div>

//                   <textarea
//                     name="description"
//                     value={formData.description}
//                     onChange={handleChange}
//                     placeholder="Describe Your Work*"
//                     required
//                     rows="5"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none resize-none"
//                   ></textarea>

//                   <div className="flex justify-center">
//                     <button
//                       type="submit"
//                       className="w-60 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
//                     >
//                       Submit Booking
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
  
 


//         {/* HOW IT WORK SECTION */}
//         <div className="py-10 px-4 mt-20 rounded-3xl">
//           <div className="max-w-7xl mx-auto">
//             <h2 className="text-3xl sm:text-3xl  text-center text-orange-500 mb-16">
//               HOW IT WORKS
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {steps.map((step, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
//                 >
//                   <div className="flex justify-center mb-6">{step.icon}</div>
//                   <h3 className="text-lg  text-black mb-4 uppercase">
//                     {step.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     {step.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import { Home, FileText, UserCheck } from "lucide-react";

export default function HomeServicePage() {
  const steps = [
    {
      icon: <Home className="w-20 h-20 text-blue-900" />,
      title: "SELECT THE SERVICES YOU NEED",
      description:
        "Tell us what services you want — shutter work, welding work, steel work, and other related services.",
    },
    {
      icon: <FileText className="w-20 h-20 text-blue-700" />,
      title: "PROVIDE CONTACTABLE DETAILS",
      description:
        "Share your contact details including correct email ID and mobile number for easy coordination.",
    },
    {
      icon: <UserCheck className="w-20 h-20 text-teal-600" />,
      title: "GET QUOTES AND HIRE THE BEST",
      description:
        "Submit your requirements, get the best industry quotes, compare, and hire our professionals.",
    },
  ];

  const services = [
    {
      image:
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500&h=400&fit=crop",
      title: "Shutter Technician",
      subtitle: "Shutter Repairing",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&h=400&fit=crop",
      title: "Welder at Doorstep",
      subtitle: "Metal Repairing",
    },
    {
      image:
        "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&h=400&fit=crop",
      title: "Steel Repairing",
      subtitle: "Steel Repairing",
    },
    {
      image:
        "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=500&h=400&fit=crop",
      title: "Sheds Maker",
      subtitle: "Sheds",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    email: "",
    address: "",
    pincode: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your booking request has been submitted.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 lg:py-20">
        {/* Booking Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="relative bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 p-10 lg:p-16 flex flex-col justify-center">
              {/* Background gradient circles */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-48 h-48 bg-orange-300 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10 text-center lg:text-left">
                <h1 className="text-5xl sm:text-6xl md:text-7xl text-gray-900 mb-4 tracking-tight leading-tight">
                  Trusted <br />
                  <span className="text-orange-500">Welding Experts</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 mb-8">
                  Doorstep metal fabrication, repairs, and installation by
                  skilled professionals.
                </p>

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                  Book a Service
                </button>

                <div className="relative mt-10 flex justify-center lg:justify-start">
                  <img
                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80"
                    alt="Professional Welder"
                    className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE (Form) */}
            <div className="bg-white p-10 sm:p-12 lg:p-16">
              <div className="max-w-lg mx-auto">
                <h2 className="text-3xl sm:text-4xl text-gray-900 mb-3 text-center">
                  Book Now
                </h2>
                <p className="text-gray-600 text-center mb-10">
                  Fill your details and our expert will reach out soon.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name*"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number*"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-orange-500 outline-none"
                    >
                      <option value="">Select Service*</option>
                      <option value="metal-welding">Metal Welding & Repair</option>
                      <option value="gate-installation">Gate Installation</option>
                      <option value="railing">Railing & Grills</option>
                      <option value="furniture">Metal Furniture</option>
                      <option value="shutter">Shutter Services</option>
                      <option value="staircase">Staircase Work</option>
                      <option value="other">Other Services</option>
                    </select>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address*"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Address*"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="Pincode"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                  </div>

                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe Your Work*"
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none resize-none"
                  ></textarea>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="w-60 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      Submit Booking
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Doorstep Services Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl text-orange-500 tracking-wide">
            DOORSTEP SERVICES
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-base opacity-90 border-t border-white/30 pt-2 mt-2">
                    - {service.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* HOW IT WORKS Section */}
        <div className="py-16 px-4 ">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl text-center text-orange-500 mb-16">
              HOW IT WORKS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-6">{step.icon}</div>
                  <h3 className="text-lg text-black mb-4 uppercase">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
