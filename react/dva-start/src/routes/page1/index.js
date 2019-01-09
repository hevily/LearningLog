import React from "react";
import { connect } from "dva";
import styles from "../IndexPage.css";
import queryString from "query-string";

function IndexPage(props) {
  console.log(
    "props---",
    props.location.search,
    queryString.parse(props.location.search)
  );
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to page1!</h1>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
