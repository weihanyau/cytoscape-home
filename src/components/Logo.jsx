export function Logomark(props) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" {...props}>
      <path d="M18.13,9.547 C18.065,10.19 17.878,10.811 17.578,11.381 L22.444,16.35 C23.141,16.015 23.898,15.828 24.674,15.801 L26.701,9.124 C26.183,8.741 25.742,8.261 25.404,7.713 L18.13,9.547 z M17.319,6.244 L24.697,4.383 C25.028,1.903 27.154,0 29.711,0 C32.505,0 34.77,2.266 34.77,5.059 C34.77,7.783 32.616,10.005 29.919,10.114 L27.92,16.701 C29.496,17.725 30.468,19.483 30.468,21.395 C30.468,23 29.784,24.507 28.607,25.562 L30.795,29.931 C31.03,29.898 31.267,29.882 31.505,29.882 C34.298,29.882 36.563,32.147 36.563,34.941 C36.563,37.734 34.298,40 31.505,40 C28.711,40 26.445,37.734 26.445,34.941 C26.445,33.647 26.936,32.418 27.809,31.486 L25.538,26.952 C25.316,26.979 25.093,26.992 24.871,26.992 C23.737,26.992 22.644,26.652 21.718,26.019 L19.146,28.284 C19.163,28.417 19.172,28.552 19.172,28.686 C19.172,30.391 17.79,31.773 16.086,31.773 C14.381,31.773 12.999,30.391 12.999,28.686 C12.999,26.982 14.381,25.599 16.086,25.599 C16.38,25.599 16.671,25.641 16.951,25.723 L19.631,23.364 C19.494,23.001 19.396,22.625 19.338,22.241 L12.951,21.381 C12.078,23.005 10.374,24.043 8.496,24.043 C5.702,24.043 3.437,21.777 3.437,18.984 C3.437,16.191 5.702,13.925 8.496,13.925 C10.953,13.925 13.029,15.688 13.468,18.051 L19.854,18.912 C19.896,18.826 19.941,18.741 19.988,18.658 L15.109,13.675 C14.476,13.95 13.793,14.092 13.097,14.092 C10.304,14.092 8.038,11.826 8.038,9.032 C8.038,6.239 10.304,3.974 13.097,3.974 C14.812,3.973 16.39,4.838 17.319,6.244 z" fill={props.fill} />
    </svg>
  )
}

