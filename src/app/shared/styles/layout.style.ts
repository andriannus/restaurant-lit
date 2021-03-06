import { css } from "lit";

export const layoutStyles = css`
  .AlignItems-center {
    align-items: center;
  }

  .Box:not(:last-child) {
    margin-bottom: 16px;
  }

  .Container {
    padding: 0 16px;
    margin: 16px auto;
    max-width: 1064px;
  }

  .Flex {
    display: flex;
  }

  .Grids {
    display: grid;
    grid-template-columns: repeat(3, calc(33.334% - 10.667px));
    column-gap: 16px;
    row-gap: 16px;
  }

  .JustifyContent-between {
    justify-content: space-between;
  }

  .JustifyContent-center {
    justify-content: center;
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
