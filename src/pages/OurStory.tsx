import streetsWalkingImg from "../assets/images/streets-walking-holding-hands.png";
import chapelStandingImg from "../assets/images/chapel-standing-head-to-head.png";
import sittingLookingOutImg from "../assets/images/sitting-looking-out.png";

export const OurStory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-cream via-blush-50 to-sage-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-terracotta-400 to-transparent"></div>
          </div>
          <h1 className="text-6xl font-serif font-light text-wedding-navy mb-6">
            Our Story
          </h1>
          <p className="text-2xl text-sage-700 font-light max-w-3xl mx-auto">
            The journey that brought us together and led us to this moment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-semibold text-wedding-navy">
              How We Met
            </h2>
            <p className="text-lg text-sage-700 leading-relaxed">
              Our love story began at a local bowling alley on a Friday evening.
              Lylian was there with friends, and Kasper couldn't help but notice
              her competitive spirit and infectious laughter after each strike.
              After gathering the courage to approach her, what started as a
              friendly bowling challenge turned into hours of conversation and
              the beginning of something beautiful.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={streetsWalkingImg}
              alt="Lylian and Kasper walking hand in hand"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wedding-navy/20 to-transparent"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl order-2 md:order-1">
            <img
              src={chapelStandingImg}
              alt="Lylian and Kasper sharing an intimate moment at the chapel"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-terracotta-300/30 to-transparent"></div>
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl font-serif font-semibold text-wedding-navy">
              The Proposal
            </h2>
            <p className="text-lg text-sage-700 leading-relaxed">
              After two beautiful years together, Kasper knew Lylian was the
              one. He planned the perfect proposal at the charming chapel where
              we had shared so many meaningful moments and conversations about
              our future. As the golden hour light filtered through the windows,
              he got down on one knee and asked the most important question of
              his life.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-semibold text-wedding-navy">
              Our Journey Continues
            </h2>
            <p className="text-lg text-sage-700 leading-relaxed">
              From that first bowling encounter to quiet moments of reflection,
              every step of our journey has brought us closer together. We've
              learned to support each other's dreams, laugh at life's surprises,
              and find joy in both grand adventures and peaceful quiet moments.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={sittingLookingOutImg}
              alt="Lylian and Kasper enjoying a peaceful moment together"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blush-300/30 to-transparent"></div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-br from-blush-100 to-wedding-cream rounded-3xl p-16 shadow-xl">
          <div className="inline-block mb-6">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-terracotta-400 to-transparent"></div>
          </div>
          <h2 className="text-4xl font-serif font-semibold text-wedding-navy mb-8">
            Looking Forward
          </h2>
          <p className="text-xl text-sage-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Now we're excited to start this new chapter of our lives together,
            surrounded by the love and support of our family and friends. We
            can't wait to celebrate with all of you and create new memories that
            will last a lifetime!
          </p>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-8 h-0.5 bg-terracotta-300"></div>
            <div className="text-3xl text-terracotta-400">♥</div>
            <div className="w-8 h-0.5 bg-terracotta-300"></div>
          </div>
          <p className="text-2xl font-serif font-semibold text-wedding-navy">
            Lylian & Kasper
          </p>
        </div>
      </div>
    </div>
  );
};
