export type SkillCategory = {
  name: string;
  items: string[];
};

export type ExperienceHighlight = {
  title: string;
  description: string;
};

export type WorkExperience = {
  role: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  description?: string;
  bullets: string[];
  stack?: string;
};

export type Project = {
  name: string;
  subtitle?: string;
  description: string;
  bullets: string[];
  techStack: string[];
  impact?: string;
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
};

export type Certification = {
  name: string;
};

export type Language = {
  name: string;
  level: string;
};

export type ExploringItem = {
  title: string;
  description: string;
};

export type Profile = {
  name: string;
  title: string;
  yearsOfExperience: string;
  location: string;
  github: string;
  linkedin: string;
  summary: string[];
  skillCategories: SkillCategory[];
  highlights: ExperienceHighlight[];
  workExperience: WorkExperience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  languages: Language[];
  exploring: ExploringItem[];
};

export const profile: Profile = {
  name: 'Hong Ket Lo',
  title: 'Senior Software Engineer',
  yearsOfExperience: '12+ years',
  location: 'Malaysia',
  github: 'https://github.com/hket89',
  linkedin: 'https://www.linkedin.com/in/hket89',
  summary: [
    "Senior Software Engineer with over a decade of experience designing and delivering production-grade systems at scale. Currently at SEEK — one of Asia-Pacific's largest job platforms — working across the full stack, from migrating 60+ million user profiles into a unified identity system, to building serverless pipelines and architecting resilient AWS infrastructure.",
    'Recent focus on agentic AI workflows — LangGraph pipelines, RAG systems, and MCP server architecture — applied to real business problems beyond the demo.',
    'I care about clean architecture, developer experience, and shipping things that actually work.'
  ],
  skillCategories: [
    {
      name: 'Languages',
      items: ['TypeScript / JavaScript', 'Python', 'PHP', 'Java', 'C# (.NET)']
    },
    {
      name: 'Frameworks & Runtimes',
      items: ['Node.js (NestJS, Express)', 'Laravel (PHP)', 'Spring Boot (Java)', '.NET MVC (C#)', 'ReactJS', 'AngularJS']
    },
    {
      name: 'Cloud & Infrastructure',
      items: ['AWS ECS (Fargate)', 'AWS Lambda', 'API Gateway', 'S3 / CloudFront', 'SNS / SQS', 'MediaConvert', 'Terraform', 'CloudFormation', 'Cloudflare Workers', 'Docker']
    },
    {
      name: 'AI / Agentic Tooling',
      items: ['LangGraph', 'LangChain', 'RAG (Retrieval-Augmented Generation)', 'OpenAI', 'Qdrant (vector DB)', 'MCP Server Architecture']
    },
    {
      name: 'Databases & Messaging',
      items: ['PostgreSQL', 'MySQL', 'DynamoDB', 'Redis', 'SQS', 'Qdrant']
    },
    {
      name: 'Security & Auth',
      items: ['Auth0', 'OAuth2', 'JWT']
    },
    {
      name: 'Observability & Analytics',
      items: ['Datadog', 'New Relic', 'CloudWatch', 'Logentries', 'Omniture', 'Hotjar', 'Tealium']
    },
    {
      name: 'CI/CD & Tooling',
      items: ['GitHub Actions', 'Custom Pipelines', 'Cursor AI']
    }
  ],
  highlights: [
    {
      title: '60M+ User Profile Migration',
      description:
        'Leading the migration of 60+ million user profiles into a unified, modernised identity system at SEEK. Dual-write strategy, pub/sub synchronisation (SNS + SQS + Lambda), and zero-downtime cutover across multiple engineering teams.'
    },
    {
      title: 'AI-Powered Sales Order Automation',
      description:
        'Reduced sales order processing time from ~8 minutes to under 60 seconds — an ~87% reduction — by building an end-to-end LangGraph agentic pipeline integrated with WhatsApp and AutoCount ERP.'
    },
    {
      title: 'Frontend Architecture Revamp',
      description:
        'Led the full redesign of a legacy application, architecting a new ReactJS frontend hosted on AWS S3 + CloudFront for performance and global scalability at SEEK.'
    },
    {
      title: 'Event-Driven Downtime System',
      description:
        'Engineered a globally distributed maintenance page that activates instantly via Cloudflare Worker edge logic, bypassing the origin server entirely — zero backend dependency during downtime.'
    },
    {
      title: 'Serverless Social Media Ad Platform',
      description:
        'Designed and built a fully serverless AWS platform automating the end-to-end lifecycle of Facebook and Instagram ad campaigns using Lambda, MediaConvert, SNS/SQS, and DynamoDB.'
    },
    {
      title: 'Monolith Decomposition & Containerisation',
      description:
        'Decoupled an existing monolith into microservices, containerised services with Docker, and established CI/CD workflows supporting agile delivery at SEEK.'
    },
    {
      title: 'Mobile Games for China Market',
      description:
        'Developed mobile games using Unity3D and Cocos2D launched in the Chinese market, generating significant revenue for the company.'
    },
    {
      title: 'Monitoring & Observability Rollout',
      description:
        'Set up CloudWatch dashboards, Datadog alerts, and integrated analytics tracking (Omniture, Hotjar, Tealium) across the platform for proactive issue detection.'
    }
  ],
  workExperience: [
    {
      role: 'Senior Software Engineer',
      company: 'SEEK',
      period: 'September 2018 – Present',
      duration: '7+ years',
      location: 'Malaysia',
      description: "SEEK is one of Asia-Pacific's largest employment marketplaces, serving millions of job seekers and employers.",
      bullets: [
        'Leading the migration of 60+ million user profiles into a unified, modernised identity system with zero-downtime cutover strategies.',
        'Led full redesign of a legacy application — new ReactJS frontend on AWS S3 + CloudFront.',
        'Designed and built REST APIs in Node.js/TypeScript, deployed as containerised microservices on AWS ECS (Fargate).',
        'Developed AWS Lambda functions for async workflows: scheduled tasks, third-party data sync, and event-driven processing.',
        'Implemented SNS + SQS + Lambda pattern to reliably sync data between legacy and new systems.',
        'Built a dynamic downtime page (ReactJS) that activates automatically during maintenance windows using Cloudflare Worker + CloudFront + S3.',
        'Set up CloudWatch dashboards and Datadog alerts for proactive issue detection.',
        'Developed a C# .NET MVC backend admin system for customer support teams.',
        'Contributed to deployment pipeline improvements, reducing deployment friction and increasing release confidence.'
      ]
    },
    {
      role: 'Software Engineer II',
      company: 'SEEK',
      period: 'April 2016 – September 2018',
      duration: '2.5 years',
      location: 'Malaysia',
      bullets: [
        'Decoupled an existing monolith into microservices architecture.',
        'Containerised services using Docker; established CI/CD workflows supporting an agile delivery culture.',
        'Provisioned cloud infrastructure using Terraform and CloudFormation.',
        'Integrated analytics tracking (Omniture, Hotjar, Tealium) across the platform.',
        'Rolled out monitoring tooling (Datadog, New Relic, Logentries) for system health visibility.'
      ],
      stack: 'Node.js, Laravel, .NET, AngularJS, ReactJS, Spring Boot, ELK'
    },
    {
      role: 'Software Engineer',
      company: 'Sovereign Gateway Sdn Bhd',
      period: 'January 2014 – April 2016',
      duration: '2+ years',
      location: 'Bandar Utama, Selangor, Malaysia',
      bullets: [
        'Developed mobile games using Unity3D and Cocos2D launched in the Chinese market, generating significant revenue.',
        'Revamped the company website and maintained backend services in C# .NET.'
      ]
    },
    {
      role: 'Application Developer',
      company: 'Techninier Sdn Bhd',
      period: 'November 2012 – December 2013',
      duration: '1+ year',
      location: 'Bandar Utama, Selangor, Malaysia',
      bullets: [
        'Built online shopping and social networking platforms using PHP, HTML, jQuery, JavaScript, MSSQL.',
        'Maintained and enhanced a mobile app for automotive listings (comparable to carlist.my) using Java and C# Monodroid.',
        'Delivered custom business reports using SQL Server Reporting Services (SSRS).'
      ]
    },
    {
      role: 'Trainee',
      company: 'Infosys (Foundational CS Programme)',
      period: 'June 2012 – August 2012',
      duration: '3 months',
      location: '',
      bullets: [
        'Developed a Telephone Directory Maintenance System in C.',
        'Built a Sterling Courier System using J2EE, jQuery, JSP, and HTML.'
      ]
    }
  ],
  projects: [
    {
      name: 'AI-Powered Sales Order Automation Bot',
      subtitle: 'WhatsApp + LangGraph + AutoCount ERP',
      description:
        'Reduced sales order processing time from ~8 minutes to under 60 seconds by building an end-to-end agentic AI pipeline — currently in active production use.',
      bullets: [
        'WhatsApp as the user interface for sales agents.',
        'LangGraph orchestrating the AI reasoning and tool-calling workflow.',
        'AutoCount ERP integrated via an AWS EC2 VPN proxy with nftables DNAT routing, bridging cloud-native to on-premise ERP.',
        'Delivered as a production system currently in active use.'
      ],
      techStack: ['LangGraph', 'LangChain', 'OpenAI', 'WhatsApp API', 'AWS EC2', 'Python'],
      impact: '~87% reduction in order processing time; eliminated manual data entry errors.'
    },
    {
      name: 'RAG-Powered WhatsApp Purchase Order Bot',
      subtitle: 'LangChain · LangGraph · OpenAI · RAG · Qdrant',
      description:
        'Retrieval-augmented generation chatbot enabling suppliers and customers to submit and query purchase orders through WhatsApp, eliminating manual processing entirely.',
      bullets: [
        'Users place orders via text messages and images directly in WhatsApp.',
        'RAG-based architecture with OpenAI interprets user intent and generates structured purchase orders.',
        'Qdrant vector database powers semantic retrieval of product catalogue and order history.',
        'Orders pushed seamlessly into the AutoCount ERP system.',
        'Auth0 with OAuth2/JWT ensures only authorised users can access the system.'
      ],
      techStack: ['LangChain', 'LangGraph', 'OpenAI', 'RAG', 'Qdrant', 'PostgreSQL', 'DynamoDB', 'Python', 'WhatsApp API', 'Auth0']
    },
    {
      name: 'Serverless Social Media Ad Management Platform',
      subtitle: 'AWS Lambda · API Gateway · DynamoDB · MediaConvert',
      description:
        'Fully serverless AWS platform to automate the end-to-end lifecycle of Facebook and Instagram ad campaigns.',
      bullets: [
        'AWS Lambda orchestrates video processing and end-to-end ad workflow automation.',
        'API Gateway exposes RESTful endpoints for content uploads and analytics retrieval.',
        'DynamoDB stores user data, ad configurations, and performance metrics.',
        'SNS/SQS manages task queues and sends processing/deployment notifications.',
        'MediaConvert transcodes uploaded videos into platform-specific formats.',
        'Auth0 secures the platform with OAuth2/JWT access control.'
      ],
      techStack: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'SNS', 'SQS', 'MediaConvert', 'ReactJS', 'Auth0']
    },
    {
      name: '60M+ User Profile Migration',
      subtitle: 'SEEK · Node.js + AWS + PostgreSQL + DynamoDB',
      description:
        "Ongoing large-scale migration of SEEK's user identity system — coordinating across multiple engineering teams with zero data loss.",
      bullets: [
        'Dual-write strategy for zero data loss during cutover.',
        'Pub/sub synchronisation between old and new systems (SNS + SQS + Lambda).',
        'Extensive monitoring and rollback instrumentation.',
        'Coordinating across multiple engineering teams.'
      ],
      techStack: ['Node.js', 'TypeScript', 'AWS Lambda', 'SNS', 'SQS', 'PostgreSQL', 'DynamoDB']
    },
    {
      name: 'Non-Profit Website',
      subtitle: 'lixinbc.vercel.app · Next.js + Sanity CMS',
      description:
        'Public-facing church website built from scratch — content-managed blogs and events authored in Sanity Studio, with a Facebook Graph API integration surfacing social feeds.',
      bullets: [
        'Sanity v5 CMS with embedded Studio for non-technical content editors to publish blog posts and events.',
        'Dynamic routes for blogs and events with GROQ-powered queries.',
        'Facebook Graph API integration proxied via a Next.js API route for live social feeds.',
        'Deployed on Vercel with App Router and React 19.',
      ],
      techStack: ['Next.js', 'Sanity CMS', 'TypeScript', 'React 19', 'MUI', 'Vercel'],
    },
    {
      name: 'Zero-Downtime Maintenance Page System',
      subtitle: 'SEEK · ReactJS + Cloudflare Worker + CloudFront + S3',
      description:
        'Globally distributed maintenance page system that activates instantly with zero backend dependency during downtime.',
      bullets: [
        'Activates instantly via Cloudflare Worker edge logic.',
        'Serves a branded, user-friendly page from S3/CloudFront during maintenance.',
        'Bypasses the origin server entirely — zero backend dependency during downtime.'
      ],
      techStack: ['ReactJS', 'Cloudflare Workers', 'AWS CloudFront', 'AWS S3']
    }
  ],
  education: [
    {
      degree: "Bachelor's Degree, Computer Software Engineering",
      institution: 'Universiti Malaysia Sabah',
      period: '2009 – 2012'
    }
  ],
  certifications: [
    { name: 'Basic to Advanced: Retrieval-Augmented Generation (RAG)' },
    { name: 'LangGraph for Beginners: Agentic Workflows in Simple Steps' },
    { name: 'Agile Fundamental' }
  ],
  languages: [
    { name: 'Chinese (Mandarin)', level: 'Native / Bilingual' },
    { name: 'English', level: 'Professional Working' },
    { name: 'Malay', level: 'Professional Working' }
  ],
  exploring: [
    {
      title: 'Agentic AI Workflows',
      description:
        'Building LangGraph sub-agents that run autonomously during off-hours via structured task rituals (TASK.md, AGENT_LOG.md).'
    },
    {
      title: 'MCP Server Architecture',
      description: 'Custom NestJS-hosted MCP servers that expose internal tooling to AI agents.'
    },
    {
      title: 'Staff Engineer Track',
      description:
        'Deepening technical leadership, cross-team architecture influence, and visibility beyond the immediate team.'
    },
    {
      title: 'Context Engineering',
      description:
        'Applying structured context (CLAUDE.md, .cursorrules) to maximise AI coding tool output in a multi-repo NestJS/AWS environment.'
    }
  ]
};
