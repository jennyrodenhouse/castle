# Castle Mobile Web App

A modern, mobile-first Progressive Web App (PWA) built with vanilla HTML, CSS, and JavaScript.

## Features

- **Mobile-First Design**: Optimized for mobile devices with responsive layout
- **Progressive Web App**: Can be installed on home screen like a native app
- **Offline Support**: Works offline with service worker caching
- **Fast & Lightweight**: No heavy frameworks, just clean vanilla JavaScript
- **Modern UI**: Beautiful, clean interface with smooth animations

## Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/jennyrodenhouse/castle.git
cd castle
```

2. Serve the app locally using any static file server:

**Using Python:**
```bash
python -m http.server 8000
```

**Using Node.js (http-server):**
```bash
npx http-server -p 8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

3. Open your browser and navigate to `http://localhost:8000`

## Deployment

### GitHub Pages

This app is configured to work with GitHub Pages:

1. Push your code to GitHub
2. Go to your repository Settings
3. Navigate to Pages section
4. Set Source to "Deploy from a branch"
5. Select your branch (usually `main` or `claude/setup-mobile-web-app-*`)
6. Click Save
7. Your app will be available at: `https://jennyrodenhouse.github.io/castle/`

### Other Hosting Options

**Vercel:**
```bash
npx vercel
```

**Netlify:**
```bash
npx netlify-cli deploy
```

**Firebase Hosting:**
```bash
firebase init hosting
firebase deploy
```

## Project Structure

```
castle/
├── index.html          # Main HTML file
├── styles.css          # Styles and responsive design
├── app.js             # JavaScript functionality
├── manifest.json      # PWA manifest
├── service-worker.js  # Service worker for offline support
├── icon-192.png       # App icon (192x192)
├── icon-512.png       # App icon (512x512)
└── README.md          # This file
```

## PWA Features

### Install Prompt
The app includes an install button that appears on supported devices, allowing users to add the app to their home screen.

### Offline Support
Service worker caches essential files, enabling the app to work offline after the first visit.

### Responsive Design
Mobile-first approach with breakpoints for tablets and desktops.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## Customization

### Change App Name
Edit `manifest.json` and update the `name` and `short_name` fields.

### Change Colors
Update CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2196F3;
    --secondary-color: #1976D2;
    --accent-color: #FF4081;
}
```

### Add Icons
Replace `icon-192.png` and `icon-512.png` with your own icons.

## License

MIT License - feel free to use this project for any purpose.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
