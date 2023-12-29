import { useEffect, useState } from "react";
import { gradientForAddress, walletColors, randomOpacity } from "../lib";
import { copyPicture } from "../App";
type Props = {
  address: string;
};

const randomSkew = () => {
  const weightedSelection = Math.floor(Math.random() * 200);
  if (weightedSelection < 15) {
    return Math.floor(Math.random() * -5);
  }
  if (weightedSelection > 15 && weightedSelection < 30) {
    return Math.floor(Math.random() * 4);
  }
  if (weightedSelection > 90 && weightedSelection < 100) {
    return Math.floor(Math.random() * 6);
  }
  return 0;
}

const randomRotate = () => {
  const weightedSelection = Math.floor(Math.random() * 100);
  if (weightedSelection < 15) {
    return Math.floor(Math.random() * -5);
  }
  if (weightedSelection > 15 && weightedSelection < 30) {
    return Math.floor(Math.random() * 5);
  }
  if (weightedSelection > 90) {
    return Math.floor(Math.random() * 12);
  }
  return 0;
}

const randomOffset = () => {
  const weightedSelection = Math.floor(Math.random() * 100);
  if (weightedSelection < 49) {
    return Math.floor(Math.random() * 125);
  }
  if (weightedSelection > 50 && weightedSelection < 90) {
    return Math.floor(Math.random() * 200);
  }
}

const randomBlend = () => {
  // if overlay, the background needs to be a brighter color, or the shapes need to be higher opacity
  // if color-burn, the background needs to be a mid-opacity. min-0.8
  const blendModes = ['color-dodge', 'color-burn', 'hard-light', 'overlay', 'difference', 'exclusion', 'luminosity'];
  return blendModes[Math.floor(Math.random() * blendModes.length)];
}



