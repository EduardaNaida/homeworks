import React from 'react'
import style from '../c9-SuperPagination/SuperPagination.module.css'
import downIcons from '../icons/down-arrow-svgrepo-com.svg'
import upIcons from '../icons/up-arrow-svgrepo-com.svg'
import upDown from '../icons/up-and-down-arrow.svg'

// добавить в проект иконки и импортировать
const downIcon = downIcons
const upIcon = upIcons
const noneIcon = upDown

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {

    const sorted = sort == up ? '' : sort === down ? up : down
    return sorted
    // if (sort == up) {
    //     return ''
    // } else if (sort == down){
    //     return up
    // } else {
    //     return down
    // }

}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}

            onClick={onChangeCallback}
        >
            <img
                className={style.icons}
                id={id + '-icon-' + sort}
                src={icon}
            />

        </span>
    )
}

export default SuperSort
