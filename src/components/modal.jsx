import ReactDOM from 'react-dom'
const Modal = ({ show, onCloseButtonClick, children }) => {
    if (!show) {
        return null
    }
    // ReactDom.createPortal은 react 컴포넌트를 현재 화면이 아닌 다른 위치에 렌더링할 때 사용합니다.
    // ReactDom 의 두번째 매개변수는 Portal이 실제 렌더링 될 DOM의 요소의 위치를 지정합니다
    // Dom(document object model) 이란 웹페이지의 구조를 프로그래밍 언어가 상호작용하기 위해 이름을 붙여둔 것입니다.
    return ReactDOM.createPortal(
        <div
            onClick={onCloseButtonClick}
            className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-50"
        >
            <div className="p-8 bg-white rounded-md w-[50%]">
                <h2 className="mb-4 text-lg font-bold">
                    <button className="float-right -mt-5" onClick={onCloseButtonClick}>
                        X
                    </button>
                </h2>
                <div className="body">{children}</div>
                {/* <div className="footer">
                    <button onClick={onCloseButtonClick}>Close Modal</button>
                </div> */}
            </div>
        </div>,
        document.body,
    )
}

export default Modal
