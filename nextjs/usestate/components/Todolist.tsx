"use client";
import React, { useState, useEffect } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const UserNameInput: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Post[] = await response.json();
        if (data && data.length) setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="p-5 font-sans">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Posts</h1>
      <ul className="space-y-4">
        {data.map((post) => (
          <li key={post.id} className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-700">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserNameInput;
