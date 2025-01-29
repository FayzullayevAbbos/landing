import {ChevronsLeftRightEllipsis, MailIcon, MapPin, PhoneIcon} from "lucide-react";
import React from "react";
import logo from "./assets/logo.png";

const App = () => {
  return (
    <div className="bg-gray-100  w-full min-h-screen flex items-center justify-center font-poppins px-4">
      <div className="container max-w-[350px] px-6 pt-8 bg-white shadow-lg rounded-lg">
        <header className="text-center mb-7">
          <div className="w-full flex items-center justify-center">
            <img  width={30} src={logo} alt="" />
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
          <section>
            <h2 className="text-xl text-center font-meduim text-black mb-4">
              Aloqa Ma'lumotlari
            </h2>
            <ul className="space-y-3 text-lg text-gray-700">
            <li className="flex items-center">
                <ChevronsLeftRightEllipsis  className="h-6 w-6 text-yellow-500 mr-3" />
                <a
                  href="https://www.ilmiy.uz"
                  className="text-blue-500 hover:text-blue-700 hover:underline"
                  target="_blank" // Yangi tabda ochish
                  // rel="noopener noreferrer"
                >
                 www.ilmiy.uz
                </a>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-green-500 mr-3" />
                <a
                  href="tel:+998712033223"
                  className="text-blue-500 hover:text-blue-700 hover:underline"
                  target="_blank" // Yangi tabda ochish
                  rel="noopener noreferrer"
                >
                  +998 (71) 203-32-23
                </a>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-green-500 mr-3" />
                <a
                  href="tel:+998712033223"
                  className="text-blue-500 hover:text-blue-700 hover:underline"
                  target="_blank" // Yangi tabda ochish
                  rel="noopener noreferrer"
                >
                  +998 (71) 203-32-23
                </a>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-6 w-6 text-yellow-500 mr-3" />
                <a
                  href="mailto:info@ilmiy.uz"
                  className="text-blue-500 hover:text-blue-700 hover:underline"
                  target="_blank" // Yangi tabda ochish
                  rel="noopener noreferrer"
                >
                  info@ilmiy.uz
                </a>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-6 w-6 text-yellow-500 mr-3" />
                <a
                  href="mailto:mininnovation@exat.uz"
                  className="text-blue-500 hover:text-blue-700 hover:underline"
                  target="_blank" // Yangi tabda ochish
                  rel="noopener noreferrer"
                >
                  mininnovation@exat.uz
                </a>
              </li>
              <a
                href="https://maps.app.goo.gl/CSxXMhR8ZkXEJCNy9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="flex flex-flow text-blue-500 ">
                  <MapPin className=" w-12 text-red-500 mr-2" />
                  100174, Toshkent sh., Olmazor tumani., Universitet ko‘chasi.,
                  7-uy
                </li>
              </a>
            </ul>
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
  );
};

export default App;
