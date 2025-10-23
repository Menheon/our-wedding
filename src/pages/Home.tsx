import { useCountdown } from '../hooks/useCountdown'

export const Home = () => {
  const weddingDate = new Date("2026-05-30T16:00:00+02:00");
  const address = "Topkær Fest • Topkærvej 13, 8200 Århus N";
  const timeRemaining = useCountdown(weddingDate);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-lg">
            Lylian & Kasper
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
            We're getting married!
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <p className="text-2xl md:text-3xl font-semibold text-white mb-2">
              {weddingDate.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                day: "numeric",
                month: "long",
              })}
            </p>
            <p className="text-lg md:text-xl text-white/90">
              {address}
            </p>
          </div>
          <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
            RSVP Now
          </button>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Ceremony
              </h3>
              <p className="text-gray-600">4:00 PM</p>
              <p className="text-gray-600">Garden Pavilion</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🥂</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Reception
              </h3>
              <p className="text-gray-600">6:00 PM</p>
              <p className="text-gray-600">Grand Ballroom</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Accommodation
              </h3>
              <p className="text-gray-600">Napa Valley Inn</p>
              <p className="text-gray-600">Group Rate Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 bg-rose-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Counting Down to Our Big Day
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-rose-600">{timeRemaining.days}</div>
              <div className="text-gray-600">Days</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-rose-600">{timeRemaining.hours}</div>
              <div className="text-gray-600">Hours</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-rose-600">{timeRemaining.minutes}</div>
              <div className="text-gray-600">Minutes</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-rose-600">{timeRemaining.seconds}</div>
              <div className="text-gray-600">Seconds</div>
            </div>
          </div>
        </div>
      </section>

      {/* Love Story Preview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Our Love Story
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            From our first coffee date to saying "yes" to forever, our journey
            has been filled with laughter, adventure, and endless love.
          </p>
          <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full font-semibold transition-colors">
            Read Our Story
          </button>
        </div>
      </section>
    </div>
  );
};
