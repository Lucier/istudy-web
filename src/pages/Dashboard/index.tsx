import React from 'react';

import income from '../../assets/income.svg';

import Header from '../../components/Header';

import { Container, CardContainer, Card } from './styles';

const Dashborad: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <CardContainer>
          <Card>
            <header>
              <p>Escolas cadastradas</p>
              <img src={income} alt="Income" />
            </header>
            <h1>123</h1>
          </Card>
          <Card>
            <header>
              <p>Aluno cadastrados</p>
              <img src={income} alt="Income" />
            </header>
            <h1>1.234</h1>
          </Card>
          <Card>
            <header>
              <p>Disciplinas cadastradas</p>
              <img src={income} alt="Income" />
            </header>
            <h1>178</h1>
          </Card>
          <Card>
            <header>
              <p>Notas cadastradas</p>
              <img src={income} alt="Income" />
            </header>
            <h1>10.238</h1>
          </Card>
        </CardContainer>
      </Container>
    </>
  );
};

export default Dashborad;
