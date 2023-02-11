import { type FC } from 'react'
import { classNames } from 'shared/lib'
import './Loader.scss'

interface LoaderType {
  className?: string
}

export const Loader: FC<LoaderType> = ({ className }) => {
  return (
      <div className={classNames('lds-ripple', {}, [className])}>
          <div></div><div></div>
      </div>
  )
}
