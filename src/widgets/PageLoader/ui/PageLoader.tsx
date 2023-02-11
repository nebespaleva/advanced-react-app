import { type FC } from 'react'
import { classNames } from 'shared/lib'
import styles from './PageLoader.module.scss'
import { Loader } from 'shared/ui'

interface PageLoaderType {
  className?: string
}

export const PageLoader: FC<PageLoaderType> = ({ className }) => {
  return (
      <div className={classNames(styles.pageLoader, {}, [className])}>
          <Loader />
      </div>
  )
}
