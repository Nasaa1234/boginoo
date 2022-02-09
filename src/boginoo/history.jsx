import React, { useState } from 'react';
import {
    Button, Text, Desktop, Row
    , Login, Center, Input, Col,
    Footer, Opacity, Pos, Margin, Fontsize, JusCenter, FontsizeInp, Size
} from '../styled-component/button'
import { v4 as uuid } from "uuid";
import copy from "copy-to-clipboard";
import { CopyToClipboard } from 'react-copy-to-clipboard'
import symbol from './x.svg'
import { useCollection } from './firebase';
import { useAuthContext } from './provider/context';
import { Link } from 'react-router-dom'
import copy1 from './copy.svg';
const History = ({ long, short }) => {
    const unique_id = uuid();
    const random = unique_id.slice(0, 6);
    const { deleteDoc } = useCollection('allUrls')

    const { login, signUp, signOut, user, userCorrect } = useAuthContext()
    const [copyText, setCopyText] = useState(false);
    return <Size wv='100'>
        <Row>
            <Margin value='30px 0px 0px 0px'>
                <FontsizeInp font='20'>
                    <Opacity opa='50'>
                        Өгөгдсөнхолбоос:
                    </Opacity>
                </FontsizeInp>
                <Margin value='8px 0 0 0px'>
                    <FontsizeInp font='22'>
                        <Size >
                            {long}
                        </Size>
                    </FontsizeInp>
                </Margin>
            </Margin>
            <Row>
                <JusCenter>
                    <Margin value='30px 0px 0 0px'>
                        <FontsizeInp font='20'>
                            <Row>
                                <Opacity opa='50' style={{ width: '100%' }}>
                                    Богинохолбоос:
                                </Opacity>
                                <Margin value='-20px 0px 0 15px'>
                                    <img src={symbol} alt="" style={{ width: '15px' }} onClick={() => deleteDoc(short)} />
                                </Margin>
                            </Row>
                        </FontsizeInp>
                        <Margin value='8px 0 0 0px'>
                            <FontsizeInp font='22' style={{ cursor: 'pointer' }}>
                                http://localhost:3000/{short}
                            </FontsizeInp>
                        </Margin>
                    </Margin>
                    <Margin value='20px -10px 0 50px'>
                        <CopyToClipboard onCopy={() => setCopyText(true)} text={'http://localhost:3000/' + `${short}`}>
                            <div className=""> <img src={copy1} alt="" />хуулах</div>
                        </CopyToClipboard>
                    </Margin>
                </JusCenter>
            </Row>
        </Row>
    </Size>;
};

export default History;
