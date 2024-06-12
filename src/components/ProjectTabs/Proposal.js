import React from 'react'
import ProposalItem from './ProposalItem'

function Proposal() {
    return (
        <>
            <ProposalItem
                title="PRO-23"
                description="AAAAAAA"
                date="03.06.2024"
                openTill="10.06.2024"
                status="draft"
                amount="10000"
            />
        </>
    )
}

export default Proposal