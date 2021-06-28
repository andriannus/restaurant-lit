import { css } from "lit";

export const bottomSheetStyles = css`
  .BottomSheet {
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 20;
  }

  .BottomSheet-dialog {
    align-self: flex-end;
    background: #ffffff;
    height: auto;
    margin: 0 auto;
    position: relative;
    width: 100%;
  }
`;
