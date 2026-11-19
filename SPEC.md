# SPEC.md — MITRACARA

## 1. Project Overview

**Project Name:** MITRACARA  
**Project Type:** Web-Based Local Vendor Directory Platform  
**Project Scope:** Frontend Only  
**Development Approach:** Component-Based Development

### Description

MITRACARA is a web-based platform designed to connect student organizations with local Micro, Small, and Medium Enterprises (UMKM) and independent service providers that offer products or services for organizing campus events.

Student organizations often require various products and services to support their activities, such as equipment rentals, catering, traditional Balinese offerings, event hosts, makeup artists, photographers, and other event-related services.

Finding these vendors is often done manually through social media, personal recommendations, or direct communication.

MITRACARA provides a centralized platform where student organizations can discover local vendors, explore their products and services, compare available information, and contact vendors directly.

Local businesses and independent service providers can also register as platform partners to promote their products and services to the campus community.

### Main Objectives

- Help student organizations find event vendors more easily.
- Promote local UMKM and independent service providers.
- Provide a centralized directory for event-related products and services.
- Encourage collaboration between campus organizations and local businesses.
- Support local economic growth through campus activities.
- Provide an accessible and user-friendly platform for discovering event vendors.

### Brand Identity

**Brand Name:** MITRACARA

**Brand Meaning:** Mitra Acara.

**Main Tagline:**  
"Temukan Mitra, Wujudkan Acara."

**Brand Positioning:**  
A platform connecting campus organizations with local businesses and service providers for their event needs.

---

## 2. Target Users

MITRACARA has two primary user groups.

### A. Student Organizations

Examples:
- BEM (Badan Eksekutif Mahasiswa).
- HMJ (Himpunan Mahasiswa Jurusan).
- UKM (Unit Kegiatan Mahasiswa).
- Student committees.
- Campus event organizers.

Their needs:
- Find vendors based on event requirements.
- Browse products and services.
- Search vendors by name, category, or location.
- View vendor profiles and portfolios.
- Compare vendor information and pricing.
- Save favorite vendors.
- Contact vendors directly through WhatsApp.

### B. Local Business Partners

Examples:
- Local UMKM.
- Equipment rental businesses.
- Catering providers.
- Traditional Balinese offering makers.
- Freelance MCs.
- Makeup artists.
- Photographers and other service providers.

Their needs:
- Register as platform partners.
- Introduce their businesses.
- Display products and services.
- Provide pricing and business information.
- Upload product images and portfolios.
- Reach potential customers from campus organizations.

---

## 3. Product Categories

The platform organizes vendors into five main categories.

### 3.1 Perlengkapan & Penyewaan

Products and services related to event equipment and infrastructure.

Examples:
- Tent rental.
- Tables and chairs rental.
- Sound system.
- Lighting equipment.
- Stage equipment.
- Event decorations.
- Generators and electrical equipment.

### 3.2 Konsumsi & Kuliner

Food and beverage providers for campus events.

Examples:
- Snack boxes.
- Rice boxes.
- Catering services.
- Traditional Balinese snacks.
- Beverages.
- Coffee booths.
- Cakes and desserts.

### 3.3 Adat & Kerohanian

Vendors providing traditional and religious necessities, especially those related to Balinese ceremonies.

Examples:
- Banten and offering preparation.
- Canang sari.
- Gebogan.
- Religious ceremony equipment.
- Traditional ceremonial necessities.

### 3.4 Jasa & Pengisi Acara

Individual service providers and event performers.

Examples:
- Formal and informal MC.
- Event moderator.
- Makeup artist (MUA).
- Traditional dancers.
- Entertainment performers.
- Event hosts.

### 3.5 Dokumentasi & Kreatif

Creative services and event documentation.

Examples:
- Event photography.
- Videography.
- Graphic design.
- Banner and poster printing.
- Merchandise production.
- Invitation printing.

---

## 4. Main Features

### 4.1 Landing Page

The landing page serves as the main entry point and introduction to MITRACARA.

Required sections:

