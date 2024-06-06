import React, {useContext, useEffect, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const NameBar = observer(() => {
    const {book} = useContext(Context)
    const [searchString, setSearchString] = useState('')

    useEffect(() => {
        book.setSelectedSearchString(searchString)
    }, [searchString])

    return (
        <div className="d-flex">
            <Form>
                <Form.Control
                    value={searchString}
                    onChange={e => setSearchString(e.target.value)}
                    type="text"
                />
            </Form>
        </div>
    );
});

export default NameBar;