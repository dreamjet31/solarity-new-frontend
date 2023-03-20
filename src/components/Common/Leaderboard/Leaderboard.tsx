import Image from 'next/image'
import { useState } from 'react'
import { SubTitle } from '../Titles'
import styles from './styles.module.scss'

export const Leaderboard = () => {
    const [selectedTab, setSelectedTab] = useState<number>(1)

    return (
        <>
            <div className={styles.container}>
                <div className={styles.main_box}>
                    <div className={styles.box_header}>
                        <span
                            onClick={() => setSelectedTab(1)}
                            className={
                                selectedTab == 1
                                    ? styles.box_header_item_selected
                                    : styles.box_header_item
                            }
                        >
                            Today
                        </span>
                        <span
                            onClick={() => setSelectedTab(2)}
                            className={
                                selectedTab == 2
                                    ? styles.box_header_item_selected
                                    : styles.box_header_item
                            }
                        >
                            This Week
                        </span>
                        <span
                            onClick={() => setSelectedTab(3)}
                            className={
                                selectedTab == 3
                                    ? styles.box_header_item_selected
                                    : styles.box_header_item
                            }
                        >
                            All Time
                        </span>
                    </div>
                    <div className={styles.box_winners}>
                        <div className={styles.box_winner_2}>
                            <span className={styles.box_winner_rank}>2rd</span>
                            <Image
                                src="/images/quests/solarity-pass/winner_2.svg"
                                width="180px"
                                height="140px"
                            />
                            <span className={styles.box_winner_name}>
                                Samantha
                            </span>
                        </div>

                        <div className={styles.box_winner_1}>
                            <div className={styles.box_winner_1_img}>
                                <Image
                                    src="/images/quests/solarity-pass/winner_1.svg"
                                    width="180px"
                                    height="220px"
                                />
                            </div>

                            <div className={styles.box_winner_1_back}></div>
                            <span className={styles.box_winner_name_1}>
                                Jhon Doe
                            </span>
                        </div>

                        <div className={styles.box_winner_3}>
                            <span className={styles.box_winner_rank}>3rd</span>
                            <Image
                                src="/images/quests/solarity-pass/winner_3.svg"
                                width="180px"
                                height="140px"
                            />
                            <span className={styles.box_winner_name}>
                                Diana
                            </span>
                        </div>
                    </div>
                    <span className={styles.leader_title}>Current rank</span>

                    <div className={styles.current_rank}>
                        <div className={styles.current_rank_item}>
                            <div className={styles.current_rank_item_col1}>
                                <span className="text-white">4th</span>
                                <div className={styles.up_green}></div>
                            </div>

                            <div className="ml-2">
                                <Image
                                    src="/images/quests/solarity-pass/leader_profile.svg"
                                    width="32px"
                                    height="32px"
                                />
                            </div>
                            <div className={styles.current_rank_item_col3}>
                                <span
                                    className={
                                        styles.current_rank_item_col3_header
                                    }
                                >
                                    Jenifer
                                </span>
                                <span
                                    className={
                                        styles.current_rank_item_col3_body
                                    }
                                >
                                    @Jen3
                                </span>
                            </div>
                            <div className={styles.current_rank_item_col4}>
                                143P
                            </div>
                        </div>
                        <div className={styles.current_rank_item}>
                            <div className={styles.current_rank_item_col1}>
                                <span className="text-white">4th</span>
                                <div className={styles.up_green}></div>
                            </div>

                            <div className="ml-2">
                                <Image
                                    src="/images/quests/solarity-pass/leader_profile.svg"
                                    width="32px"
                                    height="32px"
                                />
                            </div>
                            <div className={styles.current_rank_item_col3}>
                                <span
                                    className={
                                        styles.current_rank_item_col3_header
                                    }
                                >
                                    Jenifer
                                </span>
                                <span
                                    className={
                                        styles.current_rank_item_col3_body
                                    }
                                >
                                    @Jen3
                                </span>
                            </div>
                            <div className={styles.current_rank_item_col4}>
                                143P
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Leaderboard
