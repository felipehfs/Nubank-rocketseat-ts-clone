import React from 'react';
import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from './styles';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Animated} from 'react-native';

interface MenuProps {
  translateY: Animated.Value;
}

function Menu({translateY}: MenuProps) {
  const containerStyle = {
    opacity: translateY.interpolate({
      inputRange: [0, 150],
      outputRange: [0, 1],
    }),
  };

  return (
    <Container style={containerStyle}>
      <Code>
        <QRCode
          value="https://rocketseat.com.br"
          size={80}
          color="#8810ae"
          backgroundColor="#fff"
        />
      </Code>

      <Nav>
        <NavItem>
          <Icon name="help-outline" color="#fff" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" color="#fff" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" color="#fff" />
          <NavText>Configurar Cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" color="#fff" />
          <NavText>Configurações do App</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}

export default Menu;
