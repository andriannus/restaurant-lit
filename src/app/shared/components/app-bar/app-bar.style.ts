import { css } from "lit";

export const appBarStyles = css`
  p,
  ul {
    margin: 0;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }

  a:hover {
    color: #ffffff;
    text-decoration: none;
  }

  a:focus {
    outline: none;
  }

  .AppBar {
    align-items: center;
    background: #fa4032;
    color: #ffffff;
    display: flex;
    height: 24px;
    padding: 16px;
    position: sticky;
    top: 0;
    transition: all 200ms ease-in-out;
  }

  .AppBar.is-active {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }

  .AppBar-actions {
    display: flex;
    margin: 0;
    min-height: 36px;
    padding: 0;
  }

  .AppBar-action {
    display: flex;
  }

  .AppBar-action:not(:last-child) {
    margin-right: 24px;
  }

  .AppBar-action > a {
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    letter-spacing: 1.25px;
    line-height: 36px;
    padding: 0 8px;
    transition: all 200ms ease-in-out;
  }

  .AppBar-action > a:focus,
  .AppBar-action > a:hover {
    background: #fb665b;
  }

  .AppBar-action > a.is-active {
    background: #ea1505;
  }

  .AppBar-button {
    background-color: transparent;
    border: none;
    border-radius: 50%;
    color: #ffffff;
    display: none;
    height: 36px;
    justify-content: center;
    margin-right: 24px;
    max-height: 36px;
    max-width: 36px;
    outline: none;
    padding: 0;
    transition: all 200ms ease-in-out;
    width: 36px;
  }

  .AppBar-button:hover {
    background: #fb665b;
  }

  .AppBar-icon {
    line-height: 36px;
  }

  .AppBar-spacer {
    flex-grow: 1;
  }

  .AppBar-title {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 0;
    font-weight: 800;
  }

  @media screen and (max-width: 599px) {
    .AppBar-actions {
      display: none;
    }

    .AppBar-button {
      display: flex;
    }
  }
`;
