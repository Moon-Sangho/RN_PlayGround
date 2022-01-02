import React, { useState } from 'react';
import Checkbox from 'src/components/atoms/CheckBox';
import Txt from 'src/components/atoms/Txt';

import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

const CheckboxScreen = () => {
  const theme = useTheme();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <Container>
      <Txt>Click below checkbox! {'\n'}</Txt>
      <Checkbox
        isChecked={isChecked}
        color={theme.colors.main}
        onPress={() => setIsChecked(prevState => !prevState)}
      />
    </Container>
  );
};

export default CheckboxScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;
