import { useEffect, useState } from "react";
import { gradientForAddress, walletColors } from "../lib";
type Props = {
  address: string;
};

const randomOffset = () => {
  return Math.floor(Math.random() * 33);
}

export default function OpepenOffset({ address }: Props) {
  const svg = (address: string) => {
    const colors = walletColors(address, 1);
    const ogColors = gradientForAddress(address);
    const bgOpacity = Math.floor(Math.random() * 88);
    // const bgOpacity2 = Math.floor(Math.random() * 69);
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="2000" height="2000" fill="none" viewBox="0 0 2000 2000">
    <path fill="#111" d="M2000 0H0v2000h2000V0Z"/>
    <path fill="${ogColors[2]}" d="M2000 0H0v2000h2000V0Z" opacity="0.${bgOpacity}" />
    
    <path style="mix-blend-mode: hard-light; transform: translate(${randomOffset()}px, ${randomOffset()}px);" fill="${colors[1]}" opacity="0.${Math.floor(Math.random() * 88)}" d="M755 500H500v255h255V500Z"/>
    <path style="mix-blend-mode: hard-light; transform: translate(${randomOffset()}px, ${randomOffset()}px);" fill="${colors[2]}" opacity="0.${Math.floor(Math.random() * 88)}" d="M750 500c66.304 0 129.892 26.445 176.776 73.517C973.66 620.588 1000 684.431 1000 751H750V500Z"/>
    <path style="mix-blend-mode: hard-light; transform: translate(${randomOffset()}px, ${randomOffset()}px);" fill="${colors[3]}" opacity="0.${Math.floor(Math.random() * 88)}" d="M1252 500a252.017 252.017 0 0 0-232.82 155.564A252.075 252.075 0 0 0 1000 752h252V500Z"/>
    <path style="mix-blend-mode: hard-light; transform: translate(${randomOffset()}px, ${randomOffset()}px);" fill="${colors[4]}" opacity="0.${Math.floor(Math.random() * 88)}" d="M1250 500c66.3 0 129.89 26.445 176.78 73.517C1473.66 620.588 1500 684.431 1500 751h-250V500Z"/>
    <path style="mix-blend-mode: hard-light; transform: translate(${randomOffset()}px, ${randomOffset()}px);" fill="${colors[5]}" opacity="0.${Math.floor(Math.random() * 88)}" d="M500 750c0 66.304 26.445 129.892 73.517 176.776C620.588 973.66 684.431 1000 751 1000V750H500Z"/>
    <path style="mix-blend-mode: hard-light; transform: translate(${randomOffset()}px, ${randomOffset()}px);" fill="${colors[6]}" opacity="0.${Math.floor(Math.random() * 88)}" d="M1000 750c0 66.304 26.45 129.892 73.52 176.776C1120.59 973.66 1184.43 1000 1251 1000V750h-251Z"/>
    <path style="mix-blend-mode: hard-light; transform: translate(${randomOffset()}px, ${randomOffset()}px);" fill="${colors[7]}" opacity="0.${Math.floor(Math.random() * 88)}" d="M1000 750a250 250 0 0 1-250 250V750h250Z"/>
    <path style="mix-blend-mode: hard-light; transform: translate(${randomOffset()}px, ${randomOffset()}px);" fill="${colors[8]}" opacity="0.${Math.floor(Math.random() * 88)}" d="M1500 750a250.016 250.016 0 0 1-73.22 176.776A250.039 250.039 0 0 1 1250 1000V750h250Z"/>
    <path style="mix-blend-mode: hard-light; transform: translate(${randomOffset()}px, ${randomOffset()}px);" fill="${colors[9]}" opacity="0.${Math.floor(Math.random() * 88)}" d="M760 1000H500v255h260v-255Z"/>
    <path style="mix-blend-mode: hard-light; transform: translate(${randomOffset()}px, ${randomOffset()}px);" fill="${colors[10]}" opacity="0.${Math.floor(Math.random() * 88)}" d="M1005 1000H750v255h255v-255Z"/>
    <path style="mix-blend-mode: hard-light; transform: translate(${randomOffset()}px, ${randomOffset()}px);" fill="${colors[11]}" opacity="0.${Math.floor(Math.random() * 88)}" d="M1255 1000h-255v255h255v-255Z"/>
    <path style="mix-blend-mode: hard-light; transform: translate(${randomOffset()}px, ${randomOffset()}px);" fill="${colors[12]}" opacity="0.${Math.floor(Math.random() * 88)}" d="M1500 1000h-250v255h250v-255Z"/>
    <path style="mix-blend-mode: hard-light; transform: translate(${randomOffset()}px, ${randomOffset()}px);" fill="${colors[13]}" opacity="0.${Math.floor(Math.random() * 88)}" d="M1005 1750H749v250h256v-250Z"/>
    <path style="mix-blend-mode: hard-light; transform: translate(${randomOffset()}px, ${randomOffset()}px);" fill="${colors[14]}" opacity="0.${Math.floor(Math.random() * 88)}" d="M1255 1750h-255v250h255v-250Z"/>
    <path style="mix-blend-mode: hard-light; transform: translate(${randomOffset()}px, ${randomOffset()}px);" fill="${colors[15]}" opacity="0.${Math.floor(Math.random() * 88)}" d="M1003 1250H743v250h260v-250Z"/>
    <path style="mix-blend-mode: hard-light; transform: translate(${randomOffset()}px, ${randomOffset()}px);" fill="${colors[16]}" opacity="0.${Math.floor(Math.random() * 88)}" d="M1255 1250h-255v250h255v-250Z"/>
    <path style="mix-blend-mode: hard-light; transform: translate(${randomOffset()}px, ${randomOffset()}px);" fill="${colors[17]}" opacity="0.${Math.floor(Math.random() * 88)}" d="M500 1250c0 66.3 26.34 129.89 73.224 176.78A250.016 250.016 0 0 0 750 1500v-250H500Z"/>
    <path style="mix-blend-mode: hard-light; transform: translate(${randomOffset()}px, ${randomOffset()}px);" fill="${colors[18]}" opacity="0.${Math.floor(Math.random() * 88)}" d="M1500 1250c0 66.3-26.34 129.89-73.22 176.78A250.04 250.04 0 0 1 1250 1500v-250h250Z"/>
    <path style="mix-blend-mode: hard-light; transform: translate(${randomOffset()}px, ${randomOffset()}px);" fill="${colors[3]}" opacity="0.${Math.floor(Math.random() * 88)}" d="M750 1750a250.016 250.016 0 0 0-176.776 73.22A250.039 250.039 0 0 0 500 2000h250v-250Z"/>
    <path style="mix-blend-mode: hard-light; transform: translate(${randomOffset()}px, ${randomOffset()}px);" fill="${colors[2]}" opacity="0.${Math.floor(Math.random() * 88)}" d="M1250 1750c66.3 0 129.89 26.34 176.78 73.22A250.04 250.04 0 0 1 1500 2000h-250v-250Z"/>
    <path style="mix-blend-mode: hard-light; transform: translate(${randomOffset()}px, ${randomOffset()}px);" fill="${ogColors[0]}" fill-rule="evenodd" d="M1509.88 474.74a11.546 11.546 0 0 0-9.88-5.558 11.548 11.548 0 0 0-9.88 5.558 11.58 11.58 0 0 0-10.93 3.053 11.666 11.666 0 0 0-2.96 5.063 11.65 11.65 0 0 0-.09 5.864 11.61 11.61 0 0 0-4.05 4.221 11.667 11.667 0 0 0-1.47 5.659c0 1.981.51 3.93 1.47 5.659a11.61 11.61 0 0 0 4.05 4.221c-.48 1.932-.45 3.954.08 5.87a11.69 11.69 0 0 0 2.96 5.072 11.572 11.572 0 0 0 10.94 3.058 11.584 11.584 0 0 0 4.21 4.087c1.73.977 3.68 1.49 5.67 1.49 1.99 0 3.94-.513 5.67-1.49a11.584 11.584 0 0 0 4.21-4.087c1.93.485 3.96.46 5.88-.071a11.576 11.576 0 0 0 5.09-2.962 11.527 11.527 0 0 0 2.96-5.084c.53-1.922.55-3.949.07-5.883a11.61 11.61 0 0 0 4.05-4.221 11.667 11.667 0 0 0 1.47-5.659c0-1.981-.51-3.93-1.47-5.659a11.61 11.61 0 0 0-4.05-4.221c.47-1.932.44-3.954-.09-5.87a11.594 11.594 0 0 0-2.97-5.068 11.563 11.563 0 0 0-10.94-3.042Zm-11.64 34.44 13.42-20.12c1.66-2.5-2.2-5.08-3.88-2.6l-11.82 17.8-4.04-4.04c-2.12-2.12-5.4 1.18-3.28 3.3l6.38 6.32c.25.17.54.288.84.346.29.058.6.056.9-.006.3-.061.59-.18.84-.352.25-.171.47-.392.64-.648Z" clip-rule="evenodd"/>
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

