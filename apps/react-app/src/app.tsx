import { RouterComponent } from '@/core';
import { UserChoiceProvider } from './core/user-choice/user-choice.provider';
import './app.global-styles';

export const App = () => {
  return (
    <UserChoiceProvider>
      <RouterComponent />
    </UserChoiceProvider>
  );
};
