// @/components/Projects.jsx
import React from 'react';
import logo from '../assets/solaris-512x512.png';
import aredLogo from '../assets/ared/logo.png';
import partnerBrand from '../assets/ared/partnerBrand.png';
import adminBrand from '../assets/ared/adminBrand.png';
import smeBrand from '../assets/ared/smeBrand.png';
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';

const projects = [
  {
    logo,
    title: 'Solaris Conexus',
    subtitle: 'Blockchain-Powered Solar Trading Platform',
    description: (
      <>
        <strong>Solaris Conexus</strong> is a full-stack decentralized energy
        trading platform that enables solar producers and consumers to exchange
        energy through a tokenized system using <strong>PowerTokens</strong>{' '}
        (SCT). The system combines IoT, blockchain, and modern cloud services to
        create a smart, autonomous energy grid.
      </>
    ),
    features: [
      {
        label: 'Smart Contracts (Starknet/Cairo)',
        detail:
          'Handles minting, transfers, trading of PowerTokens, and decentralized trade requests',
      },
      {
        label: 'Real-time IoT Integration',
        detail:
          'Arduino-based devices monitor power usage and stream data via MQTT to a backend database',
      },
      {
        label: 'FastAPI Backend',
        detail:
          'Manages device registration, power metrics, token balances, and trade history',
      },
      {
        label: 'Next.js Frontend',
        detail:
          'Provides users with a sleek interface to view balances, initiate trades, and connect via Braavos wallet',
      },
      {
        label: 'MPESA Integration (Daraja API)',
        detail:
          'Allows users to top-up or withdraw funds directly using mobile money, streamlining participation',
      },
      {
        label: "SMS Notifications (Africa's Talking)",
        detail:
          'Sends real-time alerts for trades, device issues, and account activity to user phones',
      },
      {
        label: 'Email Integration (Nylas)',
        detail:
          'Sends automated email receipts and confirmations with rich formatting and delivery tracking',
      },
    ],
    links: [
      {
        href: 'https://solaris-connexus.vercel.app',
        label: 'Live Demo',
        icon: <BiLinkExternal />,
        primary: true,
      },
      {
        href: 'https://github.com/trevor-gituru/solaris_conexus.git',
        label: 'View Code',
        icon: <FaGithub />,
        primary: false,
      },
      {
        href: 'https://sepolia.voyager.online/contract/0x0696e1ba36b1b46ccfda4a6ae963b12c932e36d1a1008d5d0a03033b12d86827',
        label: 'View SCT on Voyager',
        icon: <BiLinkExternal />,
        primary: false,
      },
    ],
  },
  {
    logo: aredLogo,
    title: 'ARED API',
    subtitle: 'Production Django REST API',
    description: (
      <>
        Contributed to the development and maintenance of ARED Group's
        production backend platform using <strong>Django</strong> and{' '}
        <strong>Django REST Framework</strong>. The API powers the ARED Admin
        Portal, Partner Dashboard, SME Dashboard, and edge devices.
      </>
    ),
    features: [
      {
        label: 'Secure Authentication & Authorization',
        detail: 'JWT and 2FA support across all portals and edge devices',
      },
      {
        label: 'Billing, Subscriptions, SMEs & Partner Management',
        detail:
          'Full lifecycle management of business entities and their billing workflows',
      },
      {
        label: 'Edge Box Communication',
        detail: 'Real-time communication and command dispatch to edge hardware',
      },
      {
        label: 'Media Synchronization',
        detail: 'Automated sync of media content to edge devices',
      },
      {
        label: 'Voucher Distribution',
        detail: 'Voucher generation, assignment, and redemption workflows',
      },
      {
        label: 'Device Health Monitoring & Telemetry',
        detail: 'Continuous device status reporting and telemetry ingestion',
      },
      {
        label: 'Addon Installation & Device Provisioning',
        detail: 'Remote addon management and zero-touch device onboarding',
      },
      {
        label: 'Swagger/OpenAPI Documentation',
        detail: 'Auto-generated interactive API documentation',
      },
      {
        label: 'Celery & Redis Background Tasks',
        detail: 'Async task processing for heavy operations and scheduled jobs',
      },
      {
        label: 'Database Migrations & Transactional Workflows',
        detail: 'Safe schema evolution and atomic multi-step operations',
      },
    ],
    links: [
      {
        href: 'https://api.shirikihub.com/',
        label: 'Live Demo',
        icon: <BiLinkExternal />,
        primary: true,
      },
      {
        href: 'https://api.shirikihub.com/swagger/',
        label: 'API Docs',
        icon: <BiLinkExternal />,
        primary: false,
      },
    ],
  },
  {
    logo: partnerBrand,
    title: 'ARED Partner Dashboard',
    subtitle: 'Production Vue.js Partner Portal',
    description: (
      <>
        Production dashboard enabling partners to manage SMEs, subscriptions,
        billing, users, analytics and business operations across the ARED
        platform.
      </>
    ),
    features: [
      {
        label: 'SME Management',
        detail: 'Full lifecycle management of SME accounts and configurations',
      },
      {
        label: 'Billing',
        detail: 'Invoice tracking, payment processing, and billing history',
      },
      {
        label: 'Subscription Management',
        detail: 'Plan assignment, upgrades, and renewals for SMEs',
      },
      {
        label: 'Analytics',
        detail: 'Business performance metrics and usage insights',
      },
      {
        label: 'User Management',
        detail: 'Partner staff accounts, roles, and access control',
      },
      {
        label: 'Responsive UI',
        detail: 'Optimized for desktop and mobile use',
      },
      {
        label: 'Chatbot Integration',
        detail:
          'Integrate AI-powered chatbots to automate support and user interactions',
      },
      {
        label: 'REST API Integration',
        detail: 'Fully integrated with the ARED production API',
      },
    ],
    links: [
      {
        href: 'https://partner.shirikihub.com/',
        label: 'Live Demo',
        icon: <BiLinkExternal />,
        primary: true,
      },
    ],
  },
  {
    logo: adminBrand,
    title: 'ARED Admin Portal',
    subtitle: 'Production Vue.js Administration Portal',
    description: (
      <>
        Administrative platform used for platform administration, gateway
        management, user management and system operations across the entire ARED
        infrastructure.
      </>
    ),
    features: [
      {
        label: 'Gateway Management',
        detail:
          'Register, configure, and monitor edge gateways across all locations',
      },
      {
        label: 'Partner Management',
        detail:
          'Manage partner accounts, onboarding, status, and platform access',
      },
      {
        label: 'User Management',
        detail: 'Create and manage user accounts across the platform',
      },
      {
        label: 'Role Management',
        detail: 'Granular role and permission assignment for platform users',
      },
      {
        label: 'Platform Administration',
        detail: 'System-wide settings, feature flags, and operational controls',
      },
      {
        label: 'Authentication',
        detail: 'Secure login with JWT and 2FA enforcement',
      },
      {
        label: 'Vue.js Frontend',
        detail: 'Reactive admin interface built with Vue 3',
      },
      {
        label: 'API Integration',
        detail: 'Deeply integrated with the ARED REST API for all operations',
      },
    ],
    links: [
      {
        href: 'https://admin.shirikihub.com/',
        label: 'Live Demo',
        icon: <BiLinkExternal />,
        primary: true,
      },
    ],
  },
  {
    logo: smeBrand,
    title: 'ARED SME Dashboard',
    subtitle: 'Production Vue.js SME Portal',
    description: (
      <>
        Self-service portal allowing SMEs to manage subscriptions, billing,
        captive portals, routers and analytics independently within the ARED
        ecosystem.
      </>
    ),
    features: [
      {
        label: 'Billing',
        detail:
          'View invoices, payment history, and manage outstanding balances',
      },
      {
        label: 'Subscriptions',
        detail: 'Manage active plans, upgrade or downgrade subscription tiers',
      },
      {
        label: 'Router Management',
        detail: 'Configure and monitor routers assigned to the SME',
      },
      {
        label: 'Captive Portal',
        detail:
          'Customize and manage the SME captive portal experience for end users',
      },
      {
        label: 'Analytics',
        detail:
          'Usage metrics, session data, and business performance insights',
      },
      {
        label: 'Voucher Management',
        detail: 'Generate, distribute, and track vouchers for internet access',
      },
      {
        label: 'Content Management',
        detail: 'Manage adverts and offline files available for edge gateways',
      },
      {
        label: 'Chatbot Integration',
        detail:
          'Integrate AI-powered chatbots to automate support and user interactions',
      },
      {
        label: 'REST API Integration',
        detail: 'Connected to the ARED production API for real-time data',
      },
    ],
    links: [
      {
        href: 'https://shirikihub.com/',
        label: 'Live Demo',
        icon: <BiLinkExternal />,
        primary: true,
      },
    ],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-16 bg-base2 text-body"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="pb-10" data-aos="fade-up">
          <h6 className="text-brand text-sm font-semibold uppercase">
            Projects
          </h6>
          <h1 className="text-4xl font-bold mt-2 text-heading">
            My Work Showcase
          </h1>
          <p className="mt-4 text-brand max-w-2xl">
            A collection of production and personal projects I've built and
            contributed to. More exciting projects are on the way!
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-base p-6 rounded-xl shadow-md hover:shadow-[0_0_20px_#e0f780] transition-all duration-300 ease-in-out"
              data-aos="fade-up"
              data-aos-delay={index === 0 ? 300 : index * 150}
            >
              {/* Logo and Title */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={project.logo}
                  alt={`${project.title} Logo`}
                  className="w-14 h-14 rounded-xl object-cover"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-heading">
                    {project.title}
                  </h3>
                  <p className="text-sm text-brand font-medium">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Key Features */}
              <ul className="list-disc list-inside space-y-1 text-sm mb-4">
                {project.features.map((feature) => (
                  <li key={feature.label}>
                    <strong>{feature.label}:</strong> {feature.detail}
                  </li>
                ))}
              </ul>

              {/* Action Links */}
              <div className="flex flex-wrap gap-4 items-center mt-6">
                {project.links.map((link) =>
                  link.primary ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2
                      bg-brand text-base2 text-sm font-semibold rounded-md
                      hover:bg-brand2 transition"
                    >
                      {link.label} {link.icon}
                    </a>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-brand text-brand text-sm font-semibold rounded-md hover:bg-base hover:shadow-md transition"
                    >
                      {link.label} {link.icon}
                    </a>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
