import { type FC, useEffect } from 'react'
import { type ReducerList, useAppDispatch, UseDynamicLoadModule } from 'shared/lib'
import {
  getErrorSelector,
  getLoadingSelector, getProfileData,
  getProfileDataSelector,
  ProfileCard,
  profileReducer
} from 'entities/Profile'
import { useSelector } from 'react-redux'

const initialReducer: ReducerList = { profile: profileReducer }

const ProfilePage: FC = () => {
  const dispatch = useAppDispatch()
  const data = useSelector(getProfileDataSelector)
  const isLoading = useSelector(getLoadingSelector)
  const error = useSelector(getErrorSelector)

  useEffect(() => {
    void dispatch(getProfileData())
  }, [dispatch])

  UseDynamicLoadModule({ reducers: initialReducer })

  return (
      <div>
          <ProfileCard
              error={error}
              isLoading={isLoading}
              data={data}
          />
      </div>
  )
}

export default ProfilePage
