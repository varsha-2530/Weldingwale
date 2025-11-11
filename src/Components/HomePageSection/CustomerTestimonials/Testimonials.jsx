import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Preeti Sharma",
      role: "Housewife",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      text: "I have used its welding services and absolutely loved it! They did a great job. Must try.",
      subtext: "Thanks, weldingwale!"
    },
    {
      id: 2,
      name: "Vineet Kumar",
      role: "Businessman",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      text: "Extremely happy with their service. Easy booking & professional quality welding at very affordable rates!"
    },
    {
      id: 3,
      name: "Prem Gujjar",
      role: "Store Owner",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      text: "Tried Weldingwale's shutter services for the first time and was really satisfied with the outcome. They did a great job.",
      subtext: "Will definitely book again."
    }
  ];

  return (
    <div className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-4xl text-gray-900 mb-2">
            Their Words, Our Pride
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Happy Words of our Happy Customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 sm:p-6 flex flex-col items-center transform hover:-translate-y-1"
            >
              {/* Profile Image */}
              <div className="relative mb-4 sm:mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-orange-500 shadow-md"
                />
                <div className="absolute -bottom-1 -right-1 bg-orange-200 rounded-full p-1 sm:p-2">
                  <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                </div>  
              </div>

              {/* Name and Role */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-0.5 text-center">
                {testimonial.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-4 text-center">
                {testimonial.role}
              </p>

              {/* Testimonial Text */}
              <div className="relative flex-grow w-full">
                <Quote className="absolute -top-2 -left-2 w-6 h-6 text-orange-300 transform rotate-180" />
                <p className="text-gray-700 italic leading-snug text-center px-2 sm:px-4">
                  {testimonial.text}
                </p>
                {testimonial.subtext && (
                  <p className="text-gray-700 italic leading-snug text-center px-2 sm:px-4 mt-2 font-medium">
                    {testimonial.subtext}
                  </p>
                )}
                <Quote className="absolute -bottom-2 -right-2 w-6 h-6 text-orange-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