**A. Navbar**
- MITRACARA logo.
- Home.
- Explore Vendors.
- Categories.
- About Us.
- Become a Partner.
- Login / Register.

**B. Hero Section**
- Main headline introducing MITRACARA.
- Short platform description.
- Search bar for finding vendors.
- Primary CTA: Explore Vendors.
- Secondary CTA: Become a Partner.
- Supporting visual or illustration related to event collaboration.

**C. Category Section**
- Display five main categories.
- Each category has an icon or representative image.
- Clicking a category navigates to the vendor catalog with the selected category filter.

**D. Featured Vendors**
- Display selected vendor cards.
- Show vendor image, business name, category, location, and verification status.
- Provide a link to the vendor detail page.

**E. How It Works**
Display three simple steps:
1. Find Your Needs.
2. Explore Local Vendors.
3. Contact Your Chosen Vendor.

**F. Partner CTA**
- Encourage local businesses to join MITRACARA.
- Provide a registration link.

**G. Footer**
- Platform information.
- Navigation links.
- Contact information.
- Social media links.

### 4.2 Vendor Catalog

A page displaying all available vendors.

Required features:
- Search vendors by business name.
- Search by product or service name.
- Filter by category.
- Filter by location.
- Sort by newest.
- Sort by highest rated.
- Display vendor cards.
- Display empty search results state.

Vendor card information:
- Cover or thumbnail image.
- Business name.
- Main category.
- Location.
- Short description.
- Rating.
- Verification badge.

Clicking a vendor card opens its detail page.

### 4.3 Vendor Detail Page

A dedicated page for each vendor.

Required information:
- Business name.
- Business logo or profile image.
- Cover image.
- Verification status.
- Category.
- Business description.
- Location.
- Contact information.
- WhatsApp contact button.
- Product and service catalog.
- Pricing information.
- Product images.
- Portfolio or gallery.
- Customer reviews.

Product and service information should support different vendor types.

**Equipment Rental**
- Equipment name.
- Rental price.
- Rental duration.
- Available quantity.
- Additional information.

**Food & Catering**
- Menu name.
- Price per portion or package.
- Minimum order.
- Available menu options.

**Event Services**
- Service name.
- Starting price.
- Service duration.
- Portfolio.
- Additional service information.

### 4.4 Search and Filter

Allow users to discover vendors quickly.

Requirements:
- Search by vendor name.
- Search by product or service name.
- Filter by category.
- Filter by location.
- Sort by newest.
- Sort by rating.
- Search, filter, and sorting must work together.
- Provide a reset filter option.
- Display an appropriate empty state when no results match.

All search and filtering interactions must work using local mock data.

### 4.5 Favorite Vendors

Users can save vendors to their favorite list.

Requirements:
- Favorite button on vendor cards.
- Favorite button on vendor detail pages.
- Dedicated favorite page.
- Toggle favorite status.
- Persist favorite data using localStorage.
- Display an empty state when there are no favorite vendors.

Favorites must remain available after refreshing the page.

### 4.6 Partner Registration

A registration page for local businesses and independent service providers.

Registration fields:
- Business or provider name.
- Owner name.
- Email address.
- WhatsApp number.
- Business category.
- Business address/location.
- Business description.
- Password.
- Password confirmation.

Requirements:
- Basic frontend form validation.
- Required field validation.
- Email format validation.
- Password confirmation validation.
- Clear validation messages.
- Simulated registration success notification.
- Display pending verification status after submission.

Registration data does not need to be submitted to a real server.

### 4.7 Authentication UI

Provide frontend authentication interfaces.

Required pages:
- Login.
- Register.
- Forgot Password.

For this frontend prototype, authentication interfaces are visual demonstrations only.

Do not implement fake authentication, session management, or role-based authorization.

### 4.8 Responsive Navigation

The navbar must support:
- Desktop navigation.
- Tablet navigation.
- Mobile hamburger menu.
- Responsive dropdown navigation when necessary.

---

## 5. User Flow

### A. Student Organization Flow

