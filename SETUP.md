# Mama & Co. - Homepage Setup Guide

## 📋 Project Overview
This is a responsive homepage for **Mama & Co.**, a premium cakes and pastries business based in Lipa City, Batangas. The website showcases products, services, and brand information.

## 🚀 Quick Start

### Running Locally
You have several options to run this website on your laptop:

#### Option 1: Using Python (Recommended)
```bash
# Python 3.x
cd c:\Users\Ashto\Fatmama_sample_website
python -m http.server 8000

# Then open: http://localhost:8000
```

#### Option 2: Using Node.js (if installed)
```bash
# Install http-server globally
npm install -g http-server

# Navigate to project folder
cd c:\Users\Ashto\Fatmama_sample_website

# Start server
http-server

# Open: http://localhost:8080
```

#### Option 3: Using VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Click "Open with Live Server"
4. Browser will open automatically at `http://localhost:5500`

#### Option 4: Direct Browser Open
Simply double-click `index.html` to open in your browser (no server needed for basic viewing)

## 📁 Project Structure
```
Fatmama_sample_website/
├── index.html          # Main homepage
├── styles.css          # Styling for the site
├── script.js           # Interactive functionality
├── assets/             # Images and media folder
│   ├── logo.png
│   ├── hero-bg.jpg
│   ├── product1.jpg
│   ├── product2.jpg
│   ├── product3.jpg
│   ├── product4.jpg
│   └── about-image.jpg
└── README.md          # This file
```

## 🖼️ Adding Images to Assets Folder

Replace placeholder images with your actual images:

1. **Logo** (`assets/logo.png`) - Mama & Co. logo
2. **Hero Background** (`assets/hero-bg.jpg`) - Large banner image
3. **Product Images** (`assets/product1.jpg`, etc.) - Product photos
4. **About Image** (`assets/about-image.jpg`) - Company story image

## 🎨 Homepage Sections

1. **Navigation Bar** - Links to HOME, OUR STORY, MENU, SERVICES, STORES
2. **Hero Section** - Welcome banner with call-to-action
3. **Announcement** - Free delivery promotion
4. **Featured Products** - Display of 4 bestselling items
5. **Our Story** - Brand background and history
6. **Services** - Features: Custom Cakes, Fast Delivery, Catering, Loyalty
7. **Store Info** - Location, contact, hours of operation
8. **Call-to-Action** - Order now section
9. **Footer** - Links and social media

## 🌐 Syncing with GitHub

### First Time Setup
```bash
# Navigate to your project
cd c:\Users\Ashto\Fatmama_sample_website

# Check git status
git status

# Add all files
git add .

# Commit changes
git commit -m "Initial homepage setup"

# Push to GitHub
git push origin main
```

### Updating After Changes
```bash
git add .
git commit -m "Description of changes"
git push origin main
```

### Pull Latest from GitHub
```bash
git pull origin main
```

## 📝 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2d5016;      /* Dark green */
    --secondary-color: #f4d03f;    /* Yellow */
    --accent-color: #d63031;       /* Red */
}
```

### Contact Information
Update phone, email, and address in `index.html`:
- Phone: (043) 555-8888
- Email: info@mamaandco.ph
- Address: Villa Lourdes, Lipa City, Batangas

### Product Information
Edit product names and prices in the HTML section marked "Featured Products Section"

## 🔗 Features Implemented

✅ Responsive design (works on mobile, tablet, desktop)  
✅ Sticky navigation bar  
✅ Smooth scrolling between sections  
✅ Product grid with hover effects  
✅ Service cards  
✅ Store information  
✅ Social media links  
✅ Mobile-friendly layout  

## ⚠️ Notes

- This is a **homepage only** - no backend functionality yet
- Images are placeholders - add your actual images to `/assets` folder
- Contact form, shopping cart, and ordering system are placeholder for future development
- All links are currently dummy links ready for future implementation

## 📦 What's Next

After reviewing the homepage, you can:
1. Set up backend API for ordering
2. Implement shopping cart functionality
3. Add user authentication
4. Build admin dashboard for order management
5. Add AI chatbot integration
6. Implement generative cake design feature

## 🔧 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📞 Support

For issues or questions, contact the development team.

---

**Created:** 2026  
**Technology:** HTML, CSS, JavaScript  
**For:** Mama & Co. Smart Web Ordering System
