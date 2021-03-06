import styled from "styled-components"


export const StyledHome = styled.div`
padding-top: 180px;

.container{
    display: flex;
    margin-top: 25px;

}

.cards-container{

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px 20px;
    
    .contenedor{
        flex-direction: row;
    
    }
}

.select{

    display: flex;
    width: 100%;
    height: 2em;
    line-height: 4;
    
    
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
        border-radius: 20px;     
        background: #1c1b1b;
        margin:1px 20px;
        flex: 1;
        padding: 3px;
        color:#fff;
        cursor:pointer;
        font-size: 1em;    
    }

}

.contenedor_loading {
       .loading {
       color: #151516;
       font-size: 20px;
       position: relative;
   }

}


` 

