import React from 'react'
import Card from "./Card"

import {team }from "../../src/utils/data"

function CardList() {
  return (
            <>
                {
                    team.map((items, idx)=>(
                        <Card key={idx} items={items}/>
                    ))
                }
            </>
  )
}

export default CardList