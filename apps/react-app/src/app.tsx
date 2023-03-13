import { RouterComponent } from '@/core';
import { UserChoiceProvider } from './core/user-choice/user-choice.provider';

export const App = () => {
  return (
    <UserChoiceProvider>
          <RouterComponent />
    </UserChoiceProvider>
    );
};
