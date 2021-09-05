type RootStackNavigator = {
  LandingScreen: undefined;
  AlertModalScreen: {
    title: string;
    buttons: Array<{
      content: string;
      onPress: () => void;
    }>;
    description?: string;
  };
  SVGScreen: undefined;
  ChartScreen: undefined;
  DropdownScreen: undefined;
  SurveyScreen: undefined;
};
