// import { ConnectButton } from '@rainbow-me/rainbowkit';
// import { useAccount } from 'wagmi';
import { useState } from 'react';
import { addresses } from '../src/addresses';
import OpepenA from '../src/setExamples/opepenA';
import OpepenB from './setExamples/opepenB';
import OpepenC from './setExamples/opepenC';
import OpepenD from './setExamples/opepenD';
import OpepenE from './setExamples/opepenE';
// import OpepenF from './setExamples/opepenF';
import OpepenOffset from './setExamples/opepenOffset';
import { gradientForAddress } from './lib';

const randomAddress = (addresses: string[]) => {
  return addresses[Math.floor(Math.random() * addresses.length)]
}

export async function copyPicture() {
  // not working
  try {
    const response = await fetch('./logo.png');
    const blob = await response.blob();
    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob
      })
    ]);
    console.log('Image copied.');
  } catch (err: any) {
    console.error(err.name, err.message);
  }
};

const App = () => {

  // const { address } = useAccount()
  const [displayedAddress, setDisplayedAddress] = useState<string>(addresses[Math.floor(Math.random() * addresses.length)])
  const [sameAddressUsed, setSameAddressUsed] = useState<boolean>(false)
  console.log(displayedAddress)
  // useEffect(() => {
  //   if (address) {
  //     setDisplayedAddress(address)
  //   }
  // }, [address]);

  const oneOfOneAddress = sameAddressUsed ? displayedAddress : randomAddress(addresses);
  const oneOfOne = <OpepenOffset address={oneOfOneAddress} />;
  const examples = Array.from({ length: 100 }, (v, k) => k + 1);
  const twenties = Array.from({ length: 20 }, (v, k) => k + 1);
  const tens = Array.from({ length: 10 }, (v, k) => k + 1);
  const fives = Array.from({ length: 5 }, (v, k) => k + 1);
  const fours = Array.from({ length: 4 }, (v, k) => k + 1);

  const colorPalette = gradientForAddress(sameAddressUsed ? displayedAddress : randomAddress(addresses));
  // const colorPalette = gradientForAddress("0xdd4a37c03b11324ac2c0d31c40acc9989d2f71f8");

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#000000',
        gap: 30,
        paddingBottom: 100,
      }}
    >
      palette
      <div className="palette">
        <div className='one'
          style={{
            background: colorPalette[0]
          }}
        ></div>
        <div className='two'
          style={{
            background: colorPalette[1]
          }}
        ></div>
        <div className='three'
          style={{
            background: colorPalette[2]
          }}
        ></div>
        <div className='four'
          style={{
            background: colorPalette[3]
          }}
        ></div>
        <div className='five'
          style={{
            background: colorPalette[4]
          }}
        ></div>
      </div>
      <div className='nav'
        style={{
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          gap: 20,
        }}>
        {/* <ConnectButton
          showBalance={false}
          chainStatus="icon"
        /> */}
        {/* {!address && ( */}
        <h3>Forty editions</h3>
        <div
          className='image-grid'
        >
          {/* {forties.map((i) => (
            <OpepenA address={sameAddressUsed ? displayedAddress : randomAddress(addresses)} />
          ))} */}
          {examples.map((i) => (
            <OpepenE address={sameAddressUsed ? displayedAddress : randomAddress(addresses)} />
          ))}
        </div>

      </div>
    </div>

  );
};

export default App;
