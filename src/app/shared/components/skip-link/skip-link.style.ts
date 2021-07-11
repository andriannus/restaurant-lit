import { css } from "lit";

export const skipLinkStyles = css`
  .SkipLink {
    background: #000000;
    border-radius: 4px;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    left: 10px;
    line-height: 36px;
    padding: 0 8px;
    position: absolute;
    top: -40px;
    transition: all 200ms ease-in-out;
    z-index: 100;
  }

  .SkipLink:focus {
    left: 10px;
    outline: none;
    top: 10px;
  }
`;
