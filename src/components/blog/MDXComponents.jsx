import YouTubeEmbed from './YouTubeEmbed';
import CTAButton from './CTAButton';

// Custom MDX components with proper styling
const MDXComponents = {
  YouTubeEmbed,
  CTAButton,
  h1: ({ children }) => (
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-8 leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12 leading-tight">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 mt-8 leading-tight">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-lg text-gray-700 leading-relaxed mb-4">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside text-lg text-gray-700 mb-8 space-y-3 pl-4">
      {children}
    </ul>
  ),
  li: ({ children }) => (
    <li className="text-lg text-gray-700 leading-relaxed">
      {children}
    </li>
  ),
  a: ({ href, children }) => {
    // Check if it's a CTA link
    if (href === 'https://app.voicejourneyapp.com') {
      return (
        <div className="text-center my-8">
          <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 no-underline"
            style={{
              backgroundColor: '#4A6FA5',
              color: '#FFFFFF !important',
              textDecoration: 'none',
              border: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#3A5F95';
              e.target.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#4A6FA5';
              e.target.style.color = '#FFFFFF';
            }}
          >
            <span style={{ color: '#FFFFFF' }}>{children}</span>
          </a>
        </div>
      );
    }
    // Regular links
    return (
      <a 
        href={href} 
        className="text-primary hover:text-primary-dark underline transition-colors"
        target={href?.startsWith('http') ? '_blank' : '_self'}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : ''}
      >
        {children}
      </a>
    );
  },
  strong: ({ children }) => (
    <strong className="font-semibold text-gray-900">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-gray-700">{children}</em>
  ),
  hr: () => (
    <hr className="my-12 border-gray-200" />
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-gray-50 rounded-r-lg">
      {children}
    </blockquote>
  )
};

export default MDXComponents;
