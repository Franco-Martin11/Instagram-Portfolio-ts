import {VscGithub} from 'react-icons/vsc'

type Props = {}

const User = (props: Props) => {
    return (
        <div className="flex flex-row gap-4 flex-wrap justify-between  sm:justify-start items-center">
            <h1 className="font-thin font-body text-[28px] ">frank.martin11</h1>
            <nav className=" flex flex-row gap-4">
                <button className="px-2 py-1 font-semibold text-sm text-[rgb(38_38_38)] bg-[#fafafa] rounded-sm border-[rgb(219_219_219)] border-[1px]">Contact me</button>
                <VscGithub className=" hover:text-indigo-500" size="32px"/>
            </nav>
        </div>
    )
}

export default User