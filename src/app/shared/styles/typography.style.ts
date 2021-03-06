import { css } from "lit";

export const typographyStyles = css`
  h1,
  h2,
  h3,
  p,
  ul {
    margin: 0;
  }

  a,
  a:hover {
    text-decoration: none;
  }

  a:focus {
    outline: none;
  }

  .BodyText-1 {
    color: rgba(0, 0, 0, 0.6);
    font-size: 16px;
    letter-spacing: 0.15px;
    line-height: 28px;
  }

  .BodyText-2 {
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    letter-spacing: 0.1px;
    line-height: 22px;
  }

  .Color-black {
    color: #000000;
  }

  .Color-primary {
    color: #fa4032;
  }

  .Heading-1 {
    color: #000000;
    font-size: 32px;
    font-weight: 400;
    line-height: 32px;
    margin: 24px 0 32px;
  }

  .Heading-2 {
    color: #000000;
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    margin: 24px 0 32px;
  }

  .Headline {
    align-items: center;
    display: flex;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 8px;
  }

  .Headline::before {
    content: "";
    display: inline-block;
    width: 5px;
    height: 18px;
    border-radius: 2.5px;
    background-color: #fa4032;
    margin-right: 16px;
  }

  .Caption {
    color: rgba(0, 0, 0, 0.6);
    font-size: 12px;
    line-height: 12px;
  }

  .Heading-3 {
    color: #000000;
    font-size: 20px;
    font-weight: 500;
    line-height: 32px;
  }

  .TextAlign-center {
    text-align: center;
  }

  .TextAlign-right {
    text-align: right;
  }

  .Truncate {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
