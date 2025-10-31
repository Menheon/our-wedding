export const RSVP = () => {
  const rsvpDate = new Date("2026-04-30T14:00:00+02:00");

  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-cream via-blush-50 to-sage-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-terracotta-400 to-transparent"></div>
          </div>
          <h1 className="text-6xl font-serif font-light text-wedding-navy mb-8">
            RSVP
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-2xl text-sage-700 font-light mb-6">
              Please let us know if you'll be able to join us for our special
              day
            </p>
            <div className="bg-wedding-cream/90 backdrop-blur-sm rounded-2xl p-6 border border-sage-200 shadow-lg">
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

        <div className="bg-wedding-cream/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-sage-200">
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 tracking-wide uppercase">
                  First Name *
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 tracking-wide uppercase">
                  Last Name *
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white shadow-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3 tracking-wide uppercase">
                Email Address *
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Will you be attending? *
              </label>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300"
                  />
                  <span className="ml-2 text-gray-700">
                    Yes, I'll be there! 🎉
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300"
                  />
                  <span className="ml-2 text-gray-700">
                    Sorry, I can't make it 😔
                  </span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Guests
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent">
                <option value="1">Just me</option>
                <option value="2">2 guests</option>
                <option value="3">3 guests</option>
                <option value="4">4 guests</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dietary Restrictions
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                rows={3}
                placeholder="Please let us know about any allergies or dietary requirements"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Message for the Couple
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                rows={4}
                placeholder="Share your well wishes, memories, or anything else you'd like to say!"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 px-6 rounded-md text-lg font-semibold transition-colors"
            >
              Submit RSVP
            </button>
          </form>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Having trouble with the form? You can also RSVP by:
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">📧 Email: kasper.d.borg@gmail.com</p>
            <p className="text-gray-700">📞 Phone: +45 30 95 98 77</p>
          </div>
        </div>
      </div>
    </div>
  );
};
