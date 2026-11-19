# UI-SPEC.md — MITRACARA

## 1. Design Overview

**Project Name:** MITRACARA  
**Tagline:** Temukan Mitra, Wujudkan Acara.  
**Design Type:** Modern Marketplace / Vendor Directory  
**Design Approach:** Mobile-First Responsive Design

### Design Concept

MITRACARA should have a modern, clean, friendly, and trustworthy interface.

The visual design should represent collaboration between student organizations and local businesses.

The interface should feel:
- Modern and youthful, representing the campus community.
- Professional and trustworthy, representing local business partners.
- Friendly and approachable, making vendor discovery comfortable.
- Simple and intuitive, allowing users to find what they need quickly.

### Design Direction

Use a clean marketplace-inspired layout with:
- Spacious content sections.
- Clear visual hierarchy.
- Rounded cards and buttons.
- Subtle shadows.
- Consistent spacing.
- High-quality vendor and product imagery.
- Simple icons and illustrations.

Avoid:
- Excessive gradients.
- Too many decorative elements.
- Overly complicated animations.
- Dense layouts.
- Excessive use of different colors.
- Inconsistent card styles.

---

## 2. Color Palette

The primary visual identity uses Emerald Green, Warm Cream, and Soft Orange.

The palette represents:
- Green: Growth, collaboration, and local economic development.
- Cream: Warmth, friendliness, and approachability.
- Orange: Energy, creativity, and enthusiasm.

### Primary Colors

| Color | Hex Code | Usage |
|---|---|---|
| Emerald Green | #167D5A | Primary buttons, brand elements, active navigation |
| Deep Green | #105C43 | Hover states, strong emphasis |
| Light Green | #E8F3ED | Soft backgrounds, category highlights |
| Warm Cream | #FAF8F2 | Main page background |
| White | #FFFFFF | Cards, forms, and content surfaces |
| Soft Orange | #F2A65A | Accent elements and secondary highlights |
| Dark Charcoal | #252A27 | Main text |
| Muted Gray | #737B76 | Secondary text |
| Border Gray | #E5E8E5 | Dividers and card borders |

### Color Usage Guidelines

- Use Emerald Green as the main brand color.
- Use Warm Cream for selected page backgrounds.
- Use White for cards and content surfaces.
- Use Dark Charcoal for headings and body text.
- Use Muted Gray for supporting information.
- Use Soft Orange sparingly for important accents.
- Use Light Green for subtle highlighted sections.

### Accessibility and Contrast

- Maintain readable contrast between text and background.
- Normal text should target a minimum WCAG AA contrast ratio of 4.5:1.
- Large text should target a minimum contrast ratio of 3:1.
- Do not use color alone to communicate status.
- Verification badges must include readable text.
- Interactive elements must have visible focus indicators.
- Hover and active states must remain distinguishable.

Check actual foreground and background color combinations before finalizing the design.

---

## 3. Typography

Use a modern sans-serif typeface.

### Recommended Font

**Primary Font:** Plus Jakarta Sans.

Alternative:
- Inter.
- Poppins.

### Typography Hierarchy

| Element | Desktop | Mobile | Weight |
|---|---|---|---|
| Hero Heading | 48–56px | 32–38px | Bold |
| Section Heading | 32–36px | 24–28px | Bold |
| Page Heading | 32px | 26px | Bold |
| Card Title | 18–20px | 16–18px | Semibold |
| Body Text | 15–16px | 14–16px | Regular |
| Supporting Text | 13–14px | 12–13px | Regular |
| Button Text | 14–16px | 14–16px | Semibold |

### Typography Guidelines

- Use clear heading hierarchy.
- Avoid excessively long paragraphs.
- Keep line height comfortable.
- Use consistent font weights.
- Ensure text remains readable on mobile devices.

---

## 4. Layout and Spacing System

### General Layout

Use a centered content container.

Recommended maximum content width:
- Desktop: 1200–1280px.
- Tablet: Fluid width with consistent side padding.
- Mobile: Full width with 16–20px horizontal padding.

### Spacing Scale

Use a consistent spacing system:

