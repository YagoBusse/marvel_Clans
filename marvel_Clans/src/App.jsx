import { useState } from 'react'
import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario'
import Time from './componentes/Time'
import RodaPe from './componentes/RodaPe'

function App() {

  const times =[
    {
      nome: 'Equilibrado',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Ataque total',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Cura muito',
      corPrimaria: '#87C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Tanka tudo',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    }
  ]

 const [jogadores, setJogadores] = useState([])


  const aoJogadorAdicionado = (jogador) => {
    console.log(jogador)
    setJogadores([...jogadores, jogador])
  }

  return (
    <div className='App'>
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoJogadorCadastrado={jogador => aoJogadorAdicionado(jogador)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        jogadores={jogadores.filter(jogador => jogador.time == time.nome)}
        />)}

        <RodaPe/>
      
    </div>
      
    
  )
}

export default App
