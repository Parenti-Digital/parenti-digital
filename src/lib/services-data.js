export const BRAND = {
  name: "Parenti Digital",
  shortName: "Parenti",
  descriptor: "Digital · AV · Live",
  owner: "Michael Parenti",
  email: "MSParentiJr@gmail.com",
  emailHref: "mailto:MSParentiJr@gmail.com",
  phone: "(630) 352-8910",
  phoneHref: "tel:+16303528910",
};

export const serviceGroups = [
  {
    id: "websites",
    number: "01",
    title: "Website Design & Development",
    short: "Custom, mobile-first sites that load fast and say exactly what you do.",
    pricing: "fixed",
    items: [
      {
        name: "Starter Website",
        price: "$1,000",
        unit: "one-time",
        description:
          "A single page with your organization's information, contact details, photos, and social links. Custom design, mobile-friendly layout, and launch included.",
      },
      {
        name: "Standard Website",
        price: "$3,000",
        unit: "one-time",
        description:
          "Three to seven pages covering who you are, your mission, programs, events, and contact forms. Custom design, mobile-friendly layout, and launch included.",
      },
      {
        name: "Advanced Website",
        price: "$5,000–$10,000",
        unit: "one-time",
        description:
          "Eight or more pages with custom features and functionality, built around how your organization actually operates. Final scope and quote confirmed before work begins.",
      },
    ],
    note: "Every website is built on a platform you can update yourself, and handed over with a walkthrough.",
  },
  {
    id: "domain-email",
    number: "02",
    title: "Domain & Professional Email",
    short: "A domain and email that match your name, set up on every device you use.",
    pricing: "fixed",
    items: [
      {
        name: "Domain Registration & Setup",
        price: "$150",
        unit: "one-time",
        description:
          "Help selecting a domain, domain account setup, and connecting it to your website.",
      },
      {
        name: "Professional Email Setup",
        price: "$200",
        unit: "one-time",
        description:
          "Up to three professional email accounts on your own domain, configured on your computers and mobile devices.",
      },
      {
        name: "Additional Email Accounts",
        price: "$35",
        unit: "each",
        description: "Each additional mailbox added to your domain and configured on your devices.",
      },
    ],
    note: "Domain registration and mailbox fees are paid directly to the registrar and are separate from setup.",
  },
  {
    id: "support",
    number: "03",
    title: "Website Maintenance & Support",
    short: "Someone who already knows your site, on call before something breaks.",
    pricing: "fixed",
    items: [
      {
        name: "Website Care",
        price: "$100",
        unit: "per month",
        description: "Routine maintenance, functionality checks, and basic troubleshooting.",
      },
      {
        name: "Website Plus",
        price: "$150",
        unit: "per month",
        description:
          "Website maintenance plus up to two hours of content updates and technical support each month.",
      },
      {
        name: "Complete Support",
        price: "$200",
        unit: "per month",
        description:
          "Website maintenance plus up to four hours of content updates and technical support each month.",
      },
    ],
    note: "Additional development, new pages, and major changes are quoted separately. Unused support hours do not roll over.",
  },
  {
    id: "streaming",
    number: "04",
    title: "Live Streaming & Broadcast Systems",
    short: "Single-camera to multi-camera livestreams, built and tested before you go live.",
    pricing: "quote",
    items: [
      {
        name: "Single-Camera Livestream Setup",
        price: "Request a quote",
        unit: "",
        quote: true,
        description:
          "Encoder and software configuration, audio fed from your sound system, platform setup, test broadcast, and a handoff so you can run it yourself.",
      },
      {
        name: "Multi-Camera Streaming System",
        price: "Request a quote",
        unit: "",
        quote: true,
        description:
          "Cameras, video switcher, graphics and lower thirds, intercom, and recording, designed for your room and your volunteers.",
      },
      {
        name: "Church & Event Livestream Production",
        price: "Request a quote",
        unit: "",
        quote: true,
        description:
          "Weekly service or one-off event production, on-site or remote, with a trained operator running the broadcast.",
      },
      {
        name: "Platform & Channel Setup",
        price: "Request a quote",
        unit: "",
        quote: true,
        description:
          "YouTube, Facebook, Vimeo, Twitch, or a custom RTMP destination, with channel branding, stream keys, and scheduled events configured.",
      },
      {
        name: "Network & Bandwidth Readiness",
        price: "Request a quote",
        unit: "",
        quote: true,
        description:
          "Upload testing, hardwired networking, and failover so the stream stays up when the building gets busy.",
      },
    ],
    note: "Hardware and subscriptions are quoted at cost or purchased by you. Labor is quoted after a site walkthrough or remote assessment.",
  },
  {
    id: "audio",
    number: "05",
    title: "Audio Engineering & Sound Systems",
    short: "Design, tuning, and mixing for rooms where people actually have to hear.",
    pricing: "quote",
    items: [
      {
        name: "Sound System Design & Installation",
        price: "Request a quote",
        unit: "",
        quote: true,
        description:
          "Coverage planning, speaker, amplifier, and DSP selection, and installation sized to your room and budget.",
      },
      {
        name: "System Tuning & Calibration",
        price: "Request a quote",
        unit: "",
        quote: true,
        description:
          "Measurement-based alignment: equalization, delay, and gain structure so every seat hears the same thing.",
      },
      {
        name: "Live Audio Mixing",
        price: "Request a quote",
        unit: "",
        quote: true,
        description:
          "Front-of-house and monitor mixing for services, concerts, conferences, and events, with your gear or mine.",
      },
      {
        name: "Studio Recording, Mixing & Mastering",
        price: "Request a quote",
        unit: "",
        quote: true,
        description:
          "Tracking through final master: vocals, instruments, spoken word, and full productions delivered release-ready.",
      },
      {
        name: "Podcast & Voiceover Production",
        price: "Request a quote",
        unit: "",
        quote: true,
        description:
          "Recording, editing, noise cleanup, leveling, and delivery of files formatted for your publishing platform.",
      },
    ],
    note: "Quotes are based on room size, existing equipment, and how many channels need to be mixed.",
  },
  {
    id: "training",
    number: "06",
    title: "Sound System & Media Team Training",
    short: "Teach the people who run the system, so it works when you are not in the room.",
    pricing: "quote",
    items: [
      {
        name: "Sound System Operator Training",
        price: "Request a quote",
        unit: "",
        quote: true,
        description:
          "Hands-on training for volunteers and staff: gain structure, equalization, feedback control, wireless microphones, and running a service start to finish.",
      },
      {
        name: "Troubleshooting & Signal Flow Workshop",
        price: "Request a quote",
        unit: "",
        quote: true,
        description:
          "Learn to trace a dead channel, a hum, or a dropout under pressure instead of guessing at faders.",
      },
      {
        name: "Livestream Operator Training",
        price: "Request a quote",
        unit: "",
        quote: true,
        description:
          "Run a broadcast solo: camera switching, audio for stream versus room, graphics, and recovering when something drops.",
      },
      {
        name: "Media Team Onboarding & Documentation",
        price: "Request a quote",
        unit: "",
        quote: true,
        description:
          "Written checklists, role assignments, and a signal-flow diagram for your room, so new team members can be trained consistently.",
      },
    ],
    note: "Sessions run on-site or remotely, for individuals or full teams, and are quoted per session or as a training series.",
  },
  {
    id: "consulting",
    number: "07",
    title: "Multimedia Consulting & Solutions",
    short: "A second opinion before you spend, and a plan for what to buy next.",
    pricing: "quote",
    items: [
      {
        name: "AV & Technology Audit",
        price: "Request a quote",
        unit: "",
        quote: true,
        description:
          "Inventory of what you own, what is failing, and a prioritized roadmap with realistic budget ranges.",
      },
      {
        name: "Equipment Specification & Purchasing Guidance",
        price: "Request a quote",
        unit: "",
        quote: true,
        description:
          "Vendor-neutral specification sheets and recommendations, so you buy the right gear once.",
      },
      {
        name: "System Integration",
        price: "Request a quote",
        unit: "",
        quote: true,
        description:
          "Audio, video, lighting, and control brought into one coherent system instead of four separate ones.",
      },
      {
        name: "Event Production Management",
        price: "Request a quote",
        unit: "",
        quote: true,
        description:
          "Crew, staging, show calling, and vendor coordination for events that cannot afford a bad cue.",
      },
    ],
    note: "Consulting engagements are quoted by scope, either as a fixed project fee or an hourly rate.",
  },
  {
    id: "production",
    number: "08",
    title: "Video, Podcast & Content Production",
    short: "Content produced once and cut for every place you need it.",
    pricing: "quote",
    items: [
      {
        name: "Video Production & Editing",
        price: "Request a quote",
        unit: "",
        quote: true,
        description:
          "Promotional videos, service and event recaps, interviews, and short cutdowns formatted for social.",
      },
      {
        name: "Podcast Production",
        price: "Request a quote",
        unit: "",
        quote: true,
        description:
          "Studio or remote recording, editing, show notes, and publishing to the major podcast platforms.",
      },
      {
        name: "Brand & Graphic Design",
        price: "Request a quote",
        unit: "",
        quote: true,
        description:
          "Logo work, brand kits, and templates for social, print, and screen that match your website.",
      },
    ],
    note: "Production is quoted per project. Deliverables, revisions, and usage rights are confirmed in writing before shooting.",
  },
  {
    id: "social-setup",
    number: "09",
    title: "Social & Business Account Setup",
    short: "Facebook, Instagram, YouTube, and LinkedIn set up once, connected to your business.",
    pricing: "quote",
    items: [
      {
        name: "Social Account Setup",
        price: "Request a quote",
        unit: "",
        quote: true,
        description:
          "New accounts on Facebook, Instagram, YouTube, and LinkedIn, or cleanup of the ones you already have, with your logo, description, contact details, and links filled in consistently across all four.",
      },
      {
        name: "Business Account & Page Conversion",
        price: "Request a quote",
        unit: "",
        quote: true,
        description:
          "Converting personal profiles into proper business pages and accounts wherever the platform allows it, so you get business tools, insights, and a professional presence instead of a personal profile.",
      },
      {
        name: "Streaming & Platform Connections",
        price: "Request a quote",
        unit: "",
        quote: true,
        description:
          "Linking your accounts to your streaming and publishing destinations, including YouTube and Facebook Live, so you can go live without hunting for settings mid-broadcast.",
      },
      {
        name: "Handoff & Credentials Document",
        price: "Request a quote",
        unit: "",
        quote: true,
        description:
          "Every login, admin role, and connection written down and handed to you, with a walkthrough of how to post and go live on each platform.",
      },
    ],
    note: "One-time setup only. No ongoing posting, content management, or account monitoring. All accounts stay in your name and under your ownership.",
  },
];