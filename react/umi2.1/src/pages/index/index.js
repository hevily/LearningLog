import styles from './index.css';
import { Button } from 'react-bootstrap';
import Link from 'umi/link';
import { connect } from 'dva';
import { throttle } from '../../utils/util';

const index = ({ test, dispatch }) => {
  const handelClick = () => {
    dispatch({
      type: 'test/toTest',
      payload: {},
    });
  };
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          To get started, edit <code>src/pages/index.js</code> and save to reload.
        </li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">Getting Started</a>
        </li>
        <Link to="/knowledge">to knowledge page</Link>
      </ul>
      <Button onClick={throttle(handelClick)} variant="primary">
        请求模拟数据
      </Button>
    </div>
  );
};

export default connect(({ test }) => ({ test }))(index);
