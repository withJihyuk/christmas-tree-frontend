"use client";

import { useRouter } from "next/navigation";
export function Navbar() {
  const router = useRouter();

  return (
    <header>
      <div className="absolute left-0 m-4">
        <svg
          className="w-8 h-8 text-blue-500"
          width="800px"
          height="800px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          onClick={() => router.back()}
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            <path
              fill="#ffffff"
              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
            />

            <path
              fill="#ffffff"
              d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
            />
          </g>
        </svg>
      </div>
      <div className="absolute right-0 m-4">
        {/* <svg
          className="w-8 h-8 text-blue-500"
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />{" "}
          </g>
        </svg> */}
        <svg
          className="w-8 h-8 text-blue-500"
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          onClick={() => router.push("/")}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />{" "}
            <path
              d="M15 18H9"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />{" "}
          </g>
        </svg>
      </div>
    </header>
  );
}
