import React from 'react'
import Wrapper from '../../ui-components/Wrapper'
import { Row, TextWrapper, ImageWrapper } from './styles'

const Summary = () => {
  return (
    <Wrapper className="third">
      <Row>
        <TextWrapper>Hi</TextWrapper>
        <ImageWrapper>Image</ImageWrapper>
      </Row>
    </Wrapper>
  )
}

export default Summary
