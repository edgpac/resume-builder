# Professional Resume Builder

A modern, professional resume builder with 5 stunning templates inspired by contemporary designs. Each template features photo upload, live editing, and multiple export options.

## 🎨 Features

- **5 Professional Templates**: Executive, Creative, Modern, Classic, and Bold designs
- **Photo Integration**: Upload and display professional photos
- **Live Editing**: Click any text to edit in real-time
- **Multiple Export Options**:
  - Print to PDF
  - Download as PNG
  - Copy to clipboard
- **Fully Responsive**: Works on desktop and mobile devices
- **AI-Powered** (Coming Soon): Enhanced content generation with GROQ API

## 📋 Templates

### Template 1 - Executive Professional
- Purple gradient sidebar
- Skills with progress bars
- Professional timeline layout
- Perfect for senior positions

### Template 2 - Creative Designer  
- Blue gradient design
- Skills with dot indicators
- References section
- Ideal for creative professionals

### Template 3 - Modern Professional
- Dark sidebar with orange accents
- Achievement badges
- Modern card layout
- Great for tech professionals

### Template 4 - Classic Elegance
- Minimalist green design
- Traditional structure
- Education-focused
- Perfect for academia & corporate

### Template 5 - Bold Impact
- Dark green professional theme
- Detailed personal info section
- Knowledge and skills showcase
- Ideal for accounting & finance

## 🚀 Deployment to Vercel

### Step 1: Prepare Your Repository

1. Create a new GitHub repository
2. Upload all files from the `/outputs` folder:
   ```
   index.html
   template1.html
   template2.html
   template3.html
   template4.html
   template5.html
   resume_generator.html (optional)
   vercel.json
   README.md
   ```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect the configuration

### Step 3: Add GROQ API Key (Optional)

To enable AI-powered features:

1. In your Vercel project dashboard, go to **Settings** → **Environment Variables**
2. Add a new variable:
   - **Key**: `GROQ_API_KEY`
   - **Value**: `gsk_6A1y34Tmf0JjLVHmm2ZfWGdyb3...` (your GROQ API key)
3. Redeploy the project

### Step 4: Configure Custom Domain (Optional)

1. Go to **Settings** → **Domains**
2. Add your custom domain
3. Follow the DNS configuration instructions

## 💻 Local Development

To run locally:

1. Simply open `index.html` in your browser
2. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```
3. Navigate to `http://localhost:8000`

## 🎯 Usage Guide

### Creating Your Resume

1. **Choose a Template**: Click on any template card from the landing page
2. **Upload Photo**: Click the photo placeholder to upload your professional photo
3. **Edit Content**: Click any text field to edit
4. **Customize Skills**: Use sliders to adjust skill levels
5. **Preview**: Click "Preview" to see clean version
6. **Export**: 
   - Click "Print / Save PDF" to save as PDF
   - Click "Download as PNG" for image format
   - Use browser's print dialog for more options

### Tips for Best Results

- Use high-quality photos (at least 500x500px)
- Keep descriptions concise and impactful
- Use action verbs in experience descriptions
- Proofread all content before exporting
- Test print preview before final export

## 🛠️ Tech Stack

- **React 18**: For dynamic component rendering
- **Tailwind CSS**: For modern styling
- **html2canvas**: For PNG export functionality
- **Font Awesome**: For icons
- **Google Fonts**: For typography

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Print to PDF works best in Chrome/Edge

## 🔧 Customization

### Adding New Templates

1. Create a new `template6.html` file
2. Follow the structure of existing templates
3. Update `index.html` to add the new template card
4. Redeploy to Vercel

### Changing Colors

Each template has CSS variables for easy color customization:
- Look for gradient definitions in `<style>` section
- Update color values in the sidebar background
- Modify accent colors in section titles

## 🐛 Troubleshooting

### Photo Upload Issues
- Ensure image is in JPG, PNG, or WebP format
- Keep file size under 10MB
- Try a different browser if upload fails

### Export Issues
- Use Chrome for best PDF export results
- Allow pop-ups for PNG download
- Check printer settings for PDF quality

### Text Not Editable
- Ensure you're not in "Preview" mode
- Click directly on text fields
- Refresh page if fields are unresponsive

## 📄 License

This project is free to use for personal and commercial purposes.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Support

For questions or issues:
- Create an issue on GitHub
- Contact via email
- Check documentation

## 🎓 Credits

Designed and developed by Edtik
Inspired by modern resume design trends

---

**Made with ❤️ for job seekers worldwide**
