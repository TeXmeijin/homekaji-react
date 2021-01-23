import React from 'react'

type Props = {housework: {name: string, point: number, id: string}}

export const HouseworkListItem = ({housework}: Props) => {
  return (
    <li
      className="flex items-center justify-between py-6 px-6 shadow rounded-2xl"
      data-id={housework.id}
    >
      <span className="text-xl font-bold">
        {housework.name}
      </span>
      <span className="text-3xl text-gray-700"> {housework.point}pt </span>
    </li>
  )
}
