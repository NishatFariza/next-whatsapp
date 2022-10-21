import React from "react";

const AuthenticatedUser = () => {
  return (
    <div className="chat-app__contacts flex justify-between border-b p-3 shadow">
      <button>
        <img
          className="w-10 h-10 rounded-full"
          src="https://i.pinimg.com/236x/b7/1f/95/b71f95d4d07c8949e8e046bab7c7668d.jpg"
          alt=""
        />
      </button>
      <div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AuthenticatedUser;
