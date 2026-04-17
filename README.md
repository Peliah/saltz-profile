# Saltz Profile Card

A compact, responsive, glassmorphic profile card built with semantic HTML, plain CSS, and vanilla JavaScript.

## Files

- `index.html` - page structure and profile content
- `styles.css` - styling and responsive layout
- `script.js` - interactive behavior (time updates, avatar upload, avatar URL submit)

## Features

- Glassmorphic hero profile card design
- Clickable avatar image to upload a local photo
- Avatar URL input with inline submit button
- Live epoch time display in milliseconds
- Social links with external-safe attributes (`target="_blank"` + `rel="noopener noreferrer"`)
- About section with sentence-style likes/dislikes
- Keyboard-focusable controls and accessible labels

## Required Test IDs Included

- `test-profile-card`
- `test-user-name`
- `test-user-bio`
- `test-user-time`
- `test-user-avatar`
- `test-user-social-links`
- `test-user-social-twitter`
- `test-user-social-github`
- `test-user-social-linkedin`
- `test-user-hobbies`
- `test-user-dislikes`

Additional utility test IDs used:

- `test-page-body`
- `test-page-main`
- `test-avatar-trigger`
- `test-avatar-file-input`
- `test-avatar-url-input`
- `test-about-summary`

## Run Locally

Open `index.html` directly in a browser, or serve with a local static server.

Example:

```bash
python3 -m http.server 5500
```

Then visit `http://localhost:5500`.
