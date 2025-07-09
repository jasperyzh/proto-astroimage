---
layout: ../layouts/BaseLayout.astro
title: Obsidian Integration & External Content
---

# Obsidian Integration & External Content

This page simulates content pulled directly from an external tool like Obsidian vault. It demonstrates how to handle existing markdown content and assets when migrating to Astro.

<div class="intro">
🗂️ <strong>Real-world scenario:</strong> You have existing markdown content with linked images from tools like Obsidian, Notion, or other note-taking apps. Here's how to handle them in Astro.
</div>

## The Challenge: External Content Migration

When migrating content from external tools, you typically face these challenges:

1. **Relative image paths** that don't match Astro's structure
2. **Custom syntax** specific to the original tool  
3. **Asset organization** that differs from Astro's conventions
4. **Bulk content** that's impractical to manually convert

## Strategy 1: Public Directory (Quick & Simple) <span class="feature-badge">Recommended</span>

For quick migration, place external assets in the `public/` directory. This preserves existing relative paths and gets content working immediately.

### Obsidian-style Image Example

This image is located at `/public/obs-assets/my-obsidian-image.png`:

![My Obsidian Image Example](/obs-assets/my-obsidian-image.png)

<div class="note info">
ℹ️ <strong>No optimization:</strong> Images in <code>public/</code> are served as-is, but your content works immediately without path changes.
</div>

```markdown
![My Obsidian Image Example](/obs-assets/my-obsidian-image.png)
```

### Public Directory Benefits

<div class="pros-cons">
  <div class="pros">
    <h4>✅ Advantages</h4>
    <ul>
      <li>Quick setup - no path modifications needed</li>
      <li>Works with existing relative paths</li>
      <li>No build-time processing overhead</li>
      <li>Compatible with any external tool's export</li>
      <li>Direct URL access for external linking</li>
    </ul>
  </div>
  
  <div class="cons">
    <h4>❌ Trade-offs</h4>
    <ul>
      <li>No automatic optimization</li>
      <li>No modern format conversion</li>
      <li>Manual responsive image handling</li>
      <li>Larger file sizes</li>
      <li>No lazy loading by default</li>
    </ul>
  </div>
</div>

## Strategy 2: Migration to src/assets (Optimized) <span class="feature-badge">Advanced</span>

For better performance, migrate important images to `src/assets/` and update references.

### Manual Migration Process

1. **Move images** from `public/obs-assets/` to `src/assets/`
2. **Update markdown** to use relative paths to `src/assets/`
3. **Test and verify** all images load correctly

```markdown
<!-- Before (Obsidian/Public) -->
![My Image](/obs-assets/my-image.png)

<!-- After (Astro Optimized) -->
![My Image](../assets/my-image.png)
```

### Automated Migration Options

For large content migrations, consider:

- **Scripts** to automatically move files and update paths
- **Custom Remark plugins** to transform image paths during build
- **Content management workflows** that handle both old and new formats

## Strategy 3: Hybrid Approach (Practical) <span class="feature-badge">Flexible</span>

Use both approaches strategically:

- **Critical images** → Move to `src/assets/` for optimization
- **Archive content** → Keep in `public/` for simplicity
- **New content** → Always use `src/assets/`

## Example: Mixed Content Scenarios

### Legacy Content (Public Assets)

This represents content imported from Obsidian with minimal changes:

![Public cat image](/public-cat.jpg)

<div class="note warning">
❌ <strong>Legacy mode:</strong> Quick to implement but misses optimization benefits.
</div>

### Migration Workflow Example

```bash
# 1. Export from Obsidian to a folder
# 2. Copy markdown files to src/pages/ or src/content/
# 3. Copy assets to public/obs-assets/
# 4. Test everything works
# 5. Gradually migrate critical images to src/assets/

# Example migration script
#!/bin/bash
mkdir -p public/obs-assets
cp -r obsidian-export/attachments/* public/obs-assets/
cp obsidian-export/*.md src/content/blog/
```

## Configuration for External Content

### Content Collections for External Content

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const externalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    imported_from: z.string().optional(),
    original_path: z.string().optional(),
    // Keep original metadata
    obsidian_tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'external': externalCollection,
};
```

### Astro Config for External Assets

```javascript
// astro.config.mjs
export default defineConfig({
  // Keep public assets accessible
  publicDir: './public',
  
  // Handle legacy image formats
  image: {
    // Add domains if external content references remote images
    domains: ['legacy-cdn.example.com'],
  },
});
```

## Best Practices for External Content

<div class="best-practices">
  <h3>📋 Migration Checklist</h3>
  <ul>
    <li>✅ Test with a small batch of content first</li>
    <li>✅ Keep backups of original content</li>
    <li>✅ Document your migration process</li>
    <li>✅ Plan for gradual optimization of critical images</li>
    <li>✅ Update internal links and references</li>
    <li>✅ Consider SEO implications of image optimization</li>
  </ul>
</div>

<div class="migration-tips">
  <h3>💡 Pro Tips</h3>
  <ul>
    <li><strong>Start simple:</strong> Get content working first, optimize later</li>
    <li><strong>Batch processing:</strong> Use scripts for large content migrations</li>
    <li><strong>Hybrid approach:</strong> Mix optimized and unoptimized images based on importance</li>
    <li><strong>Monitor performance:</strong> Measure before and after optimization</li>
    <li><strong>Consider build times:</strong> Large src/assets folders slow down builds</li>
  </ul>
</div>

## Conclusion: Choose Your Strategy

| Strategy | Best For | Performance | Setup Time |
|----------|----------|-------------|------------|
| **Public Directory** | Quick migration, archive content | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| **src/assets Migration** | Critical content, new sites | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| **Hybrid Approach** | Real-world scenarios | ⭐⭐⭐⭐ | ⭐⭐⭐ |

<style>
.intro {
  background-color: #f0f9ff;
  border: 1px solid #0ea5e9;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0 2rem 0;
  color: #0c4a6e;
}

.note {
  font-size: 0.875rem;
  margin: 1rem 0;
  padding: 0.75rem;
  border-radius: 6px;
  font-weight: 500;
}

.note.info {
  background-color: #f0f9ff;
  color: #0c4a6e;
  border-left: 4px solid #3b82f6;
}

.note.warning {
  background-color: #fef2f2;
  color: #dc2626;
  border-left: 4px solid #ef4444;
}

.pros-cons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.pros, .cons {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
}

.pros {
  background-color: #f0fdf4;
  border-left: 4px solid #22c55e;
}

.cons {
  background-color: #fef2f2;
  border-left: 4px solid #ef4444;
}

.pros h4 {
  color: #166534;
  margin-top: 0;
}

.cons h4 {
  color: #dc2626;
  margin-top: 0;
}

.pros ul, .cons ul {
  list-style: disc;
  padding-left: 1.5rem;
}

.best-practices, .migration-tips {
  background-color: #fefce8;
  border: 1px solid #fde047;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
}

.best-practices h3, .migration-tips h3 {
  color: #a16207;
  margin-top: 0;
}

.best-practices ul, .migration-tips ul {
  list-style: disc;
  padding-left: 1.5rem;
}

.best-practices li, .migration-tips li {
  color: #a16207;
  margin-bottom: 0.5rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
}

th, td {
  border: 1px solid #e2e8f0;
  padding: 0.75rem;
  text-align: left;
}

th {
  background-color: #f8fafc;
  font-weight: 600;
}

tr:nth-child(even) {
  background-color: #f8fafc;
}
</style> 