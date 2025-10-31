import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import ChapelProposingImg from "../assets/images/chapel-proposing-kneeling.png";
import HillWalkingImg from "../assets/images/hill-walking.png";
import HuggingSmilingImg from "../assets/images/hugging-smiling.png";
import RingCloseUpImg from "../assets/images/ring-close-up.png";
import DancingGreyImg from "../assets/images/dancing-grey.png";
import { useCountdown } from "../hooks/useCountdown";

export const Home = () => {
  const weddingDate = new Date("2026-05-30T14:00:00+02:00");
  const address = "Topkær Fest • Topkærvej 13, 8200 Århus N";
  const timeRemaining = useCountdown(weddingDate);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          src={ChapelProposingImg}
          alt="Chapel Sitting"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />

        <div className="relative z-10 text-center px-6 pb-6 max-w-5xl mx-auto">
          {/* Elegant Title */}
          <div className="my-8">
            <h1 className="font-script text-7xl md:text-9xl font-light text-white mb-4 tracking-wide drop-shadow-2xl">
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
          <div className="bg-gradient-to-br from-wedding-cream/30 to-terracotta-100/30 backdrop-blur-lg border border-terracotta-200/40 rounded-2xl p-8 mb-12 shadow-2xl">
            <p className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4 drop-shadow-lg">
              {weddingDate.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                day: "numeric",
                month: "long",
              })}
            </p>
            <p className="text-xl md:text-2xl text-white/95 font-light drop-shadow-md">
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
      <section className="py-24 px-6 bg-gradient-to-br from-wedding-cream via-terracotta-50 to-blush-100 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-12 left-12 text-8xl text-terracotta-400 animate-pulse">
            🌺
          </div>
          <div className="absolute top-32 right-16 text-6xl text-sage-400 animate-bounce delay-1000">
            🌿
          </div>
          <div className="absolute bottom-24 left-20 text-7xl text-blush-400 animate-pulse delay-2000">
            🌸
          </div>
          <div className="absolute bottom-12 right-12 text-5xl text-wedding-navy animate-bounce delay-3000">
            💐
          </div>
          <div className="absolute top-1/2 left-8 text-4xl text-terracotta-300 animate-pulse delay-4000">
            🦋
          </div>
          <div className="absolute top-1/3 right-8 text-3xl text-sage-300 animate-bounce delay-5000">
            ✨
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 relative">
              <div className="w-32 h-0.5 bg-gradient-to-r from-terracotta-200 via-terracotta-500 to-terracotta-200"></div>
              <div className="absolute -left-6 -top-1 text-xs text-terracotta-400">
                ❋
              </div>
              <div className="absolute -right-6 -top-1 text-xs text-terracotta-400">
                ❋
              </div>
            </div>
            <h2 className="text-5xl font-serif font-light text-wedding-navy mb-4 relative">
              Wedding Details
              <div className="absolute -top-4 -left-8 text-2xl text-terracotta-300/60 animate-pulse">
                🌹
              </div>
              <div className="absolute -top-4 -right-8 text-2xl text-sage-300/60 animate-pulse delay-1000">
                🌿
              </div>
            </h2>
            <div className="inline-block relative">
              <div className="w-32 h-0.5 bg-gradient-to-r from-terracotta-200 via-terracotta-500 to-terracotta-200"></div>
              <div className="absolute -left-6 -top-1 text-xs text-terracotta-400">
                ❋
              </div>
              <div className="absolute -right-6 -top-1 text-xs text-terracotta-400">
                ❋
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="group bg-gradient-to-br from-white to-terracotta-50 backdrop-blur-sm rounded-2xl shadow-xl p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-terracotta-200 hover:border-terracotta-300 relative overflow-hidden">
              {/* Card decorative elements */}
              <div className="absolute top-2 right-2 text-xs text-terracotta-200/50 animate-pulse">
                ✨
              </div>
              <div className="absolute bottom-2 left-2 text-xs text-terracotta-200/30">
                🌸
              </div>

              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                💍
                <div className="absolute -top-2 -right-2 text-lg text-terracotta-300/40 animate-bounce">
                  ✦
                </div>
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
            <div className="group bg-gradient-to-br from-white to-sage-50 backdrop-blur-sm rounded-2xl shadow-xl p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-sage-200 hover:border-sage-300 relative overflow-hidden">
              {/* Card decorative elements */}
              <div className="absolute top-2 right-2 text-xs text-sage-200/50 animate-pulse delay-1000">
                ✨
              </div>
              <div className="absolute bottom-2 left-2 text-xs text-sage-200/30">
                🌿
              </div>

              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                🥂
                <div className="absolute -top-2 -right-2 text-lg text-sage-300/40 animate-bounce delay-500">
                  ✦
                </div>
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
            <div className="group bg-gradient-to-br from-white to-blush-50 backdrop-blur-sm rounded-2xl shadow-xl p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-blush-200 hover:border-blush-300 relative overflow-hidden">
              {/* Card decorative elements */}
              <div className="absolute top-2 right-2 text-xs text-blush-200/50 animate-pulse delay-2000">
                ✨
              </div>
              <div className="absolute bottom-2 left-2 text-xs text-blush-200/30">
                🌸
              </div>

              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                🏨
                <div className="absolute -top-2 -right-2 text-lg text-blush-300/40 animate-bounce delay-1500">
                  ✦
                </div>
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
        {/* Enhanced Background decoration */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 left-10 w-32 h-32 bg-sage-300 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-terracotta-300 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-20 w-24 h-24 bg-blush-300 rounded-full blur-lg animate-pulse delay-2000"></div>
          <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-wedding-navy rounded-full blur-xl animate-pulse delay-3000"></div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-16 left-1/4 text-4xl text-terracotta-400 animate-bounce">
            ⏰
          </div>
          <div className="absolute top-20 right-1/4 text-3xl text-sage-400 animate-pulse delay-1000">
            ⭐
          </div>
          <div className="absolute bottom-16 left-1/3 text-2xl text-blush-400 animate-bounce delay-2000">
            💕
          </div>
          <div className="absolute bottom-20 right-1/3 text-3xl text-wedding-navy animate-pulse delay-3000">
            ✨
          </div>
          <div className="absolute top-1/2 left-12 text-xl text-terracotta-300 animate-bounce delay-4000">
            💫
          </div>
          <div className="absolute top-1/3 right-12 text-2xl text-sage-300 animate-pulse delay-5000">
            🌟
          </div>
        </div>

        <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-5xl font-serif font-light text-wedding-navy mb-6 relative">
            Counting Down to Our Big Day
            <div className="absolute -top-6 -left-6 text-2xl text-terracotta-400/60 animate-pulse">
              ⏳
            </div>
            <div className="absolute -top-6 -right-6 text-2xl text-sage-400/60 animate-bounce delay-1000">
              ⏰
            </div>
          </h2>
          <p className="text-xl text-sage-600 mb-16 font-light relative">
            Every second brings us closer to forever
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-terracotta-400/40">
              💕
            </div>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-wedding-cream to-terracotta-50 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-terracotta-200 hover:border-terracotta-300 hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-serif font-bold bg-gradient-to-r from-terracotta-600 to-wedding-navy bg-clip-text text-transparent mb-2">
                {timeRemaining.days}
              </div>
              <div className="text-terracotta-600 font-medium tracking-wide uppercase text-sm">
                Days
              </div>
            </div>
            <div className="bg-gradient-to-br from-wedding-cream to-sage-50 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-sage-200 hover:border-sage-300 hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-serif font-bold bg-gradient-to-r from-sage-600 to-terracotta-500 bg-clip-text text-transparent mb-2">
                {timeRemaining.hours}
              </div>
              <div className="text-sage-600 font-medium tracking-wide uppercase text-sm">
                Hours
              </div>
            </div>
            <div className="bg-gradient-to-br from-wedding-cream to-blush-50 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-blush-200 hover:border-blush-300 hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-serif font-bold bg-gradient-to-r from-blush-500 to-terracotta-600 bg-clip-text text-transparent mb-2">
                {timeRemaining.minutes}
              </div>
              <div className="text-blush-600 font-medium tracking-wide uppercase text-sm">
                Minutes
              </div>
            </div>
            <div className="bg-gradient-to-br from-wedding-cream to-terracotta-100 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-terracotta-300 hover:border-terracotta-400 hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-serif font-bold bg-gradient-to-r from-terracotta-600 to-wedding-navy bg-clip-text text-transparent mb-2">
                {timeRemaining.seconds}
              </div>
              <div className="text-terracotta-600 font-medium tracking-wide uppercase text-sm">
                Seconds
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Love Story Preview */}
      <section className="py-24 px-6 bg-gradient-to-r from-terracotta-100 via-wedding-cream to-blush-100 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-40 h-40 bg-terracotta-300 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-blush-300 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-sage-300 rounded-full blur-lg animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-12">
            <div className="inline-block">
              <div className="w-20 h-0.5 bg-gradient-to-r from-terracotta-300 via-terracotta-500 to-terracotta-300 mb-6"></div>
            </div>
            <h2 className="text-5xl font-serif font-light text-wedding-navy mb-6">
              Our Love Story
            </h2>
            <div className="inline-block">
              <div className="w-20 h-0.5 bg-gradient-to-r from-terracotta-300 via-terracotta-500 to-terracotta-300"></div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-12 bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-terracotta-200/50">
            <p className="text-xl text-sage-700 leading-relaxed font-light">
              From our first "Boa tarde, tudo bem!" on Happn to saying "yes" to
              forever in Santorini, our journey has been filled with laughter,
              adventure, Portuguese sweet nothings, and endless love.
            </p>
            <p className="text-2xl text-terracotta-600 mt-6 italic font-script font-semibold">
              "Dois corações, uma história, inúmeras memórias por fazer..."
            </p>
            <p className="text-sm text-terracotta-500 mt-2 opacity-80">
              (Two hearts, one story, countless memories yet to be made...)
            </p>
          </div>

          <Link
            to="/our-wedding/our-story"
            className="inline-flex items-center bg-gradient-to-r from-terracotta-500 to-wedding-navy hover:from-terracotta-600 hover:to-navy-900 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-terracotta-500/25 hover:scale-105 transform group"
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

      {/* Photo Showcase Section */}
      <section className="py-24 bg-gradient-to-br from-sage-50 via-wedding-cream to-blush-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-light text-wedding-navy mb-6">
              Moments We Treasure
            </h2>
            <p className="text-xl text-sage-600 font-light">
              From proposal to forever - our beautiful journey captured
            </p>
          </div>

          {/* Featured Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* The Proposal */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 lg:col-span-2">
              <div className="aspect-video md:aspect-square lg:aspect-video overflow-hidden">
                <img
                  src={ChapelProposingImg}
                  alt="The magical moment - Kasper proposing at the chapel"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-wedding-navy/80 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-2xl font-serif font-semibold mb-2">
                    The Proposal
                  </h3>
                  <p className="text-white/90 text-lg">
                    Where it all began - the most magical "yes" moment
                  </p>
                </div>
              </div>
            </div>

            {/* Ring Close-up */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="aspect-square overflow-hidden">
                <img
                  src={RingCloseUpImg}
                  alt="Beautiful engagement ring close-up"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-terracotta-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-serif font-semibold mb-1">
                    The Ring
                  </h3>
                  <p className="text-white/90">Symbol of our eternal love</p>
                </div>
              </div>
            </div>

            {/* Happy Moment */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="aspect-square overflow-hidden">
                <img
                  src={HuggingSmilingImg}
                  alt="Pure joy and happiness"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-sage-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-serif font-semibold mb-1">
                    Pure Joy
                  </h3>
                  <p className="text-white/90">Celebrating our engagement</p>
                </div>
              </div>
            </div>

            {/* Dancing (Artistic) */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="aspect-square overflow-hidden">
                <img
                  src={DancingGreyImg}
                  alt="Dancing together (artistic)"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-wedding-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-serif font-semibold mb-1">
                    Dancing
                  </h3>
                  <p className="text-white/90">Lost in each other</p>
                </div>
              </div>
            </div>

            {/* Walking Together */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="aspect-square overflow-hidden">
                <img
                  src={HillWalkingImg}
                  alt="Walking together into our future"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-terracotta-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-serif font-semibold mb-1">
                    Our Journey
                  </h3>
                  <p className="text-white/90">Walking into forever</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link
              to="/our-wedding/gallery"
              className="inline-flex items-center bg-gradient-to-r from-terracotta-500 to-wedding-navy hover:from-terracotta-600 hover:to-navy-900 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-terracotta-500/25 hover:scale-105 transform group"
            >
              View Full Gallery
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
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
