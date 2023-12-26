import { Wrapper, Heading } from '../components/common'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { DiJavascript, DiNodejs, DiGithubBadge } from 'react-icons/di'
import { SiNextdotjs, SiTypescript } from 'react-icons/si'
import { DiTrello } from 'react-icons/di'
import { DiReact } from 'react-icons/di'
import useModal from '../hooks/useModal'
import Modal from '../components/modal'
import { SiNotion, SiTailwindcss, SiSolidity, SiThreedotjs, SiRedux, SiKonva, SiMysql } from "react-icons/si";
import ModalDetail from './modalDetail'

const Projects = () => {
    const [isShowingModal, toggleModal] = useModal()
    const [isShowingModal2, toggleModal2] = useModal()

    return (
        <Wrapper>
            <Heading>팀 프로젝트</Heading>

            <ul className="flex flex-col w-full gap-[120px]">
                {/* 첫번째 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src={process.env.PUBLIC_URL + '/bounSTO.png'}
                            className="w-full"
                            alt="어떤어떤 프로젝트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀 프로젝트 (5명)</li>
                            <li className="text-stone-500">2023. 10. 23 ~ 2023.12.06</li>
                            <li>Smart Contract</li>
                            <li>front-end</li>
                            <li>
                                <button
                                    onClick={toggleModal}
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            부동산 토큰 증권 발행 STO 프로젝트(협약프로젝트){' '}
                            <a href="https://naver.com">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            부동산을 토큰 증권(STO) 으로 발행하고 관리하는 리액트 웹앱 서비스 입니다. 토큰의 발행, 거래 , 투표, 전송 기능을 구현하였습니다
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <SiSolidity />
                            <SiTypescript />
                            <DiReact />
                            <SiTailwindcss />
                            <DiNodejs />
                            {/* <DiJavascript /> */}
                            <DiGithubBadge />
                            {/* <DiTrello /> */}
                            <SiNotion />
                            {/* <SiNextdotjs /> */}
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <h4 className='font-bold'>Smart Contract</h4>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>부동산 토큰 컨트랙트 작성</li>
                            <li>국내, 해외 KYC 인증 리서치</li>
                            <li>ERC-1400 R&D</li>
                            <li>ERC-4337 리서치 </li>
                            <li>ERC-1155 리서치</li>
                        </ul>
                        <br />
                        <h4 className='font-bold'>Front-End</h4>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>유저 페이지 디자인</li>
                            <li>메인 페이지 구현</li>
                            <li>청약 페이지 구현</li>
                            <li>협약회사(바운스코드)로그인 연동(Oauth)</li>
                            <li>공통 컴포넌트 구현 ( KakaoMap API, NavBar, TabComponent, Slider )</li>
                        </ul>
                        <br />
                        <h4 className='font-bold'>기타</h4>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]"><li>프로젝트 시연 및 발표</li></ul>
                    </div>
                </li>

                {/* 첫번째 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src={process.env.PUBLIC_URL + '/IKE_Picture.png'}
                            className="w-full"
                            alt="IKE 커스텀 옷 제작 사이트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (4명)</li>
                            <li className="text-stone-500">2023. 08.01 ~ 2023.08.29</li>
                            <li>front-end</li>
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal2}
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            티셔츠 주문제작 사이트 IKE{' '}
                            {/* <a href="https://naver.com">
                                <FaExternalLinkAlt />
                            </a> */}
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            티셔츠 등 의류를 DIY , 직접 디자인 하여 구매할 수 있도록 서비스를 제공하는 리액트  프로젝트입니다
                            
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiReact />
                            <SiThreedotjs />
                            <SiKonva />
                            <SiRedux />
                            <DiJavascript />
                            {/* <DiNodejs /> */}
                            <DiGithubBadge />
                            {/* <SiTypescript /> */}
                            {/* <DiTrello /> */}
                            {/* <SiNextdotjs /> */}
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <br />
                        <h4 className='font-bold'>Front-End</h4>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>3D 티셔츠 구현</li>
                            <li>옷 종류 변경 구현</li>
                            <li>티셔츠 스티커 부착 구현</li>
                            <li>티셔츠 색상 변경 구현</li>
                            <li>상품 정보 Redux로 저장</li>
                        </ul>
                        <br />
                        <h4 className='font-bold'>기타</h4>
                        <ul className='px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]'><li>프로젝트 시연 및 발표</li></ul>
                    </div>
                </li>
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src={process.env.PUBLIC_URL + '/interPark2.png'}
                            className="w-full"
                            alt="IKE 커스텀 옷 제작 사이트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (4명)</li>
                            <li className="text-stone-500">2023. 06.02 ~ 2023.06.26</li>
                            <li>back-end</li>
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal2}
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            인터파크 티켓예약 사이트{' '}
                            {/* <a href="https://naver.com">
                                <FaExternalLinkAlt />
                            </a> */}
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            콘서트 예매 플랫폼 ,유저들이 자유롭게 평점을 매기고 의견을 나눌 수 있는 백엔드 프로젝트 입니다
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiNodejs />
                            <SiMysql />
                            <DiJavascript />
                            <DiGithubBadge />
                            {/* <SiTypescript /> */}
                            {/* <DiTrello /> */}
                            {/* <SiNextdotjs /> */}
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <br />
                        <h4 className='font-bold'>Back-End</h4>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>게시판 댓글 구현</li>
                            <li>게시판 대댓글 구현</li>
                            <li>게시판 좋아요 구현</li>
                            <li>게시판 조회수 구현</li>
                            <li>게시판 Pagination 구현</li>
                        </ul>
                    </div>
                </li>
            </ul>

            <Modal show={isShowingModal} onCloseButtonClick={toggleModal}>
                <ModalDetail />
            </Modal>

            <Modal show={isShowingModal2} onCloseButtonClick={toggleModal2}>
                test2222
            </Modal>
        </Wrapper>
    )
}

export default Projects
