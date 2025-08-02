import React from "react";

type PropsTestio = {
  name: string,
  role: string,
  message: string,
  avatar: string
}
const TestimonialCard = ({ name, role, message, avatar} : PropsTestio) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 text-white w-full max-w-md mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full border-2 border-white"
        />
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-sm text-white/80">{role}</p>
        </div>
      </div>
      <p className="text-white/90 italic">"{message}"</p>
    </div>
  );
};

export default TestimonialCard;
