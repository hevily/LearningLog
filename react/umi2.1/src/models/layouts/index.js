import { routerRedux } from 'dva/router';
// import { test } from '../services';
import { message } from 'antd';

export default {
  namespace: 'layout',
  state: {
    active: 0,
    navList: [
      {
        title: '首页',
        route: '#/',
      },
      {
        title: 'DVA',
        route: '#/dva',
      },
      {
        title: 'UMI',
        route: '#/umi',
      },
    ],
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/businessHangingAccounts') {
          dispatch({
            type: 'getPageList',
            payload: {},
          });
          dispatch({
            type: 'getFilterStateList',
          });
        }
      });
    },
  },

  effects: {
    *test({ payload }, { put, call, select }) {
      const data = yield call(test, payload);
      if (data.code === 'S000000') {
        // yield put(routerRedux.push('/knowledge'));
        message.success('请求数据成功！');
      } else {
        throw data;
      }
    },
  },
  reducers: {
    toSwitchNav(state, { payload }) {
      return {
        ...state,
        active: payload,
      };
    },
  },
};
