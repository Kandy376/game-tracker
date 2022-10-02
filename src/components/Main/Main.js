import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Card from './Card'


function Main() {
  useEffect(()=> {
    fetch('https://fortnite-api.com/v2/stats/br/v2?name=Dat_Tree1234',  {headers: {
      'Content-Type': 'application/json',
      "x-api-key": "6276bf73-8049-4793-bb0c-1a77102bf7bc"
    }},).then((response) => response.json()).then((data) => setStats(data));
  }, [])

  const [stats, setStats] = useState({})

  return (
    <>
      <Card stats = {stats}/>
    </>
  )
}



export default Main