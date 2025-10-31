import streetsWalkingImg from "../assets/images/streets-walking-holding-hands.png";
import chapelStandingImg from "../assets/images/chapel-standing-head-to-head.png";
import sittingLookingOutImg from "../assets/images/sitting-looking-out.png";
import chapelProposingKneeling from "../assets/images/chapel-proposing-kneeling.png";
import hillWalkingHandInHand from "../assets/images/hill-walking.png";

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
              Our international love story began on Happn, a dating app that
              brought together a Brazilian beauty and a charming Dane. Kasper,
              wanting to catch Lylian's attention, decided to be bold and wrote
              his very first message in Portuguese:
              <span className="mx-1 italic font-semibold text-terracotta-600">
                "Boa tarde, tudo bem!"
              </span>
              It worked like a charm, and that simple greeting sparked what
              would become the most beautiful adventure of our lives.
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
              src={sittingLookingOutImg}
              alt="Lylian and Kasper enjoying a peaceful moment together"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blush-300/30 to-transparent"></div>
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl font-serif font-semibold text-wedding-navy">
              Our First Date
            </h2>
            <p className="text-lg text-sage-700 leading-relaxed">
              Our first meeting in person was at a bowling alley, and it was
              absolutely perfect. Lylian showed off her competitive side and
              completely beat Kasper - but he didn't mind losing to someone so
              amazing! When it was time to say goodbye, Kasper had practiced
              something special. He looked into her eyes and said
              <span className="mx-1 italic font-semibold text-terracotta-600">
                "Boa noite, moça bonita"
              </span>
              (Good night, beautiful girl).
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-semibold text-wedding-navy">
              Second Date Magic
            </h2>
            <p className="text-lg text-sage-700 leading-relaxed">
              For our second date, we went to the beach. Kasper was incredibly
              nervous, but there was something magical about sitting by the
              water, sharing a few beers, and getting to know each other better.
              The ocean breeze, the sunset, and endless conversation created the
              perfect atmosphere. By the end of the evening, we shared our first
              kiss - and we both knew this was the beginning of something
              extraordinary.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={hillWalkingHandInHand}
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
              The Cheeky Third Date
            </h2>
            <p className="text-lg text-sage-700 leading-relaxed">
              Our third date took us to the deer park, where Kasper had a plan.
              In what can only be described as the most cheeky and cringy (but
              adorable) move ever, he tricked Lylian into holding his hand! It
              was so perfectly Kasper - sweet, a little silly, but absolutely
              charming. From that moment, we knew we were meant to hold hands
              for the rest of our lives.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-semibold text-wedding-navy">
              The Proposal in Paradise
            </h2>
            <p className="text-lg text-sage-700 leading-relaxed">
              On September 2nd, 2025, Kasper planned the most romantic proposal
              on the beautiful island of Santorini, Greece. High atop a chapel
              with breathtaking views of the Aegean Sea, he got down on one
              knee. He had asked for Lylian's mother's blessing beforehand in
              portuguese. The combination of the stunning Greek sunset, the
              meaningful location, and Kasper's thoughtful gesture made it
              absolutely perfect.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={chapelProposingKneeling}
              alt="Kasper proposing to Lylian in Santorini"
              className="w-full h-80 object-cover"
            />
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
