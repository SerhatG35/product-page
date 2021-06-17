import { useState } from 'react';
import { Navbar, ProductSection, BurgerMenu } from './utils/index';

function App() {
  const [burgerMenuState, setBurgerMenuState] = useState('hidden'); // burger menu için görüntü statesi
  return (
    <div className='w-full h-full font-customFont bg-main text-customBlackFontColor'>
      <Navbar
        burgerMenuState={burgerMenuState}
        setBurgerMenuState={setBurgerMenuState}
      />
      <BurgerMenu burgerMenuState={burgerMenuState} />
      <ProductSection />
    </div>
  );
}

export default App;
