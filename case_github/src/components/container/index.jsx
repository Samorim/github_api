import { Container, Text } from './styles';

const MainContainer = props => (
    <Container>
        {props.children}
        <Text>by Samira Pereira</Text>
    </Container>
);

export default MainContainer;