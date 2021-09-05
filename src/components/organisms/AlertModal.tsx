import React from 'react';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import Btn, { BtnProps } from 'src/components/atoms/Btn';
import Txt from 'src/components/atoms/Txt';

type Props = {
  title: string;
  buttons: Array<{
    content: string;
    onPress: () => void;
  }>;
  description?: string;
};

const AlertModal = ({ title, buttons, description }: Props) => {
  const theme = useTheme();
  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </Container>
      <ButtonContainer>
        {buttons.length > 0 &&
          buttons.map((button, index) => (
            <Button
              key={index}
              onPress={() => button.onPress()}
              style={
                index !== buttons.length - 1
                  ? {
                      borderRightWidth: 1,
                      borderRightColor: theme.colors.lightGray,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    }
                  : null
              }>
              {button.content}
            </Button>
          ))}
      </ButtonContainer>
    </Wrapper>
  );
};

export default AlertModal;

const Wrapper = styled.View`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Container = styled.View`
  padding: 32px 24px 24px 24px;
  align-items: center;
  justify-content: center;
`;

const Title = styled(Txt)`
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
`;

const Description = styled(Txt)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.deepGray};
  text-align: center;
`;

const ButtonContainer = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.lightGray};
`;

const Button = styled((props: BtnProps) => {
  const theme = useTheme();

  return (
    <Btn
      backgroundColor={theme.colors.white}
      color={theme.colors.main}
      fontWeight="bold"
      {...props}
    />
  );
})`
  flex: 1;
  height: 100%;
  margin: 0;
  border-width: 0;
  border-radius: 10px;
`;
