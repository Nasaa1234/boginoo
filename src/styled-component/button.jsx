
import styled from 'styled-components'
import { keyframes } from 'styled-components'
const Button = styled.button`
    background: #02B589;
    color:  white};
    border-radius: 100px ;
    border:none;
    width : ${({ vw }) => vw};
    height : ${({ vh }) => vh};
    font-size: 20px;
    line-height: 23px;  
`


const Size = styled.div`
    width:${({ wv }) => wv}%;
    height:${({ wh }) => wh}%;
`
const Text = styled.div`
    color:#02B589;
    font-size: 25px;
    line-height: 23px;
    margin-top:${props => props.top ? '10px' : '50px'}
`

const Color = styled.div`
    color:${props => {
        if (props.red) {
            return 'red';
        } else {
            return '#02B589'
        }
    }
    }};

`
const Fontsize = styled.div`
    'md' : '1rem',      // 16px
    'sm' : '0.875rem',  // 14px
    'xs' : '0.75rem',   // 12px
    '2xs': '0.625rem',  // 10px
`


const FontsizeInp = styled.div`
    font-size: ${({ font }) => font}px;
    line-height: 23px;
`
const Desktop = styled.div`
    width:100vw;
    height:100vh;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
`

const Row = styled.div`

    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-top:${({ mttop }) => mttop};
`
const JusCenter = styled.div`
    display:flex;
    justify-content:space-between;
`

const Col = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    margin-top:${({ mt }) => mt};
`
const Login = styled.div`
    float:right;
    margin:  1% 3%;

`
const Margin = styled.div`
    margin: ${({ value }) => value};

  
`

const Center = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-top:${props => props.Login ? '100' : '40'}px;
`


const Input = styled.input`
    width:${({ vwInput }) => vwInput};
    height: 44px;
    border-radius: 100px;
    border: 1px solid #F0F0F0;
    padding-left:2%;
    Opacity:80%;
    Blend :Pass through;
    margin-top:${({ marginTop }) => marginTop}
`

const Footer = styled.div`
    margin-top:13%;
    display:flex;
    justify-content:center;

`
const Opacity = styled.div`
    Opacity:${({ opa }) => opa}%;
`


const Pos = styled.div`
    position:fixed;
    bottom:0;
`
const breatheAnimation = keyframes`
    0% {
        left: 0px;
        top: 0px;
    }

    100% {
        left: -28px;
        top: 0px;
    }
`

const Move = styled.div`
    animation: ${breatheAnimation} 1s;
    animation-fill-mode: forwards;
    position: relative;
`

const breatheAnimation1 = keyframes`
    0% {
        left: 0px;
        top: 0px;
    }

    100% {
        left: 27px;
        top: 0px;
    }
`

const Move1 = styled.div`
animation: ${breatheAnimation1} 1s;
position: relative;
animation-fill-mode: forwards;

`
export {
    Button, Text, Desktop, Row, Login,
    Center, Input, Footer, Opacity, Col
    , Margin, JusCenter, Pos, Fontsize, FontsizeInp, Size, Move, Move1, Color
}
