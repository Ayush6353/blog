import React from "react";

const PeopleIcon = ({stroke}) => {
  return (
    <div>
      <svg
        width="35"
        height="36"
        viewBox="0 0 35 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.0721 11.0824C25.9864 11.0681 25.8864 11.0681 25.8007 11.0824C23.8292 11.0109 22.2578 9.39665 22.2578 7.39665C22.2578 5.3538 23.9007 3.71094 25.9435 3.71094C27.9864 3.71094 29.6292 5.36808 29.6292 7.39665C29.615 9.39665 28.0435 11.0109 26.0721 11.0824Z"
          stroke={stroke ? stroke :"white"}
          strokeWidth="1.85714"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.6015 21.4792C26.5586 21.8078 28.7157 21.465 30.23 20.4507C32.2443 19.1078 32.2443 16.9078 30.23 15.565C28.7015 14.5507 26.5157 14.2078 24.5586 14.5507"
          stroke={stroke ? stroke :"white"}
          strokeWidth="1.85714"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.88918 11.0824C8.97489 11.0681 9.07489 11.0681 9.1606 11.0824C11.132 11.0109 12.7035 9.39665 12.7035 7.39665C12.7035 5.3538 11.0606 3.71094 9.01775 3.71094C6.97489 3.71094 5.33203 5.36808 5.33203 7.39665C5.34632 9.39665 6.91775 11.0109 8.88918 11.0824Z"
          stroke={stroke ? stroke :"white"}
          strokeWidth="1.85714"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.3619 21.4792C8.4048 21.8078 6.24766 21.465 4.73337 20.4507C2.71908 19.1078 2.71908 16.9078 4.73337 15.565C6.26194 14.5507 8.44765 14.2078 10.4048 14.5507"
          stroke={stroke ? stroke :"white"}
          strokeWidth="1.85714"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5018 21.7542C17.4161 21.74 17.3161 21.74 17.2304 21.7542C15.2589 21.6828 13.6875 20.0685 13.6875 18.0685C13.6875 16.0257 15.3304 14.3828 17.3732 14.3828C19.4161 14.3828 21.0589 16.04 21.0589 18.0685C21.0446 20.0685 19.4732 21.6971 17.5018 21.7542Z"
          stroke={stroke ? stroke :"white"}
          strokeWidth="1.85714"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.3467 26.2568C11.3324 27.5997 11.3324 29.7997 13.3467 31.1425C15.6324 32.6711 19.3752 32.6711 21.6609 31.1425C23.6752 29.7997 23.6752 27.5997 21.6609 26.2568C19.3895 24.7425 15.6324 24.7425 13.3467 26.2568Z"
          stroke={stroke ? stroke :"white"}
          strokeWidth="1.85714"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default PeopleIcon;