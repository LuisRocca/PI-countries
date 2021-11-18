import styled from "styled-components"
export const StyledPaginado = styled.div`
padding-bottom: 50px;
padding-top: 50px;
position: relative;

ul{
    display: flex;
    list-style: none;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    margin: 0 15px 10px 15px;

    
    a{
        
        text-decoration: none;
        padding: 5px 10px;
        border: 2px solid #1c1b1b;
        border-radius: 5px;
        cursor:pointer; 
      
    }
    a:hover{
        background-color: #8fbfd6;
    }
    .active {
    background-color: #8fbfd6eb;
}
   
}


` 
