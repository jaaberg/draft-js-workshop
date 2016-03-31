import React, { Component } from 'react';

const Hashtag = (props) => {
  return (
    <span {...props} style={styles.root}>{props.children}</span>
  );
};

const styles = {
  root: {
    color: '#FF00CC'
  }
};

export default Hashtag;
