import React, { useState } from 'react'

import styles from 'presentation/components/pages/blog/components/navbar-blog.module.scss'
import { ICON } from 'presentation/assets/icons/icon'

export function NavbarBlog({ themes, onSearch }) {
  const [selectedTheme, setSelectedTheme] = useState('')

  const handleThemeClick = (theme) => {
    setSelectedTheme(theme === selectedTheme ? '' : theme)
    onSearch(theme === selectedTheme ? '' : theme)
  }

  const handleSearchChange = (event) => {
    const query = event.target.value
    onSearch(query)
  }

  return (
    <nav className={`${styles.container} panel`} data-color="white">
      <div className={styles.box_navbar}>
        <ul className={styles.list_themes}>
          <li
            className={`${styles.text} ${
              selectedTheme === '' ? styles.active : ''
            }`}
            onClick={() => handleThemeClick('')}
          >
            Todos
          </li>
          {themes.map((theme, index) => (
            <li
              className={`${styles.text} ${
                theme === selectedTheme ? styles.active : ''
              }`}
              key={index}
              onClick={() => handleThemeClick(theme)}
            >
              {theme}
            </li>
          ))}
        </ul>

        <div className={styles.search_container}>
          <input
            className={styles.btn}
            type="text"
            placeholder="Pesquisar"
            onChange={handleSearchChange}
          />
          <div className={styles.searchIcon}>
            <ICON.IoIosSearch />
          </div>
        </div>
      </div>
    </nav>
  )
}
