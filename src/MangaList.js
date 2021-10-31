import React from 'react'
import './MangaList.css'
import sololeveling from './Pictures/sololeveling.jpg'
import { Link } from 'react-router-dom'

function MangaList() {
    return (
    <div className='body'>
        <div className='manga__container'>
            <div className='manga'>
                <Link to='/Solo-Leveling'><img className='manga__icon'
                src={sololeveling}
                alt=''
                /></Link> <Link to='/Solo-Leveling'><h2>Solo Leveling</h2></Link>
                <h6 className='manga__tags'>Shounen, Action, Adventure, Fantasy, Webtoon</h6>
            </div>
        </div>
    </div>
    )
}

export default MangaList
