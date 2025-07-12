import { motion } from 'framer-motion';
import { FaUser, FaCalendar, FaClock } from 'react-icons/fa';
import { formatDate } from '../utils/mdx';

const BlogCard = ({ post, index = 0 }) => {
  const handleReadMore = () => {
    // Navigate to blog post page
    window.location.href = `/blog/${post.slug}`;
  };

  return (
    <motion.article
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={handleReadMore}
    >
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><rect width="400" height="200" fill="%23f3f4f6"/><text x="200" y="100" text-anchor="middle" dy=".3em" fill="%239ca3af" font-family="Arial" font-size="14">Blog Image</text></svg>`;
          }}
        />
        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
          {post.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <FaUser className="text-xs" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <FaCalendar className="text-xs" />
              {formatDate(post.date)}
            </span>
          </div>
          <span className="flex items-center gap-1">
            <FaClock className="text-xs" />
            {post.readTime}
          </span>
        </div>
        
        <motion.button
          className="w-full btn btn-outline-primary"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={(e) => {
            e.stopPropagation();
            handleReadMore();
          }}
        >
          Read More
        </motion.button>
      </div>
    </motion.article>
  );
};

export default BlogCard;
