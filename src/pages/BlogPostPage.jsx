import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUser, FaCalendar, FaClock, FaShare } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getBlogPostBySlug, formatDate } from '../utils/mdx';

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const post = await getBlogPostBySlug(slug);
        if (post) {
          setBlogPost(post);
        } else {
          setError('Blog post not found');
        }
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blogPost.title,
        text: blogPost.excerpt,
        url: window.location.href
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-300 rounded w-32 mb-8"></div>
              <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="flex gap-4 mb-6">
                <div className="h-4 bg-gray-300 rounded w-24"></div>
                <div className="h-4 bg-gray-300 rounded w-24"></div>
                <div className="h-4 bg-gray-300 rounded w-24"></div>
              </div>
              <div className="h-64 bg-gray-300 rounded mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
              <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
              <button 
                onClick={handleBack}
                className="btn btn-primary"
              >
                Go Back
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        <article className="max-w-4xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button 
              onClick={handleBack}
              className="flex items-center gap-2 text-primary hover:text-primary-dark mb-8 transition-colors"
            >
              <FaArrowLeft />
              Back to Blog
            </button>
            
            <header className="mb-8">
              <div className="text-sm text-primary font-medium mb-2">
                {blogPost.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {blogPost.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                <span className="flex items-center gap-2">
                  <FaUser />
                  {blogPost.author}
                </span>
                <span className="flex items-center gap-2">
                  <FaCalendar />
                  {formatDate(blogPost.date)}
                </span>
                <span className="flex items-center gap-2">
                  <FaClock />
                  {blogPost.readTime}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {blogPost.keywords.map((keyword, index) => (
                  <span 
                    key={index}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </header>
            
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400"><rect width="800" height="400" fill="%23f3f4f6"/><text x="400" y="200" text-anchor="middle" dy=".3em" fill="%239ca3af" font-family="Arial" font-size="24">Blog Post Image</text></svg>`;
              }}
            />
            
            {/* Blog content will be rendered here */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                {blogPost.excerpt}
              </p>
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <p className="text-center text-gray-600">
                  <strong>Note:</strong> This is a sample blog post. In a full implementation, 
                  the complete MDX content would be rendered here with all formatting, 
                  images, and interactive components.
                </p>
                <div className="mt-4 text-center">
                  <a 
                    href="https://app.voicejourneyapp.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Try Voice Journey Today
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Share this article</h3>
              <div className="flex gap-4">
                <button 
                  onClick={handleShare}
                  className="btn btn-outline-primary"
                >
                  <FaShare className="mr-2" />
                  Share
                </button>
              </div>
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPostPage;
