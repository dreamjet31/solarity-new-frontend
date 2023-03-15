import React from 'react'

type MoreUsersAvatarType = {
    rest: any
    type?: number
}

const MoreUsersAvatar = (props: MoreUsersAvatarType) => {
    return (
        <div
            className={`border-[3px] border-[#131314] ${
                props.type == 2
                    ? 'rounded-[12px] h-[30px] w-[30px] box-content ml-[-10px]'
                    : 'rounded-[18px] h-[40px] w-[40px] box-content ml-[-17px]'
            } relative
                        flex justify-center items-center text-[#28b080] font-[500] text-[12px] cursor-pointer`}
        >
            <div
                className="box-border border-[1.5px] border-[#28b080] border-dashed h-full w-full rounded-[15px]
                            flex justify-center items-center bg-[#162724]"
            >
                + {props.rest}
            </div>
        </div>
    )
}

export default MoreUsersAvatar
