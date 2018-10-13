import React from "react";
import { Toolbar, ToolbarContent, ToolbarAction } from "react-native-paper";
import PropTypes from "prop-types";

const Header = (props) => (
  <Toolbar>
    <ToolbarContent title={props.title} />
    {props.icons.map((itemIcon, index) => (
      <ToolbarAction key={itemIcon.name} {...itemIcon} />
    ))}
  </Toolbar>
);

/*
{...itemIcon} => read more about destructing object in javascript
*/

Header.propTypes = {
  title: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      onPress: PropTypes.func.isRequired,
      color: PropTypes.string,
      size: PropTypes.any,
      style: PropTypes.any
    })
  )
};

export default Header;
