// import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { useEffect, useState } from 'react';
import { addresses } from '../src/addresses';
import OpepenA from '../src/setExamples/opepenA';
import OpepenB from './setExamples/opepenB';
import OpepenC from './setExamples/opepenC';
import OpepenD from './setExamples/opepenD';
import OpepenE from './setExamples/opepenE';
// import OpepenF from './setExamples/opepenF';
import OpepenOffset from './setExamples/opepenOffset';

const randomAddress = (addresses: string[]) => {
  return addresses[Math.floor(Math.random() * addresses.length)]
}

const App = () => {
  const { address } = useAccount()
  const [displayedAddress, setDisplayedAddress] = useState<string>(addresses[Math.floor(Math.random() * addresses.length)])
  const [sameAddressUsed, setSameAddressUsed] = useState<boolean>(false)
  console.log(displayedAddress)
  useEffect(() => {
    if (address) {
      setDisplayedAddress(address)
    }
  }, [address]);

  const oneOfOneAddress = sameAddressUsed ? displayedAddress : randomAddress(addresses);
  const oneOfOne = <OpepenOffset address={oneOfOneAddress} />;
  const forties = Array.from({ length: 40 }, (v, k) => k + 1);
  const twenties = Array.from({ length: 20 }, (v, k) => k + 1);
  const tens = Array.from({ length: 10 }, (v, k) => k + 1);
  const fives = Array.from({ length: 5 }, (v, k) => k + 1);
  const fours = Array.from({ length: 4 }, (v, k) => k + 1);

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
        overflow: 'hidden',
      }}
    >
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
        {!address && (
          <button
            style={{
              borderRadius: 4,
              backgroundColor: '#ffffff',
              color: '#000000',
              paddingTop: 4,
              paddingBottom: 4,
              paddingLeft: 8,
              paddingRight: 8,
              border: 'none',
              fontWeight: 'bold',
            }}
            onClick={() => setDisplayedAddress(addresses[Math.floor(Math.random() * addresses.length)])}>Randomize owner addresses</button>
        )}
        <div>
          <button
            style={{
              borderRadius: 4,
              backgroundColor: '#ffffff',
              color: '#000000',
              paddingTop: 4,
              paddingBottom: 4,
              paddingLeft: 8,
              paddingRight: 8,
              border: 'none',
              fontWeight: 'bold',
            }}
            onClick={() => setSameAddressUsed(!sameAddressUsed)}>
            {sameAddressUsed ? <> ✅</> : ''}
            use same address on all?

          </button>
          <p
            style={{
              color: '#ffffff',
              fontSize: 10,
              fontFamily: 'monospace',
              lineHeight: 1,
            }}
          >
            {displayedAddress}
          </p>
        </div>
      </div>

      <div className="full-set-grid">
        <div className='one'>
          {/* <OpepenF address={sameAddressUsed ? displayedAddress : randomAddress(addresses)} /> */}
          {oneOfOne}
        </div>
        <div className='four'>
          <OpepenE address={sameAddressUsed ? displayedAddress : randomAddress(addresses)} />
        </div>
        <div className='five'>
          <OpepenD address={sameAddressUsed ? displayedAddress : randomAddress(addresses)} />
        </div>
        <div className='ten'>
          <OpepenC address={sameAddressUsed ? displayedAddress : randomAddress(addresses)} />
        </div>
        <div className='twenty'>
          <OpepenB address={sameAddressUsed ? displayedAddress : randomAddress(addresses)} />
        </div>
        <div className='forty'>
          <OpepenA address={sameAddressUsed ? displayedAddress : randomAddress(addresses)} />
        </div>
      </div>
      <div style={{
        textAlign: 'center',
      }}>


        {/* <OpepenAvatar address={displayedAddress} /> */}
        <h3>1/1</h3>
        <div
          className='image-grid'
        >
          {/* <OpepenF address={sameAddressUsed ? displayedAddress : randomAddress(addresses)} /> */}
          {oneOfOne}
        </div>
        <h3>Four editions</h3>
        <div
          className='image-grid'
        >
          {fours.map((i) => (
            <OpepenE address={sameAddressUsed ? displayedAddress : randomAddress(addresses)} />
          ))}
        </div>
        <h3>Five editions</h3>
        <div
          className='image-grid'
        >
          {fives.map((i) => (
            <OpepenD address={sameAddressUsed ? displayedAddress : randomAddress(addresses)} />
          ))}
        </div>
        <h3>Ten editions</h3>
        <div
          className='image-grid'
        >
          {tens.map((i) => (
            <OpepenC address={sameAddressUsed ? displayedAddress : randomAddress(addresses)} />
          ))}
        </div>

        <h3>Twentie editions</h3>
        <div
          className='image-grid'
        >
          {twenties.map((i) => (
            <OpepenB address={sameAddressUsed ? displayedAddress : randomAddress(addresses)} />
          ))}
        </div>
        <h3>Forty editions</h3>
        <div
          className='image-grid'
        >
          {forties.map((i) => (
            <OpepenA address={sameAddressUsed ? displayedAddress : randomAddress(addresses)} />
          ))}
        </div>

      </div>
    </div>

  );
};

export default App;
