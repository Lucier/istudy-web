import React from 'react';

import Header from '../../components/Header';
import { Container, Content, TableContainer } from './styles';

const Courses: React.FC = () => {
  return (
    <>
      <Header size="small" />
      <Container>
        <Content>
          <button type="button">Novo curso</button>
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
                <td>Técnico em informática</td>
              </tr>

              <tr>
                <td>Técnico em RH</td>
              </tr>

              <tr>
                <td>Técnico em Comércio</td>
              </tr>

              <tr>
                <td>Técnico em Agropecuária</td>
              </tr>

              <tr>
                <td>Técnico em Administração</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Courses;
