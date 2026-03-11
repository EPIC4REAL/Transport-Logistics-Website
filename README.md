# Transport Logistics Website

A responsive multi-page logistics company website built with HTML, CSS, vanilla JavaScript, and Bootstrap 5.

## Overview

This project is a static marketing website for **Hexago Logistics and Transport**.  
It includes a modern homepage plus supporting pages for company information, services, careers, and contact.

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap 5.3.2 (CDN)
- Google Fonts (Poppins, Montserrat)

## Pages

- `index.html` - Main landing page
- `about_us.html` - About page
- `service.html` - Services page
- `careers.html` - Careers page
- `contact_us.html` - Contact page

## Homepage Sections (`index.html`)

- Sticky header with mobile navigation toggle
- Hero carousel with call-to-action
- "Why Choose Us" card section
- CTA banner with quote modal form
- Services grid
- 3D rotating sectors gallery (Prev/Next controls)
- Client logo slider
- Founder profile cards
- Blog cards
- Footer with quick links

## Project Structure

```text
Transport-Logistics-Website/
|- index.html
|- about_us.html
|- service.html
|- careers.html
|- contact_us.html
|- styles.css
|- script.js
|- images/
|- IMAGE_URLS.md
|- README.md
```

## Run Locally

Because this is a static site, no build step is required.

1. Clone or download the project.
2. Open `index.html` directly in a browser, or run a local server (recommended).

Example local server (VS Code Live Server or any static server) works well for testing navigation and assets.

## Customization

- Update branding text/logo in `index.html` and files under `images/`.
- Adjust visual styling in `styles.css`.
- Update interactions (menu, smooth scroll, gallery rotation) in `script.js`.
- Replace external placeholder/media links with your own assets where needed.

## Notes / Known Issues

- `index.html` references `imagerot.css`, but this file is currently not present in the repository.
- Some icon/text characters appear encoded incorrectly (for example arrows/phone/link icons), likely due to character encoding mismatch.
- `script.js` contains custom hero slider logic that may overlap with Bootstrap carousel behavior.

## Version

- Site footer version: `1.0.0`

Created by Sanjo.....