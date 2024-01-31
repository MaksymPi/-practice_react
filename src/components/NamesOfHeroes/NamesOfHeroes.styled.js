import styled from 'styled-components'

export const NamesOfHeroesStyled = {
  Ul: styled.ul`
      list-style: none;
      padding: 0;
      margin: 0 auto;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: center;
      width: 500px;
      border-radius: 10px;
    `,
  Li: styled.li`
  list-style-type: none;
    padding: 15px;
  margin-bottom: 15px;
  width: 100%;
  color: #fff;
  font-weight: 600;
  border: 1px solid #2c974b;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba(6, 144, 75, 0.3);
  transition: all 0.3s ease;
    :hover {
      color: #FFE300;
      cursor: pointer;
}
    `
}

