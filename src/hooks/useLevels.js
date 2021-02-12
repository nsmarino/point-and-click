import { useState } from 'react'

// This is a very straightforward hook that I just wrote so I didnt have to pass both levels and setLevels to App's children components. Instead, I just pass unlock, which is a more straightforward way to set a level as available. Custom hooks for reusable logic. Thats the key to modern react in my opinion. 

const useLevels = () => {
  const [levels, setLevels] = useState({one:true, two: false})

  const unlock = (level) => setLevels({...levels, ...level})

  return [levels, unlock]
}

export default useLevels