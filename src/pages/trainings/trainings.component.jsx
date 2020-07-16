import React from 'react';
import moment from "moment";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const trainings = [
    { id: 1, name: 'upper body', date: Date.now() },
    { id: 2, name: 'lower body', date: Date.now() },
    { id: 3, name: 'whole body', date: Date.now() }
];

const TrainingsPage = () => {
    return (
        <Container className="trainings-page mt-2">
            <Row>
                <Col>
                    {/*<TrainingItem />*/}
                    <ListGroup variant="flush">
                        {
                            trainings.map(training => (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            {training.name}
                                        </Col>
                                        <Col className="text-right" xs="auto">
                                            <span>{moment(Number(training.date)).fromNow()}</span>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default TrainingsPage;
