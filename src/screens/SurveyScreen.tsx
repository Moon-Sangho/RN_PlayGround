import React, { useCallback, useMemo, useState } from 'react';
import styled from '@emotion/native';
import { StackScreenProps } from '@react-navigation/stack';
import { FlatList } from 'react-native';
import Txt from 'src/components/atoms/Txt';
import RectangleCard from 'src/components/molecules/RectangleCard';
import BottomBtnTemplate from 'src/components/templates/BottomBtnTemplate';

type Props = StackScreenProps<RootStackNavigator, 'SurveyScreen'>;

enum Steps {
  Step1 = 1,
  Step2,
  Step3,
  Step4,
  Step5,
}

const SurveyScreen = ({ navigation }: Props) => {
  const [step, setStep] = useState(Steps.Step1);
  const [form, setForm] = useState({
    [Steps.Step1]: null as number | null,
    [Steps.Step2]: null as number | null,
    [Steps.Step3]: null as number | null,
    [Steps.Step4]: null as number | null,
    [Steps.Step5]: [] as number[],
  });

  const titleData = useMemo(
    () => ({
      [Steps.Step1]: '첫번째 질문 ooo 인가요?',
      [Steps.Step2]: '두번째 질문 ooo 인가요?',
      [Steps.Step3]: '세번째 질문 ooo 인가요?',
      [Steps.Step4]: '네번째 질문 ooo 인가요?',
      [Steps.Step5]: '다섯번째 질문 ooo 인가요? (복수 선택 가능)',
    }),
    [],
  );

  const maxStep = Steps.Step5;

  const percent = useMemo(() => (step / maxStep) * 100, [step, maxStep]);

  const totalValue = useMemo(
    () =>
      Object.values(form).reduce((result: number, value) => {
        if (!value) {
          return result;
        }

        if (typeof value === 'object') {
          return (
            result + value.reduce(($result, $value) => $result + $value, 0)
          );
        }

        return result + value;
      }, 0),
    [form],
  );

  const onPress = useCallback(() => {
    navigation.navigate('SurveyResultScreen', {
      totalValue,
    });
  }, [navigation, totalValue]);

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
          onPress: $navigation => $navigation.navigate('LandingScreen'),
        },
        {
          content: '아니오',
          onPress: $navigation => $navigation.goBack(),
        },
      ],
    });
  }, [navigation]);

  return (
    <BottomBtnTemplate
      headerTitle="설문조사"
      percent={percent}
      showProgressBar={true}
      btnProps={{ onPress }}
      btnText="결과 확인하기"
      showBottomBtn={step === maxStep ? true : false}
      disabled={form[Steps.Step5].length <= 0}
      onBackPress={onBackPress}
      onClosePress={onClosePress}>
      <TitleContainer>
        <SurveyStep>{step < 10 ? '0' + step : step}</SurveyStep>
        <Title>{titleData[step]}</Title>
      </TitleContainer>
      <Container>
        {step === Steps.Step1 && (
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
        )}
        {step === Steps.Step2 && (
          <FlatList
            bounces={false}
            data={STEP2_DATA}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <RectangleCard
                label={item.label}
                description={item.description}
                isFocused={item.value === form[Steps.Step2]}
                onPress={() => {
                  setForm(prevForm => ({
                    ...prevForm,
                    [Steps.Step2]: item.value,
                  }));
                  setStep(Steps.Step3);
                }}
                width={340}
                height={80}
                style={{
                  justifyContent: 'space-between',
                }}
              />
            )}
          />
        )}
        {step === Steps.Step3 && (
          <FlatList
            bounces={false}
            data={STEP3_DATA}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <RectangleCard
                label={item.label}
                description={item.description}
                isFocused={item.value === form[Steps.Step3]}
                onPress={() => {
                  setForm(prevForm => ({
                    ...prevForm,
                    [Steps.Step3]: item.value,
                  }));
                  setStep(Steps.Step4);
                }}
                width={340}
                height={80}
                style={{
                  justifyContent: 'space-between',
                }}
              />
            )}
          />
        )}
        {step === Steps.Step4 && (
          <FlatList
            bounces={false}
            data={STEP4_DATA}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <RectangleCard
                label={item.label}
                description={item.description}
                isFocused={item.value === form[Steps.Step4]}
                onPress={() => {
                  setForm(prevForm => ({
                    ...prevForm,
                    [Steps.Step4]: item.value,
                  }));
                  setStep(Steps.Step5);
                }}
                width={340}
                height={80}
                style={{
                  justifyContent: 'space-between',
                }}
              />
            )}
          />
        )}
        {step === Steps.Step5 && (
          <FlatList
            bounces={false}
            numColumns={2}
            data={STEP5_DATA}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <RectangleCard
                label={item.label}
                description={item.description}
                isFocused={form[Steps.Step5]?.includes(item.value)}
                onPress={() => {
                  setForm(prevForm => ({
                    ...prevForm,
                    [Steps.Step5]: prevForm[Steps.Step5].includes(item.value)
                      ? prevForm[Steps.Step5].filter(
                          value => value !== item.value,
                        )
                      : prevForm[Steps.Step5].concat(item.value),
                  }));
                }}
                style={{
                  justifyContent: 'space-between',
                  marginLeft: item.id % 2 === 0 ? 10 : 0,
                }}
              />
            )}
          />
        )}
      </Container>
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

const TitleContainer = styled.View`
  padding: 24px;
`;

const SurveyStep = styled(Txt)`
  color: ${({ theme }) => theme.colors.main};
  margin-bottom: 12px;
`;

const Title = styled(Txt)`
  font-size: 18px;
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

const STEP2_DATA = [
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
];

const STEP3_DATA = [
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
    label: 'label4',
    description: 'description4',
  },
];

const STEP4_DATA = [
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
];

const STEP5_DATA = [
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
    label: 'label3',
    description: 'description3',
  },
  {
    id: 6,
    value: 6,
    label: 'label4',
    description: 'description4',
  },
];
