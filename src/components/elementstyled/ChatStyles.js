import ScrollToBottom from 'react-scroll-to-bottom';
import styled from 'styled-components';

export const ChatWindow = styled.div`
 width: 300px;
  height: 420px;
  

`

export const Chattop = styled.h3`
  height: 45px;
  border-radius: 6px;
  background: #263238;
  position: relative;
  cursor: pointer;
`

export const ChatMain = styled.div`
height: calc(450px - (45px + 70px));
  border: 1px solid #263238;
  background: #fff;
  position: relative;
  
`

export const Title = styled.p`
    font-size: 1.2rem;
    margin: 1rem;
    color: white;
   
`

export const MessageMeta = styled.div`
    justify-content: flex-start;
    margin-left: 5px;
`


export const ChatFooter = styled.div`
height: 40px;
  border: 1px solid #263238;
  border-top: none;
  display: flex;

  
`
export const ChatFooterInput = styled.input`
height: 100%;
  flex: 85%;
  border: 0;
  padding: 0 0.7em;
  font-size: 1em;
  border-right: 1px dotted #607d8b;
  outline: none;
  font-family: "Open Sans", sans-serif;
  background-color: #ffe6e6;
 
`

export const MessageContainer = styled.ScrollToBottom`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
`



