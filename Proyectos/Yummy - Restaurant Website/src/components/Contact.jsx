import React from "react";

const Contact = () => {
  return (
    <div className="section" id="contact">
      <div className="border-solid border-black border-b pb-8 flex justify-between items-end gap-4 flex-wrap">
        <div>
          <div className="uppercase">¡Hablemos!</div>
          <div className="text-3xl font-bold">¿Quiéres reservar una mesa?</div>
        </div>
        <a href="#" className="rounded-tr-[1rem] rounded-b-[1rem] opacity-50 bg-pink-400 text-white p-4 text-[0.85rem] transition hover:opacity-100">Contáctanos 📞</a>
      </div>
    </div>
  );
};

export default Contact;
