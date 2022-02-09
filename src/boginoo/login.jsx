import {
    Button, Text, Desktop, Row, Login, Center, Input,
    Col, Footer, Opacity, CenterLogin, Margin, JusCenter, Pos, Color, Size
}
    from '../styled-component/button'
import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { collection, getDocs } from 'firebase/firestore/lite';
import logo from './Boginoo.svg'
import left from './left.svg'
import center from './center.svg'
import right from './right.svg'
import { db } from './firebase';
import { AuthContext, AuthProvider, useAuthContext } from './provider/context';
import * as _ from 'lodash'
import * as yup from 'yup'
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const { login, signUp, signOut, user, userCorrect, errorLogin } = useAuthContext()
    if (user && user?.email) {
        navigate('/')
    }
    const [set, setSet] = useState(false)


    const [form, setForm] = useState({
        password: '',
        email: '',
    })
    const [errors, setErrors] = useState({
        password: '',
        email: '',
    });


    let schema = yup.object().shape({
        password: yup.string().required().min(5),
        email: yup.string().email().required(),
    });


    const handleCheck = (e) => {
        setForm({ ...form, [e?.target.id]: e?.target.value })
        schema.validate(form, { abortEarly: false }).then(res => {
            setErrors(false)
        })
            .catch(e => {
                setErrors({
                    password: e?.errors?.filter(el => el?.includes('password')).join('\n'),
                    email: e?.errors?.filter(el => el?.includes('email')).join('\n'),
                })
            })
    }
    const submit = () => {
        setSet(true)
        schema.validate(form, { abortEarly: false }).then(res => {
            setErrors(false)
        })
            .catch(e => {
                setErrors({
                    password: e?.errors?.filter(el => el?.includes('password')).join('\n'),
                    email: e?.errors?.filter(el => el?.includes('email')).join('\n'),
                })
            })
    }
    return (
        <Desktop>
            <Login>
                <Text>Хэрхэн ажилладаr вэ?</Text>
            </Login>
            <Center Login>
                <Row>
                    <img src={left} alt="" />
                    <img src={center} alt="" />
                    <img src={right} alt="" />
                </Row >
                <img src={logo} alt="" />
                <Text>
                    Нэвтрэх
                </Text>
                <Col mt='2%'>
                    <Margin value='0 0 0 10px'>
                        Цахим хаяг
                    </Margin>
                    <Input vwInput='381px' onChange={(e) => setEmail(e.target.value), handleCheck} marginTop='1%' value={form.email} id='email' placeholder='name@mail.domain'>
                    </Input>
                    <Margin value='20px 0px -30px 40px'>

                        <Color red>
                            {set ? errors.email : ''}
                        </Color>
                    </Margin>

                </Col>
                <Col mt='3%'>
                    <Margin value='0 0 0 10px'>
                        Нууц үг
                    </Margin>

                    <Input vwInput='381px' onChange={(e) => setPassword(e.target.value), handleCheck} marginTop='1%' id='password' value={form.password} type='password' placeholder='••••••••••'>
                    </Input>
                    <Margin value='20px 0px -0px 40px'>
                        <Color red>
                            <Size wv=''>
                                <div className="" style={{ width: '300px' }}>
                                    {errors ? errors.password : errorLogin ? 'Нууц үг эсвэл нэвтрэх нэр буруу байна' : ''}
                                </div>
                            </Size>
                        </Color>
                    </Margin>
                </Col>
                <JusCenter>
                    <Row mttop='10%'>
                        <Row mttop='0'>
                            <Color>
                                <Input marginTop='-13px' type='checkbox'></Input>
                            </Color>
                            <Margin> <Color>
                                Намайг сана
                            </Color>
                            </Margin>
                        </Row>
                        <Link to='/restart'>
                            <Margin value='0 0 0 120px'>
                                <a href=" " style={{ textDecoration: 'none' }}> <Color >Нууц үгээ мартсан </Color></a>
                            </Margin>
                        </Link>
                    </Row>
                </JusCenter>
                <Button vw='383px' vh='43px' onClick={() => { login(form.email, form.password); submit() }}>Нэвтрэх</Button>
                <Link to='/signup'>
                    <Margin value='30px 0 0px 0px'>
                        <a href=""> <Color>Шинэ хэрэглэгч бол энд дарна уу?</Color></a>
                    </Margin>
                </Link>
            </Center >
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

export default LoginPage
