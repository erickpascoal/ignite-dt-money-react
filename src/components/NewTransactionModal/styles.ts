import styled from 'styled-components';

export const Container = styled.form`
  
  h2 {
      color: var(--text-title);
      font-size: 2.4rem;
      margin-bottom: 3.2rem;
  }

  input {
      width: 100%;
      padding: 0 2.4rem;
      height: 6.4rem;
      border-radius: 0.4rem;

      border: 1px solid #d7d7d7;
      background: #e7e9ee;

      font-weight: 400;
      font-size: 1.6rem;

      &::placeholder {
          color: var(--text-body);
      }

      & + input {
          margin-top: 1.6rem;
      }
  }
  
  button {
      width: 100%;
      padding: 0 2.4rem;
      height: 6.4rem;
      background: var(--green);
      color: #ffffff;
      border-radius: 0.4rem;
      border: 0;
      font-size: 1.6rem;
      margin-top: 2.4rem;
      font-weight: 600;

      transition: filter 0.2s;

      &:hover {
          filter: brightness(0.9);
      }
  }
`;
