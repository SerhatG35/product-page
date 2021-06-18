import { MdNavigateNext } from 'react-icons/all';

const BreadCrumb = () => {
  return (
    <nav
      aria-label='breadcrumb navbar'
      className='flex items-center text-xs tracking-wider sm:text-lg'
    >
      <a href='/#' aria-label='Anasayfa'>
        Anasayfa
      </a>
      <MdNavigateNext />
      <a href='/#'>Erkek</a>
      <MdNavigateNext />
      <a href='/#' aria-current='page'>
        Ayakkabı
      </a>
    </nav>
  );
};

export default BreadCrumb;
