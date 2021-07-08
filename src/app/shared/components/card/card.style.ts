import { css } from "lit";

export const cardStyles = css`
  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  a:focus {
    outline: none;
  }

  .Card {
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    cursor: default;
    display: block;
    transition: all 200ms ease-in-out;
    max-width: 100%;
  }

  .Card.is-hover:focus,
  .Card.is-hover:hover {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    cursor: pointer;
  }

  .Card-text {
    color: #000000;
    padding: 16px;
    text-align: justify;
  }

  .Card-media {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    height: 194px;
    max-height: 194px;
    overflow: hidden;
  }

  .Card-media > img {
    height: auto;
    max-width: 100%;
  }
`;
