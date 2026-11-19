# TASKS.md — MITRACARA

## Project Information

- **Project Name:** MITRACARA
- **Project Type:** Web-Based Local Vendor Directory Platform
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Scope:** Frontend Only
- **Development Approach:** Milestone-Based Development

## Development Rules

1. Read `SPEC.md` and `UI-SPEC.md` before implementing any task.
2. Complete milestones sequentially.
3. Do not skip acceptance criteria.
4. Reuse existing components whenever possible.
5. Follow the established UI design system.
6. Keep mock data separate from UI components.
7. Use TypeScript consistently.
8. Do not introduce backend services or external databases.
9. Do not implement fake authentication.
10. Do not expose API keys, passwords, or other secrets.
11. Do not execute destructive commands.
12. Test each milestone before proceeding to the next.
13. Update this file when tasks are completed.

---

# Milestone 1 — Project Scaffold

**Objective:** Prepare the Next.js project structure and establish the initial design foundation.

### Tasks

- [x] Initialize Next.js project using TypeScript.
- [x] Configure App Router.
- [x] Configure Tailwind CSS.
- [x] Configure ESLint.
- [x] Establish global CSS and design tokens.
- [x] Configure Plus Jakarta Sans typography.
- [x] Create the main application layout.
- [x] Create reusable Navbar component.
- [x] Create responsive MobileMenu component.
- [x] Create Footer component.
- [x] Establish the initial folder structure.

### Acceptance Criteria

- [x] Next.js development server runs successfully.
- [x] Application can be accessed through the local browser.
- [x] App Router works correctly.
- [x] Tailwind CSS styles are applied successfully.
- [x] Global typography uses Plus Jakarta Sans.
- [x] Primary color palette follows UI-SPEC.md.
- [x] Navbar displays correctly on desktop.
- [x] Mobile navigation can open and close.
- [x] Footer is displayed consistently.
- [x] No major compilation errors occur.

### Expected Files

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Footer.tsx
│   └── ui/
│
└── lib/
    └── utils.ts
```

Additional files:
- `package.json`
- `tsconfig.json`
- `next.config.ts`
- `eslint.config.mjs`

---

# Milestone 2 — Landing Page and Vendor Catalog

**Objective:** Build the main interface and display local vendors based on the categories defined in MITRACARA.

### Tasks

#### A. Landing Page

- [x] Build Hero Section.
- [x] Add introductory headline and description.
- [x] Add Explore Vendors CTA.
- [x] Add Become a Partner CTA.
- [x] Build Category Section.
- [x] Display five main vendor categories.
- [x] Build Featured Vendors Section.
- [x] Build How It Works Section.
- [x] Build Partner CTA Section.
- [x] Complete Footer content.

#### B. Mock Data

- [x] Create TypeScript vendor interfaces.
- [x] Create category data.
- [x] Create sample vendor data.
- [x] Prepare fictional local vendor profiles.
- [x] Add product and service information.
- [x] Prepare local vendor images and placeholders.

Include at least three sample vendors per category.

#### C. Vendor Catalog

- [x] Create `/vendors` page.
- [x] Build VendorCard component.
- [x] Build VendorGrid component.
- [x] Display vendor information.
- [x] Display verification badges.
- [x] Display vendor ratings.
- [x] Create dynamic vendor detail routes.
- [x] Create category listing routes.

### Acceptance Criteria

- [x] Landing page displays all required sections.
- [x] All five vendor categories are displayed.
- [x] Category cards navigate to their corresponding listings.
- [x] Featured vendors display correctly.
- [x] Vendor catalog displays sample vendors.
- [x] Each vendor card displays its image, name, category, location, and rating.
- [x] Verification status is displayed correctly.
- [x] Clicking a vendor card opens the correct detail page.
- [x] Vendor detail pages display the correct vendor information.
- [x] Product and service information is displayed.
- [x] Missing images have appropriate fallback placeholders.
- [x] Layout follows UI-SPEC.md.

### Expected Files

```text
src/
├── app/
│   ├── page.tsx
│   ├── vendors/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   └── categories/
│       └── [slug]/
│           └── page.tsx
│
├── components/
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── CategorySection.tsx
│   │   ├── FeaturedVendors.tsx
│   │   ├── HowItWorks.tsx
│   │   └── PartnerCTA.tsx
│   ├── vendors/
│   │   ├── VendorCard.tsx
│   │   └── VendorGrid.tsx
│   └── categories/
│       ├── CategoryCard.tsx
│       └── CategoryGrid.tsx
│
├── data/
│   ├── vendors.ts
│   └── categories.ts
│
└── types/
    └── index.ts

