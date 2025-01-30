import {
  ChevronsLeftRightEllipsis,
  Earth,
  MailIcon,
  MapPin,
  PhoneIcon,
} from "lucide-react";
import React from "react";
import logo from "./assets/logo.png";
import bg from "./assets/bg.png";

const App = () => {
  function ContactItem({icon, label, value, link}) {
    return (
      <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
        {icon}
        <div>
          <p className="text-sm font-semibold text-gray-700">{label}</p>
          <a
            href={link}
            className="text-blue-500 hover:text-blue-700 hover:underline block"
            target="_blank"
            rel="noopener noreferrer"
          >
            {value}
          </a>
        </div>
      </div>
    );
  }
  return (
    <div
      style={{backgroundImage: `url(${bg})`}}
      className="w-full min-h-screen bg-cover bg-center  relative"
    >
      {/* Blur Effect */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative w-full min-h-screen flex items-center justify-center font-poppins p-4">
        <div className="container max-w-[600px] px-4 pt-8 bg-white shadow-lg rounded-2xl">
          <header className="text-center mb-7">
            <div className="w-full flex items-center justify-center">
              <img width={30} src={logo} alt="logo" />
            </div>
            <h1 className="text-2xl font-medium text-black mb-3">
              Innovatsion Rivojlanish Agentligi
            </h1>
            <p className="text-sm text-gray-700">
              Innovatsiyalar va texnologiyalar bo'yicha mutaxassislarning
              ishonchli manbai.
            </p>
          </header>

          <div className="space-y-8">
            <section className="bg-gray-100 p-6 md:p-5 rounded-xl  max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">
                Aloqa Ma'lumotlari
              </h2>
              <div className="grid gap-2 md:grid-cols-2">
                <ContactItem
                  icon={<PhoneIcon className="h-6 w-6 text-green-500" />}
                  label="Telefon"
                  value="+998 (71) 203-32-23"
                  link="tel:+998712033223"
                />
                <ContactItem
                  icon={<PhoneIcon className="h-6 w-6 text-green-500" />}
                  label="Faks"
                  value="+998 (71) 203-32-23"
                  link="tel:+998712033223"
                />
                <ContactItem
                  icon={<MailIcon className="h-6 w-6 text-yellow-500" />}
                  label="E-mail"
                  value="info@ilmiy.uz"
                  link="mailto:info@ilmiy.uz"
                />
                <ContactItem
                  icon={<MailIcon className=" text-yellow-500" />}
                  label="E-xat"
                  value="mininnovation@exat.uz"
                  link="mailto:mininnovation@exat.uz"
                />
                <ContactItem
                  icon={<MapPin width={50} className=" text-red-500" />}
                  label="Manzil"
                  value="100174, Toshkent sh., Olmazor tumani, Universitet ko‘chasi, 7-uy"
                  link="https://maps.app.goo.gl/CSxXMhR8ZkXEJCNy9"
                />
                <ContactItem
                  icon={<Earth width={30} className=" text-blue-500" />}
                  label="Veb-sayt"
                  value="www.ilmiy.uz"
                  link="https://www.ilmiy.uz"
                />
              </div>
            </section>

            <section>
              <h2 className="text-xl font-meduim text-center  mb-4">
                Ijtimoiy Tarmoqlar
              </h2>
              <div className="flex flex-col gap-4  items-center ">
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.facebook.com/innovation.gov.uz"
                    className="text-blue-600 hover:text-blue-800 transition duration-300 text-md font-medium flex items-center space-x-2"
                    target="_blank" // Yangi tabda ochish
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-square text-3xl"></i>
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/innovation.gov.uz/"
                    className="text-pink-600 hover:text-pink-800 transition duration-300 text-md font-medium flex items-center space-x-2"
                    target="_blank" // Yangi tabda ochish
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram text-3xl"></i>
                    <span>Instagram</span>
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://t.me/innovatsion_rivojlanish"
                    className="text-blue-500 hover:text-blue-700 transition duration-300 text-md font-medium flex items-center space-x-2"
                    target="_blank" // Yangi tabda ochish
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-telegram-plane text-3xl"></i>
                    <span>Telegram</span>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCvL9mBAQQh--TsyZtQKhKzA/videos"
                    className="text-red-600 hover:text-red-800 transition duration-300 text-md font-medium flex items-center space-x-2"
                    target="_blank" // Yangi tabda ochish
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-youtube text-3xl"></i>
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </section>
          </div>

          <footer className="mt-12 pb-3 text-center text-sm text-gray-600">
            <p>
              © 2025 Innovatsion Rivojlanish Agentligi. Barcha huquqlar
              himoyalangan.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;
