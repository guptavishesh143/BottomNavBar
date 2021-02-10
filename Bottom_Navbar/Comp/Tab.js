// Imported React Libraries

import React from 'react';
import styled from 'styled-components/native';
import Images from '../images';

// Importing Screen Files and Neccesary Components

function Tab({label, accessibilityState, onPress}) {
  const focused = accessibilityState.selected;
  const icon = !focused ? Images.icons[label] : Images.icons[`${label}Focused`];
  return (
    <Container onPress={onPress}>
      <Background
              focused={focused}>
        <Icon source={icon} />
      </Background>
    </Container>
  );
}

const Container = styled.TouchableWithoutFeedback``;
const Background = styled.View`
  flex: auto;
  flex-direction: row;
  align-items: center;
  justify-content:center;
  background: ${(props) => (props.focused ? '#F5F8FA' : 'transparent')}
 border-radius: 15px;
  margin: 6px;
    `;
const Icon = styled.Image`
  height: 26px;
  width: 26px;
`;

export default Tab;
