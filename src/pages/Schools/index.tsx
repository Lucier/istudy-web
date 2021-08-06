import React from 'react';

import Header from '../../components/Header';
import { Container, Content, TableContainer } from './styles';

const Schools: React.FC = () => {
  return (
    <>
      <Header size="small" />
      <Container>
        <Content>
          <button type="button">Nova escola</button>
        </Content>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Escola 1</td>
              </tr>

              <tr>
                <td>Escola 2</td>
              </tr>

              <tr>
                <td>Escola 3</td>
              </tr>

              <tr>
                <td>Escola 4</td>
              </tr>

              <tr>
                <td>Escola 5</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Schools;