export function Logo(props) {
  return (
    <svg viewBox="0 0 105 40" aria-hidden="true" {...props}>
      <Logomark width="40" height="40" fill="#EA9122" />
      <g className="fill-gray-900 translate-x-9">
        <path d="M9.13,20.686 C9.053,21.797 8.615,22.68 7.815,23.338 C7.014,23.994 5.972,24.322 4.688,24.322 C3.206,24.322 2.054,23.867 1.234,22.965 C0.409,22.06 0,20.792 0,19.159 C0,17.492 0.42,16.216 1.255,15.329 C2.093,14.442 3.298,14 4.871,14 C6.148,14 7.156,14.303 7.896,14.913 C8.635,15.523 9.045,16.384 9.114,17.499 L7.085,17.499 C6.999,16.943 6.766,16.52 6.392,16.232 C6.016,15.941 5.509,15.795 4.87,15.795 C3.965,15.795 3.277,16.081 2.805,16.654 C2.335,17.225 2.098,18.061 2.098,19.159 C2.098,20.223 2.331,21.046 2.799,21.628 C3.269,22.21 3.936,22.498 4.802,22.498 C5.427,22.498 5.939,22.341 6.337,22.033 C6.737,21.718 6.995,21.272 7.112,20.686 L9.13,20.686 L9.13,20.686 z M10.577,26.95 L10.577,25.384 C10.638,25.393 10.707,25.404 10.772,25.409 C10.841,25.412 10.928,25.415 11.036,25.415 C11.428,25.415 11.718,25.325 11.913,25.141 C12.11,24.962 12.206,24.693 12.206,24.335 C12.206,24.31 12.202,24.275 12.192,24.237 C12.182,24.193 12.173,24.163 12.164,24.133 L9.504,16.818 L11.674,16.818 L13.231,22.035 L14.746,16.818 L16.824,16.818 L13.789,25.348 C13.563,25.983 13.279,26.423 12.938,26.651 C12.6,26.886 12.089,27 11.41,27 C11.287,27 11.157,26.996 11.016,26.987 C10.878,26.978 10.728,26.965 10.577,26.95 L10.577,26.95 z M21.275,24.1 C21.095,24.104 20.879,24.113 20.626,24.124 C20.375,24.139 20.217,24.144 20.149,24.144 C19.39,24.144 18.873,24.003 18.597,23.728 C18.317,23.447 18.179,22.902 18.179,22.086 L18.179,18.177 L17.2,18.177 L17.2,16.817 L18.179,16.817 L18.179,14.844 L20.136,14.844 L20.136,16.817 L21.275,16.817 L21.275,18.177 L20.136,18.177 L20.136,22.178 C20.136,22.373 20.18,22.495 20.266,22.556 C20.352,22.614 20.527,22.646 20.793,22.646 L21.275,22.646 L21.275,24.1 L21.275,24.1 L21.275,24.1 z M24.009,20.421 C24.009,21.14 24.156,21.696 24.459,22.084 C24.763,22.476 25.192,22.67 25.746,22.67 C26.293,22.67 26.718,22.476 27.021,22.084 C27.325,21.697 27.472,21.14 27.472,20.421 C27.472,19.71 27.327,19.158 27.025,18.771 C26.729,18.383 26.302,18.189 25.746,18.189 C25.192,18.189 24.763,18.383 24.459,18.771 C24.155,19.158 24.009,19.71 24.009,20.421 L24.009,20.421 z M22.003,20.421 C22.003,19.221 22.337,18.277 23.004,17.59 C23.67,16.901 24.58,16.558 25.748,16.558 C26.909,16.558 27.819,16.901 28.488,17.59 C29.156,18.277 29.491,19.221 29.491,20.421 C29.491,21.63 29.156,22.575 28.488,23.262 C27.819,23.949 26.909,24.292 25.748,24.292 C24.58,24.292 23.67,23.949 23.004,23.262 C22.337,22.575 22.003,21.63 22.003,20.421 z" />
        <path d="M29.976,21.611 L31.148,21.611 C31.196,22.091 31.372,22.46 31.685,22.709 C31.992,22.954 32.432,23.08 33.003,23.08 C33.527,23.08 33.943,22.981 34.249,22.776 C34.55,22.576 34.702,22.3 34.702,21.951 C34.702,21.686 34.625,21.486 34.473,21.346 C34.324,21.208 34.026,21.085 33.587,20.984 L32.221,20.639 C31.451,20.459 30.92,20.217 30.616,19.915 C30.317,19.619 30.165,19.192 30.165,18.636 C30.165,18.009 30.41,17.509 30.893,17.139 C31.381,16.768 32.048,16.583 32.896,16.583 C33.76,16.583 34.447,16.782 34.959,17.176 C35.471,17.57 35.727,18.1 35.727,18.766 L35.727,18.791 L34.537,18.791 C34.511,18.414 34.353,18.121 34.066,17.917 C33.776,17.71 33.389,17.607 32.894,17.607 C32.399,17.607 32.028,17.691 31.77,17.859 C31.515,18.029 31.385,18.275 31.385,18.6 C31.385,18.831 31.467,19.011 31.627,19.138 C31.788,19.272 32.086,19.384 32.528,19.481 L33.707,19.757 C34.549,19.951 35.129,20.201 35.449,20.502 C35.763,20.808 35.921,21.241 35.921,21.805 C35.921,22.547 35.656,23.117 35.126,23.529 C34.593,23.94 33.85,24.147 32.896,24.147 C31.961,24.147 31.242,23.927 30.746,23.494 C30.246,23.058 29.989,22.429 29.976,21.611 L29.976,21.611 z M41.781,19.172 C41.745,18.683 41.563,18.308 41.242,18.041 C40.916,17.778 40.476,17.647 39.911,17.647 C39.249,17.647 38.739,17.882 38.38,18.347 C38.022,18.809 37.842,19.476 37.842,20.344 C37.842,21.209 38.016,21.88 38.361,22.346 C38.706,22.819 39.199,23.056 39.83,23.056 C40.402,23.056 40.857,22.909 41.198,22.623 C41.541,22.332 41.754,21.912 41.835,21.365 L43.001,21.365 C42.942,22.237 42.625,22.918 42.058,23.409 C41.495,23.9 40.734,24.146 39.775,24.146 C38.781,24.146 38.001,23.812 37.431,23.142 C36.861,22.472 36.578,21.552 36.578,20.387 C36.578,19.193 36.872,18.261 37.466,17.584 C38.059,16.908 38.875,16.57 39.911,16.57 C40.828,16.57 41.556,16.802 42.11,17.27 C42.658,17.737 42.953,18.37 42.987,19.172 L41.78,19.172 L41.781,19.172 L41.781,19.172 z M48.325,22.974 C47.942,23.362 47.535,23.657 47.109,23.851 C46.68,24.045 46.229,24.146 45.748,24.146 C45.007,24.146 44.426,23.952 44.01,23.575 C43.593,23.193 43.386,22.67 43.386,22.003 C43.386,21.357 43.588,20.85 44,20.479 C44.411,20.111 45.033,19.875 45.871,19.769 C46.082,19.742 46.372,19.715 46.733,19.676 C47.353,19.614 47.736,19.551 47.872,19.493 C48.015,19.443 48.107,19.372 48.156,19.286 C48.197,19.2 48.219,19.013 48.219,18.721 C48.219,18.36 48.085,18.088 47.815,17.905 C47.542,17.724 47.133,17.634 46.583,17.634 C46.021,17.634 45.594,17.743 45.303,17.965 C45.018,18.188 44.872,18.517 44.872,18.95 L43.72,18.95 L43.72,18.896 C43.72,18.179 43.977,17.61 44.494,17.192 C45.011,16.776 45.719,16.57 46.627,16.57 C47.597,16.57 48.311,16.748 48.776,17.103 C49.233,17.461 49.464,18.019 49.464,18.777 L49.464,22.34 C49.464,22.646 49.497,22.842 49.565,22.93 C49.633,23.019 49.754,23.067 49.932,23.067 C49.97,23.067 50.011,23.064 50.064,23.058 C50.12,23.052 50.178,23.041 50.251,23.023 L50.251,23.949 C50.106,23.991 49.972,24.019 49.865,24.033 C49.75,24.054 49.644,24.06 49.545,24.06 C49.137,24.06 48.835,23.974 48.628,23.801 C48.426,23.623 48.325,23.362 48.325,23.013 L48.325,22.974 L48.325,22.974 L48.325,22.974 z M48.206,20.299 C47.878,20.471 47.322,20.609 46.531,20.706 C46.246,20.74 46.04,20.771 45.897,20.792 C45.455,20.863 45.134,20.99 44.941,21.175 C44.747,21.365 44.65,21.634 44.65,21.989 C44.65,22.343 44.763,22.614 44.989,22.809 C45.213,22.998 45.539,23.093 45.959,23.093 C46.618,23.093 47.155,22.931 47.577,22.605 C47.997,22.285 48.206,21.871 48.206,21.365 L48.206,20.299 L48.206,20.299 z M52.134,20.411 C52.134,21.3 52.314,21.966 52.677,22.412 C53.035,22.856 53.574,23.08 54.294,23.08 C54.984,23.08 55.514,22.834 55.885,22.343 C56.262,21.853 56.448,21.158 56.448,20.262 C56.448,19.45 56.257,18.81 55.868,18.348 C55.478,17.882 54.95,17.647 54.28,17.647 C53.591,17.647 53.062,17.887 52.692,18.365 C52.318,18.845 52.134,19.528 52.134,20.411 L52.134,20.411 z M50.982,26.772 L50.982,16.8 L52.178,16.8 L52.178,17.807 C52.476,17.382 52.818,17.067 53.199,16.87 C53.576,16.669 54.023,16.57 54.548,16.57 C55.516,16.57 56.288,16.91 56.866,17.593 C57.441,18.276 57.733,19.191 57.733,20.339 C57.733,21.501 57.438,22.425 56.858,23.112 C56.272,23.804 55.499,24.146 54.53,24.146 C54.018,24.146 53.572,24.056 53.187,23.872 C52.798,23.693 52.461,23.42 52.178,23.054 L52.178,26.772 L50.982,26.772 L50.982,26.772 z M59.722,19.715 L63.716,19.715 C63.711,19.05 63.54,18.537 63.199,18.177 C62.86,17.815 62.377,17.634 61.754,17.634 C61.152,17.634 60.674,17.811 60.329,18.164 C59.984,18.522 59.783,19.037 59.722,19.715 L59.722,19.715 z M63.692,21.624 L64.899,21.624 C64.765,22.408 64.417,23.026 63.853,23.481 C63.287,23.931 62.575,24.159 61.715,24.159 C60.706,24.159 59.905,23.827 59.324,23.162 C58.74,22.496 58.445,21.586 58.445,20.441 C58.445,19.224 58.737,18.276 59.313,17.593 C59.894,16.91 60.696,16.57 61.715,16.57 C62.759,16.57 63.566,16.884 64.141,17.513 C64.714,18.142 65,19.032 65,20.182 C65,20.324 65,20.436 64.998,20.503 C64.996,20.574 64.99,20.645 64.981,20.712 L59.729,20.712 C59.742,21.462 59.936,22.044 60.301,22.455 C60.666,22.862 61.176,23.069 61.83,23.069 C62.329,23.069 62.74,22.941 63.061,22.689 C63.386,22.44 63.598,22.084 63.692,21.624 z" fill="#EA9122"/>
        <path d="M25.718,39.676 L25.718,34.073 L20.795,34.073 L20.795,39.676 L18.189,39.676 L18.189,27.125 L20.795,27.125 L20.795,31.911 L25.718,31.911 L25.718,27.125 L28.333,27.125 L28.333,39.676 z" />
        <path d="M38.418,31.57 Q39.597,33.043 39.597,35.053 Q39.597,37.096 38.418,38.548 Q37.239,40 34.837,40 Q32.435,40 31.256,38.548 Q30.077,37.096 30.077,35.053 Q30.077,33.043 31.256,31.57 Q32.435,30.097 34.837,30.097 Q37.239,30.097 38.418,31.57 z M34.828,32.149 Q33.76,32.149 33.183,32.903 Q32.606,33.656 32.606,35.053 Q32.606,36.449 33.183,37.207 Q33.76,37.965 34.828,37.965 Q35.897,37.965 36.469,37.207 Q37.042,36.449 37.042,35.053 Q37.042,33.656 36.469,32.903 Q35.897,32.149 34.828,32.149 z" />
        <path d="M46.571,32.949 Q46.264,32.277 45.366,32.277 Q44.324,32.277 43.965,32.949 Q43.768,33.333 43.768,34.09 L43.768,39.676 L41.298,39.676 L41.298,30.412 L43.665,30.412 L43.665,31.766 Q44.118,31.042 44.52,30.735 Q45.229,30.19 46.358,30.19 Q47.426,30.19 48.084,30.659 Q48.614,31.093 48.887,31.774 Q49.366,30.957 50.075,30.574 Q50.827,30.19 51.75,30.19 Q52.366,30.19 52.964,30.429 Q53.562,30.667 54.049,31.263 Q54.443,31.749 54.579,32.456 Q54.665,32.924 54.665,33.826 L54.648,39.676 L52.152,39.676 L52.152,33.767 Q52.152,33.239 51.981,32.898 Q51.656,32.251 50.785,32.251 Q49.776,32.251 49.392,33.086 Q49.195,33.528 49.195,34.15 L49.195,39.676 L46.742,39.676 L46.742,34.15 Q46.742,33.324 46.571,32.949 z" />
        <path d="M64.878,36.952 Q64.784,37.778 64.015,38.629 Q62.818,39.983 60.664,39.983 Q58.887,39.983 57.528,38.842 Q56.169,37.701 56.169,35.129 Q56.169,32.719 57.395,31.434 Q58.622,30.148 60.579,30.148 Q61.741,30.148 62.673,30.582 Q63.604,31.016 64.211,31.953 Q64.758,32.779 64.92,33.869 Q65.014,34.508 64.997,35.708 L58.622,35.708 Q58.673,37.105 59.502,37.667 Q60.006,38.016 60.716,38.016 Q61.468,38.016 61.938,37.59 Q62.194,37.36 62.391,36.952 z M62.468,34.107 Q62.408,33.145 61.882,32.647 Q61.357,32.149 60.579,32.149 Q59.733,32.149 59.267,32.677 Q58.801,33.205 58.682,34.107 z" />
      </g>
    </svg>
  )
}
