import React from 'react'

function TableHead() {
    return (
        <thead md-head="" md-order="proposal_list.order" className="md-head ng-isolate-scope">
            <tr md-row="" className="md-row">
                <th md-column="" className="md-column ng-isolate-scope"><span>Proposal</span></th>
                <th ng-show="table_columns.customer" md-column="" md-order-by="customer" className="md-column ng-isolate-scope md-sort" aria-hidden="false" style={{}}><span>Customer / Lead</span>
                    <md-icon md-svg-icon="arrow-up.svg" className="md-sort-icon ng-scope md-asc" ng-className="getDirection()" role="img" aria-label="arrow-up.svg"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg></md-icon></th>
                <th ng-show="table_columns.date" md-column="" md-order-by="date" className="md-column ng-isolate-scope md-sort" aria-hidden="false"><span>Date</span><md-icon md-svg-icon="arrow-up.svg" className="md-sort-icon ng-scope md-asc" ng-className="getDirection()" role="img" aria-label="arrow-up.svg"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg></md-icon></th>
                <th ng-show="table_columns.opentill" md-column="" md-order-by="opentill" className="md-column ng-isolate-scope md-sort" aria-hidden="false"><span>Open Till</span><md-icon md-svg-icon="arrow-up.svg" className="md-sort-icon ng-scope md-asc" ng-className="getDirection()" role="img" aria-label="arrow-up.svg"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg></md-icon></th>
                <th ng-show="table_columns.status" md-column="" md-order-by="status" className="md-column ng-isolate-scope md-sort" aria-hidden="false"><span>Status</span><md-icon md-svg-icon="arrow-up.svg" className="md-sort-icon ng-scope md-asc" ng-className="getDirection()" role="img" aria-label="arrow-up.svg"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg></md-icon></th>
                <th ng-show="table_columns.total" md-column="" md-order-by="total" className="md-column ng-isolate-scope md-sort" aria-hidden="false"><span>Amount</span><md-icon md-svg-icon="arrow-up.svg" className="md-sort-icon ng-scope md-asc" ng-className="getDirection()" role="img" aria-label="arrow-up.svg"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg></md-icon></th>
                <th ng-show="table_columns.assigned" md-column="" md-order-by="staff" className="md-column ng-isolate-scope md-sort" aria-hidden="false"><span>Staff</span><md-icon md-svg-icon="arrow-up.svg" className="md-sort-icon ng-scope md-asc" ng-className="getDirection()" role="img" aria-label="arrow-up.svg"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg></md-icon></th>
            </tr>
        </thead>
    )
}

export default TableHead