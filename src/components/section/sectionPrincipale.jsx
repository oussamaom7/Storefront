import React from "react";
import "./sectionPrincipale.css"; // Ensure correct file extension for CSS

export default function SectionPrincipale() {
  const divStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    // Add any other background properties you need
  };

  return (
    <div className="flex justify-around items-center h-screen flex-wrap">
      <div class="flex-initial w-50">
        <span>
          <h6 class="font-bold text-4xl text-color0 leading-relaxed font-serif">Votre billetterie en ligne </h6>
          <h6 class="font-bold text-4xl text-color0 leading-relaxed font-serif">au Maroc pour</h6>
          <span data-text="Creative..." className="text font-serif">
            Creative...
          </span>
        </span>
      </div>

      <div className="flex-initial w-96">
        <div className="grid grid-rows-[25px_minmax(25px,_1fr)_25px] grid-cols-6 gap-2 auto-rows-fr auto-cols-fr">
          <div
            style={{
              ...divStyle,
              backgroundImage: `url('https://www.billetteries.ma/files/themes/01/assets/img/demos/vc1.webp')`,
            }}
            className="row-start-2 row-end-6 col-span-2 rounded"
          ></div>

          <div
            style={{
              ...divStyle,
              backgroundImage: `url('https://www.billetteries.ma/files/themes/01/assets/img/demos/vc2.webp')`,
            }}
            className="row-span-4 col-span-2 rounded"
          ></div>

          <div
            style={{
              ...divStyle,
              backgroundImage: `url('https://www.billetteries.ma/files/themes/01/assets/img/demos/vc3.webp')`,
            }}
            className="row-span-6 col-span-2 rounded"
          ></div>

          <div
            style={{
              ...divStyle,
              backgroundImage: `url('https://www.billetteries.ma/files/themes/01/assets/img/demos/vc4.webp')`,
            }}
            className=" row-span-5 col-span-2 rounded"
          ></div>

          <div
            style={{
              ...divStyle,
              backgroundImage: `url('https://www.billetteries.ma/files/themes/01/assets/img/demos/vc5.webp')`,
            }}
            className="row-span-4 col-span-2 rounded"
          ></div>

          <div
            style={{
              ...divStyle,
              backgroundImage: `url('https://www.billetteries.ma/files/themes/01/assets/img/demos/vc6.webp')`,
            }}
            className="row-span-6 col-span-2 rounded"
          ></div>

          <div
            style={{
              ...divStyle,
              backgroundImage: `url('https://www.billetteries.ma/files/themes/01/assets/img/demos/vc7.webp')`,
            }}
            className="row-span-2 col-span-2 rounded"
          ></div>

          <div
            style={{
              ...divStyle,
              backgroundImage: `url('https://www.billetteries.ma/files/themes/01/assets/img/demos/vc8.webp')`,
            }}
            className="row-span-4 col-span-2 rounded"
          ></div>
        </div>
      </div>
    </div>
  );
}
