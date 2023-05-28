import { Link } from "react-router-dom"

import { Note } from "../pages/Home"

import { Rating } from "./Rating"
import { Tag } from "./Tag"
import React from "react"

type Card = {
    key: number,
    data: Note,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export function Card({ key, data, onClick }: Card) {
    return (
        <button 
            onClick={onClick}
            className=" bg-PINK bg-opacity-5 p-8 rounded-2xl h-56"
        >
            <h2 className="font-bold text-2xl mb-2 text-left">
                {data.title}
            </h2>
            <div className=" mb-4">
                <Rating 
                    big={false}
                    note_id={data.id}
                    value={data.rating}
                />
            </div>

            <p className=" line-clamp-2 text-justify text-GRAY_50">
                {data.description}
            </p>

            <div className="flex items-center gap-2 mt-5">
                {
                    data.tags.map(tag => (
                        <Tag 
                            key={tag.id}
                            title={tag.name}
                        />
                     ))
                }
            </div>
        </button>
    )
}