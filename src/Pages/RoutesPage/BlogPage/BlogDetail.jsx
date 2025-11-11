import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import blogs from './Blog.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find(b => b.id === parseInt(id));

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center" data-aos="fade-in">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog Post Not Found</h2>
          <Link to="/blog" className="bg-[#c1890e] text-white px-6 py-3 rounded-lg hover:bg-[#cbaa63] transition-colors">
            Back to Blog
          </Link>
        </div>
      </div>    
    );      
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80" data-aos="fade-up">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-6 left-4 md:left-8 text-white max-w-4xl" data-aos="fade-right" data-aos-delay="200">
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-2">{blog.title}</h1>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white text-sm  mr-3">
              {blog.author.split(' ').map(n => n[0]).join('')}
            </div>
            <span className="text-lg">By {blog.author}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/blog')}
          className="mb-6 flex items-center text-orange-500 hover:text-orange-600 font-medium"
          data-aos="fade-left"
        >
          ← Back to Blog
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3" data-aos="fade-up" data-aos-delay="200">
            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl  text-orange-500 mb-4">Article Overview</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{blog.description}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl text-orange-500 mb-4">Detailed Analysis</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This comprehensive analysis delves deep into the current market trends...
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our expert team has conducted extensive research to bring you the most up-to-date...
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-orange-500 mb-4">Key Takeaways</h3>
                <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
                  <li>Market analysis based on current trends and future projections</li>
                  <li>Expert recommendations for strategic investment opportunities</li>
                  <li>Practical tips for buyers and sellers in today's market</li>
                  <li>Insights into emerging locations and property types</li>
                  <li>Risk assessment and mitigation strategies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1" data-aos="fade-left" data-aos-delay="300">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-6">
              <h3 className="text-lg  text-orange-500 mb-6">Article Info</h3>
              
              {/* Author Info */}
              <div className="mb-6">
                <h4 className="text-orange-500 mb-3">Author</h4>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-medium mr-3">
                    {blog.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-medium text-orange-500">{blog.author}</p>
                    <p className="text-sm text-orange-500">Real Estate Expert</p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <h4 className=" text-gray-800 mb-3">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-orange-600 text-white px-2 py-1 rounded-full text-xs "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;