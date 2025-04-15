"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationChannel = exports.NotePrivacyType = exports.Mode = exports.MetricUnits = exports.MetricPercentageDenominatorType = exports.MetricDataType = exports.MetricCategory = exports.MaintenanceStatus = exports.InvoiceStatusEnum = exports.InvoiceMetaSource = exports.IntegrationSource = exports.InAppNotificationState = exports.InAppNotificationEvent = exports.IdentifierName = exports.FrequencyDurationUnit = exports.FlowActionValueType = exports.FlowActionType = exports.FlowActionProcessCategory = exports.FieldType = exports.FieldCategory = exports.EventType = exports.EntityOperation = exports.DomainType = exports.DiscountType = exports.DataReportColumnRenderType = exports.CustomerPricingModel = exports.CustomMailServerType = exports.CustomMailServerAccountSyncState = exports.CursorType = exports.ConversationType = exports.ConversationStatus = exports.ContractType = exports.ContractSellingPriceCalculationType = exports.ContractRecurringMode = exports.ContractQuantityCalculationType = exports.ContractPricingOverrideCategory = exports.ContractPricingItemOverrideType = exports.ContractPricingItemOverrideByMetric = exports.ContractItemFrequencyType = exports.ContractFrequencyType = exports.ClientContractStatus = exports.BillableSiteType = exports.BillableContractQuantityChangeOperation = exports.AttachmentCategory = exports.AddressCategory = exports.ActorName = exports.AccountType = exports.AiFeatureState = exports.AiFeatureGroupConstant = exports.AiFeatureConstant = void 0;
exports.GetAllMailboxesDocument = exports.GetAllEmployeesDocument = exports.WebhookSubscriptionStatusInput = exports.WebhookSubscriptionStatus = exports.UserType = exports.UserOperationalStatus = exports.User_Email_Validation_Status = exports.TpEntityType = exports.SubscriptionStatus = exports.SubscriptionDurationUnit = exports.StatusEnum = exports.State = exports.SessionAppType = exports.ServiceTypeItemOfferingType = exports.ServiceCatalogItemType = exports.ServiceCatalogItemStatus = exports.ScopeEnum = exports.RunbookStatus = exports.RoleTypeEnum = exports.ReportType = exports.RedeemableBundleApplicableType = exports.RedeemableBundleApplicableHours = exports.RecurringMode = exports.RecipientType = exports.RatingType = exports.QuoteStatusEnum = exports.QuoteEventType = exports.QuoteApprovalStatus = exports.ProvisionRuleEntityType = exports.ProductOfferingEntityType = exports.ProductFeatureReleaseState = exports.PricingModelType = exports.PortalDomainStatus = exports.PolicyCategoryAssignedBy = exports.PlaceholderTemplateConstant = exports.OverriddenBillingSetting = exports.OperationStatus = exports.OfferedItemType = exports.OfferedItemModule = exports.OfferedItemAuditStatus = exports.Os = exports.NotificationTemplateType = exports.NotificationTemplateSubtype = void 0;
exports.getSdk = getSdk;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
var AiFeatureConstant;
(function (AiFeatureConstant) {
    AiFeatureConstant["RealTimeAlerts"] = "REAL_TIME_ALERTS";
    AiFeatureConstant["RecommendedSolution"] = "RECOMMENDED_SOLUTION";
    AiFeatureConstant["ScriptGeneration"] = "SCRIPT_GENERATION";
    AiFeatureConstant["SideConversationCompose"] = "SIDE_CONVERSATION_COMPOSE";
    AiFeatureConstant["SimilarTickets"] = "SIMILAR_TICKETS";
    AiFeatureConstant["TicketsSummaryByCategory"] = "TICKETS_SUMMARY_BY_CATEGORY";
    AiFeatureConstant["TicketConversationSummarize"] = "TICKET_CONVERSATION_SUMMARIZE";
    AiFeatureConstant["WebSearch"] = "WEB_SEARCH";
    AiFeatureConstant["WorklogNoteCompose"] = "WORKLOG_NOTE_COMPOSE";
    AiFeatureConstant["WorklogSummarization"] = "WORKLOG_SUMMARIZATION";
})(AiFeatureConstant || (exports.AiFeatureConstant = AiFeatureConstant = {}));
var AiFeatureGroupConstant;
(function (AiFeatureGroupConstant) {
    AiFeatureGroupConstant["Alert"] = "ALERT";
    AiFeatureGroupConstant["Prompt"] = "PROMPT";
    AiFeatureGroupConstant["Rmm"] = "RMM";
    AiFeatureGroupConstant["TicketSummarize"] = "TICKET_SUMMARIZE";
    AiFeatureGroupConstant["WorklogSummarize"] = "WORKLOG_SUMMARIZE";
})(AiFeatureGroupConstant || (exports.AiFeatureGroupConstant = AiFeatureGroupConstant = {}));
var AiFeatureState;
(function (AiFeatureState) {
    AiFeatureState["Active"] = "ACTIVE";
    AiFeatureState["Inactive"] = "INACTIVE";
    AiFeatureState["InProgress"] = "IN_PROGRESS";
})(AiFeatureState || (exports.AiFeatureState = AiFeatureState = {}));
var AccountType;
(function (AccountType) {
    AccountType["Client"] = "CLIENT";
    AccountType["Msp"] = "MSP";
})(AccountType || (exports.AccountType = AccountType = {}));
var ActorName;
(function (ActorName) {
    ActorName["EventTrigger"] = "EVENT_TRIGGER";
    ActorName["PriorityMatrix"] = "PRIORITY_MATRIX";
    ActorName["Sla"] = "SLA";
    ActorName["System"] = "SYSTEM";
    ActorName["TimeTrigger"] = "TIME_TRIGGER";
    ActorName["UnknownUser"] = "UNKNOWN_USER";
    ActorName["User"] = "USER";
})(ActorName || (exports.ActorName = ActorName = {}));
var AddressCategory;
(function (AddressCategory) {
    AddressCategory["External"] = "EXTERNAL";
    AddressCategory["Internal"] = "INTERNAL";
})(AddressCategory || (exports.AddressCategory = AddressCategory = {}));
var AttachmentCategory;
(function (AttachmentCategory) {
    AttachmentCategory["Msa"] = "MSA";
    AttachmentCategory["Others"] = "OTHERS";
})(AttachmentCategory || (exports.AttachmentCategory = AttachmentCategory = {}));
var BillableContractQuantityChangeOperation;
(function (BillableContractQuantityChangeOperation) {
    BillableContractQuantityChangeOperation["Baseline"] = "BASELINE";
    BillableContractQuantityChangeOperation["Decrease"] = "DECREASE";
    BillableContractQuantityChangeOperation["Increase"] = "INCREASE";
})(BillableContractQuantityChangeOperation || (exports.BillableContractQuantityChangeOperation = BillableContractQuantityChangeOperation = {}));
var BillableSiteType;
(function (BillableSiteType) {
    BillableSiteType["All"] = "ALL";
    BillableSiteType["Hq"] = "HQ";
    BillableSiteType["Included"] = "INCLUDED";
})(BillableSiteType || (exports.BillableSiteType = BillableSiteType = {}));
var ClientContractStatus;
(function (ClientContractStatus) {
    ClientContractStatus["Active"] = "ACTIVE";
    ClientContractStatus["Draft"] = "DRAFT";
    ClientContractStatus["Inactive"] = "INACTIVE";
})(ClientContractStatus || (exports.ClientContractStatus = ClientContractStatus = {}));
var ContractFrequencyType;
(function (ContractFrequencyType) {
    ContractFrequencyType["Once"] = "ONCE";
    ContractFrequencyType["Perpetual"] = "PERPETUAL";
    ContractFrequencyType["Recurring"] = "RECURRING";
})(ContractFrequencyType || (exports.ContractFrequencyType = ContractFrequencyType = {}));
var ContractItemFrequencyType;
(function (ContractItemFrequencyType) {
    ContractItemFrequencyType["Custom"] = "CUSTOM";
    ContractItemFrequencyType["Once"] = "ONCE";
    ContractItemFrequencyType["Perpetual"] = "PERPETUAL";
})(ContractItemFrequencyType || (exports.ContractItemFrequencyType = ContractItemFrequencyType = {}));
var ContractPricingItemOverrideByMetric;
(function (ContractPricingItemOverrideByMetric) {
    ContractPricingItemOverrideByMetric["Percentage"] = "PERCENTAGE";
    ContractPricingItemOverrideByMetric["Price"] = "PRICE";
})(ContractPricingItemOverrideByMetric || (exports.ContractPricingItemOverrideByMetric = ContractPricingItemOverrideByMetric = {}));
var ContractPricingItemOverrideType;
(function (ContractPricingItemOverrideType) {
    ContractPricingItemOverrideType["Decrease"] = "DECREASE";
    ContractPricingItemOverrideType["Flat"] = "FLAT";
    ContractPricingItemOverrideType["Increase"] = "INCREASE";
})(ContractPricingItemOverrideType || (exports.ContractPricingItemOverrideType = ContractPricingItemOverrideType = {}));
var ContractPricingOverrideCategory;
(function (ContractPricingOverrideCategory) {
    ContractPricingOverrideCategory["Conditional"] = "CONDITIONAL";
    ContractPricingOverrideCategory["NonConditional"] = "NON_CONDITIONAL";
})(ContractPricingOverrideCategory || (exports.ContractPricingOverrideCategory = ContractPricingOverrideCategory = {}));
var ContractQuantityCalculationType;
(function (ContractQuantityCalculationType) {
    ContractQuantityCalculationType["Dynamic"] = "DYNAMIC";
    ContractQuantityCalculationType["Fixed"] = "FIXED";
})(ContractQuantityCalculationType || (exports.ContractQuantityCalculationType = ContractQuantityCalculationType = {}));
var ContractRecurringMode;
(function (ContractRecurringMode) {
    ContractRecurringMode["Advance"] = "ADVANCE";
    ContractRecurringMode["Arrear"] = "ARREAR";
    ContractRecurringMode["Upfront"] = "UPFRONT";
})(ContractRecurringMode || (exports.ContractRecurringMode = ContractRecurringMode = {}));
var ContractSellingPriceCalculationType;
(function (ContractSellingPriceCalculationType) {
    ContractSellingPriceCalculationType["Dynamic"] = "DYNAMIC";
    ContractSellingPriceCalculationType["Fixed"] = "FIXED";
})(ContractSellingPriceCalculationType || (exports.ContractSellingPriceCalculationType = ContractSellingPriceCalculationType = {}));
var ContractType;
(function (ContractType) {
    ContractType["OneTime"] = "ONE_TIME";
    ContractType["Service"] = "SERVICE";
    ContractType["TimeAndMaterial"] = "TIME_AND_MATERIAL";
    ContractType["Usage"] = "USAGE";
})(ContractType || (exports.ContractType = ContractType = {}));
var ConversationStatus;
(function (ConversationStatus) {
    ConversationStatus["Failed"] = "FAILED";
    ConversationStatus["InProgress"] = "IN_PROGRESS";
    ConversationStatus["Seen"] = "SEEN";
    ConversationStatus["Sent"] = "SENT";
})(ConversationStatus || (exports.ConversationStatus = ConversationStatus = {}));
var ConversationType;
(function (ConversationType) {
    ConversationType["Description"] = "DESCRIPTION";
    ConversationType["Email"] = "EMAIL";
    /** Added below fields for Common Conversation */
    ConversationType["Event"] = "EVENT";
    ConversationType["ReqNotification"] = "REQ_NOTIFICATION";
    ConversationType["ReqReply"] = "REQ_REPLY";
    /** Added below type for Vendor Conversation */
    ConversationType["TechEmail"] = "TECH_EMAIL";
    ConversationType["TechNotification"] = "TECH_NOTIFICATION";
    ConversationType["TechReply"] = "TECH_REPLY";
    ConversationType["VendorEmail"] = "VENDOR_EMAIL";
})(ConversationType || (exports.ConversationType = ConversationType = {}));
var CursorType;
(function (CursorType) {
    CursorType["After"] = "AFTER";
    CursorType["Before"] = "BEFORE";
})(CursorType || (exports.CursorType = CursorType = {}));
var CustomMailServerAccountSyncState;
(function (CustomMailServerAccountSyncState) {
    CustomMailServerAccountSyncState["AuthenticationError"] = "AUTHENTICATION_ERROR";
    CustomMailServerAccountSyncState["Connected"] = "CONNECTED";
    CustomMailServerAccountSyncState["Connecting"] = "CONNECTING";
    CustomMailServerAccountSyncState["ConnectError"] = "CONNECT_ERROR";
    CustomMailServerAccountSyncState["Disconnected"] = "DISCONNECTED";
    CustomMailServerAccountSyncState["Downloading"] = "DOWNLOADING";
    CustomMailServerAccountSyncState["Exception"] = "EXCEPTION";
    CustomMailServerAccountSyncState["Init"] = "INIT";
    CustomMailServerAccountSyncState["Initializing"] = "INITIALIZING";
    CustomMailServerAccountSyncState["Invalid"] = "INVALID";
    CustomMailServerAccountSyncState["InvalidCredentials"] = "INVALID_CREDENTIALS";
    CustomMailServerAccountSyncState["Partial"] = "PARTIAL";
    CustomMailServerAccountSyncState["Reauthenticate"] = "REAUTHENTICATE";
    CustomMailServerAccountSyncState["Running"] = "RUNNING";
    CustomMailServerAccountSyncState["Stopped"] = "STOPPED";
    CustomMailServerAccountSyncState["Syncing"] = "SYNCING";
    CustomMailServerAccountSyncState["SyncError"] = "SYNC_ERROR";
    CustomMailServerAccountSyncState["Unset"] = "UNSET";
    CustomMailServerAccountSyncState["Valid"] = "VALID";
})(CustomMailServerAccountSyncState || (exports.CustomMailServerAccountSyncState = CustomMailServerAccountSyncState = {}));
var CustomMailServerType;
(function (CustomMailServerType) {
    CustomMailServerType["Google"] = "GOOGLE";
    CustomMailServerType["Microsoft"] = "MICROSOFT";
    CustomMailServerType["Others"] = "OTHERS";
})(CustomMailServerType || (exports.CustomMailServerType = CustomMailServerType = {}));
var CustomerPricingModel;
(function (CustomerPricingModel) {
    CustomerPricingModel["PerUnit"] = "PER_UNIT";
    CustomerPricingModel["Tiered"] = "TIERED";
})(CustomerPricingModel || (exports.CustomerPricingModel = CustomerPricingModel = {}));
var DataReportColumnRenderType;
(function (DataReportColumnRenderType) {
    DataReportColumnRenderType["Bgcolor"] = "BGCOLOR";
    DataReportColumnRenderType["Plain"] = "PLAIN";
})(DataReportColumnRenderType || (exports.DataReportColumnRenderType = DataReportColumnRenderType = {}));
var DiscountType;
(function (DiscountType) {
    DiscountType["Amount"] = "AMOUNT";
    DiscountType["Percent"] = "PERCENT";
})(DiscountType || (exports.DiscountType = DiscountType = {}));
var DomainType;
(function (DomainType) {
    DomainType["CustomDomain"] = "CUSTOM_DOMAIN";
    DomainType["CustomSubdomain"] = "CUSTOM_SUBDOMAIN";
    DomainType["SystemSubdomain"] = "SYSTEM_SUBDOMAIN";
})(DomainType || (exports.DomainType = DomainType = {}));
var EntityOperation;
(function (EntityOperation) {
    EntityOperation["Associate"] = "ASSOCIATE";
    EntityOperation["Closed"] = "CLOSED";
    EntityOperation["Create"] = "CREATE";
    EntityOperation["Delete"] = "DELETE";
    EntityOperation["Merge"] = "MERGE";
    EntityOperation["Resolved"] = "RESOLVED";
    EntityOperation["Restore"] = "RESTORE";
    EntityOperation["Spam"] = "SPAM";
    EntityOperation["Split"] = "SPLIT";
    EntityOperation["Trash"] = "TRASH";
    EntityOperation["Unassociate"] = "UNASSOCIATE";
    EntityOperation["Unspam"] = "UNSPAM";
    EntityOperation["Update"] = "UPDATE";
    EntityOperation["View"] = "VIEW";
})(EntityOperation || (exports.EntityOperation = EntityOperation = {}));
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
    EventType["UserCreated"] = "USER_CREATED";
    EventType["UserDeleted"] = "USER_DELETED";
    EventType["UserUpdated"] = "USER_UPDATED";
    EventType["WorklogCreated"] = "WORKLOG_CREATED";
})(EventType || (exports.EventType = EventType = {}));
var FieldCategory;
(function (FieldCategory) {
    FieldCategory["Custom"] = "CUSTOM";
    FieldCategory["Default"] = "DEFAULT";
})(FieldCategory || (exports.FieldCategory = FieldCategory = {}));
var FieldType;
(function (FieldType) {
    FieldType["Checkbox"] = "CHECKBOX";
    FieldType["Date"] = "DATE";
    FieldType["Datetime"] = "DATETIME";
    FieldType["Decimal"] = "DECIMAL";
    FieldType["MultiSelect"] = "MULTI_SELECT";
    FieldType["Numeric"] = "NUMERIC";
    FieldType["Paragraph"] = "PARAGRAPH";
    FieldType["Password"] = "PASSWORD";
    FieldType["Radio"] = "RADIO";
    FieldType["RichText"] = "RICH_TEXT";
    FieldType["SecureText"] = "SECURE_TEXT";
    FieldType["Select"] = "SELECT";
    FieldType["Text"] = "TEXT";
    FieldType["Url"] = "URL";
})(FieldType || (exports.FieldType = FieldType = {}));
var FlowActionProcessCategory;
(function (FlowActionProcessCategory) {
    FlowActionProcessCategory["Async"] = "ASYNC";
    FlowActionProcessCategory["None"] = "NONE";
    FlowActionProcessCategory["Sync"] = "SYNC";
})(FlowActionProcessCategory || (exports.FlowActionProcessCategory = FlowActionProcessCategory = {}));
var FlowActionType;
(function (FlowActionType) {
    FlowActionType["Group"] = "GROUP";
    FlowActionType["Single"] = "SINGLE";
})(FlowActionType || (exports.FlowActionType = FlowActionType = {}));
var FlowActionValueType;
(function (FlowActionValueType) {
    FlowActionValueType["Checklist"] = "CHECKLIST";
    FlowActionValueType["NonMonitoringAsset"] = "NON_MONITORING_ASSET";
    FlowActionValueType["Note"] = "NOTE";
    FlowActionValueType["RequestNote"] = "REQUEST_NOTE";
    FlowActionValueType["Script"] = "SCRIPT";
    FlowActionValueType["SideConversation"] = "SIDE_CONVERSATION";
    FlowActionValueType["TaskTemplate"] = "TASK_TEMPLATE";
    FlowActionValueType["TicketApproval"] = "TICKET_APPROVAL";
    FlowActionValueType["TicketReply"] = "TICKET_REPLY";
    FlowActionValueType["TicketUpdate"] = "TICKET_UPDATE";
    FlowActionValueType["Worklog"] = "WORKLOG";
})(FlowActionValueType || (exports.FlowActionValueType = FlowActionValueType = {}));
var FrequencyDurationUnit;
(function (FrequencyDurationUnit) {
    FrequencyDurationUnit["Day"] = "DAY";
    FrequencyDurationUnit["Month"] = "MONTH";
    FrequencyDurationUnit["Week"] = "WEEK";
    FrequencyDurationUnit["Year"] = "YEAR";
})(FrequencyDurationUnit || (exports.FrequencyDurationUnit = FrequencyDurationUnit = {}));
var IdentifierName;
(function (IdentifierName) {
    IdentifierName["InvoiceIdentifier"] = "INVOICE_IDENTIFIER";
    IdentifierName["ProjectIdentifier"] = "PROJECT_IDENTIFIER";
    IdentifierName["QuoteIdentifier"] = "QUOTE_IDENTIFIER";
    IdentifierName["TaskIdentifier"] = "TASK_IDENTIFIER";
    IdentifierName["TicketIdentifier"] = "TICKET_IDENTIFIER";
})(IdentifierName || (exports.IdentifierName = IdentifierName = {}));
var InAppNotificationEvent;
(function (InAppNotificationEvent) {
    InAppNotificationEvent["AssetAlert"] = "ASSET_ALERT";
    InAppNotificationEvent["ClientTechNewSalesEmail"] = "CLIENT_TECH_NEW_SALES_EMAIL";
    InAppNotificationEvent["ClientTechQuoteApproval"] = "CLIENT_TECH_QUOTE_APPROVAL";
    InAppNotificationEvent["ClientTechQuoteRejection"] = "CLIENT_TECH_QUOTE_REJECTION";
    InAppNotificationEvent["ClientTechReqReply"] = "CLIENT_TECH_REQ_REPLY";
    InAppNotificationEvent["TaskTechAssigned"] = "TASK_TECH_ASSIGNED";
    InAppNotificationEvent["TaskTechDueToday"] = "TASK_TECH_DUE_TODAY";
    InAppNotificationEvent["TaskTechOverdue"] = "TASK_TECH_OVERDUE";
    InAppNotificationEvent["TechMention"] = "TECH_MENTION";
    InAppNotificationEvent["TechVendorReply"] = "TECH_VENDOR_REPLY";
    InAppNotificationEvent["TicketTechApprovalActionTaken"] = "TICKET_TECH_APPROVAL_ACTION_TAKEN";
    InAppNotificationEvent["TicketTechApprovalStatus"] = "TICKET_TECH_APPROVAL_STATUS";
    InAppNotificationEvent["TicketTechAssignment"] = "TICKET_TECH_ASSIGNMENT";
    InAppNotificationEvent["TicketTechCreation"] = "TICKET_TECH_CREATION";
    InAppNotificationEvent["TicketTechFrSlaEscalation"] = "TICKET_TECH_FR_SLA_ESCALATION";
    InAppNotificationEvent["TicketTechGroupAssignment"] = "TICKET_TECH_GROUP_ASSIGNMENT";
    InAppNotificationEvent["TicketTechNoteAdded"] = "TICKET_TECH_NOTE_ADDED";
    InAppNotificationEvent["TicketTechReqReply"] = "TICKET_TECH_REQ_REPLY";
    InAppNotificationEvent["TicketTechResSlaEscalation"] = "TICKET_TECH_RES_SLA_ESCALATION";
    InAppNotificationEvent["TicketTechTechnicianApproval"] = "TICKET_TECH_TECHNICIAN_APPROVAL";
})(InAppNotificationEvent || (exports.InAppNotificationEvent = InAppNotificationEvent = {}));
var InAppNotificationState;
(function (InAppNotificationState) {
    InAppNotificationState["New"] = "NEW";
    InAppNotificationState["Read"] = "READ";
    InAppNotificationState["Unread"] = "UNREAD";
})(InAppNotificationState || (exports.InAppNotificationState = InAppNotificationState = {}));
var IntegrationSource;
(function (IntegrationSource) {
    IntegrationSource["Pax8"] = "PAX8";
    IntegrationSource["SplashtopWorkFromHome"] = "SPLASHTOP_WORK_FROM_HOME";
})(IntegrationSource || (exports.IntegrationSource = IntegrationSource = {}));
var InvoiceMetaSource;
(function (InvoiceMetaSource) {
    InvoiceMetaSource["ListView"] = "LIST_VIEW";
    InvoiceMetaSource["Reporting"] = "REPORTING";
})(InvoiceMetaSource || (exports.InvoiceMetaSource = InvoiceMetaSource = {}));
var InvoiceStatusEnum;
(function (InvoiceStatusEnum) {
    InvoiceStatusEnum["Approved"] = "APPROVED";
    InvoiceStatusEnum["Draft"] = "DRAFT";
    InvoiceStatusEnum["InGeneration"] = "IN_GENERATION";
    InvoiceStatusEnum["Overdue"] = "OVERDUE";
    InvoiceStatusEnum["Paid"] = "PAID";
    InvoiceStatusEnum["PaymentInProgress"] = "PAYMENT_IN_PROGRESS";
    InvoiceStatusEnum["Void"] = "VOID";
})(InvoiceStatusEnum || (exports.InvoiceStatusEnum = InvoiceStatusEnum = {}));
var MaintenanceStatus;
(function (MaintenanceStatus) {
    MaintenanceStatus["Active"] = "ACTIVE";
    MaintenanceStatus["Inactive"] = "INACTIVE";
})(MaintenanceStatus || (exports.MaintenanceStatus = MaintenanceStatus = {}));
var MetricCategory;
(function (MetricCategory) {
    MetricCategory["Disk"] = "DISK";
    MetricCategory["Eventlog"] = "EVENTLOG";
    MetricCategory["File"] = "FILE";
    MetricCategory["Folder"] = "FOLDER";
    MetricCategory["General"] = "GENERAL";
    MetricCategory["Hardware"] = "HARDWARE";
    MetricCategory["Log"] = "LOG";
    MetricCategory["Memory"] = "MEMORY";
    MetricCategory["Network"] = "NETWORK";
    MetricCategory["Others"] = "OTHERS";
    MetricCategory["Process"] = "PROCESS";
    MetricCategory["Processors"] = "PROCESSORS";
    MetricCategory["Service"] = "SERVICE";
    MetricCategory["Software"] = "SOFTWARE";
    MetricCategory["User"] = "USER";
})(MetricCategory || (exports.MetricCategory = MetricCategory = {}));
var MetricDataType;
(function (MetricDataType) {
    MetricDataType["Arrayofjsonarray"] = "ARRAYOFJSONARRAY";
    MetricDataType["Decimal"] = "DECIMAL";
    MetricDataType["Integer"] = "INTEGER";
    MetricDataType["Json"] = "JSON";
    MetricDataType["Jsonarray"] = "JSONARRAY";
    MetricDataType["String"] = "STRING";
    MetricDataType["Text"] = "TEXT";
    MetricDataType["Timestamp"] = "TIMESTAMP";
})(MetricDataType || (exports.MetricDataType = MetricDataType = {}));
var MetricPercentageDenominatorType;
(function (MetricPercentageDenominatorType) {
    MetricPercentageDenominatorType["Filter"] = "FILTER";
    MetricPercentageDenominatorType["Group"] = "GROUP";
})(MetricPercentageDenominatorType || (exports.MetricPercentageDenominatorType = MetricPercentageDenominatorType = {}));
var MetricUnits;
(function (MetricUnits) {
    MetricUnits["Bps"] = "Bps";
    MetricUnits["Bytes"] = "Bytes";
    MetricUnits["GBps"] = "GBps";
    MetricUnits["Gbps"] = "Gbps";
    MetricUnits["Kb"] = "KB";
    MetricUnits["Kbps"] = "Kbps";
    MetricUnits["Mb"] = "MB";
    MetricUnits["MBps"] = "MBps";
    MetricUnits["Mhz"] = "MHZ";
    MetricUnits["Mbps"] = "Mbps";
    MetricUnits["Millis"] = "Millis";
    MetricUnits["None"] = "NONE";
    MetricUnits["Percent"] = "PERCENT";
    MetricUnits["Tb"] = "TB";
})(MetricUnits || (exports.MetricUnits = MetricUnits = {}));
var Mode;
(function (Mode) {
    Mode["Immediate"] = "IMMEDIATE";
    Mode["Schedule"] = "SCHEDULE";
})(Mode || (exports.Mode = Mode = {}));
var NotePrivacyType;
(function (NotePrivacyType) {
    NotePrivacyType["Private"] = "PRIVATE";
    NotePrivacyType["Public"] = "PUBLIC";
})(NotePrivacyType || (exports.NotePrivacyType = NotePrivacyType = {}));
var NotificationChannel;
(function (NotificationChannel) {
    NotificationChannel["InApp"] = "IN_APP";
    NotificationChannel["Mail"] = "MAIL";
    NotificationChannel["PushNotification"] = "PUSH_NOTIFICATION";
})(NotificationChannel || (exports.NotificationChannel = NotificationChannel = {}));
var NotificationTemplateSubtype;
(function (NotificationTemplateSubtype) {
    NotificationTemplateSubtype["Requester"] = "REQUESTER";
    NotificationTemplateSubtype["Technician"] = "TECHNICIAN";
    NotificationTemplateSubtype["User"] = "USER";
})(NotificationTemplateSubtype || (exports.NotificationTemplateSubtype = NotificationTemplateSubtype = {}));
var NotificationTemplateType;
(function (NotificationTemplateType) {
    NotificationTemplateType["Alerts"] = "ALERTS";
    NotificationTemplateType["CustomAsset"] = "CUSTOM_ASSET";
    NotificationTemplateType["CustomTicketing"] = "CUSTOM_TICKETING";
    NotificationTemplateType["Invoice"] = "INVOICE";
    NotificationTemplateType["Reply"] = "REPLY";
    NotificationTemplateType["Report"] = "REPORT";
    NotificationTemplateType["SideConversation"] = "SIDE_CONVERSATION";
    NotificationTemplateType["SystemAsset"] = "SYSTEM_ASSET";
    NotificationTemplateType["SystemClient"] = "SYSTEM_CLIENT";
    NotificationTemplateType["SystemOnboarding"] = "SYSTEM_ONBOARDING";
    NotificationTemplateType["SystemTask"] = "SYSTEM_TASK";
    NotificationTemplateType["SystemTicketing"] = "SYSTEM_TICKETING";
})(NotificationTemplateType || (exports.NotificationTemplateType = NotificationTemplateType = {}));
var Os;
(function (Os) {
    Os["Aix"] = "AIX";
    Os["FreeBsd"] = "FreeBSD";
    Os["Hpux"] = "HPUX";
    Os["Ios"] = "IOS";
    Os["Iossx"] = "IOSSX";
    Os["Junos"] = "Junos";
    Os["Linux"] = "LINUX";
    Os["Mac"] = "MAC";
    Os["NetBsd"] = "NetBSD";
    Os["OpenBsd"] = "OpenBSD";
    Os["Solaris"] = "Solaris";
    Os["Tru64"] = "Tru64";
    Os["Windows"] = "WINDOWS";
})(Os || (exports.Os = Os = {}));
var OfferedItemAuditStatus;
(function (OfferedItemAuditStatus) {
    OfferedItemAuditStatus["Approved"] = "APPROVED";
    OfferedItemAuditStatus["Ignored"] = "IGNORED";
    OfferedItemAuditStatus["Invoiced"] = "INVOICED";
    OfferedItemAuditStatus["Pending"] = "PENDING";
})(OfferedItemAuditStatus || (exports.OfferedItemAuditStatus = OfferedItemAuditStatus = {}));
var OfferedItemModule;
(function (OfferedItemModule) {
    OfferedItemModule["Project"] = "PROJECT";
    OfferedItemModule["Subscription"] = "SUBSCRIPTION";
    OfferedItemModule["Ticket"] = "TICKET";
})(OfferedItemModule || (exports.OfferedItemModule = OfferedItemModule = {}));
var OfferedItemType;
(function (OfferedItemType) {
    OfferedItemType["Contract"] = "CONTRACT";
    OfferedItemType["Work"] = "WORK";
})(OfferedItemType || (exports.OfferedItemType = OfferedItemType = {}));
var OperationStatus;
(function (OperationStatus) {
    OperationStatus["Cancel"] = "CANCEL";
    OperationStatus["DeletionInProgress"] = "DELETION_IN_PROGRESS";
    OperationStatus["Failure"] = "FAILURE";
    OperationStatus["InQueue"] = "IN_QUEUE";
    OperationStatus["Progress"] = "PROGRESS";
    OperationStatus["Success"] = "SUCCESS";
})(OperationStatus || (exports.OperationStatus = OperationStatus = {}));
var OverriddenBillingSetting;
(function (OverriddenBillingSetting) {
    OverriddenBillingSetting["AllowEmptyInvoice"] = "ALLOW_EMPTY_INVOICE";
    OverriddenBillingSetting["AutoPushInvoice"] = "AUTO_PUSH_INVOICE";
    OverriddenBillingSetting["AutoSendInvoice"] = "AUTO_SEND_INVOICE";
    OverriddenBillingSetting["DueDate"] = "DUE_DATE";
    OverriddenBillingSetting["IgnoreConsumedItem"] = "IGNORE_CONSUMED_ITEM";
    OverriddenBillingSetting["InvoiceEmailTemplate"] = "INVOICE_EMAIL_TEMPLATE";
    OverriddenBillingSetting["InvoicePaymentMethod"] = "INVOICE_PAYMENT_METHOD";
    OverriddenBillingSetting["InvoicePaymentTerm"] = "INVOICE_PAYMENT_TERM";
    OverriddenBillingSetting["ProjectLineItemTemplate"] = "PROJECT_LINE_ITEM_TEMPLATE";
    OverriddenBillingSetting["QuoteTemplate"] = "QUOTE_TEMPLATE";
    OverriddenBillingSetting["Schedule"] = "SCHEDULE";
    OverriddenBillingSetting["ScheduleEnabled"] = "SCHEDULE_ENABLED";
    OverriddenBillingSetting["SubscriptionLineItemTemplate"] = "SUBSCRIPTION_LINE_ITEM_TEMPLATE";
    OverriddenBillingSetting["Template"] = "TEMPLATE";
    OverriddenBillingSetting["TicketLineItemTemplate"] = "TICKET_LINE_ITEM_TEMPLATE";
})(OverriddenBillingSetting || (exports.OverriddenBillingSetting = OverriddenBillingSetting = {}));
var PlaceholderTemplateConstant;
(function (PlaceholderTemplateConstant) {
    PlaceholderTemplateConstant["CalendarEventDescription"] = "CALENDAR_EVENT_DESCRIPTION";
    PlaceholderTemplateConstant["Chat"] = "CHAT";
})(PlaceholderTemplateConstant || (exports.PlaceholderTemplateConstant = PlaceholderTemplateConstant = {}));
var PolicyCategoryAssignedBy;
(function (PolicyCategoryAssignedBy) {
    PolicyCategoryAssignedBy["Manual"] = "MANUAL";
    PolicyCategoryAssignedBy["Rule"] = "RULE";
    PolicyCategoryAssignedBy["System"] = "SYSTEM";
})(PolicyCategoryAssignedBy || (exports.PolicyCategoryAssignedBy = PolicyCategoryAssignedBy = {}));
var PortalDomainStatus;
(function (PortalDomainStatus) {
    PortalDomainStatus["Active"] = "ACTIVE";
    PortalDomainStatus["CertificateGenerated"] = "CERTIFICATE_GENERATED";
    PortalDomainStatus["CertificateRenewed"] = "CERTIFICATE_RENEWED";
    PortalDomainStatus["CnamePropagated"] = "CNAME_PROPAGATED";
    PortalDomainStatus["Pending"] = "PENDING";
})(PortalDomainStatus || (exports.PortalDomainStatus = PortalDomainStatus = {}));
var PricingModelType;
(function (PricingModelType) {
    PricingModelType["PerUnit"] = "PER_UNIT";
})(PricingModelType || (exports.PricingModelType = PricingModelType = {}));
var ProductFeatureReleaseState;
(function (ProductFeatureReleaseState) {
    ProductFeatureReleaseState["Beta"] = "BETA";
    ProductFeatureReleaseState["NewReleased"] = "NEW_RELEASED";
    ProductFeatureReleaseState["Released"] = "RELEASED";
    ProductFeatureReleaseState["Upcoming"] = "UPCOMING";
})(ProductFeatureReleaseState || (exports.ProductFeatureReleaseState = ProductFeatureReleaseState = {}));
var ProductOfferingEntityType;
(function (ProductOfferingEntityType) {
    ProductOfferingEntityType["AllAsset"] = "ALL_ASSET";
    ProductOfferingEntityType["EndPointAsset"] = "END_POINT_ASSET";
    ProductOfferingEntityType["NetworkAsset"] = "NETWORK_ASSET";
    ProductOfferingEntityType["Technician"] = "TECHNICIAN";
})(ProductOfferingEntityType || (exports.ProductOfferingEntityType = ProductOfferingEntityType = {}));
var ProvisionRuleEntityType;
(function (ProvisionRuleEntityType) {
    ProvisionRuleEntityType["Asset"] = "ASSET";
    ProvisionRuleEntityType["Client"] = "CLIENT";
    ProvisionRuleEntityType["Site"] = "SITE";
    ProvisionRuleEntityType["User"] = "USER";
})(ProvisionRuleEntityType || (exports.ProvisionRuleEntityType = ProvisionRuleEntityType = {}));
var QuoteApprovalStatus;
(function (QuoteApprovalStatus) {
    QuoteApprovalStatus["Approved"] = "APPROVED";
    QuoteApprovalStatus["Rejected"] = "REJECTED";
})(QuoteApprovalStatus || (exports.QuoteApprovalStatus = QuoteApprovalStatus = {}));
var QuoteEventType;
(function (QuoteEventType) {
    QuoteEventType["Approval"] = "APPROVAL";
    QuoteEventType["Conversation"] = "CONVERSATION";
})(QuoteEventType || (exports.QuoteEventType = QuoteEventType = {}));
var QuoteStatusEnum;
(function (QuoteStatusEnum) {
    QuoteStatusEnum["Approved"] = "APPROVED";
    QuoteStatusEnum["Draft"] = "DRAFT";
    QuoteStatusEnum["Expired"] = "EXPIRED";
    QuoteStatusEnum["Pending"] = "PENDING";
    QuoteStatusEnum["Rejected"] = "REJECTED";
})(QuoteStatusEnum || (exports.QuoteStatusEnum = QuoteStatusEnum = {}));
var RatingType;
(function (RatingType) {
    RatingType["Star"] = "STAR";
    RatingType["Thumbs"] = "THUMBS";
})(RatingType || (exports.RatingType = RatingType = {}));
var RecipientType;
(function (RecipientType) {
    RecipientType["Email"] = "EMAIL";
    RecipientType["Group"] = "GROUP";
    RecipientType["Placeholder"] = "PLACEHOLDER";
    RecipientType["User"] = "USER";
    RecipientType["UserTypeRole"] = "USER_TYPE_ROLE";
})(RecipientType || (exports.RecipientType = RecipientType = {}));
var RecurringMode;
(function (RecurringMode) {
    RecurringMode["Advance"] = "ADVANCE";
    RecurringMode["Arrear"] = "ARREAR";
    RecurringMode["Upfront"] = "UPFRONT";
})(RecurringMode || (exports.RecurringMode = RecurringMode = {}));
var RedeemableBundleApplicableHours;
(function (RedeemableBundleApplicableHours) {
    RedeemableBundleApplicableHours["AfterHours"] = "AFTER_HOURS";
    RedeemableBundleApplicableHours["AllHours"] = "ALL_HOURS";
    RedeemableBundleApplicableHours["BusinessHours"] = "BUSINESS_HOURS";
})(RedeemableBundleApplicableHours || (exports.RedeemableBundleApplicableHours = RedeemableBundleApplicableHours = {}));
var RedeemableBundleApplicableType;
(function (RedeemableBundleApplicableType) {
    RedeemableBundleApplicableType["AllItems"] = "ALL_ITEMS";
    RedeemableBundleApplicableType["IncludedItems"] = "INCLUDED_ITEMS";
})(RedeemableBundleApplicableType || (exports.RedeemableBundleApplicableType = RedeemableBundleApplicableType = {}));
var ReportType;
(function (ReportType) {
    ReportType["Data"] = "DATA";
    ReportType["Efficiency"] = "EFFICIENCY";
    ReportType["Metric"] = "METRIC";
    ReportType["Pdf"] = "PDF";
    ReportType["Profitability"] = "PROFITABILITY";
})(ReportType || (exports.ReportType = ReportType = {}));
var RoleTypeEnum;
(function (RoleTypeEnum) {
    RoleTypeEnum["Requester"] = "REQUESTER";
    RoleTypeEnum["Technician"] = "TECHNICIAN";
})(RoleTypeEnum || (exports.RoleTypeEnum = RoleTypeEnum = {}));
var RunbookStatus;
(function (RunbookStatus) {
    RunbookStatus["Active"] = "ACTIVE";
    RunbookStatus["Inactive"] = "INACTIVE";
})(RunbookStatus || (exports.RunbookStatus = RunbookStatus = {}));
var ScopeEnum;
(function (ScopeEnum) {
    ScopeEnum["Asset"] = "ASSET";
    ScopeEnum["Policy"] = "POLICY";
})(ScopeEnum || (exports.ScopeEnum = ScopeEnum = {}));
var ServiceCatalogItemStatus;
(function (ServiceCatalogItemStatus) {
    ServiceCatalogItemStatus["Active"] = "ACTIVE";
    ServiceCatalogItemStatus["Inactive"] = "INACTIVE";
})(ServiceCatalogItemStatus || (exports.ServiceCatalogItemStatus = ServiceCatalogItemStatus = {}));
var ServiceCatalogItemType;
(function (ServiceCatalogItemType) {
    ServiceCatalogItemType["Product"] = "PRODUCT";
    ServiceCatalogItemType["Service"] = "SERVICE";
})(ServiceCatalogItemType || (exports.ServiceCatalogItemType = ServiceCatalogItemType = {}));
var ServiceTypeItemOfferingType;
(function (ServiceTypeItemOfferingType) {
    ServiceTypeItemOfferingType["BlockHour"] = "BLOCK_HOUR";
    ServiceTypeItemOfferingType["BlockMoney"] = "BLOCK_MONEY";
    ServiceTypeItemOfferingType["Hours"] = "HOURS";
    ServiceTypeItemOfferingType["Quantity"] = "QUANTITY";
    ServiceTypeItemOfferingType["ServiceBundle"] = "SERVICE_BUNDLE";
})(ServiceTypeItemOfferingType || (exports.ServiceTypeItemOfferingType = ServiceTypeItemOfferingType = {}));
var SessionAppType;
(function (SessionAppType) {
    SessionAppType["Android"] = "ANDROID";
    SessionAppType["Apple"] = "APPLE";
    SessionAppType["Chrome"] = "CHROME";
    SessionAppType["Safari"] = "SAFARI";
})(SessionAppType || (exports.SessionAppType = SessionAppType = {}));
/** --------------- RMM ------------------- */
var State;
(function (State) {
    State["Delete"] = "DELETE";
    State["Disable"] = "DISABLE";
    State["Enable"] = "ENABLE";
})(State || (exports.State = State = {}));
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["Completed"] = "COMPLETED";
    StatusEnum["Ended"] = "ENDED";
    StatusEnum["Failed"] = "FAILED";
    StatusEnum["InProgress"] = "IN_PROGRESS";
    StatusEnum["Scheduled"] = "SCHEDULED";
})(StatusEnum || (exports.StatusEnum = StatusEnum = {}));
var SubscriptionDurationUnit;
(function (SubscriptionDurationUnit) {
    SubscriptionDurationUnit["Day"] = "DAY";
    SubscriptionDurationUnit["Month"] = "MONTH";
    SubscriptionDurationUnit["Week"] = "WEEK";
    SubscriptionDurationUnit["Year"] = "YEAR";
})(SubscriptionDurationUnit || (exports.SubscriptionDurationUnit = SubscriptionDurationUnit = {}));
var SubscriptionStatus;
(function (SubscriptionStatus) {
    SubscriptionStatus["Active"] = "ACTIVE";
    SubscriptionStatus["Cancelled"] = "CANCELLED";
    SubscriptionStatus["NonRenewing"] = "NON_RENEWING";
    SubscriptionStatus["Paused"] = "PAUSED";
    SubscriptionStatus["Trial"] = "TRIAL";
    SubscriptionStatus["TrialExpired"] = "TRIAL_EXPIRED";
})(SubscriptionStatus || (exports.SubscriptionStatus = SubscriptionStatus = {}));
var TpEntityType;
(function (TpEntityType) {
    TpEntityType["BookkeepingAccount"] = "BOOKKEEPING_ACCOUNT";
    TpEntityType["Client"] = "CLIENT";
    TpEntityType["ServiceItem"] = "SERVICE_ITEM";
})(TpEntityType || (exports.TpEntityType = TpEntityType = {}));
var User_Email_Validation_Status;
(function (User_Email_Validation_Status) {
    User_Email_Validation_Status["Available"] = "AVAILABLE";
    User_Email_Validation_Status["DuplicateEmailAddress"] = "DUPLICATE_EMAIL_ADDRESS";
    User_Email_Validation_Status["DuplicateEmailAddressAsMailboxAddress"] = "DUPLICATE_EMAIL_ADDRESS_AS_MAILBOX_ADDRESS";
    User_Email_Validation_Status["DuplicateEmailAddressInDifferentAccountType"] = "DUPLICATE_EMAIL_ADDRESS_IN_DIFFERENT_ACCOUNT_TYPE";
    User_Email_Validation_Status["InvalidDomain"] = "INVALID_DOMAIN";
})(User_Email_Validation_Status || (exports.User_Email_Validation_Status = User_Email_Validation_Status = {}));
var UserOperationalStatus;
(function (UserOperationalStatus) {
    UserOperationalStatus["Active"] = "ACTIVE";
    UserOperationalStatus["UnLicensed"] = "UN_LICENSED";
})(UserOperationalStatus || (exports.UserOperationalStatus = UserOperationalStatus = {}));
var UserType;
(function (UserType) {
    UserType["Requester"] = "REQUESTER";
    UserType["Technician"] = "TECHNICIAN";
})(UserType || (exports.UserType = UserType = {}));
var WebhookSubscriptionStatus;
(function (WebhookSubscriptionStatus) {
    WebhookSubscriptionStatus["Disabled"] = "DISABLED";
    WebhookSubscriptionStatus["DisabledBySystem"] = "DISABLED_BY_SYSTEM";
    WebhookSubscriptionStatus["Enabled"] = "ENABLED";
})(WebhookSubscriptionStatus || (exports.WebhookSubscriptionStatus = WebhookSubscriptionStatus = {}));
var WebhookSubscriptionStatusInput;
(function (WebhookSubscriptionStatusInput) {
    WebhookSubscriptionStatusInput["Disabled"] = "DISABLED";
    WebhookSubscriptionStatusInput["Enabled"] = "ENABLED";
})(WebhookSubscriptionStatusInput || (exports.WebhookSubscriptionStatusInput = WebhookSubscriptionStatusInput = {}));
exports.GetAllEmployeesDocument = (0, graphql_tag_1.default) `
    query GetAllEmployees {
  getAllEmployees {
    userId
    name
    email
    countryCode
    phoneNumber
    designation {
      designationId
      name
    }
    team {
      teamId
      name
    }
    customFields
  }
}
    `;
