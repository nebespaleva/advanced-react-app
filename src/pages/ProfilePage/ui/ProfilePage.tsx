import { useTranslation } from 'react-i18next'
import { type FC } from 'react'
import { type ReducerList, UseDynamicLoadModule } from 'shared/lib'
import { profileReducer } from 'entities/Profile'

const initialReducer: ReducerList = { profile: profileReducer }

const ProfilePage: FC = () => {
  const { t } = useTranslation('profile')

  UseDynamicLoadModule({ reducers: initialReducer })

  return (
      <div>
          {t('Профайл')}
      </div>
  )
}

export default ProfilePage
