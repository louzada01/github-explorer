import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormInterface {
  hasError: boolean;
}
export const Title = styled.h1`
  font-size: 42px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-bottom: 80px;
`;

export const Form = styled.form<FormInterface>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 2px solid #fff;
    border-right: 0px;
    border-radius: 5px 0 0 5px;
    &::placeholder {
      color: #a8a8b3;
    }
    ${({ hasError }) =>
      hasError &&
      css`
        border-color: #c53030;
      `}
  }

  button {
    width: 210px;
    height: 70px;
    border-radius: 0 5px 5px 0;
    background: #04d361;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.5s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 10px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.4s;

    & + a {
      margin-top: 10px;
    }
    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background-color: #fff;
    }

    div {
      margin-left: 16px;
      padding: 0 10px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd5;
    }
  }
`;
