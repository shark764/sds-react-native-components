import React, { useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Telicon from './components/telicon/Telicon';

const { width } = Dimensions.get('window');
const iconSize = width * 0.15;

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

const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;
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

export default function App () {
  const [index, setIndex] = useState(1);
  const primaryColor = colors[index - 1];
  const secondaryColor = colors[index % colors.length];
  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <Row>
            <Telicon name="star" size="default" fill={primaryColor} fillSecondary={secondaryColor} />
          </Row>

          <Row>
            <Telicon name="warning--octagon" size="small" fill={primaryColor} fillSecondary={secondaryColor} />
          </Row>

          <Row>
            <Telicon name="volume-x" size="medium" fill={secondaryColor} fillSecondary={primaryColor} />
          </Row>

          <Slider2 step={1} minimumValue={1} maximumValue={colors.length} onValueChange={setIndex} />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
