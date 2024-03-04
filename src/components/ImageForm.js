import React, { useState, useEffect } from 'react';
import ShowResult from './ShowResult';
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';

const ImageForm = () => {
  const [image, setImage] = useState(null);
  const [predictions, setPredictions] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      const file = droppedFiles[0];
      handleImage(file);
    }
  };

  const handleImageSelect = (e) => {
    const selectedFile = e.target.files[0];
    handleImage(selectedFile);
  };

  const handleImage = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result;
        setImage(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const detectObjects = async () => {
    try {
      const img = document.getElementById('img');
      const model = await cocoSsd.load();

      // Detect objects in the image.
      const predictions = await model.detect(img);
      setPredictions(predictions);
    } catch (error) {
      console.error('Error detecting objects:', error);
    }
  };

  const handleImageLoad = () => {
    detectObjects();
  };

  const removeImage = () => {
    setImage(null);
    setPredictions([]);
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const handleCrossClick = (e) => {
    e.stopPropagation(); // Prevent the file input click event from triggering
    removeImage();
  };

// ... (Previous code)

return (
    <div className="flex flex-col items-center justify-center h-screen font-poppins relative mt-8">
      {image && (
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer z-10"
          onClick={handleCrossClick}
        >
          &#10006;
        </button>
      )}
      <label
        htmlFor="fileInput"
        onDragOver={preventDefault}
        onDragEnter={preventDefault}
        onDrop={handleDrop}
        className="border-4 border-dashed border-gray-300 rounded-lg p-8 w-[70%] h-[400px] flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition duration-300 relative"
      >
        {image ? (
          <>
            <img
              src={image}
              id="img"
              alt="Selected"
              className="max-w-full h-[300px] rounded mb-4" // Set a standard height and width
              onLoad={handleImageLoad}
            />
            <p className="text-gray-500 text-sm">Image Detection</p>
          </>
        ) : (
          <>
            <p className="text-gray-500 mb-4 text-sm">Drag & Drop an image here or</p>
            <button
              className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300 text-sm"
              onClick={() => document.getElementById('fileInput').click()}
            >
              Select Image
            </button>
          </>
        )}
      </label>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleImageSelect}
        className="hidden"
      />
      {predictions.length > 0 && <ShowResult predictions={predictions} />}
    </div>
  );
  
        }
export default ImageForm;
