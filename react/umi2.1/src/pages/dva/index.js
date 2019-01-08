import styles from './index.css';
// import { Button } from 'react-bootstrap';
import Link from 'umi/link';
import { connect } from 'dva';
import { throttle } from '../../utils/util';
import { Collapse, Button } from 'antd';

const Panel = Collapse.Panel;

const index = ({ dvaData, dispatch }) => {
  const handelClick = () => {
    dispatch({
      type: 'dvaData/getOtherModal',
      payload: {},
    });
  };
  return (
    <div className={styles.normal}>
      <Collapse
        style={{ width: '50%', marginLeft: '50px' }}
        defaultActiveKey={['1']}
        onChange={() => {}}
      >
        <Panel header="获取其他Modal的数据" key="1">
          <div className={styles.panelCon}>
            <Button className={styles.btn} onClick={handelClick}>
              获取其他Modal的数据
            </Button>
            <p>进入页面，采用监听路由的方式，提交action去清空数据</p>
            <code>{JSON.stringify(dvaData.navList)}</code>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default connect(({ dvaData }) => ({ dvaData }))(index);
