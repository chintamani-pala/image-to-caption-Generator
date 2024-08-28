const ClearImagePreview = (imagePreviewRef,dismissImageRef,imageInputContainerRef,linkRef,setSelected,imageInputRef) => {
    if (imagePreviewRef.current) imagePreviewRef.current.innerHTML = "";
    if (dismissImageRef.current)
      dismissImageRef.current.classList.add("hidden");
    if (imageInputContainerRef.current)
      imageInputContainerRef.current.classList.remove("hidden");
    if (linkRef.current) linkRef.current.classList.remove("hidden");
    setSelected("");
    if (imageInputRef.current) imageInputRef.current.value = ""; // Reset the file input
  };

  export default ClearImagePreview;