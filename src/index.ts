import "regenerator-runtime/runtime";
import "whatwg-fetch";

import Credit from "./Credit";
import Obligation from "./Obligation";
import Protection from "./Protection";
import Account from "./Account";
import Transaction from "./Transaction";
import CreditMonitoring from "./Account/Protection/CreditMonitoring";

const LevelCreditAPI = { Credit, Obligation, Protection, Account, Transaction, CreditMonitoring };

export default LevelCreditAPI;
