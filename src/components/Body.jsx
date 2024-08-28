import {useState,useRef,useEffect} from "react";
import HandleImageChange from "../assets/utils/HandleImageChange";
import ClearImagePreview from "../assets/utils/ClearImagePreview";
import HandleSubmit from "../assets/utils/HandleSubmit";
const Body = () => {
  const [selected, setSelected] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [captions, setCaptions] = useState([]);
  const imageInputRef = useRef(null);
  const imagePreviewRef = useRef(null);
  const dismissImageRef = useRef(null);
  const imageInputContainerRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    if (imageUrl.length > 0) setSelected("link");
  }, [imageUrl]);

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div>
        <form className="space-y-8" onSubmit={(event)=>HandleSubmit(event,selected,imageUrl,setCaptions,imageInputRef)}>
          {imageUrl === "" && (
            <div id="image" className="bg-gray-800 shadow-lg rounded-lg p-6">
              <label
                htmlFor="imageInput"
                className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
              >
                Upload Image
              </label>
              <div
                ref={imageInputContainerRef}
                className="relative flex items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700"
              >
                <input
                  type="file"
                  id="imageInput"
                  name="image"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  ref={imageInputRef}
                  onChange={(event)=>HandleImageChange(event,imageInputContainerRef,imagePreviewRef,dismissImageRef,linkRef,setSelected)}
                />
                <span className="text-gray-500 dark:text-gray-400">
                  Choose Image
                </span>
              </div>
              <div
                ref={imagePreviewRef}
                className="mt-4 justify-center flex items-center"
              ></div>
              <div className="flex justify-center">
                <button
                  ref={dismissImageRef}
                  type="button"
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 hidden"
                  onClick={()=>ClearImagePreview(imagePreviewRef,dismissImageRef,imageInputContainerRef,linkRef,setSelected,imageInputRef)}
                >
                  Dismiss Image
                </button>
              </div>
            </div>
          )}

          <div ref={linkRef} className="bg-gray-800 shadow-lg rounded-lg p-6">
            <label
              htmlFor="imagelink"
              className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
            >
              Image Link
            </label>
            <input
              type="text"
              id="imagelink"
              placeholder="example: https://example.com/image.png"
              className="w-full border border-gray-300 rounded-md shadow-sm p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
              name="imagelink"
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>

          <hr className="border-gray-300 dark:border-gray-700" />

          <div className="bg-gray-800 shadow-lg rounded-lg p-6">
            <div className="mb-6">
              <label
                htmlFor="emoji"
                className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
              >
                Want to include emojis
              </label>
              <select
                name="emoji"
                id="emoji"
                className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="hashtags"
                className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
              >
                Want Hashtags
              </label>
              <select
                name="hashtags"
                id="hashtags"
                className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="captionsCount"
                className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
              >
                How many captions do you want
              </label>
              <select
                id="captionsCount"
                className="block w-full border border-gray-300 rounded-md shadow-sm p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
              >
                {[1, 2, 3].map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              Generate Captions
            </button>
          </div>

          <div className="bg-gray-800 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-300 dark:text-gray-200 mb-4">
              Generated Captions
            </h2>
            <div className="space-y-4">
              {captions.map((caption, index) => (
                <p
                  key={index}
                  className="text-gray-200 dark:text-gray-300 bg-slate-500 px-4 py-2 rounded-lg"
                >
                  {caption}
                </p>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Body;
