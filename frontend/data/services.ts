export type ServiceStat = { value: string; label: string };
export type ServiceItem = { title: string; description: string };
export type ProcessStep = { title: string; description: string };

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  stats: ServiceStat[];
  includedHeading: string;
  itemsHeading: string;
  items: ServiceItem[];
  processHeading: string;
  process: ProcessStep[];
  toolsHeading?: string;
  tools?: string[];
  closingHeading: string;
  closingText: string;
};

export const services: Service[] = [
  {
    slug: "social-media-management",
    name: "Social Media Management",
    tagline:
      "From content planning to community engagement, we manage your social presence that converts.",
    intro:
      "From content planning to community engagement, I manage your social presence end-to-end so your brand connects, converts, and grows consistently across every platform.",
    stats: [
      { value: "50+", label: "Brands Handled" },
      { value: "3x", label: "Avg. Engagement Growth" },
      { value: "30+", label: "Posts / Month" },
      { value: "100%", label: "Client Satisfaction" },
    ],
    includedHeading: "What's Included",
    itemsHeading: "Everything You Need",
    items: [
      {
        title: "Content Strategy & Planning",
        description:
          "Monthly content calendars tailored to your brand voice, audience, and business goals.",
      },
      {
        title: "Creative Content Creation",
        description:
          "Eye-catching visuals, captions, stories and reels crafted to stop the scroll.",
      },
      {
        title: "Community Engagement",
        description:
          "Timely replies, comment management and community building to grow loyal followers.",
      },
      {
        title: "Analytics & Reporting",
        description:
          "Detailed monthly reports with insights on reach, engagement and follower growth.",
      },
      {
        title: "Hashtag & SEO Research",
        description:
          "Strategic hashtag sets and keyword-rich captions to maximise organic discoverability.",
      },
      {
        title: "Profile Optimisation",
        description:
          "Bio, highlights, link-in-bio and profile aesthetics optimised for conversions.",
      },
    ],
    processHeading: "My Process",
    process: [
      {
        title: "Discovery Call",
        description:
          "Understanding your brand, goals, target audience and current social presence.",
      },
      {
        title: "Strategy Building",
        description:
          "Creating a customised content strategy and monthly calendar aligned to your goals.",
      },
      {
        title: "Content Creation & Scheduling",
        description:
          "Designing, writing and scheduling content for optimal reach at the right times.",
      },
      {
        title: "Monitor, Engage & Report",
        description:
          "Active community management and monthly performance reports with growth insights.",
      },
    ],
    toolsHeading: "Platforms I Manage",
    tools: ["Instagram", "Facebook", "LinkedIn", "X / Twitter", "YouTube"],
    closingHeading: "Let's Grow Together",
    closingText: "Ready to transform your social media presence? Let's talk.",
  },
  {
    slug: "graphic-designing",
    name: "Graphic Designing",
    tagline:
      "Visually stunning designs that communicate your brand story and make you stand out.",
    intro:
      "Visually stunning designs that communicate your brand story, captivate your audience and make you stand out in a crowded digital world.",
    stats: [
      { value: "200+", label: "Designs Delivered" },
      { value: "30+", label: "Brand Identities" },
      { value: "48h", label: "Avg. Delivery" },
      { value: "5.0", label: "Average Rating" },
    ],
    includedHeading: "What I Design",
    itemsHeading: "Design Specialities",
    items: [
      {
        title: "Brand Identity & Logo",
        description:
          "Complete brand identity packages — logo, colour palette, typography and brand guidelines.",
      },
      {
        title: "Social Media Graphics",
        description:
          "Posts, stories, highlight covers, carousels and banners designed for maximum impact.",
      },
      {
        title: "Marketing Materials",
        description:
          "Flyers, brochures, posters, presentations and digital ads that convert.",
      },
      {
        title: "Packaging Design",
        description:
          "Product packaging that looks amazing on shelf and in unboxing videos alike.",
      },
      {
        title: "Web & UI Graphics",
        description:
          "Landing page visuals, banners and UI elements crafted to boost conversions.",
      },
      {
        title: "Typography & Layout",
        description:
          "Beautiful typographic compositions and editorial layouts for print and digital.",
      },
    ],
    processHeading: "My Design Process",
    process: [
      {
        title: "Brief & Discovery",
        description:
          "Deep dive into your brand, vision, target audience and design preferences.",
      },
      {
        title: "Concept & Moodboard",
        description:
          "Creating initial concepts, colour palettes and visual direction for your approval.",
      },
      {
        title: "Design & Refinement",
        description:
          "Crafting the final designs with your feedback until they're pixel-perfect.",
      },
      {
        title: "Final Delivery",
        description:
          "Handing over all files in required formats (PNG, SVG, PDF, AI) ready to use.",
      },
    ],
    toolsHeading: "Tools & Software",
    tools: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Figma",
      "Canva Pro",
      "Adobe InDesign",
    ],
    closingHeading: "Let's Create Something Beautiful",
    closingText:
      "Ready to transform your brand's visual identity? Let's talk design.",
  },
  {
    slug: "reels-video-editing",
    name: "Reels & Video Editing",
    tagline:
      "Scroll-stopping reels and short-form videos crafted to go viral and drive real results.",
    intro:
      "Engaging, scroll-stopping short-form video content crafted with cinematic flair and strategic storytelling to captivate your audience and drive real results.",
    stats: [
      { value: "100+", label: "Reels Edited" },
      { value: "5M+", label: "Total Views" },
      { value: "24h", label: "Turnaround Time" },
      { value: "4x", label: "Avg. Reach Boost" },
    ],
    includedHeading: "What's Included",
    itemsHeading: "Video Services",
    items: [
      {
        title: "Instagram & YouTube Reels",
        description:
          "Vertical short-form videos with trendy transitions, effects and music sync.",
      },
      {
        title: "Talking Head Edits",
        description:
          "Podcast clips, interviews and talking head videos edited for social media.",
      },
      {
        title: "Motion Graphics & Captions",
        description:
          "Animated text, subtitles and motion elements that make videos pop.",
      },
      {
        title: "Product Showcase Videos",
        description:
          "Visually compelling product reels designed to drive clicks and sales.",
      },
      {
        title: "Audio & Music Sync",
        description:
          "Perfectly timed cuts and transitions synced to trending music and beats.",
      },
      {
        title: "Colour Grading",
        description:
          "Professional colour grading to match your brand aesthetic and mood.",
      },
    ],
    processHeading: "My Video Process",
    process: [
      {
        title: "Brief & Raw Footage",
        description:
          "You share raw footage, references and a brief about the desired style and vibe.",
      },
      {
        title: "Editing & Effects",
        description:
          "Cutting, transitions, motion graphics, music sync and colour grading applied.",
      },
      {
        title: "Review & Revisions",
        description:
          "You review the draft and request revisions until you're 100% happy.",
      },
      {
        title: "Final Export & Delivery",
        description:
          "Final video delivered in HD/4K ready for upload on any platform.",
      },
    ],
    toolsHeading: "Tools & Software",
    tools: [
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "CapCut Pro",
      "DaVinci Resolve",
      "Epidemic Sound",
    ],
    closingHeading: "Let's Make Your Brand Go Viral",
    closingText: "Ready to create scroll-stopping video content? Let's talk.",
  },
  {
    slug: "content-creation",
    name: "Content Creation",
    tagline:
      "Compelling copy and creative assets that tell your brand story and drive meaningful action.",
    intro:
      "Compelling copy, creative assets and engaging content that tells your brand story, resonates with your audience and drives meaningful action.",
    stats: [
      { value: "500+", label: "Content Pieces" },
      { value: "10x", label: "Engagement Lift" },
      { value: "40+", label: "Clients Served" },
      { value: "100%", label: "On-Time Delivery" },
    ],
    includedHeading: "What I Create",
    itemsHeading: "Content Types",
    items: [
      {
        title: "Social Media Captions",
        description:
          "Engaging, on-brand captions with hooks, storytelling and strong CTAs for every platform.",
      },
      {
        title: "Blog & Article Writing",
        description:
          "SEO-optimised long-form blog posts and articles that establish authority and drive traffic.",
      },
      {
        title: "Email Copywriting",
        description:
          "Compelling email sequences and newsletters that nurture leads and drive conversions.",
      },
      {
        title: "Website Copy",
        description:
          "Persuasive homepage, about, and service page copy that converts visitors into clients.",
      },
      {
        title: "Ad Copywriting",
        description:
          "High-converting ad copy for Meta, Google and LinkedIn campaigns that drive results.",
      },
      {
        title: "Brand Storytelling",
        description:
          "Authentic brand narratives that connect emotionally with your target audience.",
      },
    ],
    processHeading: "My Content Process",
    process: [
      {
        title: "Brand Voice Discovery",
        description:
          "Understanding your brand personality, tone and the message you want to communicate.",
      },
      {
        title: "Research & Strategy",
        description:
          "Audience research, competitor analysis and content angle mapping for maximum impact.",
      },
      {
        title: "Writing & Creation",
        description:
          "Crafting high-quality content that perfectly captures your brand voice and goals.",
      },
      {
        title: "Review & Delivery",
        description:
          "Revisions based on your feedback until the content is exactly right, then final delivery.",
      },
    ],
    closingHeading: "Words That Work For You",
    closingText: "Ready to create content that converts? Let's talk.",
  },
  {
    slug: "brand-strategy",
    name: "Brand Strategy",
    tagline:
      "Strategic positioning and identity building that makes your brand truly unforgettable.",
    intro:
      "Strategic brand positioning, identity building and market differentiation that makes your brand unforgettable and drives sustainable business growth.",
    stats: [
      { value: "25+", label: "Brands Transformed" },
      { value: "2x", label: "Avg. Revenue Growth" },
      { value: "30+", label: "Brand Identities Built" },
      { value: "5.0", label: "Average Rating" },
    ],
    includedHeading: "What's Included",
    itemsHeading: "Strategy Deliverables",
    items: [
      {
        title: "Brand Positioning",
        description:
          "Defining your unique market position, value proposition and competitive advantage.",
      },
      {
        title: "Audience Persona Building",
        description:
          "Deep research into your ideal customers' behaviours, pain points and motivations.",
      },
      {
        title: "Brand Voice & Messaging",
        description:
          "Crafting a consistent brand voice, tone and messaging framework across all channels.",
      },
      {
        title: "Competitor Analysis",
        description:
          "In-depth analysis of competitors to identify gaps and opportunities in your market.",
      },
      {
        title: "Go-to-Market Strategy",
        description:
          "A comprehensive launch or growth plan with clear milestones and action steps.",
      },
      {
        title: "Brand Guidelines",
        description:
          "A complete brand book to ensure visual and verbal consistency across all touchpoints.",
      },
    ],
    processHeading: "My Strategy Framework",
    process: [
      {
        title: "Discovery & Audit",
        description:
          "A thorough audit of your current brand, market position and competitive landscape.",
      },
      {
        title: "Research & Insights",
        description:
          "Deep market research to uncover audience insights and brand opportunities.",
      },
      {
        title: "Strategy Development",
        description:
          "Building a tailored brand strategy roadmap aligned to your vision and business goals.",
      },
      {
        title: "Presentation & Implementation",
        description:
          "Presenting the strategy and supporting you in executing it across all channels.",
      },
    ],
    closingHeading: "Strategy That Scales",
    closingText:
      "Ready to build a brand that stands out? Let's create your strategy.",
  },
  {
    slug: "meta-google-ads",
    name: "Meta & Google Ads",
    tagline:
      "Data-driven paid ad campaigns that maximise your ROI and grow revenue predictably.",
    intro:
      "Data-driven paid advertising campaigns across Meta and Google that maximise your ROI, drive qualified leads and grow your revenue predictably.",
    stats: [
      { value: "5x", label: "Avg. ROAS" },
      { value: "40%", label: "Lower CPL" },
      { value: "₹50L+", label: "Ad Spend Managed" },
      { value: "20+", label: "Clients Scaled" },
    ],
    includedHeading: "What's Included",
    itemsHeading: "Ad Services",
    items: [
      {
        title: "Meta (Facebook & Instagram) Ads",
        description:
          "Highly targeted campaigns across Meta platforms to reach and convert your ideal audience.",
      },
      {
        title: "Google Search Ads",
        description:
          "Intent-based search campaigns that capture high-intent buyers actively searching for you.",
      },
      {
        title: "Google Display & YouTube Ads",
        description:
          "Visual display and video ads for brand awareness and retargeting across the Google network.",
      },
      {
        title: "Retargeting Campaigns",
        description:
          "Re-engaging warm audiences who have already shown interest in your brand or products.",
      },
      {
        title: "Conversion Optimisation",
        description:
          "Ongoing A/B testing and optimisation to continuously improve ROAS and lower CPA.",
      },
      {
        title: "Detailed Reporting",
        description:
          "Weekly and monthly reports with clear metrics, insights and actionable recommendations.",
      },
    ],
    processHeading: "My Ads Process",
    process: [
      {
        title: "Audit & Goal Setting",
        description:
          "Auditing existing campaigns and setting clear KPIs aligned to your business goals.",
      },
      {
        title: "Audience & Keyword Research",
        description:
          "Building detailed audience segments and keyword lists to reach the right people.",
      },
      {
        title: "Creative & Campaign Launch",
        description:
          "Creating compelling ad creatives and launching optimised campaigns across platforms.",
      },
      {
        title: "Optimise & Scale",
        description:
          "Continuous monitoring, A/B testing and scaling of winning campaigns for maximum ROI.",
      },
    ],
    toolsHeading: "Where I Advertise",
    tools: ["Facebook Ads", "Instagram Ads", "Google Search", "YouTube Ads", "Google Display"],
    closingHeading: "Ads That Actually Convert",
    closingText: "Ready to make every rupee of ad spend count? Let's talk.",
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
