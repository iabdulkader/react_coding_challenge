import { useState } from "react";
import Input from "../Input";

export default function HeroInfo({ name, setName, error}: {name: string, setName: (name: {value: string, error: string}) => void, error?: string}) {

    return (
        <div className="text-center px-5 mb-5">
            <h1>Please enter your name and pick the Sectors you are currently involved in.</h1>

            <Input 
                label="Name"
                className="text-white"
                value={name}
                type="text"
                onChange={(e) => setName({ value: e.target.value, error: "" })}
                error={error}
            />
        </div>
    )
}