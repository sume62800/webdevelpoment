import React from "react";

// Navcard Component
interface NavcardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Navcard: React.FC<NavcardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
      <div className="bg-blue-100 p-2 rounded-full">
        {icon}
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// ScrollableNavcards Component
interface CardData {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ScrollableNavcardsProps {
  cards: CardData[];
}

const ScrollableNavcards: React.FC<ScrollableNavcardsProps> = ({ cards }) => {
  return (
    <div className="max-w-6xl mx-auto mt-4 h-96 overflow-y-auto">
      <div className="grid gap-4 grid grid-cols-2">
        {cards.map((card, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <Navcard title={card.title} description={card.description} icon={card.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Parent Component (Dropdown)
const cardData = [
  { title: "Web Development", description: "Transform your ideas into reality with our web app development services.", icon: <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg> },
  { title: "Digital Marketing", description: "Boost your online presence with our digital marketing strategies.", icon: <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg> },
  { title: "CCTV Installations and Maintenance", description: "Ensure your safety with our reliable CCTV solutions.", icon: <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg> },
  { title: "Building Services", description: "Comprehensive building services for all your needs.", icon: <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg> },
  { title: "IT Support", description: "Expert IT support to keep your systems running smoothly.", icon: <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg> },
  { title: "Consulting", description: "Professional consulting services to help your business grow.", icon: <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg> },
];

const Dropdown: React.FC = () => {
  return (
    <div className="w-full">
      <ScrollableNavcards cards={cardData} />
    </div>
  );
}

export default Dropdown;
