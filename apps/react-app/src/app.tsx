import { RouterComponent } from '@/core';
import { UserChoiceProvider } from './providers/user-choice.provider';

export const App = () => {
  return (
    <UserChoiceProvider>
          <RouterComponent />
    </UserChoiceProvider>
    );
};
