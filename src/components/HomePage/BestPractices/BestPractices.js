import React, { useMemo, useState } from "react";
import {
  Award,
  BriefcaseBusiness,
  Building2,
  Cpu,
  GraduationCap,
  HeartHandshake,
  Laptop2,
  Target,
  Users,
  X,
} from "lucide-react";

import bestPracticesData from "./BestPracticesData.json";
import "./BestPractices.css";

const iconMap = {
  Award,
  BriefcaseBusiness,
  Building2,
  Cpu,
  GraduationCap,
  HeartHandshake,
  Laptop2,
  Target,
  Users,
};

const impactLabels = {
  activeMoUs: "Active MoUs",
  certificationPrograms: "Certification Programs",
  annualBeneficiaries: "Annual Beneficiaries",
  placementTarget: "Placement Target",
  employabilityImprovement: "Employability Improvement",
  internshipImplementation: "Internship Implementation",
};

const renderIcon = (iconName, size = 28) => {
  const Icon = iconMap[iconName] || Target;
  return <Icon size={size} strokeWidth={1.9} />;
};

const importImages = (context) =>
  context
    .keys()
    .sort((first, second) => first.localeCompare(second, undefined, { numeric: true }))
    .map(context);

const jobOpportunityImages = importImages(
  require.context(
    "../../../assets/Gallery/bestPractices/Job Opputunities",
    false,
    /\.(jpe?g)$/i
  )
);

const smartHostelImages = importImages(
  require.context(
    "../../../assets/Gallery/bestPractices/Smart Hostel",
    false,
    /\.(jpe?g)$/i
  )
);

const walkWithNatureImages = importImages(
  require.context(
    "../../../assets/Gallery/bestPractices/Walk with nature",
    false,
    /\.(jpe?g)$/i
  )
);

const practiceImageGroups = {
  "bp-01": {
    coverIndex: 0,
    gallery: jobOpportunityImages,
  },
  "bp-02": {
    coverIndex: 0,
    gallery: smartHostelImages,
  },
  "bp-03": {
    coverIndex: 4,
    gallery: smartHostelImages,
  },
  "bp-04": {
    coverIndex: 0,
    gallery: walkWithNatureImages,
  },
  "bp-05": {
    coverIndex: 8,
    gallery: jobOpportunityImages,
  },
};

const getPracticeImages = (practiceId) => {
  const imageGroup = practiceImageGroups[practiceId] || practiceImageGroups["bp-01"];
  const fallbackGallery = walkWithNatureImages.length
    ? walkWithNatureImages
    : smartHostelImages;
  const gallery = imageGroup.gallery.length ? imageGroup.gallery : fallbackGallery;
  const cover = gallery[imageGroup.coverIndex % gallery.length] || gallery[0];

  return {
    cover,
    gallery,
  };
};

