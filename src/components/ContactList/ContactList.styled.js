import styled from "@emotion/styled";

export const ContactRoster = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
`;

export const ContactItem = styled.li`
    display: flex;
    gap: 60px;
    align-items: center;
    justify-content: space-evenly;
`;

export const ContactBtn = styled.button`
  padding: 4px;
  background-color: hotpink;
  font-size: 14px;
  min-width: 120px;
  height: 30px;
  border: none;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 0px 2px 2px rgb(0, 0, 0);
  &:hover {
    background-color: aquamarine;
    color: white;
  }
`;

export const ContactInfo = styled.p`
    font-size: 16px;
    font-weight: 500;
`;