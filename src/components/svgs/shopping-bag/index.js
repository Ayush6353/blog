import React from 'react'

const ShoppingBag = ({ height = 18, width = 18 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.333 5.71623C12.333 6.60028 11.9818 7.44813 11.3567 8.07325C10.7316 8.69837 9.88375 9.04956 8.9997 9.04956C8.11564 9.04956 7.2678 8.69837 6.64267 8.07325C6.01755 7.44813 5.66636 6.60028 5.66636 5.71623M2.02738 5.21738L1.44405 12.2174C1.31873 13.7211 1.25608 14.473 1.51027 15.053C1.7336 15.5627 2.12056 15.9832 2.60985 16.2481C3.16676 16.5496 3.92125 16.5496 5.43023 16.5496H12.5692C14.0781 16.5496 14.8326 16.5496 15.3895 16.2481C15.8788 15.9832 16.2658 15.5627 16.4891 15.053C16.7433 14.473 16.6807 13.7211 16.5553 12.2174L15.972 5.21738C15.8642 3.92352 15.8103 3.27659 15.5238 2.78694C15.2714 2.35576 14.8957 2.01006 14.4451 1.79443C13.9334 1.54956 13.2842 1.54956 11.9858 1.54956L6.01356 1.54956C4.71522 1.54956 4.06604 1.54956 3.55429 1.79443C3.10365 2.01006 2.72795 2.35576 2.47564 2.78694C2.18911 3.27659 2.1352 3.92352 2.02738 5.21738Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

  )
}

export default ShoppingBag