1. User opens MITRACARA.
2. User explores the landing page.
3. User navigates to the vendor catalog.
4. User searches or filters vendors.
5. User selects a vendor.
6. User views vendor details and products/services.
7. User optionally saves the vendor to favorites.
8. User clicks the WhatsApp contact button.
9. User is redirected to the vendor's WhatsApp contact.

### B. Local Vendor Flow

1. Vendor opens MITRACARA.
2. Vendor selects Become a Partner.
3. Vendor views the partner information page or registration form.
4. Vendor fills out the registration form.
5. Vendor submits the form.
6. System performs frontend validation.
7. System displays a simulated registration success message.
8. Registration status is displayed as Pending Verification.

---

## 6. Technical Requirements

### 6.1 Technology Stack

| Technology | Purpose |
|---|---|
| Next.js | Main frontend framework |
| React | UI component rendering |
| TypeScript | Static typing and code maintainability |
| Tailwind CSS | Styling and responsive layouts |
| Lucide React | Interface icons |
| localStorage | Client-side favorite persistence |
| Mock Data | Simulated vendor and product information |

### 6.2 Next.js Configuration

Use the following development configuration:

- Next.js with App Router.
- TypeScript.
- Tailwind CSS.
- ESLint.
- App Router directory structure.
- Client Components only where browser interaction is required.

Use Server Components by default for static pages and data presentation.

Use Client Components for:
- Search and filtering.
- Favorite interactions.
- Mobile navigation interactions.
- Interactive registration forms.
- Other browser-dependent functionality.

Do not introduce unnecessary state management libraries.

React hooks such as useState, useEffect, and useMemo can be used where appropriate.

### 6.3 Project Architecture

Use a modular and component-based architecture.

Suggested directory structure:

```text
mitracara/
├── public/
│   ├── images/
│   │   ├── vendors/
│   │   ├── products/
│   │   └── categories/
│   └── logo.svg
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── vendors/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── categories/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── favorites/
│   │   │   └── page.tsx
│   │   ├── partner/
│   │   │   └── register/
│   │   │       └── page.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   └── forgot-password/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── home/
│   │   ├── vendors/
│   │   │   ├── VendorCard.tsx
│   │   │   ├── VendorGrid.tsx
│   │   │   ├── VendorSearch.tsx
│   │   │   └── VendorFilter.tsx
│   │   ├── categories/
│   │   ├── forms/
│   │   └── ui/
│   │
│   ├── data/
│   │   ├── vendors.ts
│   │   ├── categories.ts
│   │   └── reviews.ts
│   │
│   ├── hooks/
│   │   └── useFavorites.ts
│   │
│   ├── lib/
│   │   ├── whatsapp.ts
│   │   ├── storage.ts
│   │   └── utils.ts
│   │
│   └── types/
│       └── index.ts
│
├── SPEC.md
├── CATATAN.md
├── package.json
└── tsconfig.json
```

The directory structure is a guideline and may be adjusted when necessary.

Maintain clear separation between:
- Page components.
- Reusable UI components.
- Mock data.
- Type definitions.
- Utility functions.
- Browser storage logic.

### 6.4 Routing

Use Next.js App Router.

Required routes:

| Route | Description |
|---|---|
| `/` | Landing Page |
| `/vendors` | Vendor Catalog |
| `/vendors/[slug]` | Vendor Detail |
| `/categories/[slug]` | Category Listing |
| `/favorites` | Favorite Vendors |
| `/partner/register` | Partner Registration |
| `/login` | Login UI |
| `/register` | User Registration UI |
| `/forgot-password` | Password Recovery UI |

Use Next.js Link for internal navigation.

Use dynamic routes for vendor and category details.

### 6.5 Data Management

Use static mock data written in TypeScript files.

Each vendor should have:
- Unique ID.
- Business name.
- Slug.
- Main category.
- Description.
- Location.
- Address.
- Contact number.
- WhatsApp number.
- Profile image.
- Cover image.
- Verification status.
- Rating.
- Product/service list.
- Portfolio images.

Provide realistic fictional sample vendors representing local businesses in Bali.

Include at least three sample vendors per category.

All sample contact information must be clearly identified as demonstration data and must not expose personal information.

