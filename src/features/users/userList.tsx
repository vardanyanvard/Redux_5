import React, { useEffect } from "react"
import { getAllUser, users } from "./user.slice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { UserItem } from "./userItem"

export const UserList = () => {
  const dispatch = useAppDispatch()
  const userList = useAppSelector(users)

  useEffect(() => {
    dispatch(getAllUser())
  }, [])

  return (
    <>
      <div className="userListContent">
        <h1>UserList</h1>
        <div className="userList">
          {userList.map(user => (
            <UserItem user={user} key={user.id} />
          ))}
        </div>
      </div>
    </>
  )
}