| Token | Value | Usage |
|---|---:|---|
| XS | 4px | Small icon spacing |
| SM | 8px | Compact element spacing |
| MD | 16px | Standard component spacing |
| LG | 24px | Card and section spacing |
| XL | 32px | Large component spacing |
| 2XL | 48px | Section spacing |
| 3XL | 64px | Major section separation |

### Border Radius

- Small elements: 8px.
- Input fields: 10px.
- Buttons: 10–12px.
- Cards: 14–16px.
- Large promotional sections: 20–24px.

### Shadows

Use subtle shadows for cards and floating elements.

Avoid heavy shadows that make the interface visually crowded.

---

## 5. Navigation Design

### 5.1 Desktop Navbar

The desktop navbar should use a clean horizontal layout.

**Left Section**
- MITRACARA logo.
- Brand name.

**Center Section**
- Home.
- Explore Vendors.
- Categories.
- About Us.

**Right Section**
- Become a Partner button.
- Login / Register links.

### Navbar Behavior

- Sticky navbar when scrolling.
- White or Warm Cream background.
- Subtle bottom border.
- Active navigation indicator.
- Smooth hover transitions.

The Become a Partner button should use Emerald Green as its primary color.

### 5.2 Mobile Navbar

On mobile devices:
- Display logo and brand name on the left.
- Display hamburger menu on the right.
- Hide desktop navigation links.
- Open a collapsible navigation menu when the hamburger button is clicked.

The mobile menu should include:
- Home.
- Explore Vendors.
- Categories.
- About Us.
- Become a Partner.
- Login / Register.

Ensure the menu is easy to close and usable with keyboard navigation.

---

## 6. Landing Page UI

The landing page is the main introduction to MITRACARA.

### 6.1 Hero Section

The hero section should communicate the platform's purpose immediately.

**Content:**
- Small introductory label: LOCAL EVENT PARTNER.
- Main headline: "Temukan Mitra, Wujudkan Acara."
- Supporting description explaining the connection between campus organizations and local businesses.
- Primary CTA: Explore Vendors.
- Secondary CTA: Become a Partner.
- Supporting visual showing event preparation, collaboration, or local business products.

### Layout

Desktop:
- Two-column layout.
- Left side: Text, description, and CTA buttons.
- Right side: Main illustration or photography.
- Comfortable whitespace.

Mobile:
- Single-column layout.
- Text first.
- CTA buttons below the description.
- Image below the buttons.
- Avoid oversized hero content that pushes the catalog too far down.

### 6.2 Category Section

Display five main categories.

Categories:
1. Perlengkapan & Penyewaan.
2. Konsumsi & Kuliner.
3. Adat & Kerohanian.
4. Jasa & Pengisi Acara.
5. Dokumentasi & Kreatif.

Each category card contains:
- Category icon or image.
- Category name.
- Short description.
- Navigation indicator.

Desktop:
- Five-column grid when space allows.

Tablet:
- Three-column grid.

Mobile:
- Two-column grid.
- Cards should remain readable and touch-friendly.

Use distinct but visually consistent category illustrations.

### 6.3 Featured Vendors

Display selected vendors in a card-based layout.

Each vendor card contains:
- Cover or thumbnail image.
- Business name.
- Main category.
- Location.
- Rating.
- Verification badge.
- View Detail action.

Desktop:
- Four-column grid.

Tablet:
- Two or three columns.

Mobile:
- One or two columns depending on available width.

### 6.4 How It Works

Display three simple steps.

**Step 1 — Find Your Needs**
Users browse categories and search for event requirements.

**Step 2 — Explore Local Vendors**
Users view vendor profiles, products, services, and prices.

**Step 3 — Contact Your Chosen Vendor**
Users contact vendors directly through WhatsApp.

Use simple icons, short descriptions, and numbered steps.

### 6.5 Partner CTA

Create a visually distinct section inviting local businesses to join MITRACARA.

Content:
- Heading: "Punya Usaha atau Jasa Lokal?"
- Supporting text explaining the benefits of becoming a platform partner.
- CTA: "Daftar Jadi Mitra".

Use Light Green or Emerald Green as the section background, ensuring text contrast remains accessible.

### 6.6 Footer

Include:
- MITRACARA logo.
- Short platform description.
- Quick navigation links.
- Vendor category links.
- Contact information.
- Social media links.
- Copyright information.

