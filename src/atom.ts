import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist'

interface User {
  fullname: string,
}

const { persistAtom } = recoilPersist()

export const userState = atom<User>({
  key: 'user',
  default: {
    fullname: "name",
  },
  effects_UNSTABLE: [persistAtom],
});

export const userSelector = selector<User>({
  key: 'userSelector',
  get: ({ get }) => {
    const user = get(userState);

    return user;
  },
});
