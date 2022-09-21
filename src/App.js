
import './App.css';
import { Component } from 'react';
import {Lista} from './component/Lista'
import {Busca} from './component/Busca'
import {Header} from './component/Header'
import { Footer } from './component/Footer';


class App  extends Component {  
    
 state = {
  busca: '',
  odas: []
 }

componentDidMount(){
  this.carregaODAs();
}

carregaODAs(){
  const {busca} = this.state;
  fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
  .then(response => response.json())
  .then(odas => this.setState({odas}))
}

 buscaODA = (evento) => {
  this.setState({busca: evento.target.value});
  this.carregaODAs();
 }

 render(){
  const {odas} = this.state;

  return(
    <section className='container'>
     
    <Header
    />

     <Busca
        busca = {this.state.busca}
        buscaODA = {this.buscaODA}
       />
      

     <div className='container'>
      
     <p id='numero'> {odas.length} odas</p>

      <div className ='lista'>
          {odas.map(oda => (
           <Lista 
          key = {oda._id}
          nome = {oda.nome}
          usuario = {oda.usuario}
          descricao = {oda.descricao}
          inclusao = {oda.data_inclusao}
          palavra_chave = {oda.palavras_chave}
          />
          ))}
      </div>
     </div>

      <Footer
      />
    
    </section>
  )
 }
}


export default App;
