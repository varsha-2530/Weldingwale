import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // animation duration & one-time trigger
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] sm:h-[70vh] md:h-[75vh] overflow-hidden mt-2"
        data-aos="fade-down"
      >
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            background: `linear-gradient(to bottom, rgba(5, 4, 94, 0.1  ), rgba(2, 62, 138, 0.2), rgba(0, 119, 182, 0.4)), #e87d1a`,
          }}
        >
          {/* Building Structure */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl sm:max-w-4xl"
            data-aos="zoom-in"
          >
            <div className="relative mx-auto" style={{ maxWidth: "700px" }}>
              <div
                className="relative bg-gradient-to-b from-slate-400 to-black h-48 sm:h-56 md:h-72"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, #0f172a, #0f172a 12px, #000000 12px, #000000 14px)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-around px-8 sm:px-14 md:px-20">
                  <div className="w-12 sm:w-16 md:w-24 h-32 sm:h-44 md:h-56 bg-gradient-to-b from-amber-600 to-amber-800 shadow-2xl"></div>
                  <div className="w-20 sm:w-28 md:w-44 h-40 sm:h-52 md:h-64 bg-gradient-to-b from-amber-500 to-amber-700 shadow-2xl"></div>
                  <div className="w-10 sm:w-14 md:w-20 h-28 sm:h-40 md:h-48 bg-gradient-to-b from-amber-600 to-amber-800 shadow-2xl"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-white/5 backdrop-blur-[3px]"></div>
        </div>

        {/* Text Overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center px-6 sm:px-10"
          data-aos="fade-up"
        >
          <div className="container mx-auto relative z-30 text-center sm:text-left">
            <h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-none text-center"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              ABOUT
            </h1>
          </div>
        </div>
      </div>

      {/* About Our Vision */}
      <div
        className="max-w-3xl mx-auto my-10 sm:my-16 p-6 sm:p-8 bg-white shadow-xl rounded-2xl border border-gray-100 hover:shadow-2xl transition duration-300 ease-in-out"
        data-aos="fade-up"
      >
        <h2
          className="text-xl sm:text-2xl text-gray-800 mb-4 sm:mb-6"
          style={{ fontFamily: "'Jost', sans-serif" }}
        >
          About Us
        </h2>

        <p
          className="text-gray-600 leading-relaxed mb-4 sm:mb-5"
          style={{ fontFamily: "'Afacad Flux', sans-serif" }}
        >
          WeldingWale is a young and fast growing company based in Gurgaon
          (Hr.). We specialize in all metal fabrication. We also deals with wide
          range of services which includes welding & fabrication services,
          Welding repairing, Onsite Services etc.
        </p>

        <h2
          className="text-xl sm:text-2xl text-gray-800 mb-4 sm:mb-6"
          style={{ fontFamily: "'Jost', sans-serif" }}
        >
          Our Vision
        </h2>

        <p
          className="text-gray-600 leading-relaxed"
          style={{ fontFamily: "'Afacad Flux', sans-serif" }}
        >
          If you are getting innovative Products and Services with Skilled
          Manpower, you can grow your business at next level. We want to be a
          centre of excellence for providing innovative, next generation, cost
          effective and quality Products, Services.
        </p>
      </div>
    </div>
  );
}
