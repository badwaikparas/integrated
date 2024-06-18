import React from 'react'
import SwitchElement from '../FormElements/SwitchElement'
import TextFieldElement from '../FormElements/TextFieldElement'
function Security() {
    return (
        <>
            <div>
                <h3>Two Factor Authentication</h3>
            </div>
            <div>
                <div>
                    This feature creates and verifies Google Authenticator web service's secret codes (2-Step Verification).It can generate secrets, generate codes, validate codes and present a QR-Code for scanning the secret.
                </div>
                <ul>
                    <li><a href="https://safety.google/authentication/">Google 2-Step Verification</a></li>
                    <li>Google 2-Step VerificationGoogle Authenticator mobile app</li>
                    <ul>
                        <li>Android App</li>
                        <li>iPhone, iPod touch or iPad app</li>
                        <li>BlackBerry app</li>
                    </ul>
                </ul>
            </div >
            <div>
                <SwitchElement label="Two Factor Authentication" class="w100" />
                <TextFieldElement label="ACCEPTED FILE FORMATS*" />
                <TextFieldElement label="ALLOWED IP ADDRESSES" />
                <div className='flex' style={{ justifyContent: "flex-start" }}>
                    <SwitchElement label="Push State" />
                    <SwitchElement label="Voice Notifications" />
                    <SwitchElement label="Execute MySQL Query" />
                </div>
            </div>
        </>
    )
}

export default Security