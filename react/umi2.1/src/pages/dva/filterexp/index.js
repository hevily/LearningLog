import styles from './index.css';
import { Button } from 'react-bootstrap';
import Link from 'umi/link';
import { connect } from 'dva';
import { throttle } from 'utils/util';
import Filter from './components/Filter';

const index = ({ test, dispatch }) => {
  const handelClick = () => {
    dispatch({
      type: 'test/toTest',
      payload: {},
    });
  };
  const handleSubmit = validateFieldsAndScroll => {
    console.log('value---', validateFieldsAndScroll);
    dispatch({
      type: 'filter/getPageList',
      payload: {},
    });
  };
  return (
    <div className={styles.normal}>
      <Filter handleSubmit={handleSubmit} />
    </div>
  );
};

export default connect(({ test }) => ({ test }))(index);
