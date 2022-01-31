// import { v4 as uuid } from "uuid";
// import React, { useState } from 'react';

// const App1 = () => {

//     const [value, setValue] = useState()
//     const [history, setHistory] = useState([])
//     const [short, setShort] = useState([])
//     const unique_id = uuid();
//     const random = unique_id.slice(0, 6);
//     const add = () => {
//         setHistory([...history, value])
//         setShort([...short, random])
//     }
//     return <div>
//         <input type="text" onChange={(e) => setValue(e.target.value)} />
//         <button onClick={add}>add</button><br />
//         <div className="" style={{ display: 'flex', flexDirection: 'row' , width:'200px' , justifyContent:'space-around' }}>
//             <div className="" style={{ display: 'flex', flexDirection: 'column' }}>
//                 {history.map(e => {
//                     return (
//                         <div key={e}>
//                             {e}
//                         </div>
//                     )
//                 })}
//             </div>

//             <div className="" style={{ display: 'flex', flexDirection: 'column' }}>
//                 {short.map(e => {
//                     return (
//                         <div key={e}>
//                             {e}
//                         </div>
//                     )
//                 })}
//             </div></div>
//     </div>;
// };


// export default App1;
import React, { useEffect, useState } from 'react';
import { useCollection, useFirebase } from '../firebase';
import { useAuthContext } from '../provider/context';
const Data = () => {
    const { login, signUp, signOut, user, userCorrect } = useAuthContext()
    const { firestore } = useFirebase()
    const [data, setdata] = useState([])
    const { data: urls, createDoc: addUrl } = useCollection(user && user?.uid)

    useEffect(() => {
        if (urls) {
            setdata(urls)
        }
    }, [urls])

    const send = () => {
        addUrl('ert678', { url: 'https://www.google.com/search?q=slice+last+character+javascript&oq=slice+last+cha&aqs=chrome.0.0i512l2j69i57j0i512l2j0i22i30l5.8341j0j7&sourceid=chrome&ie=UTF-8' })
    }
    return <div>
        <button onClick={login}>login</button>
        {data.map(el => {
            return <div>
                shortly.io/{el.id} == {el.url}
            </div>
        })}
        <button onClick={send}>
            cl
        </button>
    </div>;
};

export default Data;
