import React from 'react'

import { ICON } from 'presentation/assets/icons/icon'

import styles from 'presentation/components/pages/technologies-used/components/icon.module.scss'

export function IconWithTitle({ title, iconName, tooltip }) {
  const IconComponent = ICON[iconName]

  if (!IconComponent) {
    return null
  }

  return (
    <div data-tooltip={tooltip} className={styles.container}>
      <IconComponent className={styles.icon} />
      <p className={styles.title_icon}>{title}</p>
    </div>
  )
}
