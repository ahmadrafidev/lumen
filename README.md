# Lumen

<div align="center">
  <img src="Screenshot 2024-11-21 at 15.47.50.png" alt="Lumen Overview" width="800" style="border-radius: 8px; margin: 20px 0;" />
  
  **A modern, intuitive color accessibility checker built with Next.js**
  
  [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
  [![Next.js](https://img.shields.io/badge/Next.js-15.0.3-black.svg)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC.svg)](https://tailwindcss.com/)
</div>

## 🌟 Overview

Lumen is a comprehensive web application designed to help designers and developers ensure their color choices meet accessibility standards. Built with modern web technologies, it provides real-time contrast ratio calculations based on WCAG (Web Content Accessibility Guidelines) standards, making web accessibility testing simple and intuitive.

### 🎯 Why Lumen?

- **Instant Feedback**: Real-time contrast ratio calculations as you adjust colors
- **WCAG Compliant**: Comprehensive testing for AA and AAA accessibility standards  
- **Modern UI**: Beautiful, responsive interface with dark/light mode support
- **Developer Friendly**: Clean, accessible design with smooth animations
- **Multiple Input Methods**: Hex codes, visual color picker, and direct input support

## ✨ Features

### 🎨 Color Input & Selection

- **Hex Code Input**: Direct hex value entry with validation
- **Interactive Color Picker**: Visual color selection using `react-colorful`
- **Real-time Updates**: Instant preview as you modify colors
- **Color Validation**: Automatic fallback for invalid color values

### 📊 WCAG Compliance Testing

- **Normal Text Standards**: AA (4.5:1) and AAA (7:1) compliance checking
- **Large Text Standards**: AA (3:1) and AAA (4.5:1) compliance checking  
- **UI Components**: AA (3:1) compliance for interface elements
- **Visual Indicators**: Clear pass/fail status with intuitive icons

### 👁️ Live Preview

- **Real-time Rendering**: See exactly how your colors will look together
- **Sample Content**: Test with headings, paragraphs, and buttons
- **Interactive Elements**: Preview buttons and UI components
- **Color Information**: Display current hex values for reference

### 🎯 Accessibility Features

- **Keyboard Navigation**: Full keyboard accessibility support
- **Screen Reader Friendly**: Proper ARIA labels and semantic HTML
- **Color Contrast**: The app itself meets WCAG AA standards
- **Responsive Design**: Mobile-first approach with optimized layouts

### 🌙 Theme Support

- **Dark/Light Mode**: Automatic theme detection with manual toggle
- **Smooth Transitions**: Elegant theme switching animations

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or later
- **pnpm** (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ahmadrafidev/lumen.git
   cd lumen
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
pnpm build

# Start the production server
pnpm start
```

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 15.0.3](https://nextjs.org/)** - React framework with App Router
- **[React 19 RC](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development

### UI & Styling
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful, consistent icons
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

### Color & Accessibility
- **[react-colorful](https://omgovich.github.io/react-colorful/)** - Lightweight color picker
- **Custom WCAG utilities** - Precise contrast ratio calculations
- **Relative luminance calculations** - Following WCAG 2.1 standards

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager

## 📁 Project Structure

```
lumen/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Main application page
│   ├── layout.tsx         # Root layout with providers
│   ├── globals.css        # Global styles and CSS variables
│   └── not-found.tsx      # 404 error page
├── components/            # React components
│   ├── ui/               # Reusable UI primitives
│   ├── ForegroundCard/   # Foreground color input
│   ├── BackgroundCard/   # Background color input
│   ├── ContrastRatioCard/ # Contrast ratio display
│   ├── LivePreviewCard/  # Real-time preview
│   ├── PassCheckCard/    # WCAG compliance checker
│   ├── Header/           # Application header
│   ├── Footer/           # Application footer
│   └── Home/             # Main homepage component
├── utils/                # Utility functions
│   └── colorUtils.ts     # Color calculation utilities
├── lib/                  # Shared libraries
├── public/               # Static assets
└── ...config files
```

## 🔬 How It Works

### Contrast Ratio Calculation

Lumen uses the official WCAG 2.1 formula for calculating contrast ratios:

1. **Relative Luminance**: Calculate the relative luminance of each color
2. **Contrast Ratio**: Apply the formula `(L1 + 0.05) / (L2 + 0.05)`
3. **WCAG Compliance**: Compare against WCAG AA/AAA thresholds

```typescript
export const calculateContrastRatio = (foreground: string, background: string): number => {
  const lum1 = calculateLuminance(foreground);
  const lum2 = calculateLuminance(background);
  
  return lum1 > lum2
    ? (lum1 + 0.05) / (lum2 + 0.05)
    : (lum2 + 0.05) / (lum1 + 0.05);
};
```

### WCAG Standards Implementation

- **AA Normal Text**: 4.5:1 minimum contrast ratio
- **AA Large Text**: 3:1 minimum contrast ratio  
- **AAA Normal Text**: 7:1 minimum contrast ratio
- **AAA Large Text**: 4.5:1 minimum contrast ratio
- **UI Components**: 3:1 minimum contrast ratio

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use conventional commit messages
- Ensure accessibility standards are met
- Add tests for new features
- Update documentation as needed

## 📚 Resources & References

### WCAG Guidelines
- [WCAG 2.1 Overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Understanding WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/)

### Color Theory & Accessibility
- [Color Universal Design](https://jfly.uni-koeln.de/color/)
- [Accessible Colors](https://accessible-colors.com/)
- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/)

### Technical Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ahmad Rafi Wirana** ([@rafiwiranaa](https://x.com/rafiwiranaa))

---

<div align="center">
  Made with ❤️ for a more accessible web
</div>
