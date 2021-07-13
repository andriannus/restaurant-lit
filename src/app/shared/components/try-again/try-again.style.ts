import { css } from "lit";

export const tryAgainStyles = css`
  .TryAgain-button {
    border: none;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.87);
    cursor: pointer;
    letter-spacing: 1.25px;
    margin-top: 16px;
    padding: 16px;
    transition: all 200ms ease-in-out;
  }

  .TryAgain-button:hover,
  .TryAgain-button.is-active {
    background: #fa4032;
    color: #ffffff;
  }
`;
