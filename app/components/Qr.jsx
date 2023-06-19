"use client";

import QRCode from "react-qr-code";
import { useState } from "react";

const Qr = () => {
  const [qrValue, setQrValue] = useState("Nothing to show");
  return (
    <section className="flex flex-col items-center w-64 ">
      <div
        className="w-48 h-48 bg-white border-2 border-slate-950 
                      mt-10 rounded-md p-1"
      >
        <QRCode
          className="rounded-md"
          value={qrValue}
          size={180}
          bgColor="#FFFFFF"
          fgColor="#000000"
          level="Q"
          includeMargin={true}
          renderAs="svg"
        />
      </div>
      <div className="flex flex-col mt-5 w-64">
        <label
          className="text-slate-950 font-semibold text-md mb-1"
          htmlFor="qrText"
        >
          Enter the content
        </label>
        <input
          className="h-8 border-2 border-slate-950 rounded-md p-2"
          type="text"
          id="qrText"
          placeholder="Enter the content..."
          onChange={(e) => setQrValue(e.target.value)}
        />
      </div>
    </section>
  );
};

export default Qr;
