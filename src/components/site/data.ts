
export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Workflow Automation",
    icon: "Workflow",
    desc: "Automate repetitive business processes using n8n, Make.com, APIs, Google Workspace and AI to improve efficiency and reduce manual tasks.",
  },
  {
    title: "IT Infrastructure",
    icon: "Server",
    desc: "Design, deploy and maintain reliable enterprise IT infrastructure including networking, VPNs, firewalls, wireless systems, servers and business applications.",
  },
  {
    title: "Technical Support",
    icon: "Headset",
    desc: "Provide reliable technical support, troubleshoot enterprise systems, resolve software and networking issues, and maintain business continuity.",
  },
  {
    title: "Cybersecurity",
    icon: "Shield",
    desc: "Protect business environments through secure firewall deployment, VPN implementation, network segmentation, endpoint security and cybersecurity best practices.",
  },
] as const;

export const skillGroups = [
  {
    title: "IT Infrastructure",
    icon: "Network",
    items: ["Enterprise Networking", "LAN/WAN", "Windows Administration", "Active Directory", "DHCP", "DNS", "VPN", "VLAN", "Structured Cabling", "Wireless Networking", "IT Asset Management", "Technical Support", "Hardware Troubleshooting", "Software Troubleshooting"],
  },
  {
    title: "Cybersecurity",
    icon: "ShieldCheck",
    items: ["Sophos Firewall", "Firewall Policies", "VPN Security", "Network Segmentation", "Endpoint Security", "Incident Response", "Risk Assessment", "Threat Prevention"],
  },
  {
    title: "Automation",
    icon: "Workflow",
    items: ["n8n", "Make.com", "REST APIs", "Google APIs", "Google Sheets API", "OAuth 2.0", "Webhooks", "JSON"],
  },
  {
    title: "Cloud & AI",
    icon: "Cloud",
    items: ["ChatGPT", "Claude", "Google Gemini", "GitHub", "Render", "Vercel", "Prompt Engineering", "AI-assisted Development"],
  },
  {
    title: "Programming",
    icon: "Code2",
    items: ["Python (Learning)", "HTML", "CSS", "JavaScript (Basic)"],
  },
] as const;

export const projects = [
  {
    title: "Sales Inquiry Automation",
    category: "Automation",
    desc: "Designed and developed a landing page that automatically routes customer inquiries to the appropriate sales consultant, improving lead distribution and response efficiency.",
    tech: ["n8n","HTML", "CSS", "Google Forms", "GitHub", "Vercel", "Automation"],
  },
  {
    title: "CCTV Request Automation",
    category: "Automation",
    desc: "Developed an automated workflow that streamlined CCTV service request processing, reducing manual effort and improving tracking.",
    tech: ["n8n", "Google Forms", "Google Sheets"],
  },
  {
    title: "Google Sheets API Integration",
    category: "Automation",
    desc: "Integrated Google APIs and OAuth 2.0 to automate spreadsheet updates and reporting.",
    tech: ["Google APIs", "OAuth", "REST API", "JSON"],
  },
  {
    title: "Automated Accounts Receivable & Payment Follow-Up System",
    category: "Automation",
    desc: "An automated accounts receivable workflow designed to organize outstanding payments and streamline payment reminders and follow-up activities.",
    tech: ["n8n", "Google Sheets", "Workflow Automation"],
  },
  {
    title: "AutoReply PH – Messenger Chatbot",
    category: "Automation",
    desc: "Developed an AI-powered Messenger chatbot that handles customer FAQs, captures inquiries and contact details, supports follow-ups, and notifies businesses when human assistance is needed.",
    tech: ["n8n", "AI", "Facebook Messenger", "Google Sheets", "Telegram"],
  },
  {
    title: "Dental Automation – Inquiries & Booking",
    category: "Automation",
    desc: "An automation solution designed to handle dental clinic inquiries, collect patient details, and streamline appointment booking requests.",
    tech: ["n8n", "Workflow Automation", "Webhooks"],
  },
  {
    title: "Facebook Automation",
    category: "Automation",
    desc: "A Facebook-focused automation project designed to streamline repetitive social media tasks and reduce manual handling.",
    tech: ["n8n", "Facebook", "Workflow Automation"],
  },
  {
    title: "IT Ticketing System",
    category: "Automation",
    desc: "An automated IT ticketing system built with Make.com to streamline service requests, ticket tracking, technician assignments, and status notifications.",
    tech: ["n8n", "make.com", "Workflow Automation"],
  },

  {
    title: "Sophos Firewall Deployment",
    category: "Security",
    desc: "Configured Sophos XGS firewalls including VPN connectivity, VLAN segmentation, routing, firewall policies and enterprise security.",
    tech: ["Sophos Firewall", "VPN", "VLAN", "Routing", "Security Policies"],
  },
  {
    title: "Pfsense Firewall Deployment",
    category: "Security",
    desc: "Configured Pfsense firewalls including IPSEC connectivity, routing, and firewall policies.",
    tech: ["Pfsense", "IPSEC", "Routing", "Security Policies"],
  },
  {
    title: "Enterprise Network Infrastructure",
    category: "Infrastructure",
    desc: "Managed and maintained enterprise IT infrastructure across multiple dealership branches including networking, switching, structured cabling, wireless systems and technical support.",
    tech: ["Networking", "Switching", "Wireless", "Structured Cabling", "VPN"],
  },
] as const;

export const certifications = [
  { name: "Google Cybersecurity Professional Certificate", issuer: "Google", icon: "Award" },
  { name: "Sophos Next Generation Firewall Training", issuer: "Sophos", icon: "ShieldCheck" },
  { name: "Symantec Cyber Resilience Together", issuer: "Symantec", icon: "BadgeCheck" },
] as const;

export const experience = [
  {
    role: "Freelance AI Automation & GoHighLevel Specialist",
    company: "Self-Employed / Freelance",
    period: "2026 – Present",
    bullets: [
      "Design and develop AI-powered workflow automations using n8n and Make.com",
      "Build automated lead management and customer inquiry systems",
      "Configure GoHighLevel CRM workflows, pipelines, and automation",
      "Integrate third-party applications using APIs, webhooks, and Google Workspace",
      "Develop AI-powered chatbots and automated customer follow-up solutions",
      "Help businesses streamline repetitive tasks and improve operational efficiency",
    ],
  },

  {
    role: "IT Supervisor",
    company: "Autohub Group Mindanao",
    period: "2020 – Present",
    bullets: [
      "Manage enterprise IT infrastructure",
      "Lead IT projects",
      "Deploy networking equipment",
      "Configure Sophos firewalls",
      "Manage VPN connectivity",
      "Implement VLANs",
      "Provide technical support",
      "Troubleshoot enterprise software",
      "Maintain IT documentation",
      "Implement workflow automation",
      "Support multiple dealership branches",
    ],
  },
  {
    role: "Senior IT Assistant",
    company: "Autohub Group Mindanao",
    period: "2014 – 2019",
    bullets: [
      "Provide technical support",
      "Install and configure hardware",
      "Support software systems",
      "Maintain network infrastructure",
      "Troubleshoot user issues",
    ],
  },
] as const;

export const exploring = [
  { title: "Python Development", icon: "Code2" },
  { title: "Advanced AI Automation", icon: "Sparkles" },
  { title: "Cloud Technologies", icon: "Cloud" },
  { title: "GoHighLevel (GHL)", icon: "Workflow" },
] as const;
