import React from 'react';

import Header from '../../components/Header';
import { Container, Content, TableContainer } from './styles';

const Students: React.FC = () => {
  return (
    <>
      <Header size="small" />
      <Container>
        <Content>
          <button type="button">Novo aluno</button>
        </Content>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Curso</th>
                <th>Serie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>José</td>
                <td>Técnico em informática</td>
                <td>2° ano</td>
              </tr>

              <tr>
                <td>João</td>
                <td>Técnico em RH</td>
                <td>1° ano</td>
              </tr>

              <tr>
                <td>Francisco</td>
                <td>Técnico em Comércio</td>
                <td>1° ano</td>
              </tr>

              <tr>
                <td>Maria</td>
                <td>Técnico em Informática</td>
                <td>3° ano</td>
              </tr>

              <tr>
                <td>Ana</td>
                <td>Técnico em Adminstração</td>
                <td>3° ano</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Students;
