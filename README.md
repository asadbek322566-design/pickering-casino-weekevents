# Pickering Casino Weekevents website

Static official marketing, support, and legal website for the **Pickering Casino Weekevents** iOS application. The site is designed for direct deployment to GitHub Pages without a framework or build step.

The application and website are developed by **panlogo GmbH** on behalf of **Pickering Casino Resort**, with **Ontario Gaming GTA Limited Partnership** identified in connection with the application.

## Pages

- `/` — marketing page
- `/about/` — application purpose and project relationship
- `/support/` — App Store support page and FAQ
- `/privacy/` — application and website Privacy Policy
- `/terms/` — Terms of Use
- `/contact/` — support, privacy, and legal contacts
- `/404.html` — custom not-found page

## File structure

```text
.
├── index.html
├── about/index.html
├── support/index.html
├── privacy/index.html
├── terms/index.html
├── contact/index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── CNAME
├── README.md
├── PickeringCasinoWeekeventsLogo.png
└── assets/
    ├── css/styles.css
    ├── js/main.js
    ├── images/
    ├── icons/
    └── fonts/
```

## Local preview

No build is required. From the repository root, start any static HTTP server:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/`.

## GitHub Pages deployment

1. Push this repository to GitHub.
2. Open **Repository Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the publication branch and the root folder `/`.
5. Save and wait for GitHub Pages to publish the site.
6. Open every public URL and repeat the pre-publication checks below.

The site uses relative paths and does not require npm, a generated bundle, a workflow, or a server-side runtime.

## Custom domain and HTTPS

The `CNAME` file is intentionally empty until the authorized domain is confirmed. A domain controlled by Pickering Casino Resort is preferable to a permanent `github.io` address. A dedicated official subdomain is the strongest option.

After the exact domain is approved:

1. Put only the hostname in `CNAME`, for example `weekevents.official-domain.example`, without `https://` or a path.
2. Replace every `https://DOMAIN` value in `sitemap.xml` and `robots.txt`.
3. Replace relative canonical and Open Graph image values with final absolute HTTPS URLs.
4. For an apex domain, configure the GitHub Pages `A` and `AAAA` records shown in GitHub documentation.
5. For a subdomain, create a `CNAME` DNS record that points to the repository owner’s `github.io` hostname.
6. Add the custom domain in **Repository Settings → Pages**.
7. Wait for DNS verification and enable **Enforce HTTPS**.

Do not publish the placeholder `DOMAIN` values.

## Contact configuration

App suggestions, technical problems, accessibility feedback, and privacy requests are directed to the lead developer at `asadbek322566@icloud.com`. The address is published as a direct `mailto:` link on the Support, Contact, Privacy Policy, and Terms pages.

General resort and venue questions use the official Pickering Casino Resort phone numbers. Corporate, media, entertainment, and Great Canadian Rewards inquiries use the official Great Canadian Entertainment contacts listed on the Contact page. Do not add a third-party contact form unless its data handling and privacy disclosures are approved.

## Brand assets and photography

- `PickeringCasinoWeekeventsLogo.png` is the application artwork supplied in the repository.
- `assets/images/pickering-casino-resort-logo.png` is an official Pickering Casino Resort logo sourced from Great Canadian Entertainment.
- `assets/images/pickering-arena-concert.jpg` is official photography of The Arena at Pickering Casino Resort.
- `assets/images/pickering-resort-exterior.jpg` is official Pickering Casino Resort exterior photography.
- `assets/images/app-screen.png` is the approved `AppScreen.png` screenshot supplied for the website and used in the homepage device preview.

Official asset source pages:

- `https://greatcanadian.com/destinations/ontario/pickering/`
- `https://greatcanadian.com/destinations/ontario/pickering/the-arena/`

Confirm that the customer authorizes reuse of every resort brand asset and photograph on this application website. If updated official artwork is supplied, keep the same filenames or update all HTML references. Do not redraw the resort logo or replace it with an imitation.

The homepage uses the supplied simulator screenshot rather than conceptual interface artwork. Additional App Store screenshots can be placed in `assets/images/` after approval. Export optimized WebP or PNG variants, provide accurate `alt` text, and declare image dimensions.

The palette in `assets/css/styles.css` uses the official Great Canadian/Pickering deep navy, blue, gold, purple, red, orange, and yellow visual language found in the official logo and website assets. Confirm any formal brand-guide values if a current guide becomes available.

## Content and legal updates

Before each release:

