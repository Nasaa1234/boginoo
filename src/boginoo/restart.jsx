import {
    Button, Text, Desktop, Row, Login, Center, Input,
    Col, Footer, Opacity, Margin, JusCenter, Pos, Color
}
    from '../styled-component/button'
import React, { useContext, useState } from 'react'
import { Link, useLocation } from "react-router-dom";

import logo from './Boginoo.svg'
import left from './left.svg'
import center from './center.svg'
import right from './right.svg'
import { add } from 'lodash';
import { AuthContext } from './provider/context';
import * as _ from 'lodash'
import * as yup from 'yup'
const RestartPage = () => {

    const { forgetPass } = useContext(AuthContext)
    const [email, setEmail] = useState()
    const [set, setSet] = useState()

    const [form, setForm] = useState({
        email: '',
    })
    const [errors, setErrors] = useState({
        email: '',
    });


    let schema = yup.object().shape({
        email: yup.string().email().required(),
    });


    const handleCheck = (e) => {
        setForm({ ...form, [e?.target.id]: e?.target.value })
        schema.validate(form, { abortEarly: false }).then(res => {
            setErrors(false)
        })
            .catch(e => {
                setErrors({
                    email: e?.errors?.filter(el => el?.includes('email')).join('\n'),
                })
            })
    }
    const submit = () => {
        setSet(true)
        schema.validate(form, { abortEarly: false }).then(res => {
            setErrors(false)
            setSet(false)

        }).catch(e => {
            console.log(e)
            setErrors({
                email: e?.errors?.filter(el => el?.includes('email')).join('\n'),
            })
        })

    }
    return (
        <Desktop>
            <Login>
                <Text>Хэрхэн ажилладаг вэ?</Text>
            </Login>
            <Center Login>
                <Row>
                    <img src={left} alt="" />
                    <img src={center} alt="" />
                    <img src={right} alt="" />
                </Row>
                <img src={logo} alt="" />
                <Text>
                    Нууц үг сэргээх
                </Text>
                <Opacity opa='70'>
                    <Margin value='50px 0 0px 0 '>
                        Бид таны цахим хаяг руу нууц үг
                    </Margin>
                    <Margin value='1px0 0 0px 0 '>
                        сэргээх хаяг явуулах болно.
                    </Margin>
                </Opacity>
                <Col mt='5%'>
                    <Margin value='0 0 0px 20px '>
                        Цахим хаяг
                    </Margin>
                    <Input vwInput='381px' marginTop='1%' onChange={(e) => setEmail(e.target.value), handleCheck} id='email' placeholder='name@mail.domain'>
                    </Input>
                    <Margin value='20px 0px 0px 100px'>

                        {errors ? <Color red>{errors.email}  </Color> : <Color green>амжилттай</Color>}

                    </Margin>
                </Col>
                <Margin value='30px 0 0px 0px '>
                    <Button vw='383px' onClick={() => forgetPass(email), submit} vh='43px'>Илгээх</Button>
                </Margin>
            </Center>
            <Footer>
                <Pos>
                    <Col >
                        Made with ♥️ by Nest Academy
                        <Opacity opa='30'>
                            ©boginoo.io 2020
                        </Opacity>
                    </Col>
                </Pos>
            </Footer>
        </Desktop>

    )
}

export default RestartPage
