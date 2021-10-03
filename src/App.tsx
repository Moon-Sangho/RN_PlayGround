import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppContext } from 'src/contexts/AppContext';
import RootStackNavigator from 'src/screens/navigators/RootStackNavigator';
import { theme } from 'src/styles/theme';

const App = () => {
  const [user, setUser] = useState<Nullable<AppUser>>(null);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={{ user, setUser }}>
          <NavigationContainer>
            <RootStackNavigator />
          </NavigationContainer>
        </AppContext.Provider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
