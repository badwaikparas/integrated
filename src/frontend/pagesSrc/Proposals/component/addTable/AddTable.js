import React from 'react'


function AddTable(props) {
    return (
        <md-toolbar className="toolbar-white _md _md-toolbar-transitions">
            <div className="md-toolbar-tools">
                <h2 flex="" md-truncate="" className="text-bold md-truncate flex">Proposals <small>(<span ng-bind="proposals.length" className="ng-binding">1</span>)</small><br />
                    <small flex="" md-truncate="" className="md-truncate flex">Organize your proposals</small></h2>
                <div className="ciuis-external-search-in-table">
                    <input ng-model="proposal_search" className="search-table-external ng-pristine ng-untouched ng-valid ng-empty" id="search" name="search" type="text" placeholder="What're you looking for ?" aria-invalid="false" />
                    <button className="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Search">
                        <md-icon className="ng-scope material-icons" role="img" aria-hidden="true"><i className="ion-search text-muted"></i></md-icon>
                    </button>
                </div>
                <md-menu md-position-mode="target-right target" className="md-menu ng-scope _md">
                    <button className="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="New" ng-click="$mdMenu.open($event)" aria-haspopup="true" aria-expanded="false" aria-owns="menu_container_19">

                        <md-icon className="ng-scope material-icons" role="img" aria-hidden="true"><i className="ion-connection-bars text-muted"></i></md-icon>
                    </button>

                    <div className="_md md-open-menu-container md-whiteframe-z2" id="menu_container_19" style={{ display: "none" }} aria-hidden="true">
                        <md-menu-content width="4" className="" role="menu">
                            <md-contet layout-padding="" className="layout-padding">
                                <md-checkbox md-no-ink="" aria-label="column select" className="md-primary ng-pristine ng-untouched ng-valid md-checked ng-not-empty" ng-model="table_columns.subject" ng-change="updateColumns('subject', table_columns.subject);" tabindex="0" type="checkbox" role="checkbox" aria-checked="true" aria-invalid="false" style={{}}><div className="md-container" md-ink-ripple="" md-ink-ripple-checkbox=""><div className="md-icon"></div></div><div ng-transclude="" className="md-label">
                                    Subject              </div></md-checkbox><br />
                                <md-checkbox md-no-ink="" aria-label="column select" className="md-primary ng-pristine ng-untouched ng-valid md-checked ng-not-empty" ng-model="table_columns.customer" ng-change="updateColumns('customer', table_columns.customer);" tabindex="0" type="checkbox" role="checkbox" aria-checked="true" aria-invalid="false"><div className="md-container" md-ink-ripple="" md-ink-ripple-checkbox=""><div className="md-icon"></div></div><div ng-transclude="" className="md-label">
                                    Customer / Lead              </div></md-checkbox><br />
                                <md-checkbox md-no-ink="" aria-label="column select" className="md-primary ng-pristine ng-untouched ng-valid md-checked ng-not-empty" ng-model="table_columns.date" ng-change="updateColumns('date', table_columns.date);" tabindex="0" type="checkbox" role="checkbox" aria-checked="true" aria-invalid="false"><div className="md-container" md-ink-ripple="" md-ink-ripple-checkbox=""><div className="md-icon"></div></div><div ng-transclude="" className="md-label">
                                    Date              </div></md-checkbox><br />
                                <md-checkbox md-no-ink="" aria-label="column select" className="md-primary ng-pristine ng-untouched ng-valid md-checked ng-not-empty" ng-model="table_columns.opentill" ng-change="updateColumns('opentill', table_columns.opentill);" tabindex="0" type="checkbox" role="checkbox" aria-checked="true" aria-invalid="false"><div className="md-container" md-ink-ripple="" md-ink-ripple-checkbox=""><div className="md-icon"></div></div><div ng-transclude="" className="md-label">
                                    Open Till              </div></md-checkbox><br />
                                <md-checkbox md-no-ink="" aria-label="column select" className="md-primary ng-pristine ng-untouched ng-valid md-checked ng-not-empty" ng-model="table_columns.status" ng-change="updateColumns('status', table_columns.status);" tabindex="0" type="checkbox" role="checkbox" aria-checked="true" aria-invalid="false"><div className="md-container" md-ink-ripple="" md-ink-ripple-checkbox=""><div className="md-icon"></div></div><div ng-transclude="" className="md-label">
                                    Status              </div></md-checkbox><br />
                                <md-checkbox md-no-ink="" aria-label="column select" className="md-primary ng-pristine ng-untouched ng-valid md-checked ng-not-empty" ng-model="table_columns.total" ng-change="updateColumns('total', table_columns.total);" tabindex="0" type="checkbox" role="checkbox" aria-checked="true" aria-invalid="false"><div className="md-container" md-ink-ripple="" md-ink-ripple-checkbox=""><div className="md-icon"></div></div><div ng-transclude="" className="md-label">
                                    Amount              </div></md-checkbox><br />
                                <md-checkbox md-no-ink="" aria-label="column select" className="md-primary ng-pristine ng-untouched ng-valid md-checked ng-not-empty" ng-model="table_columns.assigned" ng-change="updateColumns('assigned', table_columns.assigned);" tabindex="0" type="checkbox" role="checkbox" aria-checked="true" aria-invalid="false"><div className="md-container" md-ink-ripple="" md-ink-ripple-checkbox=""><div className="md-icon"></div></div><div ng-transclude="" className="md-label">
                                    Staff              </div></md-checkbox><br />
                            </md-contet>
                        </md-menu-content>
                    </div></md-menu>
                <button className="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" ng-click="toggleFilter()" aria-label="Filter">
                    <md-icon className="ng-scope material-icons" role="img" aria-hidden="true"><i className="ion-android-funnel text-muted"></i></md-icon>
                </button>

                <a className="md-icon-button md-button md-ink-ripple" ng-transclude="" ng-href="https://rainbowsoftwaresolutions.com/advancecrm/proposals/create" aria-label="New" href="https://rainbowsoftwaresolutions.com/advancecrm/proposals/create">
                    <md-icon className="ng-scope material-icons" role="img" aria-hidden="true"><i className="ion-android-add-circle text-success"></i></md-icon>
                </a>
            </div>
        </md-toolbar>
    )
}

export default AddTable