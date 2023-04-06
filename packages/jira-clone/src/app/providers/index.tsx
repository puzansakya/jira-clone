// LIBS
import { Provider } from 'react-redux';

// UI
import { ChakraProvider } from '@chakra-ui/react';

// STORE
import { store } from '../store';

// THEME
import { AppTheme } from '../theme';
import { RouterProvider } from 'react-router-dom';
import { router } from '../routes';

const AppProviders = () => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={AppTheme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  );
};

export default AppProviders;
