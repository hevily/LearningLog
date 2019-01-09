import { message } from 'antd';

function Filter(options) {
  return {
    state: {
      indexDataSource: [],
      pagination: {
        showQuickJumper: true,
        total: 0,
        showTotal(total) {
          return `共 ${total} 条`;
        },
        current: 1,
      },
      searchData: null,
    },
    effects: {
      *getPageList({ payload }, { put, call, select }) {
        console.log('搜索数据----', payload);

        // 保存搜索数据
        if (payload.type === 'search') {
          payload = payload.data;
          yield put({
            type: 'saveSearchData',
            payload,
          });
        } else if (payload.type === 'reset') {
          yield put({
            type: 'saveSearchData',
            payload: {},
          });
        }
        const searchData = yield select(state => state[options.namespace].searchData);
        // 添加搜索数据
        if (searchData) {
          Object.assign(payload, searchData);
        }
        const ret = yield call(options.reqFn, payload);

        if (ret.code === 'S000000') {
          yield put({
            type: 'pageList',
            payload: ret.data,
          });
        } else {
          message.warning(ret.message);
        }
      },
    },
    reducers: {
      pageList(state, { payload }) {
        const { pageNum, total, list } = payload;
        return {
          ...state,
          pagination: { ...state.pagination, total, current: pageNum },
          indexDataSource: list,
        };
      },
      saveSearchData(state, { payload }) {
        return { ...state, searchData: payload };
      },
    },
  };
}

export default Filter;
