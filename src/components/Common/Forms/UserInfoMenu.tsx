import React, { useEffect } from "react"
import { useSelector, RootStateOrAny, useDispatch } from "react-redux"
import Link from "next/link"
import { UpArrow, DownArrow, SettingsIcon, LogOutIcon } from "components/icons"
import DummyAvatarSmall from "../Layout/DummyAvatarSmall"
import { setValue } from "utils"
import Image from "next/image"
import { logout } from 'redux/slices/authSlice';
import { useWallet } from "@solana/wallet-adapter-react"

const MenuItem = ({ children }) => {
  return (
    <div className="rounded-[10px] hover:bg-[#1d1d1f] bg-transparent px-[10px] py-[8px] w-full flex flex-row py-[6px] font-500 text-[#f3f3f3] items-center group-hover:flex hidden hover:text-primary">
      {children}
    </div>
  )
}

const UserInfoMenu = (props) => {
  const dispatch = useDispatch();
  const { disconnect } = useWallet();
  const { profileData, alarm } = useSelector((state: RootStateOrAny) => ({
    profileData: state.profile.data,
    alarm: state.profile.alarm
  }));

  const logoutFunc = async () => {
    await disconnect();
    dispatch(logout());
  }

  return (
    <div className="select-none flex flex-row items-center border-l-semiSplitter border-l-[1px] h-full ">
      <div className="custom-2xl:mx-[20px] xl:mx-[10px] lg:mx-[20px] md:mx-[20px] xs:mx-[20px]
                            cursor-pointer relative">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={alarm != 0 ? "#29B080": "#3F3F43"} strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        {alarm != 0 && (
              <div className='absolute top-[-2px] right-[-4px] rounded-full py-[2px] px-[4px] bg-[#29B080] text-[11px] leading-[11px]'>{alarm}</div>
          )}
      </div>
      <Link href={`/${profileData.username}/profile`}>
        <a>
          {
            profileData.profileImage && profileData.profileImage.link ? (
              <div className="min-h-[40px]">
                <img src={profileData.profileImage.link} width={40} style={{height: "40px"}} className="rounded-xl flex items-center" />
              </div>
            ) : (
              <DummyAvatarSmall />
            )
          }
        </a>
      </Link>
      <div className="group relative ml-[14px] py-[15px] text-[#929298] text-[14px] font-500 cursor-pointer flex items-center" onMouseEnter={props.onEnter} onMouseLeave={props.onLeave}>
        {setValue(profileData.username)}
        <div className="ml-[8px]">
          {props.openState ? <UpArrow /> : <DownArrow />}
        </div>

        <div className={`duration-300 px-[12px] group-hover:py-[8px] p-[0px] flex flex-col items-start absolute top-[50px] right-[0px] opacity-0  h-[0px] w-[150%] bg-[#131314]
                            border-[#1d1f1f] border-[2px] rounded-[12px] text-white z-[1000]  group-hover:h-[88px] group-hover:opacity-100 overflow-hidden`} >
          <MenuItem>
            <div className="mr-[14px]">
              <SettingsIcon />
            </div>
            Settings
          </MenuItem>
          <MenuItem>
            <div onClick={logoutFunc} className="flex">
              <div className="mr-[14px]">
                <LogOutIcon />
              </div>
              Log out
            </div>
          </MenuItem>
        </div>

      </div>
    </div>
  )
}

export default UserInfoMenu