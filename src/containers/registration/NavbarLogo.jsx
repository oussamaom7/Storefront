import React from 'react'
import Logonavbar from "../../assets/Logonabvar.png"
export default function NavbarLogo() {
  return (
<nav class="flex items-center justify-center py-4 bg-gray-900 text-white">
  <div class="text-center">
    <img src={Logonavbar} alt="Logo" class="h-10 mx-auto" />
  </div>
</nav>

  )
}
