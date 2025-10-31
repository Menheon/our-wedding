import HillWalkingImg from "../assets/images/hill-walking.png";

export const RSVP = () => {
  const rsvpDate = new Date("2026-04-30T14:00:00+02:00");

  return (
    <div className="min-h-screen relative overflow-hidden py-20 px-6">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HillWalkingImg}
          alt="Lylian and Kasper on the hill"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blush-100/60 via-wedding-cream/40 to-sage-100/60"></div>
      </div>
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-24 h-0.5 bg-gradient-to-r from-terracotta-300 via-terracotta-500 to-terracotta-300"></div>
          </div>
          <h1 className="text-6xl font-serif font-light text-wedding-navy mb-8 drop-shadow-sm">
            RSVP
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-2xl text-wedding-navy font-light mb-6 drop-shadow-sm">
              Please let us know if you'll be able to join us for our special
              day
            </p>
            <div className="bg-white/90 rounded-2xl p-6 border border-terracotta-200/50 shadow-xl">
              <p className="text-lg text-terracotta-600 font-semibold">
                Please respond by{" "}
                {rsvpDate.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/95 rounded-3xl shadow-2xl p-10 border border-terracotta-200/50">
          <form
            action="https://formspree.io/f/xovpkbjo"
            method="POST"
            className="space-y-8"
          >
            {/* Honeypot field for spam protection */}
            <div className="hidden">
              <label>
                Don't fill this out if you're human: <input name="_gotcha" />
              </label>
            </div>

            <div className="grid gap-6">
              <label className="block text-sm font-semibold text-wedding-navy mb-3 tracking-wide uppercase">
                Name *
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-5 py-4 border border-sage-200 rounded-xl focus:ring-2 focus:ring-terracotta-400 focus:border-terracotta-300 transition-all duration-300 bg-wedding-cream/50 focus:bg-white shadow-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-wedding-navy mb-4 tracking-wide uppercase">
                Will you be attending? *
              </label>
              <div className="space-y-4">
                <label className="flex items-center p-4 bg-sage-50/80 rounded-xl border border-sage-200 hover:bg-sage-100/80 transition-colors cursor-pointer">
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    className="h-5 w-5 text-terracotta-500 focus:ring-terracotta-400 border-sage-300"
                  />
                  <span className="ml-3 text-wedding-navy font-medium">
                    Yes, I'll be there! 🎉
                  </span>
                </label>
                <label className="flex items-center p-4 bg-blush-50/80 rounded-xl border border-blush-200 hover:bg-blush-100/80 transition-colors cursor-pointer">
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    className="h-5 w-5 text-terracotta-500 focus:ring-terracotta-400 border-blush-300"
                  />
                  <span className="ml-3 text-wedding-navy font-medium">
                    Sorry, I can't make it 😔
                  </span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-wedding-navy mb-3 tracking-wide uppercase">
                Number of Guests
              </label>
              <select
                name="numberOfGuests"
                className="w-full px-5 py-4 border border-sage-200 rounded-xl focus:ring-2 focus:ring-terracotta-400 focus:border-terracotta-300 transition-all duration-300 bg-wedding-cream/50 focus:bg-white shadow-sm"
              >
                <option value="1">Just me</option>
                <option value="2">My partner and I</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-wedding-navy mb-3 tracking-wide uppercase">
                Dietary Restrictions
              </label>
              <textarea
                name="dietaryRestrictions"
                className="w-full px-5 py-4 border border-sage-200 rounded-xl focus:ring-2 focus:ring-terracotta-400 focus:border-terracotta-300 transition-all duration-300 bg-wedding-cream/50 focus:bg-white shadow-sm resize-none"
                rows={3}
                placeholder="Please let us know about any allergies or dietary requirements"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-semibold text-wedding-navy mb-3 tracking-wide uppercase">
                Special Message for the Couple
              </label>
              <textarea
                name="specialMessage"
                className="w-full px-5 py-4 border border-sage-200 rounded-xl focus:ring-2 focus:ring-terracotta-400 focus:border-terracotta-300 transition-all duration-300 bg-wedding-cream/50 focus:bg-white shadow-sm resize-none"
                rows={4}
                placeholder="Share your well wishes, memories, or anything else you'd like to say!"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-terracotta-500 to-wedding-navy hover:from-terracotta-600 hover:to-navy-900 text-white py-4 px-8 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Submit RSVP ✨
            </button>
          </form>
        </div>

        <div className="mt-12 text-center relative z-10">
          <div className="bg-white/80  rounded-2xl p-6 shadow-lg border border-sage-200/50">
            <p className="text-wedding-navy mb-4 font-medium">
              Having trouble with the form? You can also RSVP by:
            </p>
            <div className="space-y-2">
              <p className="text-sage-600 font-medium">
                📧 Email: kasper.d.borg@gmail.com
              </p>
              <p className="text-sage-600 font-medium">
                📞 Phone: +45 30 95 98 77
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
