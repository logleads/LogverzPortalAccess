<template>
  <div>
    <svg id="svg-container" style="display: none">
      <symbol id="aws-icon" viewBox="0 0 30 18">
        <path
          d="M8.44998 6.53726C8.44998 6.90768 8.48989 7.20801 8.55973 7.42825C8.63954 7.6485 8.73931 7.88877 8.87898 8.14905C8.92887 8.22914 8.94882 8.30923 8.94882 8.37931C8.94882 8.47942 8.88896 8.57953 8.75926 8.67964L8.13073 9.10011C8.04094 9.16018 7.95115 9.19021 7.87134 9.19021C7.77157 9.19021 7.6718 9.14016 7.57203 9.05006C7.43236 8.89989 7.31264 8.73971 7.21287 8.57953C7.1131 8.40934 7.01334 8.21913 6.90359 7.98888C6.12541 8.9099 5.14769 9.37041 3.97044 9.37041C3.13239 9.37041 2.46395 9.13015 1.97509 8.64961C1.48623 8.16908 1.23682 7.52836 1.23682 6.72748C1.23682 5.87653 1.53612 5.18576 2.1447 4.66518C2.75328 4.14461 3.56139 3.88432 4.58899 3.88432C4.9282 3.88432 5.27739 3.91435 5.64653 3.9644C6.01567 4.01446 6.39478 4.09455 6.79385 4.18465V3.45384C6.79385 2.69299 6.63422 2.1624 6.32494 1.85206C6.00569 1.54171 5.46695 1.39155 4.69874 1.39155C4.34955 1.39155 3.99039 1.43159 3.62125 1.52169C3.25211 1.61179 2.89295 1.72191 2.54377 1.86207C2.38414 1.93215 2.26442 1.97219 2.19458 1.99221C2.12474 2.01224 2.07486 2.02225 2.03495 2.02225C1.89528 2.02225 1.82544 1.92214 1.82544 1.7119V1.22136C1.82544 1.06118 1.8454 0.941046 1.89528 0.870968C1.94516 0.80089 2.03495 0.730812 2.17463 0.660734C2.52381 0.480534 2.94284 0.330367 3.43169 0.210234C3.92055 0.080089 4.43934 0.0200222 4.98806 0.0200222C6.17529 0.0200222 7.04327 0.290323 7.60196 0.830923C8.15068 1.37152 8.43003 2.19244 8.43003 3.29366V6.53726H8.44998ZM4.39944 8.05895C4.72867 8.05895 5.06788 7.99889 5.42704 7.87875C5.7862 7.75862 6.10546 7.53838 6.37483 7.23804C6.53445 7.04783 6.65418 6.8376 6.71404 6.59733C6.7739 6.35706 6.8138 6.06674 6.8138 5.72636V5.3059C6.52448 5.23582 6.2152 5.17575 5.89594 5.13571C5.57669 5.09566 5.26741 5.07564 4.95813 5.07564C4.28969 5.07564 3.80083 5.20578 3.4716 5.47608C3.14237 5.74639 2.98274 6.12681 2.98274 6.62736C2.98274 7.09789 3.10246 7.44828 3.35188 7.68854C3.59132 7.93882 3.94051 8.05895 4.39944 8.05895ZM12.4107 9.14016C12.2312 9.14016 12.1114 9.11012 12.0316 9.04004C11.9518 8.97998 11.882 8.83982 11.8221 8.64961L9.47759 0.911012C9.41773 0.71079 9.3878 0.580645 9.3878 0.510567C9.3878 0.350389 9.46761 0.260289 9.62724 0.260289H10.605C10.7945 0.260289 10.9242 0.290323 10.994 0.3604C11.0739 0.420467 11.1337 0.560623 11.1936 0.750834L12.8697 7.3782L14.426 0.750834C14.4759 0.550612 14.5358 0.420467 14.6156 0.3604C14.6954 0.300334 14.8351 0.260289 15.0147 0.260289H15.8128C16.0024 0.260289 16.1321 0.290323 16.2119 0.3604C16.2917 0.420467 16.3615 0.560623 16.4014 0.750834L17.9778 7.45829L19.7037 0.750834C19.7636 0.550612 19.8334 0.420467 19.9033 0.3604C19.9831 0.300334 20.1128 0.260289 20.2924 0.260289H21.2202C21.3798 0.260289 21.4696 0.340378 21.4696 0.510567C21.4696 0.560623 21.4596 0.610679 21.4497 0.670745C21.4397 0.730812 21.4197 0.810901 21.3798 0.921023L18.9754 8.65962C18.9156 8.85984 18.8457 8.98999 18.7659 9.05006C18.6861 9.11012 18.5564 9.15017 18.3868 9.15017H17.5288C17.3392 9.15017 17.2095 9.12013 17.1297 9.05006C17.0499 8.97998 16.9801 8.84983 16.9402 8.64961L15.3938 2.19244L13.8574 8.6396C13.8075 8.83982 13.7476 8.96997 13.6678 9.04004C13.588 9.11012 13.4483 9.14016 13.2687 9.14016H12.4107ZM25.2308 9.41046C24.712 9.41046 24.1933 9.35039 23.6944 9.23026C23.1956 9.11012 22.8065 8.97998 22.5471 8.82981C22.3875 8.73971 22.2777 8.6396 22.2378 8.5495C22.1979 8.4594 22.178 8.35929 22.178 8.26919V7.75862C22.178 7.54839 22.2578 7.44828 22.4074 7.44828C22.4673 7.44828 22.5271 7.45829 22.587 7.47831C22.6469 7.49833 22.7366 7.53838 22.8364 7.57842C23.1756 7.72859 23.5448 7.84872 23.9339 7.92881C24.3329 8.0089 24.722 8.04894 25.1211 8.04894C25.7496 8.04894 26.2385 7.93882 26.5777 7.71858C26.9169 7.49833 27.0965 7.17798 27.0965 6.76752C27.0965 6.48721 27.0067 6.25695 26.8271 6.06674C26.6475 5.87653 26.3083 5.70634 25.8195 5.54616L24.3728 5.09566C23.6445 4.86541 23.1058 4.52503 22.7766 4.07453C22.4473 3.63404 22.2777 3.14349 22.2777 2.62291C22.2777 2.20245 22.3675 1.83204 22.5471 1.51168C22.7267 1.19132 22.9661 0.911012 23.2654 0.690768C23.5647 0.460512 23.9039 0.290323 24.303 0.170189C24.7021 0.0500556 25.1211 0 25.5601 0C25.7795 0 26.009 0.0100111 26.2285 0.0400445C26.458 0.0700779 26.6675 0.110122 26.877 0.150167C27.0765 0.200222 27.2661 0.250278 27.4457 0.310345C27.6252 0.370412 27.7649 0.430478 27.8647 0.490545C28.0044 0.570634 28.1041 0.650723 28.164 0.740823C28.2238 0.820912 28.2538 0.931035 28.2538 1.07119V1.54171C28.2538 1.75195 28.174 1.86207 28.0243 1.86207C27.9445 1.86207 27.8148 1.82202 27.6452 1.74194C27.0765 1.48165 26.438 1.3515 25.7297 1.3515C25.161 1.3515 24.712 1.4416 24.4028 1.63181C24.0935 1.82202 23.9339 2.11235 23.9339 2.5228C23.9339 2.80311 24.0336 3.04338 24.2332 3.23359C24.4327 3.4238 24.8018 3.61402 25.3306 3.7842L26.7473 4.23471C27.4656 4.46496 27.9844 4.78532 28.2937 5.19577C28.603 5.60623 28.7526 6.07675 28.7526 6.59733C28.7526 7.02781 28.6628 7.41824 28.4932 7.75862C28.3136 8.099 28.0742 8.39933 27.7649 8.6396C27.4556 8.88988 27.0865 9.07008 26.6575 9.20022C26.2085 9.34038 25.7396 9.41046 25.2308 9.41046Z"
          fill="currentColor"
        />
        <path
          d="M27.1165 14.2758C23.8342 16.7085 19.0653 18 14.9649 18C9.21827 18 4.04035 15.8676 0.129474 12.3237C-0.179805 12.0434 0.0995435 11.6629 0.468682 11.8832C4.69881 14.3459 9.91664 15.8376 15.314 15.8376C18.9555 15.8376 22.9562 15.0767 26.6376 13.515C27.1863 13.2647 27.6552 13.8754 27.1165 14.2758ZM28.4833 12.7141C28.0643 12.1735 25.7098 12.4538 24.6423 12.584C24.323 12.624 24.2731 12.3437 24.5625 12.1335C26.4381 10.812 29.5209 11.1924 29.8801 11.6329C30.2392 12.0834 29.7803 15.1768 28.0244 16.6585C27.755 16.8887 27.4956 16.7686 27.6153 16.4683C28.0144 15.4772 28.9023 13.2447 28.4833 12.7141Z"
          fill="currentColor"
        />
      </symbol>
      <symbol id="google-icon" viewBox="0 0 21 20">
        <g clip-path="url(#clip0)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.3871 5.1945C13.3563 4.3453 12.0366 3.83479 10.5999 3.83479C8.39665 3.83479 6.47325 5.03858 5.44023 6.81992L5.44005 6.81982C4.93093 7.69784 4.63459 8.71381 4.63459 9.79974C4.63459 10.8857 4.93096 11.9018 5.44014 12.7798L2.1171 14.6952C1.2784 13.2548 0.799805 11.582 0.799805 9.79974C0.799805 8.01752 1.2784 6.34471 2.1171 4.9043L2.11728 4.9044C3.80837 1.9736 6.97625 0 10.5999 0C13.0425 0 15.2896 0.906232 17.0167 2.40452C17.299 2.64945 17.3178 3.08206 17.0535 3.34636L15.244 5.15591C15.011 5.38885 14.6414 5.40397 14.3871 5.1945ZM11.6651 8.0957L19.6597 8.09609C19.9694 8.09609 20.2338 8.31919 20.2896 8.62379C20.3631 9.02471 20.3998 9.38077 20.3998 9.87884C20.3998 13.3769 18.5792 16.5018 15.4998 18.2827L15.4999 18.2829V18.2875C14.0549 19.1216 12.3776 19.6002 10.5999 19.6002C6.97619 19.6002 3.80826 17.6265 2.11719 14.6956L5.44023 12.7803C6.47325 14.5616 8.39665 15.7654 10.5999 15.7654C11.686 15.7654 12.7021 15.469 13.5802 14.9597L13.5801 14.9596C14.754 14.2788 15.6741 13.2073 16.1671 11.9279H11.665C11.312 11.9279 11.0259 11.6417 11.0259 11.2888V8.73485C11.0259 8.38182 11.312 8.0957 11.6651 8.0957Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="19.6" height="19.6" fill="white" transform="translate(0.799805)" />
          </clipPath>
        </defs>
      </symbol>
      <symbol id="facebook-icon" viewBox="0 0 14 26">
        <path
          d="M13.4326 0.405634L10.1648 0.400391C6.49342 0.400391 4.12083 2.83458 4.12083 6.60215V9.46157H0.835131C0.551207 9.46157 0.321289 9.69175 0.321289 9.97567V14.1187C0.321289 14.4026 0.551469 14.6325 0.835131 14.6325H4.12083V25.0866C4.12083 25.3705 4.35075 25.6004 4.63467 25.6004H8.92158C9.2055 25.6004 9.43542 25.3702 9.43542 25.0866V14.6325H13.2772C13.5611 14.6325 13.791 14.4026 13.791 14.1187L13.7926 9.97567C13.7926 9.83935 13.7383 9.70879 13.6421 9.61231C13.5459 9.51584 13.4148 9.46157 13.2785 9.46157H9.43542V7.0376C9.43542 5.87254 9.71305 5.2811 11.2307 5.2811L13.4321 5.28031C13.7158 5.28031 13.9457 5.05013 13.9457 4.76647V0.919476C13.9457 0.636076 13.716 0.406158 13.4326 0.405634Z"
          fill="currentColor"
        />
      </symbol>
      <symbol id="twitter-icon" viewBox="0 0 22 17">
        <path
          d="M8.08311 16.9997C7.14618 16.9997 6.18181 16.9284 5.21165 16.7854C3.50292 16.5334 1.7732 15.6934 1.28374 15.4418L0 14.7822L1.38986 14.3526C2.90915 13.8831 3.83336 13.5918 4.97741 13.1356C3.83187 12.6142 2.94899 11.6763 2.524 10.4638L2.20067 9.54126L2.46581 9.57932C2.21439 9.34115 2.01586 9.0994 1.86196 8.87956C1.31465 8.09824 1.02487 7.14352 1.08653 6.32538L1.14736 5.52012L1.6603 5.70687C1.44391 5.32281 1.28754 4.91265 1.19563 4.48276C0.971646 3.43436 1.1591 2.32056 1.72361 1.34658L2.17042 0.575663L2.76799 1.25025C4.65789 3.38402 7.05163 4.64978 9.89267 5.02032C9.77663 4.26851 9.86358 3.54296 10.1514 2.89261C10.4864 2.13536 11.0825 1.49324 11.8746 1.03554C12.7544 0.527345 13.8212 0.281093 14.8787 0.342151C16.0006 0.406938 17.0192 0.802029 17.8282 1.48548C18.2232 1.38899 18.5143 1.28599 18.9078 1.14678C19.1445 1.06304 19.4129 0.967958 19.7488 0.859203L20.9866 0.458364L20.1794 2.62507C20.2327 2.62088 20.2875 2.6173 20.3449 2.61497L21.6667 2.55873L20.8854 3.56223C20.8406 3.61971 20.8292 3.63602 20.8134 3.65855C20.7504 3.74773 20.672 3.85866 19.5997 5.20442C19.3313 5.54141 19.1972 5.98031 19.2222 6.4405C19.3172 8.18928 19.0889 9.77151 18.5433 11.1431C18.0272 12.4407 17.2275 13.554 16.1666 14.4522C14.8537 15.5633 13.1797 16.3241 11.1908 16.7132C10.2152 16.904 9.16749 16.9997 8.08311 16.9997Z"
          fill="currentColor"
        />
      </symbol>
      <symbol id="lock-icon" viewBox="0 0 16 16" fill="none">
        <rect
          x="0.755462"
          y="5.91049"
          width="13.5983"
          height="9.06554"
          rx="1.51092"
          stroke="black"
          stroke-width="1.51092"
        />
        <path
          d="M4.15527 5.53277V3.26639C4.15527 2.0147 5.16997 1 6.42166 1H8.68805C9.93974 1 10.9544 2.0147 10.9544 3.26639V5.53277"
          stroke="black"
          stroke-width="1.51092"
        />
        <path d="M7.55469 8.93237V11.9542" stroke="black" stroke-width="1.51092" />
      </symbol>
      <symbol id="arrow-icon" viewBox="0 0 9 6" fill="none">
        <path d="M1 5L4.5 2L8 5" stroke="#1A1B20" stroke-width="2" stroke-linecap="round" />
      </symbol>
      <symbol id="arrow-down-icon" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6">
        <path
          d="M1.5 1.5l3 2.5 3-2.5"
          stroke="#152C5B"
          stroke-width="2"
          stroke-linecap="round"
        ></path>
      </symbol>
      <symbol id="arrow-left-icon" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 9">
        <path
          d="M3.5 7.15l-2.25-2.7 2.25-2.7"
          stroke="#1A1B20"
          stroke-width="1.8"
          stroke-linecap="round"
        ></path>
      </symbol>
      <symbol
        id="arrow-right-icon"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 6 9"
      >
        <path
          d="M1.75 7.15L4 4.45l-2.25-2.7"
          stroke="#1A1B20"
          stroke-width="1.8"
          stroke-linecap="round"
        ></path>
      </symbol>
      <symbol id="arrow-up-icon" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 9">
        <path
          d="M2.478 6.978L7.25 3l4.773 3.978"
          stroke="#4A4A4A"
          stroke-width="3.182"
          stroke-linecap="round"
        ></path>
      </symbol>
      <symbol id="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 365.696 365.696">
        <path
          fill="#fff"
          d="M243.188 182.86L356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25l15.082 15.08c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"
        ></path>
      </symbol>
      <symbol id="dash-icon" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 4">
        <path d="M2 2h11" stroke="#fff" stroke-width="2.582" stroke-linecap="round"></path>
      </symbol>
      <symbol
        id="exclamation-icon"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 13 13"
      >
        <circle cx="6.5" cy="6.5" r="6.119" stroke="#7E7E7E" stroke-width=".762"></circle>
        <path
          d="M6.398 4.063v2.843"
          stroke="#7E7E7E"
          stroke-width="1.219"
          stroke-linecap="round"
        ></path>
        <circle cx="6.398" cy="9.039" r=".711" fill="#7E7E7E"></circle>
      </symbol>
      <symbol
        id="exclamation-colored-icon"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 13 13"
      >
        <circle cx="6.5" cy="6.5" r="6.119" stroke="#88C4BE" stroke-width=".762"></circle>
        <path
          d="M6.398 4.063v2.843"
          stroke="#88C4BE"
          stroke-width="1.219"
          stroke-linecap="round"
        ></path>
        <circle cx="6.398" cy="9.039" r=".711" fill="#88C4BE"></circle>
      </symbol>
      <symbol
        id="expanded-minus-icon"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 15"
      >
        <rect
          x=".671"
          y="1.409"
          width="12.074"
          height="12.074"
          rx="1.342"
          stroke="#4B75ED"
          stroke-width="1.342"
        ></rect>
        <path
          d="M4.695 7.446h4.36"
          stroke="#4B75ED"
          stroke-width="1.342"
          stroke-linecap="round"
        ></path>
      </symbol>
      <symbol id="list-icon" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
        <rect
          x="1.001"
          y=".684"
          width="12.074"
          height="12.074"
          rx="1.342"
          stroke="#000"
          stroke-width="1.342"
        ></rect>
        <path
          d="M5.026 6.722h4.36m-4.36-2.684h4.36m-4.36 5.366h4.36"
          stroke="#000"
          stroke-width="1.342"
          stroke-linecap="round"
        ></path>
      </symbol>
      <symbol id="plus-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          fill="#26D49B"
          fill-opacity=".5"
          d="M256 512C114.836 512 0 397.164 0 256S114.836 0 256 0s256 114.836 256 256-114.836 256-256 256zm0-480C132.48 32 32 132.48 32 256s100.48 224 224 224 224-100.48 224-224S379.52 32 256 32zm0 0"
        ></path>
        <path
          fill="#26D49B"
          d="M368 272H144c-8.832 0-16-7.168-16-16s7.168-16 16-16h224c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0"
        ></path>
        <path
          fill="#26D49B"
          d="M256 384c-8.832 0-16-7.168-16-16V144c0-8.832 7.168-16 16-16s16 7.168 16 16v224c0 8.832-7.168 16-16 16zm0 0"
        ></path>
      </symbol>
      <symbol id="simple-plus-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z"
        ></path>
      </symbol>
      <symbol id="x-mark-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          fill="#152C5B"
          fill-opacity=".5"
          d="M256 512C114.84 512 0 397.16 0 256S114.84 0 256 0s256 114.84 256 256-114.84 256-256 256zm0-475.43C135.008 36.57 36.57 135.008 36.57 256S135.008 475.43 256 475.43 475.43 376.992 475.43 256 376.992 36.57 256 36.57zm0 0"
        ></path>
        <path
          fill="#152C5B"
          d="M347.43 365.715c-4.68 0-9.36-1.785-12.93-5.36L151.645 177.5c-7.145-7.145-7.145-18.715 0-25.855 7.14-7.141 18.714-7.145 25.855 0L360.355 334.5c7.145 7.145 7.145 18.715 0 25.855a18.207 18.207 0 01-12.925 5.36zm0 0"
        ></path>
        <path
          fill="#152C5B"
          d="M164.57 365.715c-4.68 0-9.355-1.785-12.925-5.36-7.145-7.14-7.145-18.714 0-25.855L334.5 151.645c7.145-7.145 18.715-7.145 25.855 0 7.141 7.14 7.145 18.714 0 25.855L177.5 360.355a18.216 18.216 0 01-12.93 5.36zm0 0"
        ></path>
      </symbol>
      <symbol
        id="rectangle-icon"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15 15"
      >
        <rect
          x="2"
          y="2"
          width="11"
          height="11"
          rx="2.582"
          stroke="#fff"
          stroke-width="2.582"
          stroke-linecap="round"
        ></rect>
      </symbol>
      <symbol
        id="list-blue-icon"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
      >
        <rect
          x="1.001"
          y="1.099"
          width="12.074"
          height="12.074"
          rx="1.342"
          stroke="#4B75ED"
          stroke-width="1.342"
        ></rect>
        <path
          d="M5.026 7.137h4.36m-4.36-2.684h4.36M5.026 9.82h4.36"
          stroke="#4B75ED"
          stroke-width="1.342"
          stroke-linecap="round"
        ></path>
      </symbol>
      <symbol id="add-square-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 328.911 328.911">
        <path
          d="M310.199 18.71C297.735 6.242 282.65.007 264.951.007H63.954c-17.703 0-32.79 6.235-45.253 18.704C6.235 31.177 0 46.261 0 63.96v200.991c0 17.515 6.232 32.552 18.701 45.11 12.467 12.566 27.553 18.843 45.253 18.843h201.004c17.699 0 32.777-6.276 45.248-18.843 12.47-12.559 18.705-27.596 18.705-45.11V63.96c0-17.699-6.245-32.783-18.712-45.25zm-17.837 246.25c0 7.614-2.673 14.089-8.001 19.414-5.324 5.332-11.799 7.994-19.41 7.994H63.954c-7.614 0-14.082-2.662-19.414-7.994-5.33-5.325-7.992-11.8-7.992-19.414V63.965c0-7.613 2.662-14.086 7.992-19.414 5.327-5.327 11.8-7.994 19.414-7.994h201.004c7.61 0 14.086 2.663 19.41 7.994 5.325 5.328 7.994 11.801 7.994 19.414V264.96z"
        ></path>
        <path
          d="M246.683 146.189H182.73V82.236c0-2.667-.855-4.854-2.573-6.567-1.704-1.714-3.895-2.568-6.564-2.568h-18.271c-2.667 0-4.854.854-6.567 2.568-1.714 1.713-2.568 3.903-2.568 6.567v63.954H82.233c-2.664 0-4.857.855-6.567 2.568-1.711 1.713-2.568 3.903-2.568 6.567v18.271c0 2.666.854 4.855 2.568 6.563 1.712 1.708 3.903 2.57 6.567 2.57h63.954v63.953c0 2.666.854 4.855 2.568 6.563 1.713 1.711 3.903 2.566 6.567 2.566h18.271c2.67 0 4.86-.855 6.564-2.566 1.718-1.708 2.573-3.897 2.573-6.563V182.73h63.953c2.662 0 4.853-.862 6.563-2.57 1.712-1.708 2.563-3.897 2.563-6.563v-18.271c0-2.664-.852-4.857-2.563-6.567-1.71-1.711-3.901-2.57-6.563-2.57z"
        ></path>
      </symbol>
      <symbol id="dashes-icon" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 19">
        <circle r="2.022" transform="matrix(-1 0 0 1 2.022 2.422)" fill="#919DB0"></circle>
        <circle r="2.022" transform="matrix(-1 0 0 1 2.022 9.7)" fill="#919DB0"></circle>
        <circle r="2.022" transform="matrix(-1 0 0 1 2.022 16.978)" fill="#919DB0"></circle>
      </symbol>
    </svg>
    <main :class="$style['app-wrapper']">
      <LoginPage :disable-login="isdisabledLogin" />
    </main>
    <!-- <cookie-law :button-class="$style['custom']" @accept="ThankYouMethod">
  <div slot="message">
    Here is my message for more info <a href="https://www.cookie-law.com/">here</a>CodeCheef
  </div>
