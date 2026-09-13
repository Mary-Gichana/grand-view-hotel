
import React from "react";

const services = [
  // =========================
  // CONFERENCE
  // =========================
  {
    category: "Conference",
    title: "Half-Day Conference",
    description:
      "Ideal for shorter meetings or seminars, this package includes a well-equipped conference room for up to 4 hours, along with basic amenities to ensure a productive and comfortable experience.",
    image: "/Images/conferencehalf.jpg",
  },
  {
    category: "Conference",
    title: "Full-Day Conference",
    description:
      "Designed for extensive conferences or events, this package provides you with a dedicated conference room for the entire day, allowing you ample time to conduct presentations, discussions, and networking opportunities seamlessly.",
    image: "/Images/conferencehalf.jpg",
  },

  // =========================
  // ROOM ACCOMMODATION
  // =========================
  {
    category: "Room Accommodation",
    title: "Standard Single",
    description:
      "Cozy room with a comfortable bed and a TV for your entertainment. Ideal for a restful night's stay.",
    image: "/Images/standard single.jpg",
  },
  {
    category: "Room Accommodation",
    title: "Superior Single",
    description:
      "Step up your comfort with a dedicated study area and a bed facing the TV. Relax and unwind in this convenient setup.",
    image: "/Images/superiorsingle.jpg",
  },
  {
    category: "Room Accommodation",
    title: "Deluxe Single",
    description:
      "Indulge in luxury with a plush carpeted room, a study area, and a bed strategically positioned to enjoy your favorite shows. Pamper yourself with this premium accommodation.",
    image: "/Images/deluxe single.jpg",
  },

  // =========================
  // FINE DINING
  // =========================
  {
    category: "Fine Dining",
    title: "Fine Dining",
    description:
      "Enjoy a delightful dining experience at Grandview Hotel, where our talented chefs prepare fresh and high-quality meals inspired by local flavors and international cuisine.",
    image: "/Images/fine dining.jpg",
  },
];

function Services() {
  return (
    <section className="bg-blue-50 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto mt-9">
        {/* HEADER */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Our Services
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            At Grandview Hotel, we offer comfortable accommodation, modern
            conference facilities, and exceptional dining experiences designed
            to make your stay memorable.
          </p>
        </div>

        {/* CONFERENCE */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Conference
          </h3>

          <div className="grid gap-8 md:grid-cols-2">
            {services
              .filter((service) => service.category === "Conference")
              .map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
          </div>
        </div>

        {/* ROOM ACCOMMODATION */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Room Accommodation
          </h3>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((service) => service.category === "Room Accommodation")
              .map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
          </div>
        </div>

        {/* FINE DINING */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Fine Dining
          </h3>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((service) => service.category === "Fine Dining")
              .map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}


// REUSABLE SERVICE CARD
function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">

      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <p className="text-sm text-blue-700 font-medium mb-2">
          {service.category}
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition">
          {service.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          {service.description}
        </p>
      </div>

    </div>
  );
}

export default Services;

