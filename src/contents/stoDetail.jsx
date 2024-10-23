import MySwiper from "../components/swiper"


const ModalDetail = ()=>{
    return(
        <>
        
            <div className="h-[70vh] overflow-auto ">
                <div>
                <h1 className="py-[16px] text-[32px] font-bold">🔖 기획 의도</h1>
                <div className="mb-5">
                정부의 토큰증권 법안 발의 이후 STO 토큰증권 스타트업들이 생겨나기 시작했습니다.
                협약기업 (주)바운스 코드의 요구사항에 맞추어 부동산 토큰증권 서비스를 구현하였습니다.
                부동산을 토큰화해 유저들이 청약하고 구매,판매 할 수 있으며 배당과 투표등의 권리 행사를 블록체인을 이용하여 투명하고 공정하게  할 수 있는 서비스 입니다.
                </div>
                <h3 className="py-[16px] text-[32px] font-bold">📌 주요 기능</h3>
                <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                    <h3 className="mx-2 py-[16px] text-[20px] font-bold">회원</h3>
                    <li>협약사인 (주)바운스 코드의 소셜 로그인(oAuth)인 mr.login을 사용</li>
                    <li>쿠키 를 통해 accessToken 관리</li>
                    <li>마이페이지에서 회원과 메타마스크 지갑 주소 연결 기능 구현</li>
                    <h3 className="mx-2 py-[16px] text-[20px] font-bold">청약</h3>
                    <li>농협은행 API로 입금 후 청약중인 부동산을 신청</li>
                    <li>청약이 100% 완료된 건물의 소유주들에게 한번에 민팅하는 배치민팅으로 수수료 절감 효과 구현</li>
                    <li>발행되는 토큰들을 관리하는 팩토리 컨트랙트 작성</li>
                    <li>스마트 컨트랙트로 개인 보유량 20% 제한 구현</li>
                    <li>스마트 컨트랙트로 강제 토큰소각, 토큰 재발행 기능 구현</li>
                    <li>계약서등 메타데이터를 NFT처럼 토큰 안에 넣을 수 있는 기능 구현</li>
                    <li>토큰락업시간을 통해 매물 상장 전 지갑이동, 판매 금지 구현</li>
                    <h3 className="mx-2 py-[16px] text-[20px] font-bold">구매,판매</h3>
                    <li>유저들이 보유한 토큰들을 원하는 가격에 판매신청, 구매신청</li>
                    <li>부동산 토큰 판매시 원하는 수량만큼 서명을 통해 서명, 그 이후 판매 완료시 수수료를 제한 대금 입금</li>
                    <li>구매시 지갑으로 자동으로 토큰을 받는 기능</li>
                    <h3 className="mx-2 py-[16px] text-[20px] font-bold">투표</h3>
                    <li>토큰 보유자들은 관리자가  등록한 스마트 컨트랙트 투표에 권한행사 가능</li>
                    <li>관리자의 투표등록 시점을 스냅샷으로 구현</li>
                    <h3 className="mx-2 py-[16px] text-[20px] font-bold">토큰 추적</h3>
                    <li>관리자 페이지에서 네트워크의 모든 블록들을 검사해 부동산 토큰들의 거래 내용만을 추출</li>
                    <li>추출한 토큰들 거래내역을 서버에 저장, 유저들이 플랫폼 외로 토큰을 전송하거나 외부 지갑으로부터 토큰을 받았을 때 바로 업데이트</li>
                    <li>어드민 페이지를 통해 토큰들의 거래 내용들 확인 가능</li>
                    <h3 className="mx-2 py-[16px] text-[20px] font-bold">관리자</h3>
                    <li>실시간 토큰별 거래내역 표시</li>                    
                    <li>일별,주별,월간 시세 그래프 제공</li>
                    <li>유저 블랙리스트 추가</li>
                    <li>부동산 매물 등록</li>
                    <li>투표 등록</li>
                    <li>배당금 등록</li>

                </ul>
                <h3 className="py-[16px] text-[32px] font-bold mb-4">📍 본인 역할</h3>


                <MySwiper />
                {/* <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                
                    <div>dd</div>
                    <li>1</li>
                    <li>2</li>
                </ul> */}
                
                <ul className="mt-7 text-[20px]">
                    <li>
                    📍 미국의 RealT STO 회사와 ERC-1400 을 참고하여 토큰증권을 발행했습니다
                    </li>
                    <li>
                    📍 oAuth 로 로그인기능을 연동하고 이를 accessToken으로 관리하였습니다
                    </li>
                    <li>
                    📍 전체 페이지 디자인, 메인페이지 프론트엔드 작업을 진행하였습니다
                    </li>
                    <li>
                    📍 청약 페이지 구현, 청약 완료 시 토큰 배치 민팅 기능을 구현하였습니다
                    </li>
                    <li>
                    📍 하단바, 진행률 바 , 스와이퍼 , 카카오맵 API , 페이지 넘김 효과 컴포넌트를 만들었습니다
                    </li>
                    <li>
                    📍 로딩 스피너를 모든 페이지에 적용했습니다
                    </li>
                </ul>

                
                <h3 className="py-[16px] text-[32px] font-bold">📢 프로젝트 소감</h3>

                <p className="">
                아직 국내에 STO 프로젝트들이 많지 않고 자료가 없어 해외 자료들을 참고하느라 처음에 어려움이 많았습니다<div className="br"></div> 토큰 표준들이 마땅히 없어 ERC-20 토큰에 필요한 기능들을 넣어서 구현했는데 관리자 계정에 권한이 많아 보안상으로 위험할 수 있겠다고 생각했습니다. <br /> 서비스 구현도 중요하지만 핀테크 서비스인만큼 보안도 신경쓰면서 개발해야함을 깨달았습니다.
                <br />서비스를 만들면서 이더리움 네트워크의 블록들을 하나하나 뜯어보는 경험을 하면서 네트워크에 대한 전반적인 이해가 올라갈 수 있어 좋았습니다<div className="br"></div> 시간 제약으로 작성한 컨트랙트들에 대해서는 단위 테스트를 진행하지 못했는데, 예상할 수 없는 보안 상의 위험이 있을 수 있으니 다음 컨트랙트 개발 시 TEST DRIVEN 개발을 해야겠다고 마음먹었습니다
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

export default ModalDetail


// 기획의도 🔖
// 주요기능 📌
// 본인역할 📍
// 프로젝트 소감 📢