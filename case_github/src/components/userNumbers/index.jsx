import React from 'react';
import { useNavigate } from 'react-router-dom';
//import Repos from '../../pages/repos';
import { 
    Container,
    NumberContainer
} from "./styles";

const UserNumbers = props => {
  const history = useNavigate();
    const handleOnClick = route => history.push(route);

    return (
        <Container>
            <NumberContainer onClick={() => handleOnClick ('/repos')}>
                <h1>{props?.repos}</h1>
                <h2>Repositórios</h2>
            </NumberContainer>

            <NumberContainer>
                <h1>{props?.followers}</h1>
                <h2>Seguidores</h2>
            </NumberContainer>

            <NumberContainer>
                <h1>{props?.following}</h1>
                <h2>Seguindo</h2>
            </NumberContainer>
        </Container>
    );
}

export default UserNumbers;