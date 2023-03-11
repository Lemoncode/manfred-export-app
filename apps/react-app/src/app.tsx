import { RouterComponent } from '@/core';
import { MacProvider } from './providers/mac.provider';

export const App = () => {
  return (
    <MacProvider>
          <RouterComponent />
    </MacProvider>
    );
};
