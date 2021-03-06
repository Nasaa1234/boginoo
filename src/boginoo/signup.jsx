import {
    Button, Text, Desktop, Row, Login, Center, Input,
    Col, Footer, Opacity, Margin, JusCenter, Pos, Color
}
    from '../styled-component/button'
import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import logo from './Boginoo.svg'
import left from './left.svg'
import center from './center.svg'
import right from './right.svg'
import * as _ from 'lodash'
import * as yup from 'yup'
import { useNavigate } from "react-router-dom";
// import firebase from 'firebase';
import { AuthContext, AuthProvider, useAuthContext } from './provider/context';
const SignupPage = () => {
    const { login, signUp, signOut, user, userCorrect, signUpCorrect, signUpError } = useAuthContext()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [set, setSet] = useState(false)

    const navigate = useNavigate();

    if (signUpCorrect) {
        navigate('/ ')
    }
    const [form, setForm] = useState({
        password: '',
        email: '',
    })
    const [errors, setErrors] = useState({
        password: '',
        email: '',
    });


    let schema = yup.object().shape({
        password: yup.string().required().min(6),
        email: yup.string().email().required(),
    });


    const handleCheck = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value })
        schema.validate(form, { abortEarly: false }).then(res => {
            setErrors({})
        })
            .catch(e => {
                setErrors({
                    password: e?.errors?.filter(el => el.includes('password')).join('\n'),
                    email: e?.errors?.filter(el => el.includes('email')).join('\n'),
                })
            })
    }
    const submit = () => {
        setSet(true)
        schema.validate(form, { abortEarly: false }).then(res => {
            setErrors({})
        })
            .catch(e => {
                setErrors({
                    password: e?.errors?.filter(el => el?.includes('password')).join('\n'),
                    email: e?.errors?.filter(el => el?.includes('email')).join('\n'),
                })
                // setErrors({ ...errors, userId: e.errors[0] })
            })
        // setDisplayError(errors)
    }
    return (
        <Desktop>
            <Login>
                <Text>???????????? ?????????????????? ?????</Text>
            </Login>
            <Center Login>
                <Row>
                    <img src={left} alt="" />
                    <img src={center} alt="" />
                    <img src={right} alt="" />
                </Row>
                <img src={logo} alt="" />
                <Text>
                    ????????????????????
                </Text>
                <Col mt='2%'>
                    <Margin value='0 0 0 10px'>
                        ?????????? ????????
                    </Margin>
                    <Input vwInput='381px' marginTop='1%' onChange={(e) => setUsername(e.target.value), handleCheck} id='email' value={form.email} placeholder='name@mail.domain'>
                    </Input>
                    <Margin value='20px 0px -30px 40px '>
                        <Color red>
                            {set ? errors.email : ''}
                        </Color>
                    </Margin>
                    {/* {errors} */}
                </Col>
                <Col mt='3%'>
                    <Margin value='0 0 0 10px'>
                        ???????? ????
                    </Margin>
                    <Input vwInput='381px' marginTop='1%' onChange={(e) => setPassword(e.target.value), handleCheck} id='password' value={form.password} type='password' placeholder='??????????????????????????????'  >
                    </Input>
                    <Margin value='20px 0px 0px 40px '>
                        <Color red>
                            <div className="" style={{ width: '300px' }}>
                                {errors ? errors.password : signUpError ? '???????? ???? ?????????? ?????????????? ?????? ?????????? ??????????' : ''}
                            </div>
                        </Color>
                    </Margin>
                </Col>

                <Link to='/login'>
                    <Margin value='20px 0px 10px 300px'>
                        <a href="" style={{ color: '#02B589' }}>??????????????</a>
                    </Margin>
                </Link>
                <Margin value='0px 0px 0px 0px'>
                    <Link to={signUpCorrect ? '/login' : '/signup'}>
                        <Button vw='383px' vh='43px' onClick={() => { signUp(form.email, form.password); submit() }}> ????????????????????</Button>
                    </Link>
                </Margin>
            </Center>
            <Footer>
                <Pos >
                    <Col >
                        Made with ?????? by Nest Academy
                        <Opacity opa='30'>
                            ??boginoo.io 2020
                        </Opacity>
                    </Col>
                </Pos>
            </Footer>
        </Desktop >

    )
}

export default SignupPage
