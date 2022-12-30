import GetPaymentMatches from "./GetPaymentMatches";
import GetLeasePaymentMatches from "./GetLeasePaymentMatches";
import GetUtilityPaymentMatches from "./GetUtilityPaymentMatches";
import GetTransactions from "./GetTransactions";
import CreateTransactionMatch from "./CreateTransactionMatch";
import GetPlaidItem from "./GetPlaidItem";
import GetPlaidItems from "./GetPlaidItems";
import CreatePlaidItem from "./CreatePlaidItem";
import UpdatePlaidItem from "./UpdatePlaidItem";
import DeletePlaidItem from "./DeletePlaidItem";
import CreatePlaidLinkToken from "./CreatePlaidLinkToken";

const PaymentMatchActions = {
  GetPaymentMatches,
  GetLeasePaymentMatches,
  GetUtilityPaymentMatches,
  GetTransactions,
  CreateTransactionMatch,
  CreatePlaidLinkToken,
  GetPlaidItems,
  GetPlaidItem,
  CreatePlaidItem,
  UpdatePlaidItem,
  DeletePlaidItem,
};

export default PaymentMatchActions;
