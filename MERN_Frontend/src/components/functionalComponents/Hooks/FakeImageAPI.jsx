import React, { useState, useEffect } from 'react';

const FakeImageAPI = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imageUrl = 'https://picsum.photos/300/200';
    setImage(imageUrl);
    setLoading(false);
  }, []);

  return (
    <div>
      <h2>Fake Image API</h2>
      {loading ? (
        <p>Loading image...</p>
      ) : (
        <img src={image} alt="Random Image" style={{width: '300px', height: '200px'}} />
      )}
    </div>
  );
};

export default FakeImageAPI;