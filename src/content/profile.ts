export type SkillCategory = {
  name: string;
  items: string[];
};

export type ExperienceHighlight = {
  title: string;
  description: string;
};

export type Project = {
  name: string;
  description: string;
  bullets: string[];
  techStack: string[];
};

export type Profile = {
  name: string;
  title: string;
  yearsOfExperience: string;
  location: string;
  github: string;
  summary: string[];
  skillCategories: SkillCategory[];
  highlights: ExperienceHighlight[];
  projects: Project[];
};

export const profile: Profile = {
  name: 'Hong Ket',
  title: 'Senior Software Developer',
  yearsOfExperience: '10+ years',
  location: 'George Town, Penang, Malaysia',
  github: 'https://github.com/hket89',
  summary: [
    'Versatile and results-driven Senior Software Developer with over 10 years of experience designing, building, and scaling high-performance applications across frontend, backend, cloud infrastructure, and AI/LLM systems.',
    'Proven track record delivering solutions that serve millions of users, including large-scale data migrations, event-driven microservices on AWS, AI-powered bots with RAG architecture, and mobile games generating significant revenue in competitive markets.',
    'Comfortable working across the full stack and adept at leading technical initiatives from architecture through deployment.'
  ],
  skillCategories: [
    {
      name: 'Frontend',
      items: ['ReactJS', 'AngularJS']
    },
    {
      name: 'Backend',
      items: ['Node.js (TypeScript)', 'Laravel (PHP)', '.NET (C#)', 'Spring Boot (Java)']
    },
    {
      name: 'Languages',
      items: ['TypeScript', 'PHP', 'Java', 'C#', 'Python']
    },
    {
      name: 'Cloud & DevOps',
      items: [
        'AWS (Lambda, SNS, SQS, S3, CloudFront, MediaConvert)',
        'Cloudflare',
        'CI/CD'
      ]
    },
    {
      name: 'AI / LLM',
      items: ['LangChain', 'LangGraph', 'RAG Architecture', 'OpenAI', 'Qdrant']
    },
    {
      name: 'Databases',
      items: ['PostgreSQL', 'DynamoDB', 'Qdrant']
    },
    {
      name: 'Architecture',
      items: ['Microservices', 'Event-Driven Systems', 'REST APIs', 'Pub/Sub']
    },
    {
      name: 'Security & Auth',
      items: ['Auth0', 'OAuth2', 'JWT']
    },
    {
      name: 'Monitoring',
      items: ['Datadog', 'New Relic', 'Logentries']
    }
  ],
  highlights: [
    {
      title: 'Large-scale user migration',
      description:
        'Migrated 10+ million user profiles to a new system, ensuring data integrity and zero downtime through careful planning and a pub/sub pattern on AWS (SNS, SQS, Lambda).'
    },
    {
      title: 'High-traffic React frontend',
      description:
        'Architected and developed a ReactJS frontend capable of serving millions of users, with a focus on performance, scalability, and reliability.'
    },
    {
      title: 'Event-driven downtime experience',
      description:
        'Engineered a dynamic downtime page using ReactJS, Cloudflare Workers, AWS CloudFront, and AWS S3, minimising user disruption during maintenance windows.'
    },
    {
      title: 'Operational tooling for support teams',
      description:
        'Developed a C# .NET MVC backend admin system empowering customer support teams to handle daily operations efficiently.'
    },
    {
      title: 'Mobile games for China market',
      description:
        'Developed mobile games using Unity3D and Cocos2D, launched in the China market and contributing significant revenue to the company.'
    },
    {
      title: 'Automotive marketplace app',
      description:
        'Maintained and enhanced a mobile application for car sales (similar to carlist.my), improving user experience and system stability.'
    },
    {
      title: 'Analytics and observability',
      description:
        'Collaborated with analytics teams to integrate data tracking tools (Omniture, Hotjar, Tealium) and implemented monitoring with Datadog, New Relic, and Logentries for real-time health visibility.'
    },
    {
      title: 'LLM-powered applications',
      description:
        'Developed LLM-powered applications with LangChain and LangGraph, implementing RAG architecture backed by vector databases and securing access via Auth0 (OAuth2/JWT).'
    }
  ],
  projects: [
    {
      name: 'RAG Bot for Automated Purchase Orders via WhatsApp',
      description:
        'AI-powered Retrieval-Augmented Generation (RAG) bot integrated with WhatsApp to fully automate purchase order processing for end users.',
      bullets: [
        'Users place orders via text messages and images directly in WhatsApp.',
        'RAG-based architecture with OpenAI interprets user intent and generates structured purchase orders.',
        'Orders are pushed seamlessly into the AutoCount ERP system, eliminating manual processing.',
        'Auth0 with OAuth2/JWT ensures only authorised users can access the system.'
      ],
      techStack: [
        'LangChain',
        'LangGraph',
        'OpenAI',
        'RAG',
        'Qdrant',
        'PostgreSQL',
        'DynamoDB',
        'Python',
        'WhatsApp API',
        'Auth0'
      ]
    },
    {
      name: 'Social Media Ad Management Platform (AWS Serverless)',
      description:
        'Fully serverless AWS platform to automate the end-to-end lifecycle of Facebook and Instagram ad campaigns.',
      bullets: [
        'AWS Lambda orchestrates video processing and end-to-end ad workflow automation.',
        'API Gateway exposes RESTful endpoints for content uploads and analytics retrieval.',
        'DynamoDB stores user data, ad configurations, and performance metrics.',
        'SNS/SQS manages task queues and sends processing/deployment notifications.',
        'MediaConvert transcodes uploaded videos into platform-specific formats.'
      ],
      techStack: [
        'AWS Lambda',
        'API Gateway',
        'DynamoDB',
        'SNS',
        'SQS',
        'MediaConvert',
        'ReactJS',
        'Auth0'
      ]
    }
  ]
};

