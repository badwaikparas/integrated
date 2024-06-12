import React from 'react'

function TableRow(props) {
    return (
        <tr className="select_row md-row ng-scope" md-row="" ng-repeat="proposal in proposals | orderBy: proposal_list.order | limitTo: proposal_list.limit : (proposal_list.page -1) * proposal_list.limit | filter: proposal_search | filter: FilteredData" ng-click="goToLink('proposals/proposal/'+proposal.id)" role="button" tabindex="0">
            <td md-cell="" className="md-cell"><strong><a className="link" ng-href="https://rainbowsoftwaresolutions.com/advancecrm/proposals/proposal/15" href="https://rainbowsoftwaresolutions.com/advancecrm/proposals/proposal/15"> <span ng-bind="proposal.longid" className="ng-binding">PRO-15</span></a></strong><br /><small ng-show="table_columns.subject" ng-bind="proposal.subject" className="ng-binding" aria-hidden="false">cc</small></td>
            <td ng-show="table_columns.customer" md-cell="" className="md-cell" aria-hidden="false"><strong><span ng-bind="proposal.customer" className="ng-binding"></span></strong><br /><small className="blur ng-binding" ng-bind="proposal.customer_email"></small></td>
            <td ng-show="table_columns.date" md-cell="" className="md-cell" aria-hidden="false"><strong><span className="badge ng-binding" ng-bind="proposal.date">23.05.2024</span></strong></td>
            <td ng-show="table_columns.opentill" md-cell="" className="md-cell" aria-hidden="false"><strong><span className="badge ng-binding" ng-bind="proposal.opentill">30.05.2024</span></strong></td>
            <td ng-show="table_columns.status" md-cell="" className="md-cell" aria-hidden="false"><span className="label proposal-status-open label-default" ng-bind="proposal.status">OPEN</span></td>
            <td ng-show="table_columns.total" md-cell="" className="md-cell" aria-hidden="false"><strong ng-bind-html="proposal.total | currencyFormat:cur_code:null:true:cur_lct" className="ng-binding"><span dir="ltr">₹10,000.00</span></strong></td>
            <td ng-show="table_columns.assigned" md-cell="" className="md-cell" aria-hidden="false">
                <div data-toggle="tooltip" data-placement="left" data-container="body" title="" data-original-title="Created by: Guy Mann" className="assigned-staff-for-this-lead user-avatar" style={{ marginTop: "5px" }}><img ng-src="https://rainbowsoftwaresolutions.com/advancecrm/uploads/images/guy.jpg" alt="Guy Mann" src="https://rainbowsoftwaresolutions.com/advancecrm/uploads/images/guy.jpg" /></div>
            </td>
        </tr>
    )
}

export default TableRow