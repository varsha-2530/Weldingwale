import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Welding Services',
    email: '',
    address: '',
    passcode: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Map Section */}
      <div className="w-full h-64 md:h-96 bg-gray-200 relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.3!2d77.1304!3d28.7041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQyJzE0LjgiTiA3N8KwMDcnNDkuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Location */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow">
            <div className="bg-orange-200 p-3 rounded-full">
              <MapPin className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <h3 className=" text-gray-800 mb-2">Location:</h3>
              <p className="text-gray-600 text-sm">
                Shop No 1, Sheela Mata Road<br />
                Gurudwara(Po-), 122001
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow">
            <div className="bg-orange-200 p-3 rounded-full">
              <Mail className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <h3 className="text-gray-800 mb-2">Email:</h3>
              <p className="text-gray-600 text-sm break-all">
                Rahulwasanweb4@gmail.com
              </p>
            </div>
          </div>

          {/* Call */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow">
            <div className="bg-orange-200 p-3 rounded-full">
              <Phone className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <h3 className=" text-gray-800 mb-2">Call:</h3>
              <p className="text-gray-600 text-sm">
                +91 98765 17537<br />
                +91 7529976532
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl text-center text-gray-800 mb-8">
            Contact Us
          </h2>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* Service Dropdown */}
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-white"
                >
                  <option>Welding Services</option>
                  <option>Metal Fabrication</option>
                  <option>Steel Structure</option>
                  <option>Gate & Railing</option>
                  <option>Repair & Maintenance</option>
                </select>
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* Address */}
              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="Address*"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* Passcode */}
              <div>
                <input
                  type="text"
                  name="passcode"
                  placeholder="Passcode"
                  value={formData.passcode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <textarea
                name="description"
                placeholder="Describe Your Work*"
                value={formData.description}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
             <button
  onClick={handleSubmit}
  className="w-auto bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md transition-colors duration-300 transform hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wide text-sm mx-auto block"
>
  Submit
</button>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}