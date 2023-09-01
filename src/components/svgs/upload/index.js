const Upload = ({width,height}) => {
  return (
    <svg
      width={width ? width :"20"}
      height={height ? height : "21"}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66797 13.8333L10.0013 10.5M10.0013 10.5L13.3346 13.8333M10.0013 10.5V18M16.668 14.4524C17.6859 13.6117 18.3346 12.3399 18.3346 10.9167C18.3346 8.38536 16.2826 6.33333 13.7513 6.33333C13.5692 6.33333 13.3989 6.23833 13.3064 6.08145C12.2197 4.23736 10.2133 3 7.91797 3C4.46619 3 1.66797 5.79822 1.66797 9.25C1.66797 10.9718 2.36417 12.5309 3.49043 13.6613"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Upload;
