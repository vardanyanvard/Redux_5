import React from "react"
import { IUser } from "./types"
import { useAppDispatch } from "../../app/hooks"
import { deleteUser } from "./user.slice"

interface IProps {
  user: IUser
}

export const UserItem: React.FC<IProps> = ({ user }) => {
  const dispatch = useAppDispatch()

  const handleDelete = (user: IUser) => {
    dispatch(deleteUser(user))
  }
  return (
    <>
      <div className="userItemContent">
        <p>{user.name}</p>
        <p>{user.surname}</p>
        <p>{user.age}</p>
        <button onClick={() => handleDelete(user)}>Delete</button>
      </div>
    </>
  )
}
