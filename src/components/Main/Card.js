import React from 'react'
import logo from '../../logo.svg'

const Card = ({stats})=> {
console.log("stats: ",  stats )

  // const {title} = props

  return (
    <div>
      <h1>{"Stats"}</h1>
      <div>
        <h2>Overall</h2>
        {stats.hasOwnProperty("data") && (<div>
          <p>{stats.data.stats.all.overall.wins} WINS</p>
          <p>15 WIN %</p>
          <p>3 K/D</p>
          <p>2 KPM</p>
          <p>15353 MATCHES</p>
          <p>10345 KILLS</p>
          <p>7023 DEATHS</p>
        </div>)}
      </div>

      <div>
        
        <div>
          <h2>SOLO</h2>

          <p>1273 WINS</p>
          <p>15 WIN %</p>
          <p>3 K/D</p>
          <p>2 KPM</p>
          <p>15353 MATCHES</p>
          <p>10345 KILLS</p>
          <p>7023 DEATHS</p>

        </div>

        <div>
          <h2>DUO</h2>

          <p>1273 WINS</p>
          <p>15 WIN %</p>
          <p>3 K/D</p>
          <p>2 KPM</p>
          <p>15353 MATCHES</p>
          <p>10345 KILLS</p>
          <p>7023 DEATHS</p>

        </div>
          
        <div>
          <h2>SQUADS</h2>

          <p>1273 WINS</p>
          <p>15 WIN %</p>
          <p>3 K/D</p>
          <p>2 KPM</p>
          <p>15353 MATCHES</p>
          <p>10345 KILLS</p>
          <p>7023 DEATHS</p>
          
        </div>

      </div>
      
    </div>
  )
}

// use tailwind to make card design, use Navbar as reference.

export default Card