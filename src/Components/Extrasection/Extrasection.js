import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../images/img-info.png'
import png1 from '../../images/info-1.svg'
import png2 from '../../images/info-2.svg'
import png3 from '../../images/info-3.svg'

const Extrasection = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col sm={12} md={5}><img className="img-fluid" src={logo} alt=""/></Col>
                <Col className="section-title" sm={12} md={7}>
                    <span className="fw-bold fs-5" style={{ "color": "#E63619" }}>TAKING RIDES TO A NEWER LEVEL</span>
                    <h3 className="fw-bold">A STEP ABOVE WITH<br/> RIDER-FRIENDLY NATURE</h3>
                    <p>Bajaj Pulsar NS160 is powered by 160.3 cc engine. This Pulsar NS160 engine generates a power of 17.2 PS @ 9000 rpm and a torque of 14.6 Nm @ 7250 rpm. The claimed mileage of Pulsar NS160 is 48 kmpl. Bajaj Pulsar NS160 gets Disc brakes in the front and rear.</p>

                    <div className="icon d-flex justify-content-center alings-items-center ">
                     <div className="mx-3">
                         <img src={png1} alt="" />
                     </div>
                     <h5>EASY TO BOOK<br/>FOR RENTALS</h5>
                     <div className="mx-3">
                         <img src={png2} alt="" />
                     </div>
                     <h5>LONGER RIDES<br/>FOR ALL DAY</h5>
                     <div className="mx-3">
                         <img src={png3} alt="" />
                     </div>
                     <h5>GET MILEAGE<br/>UNLIMITED</h5>


                    </div>
                        


                </Col>
            </Row>
        </Container>
    );
};

export default Extrasection;