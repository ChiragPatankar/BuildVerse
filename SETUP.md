# BuildVerse Setup Guide

Welcome to BuildVerse! Follow these steps to get your website up and running.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager (comes with Node.js)
- A code editor like **VS Code** (recommended)

## 🚀 Quick Start

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including:
- Next.js
- React
- TailwindCSS
- Framer Motion
- React Icons
- next-themes

### Step 2: Start Development Server

```bash
npm run dev
```

The website will be available at `http://localhost:3000`

### Step 3: Customize Your Content

#### Update Contact Information

Edit `components/Contact.jsx` and `components/Footer.jsx`:
- Replace phone numbers
- Update email addresses
- Add your social media links

#### Customize Services

Edit `components/Services.jsx` to modify:
- Service descriptions
- Features list
- Pricing (if applicable)

#### Update Portfolio Projects

Edit `components/Portfolio.jsx` to showcase your actual projects:
- Replace placeholder projects
- Add real screenshots/images
- Update project descriptions and stats

#### Brand Colors

Modify colors in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    blue: '#1E90FF',      // Change to your brand blue
    purple: '#3B0CA3',    // Change to your brand purple
    dark: '#0A0A0A',      // Background color
  },
}
```

#### Logo

Your logo is already in `public/logo.png`. To replace it:
1. Add your logo file to the `public` folder
2. Make sure it's named `logo.png` or update references in:
   - `components/Navbar.jsx`
   - `components/Footer.jsx`

## 🎨 Theme Customization

### Fonts

The website uses:
- **Orbitron** - Headings and titles
- **Poppins** - Body text and UI elements
- **Inter** - Secondary text

These are loaded via Google Fonts in `styles/globals.css`. You can change them by:
1. Finding your fonts on [Google Fonts](https://fonts.google.com/)
2. Updating the import URL in `styles/globals.css`
3. Updating `tailwind.config.js` font family settings

### Animations

Animations are powered by Framer Motion. To adjust:
- **Speed**: Change `duration` values in component animation configs
- **Type**: Modify `transition` ease values
- **Delay**: Adjust `delay` and `staggerChildren` values

## 📱 Testing Responsiveness

Test your site on different screen sizes:

1. **Desktop**: Use your browser normally
2. **Mobile**: Open DevTools (F12) and toggle device toolbar
3. **Tablet**: Test in DevTools with tablet presets

## 🚀 Building for Production

### Build the Site

```bash
npm run build
```

This creates an optimized production build in `.next` folder.

### Test Production Build Locally

```bash
npm run start
```

This runs the production build on `http://localhost:3000`

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and deploy

### Option 2: Netlify

1. Build the site: `npm run build`
2. Drag and drop the `.next` folder to Netlify
3. Configure build command: `npm run build`
4. Configure publish directory: `.next`

### Option 3: Custom Server

1. Build: `npm run build`
2. Upload files to your server
3. Install Node.js on server
4. Run: `npm run start`
5. Use PM2 or similar for process management

## 🔧 Common Issues & Solutions

### Issue: Module not found errors

**Solution**: Delete `node_modules` and reinstall
```bash
rm -rf node_modules
npm install
```

### Issue: Port 3000 already in use

**Solution**: Use a different port
```bash
PORT=3001 npm run dev
```

### Issue: Images not loading

**Solution**: Ensure images are in the `public` folder and referenced without `/public/` prefix:
```jsx
<Image src="/logo.png" /> // ✅ Correct
<Image src="/public/logo.png" /> // ❌ Wrong
```

### Issue: Styles not applying

**Solution**: Restart dev server and clear browser cache
```bash
# Stop server (Ctrl+C)
npm run dev
```

## 📧 Form Handling

The contact form currently simulates submission. To make it functional:

### Option 1: EmailJS

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Get your service ID, template ID, and public key
3. Update `components/Contact.jsx` with EmailJS integration

### Option 2: Formspree

1. Sign up at [Formspree](https://formspree.io/)
2. Create a form and get your endpoint
3. Update form action in `components/Contact.jsx`

### Option 3: API Route

Create `pages/api/contact.js`:
```javascript
export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Handle form submission
    // Send email using nodemailer or similar
    res.status(200).json({ message: 'Success' })
  }
}
```

## 🔍 SEO Optimization

### Update Meta Tags

Edit `pages/index.js` and `pages/_document.js`:
- Update title tags
- Modify meta descriptions
- Add your domain to og:url tags

### Generate Sitemap

Install next-sitemap:
```bash
npm install next-sitemap
```

Create `next-sitemap.config.js` and configure.

### Add Google Analytics

1. Get your GA4 tracking ID
2. Add to `pages/_app.js` or `pages/_document.js`

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format, compress before uploading
2. **Lazy Load**: Images below the fold are automatically lazy loaded
3. **Code Splitting**: Next.js handles this automatically
4. **Minimize Dependencies**: Remove unused packages

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 🆘 Need Help?

- Check the [README.md](./README.md) file
- Review component code comments
- Visit Next.js documentation
- Open an issue on GitHub

---

Happy Building! 🚀


