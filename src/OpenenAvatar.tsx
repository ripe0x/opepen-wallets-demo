import { useEffect, useState } from "react";
import { walletColors } from "./lib";
type Props = {
  address: string;
};

const OpepenAvatar = ({ address }: Props) => {




  const svg = (address: string) => {
    const colors = walletColors(address);
    return `
  <svg xmlns="http://www.w3.org/2000/svg" width="2000" height="2000" fill="none" viewBox="0 0 100 100" shape-rendering="geometricPrecision">
    <path fill="black" d="M100 0H0V100H100V0Z"/>
    <path fill="
    ${colors[0]}" d="M100 0H0V100H100V0Z" style="opacity: 0.12"/>'
    <path fill="
    ${colors[1]}" d="M37.5 25H25V37.5H37.5V25Z"/>'
    <path fill="
    ${colors[2]}" d="M37.5 25C40.8152 25 43.9946 26.317 46.3388 28.6612C48.683 31.0054 50 34.1848 50 37.5H37.5V25Z"/>'
    <path fill="white" d="M25 37.5C25 40.8152 26.317 43.9946 28.6612 46.3388C31.0054 48.683 34.1848 50 37.5 50V37.5H25Z"/>'
    <path fill="
    ${colors[3]}" d="M25 37.5C25 40.8152 26.317 43.9946 28.6612 46.3388C31.0054 48.683 34.1848 50 37.5 50V37.5H25Z" style="opacity: 0.6" />'
    <path fill="black" d="M50 37.5C50 40.8152 48.683 43.9946 46.3388 46.3388C43.9946 48.683 40.8152 50 37.5 50V37.5H50Z"/>'
    <path fill="
    ${colors[4]}" d="M62.5 25C59.1848 25 56.0054 26.317 53.6612 28.6612C51.317 31.0054 50 34.1848 50 37.5H62.5V25Z"/>'
    <path fill="
    ${colors[5]}" d="M62.5 25C65.8152 25 68.9946 26.317 71.3388 28.6612C73.683 31.0054 75 34.1848 75 37.5H62.5V25Z"/>'
    <path fill="white" d="M50 37.5C50 40.8152 51.317 43.9946 53.6612 46.3388C56.0054 48.683 59.1848 50 62.5 50V37.5H50Z"/>'
    <path fill="
    ${colors[6]}" d="M50 37.5C50 40.8152 51.317 43.9946 53.6612 46.3388C56.0054 48.683 59.1848 50 62.5 50V37.5H50Z" style="opacity: 0.6"/>'
    <path fill="black" d="M75 37.5C75 40.8152 73.683 43.9946 71.3388 46.3388C68.9946 48.683 65.8152 50 62.5 50V37.5H75Z"/>'
    <path fill="
    ${colors[7]}" d="M37.5 50H25V62.5H37.5V50Z"/>'
    <path fill="
    ${colors[8]}" d="M50 50H37.5V62.5H50V50Z"/>'
    <path fill="
    ${colors[9]}" d="M62.5 50H50V62.5H62.5V50Z"/>'
    <path fill="
    ${colors[10]}
    " d="M75 50H62.5V62.5H75V50Z"/>'
    <path fill="
    ${colors[11]}
    " d="M25 62.5C25 65.8152 26.317 68.9946 28.6612 71.3388C31.0054 73.683 34.1848 75 37.5 75V62.5H25Z"/>'
    <path fill="
    ${colors[12]}
    " d="M50 62.5H37.5V75H50V62.5Z"/>'
    <path fill="
    ${colors[13]}
    " d="M62.5 62.5H50V75H62.5V62.5Z"/>'
    <path fill="
    ${colors[14]}
    " d="M75 62.5C75 65.8152 73.683 68.9946 71.3388 71.3388C68.9946 73.683 65.8152 75 62.5 75V62.5H75Z"/>'
    <path fill="
    ${colors[15]}
    " d="M37.5 87.5C34.1848 87.5 31.0054 88.817 28.6612 91.1612C26.317 93.5054 25 96.6848 25 100H37.5V87.5Z"/>'
    <path fill="
    ${colors[16]}
    " d="M50 87.5H37.5V100H50V87.5Z"/>'
    <path fill="
    ${colors[17]}
    " d="M62.5 87.5H50V100H62.5V87.5Z"/>'
    <path fill="
    ${colors[0]}
    " d="M62.5 87.5C65.8152 87.5 68.9946 88.817 71.3388 91.1612C73.683 93.5054 75 96.6848 75 100H62.5V87.5Z"/>'
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
    <img
      src={image}
      alt=""
      style={{
        width: "100%",
        maxWidth: "800px"
      }}
      onClick={() =>
        setImage(img(address))
      }
    />
  );
};

export default OpepenAvatar;
