import React from "react";
import logo from "../public/logo.png";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-blue-600 text-white p-6">
      <header className="flex justify-between items-center mb-10">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="RIVAL Packing Logo" className="w-16 h-16" />
          <h1 className="text-3xl font-bold">RIVAL Packing</h1>
        </div>
        <div className="bg-yellow-400 w-8 h-4 rounded-sm" />
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Надійні пакувальні матеріали від українського виробника 🇺🇦</h2>
        <p className="text-lg">Ми пропонуємо якісні рішення для зберігання, транспортування та пакування продукції.</p>
      </section>

      <section className="bg-white text-blue-800 p-6 rounded-2xl shadow-lg mb-10">
        <h3 className="text-xl font-bold mb-4">Про компанію</h3>
        <p className="mb-2">🔹 Досвід у виробництві пакувальних матеріалів — більше 5 років</p>
        <p className="mb-2">🔹 Знаходимось у місті Дніпро</p>
        <p className="mb-2">🔹 Працюємо як з малим, так і з великим оптом</p>
        <p className="mb-2">🔹 Перевага — індивідуальний підхід до кожного клієнта</p>
      </section>

      <section className="bg-white text-blue-800 p-6 rounded-2xl shadow-lg mb-10">
        <h3 className="text-xl font-bold mb-4">Наша продукція</h3>
        <ul className="space-y-2 list-disc list-inside">
          <li>Поліетиленова плівка</li>
          <li>Стрейч плівка</li>
          <li>Мішки та пакети поліетиленові</li>
          <li>Скотч</li>
          <li>Гофротара</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-2">Контакти</h3>
        <p>Телефон: <span className="text-yellow-300 font-semibold">+380733262132</span></p>
        <p>Email: <span className="text-yellow-300 font-semibold">rival.oleksij@gmail.com</span></p>
        <p>Instagram: <a href="https://www.instagram.com/llc_rival?igsh=MTZ1ZzM2a2pmcGU4cA==" className="underline text-yellow-300">@llc_rival</a></p>
        <p>TikTok: <a href="https://www.tiktok.com/@rival_packing?_t=ZM-8xLADxtOfFl&_r=1" className="underline text-yellow-300">@rival_packing</a></p>
      </section>
    </div>
  );
}

export default App;
