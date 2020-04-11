import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'

import BomDia from './componentes/BomDia'

import Saudacao from './componentes/Saudacao'

import Mult from './componentes/Multiplos'

ReactDOM.render(
    <div>      
        <Saudacao tipo="Bom dia" nome="João"/>
    </div>,
    document.getElementById('root'))

