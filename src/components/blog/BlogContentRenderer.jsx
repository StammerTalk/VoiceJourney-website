import { Suspense } from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const BlogContentRenderer = ({ MDXComponent }) => {
  if (!MDXComponent) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p className="text-red-800">
          Failed to load blog content. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="prose prose-lg max-w-none prose-headings:leading-tight prose-p:mb-6 prose-h2:mt-12 prose-h2:mb-6 prose-h3:mt-8 prose-h3:mb-4 prose-ul:mb-8 prose-li:mb-2"
    >
      <Suspense fallback={<LoadingSpinner />}>
        <MDXComponent />
      </Suspense>
    </motion.div>
  );
};

export default BlogContentRenderer;
