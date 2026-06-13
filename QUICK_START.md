# ⚡ Quick Start - Get Your Website Live in 10 Minutes

## Step 1: Add Your Images (2 minutes)

1. Create image files or download placeholders
2. Place them in these folders:

```
public/images/
├── logo.png (any size, at least 192x192)
├── hero-background.jpg (1920x600 or larger)
└── professionals/
    ├── developer.jpg
    ├── web-developer.jpg
    ├── project-manager.jpg
    └── data-analyst.jpg
```

**💡 Tip**: Use free placeholder sites temporarily:
- placeholder.com
- unsplash.com (free stock photos)
- pexels.com (free stock photos)

---

## Step 2: Update Company Info (3 minutes)

1. Open: `src/constants/index.ts`
2. Find: `COMPANY_INFO` object
3. Change these fields:

```typescript
export const COMPANY_INFO = {
  name: 'Your Company Name',           // ← CHANGE THIS
  tagline: 'Your tagline here',         // ← CHANGE THIS
  mission: 'Your mission...',           // ← CHANGE THIS
  vision: 'Your vision...',             // ← CHANGE THIS
  values: [
    'Your value 1',                     // ← CHANGE THESE
    'Your value 2',
    // ...
  ],
  whyChooseUs: [
    'Your benefit 1',                   // ← CHANGE THESE
    'Your benefit 2',
    // ...
  ],
  phone: '+1 (555) 123-4567',          // ← CHANGE THIS
  email: 'your-email@domain.com',       // ← CHANGE THIS
  address: 'Your address here',         // ← CHANGE THIS
}

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/yours',    // ← CHANGE
  twitter: 'https://twitter.com/yours',              // ← CHANGE
  facebook: 'https://facebook.com/yours',            // ← CHANGE
  instagram: 'https://instagram.com/yours',          // ← CHANGE
}
```

---

## Step 3: Update Professionals (3 minutes)

1. Still in: `src/constants/index.ts`
2. Find: `PROFESSIONALS` array
3. Update each professional:

```typescript
export const PROFESSIONALS: Professional[] = [
  {
    id: 1,
    name: 'Real Person Name',                      // ← CHANGE
    title: 'Their Job Title',                      // ← CHANGE
    specialization: 'Their Field',                 // ← CHANGE
    description: 'Short description',              // ← CHANGE
    image: '/images/professionals/developer.jpg',  // ← MATCH YOUR IMAGE
    experience: '10+ years',                       // ← CHANGE
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],    // ← CHANGE
    bio: 'Longer bio about this person...',        // ← CHANGE
  },
  // ... more professionals
]
```

---

## Step 4: Test Locally (1 minute)

```bash
# In terminal, run:
npm run dev

# Opens at: http://localhost:5173
# Press H to see dev help
```

**Test these:**
- ✅ Images load
- ✅ Mobile menu works
- ✅ Professional profiles open
- ✅ Links work
- ✅ No red errors in console

---

## Step 5: Deploy (1 minute setup, then deploy)

### Option A: Vercel (Easiest)
```bash
npm i -g vercel
vercel
# Follow prompts, site goes live automatically
```

### Option B: Netlify
1. Go to netlify.com
2. Drag & drop your `dist` folder
3. Done! Your site is live

### Option C: Build First
```bash
npm run build
# Upload the 'dist' folder to any host
```

---

## ✅ Verification Checklist

- [ ] Images in `public/images/` folder
- [ ] Company info updated in `src/constants/index.ts`
- [ ] Professional info updated
- [ ] `npm run dev` works without errors
- [ ] Website loads at http://localhost:5173
- [ ] Mobile view works (DevTools Ctrl+Shift+M)
- [ ] All images visible
- [ ] Navigation links work
- [ ] Professional profiles open on click
- [ ] Footer displays correctly

---

## 🎨 Optional Customizations

### Change Colors
Edit `src/index.css`:
```css
:root {
  --primary: #3b82f6;        /* Main color */
  --primary-dark: #2563eb;   /* Darker variant */
  --secondary: #10b981;      /* Accent color */
  --text-primary: #0f172a;   /* Text color */
}
```

### Change Fonts
Edit `src/index.css`:
```css
:root {
  --sans: 'Your Font Name', system-ui, sans-serif;
}
```

### Hide/Modify Sections
Edit `src/App.tsx`:
```typescript
// Comment out components to hide them:
{/* <Hero onGetStartedClick={handleGetStartedClick} /> */}
```

---

## 🚀 Performance Tips

1. **Compress images** before uploading:
   - Use TinyPNG.com (free)
   - Use ImageOptim (Mac)
   - Use Squoosh.app (online)

2. **Optimize logo size**:
   - Should be < 100KB
   - Best format: PNG or SVG

3. **Optimize hero image**:
   - Should be < 500KB
   - Dimensions: 1920x600px

---

## 🆘 Common Issues

### Images Not Showing?
```
✅ Check: Is the file in public/images/ ?
✅ Check: Is the filename spelled correctly?
✅ Check: Is it the right format (jpg, png)?
✅ Solution: Clear browser cache (Ctrl+Shift+Delete)
```

### Styling looks wrong?
```
✅ Check: npm run dev is running
✅ Check: No errors in browser console
✅ Solution: Hard refresh (Ctrl+Shift+R)
```

### Build fails?
```bash
# Solution:
rm -r node_modules package-lock.json
npm install
npm run build
```

---

## 📱 Mobile Testing

**Test on real devices:**

1. **Find local IP**: In terminal, run `ipconfig`
2. **Connect**: Visit `http://YOUR-IP:5173` on phone
3. **Test**: Menu, profiles, responsiveness
4. **Install**: Try adding to home screen (PWA feature)

---

## 📊 After Launch

1. **Set up Analytics**:
   - Google Analytics 4
   - Hotjar for heatmaps

2. **Add Domain**:
   - Update email signatures
   - Add to social profiles
   - Update manifest.json

3. **Monitor Performance**:
   - Use Lighthouse in DevTools
   - Check Core Web Vitals
   - Monitor bounce rate

---

## 🎯 What's Next?

After launch:
- [ ] Monitor analytics
- [ ] Collect feedback
- [ ] Update with new professionals
- [ ] Add blog section (optional)
- [ ] Set up contact form (optional)
- [ ] Add testimonials section (optional)

---

## 📞 Need Help?

1. **Check README.md** - Full documentation
2. **Check SETUP_GUIDE.md** - Detailed setup
3. **Check console errors** - Browser DevTools F12
4. **Check your code** - Compare with examples

---

## 🎉 You're Done!

Your G-Tech Solutions website is:
- ✅ Built
- ✅ Responsive
- ✅ Professional-looking
- ✅ Ready to customize
- ✅ Ready to deploy

**Next: Add images → Update content → Deploy! 🚀**

---

**Questions?** All answers are in README.md or SETUP_GUIDE.md

**Happy coding! 💻**
