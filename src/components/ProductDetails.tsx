import { useEffect, useState } from 'react';
import { BsDot } from 'react-icons/all';

const ProductDetails = () => {
  const [productPrice] = useState(900);
  const [discountedPrice, setDiscountedPrice] = useState<number>(productPrice);
  const [discountRate] = useState<number | undefined>(35);
  const [availableProductSizes] = useState([
    36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
  ]);
  const [selectedProductSize, setselectedProductSize] =
    useState<number | undefined>(undefined);
  const [numberOfProductLeft] = useState(20);

  useEffect(() => {
    // indirim oranına göre yeni fiyatın güncellenmesi
    if (discountRate) {
      const newPrice = productPrice - productPrice * (discountRate / 100);
      setDiscountedPrice(newPrice);
    }
  }, [discountRate, productPrice]);

  return (
    <section
      aria-label='product details'
      className='w-full h-96 sm:h-auto sm:w-1/3 text-center px-3 flex flex-col justify-between items-center select-none sm:ml-1 mt-6 mb-6 sm:mt-0 sm:mb-0'
    >
      <div>
        <h1
          aria-label='name of the product'
          className='text-4xl font-semibold sm:text-2xl customBreakPoint:text-4xl customBreakPoint2:text-5xl'
        >
          adidas Stan Smith
        </h1>
        <div className='flex justify-center items-center text-lg sm:text-md customBreakPoint:text-xl customBreakPoint2:text-2xl'>
          <BsDot />
          <p className='font-light'>Originals</p>
          <BsDot />
        </div>
      </div>

      <div className='flex w-full lg:justify-between justify-center items-center sm:flex-col'>
        <div className='flex customBreakPoint:mb-1 customBreakPoint2:mb-2 items-center flex-col sm:flex-row'>
          <p
            role='contentinfo'
            aria-label='base price of the product'
            className='text-lg sm:text-md customBreakPoint2:text-xl line-through opacity-80'
          >
            {`${productPrice} TL`}
          </p>
          <p
            role='contentinfo'
            aria-label='discounted price of the product'
            className='text-xl lg:text-lg customBreakPoint2:text-2xl font-semibold sm:ml-5'
          >{`${discountedPrice} TL`}</p>
        </div>
        <p
          role='contentinfo'
          aria-label='discount rate'
          className='rounded-sm border border-customBlackFontColor p-1 flex justify-center items-center whitespace-nowrap ml-5 sm:ml-0 text-lg customBreakPoint2:text-xl'
        >
          {`${discountRate}% indirim`}
        </p>
      </div>

      <div className='lg:w-3/4 flex flex-col'>
        <h2 className='font-semibold sm:text-lg customBreakPoint:text-xl'>
          Beden
        </h2>
        <div className=' flex w-full items-center justify-center flex-wrap'>
          {availableProductSizes.map((size) => (
            <button
              aria-label='select product size'
              type='button'
              key={size}
              className={`border border-black p-1 sm:p-0 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-12 xl:h-12 m-1 focus:outline-none ${
                selectedProductSize === size
                  ? 'bg-customBlackBgColor text-customWhiteFontColor'
                  : ''
              }`}
              onClick={() => setselectedProductSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {numberOfProductLeft <= 100 && (
        <p className='underline text-xl sm:text-lg customBreakPoint:text-xl'>
          {`Son ${numberOfProductLeft} ürün`}
        </p>
      )}

      <button
        type='button'
        aria-label='add to cart'
        onClick={() => alert('adidas Stan Smith')}
        className='bg-customBlackBgColor text-customWhiteFontColor tracking-wider w-full xl:w-1/2 px-3 py-1 rounded-sm focus:outline-none active:bg-gray-800 text-xl'
      >
        Sepete Ekle
      </button>
    </section>
  );
};

export default ProductDetails;
