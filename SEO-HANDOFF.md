# TanyaMuch Wellness — Full SEO Handoff Guide
**Prepared for:** TanyaMuch Wellness Mental Clinic, Harare, Zimbabwe
**Website:** https://tanyamuchwellness.co.zw
**Date:** May 2026

---

## What Has Been Implemented (Done)

### ✅ Technical SEO — All Pages
Every HTML page (`index`, `about`, `services`, `booking`, `profile`) now has:

| Tag | Purpose |
|-----|---------|
| `<title>` | Keyword-rich, click-driven, unique per page |
| `<meta description>` | CTR-optimised, unique per page |
| `<link rel="canonical">` | Prevents duplicate content penalties |
| `hreflang="en"` + `x-default` | Language/region signal for Google |
| `robots: index, follow` | Full crawl permissions with rich snippets unlocked |
| `geo.region`, `geo.placename`, `ICBM` | Local SEO geo-targeting (ZW-HA / Harare) |
| Open Graph tags | Social sharing cards (Facebook, WhatsApp, LinkedIn) |
| Twitter/X card | Twitter/X sharing previews |
| `theme-color` | Brand colour in mobile browser UI |
| `dns-prefetch` + `preconnect` | Faster font loading → better LCP |
| Non-blocking Google Fonts | Fonts load after render → LCP improvement |
| `<noscript>` font fallback | Fonts still load if JS is blocked |

### ✅ Schema Markup (JSON-LD)
All structured data is implemented and Google-rich-result eligible:

| Schema Type | Page | What It Unlocks |
|-------------|------|-----------------|
| `WebSite` | Home | Sitelinks search box in Google |
| `MedicalBusiness` + `MedicalClinic` + `LocalBusiness` | Home | Local pack, Maps, Knowledge Panel |
| `FAQPage` (6 questions) | Home | FAQ rich results in SERPs |
| `MedicalTherapy` services (8 services) | Home | Service rich results |
| `AboutPage` + `MedicalOrganization` | About | E-E-A-T authority signals |
| `BreadcrumbList` | About, Services, Booking, Profile | Breadcrumbs in SERPs |
| `WebPage` + `ItemList` (8 services) | Services | Rich service listings |
| `FAQPage` (4 questions) | Services | FAQ rich results |
| `WebPage` + `ReserveAction` | Booking | Booking action in SERPs |
| `FAQPage` (3 questions) | Booking | FAQ rich results |
| `ProfilePage` + `Person` (clinician) | Profile | Person/author E-E-A-T signals |

### ✅ AI SEO / GEO (2026 Edge)
| File | Purpose |
|------|---------|
| `llms.txt` | AI discovery file — tells ChatGPT, Perplexity, Claude, Gemini exactly who the clinic is, what it offers, and how to cite it. Works like `robots.txt` but for LLMs. |
| `robots.txt` (AI section) | Explicitly allows GPTBot, Claude-Web, Google-Extended, PerplexityBot, anthropic-ai, CCBot, cohere-ai to index and cite the site. Blocks bad SEO scrapers. |

### ✅ Performance (.htaccess)
| Optimisation | Detail |
|--------------|--------|
| HTTPS redirect | All HTTP → HTTPS (301) |
| WWW → non-WWW | Canonical domain enforcement (301) |
| Clean URLs | `/services.html` → `/services` (301) |
| GZIP compression | HTML, CSS, JS, JSON, SVG, fonts compressed |
| Browser caching | CSS/JS/images: 1 year; HTML: 1 hour |
| Security headers | X-Frame, X-Content-Type, XSS, Referrer, Permissions |
| Content Security Policy | Allows Google Fonts + Analytics, blocks unknowns |
| WebP serving | Serves `.webp` automatically if browser supports it |
| 404 redirect | Soft 404 → home page |
| Admin block | `/admin` blocked from external referrers |

### ✅ XML Sitemap
- File: `sitemap.xml`
- All 5 public pages included with `lastmod`, `changefreq`, `priority`
- `hreflang` alternate links included

