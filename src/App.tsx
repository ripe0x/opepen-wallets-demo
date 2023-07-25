import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import OpepenAvatar from '../src/OpenenAvatar';
import { useEffect, useState } from 'react';
import { addresses } from '../src/addresses';
import OpepenA from '../src/setExamples/opepenA';
import OpepenB from './setExamples/opepenB';
import OpepenC from './setExamples/opepenC';
import OpepenD from './setExamples/opepenD';
import OpepenE from './setExamples/opepenE';
import OpepenF from './setExamples/opepenF';

const randomAddress = (addresses: string[]) => {
  return addresses[Math.floor(Math.random() * addresses.length)]
}

const App = () => {
  const { address } = useAccount()
  const [displayedAddress, setDisplayedAddress] = useState<string>(addresses[Math.floor(Math.random() * addresses.length)])

  useEffect(() => {
    if (address) {
      setDisplayedAddress(address)
    }
  }, [address])

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
      </div>

      <div className="full-set-grid">
        <div className='one'>
          <OpepenF address={randomAddress(addresses)} />
        </div>
        <div className='four'>
          <OpepenE address={randomAddress(addresses)} />
        </div>
        <div className='five'>
          <OpepenD address={randomAddress(addresses)} />
        </div>
        <div className='ten'>
          <OpepenC address={randomAddress(addresses)} />
        </div>
        <div className='twenty'>
          <OpepenB address={randomAddress(addresses)} />
        </div>
        <div className='forty'>
          <OpepenA address={randomAddress(addresses)} />
        </div>
      </div>
      <div style={{
        textAlign: 'center',
      }}>

        <p
          style={{
            color: '#ffffff',
            fontSize: 14,
            fontFamily: 'monospace',
          }}
        >
          {displayedAddress}
        </p>
        {/* <OpepenAvatar address={displayedAddress} /> */}
        <h3>1/1</h3>
        <div
          className='image-grid'
        >
          <OpepenF address={randomAddress(addresses)} />
        </div>
        <h3>Four editions</h3>
        <div
          className='image-grid'
        >
          {fours.map((i) => (
            <OpepenE address={randomAddress(addresses)} />
          ))}
        </div>
        <h3>Five editions</h3>
        <div
          className='image-grid'
        >
          {fives.map((i) => (
            <OpepenD address={randomAddress(addresses)} />
          ))}
        </div>
        <h3>Ten editions</h3>
        <div
          className='image-grid'
        >
          {tens.map((i) => (
            <OpepenC address={randomAddress(addresses)} />
          ))}
        </div>

        <h3>Twentie editions</h3>
        <div
          className='image-grid'
        >
          {twenties.map((i) => (
            <OpepenB address={randomAddress(addresses)} />
          ))}
        </div>
        <h3>Forty editions</h3>
        <div
          className='image-grid'
        >
          {forties.map((i) => (
            <OpepenA address={randomAddress(addresses)} />
          ))}
        </div>

      </div>
    </div>

  );
};

export default App;
