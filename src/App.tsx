import React, { useState } from 'react';
import { Button, SafeAreaView, ScrollView } from 'react-native';
import styled from 'styled-components/native';
// import { Button as Button2 } from '@code503/@2600hz/sds-react-native-components-test';
import Telicon from './components/telicon/Telicon';
import type { darkTheme } from './styles/theme';
import AppThemeProvider from './providers/appThemeProvider';

// const { width } = Dimensions.get('window');
// const iconSize = width * 0.1;

const colors = [
  'rgb(0, 0, 0)', // black
  'rgb(255, 159, 64)', // orange
  'brown',
  'rgb(255, 99, 132)', // pink
  'rgb(54, 162, 235)', // blue
  'rgb(0, 100, 192)', // green
  'rgb(255, 206, 86)', // yellow
  'rgb(153, 102, 255)', // purple
  '#45914f',
  '#205070',
  'orange',
  'lightgreen',
  'cyan',
  'darkblue',
  'darkcyan',
  '#47915d',
];

type ThemeType = typeof darkTheme;
interface StyledThemeType {
  theme: ThemeType;
}

// const Container2 = styled.View`
//   flex: 1;
//   background-color: #f5f5f5;
//   align-items: center;
//   justify-content: center;
//   padding: 80px;
// `;
const Row = styled.View`
  padding: 20px;
  border: 4px;
  border-style: dotted;
  border-color: cyan;
  border-radius: 8px;
`;
const Slider2 = styled.Slider`
  margin-top: 30px;
  width: 90%;
`;
const Container = styled.SafeAreaView<StyledThemeType>`
  flex: 1;
  background-color: ${(props: StyledThemeType) =>
    props.theme.PRIMARY_BACKGROUND_COLOR};
  justify-content: center;
  align-items: center;
  padding: 80px;
`;

const TextContainer = styled.View<StyledThemeType>`
  padding: 15px;
  border-radius: 5px;
  border: 1px solid
    ${(props: StyledThemeType) => props.theme.PRIMARY_TEXT_COLOR};
`;

const Title = styled.Text<StyledThemeType>`
  padding: 20px;
  font-size: 24px;
  font-weight: 500;
  color: ${(props: StyledThemeType) => props.theme.PRIMARY_TEXT_COLOR};
`;

const TouchableButton = styled.TouchableOpacity<StyledThemeType>`
  margin-top: 20px;
  background-color: ${(props: StyledThemeType) =>
    props.theme.SECONDARY_BUTTON_COLOR};
  border-radius: 5px;
  padding: 10px;
`;

const ButtonText = styled.Text<StyledThemeType>`
  font-size: 20px;
  color: ${(props: StyledThemeType) => props.theme.SECONDARY_TEXT_COLOR};
`;

export function App () {
  const [index, setIndex] = useState(1);
  const primaryColor = colors[index - 1];
  const secondaryColor = colors[index % colors.length];
  const [themeMode, setThemeMode] = useState('light');

  return (
    <AppThemeProvider mode={themeMode}>
      <SafeAreaView>
        <ScrollView>
          <Container>
            <Row>
              <Telicon
                name="star"
                size="small"
                fill={primaryColor}
                fillSecondary={secondaryColor}
              />
            </Row>

            <Row>
              <Telicon
                name="volume-x"
                size="xsmall"
                fill={secondaryColor}
                fillSecondary={primaryColor}
              />
            </Row>

            <Row>
              <Telicon
                name="warning--octagon"
                size="small"
                fill={primaryColor}
                fillSecondary={secondaryColor}
              />
            </Row>

            <Slider2
              step={1}
              minimumValue={1}
              maximumValue={colors.length}
              onValueChange={setIndex}
            />

            {/* <Button2
              type="danger"
              content="This is a test"
              title="This is a btn"
              onPress={(e) => setIndex((idx) => idx + 1)}
            /> */}

            <Button
              title="This is another btn"
              onPress={() => setIndex((idx) => idx + 1)}
            />

            <TextContainer>
              <Title>Themed App with React Native & Styled Components</Title>
            </TextContainer>
            {themeMode === 'light'
              ? (
                <TouchableButton onPress={() => setThemeMode('dark')}>
                  <ButtonText>Switch to Dark Theme</ButtonText>
                </TouchableButton>
              )
              : (
                <TouchableButton onPress={() => setThemeMode('light')}>
                  <ButtonText>Switch to Light Theme</ButtonText>
                </TouchableButton>
              )}
          </Container>
        </ScrollView>
      </SafeAreaView>
    </AppThemeProvider>
  );
}

export default App;