Use localStorage only for favorite vendor persistence.

Do not use localStorage for authentication or session management.

### 6.6 WhatsApp Integration

Each vendor detail page should include a WhatsApp contact button.

Requirements:
- Use vendor-specific WhatsApp contact information.
- Generate wa.me URLs.
- Include a pre-filled message.
- Use URL encoding.
- Open WhatsApp in a new tab.
- Use safe external link attributes.

Example message:

"Halo, saya menemukan usaha Anda melalui MITRACARA. Saya tertarik untuk mengetahui informasi lebih lanjut mengenai produk/jasa yang ditawarkan."

The WhatsApp number must be stored in mock data, not hardcoded in UI components.

---

## 7. UI/UX Design Guidelines

### 7.1 Design Direction

MITRACARA should have a modern, clean, friendly, and trustworthy appearance.

The interface should appeal to university students while remaining professional enough for local business owners.

The design should emphasize:
- Easy vendor discovery.
- Clear product and service information.
- Simple navigation.
- Strong visual hierarchy.
- Consistent component design.

### 7.2 Color Direction

Suggested primary palette:

- Primary: Emerald Green.
- Secondary: Warm Cream.
- Accent: Soft Orange.
- Background: White or light neutral.
- Text: Dark Charcoal.

Green represents growth, collaboration, and local economic development.

### 7.3 Typography

Use modern sans-serif typography.

Suggested fonts:
- Plus Jakarta Sans.
- Inter.
- Poppins.

Use consistent font sizes and weights throughout the application.

### 7.4 UI Components

Maintain consistent design across:
- Buttons.
- Input fields.
- Search bars.
- Category cards.
- Vendor cards.
- Badges.
- Navigation.
- Dropdowns.
- Modals.
- Toast notifications.
- Empty states.

### 7.5 Responsive Design

The application must support:
- Desktop.
- Tablet.
- Mobile devices.

Requirements:
- Responsive navigation.
- Adaptive vendor grid.
- Readable text sizes.
- Proper image scaling.
- Touch-friendly interactive elements.
- No unwanted horizontal overflow.

### 7.6 Image Handling

Use local images inside the public directory whenever possible.

Requirements:
- Use relevant images representing each vendor category.
- Avoid broken image links.
- Provide fallback placeholders when images are unavailable.
- Use Next.js Image component where appropriate.
- Configure external image domains only when external images are necessary.

---

## 8. Non-Functional Requirements

### 8.1 Performance
- Pages should load quickly.
- Avoid unnecessary dependencies.
- Optimize images.
- Use Next.js rendering features appropriately.
- Avoid unnecessary client-side JavaScript.

### 8.2 Usability
- Navigation must be intuitive.
- Vendor information must be easy to understand.
- Forms must have clear labels.
- Validation messages must be understandable.
- Interactive elements must provide appropriate feedback.

### 8.3 Maintainability
- Use reusable components.
- Keep mock data separate from UI components.
- Use TypeScript interfaces or types.
- Avoid duplicated code.
- Follow consistent naming conventions.

### 8.4 Compatibility
- Support modern browsers.
- Use responsive layouts.
- Ensure browser-dependent features work properly.
- Handle localStorage access safely in Client Components.

### 8.5 Accessibility
- Use semantic HTML elements.
- Provide appropriate image alt text.
- Ensure sufficient text contrast.
- Support keyboard navigation.
- Use clear form labels.
- Provide visible focus states.

---

## 9. Risks and Mitigation

| Risk | Impact | Mitigation |
|---|---|---|
| Incorrect Next.js Server/Client Component usage | Runtime errors | Use Client Components only for browser interactions |
| localStorage accessed during server rendering | Hydration or runtime errors | Access localStorage inside useEffect or client-side event handlers |
| Inconsistent mock data | Incorrect vendor information | Centralize vendor data in TypeScript files |
| Broken vendor images | Poor visual appearance | Use local images and fallback placeholders |
| Search and filtering logic conflicts | Incorrect search results | Combine search, category, and sorting logic in one filtering pipeline |
| Invalid WhatsApp links | Contact button does not work | Validate and centralize WhatsApp URL generation |
| Excessive project complexity | Development delays | Prioritize MVP features and implement incrementally |
| AI-generated code does not match requirements | Incorrect functionality | Review generated code and test against acceptance criteria |

