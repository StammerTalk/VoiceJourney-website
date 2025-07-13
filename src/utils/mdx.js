// MDX utilities for blog functionality
import { lazy } from 'react';

// Dynamic imports for MDX files
const importMDXFile = async (slug) => {
  try {
    const module = await import(`../content/blog/${slug}.mdx`);
    return module.default;
  } catch (error) {
    console.error(`Failed to load MDX file for slug: ${slug}`, error);
    return null;
  }
};

// Helper function to get all blog posts
export const getAllBlogPosts = async () => {
  // This will be dynamically populated with blog posts
  const posts = [
    {
      slug: 'overcome-speaking-anxiety-small-challenges',
      title: 'Overcome Speaking Anxiety with Small Challenges - Build Big Confidence!',
      excerpt: 'Transform overwhelming speaking tasks into simple, manageable steps. Learn how Voice Journey\'s structured approach helps you build discipline and gain confidence to speak up.',
      date: '2025-06-15',
      category: 'How-To Guide',
      author: 'Voice Journey Team',
      readTime: '3 min read',
      image: '/assets/blog/speaking-challenges.jpg',
      keywords: ['speaking anxiety', 'small challenges', 'confidence building', 'voice journey app']
    }
  ];
  
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};

// Helper function to get a single blog post by slug
export const getBlogPostBySlug = async (slug) => {
  const posts = await getAllBlogPosts();
  const post = posts.find(post => post.slug === slug);
  
  if (post) {
    // Dynamically load the MDX component
    const MDXComponent = await importMDXFile(slug);
    return {
      ...post,
      MDXComponent
    };
  }
  
  return null;
};

// Helper function to get latest blog posts for homepage
export const getLatestBlogPosts = async (limit = 3) => {
  const posts = await getAllBlogPosts();
  return posts.slice(0, limit);
};

// Helper function to format date
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Helper function to calculate reading time
export const calculateReadingTime = (content) => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

// Helper function to generate SEO-friendly slugs
export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};
