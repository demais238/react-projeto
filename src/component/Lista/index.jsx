export const Lista =({key,nome,usuario,descricao,inclusao, palavra_chave}) => {
    return(
        <div className="listas">
         <h1 className="titulo"> {nome}</h1>
         <p className="usuario"> {usuario}</p>
         <p className="descricao"> {descricao}</p>
         <p className="inclusao"> {inclusao}</p>
         <p className="palavra"> {palavra_chave}</p>
        </div>
    )
}