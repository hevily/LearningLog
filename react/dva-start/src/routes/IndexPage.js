import React from "react";
import { connect } from "dva";
import styles from "./IndexPage.css";
import { Router, Route, Switch, routerRedux, HashRouter } from "dva/router";

function IndexPage(props) {
  const toPage1 = () => {
    console.log("router", routerRedux.push);
    // props.dispatch(routerRedux.push("/page1?test=1"));
    props.dispatch(
      routerRedux.push({
        pathname: "/page1",
        search: "?test=1"
      })
    );
  };
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          To get started, edit <code>src/index.js</code> and save to reload.
        </li>
        <li>
          <a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">
            Getting Started
          </a>
        </li>
        <li onClick={toPage1}>To Page1</li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect(state => state)(IndexPage);
