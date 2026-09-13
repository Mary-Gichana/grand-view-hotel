
function Aboutus() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div>
          <p className="text-blue-800 italic mb-4">About Us</p>

          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            THE GRAND VIEW HOTEL
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-gray-700 mt-16 text-lg leading-relaxed">
          <p className="mb-4">
            At Grand View Hotel, we are committed to providing our guests with a
            comfortable, relaxing, and memorable stay. Our hotel offers a
            welcoming environment where quality hospitality and exceptional
            service come together to make every visit special.
          </p>

          <p className="mb-4">
            Whether you are travelling for business, leisure, or a special
            occasion, our comfortable accommodation, dining facilities, and
            range of services are designed to meet your needs. Our friendly team
            is always ready to ensure that you feel at home throughout your
            stay.
          </p>

          <p className="mb-10">
            Our goal is to create a memorable experience for every guest by
            combining comfort, convenience, quality service, and genuine
            hospitality. At Grand View Hotel, your comfort is our priority.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;

