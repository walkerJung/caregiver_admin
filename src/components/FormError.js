import styled, { css } from "styled-components";

const SFormError = styled.div`
  ${({ theme }) => {
    return css`
      color: blue;
      font-weight: 600;
      font-size: 13px;
      margin: 5px 0px 10px 5px;
    `;
  }}
`;

function FormError({ message }) {
  return message === "" || !message ? null : (
    <SFormError>
      <span>* {message}</span>
    </SFormError>
  );
}

export default FormError;
