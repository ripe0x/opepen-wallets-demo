import { useEffect, useState } from "react";
import { gradientForAddress, walletColors } from "../lib";
type Props = {
  address: string;
};


export default function OpepenA({ address }: Props) {
  const svg = (address: string) => {
    const ogColors = gradientForAddress(address);
    const colors = walletColors(address, 1);
    const bgColor = colors[0];
    const eyeColor = colors[1];
    const bgOpacity = Math.floor(Math.random() * 88);
    return `
  <svg xmlns="http://www.w3.org/2000/svg" width="2000" height="2000" fill="none" viewBox="0 0 2000 2000">
  <path fill="#111111" d="M2000 0H0v2000h2000V0Z"/>
  <path fill="
  ${bgColor}
  " d="M2000 0H0v2000h2000V0Z" opacity=".${bgOpacity}"/>
  <path fill="
  ${colors[2]}
  " d="M746 501H504v240h242V501Z"/>
  <path fill="
  ${colors[3]}
  " d="M754 502a239.998 239.998 0 0 1 169.705 70.295A239.997 239.997 0 0 1 994 742H754V502Z"/>
  <path fill="
  ${colors[4]}
  " d="M1244 502a239.983 239.983 0 0 0-169.7 70.295 239.93 239.93 0 0 0-52.03 77.861A240.023 240.023 0 0 0 1004 742h240V502Z"/>
  <path fill="
  ${colors[5]}
  " d="M1254 502c63.65 0 124.69 25.286 169.71 70.295A240.03 240.03 0 0 1 1494 742h-240V502Z"/>
  <path fill="
  ${colors[6]}
  " d="M504 751c0 63.652 25.497 124.696 70.881 169.705C620.264 965.714 681.818 991 746 991V751H504Z"/>
  <path fill="
  ${colors[7]}
  " d="M1004 752a239.999 239.999 0 0 0 70.3 169.705A239.992 239.992 0 0 0 1244 992V752h-240Z"  />
  <path fill="
  ${eyeColor}
  " d="M994 752a240.004 240.004 0 0 1-70.294 169.706A240.004 240.004 0 0 1 754 992V752h240Z" style="mix-blend-mode: multiply;"/>
  <path fill="
  ${eyeColor}
  " d="M1494 752a239.993 239.993 0 0 1-70.29 169.705A240.032 240.032 0 0 1 1254 992V752h240Z" style="mix-blend-mode: multiply;" />
  <path fill="
  ${colors[10]}
  " d="M746 1000H504v240h242v-240Z"/>
  <path fill="
  ${colors[11]}
  " d="M994 1001H754v240h240v-240Z"/>
  <path fill="
  ${colors[12]}
  " d="M1244 1001h-240v240h240v-240Z"/>
  <path fill="
  ${colors[13]}
  " d="M1494 1001h-240v240h240v-240Z"/>
  <path fill="
  ${colors[14]}
  " d="M994 1751H754v240h240v-240Z"/>
  <path fill="
  ${colors[15]}
  " d="M1244 1751h-240v240h240v-240Z"/>
  <path fill="
  ${colors[16]}
  " d="M994 1251H754v240h240v-240Z"/>
  <path fill="
  ${colors[17]}
  " d="M1244 1251h-240v240h240v-240Z"/>
  <path fill="
  ${colors[18]}
  " d="M504 1250c0 63.65 25.497 124.69 70.881 169.71C620.266 1464.72 681.819 1490 746 1490v-240H504Z"/>
  <path fill="
  ${colors[19]}
  " d="M1494 1251c0 63.65-25.29 124.69-70.29 169.71A240.048 240.048 0 0 1 1254 1491v-240h240Z"/>
  <path fill="
  ${colors[2]}
  " d="M746 1750c-64.181 0-125.734 25.28-171.119 70.29C529.498 1865.3 504.002 1926.35 504 1990h242v-240Z"/>
  <path fill="
  ${colors[3]}
  " d="M1254 1751c63.65 0 124.69 25.29 169.71 70.29 45 45.01 70.29 106.06 70.29 169.71h-240v-240Z"/>
  <path fill="
  ${ogColors[0]}
  " fill-rule="evenodd" d="M1509.88 474.74a11.546 11.546 0 0 0-9.88-5.558 11.548 11.548 0 0 0-9.88 5.558 11.58 11.58 0 0 0-10.93 3.053 11.666 11.666 0 0 0-2.96 5.063 11.65 11.65 0 0 0-.09 5.864 11.61 11.61 0 0 0-4.05 4.221 11.667 11.667 0 0 0-1.47 5.659c0 1.981.51 3.93 1.47 5.659a11.61 11.61 0 0 0 4.05 4.221c-.48 1.932-.45 3.954.08 5.87a11.69 11.69 0 0 0 2.96 5.072 11.572 11.572 0 0 0 10.94 3.058 11.584 11.584 0 0 0 4.21 4.087c1.73.977 3.68 1.49 5.67 1.49 1.99 0 3.94-.513 5.67-1.49a11.584 11.584 0 0 0 4.21-4.087c1.93.485 3.96.46 5.88-.071a11.576 11.576 0 0 0 5.09-2.962 11.527 11.527 0 0 0 2.96-5.084c.53-1.922.55-3.949.07-5.883a11.61 11.61 0 0 0 4.05-4.221 11.667 11.667 0 0 0 1.47-5.659c0-1.981-.51-3.93-1.47-5.659a11.61 11.61 0 0 0-4.05-4.221c.47-1.932.44-3.954-.09-5.87a11.594 11.594 0 0 0-2.97-5.068 11.563 11.563 0 0 0-10.94-3.042Zm-11.64 34.44 13.42-20.12c1.66-2.5-2.2-5.08-3.88-2.6l-11.82 17.8-4.04-4.04c-2.12-2.12-5.4 1.18-3.28 3.3l6.38 6.32c.25.17.54.288.84.346.29.058.6.056.9-.006.3-.061.59-.18.84-.352.25-.171.47-.392.64-.648Z" clip-rule="evenodd"/>
</svg>
  `;
  };

  const img = (address: string) => {
    return `data:image/svg+xml;base64,${Buffer.from(
      svg(address),
      "utf-8"
    ).toString("base64")}`;
  };
  const [image, setImage] = useState<string>(img(address));
  useEffect(() => {
    setImage(img(address));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);
  return (
    <div>
      <img
        src={image}
        alt=""
      />
    </div>
  );
};

