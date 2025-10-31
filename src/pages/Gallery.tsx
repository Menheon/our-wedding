import { useState } from "react";

// Import all your proposal photos
import chapelProposingKneeling from "../assets/images/chapel-proposing-kneeling.png";
import chapelSittingKissing from "../assets/images/chapel-sitting-kissing.png";
import chapelStandingHeadToHead from "../assets/images/chapel-standing-head-to-head.png";
import chapelStandingKissing from "../assets/images/chapel-standing-kissing.png";
import churchKissing from "../assets/images/church-kissing.png";
import dancingGrey from "../assets/images/dancing-grey.png";
import headToHeadCloseUpGrey from "../assets/images/head-to-head-close-up-grey.png";
import hillKissing from "../assets/images/hill-kissing.png";
import hillWalkingBacksTurned from "../assets/images/hill-walking-backs-turned.png";
import hillWalking from "../assets/images/hill-walking.png";
import huggingSmiling from "../assets/images/hugging-smiling.png";
import puttingRingCloseUp from "../assets/images/putting-ring-close-up.png";
import puttingRingGrey from "../assets/images/putting-ring-grey.png";
import ringCloseUp from "../assets/images/ring-close-up.png";
import sittingLookingOut from "../assets/images/sitting-looking-out.png";
import stairStanding from "../assets/images/stair-standing.png";
import streetsWalkingHoldingHands from "../assets/images/streets-walking-holding-hands.png";

interface Photo {
  id: string;
  src: string;
  alt: string;
  category: "proposal" | "engagement" | "lifestyle";
  isGrayscale?: boolean;
}

const photos: Photo[] = [
  {
    id: "chapel-proposing",
    src: chapelProposingKneeling,
    alt: "The magical moment - Kasper proposing at the chapel",
    category: "proposal",
  },
  {
    id: "putting-ring",
    src: puttingRingCloseUp,
    alt: "Putting on the engagement ring",
    category: "proposal",
  },
  {
    id: "ring-close-up",
    src: ringCloseUp,
    alt: "Beautiful engagement ring close-up",
    category: "proposal",
  },
  {
    id: "chapel-sitting-kissing",
    src: chapelSittingKissing,
    alt: "Romantic kiss at the chapel",
    category: "engagement",
  },
  {
    id: "chapel-standing-kissing",
    src: chapelStandingKissing,
    alt: "Celebrating our engagement",
    category: "engagement",
  },
  {
    id: "chapel-head-to-head",
    src: chapelStandingHeadToHead,
    alt: "Intimate moment together",
    category: "engagement",
  },
  {
    id: "church-kissing",
    src: churchKissing,
    alt: "Kiss at the beautiful church",
    category: "engagement",
  },
  {
    id: "hill-kissing",
    src: hillKissing,
    alt: "Romantic kiss on the hill",
    category: "engagement",
  },
  {
    id: "hugging-smiling",
    src: huggingSmiling,
    alt: "Pure joy and happiness",
    category: "engagement",
  },
  {
    id: "stair-standing",
    src: stairStanding,
    alt: "Elegant couple portrait",
    category: "engagement",
  },
  {
    id: "hill-walking",
    src: hillWalking,
    alt: "Walking together into our future",
    category: "lifestyle",
  },
  {
    id: "hill-backs-turned",
    src: hillWalkingBacksTurned,
    alt: "Walking hand in hand",
    category: "lifestyle",
  },
  {
    id: "streets-walking",
    src: streetsWalkingHoldingHands,
    alt: "Strolling through the streets together",
    category: "lifestyle",
  },
  {
    id: "sitting-looking-out",
    src: sittingLookingOut,
    alt: "Peaceful moment together",
    category: "lifestyle",
  },
  // Grayscale artistic shots
  {
    id: "dancing-grey",
    src: dancingGrey,
    alt: "Dancing together (artistic)",
    category: "engagement",
    isGrayscale: true,
  },
  {
    id: "head-to-head-grey",
    src: headToHeadCloseUpGrey,
    alt: "Intimate close-up (artistic)",
    category: "engagement",
    isGrayscale: true,
  },
  {
    id: "putting-ring-grey",
    src: puttingRingGrey,
    alt: "Ring moment (artistic)",
    category: "proposal",
    isGrayscale: true,
  },
];

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "proposal" | "engagement" | "lifestyle"
  >("all");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const filteredPhotos =
    selectedCategory === "all"
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-cream via-blush-50 to-sage-50 py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <div className="inline-block mb-6">
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-terracotta-400 to-transparent"></div>
        </div>
        <h1 className="text-6xl font-serif font-light text-wedding-navy mb-6">
          Our Gallery
        </h1>
        <p className="text-2xl text-sage-700 font-light max-w-3xl mx-auto mb-8">
          Capturing the magical moments of our proposal and engagement
        </p>
        <p className="text-lg text-terracotta-500 italic font-script">
          "Every picture tells our love story"
        </p>
      </div>

      {/* Filter Categories */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {(["all", "proposal", "engagement", "lifestyle"] as const).map(
            (category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-wedding-navy to-sage-600 text-white shadow-lg"
                    : "bg-wedding-cream/80 text-wedding-navy hover:bg-terracotta-100 border border-sage-200"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            )
          )}
        </div>
      </div>

      {/* Photo Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                    photo.isGrayscale ? "grayscale hover:grayscale-0" : ""
                  }`}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-wedding-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium text-sm leading-tight">
                    {photo.alt}
                  </p>
                  {photo.isGrayscale && (
                    <span className="inline-block mt-2 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">
                      Artistic
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-white text-lg font-medium bg-black/50 backdrop-blur-sm rounded-lg p-4">
                {selectedPhoto.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
