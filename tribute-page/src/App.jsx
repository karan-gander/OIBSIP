// import { useState } from 'react'
// import './App.css'
import ratanData from "/ratantata.jpg";

function App() {
  return (
    <>
      <div className="w-full p-10 min-h-screen bg-black text-orange-200  font-[robot] ">
        <div className="flex justify-center flex-row-reverse items-center flex-wrap">
          <div className="">
            <img
              src={ratanData}
              alt="ratan tata"
              className="w-[500px] h-[500px] object-contain rounded-full"
            />
          </div>
          <div className="border border-orange-200 p-10 min-h-[200px]  w-full lg:w-auto">
            <h1 className="text-2xl">
              I don&apos;t believe in taking right decisions. <br /> I take
              decisions and then make it them right.
              <br />
              <br />
              <span className="font-extralight ">Ratan Tata</span>
              {/* <br /> */}
              {/* <br /> */}
              {/* <button className="ml-72 font-mono  text-black bg-orange-100 px-6 py-2">
                Ratan Tata
              </button> */}
            </h1>
          </div>
        </div>
        <div className="p-0">
          <h1 className="text-4xl p-5 text-white text-center">Biography</h1>
          <p className="font-[robot] text-2px">
            <span className="font-bold text-2xl font-mono">Ratan Tata</span> is a highly respected Indian industrialist,
            philanthropist, and former chairman of Tata Sons, the holding
            company of the Tata Group, one of India's largest and oldest
            conglomerates. Born on December 28, 1937, Ratan Tata is known for
            his visionary leadership and his commitment to ethical business
            practices. Under his guidance, the Tata Group expanded globally,
            acquiring iconic brands such as Jaguar Land Rover and Tetley Tea.
            His focus on innovation, sustainability, and social responsibility
            has earned him admiration both in India and abroad. Beyond business,
            Ratan Tata is deeply committed to philanthropy through the Tata
            Trusts, which work towards education, healthcare, and rural
            development in India. A man of integrity, humility, and foresight,
            Ratan Tata is often regarded as one of the most influential and
            beloved business leaders in India's history.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
