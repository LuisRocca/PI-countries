import styled from "styled-components"

export const StyledCards = styled.div`
margin: 30px;
flex-direction: column;
display: flex;
border-radius: 10px;
 overflow: hidden;
width: 380px;
height: 430px;
justify-content: center;
background:  linear-gradient(160deg, #f0f4f412 0%, rgba(0, 0, 0, 0.49) 101%); 
box-shadow: 5px 5px 20px rgba(14, 14, 14);
cursor: pointer;
transition: transform 250ms ease;

&:hover{
    transform: scale(1.02);
    // overflow: scroll;

}

.contImg{
    width: 90%;
    height: 90%;
    justify-content: center;
    padding: 15px;
     
    img{
        border-radius: 20%;
        padding: 10px;
        width: 90%;
        height: 90%;
        object-fit: cover;
    }
}

.info{
   
    margin-left: 10px;
    margin-botton: 15px
    width: 50%;
    height: 70%;

    h1{
        color:white;
    }
    
   
    h2{
        font-size: 25px;
        color:white;
        text-decoration: none; 
    }
    
    
}

@media (max-width: 650px) {
    flex-direction: column;
    width: 100%;
    height: 520px;
    margin: 30px 0;
    .contImg {
      width: 100%;
      max-height: 50%;
    }
    .info{
        padding: 0 15px;
        width: 100%;
        h2{
            font-size: 30px;
        }
        h5{
            font-size: 17px;
        }
        p{
            font-size: 19px;
        }        
    }
    
}

`