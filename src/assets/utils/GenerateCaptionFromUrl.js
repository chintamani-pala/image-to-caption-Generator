const GeneratecaptionFromUrl = async (ImgUrl,setCaptions) => {
    const useEmoji = document.getElementById("emoji").value === "true";
    const useHashtag = document.getElementById("hashtags").value === "true";
    const limitOfCaption = document.getElementById("captionsCount").value;

    try {
      const url = "https://image-to-caption.com/api/generateCaption";
      const payload = {
        imageUrl: ImgUrl,
        useEmojis: useEmoji,
        useHashtags: useHashtag,
        limit: limitOfCaption,
      };

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      setCaptions(data.captions);
    } catch (error) {
      console.error("Error:", error);
      setCaptions(["Error generating caption"]);
    }
  };


  export default GeneratecaptionFromUrl;