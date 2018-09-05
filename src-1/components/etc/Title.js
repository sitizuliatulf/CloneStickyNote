import React from 'react';
import { Text } from 'react-native';
import PropTypes from "prop-types";

// export const kurang = (a,b) => a - b;
// export const tambah = (a,b) => a + b;
const Title = props => <Text>{props.name} {props.count}</Text>;

Title.propTypes = {
  count: PropTypes.number,
  name: PropTypes.string.isRequired
};

Title.defaultProps = {
  count: 0
};

export default Title;
