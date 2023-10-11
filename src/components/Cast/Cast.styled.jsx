import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
  list-style: none;
`;
export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  -moz-box-pack: justify;
  justify-content: space-between;
  padding: 8px;
  width: 200px;
  border: 1px solid grey;
  border-radius: 4px;
`;
export const Image = styled.img`
  width: 200px;
`;
export const Character = styled.div`
  padding: 0;
  margin: 0;
  font-size: 16px;
`;
export const Name = styled.span`
  padding: 0;
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 700;
`;
export const Wrapper = styled.span`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h3`
  padding-left: 20px;
`;
