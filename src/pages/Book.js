import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Container, Dropdown, Image} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";
import {fetchOneBook, postBookId, postBookIdTrue} from "../http/bookAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {createBasket, getBasketId} from "../http/basketAPI";


const Book = observer(() => {
    const [bookT, setBook]=useState({})
    const {book,user} = useContext(Context)
    const {id} = useParams()
    const navigate =useNavigate()


    const AddBasket=()=>{
        if(bookT.isA) {
            getBasketId(user.user.id).then(data => {
                createBasket(data.id, bookT.id).then(dataB => {
                    postBookId(bookT.id).then(navigate('/'))
                })
            })
        }
        else{
            alert("Книги немає в наявності")
        }
    }

    useEffect(()=>{
        fetchOneBook(id).then(data=>setBook(data))
    },[])



        return (
        <Container className="mt-3">
            <h1 >{bookT.name}</h1>
            <div>
                <Image width={270} height={400} src={'http://localhost:5000/'+bookT.img}></Image>
                <div>
                    <h2>Характеристики книги</h2>
                    <h5 style={{fontWeight:"normal"}}>• Автор: {bookT.author}</h5>
                    <h6 style={{fontWeight:"normal"}}>• Рік видання: {bookT.year}</h6>
                    <h6 style={{fontWeight:"normal"}}>• У наявності: {bookT.isA ? "Так":"Немає"}</h6>
                    {book.genres.map(genre=>
                        bookT.genreId==genre.id
                            ?
                    <h6 key={bookT.genreId} style={{fontWeight:"normal"}}>• Жанр: {genre.name}</h6>
                    :
                    <div/>)}
                    <div className="mt-3"> Про що йдеться у книзі: </div>
                    <div className="text-muted">{bookT.desc}</div>
                </div>
            </div>
            <Button style={{width:150, marginLeft:75, marginTop:20}} onClick={AddBasket} >Додати у кошик</Button>
        </Container>

    );
});

export default Book;