import React, { useEffect, useState } from 'react'
import { addresses } from './addresses'
import OpepenOffsetA from './setExamples/OpepenOffsetA'
import OpepenOffsetB from './setExamples/OpepenOffsetB'
import OpepenOffsetC from './setExamples/OpepenOffsetC'
import OpepenOffsetD from './setExamples/OpepenOffsetD'
import OpepenOffsetE from './setExamples/OpepenOffsetE'
import OpepenOffsetF from './setExamples/OpepenOffsetF'
import { randomAddress } from './lib'

type Props = {
  isRotating: boolean
  isSameAddressUsed: boolean
  address: string
}

export default function SetFrame({ address, isRotating, isSameAddressUsed }: Props) {
  const [displayedAddress, setDisplayedAddress] = useState<string>(address)
  useEffect(() => {
    if (isRotating) {
      // const timer = setTimeout(() => {
      //   setDisplayedAddress(randomAddress(addresses));
      // }, 300);
      // return () => clearTimeout(timer);

      const interval = setInterval(() => {
        setDisplayedAddress(randomAddress(addresses));
      }, 600);
      return () => clearInterval(interval);

    }
  }, [address, isRotating]);
  return (
    <div className="full-set-grid">
      <div className='one'>
        <span>1/1</span>
        <OpepenOffsetD address={isSameAddressUsed ? displayedAddress : randomAddress(addresses)} />
      </div>
      <div className='four'>
        <span>4</span>
        <OpepenOffsetC address={isSameAddressUsed ? displayedAddress : randomAddress(addresses)} />
      </div>
      <div className='five'>
        <span>5</span>
        <OpepenOffsetE address={isSameAddressUsed ? displayedAddress : randomAddress(addresses)} />
      </div>
      <div className='ten'>
        <span>10</span>
        <OpepenOffsetA address={isSameAddressUsed ? displayedAddress : randomAddress(addresses)} />
      </div>
      <div className='twenty'>
        <span>20</span>
        <OpepenOffsetB address={isSameAddressUsed ? displayedAddress : randomAddress(addresses)} />
      </div>
      <div className='forty'>
        <span>40</span>
        <OpepenOffsetF address={isSameAddressUsed ? displayedAddress : randomAddress(addresses)} />
      </div>
    </div>
  )
}