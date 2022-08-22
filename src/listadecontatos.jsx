import React from "react"

export default function listadeContantos({listadecontatos}){


        return(
           <>
                <ul>
                    {listadecontatos.map(contato =>{ 

                   return <li>{contato.nome + "" + contato.telefone}</li>
                    }) }  
                </ul>
           </>

        )


}