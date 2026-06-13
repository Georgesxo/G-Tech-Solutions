# G-Tech Solutions - Professional PWA Website

A modern, professional Progressive Web App (PWA) website for G-Tech Solutions, an outsourcing business connecting clients with top-tier professionals across multiple industries.

## 🌟 Features

### ✨ Core Features
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Mobile Breakpoint**: 768px - Different layouts for mobile and desktop
- **Professional UI**: Modern gradient designs with smooth animations
- **Interactive Components**: Clickable professional profiles with detailed information
- **Progressive Web App**: Installable on mobile devices
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels

### 📱 Sections
1. **Header**: Sticky navigation with logo and mobile hamburger menu
2. **Hero Banner**: Eye-catching hero section with call-to-action
3. **Mission, Vision & Values**: Three-card layout showcasing company values
4. **Why Choose Us**: Six-point value proposition section
5. **Professional Profiles**: 4 expert professionals with profile modals
6. **Footer**: Comprehensive footer with contact info, links, and social media

### 👥 Professionals Featured
1. **Sarah Johnson** - Senior Software Developer (Software & App Development)
2. **Michael Chen** - Web Design & Development Lead (Website Development)
3. **Emily Rodriguez** - Senior Project Manager (Project Management)
4. **David Thompson** - Data Analyst & Business Consultant (Data Analysis & Virtual Assistance)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. Navigate to the project directory:
```bash
cd "G Tech Solutions"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use)

### Build for Production

```bash
npm run build
```

The optimized production build will be created in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.css
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   └── Hero.css
│   ├── ProfessionalSection/
│   │   ├── ProfessionalSection.tsx
│   │   └── ProfessionalSection.css
│   ├── ProfileDetail/
│   │   ├── ProfileDetail.tsx
│   │   └── ProfileDetail.css
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── Footer.css
│   └── index.ts
├── hooks/
│   └── useIsMobile.ts
├── types/
│   └── index.ts
├── constants/
│   └── index.ts
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## 🖼️ Image Requirements

You'll need to add the following images to the `public/images/` folder:

### Logo
- **Logo Image**: `public/images/logo.png` (40x40px for header, or larger source)
  - Used in header, footer, and branding

### Professional Photos
- `public/images/professionals/developer.jpg` (for Sarah Johnson)
- `public/images/professionals/web-developer.jpg` (for Michael Chen)
- `public/images/professionals/project-manager.jpg` (for Emily Rodriguez)
- `public/images/professionals/data-analyst.jpg` (for David Thompson)
  - Recommended size: 300x300px or larger
  - Format: JPG or PNG

### Hero Section
- `public/images/hero-background.jpg` (1920x600px or larger)
  - Used as background image in hero banner

## 🎨 Customization Guide

### Update Company Information
Edit `src/constants/index.ts`:
- `COMPANY_INFO`: Name, mission, vision, values, contact details
- `SOCIAL_LINKS`: LinkedIn, Twitter, Facebook, Instagram URLs

### Modify Professional Profiles
Edit `src/constants/index.ts`:
- Update the `PROFESSIONALS` array with real professional data
- Add new professionals by following the `Professional` interface

### Change Colors
Edit `src/index.css` (`:root` variables):
```css
--primary: #3b82f6;           /* Primary blue */
--primary-dark: #2563eb;      /* Darker blue */
--secondary: #10b981;         /* Success green */
--text-primary: #0f172a;      /* Dark text */
```

## 📱 Responsive Design

The website uses a mobile-first approach with a breakpoint at **768px**:

- **Mobile** (< 768px): Single column layouts, hamburger menu
- **Tablet** (768px - 1024px): 2-column grids
- **Desktop** (> 1024px): Full layouts with optimal spacing

### useIsMobile Hook
A custom hook is provided to handle responsive behavior:
```typescript
import { useIsMobile } from './hooks/useIsMobile'

function MyComponent() {
  const isMobile = useIsMobile()
  return isMobile ? <MobileVersion /> : <DesktopVersion />
}
```

## 🔧 Development Tools

- **React 19.2.6**: UI framework
- **TypeScript**: Type safety
- **Vite**: Lightning-fast build tool
- **Lucide React**: Professional icons
- **CSS**: Custom styling with modern features

## 📝 Technology Stack

- **Frontend**: React + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 (Grid, Flexbox, CSS Variables)
- **Icons**: Lucide React
- **Package Manager**: npm

## 🎯 PWA Features To Implement

To convert this to a full PWA, add:

1. **Web Manifest** (`public/manifest.json`):
```json
{
  "name": "G-Tech Solutions",
  "short_name": "G-Tech",
  "description": "Professional outsourcing solutions",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#3b82f6",
  "icons": [
    {
      "src": "/images/logo.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

2. **Service Worker** (optional, for offline functionality)

3. **Add manifest link to `index.html`**:
```html
<link rel="manifest" href="/manifest.json">
```

## 📞 Contact Information

The website includes:
- Email: info@gtechsolutions.com
- Phone: +1 (555) 123-4567
- Address: Tech Park, Suite 500, New York, NY 10001

*(Update these in `src/constants/index.ts`)*

## 🚀 Deployment

### Build
```bash
npm run build
```

### Deploy to Hosting
The `dist` folder contains the production-ready files. Deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📚 Key Components Explained

### Header Component
- Sticky navigation with logo and company name
- Desktop navigation menu with smooth links
- Mobile hamburger menu that opens/closes
- "Get Started" button linking to contact section

### Hero Section
- Full-width background image with gradient overlay
- Company mission, vision, and values in three cards
- "Why Choose Us" section with six key benefits

### Professional Section
- Grid layout of 4 professional profiles
- Hover effect showing "View Profile" overlay
- Click to open detailed profile modal

### Profile Detail Modal
- Full professional information
- Skills and experience
- Experience badge
- Consultation call-to-action button

### Footer
- Company information
- Quick links
- Services list
- Contact information
- Social media links
- Copyright and legal links

## 🎓 Learning Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [Lucide Icons](https://lucide.dev/)

## 📄 License

This project is proprietary to G-Tech Solutions.

## ✅ Next Steps

1. **Add Images**: Place professional photos and logo in `public/images/`
2. **Update Content**: Customize company information in `src/constants/index.ts`
3. **Test Responsiveness**: Use DevTools to test on various screen sizes
4. **Deploy**: Build and deploy to your hosting platform
5. **PWA Setup**: Add manifest and service worker for PWA functionality
6. **Analytics**: Integrate Google Analytics or similar
7. **SEO**: Add meta tags and optimize for search engines

---

**Built with ❤️ for G-Tech Solutions**
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
