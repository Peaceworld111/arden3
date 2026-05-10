# Ardenpay Website

Static multi-page website for **Ardenpay** (operated by Ardenovirex Inc., FINTRAC MSB C100001744).

## Quick start

Open `index.html` in a browser. That's it — pure static HTML, no build step.

## File structure

```
ardenpay/
├── index.html              Homepage
├── services.html           Services detail
├── compliance.html         Regulatory & compliance programme
├── about.html              About the company
├── contact.html            Contact form (sends email — see setup below)
├── legal/
│   ├── terms.html
│   ├── privacy.html
│   ├── aml.html
│   ├── cookies.html
│   └── risk.html
└── assets/
    ├── logo.svg
    ├── logo-light.svg
    ├── favicon.svg
    └── style.css
```

## Setting up the contact form (3 minutes)

The contact form on `contact.html` uses **Formspree** — a free service that
forwards form submissions directly to your inbox. No backend or server required.

### Step 1 — Create a Formspree account
1. Go to https://formspree.io and sign up (free tier: 50 submissions/month).
2. Verify the email address `contact@ardenpay.com` — Formspree will send a
   confirmation link.

### Step 2 — Create a new form
1. In the Formspree dashboard, click **New form**.
2. Set the email destination to: `contact@ardenpay.com`
3. Name the form e.g. "Ardenpay website enquiries".
4. Formspree will give you a form endpoint that looks like:
   ```
   https://formspree.io/f/xxxxxxxx
   ```
   Copy this URL.

### Step 3 — Update the website
Open `contact.html` in any text editor. Find this line:

```html
<form id="enquiry-form" class="form-content"
      action="https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID"
      method="POST">
```

Replace `REPLACE_WITH_YOUR_FORM_ID` with your actual form ID (the `xxxxxxxx`
part from Step 2). Save the file.

### Done
Test the form by submitting once. The first submission asks Formspree to
verify ownership; subsequent submissions arrive directly at
`contact@ardenpay.com`.

Each email contains every field the user filled in (name, email, phone,
company, role, client type, service of interest, jurisdiction, monthly
volume, and message), with the subject line "New Ardenpay enquiry from website".

## Hosting

This is a static site. Drop the entire `ardenpay/` folder onto any of:

- **Cloudflare Pages** (free, recommended) — drag & drop at https://pages.cloudflare.com
- **Netlify** (free) — drag & drop at https://app.netlify.com/drop
- **Vercel** (free) — `vercel deploy` from this folder
- **GitHub Pages** (free) — push to a repo, enable Pages in settings
- **Amazon S3 + CloudFront** — for production at scale
- Any traditional web host (just upload via FTP/SFTP)

After deployment, point your domain `ardenpay.com` at the host's nameservers
or CNAME record.

## Things to verify before going live

1. **License number.** The site uses `C100001744` (8 digits) throughout.
   You originally wrote `C10001744` (7 digits). Canadian FINTRAC MSB numbers
   are typically 8 digits — please confirm and update if needed.
   Search & replace in all HTML files if it changes.

2. **Email addresses.** Currently shown:
   - contact@ardenpay.com (general)
   - compliance@ardenpay.com (compliance / regulatory)
   - privacy@ardenpay.com (privacy / data requests)

   Make sure these mailboxes exist before the site goes live.

3. **Form endpoint.** Don't forget Step 3 above — until you replace the
   placeholder URL, the form will fail to submit.

4. **Legal page effective dates.** Currently set to 1 March 2026.
   Adjust in each `legal/*.html` if needed.

## Customisation

- **Colours / typography:** all design tokens live in `assets/style.css`
  under the `:root` block at the top.
- **Logo:** SVG files in `assets/`. Two variants — `logo.svg` (dark on light)
  and `logo-light.svg` (light on dark). Both 240×60 viewBox.
- **Currency ticker on homepage:** edit the `<span>` content inside
  `.ticker-inner` in `index.html`.

---

Built March 2026.
