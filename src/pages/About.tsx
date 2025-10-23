export default function About() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Story</h1>
          <p className="text-xl text-gray-600">
            The journey that brought us together and led us to this moment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-rose-600">How We Met</h2>
            <p className="text-gray-700 leading-relaxed">
              Our love story began on a rainy Tuesday morning in a small coffee shop 
              downtown. Sarah was reading her favorite book, and Michael couldn't help 
              but notice her smile when she reached the funny parts. After gathering 
              the courage to approach her, what started as a conversation about books 
              turned into hours of talking about everything and nothing.
            </p>
          </div>
          <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-lg h-64 flex items-center justify-center">
            <span className="text-6xl">☕</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg h-64 flex items-center justify-center order-2 md:order-1">
            <span className="text-6xl">💍</span>
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl font-bold text-rose-600">The Proposal</h2>
            <p className="text-gray-700 leading-relaxed">
              After five wonderful years together, Michael knew Sarah was the one. 
              He planned the perfect proposal during their annual trip to the mountains, 
              at the same hiking trail where they had their first adventure together. 
              As the sun set behind the peaks, he got down on one knee and asked the 
              most important question of his life.
            </p>
          </div>
        </div>

        <div className="text-center bg-rose-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Looking Forward</h2>
          <p className="text-lg text-gray-700 mb-8">
            Now we're excited to start this new chapter of our lives together, 
            surrounded by the love and support of our family and friends. 
            We can't wait to celebrate with all of you!
          </p>
          <div className="text-4xl mb-4">❤️</div>
          <p className="text-rose-600 font-semibold text-lg">
            Sarah & Michael
          </p>
        </div>
      </div>
    </div>
  )
}