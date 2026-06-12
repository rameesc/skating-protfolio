
import skimg from '../../public/img/sk.jpg';
export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          `url(${skimg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <span className="inline-block px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
          Professional Roller Skater
        </span>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Push Beyond
          <br />
          Your Limits
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Professional Coach •
          10+ Years of Experience
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition">
           <a href="#gallery"  > View Gallery</a>
          </button>

          <button className=" border-1 rounded-lg p-2">
            <a
                       href="https://wa.me/918137911612"
                       target="_blank"
                       rel="noopener noreferrer"
                    lassName="bg-green-500 text-white px-6 py-3 rounded-lg border-white hover:bg-white hover:text-black "
                    >
                       Contact on WhatsApp
                    </a>
          </button>
        </div>
      </div>
    </section>
  );
}