1. Update the `Effective Date` and `Last Updated` fields where appropriate.
2. Compare the Privacy Policy with the exact release build, App Store Connect privacy answers, and third-party contracts.
3. Have the authorized legal representative review the Privacy Policy and Terms of Use.
4. Confirm the contracting entity, governing law, jurisdiction, limitation language, age positioning, and contact details.
5. Remove the pre-publication notices only after every underlying fact is confirmed and the final wording is approved.

The current legal pages are complete editorial drafts but are intentionally explicit about information that has not been supplied. They must not be treated as approved legal advice.

## Release-build privacy review

Confirm all of the following against the shipped iOS build:

- `PrivacyInfo.xcprivacy` declarations and required-reason APIs
- `Info.plist` usage descriptions and entitlements
- Swift Package Manager `Package.resolved` and CocoaPods dependencies
- Firebase, Google Analytics, Crashlytics, or other analytics and diagnostics SDKs
- advertising, attribution, tracking, or fingerprinting SDKs
- push notifications and device token handling
- location services
- account registration, sign-in, or identity providers
- email or other contact-data collection
- remote APIs, server logs, hosting providers, and IP-address handling
- cookies, web views, embedded content, and external links
- `UserDefaults`, Core Data, Realm, files, keychain, iCloud, or other local storage
- favourites and settings behaviour, including deletion and backup behaviour
- external ticketing, booking, resort, and event-organizer links
- categories, purposes, recipients, retention periods, deletion methods, and cross-border transfers for every collected data type

The final website policy and App Store privacy nutrition label must describe the same practices.

## Confirmed version 1.0 functionality

The supplied application reference confirms:

- Ticketmaster event discovery, refresh, filtering, event details, artwork, local times, sales status, and official ticket links
- optional local notifications and reminders
- locally stored seat planning that does not reserve a live seat
- a private two-option vote stored on one device
- selected personal photos, captions, editing, deletion, and user-initiated iOS sharing
- no Favourite Events list in version 1.0
- no account, registration, or sign-in
- no location, contacts, health, financial, or account-data permission
- no gambling, betting, wagering, casino games, monetary prizes, gaming deposits, gaming withdrawals, or real-money gaming
- no Firebase, Google Analytics, behavioural analytics, advertising SDK, or Crashlytics integration operated by panlogo GmbH

Recheck these facts whenever the release build changes. Update the website, privacy manifest, Privacy Policy, Terms, Support FAQ, and App Store privacy answers before releasing a version with different functionality or data practices.

## App Store and URL checklist

Verify that `https://apps.apple.com/app/id6809417783` opens the intended listing in every locale required for launch. Once the domain is connected, use:

- Marketing URL: `https://CONFIRMED-DOMAIN/`
- Support URL: `https://CONFIRMED-DOMAIN/support/`
- Privacy Policy URL: `https://CONFIRMED-DOMAIN/privacy/`
- Terms of Use URL: `https://CONFIRMED-DOMAIN/terms/`

Replace `CONFIRMED-DOMAIN` with the approved hostname.

## Pre-publication checklist

- Confirm the custom domain and populate `CNAME`.
- Replace sitemap and robots domain placeholders.
- Convert canonical and social-image metadata to absolute HTTPS URLs.
- Confirm official-logo and photography usage permission.
- Add only approved App Store screenshots.
- Reconfirm version 1.0 functionality and data practices against the archived release build.
- Confirm whether use of the app or resort experiences requires a 19+ notice.
- Confirm the exact contracting party, legal address if required, governing law, and forum.
- Complete customer legal review of Privacy Policy and Terms of Use.
- Compare legal pages with App Store Connect answers.
- Test at 320, 375, 390, 430, 768, 1024, 1280, 1440, and 1920 pixels.
- Test keyboard navigation, the skip link, focus states, mobile drawer, Escape behaviour, FAQ controls, and reduced motion.
- Check every internal link, App Store CTA, image, metadata field, `robots.txt`, `sitemap.xml`, manifest, and browser console.
- Confirm there is no horizontal overflow, mixed content, visible placeholder, stale date, or unapproved claim.
- Run Lighthouse and aim for Performance 90+, Accessibility 95+, Best Practices 95+, and SEO 95+.

## Privacy of this website

The static website contains no analytics, ad pixels, cookies, fingerprinting, third-party forms, embedded video, or external fonts. Contact uses email links after the approved addresses are configured. The App Store and other external destinations apply their own terms and privacy practices when opened.
