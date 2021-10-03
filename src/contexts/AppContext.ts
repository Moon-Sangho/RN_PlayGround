import { createContext } from 'react';

export const AppContext = createContext<{
  user: Nullable<AppUser>;
  setUser: (user: Nullable<AppUser>) => void;
}>({
  user: null,
  setUser: () => {},
});
