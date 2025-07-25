// src/fonts/libertinus.ts
import localFont from "next/font/local";

const libertinusMono = localFont({
  src: [
    {
      path: "../../public/fonts/libertinus/Libertinus_Mono/LibertinusMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-libertinus-mono",
  display: "swap",
});

export default libertinusMono;