---

## 10. Out of Scope

The following features are excluded from this frontend MVP:

- Backend development.
- Database integration.
- Real authentication and authorization.
- Real vendor verification.
- Admin dashboard.
- Vendor management dashboard.
- Online payment processing.
- Shopping cart and checkout.
- Real-time messaging.
- Order management.
- Booking management.
- Cloud image uploads.
- External API integration.
- Real customer review submission.
- Email verification.
- Password recovery through email.
- Multi-role access control.

The login, registration, and forgot-password pages are UI demonstrations only.

The partner registration form is also a frontend demonstration and does not create a real vendor account.

---

## 11. Acceptance Criteria

The project is accepted when the following requirements can be verified manually.

### A. Landing Page

- [ ] Homepage loads successfully.
- [ ] Navbar displays the main navigation links.
- [ ] Hero section introduces MITRACARA clearly.
- [ ] Search bar is visible.
- [ ] All five main categories are displayed.
- [ ] Featured vendors are displayed.
- [ ] How It Works section is available.
- [ ] Partner CTA navigates to the partner registration page.
- [ ] Footer displays relevant information.

### B. Vendor Catalog

- [ ] Vendor catalog displays sample vendors.
- [ ] Vendor cards show business name and category.
- [ ] Vendor cards show location and rating.
- [ ] Verification badges are displayed correctly.
- [ ] Clicking a vendor card opens its detail page.
- [ ] Search by vendor name works.
- [ ] Search by product or service name works.
- [ ] Category filtering works.
- [ ] Location filtering works.
- [ ] Sorting works.
- [ ] Search and filtering can work simultaneously.
- [ ] Empty search results display an appropriate message.

### C. Vendor Detail

- [ ] Vendor profile information is displayed correctly.
- [ ] Product and service information is displayed.
- [ ] Pricing information is visible.
- [ ] Portfolio images are displayed.
- [ ] WhatsApp contact button is available.
- [ ] WhatsApp button opens the correct vendor contact.
- [ ] The pre-filled message contains the expected text.

### D. Favorite Vendors

- [ ] Users can add vendors to favorites.
- [ ] Users can remove vendors from favorites.
- [ ] Favorite status is reflected on vendor cards.
- [ ] Favorite list displays saved vendors.
- [ ] Favorite data persists after refreshing the page.
- [ ] Empty favorite state is displayed when no vendors are saved.

### E. Partner Registration

- [ ] Registration form displays all required fields.
- [ ] Required fields cannot be submitted empty.
- [ ] Invalid email formats are rejected.
- [ ] Password confirmation is validated.
- [ ] Successful form submission displays a confirmation message.
- [ ] Pending verification status is displayed.

### F. Authentication UI

- [ ] Login page can be opened.
- [ ] Registration page can be opened.
- [ ] Forgot Password page can be opened.
- [ ] Navigation between authentication pages works.
- [ ] No fake authentication or session behavior is implemented.

### G. Responsive Interface

- [ ] Homepage works on desktop.
- [ ] Vendor catalog works on tablet.
- [ ] Vendor detail page works on mobile.
- [ ] Navbar works on smaller screens.
- [ ] Vendor grid adjusts to screen size.
- [ ] No unwanted horizontal overflow occurs.

### H. Technical Requirements

- [ ] Application runs successfully using the Next.js development server.
- [ ] Internal navigation uses Next.js routing.
- [ ] Mock data is centralized.
- [ ] TypeScript types are used consistently.
- [ ] localStorage is accessed safely on the client side.
- [ ] No backend or database dependency is required.
- [ ] No API keys or secrets are exposed.
- [ ] No major browser console errors occur during normal interactions.

---

## 12. Implementation Plan

The project should be developed in six iterations.

### Iteration 1 — Project Setup and Design Foundation

