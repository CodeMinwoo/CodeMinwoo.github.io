
const ModalDetail = ()=>{
    return(
        <>
            <div className="h-[70vh] overflow-auto ">
                <div>
                <h3 className="py-[16px] text-[16px] font-bold">기획 의도</h3>
                <div>
                정부의 토큰증권 법안 발의 이후 STO 토큰증권 스타트업들이 생겨나기 시작했습니다.
                협약기업 (주)바운스 코드의 요구사항에 맞추어 부동산 토큰증권 서비스를 구현하였습니다.
                부동산을 토큰화해 유저들이 청약하고 구매,판매 할 수 있으며 배당과 투표등의 권리 행사를 블록체인을 이용하여 투명하고 공정하게  할 수 있는 서비스 입니다.
                </div>
                <h3 className="py-[16px] text-[16px] font-bold">주요 기능</h3>
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
                    <h3 className="mx-2 py-[16px] text-[20px] font-bold">투표</h3>
                    <h3 className="mx-2 py-[16px] text-[20px] font-bold">토큰 추적</h3>
                </ul>
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