import "./dashboard-styles/general, header and sidebar.css";
import "./dashboard-styles/body.css";
import profilePicture from "./Expense Tracker Assets/profile picture.jpg";
import dropdownIcon from "./Expense Tracker Assets/icons/down-chevron.png";
import notificationIcon from "./Expense Tracker Assets/icons/notification.png";
import logo from "./Expense Tracker Assets/logo.png";
import logoutIcon from "./Expense Tracker Assets/icons/logout.png";
import dashboardIcon from "./Expense Tracker Assets/icons/dashboard.png";
import investmentIcon from "./Expense Tracker Assets/icons/investment.png";
import statisticsIcon from "./Expense Tracker Assets/icons/statistics.png";
import usersIcon from "./Expense Tracker Assets/icons/users.png";
import settingsIcon from "./Expense Tracker Assets/icons/setting.png";
import modeIcon from "./Expense Tracker Assets/icons/light mode.png";
import walletIcon from "./Expense Tracker Assets/icons/wallet.png";
import incomeIcon from "./Expense Tracker Assets/icons/income.png";
import expenseIcon from "./Expense Tracker Assets/icons/expense.png";
import overviewIcon from "./Expense Tracker Assets/icons/overview.png";
import addIcon from "./Expense Tracker Assets/icons/add.png";
import plusIcon from "./Expense Tracker Assets/icons/plus.png";
import refreshIcon from "./Expense Tracker Assets/icons/refresh.png";
import showPasswordIcon from "./Expense Tracker Assets/icons/view password.png";
import hidePasswordIcon from "./Expense Tracker Assets/icons/hide password.png";
import editIcon from "./Expense Tracker Assets/icons/menu.png";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="left-section">
          <p className="welcome">Welcome Back, Jude</p>
        </div>
        <div className="right-section">
          <div className="search-bar">
            <input
              type="search"
              name="search-input"
              id="search-input"
              placeholder="Search..."
            />
          </div>
          <div className="account-info-notification-bar">
            <button className="more-account-details">
              <img
                id="profile-picture"
                src={profilePicture}
                alt="profile picture"
              />
              <span>Jude Ben</span>
              <img
                id="dropdown-icon"
                src={dropdownIcon}
                alt="more details button"
              />
            </button>
            <button className="notification-button">
              <img src={notificationIcon} alt="" id="notification-icon" />
            </button>
          </div>
        </div>
      </header>
      <div className="sidebar">
        <div className="top-sidebar-section">
          <div className="app-name-logo">
            <p id="app-name">
              EXTRAC
              <span>K</span>
            </p>
            <img src={logo} id="app-logo" />
          </div>
          <div className="navigation-container">
            <span>
              <div className="nav-buttons">
                <img src={dashboardIcon} alt="dashboard button" />
                <p>DashBoard</p>
              </div>
            </span>
            <div className="nav-buttons">
              <img src={investmentIcon} alt="investment button" />
              <p>Investment</p>
            </div>
            <div className="nav-buttons">
              <img src={statisticsIcon} alt="statistics button" />
              <p>Statistics</p>
            </div>
            <div className="nav-buttons">
              <img src={usersIcon} alt="users button" />
              <p>Users</p>
            </div>
            <div className="nav-buttons">
              <img src={settingsIcon} alt="settings button" />
              <p>Settings</p>
            </div>
            <div className="nav-buttons">
              <img src={modeIcon} alt="switch to dark mode button" />
              <p>Mode</p>
            </div>
          </div>
        </div>
        <div className="bottom-sidebar-section">
          <div className="logout-button">
            <img src={logoutIcon} alt="Logout Button" />
            <p>Logout</p>
          </div>
        </div>
      </div>
      <section className="section-1">
        <div className="balance-income-expense">
          <div className="balance-income-expense-icon">
            <img src={walletIcon} alt="available balance icon" />
          </div>
          <div className="content-and-money">
            <p className="content-title">Available Balance</p>
            <p className="money">&#36;2500</p>
          </div>
        </div>
        <div className="balance-income-expense">
          <div className="balance-income-expense-icon">
            <img src={incomeIcon} alt="income icon" />
          </div>
          <div className="content-and-money">
            <p className="content-title">Income</p>
            <p className="money">&#36;6000</p>
          </div>
        </div>
        <div className="balance-income-expense">
          <div className="balance-income-expense-icon">
            <img src={expenseIcon} alt="expense icon" />
          </div>
          <div className="content-and-money">
            <p className="content-title">Expense</p>
            <p className="money">&#36;3500</p>
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="section-2-group-division">
          <div className="group-division">
            <div className="content-header">
              <p className="content-title">Analytics</p>
              <select class="frequency-dropdown">
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <div className="content-body">
              <h2>No Graph Yet</h2>
            </div>
          </div>
          <div className="group-division">
            <div className="content-header">
              <p className="content-title">Account Overview</p>
              <img src={overviewIcon} alt="overview icon" />
            </div>
            <div className="content-body">
              <div className="account-overview">
                <div className="account-overview-items">
                  <p>User</p>
                  <p>6786ASW97</p>
                </div>
                <div className="account-overview-items">
                  <p>Invested</p>
                  <p>&#36;3000</p>
                </div>
                <div className="account-overview-items">
                  <p>Spent</p>
                  <p>&#36;6000</p>
                </div>
                <div className="account-overview-items">
                  <p>Saved</p>
                  <p>&#36;3500</p>
                </div>
                <div className="account-overview-items">
                  <p>Available Funds</p>
                  <p>
                    <span>&#36;4000</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-2-group">
          <div className="content-header">
            <p className="content-title">Statistics</p>
          </div>
          <div className="payment-mode-section">
            <div className="content-header">
              <p className="content-title">Payment Modes</p>
              <button className="add-payment-mode-button">
                <img src={plusIcon} alt="add icon" />
                <p>Add New</p>
              </button>
            </div>
            <div className="current-payment-modes-group">
              <div className="payment-mode">
                <div className="payment-mode-type-and-balance">
                  <p className="payment-mode-type">Bank Account</p>
                  <p className="payment-mode-balance">&#36;750</p>
                </div>
                <div className="align-right">
                  <div className="payment-mode-buttons">
                    <button>
                      <img
                        src={refreshIcon}
                        alt=""
                        className="refresh-button"
                      />
                    </button>
                    <button>
                      <img
                        src={showPasswordIcon}
                        alt=""
                        className="view-password-button"
                      />
                    </button>
                    <button>
                      <img src={editIcon} alt="" className="edit-button" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="payment-mode">
                <div className="payment-mode-type-and-balance">
                  <p className="payment-mode-type">Debit Card</p>
                  <p className="payment-mode-balance">****</p>
                </div>
                <div className="align-right">
                  <div className="payment-mode-buttons">
                    <button>
                      <img
                        src={refreshIcon}
                        alt=""
                        className="refresh-button"
                      />
                    </button>
                    <button>
                      <img
                        src={hidePasswordIcon}
                        alt=""
                        className="view-password-button"
                      />
                    </button>
                    <button>
                      <img src={editIcon} alt="" className="edit-button" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="expenditure-section">
            <div className="content-header">
              <p className="content-title">Expenditure</p>
            </div>
            <div className="content-sub-header">
              <button className="add-expenditure-btn">
                <img src={addIcon} alt="add expenditure icon " />
              </button>
              <select class="frequency-dropdown-2">
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <div className="content-body">
              <div className="expenditure-graph-container">
                <h2>No Graph Yet</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-3">
        <div className="investment-savings-tax-containers">
          <div className="content-header">
            <p className="content-title">Investments</p>
          </div>
          <div className="investments-container">
            <div className="investments">
              <p>&#36;3000</p>
              <p>Cryptocurrency</p>
            </div>
            <div className="investments">
              <p>&#36;987</p>
              <p>SIP</p>
            </div>
            <div className="investments">
              <p>&#36;500</p>
              <p>Mutual Funds</p>
            </div>
            <div className="total-investments-and-interest">
              <p>&#36;5200</p>
              <p>
                <span>+10.2%</span>
              </p>
            </div>
          </div>
        </div>
        <div className="investment-savings-tax-containers">
          <div className="content-header">
            <p className="content-title">Savings</p>
          </div>
        </div>
        <div className="investment-savings-tax-containers">
          <div className="content-header">
            <p className="content-title">Income Tax Deduction</p>
          </div>
          <div className="tax-deduction-graph-container">
            <h2>No Graph Yet</h2>
          </div>
        </div>
      </section>
      <section className="section-4">
        <div className="transaction-history-and-budget-container">
          <div className="content-header">
            <p className="content-title">Transaction-history</p>
            <select class="frequency-dropdown">
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
        </div>
        <div className="transaction-history-and-budget-container">
          <div className="content-header">
            <p className="content-title">Budget</p>
            <select class="frequency-dropdown-2">
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
