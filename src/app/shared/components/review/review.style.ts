import { css } from "lit";

export const reviewStyles = css`
  .Review {
    border: 1px solid #dee2ee;
    border-radius: 4px;
    padding: 8px;
  }

  .Review:not(:last-child) {
    margin-bottom: 16px;
  }

  .Textarea,
  .TextField {
    appearance: none;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    box-sizing: border-box;
    color: #333333;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    line-height: 22px;
    padding: 8px 12px;
    transition: all 200ms ease-in-out;
    width: 100%;
  }

  .Textarea {
    resize: vertical;
  }

  .Textarea:focus,
  .TextField:focus {
    border-color: #fc8181;
    outline: none;
  }

  .Textarea::placeholder,
  .TextField::placeholder {
    color: #bdbdbd;
  }
`;
