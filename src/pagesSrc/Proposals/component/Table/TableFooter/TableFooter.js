import React from 'react'

function TableFooter() {
    return (
        <md-table-pagination ng-show="proposals.length > 0" md-limit="proposal_list.limit" md-limit-options="limitOptions" md-page="proposal_list.page" md-total="1" className="md-table-pagination ng-isolate-scope" aria-hidden="false" style={{}}>
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
                                <md-option ng-repeat="option in $pagination.limitOptions" ng-value="option.value ? $pagination.eval(option.value) : option" tabindex="0" className="ng-scope md-ink-ripple" role="option" aria-selected="true" id="select_option_31" aria-checked="true" value="5" selected="selected">
                                    <div className="md-text ng-binding">5</div>
                                </md-option>
                                <md-option ng-repeat="option in $pagination.limitOptions" ng-value="option.value ? $pagination.eval(option.value) : option" tabindex="0" className="ng-scope md-ink-ripple" role="option" aria-selected="false" id="select_option_32" aria-checked="true" value="10">
                                    <div className="md-text ng-binding">10</div>
                                </md-option>
                                <md-option ng-repeat="option in $pagination.limitOptions" ng-value="option.value ? $pagination.eval(option.value) : option" tabindex="0" className="ng-scope md-ink-ripple" role="option" aria-selected="false" id="select_option_33" aria-checked="true" value="15">
                                    <div className="md-text ng-binding">15</div>
                                </md-option>
                                <md-option ng-repeat="option in $pagination.limitOptions" ng-value="option.value ? $pagination.eval(option.value) : option" tabindex="0" className="ng-scope md-ink-ripple" role="option" aria-selected="false" id="select_option_34" aria-checked="true" value="20">
                                    <div className="md-text ng-binding">20</div>
                                </md-option>
                            </md-content>
                        </md-select-menu>
                    </div>
                </md-select>
            </div>
            <div className="buttons">
                <div className="label ng-binding">1 - 1 of 1</div>
                <button className="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" ng-click="$pagination.previous()" ng-disabled="$pagination.disabled || !$pagination.hasPrevious()" aria-label="Previous" disabled="disabled">
                    <md-icon md-svg-icon="navigate-before.svg" className="ng-scope" role="img" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="100%" viewBox="0 0 24 24" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                        </svg>
                    </md-icon>
                </button>
                <button className="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" ng-click="$pagination.next()" ng-disabled="$pagination.disabled || !$pagination.hasNext()" aria-label="Next" disabled="disabled">
                    <md-icon md-svg-icon="navigate-next.svg" className="ng-scope" role="img" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="100%" viewBox="0 0 24 24" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                        </svg>
                    </md-icon>
                </button>
            </div>
        </md-table-pagination>
    )
}

export default TableFooter