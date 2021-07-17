import { css } from "lit";

export const buttonStyles = css`
  .Button {
    border: none;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.87);
    cursor: pointer;
    letter-spacing: 1.25px;
    padding: 16px;
    transition: all 200ms ease-in-out;
  }

  .Button:hover,
  .Button.is-active {
    background: #fa4032;
    color: #ffffff;
  }

  .Link {
    color: #fa4032;
    cursor: pointer;
    font-size: 14px;
    letter-spacing: 0.1px;
    line-height: 20px;
    padding: 12px;
    transition: all 200ms ease-in-out;
  }

  .Link:hover {
    color: rgba(0, 0, 0, 0.87);
  }
`;
