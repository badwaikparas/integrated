function Navbar() {
    return (<md-toolbar className="toolbar-ciuis-top _md _md-toolbar-transitions">
        <div className="md-toolbar-tools">
            {/* <!-- CRM NAME --> */}
            <div md-truncate="" className="crm-name crm-nm md-truncate"><span>Rainbow Services</span></div>
            <button className="md-icon-button hidden-lg hidden-md md-button md-ink-ripple" type="button" ng-transclude="" ng-click="OpenMenu()" aria-label="Menu">
                <md-icon className="ng-scope material-icons" role="img" aria-hidden="true"><i className="ion-navicon-round text-muted"></i></md-icon>
            </button>
            {/* <!-- CRM NAME --> */}
            {/* <!-- NAVBAR MENU --> */}
            <ul flex="" className="ciuis-v3-menu hidden-xs flex">
                <li><a href="/advancecrm/panel">Panel</a>
                </li>
                <li><a href="*">Finance</a>
                    <ul>
                        <li><a href="/advancecrm/invoices"> <i className="icon ico-ciuis-invoices"></i> <span className="title">Invoices</span> <span className="descr">Manage Invoices</span> </a>
                        </li>
                        <li><a href="/advancecrm/deposits"> <i className="icon ion-ios-paper-outline"></i> <span className="title">Deposits</span> <span className="descr">Manage Deposits</span> </a>
                        </li>
                        <li><a href="/advancecrm/expenses"> <i className="icon ico-ciuis-expenses"></i> <span className="title">Expenses</span> <span className="descr">Manage Expenses</span> </a>
                        </li>
                        <li><a href="/advancecrm/accounts"> <i className="icon ico-ciuis-accounts"></i> <span className="title">Accounts</span> <span className="descr">Manage Accounts</span> </a>
                        </li>
                    </ul>
                </li>
                <li><a href="*">Sales</a>
                    <ul>
                        <li><a href="/advancecrm/orders"> <i className="icon ion-ios-filing-outline"></i> <span className="title">Orders</span> <span className="descr">Manage Orders</span> </a>
                        </li>
                        <li><a href="/advancecrm/proposals"> <i className="icon ico-ciuis-proposals"></i> <span className="title">Proposals</span> <span className="descr">Manage Proposals</span> </a>
                        </li>
                        <li><a href="/advancecrm/customers"> <i className="icon ico-ciuis-customers"></i> <span className="title">Customers</span> <span className="descr">Manage Customers</span> </a>
                        </li>
                        <li><a href="/advancecrm/leads"> <i className="icon ico-ciuis-leads"></i> <span className="title">Leads</span> <span className="descr">Manage Leads</span> </a>
                        </li>
                        <li><a href="/advancecrm/products"> <i className="icon ico-ciuis-products"></i> <span className="title">Products</span> <span className="descr">Manage Products</span> </a>
                        </li>
                    </ul>
                </li>
                <li><a href="*">Track</a>
                    <ul>
                        <li><a href="/advancecrm/projects"> <i className="icon ico-ciuis-projects"></i> <span className="title">Projects</span> <span className="descr">Manage Projects</span> </a>
                        </li>
                        <li><a href="/advancecrm/tasks"> <i className="icon ico-ciuis-tasks"></i> <span className="title">Tasks</span> <span className="descr">Manage Tasks</span> </a>
                        </li>
                        <li><a href="/advancecrm/timesheets"> <i className="icon ion-ios-clock-outline"></i> <span className="title">Timesheets</span> <span className="descr">Manage Timesheets</span> </a>
                        </li>
                        <li><a href="/advancecrm/tickets"> <i className="icon ico-ciuis-supports"></i> <span className="title">Tickets</span> <span className="descr">Manage Tickets</span> </a>
                        </li>
                    </ul>
                </li>
                <li><a href="*">Others</a>
                    <ul>
                        <li><a href="/advancecrm/staff"> <i className="icon ico-ciuis-staff"></i> <span className="title">Staff</span> <span className="descr">Manage Staff</span> </a>
                        </li>
                        <li><a href="/advancecrm/calendar"> <i className="icon ion-android-calendar"></i> <span className="title">Calendar</span> <span className="descr">Manage Calendar Events</span> </a>
                        </li>
                        <li><a href="/advancecrm/emails"> <i className="icon ion-ios-email-outline"></i> <span className="title">Email Templates</span> <span className="descr">Manage Email Templates</span> </a>
                        </li>
                        <li><a href="/advancecrm/report"> <i className="icon ico-ciuis-reports"></i> <span className="title">Reports</span> <span className="descr">Manage Reports</span> </a>
                        </li>
                    </ul>
                </li>
                <li><a href="*">Purchases</a>
                    <ul>
                        <li><a href="/advancecrm/vendors"> <i className="icon ion-social-buffer-outline"></i> <span className="title">Vendors</span> <span className="descr">Manage Vendors</span> </a>
                        </li>
                        <li><a href="/advancecrm/purchases"> <i className="icon ion-ios-cart-outline"></i> <span className="title">Purchases</span> <span className="descr">Manage Purchases</span> </a>
                        </li>
                    </ul>
                </li>
                <li><a href="*">Module</a>
                </li>
            </ul>
            {/* <!-- NAVBAR MENU --> */}
            <button className="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" ng-click="searchNav()" aria-label="search">

                <md-icon className="ng-scope material-icons" role="img" aria-hidden="true"><i className="ion-search text-muted"></i></md-icon>
            </button>
            <div className="dropdown-container timer">
                <button className="md-icon-button dropdown-toggle md-button md-ink-ripple" type="button" ng-transclude="" ng-click="getTimersList()" id="getTimer" data-toggle="dropdown" aria-label="search">

                    <md-icon className="ng-scope material-icons" role="img" aria-hidden="true">
                        <i className="ion-ios-clock text-muted" id="timerStart" ng-hide="settings.timers == true || settings.timers == 'true'" aria-hidden="false"></i>
                        <i id="timerStarted" ng-show="settings.timers==true || settings.timers=='true'" className="ion-ios-clock text-success ng-hide" aria-hidden="true"></i>
                    </md-icon>
                </button>
            </div>
            <a className="md-icon-button md-button md-ink-ripple" ng-transclude="" ng-hide="ONLYADMIN != 'true'" ng-href="/advancecrm/settings" aria-label="Settings" href="/advancecrm/settings" aria-hidden="false">

                <md-icon className="ng-scope material-icons" role="img" aria-hidden="true"><i className="ion-gear-a text-muted"></i></md-icon>
            </a>
            <button className="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" ng-click="Todo();get_todo()" aria-label="Todo">

                <md-icon className="ng-scope material-icons" role="img" aria-hidden="true"><i className="ion-clipboard text-muted"></i></md-icon>
            </button>
            <button className="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" ng-click="Notifications();get_notifications()" aria-label="Notifications">

                <div ng-show="settings.newnotification == true" className="notify ng-scope" aria-hidden="false" style={{}}> <span className="heartbit"></span> <span className="point"></span> </div>
                <md-icon className="ng-scope material-icons" role="img" aria-hidden="true"><i className="ion-ios-bell text-muted"></i></md-icon>
            </button>
            <button className="md-icon-button avatar-button-ciuis md-button md-ink-ripple" type="button" ng-transclude="" ng-click="Profile();get_meetings();get_appointments();" aria-label="User Profile">
                <img height="100%" src="/advancecrm/uploads/images/FB_IMG_16807076318521974.jpg" className="md-avatar ng-scope" style={{ maxHeight: "36px", height: "100%", maxWidth: "40px" }} onerror="this.onerror=null; this.src='/advancecrm/uploads/images/n-img.jpg'" alt="advancecrm/uploads/images/FB_IMG_16807076318521974.jpg" />
            </button>
            <div ng-click="Profile();get_meetings();get_appointments();" md-truncate="" className="user-informations hidden-xs md-truncate" role="button" tabindex="0"> <span className="user-name-in">Admin</span><br />
                <span className="user-email-in">admin@gmail.com</span>
            </div>
        </div>
    </md-toolbar>);
}

export default Navbar;