Use a dark green or dark charcoal background with readable light text.

---

## 7. Vendor Catalog UI

### 7.1 Page Header

Display:
- Page title: "Temukan Mitra untuk Acaramu".
- Supporting description.
- Total vendor count.
- Search input.

### 7.2 Search Bar

The search bar should:
- Have a search icon.
- Include a clear placeholder.
- Be visually prominent.
- Support clearing the search query.
- Provide visible focus states.

Placeholder example:

"Cari vendor, produk, atau jasa..."

### 7.3 Filter Section

Available filters:
- Category.
- Location.
- Sorting.

Desktop:
- Filters displayed horizontally or in a sidebar.
- Search bar placed above the vendor listing.

Mobile:
- Search bar takes full width.
- Filter controls displayed in a compact horizontal layout or collapsible filter panel.
- Filter panel should be easy to open and close.

### 7.4 Vendor Grid

Each vendor card must contain:

1. Vendor image.
2. Verification badge when applicable.
3. Business name.
4. Main category.
5. Short description.
6. Location.
7. Rating.
8. Favorite button.
9. View Detail action.

Cards should have:
- Consistent image aspect ratios.
- Rounded corners.
- Subtle border or shadow.
- Consistent content spacing.
- Hover state on desktop.
- Clear touch interaction on mobile.

### 7.5 Empty State

When no vendors match the search or filters:

Display:
- Friendly empty-state illustration or icon.
- Message: "Vendor tidak ditemukan."
- Supporting text suggesting users change their search or filters.
- Reset Filters button.

---

## 8. Vendor Detail UI

The vendor detail page should provide enough information for users to evaluate a vendor before contacting them.

### 8.1 Vendor Header

Display:
- Cover image.
- Vendor profile image.
- Business name.
- Category.
- Verification status.
- Rating.
- Location.
- WhatsApp contact button.
- Favorite button.

### 8.2 About Vendor

Display:
- Business description.
- Business location.
- Contact information.
- Additional business details.

### 8.3 Products and Services

Display vendor products or services in a responsive grid.

Each product/service card contains:
- Image.
- Product/service name.
- Description.
- Price or starting price.
- Additional information.

### 8.4 Portfolio

Display vendor work samples in a gallery.

Use a responsive image grid with consistent spacing.

### 8.5 Reviews

Display sample customer reviews.

Each review contains:
- Reviewer display name.
- Rating.
- Review text.
- Date.

Reviews are static demonstration data for this frontend prototype.

### 8.6 Contact Section

Provide a prominent WhatsApp contact button.

The button should:
- Use a recognizable WhatsApp icon.
- Use a clear label such as "Hubungi Vendor".
- Open the correct vendor WhatsApp link.
- Have an accessible text label.

On mobile, consider a sticky bottom contact action if it does not obscure page content.

---

## 9. Favorite Vendors UI

### Favorites Page

Page heading:

"Vendor Favorit Saya"

Display:
- Saved vendor count.
- Vendor grid.
- Remove favorite action.

Use the same VendorCard component as the main catalog.

### Empty Favorites State

When the user has no saved vendors:

Display:
- Empty-state icon.
- Message: "Belum ada vendor favorit."
- Supporting text.
- Explore Vendors CTA.

---

## 10. Partner Registration UI

The partner registration page should look professional and trustworthy.

### Layout

Desktop:
- Two-column layout.
- Left side: Brand introduction and benefits of joining MITRACARA.
- Right side: Registration form.

Mobile:
- Single-column layout.
- Introduction first.
- Form below.

### Form Fields

1. Business / Provider Name.
2. Owner Name.
3. Email Address.
4. WhatsApp Number.
5. Business Category.
6. Business Location.
7. Business Description.
8. Password.
9. Confirm Password.

### Form Design Guidelines

- Use clear field labels.
- Provide helpful placeholders.
- Display required field indicators.
- Group related fields.
- Use dropdown for category selection.
- Display inline validation errors.
- Provide clear submit button.
- Show success feedback after submission.

### Success State

After a valid form submission, display:

"Terima kasih telah mendaftar sebagai mitra MITRACARA. Pendaftaran Anda berhasil disimulasikan dan menunggu verifikasi."

Do not imply that a real account has been created or verified.

