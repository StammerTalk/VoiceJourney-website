// MDX utilities for blog functionality

// Helper function to get all blog posts
export const getAllBlogPosts = async () => {
  // This will be dynamically populated with blog posts
  const posts = [
    {
      slug: 'how-sarah-overcame-speaking-fear',
      title: 'How Sarah Overcame Her Fear of Public Speaking',
      excerpt: 'Sarah went from avoiding phone calls to presenting at conferences. Here\'s her inspiring journey with Voice Journey and how she built unshakeable speaking confidence.',
      date: '2025-01-15',
      category: 'Success Story',
      author: 'Voice Journey Team',
      readTime: '5 min read',
      image: '/assets/blog/sarah-story.jpg',
      keywords: ['speech confidence', 'public speaking anxiety', 'voice journey success', 'overcome speaking fear']
    }
  ];
  
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};

// Helper function to get a single blog post by slug
export const getBlogPostBySlug = async (slug) => {
  const posts = await getAllBlogPosts();
  return posts.find(post => post.slug === slug);
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
