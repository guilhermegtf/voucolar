import React from 'react';

import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import imgLogo from '../../../assets/voucolar.png';

import {
  MasterHead,
  FlexRightGrow,
  Button,
  FlexLeftGrow,
  HeaderInner,
  Logo,
  Separator,
  Container,
  TopDivider,
} from './styles';

function MasterHeadComponent() {
  return (
    <MasterHead>
      <HeaderInner>
        <Logo>
          <Link to={'/'}>
            <img src={imgLogo} alt="" />
          </Link>
        </Logo>
        <FlexLeftGrow>
          <ul>
            <li>
              <Link to={'/vale-presente/'}>Vale-presente</Link>
            </li>
            <li>
              <Link to={'/brindes-personalizados-para-empresas/'}>
                Para empresas
              </Link>
            </li>
          </ul>
        </FlexLeftGrow>

        <FlexRightGrow>
          <ul>
            <li>
              <a href="/">
                <FaSearch />
              </a>
            </li>
            <li>
              <a>
                <span>Entrar</span>
              </a>
            </li>
            <Separator />
          </ul>
        </FlexRightGrow>
        <Button>
          <Link to={'/cart'}>
            <span>Carrinho / R$ 0,00</span>
            <FaShoppingCart size={15} />
          </Link>
        </Button>
      </HeaderInner>
      <Container>
        <TopDivider></TopDivider>
      </Container>
    </MasterHead>
  );
}

export default MasterHeadComponent;
