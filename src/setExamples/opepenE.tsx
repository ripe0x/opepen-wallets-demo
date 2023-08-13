import { useEffect, useState } from "react";
import { gradientForAddress, walletColors } from "../lib";
type Props = {
  address: string;
};

export default function OpepenE({ address }: Props) {
  const bgColors = ["#fff", "#2851E6"];
  const baseColor = (min: number, max: number) => {
    let lColor = Math.floor(Math.random() * max) + min;
    if (lColor > max) {
      lColor = max;
    }
    const opacity = Math.floor(Math.random() * 100) + 20;
    return `hsl(227, 79%, ${lColor}%, ${opacity}%)`;
  }

  const backgroundColorIndex = () => {
    return Math.floor(Math.random() * bgColors.length);
  }

  const svg = (address: string) => {
    let bgOpacity = Math.floor(Math.random() * 100) + 50;
    const bgIndex = backgroundColorIndex();
    const bgColor = bgColors[bgIndex];
    let baseColorMin = 30;
    let baseColorMax = 80;
    if (bgIndex === 1) {
      baseColorMin = 60;
      baseColorMax = 99;
      bgOpacity = 0;
    }
    return `
  <svg xmlns="http://www.w3.org/2000/svg" width="2000" height="2000" fill="none" viewBox="0 0 2000 2000">
  <path fill="#2851E6" d="M2000 0H0v2000h2000V0Z"/>
  <path fill="
  ${bgColor}
  " d="M2000 0H0v2000h2000V0Z" opacity="1"/>
  <path fill="
  ${baseColor(baseColorMin, baseColorMax)}
  " d="M746 501H504v240h242V501Z"/>
  <path fill="
  ${baseColor(baseColorMin, baseColorMax)}
  " d="M754 502a239.998 239.998 0 0 1 169.705 70.295A239.997 239.997 0 0 1 994 742H754V502Z"/>
  <path fill="
  ${baseColor(baseColorMin, baseColorMax)}
  " d="M1244 502a239.983 239.983 0 0 0-169.7 70.295 239.93 239.93 0 0 0-52.03 77.861A240.023 240.023 0 0 0 1004 742h240V502Z"/>
  <path fill="
  ${baseColor(baseColorMin, baseColorMax)}
  " d="M1254 502c63.65 0 124.69 25.286 169.71 70.295A240.03 240.03 0 0 1 1494 742h-240V502Z"/>
  <path fill="
  ${baseColor(baseColorMin, baseColorMax)}
  " d="M504 751c0 63.652 25.497 124.696 70.881 169.705C620.264 965.714 681.818 991 746 991V751H504Z"/>
  <path fill="
  ${baseColor(baseColorMin, baseColorMax)}
  " d="M1004 752a239.999 239.999 0 0 0 70.3 169.705A239.992 239.992 0 0 0 1244 992V752h-240Z"  />
  <path fill="
  ${baseColor(baseColorMin, baseColorMax)}
  " d="M994 752a240.004 240.004 0 0 1-70.294 169.706A240.004 240.004 0 0 1 754 992V752h240Z" style="mix-blend-mode: multiply;"/>
  <path fill="
  ${baseColor(baseColorMin, baseColorMax)}
  " d="M1494 752a239.993 239.993 0 0 1-70.29 169.705A240.032 240.032 0 0 1 1254 992V752h240Z" style="mix-blend-mode: multiply;" />
  <path fill="
  ${baseColor(baseColorMin, baseColorMax)}
  " d="M746 1000H504v240h242v-240Z"/>
  <path fill="
  ${baseColor(baseColorMin, baseColorMax)}
  " d="M994 1001H754v240h240v-240Z"/>
  <path fill="
  ${baseColor(baseColorMin, baseColorMax)}
  " d="M1244 1001h-240v240h240v-240Z"/>
  <path fill="
  ${baseColor(baseColorMin, baseColorMax)}
  " d="M1494 1001h-240v240h240v-240Z"/>
  <path fill="
  ${baseColor(baseColorMin, baseColorMax)}
  " d="M994 1760H754v240h240v-240Z" />
  <path fill="
  ${baseColor(baseColorMin, baseColorMax)}
  " d="M1244 1760h-240v240h240v-240Z"/>
  <path fill="
  ${baseColor(baseColorMin, baseColorMax)}
  " d="M994 1251H754v240h240v-240Z"/>
  <path fill="
  ${baseColor(baseColorMin, baseColorMax)}
  " d="M1244 1251h-240v240h240v-240Z"/>
  <path fill="
  ${baseColor(baseColorMin, baseColorMax)}
  " d="M504 1250c0 63.65 25.497 124.69 70.881 169.71C620.266 1464.72 681.819 1490 746 1490v-240H504Z"/>
  <path fill="
  ${baseColor(baseColorMin, baseColorMax)}
  " d="M1494 1251c0 63.65-25.29 124.69-70.29 169.71A240.048 240.048 0 0 1 1254 1491v-240h240Z"/>
  <path fill="
  ${baseColor(baseColorMin, baseColorMax)}
  " d="M746 1759c-64.181 0-125.734 25.28-171.119 70.29C529.498 1874.3 504.002 1935.35 504 1999h242v-240Z"/>
  <path fill="
  ${baseColor(baseColorMin, baseColorMax)}
  " d="M1254 1760c63.65 0 124.69 25.29 169.71 70.29 45 45.01 70.29 106.06 70.29 169.71h-240v-240Z"/>
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

