import React from 'react'

export default function navbar() {
  return (
  <div>
    <nav className="navigation">
      <ul>
        <li><a href="/">Accueil</a></li> 
        <li><a href="/sport">Sport</a></li>
        <li><a href="/cinema">Cinema</a></li>
        <li><a href="/musique">Musique</a></li>
        <li><a href="/formation">Formation</a></li>
      </ul>
    </nav>
  </div>
  )
}

