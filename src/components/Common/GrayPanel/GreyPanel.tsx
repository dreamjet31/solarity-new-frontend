import React from 'react'
import Image from 'next/image'
import { SOLARITY_PASS, SOLARITY_PASS_NUMS } from 'data/Quest'
import styles from './style.module.scss'
import ProgressBar from './Progressbar'

export type SolarityPass = {
    avatar: string
    xp: string
    xp_icon: string
    mark: string
    type: number
    is_lock: boolean
}
export type SolarityPassNumber = {
    number: number
    passed: boolean
}
const ProgressItem = ({ index, solarityPassNumber }) => {
    if (index == 0) {
        if (solarityPassNumber.passed) {
            return <div className={styles.progress_item_start_active}></div>
        }
    }
    if (index > 0) {
        if (SOLARITY_PASS_NUMS[index - 1].passed) {
            if (solarityPassNumber.passed) {
                return <div className={styles.progress_item_active}></div>
            }
            if (SOLARITY_PASS_NUMS[index - 1].passed) {
                return <div className={styles.progress_item_end}></div>
            }
        }

        if (solarityPassNumber.passed) {
            return <div className={styles.progress_item}></div>
        } else {
            return <div className={styles.progress_item_inactive}></div>
        }
    }
    return <div className={styles.progress_item_inactive}></div>
}
const GrayPanel = () => {
    return (
        <div className="bg-[#1E1E1E] rounded-[32px] px-[27px] py-[34px]">
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
                <div className="flex flex-row content-center h-100">
                    <div className={styles.col1}>
                        <div className="">
                            <Image
                                src="/images/quests/solarity-pass/col1-row1.svg"
                                width="180px"
                                height="140px"
                            />
                        </div>

                        <div className="mt-5">
                            <ProgressBar progress="950" total="2000" />
                        </div>

                        <div className="mt-6 ">
                            <Image
                                src="/images/quests/solarity-pass/col1-row1.svg"
                                width="180px"
                                height="140px"
                            />
                        </div>
                    </div>
                    <div className={styles.col2}>
                        <div className="flex flex-row justify-around ">
                            {SOLARITY_PASS.map((i, index) => (
                                <div
                                    className={
                                        i.type == 1
                                            ? styles.col2_item
                                            : i.type == 2
                                            ? styles.col2_item_type2
                                            : i.type == 3
                                            ? styles.col2_item_type3
                                            : styles.col2_item_type4
                                    }
                                    key={index}
                                >
                                    <div className="relative ">
                                        <div className="p-2">
                                            <Image
                                                src={i.avatar}
                                                width="60px"
                                                height="60px"
                                                layout="responsive"
                                                className="rounded-full border  self-center"
                                            />
                                            <div
                                                className={
                                                    i.is_lock
                                                        ? styles.col2_lock
                                                        : styles.col2_mark
                                                }
                                            >
                                                <Image
                                                    src={i.mark}
                                                    width="10%"
                                                    height="10%"
                                                    layout="responsive"
                                                    className="rounded-full border border-gray-100 shadow-sm self-center"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center items-center h-6 mt-2 mb-2">
                                        <div className={styles.col2_item_img}>
                                            <Image
                                                src={i.xp_icon}
                                                width="18px"
                                                height="18px"
                                            />
                                        </div>

                                        <span className={styles.col2_item_text}>
                                            {i.xp} xp
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.progress_container}>
                            <div className="flex flex-row justify-around absolute z-20 w-full ">
                                {SOLARITY_PASS_NUMS.map((i, index) => (
                                    <div
                                        key={index}
                                        className={styles.col2_nums}
                                    >
                                        <div className="absolute z-10">
                                            {i.passed ? (
                                                <Image
                                                    src="/images/quests/solarity-pass/number-container.svg"
                                                    width="35px"
                                                    height="35px"
                                                    className="absolute top-2/4 left-2/4"
                                                />
                                            ) : (
                                                <Image
                                                    src="/images/quests/solarity-pass/number-container-inactive.svg"
                                                    width="35px"
                                                    height="35px"
                                                    className="absolute top-2/4 left-2/4"
                                                />
                                            )}
                                        </div>

                                        <span className="absolute text-white text-center mt-1 z-10">
                                            {i.number}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.progresss}>
                                {SOLARITY_PASS_NUMS.map((i, index) => (
                                    <ProgressItem
                                        key={index}
                                        index={index}
                                        solarityPassNumber={i}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-row justify-around ">
                            {SOLARITY_PASS.map((i, index) => (
                                <div className={styles.col2_item} key={index}>
                                    <div className="relative ">
                                        <div className="p-2">
                                            <Image
                                                src={i.avatar}
                                                width="60px"
                                                height="60px"
                                                layout="responsive"
                                                className="rounded-full border  self-center"
                                            />
                                            <div
                                                className={
                                                    i.is_lock
                                                        ? styles.col2_lock
                                                        : styles.col2_mark
                                                }
                                            >
                                                <Image
                                                    src={i.mark}
                                                    width="10%"
                                                    height="10%"
                                                    layout="responsive"
                                                    className="rounded-full border border-gray-100 shadow-sm self-center"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center items-center h-6 mt-2 mb-2">
                                        <div className={styles.col2_item_img}>
                                            <Image
                                                src={i.xp_icon}
                                                width="18px"
                                                height="18px"
                                            />
                                        </div>

                                        <div className={styles.col2_item_text}>
                                            {i.xp} xp
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.col3}>
                        <Image
                            src="/images/quests/solarity-pass/col3-back0.svg"
                            layout="fill"
                            className={styles.col3_image}
                        />
                        <div className={styles.blure}></div>
                        <div className={styles.rounded_lock}>
                            <Image
                                src="/images/quests/solarity-pass/rounded-lock.svg"
                                width="150px"
                                height="150px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GrayPanel
