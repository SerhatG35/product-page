import { RiShoppingBasketFill, FiMenu, BiSearch } from 'react-icons/all';

type NavbarTypes = {
  burgerMenuState: string;
  setBurgerMenuState: React.Dispatch<React.SetStateAction<string>>;
};

const Navbar = ({ burgerMenuState, setBurgerMenuState }: NavbarTypes) => {
  const changeBurgerState = () => {
    // navbarın devre dışı bırakılıp burger menuye taşınması
    if (burgerMenuState === 'hidden') setBurgerMenuState('flex');
    else setBurgerMenuState('hidden');
  };

  return (
    <div className='w-full h-24 flex bg-customBlackBgColor text-customWhiteFontColor sm:text-lg text-center tracking-wider justify-around lg:justify-center items-center'>
      <div>
        <button
          onClick={changeBurgerState}
          className='block sm:hidden text-customWhiteFontColor text-2xl focus:outline-none'
        >
          {<FiMenu />}
        </button>
      </div>
      <div
        className={
          'hidden sm:flex justify-around items-center flex-col sm:flex-row divide-x-2'
        }
      >
        <a href='/#' className='navbarItems navbarAnimation'>
          Yeni Ürünler
        </a>
        <a href='/#' className='navbarItems navbarAnimation'>
          Erkek
        </a>
        <a href='/#' className='navbarItems navbarAnimation'>
          Kadın
        </a>
        <a href='/#' className='navbarItems navbarAnimation'>
          Çocuk
        </a>
        <a href='/#' className='navbarItems navbarAnimation'>
          Koleksiyonlar
        </a>
      </div>
      <div className='lg:absolute lg:right-5 flex items-center justify-center'>
        <div className='flex items-center justify-center bg-white rounded-sm border pl-1'>
          <BiSearch className='text-gray-600' />
          <input
            type='search'
            placeholder='Ara'
            className='w-28 rounded-md px-2 focus:outline-none text-gray-900'
          />
        </div>
        <button className='text-3xl ml-1 text-customWhiteFontColor focus:outline-none active:text-gray-300'>
          {<RiShoppingBasketFill />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
