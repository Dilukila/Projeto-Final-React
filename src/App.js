import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
export default function App(){


      //states
        const [Contatos,setContato]= useState({nome:'', telefone:''})
        const [listadeContantos, setlistadeContatos]=useState([])

       //metodos
       function definirNome(event){
       setcontato({...contato, nome: event.target.value})
       }
       function definirTelefone(event){
        setcontato({...contato, telefone: event.target.value})
       }
        
        function adicionarContato(){
            setlistadecontatos([...listadeContantos, contato])
            console.table(listadeContatos)
        }

        return (

          <>
          
            <h1>Lista de Contatos</h1>
              <div>
                  <label>Nome:</label><br />
                  <input type="test" onchange={definirNome} value = {contato.nome} />
              </div>
              <div>
                  <label>Nome:</label><br />
                  <input type="test" onchange={definirTelefone} value = {contato.telefone} />
              </div>
              
              <button onclick={adicionarContato}> Adicionar Contato</button>
      
          </>

        )
        

}

 
  
        



