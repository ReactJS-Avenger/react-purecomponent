import React from 'react';
import NormalComponent from './PureComponent/NormalComponent';
import PureComponentjs from './PureComponent/PureComponent'


const App=()=>{
    return(
        <div>
            <NormalComponent/>
            <hr/>
            <PureComponentjs/>
        </div>
    )
}
export default App;