import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faSignal, faFilter } from '@fortawesome/free-solid-svg-icons'

function TableBody() {
    return (
        <md-content ng-show="!proposalsLoader" className="bg-white _md" aria-hidden="false" style={{}}>
            <md-table-container ng-show="proposals.length > 0" aria-hidden="false" className="" style={{}}>
                <table md-table="" md-progress="promise" className="md-table ng-isolate-scope">
                    {/* /// Main Thead */}
                    <thead md-head="" md-order="proposal_list.order" className="md-head ng-isolate-scope">
                        <tr md-row="" className="md-row">
                            <th md-column="" className="md-column ng-isolate-scope"><span>Proposal</span></th>
                            <th ng-show="table_columns.customer" md-column="" md-order-by="customer" className="md-column ng-isolate-scope md-sort" aria-hidden="false" style={{}}>
                                <span>Customer / Lead</span>
                                <md-icon md-svg-icon="arrow-up.svg" className="md-sort-icon ng-scope md-asc" ng-className="getDirection()" role="img" aria-label="arrow-up.svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                                        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
                                    </svg>
                                </md-icon>
                            </th>
                            <th ng-show="table_columns.date" md-column="" md-order-by="date" className="md-column ng-isolate-scope md-sort" aria-hidden="false">
                                <span>Date</span>
                                <md-icon md-svg-icon="arrow-up.svg" className="md-sort-icon ng-scope md-asc" ng-className="getDirection()" role="img" aria-label="arrow-up.svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                                        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
                                    </svg>
                                </md-icon>
                            </th>
                            <th ng-show="table_columns.opentill" md-column="" md-order-by="opentill" className="md-column ng-isolate-scope md-sort" aria-hidden="false">
                                <span>Open Till</span>
                                <md-icon md-svg-icon="arrow-up.svg" className="md-sort-icon ng-scope md-asc" ng-className="getDirection()" role="img" aria-label="arrow-up.svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                                        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
                                    </svg>
                                </md-icon>
                            </th>
                            <th ng-show="table_columns.status" md-column="" md-order-by="status" className="md-column ng-isolate-scope md-sort" aria-hidden="false">
                                <span>Status</span>
                                <md-icon md-svg-icon="arrow-up.svg" className="md-sort-icon ng-scope md-asc" ng-className="getDirection()" role="img" aria-label="arrow-up.svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                                        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
                                    </svg>
                                </md-icon>
                            </th>
                            <th ng-show="table_columns.total" md-column="" md-order-by="total" className="md-column ng-isolate-scope md-sort" aria-hidden="false">
                                <span>Amount</span>
                                <md-icon md-svg-icon="arrow-up.svg" className="md-sort-icon ng-scope md-asc" ng-className="getDirection()" role="img" aria-label="arrow-up.svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                                        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
                                    </svg>
                                </md-icon>
                            </th>
                            <th ng-show="table_columns.assigned" md-column="" md-order-by="staff" className="md-column ng-isolate-scope md-sort" aria-hidden="false">
                                <span>Staff</span>
                                <md-icon md-svg-icon="arrow-up.svg" className="md-sort-icon ng-scope md-asc" ng-className="getDirection()" role="img" aria-label="arrow-up.svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                                        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
                                    </svg>
                                </md-icon>
                            </th>
                        </tr>
                    </thead>

                    {/* Redundant Thead */}
                    {/* <thead className="md-table-progress ng-isolate-scope" md-table-progress="">
                        <tr>
                            <th colspan="7">
                                <md-progress-linear ng-show="deferred()" md-mode="indeterminate" aria-valuemin="0" aria-valuemax="100" role="progressbar" aria-hidden="true" className="ng-hide" style={{}}>
                                    <div className="md-container md-mode-indeterminate">
                                        <div className="md-dashed"></div>
                                        <div className="md-bar md-bar1"></div>
                                        <div className="md-bar md-bar2"></div>
                                    </div>
                                </md-progress-linear>
                            </th>
                        </tr>
                    </thead> */}

                    <tbody md-body="" className="md-body">
                        {/* <!-- ngRepeat: proposal in proposals | orderBy: proposal_list.order | limitTo: proposal_list.limit : (proposal_list.page -1) * proposal_list.limit | filter: proposal_search | filter: FilteredData --> */}
                        <tr class="select_row md-row ng-scope ng-enter-prepare" md-row="" ng-repeat="proposal in proposals | orderBy: proposal_list.order | limitTo: proposal_list.limit : (proposal_list.page -1) * proposal_list.limit | filter: proposal_search | filter: FilteredData" ng-click="goToLink('proposals/proposal/'+proposal.id)" role="button" tabindex="0">

                            {/* /// Proposal */}
                            <td md-cell="" class="md-cell">
                                <strong>
                                    <a class="link" ng-href="https://rainbowsoftwaresolutions.com/advancecrm/proposals/proposal/16" href="https://rainbowsoftwaresolutions.com/advancecrm/proposals/proposal/16"> <span ng-bind="proposal.longid" class="ng-binding">PRO-16</span></a>
                                </strong><br />
                                <small ng-show="table_columns.subject" ng-bind="proposal.subject" class="ng-binding" aria-hidden="false">adasdd</small>
                            </td>

                            {/* /// Customer / Lead */}
                            <td ng-show="table_columns.customer" md-cell="" class="md-cell" aria-hidden="false">
                                <strong><span ng-bind="proposal.customer" class="ng-binding">Sohail Sheikh</span></strong><br /><small class="blur ng-binding" ng-bind="proposal.customer_email">Sohail@gmail.com</small>
                            </td>

                            {/* /// Date */}
                            <td ng-show="table_columns.date" md-cell="" class="md-cell" aria-hidden="false">
                                <strong><span class="badge ng-binding" ng-bind="proposal.date">30.05.2024</span></strong>
                            </td>

                            {/* /// Open Till */}
                            <td ng-show="table_columns.opentill" md-cell="" class="md-cell" aria-hidden="false">
                                <strong><span class="badge ng-binding" ng-bind="proposal.opentill">18.06.2024</span></strong>
                            </td>

                            {/* /// Status */}
                            <td ng-show="table_columns.status" md-cell="" class="md-cell" aria-hidden="false">
                                <span class="label proposal-status-sent label-default" ng-bind="proposal.status">Sent</span>
                            </td>

                            {/* /// Amount */}
                            <td ng-show="table_columns.total" md-cell="" class="md-cell" aria-hidden="false">
                                <strong ng-bind-html="proposal.total | currencyFormat:cur_code:null:true:cur_lct" class="ng-binding"><span dir="ltr">₹100,000.00</span></strong>
                            </td>

                            {/* /// Staff */}
                            <td ng-show="table_columns.assigned" md-cell="" class="md-cell" aria-hidden="false">
                                <div style={{ marginTop: "5px" }} data-toggle="tooltip" data-placement="left" data-container="body" title="" data-original-title="Created by: Admin" class="assigned-staff-for-this-lead user-avatar">
                                    <img ng-src="https://rainbowsoftwaresolutions.com/advancecrm/uploads/images/FB_IMG_16807076318521974.jpg" alt="Admin" src="https://rainbowsoftwaresolutions.com/advancecrm/uploads/images/FB_IMG_16807076318521974.jpg" />
                                </div>
                            </td>


                        </tr>
                        {/* <!-- end ngRepeat: proposal in proposals | orderBy: proposal_list.order | limitTo: proposal_list.limit : (proposal_list.page -1) * proposal_list.limit | filter: proposal_search | filter: FilteredData --> */}
                    </tbody>
                </table>
            </md-table-container>
            <md-table-pagination ng-show="proposals.length > 0" md-limit="proposal_list.limit" md-limit-options="limitOptions" md-page="proposal_list.page" md-total="1" className="md-table-pagination ng-isolate-scope" aria-hidden="false" style={{}}>
                {/* <!-- ngIf: $pagination.showPageSelect() --> */}
                {/* <!-- ngIf: $pagination.limitOptions --> */}
                <div className="limit-select ng-scope" ng-if="$pagination.limitOptions" style={{}}>
                    <div className="label ng-binding">Rows per page:</div>
                    <md-select className="md-table-select ng-pristine ng-untouched ng-valid ng-empty" ng-model="$pagination.limit" md-container-className="md-pagination-select" ng-disabled="$pagination.disabled" aria-label="Rows: 5" placeholder="5" tabindex="0" role="listbox" aria-expanded="false" aria-multiselectable="false" id="select_29" aria-disabled="false" aria-invalid="false">
                        <md-select-value className="md-select-value" id="select_value_label_28">
                            <span>
                                <div className="md-text ng-binding">5</div>
                            </span>
                            <span className="md-select-icon" aria-hidden="true"></span>
                        </md-select-value>
                        <div className="md-select-menu-container md-pagination-select" aria-hidden="true" role="presentation" id="select_container_30">
                            <md-select-menu role="presentation" className="_md">
                                <md-content className="_md">
                                    {/* <!-- ngRepeat: option in $pagination.limitOptions --> */}
                                    <md-option ng-repeat="option in $pagination.limitOptions" ng-value="option.value ? $pagination.eval(option.value) : option" tabindex="0" className="ng-scope md-ink-ripple" role="option" aria-selected="true" id="select_option_31" aria-checked="true" value="5" selected="selected">
                                        <div className="md-text ng-binding">5</div>
                                    </md-option>
                                    {/* <!-- end ngRepeat: option in $pagination.limitOptions --> */}
                                    <md-option ng-repeat="option in $pagination.limitOptions" ng-value="option.value ? $pagination.eval(option.value) : option" tabindex="0" className="ng-scope md-ink-ripple" role="option" aria-selected="false" id="select_option_32" aria-checked="true" value="10">
                                        <div className="md-text ng-binding">10</div>
                                    </md-option>
                                    {/* <!-- end ngRepeat: option in $pagination.limitOptions --> */}
                                    <md-option ng-repeat="option in $pagination.limitOptions" ng-value="option.value ? $pagination.eval(option.value) : option" tabindex="0" className="ng-scope md-ink-ripple" role="option" aria-selected="false" id="select_option_33" aria-checked="true" value="15">
                                        <div className="md-text ng-binding">15</div>
                                    </md-option>
                                    {/* <!-- end ngRepeat: option in $pagination.limitOptions --> */}
                                    <md-option ng-repeat="option in $pagination.limitOptions" ng-value="option.value ? $pagination.eval(option.value) : option" tabindex="0" className="ng-scope md-ink-ripple" role="option" aria-selected="false" id="select_option_34" aria-checked="true" value="20">
                                        <div className="md-text ng-binding">20</div>
                                    </md-option>
                                    {/* <!-- end ngRepeat: option in $pagination.limitOptions --> */}
                                </md-content>
                            </md-select-menu>
                        </div>
                    </md-select>
                </div>
                {/* <!-- end ngIf: $pagination.limitOptions --> */}
                <div className="buttons">
                    <div className="label ng-binding">1 - 1 of 1</div>
                    {/* <!-- ngIf: $pagination.showBoundaryLinks() --> */}
                    <button className="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" ng-click="$pagination.previous()" ng-disabled="$pagination.disabled || !$pagination.hasPrevious()" aria-label="Previous" disabled="disabled">
                        <md-icon md-svg-icon="navigate-before.svg" className="ng-scope" role="img" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                            </svg>
                        </md-icon>
                    </button>
                    <button className="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" ng-click="$pagination.next()" ng-disabled="$pagination.disabled || !$pagination.hasNext()" aria-label="Next" disabled="disabled">
                        <md-icon md-svg-icon="navigate-next.svg" className="ng-scope" role="img" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                        </md-icon>
                    </button>
                    {/* <!-- ngIf: $pagination.showBoundaryLinks() --> */}
                </div>
            </md-table-pagination>
            <md-content ng-show="!proposals.length" className="md-padding no-item-data _md ng-hide" aria-hidden="true" style={{}}>No matching items found</md-content>
        </md-content>
    )
}

export default TableBody