public/
└── images/
    ├── vendors/
    ├── products/
    └── categories/
```

---

# Milestone 3 — Search, Filter, and Sorting

**Objective:** Allow student organizations to discover vendors based on their event requirements.

### Tasks

- [ ] Build VendorSearch component.
- [ ] Implement search by vendor name.
- [ ] Implement search by product or service name.
- [ ] Implement category filtering.
- [ ] Implement location filtering.
- [ ] Implement sorting by newest.
- [ ] Implement sorting by rating.
- [ ] Implement reset filter functionality.
- [ ] Display total vendor count.
- [ ] Build empty search results state.
- [ ] Implement responsive filter interface.

### Acceptance Criteria

- [ ] Search returns vendors matching the entered keyword.
- [ ] Search works for vendor names.
- [ ] Search works for product and service names.
- [ ] Category filter displays only matching vendors.
- [ ] Location filter displays only matching vendors.
- [ ] Sorting by newest works correctly.
- [ ] Sorting by rating works correctly.
- [ ] Multiple filters can be used simultaneously.
- [ ] Reset filter restores the original vendor listing.
- [ ] Empty state appears when no vendors match.
- [ ] Search and filter interface works on mobile devices.

### Expected Files

```text
src/
├── components/
│   ├── vendors/
│   │   ├── VendorSearch.tsx
│   │   ├── VendorFilter.tsx
│   │   └── VendorGrid.tsx
│   └── ui/
│       └── EmptyState.tsx
│
├── hooks/
│   └── useVendorFilters.ts
│
└── app/
    └── vendors/
        └── page.tsx
```

---

# Milestone 4 — WhatsApp Integration

**Objective:** Allow student organizations to contact vendors directly through WhatsApp.

### Tasks

- [ ] Create centralized WhatsApp URL utility.
- [ ] Store vendor WhatsApp numbers in mock data.
- [ ] Generate vendor-specific WhatsApp links.
- [ ] Create reusable VendorContactButton.
- [ ] Add WhatsApp button to vendor detail page.
- [ ] Add contact action to relevant vendor cards where appropriate.
- [ ] Generate pre-filled WhatsApp messages.
- [ ] Configure external link security attributes.

### Acceptance Criteria

- [ ] Every vendor has its own WhatsApp contact information in mock data.
- [ ] WhatsApp links use the correct vendor number.
- [ ] Pre-filled messages contain the intended text.
- [ ] Message content is URL encoded correctly.
- [ ] Clicking the button opens the intended WhatsApp destination.
- [ ] External links use appropriate `target` and `rel` attributes.
- [ ] Missing contact information is handled gracefully.

### Expected Files

```text
src/
├── lib/
│   └── whatsapp.ts
│
├── components/
│   └── vendors/
│       └── VendorContactButton.tsx
│
├── app/
│   └── vendors/
│       └── [slug]/
│           └── page.tsx
│
└── data/
    └── vendors.ts
```

---

# Milestone 5 — CRUD Dashboard Demo

**Objective:** Create a frontend demonstration dashboard for managing vendor data.

**Scope Note:** This milestone is an extension of the original SPEC.md. The initial specification excludes admin and vendor management dashboards. This dashboard is therefore a local frontend demonstration, not a real administrative system.

### Tasks

#### A. Dashboard Overview

- [ ] Create dashboard layout.
- [ ] Create dashboard sidebar navigation.
- [ ] Display total vendors.
- [ ] Display total products and services.
- [ ] Display total vendor categories.
- [ ] Display verified and pending vendor counts.
- [ ] Display recent vendor entries.

#### B. Vendor Management

- [ ] Create vendor management page.
- [ ] Display vendor data in a table.
- [ ] Add vendor button.
- [ ] Create vendor form.
- [ ] Implement add vendor functionality.
- [ ] Implement edit vendor functionality.
- [ ] Implement delete vendor functionality.
- [ ] Add delete confirmation dialog.
- [ ] Add basic form validation.

#### C. Vendor Form

Fields:
- Business name.
- Owner name.
- Category.
- Description.
- Location.
- Address.
- WhatsApp number.
- Business image.
- Verification status.

### Acceptance Criteria

- [ ] Dashboard can be accessed through its designated route.
- [ ] Dashboard overview displays correct summary values.
- [ ] Vendor table displays existing mock data.
- [ ] User can add a new vendor.
- [ ] New vendor appears in the vendor table.
- [ ] User can edit existing vendor information.
- [ ] Updated information appears correctly.
- [ ] User can delete a vendor after confirmation.
- [ ] Deleted vendor no longer appears in the table.
- [ ] Required form fields are validated.
- [ ] Changes are reflected in the catalog during the current session.
- [ ] Dashboard clearly indicates that it is a demonstration interface.

### Expected Files

```text
src/
├── app/
│   └── dashboard/
│       ├── layout.tsx
│       ├── page.tsx
│       └── vendors/
│           └── page.tsx
│
├── components/
│   └── dashboard/
│       ├── DashboardSidebar.tsx
│       ├── DashboardHeader.tsx
│       ├── DashboardStats.tsx
│       ├── VendorTable.tsx
│       ├── VendorForm.tsx
│       └── DeleteConfirmation.tsx
│
└── hooks/
    └── useVendorManagement.ts
