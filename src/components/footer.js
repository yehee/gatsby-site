import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Config from "../config/"
import ContentWrapper from "../styles/ContentWrapper"
import Logo from "./logo"

const { footerLinks } = Config

const StyledFooter = styled.footer`
  width: 100%;
  height: ${({ theme }) => theme.footerHeight};
  background: ${({ theme }) => theme.colors.primary};
  margin-top: 10rem;
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .footer-links {
      /* Adjust width of links wrapper accordingly */
      width: 20rem;
      display: flex;
      justify-content: space-between;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
`

const Credit = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  font-size: 14px;
  padding: 1.25rem;
  text-align: center;
  transition: all 0.3s ease-out;
  a {
    color: ${({ theme }) => theme.colors.buttonText};
    padding: 0 .25rem;
    &:hover {
      color: #ffffff;
    }
  }
`

const StyledLink = styled(Link)`
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  letter-spacing: 1px;
`

const Footer = () => (
  <StyledFooter>
    <StyledContentWrapper>
      <Link to="/" aria-label="home">
        <Logo color="white" size="1.5rem" />
      </Link>
      <div className="footer-links">
        {footerLinks.map(({ name, url }, key) => (
          <StyledLink key={key} to={url}>{name}</StyledLink>
        ))}
      </div>
    </StyledContentWrapper>
    <Credit>
      Created with
      <Link to="https://www.gatsbyjs.com/" aria-label="Gatsby">
        Gatsby
      </Link>
      | Built and published by
      <Link to="https://www.konstantin.digital/" aria-label="author">
        Konstantin Münster
      </Link>
    </Credit>
  </StyledFooter>
)

export default Footer
