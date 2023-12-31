import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import OpepenAvatar from './OpenenAvatar';
import { useEffect, useState } from 'react';
import { addresses } from './addresses';

const App = () => {
  const { address } = useAccount()
  const [displayedAddress, setDisplayedAddress] = useState<string>(addresses[Math.floor(Math.random() * addresses.length)])

  useEffect(() => {
    if (address) {
      setDisplayedAddress(address)
    }
  }, [address])
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#000000',
        height: '100vh',
        width: '100vw',
        gap: 30,
      }}
    >
      <div
        style={{
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          gap: 20,
        }}>
        <ConnectButton
          showBalance={false}
          chainStatus="icon"
        />
        {!address && (
          <button
            style={{
              borderRadius: 10,
              backgroundColor: '#ffffff',
              color: '#000000',
              padding: 12,
              border: 'none',
              fontWeight: 'bold',
            }}
            onClick={() => setDisplayedAddress(addresses[Math.floor(Math.random() * addresses.length)])}>Random ETH address</button>
        )}
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
        <OpepenAvatar address={displayedAddress} />
      </div>
    </div>
  );
};

export default App;
