import React, { useState } from "react";
import axios from "axios";

const File = () => {
  const [files, setFiles] = useState([]);
  const [previewURLs, setPreviewURLs] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    // Validate file types (images only)
    const validFiles = selectedFiles.filter((file) =>
      ["image/jpeg", "image/png", "image/gif"].includes(file.type)
    );

    if (validFiles.length !== selectedFiles.length) {
      alert("Only image files (jpg, png, gif) are allowed.");
    }

    setFiles(validFiles);

    // Generate preview URLs
    const urls = validFiles.map((file) => URL.createObjectURL(file));
    setPreviewURLs(urls);
  };

  // Mock file upload
  const handleUpload = async () => {
    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", formData, {
        onUploadProgress: (progressEvent) => {
          const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentage);
        },
      });
      alert("Files uploaded successfully!");
    } catch (error) {
      alert("Error uploading files!");
    }
  };

  return (
    <div>
      <h2>File Upload with Preview</h2>
      <input type="file" multiple onChange={handleFileChange} />

      {/* Preview Section */}
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {previewURLs.map((url, index) => (
          <img key={index} src={url} alt={`preview-${index}`} width="100" height="100" />
        ))}
      </div>

      {/* Upload Progress */}
      {uploadProgress > 0 && (
        <div style={{ marginTop: "10px" }}>
          <p>Upload Progress: {uploadProgress}%</p>
        </div>
      )}

      <button onClick={handleUpload} disabled={files.length === 0}>
        Upload Files
      </button>
    </div>
  );
};

export default File;
