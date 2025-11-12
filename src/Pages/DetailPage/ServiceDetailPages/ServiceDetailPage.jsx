





import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ServiceDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

   const services = [
    {
      id: 1,
      name: "Fabrication Work",
      image:
        "https://i.pinimg.com/736x/66/ba/ce/66baceac11b918c66d86585cdb9864c0.jpg",
      description: "Fabrication of metal structures and components.",
      subServices: [
        {
          title: "Metal Sheet Fabrication",
          image:
            "https://i.pinimg.com/736x/66/ba/ce/66baceac11b918c66d86585cdb9864c0.jpg",
          description: "Fabricate sheets of various metals with precision.",
        },
        {
          title: "Structural Steel Fabrication",
          image:
            "https://i.pinimg.com/1200x/79/38/cb/7938cb72a76e8b21c005a8d64c56f209.jpg",
          description: "Create steel structures for buildings and machinery.",
        },
        {
          title: "Custom Metal Frames",
          image:
            "https://i.pinimg.com/736x/35/80/e4/3580e48b1b29feacaad08a1cd2613d1d.jpg",
          description:
            "Design and fabricate custom frames for various purposes.",
        },
        {
          title: "Machine Parts Fabrication",
          image:
            "https://i.pinimg.com/736x/80/ee/1c/80ee1cf4614b5fa1236510648a5991f1.jpg",
          description:
            "Precision fabrication of parts for machines and equipment.",
        },
        {
          title: "Industrial Fabrication",
          image:
            "https://i.pinimg.com/736x/f8/76/f9/f876f921ea84882c215a107617b7b3ac.jpg",
          description:
            "Large-scale fabrication services for industrial projects.",
        },
        {
          title: "Architectural Metal Work",
          image:
            "https://i.pinimg.com/1200x/73/27/f0/7327f05351f255fd4d83a887d7922a63.jpg",
          description:
            "Design and fabricate decorative architectural metal pieces.",
        },
      ],
    },
    {
      id: 2,
      name: "Gate & Grill Welding",
      image:
        "https://i.pinimg.com/1200x/6e/c3/4f/6ec34f608e0ba84d531347e6c2cd0070.jpg",
      description: "Custom gates, grills, and fences.",
      subServices: [
        {
          title: "Residential Gates",
          image:
            "https://i.pinimg.com/736x/2d/a6/01/2da601ecb7ad44318c11be9af2cf2a2d.jpg",
          description: "Stylish and secure gates for homes.",
        },
        {
          title: "Security Grills",
          image:
            "https://i.pinimg.com/736x/b4/34/17/b43417d5f1ce964de6c69e4d84bdc81e.jpg",
          description: "Durable grills to enhance property security.",
        },
        {
          title: "Garden Fences",
          image:
            "https://i.pinimg.com/1200x/3a/25/58/3a255831ef264298140f0f8e74c44f5f.jpg",
          description: "Decorative and functional garden fencing.",
        },
        {
          title: "Automatic Gates",
          image:
            "https://i.pinimg.com/1200x/ba/74/53/ba745324090633a535bc81738411d7af.jpg",
          description: "Motorized gates for convenience and security.",
        },
        {
          title: "Balcony Rails",
          image:
            "https://i.pinimg.com/736x/1b/18/5e/1b185e02bc3d8b7bc8fe201faa6edd1c.jpg",
          description: "Metal railings for balconies and terraces.",
        },
        {
          title: "Decorative Grills",
          image:
            "https://i.pinimg.com/736x/25/8d/f0/258df0c5e79b1cbaa667cff86a32a449.jpg",
          description: "Artistic grills for windows, doors, and partitions.",
        },
      ],
    },
    {
      id: 3,
      name: "Industrial Welding",
      image:
        "https://i.pinimg.com/736x/6c/0d/43/6c0d43bd546315977c0101f606d11ddd.jpg",
      description: "Industrial welding services for factories & workshops.",
      subServices: [
        {
          title: "Pipeline Welding",
          image:
            "https://i.pinimg.com/736x/9a/14/70/9a14701e5b373203b3f7834e7e664ef9.jpg",
          description: "Welding pipelines for industrial applications.",
        },
        {
          title: "Tank Welding",
          image:
            "https://i.pinimg.com/736x/8d/ee/ee/8deeeec57e2cc52141f978d65e7fb741.jpg",
          description: "Fabrication and welding of storage tanks.",
        },
        {
          title: "Heavy Machinery Welding",
          image:
            "https://i.pinimg.com/736x/ab/17/00/ab1700fc178dac3470f79d266a22c94e.jpg",
          description: "Repair and welding of heavy machinery components.",
        },
        {
          title: "Structural Welding",
          image:
            "https://i.pinimg.com/736x/f7/44/36/f7443654fdeb9319aaff15e9715c5ace.jpg",
          description: "Welding for structural steel frameworks.",
        },
        {
          title: "Maintenance Welding",
          image:
            "https://i.pinimg.com/1200x/f6/c7/11/f6c711b1e1bfbb206f1145f10f961df2.jpg",
          description: "Routine maintenance and welding services.",
        },
        {
          title: "Custom Industrial Projects",
          image:
            "https://i.pinimg.com/736x/b8/38/18/b83818da215a71525ab96438200d3db1.jpg",
          description: "Tailored welding projects for industry needs.",
        },
      ],
    },
    {
      id: 4,
      name: "Repair & Maintenance",
      image:
        "https://i.pinimg.com/736x/12/b5/29/12b529a40fceb2a14d8e1d3bc513c8b5.jpg",
      description: "Repair and maintenance of metal structures.",
      subServices: [
        {
          title: "Metal Repair",
          image:
            "https://i.pinimg.com/1200x/b5/9e/62/b59e620a94596d09c61ad8f051e4e14c.jpg",
          description: "Fixing damaged metal components and structures.",
        },
        {
          title: "Equipment Maintenance",
          image:
            "https://i.pinimg.com/736x/42/b7/f4/42b7f41398c8e7d3c0efe5b2614bae18.jpg",
          description: "Regular servicing of metal equipment.",
        },
        {
          title: "Structural Checks",
          image:
            "https://i.pinimg.com/736x/a2/5b/ff/a25bff44f93d5b00021992a387776079.jpg",
          description: "Inspection and maintenance of metal frameworks.",
        },
        {
          title: "Surface Treatment",
          image:
            "https://i.pinimg.com/736x/42/c6/ce/42c6cefcff93583a49ce2139a7585076.jpg",
          description: "Rust removal, painting, and surface finishing.",
        },
        {
          title: "Replacement Welding",
          image:
            "https://i.pinimg.com/736x/fb/18/f6/fb18f61320b1440a66db5812403ca91c.jpg",
          description: "Replacing worn-out or damaged metal parts.",
        },
        {
          title: "Emergency Repairs",
          image:
            "https://i.pinimg.com/1200x/8f/ff/c4/8fffc45ddf657f5e8266d5d98cf2e8de.jpg",
          description: "24/7 urgent repair services for metal structures.",
        },
      ],
    },
    {
      id: 5,
      name: "Custom Metal Project",
      image:
        "https://i.pinimg.com/736x/81/fd/81/81fd810145f3065513d7b638f766239d.jpg",
      description: "Custom metalwork as per client requirements.",
      subServices: [
        {
          title: "Custom Designs",
          image:
            "https://i.pinimg.com/736x/a8/21/7f/a8217ffccec692ff108db984c885e8fe.jpg",
          description: "Bespoke metal designs tailored to client needs.",
        },
        {
          title: "Prototype Fabrication",
          image:
            "https://i.pinimg.com/1200x/60/8e/dd/608edd580416cd701fa28208b3b00ce6.jpg",
          description:
            "Fabricating metal prototypes for testing and development.",
        },
        {
          title: "Decorative Metal Work",
          image:
            "https://i.pinimg.com/1200x/53/9d/72/539d721ae26c72a963bda0c63704ed41.jpg",
          description: "Artistic and decorative metal installations.",
        },
        {
          title: "Industrial Custom Projects",
          image:
            "https://i.pinimg.com/736x/0a/f1/18/0af11854ed805450bd3d03f860020fdd.jpg",
          description: "Custom fabrication for industrial requirements.",
        },
        {
          title: "Artistic Metal Projects",
          image:
            "https://i.pinimg.com/736x/52/2b/bf/522bbf44d4ab99a45fd0a84cd1faa133.jpg",
          description: "Creative metalwork projects for art and display.",
        },
        {
          title: "Large Scale Installations",
          image:
            "https://i.pinimg.com/1200x/e7/92/1a/e7921aff83a6cea43a16fc532457b866.jpg   ",
          description: "Fabrication and installation for large-scale projects.",
        },
      ],
    },
  ];

  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-700">Service not found.</p>
        <button
          onClick={() => navigate("/services")}
          className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 mt-24">
      <button
        onClick={() => navigate(-1)}
        className="text-orange-500 font-semibold mb-6"
      >
        ← Back
      </button>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-orange-500">
            {service.name}
          </h1>
          <p className="text-gray-700 mb-8">{service.description}</p>

          <h2 className="text-2xl font-semibold mb-6 text-orange-500">
            Sub-Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.subServices.map((sub, index) => (
              <div
                key={index}
                onClick={() =>
                  navigate(`/services/${service.id}/sub/${index}`)
                }
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer"
              >
                <img
                  src={sub.image}
                  alt={sub.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-orange-500 mb-2">
                    {sub.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{sub.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => navigate("/contact")}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
