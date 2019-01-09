import styles from './index.css';
// import { Button } from 'react-bootstrap';
import Link from 'umi/link';
import { connect } from 'dva';
import { throttle } from '../../utils/util';
import { Collapse, Button } from 'antd';
import router from 'umi/router';

const Panel = Collapse.Panel;

const index = ({ dvaData, dispatch }) => {
  const handelClick = () => {
    dispatch({
      type: 'dvaData/getOtherModal',
      payload: {},
    });
  };
  const toFilterExm = e => {
    console.log('e---', e);
    router.push('/dva/filterexp');
  };
  return (
    <div className={styles.normal}>
      <Collapse
        style={{ width: '50%', marginLeft: '50px' }}
        defaultActiveKey={['0']}
        onChange={() => {}}
      >
        <Panel header="获取其他Model的数据" key="1">
          <div className={styles.panelCon}>
            <Button className={styles.btn} onClick={handelClick}>
              获取其他Modal的数据
            </Button>
            <code>
              进入页面，采用监听路由的方式，提交action去清空数据 <br />
              <br />
              {JSON.stringify(dvaData.navList)}
            </code>
          </div>
        </Panel>
        <Panel header="model的复用" key="2">
          <div className={styles.panelCon}>
            <code>提取公众的model，dva中的Loading既是如此</code>
          </div>
        </Panel>
        <Panel header="动态扩展model" key="3">
          <div className={styles.panelCon}>
            <code />
            <Button className={styles.btn} onClick={throttle(toFilterExm)}>
              点击查看示例
            </Button>
          </div>
        </Panel>
        <Panel header="路由--routerRedux对象" key="4">
          <div className={styles.panelCon}>
            <p>如果以UMI为脚手架，dva暴露出的路由方法将不会生效。</p>
            <code />
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default connect(({ dvaData }) => ({ dvaData }))(index);
