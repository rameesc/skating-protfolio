import {
  Phone,
  // MessageCircle,
  // Instagram,
  // Youtube,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-black text-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">
            Get In Touch
          </h2>

          <p className="mt-4 text-gray-400">
            Feel free to contact me for coaching,
            training sessions, competitions, or
            collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="space-y-6">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-4 p-5 bg-zinc-900 rounded-xl hover:bg-zinc-800 transition"
            >
              <Phone size={24} />
              <div>
                <h3 className="font-semibold">
                  Phone Number
                </h3>
                <p>+91 8137911612</p>
              </div>
            </a>

            <a
              href="https://wa.me/918137911612"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center  gap-4 p-5 bg-[#25D366] rounded-xl hover:bg-[#128C7E] transition"
            >
              {/* <MessageCircle size={24} /> */}
              <div>
                <h3 className="font-semibold">
                  WhatsApp
                </h3>
                <p>Chat Directly</p>
              </div>
            </a>

            <a
              href="https://instagram.com/street_skaterx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#515BD4] rounded-xl hover:bg-zinc-800 transition"
            >
              {/* <Instagram size={24} /> */}
              <div >
                <h3 className="font-semibold">
                  Instagram
                </h3>
                <p>@street_skaterx</p>
              </div>
            </a>

            <a
              href="https://youtube.com/@mallu_skaterr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-[#FF0000] rounded-xl hover:bg-[#CC0000] transition"
            >
              {/* <Youtube size={24} /> */}
              <div>
                <h3 className="font-semibold">
                  YouTube
                </h3>
                <p>Watch My Videos</p>
              </div>
            </a>
          </div>

          {/* Message Card */}
          <div className="bg-zinc-900 rounded-2xl p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">
              Let's Skate Together!
            </h3>

            <p className="text-gray-400 leading-7">
              Whether you're a beginner looking to
              learn skating or an athlete preparing
              for competitions, I'm here to help you
              achieve your goals.
            </p>

            <a
              href="https://wa.me/919876543210?text=Hello,%20I%20am%20interested%20in%20your%20Speed%20Skating%20Coaching."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-center font-semibold"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
