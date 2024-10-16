import React, { useEffect, useState } from 'react';

function Products() {
  const [product, setProduct] = useState(null);
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchingData = async () => {
    try {
      setLoading(true);
      console.log('Fetching data...');
      const [response1, response2] = await Promise.all([
        fetch('https://dummyapi.online/api/products'),
        fetch('https://jsonplaceholder.typicode.com/posts')
      ]);

      if (!response1.ok) throw new Error('Failed to fetch products');
      if (!response2.ok) throw new Error('Failed to fetch posts');

      const data1 = await response1.json();
      const data2 = await response2.json();

      console.log('Data from API 1:', data1);
      console.log('Data from API 2:', data2);

      setProduct(data1);
      setPosts(data2);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Data from Multiple APIs</h1>
      <div>
        <h2>Data from API 1:</h2>
        <pre>{JSON.stringify(product, null, 2)}</pre>
      </div>
      <div>
        <h2>Data from API 2:</h2>
        <pre>{JSON.stringify(posts, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Products;
