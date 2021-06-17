import { useState } from 'react';

type BurgerMenuTypes = {
  burgerMenuState: string;
};

const BurgerMenu = ({ burgerMenuState }: BurgerMenuTypes) => {
  const [navbarPaths] = useState([
    'Yeni Ürünler',
    'Erkek',
    'Kadın',
    'Çocuk',
    'Koleksiyonlar',
  ]);
  return (
    <div
      className={`${burgerMenuState} sm:hidden bg-customBlackBgColor flex flex-col text-center items-center justify-center text-customWhiteFontColor text-xl`}
    >
      {navbarPaths.map((paths) => (
        <div key={paths} className='hover:border-l-4 hover:pl-2'>
          <a href='/#'>{paths}</a>
        </div>
      ))}
    </div>
  );
};

export default BurgerMenu;
