import React, {useContext, useEffect} from 'react';
import {Container, Row} from "react-bootstrap";
import {Context} from "../index";
import BasketItem from "../components/BasketItem";
import {observer} from "mobx-react-lite";

const Basket = observer(() => {
    const {basket,user} = useContext(Context)



    return (
        <Container>
            <h4>Ваш Id користувача: {user.user.id}</h4>
            <Row className="d-flex">
                {basket.books.map(book=>
                    <BasketItem key={book.id} bookT={book}/>
                )}
            </Row>
        </Container>
    );
});

export default Basket;