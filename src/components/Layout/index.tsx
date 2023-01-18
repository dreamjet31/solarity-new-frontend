import React, { useEffect, useState } from 'react'

import Sidebar from './Sidebar'
import ChatSidebar from './ChatSidebar'
import InviteFriend from './InviteFriend'
import Header from './Header'
import MobileTopBar from "./MobileTopBar"
import MobileMenu from "./MobileMenu"
import MobileNavbar from "./MobileNavbar"
import { checkBrowser, eqArraySets } from 'utils'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import GameModal from 'components/Community/GameModal'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { setGameModalVisibility, setIsMobile } from 'redux/slices/commonSlice'
import { setFriends, setName, setOnline, setTypingState, setUserMsg } from 'redux/slices/chatSlice'
import ACTIONS from 'config/actions'
import CONSTANT from 'config/constant'

const Layout = ({ children, banner, onClick, sidebarToggler, searchString, setSearchString }: {
    children: any,
    banner?: any,
    onClick: Function,
    sidebarToggler: boolean,
    searchString?: string;
    setSearchString?: Function;
}) => {
    const dispatch = useDispatch();
    const { chatSidebarVisibility, members, typingMembers, isMobile, mobileGameModalVisibility } = useSelector((state: RootStateOrAny) => ({
        chatSidebarVisibility: state.chat.chatSidebarVisibility,
        members: state.chat.members,
        typingMembers: state.chat.typingMembers,
        isMobile: state.common.isMobile,
        mobileGameModalVisibility: state.common.mobileGameModalVisibility,
    }))

    const [mobileMenuToggler, setMobileMenuToggler] = useState(false)
    const [isChatPanel, setIsChatPanel] = useState(true);
    const wallet = useWallet();
    useEffect(() => {
        dispatch(setIsMobile(checkBrowser()))
    }, [])


    useEffect(() => {
        (window as any).members = members;
        (window as any).typingMembers = typingMembers;
    }, [members, typingMembers])

    useEffect(() => {
        if (localStorage.getItem("name")) {
        dispatch(setName(localStorage.getItem("name")));
        }
        initSocket();
    }, [])

    const initSocket = () => {
        // This part is main for socket.
        if (!(window as any).socket) {
        setTimeout(() => {
            initSocket();
        }, 100);
        return;
        }

        if (!(window as any).socialListen) {
            (window as any).socket.on(ACTIONS.USER_INFO_EXTENSION, (friends) => {
                dispatch(setFriends(friends));
            });

            (window as any).socket.on(ACTIONS.ADD_USER_EXTENSION, (data) => {
                dispatch(setOnline(data));
            });

            (window as any).socket.on(ACTIONS.TYPING_STATE, (data) => {
                dispatch(
                    setTypingState({ 
                        state: data.state, 
                        name: data.name,
                        chatKind: data.chatKind,
                        members: data.members, 
                        typingMembers: (window as any).typingMembers 
                    })
                );
            });

            (window as any).socket.on(ACTIONS.SEND_MSG_EXTENSION, (msg) => {
                if (!!msg) {
                    dispatch(setUserMsg(msg));
                }
            });
            (window as any).socialListen = true;
        }
    }

    return (
        <div className="bg-globalBgColor flex sm:flex-row xs:flex-col w-full relative">
            <MobileTopBar mobileMenuToggler={mobileMenuToggler} onClick={() => setMobileMenuToggler(!mobileMenuToggler)} />
            <MobileMenu searchString={searchString} setSearchString={setSearchString} mobileMenuToggler={mobileMenuToggler} onClick={() => setMobileMenuToggler(!mobileMenuToggler)} />
            <div className="bg-globalBgColor w-full pb-7">
                <Header searchString={searchString} setSearchString={setSearchString} />
                <div className='flex w-full'>
                    <div className={`fixed left-[0px] xs:top-[80px] sm:top-[164px] xl:top-[124px] bottom-0 overflow-y-auto ${chatSidebarVisibility ? 'right-[435px]' : 'right-0'}`}>
                        <div className={`w-full h-full ${chatSidebarVisibility == true ? "lg:px-8" : "lg:px-32"} 
                            ${mobileGameModalVisibility ? '': 'px-6'}`}>
                            {banner}
                            {children}
                        </div>
                    </div>
                    {chatSidebarVisibility && (
                        <div>
                            {isChatPanel && (
                                <ChatSidebar />
                            )}
                            {!isChatPanel && (
                                <InviteFriend setIsChatPanel={setIsChatPanel}/>
                            )}
                            <Sidebar onClick={onClick} sidebarToggler={sidebarToggler} setIsChatPanel={setIsChatPanel}/>
                        </div>
                    )}
                </div>
            </div>
            {isMobile && (
                <MobileNavbar />
            )}
        </div>
    )
}

export default Layout