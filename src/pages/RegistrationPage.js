import Slideshow from "../components/SlideShow";

const RegistrationPage = () => {
    const makerInfrm = [
        {
            name: "에스티로더",
            text: "와디즈 프리오더 한정판 구성으로 병행수입 상품을 선보였어요",
            img: "images/bridge_에스티로더.png"
        },
        {
            name: "210에디트",
            text: "초기부터 와디즈 팬덤을 만들어 안정적인 매출을 확보하고 있어요",
            img: "images/bridge_210컴퍼니.png"
        },
        {
            name: "오뚜기",
            text: "소통과 피드백이 가능해 친밀한 브랜드 이미지를 얻었어요",
            img: "images/bridge_오뚜기.png"
        },
        {
            name: "유성우",
            text: "560만 회원이 있어 출시 초기부터 높은 매출을 달성할 수 있었어요",
            img: "images/bridge_유성우.png"
        },
        {
            name: "셀릭",
            text: "수요를 미리 파악하여 재고부담을 줄였어요",
            img: "images/bridge_셀릭.png"
        }
    ]

    return (
        <div className="mx-auto max-w-screen-xl">
            <Slideshow slides={makerInfrm} />
            <p>OOO에서 메이커가 되어보세요</p>
            <button>프로젝트 만들기</button>
        </div>
    );
};

export default RegistrationPage;