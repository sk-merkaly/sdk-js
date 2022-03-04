import {
  CreateUserValidator,
  FindUserValidator,
  IdUserValidator,
  UpdateUserValidator
} from '@merkaly/api/src/account/users/user.validator'
import { plainToInstance } from 'class-transformer'
import MerkalySDK from '../../sdk'
import UserReference from './user.reference'

export class User {
  public find (params?: FindUserValidator) {
    return MerkalySDK.$axios.get<UserReference[]>('/account/users/', { params })
      .then(users => users.map(user => plainToInstance(UserReference, user)))
  }

  public read (id: IdUserValidator) {
    return MerkalySDK.$axios.get<UserReference>('/account/users/' + id)
      .then(user => plainToInstance(UserReference, user))
  }

  public create (payload: CreateUserValidator) {
    return MerkalySDK.$axios.post<UserReference>('/account/users/', payload)
      .then(user => plainToInstance(UserReference, user))
  }

  public update (id: IdUserValidator, payload: UpdateUserValidator) {
    return MerkalySDK.$axios.patch<UserReference>('/account/users/' + id, payload)
      .then(user => plainToInstance(UserReference, user))
  }

  public remove (id: IdUserValidator) {
    return MerkalySDK.$axios.delete<void>('/account/users/' + id)
  }
}
