import { Helmet } from "react-helmet-async";
import { PHONE_NUMBER, LOCATION, WHATSAPP_NUMBER } from "../utils/constants";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Bethosin Bliss | Order Drinks in Nigeria</title>
        <meta
          name="description"
          content="Contact Bethosin Bliss to order fresh zobo, tigernut and yogurt drinks in Nigeria."
        />
      </Helmet>

      <section className="bg-gray-50 min-h-[calc(100vh-80px)] pt-20">
        {/* 🔥 HEADER */}
        <div className="bg-blue-900 text-white py-16 text-center px-4">
          <h1 className="reveal delay-1 text-3xl md:text-5xl font-extrabold">
            Let’s Get You Refreshed
          </h1>

          <p className="reveal delay-2 mt-4 text-blue-200 max-w-xl mx-auto">
            Reach out to order your favorite Bethosin Bliss drinks or ask any
            questions.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-10">
            {/* LEFT */}
            <div className="space-y-6">
              <div className="reveal delay-1 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                <h3 className="font-semibold text-blue-900 mb-2">
                  📍 Our Location
                </h3>
                <p className="text-gray-600">{LOCATION}</p>
              </div>

              <div className="reveal delay-2 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                <h3 className="font-semibold text-blue-900 mb-2">📞 Call Us</h3>
                <p className="text-gray-600">{PHONE_NUMBER}</p>
              </div>

              <div className="reveal delay-3 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                <h3 className="font-semibold text-blue-900 mb-2">
                  💬 Chat with Us
                </h3>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="reveal delay-2 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">
                Send Us a Message
              </h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  const name = e.target.name.value;
                  const message = e.target.message.value;

                  const text = `Hello Bethosin Bliss,

My name is ${name}.
${message}

I would like to make an inquiry.`;

                  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    text,
                  )}`;

                  window.open(url, "_blank");
                }}
                className="space-y-4"
              >
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
                >
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>

          {/* 🔥 MAP */}
          <div className="mt-16">
            <h2 className="reveal delay-1 text-xl font-semibold text-blue-900 mb-4 text-center">
              Find Us
            </h2>

            <div className="reveal delay-2 w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps?q=Ibadan Nigeria&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
