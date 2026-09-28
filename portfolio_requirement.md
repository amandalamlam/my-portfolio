# Requirement Doc

# 📄 Portfolio Website Requirements Document (PRD)

## 1. Project Overview & Tech Stack

- **Project Name:** Amanda Lam - Freelance IT PM / BA Personal Portfolio Website
- **Target Audience:** Potential B2B clients, startups, and enterprises looking for a Freelance/Part-time IT Project Manager or Business Analyst.
- **Core Brand Identity:** Bright Yellow (#FFD000 / #FACC15) as primary accent color, cheerful, energetic, yet highly professional and structured.

## 2. Navigation & Site Architecture

The website consists of **3 Main Pages** and **4 Dynamic Sub-pages**:

1. **Projects Page (`/`)** — Landing Page
2. **Project Detail Page (`/projects/[id]`)** — Sub-pages for 4 case studies
3. **About Me Page (`/about`)**
4. **Contact Page (`/contact`)**

*Global Navigation Header:*

- **Logo:** `Amanda Lam` (Top Left)
- **Nav Links:** `Projects` | `About` | `Contacts` (Top Right)

## 3. Page Specifications & Content Breakdown

### Page 1: Projects Page (Landing Page `/`)

- **Hero Section:**
    - **Visual Style:** Refer to Figma template "Portfolio - Simple Footer" with yellow organic wave graphic & profile image.
    - **Tagline/Sub-title:** "Freelance IT Project Manager / Business Analyst"
    - **Heading:** "Hello, I'm Amanda Lam!"
    - **Sub-text:** "Delivering digital products and workflow automation initiatives, including AI chatbot and platform development, across startups and enterprise environments."
    - **CTA Buttons:** `[Projects]` (Scroll to projects list) | `[About Me]` (Link to `/about`)
- **Projects Listing Section:**
    - Displays **4 Projects** in alternating image/text card layouts as shown in Figma:
        1. **Intent-Based, Rule-Driven AI Chatbot** (Industry: Financial Services)
        2. **Self-Service Room Booking System** (Industry: Financial Services)
        3. **Customized AI Translation Platform** (Industry: Financial Services / Professional Services)
        4. **Card Break E-Commerce Platform** (Type: Personal Project / Hands-on Vibe-Coding Build)
    - Each Project Card includes: Thumbnail image, Project Title, Short teaser description, and a **`[View Project]` button** (Links to `/projects/[id]`).

### Page 2: Project Detail Sub-page (`/projects/[id]`)

Each project detail page must adopt a structured **STAR/Case Study layout** based on the PDF Portfolio:

- **Header/Hero:** Project Title, Industry, Company Scale / Type, Role.
- **Section 1: Context** — Full background story and project objectives.
- **Section 2: Key Challenges** — Bullet points listing technical & operational obstacles.
- **Section 3: Role & Contributions** — Comprehensive breakdown of responsibilities.
- **Section 4: Outcome** — Quantifiable business impact and delivery achievements.
- **Visual Gallery:** Display **1 to 2 high-quality screenshot/diagram mockups** representing the system workflow, architecture, or UI interface.
- **Navigation:** `[← Back to Projects]` button at top and bottom.

### Page 3: About Me Page (`/about`)

Adopts the design structure from Figma "About - Simple Footer", containing content from PDF:

1. **Profile Section:**
    - Name: Amanda Lam
    - Title: Freelance IT Project Manager & Business Analyst
    - Location/Work Mode: Based in Hong Kong | Freelance & Part-time
    - Credentials & Certification: Google Project Management Certificate
    - Languages: Cantonese (Native), English (Fluent), Mandarin (Fluent)
2. **Professional Summary Section:**
    - Years of Experience: ~3 years in IT project & digital delivery
    - Delivered Project Types: AI Chatbot, Workflow Automation, Web & App product delivery
    - **Core Strengths (4 Pillars):**
        - *Clear Documentation & Alignment:* Written confirmation to align expectations & reduce misalignment.
        - *Decision-Making Facilitation:* Balancing scope, effort, resources, and timelines.
        - *Delivery Control:* Scope documentation, official sign-off, checkpoint assessments.
        - *Scale Adaptability:* Hands-on in small teams & standardized governance in enterprise setups.
3. **Project Management Tools Section:**
    - Grid layout displaying tool icons/cards for: Jira, Slack, MS Teams, MS Word / Excel / PowerPoint.
4. **Personal Character & Beyond Work Section:**
    - Working Style & Personality: Proactive, communicative, enthusiastic about AI automation & vibe-coding.
    - Hobbies/Interests: TCG / Card Collecting & building custom automation tools.

(Note: No "Resume Download" button is needed on this page).

### Page 4: Contact Page (`/contact`)

Styled consistently with the Landing Page & "About with Form" layout:

1. **Heading:** "Get In Touch"
2. **Sub-text/Availability:**
    - "Open to discuss freelance and contract opportunities from May 2026. Engagement timing and scope can be discussed based on project needs."
3. **Interactive Contact Form:**
    - Fields: `Name` (Input), `Email` (Input), `Message` (Textarea).
    - Action: `[Send Message]` button (triggers email notification/form submit).
4. **Direct Contact Info & Icons (Modernized Style):**
    - **Email:** amandalamky@gmail.com
    - **WhatsApp Direct Link:** WhatsApp Icon redirecting to `[https://wa.me/85255263566](https://wa.me/85255263566)` (Work WhatsApp).
    - **LinkedIn Icon:** Link to LinkedIn profile.
    - (Note: Plain text mobile number is hidden to prevent spam scraping).

## 4. Design & UX Guidelines for Cursor Execution

- **Color Scheme:** Primary Yellow (`#FFD000` / `#FACC15`), Background (`#FFFFFF` & `#FAFAFA`), Typography (`#111827` Charcoal Black).
- **Responsive Layout:** 100% mobile responsive (Single column on mobile, alternate grid on desktop).
- **Hover Effects:** Smooth transition animations on `[View Project]` buttons, project cards, and social icons.

###