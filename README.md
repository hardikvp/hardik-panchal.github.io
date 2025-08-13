# Hardik Panchal - Personal Website

My personal website hosted on GitHub Pages at [hvp.github.io](https://hvp.github.io)

## About

This is my personal website built with Next.js, showcasing my work as an engineer and founder. The site features information about my projects Saarthi and Elexis, my background, and ways to connect with me.

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## Local Development

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/hardikvp/hvp.github.io.git
   cd hvp.github.io
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions whenever changes are pushed to the main branch.

To deploy manually:
1. Build the project: `npm run build`
2. The static files will be generated in the `out` directory
3. GitHub Actions will automatically deploy these files to GitHub Pages

## Contact

- **Email**: hardik.panchal@amaxatech.com
- **Twitter**: [@hrdikvp94](https://x.com/hrdikvp94)
- **Instagram**: [@hardikvp94](https://www.instagram.com/hardikvp94)

## Projects

- **[Saarthi](https://joinsaarthi.com/)** - Platform for freshers to land their first job
- **[Elexis](https://elexis.ai/)** - AI copilot for smarter hiring

---

Built with ❤️ using Next.js and deployed on GitHub Pages
\`\`\`

Now let's add a .nojekyll file to ensure GitHub Pages works correctly with Next.js:

```plaintext file="public/.nojekyll"
