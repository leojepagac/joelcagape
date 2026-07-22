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
    title: "IT Infrastructure",
    icon: "Server",
    desc: "Design, deploy and maintain reliable enterprise IT infrastructure including networking, VPNs, firewalls, wireless systems, servers and business applications.",
  },
  {
    title: "Cybersecurity",
    icon: "Shield",
    desc: "Protect business environments through secure firewall deployment, VPN implementation, network segmentation, endpoint security and cybersecurity best practices.",
  },
  {
    title: "Workflow Automation",
    icon: "Workflow",
    desc: "Automate repetitive business processes using n8n, Make.com, APIs, Google Workspace and AI to improve efficiency and reduce manual tasks.",
  },
  {
    title: "Technical Support",
    icon: "Headset",
    desc: "Provide reliable technical support, troubleshoot enterprise systems, resolve software and networking issues, and maintain business continuity.",
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
    tech: ["HTML", "CSS", "GitHub", "Vercel", "Automation"],
  },
  {
    title: "Facebook Messenger Lead Automation",
    category: "Automation",
    desc: "Built an automated lead capture workflow integrating Meta Messenger, Google Sheets, Make.com and n8n for centralized lead management.",
    tech: ["Meta API", "Make.com", "n8n", "Google Sheets", "Webhooks"],
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
    title: "Sophos Firewall Deployment",
    category: "Security",
    desc: "Configured Sophos XGS firewalls including VPN connectivity, VLAN segmentation, routing, firewall policies and enterprise security.",
    tech: ["Sophos Firewall", "VPN", "VLAN", "Routing", "Security Policies"],
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
  { title: "HR Workflow Automation", icon: "Workflow" },
  { title: "Python Development", icon: "Code2" },
  { title: "Advanced AI Automation", icon: "Sparkles" },
  { title: "Cloud Technologies", icon: "Cloud" },
] as const;
