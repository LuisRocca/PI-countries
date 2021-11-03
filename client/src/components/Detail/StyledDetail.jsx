import styled from "styled-components";
import Img from './images/12.jpg'

export const StyledDetail = styled.div`
background-images: ${Img};

.contenedor {
    margin: 0px auto 30px;
    padding: 40px;
    display: flex;
    justify-content: center;
    max-width: 700px;
    min-height: 550px;
    width: 90%;
    border-radius: 20px;
    border: 2px solid;
    background:  #a9e9ef;
    box-shadow: 0px 0px 20px rgba(14, 14, 14);
}

.imgDetails {
    width: 300px;
}

.goBack{
    margin: 180px 40px 50px;
    color: #ffff;
    background-color: #333;
    border: none;
    padding: 15px 25px;
    border-radius: 15%;
    transition: background-color 100ms ease, font-weight 100ms ease;;
    outline: none;
    cursor: pointer;
    
    &:hover{
        font-weight: bold;
        background-color: #22933f;
    }
}

`