import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  outline:none;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}
html,body{
  background:#F5F8FA;
}
body,
input,
textarea,
button {
  font: 400 1rem "Inter", sans-serif;
}

p{
  font-family: "Inter", sans-serif;
}

button {
  cursor: pointer;
}
a {
  color: inherit;
  text-decoration: none;
}
.modal {
    position: absolute;
    top: 40px;
    left: 0px;
    right: 0px;
    margin:0 auto;
    background:#fff;
    width:100%;
    max-width:844px;
  }
  .modal-2 {
    position: absolute;
    top: 186px;
    left: 0px;
    right: 0px;
    margin:0 auto;
    background:#fff;
    width:100%;
    padding: 64px 40px;
    max-width:400px;
    background: #29292E;
    svg{
      margin: 0 auto;display: block;
      margin-bottom: 40px;
    }
    h1{
      font-family: Archivo;
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 39px;
      text-align: center;
      color: #FFFFFF;
      margin-bottom: 16px;
    }
    p{
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 28px;
      text-align: center;
      color: #A8A8B3;
      margin-bottom:40px;
      }
      button{
        width: 120px;
        height: 64px;
        color:#fff;
        background: #47474D;
        border: 0;
        margin: 0 auto;
        display: block;
        }
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:rgba(0,0,0,0.8);
  }
`;
