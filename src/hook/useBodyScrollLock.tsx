import { useEffect, useState } from 'react'

// type toggle = 

const useBodyScrollLock = () => {
    const bodyStyle = document.body.style
    const [isLocked, setIsLocked] = useState(bodyStyle.overflowY === 'hidden')

    useEffect(() => {
        bodyStyle.overflowY = isLocked ? 'hidden' : 'auto';
    }, [bodyStyle, isLocked])

    function handleToggle() { setIsLocked(prev => !prev) }

    return { isLocked: isLocked, handleToggle: handleToggle }
}

export default useBodyScrollLock