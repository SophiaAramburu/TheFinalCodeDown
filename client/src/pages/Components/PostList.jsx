import React, { useEffect, useState } from "react";

const PostItem = ({ status, postOwner, updated }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg px-6 py-4 mb-6">
      <div className="flex items-center">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src="https://v1.tailwindcss.com/img/jonathan.jpg"
          alt="Avatar of Jonathan Reinink"
        />
        <div className="text-sm">
          <p className="text-gray-900 leading-none">{postOwner}</p>
          <p className="text-gray-600">{updated}</p>
        </div>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{status}</p>
      </div>
      <img
        className="w-full mb-1"
        src="https://v1.tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      <div>
        <div className="cursor-pointer flex">
          <span className="flex mr-2 h-min w-min space-x-1 items-center rounded-full text-gray-400 hover:text-rose-600 bg-gray-700 hover:bg-rose-50 py-1 px-2 text-xs font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-current hover:text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <p className="font-semibold text-xs">10</p>
          </span>
          <span className="flex h-min w-min space-x-1 items-center rounded-full text-gray-400 hover:text-rose-600 bg-gray-700 hover:bg-rose-50 py-1 px-2 text-xs font-medium">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="comment-alt"
              class="w-5 h-5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/status/")
      .then((response) => response.json())
      .then((data) => setPosts(data.items));
  }, []);

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      {posts.map((p) => (
        <PostItem
          status={p.status}
          postOwner={p.owner}
          updated={p.updatedDate}
          index={p._id}
        />
      ))}
    </div>
  );
};

export default PostList;