```

---

# Milestone 6 — localStorage Integration

**Objective:** Implement client-side data persistence for favorites and the dashboard demonstration.

### Tasks

- [ ] Create centralized storage utility.
- [ ] Implement favorite vendor persistence.
- [ ] Create useFavorites hook.
- [ ] Create favorites page.
- [ ] Implement add favorite functionality.
- [ ] Implement remove favorite functionality.
- [ ] Synchronize favorite button states.
- [ ] Persist dashboard vendor changes using localStorage.
- [ ] Handle missing or invalid stored data.
- [ ] Handle browser environments where localStorage is unavailable.

### Acceptance Criteria

#### Favorites

- [ ] Users can add vendors to favorites.
- [ ] Users can remove vendors from favorites.
- [ ] Favorite status updates immediately.
- [ ] Favorites remain available after refreshing the page.
- [ ] Favorites page displays saved vendors.
- [ ] Empty state appears when no favorites exist.

#### Dashboard Data

- [ ] Newly created vendors persist after refreshing the page.
- [ ] Updated vendors retain their changes.
- [ ] Deleted vendors remain deleted after refreshing.
- [ ] Invalid stored data does not crash the application.
- [ ] Default mock data is available when no dashboard data has been stored.

#### Technical

- [ ] localStorage is accessed only on the client.
- [ ] No hydration errors occur due to browser storage.
- [ ] Storage logic is separated from UI components.

### Expected Files

```text
src/
├── app/
│   └── favorites/
│       └── page.tsx
│
├── components/
│   └── vendors/
│       └── FavoriteButton.tsx
│
├── hooks/
│   ├── useFavorites.ts
│   └── useVendorManagement.ts
│
└── lib/
    └── storage.ts
