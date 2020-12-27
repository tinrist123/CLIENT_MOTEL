import React from "react";

function ExclamationIcon(props) {
  return (
    <svg
      id="Capa_1"
      enableBackground="new 0 0 512 512"
      viewBox="0 0 512 512"
      width="32px"
      height="32px"
      xmlns="http://www.w3.org/2000/svg"
      {...props.sizeIcon}
    >
      <g>
        <path
          d="m256 422c-24.853 0-45 20.147-45 45s20.147 45 45 45 45-20.147 45-45-20.147-45-45-45z"
          fill="#ff8659"
        />
        <g>
          <path
            d="m301 467c0-24.853-20.147-45-45-45v90c24.853 0 45-20.147 45-45z"
            fill="#ff4a4a"
          />
        </g>
        <path
          d="m256 0c-24.853 0-45 20.147-45 45v299c0 24.853 20.147 45 45 45s45-20.147 45-45v-299c0-24.853-20.147-45-45-45z"
          fill="#ff8659"
        />
        <path
          d="m301 344v-299c0-24.853-20.147-45-45-45v389c24.853 0 45-20.147 45-45z"
          fill="#ff4a4a"
        />
      </g>
    </svg>
  );
}

export default ExclamationIcon;
