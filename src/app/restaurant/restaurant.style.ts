import { css } from "lit";

export const restaurantStyles = css`
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
`;
