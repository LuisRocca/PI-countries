import styled from "styled-components"

export const StyledNavbar = styled.div`
width: 100%;
position: fixed;
background-color: black;
top: 0;
left: 0;
z-index: 10;
border-bottom: 2px solid #e2d8d8; 
box-shadow: 0 9px 16px #fff;
.container{
    margin: auto;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #e2d8d8;
    padding: 10px;

    .social-media{
        margin: 0 15px;
        font-size: 40px; 
        display: flex;
        align-items: center;
        justify-content: center;       
        a{
            color: #ffff;
            margin: 10px;
            transition: color 200ms ease;

            &:hover{
                color: #8fbfd6eb;
                /* color: black; */
            }
            
        }
    }
}


.title{
    font-weight: bold;
    font-size: 40px;
    font-family: 'Dancing Script', cursiva;
}
.list {
    list-style: none;
    display: flex;
    align-items: center;
}
.list-item {
    margin: 0 5px;
    display: flex;
    align-items: center;
}

.list-item a {
    color: #e2d8d8;
    /* height: 100%; */
    padding: 6px 14px;
    margin-top: 5px;
    margin-bottom: 5px;
    text-decoration: none;
    border-radius: 20px;
    transition: background-color 250ms ease;
    font-weight: bold;
    border: 2px solid black;
    font-family: 'Overpass', sans-serif;
}

.active {
    background-color: #8fbfd6eb;
}

.list-item a:hover{
    background-color: #243ec3;;
    color: black;
    font-weight: bold;
}

@media (max-width: 900px){
    .container{
        flex-direction: column;
    }
}

@media (max-width: 650px){
    .social-media{
        height: 50px;
        i{
            font-size: 35px;
        }
    }
    .list-item a {
        font-size: 14px;
    }
}
`