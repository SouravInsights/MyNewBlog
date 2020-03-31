import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Hello world! I'm an aspiring Design Engineer, currently building{" "}
    <Styled.a href="http://beta.scrumbble.co">Scrumbble</Styled.a> and{" "}
    <Styled.a href="https://twitter.com/DesignSavageCo">
      DesignSavageCo
    </Styled.a>{" "}
    | Prime Mover{" "}
    <Styled.a href="https://twitter.com/DesignSavageCo">
      @emishacommunity
    </Styled.a>{" "}
    For work enquiries shoot me an email at{" "}
    <Styled.a href="mailto:howdysourav@gmail.com">
      howdysourav@gmail.com
    </Styled.a>
  </Fragment>
)
