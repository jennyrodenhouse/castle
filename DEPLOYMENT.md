# Deployment Instructions

## Setting Up GitHub Pages

To get your mobile web app live with a public URL, follow these steps:

### Option 1: Via GitHub Web Interface (Recommended)

1. Go to your repository on GitHub: https://github.com/jennyrodenhouse/castle

2. Click on **Settings** (top menu)

3. In the left sidebar, click **Pages**

4. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `claude/setup-mobile-web-app-011CV4iM8UyQ6dNnxAyHyEni`
   - **Folder**: Select `/ (root)`

5. Click **Save**

6. Wait a few minutes for GitHub to build and deploy your site

7. Your app will be available at:
   ```
   https://jennyrodenhouse.github.io/castle/
   ```

8. Refresh the Pages settings page to see the deployment status and URL

### Option 2: Via GitHub API

If you have a GitHub personal access token with repo permissions, you can enable Pages via API:

```bash
curl -X POST \
  -H "Authorization: token YOUR_GITHUB_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/jennyrodenhouse/castle/pages \
  -d '{
    "source": {
      "branch": "claude/setup-mobile-web-app-011CV4iM8UyQ6dNnxAyHyEni",
      "path": "/"
    }
  }'
```

### Verifying Deployment

Once deployed, you can:
- Visit your public URL
- Test the PWA install functionality on mobile
- Test offline mode (visit once, then disconnect from internet)
- Share the URL with others

### Custom Domain (Optional)

To use a custom domain:

1. In the Pages settings, enter your custom domain
2. Update your domain's DNS settings:
   - Add a CNAME record pointing to: `jennyrodenhouse.github.io`
3. Wait for DNS propagation (can take up to 48 hours)

### Troubleshooting

**Site not loading?**
- Check that the branch name is correct
- Ensure the branch has been pushed to GitHub
- Wait a few minutes for the initial deployment

**404 errors?**
- Make sure `index.html` is in the root of the selected branch
- Verify the folder is set to `/ (root)` not `/docs`

**PWA not installing?**
- HTTPS is required - GitHub Pages provides this automatically
- Test on a mobile device or use Chrome DevTools mobile emulation
- Check browser console for service worker errors

## Alternative Deployment Options

### Vercel
```bash
npx vercel --prod
```

### Netlify
```bash
npx netlify-cli deploy --prod --dir .
```

### Cloudflare Pages
1. Connect your GitHub repository
2. Set build command: (leave empty)
3. Set build output directory: `/`
4. Deploy!
