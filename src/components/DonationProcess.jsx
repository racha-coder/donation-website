import React from 'react';
import '../CSS/donationProcess.css'

const DonationProcess = () => {
	return (
		<>
			<h1 className="heading">
				Steps for Donation
			</h1>
			<div className="process-wrapper">
				<div className="step" style={{'--bgc-color': 'tomato'}}>
					<div className="step-icon">
						{/* <i>i</i> */}
					</div>
					<div className="description">
						Click on donate button
					</div>
				</div>
				<div className="step" style={{'--bgc-color': 'lightgoldenrodyellow'}}>
					<div className="step-icon">
						{/* <i>i</i> */}
					</div>
					<div className="description">
						Fill your details like name and email
					</div>
				</div>
				<div className="step" style={{'--bgc-color': 'lightskyblue'}}>
					<div className="step-icon">
						{/* <i>i</i> */}
					</div>
					<div className="description">
						Enter Donation Amount
					</div>
				</div>
				<div className="step" style={{'--bgc-color': 'lightgreen'}}>
					<div className="step-icon">
						{/* <i>i</i> */}
					</div>
					<div className="description">
						Select Payment method and make the Payment
					</div>
				</div>
				<div className="step" style={{'--bgc-color': 'violet'}}>
					<div className="step-icon">
						{/* <i>i</i> */}
					</div>
					<div className="description">
						Collect the receipt
					</div>
				</div>
			</div>
		</>
	)
}

export default DonationProcess