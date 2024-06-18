import '../css/Header.css';

function Headers() {
    return (
        <header id="mainHeader" role="banner" className="hidden-xs">
            <nav role="navigation">
                <div className="top-header">
                    <div className="navBurger"><a href="https://rainbowsoftwaresolutions.com/advancecrm/panel">
                        <img className="transform_logo animated rotateIn" width="34px" src="https://rainbowsoftwaresolutions.com/advancecrm/uploads/ciuis_settings/4174aacc-6969-426f-8ab5-b226d004c0311.jpeg" height="34px" onerror="this.onerror=null; this.src='https://rainbowsoftwaresolutions.com/advancecrm/assets/img/placeholder.png'" alt="https://rainbowsoftwaresolutions.com/advancecrm/assets/img/placeholder.png" />
                    </a>
                    </div>
                </div>
                <ul id="menu-vertical-menu icon" className="nav">
                    <li className="material-icons ion-ios-analytics-outline"><a href="https://rainbowsoftwaresolutions.com/advancecrm/panel">Panel</a></li>
                    <li className="material-icons ico-ciuis-proposals"><a href="https://rainbowsoftwaresolutions.com/advancecrm/proposals">Proposals</a></li>
                    <li className="material-icons ion-ios-filing-outline"><a href="https://rainbowsoftwaresolutions.com/advancecrm/orders">Orders</a></li>
                    <li className="material-icons ico-ciuis-invoices"><a href="https://rainbowsoftwaresolutions.com/advancecrm/invoices">Invoices</a></li>
                    <li className="material-icons ion-ios-cart-outline"><a href="https://rainbowsoftwaresolutions.com/advancecrm/purchases">Purchases</a></li>
                    <li className="material-icons ico-ciuis-projects"><a href="https://rainbowsoftwaresolutions.com/advancecrm/projects">Projects</a></li>
                    <li className="material-icons ico-ciuis-tasks"><a href="https://rainbowsoftwaresolutions.com/advancecrm/tasks">Tasks</a></li>
                    <li className="material-icons ico-ciuis-supports"><a href="https://rainbowsoftwaresolutions.com/advancecrm/tickets">Tickets</a></li>
                    <li className="material-icons ico-ciuis-expenses"><a href="https://rainbowsoftwaresolutions.com/advancecrm/expenses">Expenses</a></li>
                    <li className="material-icons ion-ios-paper-outline"><a href="https://rainbowsoftwaresolutions.com/advancecrm/deposits">Deposits</a></li>
                    <li className="material-icons ion-ios-clock-outline"><a href="https://rainbowsoftwaresolutions.com/advancecrm/timesheets">Timesheets</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Headers;