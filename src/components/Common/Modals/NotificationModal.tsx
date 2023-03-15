import React from 'react'
import { useDispatch } from 'react-redux'
import { setNotificationModalVisibility } from '../../../redux/slices/commonSlice'

const NotificationModal = () => {
    const dispatch = useDispatch()

    const closeDlg = (e) => {
        if (e.target.id == 'room_setting_dlg') {
            dispatch(setNotificationModalVisibility(false))
        }
    }

    return (
        <div
            className={` flex justify-center md:items-center xs:items-end top-[0px] left-[0px] right-[0px] bottom-[0px] backdrop-blur-[20px] md:bg-[rgba(12,12,14,0.7)] xs:bg-globalBgColor z-[1002] fixed`}
            id="room_setting_dlg"
            onClick={(e) => closeDlg(e)}
        >
            <div
                className=" fixed top-[120px] md:w-[22%] xs:w-full h-[60%] bg-[#131314] border-[1px] border-[#1d1d1f] rounded-[20px]
                            flex flex-col pt-[28px] px-[32px] pb-[32px] gap-[24px] overscroll-contain z-[1002]"
            >
                <div
                    className=" absolute md:right-[-18px] md:top-[-18px] xs:right-[49%] xs:top-[-58px] cursor-pointer "
                    onClick={() =>
                        dispatch(setNotificationModalVisibility(false))
                    }
                >
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.9564 11.866L8.09082 7.00022L12.9565 2.13448C13.2581 1.83285 13.2581 1.34522 12.9565 1.04359C12.6548 0.741963 12.1672 0.741963 11.8656 1.04359L6.99995 5.90933L2.13428 1.04359C1.83265 0.741963 1.34503 0.741963 1.04341 1.04359C0.741781 1.34522 0.741781 1.83285 1.04341 2.13448L5.90905 7.00022L1.04341 11.866C0.741781 12.1676 0.741781 12.6552 1.04341 12.9568C1.19383 13.1073 1.3914 13.1829 1.58884 13.1829C1.78629 13.1829 1.98386 13.1072 2.13428 12.9568L2.09892 12.9215L2.13428 12.9568L6.99993 8.09111L11.8656 12.9568C12.016 13.1073 12.2136 13.1829 12.411 13.1829C12.6085 13.1829 12.806 13.1072 12.9564 12.9568L12.9211 12.9215L12.9564 12.9568C13.2581 12.6552 13.2581 12.1676 12.9564 11.866Z"
                            fill="#5F5F63"
                            stroke="#5F5F63"
                            strokeWidth="0.1"
                        />
                    </svg>
                </div>
                <div className=" font-['Outfit'] font-[500] text-[24px] text-[#f3f3f3] ">
                    Notifications
                </div>
            </div>
        </div>
    )
}

export default NotificationModal
