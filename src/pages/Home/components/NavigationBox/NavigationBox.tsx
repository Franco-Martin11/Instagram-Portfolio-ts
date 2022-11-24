import { GridIcon } from '@/components'
import { useState } from 'react'
import { VscTools, VscFolder } from 'react-icons/vsc'
import NavigationIcon from './NavigationIcon'

type Props = {}
const navigationIconData: Array<{ id: string, title: string, Icon: JSX.Element }> = [{ id: 'publish', title: 'publicaciones', Icon: <GridIcon /> }, { id: 'projects', title: 'Projects', Icon: <VscFolder size="24px" /> }, { id: 'tolls', title: 'tolls', Icon: <VscTools size="24px" /> }]
const NavigationBox = (props: Props) => {
    const [focus, setFocus] = useState<string>('project')
    return (
        <nav className="flex flex-row items-center justify-center h-full">
            {navigationIconData.map(element => <NavigationIcon setFocus={setFocus} focus={focus} Icon={element.Icon} title={element.title} key={element.id} idClass={element.id} />)}
        </nav >
    )
}

export default NavigationBox