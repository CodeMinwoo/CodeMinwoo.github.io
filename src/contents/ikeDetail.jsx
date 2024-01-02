import Ikeswiper from "../components/ikeswiper"
import ikeswiper from "../components/ikeswiper"
const IkeDetail = ()=>{
    return(
        <>
            <div className="h-[70vh] overflow-auto ">
            <div>
                <h1 className="py-[16px] text-[32px] font-bold">🔖 기획 의도</h1>
                옷 구매 사이트 안에서 옷을 이리저리 돌려보거나 옷에 텍스트와 스티커들을 붙일 수 있는 기능들을 보며 항상 신기해했습니다. 리액트를 배운 이후에 CANVAS를 활용해서 이런 서비스를 구현해 볼 수 있지 않을까 하는 아이디어를 바탕으로 CUSTOM 옷을 제작하고 구매할 수 있는 사이트를 만들었습니다
                <div className="mb-5">
                </div>
                <h3 className="py-[16px] text-[32px] font-bold">📌 주요 기능</h3>
                <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                    <h3 className="mx-2 py-[16px] text-[20px] font-bold">옷 제작</h3>
                    <li>3D 티셔츠에 문구를 넣어서 Canvas로 렌더링</li>
                    <li>마우스의 움직임에 따라 옷들도 움직이게 구현</li>
                    <li>Konva 라이브러리와 Canvas를 이용해서 옷 위에 스티커 부착 기능 구현</li>
                    <li>스티커, 텍스트를 옷 위에 넣고 크기,위치, 각도 조절하는 기능 구현</li>
                    <li>완성된 티셔츠 스크린샷 캡쳐 기능 구현</li>
                    <li>전체 텍스트, 스티커 모두 삭제 기능 구현</li>

                    <h3 className="mx-2 py-[16px] text-[20px] font-bold">구매</h3>
                    <li>이니시스 API 와 연동하여 티셔츠 구매 기능 구현</li>
                    <h3 className="mx-2 py-[16px] text-[20px] font-bold">게시판</h3>
                    <li>CRUD 기능 구현</li>                    

                </ul>
                <h3 className="py-[16px] text-[32px] font-bold mb-4">📍 본인 역할</h3>
                <Ikeswiper />
                <ul className="mt-2 text-[20px]">
                    <li>
                    📍 three.js 를 사용하여 3D 티셔츠를 페이지에 렌더링하고 그 위에 저희 로고를 추가했습니다
                    </li>
                    <li>
                    📍 Konva 라이브러리를 사용해 옷 위에 스티커, 문구를 추가할 수 있는 기능을 구현했습니다
                    </li>
                    <li>
                    📍 브라우저 스크린샷 캡쳐 기능을 만들었습니다
                    </li>
                    <li>
                    📍 React와 Redux를 활용하여 실시간으로 스티커를 추가, 삭제하고 가격 반영을 해주는 기능을 만들었습니다
                    </li>

                </ul>
                {/* <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                
                    <div>dd</div>
                    <li>1</li>
                    <li>2</li>
                </ul> */}
                


                
                <h3 className="py-[16px] text-[32px] font-bold">📢 프로젝트 소감</h3>

                <p className="mb-2">
                    인터넷 검색 중 우연히 이 사이트 우리도 만들 수 있을까? 하는 아이디어로 시작한 리액트 프로젝트 입니다. 머리속으로만 그려왔던 홈페이지를 직접 만드는 경험을 해서 너무 재밌게 프로젝트를 진행하였습니다. <br />
                    three.js 나 konva 등 canvas를 깊게 배우지 않고 바로 시작해서 걱정도 되었습니다. <br />
                    이번 프로젝트에서 학원 등 에서 수동적으로 가르켜 주는 내용을 이해하고 프로젝트를 만드는게 아니라 먼저 만들고 싶은 프로젝트를 정하고 그 이후에 만들면서 학습을 진행하였는데 이것이 큰 성장이 되었다고 생각합니다 <br />
                    새로운 기술이나 프로젝트를 만났을 때에도 기죽지 않고 만들면서 배운다는 생각으로 접근하자는 자신감을 얻을 수 있는 프로젝트 였습니다.

                </p>

                {/* <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
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
                </ul> */}
                </div>
            </div>
        </>
    )
}

export default IkeDetail