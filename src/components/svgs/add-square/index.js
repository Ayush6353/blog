const AddSquare = ({ opacity, width, height }) => {
  return (
    <svg
      width={width ? width : "29"}
      height={height ? height : "29"}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity={opacity ? opacity : "0.7"}
        d="M25.2846 9.54063V9.54201V19.3187C25.2846 21.3426 24.6832 22.8979 23.6343 23.9468C22.5855 24.9957 21.0301 25.597 19.0062 25.597H9.24122C7.21734 25.597 5.66214 24.9957 4.61333 23.9455C3.56445 22.8954 2.96289 21.3371 2.96289 19.307V9.54201C2.96289 7.51811 3.56424 5.96277 4.61311 4.91389C5.66199 3.86502 7.21733 3.26367 9.24122 3.26367H19.0179C21.0419 3.26367 22.597 3.86506 23.6443 4.91367C24.6915 5.96218 25.2901 7.51705 25.2846 9.54063Z"
        fill="#F2F4F7"
        stroke="#F2F4F7"
      />
      <path
        d="M14.5046 13.5553V14.0553H15.0046H18.7962C18.9984 14.0553 19.1712 14.2281 19.1712 14.4303C19.1712 14.6325 18.9984 14.8053 18.7962 14.8053H15.0046H14.5046V15.3053V19.097C14.5046 19.2992 14.3317 19.472 14.1296 19.472C13.9274 19.472 13.7546 19.2992 13.7546 19.097V15.3053V14.8053H13.2546H9.46289C9.2607 14.8053 9.08789 14.6325 9.08789 14.4303C9.08789 14.2281 9.2607 14.0553 9.46289 14.0553H13.2546H13.7546V13.5553V9.76367C13.7546 9.56148 13.9274 9.38867 14.1296 9.38867C14.3317 9.38867 14.5046 9.56148 14.5046 9.76367V13.5553Z"
        fill="#F2F4F7"
        stroke="#F2F4F7"
      />
    </svg>
  );
};

export default AddSquare;
