# BuildVerse Deployment Guide

Complete guide for deploying your BuildVerse website to production.

## 🚀 Deployment Platforms

### 1. Vercel (Recommended) ⭐

Vercel is the easiest way to deploy Next.js applications (made by the Next.js team).

#### Steps:

1. **Push to Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub/GitLab/Bitbucket
   - Select your repository
   - Click "Deploy"

3. **Configure (if needed)**
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add your variables from `env.template`

5. **Custom Domain**
   - Go to Project Settings → Domains
   - Add your domain
   - Update DNS records as instructed

**Pros:**
- ✅ Zero configuration
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments on git push
- ✅ Preview deployments for PRs
- ✅ Free tier available

---

### 2. Netlify

Great alternative with similar features to Vercel.

#### Steps:

1. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

2. **netlify.toml Configuration**
   Create `netlify.toml` in root:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

3. **Deploy**
   - Push to GitHub
   - Connect repository on Netlify
   - Configure build settings
   - Deploy

**Pros:**
- ✅ Great UI/UX
- ✅ Form handling built-in
- ✅ Automatic HTTPS
- ✅ Free tier available

---

### 3. AWS Amplify

Enterprise-grade deployment with AWS infrastructure.

#### Steps:

1. **Install Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize**
   ```bash
   amplify init
   ```

3. **Add Hosting**
   ```bash
   amplify add hosting
   ```

4. **Deploy**
   ```bash
   amplify publish
   ```

**Pros:**
- ✅ AWS integration
- ✅ Scalable
- ✅ Enterprise features

**Cons:**
- ❌ More complex setup
- ❌ Requires AWS account

---

### 4. Docker + VPS/Cloud Server

Deploy on any server using Docker.

#### Dockerfile

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

#### docker-compose.yml

```yaml
version: '3.8'
services:
  buildverse:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

#### Deploy

```bash
docker-compose up -d
```

**Pros:**
- ✅ Full control
- ✅ Any hosting provider
- ✅ Consistent environment

**Cons:**
- ❌ Manual setup
- ❌ Server maintenance required

---

### 5. Traditional Node.js Hosting

Deploy on VPS (DigitalOcean, Linode, etc.)

#### Steps:

1. **On Your Server**
   ```bash
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs

   # Install PM2
   sudo npm install -g pm2

   # Clone your repository
   git clone YOUR_REPO_URL
   cd buildverse-website

   # Install dependencies
   npm install

   # Build
   npm run build

   # Start with PM2
   pm2 start npm --name "buildverse" -- start
   pm2 save
   pm2 startup
   ```

2. **Configure Nginx (Reverse Proxy)**

   Create `/etc/nginx/sites-available/buildverse`:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Enable site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/buildverse /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

3. **SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

**Pros:**
- ✅ Full control
- ✅ Cost-effective for multiple sites

**Cons:**
- ❌ Manual updates
- ❌ Server maintenance

---

## 🔧 Pre-Deployment Checklist

### Performance

- [ ] Images optimized (WebP format, compressed)
- [ ] Unused dependencies removed
- [ ] Code minified (automatic with build)
- [ ] Lazy loading implemented (automatic)

### SEO

- [ ] Meta tags updated in `pages/_document.js`
- [ ] Sitemap generated
- [ ] robots.txt created
- [ ] Analytics added (Google Analytics, etc.)

### Security

- [ ] Environment variables set properly
- [ ] API keys not exposed in client code
- [ ] HTTPS enabled
- [ ] Security headers configured

### Functionality

- [ ] All links working
- [ ] Contact form tested
- [ ] Mobile responsive
- [ ] Cross-browser tested
- [ ] Performance tested (Lighthouse)

### Content

- [ ] Contact information updated
- [ ] Social media links correct
- [ ] Portfolio projects updated
- [ ] Legal pages added (Privacy, Terms)

---

## 📊 Post-Deployment

### Monitor Performance

1. **Google PageSpeed Insights**
   - Visit [pagespeed.web.dev](https://pagespeed.web.dev/)
   - Test your site
   - Implement suggestions

2. **Google Search Console**
   - Add your site
   - Submit sitemap
   - Monitor indexing

3. **Analytics Setup**
   ```javascript
   // Add to pages/_app.js
   import { useEffect } from 'react'
   import { useRouter } from 'next/router'
   import * as gtag from '../lib/gtag'

   export default function App({ Component, pageProps }) {
     const router = useRouter()
     
     useEffect(() => {
       const handleRouteChange = (url) => {
         gtag.pageview(url)
       }
       router.events.on('routeChangeComplete', handleRouteChange)
       return () => {
         router.events.off('routeChangeComplete', handleRouteChange)
       }
     }, [router.events])

     return <Component {...pageProps} />
   }
   ```

### Continuous Deployment

Set up automatic deployments:

1. **Vercel/Netlify**: Automatic on git push
2. **GitHub Actions**: Create `.github/workflows/deploy.yml`
3. **GitLab CI**: Create `.gitlab-ci.yml`

### Backup Strategy

1. **Database** (if applicable): Regular backups
2. **Files**: Git repository
3. **Images**: Cloud storage (S3, Cloudinary)

---

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Site Not Loading

1. Check server logs
2. Verify DNS settings
3. Check firewall rules
4. Verify SSL certificate

### Slow Performance

1. Enable CDN
2. Optimize images
3. Enable caching
4. Use compression (gzip/brotli)

---

## 📞 Support

Need help with deployment? Reach out:
- Email: hello@buildverse.ai
- Documentation: Check SETUP.md

---

**Happy Deploying! 🚀**


