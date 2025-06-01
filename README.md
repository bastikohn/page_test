# Page Test - GitHub Pages with MDX

A modern, responsive project website built with Next.js and MDX, designed for GitHub Pages deployment.

## 🌟 Features

- **MDX Support**: Write content in Markdown with React components
- **Responsive Design**: Beautiful UI that works on all devices
- **GitHub Pages Ready**: Automatic deployment with GitHub Actions
- **Fast Performance**: Optimized static site generation
- **Easy to Customize**: Clean, modular code structure

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/page_test.git
   cd page_test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
page_test/
├── src/
│   ├── components/
│   │   └── Layout.tsx          # Main layout component
│   └── pages/
│       ├── _app.tsx            # Next.js app configuration
│       ├── index.mdx           # Homepage content
│       ├── about.mdx           # About page content
│       └── contributing.mdx    # Contributing guide
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
├── mdx-components.tsx          # MDX component customization
├── next.config.js              # Next.js configuration
└── package.json
```

## 🎨 Customization

### Adding New Pages

Create new `.mdx` files in the `src/pages/` directory:

```mdx
---
title: Your Page Title
description: Page description for SEO
---

# Your Page Content

Write your content here using **Markdown** syntax!
```

### Styling

- Modify `src/components/Layout.tsx` for layout changes
- Update `mdx-components.tsx` for MDX component styling
- Add CSS modules or styled-components as needed

### Configuration

Update `next.config.js` to change:
- Base path for deployment
- MDX processing options
- Build configuration

## 🚢 Deployment

### GitHub Pages (Recommended)

1. **Enable GitHub Pages** in your repository settings
2. **Set source to "GitHub Actions"**
3. **Push to main branch** - deployment happens automatically!

### Manual Deployment

```bash
npm run build
npm run export
```

The static files will be in the `out/` directory.

## 📝 Content Management

### Writing MDX

MDX allows you to use React components within Markdown:

```mdx
# My Page

This is regular **Markdown** content.

You can also use React components:
<CustomComponent prop="value" />
```

### Frontmatter

Each MDX page can include metadata:

```yaml
---
title: Page Title
description: SEO description
author: Your Name
date: 2025-06-01
---
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static files

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [MDX](https://mdxjs.com/)
- Deployed on [GitHub Pages](https://pages.github.com/)

---

⭐ If this project helped you, please give it a star on GitHub!