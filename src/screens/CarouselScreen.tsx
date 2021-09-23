import React from 'react';
import styled from '@emotion/native';
import { Linking, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Txt from 'src/components/atoms/Txt';

interface CarouselItem {
  item: {
    title: string;
    text: string;
  };
  index: number;
}

const CarouselScreen = () => {
  const _renderItem = ({ item }: CarouselItem) => {
    return (
      <View
        style={{
          backgroundColor: 'powderblue',
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}>
        <Txt style={{ fontSize: 30 }}>{item.title}</Txt>
        <Txt>{item.text}</Txt>
      </View>
    );
  };

  return (
    <Container>
      <Txt
        style={{ margin: 20 }}
        onPress={() =>
          Linking.openURL(
            'https://snack.expo.dev/@vitkor/carousel-simple-example',
          )
        }>
        • Default Carousel
      </Txt>
      <View style={{ flexDirection: 'row' }}>
        <Carousel
          layout="default"
          keyExtractor={(__, index) => index.toString()}
          data={carouselItems}
          sliderWidth={300}
          itemWidth={300}
          renderItem={_renderItem}
        />
      </View>
    </Container>
  );
};

export default CarouselScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

const carouselItems = [
  {
    title: 'Item 1',
    text: 'Text 1',
  },
  {
    title: 'Item 2',
    text: 'Text 2',
  },
  {
    title: 'Item 3',
    text: 'Text 3',
  },
  {
    title: 'Item 4',
    text: 'Text 4',
  },
  {
    title: 'Item 5',
    text: 'Text 5',
  },
];
