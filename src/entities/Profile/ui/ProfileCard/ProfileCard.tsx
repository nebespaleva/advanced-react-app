import { type FC } from 'react'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import styles from './ProfileCard.module.scss'
import { Input, Loader, Text } from 'shared/ui'
import { type Profile } from '../../model/types/Profile'

interface ProfileCardType {
  className?: string
  data?: Profile
  isLoading: boolean
  error: string
}

export const ProfileCard: FC<ProfileCardType> = ({ className, data, isLoading, error }) => {
  const { t } = useTranslation('profile')

  const handleChangeDummy = (): void => {}

  if (isLoading) return <Loader />

  return (
      <div className={classNames(styles.profileCard, {}, [className])}>
          <Text title={t('Профайл')} />
          <div className={styles.profileContainer}>
              <Input value={data?.firstName} onChange={handleChangeDummy} placeholder={t('имя')} />
              <Input value={data?.lastName} onChange={handleChangeDummy} placeholder={t('фамилия')} />
              <Input value={data?.age.toString()} onChange={handleChangeDummy} placeholder={t('возраст')} />
              <Input value={data?.country} onChange={handleChangeDummy} placeholder={t('страна')} />
              <Input value={data?.city} onChange={handleChangeDummy} placeholder={t('город')} />
              <Input value={data?.position} onChange={handleChangeDummy} placeholder={t('Позиция')} />
              <Input value={data?.currency} onChange={handleChangeDummy} placeholder={t('Валюта')} />
          </div>
      </div>
  )
}
