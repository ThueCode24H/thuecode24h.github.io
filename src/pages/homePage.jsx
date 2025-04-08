
import "~/styles/home.scss"
import imgtest from "~/assets/bb661aa5-2f5f-4d39-8378-3b74ea89.jpg"
import logo from "~/assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faCodeBranch, faFaceGrin, faMedkit } from "@fortawesome/free-solid-svg-icons"
import CarouselController from "~/components/carousel/CarouselController"

const HomePage = () => {
    return (
        <>
            <div className="home container-fluid">
                <div className="row">
                    <div className="brand col-3">
                        <div className="brand_logo">
                            <img src={logo} alt="Thuê code Logo" className="brand_logo-img" />
                        </div>
                        <div className="brand_slogan">
                            MÀY DẬY <br />
                            MÀY MÚA NỮA ĐI
                        </div>
                        <div className="brand_summary">
                            The Team Summary report shows summarized information about all the members of the workspace.
                            The data is organized by person, workdays, time worked, paid time off, time balance, billable time,
                            billable amount, and costs.
                        </div>
                    </div>
                    <div className="item_carousel col-6">
                        <img src={imgtest} alt="" className="img_carousel" />
                    </div>
                    <div className="contact_container col-3">
                        <div className="contact_wrapper">
                            <div className="contact_icon">
                                <FontAwesomeIcon icon={faCodeBranch} />

                            </div>
                            <div className="contact_icon">
                                <FontAwesomeIcon icon={faCode} />

                            </div>
                            <div className="contact_icon">
                                <FontAwesomeIcon icon={faFaceGrin} />

                            </div>
                            <div className="contact_icon">
                                <FontAwesomeIcon icon={faMedkit} />
                            </div>

                        </div>
                    </div>
                </div>
                <CarouselController />
            </div>
        </>
    )
}

export default HomePage