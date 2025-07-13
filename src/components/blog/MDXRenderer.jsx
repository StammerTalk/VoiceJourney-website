import { MDXProvider } from '@mdx-js/react';
import YouTubeEmbed from './YouTubeEmbed';
import { motion } from 'framer-motion';

// Custom components for MDX
const components = {
  YouTubeEmbed,
  h1: ({ children }) => (
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight"
    >
      {children}
    </motion.h1>
  ),
  h2: ({ children }) => (
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-8"
    >
      {children}
    </motion.h2>
  ),
  h3: ({ children }) => (
    <motion.h3 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 mt-6"
    >
      {children}
    </motion.h3>
  ),
  p: ({ children }) => (
    <motion.p 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-lg text-gray-700 leading-relaxed mb-4"
    >
      {children}
    </motion.p>
  ),
  ul: ({ children }) => (
    <motion.ul 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="list-disc list-inside text-lg text-gray-700 mb-4 space-y-2"
    >
      {children}
    </motion.ul>
  ),
  ol: ({ children }) => (
    <motion.ol 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="list-decimal list-inside text-lg text-gray-700 mb-4 space-y-2"
    >
      {children}
    </motion.ol>
  ),
  li: ({ children }) => (
    <li className="text-lg text-gray-700 leading-relaxed">{children}</li>
  ),
  blockquote: ({ children }) => (
    <motion.blockquote 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="border-l-4 border-primary pl-6 py-4 my-6 bg-gray-50 rounded-r-lg"
    >
      {children}
    </motion.blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{children}</code>
  ),
  pre: ({ children }) => (
    <motion.pre 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto"
    >
      {children}
    </motion.pre>
  ),
  a: ({ href, children }) => (
    <a 
      href={href} 
      className="text-primary hover:text-primary-dark underline transition-colors"
      target={href?.startsWith('http') ? '_blank' : '_self'}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : ''}
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-gray-900">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-gray-700">{children}</em>
  )
};

const MDXRenderer = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <div className="prose prose-lg max-w-none">
        {children}
      </div>
    </MDXProvider>
  );
};

export default MDXRenderer;