---

## 11. Authentication UI

Authentication pages are visual demonstrations only.

### Login Page

Display:
- MITRACARA logo.
- Welcome heading.
- Email field.
- Password field.
- Remember me checkbox (visual only if not functional).
- Login button.
- Forgot Password link.
- Register link.

### Register Page

Display:
- Name field.
- Email field.
- Password field.
- Password confirmation.
- Register button.
- Login link.

### Forgot Password Page

Display:
- Email field.
- Submit button.
- Back to Login link.

Use the same design language across all authentication pages.

Do not implement fake authentication.

---

## 12. Responsive Design Specifications

Use mobile-first development.

### Breakpoint Guidelines

| Device | Width | Layout |
|---|---|---|
| Small Mobile | 320–374px | Compact single-column layout |
| Mobile | 375–767px | Mobile navigation and adaptive grids |
| Tablet | 768–1023px | Two or three-column layouts |
| Desktop | 1024–1279px | Full navigation and multi-column layouts |
| Large Desktop | 1280px+ | Centered container with maximum width |

### Responsive Rules

- Avoid horizontal scrolling.
- Use flexible grid layouts.
- Ensure images scale properly.
- Keep buttons touch-friendly.
- Maintain readable font sizes.
- Adapt spacing based on screen width.
- Collapse navigation on mobile.
- Avoid placing too many controls in one row.

---

## 13. Accessibility Requirements

The interface should follow WCAG 2.1 AA principles where practical.

Requirements:
- Sufficient text contrast.
- Semantic HTML structure.
- Descriptive image alt text.
- Visible keyboard focus indicators.
- Keyboard-accessible navigation.
- Accessible form labels.
- Clear validation messages.
- Buttons must have understandable labels.
- Icons should not be the only way to communicate important actions.
- Respect reduced-motion preferences.
- Do not rely only on color to communicate verification or other statuses.

Interactive elements should have adequate touch targets, preferably around 44 × 44 CSS pixels.

---

## 14. Interaction and Animation Guidelines

Use subtle and purposeful interactions.

### Hover Effects
- Slight card elevation.
- Button color transition.
- Image zoom kept minimal.
- Clear active navigation state.

### Click Interactions
- Smooth navigation.
- Favorite button state change.
- Mobile menu open/close.
- Filter panel open/close.
- Form validation feedback.
- Toast notifications.

### Animation Rules
- Keep animations short and subtle.
- Avoid distracting motion.
- Respect prefers-reduced-motion.
- Do not animate every element unnecessarily.

---

## 15. Desktop Wireframes

These wireframes represent the intended layout and content hierarchy, not final visual styling.

### 15.1 Landing Page — Desktop

