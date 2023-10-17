import React, { useEffect, useState } from 'react'

const Table = () => {
  const [currentPlayer, setCurrentPlayer] = useState('O')
  const [win, setWin] = useState(false)
  const [draw, setDraw] = useState(false)

  const handleClick = (e) => {
    const text = e.target.innerText

    if (!text && !win && !draw) {
      e.target.innerText = currentPlayer
      if (currentPlayer == 'X') {
        e.target.style.backgroundColor = 'rgb(210, 185, 250)'
        setCurrentPlayer('O')
      } else {
        e.target.style.backgroundColor = 'rgb(120, 90, 140)'
        setCurrentPlayer('X')
      }
    }

    // pe linii si coloane

    for (let i = 1; i <= 3; i++) {
      const firstElement1 = document.getElementsByClassName(
        `table-square row-${i} col-${1}`
      )[0]
      const middleElement1 = document.getElementsByClassName(
        `table-square row-${i} col-${2}`
      )[0]
      const lastElement1 = document.getElementsByClassName(
        `table-square row-${i} col-${3}`
      )[0]

      const firstElement2 = document.getElementsByClassName(
        `table-square row-${1} col-${i}`
      )[0]
      const middleElement2 = document.getElementsByClassName(
        `table-square row-${2} col-${i}`
      )[0]
      const lastElement2 = document.getElementsByClassName(
        `table-square row-${3} col-${i}`
      )[0]

      if (
        firstElement1.innerText === middleElement1.innerText &&
        middleElement1.innerText === lastElement1.innerText &&
        firstElement1.innerText
      ) {
        firstElement1.style.backgroundColor = 'rgb(95, 207, 95)'
        middleElement1.style.backgroundColor = 'rgb(95, 207, 95)'
        lastElement1.style.backgroundColor = 'rgb(95, 207, 95)'
        setWin(true)
      }

      if (
        firstElement2.innerText === middleElement2.innerText &&
        middleElement2.innerText === lastElement2.innerText &&
        firstElement2.innerText
      ) {
        firstElement2.style.backgroundColor = 'rgb(95, 207, 95)'
        middleElement2.style.backgroundColor = 'rgb(95, 207, 95)'
        lastElement2.style.backgroundColor = 'rgb(95, 207, 95)'
        setWin(true)
      }
    }

    // pe diagonale
    // diagonala principala
    const firstDiagElement1 = document.getElementsByClassName(
      `table-square row-${1} col-${1}`
    )[0]

    const firstDiagElement2 = document.getElementsByClassName(
      `table-square row-${2} col-${2}`
    )[0]

    const firstDiagElement3 = document.getElementsByClassName(
      `table-square row-${3} col-${3}`
    )[0]

    if (
      firstDiagElement1.innerText === firstDiagElement2.innerText &&
      firstDiagElement2.innerText === firstDiagElement3.innerText &&
      firstDiagElement1.innerText
    ) {
      firstDiagElement1.style.backgroundColor = 'rgb(95, 207, 95)'
      firstDiagElement2.style.backgroundColor = 'rgb(95, 207, 95)'
      firstDiagElement3.style.backgroundColor = 'rgb(95, 207, 95)'
      setWin(true)
    }

    // diagonala secundara
    const secDiagElement1 = document.getElementsByClassName(
      `table-square row-${1} col-${3}`
    )[0]

    const secDiagElement3 = document.getElementsByClassName(
      `table-square row-${3} col-${1}`
    )[0]

    if (
      secDiagElement1.innerText === secDiagElement3.innerText &&
      secDiagElement3.innerText === firstDiagElement2.innerText &&
      secDiagElement1.innerText
    ) {
      secDiagElement1.style.backgroundColor = 'rgb(95, 207, 95)'
      firstDiagElement2.style.backgroundColor = 'rgb(95, 207, 95)'
      secDiagElement3.style.backgroundColor = 'rgb(95, 207, 95)'
      setWin(true)
    }
  }

  useEffect(() => {
    if (!win) {
      let all = true
      for (let i = 1; i <= 3; i++)
        for (let j = 1; j <= 3; j++) {
          const currentElement = document.getElementsByClassName(
            `table-square row-${i} col-${j}`
          )[0]
          if (!currentElement.innerText) {
            all = false
            break
          }
        }

      if (all) setDraw(true)
    }
  })

  return (
    <section className='table-section'>
      {win && (
        <h1>{currentPlayer === 'O' ? 'Player 1 wins' : 'Player 2 wins'}</h1>
      )}
      {draw && <h1>Draw</h1>}
      <section className='table'>
        <div onClick={handleClick} className='table-square row-1 col-1'></div>
        <div onClick={handleClick} className='table-square row-1 col-2'></div>
        <div onClick={handleClick} className='table-square row-1 col-3'></div>
        <div onClick={handleClick} className='table-square row-2 col-1'></div>
        <div onClick={handleClick} className='table-square row-2 col-2'></div>
        <div onClick={handleClick} className='table-square row-2 col-3'></div>
        <div onClick={handleClick} className='table-square row-3 col-1'></div>
        <div onClick={handleClick} className='table-square row-3 col-2'></div>
        <div onClick={handleClick} className='table-square row-3 col-3'></div>
      </section>
      {(win || draw) && <button className='replay'>Replay</button>}
    </section>
  )
}

export default Table
