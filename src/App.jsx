 import React, {Component, useState} from "react";
 import listadeContantos from "./Components/ListadeContatos";
 import { v4 as uuidv4 } from 'uuid';
 import contato from "./Components/Listadecontatos"
 import contato from "./contato";
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
         // validação dos campos
         if(contato.nome  === "" || Contatos.telefone==="") return


         // adicionar contato na lista
            setlistadecontatos([...listadeContantos, contato])
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

               {/*<ListadeContatos listadecontatos={listadecontatos}/>*/}

               <ul>

                     {listadeContatos.map(ct=>{
                
                     return <Contato nome={ct.nome}/>
                
                     })}

               </ul>
               
          
          </>

        )
        

}