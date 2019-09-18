import { routerRedux } from 'dva/router';
import { stringify } from 'querystring';
import { userLogin } from '@/services/login';
import { setAuthority } from '@/utils/authority';
import { setUserInfo } from '@/utils/userInfo';
import { getPageQuery } from '@/utils/utils';
const Model = {
  namespace: 'login',
  state: {
    status: undefined,
  },
  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(userLogin, payload);

      if (response.token != undefined) {
        // Login successfully 
        yield put({
          type: 'changeLoginStatus',
          payload: { ...response, status: 'ok'},
        });
        yield put(routerRedux.replace('/'));
      }else {
        // Login fail 
        yield put({
          type: 'changeLoginStatus',
          payload: { status: 'error'},
        })
      }
    },

    *logout(_, { put }) {
      if (window.location.pathname !== '/user/login') {
        yield put(routerRedux.replace('/user/login'));
      }
    },
  },
  reducers: {
    changeLoginStatus(state, { payload }) {
      payload.roles && setAuthority(payload.roles);
      payload.token && setUserInfo(payload);
      return { ...state, status: payload.status };
    },
  },
};
export default Model;
