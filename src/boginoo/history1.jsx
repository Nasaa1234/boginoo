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
;

const History1 = ({ long, short }) => {
    const { login, signUp, signOut, user, userCorrect } = useAuthContext()

    const { deleteDoc } = useCollection('allUrls')

    const [copyText, setCopyText] = useState(false);
    return <Row>
        <Size wv='47'>
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
                            <Link to={`${short}`}>
                                http://localhost:3000/{short}
                            </Link>
                        </FontsizeInp>

                    </Margin>

                </Margin>
                <Margin value='40px -10px 0 50px'>
                    <CopyToClipboard onCopy={() => setCopyText(true)} text={'http://localhost:3000/' + `${short}`}>
                        <div className=""> <img src={copy1} alt="" />хуулах</div>
                    </CopyToClipboard>
                </Margin>
            </JusCenter>
        </Size>
    </Row>;
};

export default History1;
