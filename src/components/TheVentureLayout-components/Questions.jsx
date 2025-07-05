import { useState } from "react";

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqsLeft = [
    "Industries For Previewing Layouts",
    "Learn Everything There Know About Ubiquitous",
    "Nonsensical Latin Derived From Cicero's",
    "Creation Timelines For The Standard",
    "Making Letterset's Transfer Sheets Placeholder",
  ];

  const faqsRight = [
    "Industries For Previewing Layouts",
    "Learn Everything There Know About Ubiquitous",
    "Making Your Learning More Enjoyable",
    "Virtual Schooling Made Even Better",
    "Providing The Best Learning Experience",
    "You'll Never Go Wrong With Our Courses",
  ];

  const getIndex = (side, i) => (side === "left" ? i : i + faqsLeft.length);

  return (
    <div className="bg-[#02265A]">
      <div className="w-11/12 mx-auto py-7 md:py-16">
        <h2 className="md:text-[50px] text-[28px] text-center text-white font-bold">
          Frequently Asked Questions
        </h2>
        <p className="text-[#A9A9A9] text-[16px] md:text-[18px] text-center pt-5 px-6 md:px-48">
        Rrow itself let him love it; let him pursue it, ishing for its acquisitiendum. Because he will ab hold, uniess but through concer, and also of those who resist. Now a pure snore disturbeded sum dust. </p>

        <div className="md:grid grid-cols-12 gap-16 pt-6 md:pt-12">
          {/* Left column */}
          <div className="col-span-6 space-y-4">
            {faqsLeft.map((q, i) => {
              const index = getIndex("left", i);
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  onClick={() => toggle(index)}
                  className={`collapse collapse-plus cursor-pointer ${
                    isActive
                      ? "text-[#000000]"
                      : "text-white border border-[#FF922E] rounded-xl"
                  }`}
                  style={
                    isActive
                      ? {
                          background: "linear-gradient(to right, #EBF6FA, #FBD7B2)",
                          borderRadius: "0.75rem",
                          border: "1px solid #FF922E",
                        }
                      : {}
                  }
                >
                  <input type="checkbox" readOnly checked={isActive} />
                  <div className="collapse-title md:text-[19px] text-[14px] font-semibold">
                    {q}
                  </div>
                  <div className="collapse-content text-[14px] text-[#434343]">
                  Rrow itself let him love it; let him pursue it, ishing for its acquisitiendum. Because he will ab hold, uniess but through concer, and also of those who resist. Now a pure snore disturbeded sum dust.   </div>
                </div>
              );
            })}
          </div>

          {/* Right column */}
          <div className="col-span-6 space-y-4 pt-4 md:pt-0">
            {faqsRight.map((q, i) => {
              const index = getIndex("right", i);
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  onClick={() => toggle(index)}
                  className={`collapse collapse-plus cursor-pointer ${
                    isActive
                      ? "text-[#000000]"
                      : "text-white border border-[#FF922E] rounded-xl"
                  }`}
                  style={
                    isActive
                      ? {
                          background: "linear-gradient(to right, #EBF6FA, #FBD7B2)",
                          borderRadius: "0.75rem",
                          border: "1px solid #FF922E",
                        }
                      : {}
                  }
                >
                  <input type="checkbox" readOnly checked={isActive} />
                  <div className="collapse-title md:text-[19px] text-[14px] font-semibold">
                    {q}
                  </div>
                  <div className="collapse-content text-[14px] text-[#434343]">
                  Rrow itself let him love it; let him pursue it, ishing for its acquisitiendum. Because he will ab hold, uniess but through concer, and also of those who resist. Now a pure snore disturbeded sum dust.  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
