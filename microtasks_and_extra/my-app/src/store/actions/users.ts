import {UserType} from 'types';

export const plusUserCount = () => ({
  type: 'PLUS_USER_COUNT',
}) as const;

export const createUser = (user: UserType) => {
  debugger
  return {
    type: 'СREATE_USER',
    payload: user
  } as const
};
