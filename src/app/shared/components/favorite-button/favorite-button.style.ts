import { css } from "lit";

export const favoriteButtonStyles = css`
  .FavoriteButton {
    border: none;
    border-radius: 9999px;
    bottom: 16px;
    box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%),
      0 1px 18px 0 rgb(0 0 0 / 12%);
    color: rgba(0, 0, 0, 0.87);
    cursor: pointer;
    font-size: 14px;
    letter-spacing: 1.25px;
    line-height: 36px;
    height: 48px;
    padding: 0 16px;
    position: fixed;
    right: 16px;
    text-transform: uppercase;
    transition: all 200ms ease-in-out;
  }

  .FavoriteButton:hover,
  .FavoriteButton.is-active {
    background: #fa4032;
    color: #ffffff;
  }

  .FavoriteButton.is-active:hover {
    background: #fb665b;
  }
`;
