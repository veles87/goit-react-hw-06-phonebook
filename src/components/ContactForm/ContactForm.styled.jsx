import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  font-size: 23px;
  line-height: 1.167;
  letter-spacing: 0.01em;
  color: rgb(0,0,0);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

`;

export const Input = styled.input`
  padding-left: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 60px;
font-size: 24px;
  border: 2px solid rgba(33, 33, 33, 0.2);
  border-radius: 10px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border: 2px solid #2196f3;
  }
`;

export const LabelName = styled.span`
  margin-bottom: 8px;
`;

export const AddButton = styled.button`
  width: 160px;
  height: 40px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.167;
  letter-spacing: 0.01em;
  color: rgb(0,0,0);
  background:	rgb(135,206,250);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  border-color: #0a0131ab;

  &:hover {
    background: rgb(255,69,0);
    box-shadow: 2px 6px 40px rgb(255,140,0),4px 5px 30px rgb(255,140,0);
    color: #fff;
  }
`;
