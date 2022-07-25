// created for linking the pages

import React from 'react'
import {Link} from 'react-router-dom'

const LINKS = [ // array of links, so that we need not repeart ourselfs by providing tags
    {to : '/', text: 'Home'}, // every element in the arrays is an object which contains 2 things.
    {to : '/starred', text: 'Starred'},
];

const Navs = () => {
  return (
    <div>
        <ul>
            {
                //LINKS.map(item => <li key={item.to}> <Link to= {item.to}> {item.text} </Link></li>) /* one liner for multiple pages*/
                LINKS.map(item => (
                    <li key={item.to}> 
                        <Link to= {item.to}> {item.text} </Link>
                    </li> /* structured one liner*/
                ))
            }

            {/* <li><Link to= "/starred"> Go to starred page</Link></li> {for one specific page} */}
        </ul>
    </div>
  )
}

export default Navs