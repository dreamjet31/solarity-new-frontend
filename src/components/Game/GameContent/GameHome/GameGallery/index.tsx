import Image from 'next/image'
import React from 'react'

type GameGalleryType = {
    galleryImages: string[]
}

const GameGallery = (props: GameGalleryType) => {
    return (
        <div className="">
            <div className="flex gap-2 mb-8">
                <div>
                    <img
                        src={props.galleryImages[0]}
                        className="rounded-[4px]"
                        width="718"
                        height="391"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <img
                        src={props.galleryImages[1]}
                        className="rounded-[4px]"
                        width="491"
                        height="190"
                    />
                    <img
                        src={props.galleryImages[2]}
                        className="rounded-[4px]"
                        width="491"
                        height="188"
                    />
                </div>
            </div>
        </div>
    )
}

export default GameGallery
