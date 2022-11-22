import { RoundedThumnail } from "@/components"
import { Description, Stats, User } from ".."
import Highlighted from "./Highlighted"



type Props = {}

const Header = (props: Props) => {
    return (
        <header className="flex flex-row gap-4 md:gap-8 flex-wrap p-4 bg-[#fafafa]">

            <div className="flex w-full flex-row flex-wrap gap-4 justify-center items-start">
                <RoundedThumnail gradient={true} imgAlt='Perfil-Foto' imgUrl='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                <div className="flex flex-col gap-6 sm:flex-[0_375px]">
                    <User />
                    <Stats />
                    <Description />
                </div>
            </div>
            <Highlighted />
        </header>
    )
}

export default Header