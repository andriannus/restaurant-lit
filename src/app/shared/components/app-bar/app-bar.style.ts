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
    line-height: 44px;
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
    height: 44px;
    justify-content: center;
    margin-right: 24px;
    max-height: 44px;
    max-width: 44px;
    outline: none;
    padding: 0;
    transition: all 200ms ease-in-out;
    width: 44px;
  }

  .AppBar-button:focus,
  .AppBar-button:hover {
    background: #fb665b;
  }

  .AppBar-icon {
    font-size: 20px;
    line-height: 44px;
  }

  .AppBar-spacer {
    flex-grow: 1;
  }

  .AppBar-title {
    font-size: 20px;
    font-weight: 800;
    line-height: 24px;
    margin-bottom: 0;
    user-select: none;
  }

  .BottomDrawer {
    list-style-type: none;
    padding: 8px 0;
  }

  .BottomDrawer-icon {
    margin-right: 32px;
  }

  .BottomDrawer-action {
    margin: 4px 8px;
  }

  .BottomDrawer-action a {
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.87);
    cursor: pointer;
    display: flex;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    max-height: 48px;
    padding: 12px 8px;
    transition: all 200ms ease-in-out;
  }

  .BottomDrawer-action a:hover {
    background: #fb665b;
    color: #ffffff;
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
