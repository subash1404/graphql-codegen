"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.getSdk = exports.GetClientListDocument = exports.WorklogTimerType = exports.WorklogModule = exports.WorkState = exports.WorkModule = exports.WebhookSubscriptionStatusInput = exports.WebhookSubscriptionStatus = exports.TicketSource = exports.TicketConversationType = exports.TaskModule = exports.SortOrder = exports.ServiceTypeItemOfferingType = exports.ServiceItemQuantityType = exports.ServiceCatalogItemType = exports.ServiceCatalogItemStatus = exports.RedeemableBundleApplicableType = exports.RedeemableBundleApplicableHours = exports.RecurringMode = exports.QuoteStatusEnum = exports.PricingModelType = exports.OfferedItemType = exports.OfferedItemAuditStatus = exports.NotePrivacyType = exports.InvoiceStatus = exports.FrequencyDurationUnit = exports.FieldCategory = exports.EventType = exports.DayOfWeek = exports.CustomFieldType = exports.ContractType = exports.ContractSellingPriceCalculationType = exports.ContractQuantityCalculationType = exports.ContractFrequencyType = exports.ClientContractStatus = exports.BillableSiteType = exports.BillableContractQuantityChangeOperation = exports.Block_Item_Usage_Type = void 0;
var graphql_tag_1 = require("graphql-tag");
/** Specifies the usage type of the block item. */
var Block_Item_Usage_Type;
(function (Block_Item_Usage_Type) {
    /** Denotes that the usage type is set to all hours. */
    Block_Item_Usage_Type["AllHours"] = "ALL_HOURS";
    /** Denotes that the usage type is set to business hours. */
    Block_Item_Usage_Type["BusinessHours"] = "BUSINESS_HOURS";
})(Block_Item_Usage_Type = exports.Block_Item_Usage_Type || (exports.Block_Item_Usage_Type = {}));
/** Specifies the quantity change operation for a billable contract. */
var BillableContractQuantityChangeOperation;
(function (BillableContractQuantityChangeOperation) {
    /** Indicates the initial quantity value for the contract. */
    BillableContractQuantityChangeOperation["Baseline"] = "BASELINE";
    /** Indicates that the contract's quantity has decreased. */
    BillableContractQuantityChangeOperation["Decrease"] = "DECREASE";
    /** Indicates that the contract's quantity has increased. */
    BillableContractQuantityChangeOperation["Increase"] = "INCREASE";
})(BillableContractQuantityChangeOperation = exports.BillableContractQuantityChangeOperation || (exports.BillableContractQuantityChangeOperation = {}));
/** Specifies the type of billable site for the contract. */
var BillableSiteType;
(function (BillableSiteType) {
    /** Indicates the contract will be billed to all the client sites. */
    BillableSiteType["All"] = "ALL";
    /** Indicates the contract will be billed to client's headquarters. */
    BillableSiteType["Hq"] = "HQ";
    /** Indicates the contract will be billed to the specified client sites. */
    BillableSiteType["Included"] = "INCLUDED";
})(BillableSiteType = exports.BillableSiteType || (exports.BillableSiteType = {}));
/** Specifies the status of a client contract. */
var ClientContractStatus;
(function (ClientContractStatus) {
    /** Indicates that the client contract is currently active and in effect. */
    ClientContractStatus["Active"] = "ACTIVE";
    /** Indicates that the client contract is in draft state. This could mean the start date is in the future or the contract hasn't been billed yet. */
    ClientContractStatus["Draft"] = "DRAFT";
    /** Indicates that the client contract is inactive and not in effect. */
    ClientContractStatus["Inactive"] = "INACTIVE";
})(ClientContractStatus = exports.ClientContractStatus || (exports.ClientContractStatus = {}));
/** Specifies the frequency type of the contract. */
var ContractFrequencyType;
(function (ContractFrequencyType) {
    /** Indicates the contract's frequency type is 'ONCE'. */
    ContractFrequencyType["Once"] = "ONCE";
    /** Indicates the contract's frequency type is 'PERPETUAL'. */
    ContractFrequencyType["Perpetual"] = "PERPETUAL";
    /** Indicates the contract's frequency type is 'RECURRING'. */
    ContractFrequencyType["Recurring"] = "RECURRING";
})(ContractFrequencyType = exports.ContractFrequencyType || (exports.ContractFrequencyType = {}));
/** Specifies the quantity calculation type for the contract. */
var ContractQuantityCalculationType;
(function (ContractQuantityCalculationType) {
    /** Indicates the quantity calculation type is 'DYNAMIC'. */
    ContractQuantityCalculationType["Dynamic"] = "DYNAMIC";
    /** Indicates the quantity calculation type is 'FIXED'. */
    ContractQuantityCalculationType["Fixed"] = "FIXED";
})(ContractQuantityCalculationType = exports.ContractQuantityCalculationType || (exports.ContractQuantityCalculationType = {}));
/** Specifies how the selling price of the contract is calculated. */
var ContractSellingPriceCalculationType;
(function (ContractSellingPriceCalculationType) {
    /** Indicates the selling price calculation type is 'DYNAMIC'. */
    ContractSellingPriceCalculationType["Dynamic"] = "DYNAMIC";
    /** Indicates the selling price calculation type is 'FIXED'. */
    ContractSellingPriceCalculationType["Fixed"] = "FIXED";
})(ContractSellingPriceCalculationType = exports.ContractSellingPriceCalculationType || (exports.ContractSellingPriceCalculationType = {}));
/** Specifies the type of client contract. */
var ContractType;
(function (ContractType) {
    ContractType["OneTime"] = "ONE_TIME";
    ContractType["Service"] = "SERVICE";
    ContractType["TimeAndMaterial"] = "TIME_AND_MATERIAL";
    ContractType["Usage"] = "USAGE";
})(ContractType = exports.ContractType || (exports.ContractType = {}));
/** The type of the custom field created by the user. */
var CustomFieldType;
(function (CustomFieldType) {
    /**
     * The checkbox field. The maximum length of an option value is 255 characters.
     * The maximum number of checkbox fields is 64.
     */
    CustomFieldType["Checkbox"] = "CHECKBOX";
    /** The date field. The date value should be specified in the ISO 8601 format i.e., 2022-08-15 */
    CustomFieldType["Date"] = "DATE";
    /** The datetime filed. The datetime value should be specified in the ISO 8601 format i.e., 2022-08-15T13:15:30 */
    CustomFieldType["Datetime"] = "DATETIME";
    /** The decimal number field. The maximum number of digits is 10 and maximum number of digits in the fractional part is 2. */
    CustomFieldType["Decimal"] = "DECIMAL";
    /**
     * The multi select field. The maximum length of an option value is 255 characters.
     * The maximum number of checkbox fields is 64.
     */
    CustomFieldType["MultiSelect"] = "MULTI_SELECT";
    /** The whole number field. The maximum number of digits is 10. */
    CustomFieldType["Numeric"] = "NUMERIC";
    /**
     * The paragraph/multi-line field. The maximum length of the paragraph value is 65,535 characters.
     * The maximum number of paragraph fields is 5.
     */
    CustomFieldType["Paragraph"] = "PARAGRAPH";
    /** The password field. used to store password value. */
    CustomFieldType["Password"] = "PASSWORD";
    /** The radio field. The maximum length of an option value is 255 characters. */
    CustomFieldType["Radio"] = "RADIO";
    /** The rich text field. used to store large formatted Text */
    CustomFieldType["RichText"] = "RICH_TEXT";
    /** The Secure text field. used to store secure text */
    CustomFieldType["SecureText"] = "SECURE_TEXT";
    /** The select/dropdown field. The maximum length of an option value is 255 characters. */
    CustomFieldType["Select"] = "SELECT";
    /** The text field. The maximum length of the text value is 255 characters. */
    CustomFieldType["Text"] = "TEXT";
    /** The URL field. used to store an url in secured text field type */
    CustomFieldType["Url"] = "URL";
})(CustomFieldType = exports.CustomFieldType || (exports.CustomFieldType = {}));
/** The day of the week. */
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek["Friday"] = "FRIDAY";
    DayOfWeek["Monday"] = "MONDAY";
    DayOfWeek["Saturday"] = "SATURDAY";
    DayOfWeek["Sunday"] = "SUNDAY";
    DayOfWeek["Thursday"] = "THURSDAY";
    DayOfWeek["Tuesday"] = "TUESDAY";
    DayOfWeek["Wednesday"] = "WEDNESDAY";
})(DayOfWeek = exports.DayOfWeek || (exports.DayOfWeek = {}));
var EventType;
(function (EventType) {
    EventType["ClientCreated"] = "CLIENT_CREATED";
    EventType["ClientDeleted"] = "CLIENT_DELETED";
    EventType["ClientUpdated"] = "CLIENT_UPDATED";
    EventType["ClientUserCreated"] = "CLIENT_USER_CREATED";
    EventType["ClientUserDeleted"] = "CLIENT_USER_DELETED";
    EventType["ClientUserUpdated"] = "CLIENT_USER_UPDATED";
    EventType["InvoiceCreated"] = "INVOICE_CREATED";
    EventType["InvoiceUpdated"] = "INVOICE_UPDATED";
    EventType["QuoteCreated"] = "QUOTE_CREATED";
    EventType["QuoteUpdated"] = "QUOTE_UPDATED";
    EventType["TicketCreated"] = "TICKET_CREATED";
    EventType["TicketDeleted"] = "TICKET_DELETED";
    EventType["TicketReplyReceived"] = "TICKET_REPLY_RECEIVED";
    EventType["TicketReplySent"] = "TICKET_REPLY_SENT";
    EventType["TicketUpdated"] = "TICKET_UPDATED";
    EventType["WorklogCreated"] = "WORKLOG_CREATED";
})(EventType = exports.EventType || (exports.EventType = {}));
/** The category of the field. */
var FieldCategory;
(function (FieldCategory) {
    FieldCategory["Custom"] = "CUSTOM";
    FieldCategory["Default"] = "DEFAULT";
})(FieldCategory = exports.FieldCategory || (exports.FieldCategory = {}));
/** Specifies the frequency duration unit for a recurring contract. */
var FrequencyDurationUnit;
(function (FrequencyDurationUnit) {
    /** Indicates the contract's recurring duration is based on 'DAY'. */
    FrequencyDurationUnit["Day"] = "DAY";
    /** Indicates the contract's recurring duration is based on 'MONTH'. */
    FrequencyDurationUnit["Month"] = "MONTH";
    /** Indicates the contract's recurring duration is based on 'WEEK'. */
    FrequencyDurationUnit["Week"] = "WEEK";
    /** Indicates the contract's recurring duration is based on 'YEAR'. */
    FrequencyDurationUnit["Year"] = "YEAR";
})(FrequencyDurationUnit = exports.FrequencyDurationUnit || (exports.FrequencyDurationUnit = {}));
/** Specifies the status of the invoice. */
var InvoiceStatus;
(function (InvoiceStatus) {
    /** Denotes that the invoice has been finalized. The invoice is moved to this status when it is sent to the client or synced with bookkeeping tools such as QuickBooks or Xero. */
    InvoiceStatus["Approved"] = "APPROVED";
    /** Denotes that the invoice has been created. */
    InvoiceStatus["Draft"] = "DRAFT";
    /** Denotes that the invoice has not paid on or before the due date. */
    InvoiceStatus["Overdue"] = "OVERDUE";
    /** Denotes that the invoice has been paid. */
    InvoiceStatus["Paid"] = "PAID";
    /** Denotes that the invoice payment is in progress. */
    InvoiceStatus["PaymentInProgress"] = "PAYMENT_IN_PROGRESS";
    /** Denotes that the invoice has been marked as void. */
    InvoiceStatus["Void"] = "VOID";
})(InvoiceStatus = exports.InvoiceStatus || (exports.InvoiceStatus = {}));
var NotePrivacyType;
(function (NotePrivacyType) {
    NotePrivacyType["Private"] = "PRIVATE";
    NotePrivacyType["Public"] = "PUBLIC";
})(NotePrivacyType = exports.NotePrivacyType || (exports.NotePrivacyType = {}));
var OfferedItemAuditStatus;
(function (OfferedItemAuditStatus) {
    OfferedItemAuditStatus["Approved"] = "APPROVED";
    OfferedItemAuditStatus["Ignored"] = "IGNORED";
    OfferedItemAuditStatus["Invoiced"] = "INVOICED";
    OfferedItemAuditStatus["Pending"] = "PENDING";
})(OfferedItemAuditStatus = exports.OfferedItemAuditStatus || (exports.OfferedItemAuditStatus = {}));
/** Specifies the offered item type. */
var OfferedItemType;
(function (OfferedItemType) {
    /** The specified item is under a contract. */
    OfferedItemType["Contract"] = "CONTRACT";
    /** The specified item is part of a ticket/project. */
    OfferedItemType["Work"] = "WORK";
})(OfferedItemType = exports.OfferedItemType || (exports.OfferedItemType = {}));
/** Specifies the pricing model type. */
var PricingModelType;
(function (PricingModelType) {
    PricingModelType["PerUnit"] = "PER_UNIT";
})(PricingModelType = exports.PricingModelType || (exports.PricingModelType = {}));
/** Specifies the status of the quote. */
var QuoteStatusEnum;
(function (QuoteStatusEnum) {
    /** Denotes that the quote has been finalized. The quote is moved to this status when it is sent to the client and approved. */
    QuoteStatusEnum["Approved"] = "APPROVED";
    /** Denotes that the quote has been created. */
    QuoteStatusEnum["Draft"] = "DRAFT";
    /** Denoted that the quote has been expired. */
    QuoteStatusEnum["Expired"] = "EXPIRED";
    /** Denotes that the quote is waiting for approval. */
    QuoteStatusEnum["Pending"] = "PENDING";
    /** Denotes that the quote has been rejected. */
    QuoteStatusEnum["Rejected"] = "REJECTED";
})(QuoteStatusEnum = exports.QuoteStatusEnum || (exports.QuoteStatusEnum = {}));
/** Specifies the recurring mode of a recurring contract. */
var RecurringMode;
(function (RecurringMode) {
    /** Indicates the contract's recurring mode is 'ADVANCE'. */
    RecurringMode["Advance"] = "ADVANCE";
    /** Indicates the contract's recurring mode is 'ARREAR'. */
    RecurringMode["Arrear"] = "ARREAR";
    /** Indicates the contract's recurring mode is 'UPFRONT'. */
    RecurringMode["Upfront"] = "UPFRONT";
})(RecurringMode = exports.RecurringMode || (exports.RecurringMode = {}));
/** Specifies the applicable hours type for a redeemable bundle. */
var RedeemableBundleApplicableHours;
(function (RedeemableBundleApplicableHours) {
    /** Indicates that the redeemable bundle is applicable in after hours. */
    RedeemableBundleApplicableHours["AfterHours"] = "AFTER_HOURS";
    /** Indicates that the redeemable bundle is applicable in all hours. */
    RedeemableBundleApplicableHours["AllHours"] = "ALL_HOURS";
    /** Indicates that the redeemable bundle is applicable in business hours. */
    RedeemableBundleApplicableHours["BusinessHours"] = "BUSINESS_HOURS";
})(RedeemableBundleApplicableHours = exports.RedeemableBundleApplicableHours || (exports.RedeemableBundleApplicableHours = {}));
/** Specifies the applicable items for a redeemable bundle. */
var RedeemableBundleApplicableType;
(function (RedeemableBundleApplicableType) {
    /** Indicates that redeemable bundle is applicable for all items. */
    RedeemableBundleApplicableType["AllItems"] = "ALL_ITEMS";
    /** Indicates that redeemable bundle is applicable for the included items. */
    RedeemableBundleApplicableType["IncludedItems"] = "INCLUDED_ITEMS";
})(RedeemableBundleApplicableType = exports.RedeemableBundleApplicableType || (exports.RedeemableBundleApplicableType = {}));
/** Specifies the status of the item */
var ServiceCatalogItemStatus;
(function (ServiceCatalogItemStatus) {
    /** Indicates that the listed item is available for use. */
    ServiceCatalogItemStatus["Active"] = "ACTIVE";
    /** Indicates that the listed item is currently unavailable for use. */
    ServiceCatalogItemStatus["Inactive"] = "INACTIVE";
})(ServiceCatalogItemStatus = exports.ServiceCatalogItemStatus || (exports.ServiceCatalogItemStatus = {}));
/** Defines the type of item. */
var ServiceCatalogItemType;
(function (ServiceCatalogItemType) {
    /** Represents an item that is a product for sale. */
    ServiceCatalogItemType["Product"] = "PRODUCT";
    /** Represents an item that is a service being offered. */
    ServiceCatalogItemType["Service"] = "SERVICE";
})(ServiceCatalogItemType = exports.ServiceCatalogItemType || (exports.ServiceCatalogItemType = {}));
/** The type of the service item. */
var ServiceItemQuantityType;
(function (ServiceItemQuantityType) {
    /** Denotes the block hour service. */
    ServiceItemQuantityType["BlockHours"] = "BLOCK_HOURS";
    /** Denotes the block money service. */
    ServiceItemQuantityType["BlockMoney"] = "BLOCK_MONEY";
    /** Denotes the service. */
    ServiceItemQuantityType["Hours"] = "HOURS";
    /** Denotes the product. */
    ServiceItemQuantityType["Units"] = "UNITS";
})(ServiceItemQuantityType = exports.ServiceItemQuantityType || (exports.ServiceItemQuantityType = {}));
/** Denotes how the SERVICE item is offered to clients */
var ServiceTypeItemOfferingType;
(function (ServiceTypeItemOfferingType) {
    /** A block of Hours Prepaid, Available for consumption by the items included under it */
    ServiceTypeItemOfferingType["BlockHour"] = "BLOCK_HOUR";
    /** A block of Money Prepaid, Available for consumption by the items included under it */
    ServiceTypeItemOfferingType["BlockMoney"] = "BLOCK_MONEY";
    /** Used for manual service offered for the client */
    ServiceTypeItemOfferingType["Hours"] = "HOURS";
    /** A product is offered as a service to a client */
    ServiceTypeItemOfferingType["Quantity"] = "QUANTITY";
    /** A package of items bundled which is offered to a client */
    ServiceTypeItemOfferingType["ServiceBundle"] = "SERVICE_BUNDLE";
})(ServiceTypeItemOfferingType = exports.ServiceTypeItemOfferingType || (exports.ServiceTypeItemOfferingType = {}));
/** Specifies the order in which the records will be sorted ie. ascending or descending. */
var SortOrder;
(function (SortOrder) {
    SortOrder["Asc"] = "ASC";
    SortOrder["Desc"] = "DESC";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
/** Represents the entity/type. */
var TaskModule;
(function (TaskModule) {
    /** The ticket entity. */
    TaskModule["Ticket"] = "TICKET";
})(TaskModule = exports.TaskModule || (exports.TaskModule = {}));
/** Denotes the type of the ticket conversation. */
var TicketConversationType;
(function (TicketConversationType) {
    /** Denotes the description of the ticket since it will be created as the first message of a conversation. */
    TicketConversationType["Description"] = "DESCRIPTION";
    /** Denotes the requester notification. */
    TicketConversationType["ReqNotification"] = "REQ_NOTIFICATION";
    /** Denotes the requester reply. */
    TicketConversationType["ReqReply"] = "REQ_REPLY";
    /** Denotes the technician notification. */
    TicketConversationType["TechNotification"] = "TECH_NOTIFICATION";
    /** Denotes the technician reply. */
    TicketConversationType["TechReply"] = "TECH_REPLY";
})(TicketConversationType = exports.TicketConversationType || (exports.TicketConversationType = {}));
/** The creation source of the ticket. */
var TicketSource;
(function (TicketSource) {
    /** Denotes the ticket is created from SuperOps agent (i.,e from tray icon). */
    TicketSource["Agent"] = "AGENT";
    /** Denotes the ticket is created from AI */
    TicketSource["Ai"] = "AI";
    /** Denotes the ticket is created from contract. */
    TicketSource["Contract"] = "CONTRACT";
    /** Denotes the ticket is created from contract reminder. */
    TicketSource["ContractReminder"] = "CONTRACT_REMINDER";
    /** Denotes the ticket is created from email. */
    TicketSource["Email"] = "EMAIL";
    /** Denotes the ticket is created from the form. */
    TicketSource["Form"] = "FORM";
    /** Denotes the ticket is created via Integration Platform. */
    TicketSource["Integration"] = "INTEGRATION";
    /** Denotes the ticket is created from Phone. */
    TicketSource["Phone"] = "PHONE";
    /** Denotes the ticket is created from Ticket Schedule. */
    TicketSource["Schedule"] = "SCHEDULE";
})(TicketSource = exports.TicketSource || (exports.TicketSource = {}));
var WebhookSubscriptionStatus;
(function (WebhookSubscriptionStatus) {
    WebhookSubscriptionStatus["Disabled"] = "DISABLED";
    WebhookSubscriptionStatus["DisabledBySystem"] = "DISABLED_BY_SYSTEM";
    WebhookSubscriptionStatus["Enabled"] = "ENABLED";
})(WebhookSubscriptionStatus = exports.WebhookSubscriptionStatus || (exports.WebhookSubscriptionStatus = {}));
var WebhookSubscriptionStatusInput;
(function (WebhookSubscriptionStatusInput) {
    WebhookSubscriptionStatusInput["Disabled"] = "DISABLED";
    WebhookSubscriptionStatusInput["Enabled"] = "ENABLED";
})(WebhookSubscriptionStatusInput = exports.WebhookSubscriptionStatusInput || (exports.WebhookSubscriptionStatusInput = {}));
var WorkModule;
(function (WorkModule) {
    WorkModule["Project"] = "PROJECT";
    WorkModule["Ticket"] = "TICKET";
})(WorkModule = exports.WorkModule || (exports.WorkModule = {}));
/** The system defined constants used to identify the task/project statuses programmatically. */
var WorkState;
(function (WorkState) {
    /** Denotes that the work is blocked/on hold. */
    WorkState["Blocked"] = "BLOCKED";
    /** Denotes that the work is cancelled. */
    WorkState["Cancelled"] = "CANCELLED";
    /** Denotes that the work is completed. */
    WorkState["Completed"] = "COMPLETED";
    /** Denotes that the work is planned. */
    WorkState["Planned"] = "PLANNED";
    /** Denotes that the work is in progress. */
    WorkState["Progress"] = "PROGRESS";
})(WorkState = exports.WorkState || (exports.WorkState = {}));
/** Represents the entity/type. */
var WorklogModule;
(function (WorklogModule) {
    /** The ticket entity. */
    WorklogModule["Ticket"] = "TICKET";
})(WorklogModule = exports.WorklogModule || (exports.WorklogModule = {}));
var WorklogTimerType;
(function (WorklogTimerType) {
    WorklogTimerType["Automatic"] = "AUTOMATIC";
    WorklogTimerType["Manual"] = "MANUAL";
})(WorklogTimerType = exports.WorklogTimerType || (exports.WorklogTimerType = {}));
exports.GetClientListDocument = (0, graphql_tag_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query GetClientList($listInfo: ListInfoInput!) {\n  getClientList(input: $listInfo) {\n    clients {\n      accountId\n    }\n  }\n}\n    "], ["\n    query GetClientList($listInfo: ListInfoInput!) {\n  getClientList(input: $listInfo) {\n    clients {\n      accountId\n    }\n  }\n}\n    "])));
var defaultWrapper = function (action, _operationName, _operationType, _variables) { return action(); };
function getSdk(client, withWrapper) {
    if (withWrapper === void 0) { withWrapper = defaultWrapper; }
    return {
        GetClientList: function (variables, requestHeaders) {
            return withWrapper(function (wrappedRequestHeaders) { return client.request(exports.GetClientListDocument, variables, __assign(__assign({}, requestHeaders), wrappedRequestHeaders)); }, 'GetClientList', 'query', variables);
        }
    };
}
exports.getSdk = getSdk;
var templateObject_1;
