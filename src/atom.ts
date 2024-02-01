import { atom, selector } from 'recoil';

interface User {
  fullname: string,
}

export const userState = atom<User>({
  key: 'user',
  default: {
    fullname: "name",
  },
});

export const userSelector = selector<User>({
  key: 'userSelector',
  get: ({ get }) => {
    const user = get(userState);

    return user;
  },
});
