import React from 'react';

function AppBackground() {
    return (
        <svg
            className="background-pattern"
            xmlns="http://www.w3.org/2000/svg"
            width="1440"
            height="960"
            fill="none"
            viewBox="0 0 1440 960"
        >
            <g clipPath="url(#clip0_1_29)" filter="url(#filter0_b_1_29)">
                <path fill="#F9FAFB" fillOpacity="0.7" d="M0 0H1440V962H0z" />
                <path
                    fill="#CCE7E0"
                    d="M-38 814.517L382 762v64l-420 52.517v-64z"
                />
                <path
                    fill="#EDF9F1"
                    d="M-190 897.506l420-52.517v64l-420 52.517v-64z"
                />
            </g>
            <defs>
                <filter
                    id="filter0_b_1_29"
                    width="1640"
                    height="1162"
                    x="-100"
                    y="-100"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="50"
                    />
                    <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1_29"
                    />
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1_29"
                        result="shape"
                    />
                </filter>
                <clipPath id="clip0_1_29">
                    <path fill="#fff" d="M0 0H1440V962H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default AppBackground;