```text
┌────────────────────────────────────────────────────────────────────┐
│  LOGO MITRACARA     Home  Vendors  Categories  About    [Partner]  │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  LOCAL EVENT PARTNER                         ┌──────────────────┐  │
│                                              │                  │  │
│  Temukan Mitra,                               │  EVENT / LOCAL   │  │
│  Wujudkan Acara.                              │  BUSINESS IMAGE  │  │
│                                              │                  │  │
│  Hubungkan kebutuhan acara                   └──────────────────┘  │
│  kampus dengan UMKM lokal.                                         │
│                                                                    │
│  [ Explore Vendors ] [ Become a Partner ]                          │
│                                                                    │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│                   Temukan Berdasarkan Kategori                     │
│                                                                    │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│  │Perlengk. │ │Konsumsi  │ │Adat &    │ │Jasa &    │ │Dokument. │ │
│  │          │ │& Kuliner │ │Kerohanian│ │Acara     │ │& Kreatif │ │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘ │
│                                                                    │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│                      Vendor Pilihan                                │
│                                                                    │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐       │
│  │   IMAGE    │ │   IMAGE    │ │   IMAGE    │ │   IMAGE    │       │
│  │ Vendor A   │ │ Vendor B   │ │ Vendor C   │ │ Vendor D   │       │
│  │ Category   │ │ Category   │ │ Category   │ │ Category   │       │
│  │ Location   │ │ Location   │ │ Location   │ │ Location   │       │
│  │ [Detail]   │ │ [Detail]   │ │ [Detail]   │ │ [Detail]   │       │
│  └────────────┘ └────────────┘ └────────────┘ └────────────┘       │
│                                                                    │
│                       [View All Vendors]                           │
│                                                                    │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│                       How It Works                                 │
│                                                                    │
│       [01]                  [02]                 [03]              │
│    Find Your Needs       Explore Vendors      Contact Vendor       │
│                                                                    │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│                 Punya Usaha atau Jasa Lokal?                       │
│                                                                    │
│                Bergabunglah menjadi mitra kami.                    │
│                       [Daftar Jadi Mitra]                          │
│                                                                    │
├────────────────────────────────────────────────────────────────────┤
│  LOGO MITRACARA       Navigation        Contact       Social       │
│  Platform Info        Categories        Information    Media       │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

### 15.2 Vendor Catalog — Desktop

```text
┌────────────────────────────────────────────────────────────────────┐
│  LOGO MITRACARA     Home  Vendors  Categories  About    [Partner]  │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│                  Temukan Mitra untuk Acaramu                       │
│                  Jelajahi vendor lokal terbaik.                    │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  Search vendor, produk, atau jasa...                    [🔍] │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  [Category ▼]  [Location ▼]  [Sort ▼]              24 Vendors      │
│                                                                    │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐       │
│  │   IMAGE    │ │   IMAGE    │ │   IMAGE    │ │   IMAGE    │       │
│  │ Vendor A ♡ │ │ Vendor B ♡ │ │ Vendor C ♡ │ │ Vendor D ♡ │       │
│  │ Verified   │ │ Verified   │ │            │ │ Verified   │       │
│  │ Category   │ │ Category   │ │ Category   │ │ Category   │       │
│  │ Location   │ │ Location   │ │ Location   │ │ Location   │       │
│  │ Rating     │ │ Rating     │ │ Rating     │ │ Rating     │       │
│  │ [Detail]   │ │ [Detail]   │ │ [Detail]   │ │ [Detail]   │       │
│  └────────────┘ └────────────┘ └────────────┘ └────────────┘       │
│                                                                    │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐       │
│  │ Vendor E   │ │ Vendor F   │ │ Vendor G   │ │ Vendor H   │       │
│  └────────────┘ └────────────┘ └────────────┘ └────────────┘       │
│                                                                    │
│                         [Pagination]                               │
│                                                                    │
├────────────────────────────────────────────────────────────────────┤
│  FOOTER                                                            │
└────────────────────────────────────────────────────────────────────┘
```

### 15.3 Vendor Detail — Desktop

```text
┌────────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                            │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                      COVER IMAGE                             │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  [LOGO]  Business Name                       [♡ Favorite]          │
│          Category • Location • Rating                             │
│          [Verified]                            [Hubungi Vendor]   │
│                                                                    │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  Tentang Vendor                                                    │
│  Business description and additional information.                 │
│                                                                    │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  Produk & Jasa                                                     │
│                                                                    │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐       │
│  │   IMAGE    │ │   IMAGE    │ │   IMAGE    │ │   IMAGE    │       │
│  │ Product A  │ │ Product B  │ │ Product C  │ │ Product D  │       │
│  │ Price      │ │ Price      │ │ Price      │ │ Price      │       │
│  └────────────┘ └────────────┘ └────────────┘ └────────────┘       │
│                                                                    │
├────────────────────────────────────────────────────────────────────┤
│  Portfolio / Gallery                                               │
│                                                                    │
│  [ IMAGE ] [ IMAGE ] [ IMAGE ] [ IMAGE ]                           │
│                                                                    │
├────────────────────────────────────────────────────────────────────┤
│  Reviews                                                           │
│  Reviewer A — Rating — Review text                                 │
│  Reviewer B — Rating — Review text                                 │
│                                                                    │
├────────────────────────────────────────────────────────────────────┤
│  FOOTER                                                            │
└────────────────────────────────────────────────────────────────────┘
```

---

## 16. Mobile Wireframes

### 16.1 Landing Page — Mobile

```text
┌──────────────────────────────┐
│  LOGO MITRACARA         [☰]  │
├──────────────────────────────┤
│                              │
│  LOCAL EVENT PARTNER         │
│                              │
│  Temukan Mitra,              │
│  Wujudkan Acara.             │
│                              │
│  Hubungkan kebutuhan acara   │
│  kampus dengan UMKM lokal.   │
│                              │
│  [ Explore Vendors ]         │
│  [ Become a Partner ]        │
│                              │
│       [ HERO IMAGE ]         │
│                              │
├──────────────────────────────┤
│                              │
│  Kategori Kebutuhan          │
│                              │
│  ┌────────────┐┌────────────┐│
│  │Perlengkapan││ Konsumsi   ││
│  └────────────┘└────────────┘│
│  ┌────────────┐┌────────────┐│
│  │Adat &      ││Jasa &      ││
│  │Kerohanian  ││Acara       ││
│  └────────────┘└────────────┘│
│  ┌──────────────────────────┐│
│  │ Dokumentasi & Kreatif    ││
│  └──────────────────────────┘│
│                              │
├──────────────────────────────┤
│                              │
│  Vendor Pilihan              │
│                              │
│  ┌──────────────────────────┐│
│  │        VENDOR IMAGE      ││
│  │        Vendor A          ││
│  │        Category          ││
│  │        Location          ││
│  │        [Detail]          ││
│  └──────────────────────────┘│
│                              │
│  ┌──────────────────────────┐│
│  │        VENDOR IMAGE      ││
│  │        Vendor B          ││
│  │        Category          ││
│  │        [Detail]          ││
│  └──────────────────────────┘│
│                              │
│       [View All Vendors]     │
│                              │
├──────────────────────────────┤
│  How It Works                │
│                              │
│  01. Find Your Needs         │
│  02. Explore Vendors         │
│  03. Contact Vendor          │
│                              │
├──────────────────────────────┤
│  Become a Partner            │
│  [Daftar Jadi Mitra]         │
├──────────────────────────────┤
│  FOOTER                      │
└──────────────────────────────┘
```

### 16.2 Vendor Catalog — Mobile

```text
┌──────────────────────────────┐
│  LOGO MITRACARA         [☰]  │
├──────────────────────────────┤
│                              │
│  Temukan Mitra untuk         │
│  Acaramu                     │
│                              │
│  ┌──────────────────────────┐│
│  │ Search vendor...     [🔍]││
│  └──────────────────────────┘│
│                              │
│  [Category ▼] [Filter ▼]     │
│                              │
│  Sort: [Newest ▼]            │
│                              │
│  24 Vendors Found            │
│                              │
│  ┌──────────────────────────┐│
│  │       VENDOR IMAGE       ││
│  │       Vendor A        ♡  ││
│  │       Verified           ││
│  │       Category           ││
│  │       Location           ││
│  │       Rating             ││
│  │       [View Detail]      ││
│  └──────────────────────────┘│
│                              │
│  ┌──────────────────────────┐│
│  │       VENDOR IMAGE       ││
│  │       Vendor B        ♡  ││
│  │       Category           ││
│  │       Location           ││
│  │       Rating             ││
│  │       [View Detail]      ││
│  └──────────────────────────┘│
│                              │
│       [Load More]            │
│                              │
├──────────────────────────────┤
│  FOOTER                      │
└──────────────────────────────┘
```

### 16.3 Vendor Detail — Mobile

```text
┌──────────────────────────────┐
│  [← Back]       [♡ Favorite] │
├──────────────────────────────┤
│                              │
│       COVER IMAGE            │
│                              │
│  [LOGO]                      │
│  Business Name               │
│  Category                    │
│  Location                    │
│  Rating • Verified           │
│                              │
├──────────────────────────────┤
│  Tentang Vendor              │
│  Business description...     │
│                              │
├──────────────────────────────┤
│  Produk & Jasa               │
│                              │
│  ┌──────────────────────────┐│
│  │ IMAGE                    ││
│  │ Product A                ││
│  │ Price                    ││
│  └──────────────────────────┘│
│                              │
│  ┌──────────────────────────┐│
│  │ IMAGE                    ││
│  │ Product B                ││
│  │ Price                    ││
│  └──────────────────────────┘│
│                              │
├──────────────────────────────┤
│  Portfolio                   │
│  [IMAGE] [IMAGE]             │
│  [IMAGE] [IMAGE]             │
│                              │
├──────────────────────────────┤
│  Reviews                     │
│  Reviewer A                  │
│  Reviewer B                  │
│                              │
├──────────────────────────────┤
│                              │
│  [ Hubungi Vendor via WA ]   │
│                              │
└──────────────────────────────┘
```

---

## 17. Component Design Guidelines

Build reusable components to maintain visual consistency.

Suggested components:

### Layout Components
- Navbar.
- MobileMenu.
- Footer.
- PageContainer.
- SectionHeading.

### Vendor Components
- VendorCard.
- VendorGrid.
- VendorSearch.
- VendorFilter.
- VendorBadge.
- VendorRating.
- VendorGallery.
- VendorContactButton.

### Category Components
- CategoryCard.
- CategoryGrid.

### UI Components
- Button.
- Input.
- Select.
- Badge.
- Modal.
- Toast.
- EmptyState.
- LoadingState.

### Form Components
- FormField.
- FormLabel.
- FormError.
- SubmitButton.

All components should follow the same color, typography, spacing, and interaction rules.

---

## 18. UI Implementation Guidelines for Next.js

The design will be implemented using Next.js App Router, TypeScript, and Tailwind CSS.

Requirements:
- Use reusable React components.
- Use Tailwind CSS utility classes.
- Use Next.js Link for internal navigation.
- Use Next.js Image for optimized image rendering where appropriate.
- Prefer Server Components for static content.
- Use Client Components for interactive features.
- Maintain consistent responsive breakpoints.
- Keep UI components separate from mock data.
- Use semantic HTML.
- Avoid unnecessary dependencies.
- Do not introduce complex animation libraries for simple interactions.

### Component Behavior

| Component | Expected Behavior |
|---|---|
| Navbar | Navigate between pages |
| MobileMenu | Open and close navigation |
| CategoryCard | Navigate to selected category |
| VendorCard | Open vendor detail page |
| FavoriteButton | Toggle favorite status |
| VendorSearch | Search vendors |
| VendorFilter | Filter vendor listings |
| SortSelect | Sort vendor listings |
| WhatsAppButton | Open vendor WhatsApp contact |
| PartnerForm | Validate and submit demo registration |
| Toast | Display interaction feedback |

---

## 19. UI Quality Checklist

Before completing the interface, verify:

### Visual Consistency
- [ ] Consistent color palette.
- [ ] Consistent typography.
- [ ] Consistent spacing.
- [ ] Consistent card styles.
- [ ] Consistent button styles.
- [ ] Consistent icon usage.

### User Experience
- [ ] Navigation is intuitive.
- [ ] Search is easy to find.
- [ ] Filters are easy to use.
- [ ] Vendor information is easy to understand.
- [ ] WhatsApp action is clearly visible.
- [ ] Forms provide useful feedback.
- [ ] Empty states are informative.

### Responsive Design
- [ ] Desktop layout is balanced.
- [ ] Tablet layout is readable.
- [ ] Mobile layout is comfortable.
- [ ] Images scale correctly.
- [ ] No horizontal overflow.
- [ ] Interactive elements are touch-friendly.

### Accessibility
- [ ] Text contrast is sufficient.
- [ ] Keyboard navigation works.
- [ ] Focus indicators are visible.
- [ ] Form labels are clear.
- [ ] Images have appropriate alt text.
- [ ] Status information is not communicated by color alone.

---

## 20. Final Design Direction

MITRACARA should look like a modern local vendor discovery platform rather than a generic corporate website.

The design must balance:
- The youthful atmosphere of a university community.
- The professionalism of a business directory.
- The warmth of local business collaboration.
- The simplicity of a modern marketplace.

The most important design priority is making it easy for student organizations to discover, evaluate, and contact local vendors.

Avoid unnecessary visual complexity. Prioritize clarity, consistency, accessibility, and usability.

---

**Project Name:** MITRACARA  
**Design Approach:** Mobile-First Responsive  
**Primary Color:** Emerald Green  
**Secondary Color:** Warm Cream  
**Typography:** Plus Jakarta Sans  
**Framework:** Next.js  
**Styling:** Tailwind CSS  
**UI Status:** Specification Ready  
**Implementation Status:** Not Started

**End of UI Specification — MITRACARA** 