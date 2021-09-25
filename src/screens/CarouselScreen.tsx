import React, { useState } from 'react';
import styled from '@emotion/native';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  Linking,
  View,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Txt from 'src/components/atoms/Txt';

interface CarouselItem {
  item: {
    title: string;
    text: string;
  };
  index: number;
}

interface ImageCarouselItem {
  item: {
    id: string;
    image: ImageSourcePropType;
  };
  index: number;
}

const CarouselScreen = () => {
  const { width } = Dimensions.get('window');
  const [images] = useState([
    { id: '1', image: IMAGES.image1 },
    { id: '2', image: IMAGES.image2 },
    { id: '3', image: IMAGES.image3 },
    { id: '4', image: IMAGES.image4 },
    { id: '5', image: IMAGES.image5 },
  ]);
  const [indexSelected, setIndexSelected] = useState(0);

  const onSelect = ($indexSelected: number) => {
    setIndexSelected($indexSelected);
  };

  return (
    <Container>
      <Title
        onPress={() =>
          Linking.openURL(
            'https://snack.expo.dev/@vitkor/carousel-simple-example',
          )
        }>
        • Default Carousel
      </Title>
      <View style={{ flexDirection: 'row' }}>
        <Carousel
          layout="default"
          data={CAROUSEL_ITEMS}
          sliderWidth={300}
          itemWidth={300}
          renderItem={({ item, index }: CarouselItem) => (
            <View
              key={index}
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
          )}
        />
      </View>
      <Title
        onPress={() =>
          Linking.openURL(
            'https://blog.crowdbotics.com/how-to-create-a-custom-gallery-view-in-react-native/',
          )
        }>
        • Image Carousel
      </Title>
      <Carousel
        layout="default"
        data={images}
        sliderWidth={width}
        itemWidth={width - 60}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        renderItem={({ item, index }: ImageCarouselItem) => (
          <Image
            key={index}
            style={{ width: '100%', height: '100%', borderRadius: 20 }}
            resizeMode="cover"
            source={item.image}
          />
        )}
        loop={true}
        onSnapToItem={index => onSelect(index)}
      />
      <View>
        <Pagination
          inactiveDotColor="gray"
          dotColor="orange"
          activeDotIndex={indexSelected}
          dotsLength={images.length}
          animatedDuration={100}
          inactiveDotScale={1}
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

const Title = styled(Txt)`
  margin: 30px 20px 20px;
`;

const CAROUSEL_ITEMS = [
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

const IMAGES = {
  image1: require('assets/images/dogs.jpg'),
  image2: require('assets/images/hamster.jpg'),
  image3: require('assets/images/panda.jpg'),
  image4: require('assets/images/cat.jpg'),
  image5: require('assets/images/fox.jpg'),
};
