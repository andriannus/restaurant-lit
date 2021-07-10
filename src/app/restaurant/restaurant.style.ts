import { css } from "lit";

export const restaurantStyles = css`
  h1,
  h3,
  p,
  ul {
    margin: 0;
  }

  .AlignItems-center {
    align-items: center;
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

  .Box:not(:last-child) {
    margin-bottom: 16px;
  }

  .Caption {
    color: rgba(0, 0, 0, 0.6);
    font-size: 12px;
    line-height: 12px;
  }

  .Color-black {
    color: #000000;
  }

  .Container {
    padding: 0 16px;
    margin: 16px auto;
    max-width: 1064px;
  }

  .Flex {
    display: flex;
  }

  .Heading-1 {
    color: #000000;
    font-size: 32px;
    font-weight: 400;
    line-height: 32px;
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

  .JustifyContent-center {
    justify-content: center;
  }

  .Restaurant-image {
    border-radius: 4px;
    height: 394px;
    overflow: hidden;
    width: 100%;
  }

  .Restaurant-image > img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  .Restaurant-rating {
    background: #fa4032;
    border-radius: 8px;
    border-top-right-radius: 0;
    color: #ffffff;
    display: inline-block;
    font-size: 20px;
    height: 100%;
    margin-right: 12px;
    padding: 0 8px;
  }

  .Restaurant-review {
    border: 1px solid #dee2ee;
    border-radius: 4px;
    padding: 8px;
  }

  .Restaurant-review:not(:last-child) {
    margin-bottom: 16px;
  }

  .is-active {
    color: #fa4032;
  }
`;
