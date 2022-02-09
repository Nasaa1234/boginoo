import { set } from 'lodash'
import React, { useState } from 'react'

const Typical = () => {
    const firstWord = 'RANDOM CHAT'
    const secondWord = 'УЙДАЖ ҮХЛЭЭ ЮУ?'
    const firstWord1 = firstWord.split('')
    const array = []
    const [p, setp] = useState(0)
    setInterval(() => {
        if (p <= firstWord1.length) {
            setp(p + 1)
        }
    }, 500)

    return (
        <div>
            {firstWord1[0]}
            {firstWord1[1]}
            {firstWord1[2]}
            {firstWord1[3]}
            {firstWord1[4]}
            {firstWord1[5]}
            {firstWord1[6]}
            {firstWord1[7]}
            {firstWord1[8]}
            {firstWord1[9]}
            {firstWord1[10]}
        </div>
    )
}

export default Typical