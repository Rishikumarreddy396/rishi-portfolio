# Rishi's Portfolio - React Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and TailwindCSS featuring stunning animations and glassmorphism design.

## 🚀 Features

- **Modern Design**: Dark theme with neon accents and glassmorphism effects
- **Fully Responsive**: Optimized for all device sizes
- **Smooth Animations**: Particle background, floating elements, and scroll-based animations
- **Interactive UI**: Hover effects, modal dialogs, and smooth scrolling
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Detailed project cards with modal expansion
- **Skills Display**: Animated skill badges with hover effects

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: TailwindCSS with custom animations
- **UI Components**: Shadcn/ui components
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel/Netlify

## 📱 Sections

1. **Hero Section**: Eye-catching introduction with animated elements
2. **About Me**: Personal description with domain expertise cards
3. **Work Experience**: Timeline-based experience showcase
4. **Featured Projects**: Interactive project gallery with detailed modals
5. **Technical Skills**: Animated skill badges in grid layout
6. **Contact**: Functional contact form with social links
7. **Footer**: Navigation links and scroll-to-top functionality

## 🎨 Design Features

- **Color Scheme**: Dark background with electric blue, purple, and teal accents
- **Animations**: CSS animations for particles, floating elements, and hover effects
- **Glassmorphism**: Frosted glass effect on cards and components
- **Responsive Grid**: Mobile-first responsive design
- **Smooth Scrolling**: Seamless navigation between sections

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd rishi-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:8080`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📂 Project Structure

```
src/
├── components/
│   ├── ui/                 # Shadcn UI components
│   ├── ParticleBackground.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── pages/
│   └── Index.tsx           # Main page component
├── hooks/
│   └── use-toast.ts        # Toast notification hook
├── lib/
│   └── utils.ts            # Utility functions
├── index.css               # Global styles and animations
└── main.tsx                # App entry point
```

## 🎯 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Name and title
- `src/components/About.tsx` - Bio and skills
- `src/components/Experience.tsx` - Work history
- `src/components/Projects.tsx` - Your projects
- `src/components/Contact.tsx` - Contact details

### Styling
- Modify `tailwind.config.ts` for custom colors and animations
- Update `src/index.css` for global styles
- Customize component styles in respective files

### Images
Replace placeholder images with your own:
- Profile image in Hero section
- Project screenshots in Projects section

## 🚀 Deployment

### Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure custom domain if needed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📞 Contact

- **Email**: rishi@example.com
- **LinkedIn**: [linkedin.com/in/rishi](https://linkedin.com/in/rishi)
- **GitHub**: [github.com/rishi](https://github.com/rishi)

---

Made with ❤️ using React and TailwindCSS
```