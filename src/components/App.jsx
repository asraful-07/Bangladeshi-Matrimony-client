import React from "react";

const App = () => {
  const steps = [
    {
      title: "Create Biodata",
      description:
        "You can easily create a biodata on OrdhekDeen completely free of cost within some steps.",
      imgUrl: "https://ordhekdeen.com/images/hiw-create-biodata.svg",
    },
    {
      title: "Search Biodata",
      description:
        "You can easily search biodata using many filters including age, upazila, profession, educational qualification.",
      imgUrl: "https://ordhekdeen.com/images/hiw-search.svg",
    },
    {
      title: "Contact with guardians",
      description:
        "If someone likes your biodata or you like someone's biodata, you can directly contact their parent.",
      imgUrl: "https://ordhekdeen.com/images/hiw-contact.svg",
    },
    {
      title: "Get married",
      description:
        "If you like the biodata and conversation, do your own inquiry & get married according to Sunnah.",
      imgUrl: "https://ordhekdeen.com/images/hiw-success.svg",
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={step.imgUrl}
              alt={step.title}
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
