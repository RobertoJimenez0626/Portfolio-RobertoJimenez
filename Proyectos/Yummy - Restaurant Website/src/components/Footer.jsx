import React from "react";
import {
  footerSocials,
  footerContacts,
  mainMenu,
  explores,
  payments,
} from "../Data";

const Footer = () => {
  return (
    <div className="section">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mb-8">
        <div>
          <div className="text-xl font-semibold mb-3">Sobre nosotros</div>
          <p className="mb-3">
            Somos un restaurante familiar que proporciona alimentos de gran calidad a los usuarios. Tenemos el enfoque de hacer comida saludable para los consumidores, aprobada por rigurosos organismos de salud pública, siempre empleando ingredientes de alta calidad.
          </p>
          <div className="flex items-center gap-4">
            <span>¡Síguenos!</span>
            <div className="h-[2px] w-12 bg-black"></div>
            {footerSocials.map((footerSocial, index) => {
              return (
                <div key={index}>
                  <a href="#">{footerSocial}</a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <h3 className="font-semibold text-[1.1rem] mb-4">Menú principal</h3>
            {mainMenu.map((menu) => {
              return (
                <div className="mb-2" key={menu.id}>
                  <a href={`#${menu.href}`}>{menu.text}</a>
                </div>
              );
            })}
          </div>
          <div>
            <h3 className="font-semibold text-[1.1rem] mb-4">Explorar</h3>
            {explores.map((explore, index) => {
              return (
                <div className="mb-2" key={index}>
                  <a href="#">{explore}</a>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-[1.1rem] mb-4">Contacto</h3>
          {footerContacts.map((footerContact) => {
            return (
              <div className="flex items-center gap-4 mb-4" key={footerContact}>
                <div className="text-xl">{footerContact.icon}</div>
                <div>{footerContact.text}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-4 pb-8">
        <div>
          Copyright &#169; <span className="font-bold">Roberto Jimenez</span>.
          Todos los derechos reservados.
        </div>
        <div className="flex gap-2">
          {payments.map((payment, index) => {
            return (
              <div key={index}>
                <img src={payment} alt="" className="w-10" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;