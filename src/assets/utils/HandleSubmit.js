import GeneratecaptionFromUrl from "./GenerateCaptionFromUrl";
import UploadToCloudinary from "./UploadToCloudinary";
const HandleSubmit = async (event,selected,imageUrl,setCaptions,imageInputRef) => {
    event.preventDefault();

    if (selected === "link") {
      const url = imageUrl;
      if (!url) {
        setCaptions(["Enter a valid URL"]);
        return;
      }
      setCaptions(["Generating..."]);
      GeneratecaptionFromUrl(url,setCaptions);
    } else if (selected === "image") {
      try {
        setCaptions(["Uploading..."]);
        const imgUrl = await UploadToCloudinary(imageInputRef);
        setCaptions(["Generating..."]);
        GeneratecaptionFromUrl(imgUrl,setCaptions);
      // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setCaptions(["Error uploading image"]);
      }
    } else {
      setCaptions(["Enter a valid Input"]);
    }
  };

  export default HandleSubmit;