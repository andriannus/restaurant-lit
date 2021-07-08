import { css } from "lit";

export const loadingStyles = css`
  .Loading {
    display: flex;
    justify-content: center;
    padding: 16px 0;
    width: 100%;
  }

  .LoadingSpinner {
    width: 40px;
    height: 40px;
    position: relative;
    animation: LoadingSpinner 2.5s infinite linear both;
  }

  .LoadingSpinner-dot {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    animation: LoadingSpinner-dot 2s infinite ease-in-out both;
  }

  .LoadingSpinner-dot:before {
    content: "";
    display: block;
    width: 25%;
    height: 25%;
    background-color: #000000;
    border-radius: 100%;
    animation: LoadingSpinner-dot-before 2s infinite ease-in-out both;
  }

  .LoadingSpinner-dot:nth-child(1) {
    animation-delay: -1.1s;
  }

  .LoadingSpinner-dot:nth-child(2) {
    animation-delay: -1s;
  }

  .LoadingSpinner-dot:nth-child(3) {
    animation-delay: -0.9s;
  }

  .LoadingSpinner-dot:nth-child(4) {
    animation-delay: -0.8s;
  }

  .LoadingSpinner-dot:nth-child(5) {
    animation-delay: -0.7s;
  }

  .LoadingSpinner-dot:nth-child(6) {
    animation-delay: -0.6s;
  }

  .LoadingSpinner-dot:nth-child(1):before {
    animation-delay: -1.1s;
  }

  .LoadingSpinner-dot:nth-child(2):before {
    animation-delay: -1s;
  }

  .LoadingSpinner-dot:nth-child(3):before {
    animation-delay: -0.9s;
  }

  .LoadingSpinner-dot:nth-child(4):before {
    animation-delay: -0.8s;
  }

  .LoadingSpinner-dot:nth-child(5):before {
    animation-delay: -0.7s;
  }

  .LoadingSpinner-dot:nth-child(6):before {
    animation-delay: -0.6s;
  }

  @keyframes LoadingSpinner {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes LoadingSpinner-dot {
    80%,
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes LoadingSpinner-dot-before {
    50% {
      transform: scale(0.4);
    }

    100%,
    0% {
      transform: scale(1);
    }
  }
`;