</cookie-law> -->
    <div v-if="isOpen" :class="$style['cookie-consent-banner']">
      <div :class="$style['cookie-consent-banner__inner']">
        <div :class="$style['cookie-consent-banner__copy']">
          <!-- <div :class="$style['cookie-consent-banner__header']">THIS WEBSITE USES COOKIES</div> -->
          <div :class="$style['cookie-consent-banner__description']">
            Please be advised that it is mandatory for you to carefully review and consent to the
            Privacy Policy before accessing the application.
            <span :class="$style['learnmore']" @click="handleLearnMore"
              >Read the Privacy Policy here.</span
            >
          </div>
        </div>
        <div :class="$style['cookie-consent-banner__actions']">
          <button
            :class="$style['cookie-consent-banner__cta']"
            :disabled="isdisabled"
            @click="accept"
          >
            Accept conditions
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import '~/assets/scss/main.scss';

//import CookieLaw from 'vue-cookie-law'
import Notifications from 'vue-notification';
import { Component, Vue } from 'vue-property-decorator';
import Vuelidate from 'vuelidate';

import LoginPage from '~/pages/login-page.vue';

Vue.use(Vuelidate);
Vue.use(Notifications);

@Component({
  name: 'App',
  components: { LoginPage }, //, CookieLaw
})
export default class App extends Vue {
  public isOpen = false;
  public isdisabled = true;
  public isdisabledLogin = true;
  created() {
    if (!this.getVisited()) {
      this.isOpen = true;
    }
  }
  mounted() {
    if (this.isAccepted()) {
      this.isdisabled = false;
      this.isdisabledLogin = false;
    }
  }
  setVisited() {
    localStorage.setItem('acceptCookie', 'true');
  }
  setAccepted() {
    localStorage.setItem('acceptCookie', 'true');
  }
  getVisited(): boolean {
    let visited: unknown = false;
    visited = localStorage.getItem('acceptCookie');
    if (typeof visited === 'string') {
      visited = JSON.parse(visited);
    }
    return !(visited === null || visited === undefined);
  }
  isAccepted() {
    let accepted: unknown = false;
    accepted = localStorage.getItem('acceptCookie');

    if (typeof accepted === 'string') {
      accepted = JSON.parse(accepted);
    }
    return accepted;
  }
  accept() {
    this.setVisited();
    this.setAccepted();
    this.isOpen = false;
    this.isdisabledLogin = false;
    // this.isdisabled= true
  }
  close() {
    this.isOpen = false;
    this.isdisabledLogin = false;
    // this.isdisabled = true;
  }
  handleLearnMore() {
    this.isdisabled = false;
    window.open('https://docs.logverz.io/assets/docs/LogLeads_Privacy_Policy.pdf', '_blank');
  }
}
</script>

<style module lang="scss">
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}
.cookie-consent-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2147483645;
  box-sizing: border-box;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 10px;
  background-color: #f1f6f4;
}

.cookie-consent-banner__inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 32px 0;
  display: inline;
}

.cookie-consent-banner__copy {
  margin-bottom: 16px;
  width: 80%;
  display: inline-block;
  float: left;
  margin-right: 10px;
  padding-left: 5px;
}

.cookie-consent-banner__actions {
  width: 19%;
  display: inline-block;
}

.cookie-consent-banner__header {
  margin-bottom: 8px;

  font-family: 'CeraPRO-Bold', sans-serif, arial;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
}

.cookie-consent-banner__description {
  // font-family: "CeraPRO-Regular", sans-serif, arial;
  font-weight: normal;
  text-align: center;
  color: #838f93;
  padding-top: 15px;
  font-size: 16px;
  line-height: 24px;
}

.cookie-consent-banner__cta {
  box-sizing: border-box;
  display: inline-block;
  min-width: 164px;
  padding: 11px 13px;

  border-radius: 2px;

  background-color: #88c4be;

  color: #fff;
  text-decoration: none;
  text-align: center;
  // font-family: "CeraPRO-Regular", sans-serif, arial;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
}
.cookie-consent-banner__cta:disabled {
  background-color: #3a4649;
  opacity: 0.7;
}
.cookie-consent-banner__cta--secondary {
  padding: 9px 13px;

  border: 2px solid #3a4649;

  background-color: transparent;

  color: #88c4be;
}

// .cookie-consent-banner__cta:hover {
//   background-color: #88c4be;
// }

.cookie-consent-banner__cta--secondary:hover {
  border-color: #838f93;

  background-color: transparent;

  color: #88c4be;
}

.cookie-consent-banner__cta:last-child {
  margin-left: 16px;
}
.learnmore {
  color: #007bff;
  cursor: pointer;
  text-decoration: none;
  background-color: transparent;
}
</style>
