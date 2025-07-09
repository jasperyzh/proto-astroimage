# Astro Image Playground

This project is a hands-on guide to understanding and leveraging Astro's powerful image optimization features (`astro:assets`). It demonstrates best practices for image handling, accessibility, responsiveness, and contrasts Astro's built-in processing with traditional static asset serving.

## 🎯 Goals

1. **Deep Dive into `astro:assets`:** Learn what Astro's image service is, its components (`<Image>`, `<Picture>`), and utility functions (`getImage()`).
2. **`/public` vs. `src/assets`:** Clearly differentiate between images stored in the `public/` directory (unprocessed) and `src/assets/` (processed by Astro).
3. **Web Accessibility & Responsiveness:** Implement best practices for `alt` text, CLS prevention, lazy loading, and responsive image generation using modern formats.
4. **Content Integration:** Explore how to handle images in various content scenarios including Markdown, MDX, and Content Collections.

## 🌟 Features Demonstrated

- Using `<Image />` component for optimized local and remote images
- Using `<Picture />` component for responsive images with multiple formats (WebP, AVIF)
- Understanding `width`, `height`, `alt`, `loading`, `decoding` attributes
- Configuring `astro.config.mjs` for remote image authorization (`image.domains`)
- Direct `<img>` tag usage for unprocessed images
- Image handling in Markdown (`.md`) files
- Images in Content Collections with schema validation
- Generating images programmatically with `getImage()`
- Handling external content assets (e.g., from Obsidian)
- Framework component integration (React examples)

## 📁 Project Structure

```
/
├── public/
│   ├── obs-assets/                 # Simulated Obsidian assets (unprocessed)
│   ├── public-cat.jpg              # Example public image
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── local-bird.png          # Example optimized images
│   │   └── local-dog.jpg
│   ├── components/
│   │   └── ReactImageExample.jsx   # React component using images
│   ├── content/
│   │   ├── blog/                   # Content collection examples
│   │   └── config.ts               # Content collection schema
│   ├── layouts/
│   │   └── BaseLayout.astro        # Base layout with styling
│   ├── pages/
│   │   ├── 01_local-images.astro   # src/assets demonstrations
│   │   ├── 02_remote-images.astro  # Remote image handling
│   │   ├── 03_markdown.md          # Markdown image examples
│   │   ├── 04_mdx-component.mdx    # MDX with components
│   │   ├── 05_collections.astro    # Content collection images
│   │   ├── 06_obsidian-content.md  # External content simulation
│   └── index.astro             # Home page with navigation
│   └── env.d.ts
├── astro.config.mjs                # Astro config with image settings
├── package.json
└── tsconfig.json
```

## 🚀 Setup & Running

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd astro-image-playground
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   Open your browser to `http://localhost:4321`.

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📚 Learning Path

1. **Start with the [Home Page](http://localhost:4321)** - Overview of all features
2. **[Local Images](http://localhost:4321/01_local-images)** - Learn `<Image>` and `<Picture>` components
3. **[Remote Images](http://localhost:4321/02_remote-images)** - Understand domain authorization
4. **[Markdown Images](http://localhost:4321/03_markdown)** - See automatic processing in action
5. **[MDX Components](http://localhost:4321/04_mdx-component)** - Advanced component usage
6. **[Content Collections](http://localhost:4321/05_collections)** - Type-safe frontmatter images
7. **[External Content](http://localhost:4321/06_obsidian-content)** - Handling non-optimized assets

## 🔧 Key Astro Features Highlighted

### astro:assets (Recommended Approach)
- ✅ Automatic optimization and format conversion
- ✅ Modern formats (WebP, AVIF) with fallbacks
- ✅ Responsive image generation
- ✅ Cumulative Layout Shift (CLS) prevention
- ✅ Lazy loading by default
- ✅ Alt text enforcement
- ✅ Build-time and runtime optimization

### public/ Directory (Traditional Approach)
- ❌ No automatic optimization
- ❌ No format conversion
- ❌ Manual responsive handling required
- ❌ Manual CLS prevention needed
- ❌ Manual lazy loading implementation
- ✅ Direct URL access
- ✅ External content compatibility
- ✅ Faster development builds

## 🎨 Unique Astro.js Features Demonstrated

This project specifically highlights features that are unique to Astro.js vs. general web development concepts:

### 1. **Component Island Architecture**
- Framework components (React) can be hydrated selectively
- Images work seamlessly across SSG, SSR, and client-side hydration

### 2. **Built-in Image Optimization**
- No external dependencies required (unlike Next.js which needs additional setup)
- Works out-of-the-box with multiple image services

### 3. **File-based Routing with Mixed Content Types**
- `.astro`, `.md`, and `.mdx` files all handle images differently
- Demonstrates Astro's flexible content architecture

### 4. **Import-based Asset Management**
- Images are imported like JavaScript modules
- Type-safe image handling with automatic dimension inference

### 5. **Content Collections Integration**
- Schema validation for images in frontmatter
- Type-safe content management unique to Astro

### 6. **Zero-JavaScript by Default**
- Image optimization works without client-side JavaScript
- Progressive enhancement with framework components

## 📝 What We Built

This project demonstrates every major aspect of image handling in Astro:

1. **Local Asset Processing** - Automatic optimization of images in `src/assets/`
2. **Remote Image Authorization** - Secure handling of external images
3. **Accessibility Features** - Proper alt text, CLS prevention, lazy loading
4. **Performance Optimization** - Modern formats, responsive images, compression
5. **Content Integration** - Images in Markdown, MDX, and Content Collections
6. **Framework Interop** - Using optimized images in React components
7. **External Content Workflows** - Handling assets from tools like Obsidian

## 🔍 Key Takeaways

- **Prioritize `src/assets` and Astro's components** for most images
- **Use `public/` sparingly** for files that don't need optimization
- **Always provide meaningful `alt` text** for accessibility
- **Configure `image.domains`** for remote images you want to optimize
- **Consider MDX over Markdown** when you need fine-grained image control
- **Test your images** across different devices and network conditions

## 🚀 Next Steps

- Experiment with different image formats and quality settings
- Try implementing custom image services (Cloudinary, Imgix)
- Explore advanced responsive image strategies
- Integrate with headless CMS systems
- Implement image galleries and lightbox functionality

---

*This project showcases Astro's image capabilities and serves as a practical reference for implementing optimized, accessible images in modern web applications.*

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
