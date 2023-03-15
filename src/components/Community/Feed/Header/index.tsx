import React, { useEffect, useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import {
    setGameModalVisibility,
    setSelectedGame,
} from 'redux/slices/commonSlice'
import GameModal from '../../GameModal'
import GameDivision from '../../../Game/GameDivision'
import Description from './Description'
import Preview from './Preview'
import Stats from './Stats'

export interface HeaderProps {
    id?: string
    isPreview: boolean
    avatarUrl: string
    backUrl: string
    title: string
    type?: string
    description: string
    websiteUrl: string
    iframeUrl: string
    walletAddress: string
    icon: any
}

function Header(props: HeaderProps) {
    const { gameModalVisibility } = useSelector((state: RootStateOrAny) => ({
        gameModalVisibility: state.common.gameModalVisibility,
    }))

    const [gameBannerVisibility, setGameBannerVisibility] = useState(false)

    return (
        <div className="flex flex-col gap-[56px]">
            {props.isPreview && (
                <Preview
                    type={props.type}
                    id={props.id}
                    avatarUrl={props.avatarUrl}
                    iframeUrl={props.iframeUrl}
                    gameBannerVisibility={gameBannerVisibility}
                    setGameBannerVisibility={setGameBannerVisibility}
                    backUrl={props.backUrl}
                    title={props.title}
                    description={props.description}
                />
            )}
            {!props.isPreview && (
                <div className="md:hidden lg:hidden sm:block xs:block">
                    <Preview
                        type={props.type}
                        id={props.id}
                        avatarUrl={props.avatarUrl}
                        iframeUrl={props.iframeUrl}
                        backUrl={props.backUrl}
                        title={props.title}
                        description={props.description}
                        gameBannerVisibility={gameBannerVisibility}
                        setGameBannerVisibility={setGameBannerVisibility}
                    />
                </div>
            )}

            <div className="grid custom-2xl:grid-cols-5 xl:grid-cols-4 xl:gap-12 gap-0 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
                <div className="custom-2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-1 sm:col-span-1 xs:col-span-1">
                    <Description
                        type={props.type}
                        title={props.title}
                        description={props.description}
                        walletAddress={props.walletAddress}
                        icon={props.icon}
                    />
                </div>
                {props.type == 'game' && (
                    <div className="custom-2xl:col-span-3 xl:col-span-2 lg:col-span-2 md:col-span-1 sm:col-span-1 xs:col-span-1">
                        <GameDivision />
                    </div>
                )}
                {props.type == 'community' && (
                    <div className="col-span-2">
                        <Stats id={props.id} type={props.type} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header
