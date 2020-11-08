import React, { Component } from 'react'
import { Card,
     Form,
     FormGroup,
     Label,
     Input,
     Button,
    } from 'reactstrap'

export default class Login extends Component {
   

    render() {
        return (
            <div class="login-page d-flex justify-content-center align-items-center">
                <Card className="login-modal">
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </Card>
            </div>
        )
    }
}
