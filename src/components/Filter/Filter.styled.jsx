import styled from '@emotion/styled';

export const FilterTitle = styled.h3`
  margin-bottom: 20px;
  margin-top: 15px;
  font-weight: 500;
  font-size: 32px;
  line-height: 20px;
  letter-spacing: 0.03em;
  color: rgba(0,0,0, 0.6);
`;

export const FilterInput = styled.input`
  margin-bottom: 24px;
  padding: 4px 0px 4px 10px;
  width: 100%;
  height: 45px;
  font-size: 24px;
  border-radius: 7px;
  border: 2px solid ${({ filter }) => (filter ? '#2196f3;' : '#89888ba6')};
  outline: none;

  &:focus {
    border: 2px solid #2196f3;
  }
`;
