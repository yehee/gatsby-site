import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import config from "../config"

const { siteShortTitle } = config

const StyledLogo = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
  position: relative;
  z-index: 13;

  font-size: ${({ size }) => (size ? size : "1.75rem")};
  font-weight: 900;
  font-family: 'Jua', sans-serif;
  color: ${({ theme, color }) => theme.colors[color] || color};

  /* Disable effects when sidebar is open */
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
`

const Logo = ({ size, color }) => (
  <StyledLogo color={color} size={size}>
    {siteShortTitle}
  </StyledLogo>
)

Logo.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
}

export default Logo
