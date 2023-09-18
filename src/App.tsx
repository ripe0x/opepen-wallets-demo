import { useState } from 'react';
import { addresses } from '../src/addresses';
import SetFrame from './SetFrame';

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
  const [displayedAddress] = useState<string>(addresses[Math.floor(Math.random() * addresses.length)])
  const [sameAddressUsed] = useState<boolean>(false)

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
      <SetFrame address={sameAddressUsed ? displayedAddress : randomAddress(addresses)} isRotating={true} isSameAddressUsed={sameAddressUsed} />
    </div>

  );
};

export default App;
