import React, { useCallback, useState } from 'react';
import styled from '@emotion/native';
import { StackScreenProps } from '@react-navigation/stack';
import { FlatList } from 'react-native';
import RectangleCard from 'src/components/molecules/RectangleCard';
import BottomBtnTemplate from 'src/components/templates/BottomBtnTemplate';

type Props = StackScreenProps<RootStackNavigator, 'SurveyScreen'>;

enum Steps {
  Step1 = 1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Step8,
  Step9,
}

const SurveyScreen = ({ navigation }: Props) => {
  const [step, setStep] = useState(Steps.Step1);
  const [form, setForm] = useState({
    [Steps.Step1]: null as number | null,
    [Steps.Step2]: null as number | null,
    [Steps.Step3]: null as number | null,
    [Steps.Step4]: null as number | null,
    [Steps.Step5]: null as number | null,
    [Steps.Step6]: null as number | null,
    [Steps.Step7]: null as number | null,
    [Steps.Step8]: null as number | null,
    [Steps.Step9]: [] as number[] | null,
  });

  const handleForm = useCallback(() => {
    switch (step) {
      case Steps.Step1:
        return (
          <>
            <FlatList
              bounces={false}
              numColumns={2}
              data={STEP1_DATA}
              keyExtractor={({ id }) => id.toString()}
              renderItem={({ item }) => (
                <RectangleCard
                  label={item.label}
                  description={item.description}
                  isFocused={item.value === form[Steps.Step1]}
                  onPress={() => {
                    setForm(prevForm => ({
                      ...prevForm,
                      [Steps.Step1]: item.value,
                    }));
                    setStep(Steps.Step2);
                  }}
                  style={{
                    justifyContent: 'space-between',
                    marginLeft: item.id % 2 === 0 ? 10 : 0,
                  }}
                />
              )}
            />
          </>
        );
    }
  }, [form, step]);

  const onPress = () => {
    console.log('test');
  };

  const onBackPress = useCallback(() => {
    if (step !== Steps.Step1) {
      setStep(prevStep => prevStep - 1);
    } else {
      navigation.goBack();
    }
  }, [step, navigation]);

  const onClosePress = useCallback(() => {
    navigation.navigate('AlertModalScreen', {
      title: '설문을 그만하시겠습니까?',
      description: '지금 멈추면 처음부터 다시 진행하셔야 합니다',
      buttons: [
        {
          content: '네',
          onPress: () => navigation.navigate('LandingScreen'),
        },
        {
          content: '아니오',
          onPress: () => navigation.goBack(),
        },
      ],
    });
  }, [navigation]);

  return (
    <BottomBtnTemplate
      headerTitle="설문조사"
      btnProps={{ onPress }}
      btnText="결과 확인하기"
      showBottomBtn={step === Steps.Step9 ? true : false}
      onBackPress={onBackPress}
      onClosePress={onClosePress}>
      <Container>{handleForm()}</Container>
    </BottomBtnTemplate>
  );
};

export default SurveyScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px 24px 0;
`;

const STEP1_DATA = [
  {
    id: 1,
    value: 1,
    label: 'label1',
    description: 'description1',
  },
  {
    id: 2,
    value: 2,
    label: 'label2',
    description: 'description2',
  },
  {
    id: 3,
    value: 3,
    label: 'label3',
    description: 'description3',
  },
  {
    id: 4,
    value: 4,
    label: 'label4',
    description: 'description4',
  },
  {
    id: 5,
    value: 5,
    label: 'label5',
    description: 'description5',
  },
  {
    id: 6,
    value: 6,
    label: 'label6',
    description: 'description6',
  },
];