export default function OpepenOffsetC({ address }: Props) {
  const svg = (address: string) => {
    const minOpacity = 22;
    const maxOpacity = 88;
    const colors = walletColors(address, 4, 55, 60);
    // const ogColors = gradientForAddress(address, 30, 50);
    // const bgOpacity = Math.floor(Math.random() * 25);
    const bgOpacity = '99';
    // const blendMode = randomBlend();
    const blendMode = 'color-dodge';
    // const bgOpacity2 = Math.floor(Math.random() * 69);
    // const noiseColor = colors[2];
    const noiseColor = '#ffffff';
    return `
    <!-- blendMode: ${blendMode} -->
    <svg xmlns="http://www.w3.org/2000/svg" width="2000" height="2000" fill="none" viewBox="0 0 2000 2000">
    <path fill="#111" d="M2000 0H0v2000h2000V0Z"/>
    
    <path style="mix-blend-mode: ${blendMode}; transform: translate(${randomOffset()}px, -${randomOffset()}px) skew(-${randomSkew()}deg, -${randomSkew()}deg) rotate(${randomRotate()})" fill="${colors[1]}" opacity="${randomOpacity(minOpacity, maxOpacity)}" d="M755 500H500v255h255V500Z"/>
    <path style="mix-blend-mode: ${blendMode}; transform: translate(${randomOffset()}px, -${randomOffset()}px) skew(-${randomSkew()}deg, -${randomSkew()}deg) rotate(${randomRotate()})" fill="${colors[2]}" opacity="${randomOpacity(minOpacity, maxOpacity)}" d="M750 500c66.304 0 129.892 26.445 176.776 73.517C973.66 620.588 1000 684.431 1000 751H750V500Z"/>
    <path style="mix-blend-mode: ${blendMode}; transform: translate(${randomOffset()}px, -${randomOffset()}px) skew(-${randomSkew()}deg, -${randomSkew()}deg) rotate(${randomRotate()})" fill="${colors[3]}" opacity="${randomOpacity(minOpacity, maxOpacity)}" d="M1252 500a252.017 252.017 0 0 0-232.82 155.564A252.075 252.075 0 0 0 1000 752h252V500Z"/>
    <path style="mix-blend-mode: ${blendMode}; transform: translate(${randomOffset()}px, -${randomOffset()}px) skew(-${randomSkew()}deg, -${randomSkew()}deg) rotate(${randomRotate()})" fill="${colors[4]}" opacity="${randomOpacity(minOpacity, maxOpacity)}" d="M1250 500c66.3 0 129.89 26.445 176.78 73.517C1473.66 620.588 1500 684.431 1500 751h-250V500Z"/>
    <path style="mix-blend-mode: ${blendMode}; transform: translate(${randomOffset()}px, -${randomOffset()}px) skew(-${randomSkew()}deg, -${randomSkew()}deg) rotate(${randomRotate()})" fill="${colors[5]}" opacity="${randomOpacity(minOpacity, maxOpacity)}" d="M500 750c0 66.304 26.445 129.892 73.517 176.776C620.588 973.66 684.431 1000 751 1000V750H500Z"/>
    <path style="mix-blend-mode: ${blendMode}; transform: translate(${randomOffset()}px, -${randomOffset()}px) skew(-${randomSkew()}deg, -${randomSkew()}deg) rotate(${randomRotate()})" fill="${colors[6]}" opacity="${randomOpacity(minOpacity, maxOpacity)}" d="M1000 750c0 66.304 26.45 129.892 73.52 176.776C1120.59 973.66 1184.43 1000 1251 1000V750h-251Z"/>
    <path style="mix-blend-mode: ${blendMode}; transform: translate(${randomOffset()}px, -${randomOffset()}px) skew(-${randomSkew()}deg, -${randomSkew()}deg) rotate(${randomRotate()})" fill="${colors[7]}" opacity="${randomOpacity(minOpacity, maxOpacity)}" d="M1000 750a250 250 0 0 1-250 250V750h250Z"/>
    <path style="mix-blend-mode: ${blendMode}; transform: translate(${randomOffset()}px, -${randomOffset()}px) skew(-${randomSkew()}deg, -${randomSkew()}deg) rotate(${randomRotate()})" fill="${colors[8]}" opacity="${randomOpacity(minOpacity, maxOpacity)}" d="M1500 750a250.016 250.016 0 0 1-73.22 176.776A250.039 250.039 0 0 1 1250 1000V750h250Z"/>
    <path style="mix-blend-mode: ${blendMode}; transform: translate(${randomOffset()}px, -${randomOffset()}px) skew(-${randomSkew()}deg, -${randomSkew()}deg) rotate(${randomRotate()})" fill="${colors[9]}" opacity="${randomOpacity(minOpacity, maxOpacity)}" d="M760 1000H500v255h260v-255Z"/>
    <path style="mix-blend-mode: ${blendMode}; transform: translate(${randomOffset()}px, -${randomOffset()}px) skew(-${randomSkew()}deg, -${randomSkew()}deg) rotate(${randomRotate()})" fill="${colors[10]}" opacity="${randomOpacity(minOpacity, maxOpacity)}" d="M1005 1000H750v255h255v-255Z"/>
    <path style="mix-blend-mode: ${blendMode}; transform: translate(${randomOffset()}px, -${randomOffset()}px) skew(-${randomSkew()}deg, -${randomSkew()}deg) rotate(${randomRotate()})" fill="${colors[11]}" opacity="${randomOpacity(minOpacity, maxOpacity)}" d="M1255 1000h-255v255h255v-255Z"/>
    <path style="mix-blend-mode: ${blendMode}; transform: translate(${randomOffset()}px, -${randomOffset()}px) skew(-${randomSkew()}deg, -${randomSkew()}deg) rotate(${randomRotate()})" fill="${colors[12]}" opacity="${randomOpacity(minOpacity, maxOpacity)}" d="M1500 1000h-250v255h250v-255Z"/>
    <path style="mix-blend-mode: ${blendMode}; transform: translate(${randomOffset()}px, -${randomOffset()}px) skew(-${randomSkew()}deg, -${randomSkew()}deg) rotate(${randomRotate()})" fill="${colors[13]}" opacity="${randomOpacity(minOpacity, maxOpacity)}" d="M1005 1750H749v250h256v-250Z"/>
    <path style="mix-blend-mode: ${blendMode}; transform: translate(${randomOffset()}px, -${randomOffset()}px) skew(-${randomSkew()}deg, -${randomSkew()}deg) rotate(${randomRotate()})" fill="${colors[14]}" opacity="${randomOpacity(minOpacity, maxOpacity)}" d="M1255 1750h-255v250h255v-250Z"/>
    <path style="mix-blend-mode: ${blendMode}; transform: translate(${randomOffset()}px, -${randomOffset()}px) skew(-${randomSkew()}deg, -${randomSkew()}deg) rotate(${randomRotate()})" fill="${colors[15]}" opacity="${randomOpacity(minOpacity, maxOpacity)}" d="M1003 1250H743v250h260v-250Z"/>
    <path style="mix-blend-mode: ${blendMode}; transform: translate(${randomOffset()}px, -${randomOffset()}px) skew(-${randomSkew()}deg, -${randomSkew()}deg) rotate(${randomRotate()})" fill="${colors[16]}" opacity="${randomOpacity(minOpacity, maxOpacity)}" d="M1255 1250h-255v250h255v-250Z"/>
    <path style="mix-blend-mode: ${blendMode}; transform: translate(${randomOffset()}px, -${randomOffset()}px) skew(-${randomSkew()}deg, -${randomSkew()}deg) rotate(${randomRotate()})" fill="${colors[17]}" opacity="${randomOpacity(minOpacity, maxOpacity)}" d="M500 1250c0 66.3 26.34 129.89 73.224 176.78A250.016 250.016 0 0 0 750 1500v-250H500Z"/>
    <path style="mix-blend-mode: ${blendMode}; transform: translate(${randomOffset()}px, -${randomOffset()}px) skew(-${randomSkew()}deg, -${randomSkew()}deg) rotate(${randomRotate()})" fill="${colors[18]}" opacity="${randomOpacity(minOpacity, maxOpacity)}" d="M1500 1250c0 66.3-26.34 129.89-73.22 176.78A250.04 250.04 0 0 1 1250 1500v-250h250Z"/>
    <path style="mix-blend-mode: ${blendMode}; transform: translate(${randomOffset()}px, -${randomOffset()}px) skew(-${randomSkew()}deg, -${randomSkew()}deg) rotate(${randomRotate()})" fill="${colors[3]}" opacity="${randomOpacity(minOpacity, maxOpacity)}" d="M750 1750a250.016 250.016 0 0 0-176.776 73.22A250.039 250.039 0 0 0 500 2000h250v-250Z"/>
    <path style="mix-blend-mode: ${blendMode}; transform: translate(${randomOffset()}px, -${randomOffset()}px) skew(-${randomSkew()}deg, -${randomSkew()}deg) rotate(${randomRotate()})" fill="${colors[2]}" opacity="${randomOpacity(minOpacity, maxOpacity)}" d="M1250 1750c66.3 0 129.89 26.34 176.78 73.22A250.04 250.04 0 0 1 1500 2000h-250v-250Z"/>
    <defs><filter id="nnnoise-filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.086" numOctaves="4" seed="15" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
      <feSpecularLighting surfaceScale="22" specularConstant="0.15" specularExponent="20" lighting-color="${noiseColor}" x="0%" y="0%" width="100%" height="100%" in="turbulence" result="specularLighting">
            <feDistantLight azimuth="3" elevation="95"></feDistantLight>
        </feSpecularLighting>
      
    </filter></defs><rect width="2000" height="2000" fill="transparent"></rect><rect width="2000" height="2000" fill="${noiseColor}" filter="url(#nnnoise-filter)" style="mix-blend-mode: normal" opacity="0.4"></rect>
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

