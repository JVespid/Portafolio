import React from 'react'

const Pagination = () => {
  let i = 10;  

  const X1 = (iterador) => {

    const pages = [];
    for (let i = 1; i <= 10 ; i++) {
        pages.push(
            <td className={"td" + i + iterador} >
                <input type="text" placeholder="Contenido" className={"xy" + i + iterador} />
            </td>
        )

    }
    return pages
}
  return (
    <div>{X1(i)}</div>
  )
}

export default Pagination