import { RiDoubleQuotesL } from 'react-icons/ri'
import { RiDoubleQuotesR } from 'react-icons/ri'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const Introduce = () => {
    const { animatedElementRef, isVisible } = useIntersectionObserver(0.7)

    return (
        <div
            ref={animatedElementRef}
            className={`w-full flex pt-[32px] transition-opacity duration-1000 ease-in-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div className="flex flex-col gap-[16px] w-full items-center">
                <RiDoubleQuotesL />
                <div className="text-center text-[16px] md:text-[24px]">
                    <p>세상을 바꿀 기술의 최전선에서 일하고 싶습니다 </p>
                    <p>블록체인 생태계에 기여하는 개발자가 되는 것이 제 목표입니다</p>
                </div>
                <RiDoubleQuotesR />
            </div>
        </div>
    )
}

export default Introduce
