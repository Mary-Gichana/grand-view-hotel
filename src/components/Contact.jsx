
import React from "react";

function Contact() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-gray-100 py-24">
      <div className="max-w-6xl mx-auto mt-9 px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT: MAP + DESCRIPTION */}
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Visit Grand View Hotel
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=0.2021084,35.0996578&z=17&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen=""
              title="Grand View Hotel Kapsabet Location"
            ></iframe>
          </div>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Grand View Hotel is conveniently located in Kapsabet, Nandi County,
            along the Kapsabet-Kisumu Highway, opposite Tiryo Supermarket.
            Visit us and experience comfortable accommodation, exceptional
            dining, modern conference facilities, and warm hospitality.
          </p>
        </div>

        {/* RIGHT: CONTACT DETAILS */}
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-10 relative inline-block">
            Contact Us

            <span className="absolute left-0 -bottom-2 w-16 h-1 bg-blue-800 rounded">
            </span>
          </h2>

          <div className="space-y-6">

            {/* LOCATION */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-700 text-white text-xl">
                📍
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Hotel Location
                </p>

                <p className="text-gray-800 font-semibold">
                  Kapsabet Town, Grandview Building,
                  Opposite Tiryo Supermarket, Kapsabet
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-700 text-white text-xl">
                📞
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Call Us
                </p>

                <a
                  href="tel:0723127263"
                  className="text-gray-800 font-semibold hover:text-blue-700 transition"
                >
                  0723127263
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-700 text-white text-xl">
                📧
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <a
                  href="mailto:Thegrandviewhotel2024@gmail.com"
                  className="text-gray-800 font-semibold hover:text-blue-700 transition break-all"
                >
                  Thegrandviewhotel2024@gmail.com
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