---

## What You Must Do After Launch (Action List)

### 🔴 Priority 1 — Do These First (Week 1)

#### 1. Submit to Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property → `https://tanyamuchwellness.co.zw`
3. Verify via HTML tag or DNS record
4. Go to **Sitemaps** → Submit `https://tanyamuchwellness.co.zw/sitemap.xml`
5. Request indexing of each page via **URL Inspection**

#### 2. Set Up Google Business Profile
This is **the #1 local ranking factor** for "psychologist Harare" searches.
1. Go to [business.google.com](https://business.google.com)
2. Create or claim the listing for **TanyaMuch Wellness Mental Clinic**
3. Set category: **Mental Health Clinic** (primary) + **Psychologist** (secondary)
4. Add: address, phone `0715 472 411`, website, hours, photos
5. Write a keyword-rich business description:
   > *"TanyaMuch Wellness Mental Clinic provides professional, evidence-based psychological services in Waterfalls, Harare. We offer individual counselling, couples therapy, depression treatment, trauma and grief support, marital counselling, and personal wellness — in a safe, confidential, and compassionate environment. Serving Harare and surrounding areas. Book on 0715 472 411."*

#### 3. Set Up Google Analytics 4
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create property → get your `G-XXXXXXXX` Measurement ID
3. Add this to **every HTML page** just before `</head>`:
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXX');
</script>
```
4. Track: page views, booking form submissions, phone link clicks

---

### 🟠 Priority 2 — Do These in Month 1

#### 4. NAP Consistency (Name, Address, Phone)
Ensure these are **identical everywhere** on the web:
```
TanyaMuch Wellness Mental Clinic
1074 Cnr Masotsha Ndhlovu/6th Avenue, Parktown, Waterfalls, Harare, Zimbabwe
+263 0715 472 411
```
Submit to these directories:
- **Yellow Pages Zimbabwe** — [yellowpages.co.zw](https://yellowpages.co.zw)
- **Hotfrog Zimbabwe** — [hotfrog.co.zw](https://hotfrog.co.zw)
- **Bing Places** — [bingplaces.com](https://bingplaces.com)
- **Apple Maps Connect** — [mapsconnect.apple.com](https://mapsconnect.apple.com)
- **Foursquare** — [business.foursquare.com](https://business.foursquare.com)
- **ZimFinder** — local Zimbabwe business directory

#### 5. Reviews Strategy
Reviews are a **top 3 local ranking factor**. Target: 10 Google reviews in month 1.
- After each session, send clients a direct review link (get it from Google Business Profile → "Share review form")
- WhatsApp message template:
  > *"Thank you so much for your session today. If you feel comfortable, a short Google review helps others find us and means the world to the clinic. Here's the direct link: [LINK]. No pressure at all 🙏"*

#### 6. Activate HSTS (after 30 days of stable HTTPS)
In `.htaccess`, uncomment this line:
```
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
```
Then submit the domain to [hstspreload.org](https://hstspreload.org).

#### 7. Update Schema with Real Clinician Name + Credentials
In `profile.html`, replace `"name": "TanyaMuch Wellness Clinician"` with the clinician's actual name and fill in:
- `hasCredential.name` — e.g., "MSc Clinical Psychology, University of Zimbabwe"
- `hasCredential.recognizedBy.name` — e.g., "Health Professions Authority of Zimbabwe"

---

### 🟡 Priority 3 — Content Strategy (Ongoing)

These are the **biggest long-term ranking levers**. Done right, this is what beats competitors.

#### Target Keywords to Create Pages For
Based on Harare intent, build these pages:

| Page Title | Target Keyword | Intent |
|------------|---------------|--------|
| Anxiety Therapy Harare | "anxiety therapist harare" | Transactional |
| Depression Counselling Harare | "depression counselling harare" | Transactional |
| Couples Therapy Harare | "couples therapist harare" | Transactional |
| Trauma Counselling Harare | "trauma counsellor harare" | Transactional |
| What is Therapy? | "how does therapy work" | Informational |
| How to Know If You Need a Psychologist | "do i need a psychologist" | Informational |
| Mental Health in Zimbabwe | "mental health zimbabwe" | Informational |

#### Content Cluster Structure
```
PILLAR PAGE: Mental Health Services Harare (/services)
    │
    ├── /anxiety-therapy-harare
    ├── /depression-counselling-harare
    ├── /couples-therapy-harare
    ├── /trauma-counselling-harare
    └── /blog/
            ├── how-does-therapy-work
            ├── signs-you-need-a-psychologist
            └── mental-health-stigma-zimbabwe
```

#### E-E-A-T Signals to Add
- Clinician's full name, qualifications, and registration number on the profile page
- Professional photo of the clinician
- "As seen in" / media mentions (even local press)
- Case study language (anonymised): *"Many of our clients come to us after..."*
- Link to or mention of Health Professions Authority Zimbabwe registration

---

### 🟢 Priority 4 — Backlinks & Authority (Month 2+)

Low volume, high relevance wins:

| Source | Action |
|--------|--------|
| **University of Zimbabwe / MSU** | Reach out to psychology department for a resource mention |
| **Zimbabwe newspapers** (Herald, NewsDay) | Submit a health column / expert comment |
| **Local churches & NGOs** | Offer free mental health resources in exchange for a link |
| **Harare parenting groups** | Guest post on postnatal support |
| **Zimbabwe health directories** | List on any healthcare-specific directories |
| **Unlinked brand mentions** | Google "TanyaMuch Wellness" → contact sites mentioning you without a link |

---

## Monthly SEO Checks

Every month, spend 30 minutes on this:

1. **Google Search Console** → Check for:
   - Coverage errors (pages not indexed)
   - Manual actions (penalties)
   - New keywords ranking (performance tab)
   - Core Web Vitals issues

2. **Google Business Profile** → Check for:
   - New reviews (respond to all within 48h)
   - Q&A section (answer any questions)
   - Photo freshness (add new photo monthly)

3. **Rankings check** (free tools):
   - Google: `site:tanyamuchwellness.co.zw` (should show all pages)
   - Search manually: "psychologist harare", "counselling harare"

4. **Update `sitemap.xml`** `lastmod` date whenever content changes.

---

## SEO Files Delivered

| File | Location | Purpose |
|------|----------|---------|
| `robots.txt` | `/robots.txt` | Crawl control + AI crawler permissions |
| `sitemap.xml` | `/sitemap.xml` | Page discovery for Google |
| `llms.txt` | `/llms.txt` | AI/LLM citation optimisation |
| `.htaccess` | `/.htaccess` | Performance, security, clean URLs |
| `index.html` | `/` | Full SEO head: meta, OG, schema ×3 |
| `about.html` | `/about` | Full SEO head: meta, OG, schema ×2 |
| `services.html` | `/services` | Full SEO head: meta, OG, schema ×3 |
| `booking.html` | `/booking` | Full SEO head: meta, OG, schema ×3 |
| `profile.html` | `/profile` | Full SEO head: meta, OG, schema ×2 |

---

## Quick Reference — Key Info

```
Business Name:  TanyaMuch Wellness Mental Clinic
Website:        https://tanyamuchwellness.co.zw
Phone:          +263 0715 472 411
WhatsApp:       +263 0715 472 411
Email:          enquiries@tanyamuchwellness.co.zw
Address:        1074 Cnr Masotsha Ndhlovu/6th Avenue, Parktown, Waterfalls, Harare, Zimbabwe
Coordinates:    -17.8420, 31.0240
Hours:          Mon–Fri 08:00–18:00 | Sat by appointment
Primary Cat:    Mental Health Clinic
Secondary Cat:  Psychologist, Counsellor
Target Area:    Harare, Waterfalls, Zimbabwe
```

---

*This guide was prepared as part of a full SEO implementation for TanyaMuch Wellness Mental Clinic. All technical work has been applied to site files. The action items in this document are the remaining steps required to maximise rankings and organic visibility.*
