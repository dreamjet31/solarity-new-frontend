import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'
import { startLoadingApp, stopLoadingApp } from 'redux/slices/commonSlice'

type HeaderMenuItemProps = {
    title: string
    link: string
    active: boolean
}

const HeaderMenuItem = (props: HeaderMenuItemProps) => {
    const router = useRouter()
    const dispatch = useDispatch()

    const gotoLocation = (link) => {
        dispatch(startLoadingApp())
        router.push('/' + link).then((res) => {
            dispatch(stopLoadingApp())
        })
    }

    return (
        <div
            className={`flex flex-col 
                        sm:mr-5 custom-2xl:mr-10 xl:mr-5 lg:mr-10 font-500 text-[16px] justify-center items-center ${
                            props.active ? 'text-[#29B080]' : 'text-[#929298]'
                        } h-full cursor-pointer hover:text-[#29B080] select-none`}
        >
            <div
                className={`absolute top-[0] ${
                    props.active ? 'block' : 'hidden'
                }`}
            >
                <svg
                    width="56"
                    height="6"
                    viewBox="0 0 56 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M56 0L41.1003 4.1967C36.8523 5.39322 32.4599 6 28.0466 6C23.6593 6 19.2927 5.40037 15.0679 4.21776L0 -2.44784e-06L56 0Z"
                        fill="#29B080"
                    />
                </svg>
            </div>
            {
                <div
                    className="whitespace-nowrap"
                    onClick={() => gotoLocation(props.link)}
                >
                    {props.title}
                </div>
            }
        </div>
    )
}

export default HeaderMenuItem
