import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setSelectedGame } from 'redux/slices/commonSlice'
import { Users } from 'components/icons'

const GameItem = (props) => {
    const router = useRouter()
    const dispatch = useDispatch()

    const gotoGameDetail = () => {
        if (props.state == 1) {
            router.push('/games/item')
            return
        }
        location.href = '/games/gamefeed/' + props.id + '?type=' + props.type
    }

    return (
        <div
            className=" flex flex-col border-[1.2px] border-[#272829] rounded-[20px] p-[2px]
                        relative cursor-pointer hover:border-primary"
            onClick={gotoGameDetail}
        >
            <div className=" rounded-[15px] overflow-hidden lg:w-[242px] md:w-[242px] sm:w-[143px] xs:w-[143px]">
                <Image
                    src={props.itemImage}
                    layout="responsive"
                    className="rounded-2xl"
                    width={242}
                    height={232}
                    alt="room_image"
                />
            </div>
            <div className="flex md:flex-row xs:flex-col-reverse justify-between gap-[6px] mt-[20px]">
                <div className="font-[500] text-[14px] ml-[12px] text-center">
                    <div className="font-['Outfit'] text-[#929298]">
                        {props.title}
                    </div>
                </div>
                {/* <div className='flex text-white px-3'>
          <div className='text-[#29B080] pr-1'>
            <Users />
          </div>
          {Math.floor(Math.random() * 20)}
        </div> */}
            </div>
        </div>
    )
}

export default GameItem
