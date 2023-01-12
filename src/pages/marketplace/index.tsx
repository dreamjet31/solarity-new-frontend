import React, { useState } from "react"

import Marketplace from "modules/Marketplace"
import Layout from "components/Layout"
import MarketplaceBanner from "modules/Marketplace/MarketplaceBanner"
import { demoRooms, rooms } from "data/Marketplace"
import { RoomItemProps } from "components/Marketplace/Rooms/Items/Item"
import ConfirmationDlg from "components/Marketplace/ConfirmationDlg"
import RoomDlg from "components/Marketplace/Rooms/RoomDlg"
import NothingFound from "components/Marketplace/NothingFound"
import Image from "next/image"
import BackButton from "components/Marketplace/RoomSettings/BackButton"
import CollectionInfoDlg from "components/Marketplace/CollectionInfoDlg"
import { RootStateOrAny, useDispatch, useSelector } from "react-redux"
import { setRoom } from "redux/slices/chatSlice"

const ProfileIndex = () => {
    const dispatch = useDispatch();
    
    const { selectedRoom } = useSelector((state: RootStateOrAny) => ({
        selectedRoom: state.marketplace.selectedRoom,
    }))

    const [sidebarToggler, setSidebarToggler] = useState(false)
    const [roomSettingDlgToggle, setRoomSettingDlgToggle] = useState([false, "join"])
    const [activeRoomId, setActiveRoomId] = useState(0)
    const [previewImg, setPreviewImg] = useState(rooms[0].imgUrl)
    const [previewTitle, setPreviewTitle] = useState(rooms[0].collectionName)
    const [previewSubtitle, setPreviewSubtitle] = useState(rooms[0].roomName)
    const [previewPrice, setPreviewPrice] = useState(rooms[0].price)
    const [confirmationDlgToggle, setConfirmationDlgToggle] = useState(false)
    const [previewDlgToggle, setPreviewDlgToggle] = useState(false)
    const [roomId, setRoomId] = useState(0)
    const [searchString, setSearchString] = useState('')
    const [isExpand, setIsExpand] = useState(false)


    const Buy = () => {
        setConfirmationDlgToggle(true);
    }

    const ConfirmationDlgToggle = (open: boolean) => {
        setConfirmationDlgToggle(open)
    }

    const PreviewDlgToggle = (open: boolean) => {
        setPreviewDlgToggle(open)
    }

    const VisitRoom = (roomInfo: RoomItemProps) => {
        setPreviewTitle(roomInfo.collectionName)
        setPreviewSubtitle(roomInfo.roomName)
        setPreviewPrice(roomInfo.price)
        setPreviewImg(roomInfo.imgUrl)
        setPreviewDlgToggle(true)
        setRoomId((roomInfo as any).roomNo)
    }

    const expandRoom = (status: boolean) => {
        setIsExpand(status);
    }

    const chooseFirstRoom = () => {
        dispatch(setRoom(demoRooms[0]))
    }

    return (
        <>
            {!isExpand ? <Layout
                sidebarToggler={sidebarToggler}
                searchString={searchString}
                setSearchString={setSearchString}
                banner={searchString === '' && <div>
                    <div className='font-[500] text-[24px] text-white p-[24px] pl-0 md:hidden'>
                        Marketplace
                    </div>
                    <div className="md:hidden block">
                        <CollectionInfoDlg buy={selectedRoom.imgUrl ? Buy : chooseFirstRoom} />
                    </div>
                    <MarketplaceBanner
                        isDlg={false}
                        activeRoom={previewImg}
                        buy={Buy}
                        isExpand={isExpand} />
                </div>}
                onClick={() => setSidebarToggler(!sidebarToggler)}
            >
                {
                    searchString !== '' ? (
                        <>
                            <NothingFound setSearchString={setSearchString} searchString={searchString} />
                        </>
                    ) : (
                        <>
                            <Marketplace searchString={searchString} setSearchString={setSearchString} />
                            <ConfirmationDlg dlgToggle={confirmationDlgToggle} setDlgToggle={ConfirmationDlgToggle} numberOfFrames={52} connectingOtherUsers={true} anotherInfo={"Room Info"} />
                            <RoomDlg activeRoom={previewImg} buy={Buy} dlgToggle={previewDlgToggle} setDlgToggle={PreviewDlgToggle} isDlg={true} isExpand={isExpand} />
                        </>
                    )
                }
            </Layout> : <div>
                <Image
                    src={`/images/experience/room_images/room_${roomId + 1}.jpg`}
                    layout="fill"
                />
                <div onClick={() => expandRoom(false)}>
                    <BackButton />
                </div>
            </div>}
        </>
    )
}

export default ProfileIndex