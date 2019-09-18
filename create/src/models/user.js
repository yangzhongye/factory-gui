import { queryCurrent, query as queryUsers } from '@/services/user';
import { getUserInfo } from '@/utils/userInfo';

const UserModel = {
  namespace: 'user',
  state: {
    currentUser: {},
  },
  effects: {
    *fetchCurrent(_, { put }) {
      const response = getUserInfo()
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },
  },
  reducers: {
    saveCurrentUser(state, { payload }) {
      return { ...state, currentUser: payload || {} };
    },
  },
};
export default UserModel;
