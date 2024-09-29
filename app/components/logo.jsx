import Image from 'next/image'
import logo from '../res/logo.svg'
const Logo = () => {
  return (
    <Image
      src={logo}
      alt="logo" 
      width={62}
      height={62}
      />
  )
}

export default Logo