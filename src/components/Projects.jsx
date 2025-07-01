// @/components/Projects.jsx
import React from 'react';
import logo from '../assets/solaris-512x512.png';
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';

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
            This is a featured project I've worked on. More exciting projects are on the way!
          </p>
        </div>


{/* Project Card */}
<div
  className="bg-base p-6 rounded-xl shadow-md hover:shadow-[0_0_20px_#e0f780] transition-all duration-300 ease-in-out"
  data-aos="fade-up"
  data-aos-delay="300"
>
  {/* Logo and Title */}
  <div className="flex items-center gap-4 mb-4">
    <img
      src={logo}
      alt="Solar Conexus Logo"
      className="w-14 h-14 rounded-xl object-cover"
    />
    <div>
      <h3 className="text-2xl font-semibold text-heading">
        Solaris Conexus
      </h3>
      <p className="text-sm text-brand font-medium">
        Blockchain-Powered Solar Trading Platform
      </p>
    </div>
  </div>

  {/* Description */}
  <p className="text-sm leading-relaxed mb-4">
    <strong>Solaris Conexus</strong> is a full-stack decentralized energy trading platform that enables solar producers and consumers to exchange energy through a tokenized system using <strong>PowerTokens</strong> (SCT). The system combines IoT, blockchain, and modern cloud services to create a smart, autonomous energy grid.
  </p>

  {/* Key Features */}
  <ul className="list-disc list-inside space-y-1 text-sm mb-4">
    <li><strong>Smart Contracts (Starknet/Cairo):</strong> Handles minting, transfers, trading of PowerTokens, and decentralized trade requests</li>
    <li><strong>Real-time IoT Integration:</strong> Arduino-based devices monitor power usage and stream data via MQTT to a backend database</li>
    <li><strong>FastAPI Backend:</strong> Manages device registration, power metrics, token balances, and trade history</li>
    <li><strong>Next.js Frontend:</strong> Provides users with a sleek interface to view balances, initiate trades, and connect via Braavos wallet</li>
    <li><strong>MPESA Integration (Daraja API):</strong> Allows users to top-up or withdraw funds directly using mobile money, streamlining participation</li>
    <li><strong>SMS Notifications (Africa's Talking):</strong> Sends real-time alerts for trades, device issues, and account activity to user phones</li>
    <li><strong>Email Integration (Nylas):</strong> Sends automated email receipts and confirmations with rich formatting and delivery tracking</li>
  </ul>

  {/* Action Links */}
  <div className="flex flex-wrap gap-4 items-center mt-6">
    <a
      href="https://solaris.razaoul.xyz"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 bg-brand text-base2 text-sm font-semibold rounded-md hover:bg-brand2 transition"
    >
      Live Demo <BiLinkExternal />
    </a>
    <a
      href="https://github.com/trevor-gituru/solaris_conexus.git"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 border border-brand text-brand text-sm font-semibold rounded-md hover:bg-base hover:shadow-md transition"
    >
      View Code <FaGithub />
    </a>
    <a
      href="https://sepolia.voyager.online/contract/0x0696e1ba36b1b46ccfda4a6ae963b12c932e36d1a1008d5d0a03033b12d86827"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 border border-brand text-brand text-sm font-semibold rounded-md hover:bg-base hover:shadow-md transition"
    >
      View SCT on Voyager <BiLinkExternal />
    </a>
  </div>
</div>
      </div>
    </section>
  );
};

export default Projects;
