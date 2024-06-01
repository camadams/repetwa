"use client";
import Image from "next/image";
import { useState } from "react";

const App = () => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const handleThumbnailClick = (index: number) => {
    setSelectedImage(index);
  };
  return (
    <div className="bg-primary h-[100vh]">
      <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto px-4 md:px-0">
        <div className="rounded-lg overflow-hidden">
          <Image
            src="https://picsum.photos/200"
            width={1200}
            height={800}
            alt="Selected Image"
            className="w-full aspect-[3/2] object-cover"
          />
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`flex-shrink-0 rounded-lg overflow-hidden cursor-pointer ${
                selectedImage === index ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <Image
                src={`https://picsum.photos/${200 + index}`}
                width={200}
                height={150}
                alt={`Thumbnail ${index + 1}`}
                className="w-[200px] h-[150px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
