"use client";

import QRCode from "react-qr-code";
import { useState, useRef } from "react";
import UpiIcon from "@/public/icons/upi.png";
import Image from "next/image";
import domtoimage from "dom-to-image";

const Qr = () => {
  const [qrValue, setQrValue] = useState("Nothing encoded");
  const [defaultValue, setDefaultValue] = useState("");
  const labelRef = useRef(null);
  const inputRef = useRef(null);
  const qrRef = useRef(null);

  const handleDownload = () => {
    domtoimage.toJpeg(qrRef.current).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "qr.jpeg";
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <section className="flex flex-col items-center w-64">
      <div className="mt-2 px-2 md:mt-3">
        <p className="text-xs font-extralight text-slate-600 text-center">
          You can either put your own content to encode or you can use the below
          buttons to encode your social media links.
        </p>
      </div>
      <div className="flex flex-row">
        <div ref={qrRef}>
          <div
            className="reverse-bg-custom w-50 h-50 bg-white border-2 border-slate-950 
                          mt-4 rounded-md p-2"
          >
            <QRCode
              className="rounded-md"
              value={qrValue}
              size={180}
              bgColor="#FFFFFF"
              fgColor="#000000"
              level="L"
            />
          </div>
        </div>
        {qrValue !== "Nothing encoded" &&
          qrValue !== defaultValue &&
          (qrValue.length > 0 ||
            (defaultValue == "" && qrValue.length > 0)) && (
            <div
              className="flex flex-col bg-amber-200 w-10 mt-4 ml-2 
                          rounded-md text-center font-mono font-semibold
                          text-md border border-gray-700"
              onClick={handleDownload}
            >
              <p>D</p>
              <p>O</p>
              <p>W</p>
              <p>N</p>
              <p>L</p>
              <p>O</p>
              <p>A</p>
              <p>D</p>
            </div>
          )}
      </div>
      <div className="flex flex-row justify-center mt-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="h-7 w-7 mr-3 "
          viewBox="0 0 16 16"
          onClick={() => {
            setDefaultValue("https://www.linkedin.com/in/");
            inputRef.current.value = "";
            setQrValue("https://www.linkedin.com/in/");
            labelRef.current.innerHTML = "Enter the username";
            inputRef.current.placeholder = "first-name-last-name";
          }}
        >
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="h-7 w-7 mr-3"
          viewBox="0 0 16 16"
          onClick={() => {
            setDefaultValue("https://github.com/");
            inputRef.current.value = "";
            setQrValue("https://github.com/");
            labelRef.current.innerHTML = "Enter the username";
            inputRef.current.placeholder = "yourname";
          }}
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="h-7 w-7 mr-3"
          viewBox="0 0 16 16"
          onClick={() => {
            setDefaultValue("https://wa.me/");
            inputRef.current.value = "";
            setQrValue("https://wa.me/");
            labelRef.current.innerHTML = "Enter the mobile number";
            inputRef.current.placeholder = "919048959016";
          }}
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="h-7 w-7 mr-3"
          viewBox="0 0 16 16"
          onClick={() => {
            setDefaultValue("https://youtube.com/");
            inputRef.current.value = "";
            setQrValue("https://youtube.com/");
            labelRef.current.innerHTML = "Enter the channel name";
            inputRef.current.placeholder = "@channelname";
          }}
        >
          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="h-7 w-7 mr-3"
          viewBox="0 0 16 16"
          onClick={() => {
            setDefaultValue("https://www.instagram.com/");
            inputRef.current.value = "";
            setQrValue("https://www.instagram.com/");
            labelRef.current.innerHTML = "Enter the username";
            inputRef.current.placeholder = "your_username";
          }}
        >
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
        </svg>
{/* 
        <Image
          src={UpiIcon}
          alt="upi"
          width={30}
          height={30}
          onClick={() => {
            setDefaultValue("upi://pay?pa=");
            inputRef.current.value = "";
            setQrValue("upi://pay?pa=");
            labelRef.current.innerHTML = "Enter UPI id";
            inputRef.current.placeholder = "yourname@upi";
          }}
        /> */}

        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 mr-3"
          viewBox="0 0 512.000000 512.000000"
          onClick={() => {
            setDefaultValue("upi://pay?pa=");
            inputRef.current.value = "";
            setQrValue("upi://pay?pa=");
            labelRef.current.innerHTML = "Enter UPI id";
            inputRef.current.placeholder = "yourname@upi";
          }}
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="currentColor"
            stroke="none"
          >
            <path
              d="M370 2972 l-136 -507 578 -3 c630 -2 617 -4 655 54 26 41 83 262 83
                327 0 32 -6 73 -14 92 -14 33 -14 35 21 72 57 62 80 111 117 248 42 153 44
                174 13 203 l-23 22 -580 0 -579 0 -135 -508z m1100 296 c0 -13 -10 -51 -36
                -145 l-15 -53 -409 0 -409 0 25 93 c13 50 26 98 29 105 3 9 94 12 410 12 317
                0 405 -3 405 -12z m-110 -410 c0 -13 -10 -51 -36 -145 l-15 -53 -409 0 -409 0
                25 93 c13 50 26 98 29 105 6 18 815 18 815 0z"
            />
            <path
              d="M1926 3428 c-17 -61 -241 -899 -252 -941 l-6 -28 102 3 103 3 44 165
                c24 91 48 182 54 203 l10 37 410 0 c386 0 410 -1 405 -17 -3 -10 -25 -93 -50
                -185 -24 -92 -47 -176 -51 -187 -6 -20 -3 -21 97 -21 l104 0 103 388 c57 213
                119 442 137 510 l33 122 -103 0 -103 0 -54 -202 -54 -203 -407 -3 c-291 -1
                -408 1 -408 9 0 6 23 94 50 195 28 101 50 189 50 194 0 6 -41 10 -100 10 l-99
                0 -15 -52z"
            />
            <path
              d="M3240 2983 c-73 -274 -135 -504 -138 -510 -3 -10 21 -13 99 -13 l104
                0 109 408 c60 224 121 453 137 510 l27 102 -102 0 -102 0 -134 -497z"
            />
            <path
              d="M3780 3477 c0 -7 -253 -958 -266 -999 -5 -16 4 -18 98 -18 l103 0 18
                68 c75 288 111 411 117 407 4 -3 67 -111 140 -240 116 -208 134 -234 148 -223
                9 7 128 115 266 241 137 125 251 226 253 223 2 -2 -25 -110 -60 -240 l-64
                -236 103 0 103 0 10 38 c5 20 66 248 135 506 69 258 126 470 126 472 0 2 -178
                -155 -395 -349 -218 -193 -400 -352 -406 -352 -6 0 -101 153 -211 340 -110
                187 -204 347 -208 355 -5 8 -10 11 -10 7z"
            />
            <path
              d="M822 1787 c-68 -254 -123 -474 -123 -489 1 -16 10 -37 21 -48 20 -20
                33 -20 561 -20 598 0 589 -1 628 64 14 24 261 919 261 949 0 4 -45 7 -100 7
                l-99 0 -15 -52 c-9 -29 -56 -206 -106 -393 -50 -187 -93 -348 -96 -357 -5 -17
                -34 -18 -415 -18 -397 0 -410 1 -404 19 3 10 51 187 106 392 55 206 102 382
                105 392 5 15 -4 17 -98 17 l-103 0 -123 -463z"
            />
            <path
              d="M2375 2238 c-10 -32 -45 -169 -45 -178 0 -7 181 -10 510 -10 281 0
                510 -1 510 -2 -1 -2 -13 -48 -28 -103 l-27 -100 -512 -3 -512 -2 -16 -53 c-26
                -90 -145 -542 -145 -549 0 -5 45 -8 99 -8 l99 0 11 33 c5 17 24 86 41 152 17
                66 38 144 46 173 l15 52 475 0 c518 0 511 -1 552 57 22 31 132 433 132 482 0
                18 -9 40 -20 51 -20 20 -33 20 -600 20 -456 0 -582 -3 -585 -12z"
            />
            <path
              d="M3810 2244 c0 -5 -253 -952 -266 -996 -5 -16 4 -18 98 -18 l103 0
                114 428 c63 235 124 464 136 510 l23 82 -104 0 c-57 0 -104 -3 -104 -6z"
            />
            <path
              d="M4221 2249 c-1 -4 -55 -206 -120 -450 -144 -535 -150 -559 -146 -559
              1 0 64 70 140 155 76 86 139 154 141 153 2 -2 -15 -70 -37 -152 -22 -81 -39
              -150 -37 -151 7 -7 443 495 440 507 -7 35 -168 488 -173 488 -3 0 -23 -67 -44
              -150 -22 -82 -43 -150 -46 -150 -3 0 -31 71 -62 158 -31 86 -56 154 -56 151z"
            />
          </g>
        </svg>
      </div>
      <div className=" flex flex-col mt-3 w-64 mx-2 px-4">
        <label
          className="text-slate-950 font-semibold text-md mb-1"
          htmlFor="qrText"
          ref={labelRef}
        >
          Enter the content
        </label>
        <input
          className="h-8 border-2 border-slate-950 rounded-md p-2"
          type="text"
          ref={inputRef}
          id="qrText"
          placeholder="Enter the content..."
          onChange={(e) => {
            if (e.target.value === "") {
              setQrValue("");
            } else {
              setQrValue(defaultValue + e.target.value);
            }
          }}
        />
      </div>
    </section>
  );
};

export default Qr;
