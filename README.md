# Yawatal (ያዋጣል) — website

Static marketing + legal site for the Yawatal Android app. Plain HTML/CSS/JS,
no build step, ready for GitHub Pages.

## Pages

| File                    | Purpose |
|-------------------------|---------|
| `index.html`             | Home — what Yawatal does, the verdict system, supported platforms |
| `features.html`          | Full feature list + how the decision engine works |
| `pricing.html`           | Subscription plans (currently illustrative — update before launch) |
| `about.html`             | Mission, story, and an honest explanation of the rule-based engine |
| `faq.html`               | Common questions, including the Accessibility Service permission |
| `contact.html`           | Support email, Telegram, and a mailto-based contact form |
| `privacy-policy.html`    | Required for Play Store — discloses Accessibility Service usage |
| `terms-of-service.html`  | Subscription terms, platform-independence disclaimer, liability limits |

## Before you publish

- [ ] Replace `[DATE — update before publishing]` in `privacy-policy.html` and `terms-of-service.html` with the actual effective date.
- [ ] Confirm `support@yawatal.com` and the Telegram handle in `contact.html`, `faq.html`, and the legal pages are real and monitored.
- [ ] Replace the placeholder pricing in `pricing.html` with confirmed numbers.
- [ ] Double-check the Accessibility Service description in `privacy-policy.html` matches exactly what the app does — this page is what Google Play will expect linked from your Play Console data-safety section.
- [ ] Add real Play Store / APK download links once available (currently the CTAs point at the contact/pricing flow instead).

## Deploying on GitHub Pages

1. Create a GitHub repository (e.g. `yawatal-website`) and push the contents of this folder to the `main` branch (this folder should be the repo root, not nested inside another folder).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Save — GitHub will publish at `https://<your-username>.github.io/<repo-name>/`.

### Using the custom domain (yawatal.com)

This repo already includes a `CNAME` file containing `yawatal.com`, which is what GitHub Pages needs to serve a custom domain.

1. With your domain registrar, add these DNS records:
   - Four `A` records for the apex domain (`yawatal.com`) pointing to GitHub Pages' IPs:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - A `CNAME` record for `www` pointing to `<your-username>.github.io`
2. In **Settings → Pages → Custom domain**, enter `yawatal.com` and save.
3. Once DNS propagates, tick **Enforce HTTPS** in the same settings page.

## Local preview

No build tools needed — just open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Structure

```
yawatal-website/
├── index.html
├── features.html
├── pricing.html
├── about.html
├── faq.html
├── contact.html
├── privacy-policy.html
├── terms-of-service.html
├── css/style.css
├── js/main.js
├── assets/favicon.svg
├── CNAME
├── robots.txt
├── sitemap.xml
└── README.md
```
