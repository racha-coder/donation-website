import React from 'react';
import '../CSS/donationProcess.css'

const DonationProcess = () => {
	return (
		<>
			<h1 className="heading">
				Steps for Donation
			</h1>
			<div className="process-wrapper">
				<div className="step" style={{'--percent': '20%'}}>
					<div className="step-icon"></div>
					<div className="description">
						Click on donate button
					</div>
				</div>
				<div className="step" style={{'--percent': '25%'}}>
					<div className="step-icon"></div>
					<div className="description">
						Fill your details like name and email
					</div>
				</div>
				<div className="step" style={{'--percent': '30%'}}>
					<div className="step-icon"></div>
					<div className="description">
						Enter Donation Amount
					</div>
				</div>
				<div className="step" style={{'--percent': '35%'}}>
					<div className="step-icon"></div>
					<div className="description">
						Select Payment method and make the Payment
					</div>
				</div>
				<div className="step" style={{'--percent': '40%'}}>
					<div className="step-icon"></div>
					<div className="description">
						Collect the receipt
					</div>
				</div>
			</div>
		</>
	)
}

export default DonationProcess