import { ProductPicture, ProductDetails, BreadCrumb } from '../utils/index';
import ProductDescription from './ProductDescription';

const ProductSection = () => {
  return (
    <div className='w-full h-5/6 px-6 py-3 flex flex-col justify-center'>
      <BreadCrumb />
      <div className='w-full h-full flex flex-col'>
        <div className='w-full h-full flex sm:flex-row flex-col'>
          <ProductPicture />
          <ProductDetails />
        </div>
        <ProductDescription />
      </div>
    </div>
  );
};

export default ProductSection;
