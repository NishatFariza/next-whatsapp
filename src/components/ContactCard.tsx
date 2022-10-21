import React from "react";

const ContactCard = () => {
  return (
    <div className="flex gap-2 border-b p-3">
      <div>
        <img
          className="w-10 h-10 rounded-full"
          src="https://i.pinimg.com/236x/01/59/8d/01598d091ec1a0f33a0f0d16643b5a0c.jpg"
          alt=""
        />
      </div>
      <div>
        <h1>M. N. Sakib</h1>
        <p className="text-stone-400 text-sm">Kemon achhen apni?</p>
      </div>
    </div>
  );
};

export default ContactCard;
