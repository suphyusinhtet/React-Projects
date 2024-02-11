import React from 'react'
import styled from 'styled-components'

function Section( {title,description,backgroundImg,leftBtnText,rightBtnText}) {
  // console.log(props);
  // {title,description,backgroundImg,leftBtnText,rightBtnText} props;
  return (
    <Wrap bgimage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>
            {leftBtnText}
          </LeftButton>
          {rightBtnText &&
            <RightButton>
              {rightBtnText}
            </RightButton>
          }
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg"/>
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    // background-image: url('/images/model-x.jpg');
    background-image: ${props => `url("/images/${props.bgimage}");`}
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  @media (max-width: 768px){
    flex-direction: column;
  }
  
`
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 246px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  // text-align: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`

const DownArrow= styled.img `
  // margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`
const Buttons = styled.div`

`