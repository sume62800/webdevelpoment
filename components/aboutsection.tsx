

const About = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20 my-5">
      <div className="max-w-7xl mx-auto lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2 grid gap-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About MirhaTech UAE
          </h2>
          <p className="mt-4 text-lg text-gray-800">
            MirhaTech UAE is a leading provider of comprehensive security solutions and digital services. We specialize in CCTV installations and maintenance, ensuring that your premises are safe and secure. In addition, we offer top-notch building services, web development, and digital marketing solutions, including SEO, SEM, and SMO. Our goal is to provide you with peace of mind and a strong digital presence, allowing you to focus on what matters most—your business.
          </p>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-16">
          <img
            className="w-full h-auto rounded-lg shadow-lg"
            src="/building.jpg"
            alt="MirhaTech UAE"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
