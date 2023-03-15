import React from 'react'
import Image from 'next/image'
import { SOLARITY_PASS } from 'data/Quest'
import styles from './style.module.scss'

export type SolarityPass = {
    avatar: string
    xp: string
    xp_icon: string
    mark: string
}
const GrayPanel = ({ children }) => {
    return (
        <div className="bg-[#48555B] rounded-[32px] px-[27px] py-[34px]">
            <div className="flex justify-between">
                <div>
                    <div className="text-[14px] text-white">SOLARITY PASS</div>
                    <div className="text-[32px] text-white font-bold">
                        Season 01
                    </div>
                </div>
                <div className="mr-[237px]">
                    <div className="text-[24px] text-white font-bold">
                        Season Ends
                    </div>
                    <div className="text-[24px] text-white flex gap-2">
                        <div className="w-[25px] flex items-center">
                            <img
                                src="images/quests/avatars/watch.png"
                                width={25}
                                height={25}
                            />
                        </div>
                        <span className="font-semibold">12d 11h</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div className={styles.col1}></div>
                    <div className={styles.col2}>
                        <div className="flex flex-row justify-center">
                            {SOLARITY_PASS.map((i) => (
                                <div
                                    className="flex flex-col rounded-xl bg-red-700"
                                    style={{
                                        width: '110px',
                                        height: '198px',
                                        margin: '20px',
                                    }}
                                >
                                    <div className="relative bg-blue-700">
                                        <Image
                                            src={i.avatar}
                                            width="100%"
                                            height="100%"
                                            layout="responsive"
                                            className="rounded-full border border-gray-100 shadow-sm self-center"
                                        />
                                        <div className="absolute top-5 right-1 h-6 w-6 z-2">
                                            <Image
                                                src={i.mark}
                                                width="10%"
                                                height="10%"
                                                layout="responsive"
                                                className="rounded-full border border-gray-100 shadow-sm self-center"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-row h-6 w-80">
                                        <Image
                                            src={i.xp_icon}
                                            width="27px"
                                            height="27px"
                                        />
                                        <span>{i.xp}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-row justify-center">
                            {SOLARITY_PASS.map((i) => (
                                <div
                                    className="flex flex-col rounded-xl bg-red-700"
                                    style={{
                                        width: '110px',
                                        height: '198px',
                                        margin: '20px',
                                    }}
                                >
                                    <div className="relative bg-blue-700">
                                        <Image
                                            src={i.avatar}
                                            width="100%"
                                            height="100%"
                                            layout="responsive"
                                            className="rounded-full border border-gray-100 shadow-sm self-center"
                                        />
                                        <div className="absolute top-5 right-1 h-6 w-6 z-2">
                                            <Image
                                                src={i.mark}
                                                width="10%"
                                                height="10%"
                                                layout="responsive"
                                                className="rounded-full border border-gray-100 shadow-sm self-center"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-row h-6 w-80">
                                        <Image
                                            src={i.xp_icon}
                                            width="27px"
                                            height="27px"
                                        />
                                        <span>{i.xp}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.col3}>
                        <Image
                            src="/images/quests/solarity-pass/col3-back0.svg"
                            width="100%"
                            height="100%"
                            className="rounded-full border border-gray-100 shadow-sm self-center"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GrayPanel
