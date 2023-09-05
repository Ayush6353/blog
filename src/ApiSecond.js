import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BlogPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://blog-with-user-jade.vercel.app/');
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {console.log('posts :>> ', posts)}
    </div>
  );
}

export default BlogPosts;
