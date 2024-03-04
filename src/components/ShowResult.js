// ShowResult component (no changes to the existing code)

const ShowResult = ({ predictions }) => {
  console.log(predictions)
  
  const capitalizeFirstLetter = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  return (
    <div className=" w-full mt-8 mb-4 m-16 h-[100px]"> {/* Use absolute positioning */}
      <div className="p-6 bg-gray-100 rounded-lg shadow-md my-6">
        <h2 className="text-xl font-semibold mb-2">Detected Objects:</h2>
        <div className="overflow-y-auto max-h-60">
          <ul className="list-none p-0 m-0">
            {predictions.map((prediction, index) => (
              <li key={`${prediction.label}-${index}`} className="mb-4 p-4 bg-white rounded-md shadow-md">
                <div className="object-info">
                  <p>
                    <label className="font-bold mr-2">Object {index + 1}</label>:
                    
                    <span className="text-blue-500">{" "+ capitalizeFirstLetter(prediction.class)}</span>
                  </p>
                  <p>
                    <label className="font-bold mr-2">Confidence</label>:{' '}
                    <span>{(prediction.score * 100).toFixed(2)}%</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShowResult;
