import React from "react";
import styles from "./header.module.scss";

export default class Header extends React.Component {
  render() {
    return (
      <header data-testid="header" className={ styles.headerContainer }>
        <h1 data-testid="heading" className={ styles.headerLogoName }>
          <span className={ styles.headerLogoNameHighlight}>Workout</span> Log
        </h1>
      </header>
    );
  }
}
