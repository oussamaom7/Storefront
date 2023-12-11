import { useState } from 'react';

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-32 h-32 relative rounded-full overflow-hidden">
        <img
          src={selectedImage || 'https://image.tmdb.org/t/p/w300/tLFIMuPWJHlTJ6TN8HCOiSD6SdA.jpg'}
          alt="Profile"
          className="w-full h-full object-cover"
        />
        <label htmlFor="imageInput" className="absolute bottom-5 left-20 z-20">
          <div className="bg-color2 rounded-full p-1 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" 
          height="30"
           fill="currentColor" 
           class="bi bi-camera" 
           viewBox="0 0 16 16"> 
           <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 
           3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3
            3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2
             2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.
             828.828A2 2 0 0 1 3.172 4H2z"/> 
          <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0
           5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/> </svg>
          </div>
        </label>
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
}

export default ImageUpload;
