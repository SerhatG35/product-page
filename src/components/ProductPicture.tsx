import { useEffect, useState } from 'react';
import { image1, image2, image3, image4, image5 } from '../utils/img';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/all';

const ProductPicture = () => {
  const [pictures] = useState<string[]>([
    image1,
    image2,
    image3,
    image4,
    image5,
  ]);
  const [currentPicture, setCurrentPicture] = useState<string>(image1);
  const [currentPictureIndex, setCurrentPictureIndex] = useState(
    pictures.indexOf(currentPicture)
  );

  const nextPicture = () => {
    // fotoğraftaki ileri butonu fonksiyonelliği
    setCurrentPicture(pictures[currentPictureIndex + 1]);
  };
  const previousPicture = () => {
    // fotoğraftaki geri butonu fonksiyonelliği
    setCurrentPicture(pictures[currentPictureIndex - 1]);
  };

  const changePicture = (picture: string) => {
    // seçili fotoğrafı değiştir
    setCurrentPicture(picture);
  };

  useEffect(() => {
    // fotoğraftaki ileri geri butonları için mevcut fotoğraf indexinin stateye atılması
    setCurrentPictureIndex(pictures.indexOf(currentPicture));
  }, [currentPicture, pictures]);

  return (
    <section
      aria-label='product pictures'
      className='w-full sm:w-2/3 b h-full flex justify-center items-center flex-col lg:flex-row bg-pictureBg border-2'
    >
      <div className='flex justify-around items-center'>
        <button
          disabled={currentPictureIndex === 0 ? true : false}
          onClick={previousPicture}
          className='pictureNavigation'
        >
          {<AiOutlineLeft />}
        </button>

        <img
          className='w-10/12 sm:w-8/12 lg:w-3/4'
          src={currentPicture}
          alt='current selected img'
        />

        <button
          disabled={currentPictureIndex === pictures.length - 1 ? true : false}
          onClick={nextPicture}
          className='pictureNavigation'
        >
          {<AiOutlineRight />}
        </button>
      </div>
      <div className='lg:w-100 flex lg:flex-col w-full divide-x-2 lg:divide-x-0 lg:divide-y-2 divide-customBlackFontColor divide-opacity-10'>
        {pictures.map((picture) => {
          return (
            <div
              key={picture}
              className='cursor-pointer'
              onClick={() => changePicture(picture)}
            >
              <img src={picture} alt='list of product images' />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductPicture;
