import React, { useState } from "react";
import {
  Briefcase,
  Building2,
  BrainCircuit,
  Hotel,
  GraduationCap,
  Trees,
  Users,
  Scale,
  Rocket,
  Globe2,
} from "lucide-react";

import "./BestPractices.css";

const BestPractices = () => {
  const [selectedPractice, setSelectedPractice] = useState(null);

  const practices = [
    {
      id: 1,
      icon: <Briefcase size={28} />,
      title: "AI-Enabled Career Intelligence Ecosystem",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      description:
        "A centralized employability platform providing AI-driven career guidance, internships, jobs, apprenticeships, and certification opportunities for students and unemployed youth.",
      highlights: [
        "Opportunity Horizon Initiative",
        "AI-driven Career Guidance",
        "Digital Employability Platform",
      ],
    },

    {
      id: 2,
      icon: <Building2 size={28} />,
      title: "Industry & MSME Integrated Skilling",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      description:
        "45+ MoUs with industries, MSMEs, and organizations including NASSCOM, EXCELR, and NIRMAAN for industry-integrated skilling and entrepreneurship.",
      highlights: [
        "Industry Collaborations",
        "MSME Integration",
        "Entrepreneurship Support",
      ],
    },

    {
      id: 3,
      icon: <BrainCircuit size={28} />,
      title: "Certification-Driven Emerging Technologies",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      description:
        "Certification programs in Generative AI, AWS, IoT, Cyber Security, and Entrepreneurial Skills preparing students for Industry 5.0.",
      highlights: [
        "Generative AI",
        "AWS & Cloud",
        "Cyber Security",
      ],
    },

    {
      id: 4,
      icon: <Hotel size={28} />,
      title: "AI-Enabled Smart Hostel Management",
      image:
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5",
      description:
        "Developed by B.Tech IT students for smart hostel automation, grievance handling, and resource management using Artificial Intelligence.",
      highlights: [
        "AI Automation",
        "Smart Monitoring",
        "Digital Grievance System",
      ],
    },

    {
      id: 5,
      icon: <GraduationCap size={28} />,
      title: "Experiential Learning & Campus Internships",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      description:
        "Students participate in real-time campus infrastructure, maintenance, and technology projects for practical learning experience.",
      highlights: [
        "Hands-on Learning",
        "Campus Projects",
        "Practical Exposure",
      ],
    },

    {
      id: 6,
      icon: <Trees size={28} />,
      title: "Walk with Nature Initiative",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      description:
        "Weekly health and wellness initiative promoting physical fitness, environmental sustainability, and mental well-being.",
      highlights: [
        "Health & Wellness",
        "Green Campus",
        "Mental Well-being",
      ],
    },

    {
      id: 7,
      icon: <Users size={28} />,
      title: "Community Outreach & Vidyanjali",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
      description:
        "Community engagement initiatives including digital literacy, school volunteering, awareness programs, and SDG-oriented outreach.",
      highlights: [
        "Digital Literacy",
        "School Volunteering",
        "SDG Outreach",
      ],
    },

    {
      id: 8,
      icon: <Scale size={28} />,
      title: "AI, Technology & Law Programme",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
      description:
        "Interdisciplinary PG certification integrating Artificial Intelligence, emerging technologies, ethics, and legal frameworks.",
      highlights: [
        "AI & Ethics",
        "Technology Law",
        "Future-ready Curriculum",
      ],
    },

    {
      id: 9,
      icon: <Rocket size={28} />,
      title: "Innovation & Startup Ecosystem",
      image:
        "https://images.unsplash.com/photo-1516321165247-4aa89a48be28",
      description:
        "Hackathons, startup incubation, innovation challenges, and entrepreneurship development programs for student innovators.",
      highlights: [
        "Hackathons",
        "Startup Support",
        "Innovation Culture",
      ],
    },

    {
      id: 10,
      icon: <Globe2 size={28} />,
      title: "Global Academic Collaborations",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216",
      description:
        "National and international collaborations strengthening research, internships, industry projects, and academic excellence.",
      highlights: [
        "International MoUs",
        "Research Collaboration",
        "Global Exposure",
      ],
    },
  ];

  return (
    <div className="bp-container">
      {/* HERO SECTION */}
      <div className="bp-hero">
        <div className="bp-overlay"></div>

        <div className="bp-hero-content">
          <span className="bp-badge">
            JNTU-GV • Best Practices 2025-26
          </span>

          <h1>
            Innovation Driven <span>University Ecosystem</span>
          </h1>

          <p>
            Empowering students through employability, sustainability,
            innovation, entrepreneurship, and community engagement.
          </p>
        </div>
      </div>

      {/* SECTION TITLE */}
      <div className="bp-section-header">
        <h2>Institutional Best Practices</h2>

        <p>
          Building a future-ready university aligned with SDGs,
          Industry 5.0, Innovation, and Inclusive Education.
        </p>
      </div>

      {/* GRID */}
      <div className="bp-grid">
        {practices.map((practice) => (
          <div
            className="bp-card"
            key={practice.id}
            onClick={() => setSelectedPractice(practice)}
          >
            <div className="bp-image-wrapper">
              <img
                src={practice.image}
                alt={practice.title}
                className="bp-image"
              />

              <div className="bp-icon">
                {practice.icon}
              </div>
            </div>

            <div className="bp-card-content">
              <span className="bp-number">
                0{practice.id}
              </span>

              <h3>{practice.title}</h3>

              <p>{practice.description}</p>

              <div className="bp-tags">
                {practice.highlights.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>

              <button className="bp-button">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedPractice && (
        <div
          className="bp-modal-overlay"
          onClick={() => setSelectedPractice(null)}
        >
          <div
            className="bp-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPractice.image}
              alt={selectedPractice.title}
            />

            <div className="bp-modal-content">
              <h2>{selectedPractice.title}</h2>

              <p>{selectedPractice.description}</p>

              <div className="bp-modal-tags">
                {selectedPractice.highlights.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>

              <button
                className="bp-close-btn"
                onClick={() => setSelectedPractice(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BestPractices;