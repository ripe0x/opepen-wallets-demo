import { useEffect, useState } from "react";
import { gradientForAddress, walletColors } from "../lib";
import { random } from "tinycolor2";
type Props = {
  address: string;
};


export default function OpepenB({ address }: Props) {


  const svg = (address: string) => {
    const ogColors = gradientForAddress(address);
    const colors = walletColors(address, 5);
    const bgColor = colors[0];
    const eyeColor = colors[1];
    const bgOpacity = Math.floor(Math.random() * 88);
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="2000" height="2000" fill="none" viewBox="0 0 2000 2000">
    <path fill="#111" d="M2000 0H0v2000h2000V0Z"/>
    <path fill="${bgColor}" d="M2000 0H0v2000h2000V0Z" opacity=".${bgOpacity}"/>
    <path fill="${colors[2]}" d="M750 500H500v240h250V500Z"/>
    <path fill="${colors[2]}" d="M750 500c66.304 0 129.892 25.286 176.776 70.295C973.66 615.303 1000 676.348 1000 740H750V500Z"/>
    <path fill="${colors[2]}" d="M1250 500c-66.3.001-129.89 25.287-176.78 70.295-23.21 22.286-41.63 48.743-54.19 77.861C1006.47 677.274 1000 708.483 1000 740h250V500Z"/>
    <path fill="${colors[2]}" d="M1250 500c66.3 0 129.89 25.286 176.78 70.295C1473.66 615.303 1500 676.348 1500 740h-250V500Z"/>
    <path fill="${eyeColor}" d="M500 760c0 63.652 26.34 124.696 73.224 169.705C620.108 974.714 683.696 1000 750 1000V760H500Z" />
    <path fill="${eyeColor}" d="M1000 760c0 63.652 26.34 124.696 73.23 169.705C1120.11 974.714 1183.7 1000 1250 1000V760h-250Z" />
    <path fill="${eyeColor}" d="M1000 760c0 63.652-26.339 124.697-73.223 169.706C879.893 974.714 816.304 1000 750 1000V760h250Z" />
    <path fill="${eyeColor}" d="M1500 760c0 63.651-26.34 124.695-73.22 169.705-46.89 45.007-110.48 70.293-176.78 70.295V760h250Z" />
    <path fill="${colors[0]}" d="M750 1000H500v250h250v-250Z"/>
    <path fill="${colors[0]}" d="M990 1000H750v250h240v-250Z"/>
    <path fill="${colors[0]}" d="M1250 1000h-240v250h240v-250Z"/>
    <path fill="${colors[0]}" d="M1500 1000h-250v250h250v-250Z"/>
    <path fill="${colors[0]}" d="M990 1750H750v250h240v-250Z"/>
    <path fill="${colors[0]}" d="M1250 1750h-240v250h240v-250Z"/>
    <path fill="${colors[0]}" d="M990 1250H750v250h240v-250Z"/>
    <path fill="${colors[0]}" d="M1250 1250h-240v250h240v-250Z"/>
    <path fill="${colors[0]}" d="M500 1250c0 66.3 26.34 129.89 73.224 176.78A250.016 250.016 0 0 0 750 1500v-250H500Z"/>
    <path fill="${colors[0]}" d="M1500 1250c0 66.3-26.34 129.89-73.22 176.78A250.04 250.04 0 0 1 1250 1500v-250h250Z"/>
    <path fill="${colors[0]}" d="M750 1750a250.016 250.016 0 0 0-176.776 73.22A250.039 250.039 0 0 0 500 2000h250v-250Z"/>
    <path fill="${colors[0]}" d="M1250 1750c66.3 0 129.89 26.34 176.78 73.22A250.04 250.04 0 0 1 1500 2000h-250v-250Z"/>
    <path fill="${ogColors[0]}" fill-rule="evenodd" d="M1509.88 474.74a11.546 11.546 0 0 0-9.88-5.558 11.548 11.548 0 0 0-9.88 5.558 11.58 11.58 0 0 0-10.93 3.053 11.666 11.666 0 0 0-2.96 5.063 11.65 11.65 0 0 0-.09 5.864 11.61 11.61 0 0 0-4.05 4.221 11.667 11.667 0 0 0-1.47 5.659c0 1.981.51 3.93 1.47 5.659a11.61 11.61 0 0 0 4.05 4.221c-.48 1.932-.45 3.954.08 5.87a11.69 11.69 0 0 0 2.96 5.072 11.572 11.572 0 0 0 10.94 3.058 11.584 11.584 0 0 0 4.21 4.087c1.73.977 3.68 1.49 5.67 1.49 1.99 0 3.94-.513 5.67-1.49a11.584 11.584 0 0 0 4.21-4.087c1.93.485 3.96.46 5.88-.071a11.576 11.576 0 0 0 5.09-2.962 11.527 11.527 0 0 0 2.96-5.084c.53-1.922.55-3.949.07-5.883a11.61 11.61 0 0 0 4.05-4.221 11.667 11.667 0 0 0 1.47-5.659c0-1.981-.51-3.93-1.47-5.659a11.61 11.61 0 0 0-4.05-4.221c.47-1.932.44-3.954-.09-5.87a11.594 11.594 0 0 0-2.97-5.068 11.563 11.563 0 0 0-10.94-3.042Zm-11.64 34.44 13.42-20.12c1.66-2.5-2.2-5.08-3.88-2.6l-11.82 17.8-4.04-4.04c-2.12-2.12-5.4 1.18-3.28 3.3l6.38 6.32c.25.17.54.288.84.346.29.058.6.056.9-.006.3-.061.59-.18.84-.352.25-.171.47-.392.64-.648Z" clip-rule="evenodd"/>
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

