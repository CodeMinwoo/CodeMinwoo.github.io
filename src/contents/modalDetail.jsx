
const ModalDetail = ()=>{
    return(
        <>
            <div className="h-[70vh] overflow-auto ">
                <div>
                <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
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
                </ul>
                </div>
            </div>
        </>
    )
}

export default ModalDetail