import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { cssReset, Row, Text, Anchor } from "@tlon/indigo-react";
import light from '../theme/tlon-theme-light'


const Style = createGlobalStyle`
  ${cssReset}

  strong {
    font-weight: 600;
  }
`

const Index = () => (
  <ThemeProvider theme={light}>
    <Style />
    <Row>
      <Text fontSize='1'>Tlon</Text>
    </Row>
    <Anchor fontSize='1' href='/posts/understanding-urbit/interface'>To Blog Post</Anchor>
  </ThemeProvider>
)

export default Index