import React, { useState } from 'react';
import Data from './Data';
import './style.css';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
    const [item, setitem] = useState(Data);
    const [name, setname] = useState();

    const getitem = (catitem) => {
        const updateitem = Data.filter((ele) => {
            return ele.category === catitem;
        });
        setitem(updateitem);
    }

    function search(i) {
        const update = Data.filter((ele) => {
            return ele.category === i;
        });
        setitem(update);
        setname(i);
    }




    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div className='container'>
                            <div className='d-flex justify-content-around mt-5'>
                                <button className='btn1' onClick={() => getitem('mountain')}>Mountain</button>
                                <button className='btn1' onClick={() => getitem('beach')}>Beaches</button>
                                <button className='btn1' onClick={() => getitem('bird')}>Birds</button>
                                <button className='btn1' onClick={() => getitem('food')}>Food</button>
                                <input type="text" placeholder='www.ccom' onChange={(i) => search(i.target.value)} />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        item.map((i) => {
                            const { id, image, category } = i;
                            return (
                                <>
                                    <Col className='col-3'>
                                        <div className='mt-4 image'>
                                            <img src={image} alt="" srcset="" className='img-fluid' />
                                        </div>
                                    </Col>
                                </>
                            )
                        })
                    }
                </Row>

            </Container>
        </>

    );
};

export default Home;