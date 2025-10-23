export default function RSVP() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">RSVP</h1>
          <p className="text-xl text-gray-600">
            Please let us know if you'll be able to join us for our special day
          </p>
          <p className="text-lg text-rose-600 font-semibold mt-4">
            Please respond by April 15, 2025
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
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
            <p className="text-gray-700">
              📧 Email: rsvp@sarahandmichael2025.com
            </p>
            <p className="text-gray-700">
              📞 Phone: (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}