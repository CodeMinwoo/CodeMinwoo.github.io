import { Hero } from '../components/common'
import { IoLogoGithub, IoIosPhonePortrait } from 'react-icons/io'
import { TfiEmail } from 'react-icons/tfi'
import { FaBlogger } from 'react-icons/fa6'
import { useState, useRef, useEffect } from 'react'

const Profile = () => {
    const [isVisible, setIsVisible] = useState(false)
    const animatedElementRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.5 },
        )

        if (animatedElementRef.current) {
            observer.observe(animatedElementRef.current)
        }

        return () => {
            if (animatedElementRef.current) {
                observer.unobserve(animatedElementRef.current)
            }
        }
    }, [])

    return (
        <div
            ref={animatedElementRef}
            className={`flex flex-row items-center justify-between gap-[38px] transition-opacity duration-1000 ease-in-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div className="w-[280px] md:w-[28%] ">
                <img
                    src={process.env.PUBLIC_URL + '/introPicture.jpg'}
                    aria-hidden
                    alt="profile image"
                    className="w-[100vw] m-auto rounded-full border-2 border-slate-500"
                />
            </div>
            <div className="w-[100%] box-border md:w-[70%] md:p-[10px] ">
                <Hero>
                    박민우 <span className="text-[16px] text-slate-400 font-normal">CodeMinwoo</span>
                </Hero>
                <p className="text-slate-700 pt-[5px] md:text-[24px] md:pt-[10px] text-[16px]">
                그거 너무 쉬운 얘긴데? 하고싶은걸 해서 돈을 많이 벌어야죠!
                </p>
                <p className="flex flex-col text-[16px] items-left pt-[7px] md:pt-[5px] md:text-[14px]">
                    <a href="mailto:alsdn8055@gmail.com" className="flex items-center gap-[5px] text-slate-600">
                        <TfiEmail />
                        alsdn8055@gmail.com
                    </a>
                    <a
                        href="https://github.com/codeminwoo?tab=repositories"
                        className="flex items-center gap-[5px] text-slate-600"
                    >
                        <IoLogoGithub />
                        CodeMinwoo
                    </a>
                    <a
                        href="https://github.com/Edie-MinwooPark"
                        className="flex items-center gap-[5px] text-slate-600"
                    >
                        <IoLogoGithub />
                        Edie-MinwooPark
                    </a>
                    <a
                        href="tel:+821024704526"
                        className="flex items-center gap-[5px] text-slate-600"
                    >
                        <IoIosPhonePortrait />
                        010-2470-4526
                    </a>
                    {/* <a href="https://velog.io/@alsdn8055" className="flex items-center gap-[5px] text-slate-600">
                        <FaBlogger />
                        velog
                    </a>
                    <a href="https://blockchainiseasy.tistory.com/" className="flex items-center gap-[5px] text-slate-600">
                        <FaBlogger />
                        블록로그 
                    </a> */}
                </p>
            </div>
        </div>
    )
}

export default Profile
