import React, { useContext, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import ConnectWallet from "../reach/ConnectWallet";
import { Context } from "../../Context";
import { AttachButton, DeployButton } from "../reach/DeployAttach";

import { loadStdlib } from "@reach-sh/stdlib";


const Home = () => {

    // const [account, setAccount, , setBalance, ctcInfo, setctcInfo] = useContext(Context);
    const account = " ";

    
    return account !== "" ? (
        <Container className="h-100">
            <div className="mt-5">
                <Row>
                    <Col>
                        <Card className="p-3">
                            <Card.Title>Deploy Contract</Card.Title>
                            <hr className="mt-1" />
                            <Card.Text>
                                Deploy application
                            </Card.Text>
                        
                            {/* <DeployButton  /> */}
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3">
                            <Card.Title>Attach Contract</Card.Title>
                            <hr className="mt-1" />
                            <Card.Text>
                                Attach existing application
                            </Card.Text>
                            {/* <AttachButton /> */}
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    ) : (
        <Container>
            <h1>Please connect your wallet</h1>
            <ConnectWallet />
        </Container>
    );
}

export default Home;