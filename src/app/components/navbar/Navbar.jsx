'use client'

import Link from "next/link"
import styles from './Navbar.module.css'
import Menu from "./Menu"

const Navbar = () => {  
  return (
    <>
      <nav className={styles.navBar}>
        <div>
          <Menu/>
        </div>

        <div className={styles.itbankLogo}>
          <Link href="/" className={styles.itbankboton}>
              <h2 className={styles.navBarLogo}>ITBANK</h2>
          </Link>
        </div>   

        <div>
          <ul className={styles.navBarList}>
            <li className={styles.navBarListElem}>
              {/*dependiendo de si el usuario esta logueado o no, se lo manda a login o al Inicio*/}
              <a href="">Inicio</a>
            </li>            
            <li>
              <Link href="/login">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className={styles.iconoUsuario}>
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                </svg>
              </Link>
            </li>            
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar