import Image from 'next/image';
import React from 'react'

export default function SecondaryPhotos({ photos, image, setImage }) {
  return <>
    {
      photos.map((photo) => {
        return (
          <div
            key={photo.id}
            className="relative flex ml-1 cursor-pointer"
            onClick={() => {
              setImage(photo);
            }}
          >
            <div
              className={`absolute w-full h-full top-1/2 -translate-y-1/2 left-0 bg-[rgba(55,55,55,.4)] transition-opacity duration-200 dark:bg-bg_dark_o
                ${image?.id !== photo.id ? "opacity-100 dark:opacity-50" : "opacity-0 "
                } z-10 rounded-lg`}
            ></div>
            <Image
              alt="Shoe Photo"
              width={90}
              height={90}
              objectFit="contain"
              src={photo.src}
            />
          </div>
        );
      })
    }
  </>
}