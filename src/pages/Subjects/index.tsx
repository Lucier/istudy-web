import React from 'react';

import Header from '../../components/Header';
import { Container, Content, TableContainer } from './styles';

const Subjects: React.FC = () => {
  return (
    <>
      <Header size="small" />
      <Container>
        <Content>
          <button type="button">Nova disciplina</button>
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
                <td>Português</td>
              </tr>

              <tr>
                <td>Física</td>
              </tr>

              <tr>
                <td>Programação de computadores II</td>
              </tr>

              <tr>
                <td>Biologia</td>
              </tr>

              <tr>
                <td>Geografia</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Subjects;
