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
import {Link } from 'react-router-dom'
const History1 = ({ long, short }) => {
    const { login, signUp, signOut, user, userCorrect } = useAuthContext()

    const { deleteDoc } = useCollection('allUrls')

    const [copyText, setCopyText] = useState(false);
    return <Row>
        <Size wv='47'>
            <JusCenter>
                <Margin value='30px 0 0 0px'>
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
                        <CopyToClipboard onCopy={() => setCopyText(true)} text={'shortly.io/' + `${short}`}>
                            <FontsizeInp font='22' style={{ cursor: 'pointer' }}>
                                        shortly.io/{short}
                            </FontsizeInp>
                        </CopyToClipboard>
                    </Margin>
                </Margin>

            </JusCenter>
        </Size>
    </Row>;
};

export default History1;
