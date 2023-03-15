import React from 'react'

type SubTitleType = {
    title: string
    styles?: string
}

const SubTitle = (props: SubTitleType) => {
    return (
        <div
            className={`text-white text-[25px] font-medium mb-4 ${props.styles}`}
        >
            {props.title}
        </div>
    )
}

export default SubTitle
