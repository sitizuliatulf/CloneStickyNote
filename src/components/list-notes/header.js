import React from "react";
import { Toolbar, ToolbarContent, ToolbarAction } from "react-native-paper";
import PropTypes from "prop-types";

const Header = ({ title, icons, ...other }) => (
  <Toolbar>
    <ToolbarContent title={title} />
    {icons.map(itemIcon => (
      <ToolbarAction key={itemIcon.name} {...itemIcon} />
    ))}
  </Toolbar>
);

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
