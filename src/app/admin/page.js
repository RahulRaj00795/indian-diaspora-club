
'use client';

import { useState } from 'react';

export default function Admin() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [link, setLink] = useState('');

  const [achieverName, setAchieverName] = useState('');
  const [achieverDescription, setAchieverDescription] = useState('');

  const handleNewsSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/news/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, image, link }),
      });

      if (response.ok) {
        setTitle('');
        setDescription('');
        setImage('');
        setLink('');
        alert('News added successfully!');
      } else {
        alert('Failed to add news');
      }
    } catch (error) {
      console.error('Error adding news:', error);
      alert('Failed to add news');
    }
  };

  const handleAchieverSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/achievers/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: achieverName, description: achieverDescription }),
      });

      if (response.ok) {
        setAchieverName('');
        setAchieverDescription('');
        alert('Achiever added successfully!');
      } else {
        alert('Failed to add achiever');
      }
    } catch (error) {
      console.error('Error adding achiever:', error);
      alert('Failed to add achiever');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Add News</h1>
        <form onSubmit={handleNewsSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
              Description
            </label>
            <textarea
              id="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="link" className="block text-gray-700 font-bold mb-2">
              Link
            </label>
            <input
              type="text"
              id="link"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add News
            </button>
          </div>
        </form>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-4">Add Achiever</h1>
        <form onSubmit={handleAchieverSubmit}>
          <div className="mb-4">
            <label htmlFor="achieverName" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="achieverName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={achieverName}
              onChange={(e) => setAchieverName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="achieverDescription" className="block text-gray-700 font-bold mb-2">
              Description
            </label>
            <textarea
              id="achieverDescription"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
              value={achieverDescription}
              onChange={(e) => setAchieverDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Achiever
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
