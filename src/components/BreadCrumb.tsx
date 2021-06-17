import { MdNavigateNext } from 'react-icons/all';

const BreadCrumb = () => {
  return (
    <div className='flex items-center text-xs tracking-wider sm:text-lg'>
      <a href='/#'>Anasayfa </a>
      <MdNavigateNext />
      <a href='/#'>Erkek</a>
      <MdNavigateNext />
      <a href='/#'>Ayakkabı</a>
    </div>
  );
};

export default BreadCrumb;
