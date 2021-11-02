import styled from "styled-components"

export const StyledHome = styled.div`
padding-top: 150px;
background: #685f5fb3;

.container{
    display: flex;
    margin-top: 25px;
}

.cards-container{
    display: flex;
    justify-content: center;
    flex-direccion:row;
    flex-wrap: wrap;
    /* padding: 40px; */
    /* margin-top: 80px; */
    
    .contenedor{
        flex-direction: row;
    }
}

.select{
    display: flex;
    width: 100%;
    height: 3em;
    line-height: 4;
    border-radius: 30px;
    
    .select::after {
        
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 1em;
        background: #e2e;
        cursor:pointer;
        pointer-events:none;
        transition:.10s all ease;
     }

     .select:hover::after {
        color: #23b499;
        
     }

    select{
        border-radius: 20%;
        flex-direccion:columm;
        background: #0a0a0ade;
        margin:10px 20px;
        flex: 1;
        padding: 5px;
        color:#fff;
        cursor:pointer;
        font-size: 1em;
       
    }

}



` 

