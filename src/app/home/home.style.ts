import { css } from "lit";

export const homeStyles = css`
  h1,
  h3,
  p {
    margin: 0;
  }

  .Container {
    padding: 0 16px;
    margin: 16px auto;
    max-width: 1064px;
  }

  .Grids {
    display: grid;
    grid-template-columns: repeat(3, calc(33.334% - 10.667px));
    column-gap: 16px;
    row-gap: 16px;
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

  .Headline {
    &-2 {
      color: #000000;
      font-size: 24px;
      font-weight: 400;
      line-height: 24px;
      margin: 24px 0 32px;
    }

    &-3 {
      color: #000000;
      font-size: 20px;
      font-weight: 500;
      line-height: 32px;
    }
  }

  .TextAlign-center {
    text-align: center;
  }

  .Truncate {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media screen and (max-width: 599px) {
    .Grids {
      grid-template-columns: 100%;
      column-gap: 0;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 960px) {
    .Grids {
      grid-template-columns: repeat(2, calc(50% - 8px));
    }
  }
`;
