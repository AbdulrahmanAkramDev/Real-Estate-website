import './Footer.css'

const Footer = () => {
    return (
        <section className='f-wrapper'>
            <div className="paddings innerwidth flexCenter f-container">
                <div className="flexColStart f-left">
                    <img src="./logo2.png" width={120} alt="" />
                    <span className="secondaryText">
                        Our vision is to make all people
                        <br />
                        the best place to live for them.
                    </span>
                </div>
                <div className="flexColStart f-right">
                    <span className='primaryText'>Information</span>
                    <span className='secondaryText'>145 New York, FL 5467, USA</span>
                    <div className="flexCenter f-menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
