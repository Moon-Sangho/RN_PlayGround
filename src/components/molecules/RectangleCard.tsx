import React from 'react';
import styled from '@emotion/native';
import { TouchableOpacityProps } from 'react-native';
import Txt, { TxtProps } from 'src/components/atoms/Txt';

type Props = TouchableOpacityProps & {
  label: string;
  description?: string;
  width?: number;
  height?: number;
  isFocused?: boolean;
  labelProps?: TxtProps;
  descriptionProps?: TxtProps;
};

const RectangleCard = ({
  label,
  description,
  width,
  height,
  isFocused,
  labelProps,
  descriptionProps,
  ...props
}: Props) => {
  return (
    <Card width={width} height={height} isFocused={isFocused} {...props}>
      <Label labelProps={labelProps}>{label}</Label>
      {description && (
        <Description descriptionProps={descriptionProps}>
          {description}
        </Description>
      )}
    </Card>
  );
};

export default RectangleCard;

const Card = styled.TouchableOpacity<{
  width?: number;
  height?: number;
  isEvenItem?: boolean;
  isFocused?: boolean;
}>`
  width: ${({ width }) => (width ? `${width}px` : `150px;`)};
  height: ${({ height }) => (height ? `${height}px` : `130px;`)};
  border-width: 1.5px;
  border-color: ${({ isFocused, theme }) =>
    isFocused ? `${theme.colors.main}` : `${theme.colors.inactive}`};
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
`;

const Label = styled(Txt)<{ labelProps?: TxtProps }>`
  font-size: 18px;
`;

const Description = styled(Txt)<{ descriptionProps?: TxtProps }>`
  color: ${({ theme }) => theme.colors.deepGray};
`;
