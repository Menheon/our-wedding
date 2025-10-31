import { Link } from "@tanstack/react-router";
import ChapelSittingImg from "../assets/images/chapel-sitting.png";
import { useCountdown } from "../hooks/useCountdown";

export const Home = () => {
  const weddingDate = new Date("2026-05-30T14:00:00+02:00");
  const address = "Topkær Fest • Topkærvej 13, 8200 Århus N";
  const timeRemaining = useCountdown(weddingDate);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-wedding-cream via-blush-100 to-sage-100"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sage-300/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-terracotta-300/40 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-blush-200/30 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-wedding-navy/40 via-transparent to-wedding-navy/20"></div>
        <img
          src={ChapelSittingImg}
          alt="Chapel Sitting"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10 text-center px-6 pb-6 max-w-5xl mx-auto">
          {/* Elegant Title */}
          <div className="my-8">
            <h1 className="font-windsong font-bold text-7xl md:text-9xl font-light text-white mb-4 tracking-wide drop-shadow-2xl">
              Lylian
              <span className="block text-5xl md:text-7xl font-normal italic opacity-90 mt-2">
                &
              </span>
              <span className="block">Kasper</span>
            </h1>
            <div className="inline-block mt-4">
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </div>
          </div>

          <p className="text-2xl md:text-3xl text-white/95 mb-12 font-light tracking-wide drop-shadow-lg">
            We're getting married!
          </p>

          {/* Elegant Info Card */}
          <div className="bg-wedding-cream/20 backdrop-blur-lg border border-sage-200/30 rounded-2xl p-8 mb-12 shadow-2xl">
            <p className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
              {weddingDate.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                day: "numeric",
                month: "long",
              })}
            </p>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              {address}
            </p>
          </div>

          {/* CTA Button */}
          <Link
            to="/our-wedding/rsvp"
            className="inline-block bg-gradient-to-r from-wedding-navy to-terracotta-500 hover:from-navy-900 hover:to-terracotta-600 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-terracotta-500/25 hover:scale-105 transform"
          >
            RSVP Now ✨
          </Link>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-24 px-6 bg-wedding-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-serif font-light text-center text-wedding-navy mb-16">
            Wedding Details
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-sage-200">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                💍
              </div>
              <h3 className="text-2xl font-serif font-semibold text-wedding-navy mb-4">
                Ceremony
              </h3>
              <div className="space-y-2">
                <p className="text-terracotta-600 font-semibold text-lg">
                  2:00 PM
                </p>
                <p className="text-sage-600">Topkær Forest</p>
                <p className="text-sm text-wedding-navy/70 mt-4">
                  Join us as we exchange vows surrounded by nature's beauty
                </p>
              </div>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-sage-200">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🥂
              </div>
              <h3 className="text-2xl font-serif font-semibold text-wedding-navy mb-4">
                Reception
              </h3>
              <div className="space-y-2">
                <p className="text-terracotta-600 font-semibold text-lg">
                  3:00 PM
                </p>
                <p className="text-sage-600">Main Cottage</p>
                <p className="text-sm text-wedding-navy/70 mt-4">
                  Celebrate with dinner, dancing, and unforgettable moments
                </p>
              </div>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-sage-200">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🏨
              </div>
              <h3 className="text-2xl font-serif font-semibold text-wedding-navy mb-4">
                Accommodation
              </h3>
              <p className="text-sage-600">
                Four Points Flex by Sheraton Aarhus Skejby
              </p>
              <p className="text-sage-600">Group Rate Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-24 bg-gradient-to-r from-sage-100 via-blush-100 to-terracotta-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 left-10 w-32 h-32 bg-sage-300 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-terracotta-300 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-5xl font-serif font-light text-wedding-navy mb-6">
            Counting Down to Our Big Day
          </h2>
          <p className="text-xl text-sage-600 mb-16 font-light">
            Every second brings us closer to forever
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-wedding-cream/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-sage-200 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-serif font-bold bg-gradient-to-r from-wedding-navy to-terracotta-500 bg-clip-text text-transparent mb-2">
                {timeRemaining.days}
              </div>
              <div className="text-sage-600 font-medium tracking-wide uppercase text-sm">
                Days
              </div>
            </div>
            <div className="bg-wedding-cream/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-sage-200 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-serif font-bold bg-gradient-to-r from-wedding-navy to-terracotta-500 bg-clip-text text-transparent mb-2">
                {timeRemaining.hours}
              </div>
              <div className="text-sage-600 font-medium tracking-wide uppercase text-sm">
                Hours
              </div>
            </div>
            <div className="bg-wedding-cream/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-sage-200 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-serif font-bold bg-gradient-to-r from-wedding-navy to-terracotta-500 bg-clip-text text-transparent mb-2">
                {timeRemaining.minutes}
              </div>
              <div className="text-sage-600 font-medium tracking-wide uppercase text-sm">
                Minutes
              </div>
            </div>
            <div className="bg-wedding-cream/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-sage-200 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-serif font-bold bg-gradient-to-r from-wedding-navy to-terracotta-500 bg-clip-text text-transparent mb-2">
                {timeRemaining.seconds}
              </div>
              <div className="text-sage-600 font-medium tracking-wide uppercase text-sm">
                Seconds
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Love Story Preview */}
      <section className="py-24 px-6 bg-wedding-cream">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-block">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-terracotta-400 to-transparent mb-6"></div>
            </div>
            <h2 className="text-5xl font-serif font-light text-wedding-navy mb-6">
              Our Love Story
            </h2>
            <div className="inline-block">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-terracotta-400 to-transparent"></div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl text-sage-700 leading-relaxed font-light">
              From our first bowling date to saying "yes" to forever, our
              journey has been filled with laughter, adventure, and endless
              love.
            </p>
            <p className="text-2xl text-terracotta-500 mt-4 italic font-script">
              "Two hearts, one story, countless memories yet to be made..."
            </p>
          </div>

          <Link
            to="/our-wedding/our-story"
            className="inline-flex items-center bg-gradient-to-r from-wedding-navy to-sage-600 hover:from-navy-900 hover:to-sage-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-sage-500/25 hover:scale-105 transform group"
          >
            Read Our Story
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};
