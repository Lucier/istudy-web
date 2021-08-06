import React from 'react';

import Header from '../../components/Header';
import { Container, Content, TableContainer } from './styles';

const Classrooms: React.FC = () => {
  return (
    <>
      <Header size="small" />
      <Container>
        <Content>
          <button type="button">Nova sala</button>
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
                <td>1° A</td>
              </tr>

              <tr>
                <td>1° B</td>
              </tr>

              <tr>
                <td>2° A</td>
              </tr>

              <tr>
                <td>2° B</td>
              </tr>

              <tr>
                <td>3° A</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Classrooms;
