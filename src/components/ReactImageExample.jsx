import localBird from "../assets/local-bird.png";

export default function ReactImageExample() {
  return (
    <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', backgroundColor: '#f8fafc' }}>
      <p style={{ margin: '0 0 1rem 0', fontSize: '0.875rem', color: '#475569', fontWeight: '600' }}>
        React Component Example:
      </p>
      <img
        src={localBird.src}
        alt="Bird from React component"
        width={localBird.width}
        height={localBird.height}
        loading="lazy"
        decoding="async"
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '6px' }}
      />
      <p style={{ margin: '1rem 0 0 0', fontSize: '0.75rem', color: '#64748b' }}>
        Note: React components use <code>myImage.src</code> to access the optimized image URL.
      </p>
    </div>
  );
} 