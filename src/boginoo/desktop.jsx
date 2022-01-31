import {
  Button, Text, Desktop, Row
  , Login, Center, Input, Col,
  Footer, Opacity, Pos, Margin, Move, Move1, FontsizeInp, Size, JusCenter
} from '../styled-component/button'
import React, { useState, useEffect } from 'react'
import * as _ from 'lodash'
import logo from './Boginoo.svg'
import left from './left.svg'
import center from './center.svg'
import center1 from './center.svg'
import center2 from './center.svg'
import './loading.css'
import right from './right.svg'
import { Link } from "react-router-dom";
import { useAuthContext } from './provider/context';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownDivider
} from 'styled-dropdown-component';
import down from './icon-down.svg'
import History from './history'
import { v4 as uuid } from "uuid";
import History1 from './history1'
import { useCollection, useFirebase } from './firebase';
import { size } from 'lodash'
const LinkPage = () => {
  const { login, signUp, signOut, user, userCorrect } = useAuthContext()
  const [hidden, setHidden] = useState(true);
  const [value, setValue] = useState()
  const [history, setHistory] = useState([])
  const [short, setShort] = useState([])
  const unique_id = uuid();
  const random = unique_id.slice(0, 6);
  const { firestore } = useFirebase()
  const [data, setdata] = useState([])
  const { data: urls, createDoc: addUrl } = useCollection('allUrls')



  const Add = () => {
    setHistory([...history, value])
    setShort([...short, random])
    window.alert('hello');
  }
  useEffect(() => {
    if (urls) {
      setdata(urls)
    }
  }, [urls])
  const [number, setNumber] = useState(0)
  const send = () => {
    value ? user && user?.email ? addUrl(random, { url: value, email: user?.email, count: number }) : addUrl(random, { url: value }) : <></>

  }
  return (
    <Desktop>
      <Margin >
        <Login>
          <Row>
            <Margin value='0 30px 0px 0'>
              <Text top>Хэрхэн ажилладаг вэ?</Text>
            </Margin>
            {user && user?.email ?
              <>
                <Dropdown>

                  <DropdownMenu hidden={hidden} toggle={() => setHidden(!hidden)} >
                    <Link to='login'>
                      <Margin value='0 0 0 24px'>
                        <DropdownItem onClick={signOut}>Гарах</DropdownItem>
                      </Margin>
                    </Link>
                  </DropdownMenu>
                  <FontsizeInp font='25'>
                    <Margin value='10px 0px 0 0px'>
                      <Row>
                        <FontsizeInp font='20'>
                          {user && user?.email}
                        </FontsizeInp>
                        <img src={down} alt="" dropdownToggle onClick={() => setHidden(!hidden)} />
                      </Row>
                    </Margin>
                  </FontsizeInp>
                </Dropdown>
              </> :
              <Link to='/login'>
                <Button vw='183px' vh='44px'>Нэвтрэх</Button>
              </Link>
            }
          </Row>
        </Login>
      </Margin>
      <Center>
        <Row>
          <Move1>
            <img src={left} alt="" />
            <img src={center1} alt="" style={{ paddingBottom: '14px' }} />
          </Move1>
          <img src={center} alt="" />
          <Move>
            <img src={center2} alt="" style={{ paddingBottom: '14px' }} />
            <img src={right} alt="" />
          </Move>
        </Row>
        <img src={logo} alt="" />
        <Row mttop='7%'>
          <Margin value='0 20px 0 0px'>
            <Input vwInput='581px' onChange={(e) => setValue(e.target.value)} placeholder='https://www.web-huudas.mn'>
            </Input>
          </Margin>

          <Button vw='192px' vh='' onClick={Add, send}>Богиносгох</Button>
        </Row>
        <Text>Түүх</Text>
        <Center>
          <Size wv='35'>
            {user && user?.email ? <>
              {data.map(el => {
                if (el.email === user.email) {
                  return <><Size wv='100'>
                    <Row >
                      <Col>
                        <History long={el.url} />
                      </Col>
                      <Col>
                        <History1 short={el.id} />
                      </Col>
                    </Row>
                  </Size>
                  </>
                }
              })}</> :
              <></>}
          </Size>
        </Center>
      </Center>
      <Footer>
        <Pos>
          <Col mt='4%'>
            Made with ♥️ by Nest Academy
            <Opacity opa='30'>
              ©boginoo.io 2020
            </Opacity>
          </Col>
        </Pos>
      </Footer>
    </Desktop >
  )

}

export default LinkPage
