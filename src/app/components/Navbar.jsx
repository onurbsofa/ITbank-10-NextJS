


const Navbar = () => {
  
  return (
    <>
      <nav className="navBar">
        <div className="itbankLogo">
          <button className="itbankboton">
              <h2 className="navBarLogo">ITBANK</h2>
          </button>
        </div>
        <div>
          <ul className="navBarList">
            <li className="itemList">Inicio</li>
            <li>
              
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="iconoUsuario">
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                </svg>
              
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar