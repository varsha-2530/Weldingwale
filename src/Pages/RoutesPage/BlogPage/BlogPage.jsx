import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BlogHero from './BlogHero';
import blogs from './Blog.js';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [filter, setFilter] = useState('All');

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  // Get unique tags for filtering
  const allTags = [...new Set(blogs.flatMap(blog => blog.tags))];
  const filterOptions = ['All', ...allTags];

  const filteredBlogs = filter === 'All'
    ? blogs
    : blogs.filter(blog => blog.tags.includes(filter));

  return (
    <div className="min-h-screen bg-white">
      <BlogHero />

      <div className="container mx-auto px-4 py-12">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog, index) => (
            <article
              key={blog.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100} // stagger animation by 100ms
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {blog.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-orange-200 text-orange-500 px-3 py-1 rounded-full text-sm "
                    >
                      {tag}
                    </span>
                  ))}
                  {blog.tags.length > 2 && (
                    <span className="text-orange-500 text-xs">
                      +{blog.tags.length - 2} more
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl  text-orange-500 mb-2 line-clamp-2 hover:text-orange-600 transition-colors">
                  <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                </h3>

                {/* Description */}
                <p className="text-amber-900 text-sm mb-4 line-clamp-2">
                  {blog.description}
                </p>

                {/* Author & Read More */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3">
                      {blog.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm text-orange-500 ">
                      {blog.author}
                    </span>
                  </div>

                  <Link
                    to={`/blog/${blog.id}`}
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300 font-medium text-sm"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;