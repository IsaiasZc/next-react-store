import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(API);
      setProducts(
        response.data.filter((item) => {
          // Here we validate if we have a valid URL for the image
          return /(ftp|http|https):/.test(item.images[0]);
        })
      );
    };
    fetchData();
  }, [API]);

  return products;
};

export default useGetProducts;