Tasks:
- Initialize Next.js project with TypeScript.
- Configure App Router.
- Configure Tailwind CSS.
- Configure global styles.
- Establish color palette and typography.
- Create reusable layout components.
- Build responsive Navbar.
- Build Footer.

Expected Result:

A working Next.js project with a consistent visual foundation.

### Iteration 2 — Mock Data and Reusable Components

Tasks:
- Define TypeScript interfaces.
- Create five category datasets.
- Create fictional vendor data.
- Prepare local vendor and product images.
- Build reusable VendorCard.
- Build CategoryCard.
- Build shared UI components.

Expected Result:

Centralized mock data and reusable components ready for page development.

### Iteration 3 — Landing Page and Vendor Catalog

Tasks:
- Build landing page sections.
- Build category navigation.
- Build featured vendor section.
- Build vendor catalog.
- Implement vendor search.
- Implement category filtering.
- Implement location filtering.
- Implement sorting.
- Implement empty states.

Expected Result:

Users can discover and browse vendors through the main platform.

### Iteration 4 — Vendor Detail and Favorites

Tasks:
- Implement dynamic vendor detail routes.
- Display vendor information.
- Display products and services.
- Display pricing and portfolio.
- Implement WhatsApp contact links.
- Implement favorite functionality.
- Implement localStorage persistence.
- Build favorites page.

Expected Result:

Users can explore vendor details, contact vendors, and save their favorites.

### Iteration 5 — Partner and Authentication Interfaces

Tasks:
- Build partner registration page.
- Implement frontend form validation.
- Display registration success notification.
- Build login page.
- Build user registration page.
- Build forgot-password page.
- Connect navigation between related pages.

Expected Result:

Partner registration and authentication interfaces are available as frontend demonstrations.

### Iteration 6 — Testing and Finalization

Tasks:
- Test all routes.
- Test search and filtering.
- Test sorting.
- Test favorite persistence.
- Test WhatsApp links.
- Test form validation.
- Test responsive layouts.
- Check image fallbacks.
- Review TypeScript errors.
- Fix UI inconsistencies.
- Verify all acceptance criteria.

Expected Result:

A complete and responsive MITRACARA frontend MVP.

---

## 13. Development Instructions

The implementation agent must follow these instructions:

1. Read and understand this specification before starting implementation.
2. Inspect the existing project structure before modifying files.
3. Use Next.js App Router with TypeScript.
4. Use Tailwind CSS for styling.
5. Use reusable React components.
6. Prefer Server Components for static content.
7. Use Client Components only when browser interactions are required.
8. Keep mock data separate from UI components.
9. Use centralized TypeScript interfaces.
10. Use localStorage only for favorite vendor persistence.
11. Do not implement fake authentication.
12. Do not add backend services or external databases.
13. Do not expose API keys or secrets.
14. Do not run destructive or dangerous shell commands.
15. Use local images whenever possible.
16. Ensure all interactive elements have functional behavior.
17. Test each iteration before moving to the next.
18. Do not claim a feature works unless it has been implemented and verified.
19. Prioritize user experience and visual consistency over unnecessary complexity.
20. Follow the acceptance criteria as the final development checklist.

---

## 14. Definition of Done

MITRACARA MVP is considered complete when:

- The application runs successfully using Next.js.
- All five main vendor categories are available.
- Users can discover vendors through search and filtering.
- Users can sort vendor listings.
- Vendor detail pages display complete information.
- WhatsApp contact links work correctly.
- Users can save and remove favorite vendors.
- Favorite data persists after refreshing the page.
- Partner registration form validation works.
- Authentication pages are available as UI demonstrations.
- The website is responsive across desktop, tablet, and mobile.
- All acceptance criteria have been manually tested.

---

**Project Name:** MITRACARA  
**Tagline:** Temukan Mitra, Wujudkan Acara.  
**Framework:** Next.js  
**Language:** TypeScript  
**Styling:** Tailwind CSS  
**Project Scope:** Frontend Only  
**Development Status:** Specification Ready  
**Implementation Status:** Not Started

**End of Specification — MITRACARA**