import { routerRedux } from 'dva/router';
import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
@connect(state => {
  return state;
})
class IndexPage extends React.Component {
  render() {
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
          <li
            onClick={() => {
              console.log('点击跳转', this);
              this.props.dispatch(
                routerRedux.push({
                  pathname: '/lazy',
                })
              );
            }}
          >
            TO Lazy
          </li>
        </ul>
      </div>
    );
  }
}

export default IndexPage;
