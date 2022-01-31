import React from 'react';
import {
    Button, Text, Desktop, Row
    , Login, Center, Input, Col,
    Footer, Opacity, Pos, Margin, Fontsize, JusCenter, FontsizeInp, Size
} from '../styled-component/button'
import { v4 as uuid } from "uuid";

const History = ({ long, short }) => {
    const unique_id = uuid();
    const random = unique_id.slice(0, 6);
    return <Row>
        <Size wv='47'>
            <JusCenter>
                <Margin value='30px 0px 0px 0px'>
                    <FontsizeInp font='20'>
                        <Opacity opa='50'>
                            Өгөгдсөнхолбоос:
                        </Opacity>
                    </FontsizeInp>
                    <Margin value='8px 0 0 0px'>
                            <FontsizeInp font='22'>
                                {long}
                            </FontsizeInp>
                    </Margin>
                </Margin>

            </JusCenter>
        </Size>
    </Row>;
};

export default History;
