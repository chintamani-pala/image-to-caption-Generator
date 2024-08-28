const HandleImageChange = (event,imageInputContainerRef,imagePreviewRef,dismissImageRef,linkRef,setSelected) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (imagePreviewRef.current) {
          imagePreviewRef.current.innerHTML = "";
          const img = document.createElement("img");
          img.src = e.target.result;
          img.className = "max-w-full max-h-[200px] object-contain rounded-lg"; // Tailwind classes
          imagePreviewRef.current.appendChild(img);
        }
      };

      reader.readAsDataURL(file);
      setSelected("image");
      if (dismissImageRef.current)
        dismissImageRef.current.classList.remove("hidden");
      if (imageInputContainerRef.current)
        imageInputContainerRef.current.classList.add("hidden");
      if (linkRef.current) linkRef.current.classList.add("hidden");
    }
  };


  export default HandleImageChange;