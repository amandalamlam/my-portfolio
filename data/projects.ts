/**
 * The four portfolio projects. The home page draws one card per item.
 * Case-study pages use the same list, matched by id.
 */
export type Challenge = {
  title?: string;
  detail: string;
};

export type CaseStudy = {
  scale: string;
  role: string;
  context: string[];
  contextListIntro?: string;
  contextList?: string[];
  challenges: Challenge[];
  contributions: string[];
  outcomes: string[];
};

export type Project = {
  id: string;
  title: string;
  industry: string;
  teaser: string;
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    id: "ai-chatbot",
    title: "Intent-Based, Rule-Driven AI Chatbot",
    industry: "Financial Services",
    teaser:
      "An intent-based chatbot for an established financial services enterprise, supporting 24/7 self-service for policy, claims, payments, and account enquiries.",
    caseStudy: {
      scale: "Established enterprise",
      role: "Business Analyst (Business-side, Customer Experience Focus)",
      context: [
        "Developed an intent-based, rule-driven AI chatbot to support 24/7 customer self-service across policy management, claims, payments, and account enquiries. The primary goals were to reduce customer service workload and extend service availability beyond office hours.",
        "To develop the product, chatbot scope, flows, and experience needed to be defined end-to-end with multiple business stakeholders.",
      ],
      challenges: [
        {
          detail:
            "Controlling response reliability in a pre-scripted chatbot where AI interpretation of free-text inputs is inherently unpredictable.",
        },
        {
          detail:
            "Designing scalable fallback and live-chat escalation without overcommitting resources or impacting delivery timelines.",
        },
      ],
      contributions: [
        "Structured and clarified requirements for newly defined chatbot intents and user journeys.",
        "Designed and validated conversation flows, including fallback and escalation handling.",
        "Improved response accuracy by expanding intent scenarios and scripted content with technical teams.",
        "Defined controlled fallback messaging to ensure service continuity when intent confidence was low.",
        "Supported UAT readiness through scenario validation, issue tracking, and delivery coordination.",
      ],
      outcomes: [
        "Delivered a customer-friendly AI chatbot enabling 24/7 self-service for common enquiries.",
        "Reduced dependency on customer service officers for routine interactions.",
        "Improved chatbot reliability through structured fallback and escalation design.",
        "Enabled smoother UAT and release readiness through clearer flows and aligned expectations.",
      ],
    },
  },
  {
    id: "room-booking",
    title: "Self-Service Room Booking System",
    industry: "Financial Services",
    teaser:
      "A real-time, self-service meeting-room system for a large financial services enterprise, replacing manual forms, spreadsheets, and email confirmations.",
    caseStudy: {
      scale: "Large enterprise",
      role: "IT Project Manager",
      context: [
        "The organization relied on a manual meeting-room booking process involving e-forms, Excel schedule checks, and email confirmations handled by administrative staff. The process was inefficient, error-prone, and created unnecessary workload for internal teams.",
        "The project aimed to replace the manual workflow with a real-time, self-service booking system that allowed users to reserve meeting rooms independently via the company’s internal portal, while ensuring compliance with security, access control, and complex booking rules across different service centers.",
      ],
      contextListIntro: "The solution consisted of two core components:",
      contextList: [
        "A Content Management System (CMS) for administrators to manage room configurations, eligibility rules, bookings, reporting, and operational controls.",
        "A user-facing booking system that enabled users to search availability and reserve rooms online through a self-service interface.",
      ],
      challenges: [
        {
          title: "Introducing a new cloud platform",
          detail:
            "The system was deployed on Alibaba Cloud, which was new to the organization and required extensive technical communication, preparation, and security alignment.",
        },
        {
          title: "Coordinating vendor and internal IT teams",
          detail:
            "The solution was built by an external vendor, while identity, database, and security components were owned internally, requiring careful integration planning.",
        },
        {
          title: "Delivering under a tight timeline",
          detail:
            "Design, system build, cloud setup, and integration needed to proceed in parallel, with multiple parties working concurrently to meet a fixed launch date.",
        },
      ],
      contributions: [
        "Planned and managed project schedules, dependencies, and resources across parallel workstreams.",
        "Gathered, validated, and confirmed business and operational requirements for both CMS and user-facing booking components.",
        "Coordinated closely with vendors and internal IT teams on system design, cloud deployment, and technical integration.",
        "Led UAT planning and execution, covering happy paths such as booking rules, eligibility logic, admin functions, user booking scenarios, and edge cases.",
        "Prepared user guides and conducted system training for administrators and operational staff.",
        "Managed launch preparation, production rollout, and post-launch checks to ensure system stability and readiness.",
      ],
      outcomes: [
        "Successfully launched the system on schedule despite a tight timeline and complex delivery environment.",
        "Enabled users to book rooms independently in real time, replacing manual processes.",
        "Reduced administrative workload and freed staff to focus on higher-value customer support.",
        "Achieved high system adoption and positive user feedback following launch.",
      ],
    },
  },
  {
    id: "ai-translation",
    title: "Customized AI Translation Platform",
    industry: "Financial Services / Professional Services",
    teaser:
      "An AI translation platform for IPO prospectuses and financial reports, with a customized model for each client organization.",
    caseStudy: {
      scale: "Mid-to-large enterprise",
      role: "IT Project Manager",
      context: [
        "The organization provided professional translation services for IPO prospectuses and financial reports, where accuracy and terminology consistency are critical. To improve efficiency and scalability, an AI-powered translation platform was developed, allowing customized translation models for individual client organizations.",
        "The platform was used internally and positioned as a B2B product for external clients.",
      ],
      challenges: [
        {
          title: "Cross-region delivery coordination",
          detail:
            "The core IT team was based overseas, requiring clear communication and alignment to avoid misunderstanding and delivery risk.",
        },
      ],
      contributions: [
        "Defined functional specifications for new product features and enhancements.",
        "Coordinated development and led UAT to ensure usability and translation consistency.",
        "Managed version releases, including preparation of release notes.",
        "Acted as contact for external clients, handling account coordination and product demos.",
        "Facilitated structured communication between business stakeholders and overseas IT teams.",
      ],
      outcomes: [
        "Successfully launched product enhancements on schedule.",
        "Improved translation efficiency and terminology consistency for financial documents.",
        "Supported B2B client adoption through structured demos and account engagement.",
      ],
    },
  },
  {
    id: "card-break",
    title: "Card Break E-Commerce Platform",
    industry: "Personal Project / Hands-on Vibe-Coding Build",
    teaser:
      "A personal, hands-on build of an e-commerce shop for card breaks, taken from the buying flow through to a working storefront.",
  },
];

export function getProject(id: string) {
  return projects.find((project) => project.id === id);
}
