import QrCodeImg from "../assets/images/weddingRegistryQrCodeOenskeskyen.png";
import sittingLookingOutImg from "../assets/images/sitting-looking-out.png";

export const Registry = () => {
  return (
    <div className="min-h-screen relative overflow-hidden py-20 px-6">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={sittingLookingOutImg}
          alt="Lylian and Kasper together"
          className="w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-terracotta-100/60 via-wedding-cream/40 to-sage-100/60"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-24 h-0.5 bg-gradient-to-r from-terracotta-300 via-terracotta-500 to-terracotta-300"></div>
          </div>
          <h1 className="text-6xl font-serif font-light text-wedding-navy mb-8 drop-shadow-sm">
            Wedding Registry
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl text-wedding-navy font-light mb-6 drop-shadow-sm">
              Your presence is the greatest gift, but if you'd like to celebrate
              with us in another way, we've created a wishlist
            </p>
            <p className="text-lg text-sage-600 italic font-script">
              "Help us build our new life together"
            </p>
          </div>
        </div>

        {/* Main Registry Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* QR Code Card */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-terracotta-200/50 text-center">
            <div className="mb-6">
              <h2 className="text-3xl font-serif font-semibold text-wedding-navy mb-4">
                Ønskeskyen Registry
              </h2>
              <p className="text-sage-600 mb-6">
                Scan the QR code or click the button below to view our registry
              </p>
            </div>

            {/* QR Code */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-8 inline-block">
              <img
                src={QrCodeImg}
                alt="QR Code for Wedding Registry on Ønskeskyen"
                className="w-48 h-48 mx-auto"
              />
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <a
                href="https://onskeskyen.dk/s/d321vh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-gradient-to-r from-terracotta-500 to-wedding-navy hover:from-terracotta-600 hover:to-navy-900 text-white py-4 px-8 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                Visit Our Registry 🎁
              </a>
              <p className="text-sm text-sage-500">Opens in new window</p>
            </div>
          </div>

          {/* Information Card */}
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-sage-200/50 shadow-xl">
              <h3 className="text-2xl font-serif font-semibold text-wedding-navy mb-4 flex items-center">
                <span className="mr-3 text-3xl">💝</span>
                How It Works
              </h3>
              <div className="space-y-4 text-sage-700">
                <div className="flex items-start">
                  <span className="mr-3 mt-1 text-terracotta-500 font-semibold">
                    1.
                  </span>
                  <p>
                    Scan the QR code or click the button to visit our Ønskeskyen
                    registry
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 mt-1 text-terracotta-500 font-semibold">
                    2.
                  </span>
                  <p>Browse our carefully selected items for our new home</p>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 mt-1 text-terracotta-500 font-semibold">
                    3.
                  </span>
                  <p>
                    Choose something you'd like to gift us and complete your
                    purchase
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-blush-200/50 shadow-xl">
              <h3 className="text-2xl font-serif font-semibold text-wedding-navy mb-4 flex items-center">
                <span className="mr-3 text-3xl">🏠</span>
                Our Wishlist
              </h3>
              <p className="text-sage-700 mb-4">
                We've selected items that will help us create our first home
                together as a married couple. From kitchen essentials to cozy
                home décor, each item represents a step in our new journey.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-sage-600">
                <div className="flex items-center">
                  <span className="mr-2">🍳</span>
                  <span>Kitchen & Dining</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🛏️</span>
                  <span>Bedroom</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🛋️</span>
                  <span>Living Room</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🌿</span>
                  <span>Garden & Outdoor</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative Options */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-10 border border-sage-200/50 text-center">
          <h2 className="text-3xl font-serif font-semibold text-wedding-navy mb-6">
            Alternative Gift Ideas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-4xl mb-3">✈️</div>
              <h3 className="text-xl font-semibold text-wedding-navy">
                Honeymoon Fund
              </h3>
              <p className="text-sage-600">
                Help us create magical memories on our honeymoon adventure
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl mb-3">🏡</div>
              <h3 className="text-xl font-semibold text-wedding-navy">
                Home Fund
              </h3>
              <p className="text-sage-600">
                Contribute to our first home together as we start this new
                chapter
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl mb-3">💕</div>
              <h3 className="text-xl font-semibold text-wedding-navy">
                Your Presence
              </h3>
              <p className="text-sage-600">
                The most important gift is having you celebrate with us!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
