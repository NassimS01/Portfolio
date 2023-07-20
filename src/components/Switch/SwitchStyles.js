import { styled } from "styled-components";

export const LabelStyled = styled.label`
  position: absolute;
  left: 20vw;
  margin-top: 32px;
  --switch-bg: rgb(135, 150, 165);
  --switch-width: 35px;
  --switch-height: 10px;
  /* circle */
  --circle-diameter: 17px;
  --circle-bg: rgb(0, 56, 146);
  --circle-inset: calc((var(--circle-diameter) - var(--switch-height)) / 2);
  z-index: 1;

  & input {
    display: none;
    z-index: 1;
  }

  & .slider {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: var(--switch-width);
    height: var(--switch-height);
    background: var(--switch-bg);
    border-radius: 999px;
    position: relative;
    cursor: pointer;
    z-index: 1;
  }

  & .circle {
    top: calc(var(--circle-inset) * -1);
    left: 0;
    width: var(--circle-diameter);
    height: var(--circle-diameter);
    position: absolute;
    background: var(--circle-bg);
    border-radius: inherit;
    -webkit-transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    -o-transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    z-index: 1;
  }

  & .slider .circle::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.75);
    border-radius: inherit;
    -webkit-transition: all 500ms;
    -o-transition: all 500ms;
    transition: all 500ms;
    opacity: 0;
    z-index: 1;
  }

  & input:checked + .slider .circle {
    left: calc(100% - var(--circle-diameter));
    background-color: #ccc;
  }

  & input:active + .slider .circle::before {
    -webkit-transition: 0s;
    -o-transition: 0s;
    transition: 0s;
    opacity: 1;
    width: 0;
    height: 0;
  }

  @media screen and (max-width: 1800px) {
    left: 29vw;
  }

  @media screen and (max-width: 1520px) {
    left: 25vw;
  }

  @media screen and (max-width: 1400px) {
    left: 23vw;
  }

  @media screen and (max-width: 1250px) {
    left: 20vw;
  }

  @media screen and (max-width: 1105px) {
    left: 16vw;
  }

  @media screen and (max-width: 840px) {
    bottom: 18px;
    left: 30%;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 560px) {
    bottom: 18px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
