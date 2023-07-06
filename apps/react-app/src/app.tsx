import { RouterComponent } from '@/core';
import { UserChoiceProvider } from './core/user-choice/user-choice.provider';
import './app.global-styles';

import { HolaLib } from '@lemoncode/manfred2md';

HolaLib();

export const App = () => {
  return (
    <UserChoiceProvider>
      <RouterComponent />
    </UserChoiceProvider>
  );
};