exports.GetAllMailboxesDocument = (0, graphql_tag_1.default) `
    query GetAllMailboxes($isClientMailbox: Boolean!, $isMSPProduct: Boolean!) {
  getMailboxes {
    boxId
    type
    systemBox
    incomingAddress
    outgoingAddress
    customServer
    customServerType
    customServerOutgoingOnly
    mailProviderConfigs {
      providerConfigId
      customServerProvider
      imapHost
    }
    imapHost
    userName
    imapPort
    smtpHost
    smtpPort
    sslRequired
    customServerAccountSyncState
    outgoingAddressType
    senderConfiguration {
      verificationRecords {
        recordType
        host
        value
      }
    }
    outgoingDomainVerified
    onBehalfOf
    senderName
    emailSignature
    client @include(if: $isMSPProduct) {
      accountId
      name
    }
    site @include(if: $isClientMailbox) {
      id
      name
    }
    techGroup @include(if: $isClientMailbox) {
      groupId
      name
    }
    hasAdvancedConfiguration @include(if: $isClientMailbox)
    defaultBox @include(if: $isClientMailbox)
    name @include(if: $isClientMailbox)
    description @include(if: $isClientMailbox)
  }
}
    `;
const defaultWrapper = (action, _operationName, _operationType, _variables) => action();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
        GetAllEmployees(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetAllEmployeesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'GetAllEmployees', 'query', variables);
        },
        GetAllMailboxes(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetAllMailboxesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'GetAllMailboxes', 'query', variables);
        }
    };
}
