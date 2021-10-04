type RootStackNavigator = {
  LandingScreen: undefined;
  AlertModalScreen: {
    title: string;
    buttons: Array<{
      content: string;
      onPress: (
        navigation: import('@react-navigation/native').NavigationProp<any>,
      ) => void;
    }>;
    description?: string;
  };
  SVGScreen: undefined;
  ChartScreen: undefined;
  DropdownScreen: undefined;
  SurveyScreen: undefined;
  SurveyResultScreen: {
    totalValue: number;
  };
  RouletteScreen: undefined;
  CarouselScreen: undefined;
  ScrollFadeInScreen: undefined;
  PasswordSettingScreen: undefined;
};
