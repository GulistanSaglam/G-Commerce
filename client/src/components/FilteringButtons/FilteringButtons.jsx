import React from 'react'
import style from './filteringButtons.module.css'

const FilteringButtons = () => {
  return (
    <div className={style.container}>
       <button>ALL</button>
       <button>JUMPSUIT</button>
       <button>PARTY</button>
       <button>PRINTED</button>
       <button>SHIRT</button>
       <button>SATIN</button>
       <button>WHITE</button>
    </div>
  )
}

export default FilteringButtons