const BestPractices = () => {
  const [selectedPractice, setSelectedPractice] = useState(null);

  const { institution, overview, institutionalImpact, bestPractices } =
    bestPracticesData;

  const impactStats = useMemo(
    () =>
      Object.entries(institutionalImpact || {}).map(([key, value]) => ({
        label: impactLabels[key] || key,
        value,
      })),
    [institutionalImpact]
  );

  return (
    <section className="best-practices-page">
      <div className="best-practices-hero">
        <div className="best-practices-hero-inner">
          <span className="best-practices-kicker">{institution.shortName}</span>
          <h1>{overview.title}</h1>
          <p>{overview.description}</p>

          <div className="hero-meta-row">
            <span>{institution.category}</span>
            <span>{institution.academicYears.join(" | ")}</span>
          </div>
        </div>
      </div>

      <div className="best-practices-content">
        <div className="overview-panel">
          <div>
            <span className="section-label">Theme</span>
            <h2>{institution.theme}</h2>
            <p>{overview.vision}</p>
          </div>

          <div className="focus-tags">
            {overview.focusAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>

        <div className="impact-grid">
          {impactStats.map((stat) => (
            <div className="impact-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="section-heading">
          <span className="section-label">Institutional Best Practices</span>
          <h2>Future-ready education through measurable campus initiatives</h2>
        </div>

        <div className="best-practices-grid">
          {bestPractices.map((practice) => {
            const practiceImages = getPracticeImages(practice.id);

            return (
              <article
                className="best-practice-card"
                key={practice.id}
                style={{ "--practice-color": practice.themeColor }}
              >
                <div className="practice-image-wrap">
                  <img
                    src={practiceImages.cover}
                    alt={practice.title}
                    className="practice-image"
                    loading="lazy"
                  />
                </div>

                <div className="card-body">
                  <div className="card-topline">
                    <div className="practice-icon">
                      {renderIcon(practice.icon, 30)}
                    </div>
                    <div>
                      <span>{practice.category}</span>
                      <h3>{practice.title}</h3>
                    </div>
                  </div>

                  <p>{practice.shortDescription}</p>

                  <div className="practice-stats">
                    {practice.statistics.map((stat) => (
                      <div key={`${practice.id}-${stat.label}`}>
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  {practice.technologies?.length > 0 && (
                    <div className="technology-tags">
                      {practice.technologies.slice(0, 4).map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  )}

                  <button
                    className="details-button"
                    type="button"
                    onClick={() => setSelectedPractice(practice)}
                  >
                    View Details
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="future-roadmap">
          <span className="section-label">Roadmap</span>
          <h2>{bestPracticesData.futureVision.title}</h2>
          <div className="roadmap-grid">
            {bestPracticesData.futureVision.goals.map((goal) => (
              <span key={goal}>{goal}</span>
            ))}
          </div>
        </div>
      </div>

      {selectedPractice && (
        <div
          className="practice-modal-backdrop"
          onClick={() => setSelectedPractice(null)}
        >
          <div
            className="practice-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="practice-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              aria-label="Close details"
              onClick={() => setSelectedPractice(null)}
            >
              <X size={20} />
            </button>

            <div className="modal-header">
              <div
                className="practice-icon"
                style={{ "--practice-color": selectedPractice.themeColor }}
              >
                {renderIcon(selectedPractice.icon, 32)}
              </div>
              <div>
                <span>{selectedPractice.academicYear}</span>
                <h2 id="practice-modal-title">{selectedPractice.title}</h2>
                <p>{selectedPractice.shortDescription}</p>
              </div>
            </div>

            <PracticeGallery
              title={selectedPractice.title}
              images={getPracticeImages(selectedPractice.id).gallery}
            />

            <div className="modal-sections">
              <PracticeList title="Objectives" items={selectedPractice.objectives} />
              <PracticeInitiatives items={selectedPractice.initiatives} />
              <PracticeList title="Outcomes" items={selectedPractice.outcomes} />
              <PracticeTags title="SDG Alignment" items={selectedPractice.sdgAlignment} />
              <PracticeTags title="Partners" items={selectedPractice.partners} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const PracticeGallery = ({ title, images }) => {
  if (!images?.length) {
    return null;
  }

  return (
    <div className="practice-gallery" aria-label={`${title} images`}>
      {images.map((image, index) => (
        <img
          src={image}
          alt={`${title} ${index + 1}`}
          key={image}
          loading="lazy"
        />
      ))}
    </div>
  );
};

const PracticeList = ({ title, items }) => {
  if (!items?.length) {
    return null;
  }

  return (
    <div className="modal-section">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const PracticeInitiatives = ({ items }) => {
  if (!items?.length) {
    return null;
  }

  return (
    <div className="modal-section modal-section-wide">
      <h3>Key Initiatives</h3>
      <div className="initiative-grid">
        {items.map((initiative) => (
          <div className="initiative-card" key={initiative.title}>
            <h4>{initiative.title}</h4>
            <p>{initiative.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const PracticeTags = ({ title, items }) => {
  if (!items?.length) {
    return null;
  }

  return (
    <div className="modal-section">
      <h3>{title}</h3>
      <div className="modal-tags">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default BestPractices;
