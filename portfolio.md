# Hong Ket Lo — Senior Software Engineer

> 12+ years building scalable systems, cloud-native microservices, and AI-powered pipelines.
> Based in Malaysia.

---

## 🧭 Profile

I'm a Senior Software Engineer with over a decade of experience designing and delivering production-grade systems at scale. Currently at **SEEK** (one of Asia-Pacific's largest job platforms), I've worked across the full stack — from migrating 60+ million user profiles into a unified system, to building serverless pipelines and architecting resilient AWS infrastructure.

My recent focus is on **agentic AI workflows** — LangGraph pipelines, RAG systems, and MCP server architecture — applying them to real business problems beyond the demo.

I care about clean architecture, developer experience, and shipping things that actually work.

- 📍 Malaysia
- 🔗 [LinkedIn](https://www.linkedin.com/in/hket89)
- 🌐 [Portfolio Site](https://hket89.github.io/)
- 🐙 [GitHub](https://github.com/hket89)

---

## 🛠️ Technical Skills

### Languages
| Language | Proficiency |
|---|---|
| TypeScript / JavaScript | Expert |
| Python | Proficient |
| PHP | Proficient |
| Java | Proficient |
| C# (.NET) | Proficient |

### Frameworks & Runtimes
- **Backend**: Node.js (NestJS, Express), PHP (Laravel), Java (Spring Boot), C# (.NET MVC)
- **Frontend**: ReactJS, AngularJS
- **Mobile / Game**: Unity3D, Cocos2D
- **AI / ML**: LangGraph, LangChain, RAG (Retrieval-Augmented Generation), OpenAI

### Cloud & Infrastructure
- **AWS**: ECS (Fargate), Lambda, API Gateway, S3, CloudFront, SNS, SQS, MediaConvert, CloudWatch, EC2
- **IaC**: Terraform, CloudFormation
- **CDN / Edge**: Cloudflare Workers
- **Containerization**: Docker
- **CI/CD**: GitHub Actions, custom pipelines

### Databases & Messaging
- PostgreSQL, MySQL, DynamoDB, Redis, SQS, Qdrant (vector DB)

### Security & Auth
- Auth0, OAuth2, JWT

### Observability & Analytics
- Datadog, New Relic, Logentries, CloudWatch
- Omniture, Hotjar, Tealium

### AI / Agentic Tooling
- LangGraph (agentic workflow pipelines)
- LangChain, RAG (Retrieval-Augmented Generation)
- Qdrant (vector database)
- MCP (Model Context Protocol) server architecture
- Cursor AI (advanced agentic coding workflows)

---

## 💼 Work Experience

### Senior Software Engineer — SEEK
**September 2018 – Present · 7+ years · Malaysia**

SEEK is one of Asia-Pacific's largest employment marketplaces, serving millions of job seekers and employers.

**Key Contributions:**

- **User Profile Migration at Scale** — Leading the migration of 60+ million user profiles into a unified, modernised identity system. Involves deep coordination across services, data integrity at scale, and zero-downtime cutover strategies.

- **Frontend Architecture Revamp** — Led the full redesign of a legacy application, architecting a new ReactJS frontend hosted on AWS S3 + CloudFront for performance and global scalability.

- **Backend Microservices** — Designed and built REST APIs in Node.js/TypeScript, deployed as containerised microservices on AWS ECS (Fargate).

- **Serverless Pipelines** — Developed AWS Lambda functions for async workflows: scheduled tasks, third-party data sync, and event-driven processing.

- **Pub/Sub Data Synchronisation** — Implemented SNS + SQS + Lambda pattern to reliably sync data between legacy and new systems, ensuring consistency during the migration period.

- **Zero-Downtime Maintenance Page** — Built a dynamic downtime page (ReactJS) that activates automatically during maintenance windows using a Cloudflare Worker + CloudFront + S3 combination.

- **Monitoring & Alerting** — Set up CloudWatch dashboards and Datadog alerts for proactive issue detection. Improved system observability significantly.

- **CS Admin System** — Developed a C# .NET MVC backend admin system empowering customer support teams to handle daily operations efficiently.

- **CI/CD & DevOps** — Contributed to deployment pipeline improvements, reducing deployment friction and increasing release confidence.

---

### Software Engineer II — SEEK
**April 2016 – September 2018 · 2.5 years · Malaysia**

- Decoupled an existing monolith into microservices architecture
- Containerised services using Docker; established CI/CD workflows supporting an agile delivery culture
- Provisioned cloud infrastructure using Terraform and CloudFormation
- Integrated analytics tracking (Omniture, Hotjar, Tealium) across the platform
- Rolled out monitoring tooling (Datadog, New Relic, Logentries) for system health visibility
- **Stack**: Node.js, Laravel, .NET, AngularJS, ReactJS, Spring Boot, ELK

---

### Software Engineer — Sovereign Gateway Sdn Bhd
**January 2014 – April 2016 · 2+ years · Bandar Utama, Selangor, Malaysia**

- Developed mobile games using **Unity3D** and **Cocos2D** launched in the Chinese market, generating significant revenue for the company
- Revamped the company website and maintained backend services in C# .NET

---

### Application Developer — Techninier Sdn Bhd
**November 2012 – December 2013 · 1+ year · Bandar Utama, Selangor, Malaysia**

- Built online shopping and social networking platforms using PHP, HTML, jQuery, JavaScript, MSSQL
- Maintained and enhanced a mobile app for automotive listings (comparable to carlist.my) using Java and C# Monodroid
- Delivered custom business reports using SQL Server Reporting Services (SSRS)

---

### Trainee — Infosys (Foundational CS Programme)
**June 2012 – August 2012 · 3 months**

- Developed a Telephone Directory Maintenance System in C
- Built a Sterling Courier System using J2EE, jQuery, JSP, and HTML

---

## 🚀 Highlight Projects

### AI-Powered Sales Order Automation Bot
**WhatsApp + LangGraph + AutoCount ERP**

Reduced sales order processing time from ~8 minutes to under 60 seconds by building an end-to-end agentic AI pipeline:
- WhatsApp as the user interface for sales agents
- LangGraph orchestrating the AI reasoning and tool-calling workflow
- AutoCount ERP integrated via an AWS EC2 VPN proxy with nftables DNAT routing (bridging a cloud-native system to an on-premise ERP)
- Delivered as a production system currently in active use

**Impact**: ~87% reduction in order processing time; eliminated manual data entry errors.

---

### RAG-Powered WhatsApp Purchase Order Bot
**LangChain · LangGraph · OpenAI · RAG · Qdrant · PostgreSQL · DynamoDB · Python · WhatsApp API · Auth0**

Built a retrieval-augmented generation chatbot enabling suppliers and customers to submit and query purchase orders through WhatsApp, eliminating manual processing entirely:

- Users place orders via text messages and images directly in WhatsApp
- RAG-based architecture with OpenAI interprets user intent and generates structured purchase orders
- Qdrant vector database powers semantic retrieval of product catalogue and order history
- Orders are pushed seamlessly into the AutoCount ERP system
- Auth0 with OAuth2/JWT ensures only authorised users can access the system

---

### Serverless Social Media Ad Management Platform
**AWS Lambda · API Gateway · DynamoDB · SNS · SQS · MediaConvert · ReactJS · Auth0**

Designed and built a fully serverless AWS platform to automate the end-to-end lifecycle of Facebook and Instagram ad campaigns:

- AWS Lambda orchestrates video processing and end-to-end ad workflow automation
- API Gateway exposes RESTful endpoints for content uploads and analytics retrieval
- DynamoDB stores user data, ad configurations, and performance metrics
- SNS/SQS manages task queues and sends processing/deployment notifications
- MediaConvert transcodes uploaded videos into platform-specific formats
- Auth0 secures the platform with OAuth2/JWT access control

---

### 60M+ User Profile Migration (SEEK)
**Node.js + AWS + PostgreSQL + DynamoDB**

Ongoing large-scale migration of SEEK's user identity system:
- Dual-write strategy for zero data loss during cutover
- Pub/sub synchronisation between old and new systems (SNS + SQS + Lambda)
- Extensive monitoring and rollback instrumentation
- Coordinating across multiple engineering teams

---

### Downtime Page System (SEEK)
**ReactJS + Cloudflare Worker + AWS CloudFront + S3**

Designed a globally distributed maintenance page system that:
- Activates instantly via Cloudflare Worker edge logic
- Serves a branded, user-friendly page from S3/CloudFront during maintenance
- Bypasses the origin server entirely — zero backend dependency during downtime

---

## 🎓 Education

**Bachelor's Degree, Computer Software Engineering**
Universiti Malaysia Sabah · 2009 – 2012

---

## 📜 Certifications

- Basic to Advanced: Retrieval-Augmented Generation (RAG)
- LangGraph for Beginners: Agentic Workflows in Simple Steps
- Agile Fundamental

---

## 🌐 Languages

| Language | Level |
|---|---|
| Chinese (Mandarin) | Native / Bilingual |
| English | Professional Working |
| Malay | Professional Working |

---

## 🔭 What I'm Exploring Now

- **Agentic AI workflows** — building LangGraph sub-agents that run autonomously during off-hours via structured task rituals (`TASK.md`, `AGENT_LOG.md`)
- **MCP Server architecture** — custom NestJS-hosted MCP servers that expose internal tooling to AI agents
- **Staff Engineer track** — deepening technical leadership, cross-team architecture influence, and visibility beyond the immediate team (currently targeting Staff Engineer promotion within 6–12 months)
- **Context engineering** — applying structured context (CLAUDE.md, .cursorrules) to maximise AI coding tool output in a multi-repo NestJS/AWS environment

---

## 💬 A Note on Working Style

I approach engineering with a product mindset — I'm not just interested in writing code, but in understanding the system holistically: the data flows, the failure modes, the operational concerns, and the user impact. I've operated across solo features and large cross-functional migrations, and I'm most energised when working on problems that require both technical depth and architectural thinking.

I'm also deeply interested in how AI tooling is reshaping the software engineering craft — not as a novelty, but as a genuine multiplier for high-quality engineering output.

---

*Last updated: May 2026*
