import React from 'react';

import Header from '../../components/Header';
import { Container, Content, TableContainer } from './styles';

const Teachers: React.FC = () => {
  return (
    <>
      <Header size="small" />
      <Container>
        <Content>
          <button type="button">Novo professor</button>
        </Content>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Disciplina</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>José</td>
                <td>Português</td>
              </tr>

              <tr>
                <td>João</td>
                <td>Física</td>
              </tr>

              <tr>
                <td>Francisco</td>
                <td>Programação de computadores II</td>
              </tr>

              <tr>
                <td>Maria</td>
                <td>Biologia</td>
              </tr>

              <tr>
                <td>Ana</td>
                <td>Geografia</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Teachers;
