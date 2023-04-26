import styled from "@emotion/styled";
import { Form as FormikForm, Field as FormikField } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 240px;
`;

export const Field = styled(FormikField)`
  border-radius: 4px;
  border: 0;
  height: 30px;
`;

export const FormBtn = styled.button`
  width: 240px;
  height: 30px;
  cursor: pointer;
  background-color: grey;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 2px 2px rgb(0, 0, 0);
  &:hover {
    background-color: aquamarine;
    color: white;
  }
`;