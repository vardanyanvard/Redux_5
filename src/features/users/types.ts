export interface IUser {
  id: string
  name: string
  surname: string
  age: number
}

export interface IState {
  user: IUser[]
}
