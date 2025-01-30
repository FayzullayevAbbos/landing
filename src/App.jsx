import {
  ChevronsLeftRightEllipsis,
  Earth,
  Facebook,
  Instagram,
  MailIcon,
  MapPin,
  PhoneIcon,
  Send,
  Youtube,
} from "lucide-react";
import React from "react";
import logo from "./assets/logo.png";
import bg from "./assets/bg.png";

const App = () => {
  function ContactItem({icon, label, value, link}) {
    return (
      <div className="flex gap-2 items-center space-x-3 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
        <div className="w-4 h-6">{icon}</div>
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
  function SocialLink({icon, label, link, hoverColor}) {
    return (
      <a
        href={link}
        className={`flex items-center justify-center space-x-3 bg-white p-4 rounded-lg shadow-sm transition hover:shadow-md ${hoverColor}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
        <span className="text-md font-medium">{label}</span>
      </a>
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

          <div className=" bg-gray-100 py-4  md:p-4 rounded-xl  ">
            <section className="bg-gray-100 px-3 mb-8  md:px-5 rounded-xl   mx-auto">
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
                  icon={
                    <MailIcon
                      
                      className="h-6 w-6 text-yellow-500"
                    />
                  }
                  label="E-xat"
                  value="mininnovation@exat.uz"
                  link="mailto:mininnovation@exat.uz"
                />
                <ContactItem
                  icon={<MapPin  className="w-6 h-6 text-red-500" />}
                  label="Manzil"
                  value="100174, Toshkent sh., Olmazor tumani, Universitet ko‘chasi, 7-uy"
                  link="https://maps.app.goo.gl/CSxXMhR8ZkXEJCNy9"
                />
                <ContactItem
                  icon={<Earth width={30} className=" text-blue-500" />}
                  label="Veb-sayt"
                  value="https://innovation.gov.uz/"
                  link="https://innovation.gov.uz/"
                />
              </div>
            </section>

            <section className="bg-gray-100 px-3 md:px-5 rounded-xl  mx-auto">
              <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">
                Ijtimoiy Tarmoqlar
              </h2>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
                <SocialLink
                  icon={<Facebook className="h-6 w-6 text-blue-600" />}
                  label="Facebook"
                  link="https://www.facebook.com/innovation.gov.uz"
                  hoverColor="hover:text-blue-800"
                />
                <SocialLink
                  icon={<Instagram className="h-6 w-6 text-pink-600" />}
                  label="Instagram"
                  link="https://www.instagram.com/innovation.gov.uz/"
                  hoverColor="hover:text-pink-800"
                />
                <SocialLink
                  icon={<Send className="h-6 w-6 text-blue-500" />}
                  label="Telegram"
                  link="https://t.me/innovatsion_rivojlanish"
                  hoverColor="hover:text-blue-700"
                />
                <SocialLink
                  icon={<Youtube className="h-6 w-6 text-red-600" />}
                  label="YouTube"
                  link="https://www.youtube.com/channel/UCvL9mBAQQh--TsyZtQKhKzA/videos"
                  hoverColor="hover:text-red-800"
                />
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
