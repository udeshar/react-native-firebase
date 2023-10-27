/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { PaperProvider } from 'react-native-paper';
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';


const theme = {
          ...DefaultTheme,
          colors: {
                    ...DefaultTheme.colors,
                    primary: 'tomato',
                    secondary: 'yellow',
          },
};

const ReduxApp = () => (
          <Provider store={store}>
                    <PaperProvider theme={theme}>
                              <App />
                    </PaperProvider>
          </Provider>
)

AppRegistry.registerComponent(appName, () => ReduxApp);
