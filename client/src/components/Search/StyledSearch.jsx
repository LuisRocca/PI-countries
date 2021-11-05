import styled from "styled-components";

export const StyledSearch = styled.div`
position: relative;
    margin: auto;
    max-width: 400px;
    width: 90%;
    padding-top: 20px;

    input{
        font-size: 20px;
        padding: 10px 55px 10px 20px;
        border-radius: 10px;
        outline: 0;
        border: 2px solid #c8d3f3;
        width: 100%;
        background: #8fbfd6c2;
        color: #f5f5fb;

    }
    
    &::after{
      
        font-family: 'font awesome 5 pro';
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 25px;
        color: blue;
    }

`