```

---

# Milestone 7 — Testing and UI Quality Assurance

**Objective:** Verify that all implemented pages and interactions work correctly.

### Tasks

- [ ] Test all application routes.
- [ ] Test landing page navigation.
- [ ] Test category navigation.
- [ ] Test vendor detail pages.
- [ ] Test search functionality.
- [ ] Test category filtering.
- [ ] Test location filtering.
- [ ] Test sorting.
- [ ] Test WhatsApp links.
- [ ] Test favorite functionality.
- [ ] Test localStorage persistence.
- [ ] Test dashboard CRUD.
- [ ] Test registration form validation.
- [ ] Test responsive layouts.
- [ ] Check image loading and fallback behavior.
- [ ] Check browser console errors.
- [ ] Check accessibility basics.

### Acceptance Criteria

- [ ] All required routes load successfully.
- [ ] Navigation links lead to the correct pages.
- [ ] Search and filters return correct results.
- [ ] WhatsApp links use correct contact information.
- [ ] Favorites work correctly.
- [ ] Dashboard CRUD operations work correctly.
- [ ] Data persists as specified.
- [ ] Forms display appropriate validation messages.
- [ ] No major UI layout problems occur.
- [ ] No unwanted horizontal overflow occurs.
- [ ] No major runtime or console errors remain.
- [ ] Keyboard navigation works for essential interactions.

### Expected Files

Potentially affected files:
- `src/app/`
- `src/components/`
- `src/hooks/`
- `src/lib/`
- `src/data/`

Testing configuration may introduce:
- `eslint.config.mjs`
- `package.json`
- Test files where applicable.

---

# Milestone 8 — Security and Code Review

**Objective:** Review frontend security, data handling, and code quality.

### Tasks

- [ ] Review external links.
- [ ] Validate and sanitize user-provided form values.
- [ ] Validate WhatsApp number formatting.
- [ ] Review localStorage data handling.
- [ ] Ensure no sensitive information is stored.
- [ ] Ensure no API keys or secrets are exposed.
- [ ] Review TypeScript usage.
- [ ] Check for unsafe HTML rendering.
- [ ] Review form validation.
- [ ] Check dependency vulnerabilities.
- [ ] Remove unnecessary dependencies.
- [ ] Review Next.js Client and Server Component boundaries.

### Acceptance Criteria

- [ ] No API keys or secrets are committed.
- [ ] No real personal information is included in mock data.
- [ ] User inputs are validated before use.
- [ ] No unsafe HTML injection is used.
- [ ] External links use appropriate security attributes.
- [ ] localStorage does not contain passwords or authentication credentials.
- [ ] No fake authentication mechanism exists.
- [ ] No unnecessary dependencies remain.
- [ ] No known critical dependency vulnerabilities remain unresolved.

### Expected Files

Potentially affected:
- `package.json`
- `package-lock.json`
- `src/lib/`
- `src/components/forms/`
- `src/components/vendors/`
- `src/hooks/`
- `src/app/`

---

# Milestone 9 — Production Build

**Objective:** Prepare the application for production deployment.

### Tasks

- [ ] Run TypeScript checks.
- [ ] Run ESLint.
- [ ] Run Next.js production build.
- [ ] Fix build errors.
- [ ] Fix linting errors.
- [ ] Fix TypeScript errors.
- [ ] Review image optimization.
- [ ] Review page metadata.
- [ ] Review responsive behavior.
- [ ] Verify production build output.

### Acceptance Criteria

- [ ] TypeScript checks pass.
- [ ] ESLint passes.
- [ ] Next.js production build completes successfully.
- [ ] All required routes are available.
- [ ] No missing imports or modules.
- [ ] No unresolved build warnings that affect functionality.
- [ ] Page titles and metadata are configured.
- [ ] Application is ready for deployment.

### Expected Files

Potentially affected:
- `package.json`
- `next.config.ts`
- `tsconfig.json`
- `src/app/layout.tsx`
- `src/app/`
- `src/components/`

---

# Milestone 10 — Deployment

**Objective:** Publish the MITRACARA frontend application so it can be accessed through a public URL.

### Tasks

- [ ] Prepare Git repository.
- [ ] Review files before committing.
- [ ] Verify `.gitignore`.
- [ ] Verify no secrets are committed.
- [ ] Connect repository to deployment platform.
- [ ] Configure Next.js deployment.
- [ ] Deploy application.
- [ ] Verify production URL.
- [ ] Test production pages.
- [ ] Test WhatsApp links in production.
- [ ] Test responsive layout in production.
- [ ] Verify localStorage functionality.
- [ ] Document deployment information.

### Acceptance Criteria

- [ ] Source code is available in the intended Git repository.
- [ ] No secrets or private credentials are committed.
- [ ] Deployment completes successfully.
- [ ] Public URL can be accessed.
- [ ] Landing page loads correctly.
- [ ] Vendor catalog works in production.
- [ ] Vendor detail pages work in production.
- [ ] Search and filtering work.
- [ ] WhatsApp links work.
- [ ] Favorites persist through page refreshes.
- [ ] Dashboard demo CRUD works.
- [ ] No major production runtime errors occur.

### Expected Files

```text
.gitignore
README.md
package.json
next.config.ts
src/
```

Deployment configuration may also involve platform settings outside the project repository.

---

# Final Project Checklist

## Core Application

- [ ] Next.js project initialized.
- [ ] Responsive landing page completed.
- [ ] Five vendor categories available.
- [ ] Vendor catalog completed.
- [ ] Vendor detail pages completed.
- [ ] Search and filtering completed.
- [ ] Sorting completed.
- [ ] WhatsApp integration completed.
- [ ] Favorite functionality completed.
- [ ] Partner registration UI completed.
- [ ] Authentication demonstration pages completed.

## Dashboard Extension

- [ ] Dashboard overview completed.
- [ ] Vendor table completed.
- [ ] Add vendor completed.
- [ ] Edit vendor completed.
- [ ] Delete vendor completed.
- [ ] Dashboard data persistence completed.

## Quality Assurance

- [ ] Responsive design verified.
- [ ] Accessibility basics verified.
- [ ] Security review completed.
- [ ] TypeScript checks passed.
- [ ] ESLint passed.
- [ ] Production build successful.
- [ ] Deployment successful.

---

## Definition of Done

MITRACARA is considered complete when:

1. All required core features are implemented.
2. All milestone acceptance criteria are satisfied.
3. The application follows SPEC.md and UI-SPEC.md.
4. All important interactions work correctly.
5. The frontend is responsive and accessible.
6. No major runtime, TypeScript, or build errors remain.
7. Dashboard demonstration works without backend integration.
8. Production deployment is accessible.

**Project:** MITRACARA  
**Framework:** Next.js App Router  
**Language:** TypeScript  
**Styling:** Tailwind CSS  
**Scope:** Frontend Only  
**Milestones:** 10  
**Status:** Milestone 2 Complete

**End of TASKS.md — MITRACARA**