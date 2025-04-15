import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: any; output: any; }
};

export type AchAccount = {
  __typename?: 'ACHAccount';
  bankName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isVerified?: Maybe<Scalars['Boolean']['output']>;
  last4?: Maybe<Scalars['String']['output']>;
  routingNumber?: Maybe<Scalars['String']['output']>;
};

export type AiConfiguration = {
  __typename?: 'AIConfiguration';
  name: Scalars['String']['output'];
  value?: Maybe<Scalars['Boolean']['output']>;
};

export type AiConfigurationInfo = {
  __typename?: 'AIConfigurationInfo';
  authorizedBy?: Maybe<Scalars['JSON']['output']>;
  configurations?: Maybe<Array<Maybe<AiConfiguration>>>;
};

export type AiConfigurationInfoInput = {
  authorizedBy?: InputMaybe<UserIdentifierInput>;
  configurations?: InputMaybe<Array<AiConfigurationInput>>;
};

export type AiConfigurationInput = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AiFeature = {
  __typename?: 'AIFeature';
  aiFeatureGroup?: Maybe<AiFeatureGroup>;
  constant?: Maybe<AiFeatureConstant>;
  description?: Maybe<Scalars['String']['output']>;
  displayIcon?: Maybe<Scalars['String']['output']>;
  enabled: Scalars['Boolean']['output'];
  featureId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  prompt?: Maybe<PromptAiFeature>;
  state?: Maybe<AiFeatureState>;
  subFeatures?: Maybe<Array<Maybe<AiFeature>>>;
  usageCount: Scalars['Int']['output'];
  /** Deprecated */
  userDefined: Scalars['Boolean']['output'];
};

export enum AiFeatureConstant {
  RealTimeAlerts = 'REAL_TIME_ALERTS',
  RecommendedSolution = 'RECOMMENDED_SOLUTION',
  ScriptGeneration = 'SCRIPT_GENERATION',
  SideConversationCompose = 'SIDE_CONVERSATION_COMPOSE',
  SimilarTickets = 'SIMILAR_TICKETS',
  TicketsSummaryByCategory = 'TICKETS_SUMMARY_BY_CATEGORY',
  TicketConversationSummarize = 'TICKET_CONVERSATION_SUMMARIZE',
  WebSearch = 'WEB_SEARCH',
  WorklogNoteCompose = 'WORKLOG_NOTE_COMPOSE',
  WorklogSummarization = 'WORKLOG_SUMMARIZATION'
}

export type AiFeatureFeedback = {
  __typename?: 'AIFeatureFeedback';
  feedbackId: Scalars['ID']['output'];
  prompt?: Maybe<PromptAiFeatureFeedback>;
  rating: Scalars['Int']['output'];
  ratingType: RatingType;
  user?: Maybe<User>;
};

export type AiFeatureFeedbackList = {
  __typename?: 'AIFeatureFeedbackList';
  feedback?: Maybe<Array<Maybe<AiFeatureFeedback>>>;
  listInfo?: Maybe<ListInfo>;
};

export type AiFeatureGroup = {
  __typename?: 'AIFeatureGroup';
  constant?: Maybe<AiFeatureGroupConstant>;
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  featureGroupId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export enum AiFeatureGroupConstant {
  Alert = 'ALERT',
  Prompt = 'PROMPT',
  Rmm = 'RMM',
  TicketSummarize = 'TICKET_SUMMARIZE',
  WorklogSummarize = 'WORKLOG_SUMMARIZE'
}

export type AiFeatureGroupIdentifierInput = {
  featureGroupId: Scalars['ID']['input'];
};

export type AiFeatureIdentifierInput = {
  featureId: Scalars['ID']['input'];
};

export type AiFeatureList = {
  __typename?: 'AIFeatureList';
  feature?: Maybe<Array<Maybe<AiFeature>>>;
  listInfo?: Maybe<ListInfo>;
};

export enum AiFeatureState {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  InProgress = 'IN_PROGRESS'
}

export type AiPromptInput = {
  prompt: Scalars['String']['input'];
};

export type Account = {
  __typename?: 'Account';
  accountId?: Maybe<Scalars['ID']['output']>;
  accountType: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export enum AccountType {
  Client = 'CLIENT',
  Msp = 'MSP'
}

export type ActiveRecurringRevenue = {
  __typename?: 'ActiveRecurringRevenue';
  monthly: Scalars['String']['output'];
  yearly: Scalars['String']['output'];
};

export enum ActorName {
  EventTrigger = 'EVENT_TRIGGER',
  PriorityMatrix = 'PRIORITY_MATRIX',
  Sla = 'SLA',
  System = 'SYSTEM',
  TimeTrigger = 'TIME_TRIGGER',
  UnknownUser = 'UNKNOWN_USER',
  User = 'USER'
}

export type AddMailProviderConfigInput = {
  boxId: Scalars['ID']['input'];
  customServer?: InputMaybe<Scalars['Boolean']['input']>;
  customServerProvider: Scalars['String']['input'];
  customServerType: CustomMailServerType;
  imapHost?: InputMaybe<Scalars['String']['input']>;
  imapPort?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  priority: Scalars['Int']['input'];
  smtpHost?: InputMaybe<Scalars['String']['input']>;
  smtpPort?: InputMaybe<Scalars['Int']['input']>;
  sslRequired?: InputMaybe<Scalars['Boolean']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type AddOnBillingDetails = {
  __typename?: 'AddOnBillingDetails';
  addOnId?: Maybe<Scalars['ID']['output']>;
  currentBillingPeriod?: Maybe<BillingDetails>;
  nextBillingPeriod?: Maybe<BillingDetails>;
};

export type AddOnLicenseDetails = {
  __typename?: 'AddOnLicenseDetails';
  addOnDetails?: Maybe<IntegrationAddOn>;
  licenseDetails?: Maybe<ResellingLicenseDetails>;
};

export type AddOnStatus = {
  __typename?: 'AddOnStatus';
  addOn?: Maybe<Scalars['String']['output']>;
  addOnId?: Maybe<Scalars['ID']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
};

export type AddReportScheduleInput = {
  addShareUsers?: InputMaybe<Array<InputMaybe<ShareReportUserInput>>>;
  filterCondition?: InputMaybe<Scalars['JSON']['input']>;
  notificationTemplate: NotificationTemplateInput;
  scheduleDefinition: Scalars['JSON']['input'];
  userType: UserType;
};

export type AddTpMappingRuleInput = {
  conditionAttribute: Scalars['String']['input'];
  conditionValue: MappingObjectInput;
  destination: MappingObjectInput;
  entityType: TpEntityType;
};

export type Addon = {
  __typename?: 'Addon';
  addonId?: Maybe<Scalars['ID']['output']>;
  addonPrices?: Maybe<Array<Maybe<AddonPrice>>>;
  chargeBeeAddonId?: Maybe<Scalars['String']['output']>;
  countPerLicense?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  offeringEntityType?: Maybe<ProductOfferingEntityType>;
};

export type AddonIdentifierInput = {
  addonId: Scalars['ID']['input'];
};

export type AddonInput = {
  chargeBeeAddonPriceId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type AddonPrice = {
  __typename?: 'AddonPrice';
  chargeBeeAddonPriceId?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<PaymentCurrency>;
  duration?: Maybe<Scalars['String']['output']>;
  /** PaymentDuration */
  durationValue?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  price?: Maybe<Scalars['JSON']['output']>;
  priceValue?: Maybe<Scalars['Int']['output']>;
  pricingModel?: Maybe<CustomerPricingModel>;
};

export type Address = {
  __typename?: 'Address';
  addressId?: Maybe<Scalars['ID']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  line1?: Maybe<Scalars['String']['output']>;
  line2?: Maybe<Scalars['String']['output']>;
  line3?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  stateCode?: Maybe<Scalars['String']['output']>;
  type?: Maybe<AddressCategory>;
};

export enum AddressCategory {
  External = 'EXTERNAL',
  Internal = 'INTERNAL'
}

export type AddressInput = {
  addressId?: InputMaybe<Scalars['ID']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  line1?: InputMaybe<Scalars['String']['input']>;
  line2?: InputMaybe<Scalars['String']['input']>;
  line3?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  stateCode?: InputMaybe<Scalars['String']['input']>;
};

export type AddressList = {
  __typename?: 'AddressList';
  address?: Maybe<Array<Maybe<Address>>>;
  listInfo?: Maybe<ListInfo>;
};

export type AgentInstallerDetails = {
  __typename?: 'AgentInstallerDetails';
  bulkDeployment?: Maybe<BulkDeployment>;
  installerPackage?: Maybe<Array<Maybe<InstallerPackage>>>;
  silentInstaller?: Maybe<Array<Maybe<SilentInstaller>>>;
};

export type AgentSettingsConfig = {
  __typename?: 'AgentSettingsConfig';
  systemTrayIconConfig?: Maybe<TrayIcon>;
};

export type AggregatedValues = {
  __typename?: 'AggregatedValues';
  data?: Maybe<Scalars['JSON']['output']>;
  /** when records are paginated based on group by column, this helps to decide whether more records are exist to fetch. */
  hasMore?: Maybe<Scalars['Boolean']['output']>;
};

export type AggregationPaginationInput = {
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};

/** --------------- RMM ------------------- */
export type Alert = {
  __typename?: 'Alert';
  asset?: Maybe<Asset>;
  createdTime?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  externalSource?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  policy?: Maybe<Policy>;
  resolvedTime?: Maybe<Scalars['String']['output']>;
  severity?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AlertCondition = {
  __typename?: 'AlertCondition';
  coolingOffInterval?: Maybe<Scalars['Int']['output']>;
  criteria?: Maybe<Scalars['JSON']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  policyId?: Maybe<Scalars['ID']['output']>;
  resetIfConditionNotMet?: Maybe<Scalars['Boolean']['output']>;
  resetIfConditionNotMetInterval?: Maybe<Scalars['Int']['output']>;
  resetInterval?: Maybe<Scalars['Int']['output']>;
};

export type AllAsset = AssetBase & {
  __typename?: 'AllAsset';
  assetClass?: Maybe<AssetClass>;
  assetId?: Maybe<Scalars['ID']['output']>;
  assetProtocolMapping?: Maybe<Array<Maybe<AssetProtocolMapping>>>;
  /** AssetPlatformCategory */
  associatedAssets?: Maybe<Scalars['JSON']['output']>;
  /** AdvanceRuleBuilder */
  categoryAssignedStrategy?: Maybe<PolicyCategoryAssignedBy>;
  client?: Maybe<Organization>;
  customFields?: Maybe<Scalars['JSON']['output']>;
  department?: Maybe<BusinessFunction>;
  loggedInUser?: Maybe<Scalars['String']['output']>;
  monitoringStatus?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nextPolicyCategory?: Maybe<PolicyCategory>;
  owner?: Maybe<User>;
  platformCategory?: Maybe<Scalars['String']['output']>;
  policyCategory?: Maybe<PolicyCategory>;
  site?: Maybe<Site>;
  workstationInfo?: Maybe<WorkStationInfo>;
};


export type AllAssetAssociatedAssetsArgs = {
  refEntityAttributes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AllAssetCustomFieldsArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AllowedDateTimeFormat = {
  __typename?: 'AllowedDateTimeFormat';
  dates?: Maybe<Array<Maybe<AllowedDateTimeFormatEntry>>>;
  times?: Maybe<Array<Maybe<AllowedDateTimeFormatEntry>>>;
};

export type AllowedDateTimeFormatEntry = {
  __typename?: 'AllowedDateTimeFormatEntry';
  displayValue?: Maybe<Scalars['String']['output']>;
  format?: Maybe<Scalars['String']['output']>;
};

export type AntiVirusPolicyConfig = {
  __typename?: 'AntiVirusPolicyConfig';
  avProduct?: Maybe<Scalars['String']['output']>;
  /** BITDEFENDER, WEBROOT */
  config?: Maybe<Scalars['JSON']['output']>;
};

export type AppSecurityConfiguration = {
  __typename?: 'AppSecurityConfiguration';
  clientUserCustomPasswordPolicy?: Maybe<PasswordPolicy>;
  /** PASSWORD_POLICY */
  clientUserPasswordPolicy?: Maybe<Scalars['String']['output']>;
  /** SSO_TYPE */
  clientUserSsoDetail?: Maybe<SsoDetail>;
  companyUserCustomPasswordPolicy?: Maybe<PasswordPolicy>;
  /** PASSWORD_POLICY */
  companyUserPasswordPolicy?: Maybe<Scalars['String']['output']>;
  companyUserSsoDetail?: Maybe<SsoDetail>;
  configurationId: Scalars['ID']['output'];
  enforceTfa?: Maybe<Scalars['Boolean']['output']>;
  idpDetail?: Maybe<IdpSamlProviderDetail>;
  ipWhitelistEnable?: Maybe<Scalars['Boolean']['output']>;
  ipWhitelistRange?: Maybe<Scalars['String']['output']>;
  reqstrCustomPwdPolicy?: Maybe<PasswordPolicy>;
  /** PASSWORD_POLICY */
  requesterPasswordPolicy?: Maybe<Scalars['String']['output']>;
  sessionInactiveDuration?: Maybe<Scalars['Int']['output']>;
  sessionInactiveUnit?: Maybe<Scalars['String']['output']>;
  /** SESSION_TIME_UNIT */
  sessionTrustEnable?: Maybe<Scalars['Boolean']['output']>;
  spDetail?: Maybe<SpSamlProviderDetail>;
  ssoType?: Maybe<Scalars['String']['output']>;
  /** PASSWORD_POLICY */
  technCustomPwdPolicy?: Maybe<PasswordPolicy>;
  technicianPasswordPolicy?: Maybe<Scalars['String']['output']>;
};

export type AppSecurityConfigurationInput = {
  clientUserCustomPasswordPolicy?: InputMaybe<PasswordPolicyInput>;
  /** PASSWORD_POLICY */
  clientUserPasswordPolicy?: InputMaybe<Scalars['String']['input']>;
  clientUserSsoDetail?: InputMaybe<SsoDetailInput>;
  companyUserCustomPasswordPolicy?: InputMaybe<PasswordPolicyInput>;
  /** PASSWORD_POLICY */
  companyUserPasswordPolicy?: InputMaybe<Scalars['String']['input']>;
  companyUserSsoDetail?: InputMaybe<SsoDetailInput>;
  enforceTfa?: InputMaybe<Scalars['Boolean']['input']>;
  /** SSO_TYPE */
  idpDetail?: InputMaybe<IdpSamlProviderDetailInput>;
  ipWhitelistEnable?: InputMaybe<Scalars['Boolean']['input']>;
  ipWhitelistRange?: InputMaybe<Scalars['String']['input']>;
  reqstrCustomPwdPolicy?: InputMaybe<PasswordPolicyInput>;
  /** PASSWORD_POLICY */
  requesterPasswordPolicy?: InputMaybe<Scalars['String']['input']>;
  sessionInactiveDuration?: InputMaybe<Scalars['Int']['input']>;
  sessionInactiveUnit?: InputMaybe<Scalars['String']['input']>;
  /** SESSION_TIME_UNIT */
  sessionTrustEnable?: InputMaybe<Scalars['Boolean']['input']>;
  ssoType?: InputMaybe<Scalars['String']['input']>;
  /** PASSWORD_POLICY */
  technCustomPwdPolicy?: InputMaybe<PasswordPolicyInput>;
  technicianPasswordPolicy?: InputMaybe<Scalars['String']['input']>;
};

export type Approval = {
  __typename?: 'Approval';
  actionTakenOn?: Maybe<Scalars['String']['output']>;
  additionalMessage?: Maybe<Scalars['String']['output']>;
  approvalId: Scalars['ID']['output'];
  approver: User;
  comment?: Maybe<Scalars['String']['output']>;
  sentOn: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  ticket?: Maybe<Ticket>;
  ticketPermission?: Maybe<Scalars['JSON']['output']>;
};

export type ApproveQuoteInput = {
  approver: QuoteApproverInput;
  /** QuoteApprovalStatus */
  comment?: InputMaybe<Scalars['String']['input']>;
  quote: QuoteIdentifierInput;
  status: Scalars['String']['input'];
};

/** Used for fetching Basic information for all Asset types. */
export type Asset = AssetBase & {
  __typename?: 'Asset';
  assetClass?: Maybe<AssetClass>;
  assetId?: Maybe<Scalars['ID']['output']>;
  assetProtocolMapping?: Maybe<Array<Maybe<AssetProtocolMapping>>>;
  /** AssetPlatformCategory */
  associatedAssets?: Maybe<Scalars['JSON']['output']>;
  /** AdvanceRuleBuilder */
  categoryAssignedStrategy?: Maybe<PolicyCategoryAssignedBy>;
  client?: Maybe<Organization>;
  customFields?: Maybe<Scalars['JSON']['output']>;
  department?: Maybe<BusinessFunction>;
  loggedInUser?: Maybe<Scalars['String']['output']>;
  monitoringStatus?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nextPolicyCategory?: Maybe<PolicyCategory>;
  owner?: Maybe<User>;
  platformCategory?: Maybe<Scalars['String']['output']>;
  policyCategory?: Maybe<PolicyCategory>;
  site?: Maybe<Site>;
};


/** Used for fetching Basic information for all Asset types. */
export type AssetAssociatedAssetsArgs = {
  refEntityAttributes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Used for fetching Basic information for all Asset types. */
export type AssetCustomFieldsArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AssetBase = {
  assetClass?: Maybe<AssetClass>;
  assetId?: Maybe<Scalars['ID']['output']>;
  assetProtocolMapping?: Maybe<Array<Maybe<AssetProtocolMapping>>>;
  /**
   * AssetPlatformCategory
   *  TODO: Below field to be removed in further version use getAssociatedAssetClassListForAsset API
   */
  associatedAssets?: Maybe<Scalars['JSON']['output']>;
  /** AdvanceRuleBuilder */
  categoryAssignedStrategy?: Maybe<PolicyCategoryAssignedBy>;
  client?: Maybe<Organization>;
  customFields?: Maybe<Scalars['JSON']['output']>;
  department?: Maybe<BusinessFunction>;
  loggedInUser?: Maybe<Scalars['String']['output']>;
  monitoringStatus?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nextPolicyCategory?: Maybe<PolicyCategory>;
  owner?: Maybe<User>;
  platformCategory?: Maybe<Scalars['String']['output']>;
  policyCategory?: Maybe<PolicyCategory>;
  site?: Maybe<Site>;
};


export type AssetBaseAssociatedAssetsArgs = {
  refEntityAttributes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AssetBaseCustomFieldsArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AssetClass = BaseEntity & {
  __typename?: 'AssetClass';
  assetDefaultFields?: Maybe<Scalars['JSON']['output']>;
  assetsCount?: Maybe<Scalars['Int']['output']>;
  classId?: Maybe<Scalars['ID']['output']>;
  customFields?: Maybe<Array<Maybe<CustomField>>>;
  description?: Maybe<Scalars['String']['output']>;
  entityName?: Maybe<Scalars['String']['output']>;
  formMeta?: Maybe<Scalars['String']['output']>;
  iconClass?: Maybe<Scalars['String']['output']>;
  isGated?: Maybe<Scalars['Boolean']['output']>;
  isNonMonitored?: Maybe<Scalars['Boolean']['output']>;
  isSystemGenerated?: Maybe<Scalars['Boolean']['output']>;
  lastConfModified?: Maybe<Scalars['String']['output']>;
  lastUpdatedTime?: Maybe<Scalars['String']['output']>;
  metrics?: Maybe<Array<Maybe<Metrics>>>;
  moduleType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  policySet?: Maybe<PolicySet>;
  status?: Maybe<Scalars['String']['output']>;
  supportedModules?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type AssetClassPolicy = PolicyBase & {
  __typename?: 'AssetClassPolicy';
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  inherited?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  overridden?: Maybe<Scalars['Boolean']['output']>;
  overriddenPolicy?: Maybe<AssetClassPolicy>;
  policyId: Scalars['ID']['output'];
};

export type AssetGroup = {
  __typename?: 'AssetGroup';
  assetClass?: Maybe<AssetClass>;
  groupCondition?: Maybe<Scalars['JSON']['output']>;
  groupId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  policySet?: Maybe<PolicySet>;
};

export type AssetGroupPolicy = PolicyBase & {
  __typename?: 'AssetGroupPolicy';
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  policyId: Scalars['ID']['output'];
};

export type AssetMake = {
  __typename?: 'AssetMake';
  makeId?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type AssetModel = {
  __typename?: 'AssetModel';
  make?: Maybe<AssetMake>;
  modelId?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  userAdded?: Maybe<Scalars['Boolean']['output']>;
};

export type AssetOnboardingPolicyConfig = {
  __typename?: 'AssetOnboardingPolicyConfig';
  actionType: Scalars['String']['output'];
  executionType: Scalars['String']['output'];
  scheduleDetail?: Maybe<Scalars['JSON']['output']>;
};

export type AssetPolicy = PolicyBase & {
  __typename?: 'AssetPolicy';
  applied?: Maybe<Scalars['Boolean']['output']>;
  /**
   * PolicySetCategory
   * Asset Group Policy
   */
  assetGroup?: Maybe<AssetGroup>;
  category: Scalars['String']['output'];
  createdLevel?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** PolicyLevel */
  inherited?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  overridden?: Maybe<Scalars['Boolean']['output']>;
  /** PolicyLevel */
  overriddenLevel?: Maybe<Scalars['String']['output']>;
  /** Asset Class Policy */
  overriddenPolicy?: Maybe<AssetPolicy>;
  policyId: Scalars['ID']['output'];
};

export type AssetProtocolMapping = {
  __typename?: 'AssetProtocolMapping';
  canDisableMonitoring?: Maybe<Scalars['Boolean']['output']>;
  credential?: Maybe<Credential>;
  failureDetails?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isEnabled?: Maybe<Scalars['Boolean']['output']>;
  protocol?: Maybe<NetworkProtocol>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type AssetScript = {
  __typename?: 'AssetScript';
  addedBy?: Maybe<User>;
  additionalFiles?: Maybe<Array<Maybe<AssetScriptAdditionalFile>>>;
  communityScriptId?: Maybe<Scalars['ID']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdTime?: Maybe<Scalars['String']['output']>;
  custom?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  favourite?: Maybe<Scalars['Boolean']['output']>;
  imported?: Maybe<Scalars['Boolean']['output']>;
  isScriptViewable?: Maybe<Scalars['Boolean']['output']>;
  isUpdateAvailable?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  readMe?: Maybe<Scalars['String']['output']>;
  runAs?: Maybe<Scalars['String']['output']>;
  runTimeVariables?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  runTimeVars?: Maybe<Scalars['JSON']['output']>;
  scriptId?: Maybe<Scalars['ID']['output']>;
  scriptVariables?: Maybe<ScriptVariables>;
  shared?: Maybe<Scalars['Boolean']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  timeOut?: Maybe<Scalars['Int']['output']>;
};

export type AssetScriptAdditionalFile = {
  __typename?: 'AssetScriptAdditionalFile';
  destinationLocation?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  scriptAdditionalFile?: Maybe<ScriptAdditionalFile>;
};

export type AssetUserLoggedIn = {
  __typename?: 'AssetUserLoggedIn';
  userId?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type AssociatePolicyCategoryInput = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  addPolicySetMapping?: InputMaybe<Scalars['JSON']['input']>;
  deletePolicySetMapping?: InputMaybe<Scalars['JSON']['input']>;
  updatePolicySetMapping?: InputMaybe<Scalars['JSON']['input']>;
};

export type Attachment = {
  __typename?: 'Attachment';
  /** applicable only for inline image upload like profile pic, logo, ... */
  downloadURL?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  fileSize?: Maybe<Scalars['String']['output']>;
  originalFileName?: Maybe<Scalars['String']['output']>;
};

export enum AttachmentCategory {
  Msa = 'MSA',
  Others = 'OTHERS'
}

export type AttachmentInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileSize?: InputMaybe<Scalars['String']['input']>;
  originalFileName?: InputMaybe<Scalars['String']['input']>;
};

export type Attribute = {
  __typename?: 'Attribute';
  attributePlaceHolder?: Maybe<PlaceHolder>;
  autoComplete?: Maybe<Scalars['Boolean']['output']>;
  conditionPlaceHolders?: Maybe<Array<Maybe<PlaceHolder>>>;
  conditionPlaceHoldersMeta?: Maybe<Scalars['JSON']['output']>;
  dataReportRenderType?: Maybe<DataReportColumnRenderType>;
  dataType?: Maybe<Scalars['String']['output']>;
  defaultMetricUnit?: Maybe<Scalars['String']['output']>;
  /** DataType */
  entity?: Maybe<Scalars['String']['output']>;
  entityAttributeLabel?: Maybe<Scalars['String']['output']>;
  /** UIDataType */
  filterType?: Maybe<Scalars['String']['output']>;
  isCustom?: Maybe<Scalars['Boolean']['output']>;
  /** deprecated */
  isDependent?: Maybe<Scalars['Boolean']['output']>;
  isIdentifier?: Maybe<Scalars['Boolean']['output']>;
  isKeyAttribute?: Maybe<Scalars['Boolean']['output']>;
  isMultiValued?: Maybe<Scalars['Boolean']['output']>;
  /** FilterType */
  isNested?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  labelInMetric?: Maybe<Scalars['String']['output']>;
  metricFunctions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  metricUnits?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name: Scalars['String']['output'];
  nestedAttribute?: Maybe<Scalars['String']['output']>;
  nestedAttributes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nestedTo?: Maybe<Scalars['String']['output']>;
  showToClient?: Maybe<Scalars['Boolean']['output']>;
  uiDataType?: Maybe<Scalars['String']['output']>;
  useInCondition?: Maybe<Scalars['Boolean']['output']>;
  useInGroupBy?: Maybe<Scalars['Boolean']['output']>;
  useInMetric?: Maybe<Scalars['Boolean']['output']>;
};

export type Audit = {
  __typename?: 'Audit';
  actorId?: Maybe<Scalars['ID']['output']>;
  actorLabel?: Maybe<Scalars['String']['output']>;
  actorName?: Maybe<ActorName>;
  auditId: Scalars['ID']['output'];
  client?: Maybe<Organization>;
  data?: Maybe<Scalars['JSON']['output']>;
  entity: Scalars['String']['output'];
  entityId?: Maybe<Scalars['ID']['output']>;
  operation: EntityOperation;
  parentEntity?: Maybe<Scalars['String']['output']>;
  parentEntityId?: Maybe<Scalars['ID']['output']>;
  snapShot?: Maybe<Scalars['Boolean']['output']>;
  time: Scalars['String']['output'];
  user?: Maybe<User>;
};

export type AuditList = {
  __typename?: 'AuditList';
  audits?: Maybe<Array<Maybe<Audit>>>;
  listInfo?: Maybe<ListInfo>;
};

export type BaseEntity = {
  isGated?: Maybe<Scalars['Boolean']['output']>;
};

export type BillableContract = {
  __typename?: 'BillableContract';
  billableSiteType: BillableSiteType;
  blockItemsInfo?: Maybe<Array<Maybe<BlockItemInfo>>>;
  changes?: Maybe<Array<BillableContractQuantityChange>>;
  chargeItem: ServiceCatalogItem;
  contractId: Scalars['ID']['output'];
  cumulatedQuantity?: Maybe<Scalars['String']['output']>;
  discountRate?: Maybe<Scalars['String']['output']>;
  frequencyType: ContractFrequencyType;
  generateInvoice: Scalars['Boolean']['output'];
  includedItems?: Maybe<Array<ServiceCatalogItem>>;
  paymentTerm?: Maybe<PaymentTerm>;
  perpetualContract?: Maybe<PerpetualContract>;
  project?: Maybe<Project>;
  provisionRule?: Maybe<ProvisionRule>;
  quantityCalculationType: ContractQuantityCalculationType;
  recurringContract?: Maybe<RecurringContract>;
  redeemableContract?: Maybe<RedeemableContract>;
  sellingPrice?: Maybe<PricingModel>;
  sellingPriceCalculationType: ContractSellingPriceCalculationType;
  sellingPriceOverridden?: Maybe<Scalars['Boolean']['output']>;
  sites?: Maybe<Array<Site>>;
  usageContract?: Maybe<UsageContract>;
};

export type BillableContractQuantityChange = {
  __typename?: 'BillableContractQuantityChange';
  changeId: Scalars['ID']['output'];
  effectiveDate?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['String']['output']>;
  generateInvoice: Scalars['Boolean']['output'];
  prorated: Scalars['Boolean']['output'];
  proratedAmount?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['String']['output']>;
  quantityChangeOperation: BillableContractQuantityChangeOperation;
};

export type BillableContractQuantityChangeInput = {
  changeId?: InputMaybe<Scalars['ID']['input']>;
  effectiveDate?: InputMaybe<Scalars['String']['input']>;
  generateInvoice?: InputMaybe<Scalars['Boolean']['input']>;
  quantity?: InputMaybe<Scalars['String']['input']>;
  quantityChangeOperation?: InputMaybe<BillableContractQuantityChangeOperation>;
};

export enum BillableContractQuantityChangeOperation {
  Baseline = 'BASELINE',
  Decrease = 'DECREASE',
  Increase = 'INCREASE'
}

export enum BillableSiteType {
  All = 'ALL',
  Hq = 'HQ',
  Included = 'INCLUDED'
}

export type BillingAddress = {
  __typename?: 'BillingAddress';
  billing?: Maybe<Scalars['String']['output']>;
  sender?: Maybe<Scalars['String']['output']>;
};

export type BillingConfiguration = {
  __typename?: 'BillingConfiguration';
  layoutConfiguration?: Maybe<Scalars['JSON']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
};

export type BillingDetails = {
  __typename?: 'BillingDetails';
  assetCount?: Maybe<Scalars['Int']['output']>;
  billingEndDate?: Maybe<Scalars['String']['output']>;
  billingStartDate?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  removedCount?: Maybe<Scalars['Int']['output']>;
  requesterCount?: Maybe<Scalars['Int']['output']>;
  totalPrice?: Maybe<Scalars['String']['output']>;
  unitPrice?: Maybe<Scalars['String']['output']>;
};

export type BillingTemplate = {
  __typename?: 'BillingTemplate';
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  templateId: Scalars['ID']['output'];
};

export type BillingTemplateIdentifierInput = {
  templateId: Scalars['ID']['input'];
};

export type BillingTemplateList = {
  __typename?: 'BillingTemplateList';
  listInfo?: Maybe<ListInfo>;
  templates?: Maybe<Array<BillingTemplate>>;
};

export type BlockItemConsumptionInfo = {
  __typename?: 'BlockItemConsumptionInfo';
  blockHoursUnderAudit?: Maybe<Scalars['String']['output']>;
  blockMoneyUnderAudit?: Maybe<Scalars['String']['output']>;
  isUnderContract?: Maybe<Scalars['Boolean']['output']>;
  remainingBlockHours?: Maybe<Scalars['String']['output']>;
  remainingBlockMoney?: Maybe<Scalars['String']['output']>;
};

export type BulkDeployment = {
  __typename?: 'BulkDeployment';
  gpo?: Maybe<Array<Maybe<BulkDeploymentScriptDetails>>>;
  inTune?: Maybe<Array<Maybe<BulkDeploymentScriptDetails>>>;
};

export type BulkDeploymentScriptDetails = {
  __typename?: 'BulkDeploymentScriptDetails';
  arch?: Maybe<Scalars['String']['output']>;
  command?: Maybe<Scalars['String']['output']>;
  os?: Maybe<Os>;
  scriptType?: Maybe<Scalars['String']['output']>;
};

export type BusinessFunction = {
  __typename?: 'BusinessFunction';
  businessFunctionId: Scalars['ID']['output'];
  head?: Maybe<User>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BusinessFunctionIdentifierInput = {
  businessFunctionId: Scalars['ID']['input'];
};

export type BusinessFunctionInput = {
  businessFunctionId?: InputMaybe<Scalars['ID']['input']>;
  head?: InputMaybe<UserIdentifierInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type BusinessHour = {
  __typename?: 'BusinessHour';
  day: Scalars['String']['output'];
  end: Scalars['String']['output'];
  /** DayOfWeek */
  start: Scalars['String']['output'];
};

export type BusinessHourInput = {
  day: Scalars['String']['input'];
  end: Scalars['String']['input'];
  /** DayOfWeek */
  start: Scalars['String']['input'];
};

export type CreTicketsByCategoryInput = {
  client: ClientIdentifierInput;
  condition: RuleConditionInput;
  pagination: PaginationInput;
  ticketCategory?: InputMaybe<Scalars['String']['input']>;
};

export type CreTrendAnalysisInput = {
  /** TrendType */
  client: ClientIdentifierInput;
  condition?: InputMaybe<RuleConditionInput>;
  trendType: Scalars['String']['input'];
};

export type Card = {
  __typename?: 'Card';
  brand?: Maybe<Scalars['String']['output']>;
  client?: Maybe<Organization>;
  expiryMonth?: Maybe<Scalars['String']['output']>;
  expiryYear?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  last4Digits?: Maybe<Scalars['String']['output']>;
};

export type CardList = {
  __typename?: 'CardList';
  cards?: Maybe<Array<Maybe<Card>>>;
  listInfo?: Maybe<ListInfo>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  subCategories?: Maybe<Array<Maybe<SubCategory>>>;
};

export type Charge = {
  __typename?: 'Charge';
  chargeId: Scalars['String']['output'];
};

export type ChargePrice = {
  __typename?: 'ChargePrice';
  charge?: Maybe<Charge>;
  chargePriceId: Scalars['String']['output'];
  currency?: Maybe<PaymentCurrency>;
};

export type Chart = {
  __typename?: 'Chart';
  chartId: Scalars['ID']['output'];
  /** GroupBy */
  createdBy?: Maybe<User>;
  createdTime?: Maybe<Scalars['String']['output']>;
  defaultChartType?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  entity?: Maybe<Scalars['String']['output']>;
  groupBy?: Maybe<Scalars['JSON']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  metrics?: Maybe<Array<Maybe<ChartMetric>>>;
  name?: Maybe<Scalars['String']['output']>;
  systemChart?: Maybe<Scalars['Boolean']['output']>;
};

export type ChartIdentifierInput = {
  chartId: Scalars['ID']['input'];
};

export type ChartInput = {
  addMetrics?: InputMaybe<Array<InputMaybe<MetricInput>>>;
  chartId?: InputMaybe<Scalars['ID']['input']>;
  defaultChartType?: InputMaybe<Scalars['String']['input']>;
  deleteMetrics?: InputMaybe<Array<InputMaybe<MetricInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  entity?: InputMaybe<Scalars['String']['input']>;
  groupBy?: InputMaybe<Array<InputMaybe<GroupByInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  updateMetrics?: InputMaybe<Array<InputMaybe<MetricInput>>>;
};

export type ChartList = {
  __typename?: 'ChartList';
  charts?: Maybe<Array<Maybe<Chart>>>;
  listInfo?: Maybe<ListInfo>;
};

export type ChartMetric = {
  __typename?: 'ChartMetric';
  attribute: Scalars['String']['output'];
  /** ChartMetricFunction */
  denominator?: Maybe<MetricPercentageDenominatorType>;
  filterCondition?: Maybe<Scalars['JSON']['output']>;
  metricFunction: Scalars['String']['output'];
  metricId: Scalars['ID']['output'];
  /** ChartMetricUnit */
  metricOrder?: Maybe<Scalars['Int']['output']>;
  metricUnit?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type CheckListItem = {
  __typename?: 'CheckListItem';
  content?: Maybe<Scalars['String']['output']>;
  itemId: Scalars['ID']['output'];
};

export type CheckListItemRefInput = {
  itemId: Scalars['ID']['input'];
};

export type CheckUserEmailAddressAvailabilityInput = {
  accountType: AccountType;
  clientId?: InputMaybe<Scalars['ID']['input']>;
  email: Scalars['String']['input'];
  validateDomain: Scalars['Boolean']['input'];
};

export type ClientAttachment = {
  __typename?: 'ClientAttachment';
  attachedBy?: Maybe<User>;
  attachedOn?: Maybe<Scalars['String']['output']>;
  attachmentCategory?: Maybe<AttachmentCategory>;
  attachmentId?: Maybe<Scalars['ID']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  fileSize?: Maybe<Scalars['String']['output']>;
  originalFileName?: Maybe<Scalars['String']['output']>;
};

export type ClientAttachmentIdentifierInput = {
  attachmentId: Scalars['ID']['input'];
  fileName: Scalars['String']['input'];
};

export type ClientAttachmentList = {
  __typename?: 'ClientAttachmentList';
  attachments?: Maybe<Array<Maybe<ClientAttachment>>>;
  listInfo?: Maybe<ListInfo>;
};

export type ClientContract = {
  __typename?: 'ClientContract';
  canEditEndDate?: Maybe<Scalars['Boolean']['output']>;
  client: Account;
  contract: Contract;
  contractId?: Maybe<Scalars['ID']['output']>;
  contractStatus: ClientContractStatus;
  endDate?: Maybe<Scalars['String']['output']>;
  remindDuration?: Maybe<FixedDuration>;
  startDate: Scalars['String']['output'];
};

export type ClientContractDetail = {
  __typename?: 'ClientContractDetail';
  blacklistedItems?: Maybe<Array<Maybe<ServiceItem>>>;
  conditionalPricing?: Maybe<Array<Maybe<ConditionalPricing>>>;
  contractId: Scalars['ID']['output'];
  customItems?: Maybe<Array<Maybe<ServiceItemCustomPrice>>>;
  description?: Maybe<Scalars['String']['output']>;
  discountRate?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['String']['output']>;
  hasExpiredItems?: Maybe<Scalars['Boolean']['output']>;
  invoiceDueDays?: Maybe<Scalars['Int']['output']>;
  invoiceSchedule?: Maybe<Scalars['JSON']['output']>;
  items?: Maybe<Array<Maybe<ContractServiceItem>>>;
  name: Scalars['String']['output'];
  pax8LastSyncStatus?: Maybe<OperationStatus>;
  pax8LastSyncTime?: Maybe<Scalars['String']['output']>;
  projectLineItemContent?: Maybe<Scalars['String']['output']>;
  projectLineItemPlaceholdersUsed?: Maybe<Scalars['JSON']['output']>;
  sla?: Maybe<Array<Maybe<ContractSla>>>;
  startDate?: Maybe<Scalars['String']['output']>;
  ticketLineItemContent?: Maybe<Scalars['String']['output']>;
  ticketLineItemPlaceholdersUsed?: Maybe<Scalars['JSON']['output']>;
};

export type ClientContractInput = {
  addBlacklistedItems?: InputMaybe<Array<InputMaybe<ServiceItemInput>>>;
  addConditionalPricing?: InputMaybe<Array<InputMaybe<ConditionalPricingInput>>>;
  addCustomItems?: InputMaybe<Array<InputMaybe<ServiceItemCustomPriceInput>>>;
  addItems?: InputMaybe<Array<InputMaybe<ContractServiceItemInput>>>;
  addSLA?: InputMaybe<Array<InputMaybe<ContractSlaInput>>>;
  contractId?: InputMaybe<Scalars['ID']['input']>;
  deleteBlacklistedItems?: InputMaybe<Array<InputMaybe<ServiceItemInput>>>;
  deleteConditionalPricing?: InputMaybe<Array<InputMaybe<ConditionalPricingInput>>>;
  deleteCustomItems?: InputMaybe<Array<InputMaybe<ServiceItemCustomPriceInput>>>;
  deleteItems?: InputMaybe<Array<InputMaybe<ContractServiceItemInput>>>;
  deleteSLA?: InputMaybe<Array<InputMaybe<ContractSlaInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  discountRate?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  invoiceDueDays?: InputMaybe<Scalars['Int']['input']>;
  invoiceSchedule?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  projectLineItemContent?: InputMaybe<Scalars['String']['input']>;
  projectLineItemPlaceholdersUsed?: InputMaybe<Scalars['JSON']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  ticketLineItemContent?: InputMaybe<Scalars['String']['input']>;
  ticketLineItemPlaceholdersUsed?: InputMaybe<Scalars['JSON']['input']>;
  updateConditionalPricing?: InputMaybe<Array<InputMaybe<ConditionalPricingInput>>>;
  updateCustomItems?: InputMaybe<Array<InputMaybe<ServiceItemCustomPriceInput>>>;
  updateItems?: InputMaybe<Array<InputMaybe<ContractServiceItemInput>>>;
  updateSLA?: InputMaybe<Array<InputMaybe<ContractSlaInput>>>;
};

export type ClientContractList = {
  __typename?: 'ClientContractList';
  clientContracts?: Maybe<Array<ClientContract>>;
  listInfo?: Maybe<ListInfo>;
};

export type ClientContractOrderInput = {
  contract: ContractIdentifierInput;
  contractOrder?: InputMaybe<Scalars['Int']['input']>;
};

export enum ClientContractStatus {
  Active = 'ACTIVE',
  Draft = 'DRAFT',
  Inactive = 'INACTIVE'
}

export type ClientContractTemplate = {
  __typename?: 'ClientContractTemplate';
  blacklistedItems?: Maybe<Array<Maybe<ServiceItem>>>;
  conditionalPricing?: Maybe<Array<Maybe<ConditionalPricing>>>;
  customItems?: Maybe<Array<Maybe<ServiceItemCustomPrice>>>;
  description?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<ContractTemplateServiceItem>>>;
  name: Scalars['String']['output'];
  sla?: Maybe<Array<Maybe<ContractSla>>>;
  templateId: Scalars['ID']['output'];
};

export type ClientContractTemplateInput = {
  addBlacklistedItems?: InputMaybe<Array<InputMaybe<ServiceItemInput>>>;
  addConditionalPricing?: InputMaybe<Array<InputMaybe<ConditionalPricingInput>>>;
  addCustomItems?: InputMaybe<Array<InputMaybe<ServiceItemCustomPriceInput>>>;
  addItems?: InputMaybe<Array<InputMaybe<ContractTemplateServiceItemInput>>>;
  addSLA?: InputMaybe<Array<InputMaybe<ContractSlaInput>>>;
  deleteBlacklistedItems?: InputMaybe<Array<InputMaybe<ServiceItemInput>>>;
  deleteConditionalPricing?: InputMaybe<Array<InputMaybe<ConditionalPricingInput>>>;
  deleteCustomItems?: InputMaybe<Array<InputMaybe<ServiceItemCustomPriceInput>>>;
  deleteItems?: InputMaybe<Array<InputMaybe<ContractTemplateServiceItemInput>>>;
  deleteSLA?: InputMaybe<Array<InputMaybe<ContractSlaInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  templateId?: InputMaybe<Scalars['ID']['input']>;
  updateConditionalPricing?: InputMaybe<Array<InputMaybe<ConditionalPricingInput>>>;
  updateCustomItems?: InputMaybe<Array<InputMaybe<ServiceItemCustomPriceInput>>>;
  updateItems?: InputMaybe<Array<InputMaybe<ContractTemplateServiceItemInput>>>;
  updateSLA?: InputMaybe<Array<InputMaybe<ContractSlaInput>>>;
};

export type ClientContractTemplateList = {
  __typename?: 'ClientContractTemplateList';
  listInfo?: Maybe<ListInfo>;
  templates?: Maybe<Array<Maybe<ClientContractTemplate>>>;
};

export type ClientConversationAttachment = {
  __typename?: 'ClientConversationAttachment';
  conversation?: Maybe<Conversation>;
  fileName?: Maybe<Scalars['String']['output']>;
  fileSize?: Maybe<Scalars['String']['output']>;
  originalFileName?: Maybe<Scalars['String']['output']>;
};

export type ClientConversationAttachmentList = {
  __typename?: 'ClientConversationAttachmentList';
  attachments?: Maybe<Array<Maybe<ClientConversationAttachment>>>;
  listInfo?: Maybe<ListInfo>;
};

export type ClientEfficiencyRankingInput = {
  condition: RuleConditionInput;
  /** PaginationType */
  pagination?: InputMaybe<PaginationInput>;
  type: Scalars['String']['input'];
};

export type ClientFinancialPerformanceMetric = {
  __typename?: 'ClientFinancialPerformanceMetric';
  client: Account;
  financialPerformanceMetric: FinancialPerformanceMetric;
};

export type ClientFinancialPerformanceMetricList = {
  __typename?: 'ClientFinancialPerformanceMetricList';
  clientFinancialPerformanceMetrics?: Maybe<Array<ClientFinancialPerformanceMetric>>;
  listInfo: ListInfo;
};

export type ClientIdentifierInput = {
  accountId: Scalars['ID']['input'];
};

export type ClientInput = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  accountManager?: InputMaybe<UserInput>;
  addPolicySetMapping?: InputMaybe<Scalars['JSON']['input']>;
  /** to be deprecated */
  addTechnicianGroups?: InputMaybe<Array<InputMaybe<GroupInput>>>;
  /** deprecated */
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  deletePolicySetMapping?: InputMaybe<Scalars['JSON']['input']>;
  deleteTechnicianGroups?: InputMaybe<Array<InputMaybe<GroupInput>>>;
  emailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hqSite?: InputMaybe<SiteInput>;
  integrationConfig?: InputMaybe<Array<InputMaybe<ClientIntegrationConfigInput>>>;
  logoFileName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  primaryContact?: InputMaybe<UserInput>;
  secondaryContact?: InputMaybe<UserInput>;
  site?: InputMaybe<SiteInput>;
  stage?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  technicianGroups?: InputMaybe<Array<InputMaybe<GroupInput>>>;
  updatePolicySetMapping?: InputMaybe<Scalars['JSON']['input']>;
};

export type ClientIntegrationConfig = {
  __typename?: 'ClientIntegrationConfig';
  config?: Maybe<Scalars['JSON']['output']>;
  integrationId?: Maybe<Scalars['ID']['output']>;
};

export type ClientIntegrationConfigInput = {
  config?: InputMaybe<Scalars['JSON']['input']>;
  integrationId?: InputMaybe<Scalars['ID']['input']>;
};

export type ClientIntegrationsStatus = {
  __typename?: 'ClientIntegrationsStatus';
  pax8?: Maybe<Scalars['Boolean']['output']>;
  quickBooks?: Maybe<Scalars['Boolean']['output']>;
  stripe?: Maybe<Scalars['Boolean']['output']>;
  xero?: Maybe<Scalars['Boolean']['output']>;
};

export type ClientList = {
  __typename?: 'ClientList';
  clients?: Maybe<Array<Maybe<Organization>>>;
  listInfo?: Maybe<ListInfo>;
};

export type ClientRankingByWorklogHoursInput = {
  condition: RuleConditionInput;
  pagination: PaginationInput;
};

export type ClientRevenue = {
  __typename?: 'ClientRevenue';
  monthlyRecurringRevenue: Scalars['String']['output'];
  profit: Scalars['String']['output'];
  revenue: Scalars['String']['output'];
};

export type ClientSla = {
  __typename?: 'ClientSLA';
  client: Organization;
  id: Scalars['ID']['output'];
  sla: Sla;
  slaOrder: Scalars['Int']['output'];
};

export type ClientSlaInput = {
  client?: InputMaybe<ClientInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sla?: InputMaybe<SlaInput>;
  slaOrder?: InputMaybe<Scalars['Int']['input']>;
};

export type ClientSiteQuantity = {
  __typename?: 'ClientSiteQuantity';
  quantity: Scalars['Int']['output'];
  site: Site;
};

export type ClientSpecificEfficiencyInput = {
  client: ClientIdentifierInput;
  condition: RuleConditionInput;
};

export type ClientStage = {
  __typename?: 'ClientStage';
  constant?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  stageId: Scalars['ID']['output'];
  statuses?: Maybe<Array<Maybe<ClientStatus>>>;
};

export type ClientStatus = {
  __typename?: 'ClientStatus';
  constant?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  statusId: Scalars['ID']['output'];
};

export type CompanyInfo = {
  __typename?: 'CompanyInfo';
  /** SubscriptionStatus */
  activatedDateTime?: Maybe<Scalars['String']['output']>;
  businessHour?: Maybe<Array<Maybe<BusinessHour>>>;
  chargeBeePlanId?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  customDomain?: Maybe<Scalars['String']['output']>;
  dateFormat?: Maybe<Scalars['String']['output']>;
  daysSinceActivated?: Maybe<Scalars['Int']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  planName?: Maybe<Scalars['String']['output']>;
  portalDomain?: Maybe<Scalars['String']['output']>;
  portalDomains?: Maybe<Array<Maybe<PortalDomain>>>;
  subDomain?: Maybe<Scalars['String']['output']>;
  subscriptionStatus?: Maybe<Scalars['String']['output']>;
  timeFormat?: Maybe<Scalars['String']['output']>;
  timezoneCode?: Maybe<Scalars['String']['output']>;
  trialExpiryDays?: Maybe<Scalars['String']['output']>;
  working24x7?: Maybe<Scalars['Boolean']['output']>;
};

export type ConditionalPricing = {
  __typename?: 'ConditionalPricing';
  description?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<ConditionalPricingItem>>>;
  name?: Maybe<Scalars['String']['output']>;
  pricingId: Scalars['ID']['output'];
  ruleCondition?: Maybe<Scalars['JSON']['output']>;
};

export type ConditionalPricingInput = {
  addItems?: InputMaybe<Array<InputMaybe<ConditionalPricingItemInput>>>;
  deleteItems?: InputMaybe<Array<InputMaybe<ConditionalPricingItemInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pricingId?: InputMaybe<Scalars['ID']['input']>;
  ruleCondition?: InputMaybe<RuleConditionInput>;
  updateItems?: InputMaybe<Array<InputMaybe<ConditionalPricingItemInput>>>;
};

export type ConditionalPricingItem = {
  __typename?: 'ConditionalPricingItem';
  afterHoursPrice?: Maybe<Scalars['String']['output']>;
  businessHoursPrice?: Maybe<Scalars['String']['output']>;
  itemId: Scalars['ID']['output'];
  serviceItem?: Maybe<ServiceItem>;
};

export type ConditionalPricingItemInput = {
  afterHoursPrice?: InputMaybe<Scalars['String']['input']>;
  businessHoursPrice?: InputMaybe<Scalars['String']['input']>;
  itemId?: InputMaybe<Scalars['ID']['input']>;
  serviceItem?: InputMaybe<ServiceItemInput>;
};

export type ConfigureReportScheduleInput = {
  addReportSchedule?: InputMaybe<Array<InputMaybe<AddReportScheduleInput>>>;
  deleteReportSchedule?: InputMaybe<Array<InputMaybe<IdentifierInput>>>;
  reportId: Scalars['ID']['input'];
  updateReportSchedule?: InputMaybe<Array<InputMaybe<UpdateReportScheduleInput>>>;
};

export type Contract = {
  __typename?: 'Contract';
  billableContract?: Maybe<BillableContract>;
  contractApplication?: Maybe<ContractApplication>;
  contractId: Scalars['ID']['output'];
  contractType: ContractType;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedTime?: Maybe<Scalars['String']['output']>;
};

export type ContractApplication = {
  __typename?: 'ContractApplication';
  applicationRuleCondition?: Maybe<Scalars['JSON']['output']>;
  autoApproveItems?: Maybe<Array<ServiceCatalogItem>>;
  blacklistedItems?: Maybe<Array<ServiceCatalogItem>>;
  contractId: Scalars['ID']['output'];
  contractOrder: Scalars['Int']['output'];
  contractSLA?: Maybe<Array<ContractSla>>;
  overrides?: Maybe<Array<ContractPricingOverride>>;
};

export type ContractConditionalPricingOverride = {
  __typename?: 'ContractConditionalPricingOverride';
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  overrideId: Scalars['ID']['output'];
  ticketRuleCondition: Scalars['JSON']['output'];
};

export type ContractConditionalPricingOverrideInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  ticketRuleCondition: Scalars['JSON']['input'];
};

export type ContractFinancialPerformanceMetric = {
  __typename?: 'ContractFinancialPerformanceMetric';
  contract: Contract;
  financialPerformanceMetric: FinancialPerformanceMetric;
};

export type ContractFinancialPerformanceMetricList = {
  __typename?: 'ContractFinancialPerformanceMetricList';
  contractFinancialPerformanceMetrics?: Maybe<Array<ContractFinancialPerformanceMetric>>;
  listInfo: ListInfo;
};

export enum ContractFrequencyType {
  Once = 'ONCE',
  Perpetual = 'PERPETUAL',
  Recurring = 'RECURRING'
}

export type ContractIdentifierInput = {
  contractId: Scalars['ID']['input'];
};

export type ContractItemFrequency = {
  __typename?: 'ContractItemFrequency';
  quantity?: Maybe<Scalars['Int']['output']>;
  recurringBefore?: Maybe<Scalars['Int']['output']>;
  recurringMode?: Maybe<ContractRecurringMode>;
  type: ContractItemFrequencyType;
  unit?: Maybe<SubscriptionDurationUnit>;
};

export type ContractItemFrequencyInput = {
  /** SubscriptionDurationUnit */
  quantity?: InputMaybe<Scalars['Int']['input']>;
  recurringBefore?: InputMaybe<Scalars['Int']['input']>;
  recurringMode?: InputMaybe<ContractRecurringMode>;
  type: Scalars['String']['input'];
  /** ContractItemFrequencyType */
  unit?: InputMaybe<Scalars['String']['input']>;
};

export enum ContractItemFrequencyType {
  Custom = 'CUSTOM',
  Once = 'ONCE',
  Perpetual = 'PERPETUAL'
}

export enum ContractPricingItemOverrideByMetric {
  Percentage = 'PERCENTAGE',
  Price = 'PRICE'
}

export enum ContractPricingItemOverrideType {
  Decrease = 'DECREASE',
  Flat = 'FLAT',
  Increase = 'INCREASE'
}

export type ContractPricingOverride = {
  __typename?: 'ContractPricingOverride';
  conditionalPricing?: Maybe<ContractConditionalPricingOverride>;
  overrideCategory: ContractPricingOverrideCategory;
  overrideId: Scalars['ID']['output'];
  overrideItems: Array<ContractPricingOverrideItem>;
};

export enum ContractPricingOverrideCategory {
  Conditional = 'CONDITIONAL',
  NonConditional = 'NON_CONDITIONAL'
}

export type ContractPricingOverrideIdentifierInput = {
  overrideId: Scalars['ID']['input'];
};

export type ContractPricingOverrideItem = {
  __typename?: 'ContractPricingOverrideItem';
  overrideByMetric: ContractPricingItemOverrideByMetric;
  overrideItemId: Scalars['ID']['output'];
  overrideType: ContractPricingItemOverrideType;
  overrideValue: PricingModel;
  serviceCatalogItem: ServiceCatalogItem;
};

export type ContractPricingOverrideItemIdentifierInput = {
  overrideItemId: Scalars['ID']['input'];
};

export type ContractPricingOverrideItemInput = {
  overrideByMetric: ContractPricingItemOverrideByMetric;
  overrideItemId?: InputMaybe<Scalars['ID']['input']>;
  overrideType: ContractPricingItemOverrideType;
  overrideValue: PricingModelInput;
  serviceCatalogItem?: InputMaybe<ServiceCatalogItemIdentifierInput>;
};

export enum ContractQuantityCalculationType {
  Dynamic = 'DYNAMIC',
  Fixed = 'FIXED'
}

export enum ContractRecurringMode {
  Advance = 'ADVANCE',
  Arrear = 'ARREAR',
  Upfront = 'UPFRONT'
}

export type ContractRevenue = {
  __typename?: 'ContractRevenue';
  monthlyRecurringRevenue: Scalars['String']['output'];
  profit: Scalars['String']['output'];
  revenueYTD: Scalars['String']['output'];
  yearlyRecurringRevenue: Scalars['String']['output'];
};

export type ContractSla = {
  __typename?: 'ContractSLA';
  id: Scalars['ID']['output'];
  sla: Sla;
  slaOrder: Scalars['Int']['output'];
};

export type ContractSlaIdentifierInput = {
  id: Scalars['ID']['input'];
};

export type ContractSlaInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  sla?: InputMaybe<SlaInput>;
  slaOrder?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContractSellingPriceCalculationType {
  Dynamic = 'DYNAMIC',
  Fixed = 'FIXED'
}

export type ContractServiceItem = {
  __typename?: 'ContractServiceItem';
  adjustBlockItemAgainstAllItems?: Maybe<Scalars['Boolean']['output']>;
  amount?: Maybe<Scalars['String']['output']>;
  assetView?: Maybe<ListView>;
  autoRenew?: Maybe<Scalars['Boolean']['output']>;
  billDate?: Maybe<Scalars['String']['output']>;
  blockHoursAdjustedItems?: Maybe<Array<Maybe<ServiceItem>>>;
  blockHoursUsedIn?: Maybe<Scalars['String']['output']>;
  /** BLOCK_ITEM_USAGE_TYPE */
  blockItemAdjustedItems?: Maybe<Array<Maybe<ServiceItem>>>;
  /** null denotes all sites */
  blockItemBalance?: Maybe<Scalars['String']['output']>;
  blockItemUsedIn?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['Boolean']['output']>;
  canEditEndDate?: Maybe<Scalars['Boolean']['output']>;
  carryForwardRemainingBlockHours?: Maybe<Scalars['Boolean']['output']>;
  changes?: Maybe<Array<Maybe<ContractServiceItemChange>>>;
  description?: Maybe<Scalars['String']['output']>;
  effectiveDate?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['String']['output']>;
  frequency?: Maybe<ContractItemFrequency>;
  itemId: Scalars['ID']['output'];
  nextBillDate?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  remindDuration?: Maybe<FixedDuration>;
  /** ServiceItemUnitType */
  serviceItem: ServiceItem;
  sites?: Maybe<Array<Maybe<Site>>>;
  unitPrice?: Maybe<Scalars['String']['output']>;
  unitPriceOverridden?: Maybe<Scalars['Boolean']['output']>;
  unitType?: Maybe<Scalars['String']['output']>;
  /** BLOCK_HOURS_USAGE_TYPE */
  useAsWorklogItem?: Maybe<Scalars['Boolean']['output']>;
};

export type ContractServiceItemChange = {
  __typename?: 'ContractServiceItemChange';
  amount?: Maybe<Scalars['String']['output']>;
  changeId: Scalars['ID']['output'];
  /** QuantityChangeOperation */
  effectiveDate?: Maybe<Scalars['String']['output']>;
  generateInvoice?: Maybe<Scalars['Boolean']['output']>;
  proRatedAmount?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['String']['output']>;
  quantityChangeOperation?: Maybe<Scalars['String']['output']>;
};

export type ContractServiceItemChangeInput = {
  /** applicable for block money subscription */
  amount?: InputMaybe<Scalars['String']['input']>;
  changeId?: InputMaybe<Scalars['ID']['input']>;
  effectiveDate?: InputMaybe<Scalars['String']['input']>;
  /**
   * QuantityChangeOperation
   *  It is used to indicate whether the user wanted to create invoice for the contract service item if prorated.
   */
  generateInvoice?: InputMaybe<Scalars['Boolean']['input']>;
  /** applicable for units based and block hours subscription */
  quantity?: InputMaybe<Scalars['String']['input']>;
  /** It is used to specify whether the mentioned quantity is increase or decrease. This attribute is not required when the subscription added first time. */
  quantityChangeOperation?: InputMaybe<Scalars['String']['input']>;
};

export type ContractServiceItemIdentifierInput = {
  itemId: Scalars['ID']['input'];
};

export type ContractServiceItemInput = {
  addBlockHoursAdjustedItems?: InputMaybe<Array<InputMaybe<ServiceItemInput>>>;
  /** BLOCK_ITEM_USAGE_TYPE */
  addBlockItemAdjustedItems?: InputMaybe<Array<InputMaybe<ServiceItemInput>>>;
  addSites?: InputMaybe<Array<InputMaybe<SiteInput>>>;
  adjustBlockItemAgainstAllItems?: InputMaybe<Scalars['Boolean']['input']>;
  amount?: InputMaybe<Scalars['String']['input']>;
  assetView?: InputMaybe<ListViewIdentifierInput>;
  autoRenew?: InputMaybe<Scalars['Boolean']['input']>;
  billDate?: InputMaybe<Scalars['String']['input']>;
  blockHoursUsedIn?: InputMaybe<Scalars['String']['input']>;
  blockItemUsedIn?: InputMaybe<Scalars['String']['input']>;
  carryForwardRemainingBlockHours?: InputMaybe<Scalars['Boolean']['input']>;
  change?: InputMaybe<ContractServiceItemChangeInput>;
  deleteBlockHoursAdjustedItems?: InputMaybe<Array<InputMaybe<ServiceItemInput>>>;
  deleteBlockItemAdjustedItems?: InputMaybe<Array<InputMaybe<ServiceItemInput>>>;
  deleteSites?: InputMaybe<Array<InputMaybe<SiteInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  effectiveDate?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  /** will be Deprecated */
  frequency?: InputMaybe<ContractItemFrequencyInput>;
  itemId?: InputMaybe<Scalars['ID']['input']>;
  quantity?: InputMaybe<Scalars['String']['input']>;
  remindDuration?: InputMaybe<FixedDurationInput>;
  serviceItem?: InputMaybe<ServiceItemInput>;
  subscriptionType?: InputMaybe<Scalars['String']['input']>;
  unitPrice?: InputMaybe<Scalars['String']['input']>;
  unitPriceOverridden?: InputMaybe<Scalars['Boolean']['input']>;
  unitType?: InputMaybe<Scalars['String']['input']>;
  /** BLOCK_HOURS_USAGE_TYPE */
  useAsWorklogItem?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContractTemplate = {
  __typename?: 'ContractTemplate';
  contract: Contract;
  templateId: Scalars['ID']['output'];
};

export type ContractTemplateServiceItem = {
  __typename?: 'ContractTemplateServiceItem';
  adjustBlockItemAgainstAllItems?: Maybe<Scalars['Boolean']['output']>;
  amount?: Maybe<Scalars['String']['output']>;
  assetView?: Maybe<ListView>;
  autoRenew?: Maybe<Scalars['Boolean']['output']>;
  blockHoursAdjustedItems?: Maybe<Array<Maybe<ServiceItem>>>;
  blockHoursUsedIn?: Maybe<Scalars['String']['output']>;
  /** BLOCK_ITEM_USAGE_TYPE */
  blockItemAdjustedItems?: Maybe<Array<Maybe<ServiceItem>>>;
  blockItemBalance?: Maybe<Scalars['String']['output']>;
  blockItemUsedIn?: Maybe<Scalars['String']['output']>;
  canEdit?: Maybe<Scalars['Boolean']['output']>;
  canEditEndDate?: Maybe<Scalars['Boolean']['output']>;
  carryForwardRemainingBlockHours?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** need to deprecate from front-end */
  effectiveDate?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['String']['output']>;
  frequency?: Maybe<ContractItemFrequency>;
  itemId: Scalars['ID']['output'];
  /** ServiceItemUnitType */
  quantity?: Maybe<Scalars['String']['output']>;
  serviceItem: ServiceItem;
  sites?: Maybe<Array<Maybe<Site>>>;
  unitPrice?: Maybe<Scalars['String']['output']>;
  unitType?: Maybe<Scalars['String']['output']>;
  /** BLOCK_HOURS_USAGE_TYPE */
  useAsWorklogItem?: Maybe<Scalars['Boolean']['output']>;
};

export type ContractTemplateServiceItemInput = {
  addBlockHoursAdjustedItems?: InputMaybe<Array<InputMaybe<ServiceItemInput>>>;
  /** BLOCK_ITEM_USAGE_TYPE */
  addBlockItemAdjustedItems?: InputMaybe<Array<InputMaybe<ServiceItemInput>>>;
  addSites?: InputMaybe<Array<InputMaybe<SiteInput>>>;
  adjustBlockItemAgainstAllItems?: InputMaybe<Scalars['Boolean']['input']>;
  amount?: InputMaybe<Scalars['String']['input']>;
  assetView?: InputMaybe<ListViewIdentifierInput>;
  autoRenew?: InputMaybe<Scalars['Boolean']['input']>;
  blockHoursUsedIn?: InputMaybe<Scalars['String']['input']>;
  blockItemUsedIn?: InputMaybe<Scalars['String']['input']>;
  carryForwardRemainingBlockHours?: InputMaybe<Scalars['Boolean']['input']>;
  deleteBlockHoursAdjustedItems?: InputMaybe<Array<InputMaybe<ServiceItemInput>>>;
  deleteBlockItemAdjustedItems?: InputMaybe<Array<InputMaybe<ServiceItemInput>>>;
  deleteSites?: InputMaybe<Array<InputMaybe<SiteInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** need to deprecate from front-end */
  effectiveDate?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  /** will be Deprecated */
  frequency?: InputMaybe<ContractItemFrequencyInput>;
  itemId?: InputMaybe<Scalars['ID']['input']>;
  quantity?: InputMaybe<Scalars['String']['input']>;
  serviceItem?: InputMaybe<ServiceItemInput>;
  subscriptionType?: InputMaybe<Scalars['String']['input']>;
  unitPrice?: InputMaybe<Scalars['String']['input']>;
  unitType?: InputMaybe<Scalars['String']['input']>;
  /** BLOCK_HOURS_USAGE_TYPE */
  useAsWorklogItem?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContractTicketMapping = {
  __typename?: 'ContractTicketMapping';
  contract?: Maybe<Contract>;
  contractId?: Maybe<Scalars['ID']['output']>;
  inUse?: Maybe<Scalars['Boolean']['output']>;
};

export enum ContractType {
  OneTime = 'ONE_TIME',
  Service = 'SERVICE',
  TimeAndMaterial = 'TIME_AND_MATERIAL',
  Usage = 'USAGE'
}

export type Conversation = {
  __typename?: 'Conversation';
  attachments?: Maybe<Array<Maybe<ConversationAttachment>>>;
  bccUsers?: Maybe<Array<Maybe<RecipientInfo>>>;
  ccUsers?: Maybe<Array<Maybe<RecipientInfo>>>;
  client?: Maybe<Organization>;
  content?: Maybe<Scalars['String']['output']>;
  conversationId: Scalars['ID']['output'];
  /** The below attributes are available for Conversation Thread. */
  conversationStatus?: Maybe<ConversationStatus>;
  data?: Maybe<Scalars['JSON']['output']>;
  failureReason?: Maybe<Scalars['JSON']['output']>;
  /** The below attributes are available if the entity supports multiple threaded conversations. */
  latestReply?: Maybe<Conversation>;
  minifiedContent?: Maybe<Scalars['Boolean']['output']>;
  opened?: Maybe<Scalars['Boolean']['output']>;
  outgoingMailFailureReason?: Maybe<Scalars['JSON']['output']>;
  outgoingMailStatus?: Maybe<OperationStatus>;
  parentConversationId?: Maybe<Scalars['ID']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['String']['output']>;
  toUsers?: Maybe<Array<Maybe<RecipientInfo>>>;
  type?: Maybe<ConversationType>;
  user?: Maybe<User>;
  viewedByClient?: Maybe<Scalars['Boolean']['output']>;
  /** The below attributes are available for vendor conversations. */
  workItem?: Maybe<WorkItem>;
};

export type ConversationAttachment = {
  __typename?: 'ConversationAttachment';
  fileName?: Maybe<Scalars['String']['output']>;
  fileSize?: Maybe<Scalars['String']['output']>;
  originalFileName?: Maybe<Scalars['String']['output']>;
};

export type ConversationIdentifierInput = {
  conversationId: Scalars['ID']['input'];
};

export type ConversationInput = {
  attachments?: InputMaybe<Array<InputMaybe<AttachmentInput>>>;
  bccUsers?: InputMaybe<Array<InputMaybe<UserInput>>>;
  ccUsers?: InputMaybe<Array<InputMaybe<UserInput>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  conversationId?: InputMaybe<Scalars['ID']['input']>;
  /** TODO - remove this after frontend save the conversation within create ticket itself. */
  createTicketFlow?: InputMaybe<Scalars['Boolean']['input']>;
  dynamicContent?: InputMaybe<Scalars['Boolean']['input']>;
  enableSurvey?: InputMaybe<Scalars['Boolean']['input']>;
  fromMailbox?: InputMaybe<MailboxIdentifierInput>;
  hasAdditionalRecipients?: InputMaybe<Scalars['Boolean']['input']>;
  inlineImages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  parentConversationId?: InputMaybe<Scalars['ID']['input']>;
  sendMail?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Send this property ONLY at that time of TICKET CREATION as value true
   *  The below attributes are available if the entity supports multiple threaded conversations.
   */
  subject?: InputMaybe<Scalars['String']['input']>;
  time?: InputMaybe<Scalars['String']['input']>;
  toUsers?: InputMaybe<Array<InputMaybe<UserInput>>>;
  tpSource?: InputMaybe<TpSourceInput>;
  user?: InputMaybe<UserInput>;
  /** The below attributes are available for vendor conversations. */
  workItem?: InputMaybe<WorkItemIdentifierInput>;
};

export type ConversationList = {
  __typename?: 'ConversationList';
  conversations?: Maybe<Array<Maybe<Conversation>>>;
  listInfo?: Maybe<ListInfo>;
};

export type ConversationRecipient = {
  __typename?: 'ConversationRecipient';
  email: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export enum ConversationStatus {
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Seen = 'SEEN',
  Sent = 'SENT'
}

export enum ConversationType {
  Description = 'DESCRIPTION',
  Email = 'EMAIL',
  /** Added below fields for Common Conversation */
  Event = 'EVENT',
  ReqNotification = 'REQ_NOTIFICATION',
  ReqReply = 'REQ_REPLY',
  /** Added below type for Vendor Conversation */
  TechEmail = 'TECH_EMAIL',
  TechNotification = 'TECH_NOTIFICATION',
  TechReply = 'TECH_REPLY',
  VendorEmail = 'VENDOR_EMAIL'
}

export type CreateAiFeatureFeedbackInput = {
  feature: AiFeatureIdentifierInput;
  prompt?: InputMaybe<PromptAiFeatureFeedbackInput>;
  rating: Scalars['Int']['input'];
  ratingType: RatingType;
};

export type CreateAiFeatureInput = {
  aiFeatureGroup: AiFeatureGroupIdentifierInput;
  description?: InputMaybe<Scalars['String']['input']>;
  /** Deprecated */
  displayIcon?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  prompt?: InputMaybe<AiPromptInput>;
  state?: InputMaybe<AiFeatureState>;
};

export type CreateBillableContractInput = {
  addIncludedItems?: InputMaybe<Array<ServiceCatalogItemIdentifierInput>>;
  addSites?: InputMaybe<Array<SiteIdentifierInput>>;
  billableSiteType: BillableSiteType;
  change?: InputMaybe<BillableContractQuantityChangeInput>;
  chargeItem: ServiceCatalogItemIdentifierInput;
  discountRate?: InputMaybe<Scalars['String']['input']>;
  frequencyType: ContractFrequencyType;
  generateInvoice: Scalars['Boolean']['input'];
  paymentTerm?: InputMaybe<PaymentTermIdentifierInput>;
  perpetualContract?: InputMaybe<PerpetualContractInput>;
  project?: InputMaybe<ProjectIdentifierInput>;
  provisionRule?: InputMaybe<ProvisionRuleIdentifierInput>;
  quantityCalculationType: ContractQuantityCalculationType;
  recurringContract?: InputMaybe<RecurringContractInput>;
  redeemableContract?: InputMaybe<RedeemableContractInput>;
  sellingPrice?: InputMaybe<PricingModelInput>;
  sellingPriceCalculationType: ContractSellingPriceCalculationType;
  /** Mandatory if sellingPriceOverridden is enabled */
  sellingPriceOverridden: Scalars['Boolean']['input'];
};

export type CreateBillingTemplateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateCheckListItemInput = {
  content?: InputMaybe<Scalars['String']['input']>;
};

export type CreateClientContractFromBillingTemplateInput = {
  client: ClientIdentifierInput;
  contracts: Array<CreateContractFromBillingTemplateInput>;
};

export type CreateClientContractInput = {
  client: ClientIdentifierInput;
  contract: CreateContractInput;
  endDate?: InputMaybe<Scalars['String']['input']>;
  remindDuration?: InputMaybe<FixedDurationInput>;
  startDate: Scalars['String']['input'];
};

export type CreateClientProvisionRuleInput = {
  client: ClientIdentifierInput;
  provisionRule: CreateProvisionRuleInput;
};

export type CreateContractApplicationInput = {
  addAutoApproveItems?: InputMaybe<Array<ServiceCatalogItemIdentifierInput>>;
  addBlacklistedItems?: InputMaybe<Array<ServiceCatalogItemIdentifierInput>>;
  addContractSLA?: InputMaybe<Array<CreateContractSlaInput>>;
  addOverrides?: InputMaybe<Array<CreateContractPricingOverrideInput>>;
  applicationRuleCondition?: InputMaybe<Scalars['JSON']['input']>;
  contractOrder?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateContractFromBillingTemplateInput = {
  addSites?: InputMaybe<Array<SiteIdentifierInput>>;
  billableSiteType?: InputMaybe<BillableSiteType>;
  contractId: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<ProjectIdentifierInput>;
  remindDuration?: InputMaybe<FixedDurationInput>;
  startDate: Scalars['String']['input'];
};

export type CreateContractInput = {
  billableContract?: InputMaybe<CreateBillableContractInput>;
  contractApplication?: InputMaybe<CreateContractApplicationInput>;
  contractType: ContractType;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateContractPricingOverrideInput = {
  addOverrideItems: Array<ContractPricingOverrideItemInput>;
  conditionalPricing?: InputMaybe<ContractConditionalPricingOverrideInput>;
  overrideCategory: ContractPricingOverrideCategory;
};

export type CreateContractSlaInput = {
  sla: ContractSlaIdentifierInput;
  slaOrder: Scalars['Int']['input'];
};

export type CreateContractTemplateInput = {
  contract: CreateContractInput;
  template: BillingTemplateIdentifierInput;
};

export type CreateFieldInput = {
  addOptions?: InputMaybe<Array<InputMaybe<CreateFieldOptionInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  fieldType: FieldType;
  label: Scalars['String']['input'];
  mandatoryOnClosure?: InputMaybe<Scalars['Boolean']['input']>;
  mandatoryOnCreate?: InputMaybe<Scalars['Boolean']['input']>;
  module: Scalars['String']['input'];
  parentField?: InputMaybe<IdentifierInput>;
  showToClient?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateFieldOptionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  order: Scalars['Int']['input'];
  parentOption?: InputMaybe<IdentifierInput>;
  value: Scalars['String']['input'];
};

export type CreateHourlyServiceTypeItemInput = {
  roundUpValue: Scalars['Int']['input'];
};

export type CreateInvoiceFromQuoteInput = {
  invoice: CreateInvoiceInput;
  quote: QuoteIdentifierInput;
  quoteApproval?: InputMaybe<QuoteApprovalInput>;
};

export type CreateInvoiceInput = {
  addItems: Array<InputMaybe<CreateInvoiceItemInput>>;
  additionalDiscount?: InputMaybe<Scalars['String']['input']>;
  additionalDiscountRate?: InputMaybe<Scalars['String']['input']>;
  client: ClientInput;
  dueDate?: InputMaybe<Scalars['String']['input']>;
  footer?: InputMaybe<Scalars['String']['input']>;
  inlineImages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  invoiceDate: Scalars['String']['input'];
  memo?: InputMaybe<Scalars['String']['input']>;
  paymentTerm?: InputMaybe<PaymentTermIdentifierInput>;
  sentToClient?: InputMaybe<Scalars['Boolean']['input']>;
  site: SiteInput;
  statusEnum: InvoiceStatusEnum;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateInvoiceItemInput = {
  billedDate: Scalars['String']['input'];
  details?: InputMaybe<Scalars['String']['input']>;
  discountAmount?: InputMaybe<Scalars['String']['input']>;
  discountRate?: InputMaybe<Scalars['String']['input']>;
  itemOrder?: InputMaybe<Scalars['Int']['input']>;
  offeredItem?: InputMaybe<OfferedItemIdentifierInput>;
  quantity: Scalars['String']['input'];
  serviceCatalogItem?: InputMaybe<ServiceCatalogItemIdentifierInput>;
  serviceItem?: InputMaybe<ServiceItemInput>;
  tax?: InputMaybe<TaxInput>;
  taxable?: InputMaybe<Scalars['Boolean']['input']>;
  unitPrice: Scalars['String']['input'];
};

export type CreateInvoiceTemplateInput = {
  footer?: InputMaybe<Scalars['String']['input']>;
  inlineImages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Optional to create invoice template and set it to invoice setting. */
  invoiceSetting?: InputMaybe<InvoiceSettingIdentifierInput>;
  layoutConfiguration?: InputMaybe<Scalars['JSON']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMailboxInput = {
  client?: InputMaybe<ClientInput>;
  /** OutgoingAddressType */
  conversationOnBehalfOf?: InputMaybe<Scalars['String']['input']>;
  customServer?: InputMaybe<Scalars['Boolean']['input']>;
  customServerOutgoingOnly?: InputMaybe<Scalars['Boolean']['input']>;
  customServerType?: InputMaybe<CustomMailServerType>;
  defaultBox?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  emailSignature?: InputMaybe<Scalars['String']['input']>;
  hasAdvancedConfiguration?: InputMaybe<Scalars['Boolean']['input']>;
  imapHost?: InputMaybe<Scalars['String']['input']>;
  imapPort?: InputMaybe<Scalars['Int']['input']>;
  /** MailSettingsType */
  incomingAddress?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** ConversationOnBehalf -> Deprecated */
  onBehalfOf?: InputMaybe<Scalars['String']['input']>;
  outgoingAddress?: InputMaybe<Scalars['String']['input']>;
  outgoingAddressType: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  /** ConversationOnBehalf */
  senderName?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<SiteIdentifierInput>;
  smtpHost?: InputMaybe<Scalars['String']['input']>;
  smtpPort?: InputMaybe<Scalars['Int']['input']>;
  sslRequired?: InputMaybe<Scalars['Boolean']['input']>;
  techGroup?: InputMaybe<TechnicianGroupIdentifierInput>;
  type: Scalars['String']['input'];
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePlanProductFeatureInput = {
  available: Scalars['Boolean']['input'];
  availableWithAddOn: Scalars['Boolean']['input'];
  enabled: Scalars['Boolean']['input'];
  enabledInTrial: Scalars['Boolean']['input'];
  enabledWithFlag: Scalars['Boolean']['input'];
  feature: ProductFeatureIdentifierInput;
  upsellAddon?: InputMaybe<AddonIdentifierInput>;
  upsellPlan?: InputMaybe<PlanIdentifierInput>;
};

export type CreatePortalDomainInput = {
  domainName: Scalars['String']['input'];
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  type: DomainType;
};

export type CreateProductFeatureCategoryInput = {
  labelKey: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  parentCategoryId?: InputMaybe<Scalars['ID']['input']>;
  releaseState?: InputMaybe<ProductFeatureReleaseState>;
};

export type CreateProductFeatureInput = {
  category?: InputMaybe<ProductFeatureCategoryIdentifierInput>;
  labelKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  releaseState: ProductFeatureReleaseState;
  visibleInPurchase: Scalars['Boolean']['input'];
};

export type CreateProductSubscriptionLineItemAddOnInput = {
  addonPrice: IdentifierInput;
  quantity: Scalars['Int']['input'];
};

export type CreateProductSubscriptionLineItemPlanInput = {
  planPrice: IdentifierInput;
  quantity: Scalars['Int']['input'];
};

export type CreateProvisionRuleFromTemplateInput = {
  client: ClientIdentifierInput;
  template: BillingTemplateIdentifierInput;
};

export type CreateProvisionRuleInput = {
  addItems?: InputMaybe<Array<ServiceCatalogItemIdentifierInput>>;
  name: Scalars['String']['input'];
  parentRule?: InputMaybe<ProvisionRuleIdentifierInput>;
  ruleCondition: RuleConditionInput;
  ruleEntityType: ProvisionRuleEntityType;
};

export type CreateProvisionRuleTemplateInput = {
  provisionRule: CreateProvisionRuleInput;
  template: BillingTemplateIdentifierInput;
};

export type CreateQuoteInput = {
  addItems: Array<InputMaybe<CreateQuoteItemInput>>;
  additionalDiscount?: InputMaybe<Scalars['String']['input']>;
  additionalDiscountRate?: InputMaybe<Scalars['String']['input']>;
  client: ClientInput;
  description?: InputMaybe<Scalars['String']['input']>;
  expiryDate: Scalars['String']['input'];
  footer?: InputMaybe<Scalars['String']['input']>;
  inlineImages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  memo?: InputMaybe<Scalars['String']['input']>;
  quoteDate?: InputMaybe<Scalars['String']['input']>;
  revisedQuoteId?: InputMaybe<Scalars['ID']['input']>;
  site: SiteInput;
  statusEnum: QuoteStatusEnum;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateQuoteItemInput = {
  details?: InputMaybe<Scalars['String']['input']>;
  discountAmount?: InputMaybe<Scalars['String']['input']>;
  discountRate?: InputMaybe<Scalars['String']['input']>;
  itemOrder?: InputMaybe<Scalars['Int']['input']>;
  quantity: Scalars['String']['input'];
  serviceCatalogItem?: InputMaybe<ServiceCatalogItemIdentifierInput>;
  serviceItem?: InputMaybe<ServiceItemInput>;
  tax?: InputMaybe<TaxInput>;
  taxable?: InputMaybe<Scalars['Boolean']['input']>;
  unitPrice: Scalars['String']['input'];
};

export type CreateQuoteTemplateInput = {
  footer?: InputMaybe<Scalars['String']['input']>;
  inlineImages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Optional to create quote template and set it to invoice setting. */
  invoiceSetting?: InputMaybe<InvoiceSettingIdentifierInput>;
  layoutConfiguration?: InputMaybe<Scalars['JSON']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateRedeemableServiceBundleInput = {
  applicableHours: RedeemableBundleApplicableHours;
  applicableType: RedeemableBundleApplicableType;
  redeemableQuantity: Scalars['String']['input'];
};

export type CreateServiceCatalogItemInput = {
  category?: InputMaybe<ServiceCategoryInput>;
  costPrice?: InputMaybe<PricingModelInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  itemType: ServiceCatalogItemType;
  name: Scalars['String']['input'];
  offerAsWorklogItem?: InputMaybe<Scalars['Boolean']['input']>;
  salesTax?: InputMaybe<TaxIdentifierInput>;
  sellingPrice?: InputMaybe<PricingModelInput>;
  serviceTypeItem?: InputMaybe<CreateServiceTypeItemInput>;
  taxable: Scalars['Boolean']['input'];
};

export type CreateServiceTypeItemInput = {
  addBundledItems?: InputMaybe<Array<ServiceCatalogItemIdentifierInput>>;
  hourlyServiceTypeItem?: InputMaybe<CreateHourlyServiceTypeItemInput>;
  offeringType: ServiceTypeItemOfferingType;
  redeemableServiceBundle?: InputMaybe<CreateRedeemableServiceBundleInput>;
};

export type CreateSiteInput = {
  address: AddressInput;
  businessHour?: InputMaybe<Array<InputMaybe<BusinessHourInput>>>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  holidayList?: InputMaybe<HolidayListInputIdentifierInput>;
  hq?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  /** This is mandatory to create client site but optional to create company site since our system supports one company for now. */
  organization?: InputMaybe<OrganizationIdentifierInput>;
  timezoneCode: Scalars['String']['input'];
  working24x7: Scalars['Boolean']['input'];
};

export type CreateUserAssociationInput = {
  client?: InputMaybe<ClientIdentifierInput>;
  organization?: InputMaybe<OrganizationIdentifierInput>;
  site?: InputMaybe<SiteIdentifierInput>;
  user?: InputMaybe<UserIdentifierInput>;
};

export type CreateWebhookSubscriptionInput = {
  addEvents: Array<WebhookSubscriptionEventInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  headers?: InputMaybe<Scalars['JSON']['input']>;
  status: WebhookSubscriptionStatusInput;
  webhookUrl: Scalars['String']['input'];
};

export type Credential = {
  __typename?: 'Credential';
  client?: Maybe<Account>;
  createdBy?: Maybe<User>;
  createdTime?: Maybe<Scalars['String']['output']>;
  credentialId?: Maybe<Scalars['ID']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  protocol?: Maybe<Scalars['String']['output']>;
  sites?: Maybe<Array<Maybe<Site>>>;
  type?: Maybe<Scalars['String']['output']>;
  updatedTime?: Maybe<Scalars['String']['output']>;
};

export type CurrentUserDetails = {
  __typename?: 'CurrentUserDetails';
  currentUser: User;
  demoDomain: Scalars['String']['output'];
  realDomain?: Maybe<Scalars['String']['output']>;
};

export type Cursor = {
  __typename?: 'Cursor';
  attribute: Scalars['String']['output'];
  type: CursorType;
  value: Scalars['String']['output'];
};

export type CursorInput = {
  attribute: Scalars['String']['input'];
  type: CursorType;
  value: Scalars['String']['input'];
};

export enum CursorType {
  After = 'AFTER',
  Before = 'BEFORE'
}

export type CustomField = {
  __typename?: 'CustomField';
  /** Module */
  columnName: Scalars['String']['output'];
  commonWorkStationField?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldType?: Maybe<Scalars['String']['output']>;
  /** Deprecated */
  id: Scalars['ID']['output'];
  isMandatory?: Maybe<Scalars['Boolean']['output']>;
  label: Scalars['String']['output'];
  module: Scalars['String']['output'];
  /** CustomFieldType! */
  options?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  showToClient: Scalars['Boolean']['output'];
};

export type CustomFieldConstraint = {
  __typename?: 'CustomFieldConstraint';
  decimalPrecision?: Maybe<Scalars['Int']['output']>;
  decimalScale?: Maybe<Scalars['Int']['output']>;
  multiChoiceOptionsLimit?: Maybe<Scalars['Int']['output']>;
  numericPrecision?: Maybe<Scalars['Int']['output']>;
  optionCharLength?: Maybe<Scalars['Int']['output']>;
  paragraphTotalLimit?: Maybe<Scalars['Int']['output']>;
  textCharLength?: Maybe<Scalars['Int']['output']>;
  /** Deprecated */
  totalLimit?: Maybe<Scalars['Int']['output']>;
};

export type CustomFieldInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  fieldType?: InputMaybe<Scalars['String']['input']>;
  /** Deprecated */
  label?: InputMaybe<Scalars['String']['input']>;
  module?: InputMaybe<Scalars['String']['input']>;
  /** FieldType */
  options?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * Module
   *  used in update
   */
  renamedOptions?: InputMaybe<Scalars['JSON']['input']>;
  showToClient?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CustomFilterInput = {
  entity?: InputMaybe<Scalars['String']['input']>;
};

export enum CustomMailServerAccountSyncState {
  AuthenticationError = 'AUTHENTICATION_ERROR',
  Connected = 'CONNECTED',
  Connecting = 'CONNECTING',
  ConnectError = 'CONNECT_ERROR',
  Disconnected = 'DISCONNECTED',
  Downloading = 'DOWNLOADING',
  Exception = 'EXCEPTION',
  Init = 'INIT',
  Initializing = 'INITIALIZING',
  Invalid = 'INVALID',
  InvalidCredentials = 'INVALID_CREDENTIALS',
  Partial = 'PARTIAL',
  Reauthenticate = 'REAUTHENTICATE',
  Running = 'RUNNING',
  Stopped = 'STOPPED',
  Syncing = 'SYNCING',
  SyncError = 'SYNC_ERROR',
  Unset = 'UNSET',
  Valid = 'VALID'
}

export enum CustomMailServerType {
  Google = 'GOOGLE',
  Microsoft = 'MICROSOFT',
  Others = 'OTHERS'
}

export type CustomerCardDetail = {
  __typename?: 'CustomerCardDetail';
  cardType?: Maybe<Scalars['String']['output']>;
  /** FundingType */
  expiryMonth?: Maybe<Scalars['Int']['output']>;
  expiryYear?: Maybe<Scalars['Int']['output']>;
  /** CardType */
  fundingType?: Maybe<Scalars['String']['output']>;
  /** CardStatus */
  last4?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CustomerDetail = {
  __typename?: 'CustomerDetail';
  checkoutProgressState?: Maybe<Scalars['Boolean']['output']>;
  collectProfile?: Maybe<Scalars['Boolean']['output']>;
  customerId?: Maybe<Scalars['ID']['output']>;
  signupEmailId?: Maybe<Scalars['String']['output']>;
  source?: Maybe<CustomerSource>;
};

export enum CustomerPricingModel {
  PerUnit = 'PER_UNIT',
  Tiered = 'TIERED'
}

export type CustomerSource = {
  __typename?: 'CustomerSource';
  name?: Maybe<Scalars['String']['output']>;
};

export type CustomerSubscription = {
  __typename?: 'CustomerSubscription';
  autoCollection?: Maybe<Scalars['Boolean']['output']>;
  billingPeriod?: Maybe<Scalars['String']['output']>;
  /** BillingPeriod */
  currentPlanPrice?: Maybe<PlanPrice>;
  customer?: Maybe<CustomerDetail>;
  lastStatusUpdateTime?: Maybe<Scalars['String']['output']>;
  licenseCount?: Maybe<Scalars['Int']['output']>;
  nextBillingDateTime?: Maybe<Scalars['String']['output']>;
  overageBillingPeriod?: Maybe<DateRange>;
  resourceVersion?: Maybe<Scalars['String']['output']>;
  subscribedAddons?: Maybe<Array<Maybe<SubscribedAddon>>>;
  subscriptionId?: Maybe<Scalars['ID']['output']>;
  /** SubscriptionStatus */
  subscriptionStatus?: Maybe<Scalars['String']['output']>;
  trialEndDateTime?: Maybe<Scalars['String']['output']>;
};

export type DataMapping = {
  __typename?: 'DataMapping';
  addOnItem?: Maybe<Scalars['JSON']['output']>;
  destination?: Maybe<MappingObject>;
  destinations?: Maybe<Array<Maybe<MappingObject>>>;
  source?: Maybe<MappingObject>;
  status?: Maybe<Scalars['String']['output']>;
};

export type DataMappingInput = {
  addOnItem?: InputMaybe<Scalars['JSON']['input']>;
  destination?: InputMaybe<MappingObjectInput>;
  destinations?: InputMaybe<Array<InputMaybe<MappingObjectInput>>>;
  operation?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<MappingObjectInput>;
};

export type DataMappingList = {
  __typename?: 'DataMappingList';
  listInfo?: Maybe<ListInfo>;
  mappings?: Maybe<Array<Maybe<DataMapping>>>;
};

export enum DataReportColumnRenderType {
  Bgcolor = 'BGCOLOR',
  Plain = 'PLAIN'
}

export type DataSyncReport = {
  __typename?: 'DataSyncReport';
  autoSyncStatus?: Maybe<Scalars['String']['output']>;
  createFailedCount?: Maybe<Scalars['Int']['output']>;
  createFailedDetails?: Maybe<Scalars['JSON']['output']>;
  lastAutoSyncTime?: Maybe<Scalars['String']['output']>;
  mappedCount?: Maybe<Scalars['Int']['output']>;
};

export type DateRange = {
  __typename?: 'DateRange';
  endDateTime?: Maybe<Scalars['String']['output']>;
  startDateTime?: Maybe<Scalars['String']['output']>;
};

export type DeleteClientAttachmentsInput = {
  attachments: Array<ClientAttachmentIdentifierInput>;
  clientId: Scalars['ID']['input'];
};

export type Designation = {
  __typename?: 'Designation';
  designationId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type DesignationInput = {
  designationId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum DiscountType {
  Amount = 'AMOUNT',
  Percent = 'PERCENT'
}

export enum DomainType {
  CustomDomain = 'CUSTOM_DOMAIN',
  CustomSubdomain = 'CUSTOM_SUBDOMAIN',
  SystemSubdomain = 'SYSTEM_SUBDOMAIN'
}

export type DownloadInventory = {
  __typename?: 'DownloadInventory';
  client?: Maybe<Organization>;
  completionTime?: Maybe<Scalars['String']['output']>;
  fileType?: Maybe<Scalars['String']['output']>;
  inventoryId?: Maybe<Scalars['ID']['output']>;
  module?: Maybe<Scalars['String']['output']>;
  moduleSpecificId?: Maybe<Scalars['ID']['output']>;
  sites?: Maybe<Array<Maybe<Site>>>;
  status?: Maybe<Scalars['String']['output']>;
  triggeredBy?: Maybe<Scalars['ID']['output']>;
  triggeredSource?: Maybe<Scalars['String']['output']>;
  triggeredTime?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type DownloadInventoryList = {
  __typename?: 'DownloadInventoryList';
  inventoryList?: Maybe<Array<Maybe<DownloadInventory>>>;
  listInfo?: Maybe<ListInfo>;
};

export type EndpointIntegrationInfo = {
  __typename?: 'EndpointIntegrationInfo';
  integrationId?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entity = {
  __typename?: 'Entity';
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type EntityConfigInput = {
  config?: InputMaybe<Scalars['JSON']['input']>;
  itemId?: InputMaybe<Scalars['String']['input']>;
};

export enum EntityOperation {
  Associate = 'ASSOCIATE',
  Closed = 'CLOSED',
  Create = 'CREATE',
  Delete = 'DELETE',
  Merge = 'MERGE',
  Resolved = 'RESOLVED',
  Restore = 'RESTORE',
  Spam = 'SPAM',
  Split = 'SPLIT',
  Trash = 'TRASH',
  Unassociate = 'UNASSOCIATE',
  Unspam = 'UNSPAM',
  Update = 'UPDATE',
  View = 'VIEW'
}

export type Enumeration = {
  __typename?: 'Enumeration';
  /** i18n key of the value */
  key?: Maybe<Scalars['String']['output']>;
  /** enum value */
  value?: Maybe<Scalars['String']['output']>;
};

export enum EventType {
  ClientCreated = 'CLIENT_CREATED',
  ClientDeleted = 'CLIENT_DELETED',
  ClientUpdated = 'CLIENT_UPDATED',
  ClientUserCreated = 'CLIENT_USER_CREATED',
  ClientUserDeleted = 'CLIENT_USER_DELETED',
  ClientUserUpdated = 'CLIENT_USER_UPDATED',
  InvoiceCreated = 'INVOICE_CREATED',
  InvoiceUpdated = 'INVOICE_UPDATED',
  QuoteCreated = 'QUOTE_CREATED',
  QuoteUpdated = 'QUOTE_UPDATED',
  TicketCreated = 'TICKET_CREATED',
  TicketDeleted = 'TICKET_DELETED',
  TicketReplyReceived = 'TICKET_REPLY_RECEIVED',
  TicketReplySent = 'TICKET_REPLY_SENT',
  TicketUpdated = 'TICKET_UPDATED',
  UserCreated = 'USER_CREATED',
  UserDeleted = 'USER_DELETED',
  UserUpdated = 'USER_UPDATED',
  WorklogCreated = 'WORKLOG_CREATED'
}

export type ExportReportIdentifierInput = {
  chartId?: InputMaybe<Scalars['ID']['input']>;
  condition?: InputMaybe<Scalars['JSON']['input']>;
  reportId?: InputMaybe<Scalars['ID']['input']>;
};

export type Feature = {
  __typename?: 'Feature';
  featureId: Scalars['ID']['output'];
  featureOrder?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  labelKey?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  permissionCategory?: Maybe<PermissionCategory>;
};

export type FeatureInput = {
  featureId?: InputMaybe<Scalars['ID']['input']>;
};

export type FetchTpEntityListInput = {
  entityType: TpEntityType;
  integration: IntegrationIdentifierInput;
  listInfo: ListInfoInput;
};

export type FetchTpMappingRuleConditionInput = {
  entityType: TpEntityType;
  integration: IntegrationIdentifierInput;
};

export type Field = {
  __typename?: 'Field';
  /** Module */
  columnName: Scalars['String']['output'];
  commonWorkStationField?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  editable: Scalars['Boolean']['output'];
  fieldCategory?: Maybe<FieldCategory>;
  fieldOptions?: Maybe<Scalars['JSON']['output']>;
  fieldType?: Maybe<FieldType>;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  mandatoryOnClosure?: Maybe<Scalars['Boolean']['output']>;
  mandatoryOnCreate?: Maybe<Scalars['Boolean']['output']>;
  module: Scalars['String']['output'];
  /** Deprecated - Field options have been moved to a separate table instead of being stored as JSON. Use the 'options' field to retrieve the values. */
  options?: Maybe<Array<Maybe<Option>>>;
  parentField?: Maybe<Field>;
  showToClient: Scalars['Boolean']['output'];
};

export enum FieldCategory {
  Custom = 'CUSTOM',
  Default = 'DEFAULT'
}

export type FieldConstraint = {
  __typename?: 'FieldConstraint';
  decimalPrecision?: Maybe<Scalars['Int']['output']>;
  decimalScale?: Maybe<Scalars['Int']['output']>;
  multiChoiceOptionsLimit?: Maybe<Scalars['Int']['output']>;
  numericPrecision?: Maybe<Scalars['Int']['output']>;
  optionCharLength?: Maybe<Scalars['Int']['output']>;
  paragraphTotalLimit?: Maybe<Scalars['Int']['output']>;
  singleChoiceOptionsLimit?: Maybe<Scalars['Int']['output']>;
  textCharLength?: Maybe<Scalars['Int']['output']>;
  totalLimit?: Maybe<Scalars['Int']['output']>;
};

export type FieldIdentifierInput = {
  /** Module */
  assetClassEntityName?: InputMaybe<Scalars['String']['input']>;
  columnName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  module: Scalars['String']['input'];
};

export type FieldInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  /** FieldType */
  fieldOptionsInput?: InputMaybe<Scalars['String']['input']>;
  fieldType?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  mandatoryOnClosure?: InputMaybe<Scalars['Boolean']['input']>;
  /** Module */
  mandatoryOnCreate?: InputMaybe<Scalars['Boolean']['input']>;
  module?: InputMaybe<Scalars['String']['input']>;
  showToClient?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FieldOption = {
  __typename?: 'FieldOption';
  field?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Array<Maybe<Option>>>;
};

export enum FieldType {
  Checkbox = 'CHECKBOX',
  Date = 'DATE',
  Datetime = 'DATETIME',
  Decimal = 'DECIMAL',
  MultiSelect = 'MULTI_SELECT',
  Numeric = 'NUMERIC',
  Paragraph = 'PARAGRAPH',
  Password = 'PASSWORD',
  Radio = 'RADIO',
  RichText = 'RICH_TEXT',
  SecureText = 'SECURE_TEXT',
  Select = 'SELECT',
  Text = 'TEXT',
  Url = 'URL'
}

export type FinancialPerformanceMetric = {
  __typename?: 'FinancialPerformanceMetric';
  effectiveRate?: Maybe<Scalars['String']['output']>;
  hoursInvested?: Maybe<Scalars['String']['output']>;
  profit?: Maybe<Scalars['String']['output']>;
  profitPercentage?: Maybe<Scalars['String']['output']>;
  revenue?: Maybe<Scalars['String']['output']>;
};

export type FixedDuration = {
  __typename?: 'FixedDuration';
  /** DurationUnit */
  quantity: Scalars['Int']['output'];
  unit: Scalars['String']['output'];
};

export type FixedDurationInput = {
  /** DurationUnit */
  quantity: Scalars['Int']['input'];
  unit: Scalars['String']['input'];
};

export type FlowAction = {
  __typename?: 'FlowAction';
  actionId: Scalars['ID']['output'];
  actionProcessCategory?: Maybe<FlowActionProcessCategory>;
  actionType?: Maybe<FlowActionType>;
  actionValueData?: Maybe<Scalars['JSON']['output']>;
  actionValueType?: Maybe<FlowActionValueType>;
  groupActions?: Maybe<Array<Maybe<GroupFlowAction>>>;
  name?: Maybe<Scalars['String']['output']>;
};

export type FlowActionIdentifier = {
  __typename?: 'FlowActionIdentifier';
  actionId: Scalars['ID']['output'];
};

export enum FlowActionProcessCategory {
  Async = 'ASYNC',
  None = 'NONE',
  Sync = 'SYNC'
}

export enum FlowActionType {
  Group = 'GROUP',
  Single = 'SINGLE'
}

export enum FlowActionValueType {
  Checklist = 'CHECKLIST',
  NonMonitoringAsset = 'NON_MONITORING_ASSET',
  Note = 'NOTE',
  RequestNote = 'REQUEST_NOTE',
  Script = 'SCRIPT',
  SideConversation = 'SIDE_CONVERSATION',
  TaskTemplate = 'TASK_TEMPLATE',
  TicketApproval = 'TICKET_APPROVAL',
  TicketReply = 'TICKET_REPLY',
  TicketUpdate = 'TICKET_UPDATE',
  Worklog = 'WORKLOG'
}

export enum FrequencyDurationUnit {
  Day = 'DAY',
  Month = 'MONTH',
  Week = 'WEEK',
  Year = 'YEAR'
}

export type GetAiFeatureFeedbackListInput = {
  feature: AiFeatureIdentifierInput;
  listInfo?: InputMaybe<ListInfoInput>;
};

export type GetAiFeatureListInput = {
  listInfo: ListInfoInput;
};

export type GetAddressInput = {
  client: ClientIdentifierInput;
  listInfo: ListInfoInput;
};

export type GetAggregatedValuesInput = {
  entity: Scalars['String']['input'];
  groupBy?: InputMaybe<Array<InputMaybe<GroupByInput>>>;
  metrics: Array<InputMaybe<MetricInput>>;
};

export type GetAllowedServiceItemsInput = {
  client: ClientIdentifierInput;
  listInfo: ListInfoInput;
};

export type GetAllowedTechnicianGroupsInput = {
  /** Used to filter the applicable technician groups for the specified client organizations. It should be used when the company offers services to other client organizations. */
  forOrganizations?: InputMaybe<Array<OrganizationIdentifierInput>>;
  /** Used to filter the applicable technician groups for the specified sites. */
  forSites?: InputMaybe<Array<SiteIdentifierInput>>;
};

export type GetBillingAddressInput = {
  client?: InputMaybe<ClientIdentifierInput>;
  site?: InputMaybe<SiteIdentifierInput>;
};

export type GetBlockItemConsumptionInfoInput = {
  client: ClientIdentifierInput;
  eventEndDateTime?: InputMaybe<Scalars['String']['input']>;
  serviceItem: ServiceItemIdentifierInput;
  site?: InputMaybe<SiteIdentifierInput>;
};

export type GetBlockItemInfoInput = {
  afterHours: Scalars['Boolean']['input'];
  contract: ContractIdentifierInput;
  eventEndDateTime?: InputMaybe<Scalars['String']['input']>;
  serviceCatalogItem: ServiceCatalogItemIdentifierInput;
  site: SiteIdentifierInput;
};

export type GetClientUsersListInput = {
  clientId?: InputMaybe<Scalars['ID']['input']>;
  listInfo?: InputMaybe<ListInfoInput>;
  siteId?: InputMaybe<Scalars['ID']['input']>;
};

export type GetContractNextBillDateInput = {
  billDate: Scalars['String']['input'];
  compute?: InputMaybe<Scalars['Boolean']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  frequency: RecurringContractFrequencyInput;
  nextBillDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetContractProRatedAmountInput = {
  billDate: Scalars['String']['input'];
  contract?: InputMaybe<ContractIdentifierInput>;
  effectiveDate: Scalars['String']['input'];
  endDate?: InputMaybe<Scalars['String']['input']>;
  frequency: RecurringContractFrequencyInput;
  itemType: ServiceCatalogItemType;
  offeringType?: InputMaybe<ServiceTypeItemOfferingType>;
  quantity: Scalars['String']['input'];
  unitPrice: PricingModelInput;
};

export type GetConversationThreadedContentInput = {
  entityId: Scalars['ID']['input'];
};

export type GetDependentFieldOptionsInput = {
  /** Module */
  field: Scalars['String']['input'];
  module: Scalars['String']['input'];
  parentValue: Scalars['String']['input'];
};

export type GetEligibleCatalogServiceItemsInput = {
  contract?: InputMaybe<ContractIdentifierInput>;
  listInfo: ListInfoInput;
};

export type GetExpandedClientConversationContentInput = {
  client: ClientIdentifierInput;
  conversation: ConversationIdentifierInput;
};

export type GetExpandedVendorConversationContentInput = {
  conversation: ConversationIdentifierInput;
  workItem: WorkItemIdentifierInput;
};

export type GetFieldOptionsInput = {
  /** Module */
  fields: Array<InputMaybe<Scalars['String']['input']>>;
  module: Scalars['String']['input'];
};

export type GetIntegrationAddonContractItemInput = {
  client: ClientIdentifierInput;
  serviceCatalogItem?: InputMaybe<ServiceCatalogItemIdentifierInput>;
  serviceItem?: InputMaybe<ServiceItemIdentifierInput>;
};

export type GetNextBillDateInput = {
  billDate: Scalars['String']['input'];
  compute?: InputMaybe<Scalars['Boolean']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  frequency: ContractItemFrequencyInput;
  nextBillDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetOptionsInput = {
  field: FieldIdentifierInput;
  parentOptionValue?: InputMaybe<OptionIdentifierInput>;
};

export type GetProductFeaturesCategoriesInput = {
  includePurchaseOnlyFeatures: Scalars['Boolean']['input'];
};

export type GetProductSubscriptionEstimateForLineItemsInput = {
  addons?: InputMaybe<Array<InputMaybe<CreateProductSubscriptionLineItemAddOnInput>>>;
  plan: CreateProductSubscriptionLineItemPlanInput;
};

export type GetProductSubscriptionEstimateForUpsellInput = {
  feature: ProductFeatureIdentifierInput;
};

export type GetProratedAmountInput = {
  amount?: InputMaybe<Scalars['String']['input']>;
  /** ServiceItemQuantityType */
  billDate: Scalars['String']['input'];
  clientId: Scalars['ID']['input'];
  effectiveDate: Scalars['String']['input'];
  endDate?: InputMaybe<Scalars['String']['input']>;
  /** will be Deprecated */
  frequency?: InputMaybe<ContractItemFrequencyInput>;
  quantity?: InputMaybe<Scalars['String']['input']>;
  quantityType?: InputMaybe<Scalars['String']['input']>;
  subscriptionType?: InputMaybe<Scalars['String']['input']>;
  unitPrice?: InputMaybe<Scalars['String']['input']>;
};

export type GetProvisionRuleConditionMetaInput = {
  isTemplate: Scalars['Boolean']['input'];
  ruleEntityType: ProvisionRuleEntityType;
};

export type GetQuoteEventsInput = {
  listInfo?: InputMaybe<ListInfoInput>;
  quote: QuoteIdentifierInput;
};

export type GetReportDataInput = {
  condition?: InputMaybe<Scalars['JSON']['input']>;
  /** the following attributes are required for previewing data report */
  entity?: InputMaybe<Scalars['String']['input']>;
  groupBy?: InputMaybe<Array<InputMaybe<GroupByInput>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  reportId?: InputMaybe<Scalars['ID']['input']>;
  reportType: ReportType;
  selectAttributes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GetSalesInboxViewsCountInput = {
  clientId?: InputMaybe<Scalars['ID']['input']>;
  viewIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type GetSubscriptionItemQuantityInput = {
  /** ServiceItemUnitType */
  assetView?: InputMaybe<ListViewIdentifierInput>;
  client: ClientIdentifierInput;
  contractServiceItem?: InputMaybe<ContractServiceItemIdentifierInput>;
  sites?: InputMaybe<Array<InputMaybe<SiteIdentifierInput>>>;
  unitType: Scalars['String']['input'];
};

export type GetTechnicianListInput = {
  /** Used to filter the applicable technicians for the specified client organizations. It should be used when the company offers services to other client organizations. */
  forOrganizations?: InputMaybe<Array<OrganizationIdentifierInput>>;
  /** Used to filter the allowed technicians for the specified sites. */
  forSites?: InputMaybe<Array<SiteIdentifierInput>>;
  listInfo: ListInfoInput;
};

export type GetTicketApproverInput = {
  client?: InputMaybe<OrganizationIdentifierInput>;
  listInfo?: InputMaybe<ListInfoInput>;
  roleType?: InputMaybe<RoleTypeEnum>;
};

export type GetVendorConversationContentFromTemplateInput = {
  mailbox?: InputMaybe<MailboxIdentifierInput>;
  template?: InputMaybe<NotificationTemplateIdentifierInput>;
  workItem: WorkItemIdentifierInput;
};

export type GetVendorConversationListInput = {
  /** WorkModule */
  listInfo?: InputMaybe<ListInfoInput>;
  module?: InputMaybe<Scalars['String']['input']>;
};

export type GetVendorConversationThreadedContentInput = {
  /** The parent conversation identifier */
  conversation?: InputMaybe<ConversationIdentifierInput>;
  workItem: WorkItemIdentifierInput;
};

export type GetViewsCountInput = {
  condition?: InputMaybe<RuleConditionInput>;
  viewIds: Array<Scalars['ID']['input']>;
};

export type Group = {
  __typename?: 'Group';
  /** TechnicianAutoAssignMethod */
  accessAllClients?: Maybe<Scalars['Boolean']['output']>;
  accessAllSites?: Maybe<Scalars['Boolean']['output']>;
  clientList?: Maybe<Array<Maybe<Organization>>>;
  description?: Maybe<Scalars['String']['output']>;
  groupId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  siteList?: Maybe<Array<Maybe<Site>>>;
  techAutoAssignmentMethod?: Maybe<Scalars['String']['output']>;
  userList?: Maybe<Array<Maybe<User>>>;
};

export type GroupByInput = {
  attribute?: InputMaybe<Scalars['String']['input']>;
  /**
   * It is used to paginate the records based on the group by column. It is possible when one group by applied.
   * In case, if more than one metric is requested, make sure that first metric among them should be super set of other metrics.
   */
  pagination?: InputMaybe<AggregationPaginationInput>;
  /** It is used to sort the results based on group by attribute. */
  recordsOrder?: InputMaybe<Scalars['String']['input']>;
  /**
   * It is used to specify the attributes optionally whose values are returned in the response, in addition to the group by attribute.
   * Note that the attributes specified here should be compatible with all the attributes used in the group by.
   */
  selectAttributes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unit?: InputMaybe<Scalars['String']['input']>;
};

export type GroupFlowAction = {
  __typename?: 'GroupFlowAction';
  actionOrder: Scalars['Int']['output'];
  flowAction?: Maybe<FlowAction>;
};

export type GroupInput = {
  /** TechnicianAutoAssignMethod */
  accessAllClients?: InputMaybe<Scalars['Boolean']['input']>;
  accessAllSites?: InputMaybe<Scalars['Boolean']['input']>;
  /** depricated */
  addClientList?: InputMaybe<Array<InputMaybe<ClientInput>>>;
  /** depricated */
  addSites?: InputMaybe<Array<SiteIdentifierInput>>;
  addUserList?: InputMaybe<Array<InputMaybe<UserInput>>>;
  associateClients?: InputMaybe<Array<OrganizationIdentifierInput>>;
  associateSites?: InputMaybe<Array<SiteIdentifierInput>>;
  /** depricated */
  associateUsers?: InputMaybe<Array<UserIdentifierInput>>;
  /** depricated */
  deleteClientList?: InputMaybe<Array<InputMaybe<ClientInput>>>;
  /** depricated */
  deleteSites?: InputMaybe<Array<SiteIdentifierInput>>;
  /** depricated */
  deleteUserList?: InputMaybe<Array<InputMaybe<UserInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  disassociateClients?: InputMaybe<Array<OrganizationIdentifierInput>>;
  disassociateSites?: InputMaybe<Array<SiteIdentifierInput>>;
  disassociateUsers?: InputMaybe<Array<UserIdentifierInput>>;
  groupId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  techAutoAssignmentMethod?: InputMaybe<Scalars['String']['input']>;
};

export type Holiday = {
  __typename?: 'Holiday';
  day: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  month: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type HolidayInput = {
  day?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  month?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type HolidayList = {
  __typename?: 'HolidayList';
  holidays?: Maybe<Array<Maybe<Holiday>>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  years?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};

export type HolidayListInput = {
  addHolidays?: InputMaybe<Array<InputMaybe<HolidayInput>>>;
  deleteHolidays?: InputMaybe<Array<InputMaybe<HolidayInput>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updateHolidays?: InputMaybe<Array<InputMaybe<HolidayInput>>>;
};

export type HolidayListInputIdentifierInput = {
  id: Scalars['ID']['input'];
};

export type HomePageWidget = {
  __typename?: 'HomePageWidget';
  chart?: Maybe<Chart>;
  /** WidgetGroup */
  listView?: Maybe<ListView>;
  /** WidgetType */
  widgetGroup: Scalars['String']['output'];
  widgetId: Scalars['ID']['output'];
  widgetType: Scalars['String']['output'];
};

export type HomePageWidgetList = {
  __typename?: 'HomePageWidgetList';
  homePageWidgets?: Maybe<Array<Maybe<HomePageWidget>>>;
  listInfo?: Maybe<ListInfo>;
};

export type HostedPage = {
  __typename?: 'HostedPage';
  createdAt: Scalars['String']['output'];
  embed: Scalars['Boolean']['output'];
  expiresAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  state: Scalars['String']['output'];
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type HostedPageInput = {
  addons?: InputMaybe<Array<InputMaybe<AddonInput>>>;
  chargeBeePlanPriceId: Scalars['String']['input'];
  hostedPageId?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
};

export type HourlyServiceTypeItem = {
  __typename?: 'HourlyServiceTypeItem';
  defaultItem: Scalars['Boolean']['output'];
  itemId: Scalars['ID']['output'];
  roundUpValue: Scalars['Int']['output'];
};

export type IpAsset = AssetBase & {
  __typename?: 'IPAsset';
  architecture?: Maybe<Scalars['String']['output']>;
  assetClass?: Maybe<AssetClass>;
  assetId?: Maybe<Scalars['ID']['output']>;
  assetMake?: Maybe<AssetMake>;
  assetModel?: Maybe<AssetModel>;
  assetProtocolMapping?: Maybe<Array<Maybe<AssetProtocolMapping>>>;
  /** AssetPlatformCategory */
  associatedAssets?: Maybe<Scalars['JSON']['output']>;
  biosVersion?: Maybe<Scalars['String']['output']>;
  /** AdvanceRuleBuilder */
  categoryAssignedStrategy?: Maybe<PolicyCategoryAssignedBy>;
  client?: Maybe<Organization>;
  credential?: Maybe<Array<Maybe<Credential>>>;
  customFields?: Maybe<Scalars['JSON']['output']>;
  department?: Maybe<BusinessFunction>;
  deviceType?: Maybe<Scalars['String']['output']>;
  firmwareVersion?: Maybe<Scalars['String']['output']>;
  hardwareVersion?: Maybe<Scalars['String']['output']>;
  hostName?: Maybe<Scalars['String']['output']>;
  installerMessage?: Maybe<Scalars['String']['output']>;
  installerStatus?: Maybe<Scalars['String']['output']>;
  ipAddress?: Maybe<Scalars['String']['output']>;
  isProbe?: Maybe<Scalars['Boolean']['output']>;
  loggedInUser?: Maybe<Scalars['String']['output']>;
  macAddress?: Maybe<Scalars['String']['output']>;
  maintenanceStatus?: Maybe<MaintenanceStatus>;
  monitoringOptions?: Maybe<Scalars['JSON']['output']>;
  monitoringStatus?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nextPolicyCategory?: Maybe<PolicyCategory>;
  owner?: Maybe<User>;
  platformCategory?: Maybe<Scalars['String']['output']>;
  policyCategory?: Maybe<PolicyCategory>;
  probeAsset?: Maybe<Scalars['JSON']['output']>;
  publicIpAddress?: Maybe<Scalars['String']['output']>;
  serialKey?: Maybe<Scalars['String']['output']>;
  serialNumber?: Maybe<Scalars['String']['output']>;
  site?: Maybe<Site>;
  status?: Maybe<Scalars['String']['output']>;
  sysUptime?: Maybe<Scalars['String']['output']>;
  timeZone?: Maybe<Scalars['String']['output']>;
  workstationInfo?: Maybe<WorkStationInfo>;
};


export type IpAssetAssociatedAssetsArgs = {
  refEntityAttributes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IpAssetCustomFieldsArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IdentifierInput = {
  id: Scalars['ID']['input'];
};

export enum IdentifierName {
  InvoiceIdentifier = 'INVOICE_IDENTIFIER',
  ProjectIdentifier = 'PROJECT_IDENTIFIER',
  QuoteIdentifier = 'QUOTE_IDENTIFIER',
  TaskIdentifier = 'TASK_IDENTIFIER',
  TicketIdentifier = 'TICKET_IDENTIFIER'
}

export type IdpSamlProviderDetail = {
  __typename?: 'IdpSamlProviderDetail';
  certificate?: Maybe<Scalars['String']['output']>;
  idpLoginUrl?: Maybe<Scalars['String']['output']>;
  postLogoutUrl?: Maybe<Scalars['String']['output']>;
};

export type IdpSamlProviderDetailInput = {
  certificate?: InputMaybe<Scalars['String']['input']>;
  idpLoginUrl?: InputMaybe<Scalars['String']['input']>;
  postLogoutUrl?: InputMaybe<Scalars['String']['input']>;
};

export type Impact = {
  __typename?: 'Impact';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type InAppNotification = {
  __typename?: 'InAppNotification';
  alert?: Maybe<Alert>;
  approval?: Maybe<Approval>;
  clientConversation?: Maybe<Conversation>;
  emailAddress?: Maybe<Scalars['String']['output']>;
  event: InAppNotificationEvent;
  /** deprecated */
  initiatedBy?: Maybe<Scalars['String']['output']>;
  mention?: Maybe<Mention>;
  notificationId: Scalars['ID']['output'];
  state?: Maybe<InAppNotificationState>;
  task?: Maybe<Task>;
  time: Scalars['String']['output'];
  user?: Maybe<User>;
  vendorConversation?: Maybe<Conversation>;
  workItem?: Maybe<WorkItem>;
};

export enum InAppNotificationEvent {
  AssetAlert = 'ASSET_ALERT',
  ClientTechNewSalesEmail = 'CLIENT_TECH_NEW_SALES_EMAIL',
  ClientTechQuoteApproval = 'CLIENT_TECH_QUOTE_APPROVAL',
  ClientTechQuoteRejection = 'CLIENT_TECH_QUOTE_REJECTION',
  ClientTechReqReply = 'CLIENT_TECH_REQ_REPLY',
  TaskTechAssigned = 'TASK_TECH_ASSIGNED',
  TaskTechDueToday = 'TASK_TECH_DUE_TODAY',
  TaskTechOverdue = 'TASK_TECH_OVERDUE',
  TechMention = 'TECH_MENTION',
  TechVendorReply = 'TECH_VENDOR_REPLY',
  TicketTechApprovalActionTaken = 'TICKET_TECH_APPROVAL_ACTION_TAKEN',
  TicketTechApprovalStatus = 'TICKET_TECH_APPROVAL_STATUS',
  TicketTechAssignment = 'TICKET_TECH_ASSIGNMENT',
  TicketTechCreation = 'TICKET_TECH_CREATION',
  TicketTechFrSlaEscalation = 'TICKET_TECH_FR_SLA_ESCALATION',
  TicketTechGroupAssignment = 'TICKET_TECH_GROUP_ASSIGNMENT',
  TicketTechNoteAdded = 'TICKET_TECH_NOTE_ADDED',
  TicketTechReqReply = 'TICKET_TECH_REQ_REPLY',
  TicketTechResSlaEscalation = 'TICKET_TECH_RES_SLA_ESCALATION',
  TicketTechTechnicianApproval = 'TICKET_TECH_TECHNICIAN_APPROVAL'
}

export type InAppNotificationIdentifierInput = {
  notificationId: Scalars['ID']['input'];
};

export type InAppNotificationList = {
  __typename?: 'InAppNotificationList';
  listInfo?: Maybe<ListInfo>;
  notifications?: Maybe<Array<Maybe<InAppNotification>>>;
};

export enum InAppNotificationState {
  New = 'NEW',
  Read = 'READ',
  Unread = 'UNREAD'
}

export type InitialConfiguration = {
  __typename?: 'InitialConfiguration';
  completed?: Maybe<Scalars['Boolean']['output']>;
  configuration?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mandatory?: Maybe<Scalars['Boolean']['output']>;
};

export type InstallerInfo = {
  __typename?: 'InstallerInfo';
  archPlaceholder?: Maybe<Scalars['String']['output']>;
  /** OS */
  customBuild?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  installerCommandDetails?: Maybe<Scalars['JSON']['output']>;
  installerDownloadUrl?: Maybe<Scalars['String']['output']>;
  installerName?: Maybe<Scalars['String']['output']>;
  os?: Maybe<Scalars['String']['output']>;
};

export type InstallerInfoInput = {
  clientName: Scalars['String']['input'];
  siteName: Scalars['String']['input'];
};

export type InstallerPackage = {
  __typename?: 'InstallerPackage';
  arch?: Maybe<Scalars['String']['output']>;
  installerDownloadUrl?: Maybe<Scalars['String']['output']>;
  installerId?: Maybe<Scalars['String']['output']>;
  installerName?: Maybe<Scalars['String']['output']>;
  os?: Maybe<Os>;
};

export type Integration = {
  __typename?: 'Integration';
  activated?: Maybe<Scalars['Boolean']['output']>;
  connectionStatus?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  deletionInProgress?: Maybe<Scalars['Boolean']['output']>;
  integrationId?: Maybe<Scalars['String']['output']>;
  /** IntegrationType */
  integrationRefId?: Maybe<Scalars['ID']['output']>;
  /** ConnectionStatus */
  ownLicense?: Maybe<Scalars['Boolean']['output']>;
};

export type IntegrationAddOn = {
  __typename?: 'IntegrationAddOn';
  addOn?: Maybe<Scalars['String']['output']>;
  addOnId?: Maybe<Scalars['ID']['output']>;
  billingDetails?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  serviceCatalogItem?: Maybe<ServiceCatalogItemIdentifier>;
  serviceItem?: Maybe<ServiceItemIdentifier>;
};

export type IntegrationAddOnDetails = {
  __typename?: 'IntegrationAddOnDetails';
  addOnDetails?: Maybe<IntegrationAddOn>;
  clientConfig?: Maybe<Array<Maybe<ResellingClientConfig>>>;
  itemConfig?: Maybe<Array<Maybe<ResellingItemConfig>>>;
  listInfo?: Maybe<ListInfo>;
};

export type IntegrationAddOnInput = {
  addClientConfigs?: InputMaybe<Array<InputMaybe<ResellingClientConfigInput>>>;
  addOnId?: InputMaybe<Scalars['ID']['input']>;
  deleteClientConfigs?: InputMaybe<Array<InputMaybe<ResellingClientConfigInput>>>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  serviceCatalogItem?: InputMaybe<ServiceCatalogItemIdentifierInput>;
  serviceItem?: InputMaybe<ServiceItemIdentifierInput>;
  updateClientConfigs?: InputMaybe<Array<InputMaybe<ResellingClientConfigInput>>>;
};

export type IntegrationDataMapping = {
  __typename?: 'IntegrationDataMapping';
  superOpsId?: Maybe<Scalars['String']['output']>;
  tpItemId?: Maybe<Scalars['String']['output']>;
};

export type IntegrationIdentifierInput = {
  integrationId?: InputMaybe<Scalars['String']['input']>;
  /** IntegrationType */
  integrationRefId?: InputMaybe<Scalars['ID']['input']>;
};

export type IntegrationInput = {
  activated?: InputMaybe<Scalars['Boolean']['input']>;
  addTPMappingRules?: InputMaybe<Array<AddTpMappingRuleInput>>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  deleteTPMappingRules?: InputMaybe<Array<TpMappingRuleIdentifierInput>>;
  ownLicense?: InputMaybe<Scalars['Boolean']['input']>;
  updateTPMappingRules?: InputMaybe<Array<UpdateTpMappingRuleInput>>;
};

export enum IntegrationSource {
  Pax8 = 'PAX8',
  SplashtopWorkFromHome = 'SPLASHTOP_WORK_FROM_HOME'
}

export type Invoice = {
  __typename?: 'Invoice';
  additionalDiscount?: Maybe<Scalars['String']['output']>;
  additionalDiscountRate?: Maybe<Scalars['String']['output']>;
  additionalDiscountType?: Maybe<DiscountType>;
  billingAddress?: Maybe<Scalars['String']['output']>;
  client?: Maybe<Organization>;
  conversationIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  conversationInfo?: Maybe<Array<Maybe<InvoiceConversationInfo>>>;
  createdTime?: Maybe<Scalars['String']['output']>;
  discountAmount?: Maybe<Scalars['String']['output']>;
  discountRate?: Maybe<Scalars['String']['output']>;
  displayId: Scalars['ID']['output'];
  dueDate?: Maybe<Scalars['String']['output']>;
  emailOperationalStatus?: Maybe<OperationStatus>;
  footer?: Maybe<Scalars['String']['output']>;
  integratedAppInvoiceId?: Maybe<Scalars['String']['output']>;
  invoiceDate: Scalars['String']['output'];
  invoiceId: Scalars['ID']['output'];
  invoicePaymentTerm?: Maybe<PaymentTerm>;
  items?: Maybe<Array<Maybe<InvoiceItem>>>;
  lastPaymentError?: Maybe<Scalars['JSON']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  operationStatus?: Maybe<OperationStatus>;
  paymentDate?: Maybe<Scalars['String']['output']>;
  paymentLink?: Maybe<Scalars['String']['output']>;
  paymentLinkToken?: Maybe<Scalars['String']['output']>;
  paymentMethod?: Maybe<PaymentMethod>;
  paymentReference?: Maybe<Scalars['String']['output']>;
  pushPaymentToIntegratedAppError?: Maybe<Scalars['JSON']['output']>;
  pushPaymentToIntegratedAppStatus?: Maybe<OperationStatus>;
  pushedToIntegratedAppError?: Maybe<Scalars['JSON']['output']>;
  pushedToIntegratedAppStatus?: Maybe<OperationStatus>;
  quote?: Maybe<Quote>;
  sendEmailError?: Maybe<Scalars['JSON']['output']>;
  senderAddress?: Maybe<Scalars['String']['output']>;
  sentToClient?: Maybe<Scalars['Boolean']['output']>;
  site?: Maybe<Site>;
  status?: Maybe<Scalars['String']['output']>;
  statusEnum?: Maybe<InvoiceStatusEnum>;
  taxAmount?: Maybe<Scalars['String']['output']>;
  taxDetails?: Maybe<Scalars['String']['output']>;
  taxRate?: Maybe<Scalars['String']['output']>;
  taxes?: Maybe<Array<Maybe<InvoiceTaxItem>>>;
  title?: Maybe<Scalars['String']['output']>;
  totalAmount?: Maybe<Scalars['String']['output']>;
};

export type InvoiceConversationInfo = {
  __typename?: 'InvoiceConversationInfo';
  conversationId?: Maybe<Scalars['ID']['output']>;
  viewedByClient?: Maybe<Scalars['Boolean']['output']>;
};

export type InvoiceConversationInput = {
  conversation: ConversationInput;
  invoiceId: Scalars['ID']['input'];
};

export type InvoiceIdentifierInput = {
  invoiceId: Scalars['ID']['input'];
};

export type InvoiceItem = {
  __typename?: 'InvoiceItem';
  amount: Scalars['String']['output'];
  billedDate: Scalars['String']['output'];
  details?: Maybe<Scalars['String']['output']>;
  discountAmount?: Maybe<Scalars['String']['output']>;
  discountRate?: Maybe<Scalars['String']['output']>;
  discountType?: Maybe<DiscountType>;
  invoice?: Maybe<Invoice>;
  itemId: Scalars['ID']['output'];
  itemOrder?: Maybe<Scalars['Int']['output']>;
  offeredItem?: Maybe<OfferedItem>;
  quantity: Scalars['String']['output'];
  serviceCatalogItem?: Maybe<ServiceCatalogItem>;
  serviceItem?: Maybe<ServiceItem>;
  tax?: Maybe<Tax>;
  taxAmount?: Maybe<Scalars['String']['output']>;
  taxRate?: Maybe<Scalars['String']['output']>;
  taxable?: Maybe<Scalars['Boolean']['output']>;
  totalAmount?: Maybe<Scalars['String']['output']>;
  unitPrice: Scalars['String']['output'];
};

export type InvoiceItemInput = {
  itemId: Scalars['ID']['input'];
  offeredItemInput?: InputMaybe<OfferedItemInput>;
};

export type InvoiceItemList = {
  __typename?: 'InvoiceItemList';
  items?: Maybe<Array<Maybe<InvoiceItem>>>;
  listInfo?: Maybe<ListInfo>;
};

export type InvoiceItemRefInput = {
  itemId: Scalars['ID']['input'];
};

export type InvoiceList = {
  __typename?: 'InvoiceList';
  invoices?: Maybe<Array<Maybe<Invoice>>>;
  listInfo?: Maybe<ListInfo>;
};

export enum InvoiceMetaSource {
  ListView = 'LIST_VIEW',
  Reporting = 'REPORTING'
}

export type InvoiceOfferedItemsInput = {
  invoiceDate?: InputMaybe<Scalars['String']['input']>;
  invoiceDueDate?: InputMaybe<Scalars['String']['input']>;
  selectionInput: SelectionInput;
};

export type InvoicePaymentInput = {
  invoiceId: Scalars['ID']['input'];
  paymentMethod: Scalars['String']['input'];
  /** PaymentMethod */
  paymentMethodId: Scalars['String']['input'];
};

export type InvoiceSetting = {
  __typename?: 'InvoiceSetting';
  allowEmptyInvoice?: Maybe<Scalars['Boolean']['output']>;
  attachPdf?: Maybe<Scalars['Boolean']['output']>;
  autoPushInvoice?: Maybe<Scalars['Boolean']['output']>;
  autoSendInvoice?: Maybe<Scalars['Boolean']['output']>;
  generateSiteSpecific?: Maybe<Scalars['Boolean']['output']>;
  ignoreConsumedItem?: Maybe<Scalars['Boolean']['output']>;
  invoiceDueDays?: Maybe<Scalars['Int']['output']>;
  invoicePaymentMethod?: Maybe<PaymentMethod>;
  invoicePaymentTerm?: Maybe<PaymentTerm>;
  invoiceSchedule?: Maybe<Scalars['JSON']['output']>;
  invoiceTemplate?: Maybe<InvoiceTemplate>;
  lastScheduleAt?: Maybe<Scalars['String']['output']>;
  nextScheduleAt?: Maybe<Scalars['String']['output']>;
  overriddenSetting?: Maybe<Array<Maybe<OverriddenBillingSetting>>>;
  projectLineItemContent?: Maybe<Scalars['String']['output']>;
  projectLineItemPlaceholdersUsed?: Maybe<Scalars['JSON']['output']>;
  quoteTemplate?: Maybe<QuoteTemplate>;
  salesTax?: Maybe<Tax>;
  scheduleEnabled?: Maybe<Scalars['Boolean']['output']>;
  sendTemplate?: Maybe<NotificationTemplate>;
  settingId?: Maybe<Scalars['ID']['output']>;
  subscriptionLineItemContent?: Maybe<Scalars['String']['output']>;
  subscriptionLineItemPlaceholdersUsed?: Maybe<Scalars['JSON']['output']>;
  taxExempted?: Maybe<Scalars['Boolean']['output']>;
  ticketLineItemContent?: Maybe<Scalars['String']['output']>;
  ticketLineItemPlaceholdersUsed?: Maybe<Scalars['JSON']['output']>;
};

export type InvoiceSettingIdentifierInput = {
  settingId: Scalars['ID']['input'];
};

export type InvoiceSettingInput = {
  allowEmptyInvoice?: InputMaybe<Scalars['Boolean']['input']>;
  attachPdf?: InputMaybe<Scalars['Boolean']['input']>;
  autoPushInvoice?: InputMaybe<Scalars['Boolean']['input']>;
  autoSendInvoice?: InputMaybe<Scalars['Boolean']['input']>;
  generateSiteSpecific?: InputMaybe<Scalars['Boolean']['input']>;
  invoiceDueDays?: InputMaybe<Scalars['Int']['input']>;
  invoicePaymentMethod?: InputMaybe<PaymentMethodInput>;
  invoicePaymentTerm?: InputMaybe<PaymentTermIdentifierInput>;
  invoiceSchedule?: InputMaybe<Scalars['JSON']['input']>;
  projectLineItemContent?: InputMaybe<Scalars['String']['input']>;
  projectLineItemPlaceholdersUsed?: InputMaybe<Scalars['JSON']['input']>;
  salesTax?: InputMaybe<TaxInput>;
  sendTemplate?: InputMaybe<NotificationTemplateInput>;
  taxExempted?: InputMaybe<Scalars['Boolean']['input']>;
  ticketLineItemContent?: InputMaybe<Scalars['String']['input']>;
  ticketLineItemPlaceholdersUsed?: InputMaybe<Scalars['JSON']['input']>;
};

export type InvoiceStatus = {
  __typename?: 'InvoiceStatus';
  constant?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  statusId: Scalars['ID']['output'];
};

export enum InvoiceStatusEnum {
  Approved = 'APPROVED',
  Draft = 'DRAFT',
  InGeneration = 'IN_GENERATION',
  Overdue = 'OVERDUE',
  Paid = 'PAID',
  PaymentInProgress = 'PAYMENT_IN_PROGRESS',
  Void = 'VOID'
}

export type InvoiceSummary = {
  __typename?: 'InvoiceSummary';
  pendingInvoiceAmount?: Maybe<Scalars['String']['output']>;
  totalRevenueAmount?: Maybe<Scalars['String']['output']>;
};

export type InvoiceTaxItem = {
  __typename?: 'InvoiceTaxItem';
  id: Scalars['ID']['output'];
  rate: TaxRate;
  tax: Tax;
  taxAmount: Scalars['String']['output'];
  taxRate: Scalars['String']['output'];
  taxableAmount: Scalars['String']['output'];
};

export type InvoiceTemplate = {
  __typename?: 'InvoiceTemplate';
  footer?: Maybe<Scalars['String']['output']>;
  layoutConfiguration?: Maybe<Scalars['JSON']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  templateId?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type InvoiceTemplateIdentifierInput = {
  templateId: Scalars['ID']['input'];
};

export type LabourRevenue = {
  __typename?: 'LabourRevenue';
  effectiveRevenue: Scalars['String']['output'];
  revenue: Scalars['String']['output'];
};

export type ListInfo = {
  __typename?: 'ListInfo';
  condition?: Maybe<Scalars['JSON']['output']>;
  cursor?: Maybe<Cursor>;
  hasMore?: Maybe<Scalars['Boolean']['output']>;
  nextPageKey?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  page?: Maybe<Scalars['Int']['output']>;
  pageSize?: Maybe<Scalars['Int']['output']>;
  prevPageKey?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  sort?: Maybe<Array<Maybe<Sort>>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  view?: Maybe<ListView>;
};

export type ListInfoInput = {
  condition?: InputMaybe<RuleConditionInput>;
  cursor?: InputMaybe<CursorInput>;
  nextPageKey?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  prevPageKey?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sort?: InputMaybe<Array<InputMaybe<SortInput>>>;
  view?: InputMaybe<ListViewInput>;
};

export type ListView = {
  __typename?: 'ListView';
  customView: Scalars['Boolean']['output'];
  displayIcon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  labelKey?: Maybe<Scalars['String']['output']>;
  module?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  shared: Scalars['Boolean']['output'];
  systemViewProperty?: Maybe<Scalars['String']['output']>;
  viewCondition: Scalars['JSON']['output'];
  viewSubType?: Maybe<Scalars['String']['output']>;
};

export type ListViewIdentifierInput = {
  id: Scalars['ID']['input'];
};

export type ListViewInput = {
  displayIcon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  module?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  shared?: InputMaybe<Scalars['Boolean']['input']>;
  viewCondition?: InputMaybe<RuleConditionInput>;
  viewSubType?: InputMaybe<Scalars['String']['input']>;
};

export type ListViewRecordsCount = {
  __typename?: 'ListViewRecordsCount';
  count?: Maybe<Scalars['Int']['output']>;
  viewId: Scalars['ID']['output'];
};

export type LogInContext = {
  __typename?: 'LogInContext';
  customer?: Maybe<CustomerDetail>;
  hqSiteContext?: Maybe<SiteContext>;
  organizationContext?: Maybe<OrganizationContext>;
  rmmAppProperties?: Maybe<Scalars['JSON']['output']>;
  subscriptionContext?: Maybe<SubscriptionContext>;
  /** Logged-in user. This will be returned only if the request includes user context. */
  user?: Maybe<User>;
};

export type LoggedInUserAsApprover = {
  __typename?: 'LoggedInUserAsApprover';
  ticketPermission?: Maybe<Scalars['JSON']['output']>;
};

export type LoggedInUserAsFollower = {
  __typename?: 'LoggedInUserAsFollower';
  ticketPermission?: Maybe<Scalars['JSON']['output']>;
};

export type MspCompany = {
  __typename?: 'MSPCompany';
  businessHour?: Maybe<Array<Maybe<BusinessHour>>>;
  canAlterSubDomain?: Maybe<Scalars['Boolean']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  contactList?: Maybe<Array<Maybe<User>>>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  customDomain?: Maybe<Scalars['String']['output']>;
  customDomainAlias?: Maybe<Scalars['String']['output']>;
  customDomainStatus?: Maybe<Scalars['String']['output']>;
  customerId: Scalars['ID']['output'];
  dateFormat?: Maybe<Scalars['String']['output']>;
  emailSignature?: Maybe<Scalars['String']['output']>;
  favIconFileName?: Maybe<Scalars['String']['output']>;
  holidayList?: Maybe<HolidayList>;
  language?: Maybe<Scalars['String']['output']>;
  line1?: Maybe<Scalars['String']['output']>;
  line2?: Maybe<Scalars['String']['output']>;
  line3?: Maybe<Scalars['String']['output']>;
  /** CustomDomainStatus */
  logoFileName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  portalDomain?: Maybe<Scalars['String']['output']>;
  portalDomains?: Maybe<Array<Maybe<PortalDomain>>>;
  postalCode?: Maybe<Scalars['String']['output']>;
  rmmAppProperties?: Maybe<Scalars['JSON']['output']>;
  senderName?: Maybe<Scalars['String']['output']>;
  stateCode?: Maybe<Scalars['String']['output']>;
  subDomain?: Maybe<Scalars['String']['output']>;
  timeFormat?: Maybe<Scalars['String']['output']>;
  timezoneCode?: Maybe<Scalars['String']['output']>;
  working24x7?: Maybe<Scalars['Boolean']['output']>;
};

export type MailConfigurationRecord = {
  __typename?: 'MailConfigurationRecord';
  /** RecordType */
  host: Scalars['String']['output'];
  recordType?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type MailProviderConfig = {
  __typename?: 'MailProviderConfig';
  boxId: Scalars['ID']['output'];
  customServer?: Maybe<Scalars['Boolean']['output']>;
  customServerAccountSyncState?: Maybe<CustomMailServerAccountSyncState>;
  customServerProvider?: Maybe<Scalars['String']['output']>;
  customServerType?: Maybe<CustomMailServerType>;
  imapHost?: Maybe<Scalars['String']['output']>;
  imapPort?: Maybe<Scalars['Int']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  providerConfigId: Scalars['ID']['output'];
  smtpHost?: Maybe<Scalars['String']['output']>;
  smtpPort?: Maybe<Scalars['Int']['output']>;
  sslRequired?: Maybe<Scalars['Boolean']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type MailSenderConfiguration = {
  __typename?: 'MailSenderConfiguration';
  verificationRecords?: Maybe<Array<Maybe<MailConfigurationRecord>>>;
};

export type MailSetting = {
  __typename?: 'MailSetting';
  conversationOnBehalfOf?: Maybe<Scalars['String']['output']>;
  /** ReplyToType */
  incomingEmailAddress?: Maybe<Scalars['String']['output']>;
  /** MailSettingsType */
  replyTo?: Maybe<Scalars['String']['output']>;
  replyToType?: Maybe<Scalars['String']['output']>;
  /** deprecated */
  type: Scalars['String']['output'];
};

export type MailSettingsConfiguration = {
  __typename?: 'MailSettingsConfiguration';
  isDomainVerified?: Maybe<Scalars['Boolean']['output']>;
  mailSettings?: Maybe<Array<MailSetting>>;
  /** deprecated */
  records?: Maybe<Array<MailConfigurationRecord>>;
};

export type Mailbox = {
  __typename?: 'Mailbox';
  boxId: Scalars['ID']['output'];
  /** ConversationOnBehalf */
  client?: Maybe<Organization>;
  conversationOnBehalfOf?: Maybe<Scalars['String']['output']>;
  /** Deprecated */
  customServer?: Maybe<Scalars['Boolean']['output']>;
  customServerAccountSyncState?: Maybe<CustomMailServerAccountSyncState>;
  customServerOutgoingOnly?: Maybe<Scalars['Boolean']['output']>;
  customServerType?: Maybe<CustomMailServerType>;
  defaultBox?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  emailSignature?: Maybe<Scalars['String']['output']>;
  hasAdvancedConfiguration?: Maybe<Scalars['Boolean']['output']>;
  imapHost?: Maybe<Scalars['String']['output']>;
  /** Deprecated */
  imapPort?: Maybe<Scalars['Int']['output']>;
  /** MailSettingsType */
  incomingAddress?: Maybe<Scalars['String']['output']>;
  /** Deprecated */
  mailProviderConfigs?: Maybe<Array<Maybe<MailProviderConfig>>>;
  name?: Maybe<Scalars['String']['output']>;
  /** ConversationOnBehalf -> Deprecated */
  onBehalfOf?: Maybe<Scalars['String']['output']>;
  outgoingAddress?: Maybe<Scalars['String']['output']>;
  outgoingAddressType: Scalars['String']['output'];
  outgoingDomainVerified?: Maybe<Scalars['Boolean']['output']>;
  /** OutgoingAddressType */
  senderConfiguration?: Maybe<MailSenderConfiguration>;
  senderName?: Maybe<Scalars['String']['output']>;
  site?: Maybe<Site>;
  /** Deprecated */
  smtpHost?: Maybe<Scalars['String']['output']>;
  /** Deprecated */
  smtpPort?: Maybe<Scalars['Int']['output']>;
  /** Deprecated */
  sslRequired?: Maybe<Scalars['Boolean']['output']>;
  systemBox?: Maybe<Scalars['Boolean']['output']>;
  techGroup?: Maybe<Group>;
  type: Scalars['String']['output'];
  /** Deprecated */
  userName?: Maybe<Scalars['String']['output']>;
};

export type MailboxIdentifierInput = {
  boxId: Scalars['ID']['input'];
};

export type MaintenanceMode = {
  __typename?: 'MaintenanceMode';
  assetCount?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['ID']['output']>;
  createdTime: Scalars['String']['output'];
  maintenanceDetail: Scalars['JSON']['output'];
  maintenanceEnds?: Maybe<Scalars['String']['output']>;
  maintenanceId: Scalars['ID']['output'];
  maintenanceStarts?: Maybe<Scalars['String']['output']>;
  mode: Mode;
  scope: ScopeEnum;
  status: StatusEnum;
  title: Scalars['String']['output'];
  updatedBy?: Maybe<Scalars['ID']['output']>;
  updatedTime: Scalars['String']['output'];
};

export type MaintenanceScheduleConfig = {
  __typename?: 'MaintenanceScheduleConfig';
  maintenanceInfo?: Maybe<MaintenanceMode>;
  scheduleDetail?: Maybe<Scalars['JSON']['output']>;
};

export enum MaintenanceStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type MappingObject = {
  __typename?: 'MappingObject';
  details?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parentDetails?: Maybe<ParentDetailsDto>;
};

export type MappingObjectInput = {
  details?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MarkInvoicesAsPaidInput = {
  paymentDate: Scalars['String']['input'];
  paymentMethod: PaymentMethodIdentifierInput;
  paymentReference: Scalars['String']['input'];
  selectionInput: SelectionInput;
};

export type Mention = {
  __typename?: 'Mention';
  mentionId: Scalars['ID']['output'];
  note?: Maybe<Note>;
  projectConversation?: Maybe<ProjectConversation>;
  /** MentionEntityType */
  time: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type MentionList = {
  __typename?: 'MentionList';
  listInfo?: Maybe<ListInfo>;
  mentions?: Maybe<Array<Maybe<Mention>>>;
};

export enum MetricCategory {
  Disk = 'DISK',
  Eventlog = 'EVENTLOG',
  File = 'FILE',
  Folder = 'FOLDER',
  General = 'GENERAL',
  Hardware = 'HARDWARE',
  Log = 'LOG',
  Memory = 'MEMORY',
  Network = 'NETWORK',
  Others = 'OTHERS',
  Process = 'PROCESS',
  Processors = 'PROCESSORS',
  Service = 'SERVICE',
  Software = 'SOFTWARE',
  User = 'USER'
}

export enum MetricDataType {
  Arrayofjsonarray = 'ARRAYOFJSONARRAY',
  Decimal = 'DECIMAL',
  Integer = 'INTEGER',
  Json = 'JSON',
  Jsonarray = 'JSONARRAY',
  String = 'STRING',
  Text = 'TEXT',
  Timestamp = 'TIMESTAMP'
}

export type MetricInput = {
  attribute?: InputMaybe<Scalars['String']['input']>;
  /** MetricFunction */
  denominator?: InputMaybe<MetricPercentageDenominatorType>;
  filterCondition?: InputMaybe<Scalars['JSON']['input']>;
  metricFunction?: InputMaybe<Scalars['String']['input']>;
  metricId?: InputMaybe<Scalars['ID']['input']>;
  /** SortOrder */
  metricOrder?: InputMaybe<Scalars['Int']['input']>;
  metricUnit?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * It can be used to sort the results based on one metric. In case multiple metrics are requested,
   * ensure that the metric with an order should be a superset, i.e., all other metrics should not have more records
   * than this metric in the result.
   */
  recordsOrder?: InputMaybe<Scalars['String']['input']>;
};

export enum MetricPercentageDenominatorType {
  Filter = 'FILTER',
  Group = 'GROUP'
}

export enum MetricUnits {
  Bps = 'Bps',
  Bytes = 'Bytes',
  GBps = 'GBps',
  Gbps = 'Gbps',
  Kb = 'KB',
  Kbps = 'Kbps',
  Mb = 'MB',
  MBps = 'MBps',
  Mhz = 'MHZ',
  Mbps = 'Mbps',
  Millis = 'Millis',
  None = 'NONE',
  Percent = 'PERCENT',
  Tb = 'TB',
}

export type Metrics = {
  __typename?: 'Metrics';
  category?: Maybe<MetricCategory>;
  dataFormat?: Maybe<MetricDataType>;
  description?: Maybe<Scalars['String']['output']>;
  metricId?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pollInterval?: Maybe<Scalars['String']['output']>;
  state?: Maybe<State>;
  unit?: Maybe<MetricUnits>;
};

export type Milestone = {
  __typename?: 'Milestone';
  actualEndDate?: Maybe<Scalars['String']['output']>;
  blockedTasks?: Maybe<Scalars['Int']['output']>;
  completedTasks?: Maybe<Scalars['Int']['output']>;
  inProgressTasks?: Maybe<Scalars['Int']['output']>;
  milestoneId: Scalars['ID']['output'];
  milestoneOrder?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  overdueTasks?: Maybe<Scalars['Int']['output']>;
  plannedTasks?: Maybe<Scalars['Int']['output']>;
  status: Scalars['String']['output'];
  totalTasks?: Maybe<Scalars['Int']['output']>;
};

export enum Mode {
  Immediate = 'IMMEDIATE',
  Schedule = 'SCHEDULE'
}

export type ModuleListView = {
  __typename?: 'ModuleListView';
  module?: Maybe<Scalars['String']['output']>;
  views?: Maybe<Array<Maybe<ListView>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addACHAccount?: Maybe<AchAccount>;
  addContractServiceItem?: Maybe<ContractServiceItem>;
  /**
   * updateGroupUsers(input:  GroupsInput): Groups
   * updateGroupPermissions(input: GroupsInput): Groups
   * deleteGroup(groupId: String): Boolean
   * updateGroup(input: GroupsInput): Groups
   */
  addHolidayList?: Maybe<HolidayList>;
  /**
   * deprecated
   *     associateUnknownEmailToClient(clientId: ID!, unknownEmailIds: [ID!]!): Boolean
   */
  addIntegration?: Maybe<Integration>;
  /** Integration v2 */
  addIntegrationV2?: Maybe<Integration>;
  addMailProviderConfig?: Maybe<MailProviderConfig>;
  addOrUpdatePaymentSource?: Maybe<HostedPage>;
  addReservedSubDomains?: Maybe<Array<Maybe<ReservedSubDomain>>>;
  addRole?: Maybe<Role>;
  addSite?: Maybe<Site>;
  /** addGroup(input:GroupsInput): Groups */
  addTechnicianGroup?: Maybe<Group>;
  /** View APIs */
  addView?: Maybe<ListView>;
  approveOfferedItems?: Maybe<Array<Maybe<OfferedItem>>>;
  approveQuote?: Maybe<Scalars['Boolean']['output']>;
  associatePolicySetMappings?: Maybe<Scalars['Boolean']['output']>;
  bulkDeleteDownloads?: Maybe<Scalars['Boolean']['output']>;
  cancelSubscription?: Maybe<Scalars['Boolean']['output']>;
  checkUserEmailAddressAvailability?: Maybe<UserEmailAddressAvailability>;
  clearDemoData?: Maybe<Scalars['Boolean']['output']>;
  clearStickyNote?: Maybe<Scalars['Boolean']['output']>;
  /** Deprecated, Use confirmIntegratedPaymentMethod instead */
  confirmAddPaymentType?: Maybe<Scalars['Boolean']['output']>;
  confirmIntegratedPaymentMethod?: Maybe<Scalars['Boolean']['output']>;
  confirmInvoicePayment?: Maybe<Scalars['Boolean']['output']>;
  confirmPayment?: Maybe<Scalars['Boolean']['output']>;
  convertUnknownEmailToClientConversation?: Maybe<Scalars['Boolean']['output']>;
  convertUnknownEmailsToClientConversation?: Maybe<Scalars['Boolean']['output']>;
  createAIFeature?: Maybe<AiFeature>;
  createAIFeatureFeedback?: Maybe<AiFeatureFeedback>;
  createAddress?: Maybe<Address>;
  createBillingContractTemplate?: Maybe<ContractTemplate>;
  createBillingTemplate?: Maybe<BillingTemplate>;
  createBusinessFunction?: Maybe<BusinessFunction>;
  createChart?: Maybe<Chart>;
  createClient?: Maybe<Organization>;
  createClientBillingContract?: Maybe<ClientContract>;
  createClientContract?: Maybe<ClientContractDetail>;
  createClientContractFromBillingTemplate?: Maybe<Scalars['Boolean']['output']>;
  createClientConversation?: Maybe<Conversation>;
  createClientProvisionRule?: Maybe<ProvisionRule>;
  createClientSCIMConfiguration?: Maybe<Array<Maybe<ScimConfiguration>>>;
  createClientSite?: Maybe<Site>;
  createClientUser?: Maybe<User>;
  /** Deprecated, Use updateClientUser instead */
  createClientUserAssociations?: Maybe<Array<Maybe<UserAssociation>>>;
  createClientUserGroup?: Maybe<Group>;
  createCompanySCIMConfiguration?: Maybe<ScimConfiguration>;
  createCompanySite?: Maybe<Site>;
  createCompanyUser?: Maybe<User>;
  createCompanyUsers?: Maybe<Array<Maybe<User>>>;
  createContractTemplate?: Maybe<ClientContractTemplate>;
  createCustomField?: Maybe<CustomField>;
  /**
   * addUser(input:UserInput): User
   * createUser(input: UserInput): User
   */
  createEmployee?: Maybe<User>;
  createEmployees?: Maybe<Array<Maybe<User>>>;
  /** use createFieldV2 instead */
  createField?: Maybe<Field>;
  createFieldV2?: Maybe<Field>;
  createInvoice?: Maybe<Invoice>;
  createInvoiceFromQuote?: Maybe<Invoice>;
  createInvoiceTemplate?: Maybe<InvoiceTemplate>;
  createMailbox?: Maybe<Mailbox>;
  createNotificationTemplate?: Maybe<NotificationTemplate>;
  createProductFeatureCategories?: Maybe<Array<Maybe<ProductFeatureCategory>>>;
  createProductFeatures?: Maybe<Array<Maybe<ProductFeature>>>;
  createProvisionRuleFromTemplate?: Maybe<Scalars['Boolean']['output']>;
  createProvisionRuleTemplate?: Maybe<ProvisionRule>;
  createPurchaseSubscriptionConfiguration?: Maybe<HostedPage>;
  createQuote?: Maybe<Quote>;
  createQuoteTemplate?: Maybe<QuoteTemplate>;
  createReport?: Maybe<Report>;
  createSCIMConfiguration?: Maybe<Array<Maybe<ScimConfiguration>>>;
  createServiceCatalogItem?: Maybe<ServiceCatalogItem>;
  createServiceCategory?: Maybe<ServiceCategory>;
  createServiceItem?: Maybe<ServiceItem>;
  createTax?: Maybe<Tax>;
  /** Vendor Conversations */
  createVendorConversation?: Maybe<Conversation>;
  /** webhookSubscription APIs */
  createWebhookSubscription?: Maybe<WebhookSubscription>;
  deleteAIFeature?: Maybe<Scalars['ID']['output']>;
  deleteBillingContractTemplate?: Maybe<Scalars['Boolean']['output']>;
  deleteBillingTemplate?: Maybe<Scalars['Boolean']['output']>;
  deleteBusinessFunctions?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  deleteChart?: Maybe<Scalars['ID']['output']>;
  deleteCharts?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  deleteClientAttachments?: Maybe<Scalars['Boolean']['output']>;
  deleteClientContract?: Maybe<Scalars['Boolean']['output']>;
  deleteClientSites?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  deleteClientUser?: Maybe<Scalars['Boolean']['output']>;
  /** This mutation can be used to delete the client user associations along with the associated user if that user doesn't have any associations. */
  deleteClientUserAssociations?: Maybe<Scalars['Boolean']['output']>;
  deleteCompanySites?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  deleteCompanyUsers?: Maybe<Scalars['Boolean']['output']>;
  deleteContractTemplate?: Maybe<Scalars['ID']['output']>;
  /** Deprecated */
  deleteCustomField: Scalars['ID']['output'];
  deleteEmployee?: Maybe<Scalars['ID']['output']>;
  /** use deleteFieldV2 instead */
  deleteField?: Maybe<Field>;
  deleteFieldV2: Field;
  deleteHolidayList: Scalars['ID']['output'];
  deleteInAppNotifications?: Maybe<Scalars['Boolean']['output']>;
  deleteIntegration?: Maybe<Integration>;
  deleteIntegrationV2?: Maybe<Scalars['Boolean']['output']>;
  deleteInvoice?: Maybe<Scalars['ID']['output']>;
  deleteInvoices?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  deleteMailProviderConfig?: Maybe<Scalars['Boolean']['output']>;
  deleteMailbox?: Maybe<Scalars['ID']['output']>;
  deleteNotificationTemplate?: Maybe<Scalars['ID']['output']>;
  deleteNotificationTemplateAttachment?: Maybe<Scalars['Boolean']['output']>;
  deleteOutgoingMailSettings?: Maybe<Scalars['Boolean']['output']>;
  deleteProductFeatureCategories?: Maybe<Scalars['Boolean']['output']>;
  deleteProductFeatures?: Maybe<Scalars['Boolean']['output']>;
  deleteProvisionRule?: Maybe<Scalars['Boolean']['output']>;
  deleteQuotes?: Maybe<Scalars['Boolean']['output']>;
  deleteReport?: Maybe<Scalars['ID']['output']>;
  deleteReservedDomains: Array<Scalars['ID']['output']>;
  deleteRole?: Maybe<Scalars['ID']['output']>;
  deleteServiceCatalogItems?: Maybe<Scalars['Boolean']['output']>;
  deleteServiceCategories?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  deleteServiceItems?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  deleteSites?: Maybe<Array<Scalars['ID']['output']>>;
  deleteTax: Scalars['ID']['output'];
  deleteTechGroup?: Maybe<Scalars['ID']['output']>;
  deleteTechnician?: Maybe<Scalars['Boolean']['output']>;
  deleteUnknownEmails: Array<Scalars['ID']['output']>;
  deleteUser?: Maybe<Scalars['ID']['output']>;
  deleteUserGroup?: Maybe<Scalars['ID']['output']>;
  deleteView?: Maybe<Scalars['Boolean']['output']>;
  deleteWebhookSubscription?: Maybe<Scalars['Boolean']['output']>;
  disableCurrUserTfaAuthenticator?: Maybe<Scalars['Boolean']['output']>;
  disableCurrUserTfaAuthenticatorV2?: Maybe<Scalars['Boolean']['output']>;
  disableSSO?: Maybe<Scalars['JSON']['output']>;
  /** Support Admin API’s */
  disableTfa?: Maybe<Scalars['JSON']['output']>;
  downgradeSubscription?: Maybe<Scalars['Boolean']['output']>;
  enableCustomerSubDomainModification?: Maybe<Scalars['Boolean']['output']>;
  enableNylasV3?: Maybe<Scalars['JSON']['output']>;
  expireClientContract?: Maybe<Scalars['Boolean']['output']>;
  exportInvoicesAsCSV?: Maybe<Scalars['Boolean']['output']>;
  generateAPIToken?: Maybe<Scalars['String']['output']>;
  generateAuthenticatorSecretForCurrentUser?: Maybe<UserTfaDetail>;
  generateInstallers?: Maybe<Array<Maybe<InstallerInfo>>>;
  generatePaymentLinkToken?: Maybe<Scalars['String']['output']>;
  generateSupportAccess?: Maybe<SupportAccess>;
  hardDeleteClientConversations?: Maybe<Scalars['Boolean']['output']>;
  hardDeleteClients?: Maybe<Scalars['Boolean']['output']>;
  hardResetClientContracts?: Maybe<Scalars['Boolean']['output']>;
  ignoreOfferedItems?: Maybe<Array<Maybe<OfferedItem>>>;
  /** Deprecated. Use setupIntegratedPaymentMethod instead */
  initAddPaymentType?: Maybe<Scalars['JSON']['output']>;
  initInvoicePayment?: Maybe<Scalars['JSON']['output']>;
  /** initiateDataPull(name: String): Integration */
  initiateDataPull?: Maybe<Integration>;
  initiateDataPullV2?: Maybe<Integration>;
  invoiceOfferedItems?: Maybe<Scalars['Boolean']['output']>;
  killUserSessions?: Maybe<Scalars['Boolean']['output']>;
  mapIntegrationData?: Maybe<Scalars['Boolean']['output']>;
  markInvoicesAsPaid?: Maybe<Scalars['Boolean']['output']>;
  markServiceCatalogItemsAsActive?: Maybe<Scalars['Boolean']['output']>;
  markServiceCatalogItemsAsInActive?: Maybe<Scalars['Boolean']['output']>;
  modifyOutboundMailThresholdLimit?: Maybe<Scalars['Boolean']['output']>;
  payInvoice?: Maybe<Scalars['Boolean']['output']>;
  paymentSourceCallBack?: Maybe<Scalars['Boolean']['output']>;
  pushInvoicePaymentToThirdPartyApp?: Maybe<Invoice>;
  pushInvoiceToThirdPartyApp?: Maybe<Invoice>;
  /**
   * Dummy call in this area which is a workaround fix for an issue in SchemaParser Dictionary
   * solution suggested in https://github.com/graphql-java-kickstart/graphql-java-tools/issues/77#issuecomment-336153637
   */
  registerAccountsNestedInputTypes?: Maybe<Scalars['Boolean']['output']>;
  /** Dummy API for registering Printer GraphQL type */
  registerAllAsset?: Maybe<AllAsset>;
  /** Dummy API for registering NonMonitoredAsset */
  registerAsset?: Maybe<Asset>;
  registerAssetClassPolicy?: Maybe<AssetClassPolicy>;
  registerAssetGroupPolicy?: Maybe<AssetGroupPolicy>;
  registerAssetPolicy?: Maybe<AssetPolicy>;
  /**
   *  Dummy API for registering Asset type
   * testUpload(file: FileUpload): Boolean
   */
  registerIPAsset?: Maybe<IpAsset>;
  /** Dummy API for registering WorkStation */
  registerNonMonitoredAsset?: Maybe<NonMonitoredAsset>;
  registerWorkStation?: Maybe<WorkStation>;
  /** Deprecated, Use updateClientUser or deleteClientUserAssociations instead */
  removeClientUserAssociations?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  resendEmployeeActivationMail?: Maybe<Scalars['Boolean']['output']>;
  resendUserActivationMail?: Maybe<Scalars['Boolean']['output']>;
  /** Deprecated */
  resendUsersActivationMail?: Maybe<Array<Maybe<User>>>;
  resendVendorConversation?: Maybe<Conversation>;
  resetSigningSecret?: Maybe<WebhookSubscription>;
  restoreClients?: Maybe<Scalars['Boolean']['output']>;
  restoreDeleteClientConversations?: Maybe<Scalars['Boolean']['output']>;
  resyncFailedDataMappings?: Maybe<ResyncItems>;
  revokeSupportAccess?: Maybe<Scalars['Boolean']['output']>;
  saveAppPersonalization?: Maybe<Personalization>;
  savePersonalization?: Maybe<Scalars['Boolean']['output']>;
  sendInvoice?: Maybe<Scalars['Boolean']['output']>;
  sendInvoices?: Maybe<Array<Maybe<Invoice>>>;
  setupIntegratedPaymentMethod?: Maybe<Scalars['JSON']['output']>;
  shareReport?: Maybe<Scalars['Boolean']['output']>;
  softDeleteClientConversations?: Maybe<Scalars['Boolean']['output']>;
  /** Dummy API for registering Printer GraphQL type */
  softDeleteClients?: Maybe<Scalars['Boolean']['output']>;
  updateAIConfiguration?: Maybe<AiConfigurationInfo>;
  updateAIFeature?: Maybe<AiFeature>;
  updateAIFeatureGroup?: Maybe<AiFeatureGroup>;
  updateAIFeatureUsageCount?: Maybe<Scalars['Boolean']['output']>;
  updateAddon?: Maybe<Scalars['Boolean']['output']>;
  /** whenever there is change in any IDP detail fields, send the whole fields of idp details and also the ssotype field as value SAML */
  updateAppSecurityConfiguration?: Maybe<AppSecurityConfiguration>;
  updateBillableContractPrices?: Maybe<Scalars['Boolean']['output']>;
  updateBillingContractTemplate?: Maybe<ContractTemplate>;
  updateBillingTemplate?: Maybe<BillingTemplate>;
  updateBiometricStatus?: Maybe<Scalars['Boolean']['output']>;
  updateBusinessFunction?: Maybe<BusinessFunction>;
  updateChart?: Maybe<Chart>;
  updateCheckList?: Maybe<Array<Maybe<CheckListItem>>>;
  updateClient?: Maybe<Organization>;
  updateClientBillingContract?: Maybe<ClientContract>;
  updateClientContract?: Maybe<ClientContractDetail>;
  updateClientContractsOrder?: Maybe<Scalars['Boolean']['output']>;
  updateClientPolicyMigrationStatus?: Maybe<Scalars['Boolean']['output']>;
  updateClientProvisionRuleLayout?: Maybe<Scalars['Boolean']['output']>;
  updateClientSite?: Maybe<Site>;
  updateClientUser?: Maybe<User>;
  /** Deprecated, Use updateClientUser instead */
  updateClientUserAssociations?: Maybe<Array<Maybe<UserAssociation>>>;
  updateCompanySite?: Maybe<Site>;
  updateCompanyUser?: Maybe<User>;
  updateConfigurationCompletion?: Maybe<InitialConfiguration>;
  updateContractServiceItem?: Maybe<ContractServiceItem>;
  updateContractTemplate?: Maybe<ClientContractTemplate>;
  updateCurrentUser?: Maybe<User>;
  updateCurrentUserPassword?: Maybe<User>;
  updateCurrentUserPasswordV2?: Maybe<User>;
  /** Deprecated */
  updateCustomField?: Maybe<CustomField>;
  updateCustomerAsVerified?: Maybe<Scalars['Boolean']['output']>;
  updateCustomerOnPostSignup?: Maybe<Scalars['Boolean']['output']>;
  updateDataMapping?: Maybe<Integration>;
  updateDataMappingV2?: Maybe<Integration>;
  /** BitDefender Integration */
  updateDefaultPackagesForBitDefenderClients?: Maybe<Scalars['Boolean']['output']>;
  /** Acronis Integration */
  updateDefaultProtectPlanForAcronisClients?: Maybe<Scalars['Boolean']['output']>;
  updateEmployee?: Maybe<User>;
  /** use updateFieldV2 instead */
  updateField?: Maybe<Field>;
  updateFieldV2?: Maybe<Field>;
  updateGroupClients?: Maybe<Group>;
  updateHolidayList?: Maybe<HolidayList>;
  /** entity id, metadata url, certificate is mandatory even in update */
  updateIdentityProviderDetail?: Maybe<IdpSamlProviderDetail>;
  updateInAppNotificationState?: Maybe<Scalars['Boolean']['output']>;
  updateIntegration?: Maybe<Integration>;
  updateIntegrationAddOn?: Maybe<Scalars['Boolean']['output']>;
  updateIntegrationConfigForClients?: Maybe<Scalars['Boolean']['output']>;
  /** wrapper api for updateDataMappingV2 for single row data mapping cases */
  updateIntegrationEntityConfigs?: Maybe<Scalars['Boolean']['output']>;
  updateIntegrationEntityMapping?: Maybe<Integration>;
  updateIntegrationV2?: Maybe<Integration>;
  updateInvoice?: Maybe<Invoice>;
  /** Deprecated. Use createCompanySCIMConfiguration or createClientSCIMConfiguration instead */
  updateInvoiceSetting?: Maybe<InvoiceSetting>;
  updateInvoiceSettings?: Maybe<InvoiceSetting>;
  updateInvoiceTemplate?: Maybe<InvoiceTemplate>;
  updateInvoiceViewedByClientStatus?: Maybe<Scalars['Boolean']['output']>;
  updateMSPEmailDomains?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  updateMailProviderConfig?: Maybe<MailProviderConfig>;
  updateMailbox?: Maybe<Mailbox>;
  updateNotificationTemplate?: Maybe<NotificationTemplate>;
  updateNotificationTemplateInfo?: Maybe<NotificationTemplateInfo>;
  updateOfferedItems?: Maybe<Array<Maybe<OfferedItem>>>;
  updatePaymentMethods?: Maybe<Array<Maybe<PaymentMethod>>>;
  updatePaymentSetting?: Maybe<PaymentSetting>;
  updatePaymentTerms?: Maybe<Array<Maybe<PaymentTerm>>>;
  updatePlaceholderTemplate?: Maybe<PlaceholderTemplate>;
  updatePlan?: Maybe<Scalars['Boolean']['output']>;
  updatePrimaryCompany?: Maybe<Organization>;
  updateProductFeatureCategories?: Maybe<Array<Maybe<ProductFeatureCategory>>>;
  updateProductFeatures?: Maybe<Array<Maybe<ProductFeature>>>;
  updateProvisionRule?: Maybe<ProvisionRule>;
  updateProvisionRuleTemplateLayout?: Maybe<Scalars['Boolean']['output']>;
  updateQuote?: Maybe<Quote>;
  updateQuoteTemplate?: Maybe<QuoteTemplate>;
  updateQuoteViewedByClientStatus?: Maybe<Scalars['Boolean']['output']>;
  updateReadStatus?: Maybe<Scalars['Boolean']['output']>;
  updateRecentSearchInfo?: Maybe<Scalars['Boolean']['output']>;
  updateReport?: Maybe<Report>;
  updateReportCalculationStatus?: Maybe<OfferedItemAuditStatus>;
  updateReportExportConfig?: Maybe<ReportExportConfig>;
  updateReportSchedules?: Maybe<ReportScheduleList>;
  updateReservedSubDomain?: Maybe<ReservedSubDomain>;
  updateRole?: Maybe<Role>;
  updateSequenceGenerators?: Maybe<Array<Maybe<SequenceGenerator>>>;
  updateServiceCatalogItem?: Maybe<ServiceCatalogItem>;
  updateServiceCategory?: Maybe<ServiceCategory>;
  updateServiceItem?: Maybe<ServiceItem>;
  updateSite?: Maybe<Site>;
  updateStickyNote?: Maybe<StickyNote>;
  updateSubscriptionPurchaseStatus?: Maybe<Scalars['Boolean']['output']>;
  updateTax?: Maybe<Tax>;
  updateTechGroup?: Maybe<Group>;
  updateTechnicianLicenseState?: Maybe<Scalars['Boolean']['output']>;
  /** One time API call from Mobile to update Mobile device FCM ID based on user session exists already. */
  updateUserDeviceInfo?: Maybe<Scalars['Boolean']['output']>;
  updateUserGroup?: Maybe<Group>;
  updateVendorConversationReadStatus?: Maybe<Scalars['Boolean']['output']>;
  updateView?: Maybe<ListView>;
  updateWebhookSubscription?: Maybe<WebhookSubscription>;
  upgradeSubscription?: Maybe<HostedPage>;
  validateACHAccount?: Maybe<AchAccount>;
  validateEmailAddress?: Maybe<User_Email_Validation_Status>;
  validatePassword?: Maybe<Scalars['JSON']['output']>;
  verifyACHAccount?: Maybe<AchAccount>;
  verifyAndEnableCurrUserTfaAuthenticator?: Maybe<Scalars['Boolean']['output']>;
  verifyAndEnableCurrUserTfaAuthenticatorV2?: Maybe<Scalars['Boolean']['output']>;
  verifyCurrentPassword?: Maybe<Scalars['Boolean']['output']>;
  verifyIncomingAddressAvailability?: Maybe<Scalars['Boolean']['output']>;
  verifyOutgoingDomain?: Maybe<Scalars['Boolean']['output']>;
  verifyPasswordAndPasscode?: Maybe<Scalars['String']['output']>;
  /** Deprecated */
  verifyRecordsForFromAddressDomain?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationAddAchAccountArgs = {
  clientId: Scalars['ID']['input'];
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAddContractServiceItemArgs = {
  clientId: Scalars['ID']['input'];
  input: ContractServiceItemInput;
};


export type MutationAddHolidayListArgs = {
  input: HolidayListInput;
  year: Scalars['Int']['input'];
};


export type MutationAddIntegrationArgs = {
  input?: InputMaybe<IntegrationInput>;
  integrationId: Scalars['String']['input'];
};


export type MutationAddIntegrationV2Args = {
  input?: InputMaybe<IntegrationInput>;
  integrationRefId: Scalars['ID']['input'];
};


export type MutationAddMailProviderConfigArgs = {
  input: AddMailProviderConfigInput;
};


export type MutationAddReservedSubDomainsArgs = {
  reservedSubDomainsInput: Array<ReservedSubDomainInput>;
};


export type MutationAddRoleArgs = {
  input?: InputMaybe<RoleInput>;
};


export type MutationAddSiteArgs = {
  accountId: Scalars['ID']['input'];
  input?: InputMaybe<SiteInput>;
};


export type MutationAddTechnicianGroupArgs = {
  input?: InputMaybe<GroupInput>;
};


export type MutationAddViewArgs = {
  input?: InputMaybe<ListViewInput>;
};


export type MutationApproveOfferedItemsArgs = {
  input: SelectionInput;
};


export type MutationApproveQuoteArgs = {
  input: ApproveQuoteInput;
};


export type MutationAssociatePolicySetMappingsArgs = {
  input?: InputMaybe<AssociatePolicyCategoryInput>;
};


export type MutationBulkDeleteDownloadsArgs = {
  inventoryIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationCheckUserEmailAddressAvailabilityArgs = {
  input: CheckUserEmailAddressAvailabilityInput;
};


export type MutationConfirmAddPaymentTypeArgs = {
  setupIntentId: Scalars['String']['input'];
};


export type MutationConfirmIntegratedPaymentMethodArgs = {
  setupIntentId: Scalars['String']['input'];
};


export type MutationConfirmInvoicePaymentArgs = {
  paymentIntentId: Scalars['String']['input'];
};


export type MutationConfirmPaymentArgs = {
  hostedPageInput?: InputMaybe<HostedPageInput>;
};


export type MutationConvertUnknownEmailToClientConversationArgs = {
  clientId: Scalars['ID']['input'];
  unknownEmailId: Scalars['ID']['input'];
};


export type MutationConvertUnknownEmailsToClientConversationArgs = {
  clientId: Scalars['ID']['input'];
  unknownEmailIds: Array<Scalars['ID']['input']>;
};


export type MutationCreateAiFeatureArgs = {
  input: CreateAiFeatureInput;
};


export type MutationCreateAiFeatureFeedbackArgs = {
  input: CreateAiFeatureFeedbackInput;
};


export type MutationCreateAddressArgs = {
  input: AddressInput;
};


export type MutationCreateBillingContractTemplateArgs = {
  input: CreateContractTemplateInput;
};


export type MutationCreateBillingTemplateArgs = {
  input: CreateBillingTemplateInput;
};


export type MutationCreateBusinessFunctionArgs = {
  input: BusinessFunctionInput;
};


export type MutationCreateChartArgs = {
  input: ChartInput;
};


export type MutationCreateClientArgs = {
  input?: InputMaybe<ClientInput>;
};


export type MutationCreateClientBillingContractArgs = {
  input: CreateClientContractInput;
};


export type MutationCreateClientContractArgs = {
  clientId: Scalars['ID']['input'];
  contract: ClientContractInput;
};


export type MutationCreateClientContractFromBillingTemplateArgs = {
  input: CreateClientContractFromBillingTemplateInput;
};


export type MutationCreateClientConversationArgs = {
  clientId: Scalars['ID']['input'];
  input: ConversationInput;
};


export type MutationCreateClientProvisionRuleArgs = {
  input: CreateClientProvisionRuleInput;
};


export type MutationCreateClientScimConfigurationArgs = {
  input: Array<InputMaybe<OrganizationIdentifierInput>>;
};


export type MutationCreateClientSiteArgs = {
  input: CreateSiteInput;
};


export type MutationCreateClientUserArgs = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  input: UserInput;
};


export type MutationCreateClientUserAssociationsArgs = {
  input: Array<CreateUserAssociationInput>;
};


export type MutationCreateClientUserGroupArgs = {
  accountId: Scalars['ID']['input'];
  input?: InputMaybe<GroupInput>;
};


export type MutationCreateCompanySiteArgs = {
  input: CreateSiteInput;
};


export type MutationCreateCompanyUserArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationCreateCompanyUsersArgs = {
  input?: InputMaybe<Array<InputMaybe<UserInput>>>;
};


export type MutationCreateContractTemplateArgs = {
  template: ClientContractTemplateInput;
};


export type MutationCreateCustomFieldArgs = {
  input: CustomFieldInput;
};


export type MutationCreateEmployeeArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationCreateEmployeesArgs = {
  input?: InputMaybe<Array<InputMaybe<UserInput>>>;
};


export type MutationCreateFieldArgs = {
  input: FieldInput;
};


export type MutationCreateFieldV2Args = {
  input: CreateFieldInput;
};


export type MutationCreateInvoiceArgs = {
  input: CreateInvoiceInput;
};


export type MutationCreateInvoiceFromQuoteArgs = {
  input: CreateInvoiceFromQuoteInput;
};


export type MutationCreateInvoiceTemplateArgs = {
  input: CreateInvoiceTemplateInput;
};


export type MutationCreateMailboxArgs = {
  input: CreateMailboxInput;
};


export type MutationCreateNotificationTemplateArgs = {
  input?: InputMaybe<NotificationTemplateInput>;
  notificationTemplateType: Scalars['String']['input'];
};


export type MutationCreateProductFeatureCategoriesArgs = {
  input: Array<CreateProductFeatureCategoryInput>;
};


export type MutationCreateProductFeaturesArgs = {
  input: Array<CreateProductFeatureInput>;
};


export type MutationCreateProvisionRuleFromTemplateArgs = {
  input: CreateProvisionRuleFromTemplateInput;
};


export type MutationCreateProvisionRuleTemplateArgs = {
  input: CreateProvisionRuleTemplateInput;
};


export type MutationCreatePurchaseSubscriptionConfigurationArgs = {
  hostedPageInput?: InputMaybe<HostedPageInput>;
};


export type MutationCreateQuoteArgs = {
  input: CreateQuoteInput;
};


export type MutationCreateQuoteTemplateArgs = {
  input: CreateQuoteTemplateInput;
};


export type MutationCreateReportArgs = {
  input: ReportInput;
};


export type MutationCreateScimConfigurationArgs = {
  input?: InputMaybe<Array<InputMaybe<ScimConfigurationInput>>>;
};


export type MutationCreateServiceCatalogItemArgs = {
  input: CreateServiceCatalogItemInput;
};


export type MutationCreateServiceCategoryArgs = {
  category: ServiceCategoryInput;
};


export type MutationCreateServiceItemArgs = {
  item?: InputMaybe<ServiceItemInput>;
};


export type MutationCreateTaxArgs = {
  tax: TaxInput;
};


export type MutationCreateVendorConversationArgs = {
  input: ConversationInput;
};


export type MutationCreateWebhookSubscriptionArgs = {
  input?: InputMaybe<CreateWebhookSubscriptionInput>;
};


export type MutationDeleteAiFeatureArgs = {
  input: AiFeatureIdentifierInput;
};


export type MutationDeleteBillingContractTemplateArgs = {
  input: ContractIdentifierInput;
};


export type MutationDeleteBillingTemplateArgs = {
  input: BillingTemplateIdentifierInput;
};


export type MutationDeleteBusinessFunctionsArgs = {
  input: Array<BusinessFunctionIdentifierInput>;
};


export type MutationDeleteChartArgs = {
  chartId: Scalars['ID']['input'];
};


export type MutationDeleteChartsArgs = {
  chartIds: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDeleteClientAttachmentsArgs = {
  input: DeleteClientAttachmentsInput;
};


export type MutationDeleteClientContractArgs = {
  input: ContractIdentifierInput;
};


export type MutationDeleteClientSitesArgs = {
  input: Array<SiteIdentifierInput>;
};


export type MutationDeleteClientUserArgs = {
  forget?: InputMaybe<Scalars['Boolean']['input']>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDeleteClientUserAssociationsArgs = {
  forget?: InputMaybe<Scalars['Boolean']['input']>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDeleteCompanySitesArgs = {
  input: Array<SiteIdentifierInput>;
};


export type MutationDeleteCompanyUsersArgs = {
  forget?: InputMaybe<Scalars['Boolean']['input']>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDeleteContractTemplateArgs = {
  templateId: Scalars['ID']['input'];
};


export type MutationDeleteCustomFieldArgs = {
  fieldId: Scalars['ID']['input'];
};


export type MutationDeleteEmployeeArgs = {
  forget?: InputMaybe<Scalars['Boolean']['input']>;
  userId: Scalars['ID']['input'];
};


export type MutationDeleteFieldArgs = {
  input: FieldIdentifierInput;
};


export type MutationDeleteFieldV2Args = {
  input: FieldIdentifierInput;
};


export type MutationDeleteHolidayListArgs = {
  listId: Scalars['ID']['input'];
};


export type MutationDeleteInAppNotificationsArgs = {
  input: Array<InputMaybe<InAppNotificationIdentifierInput>>;
};


export type MutationDeleteIntegrationArgs = {
  integrationId: Scalars['String']['input'];
};


export type MutationDeleteIntegrationV2Args = {
  integrationRefId: Scalars['ID']['input'];
};


export type MutationDeleteInvoiceArgs = {
  invoiceId: Scalars['ID']['input'];
};


export type MutationDeleteInvoicesArgs = {
  input: Array<InvoiceIdentifierInput>;
};


export type MutationDeleteMailProviderConfigArgs = {
  mailProviderConfigId: Scalars['ID']['input'];
};


export type MutationDeleteMailboxArgs = {
  boxId: Scalars['ID']['input'];
};


export type MutationDeleteNotificationTemplateArgs = {
  notificationTemplateType: Scalars['String']['input'];
  templateId: Scalars['ID']['input'];
};


export type MutationDeleteNotificationTemplateAttachmentArgs = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  notificationTemplateId: Scalars['ID']['input'];
  notificationTemplateType: Scalars['String']['input'];
};


export type MutationDeleteProductFeatureCategoriesArgs = {
  input: Array<ProductFeatureCategoryIdentifierInput>;
};


export type MutationDeleteProductFeaturesArgs = {
  input: Array<ProductFeatureIdentifierInput>;
};


export type MutationDeleteProvisionRuleArgs = {
  input: ProvisionRuleIdentifierInput;
};


export type MutationDeleteQuotesArgs = {
  input: Array<QuoteIdentifierInput>;
};


export type MutationDeleteReportArgs = {
  reportId: Scalars['ID']['input'];
};


export type MutationDeleteReservedDomainsArgs = {
  reservedDomainIds: Array<Scalars['ID']['input']>;
};


export type MutationDeleteRoleArgs = {
  roleId: Scalars['ID']['input'];
};


export type MutationDeleteServiceCatalogItemsArgs = {
  input: Array<ServiceCatalogItemIdentifierInput>;
};


export type MutationDeleteServiceCategoriesArgs = {
  categoryIds: Array<Scalars['ID']['input']>;
};


export type MutationDeleteServiceItemsArgs = {
  itemIds: Array<Scalars['ID']['input']>;
};


export type MutationDeleteSitesArgs = {
  siteIds: Array<Scalars['ID']['input']>;
};


export type MutationDeleteTaxArgs = {
  taxId: Scalars['ID']['input'];
};


export type MutationDeleteTechGroupArgs = {
  groupId: Scalars['ID']['input'];
};


export type MutationDeleteTechnicianArgs = {
  forget?: InputMaybe<Scalars['Boolean']['input']>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDeleteUnknownEmailsArgs = {
  unknownEmailIds: Array<Scalars['ID']['input']>;
};


export type MutationDeleteUserArgs = {
  forget?: InputMaybe<Scalars['Boolean']['input']>;
  userId: Scalars['ID']['input'];
};


export type MutationDeleteUserGroupArgs = {
  groupId: Scalars['ID']['input'];
};


export type MutationDeleteViewArgs = {
  id: Scalars['ID']['input'];
  input: ListViewInput;
};


export type MutationDeleteWebhookSubscriptionArgs = {
  input: WebhookSubscriptionIdentifierInput;
};


export type MutationDisableCurrUserTfaAuthenticatorV2Args = {
  authenticationVerifiedToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDisableTfaArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDowngradeSubscriptionArgs = {
  chargeBeePlanPriceId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationExpireClientContractArgs = {
  input: ContractIdentifierInput;
};


export type MutationExportInvoicesAsCsvArgs = {
  input?: InputMaybe<SelectionInput>;
};


export type MutationGenerateInstallersArgs = {
  siteId: Scalars['ID']['input'];
};


export type MutationGeneratePaymentLinkTokenArgs = {
  input: InvoiceIdentifierInput;
};


export type MutationGenerateSupportAccessArgs = {
  expiry?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationHardDeleteClientConversationsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationHardDeleteClientsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationHardResetClientContractsArgs = {
  input: ClientIdentifierInput;
};


export type MutationIgnoreOfferedItemsArgs = {
  input: SelectionInput;
};


export type MutationInitAddPaymentTypeArgs = {
  clientId: Scalars['ID']['input'];
};


export type MutationInitInvoicePaymentArgs = {
  invoiceId: Scalars['ID']['input'];
};


export type MutationInitiateDataPullArgs = {
  clientId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationInitiateDataPullV2Args = {
  entityName?: InputMaybe<Scalars['String']['input']>;
  integrationRefId: Scalars['ID']['input'];
};


export type MutationInvoiceOfferedItemsArgs = {
  input: InvoiceOfferedItemsInput;
};


export type MutationKillUserSessionsArgs = {
  userId: Scalars['ID']['input'];
};


export type MutationMapIntegrationDataArgs = {
  entityName?: InputMaybe<Scalars['String']['input']>;
  integrationRefId?: InputMaybe<Scalars['ID']['input']>;
  tpItemId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationMarkInvoicesAsPaidArgs = {
  input?: InputMaybe<MarkInvoicesAsPaidInput>;
};


export type MutationMarkServiceCatalogItemsAsActiveArgs = {
  input: Array<ServiceCatalogItemIdentifierInput>;
};


export type MutationMarkServiceCatalogItemsAsInActiveArgs = {
  input: Array<ServiceCatalogItemIdentifierInput>;
};


export type MutationModifyOutboundMailThresholdLimitArgs = {
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationPayInvoiceArgs = {
  input: InvoicePaymentInput;
};


export type MutationPaymentSourceCallBackArgs = {
  status?: InputMaybe<OperationStatus>;
};


export type MutationPushInvoicePaymentToThirdPartyAppArgs = {
  integrationType?: InputMaybe<Scalars['String']['input']>;
  invoiceId: Scalars['ID']['input'];
};


export type MutationPushInvoiceToThirdPartyAppArgs = {
  clientId: Scalars['ID']['input'];
  integrationType?: InputMaybe<Scalars['String']['input']>;
  invoiceId: Scalars['ID']['input'];
};


export type MutationRegisterAccountsNestedInputTypesArgs = {
  WebhookSubscriptionStatusInput?: InputMaybe<WebhookSubscriptionStatusInput>;
  addReportScheduleInput?: InputMaybe<AddReportScheduleInput>;
  addTPMappingRuleInput?: InputMaybe<AddTpMappingRuleInput>;
  addonIdentifierInput?: InputMaybe<AddonIdentifierInput>;
  aggregationPaginationInput?: InputMaybe<AggregationPaginationInput>;
  aiConfigurationInput?: InputMaybe<AiConfigurationInput>;
  aiFeatureIdentifierInput?: InputMaybe<AiFeatureIdentifierInput>;
  aiPromptInput?: InputMaybe<AiPromptInput>;
  attachments?: InputMaybe<AttachmentInput>;
  billableContractQuantityChangeInput?: InputMaybe<BillableContractQuantityChangeInput>;
  businessFunctionInput?: InputMaybe<BusinessFunctionInput>;
  businessHourInput?: InputMaybe<BusinessHourInput>;
  checkListItemRefInput?: InputMaybe<CheckListItemRefInput>;
  clientAttachmentIdentifierInput?: InputMaybe<ClientAttachmentIdentifierInput>;
  clientSLAInput?: InputMaybe<ClientSlaInput>;
  condition?: InputMaybe<RuleConditionInput>;
  conditionalPricing?: InputMaybe<ConditionalPricingInput>;
  conditionalPricingItem?: InputMaybe<ConditionalPricingItemInput>;
  contractConditionalPricingOverrideInput?: InputMaybe<ContractConditionalPricingOverrideInput>;
  contractIdentifierInput?: InputMaybe<ContractIdentifierInput>;
  contractPricingOverrideIdentifierInput?: InputMaybe<ContractPricingOverrideIdentifierInput>;
  contractPricingOverrideItemIdentifierInput?: InputMaybe<ContractPricingOverrideItemIdentifierInput>;
  contractPricingOverrideItemInput?: InputMaybe<ContractPricingOverrideItemInput>;
  contractSLAIdentifierInput?: InputMaybe<ContractSlaIdentifierInput>;
  contractSLAInput?: InputMaybe<ContractSlaInput>;
  contractServiceItem?: InputMaybe<ContractServiceItemInput>;
  contractServiceItemChangeInput?: InputMaybe<ContractServiceItemChangeInput>;
  contractServiceItemIdentifierInput?: InputMaybe<ContractServiceItemIdentifierInput>;
  contractTemplateServiceItemInput?: InputMaybe<ContractTemplateServiceItemInput>;
  createBillableContractInput?: InputMaybe<CreateBillableContractInput>;
  createCheckListItemInput?: InputMaybe<CreateCheckListItemInput>;
  createContractApplicationInput?: InputMaybe<CreateContractApplicationInput>;
  createContractFromBillingTemplateInput?: InputMaybe<CreateContractFromBillingTemplateInput>;
  createContractInput?: InputMaybe<CreateContractInput>;
  createContractPricingOverrideInput?: InputMaybe<CreateContractPricingOverrideInput>;
  createContractSLAInput?: InputMaybe<CreateContractSlaInput>;
  createFieldOptionInput?: InputMaybe<CreateFieldOptionInput>;
  createHourlyServiceTypeItemInput?: InputMaybe<CreateHourlyServiceTypeItemInput>;
  createInvoiceItemInput?: InputMaybe<CreateInvoiceItemInput>;
  createPlanProductFeatureInput?: InputMaybe<CreatePlanProductFeatureInput>;
  createPortalDomainInput?: InputMaybe<CreatePortalDomainInput>;
  createProductSubscriptionLineItemAddOnInput?: InputMaybe<CreateProductSubscriptionLineItemAddOnInput>;
  createProductSubscriptionLineItemPlanInput?: InputMaybe<CreateProductSubscriptionLineItemPlanInput>;
  createProvisionRuleInput?: InputMaybe<CreateProvisionRuleInput>;
  createQuoteItemInput?: InputMaybe<CreateQuoteItemInput>;
  createRedeemableServiceBundleInput?: InputMaybe<CreateRedeemableServiceBundleInput>;
  createServiceTypeItemInput?: InputMaybe<CreateServiceTypeItemInput>;
  cursorInput?: InputMaybe<CursorInput>;
  denominator?: InputMaybe<MetricPercentageDenominatorType>;
  designationInput?: InputMaybe<DesignationInput>;
  featureGroup?: InputMaybe<AiFeatureGroupIdentifierInput>;
  featureInput?: InputMaybe<FeatureInput>;
  fixedDurationInput?: InputMaybe<FixedDurationInput>;
  groupByInputMap?: InputMaybe<GroupByInput>;
  holidayInput?: InputMaybe<HolidayInput>;
  holidayListInput?: InputMaybe<HolidayListInputIdentifierInput>;
  identifierInput?: InputMaybe<IdentifierInput>;
  input?: InputMaybe<NotificationTemplateAttachmentInput>;
  integrationConfigInput?: InputMaybe<ClientIntegrationConfigInput>;
  integrationIdentifierInput?: InputMaybe<IntegrationIdentifierInput>;
  invoiceItemInput?: InputMaybe<InvoiceItemInput>;
  invoiceItemRefInput?: InputMaybe<InvoiceItemRefInput>;
  invoiceSettingIdentifierInput?: InputMaybe<InvoiceSettingIdentifierInput>;
  listView?: InputMaybe<ListViewInput>;
  listViewIdentifier?: InputMaybe<ListViewIdentifierInput>;
  mailboxIdentifierInput?: InputMaybe<MailboxIdentifierInput>;
  metricInput?: InputMaybe<MetricInput>;
  notificationTemplateIdentifierInput?: InputMaybe<NotificationTemplateIdentifierInput>;
  notificationTemplateInput?: InputMaybe<NotificationTemplateInput>;
  operationInput?: InputMaybe<OperationInput>;
  optionIdentifierInput?: InputMaybe<OptionIdentifierInput>;
  orgDetails?: InputMaybe<OrganizationDetailsInput>;
  orgIdentifierInput?: InputMaybe<OrganizationIdentifierInput>;
  paginationInput?: InputMaybe<PaginationInput>;
  passwordPolicyInput?: InputMaybe<PasswordPolicyInput>;
  paymentMethodIdentifierInput?: InputMaybe<PaymentMethodIdentifierInput>;
  paymentMethodInput?: InputMaybe<PaymentMethodInput>;
  paymentTermIdentifierInput?: InputMaybe<PaymentTermIdentifierInput>;
  paymentTermInput?: InputMaybe<PaymentTermInput>;
  perpetualContractInput?: InputMaybe<PerpetualContractInput>;
  planIdentifierInput?: InputMaybe<PlanIdentifierInput>;
  planProductFeatureIdentifierInput?: InputMaybe<PlanProductFeatureIdentifierInput>;
  portalDomainIdentifierInput?: InputMaybe<PortalDomainIdentifierInput>;
  pricingModelDetailsInput?: InputMaybe<PricingModelDetailsInput>;
  pricingModelInput?: InputMaybe<PricingModelInput>;
  projectIdentifierInput?: InputMaybe<ProjectIdentifierInput>;
  promptAIFeatureFeedback?: InputMaybe<PromptAiFeatureFeedbackInput>;
  promptAIFeedbackInput?: InputMaybe<PromptAiFeatureFeedbackInput>;
  quoteApprovalInput?: InputMaybe<QuoteApprovalInput>;
  quoteApprovalStatus?: InputMaybe<QuoteApprovalStatus>;
  quoteApproverInput?: InputMaybe<QuoteApproverInput>;
  quoteItemIdentifierInput?: InputMaybe<QuoteItemIdentifierInput>;
  recipientInput?: InputMaybe<RecipientInput>;
  recipientType?: InputMaybe<RecipientType>;
  recurringContractFrequencyInput?: InputMaybe<RecurringContractFrequencyInput>;
  recurringContractInput?: InputMaybe<RecurringContractInput>;
  redeemableContractInput?: InputMaybe<RedeemableContractInput>;
  resellingClientConfigInput?: InputMaybe<ResellingClientConfigInput>;
  resellingItemConfigInput?: InputMaybe<ResellingItemConfigInput>;
  roleFeatureInput?: InputMaybe<RoleFeatureInput>;
  roleTypeInput?: InputMaybe<RoleTypeInput>;
  selectionInput?: InputMaybe<SelectionInput>;
  serviceCatalogItemIdentifierInput?: InputMaybe<ServiceCatalogItemIdentifierInput>;
  serviceCategory?: InputMaybe<ServiceCategoryInput>;
  serviceItemCustomPrice?: InputMaybe<ServiceItemCustomPriceInput>;
  serviceItemIdentifierInput?: InputMaybe<ServiceItemIdentifierInput>;
  sessionAppType?: InputMaybe<SessionAppType>;
  shareReportUserInput?: InputMaybe<ShareReportUserInput>;
  siteIdentifierInput?: InputMaybe<SiteIdentifierInput>;
  slaDurationInput?: InputMaybe<SlaDurationInput>;
  slaEscalationInput?: InputMaybe<SlaEscalationActionInput>;
  slaInput?: InputMaybe<SlaInput>;
  slaTiming?: InputMaybe<SlaTimingInput>;
  sort?: InputMaybe<SortInput>;
  ssoDetailInput?: InputMaybe<SsoDetailInput>;
  state?: InputMaybe<InAppNotificationState>;
  taxIdentifierInput?: InputMaybe<TaxIdentifierInput>;
  taxRateInput?: InputMaybe<TaxRateInput>;
  teamInput?: InputMaybe<TeamInput>;
  techGroupIdentifierInput?: InputMaybe<TechnicianGroupIdentifierInput>;
  timeseriesAggregationInput?: InputMaybe<TimeseriesAggregationInput>;
  tpEntityType?: InputMaybe<TpEntityType>;
  tpMappingRuleIdentifierInput?: InputMaybe<TpMappingRuleIdentifierInput>;
  tpSource?: InputMaybe<TpSourceInput>;
  type?: InputMaybe<DomainType>;
  updateBillableContractInput?: InputMaybe<UpdateBillableContractInput>;
  updateCheckListItemInput?: InputMaybe<UpdateCheckListItemInput>;
  updateContractApplicationInput?: InputMaybe<UpdateContractApplicationInput>;
  updateContractInput?: InputMaybe<UpdateContractInput>;
  updateContractPricingOverrideInput?: InputMaybe<UpdateContractPricingOverrideInput>;
  updateContractSLAInput?: InputMaybe<UpdateContractSlaInput>;
  updateContractTemplateInput?: InputMaybe<UpdateContractTemplateInput>;
  updateFieldOptionInput?: InputMaybe<UpdateFieldOptionInput>;
  updateHourlyServiceTypeItemInput?: InputMaybe<UpdateHourlyServiceTypeItemInput>;
  updateInvoiceItemInput?: InputMaybe<UpdateInvoiceItemInput>;
  updatePlanProductFeatureInput?: InputMaybe<UpdatePlanProductFeatureInput>;
  updatePortalDomainInput?: InputMaybe<UpdatePortalDomainInput>;
  updateQuoteItemInput?: InputMaybe<UpdateQuoteItemInput>;
  updateRedeemableServiceBundleInput?: InputMaybe<UpdateRedeemableServiceBundleInput>;
  updateReportScheduleInput?: InputMaybe<UpdateReportScheduleInput>;
  updateServiceTypeItemInput?: InputMaybe<UpdateServiceTypeItemInput>;
  updateTPMappingRuleInput?: InputMaybe<UpdateTpMappingRuleInput>;
  updateWebhookSubscriptionInput?: InputMaybe<UpdateWebhookSubscriptionInput>;
  userIdentifierInput?: InputMaybe<UserIdentifierInput>;
  userType?: InputMaybe<UserType>;
  vendor?: InputMaybe<VendorsInput>;
  webhookSubscriptionEventInput?: InputMaybe<WebhookSubscriptionEventInput>;
  webhookSubscriptionIdentifierInput?: InputMaybe<WebhookSubscriptionIdentifierInput>;
  workItemIdentifierInput?: InputMaybe<WorkItemIdentifierInput>;
};


export type MutationRemoveClientUserAssociationsArgs = {
  input: Array<UserAssociationIdentifierInput>;
};


export type MutationResendEmployeeActivationMailArgs = {
  userId: Scalars['ID']['input'];
};


export type MutationResendUserActivationMailArgs = {
  userId: Scalars['ID']['input'];
};


export type MutationResendUsersActivationMailArgs = {
  input: Array<Scalars['ID']['input']>;
};


export type MutationResendVendorConversationArgs = {
  input: ResendVendorConversationInput;
};


export type MutationResetSigningSecretArgs = {
  input: WebhookSubscriptionIdentifierInput;
};


export type MutationRestoreClientsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationRestoreDeleteClientConversationsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationResyncFailedDataMappingsArgs = {
  entityName: Scalars['String']['input'];
  integrationRefId: Scalars['ID']['input'];
};


export type MutationSaveAppPersonalizationArgs = {
  input: PersonalizationInput;
};


export type MutationSavePersonalizationArgs = {
  input?: InputMaybe<UserPersonalizationInput>;
};


export type MutationSendInvoiceArgs = {
  input: InvoiceConversationInput;
};


export type MutationSendInvoicesArgs = {
  input: Array<InvoiceIdentifierInput>;
};


export type MutationSetupIntegratedPaymentMethodArgs = {
  input: SetupIntegratedPaymentMethodInput;
};


export type MutationShareReportArgs = {
  input?: InputMaybe<ShareReportInput>;
};


export type MutationSoftDeleteClientConversationsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationSoftDeleteClientsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationUpdateAiConfigurationArgs = {
  input: AiConfigurationInfoInput;
};


export type MutationUpdateAiFeatureArgs = {
  input: UpdateAiFeatureInput;
};


export type MutationUpdateAiFeatureGroupArgs = {
  input: UpdateAiFeatureGroupInput;
};


export type MutationUpdateAiFeatureUsageCountArgs = {
  input: UpdateAiFeatureUsageCountInput;
};


export type MutationUpdateAddonArgs = {
  input: UpdateAddonInput;
};


export type MutationUpdateAppSecurityConfigurationArgs = {
  configurationId: Scalars['ID']['input'];
  input?: InputMaybe<AppSecurityConfigurationInput>;
};


export type MutationUpdateBillableContractPricesArgs = {
  input: UpdateBillableContractPricesInput;
};


export type MutationUpdateBillingContractTemplateArgs = {
  input: UpdateContractTemplateInput;
};


export type MutationUpdateBillingTemplateArgs = {
  input: UpdateBillingTemplateInput;
};


export type MutationUpdateBiometricStatusArgs = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateBusinessFunctionArgs = {
  input: BusinessFunctionInput;
};


export type MutationUpdateChartArgs = {
  chartId: Scalars['ID']['input'];
  input: ChartInput;
};


export type MutationUpdateCheckListArgs = {
  input?: InputMaybe<UpdateCheckListInput>;
};


export type MutationUpdateClientArgs = {
  input?: InputMaybe<ClientInput>;
};


export type MutationUpdateClientBillingContractArgs = {
  input: UpdateClientContractInput;
};


export type MutationUpdateClientContractArgs = {
  contract: ClientContractInput;
  contractId: Scalars['ID']['input'];
};


export type MutationUpdateClientContractsOrderArgs = {
  input: Array<ClientContractOrderInput>;
};


export type MutationUpdateClientPolicyMigrationStatusArgs = {
  clientId?: InputMaybe<Scalars['ID']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateClientProvisionRuleLayoutArgs = {
  input: UpdateClientProvisionRuleLayoutInput;
};


export type MutationUpdateClientSiteArgs = {
  input: UpdateSiteInput;
};


export type MutationUpdateClientUserArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationUpdateClientUserAssociationsArgs = {
  input: Array<UpdateUserAssociationInput>;
};


export type MutationUpdateCompanySiteArgs = {
  input: UpdateSiteInput;
};


export type MutationUpdateCompanyUserArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationUpdateConfigurationCompletionArgs = {
  id: Scalars['ID']['input'];
  isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateContractServiceItemArgs = {
  input: ContractServiceItemInput;
};


export type MutationUpdateContractTemplateArgs = {
  template: ClientContractTemplateInput;
  templateId: Scalars['ID']['input'];
};


export type MutationUpdateCurrentUserArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationUpdateCurrentUserPasswordArgs = {
  newPassword?: InputMaybe<Scalars['String']['input']>;
  oldPassword?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateCurrentUserPasswordV2Args = {
  authenticationVerifiedToken?: InputMaybe<Scalars['String']['input']>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateCustomFieldArgs = {
  fieldId: Scalars['ID']['input'];
  input: CustomFieldInput;
};


export type MutationUpdateCustomerOnPostSignupArgs = {
  input: UpdateCustomerOnPostSignupInput;
};


export type MutationUpdateDataMappingArgs = {
  data: Array<InputMaybe<DataMappingInput>>;
  name: Scalars['String']['input'];
};


export type MutationUpdateDataMappingV2Args = {
  data: Array<InputMaybe<DataMappingInput>>;
  entityName?: InputMaybe<Scalars['String']['input']>;
  integrationRefId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateDefaultPackagesForBitDefenderClientsArgs = {
  packageMappings?: InputMaybe<Array<InputMaybe<ClientInput>>>;
};


export type MutationUpdateDefaultProtectPlanForAcronisClientsArgs = {
  planMappings?: InputMaybe<Array<InputMaybe<ClientInput>>>;
};


export type MutationUpdateEmployeeArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationUpdateFieldArgs = {
  input: FieldInput;
};


export type MutationUpdateFieldV2Args = {
  input: UpdateFieldInput;
};


export type MutationUpdateGroupClientsArgs = {
  input?: InputMaybe<GroupInput>;
};


export type MutationUpdateHolidayListArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<HolidayListInput>;
  year: Scalars['Int']['input'];
};


export type MutationUpdateIdentityProviderDetailArgs = {
  input?: InputMaybe<IdpSamlProviderDetailInput>;
};


export type MutationUpdateInAppNotificationStateArgs = {
  input?: InputMaybe<UpdateInAppNotificationInput>;
};


export type MutationUpdateIntegrationArgs = {
  input?: InputMaybe<IntegrationInput>;
  integrationId: Scalars['String']['input'];
};


export type MutationUpdateIntegrationAddOnArgs = {
  input: IntegrationAddOnInput;
};


export type MutationUpdateIntegrationConfigForClientsArgs = {
  clientIntegrationInfoInput?: InputMaybe<Array<InputMaybe<ClientInput>>>;
  integrationId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateIntegrationEntityConfigsArgs = {
  entity?: InputMaybe<Scalars['String']['input']>;
  entityConfigInput?: InputMaybe<Array<InputMaybe<EntityConfigInput>>>;
  input?: InputMaybe<Scalars['JSON']['input']>;
  integrationRefId: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateIntegrationEntityMappingArgs = {
  entityName?: InputMaybe<Scalars['String']['input']>;
  integrationRefId?: InputMaybe<Scalars['ID']['input']>;
  mappingInput?: InputMaybe<Scalars['JSON']['input']>;
};


export type MutationUpdateIntegrationV2Args = {
  input?: InputMaybe<IntegrationInput>;
  integrationRefId: Scalars['ID']['input'];
};


export type MutationUpdateInvoiceArgs = {
  input: UpdateInvoiceInput;
};


export type MutationUpdateInvoiceSettingArgs = {
  clientId: Scalars['ID']['input'];
  setting: InvoiceSettingInput;
};


export type MutationUpdateInvoiceSettingsArgs = {
  input: UpdateInvoiceSettingInput;
};


export type MutationUpdateInvoiceTemplateArgs = {
  input: UpdateInvoiceTemplateInput;
};


export type MutationUpdateMspEmailDomainsArgs = {
  input?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdateMailProviderConfigArgs = {
  input: UpdateMailProviderConfigInput;
};


export type MutationUpdateMailboxArgs = {
  input: UpdateMailboxInput;
};


export type MutationUpdateNotificationTemplateArgs = {
  input?: InputMaybe<NotificationTemplateInput>;
  notificationTemplateType: Scalars['String']['input'];
  templateId: Scalars['ID']['input'];
};


export type MutationUpdateNotificationTemplateInfoArgs = {
  input: UpdateNotificationTemplateInfoInput;
};


export type MutationUpdateOfferedItemsArgs = {
  items?: InputMaybe<Array<InputMaybe<OfferedItemInput>>>;
};


export type MutationUpdatePaymentMethodsArgs = {
  input: UpdatePaymentMethodsInput;
};


export type MutationUpdatePaymentSettingArgs = {
  clientId: Scalars['ID']['input'];
  setting: PaymentSettingInput;
};


export type MutationUpdatePaymentTermsArgs = {
  input: UpdatePaymentTermInput;
};


export type MutationUpdatePlaceholderTemplateArgs = {
  input: UpdatePlaceholderTemplateInput;
};


export type MutationUpdatePlanArgs = {
  input: UpdatePlanInput;
};


export type MutationUpdatePrimaryCompanyArgs = {
  input: UpdateOrganizationInput;
};


export type MutationUpdateProductFeatureCategoriesArgs = {
  input: Array<UpdateProductFeatureCategoryInput>;
};


export type MutationUpdateProductFeaturesArgs = {
  input: Array<UpdateProductFeatureInput>;
};


export type MutationUpdateProvisionRuleArgs = {
  input: UpdateProvisionRuleInput;
};


export type MutationUpdateProvisionRuleTemplateLayoutArgs = {
  input: UpdateProvisionRuleTemplateLayoutInput;
};


export type MutationUpdateQuoteArgs = {
  input: UpdateQuoteInput;
};


export type MutationUpdateQuoteTemplateArgs = {
  input: UpdateQuoteTemplateInput;
};


export type MutationUpdateReadStatusArgs = {
  conversationId: Scalars['ID']['input'];
  status?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateRecentSearchInfoArgs = {
  hit?: InputMaybe<Scalars['JSON']['input']>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateReportArgs = {
  input: ReportInput;
  reportId: Scalars['ID']['input'];
};


export type MutationUpdateReportCalculationStatusArgs = {
  input: OfferedItemStatusInput;
};


export type MutationUpdateReportExportConfigArgs = {
  input: ReportExportConfigInput;
};


export type MutationUpdateReportSchedulesArgs = {
  input: ConfigureReportScheduleInput;
};


export type MutationUpdateReservedSubDomainArgs = {
  id: Scalars['ID']['input'];
  reservedSubDomainsInput: ReservedSubDomainInput;
};


export type MutationUpdateRoleArgs = {
  input?: InputMaybe<RoleInput>;
};


export type MutationUpdateSequenceGeneratorsArgs = {
  input?: InputMaybe<Array<InputMaybe<UpdateSequenceGeneratorInput>>>;
};


export type MutationUpdateServiceCatalogItemArgs = {
  input: UpdateServiceCatalogItemInput;
};


export type MutationUpdateServiceCategoryArgs = {
  category: ServiceCategoryInput;
  categoryId: Scalars['ID']['input'];
};


export type MutationUpdateServiceItemArgs = {
  item?: InputMaybe<ServiceItemInput>;
  itemId: Scalars['ID']['input'];
};


export type MutationUpdateSiteArgs = {
  input?: InputMaybe<SiteInput>;
  siteId: Scalars['ID']['input'];
};


export type MutationUpdateStickyNoteArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateSubscriptionPurchaseStatusArgs = {
  input?: InputMaybe<UpdatePurchaseSubscriptionStatusInput>;
};


export type MutationUpdateTaxArgs = {
  tax: TaxInput;
  taxId: Scalars['ID']['input'];
};


export type MutationUpdateTechGroupArgs = {
  input?: InputMaybe<GroupInput>;
};


export type MutationUpdateTechnicianLicenseStateArgs = {
  operationalStatus: UserOperationalStatus;
  userIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationUpdateUserDeviceInfoArgs = {
  input: UserSessionDeviceInfoInput;
};


export type MutationUpdateUserGroupArgs = {
  input?: InputMaybe<GroupInput>;
};


export type MutationUpdateVendorConversationReadStatusArgs = {
  input: UpdateVendorConversationReadStatusInput;
};


export type MutationUpdateViewArgs = {
  id: Scalars['ID']['input'];
  input: ListViewInput;
};


export type MutationUpdateWebhookSubscriptionArgs = {
  input?: InputMaybe<UpdateWebhookSubscriptionInput>;
};


export type MutationUpgradeSubscriptionArgs = {
  hostedPageInput?: InputMaybe<HostedPageInput>;
};


export type MutationValidateAchAccountArgs = {
  input?: InputMaybe<ValidateAchAccountInput>;
};


export type MutationValidateEmailAddressArgs = {
  accountType: AccountType;
  clientId?: InputMaybe<Scalars['ID']['input']>;
  email: Scalars['String']['input'];
};


export type MutationValidatePasswordArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationVerifyAchAccountArgs = {
  deposit1?: InputMaybe<Scalars['String']['input']>;
  deposit2?: InputMaybe<Scalars['String']['input']>;
  paymentMethodId: Scalars['ID']['input'];
};


export type MutationVerifyAndEnableCurrUserTfaAuthenticatorArgs = {
  passcode?: InputMaybe<Scalars['String']['input']>;
};


export type MutationVerifyAndEnableCurrUserTfaAuthenticatorV2Args = {
  authenticationVerifiedToken?: InputMaybe<Scalars['String']['input']>;
  passcode?: InputMaybe<Scalars['String']['input']>;
};


export type MutationVerifyCurrentPasswordArgs = {
  currentPassword?: InputMaybe<Scalars['String']['input']>;
};


export type MutationVerifyIncomingAddressAvailabilityArgs = {
  emailAddress?: InputMaybe<Scalars['String']['input']>;
};


export type MutationVerifyOutgoingDomainArgs = {
  boxId: Scalars['ID']['input'];
};


export type MutationVerifyPasswordAndPasscodeArgs = {
  currentPassword?: InputMaybe<Scalars['String']['input']>;
  passcode?: InputMaybe<Scalars['String']['input']>;
};

export type NetworkProtocol = {
  __typename?: 'NetworkProtocol';
  name?: Maybe<Scalars['String']['output']>;
  protocolId?: Maybe<Scalars['ID']['output']>;
};

export type NonMonitoredAsset = AssetBase & {
  __typename?: 'NonMonitoredAsset';
  assetClass?: Maybe<AssetClass>;
  assetId?: Maybe<Scalars['ID']['output']>;
  assetProtocolMapping?: Maybe<Array<Maybe<AssetProtocolMapping>>>;
  /** AssetPlatformCategory */
  associatedAssets?: Maybe<Scalars['JSON']['output']>;
  /** AdvanceRuleBuilder */
  categoryAssignedStrategy?: Maybe<PolicyCategoryAssignedBy>;
  client?: Maybe<Organization>;
  customFields?: Maybe<Scalars['JSON']['output']>;
  department?: Maybe<BusinessFunction>;
  loggedInUser?: Maybe<Scalars['String']['output']>;
  monitoringStatus?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nextPolicyCategory?: Maybe<PolicyCategory>;
  owner?: Maybe<User>;
  platformCategory?: Maybe<Scalars['String']['output']>;
  policyCategory?: Maybe<PolicyCategory>;
  site?: Maybe<Site>;
};


export type NonMonitoredAssetAssociatedAssetsArgs = {
  refEntityAttributes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type NonMonitoredAssetCustomFieldsArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Note = {
  __typename?: 'Note';
  /** Deprecated */
  addedBy?: Maybe<User>;
  addedOn: Scalars['String']['output'];
  attachments?: Maybe<Array<Maybe<Attachment>>>;
  content: Scalars['String']['output'];
  noteId: Scalars['ID']['output'];
  privacyType?: Maybe<NotePrivacyType>;
  ticket?: Maybe<Ticket>;
  workItem?: Maybe<WorkItem>;
};

export enum NotePrivacyType {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export enum NotificationChannel {
  InApp = 'IN_APP',
  Mail = 'MAIL',
  PushNotification = 'PUSH_NOTIFICATION'
}

export type NotificationTemplate = {
  __typename?: 'NotificationTemplate';
  activated?: Maybe<Scalars['Boolean']['output']>;
  attachmentList?: Maybe<Array<Maybe<NotificationTemplateAttachment>>>;
  bcc?: Maybe<Array<Maybe<Recipient>>>;
  canConfigureCcAndBcc?: Maybe<Scalars['Boolean']['output']>;
  canConfigureTo?: Maybe<Scalars['Boolean']['output']>;
  cc?: Maybe<Array<Maybe<Recipient>>>;
  channel?: Maybe<NotificationChannel>;
  constant?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  defaultTemplate?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  placeholdersUsed?: Maybe<Scalars['String']['output']>;
  skipDomains?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  skipEmails?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** AccountType */
  skipInitiatedByTechnician?: Maybe<Scalars['Boolean']['output']>;
  skipInitiatorAccountType?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  templateSubtype?: Maybe<NotificationTemplateSubtype>;
  templateType?: Maybe<NotificationTemplateType>;
  to?: Maybe<Array<Maybe<Recipient>>>;
};

export type NotificationTemplateAttachment = {
  __typename?: 'NotificationTemplateAttachment';
  fileName?: Maybe<Scalars['String']['output']>;
  fileSize?: Maybe<Scalars['String']['output']>;
  originalFileName?: Maybe<Scalars['String']['output']>;
};

export type NotificationTemplateAttachmentInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileSize?: InputMaybe<Scalars['String']['input']>;
  originalFileName?: InputMaybe<Scalars['String']['input']>;
};

export type NotificationTemplateIdentifierInput = {
  templateId: Scalars['ID']['input'];
};

export type NotificationTemplateInfo = {
  __typename?: 'NotificationTemplateInfo';
  constant?: Maybe<Scalars['String']['output']>;
  dataCondition?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  templateSubtype?: Maybe<NotificationTemplateSubtype>;
  templateType: NotificationTemplateType;
  templates?: Maybe<Array<Maybe<NotificationTemplate>>>;
};

export type NotificationTemplateInput = {
  activated?: InputMaybe<Scalars['Boolean']['input']>;
  attachmentList?: InputMaybe<Array<InputMaybe<NotificationTemplateAttachmentInput>>>;
  bcc?: InputMaybe<Array<InputMaybe<RecipientInput>>>;
  cc?: InputMaybe<Array<InputMaybe<RecipientInput>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  defaultTemplate?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  inlineImages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  placeholdersUsed?: InputMaybe<Scalars['String']['input']>;
  skipDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skipEmails?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** AccountType */
  skipInitiatedByTechnician?: InputMaybe<Scalars['Boolean']['input']>;
  skipInitiatorAccountType?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  templateSubtype?: InputMaybe<Scalars['String']['input']>;
  /**
   *  NotificationTemplateSubtype
   * send the whole recipient array,even if there is change(add/remove) in one recipient
   */
  to?: InputMaybe<Array<InputMaybe<RecipientInput>>>;
};

export enum NotificationTemplateSubtype {
  Requester = 'REQUESTER',
  Technician = 'TECHNICIAN',
  User = 'USER'
}

export enum NotificationTemplateType {
  Alerts = 'ALERTS',
  CustomAsset = 'CUSTOM_ASSET',
  CustomTicketing = 'CUSTOM_TICKETING',
  Invoice = 'INVOICE',
  Reply = 'REPLY',
  Report = 'REPORT',
  SideConversation = 'SIDE_CONVERSATION',
  SystemAsset = 'SYSTEM_ASSET',
  SystemClient = 'SYSTEM_CLIENT',
  SystemOnboarding = 'SYSTEM_ONBOARDING',
  SystemTask = 'SYSTEM_TASK',
  SystemTicketing = 'SYSTEM_TICKETING'
}

export enum Os {
  Aix = 'AIX',
  FreeBsd = 'FreeBSD',
  Hpux = 'HPUX',
  Ios = 'IOS',
  Iossx = 'IOSSX',
  Junos = 'Junos',
  Linux = 'LINUX',
  Mac = 'MAC',
  NetBsd = 'NetBSD',
  OpenBsd = 'OpenBSD',
  Solaris = 'Solaris',
  Tru64 = 'Tru64',
  Windows = 'WINDOWS'
}

export type OfferedItem = {
  __typename?: 'OfferedItem';
  adjustedBlockHour?: Maybe<Scalars['String']['output']>;
  adjustedBlockMoney?: Maybe<Scalars['String']['output']>;
  afterHours?: Maybe<Scalars['Boolean']['output']>;
  amount?: Maybe<Scalars['String']['output']>;
  billDate?: Maybe<Scalars['String']['output']>;
  client?: Maybe<Organization>;
  createdTime?: Maybe<Scalars['String']['output']>;
  discountRate?: Maybe<Scalars['String']['output']>;
  eligibleBlockHour?: Maybe<Scalars['String']['output']>;
  eligibleBlockMoney?: Maybe<Scalars['String']['output']>;
  itemId: Scalars['ID']['output'];
  module?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  operationStatus?: Maybe<OperationStatus>;
  project?: Maybe<Project>;
  qty?: Maybe<Scalars['String']['output']>;
  revisedAmount?: Maybe<Scalars['String']['output']>;
  revisedDiscountRate?: Maybe<Scalars['String']['output']>;
  revisedQuantity?: Maybe<Scalars['String']['output']>;
  revisedUnitPrice?: Maybe<Scalars['String']['output']>;
  serviceCatalogItem?: Maybe<ServiceCatalogItem>;
  serviceItem?: Maybe<ServiceItem>;
  site?: Maybe<Site>;
  status?: Maybe<Scalars['String']['output']>;
  technician?: Maybe<User>;
  ticket?: Maybe<Ticket>;
  type?: Maybe<OfferedItemType>;
  /** OfferedItemAuditStatus */
  unitPrice?: Maybe<Scalars['String']['output']>;
  updatedTime?: Maybe<Scalars['String']['output']>;
  workItem?: Maybe<WorkItem>;
  worklog?: Maybe<Worklog>;
};

export enum OfferedItemAuditStatus {
  Approved = 'APPROVED',
  Ignored = 'IGNORED',
  Invoiced = 'INVOICED',
  Pending = 'PENDING'
}

export type OfferedItemIdentifierInput = {
  itemId: Scalars['ID']['input'];
};

export type OfferedItemInput = {
  itemId?: InputMaybe<Scalars['ID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  revisedDiscountRate?: InputMaybe<Scalars['String']['input']>;
  /** OfferedItemAuditStatus */
  revisedQuantity?: InputMaybe<Scalars['String']['input']>;
  revisedUnitPrice?: InputMaybe<Scalars['String']['input']>;
  serviceCatalogItem?: InputMaybe<ServiceCatalogItemIdentifierInput>;
  serviceItem?: InputMaybe<ServiceItemIdentifierInput>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type OfferedItemList = {
  __typename?: 'OfferedItemList';
  items?: Maybe<Array<Maybe<OfferedItem>>>;
  listInfo?: Maybe<ListInfo>;
};

export enum OfferedItemModule {
  Project = 'PROJECT',
  Subscription = 'SUBSCRIPTION',
  Ticket = 'TICKET'
}

export type OfferedItemStatusInput = {
  status: OfferedItemAuditStatus;
};

export enum OfferedItemType {
  Contract = 'CONTRACT',
  Work = 'WORK'
}

export type OnBoardingState = {
  __typename?: 'OnBoardingState';
  agentDeployed?: Maybe<Scalars['Boolean']['output']>;
  clientCreated?: Maybe<Scalars['Boolean']['output']>;
  customDomainConfigured?: Maybe<Scalars['Boolean']['output']>;
  isMSPSignatureConfigured?: Maybe<Scalars['Boolean']['output']>;
  itDocCreated?: Maybe<Scalars['Boolean']['output']>;
  projectCreated?: Maybe<Scalars['Boolean']['output']>;
  reportCreated?: Maybe<Scalars['Boolean']['output']>;
  salesMailConfigured?: Maybe<Scalars['Boolean']['output']>;
  subDomainConfigured?: Maybe<Scalars['Boolean']['output']>;
  supportMailConfigured?: Maybe<Scalars['Boolean']['output']>;
};

export type Operation = {
  __typename?: 'Operation';
  labelKey?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  operationId: Scalars['ID']['output'];
  value?: Maybe<Scalars['Int']['output']>;
};

export type OperationInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  operationId: Scalars['ID']['input'];
  value?: InputMaybe<Scalars['Int']['input']>;
};

export enum OperationStatus {
  Cancel = 'CANCEL',
  DeletionInProgress = 'DELETION_IN_PROGRESS',
  Failure = 'FAILURE',
  InQueue = 'IN_QUEUE',
  Progress = 'PROGRESS',
  Success = 'SUCCESS'
}

export type Option = {
  __typename?: 'Option';
  children?: Maybe<Array<Maybe<Option>>>;
  deletable: Scalars['Boolean']['output'];
  /** Following field used in FieldDTO */
  description?: Maybe<Scalars['String']['output']>;
  /** To be deprecated */
  details?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  order: Scalars['Int']['output'];
  parentOption?: Maybe<Option>;
  value?: Maybe<Scalars['String']['output']>;
};

export type OptionIdentifierInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Organization = {
  __typename?: 'Organization';
  accountId: Scalars['ID']['output'];
  accountManager?: Maybe<User>;
  accountType?: Maybe<Scalars['String']['output']>;
  /** It will be return while creating an client user as part of client creation to indicate whether activation mail has been sent or not */
  activationMailSent?: Maybe<Scalars['Boolean']['output']>;
  clientOrg?: Maybe<Scalars['Boolean']['output']>;
  companyOrg?: Maybe<Scalars['Boolean']['output']>;
  customFields?: Maybe<Scalars['JSON']['output']>;
  details?: Maybe<OrganizationDetails>;
  emailDomains?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  hqSite?: Maybe<Site>;
  integrationConfig?: Maybe<Array<Maybe<ClientIntegrationConfig>>>;
  integrationStatus?: Maybe<ClientIntegrationsStatus>;
  /** AccountOperationalStatus */
  logoFileName?: Maybe<Scalars['String']['output']>;
  /** used in requester portal to show remote option for Splasthtop WFH AddOn */
  mappedToWFH?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  operationalStatus?: Maybe<Scalars['String']['output']>;
  policyMigrationStatus?: Maybe<Scalars['String']['output']>;
  primaryContact?: Maybe<User>;
  /** this attribute is used to indicate whether the particular client is present in QuickBooks if that app is integrated */
  quickBooksCustomerId?: Maybe<Scalars['String']['output']>;
  secondaryContact?: Maybe<User>;
  stage: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  technicianGroups?: Maybe<Array<Maybe<Group>>>;
};


export type OrganizationCustomFieldsArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type OrganizationIntegrationConfigArgs = {
  integrationIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type OrganizationContext = {
  __typename?: 'OrganizationContext';
  baseDomain?: Maybe<Scalars['String']['output']>;
  clientOrg?: Maybe<Scalars['Boolean']['output']>;
  companyOrg?: Maybe<Scalars['Boolean']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  dateFormat?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  logoFileName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  portalDomains?: Maybe<Array<Maybe<PortalDomain>>>;
  timeFormat?: Maybe<Scalars['String']['output']>;
};

export type OrganizationDetails = {
  __typename?: 'OrganizationDetails';
  baseDomain?: Maybe<Scalars['String']['output']>;
  canAlterSubDomain?: Maybe<Scalars['Boolean']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  customDomainAlias?: Maybe<Scalars['String']['output']>;
  dateFormat?: Maybe<Scalars['String']['output']>;
  emailSignature?: Maybe<Scalars['String']['output']>;
  favIconFileName?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  portalDomains?: Maybe<Array<Maybe<PortalDomain>>>;
  senderName?: Maybe<Scalars['String']['output']>;
  timeFormat?: Maybe<Scalars['String']['output']>;
};

export type OrganizationDetailsInput = {
  addPortalDomains?: InputMaybe<Array<InputMaybe<CreatePortalDomainInput>>>;
  currency?: InputMaybe<Scalars['String']['input']>;
  dateFormat?: InputMaybe<Scalars['String']['input']>;
  deletePortalDomains?: InputMaybe<Array<InputMaybe<PortalDomainIdentifierInput>>>;
  emailSignature?: InputMaybe<Scalars['String']['input']>;
  favIconFileName?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  senderName?: InputMaybe<Scalars['String']['input']>;
  timeFormat?: InputMaybe<Scalars['String']['input']>;
  updatePortalDomains?: InputMaybe<Array<InputMaybe<UpdatePortalDomainInput>>>;
};

export type OrganizationIdentifierInput = {
  accountId: Scalars['ID']['input'];
};

export type OverageItemDetailList = {
  __typename?: 'OverageItemDetailList';
  listInfo?: Maybe<ListInfo>;
  overageItems?: Maybe<Array<Maybe<OverageItems>>>;
};

export type OverageItems = {
  __typename?: 'OverageItems';
  endDateTime?: Maybe<Scalars['String']['output']>;
  entityId?: Maybe<Scalars['ID']['output']>;
  itemId?: Maybe<Scalars['ID']['output']>;
  itemName?: Maybe<Scalars['String']['output']>;
  startDateTime?: Maybe<Scalars['String']['output']>;
};

export enum OverriddenBillingSetting {
  AllowEmptyInvoice = 'ALLOW_EMPTY_INVOICE',
  AutoPushInvoice = 'AUTO_PUSH_INVOICE',
  AutoSendInvoice = 'AUTO_SEND_INVOICE',
  DueDate = 'DUE_DATE',
  IgnoreConsumedItem = 'IGNORE_CONSUMED_ITEM',
  InvoiceEmailTemplate = 'INVOICE_EMAIL_TEMPLATE',
  InvoicePaymentMethod = 'INVOICE_PAYMENT_METHOD',
  InvoicePaymentTerm = 'INVOICE_PAYMENT_TERM',
  ProjectLineItemTemplate = 'PROJECT_LINE_ITEM_TEMPLATE',
  QuoteTemplate = 'QUOTE_TEMPLATE',
  Schedule = 'SCHEDULE',
  ScheduleEnabled = 'SCHEDULE_ENABLED',
  SubscriptionLineItemTemplate = 'SUBSCRIPTION_LINE_ITEM_TEMPLATE',
  Template = 'TEMPLATE',
  TicketLineItemTemplate = 'TICKET_LINE_ITEM_TEMPLATE'
}

export type OverriddenPatchApprovalConfig = {
  __typename?: 'OverriddenPatchApprovalConfig';
  approvalBased?: Maybe<Scalars['String']['output']>;
  approvalState?: Maybe<Scalars['String']['output']>;
  /** Kb, PatchKey */
  approvalValue?: Maybe<Scalars['String']['output']>;
  configId?: Maybe<Scalars['ID']['output']>;
  /** Approve, Reject */
  description?: Maybe<Scalars['String']['output']>;
  lastUpdatedBy?: Maybe<User>;
  lastUpdatedTime?: Maybe<Scalars['String']['output']>;
};

export type PaginationInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

export type PasswordPolicy = {
  __typename?: 'PasswordPolicy';
  allowedFailureAtempt?: Maybe<Scalars['Int']['output']>;
  checkEmailMatch?: Maybe<Scalars['Boolean']['output']>;
  checkPrevPasswordMatchCount?: Maybe<Scalars['Int']['output']>;
  isAlphaNumeric?: Maybe<Scalars['Boolean']['output']>;
  isMixCaseWithSpecialChar?: Maybe<Scalars['Boolean']['output']>;
  /** PASSWORD_POLICY_TYPE */
  length?: Maybe<Scalars['Int']['output']>;
  passwordExpiryDays?: Maybe<Scalars['Int']['output']>;
  /** PASSWORD_POLICY_TYPE */
  passwordPolicyType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PasswordPolicyInput = {
  allowedFailureAtempt?: InputMaybe<Scalars['Int']['input']>;
  checkEmailMatch?: InputMaybe<Scalars['Boolean']['input']>;
  checkPrevPasswordMatchCount?: InputMaybe<Scalars['Int']['input']>;
  isAlphaNumeric?: InputMaybe<Scalars['Boolean']['input']>;
  isMixCaseWithSpecialChar?: InputMaybe<Scalars['Boolean']['input']>;
  length?: InputMaybe<Scalars['Int']['input']>;
  passwordExpiryDays?: InputMaybe<Scalars['Int']['input']>;
};

export type PatchCategory = {
  __typename?: 'PatchCategory';
  name?: Maybe<Scalars['String']['output']>;
  patchCategoryId?: Maybe<Scalars['ID']['output']>;
};

export type PatchPolicyApprovalConfig = {
  __typename?: 'PatchPolicyApprovalConfig';
  approvalState?: Maybe<Scalars['String']['output']>;
  patchCategory?: Maybe<PatchCategory>;
  patchSeverity?: Maybe<PatchSeverity>;
};

export type PatchPolicyConfig = {
  __typename?: 'PatchPolicyConfig';
  deferredApprovalConfig?: Maybe<Scalars['JSON']['output']>;
  deployPatchOnAssetOnboard?: Maybe<Scalars['Boolean']['output']>;
  manageExistingSoftware?: Maybe<Scalars['Boolean']['output']>;
  osManager?: Maybe<Scalars['String']['output']>;
  wakeOnLan?: Maybe<Scalars['Boolean']['output']>;
};

export type PatchPolicyRebootConfig = {
  __typename?: 'PatchPolicyRebootConfig';
  /** PATCH_REBOOT_ON_INACTIVE_SESSION */
  activeRebootWindowInterval?: Maybe<Scalars['Int']['output']>;
  customizedRebootMessage?: Maybe<Scalars['JSON']['output']>;
  rebootOnActiveSession?: Maybe<Scalars['String']['output']>;
  rebootOnInactiveSession?: Maybe<Scalars['String']['output']>;
  rebootPermissionConfig?: Maybe<Scalars['JSON']['output']>;
  /** PATCH_REBOOT_ON_ACTIVE_SESSION */
  rebootTriggerWindowInterval?: Maybe<Scalars['Int']['output']>;
};

export type PatchPolicyScheduleCondition = {
  __typename?: 'PatchPolicyScheduleCondition';
  conditionConfigs?: Maybe<Array<Maybe<PatchPolicyScheduleConditionConfig>>>;
  conditionId?: Maybe<Scalars['ID']['output']>;
};

export type PatchPolicyScheduleConditionConfig = {
  __typename?: 'PatchPolicyScheduleConditionConfig';
  mappingId?: Maybe<Scalars['ID']['output']>;
  patchCategory?: Maybe<PatchCategory>;
  patchSeverity?: Maybe<PatchSeverity>;
};

export type PatchPolicyScheduleConfig = {
  __typename?: 'PatchPolicyScheduleConfig';
  /** @deprecated Use scheduleDetail instead */
  cycleType?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use scheduleDetail instead */
  dayOfWeek?: Maybe<Scalars['Int']['output']>;
  installWindowDuration?: Maybe<Scalars['Int']['output']>;
  installWindowEnabled?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  scheduleConditions?: Maybe<Array<Maybe<PatchPolicyScheduleCondition>>>;
  scheduleDetail?: Maybe<Scalars['JSON']['output']>;
  scheduleId?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Use scheduleDetail instead */
  startTime?: Maybe<Scalars['String']['output']>;
};

export type PatchSeverity = {
  __typename?: 'PatchSeverity';
  name?: Maybe<Scalars['String']['output']>;
  patchSeverityId?: Maybe<Scalars['ID']['output']>;
};

export type Pax8Subscription = {
  __typename?: 'Pax8Subscription';
  contractId: Scalars['ID']['output'];
  subscriptionId: Scalars['ID']['output'];
};

export type PaymentCurrency = {
  __typename?: 'PaymentCurrency';
  currencyCode?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  paymentMethodId: Scalars['ID']['output'];
  paymentMethodName: Scalars['String']['output'];
};

export type PaymentMethodIdentifierInput = {
  paymentMethodId: Scalars['ID']['input'];
};

export type PaymentMethodInput = {
  paymentMethodId?: InputMaybe<Scalars['ID']['input']>;
  paymentMethodName?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentSetting = {
  __typename?: 'PaymentSetting';
  autoProcessPayment?: Maybe<Scalars['Boolean']['output']>;
  clientId?: Maybe<Scalars['ID']['output']>;
  paymentMethod?: Maybe<Scalars['String']['output']>;
  paymentMethodId?: Maybe<Scalars['String']['output']>;
};

export type PaymentSettingInput = {
  autoProcessPayment?: InputMaybe<Scalars['Boolean']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  paymentMethodId?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentTerm = {
  __typename?: 'PaymentTerm';
  paymentTermId?: Maybe<Scalars['ID']['output']>;
  paymentTermName: Scalars['String']['output'];
  paymentTermValue?: Maybe<Scalars['Int']['output']>;
  placeholder?: Maybe<Scalars['String']['output']>;
  systemPaymentTerm: Scalars['Boolean']['output'];
};

export type PaymentTermIdentifierInput = {
  paymentTermId: Scalars['ID']['input'];
};

export type PaymentTermInput = {
  paymentTermId?: InputMaybe<Scalars['ID']['input']>;
  paymentTermName: Scalars['String']['input'];
  paymentTermValue?: InputMaybe<Scalars['Int']['input']>;
};

export type PdfReportExportConfig = {
  __typename?: 'PdfReportExportConfig';
  autoGeneratedText?: Maybe<Scalars['Boolean']['output']>;
  clientLogo?: Maybe<Scalars['Boolean']['output']>;
};

export type PermissionCategory = {
  __typename?: 'PermissionCategory';
  categoryOrder?: Maybe<Scalars['Int']['output']>;
  labelKey?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  permissionCategoryId: Scalars['ID']['output'];
};

export type PerpetualContract = {
  __typename?: 'PerpetualContract';
  autoRenew: Scalars['Boolean']['output'];
  contractId: Scalars['ID']['output'];
};

export type PerpetualContractInput = {
  autoRenew: Scalars['Boolean']['input'];
};

export type Personalization = {
  __typename?: 'Personalization';
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type PersonalizationInput = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type PlaceHolder = {
  __typename?: 'PlaceHolder';
  key?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

export type PlaceholderTemplate = {
  __typename?: 'PlaceholderTemplate';
  constant: PlaceholderTemplateConstant;
  content?: Maybe<Scalars['String']['output']>;
  enabled: Scalars['Boolean']['output'];
  placeholdersUsed: Scalars['JSON']['output'];
  templateId: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export enum PlaceholderTemplateConstant {
  CalendarEventDescription = 'CALENDAR_EVENT_DESCRIPTION',
  Chat = 'CHAT'
}

export type Plan = {
  __typename?: 'Plan';
  chargeBeePlanId?: Maybe<Scalars['String']['output']>;
  endPointsCount?: Maybe<Scalars['Int']['output']>;
  features?: Maybe<Scalars['JSON']['output']>;
  offeringEntityType?: Maybe<ProductOfferingEntityType>;
  planFeatures?: Maybe<Array<Maybe<PlanFeature>>>;
  planId?: Maybe<Scalars['ID']['output']>;
  planName?: Maybe<Scalars['String']['output']>;
  planOrder?: Maybe<Scalars['Int']['output']>;
  planPrices?: Maybe<Array<Maybe<PlanPrice>>>;
  purchaseFeatures?: Maybe<Array<Maybe<PlanProductFeature>>>;
};

export type PlanFeature = {
  __typename?: 'PlanFeature';
  featureName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  module?: Maybe<Scalars['String']['output']>;
};

export type PlanIdentifierInput = {
  planId: Scalars['ID']['input'];
};

export type PlanPrice = {
  __typename?: 'PlanPrice';
  chargeBeePlanPriceId?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<PaymentCurrency>;
  duration?: Maybe<Scalars['String']['output']>;
  /** PaymentDuration */
  durationValue?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  plan?: Maybe<Plan>;
  price?: Maybe<Scalars['JSON']['output']>;
  priceValue?: Maybe<Scalars['Int']['output']>;
  pricingModel?: Maybe<CustomerPricingModel>;
};

export type PlanProductFeature = {
  __typename?: 'PlanProductFeature';
  available: Scalars['Boolean']['output'];
  availableWithAddOn: Scalars['Boolean']['output'];
  enabled: Scalars['Boolean']['output'];
  feature: ProductFeature;
  planProductFeatureId?: Maybe<Scalars['ID']['output']>;
  upsell: Scalars['Boolean']['output'];
  upsellAddonId?: Maybe<Scalars['ID']['output']>;
  upsellPlanId?: Maybe<Scalars['ID']['output']>;
};

export type PlanProductFeatureIdentifierInput = {
  planProductFeatureId: Scalars['ID']['input'];
};

export type Policy = {
  __typename?: 'Policy';
  /** Todo. Rename as alertConditionConfig */
  actions?: Maybe<Array<Maybe<PolicyActionConfig>>>;
  agentSettingsConfig?: Maybe<AgentSettingsConfig>;
  alertConfig?: Maybe<AlertCondition>;
  antiVirusConfig?: Maybe<AntiVirusPolicyConfig>;
  dataBackupPolicyConfig?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  endpointIntegrationConfig?: Maybe<PolicyEndpointIntegrationConfig>;
  maintenanceModeSchedules?: Maybe<MaintenanceScheduleConfig>;
  name?: Maybe<Scalars['String']['output']>;
  onboardingPolicyConfig?: Maybe<AssetOnboardingPolicyConfig>;
  overriddenPatchApprovalConfigs?: Maybe<Array<Maybe<OverriddenPatchApprovalConfig>>>;
  patchApprovals?: Maybe<Array<Maybe<PatchPolicyApprovalConfig>>>;
  patchConfiguration?: Maybe<PatchPolicyConfig>;
  patchRebootConfig?: Maybe<PatchPolicyRebootConfig>;
  patchScanSchedules?: Maybe<Array<Maybe<PatchPolicyScheduleConfig>>>;
  patchSchedules?: Maybe<Array<Maybe<PatchPolicyScheduleConfig>>>;
  policyId?: Maybe<Scalars['ID']['output']>;
  policySet?: Maybe<PolicySet>;
  policyType?: Maybe<Scalars['String']['output']>;
  remoteDesktopConfig?: Maybe<Array<Maybe<RemoteDesktopConfig>>>;
  resetActions?: Maybe<Array<Maybe<PolicyActionConfig>>>;
  thirdPartyApplicationConfig?: Maybe<ThirdPartyApplicationPolicyConfig>;
};

export type PolicyActionConfig = {
  __typename?: 'PolicyActionConfig';
  actionConfigId?: Maybe<Scalars['ID']['output']>;
  actionType?: Maybe<Scalars['String']['output']>;
  alertName?: Maybe<Scalars['String']['output']>;
  alertSeverity?: Maybe<Scalars['String']['output']>;
  executionOrder?: Maybe<Scalars['Int']['output']>;
  executionType?: Maybe<Scalars['String']['output']>;
  notification?: Maybe<NotificationTemplate>;
  resetTicketStatus?: Maybe<Scalars['String']['output']>;
  scheduleDetail?: Maybe<Scalars['JSON']['output']>;
  /** PolicyActionExecutionType */
  script?: Maybe<AssetScript>;
  scriptArguments?: Maybe<Scalars['JSON']['output']>;
  /** @deprecated Use ticketData */
  slackMessage?: Maybe<Scalars['String']['output']>;
  slackWebHook?: Maybe<SlackWebHook>;
  ticketData?: Maybe<TicketData>;
  ticketTemplate?: Maybe<TicketTemplate>;
};

export type PolicyAssociation = {
  __typename?: 'PolicyAssociation';
  policies?: Maybe<Array<Maybe<PolicyBase>>>;
  policyType?: Maybe<Scalars['String']['output']>;
};

export type PolicyBase = {
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  policyId: Scalars['ID']['output'];
};

export type PolicyCategory = {
  __typename?: 'PolicyCategory';
  assetClass?: Maybe<AssetClass>;
  createdBy?: Maybe<User>;
  createdTime?: Maybe<Scalars['String']['output']>;
  custom?: Maybe<Scalars['Boolean']['output']>;
  lastUpdatedBy?: Maybe<User>;
  lastUpdatedTime?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  policyCategoryId: Scalars['ID']['output'];
};

export enum PolicyCategoryAssignedBy {
  Manual = 'MANUAL',
  Rule = 'RULE',
  System = 'SYSTEM'
}

export type PolicyEndpointIntegrationConfig = {
  __typename?: 'PolicyEndpointIntegrationConfig';
  configMapping?: Maybe<Scalars['JSON']['output']>;
  integrationInfo?: Maybe<EndpointIntegrationInfo>;
};

export type PolicySet = {
  __typename?: 'PolicySet';
  assetClass?: Maybe<AssetClass>;
  assetGroups?: Maybe<Array<Maybe<AssetGroup>>>;
  category?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<User>;
  createdTime?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  lastUpdatedBy?: Maybe<User>;
  lastUpdatedTime?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** PolicySetCategory */
  override?: Maybe<Scalars['Boolean']['output']>;
  parentPolicySet?: Maybe<PolicySet>;
  policies?: Maybe<Array<Maybe<PolicyBase>>>;
  policyAssociations?: Maybe<Array<Maybe<PolicyAssociation>>>;
  policySetId: Scalars['ID']['output'];
};

export type PortalDomain = {
  __typename?: 'PortalDomain';
  domainId?: Maybe<Scalars['ID']['output']>;
  domainName?: Maybe<Scalars['String']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<PortalDomainStatus>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PortalDomainIdentifierInput = {
  domainId: Scalars['String']['input'];
};

export enum PortalDomainStatus {
  Active = 'ACTIVE',
  CertificateGenerated = 'CERTIFICATE_GENERATED',
  CertificateRenewed = 'CERTIFICATE_RENEWED',
  CnamePropagated = 'CNAME_PROPAGATED',
  Pending = 'PENDING'
}

export type PreviewChartInput = {
  chart?: InputMaybe<ChartIdentifierInput>;
  condition?: InputMaybe<Scalars['JSON']['input']>;
  entity?: InputMaybe<Scalars['String']['input']>;
  groupBy?: InputMaybe<Array<InputMaybe<GroupByInput>>>;
  metrics?: InputMaybe<Array<InputMaybe<MetricInput>>>;
};

export type PricingModel = {
  __typename?: 'PricingModel';
  details: Array<PricingModelDetail>;
  model: PricingModelType;
};

export type PricingModelDetail = {
  __typename?: 'PricingModelDetail';
  afterHoursValue?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type PricingModelDetailsInput = {
  afterHoursValue?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['String']['input'];
};

export type PricingModelInput = {
  details: Array<PricingModelDetailsInput>;
  model: PricingModelType;
};

export enum PricingModelType {
  PerUnit = 'PER_UNIT'
}

export type Priority = {
  __typename?: 'Priority';
  colorCode?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ProductFeature = {
  __typename?: 'ProductFeature';
  featureId?: Maybe<Scalars['ID']['output']>;
  labelKey?: Maybe<Scalars['String']['output']>;
  /** unique key to identify the feature, it will be served as key. */
  name: Scalars['String']['output'];
  /** Indicates whether this feature is released. If its false, it indicates the feature is coming soon. It will be used in purchase page. */
  releaseState?: Maybe<ProductFeatureReleaseState>;
};

export type ProductFeatureCategory = {
  __typename?: 'ProductFeatureCategory';
  categoryId: Scalars['ID']['output'];
  features?: Maybe<Array<Maybe<ProductFeature>>>;
  labelKey: Scalars['String']['output'];
  releaseState: ProductFeatureReleaseState;
  subcategories?: Maybe<Array<Maybe<ProductFeatureCategory>>>;
};

export type ProductFeatureCategoryIdentifierInput = {
  categoryId: Scalars['ID']['input'];
};

export type ProductFeatureIdentifierInput = {
  featureId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum ProductFeatureReleaseState {
  Beta = 'BETA',
  NewReleased = 'NEW_RELEASED',
  Released = 'RELEASED',
  Upcoming = 'UPCOMING'
}

export type ProductInvoiceBaseEstimate = {
  __typename?: 'ProductInvoiceBaseEstimate';
  addons?: Maybe<Array<Maybe<ProductSubscriptionAddOnLineItem>>>;
  plan: ProductSubscriptionPlanLineItem;
  subTotal: Scalars['String']['output'];
  taxes?: Maybe<Array<Maybe<ProductSubscriptionTaxDetail>>>;
  total: Scalars['String']['output'];
};

export type ProductInvoiceEstimate = {
  __typename?: 'ProductInvoiceEstimate';
  amountDue: Scalars['String']['output'];
  creditsApplied?: Maybe<Scalars['String']['output']>;
  lineItemGroups?: Maybe<Array<Maybe<ProductInvoiceEstimateLineItemGroup>>>;
  /** Denotes the positive or negative rounded off value in total. */
  roundOff?: Maybe<Scalars['String']['output']>;
  subTotal: Scalars['String']['output'];
  taxes?: Maybe<Array<Maybe<ProductSubscriptionTaxDetail>>>;
  total: Scalars['String']['output'];
};

export type ProductInvoiceEstimateLineItemGroup = {
  __typename?: 'ProductInvoiceEstimateLineItemGroup';
  addons?: Maybe<Array<Maybe<ProductSubscriptionAddOnLineItem>>>;
  charge?: Maybe<ProductSubscriptionChargeLineItem>;
  dateFrom: Scalars['String']['output'];
  dateTo: Scalars['String']['output'];
  isProrated?: Maybe<Scalars['Boolean']['output']>;
  plan?: Maybe<ProductSubscriptionPlanLineItem>;
};

export type ProductInvoiceImmediateEstimate = {
  __typename?: 'ProductInvoiceImmediateEstimate';
  addons?: Maybe<Array<Maybe<ProductSubscriptionAddOnLineItem>>>;
  amountDue: Scalars['String']['output'];
  creditsApplied?: Maybe<Scalars['String']['output']>;
  plan?: Maybe<ProductSubscriptionPlanLineItem>;
  subTotal: Scalars['String']['output'];
  taxes?: Maybe<Array<Maybe<ProductSubscriptionTaxDetail>>>;
  total: Scalars['String']['output'];
};

export type ProductOfferingEntity = {
  __typename?: 'ProductOfferingEntity';
  available: Scalars['Int']['output'];
  billableOverage: Scalars['Int']['output'];
  offeringEntityType: ProductOfferingEntityType;
  overageAllowed: Scalars['Boolean']['output'];
  purchased: Scalars['Int']['output'];
};

export enum ProductOfferingEntityType {
  AllAsset = 'ALL_ASSET',
  EndPointAsset = 'END_POINT_ASSET',
  NetworkAsset = 'NETWORK_ASSET',
  Technician = 'TECHNICIAN'
}

export type ProductSubscriptionAddOnLineItem = ProductSubscriptionLineItem & {
  __typename?: 'ProductSubscriptionAddOnLineItem';
  active: Scalars['Boolean']['output'];
  addon?: Maybe<Addon>;
  addonPrice: AddonPrice;
  amount: Scalars['String']['output'];
  minimumQuantity?: Maybe<Scalars['Int']['output']>;
  quantity: Scalars['Int']['output'];
  /** If the pricing model of the plan is TIERED, this field will contain a breakdown. */
  tieredBreakdown?: Maybe<Scalars['JSON']['output']>;
  unitPrice?: Maybe<Scalars['String']['output']>;
};

export type ProductSubscriptionChargeLineItem = {
  __typename?: 'ProductSubscriptionChargeLineItem';
  amount: Scalars['String']['output'];
  chargePrice: ChargePrice;
  quantity: Scalars['Int']['output'];
  unitPrice: Scalars['String']['output'];
};

export type ProductSubscriptionEstimate = {
  __typename?: 'ProductSubscriptionEstimate';
  currentInvoiceEstimate?: Maybe<ProductInvoiceEstimate>;
  /** Deprecated. Use 'currentInvoiceEstimate' instead. */
  immediateInvoiceEstimate?: Maybe<ProductInvoiceImmediateEstimate>;
  nextInvoiceEstimate?: Maybe<ProductInvoiceEstimate>;
  offeringEntities?: Maybe<Array<Maybe<ProductOfferingEntity>>>;
  overageInvoiceEstimate?: Maybe<ProductInvoiceEstimate>;
  restrictedOfferingEntities?: Maybe<Array<Maybe<ProductOfferingEntityType>>>;
  /** Deprecated. Use 'nextInvoiceEstimate' instead. */
  termInvoiceEstimate?: Maybe<ProductInvoiceBaseEstimate>;
};

export type ProductSubscriptionLineItem = {
  amount: Scalars['String']['output'];
  minimumQuantity?: Maybe<Scalars['Int']['output']>;
  quantity: Scalars['Int']['output'];
  unitPrice?: Maybe<Scalars['String']['output']>;
};

export type ProductSubscriptionPlanLineItem = ProductSubscriptionLineItem & {
  __typename?: 'ProductSubscriptionPlanLineItem';
  amount: Scalars['String']['output'];
  minimumQuantity?: Maybe<Scalars['Int']['output']>;
  planPrice: PlanPrice;
  quantity: Scalars['Int']['output'];
  /** If the pricing model of the plan is TIERED, this field will contain a breakdown. */
  tieredBreakdown?: Maybe<Scalars['JSON']['output']>;
  unitPrice?: Maybe<Scalars['String']['output']>;
};

export type ProductSubscriptionTaxDetail = {
  __typename?: 'ProductSubscriptionTaxDetail';
  taxAmount: Scalars['String']['output'];
  taxName: Scalars['String']['output'];
};

export type Project = {
  __typename?: 'Project';
  actualEndDate?: Maybe<Scalars['String']['output']>;
  actualStartDate?: Maybe<Scalars['String']['output']>;
  blockedTasks?: Maybe<Scalars['Int']['output']>;
  client: Organization;
  completedMilestones?: Maybe<Scalars['Int']['output']>;
  completedTasks?: Maybe<Scalars['Int']['output']>;
  contract?: Maybe<Contract>;
  /** ProjectOperationalStatus */
  createdTime: Scalars['String']['output'];
  displayId: Scalars['String']['output'];
  dueDate?: Maybe<Scalars['String']['output']>;
  inProgressTasks?: Maybe<Scalars['Int']['output']>;
  loggedInUserRole?: Maybe<Role>;
  members?: Maybe<Array<Maybe<ProjectMember>>>;
  milestones?: Maybe<Array<Maybe<Milestone>>>;
  operationalStatus?: Maybe<Scalars['String']['output']>;
  overdue?: Maybe<Scalars['Boolean']['output']>;
  overdueTasks?: Maybe<Scalars['Int']['output']>;
  owner: User;
  plannedTasks?: Maybe<Scalars['Int']['output']>;
  projectId: Scalars['ID']['output'];
  scheduledStartDate?: Maybe<Scalars['String']['output']>;
  showToClient?: Maybe<Scalars['Boolean']['output']>;
  site?: Maybe<Site>;
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  totalMilestones?: Maybe<Scalars['Int']['output']>;
  totalTasks?: Maybe<Scalars['Int']['output']>;
};

export type ProjectConversation = {
  __typename?: 'ProjectConversation';
  addedBy: User;
  addedOn: Scalars['String']['output'];
  attachments?: Maybe<Array<Maybe<Attachment>>>;
  content?: Maybe<Scalars['String']['output']>;
  conversationId: Scalars['ID']['output'];
  project: Project;
};

export type ProjectIdentifierInput = {
  projectId: Scalars['ID']['input'];
};

export type ProjectMember = {
  __typename?: 'ProjectMember';
  completedTasks?: Maybe<Scalars['Int']['output']>;
  /** ProjectMemberType */
  totalTasks?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type PromptAiFeature = {
  __typename?: 'PromptAIFeature';
  featureId?: Maybe<Scalars['ID']['output']>;
  prompt?: Maybe<Scalars['String']['output']>;
};

export type PromptAiFeatureFeedback = {
  __typename?: 'PromptAIFeatureFeedback';
  actualMessage: Scalars['String']['output'];
  aiMessage: Scalars['String']['output'];
  feedbackId: Scalars['ID']['output'];
};

export type PromptAiFeatureFeedbackInput = {
  actualMessage: Scalars['String']['input'];
  aiMessage: Scalars['String']['input'];
};

export type ProvisionRule = {
  __typename?: 'ProvisionRule';
  defaultRule: Scalars['Boolean']['output'];
  items?: Maybe<Array<ServiceCatalogItem>>;
  name: Scalars['String']['output'];
  parentRule?: Maybe<ProvisionRule>;
  provisionRuleId: Scalars['ID']['output'];
  ruleCondition: Scalars['JSON']['output'];
  ruleEntityType: ProvisionRuleEntityType;
  siteQuantities?: Maybe<Array<ClientSiteQuantity>>;
};

export enum ProvisionRuleEntityType {
  Asset = 'ASSET',
  Client = 'CLIENT',
  Site = 'SITE',
  User = 'USER'
}

export type ProvisionRuleIdentifierInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  provisionRuleId?: InputMaybe<Scalars['ID']['input']>;
};

export type ProvisionRuleItem = {
  __typename?: 'ProvisionRuleItem';
  provisionRule: ProvisionRule;
  serviceCatalogItem: ServiceCatalogItem;
};

export type ProvisionRuleItemList = {
  __typename?: 'ProvisionRuleItemList';
  listInfo?: Maybe<ListInfo>;
  provisionRuleItems?: Maybe<Array<ProvisionRuleItem>>;
};

export type ProvisionRuleList = {
  __typename?: 'ProvisionRuleList';
  layout?: Maybe<Scalars['JSON']['output']>;
  provisionRules?: Maybe<Array<ProvisionRule>>;
};

export type Query = {
  __typename?: 'Query';
  constructInvoiceItems?: Maybe<Array<Maybe<TransientInvoiceItem>>>;
  exportChart?: Maybe<Scalars['Boolean']['output']>;
  exportReport?: Maybe<Scalars['Boolean']['output']>;
  fetchClientContract?: Maybe<ClientContract>;
  fetchClientContractList?: Maybe<ClientContractList>;
  fetchNylasV3Status?: Maybe<Scalars['JSON']['output']>;
  fetchSSOStatus?: Maybe<Scalars['JSON']['output']>;
  fetchSupportAdminOperations?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  fetchTFAStatus?: Maybe<Scalars['JSON']['output']>;
  fetchTPEntityList?: Maybe<TpEntityList>;
  fetchTPMappingRuleCondition?: Maybe<Array<Maybe<TpMappingRuleCondition>>>;
  generateAndSendReport?: Maybe<Scalars['Boolean']['output']>;
  getAIConfiguration?: Maybe<AiConfigurationInfo>;
  getAIFeature?: Maybe<AiFeature>;
  getAIFeatureFeedbackList?: Maybe<AiFeatureFeedbackList>;
  getAIFeatureGroups?: Maybe<Array<Maybe<AiFeatureGroup>>>;
  getAIFeatureList?: Maybe<AiFeatureList>;
  getAPIToken?: Maybe<Scalars['String']['output']>;
  /** Acronis Integration */
  getAcronisProtectionPlansForClient?: Maybe<Scalars['JSON']['output']>;
  getActiveRecurringRevenue: ActiveRecurringRevenue;
  getAddOnBillingDetails?: Maybe<AddOnBillingDetails>;
  getAddOnDetails?: Maybe<IntegrationAddOnDetails>;
  getAddOnItemListByClient?: Maybe<ResellingItemList>;
  getAddOnStatusForLoggedInUser?: Maybe<Array<Maybe<AddOnStatus>>>;
  getAddOnUsageByChargeBeeItemId?: Maybe<Scalars['Int']['output']>;
  getAddresses?: Maybe<AddressList>;
  getAgentInstallerDetails?: Maybe<AgentInstallerDetails>;
  getAggregatedValues?: Maybe<AggregatedValues>;
  getAllActiveAddons?: Maybe<Array<Maybe<Addon>>>;
  getAllActivePlans?: Maybe<Array<Maybe<Plan>>>;
  /** Deprecated, use getCompanySCIMConfiguration */
  getAllClientSCIMConfigurations?: Maybe<Array<Maybe<ScimConfiguration>>>;
  getAllCustomFields?: Maybe<Array<Maybe<CustomField>>>;
  getAllEmployees?: Maybe<Array<Maybe<User>>>;
  getAllFields?: Maybe<Array<Maybe<Field>>>;
  getAllHolidayList?: Maybe<Array<Maybe<HolidayList>>>;
  getAllHomePageWidgets?: Maybe<HomePageWidgetList>;
  getAllPaymentCurrencies?: Maybe<Array<Maybe<PaymentCurrency>>>;
  getAllPlans?: Maybe<Array<Maybe<Plan>>>;
  getAllReservedSubDomains?: Maybe<Array<Maybe<ReservedSubDomain>>>;
  getAllTax?: Maybe<Array<Maybe<Tax>>>;
  getAllTechnicians?: Maybe<Array<Maybe<User>>>;
  getAllowedChartEntities?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  getAllowedClientSites?: Maybe<SiteList>;
  getAllowedServiceItems?: Maybe<ServiceItemList>;
  getAllowedTechnicianGroups?: Maybe<Array<Maybe<Group>>>;
  getAppPersonalization?: Maybe<Personalization>;
  getAppSecurityConfiguration?: Maybe<AppSecurityConfiguration>;
  getAssetHealthSummaryReportConfigMeta?: Maybe<Scalars['JSON']['output']>;
  getAudits?: Maybe<AuditList>;
  getBillingTemplateList?: Maybe<BillingTemplateList>;
  /** Bitdefender Integration */
  getBitDefenderInstallationPackagesForClient?: Maybe<Scalars['JSON']['output']>;
  getBlockItemConsumptionInfo?: Maybe<BlockItemConsumptionInfo>;
  getBlockItemInfo?: Maybe<BlockItemConsumptionInfo>;
  getBusinessFunction?: Maybe<BusinessFunction>;
  getBusinessFunctionList?: Maybe<Array<Maybe<BusinessFunction>>>;
  getCRECompanyBaselineMetrics?: Maybe<Scalars['JSON']['output']>;
  getCRETicketsByCategory?: Maybe<Scalars['JSON']['output']>;
  getCRETrendAnalysis?: Maybe<Scalars['JSON']['output']>;
  getChart?: Maybe<Chart>;
  getChartViews?: Maybe<Array<Maybe<ListView>>>;
  getCharts?: Maybe<ChartList>;
  getCheckList?: Maybe<Array<Maybe<CheckListItem>>>;
  getClient?: Maybe<Organization>;
  getClientApproversForTicket?: Maybe<UserList>;
  getClientAttachments?: Maybe<ClientAttachmentList>;
  getClientContract?: Maybe<ClientContractDetail>;
  getClientContractTemplate?: Maybe<ClientContractTemplate>;
  getClientContractTemplates?: Maybe<ClientContractTemplateList>;
  getClientConversationAttachments?: Maybe<ClientConversationAttachmentList>;
  getClientConversationList?: Maybe<ConversationList>;
  getClientConversationReplyRecipients?: Maybe<ReplyContext>;
  getClientConversationThreadedContent?: Maybe<Scalars['String']['output']>;
  getClientConversations?: Maybe<ConversationList>;
  getClientEfficiencyRanking?: Maybe<Scalars['JSON']['output']>;
  getClientFinancialPerformanceMetrics?: Maybe<ClientFinancialPerformanceMetricList>;
  getClientHeadQuarterSite?: Maybe<Site>;
  getClientList?: Maybe<ClientList>;
  getClientListViewMetaInfo?: Maybe<Scalars['JSON']['output']>;
  getClientListViewMetaInfoV2?: Maybe<Scalars['JSON']['output']>;
  getClientProvisionRuleList?: Maybe<ProvisionRuleList>;
  getClientRankingByWorklogHoursLogged?: Maybe<Scalars['JSON']['output']>;
  getClientRevenueMetrics: ClientRevenue;
  getClientSite?: Maybe<Site>;
  /** APIs for sites which are associated with an organization that is a client not a company. It is used to fetch sites of client organizations in MSP system. */
  getClientSiteList?: Maybe<SiteList>;
  getClientSpecificEfficiency?: Maybe<Scalars['JSON']['output']>;
  getClientStages?: Maybe<Array<Maybe<ClientStage>>>;
  getClientUser?: Maybe<User>;
  getClientUserAssociationListViewMetaInfo?: Maybe<Scalars['JSON']['output']>;
  getClientUserAssociationsList?: Maybe<UserAssociationList>;
  getClientUserGroups?: Maybe<Array<Maybe<Group>>>;
  /** Deprecated */
  getClientUserList?: Maybe<UserList>;
  getClientUserListViewMetaInfo?: Maybe<Scalars['JSON']['output']>;
  getClientUsers?: Maybe<Array<Maybe<User>>>;
  getClientUsersList?: Maybe<UserList>;
  getClientViews?: Maybe<Array<Maybe<ListView>>>;
  getCommonTechGroupsForClients?: Maybe<Array<Maybe<Group>>>;
  getCommonTechGroupsUsersForClients?: Maybe<Array<Maybe<User>>>;
  getCompanyInfo?: Maybe<CompanyInfo>;
  getCompanySCIMConfiguration?: Maybe<ScimConfiguration>;
  getCompanySite?: Maybe<Site>;
  /** APIs for sites which are associated with an organization that is a company or both a company and a client. It is used to fetch sites of MSP and Internal IT. */
  getCompanySiteList?: Maybe<SiteList>;
  getCompanyUser?: Maybe<User>;
  getCompanyUserListViewMetaInfo?: Maybe<Scalars['JSON']['output']>;
  getCompanyUsersList?: Maybe<UserList>;
  getConditionalPricingMeta?: Maybe<Scalars['JSON']['output']>;
  getContentForSendInvoice?: Maybe<Conversation>;
  getContentForSendQuote?: Maybe<Conversation>;
  getContractApplicationConditionMeta?: Maybe<Scalars['JSON']['output']>;
  getContractExpiredSubscriptions?: Maybe<Array<Maybe<ContractServiceItem>>>;
  getContractFinancialPerformanceMetrics?: Maybe<ContractFinancialPerformanceMetricList>;
  getContractNextBillDate?: Maybe<Scalars['String']['output']>;
  getContractProRatedAmount?: Maybe<Scalars['String']['output']>;
  getContractRevenueMetrics: ContractRevenue;
  getContractTemplate?: Maybe<ContractTemplate>;
  getContractTemplates?: Maybe<Array<ContractTemplate>>;
  /** Deprecated getCurrentUser, Use getLoggedInContext instead */
  getCurrentUser?: Maybe<User>;
  getCurrentUserBackupCodes?: Maybe<Array<Maybe<UserBackupCode>>>;
  /** Deprecated getCurrentUserDetails, Use getLoggedInContext instead */
  getCurrentUserDetails?: Maybe<CurrentUserDetails>;
  getCurrentUserPasswordPolicy?: Maybe<PasswordPolicy>;
  getCurrentUserTfaDetail?: Maybe<UserTfaDetail>;
  getCurrentUserThirdPartyHashKey?: Maybe<Scalars['JSON']['output']>;
  /** Deprecated */
  getCustomField?: Maybe<CustomField>;
  /** Deprecated */
  getCustomFieldByName?: Maybe<CustomField>;
  /** Deprecated */
  getCustomFieldConstraints?: Maybe<CustomFieldConstraint>;
  /** Custom Field */
  getCustomFieldsForAlertConditions?: Maybe<Array<Maybe<CustomField>>>;
  getCustomFilterValues?: Maybe<Scalars['JSON']['output']>;
  getCustomerCardDetails?: Maybe<CustomerCardDetail>;
  getCustomerDetail?: Maybe<CustomerDetail>;
  getCustomerIdentityToken?: Maybe<Scalars['String']['output']>;
  getCustomerLicenseExceededDetails?: Maybe<Scalars['JSON']['output']>;
  getCustomerSubscription?: Maybe<CustomerSubscription>;
  getDataMapping?: Maybe<DataMappingList>;
  getDataMappingV2?: Maybe<DataMappingList>;
  getDataReportModules?: Maybe<Scalars['JSON']['output']>;
  getDataSource?: Maybe<Array<Maybe<MappingObject>>>;
  getDateTimeAllowedFormats?: Maybe<AllowedDateTimeFormat>;
  getDefaultPasswordPoliciesConfig?: Maybe<Array<Maybe<PasswordPolicy>>>;
  /** Deprecated */
  getDeletedCustomFields?: Maybe<Array<Maybe<CustomField>>>;
  getDeletedFields?: Maybe<Array<Maybe<Field>>>;
  getDependentFieldOptions?: Maybe<FieldOption>;
  /**
   * getGroupUsers(groupId: String): Groups
   * getGroupPermissions(groupId: String): Groups
   */
  getDesignationList?: Maybe<Array<Maybe<Designation>>>;
  getDownloadInventoryList?: Maybe<DownloadInventoryList>;
  getEligibleParentFields?: Maybe<Array<Maybe<Field>>>;
  /** Have to discuss the behaviour for the below api whether to use all or selective on account of performance improvement */
  getEligibleServiceCatalogItems?: Maybe<ServiceCatalogItemList>;
  getEmployee?: Maybe<User>;
  /** Deprecated, use getTechnicianListByCriteria */
  getEmployeeViewMetaInfo?: Maybe<Scalars['JSON']['output']>;
  getEntitiesMeta?: Maybe<Array<Maybe<Entity>>>;
  getEntityMeta?: Maybe<Entity>;
  /** The entity name should be one of the value from EnumerationEntity enum */
  getEnumerations?: Maybe<Array<Maybe<Enumeration>>>;
  getExpandedClientConversationContent?: Maybe<Conversation>;
  getExpandedVendorConversationContent?: Maybe<Conversation>;
  getFeatureGatingInfo?: Maybe<Scalars['JSON']['output']>;
  /** getAllGroups: [Groups] */
  getFeatures?: Maybe<Array<Maybe<Feature>>>;
  getField?: Maybe<Field>;
  getFieldConstraints?: Maybe<FieldConstraint>;
  /** Deprecated */
  getFieldOptions?: Maybe<Array<Maybe<FieldOption>>>;
  getFields?: Maybe<Array<Maybe<Field>>>;
  getGlobalInvoiceTemplate?: Maybe<InvoiceTemplate>;
  getGlobalQuoteTemplate?: Maybe<QuoteTemplate>;
  getGroup?: Maybe<Group>;
  getGroupClients?: Maybe<Group>;
  getGroupUsers?: Maybe<Group>;
  getHolidayList?: Maybe<HolidayList>;
  getInAppNotifications?: Maybe<InAppNotificationList>;
  getInitialConfigurations?: Maybe<Array<Maybe<InitialConfiguration>>>;
  getInstallerInfo?: Maybe<Array<Maybe<InstallerInfo>>>;
  getIntegration?: Maybe<Integration>;
  getIntegrationAddOnContractItem?: Maybe<ContractServiceItem>;
  /** Reseller framework APIs */
  getIntegrationAddOns?: Maybe<Array<Maybe<AddOnLicenseDetails>>>;
  getIntegrationConfigForMappedClients?: Maybe<Array<Maybe<Organization>>>;
  getIntegrationDataMappingByTPItemIds?: Maybe<Array<Maybe<IntegrationDataMapping>>>;
  getIntegrationDataSyncReport?: Maybe<DataSyncReport>;
  getIntegrationEntityDefaultMappingInfo?: Maybe<Scalars['JSON']['output']>;
  getIntegrationEntityFields?: Maybe<Scalars['JSON']['output']>;
  /** Todo: Expose generic API getTPIntegrationClientList(integrationRefId: ID): JSON */
  getIntegrationEntityMapping?: Maybe<Scalars['JSON']['output']>;
  getIntegrationSetupCurrentState?: Maybe<Scalars['JSON']['output']>;
  /** wrapper api for getDataMappingV2 for getting mapped TPItem details alone */
  getIntegrationSetupMeta?: Maybe<Scalars['JSON']['output']>;
  /** Integration V2 */
  getIntegrationV2?: Maybe<Integration>;
  getIntegrations?: Maybe<Array<Maybe<Integration>>>;
  getIntegrationsByIds?: Maybe<Array<Maybe<Integration>>>;
  getIntegrationsByIdsV2?: Maybe<Array<Maybe<Integration>>>;
  getInvoice?: Maybe<Invoice>;
  getInvoiceAddress?: Maybe<BillingAddress>;
  getInvoiceConfiguration?: Maybe<BillingConfiguration>;
  getInvoiceDownloadLink?: Maybe<Scalars['String']['output']>;
  getInvoiceItemList?: Maybe<InvoiceItemList>;
  getInvoiceLineItemPlaceholders?: Maybe<Scalars['JSON']['output']>;
  getInvoiceList?: Maybe<InvoiceList>;
  getInvoiceListViewMeta?: Maybe<Scalars['JSON']['output']>;
  getInvoiceSetting?: Maybe<InvoiceSetting>;
  getInvoiceSettings?: Maybe<InvoiceSetting>;
  getInvoiceStatus?: Maybe<Array<Maybe<InvoiceStatusEnum>>>;
  getInvoiceStatuses?: Maybe<Array<Maybe<InvoiceStatus>>>;
  getInvoiceSummary?: Maybe<InvoiceSummary>;
  getInvoiceTemplate?: Maybe<InvoiceTemplate>;
  getInvoiceTemplatePlaceholdersMeta?: Maybe<Scalars['JSON']['output']>;
  getInvoiceViewsCount?: Maybe<Array<Maybe<ListViewRecordsCount>>>;
  getKbItemListViewMeta?: Maybe<Scalars['JSON']['output']>;
  getLabourRevenue?: Maybe<LabourRevenue>;
  getLoggedInContext?: Maybe<LogInContext>;
  getMSPCompany?: Maybe<MspCompany>;
  /** getAllUsers: [User] */
  getMSPContacts?: Maybe<Array<Maybe<User>>>;
  /** deprecated */
  getMSPEmailDomains?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  getMSPGroups?: Maybe<Array<Maybe<Group>>>;
  getMailProviderConfigs?: Maybe<Array<Maybe<MailProviderConfig>>>;
  /** authentiateUser(input:UserInput): User */
  getMailSettings?: Maybe<MailSettingsConfiguration>;
  getMailboxForwardingAddress?: Maybe<Scalars['String']['output']>;
  getMailboxes?: Maybe<Array<Maybe<Mailbox>>>;
  getMappedTPItemInfo?: Maybe<Scalars['JSON']['output']>;
  getMonthlyLabourRevenue?: Maybe<Scalars['JSON']['output']>;
  getMonthlyRevenue?: Maybe<Scalars['JSON']['output']>;
  getMyMentions?: Maybe<MentionList>;
  getNewInAppNotificationsCount?: Maybe<Scalars['Int']['output']>;
  getNextBillDate?: Maybe<Scalars['String']['output']>;
  getNotificationTemplate?: Maybe<NotificationTemplate>;
  getNotificationTemplateByConstant?: Maybe<NotificationTemplate>;
  getNotificationTemplateInfo?: Maybe<Array<Maybe<NotificationTemplateInfo>>>;
  getNotificationTemplateMetaInfo?: Maybe<Scalars['JSON']['output']>;
  getNotificationTemplates?: Maybe<Array<Maybe<NotificationTemplate>>>;
  getOfferedItemListMeta?: Maybe<Scalars['JSON']['output']>;
  getOfferedItemListViewMeta?: Maybe<Scalars['JSON']['output']>;
  getOfferedItemModules?: Maybe<Array<Maybe<OfferedItemModule>>>;
  getOfferedItems?: Maybe<OfferedItemList>;
  getOfferedItemsListMeta?: Maybe<Scalars['JSON']['output']>;
  getOnBoardingState?: Maybe<OnBoardingState>;
  getOptions?: Maybe<Array<Maybe<Option>>>;
  getOverageItems?: Maybe<OverageItemDetailList>;
  getPaymentMethods?: Maybe<Array<Maybe<PaymentMethod>>>;
  getPaymentSetting?: Maybe<PaymentSetting>;
  getPaymentTerms?: Maybe<Array<Maybe<PaymentTerm>>>;
  getPersonalizationByCategory?: Maybe<Array<Maybe<UserPersonalization>>>;
  getPersonalizationByCategoryAndName?: Maybe<UserPersonalization>;
  getPlaceholderTemplate?: Maybe<PlaceholderTemplate>;
  getPlaceholderTemplateMetaInfo?: Maybe<Scalars['JSON']['output']>;
  getPlaceholderTemplates?: Maybe<Array<Maybe<PlaceholderTemplate>>>;
  getPlanFeatures?: Maybe<Scalars['JSON']['output']>;
  getPlanFeaturesState?: Maybe<Scalars['JSON']['output']>;
  getPlanProductFeatures?: Maybe<Array<Maybe<PlanProductFeature>>>;
  getPolicyIntegrationSetupMeta?: Maybe<Scalars['JSON']['output']>;
  getPrimaryCompany?: Maybe<Organization>;
  getProductFeaturesCategories?: Maybe<Array<Maybe<ProductFeatureCategory>>>;
  getProductOfferingEntities?: Maybe<Array<Maybe<ProductOfferingEntity>>>;
  getProductSubscriptionEstimateForExistingLineItems?: Maybe<ProductSubscriptionEstimate>;
  getProductSubscriptionEstimateForLineItems?: Maybe<ProductSubscriptionEstimate>;
  getProductSubscriptionEstimateForUpsell?: Maybe<ProductSubscriptionEstimate>;
  getProjectRoles?: Maybe<Array<Maybe<Role>>>;
  getProratedAmount?: Maybe<Scalars['String']['output']>;
  getProvisionRule?: Maybe<ProvisionRule>;
  getProvisionRuleConditionMeta?: Maybe<Scalars['JSON']['output']>;
  getProvisionRuleItems?: Maybe<ProvisionRuleItemList>;
  getProvisionRuleTemplateList?: Maybe<ProvisionRuleList>;
  getPurchaseProductFeatureMeta?: Maybe<Scalars['JSON']['output']>;
  getQuickBooksAccounts?: Maybe<Array<Maybe<QuickBooksAccount>>>;
  getQuickBooksDesktopIntegrationPassword?: Maybe<Scalars['String']['output']>;
  getQuote?: Maybe<Quote>;
  getQuoteAddress?: Maybe<BillingAddress>;
  getQuoteConfiguration?: Maybe<BillingConfiguration>;
  getQuoteEvents?: Maybe<QuoteEvents>;
  getQuoteList?: Maybe<QuoteList>;
  getQuoteTemplate?: Maybe<QuoteTemplate>;
  getQuoteTemplatePlaceholdersMeta?: Maybe<Scalars['JSON']['output']>;
  getQuoteVersions?: Maybe<Array<Maybe<Quote>>>;
  getQuoteViews?: Maybe<Array<Maybe<ListView>>>;
  getQuoteViewsCount?: Maybe<Array<Maybe<ListViewRecordsCount>>>;
  getRecentSearchInfo?: Maybe<RecentSearchInfo>;
  getRecordWiseAudit?: Maybe<AuditList>;
  getReport?: Maybe<Report>;
  getReportCalculationStatus?: Maybe<OfferedItemAuditStatus>;
  getReportConfigMeta?: Maybe<Scalars['JSON']['output']>;
  getReportData?: Maybe<ReportData>;
  getReportExportConfig?: Maybe<ReportExportConfig>;
  getReportExportConfigMeta?: Maybe<Scalars['JSON']['output']>;
  getReportModules?: Maybe<Scalars['JSON']['output']>;
  getReportSchedules?: Maybe<ReportScheduleList>;
  getReports?: Maybe<ReportList>;
  getRequesterList?: Maybe<UserList>;
  getRequesterListByCriteria?: Maybe<UserList>;
  getRoleFeatureDependencies?: Maybe<Scalars['JSON']['output']>;
  getRoleList?: Maybe<Array<Maybe<Role>>>;
  getRolePermissions?: Maybe<Role>;
  /** Deprecated, use getTechnicianListByCriteria */
  getRoleTypeDetails?: Maybe<Array<Maybe<RoleType>>>;
  getRoleUsers?: Maybe<Role>;
  getRoles?: Maybe<Array<Maybe<Role>>>;
  getRolesWithApproveTicketPermission?: Maybe<Array<Maybe<Role>>>;
  getSalesInboxViews?: Maybe<Array<Maybe<ListView>>>;
  /** deprecated */
  getSalesInboxViewsCount?: Maybe<Array<Maybe<ListViewRecordsCount>>>;
  getSalesInboxViewsRecordCount?: Maybe<Array<Maybe<ListViewRecordsCount>>>;
  getSamlIdentityProviderDetail?: Maybe<IdpSamlProviderDetail>;
  getSamlServiceProviderDetail?: Maybe<SpSamlProviderDetail>;
  /** Deprecated */
  getSecureFieldValue?: Maybe<Scalars['String']['output']>;
  getSequenceGenerators?: Maybe<Array<Maybe<SequenceGenerator>>>;
  getServiceCatalogItem?: Maybe<ServiceCatalogItem>;
  getServiceCatalogItems?: Maybe<ServiceCatalogItemList>;
  getServiceCategories?: Maybe<Array<Maybe<ServiceCategory>>>;
  getServiceItem?: Maybe<ServiceItem>;
  getServiceItems?: Maybe<ServiceItemList>;
  getServiceUtilisation?: Maybe<ServiceUtilisationList>;
  getSharedReport?: Maybe<SharedReport>;
  getSite?: Maybe<Site>;
  getSiteList?: Maybe<Array<Maybe<Site>>>;
  getSnapShotAudits?: Maybe<AuditList>;
  getStickyNote?: Maybe<StickyNote>;
  getStripeCustomerList?: Maybe<StripeCustomerList>;
  getSubscriptionInvoices?: Maybe<SubscriptionInvoiceList>;
  getSubscriptionItemQuantity?: Maybe<Scalars['String']['output']>;
  getSupportAccess?: Maybe<SupportAccess>;
  getTPEntitiesForMapping?: Maybe<Scalars['JSON']['output']>;
  getTPEntityFields?: Maybe<Scalars['JSON']['output']>;
  getTPEntityItems?: Maybe<Scalars['JSON']['output']>;
  getTax?: Maybe<Tax>;
  getTaxList?: Maybe<TaxList>;
  getTeamList?: Maybe<Array<Maybe<Team>>>;
  getTechnicianGroups?: Maybe<Array<Maybe<Group>>>;
  getTechnicianList?: Maybe<UserList>;
  getTechnicianListByCriteria?: Maybe<UserList>;
  /** Deprecated, use respective role type APIs */
  getTechnicianRoleTypeRoles?: Maybe<Array<Maybe<Role>>>;
  getTechnicianSCIMConfiguration?: Maybe<ScimConfiguration>;
  getTechnicianUtilisation?: Maybe<TechnicianUtilisationList>;
  getThirdPartyIntegratedAppStatus?: Maybe<Array<Maybe<OperationStatus>>>;
  getTicketApproverList?: Maybe<UserList>;
  getTopClientsByFinancialSegments?: Maybe<Array<ClientFinancialPerformanceMetric>>;
  getTopContractsByFinancialSegments?: Maybe<Array<ContractFinancialPerformanceMetric>>;
  getUnProvisionedIncludedItems?: Maybe<Array<ServiceCatalogItem>>;
  getUnProvisionedTemplateIncludedItems?: Maybe<Array<ServiceCatalogItem>>;
  getUnknownEmail?: Maybe<UnknownEmail>;
  getUnknownEmails?: Maybe<UnknownEmailList>;
  getUserRoleTypeRoles?: Maybe<Array<Maybe<Role>>>;
  getVendorConversationContentFromTemplate?: Maybe<Conversation>;
  getVendorConversationReplyRecipients?: Maybe<ReplyContext>;
  getVendorConversationThreadedContent?: Maybe<Scalars['String']['output']>;
  /** Vendor Conversation */
  getVendorConversationsList?: Maybe<ConversationList>;
  getView?: Maybe<ListView>;
  getViews?: Maybe<Array<Maybe<ModuleListView>>>;
  getViewsCount?: Maybe<Array<Maybe<ListViewRecordsCount>>>;
  getWebSearchAcceptanceInfo?: Maybe<Scalars['JSON']['output']>;
  /** webhookSubscription apis */
  getWebhookSubscription?: Maybe<WebhookSubscription>;
  getWebhookSubscriptionList?: Maybe<WebhookSubscriptionList>;
  getWhitelistedServiceItems?: Maybe<ServiceItemList>;
  getWorklogEntriesListViewMeta?: Maybe<Scalars['JSON']['output']>;
  getWorklogModules?: Maybe<Array<Maybe<OfferedItemModule>>>;
  getXeroAccounts?: Maybe<Array<Maybe<XeroAccount>>>;
  hasNylasMailbox?: Maybe<Scalars['Boolean']['output']>;
  isTfaEnforcedByAdmin?: Maybe<Scalars['Boolean']['output']>;
  listACHAccounts?: Maybe<Array<Maybe<AchAccount>>>;
  listCards?: Maybe<CardList>;
  populateUserTerminalWssToken?: Maybe<Scalars['String']['output']>;
  previewChart?: Maybe<Scalars['JSON']['output']>;
  search?: Maybe<Scalars['JSON']['output']>;
  verifyCustomMailServerConnection?: Maybe<Scalars['Boolean']['output']>;
  verifyMailProviderConnection?: Maybe<Scalars['Boolean']['output']>;
};


export type QueryConstructInvoiceItemsArgs = {
  input: Array<InputMaybe<OfferedItemIdentifierInput>>;
};


export type QueryExportChartArgs = {
  input?: InputMaybe<ChartIdentifierInput>;
};


export type QueryExportReportArgs = {
  input: ExportReportIdentifierInput;
};


export type QueryFetchClientContractArgs = {
  input: ContractIdentifierInput;
};


export type QueryFetchClientContractListArgs = {
  listInfo?: InputMaybe<ListInfoInput>;
};


export type QueryFetchTfaStatusArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFetchTpEntityListArgs = {
  input: FetchTpEntityListInput;
};


export type QueryFetchTpMappingRuleConditionArgs = {
  input: FetchTpMappingRuleConditionInput;
};


export type QueryGenerateAndSendReportArgs = {
  filterConditions?: InputMaybe<Scalars['JSON']['input']>;
  module?: InputMaybe<Scalars['String']['input']>;
  reportId: Scalars['ID']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAiFeatureArgs = {
  input: AiFeatureIdentifierInput;
};


export type QueryGetAiFeatureFeedbackListArgs = {
  input: GetAiFeatureFeedbackListInput;
};


export type QueryGetAiFeatureListArgs = {
  input: GetAiFeatureListInput;
};


export type QueryGetAcronisProtectionPlansForClientArgs = {
  clientId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetActiveRecurringRevenueArgs = {
  input?: InputMaybe<ClientIdentifierInput>;
};


export type QueryGetAddOnBillingDetailsArgs = {
  addOnId: Scalars['ID']['input'];
};


export type QueryGetAddOnDetailsArgs = {
  addOnId: Scalars['ID']['input'];
  listInfo: ListInfoInput;
};


export type QueryGetAddOnItemListByClientArgs = {
  addOnId?: InputMaybe<Scalars['ID']['input']>;
  clientId?: InputMaybe<Scalars['ID']['input']>;
  listInfoInput?: InputMaybe<ListInfoInput>;
};


export type QueryGetAddOnStatusForLoggedInUserArgs = {
  addOnIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type QueryGetAddOnUsageByChargeBeeItemIdArgs = {
  chargeBeeItemId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetAddressesArgs = {
  input: GetAddressInput;
};


export type QueryGetAgentInstallerDetailsArgs = {
  installerType?: InputMaybe<Scalars['Int']['input']>;
  policyCategoryId?: InputMaybe<Scalars['ID']['input']>;
  siteId: Scalars['ID']['input'];
};


export type QueryGetAggregatedValuesArgs = {
  input: GetAggregatedValuesInput;
};


export type QueryGetAllCustomFieldsArgs = {
  module: Scalars['String']['input'];
};


export type QueryGetAllFieldsArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetAllHomePageWidgetsArgs = {
  listInfo: ListInfoInput;
};


export type QueryGetAllowedClientSitesArgs = {
  listInfo?: InputMaybe<ListInfoInput>;
};


export type QueryGetAllowedServiceItemsArgs = {
  input: GetAllowedServiceItemsInput;
};


export type QueryGetAllowedTechnicianGroupsArgs = {
  input: GetAllowedTechnicianGroupsInput;
};


export type QueryGetAppPersonalizationArgs = {
  input: PersonalizationInput;
};


export type QueryGetAuditsArgs = {
  listInfo: ListInfoInput;
};


export type QueryGetBillingTemplateListArgs = {
  listInfo: ListInfoInput;
};


export type QueryGetBitDefenderInstallationPackagesForClientArgs = {
  clientId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetBlockItemConsumptionInfoArgs = {
  input: GetBlockItemConsumptionInfoInput;
};


export type QueryGetBlockItemInfoArgs = {
  input: GetBlockItemInfoInput;
};


export type QueryGetBusinessFunctionArgs = {
  input: BusinessFunctionIdentifierInput;
};


export type QueryGetCreCompanyBaselineMetricsArgs = {
  input: RuleConditionInput;
};


export type QueryGetCreTicketsByCategoryArgs = {
  input: CreTicketsByCategoryInput;
};


export type QueryGetCreTrendAnalysisArgs = {
  input: CreTrendAnalysisInput;
};


export type QueryGetChartArgs = {
  chartId: Scalars['ID']['input'];
};


export type QueryGetChartsArgs = {
  listInfo?: InputMaybe<ListInfoInput>;
};


export type QueryGetClientArgs = {
  clientId: Scalars['ID']['input'];
};


export type QueryGetClientApproversForTicketArgs = {
  clientId: Scalars['ID']['input'];
  listInfo?: InputMaybe<ListInfoInput>;
};


export type QueryGetClientAttachmentsArgs = {
  clientId: Scalars['ID']['input'];
  listInfo?: InputMaybe<ListInfoInput>;
};


export type QueryGetClientContractArgs = {
  clientId: Scalars['ID']['input'];
};


export type QueryGetClientContractTemplateArgs = {
  templateId: Scalars['ID']['input'];
};


export type QueryGetClientContractTemplatesArgs = {
  listInfo?: InputMaybe<ListInfoInput>;
};


export type QueryGetClientConversationAttachmentsArgs = {
  clientId: Scalars['ID']['input'];
  listInfo?: InputMaybe<ListInfoInput>;
};


export type QueryGetClientConversationListArgs = {
  listInfo?: InputMaybe<ListInfoInput>;
};


export type QueryGetClientConversationReplyRecipientsArgs = {
  input: ConversationIdentifierInput;
};


export type QueryGetClientConversationThreadedContentArgs = {
  input: GetConversationThreadedContentInput;
};


export type QueryGetClientConversationsArgs = {
  clientId: Scalars['ID']['input'];
  listInfo?: InputMaybe<ListInfoInput>;
};


export type QueryGetClientEfficiencyRankingArgs = {
  input: ClientEfficiencyRankingInput;
};


export type QueryGetClientFinancialPerformanceMetricsArgs = {
  input: ListInfoInput;
};


export type QueryGetClientHeadQuarterSiteArgs = {
  clientId: Scalars['ID']['input'];
};


export type QueryGetClientListArgs = {
  listInfo: ListInfoInput;
};


export type QueryGetClientProvisionRuleListArgs = {
  input: ClientIdentifierInput;
};


export type QueryGetClientRankingByWorklogHoursLoggedArgs = {
  input: ClientRankingByWorklogHoursInput;
};


export type QueryGetClientRevenueMetricsArgs = {
  input: ClientIdentifierInput;
};


export type QueryGetClientSiteArgs = {
  input: SiteIdentifierInput;
};


export type QueryGetClientSiteListArgs = {
  input?: InputMaybe<ListInfoInput>;
};


export type QueryGetClientSpecificEfficiencyArgs = {
  input: ClientSpecificEfficiencyInput;
};


export type QueryGetClientUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetClientUserAssociationsListArgs = {
  input?: InputMaybe<GetClientUsersListInput>;
};


export type QueryGetClientUserGroupsArgs = {
  accountId: Scalars['ID']['input'];
};


export type QueryGetClientUserListArgs = {
  clientId: Scalars['ID']['input'];
  listInfo: ListInfoInput;
  siteId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetClientUsersArgs = {
  accountId: Scalars['ID']['input'];
};


export type QueryGetClientUsersListArgs = {
  input: GetClientUsersListInput;
};


export type QueryGetCommonTechGroupsForClientsArgs = {
  clientIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type QueryGetCommonTechGroupsUsersForClientsArgs = {
  clientIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type QueryGetCompanySiteArgs = {
  input: SiteIdentifierInput;
};


export type QueryGetCompanySiteListArgs = {
  input?: InputMaybe<ListInfoInput>;
};


export type QueryGetCompanyUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetCompanyUsersListArgs = {
  listInfo: ListInfoInput;
};


export type QueryGetContentForSendInvoiceArgs = {
  input: InvoiceIdentifierInput;
};


export type QueryGetContentForSendQuoteArgs = {
  input: QuoteIdentifierInput;
};


export type QueryGetContractExpiredSubscriptionsArgs = {
  contractId: Scalars['ID']['input'];
};


export type QueryGetContractFinancialPerformanceMetricsArgs = {
  input: ListInfoInput;
};


export type QueryGetContractNextBillDateArgs = {
  input: GetContractNextBillDateInput;
};


export type QueryGetContractProRatedAmountArgs = {
  input: GetContractProRatedAmountInput;
};


export type QueryGetContractRevenueMetricsArgs = {
  input?: InputMaybe<ClientIdentifierInput>;
};


export type QueryGetContractTemplateArgs = {
  input: ContractIdentifierInput;
};


export type QueryGetContractTemplatesArgs = {
  input: BillingTemplateIdentifierInput;
};


export type QueryGetCustomFieldArgs = {
  fieldId: Scalars['ID']['input'];
  module: Scalars['String']['input'];
};


export type QueryGetCustomFieldByNameArgs = {
  assetClassEntityName?: InputMaybe<Scalars['String']['input']>;
  columnName: Scalars['String']['input'];
  module: Scalars['String']['input'];
};


export type QueryGetCustomFieldConstraintsArgs = {
  module: Scalars['String']['input'];
};


export type QueryGetCustomFieldsForAlertConditionsArgs = {
  classId: Scalars['ID']['input'];
};


export type QueryGetCustomFilterValuesArgs = {
  input: CustomFilterInput;
};


export type QueryGetDataMappingArgs = {
  listInfo?: InputMaybe<ListInfoInput>;
  name: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetDataMappingV2Args = {
  entityName?: InputMaybe<Scalars['String']['input']>;
  integrationRefId?: InputMaybe<Scalars['ID']['input']>;
  listInfo?: InputMaybe<ListInfoInput>;
};


export type QueryGetDataSourceArgs = {
  name: Scalars['String']['input'];
};


export type QueryGetDeletedCustomFieldsArgs = {
  module: Scalars['String']['input'];
};


export type QueryGetDeletedFieldsArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetDependentFieldOptionsArgs = {
  input: GetDependentFieldOptionsInput;
};


export type QueryGetDownloadInventoryListArgs = {
  listInfo?: InputMaybe<ListInfoInput>;
  module: Scalars['String']['input'];
  moduleSpecificId: Scalars['ID']['input'];
};


export type QueryGetEligibleParentFieldsArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetEligibleServiceCatalogItemsArgs = {
  input: GetEligibleCatalogServiceItemsInput;
};


export type QueryGetEmployeeArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetEntitiesMetaArgs = {
  entityNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGetEntityMetaArgs = {
  entityName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetEnumerationsArgs = {
  entity?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetExpandedClientConversationContentArgs = {
  input: GetExpandedClientConversationContentInput;
};


export type QueryGetExpandedVendorConversationContentArgs = {
  input: GetExpandedVendorConversationContentInput;
};


export type QueryGetFieldArgs = {
  input: FieldIdentifierInput;
};


export type QueryGetFieldConstraintsArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetFieldOptionsArgs = {
  input: GetFieldOptionsInput;
};


export type QueryGetFieldsArgs = {
  input: Array<FieldIdentifierInput>;
};


export type QueryGetGroupArgs = {
  groupId: Scalars['ID']['input'];
};


export type QueryGetGroupClientsArgs = {
  groupId: Scalars['ID']['input'];
};


export type QueryGetGroupUsersArgs = {
  groupId: Scalars['ID']['input'];
};


export type QueryGetHolidayListArgs = {
  id: Scalars['ID']['input'];
  year: Scalars['Int']['input'];
};


export type QueryGetInAppNotificationsArgs = {
  listInfo?: InputMaybe<ListInfoInput>;
};


export type QueryGetInstallerInfoArgs = {
  input?: InputMaybe<InstallerInfoInput>;
};


export type QueryGetIntegrationArgs = {
  integrationId: Scalars['ID']['input'];
};


export type QueryGetIntegrationAddOnContractItemArgs = {
  input?: InputMaybe<GetIntegrationAddonContractItemInput>;
};


export type QueryGetIntegrationAddOnsArgs = {
  integrationRefId: Scalars['ID']['input'];
};


export type QueryGetIntegrationConfigForMappedClientsArgs = {
  integrationId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetIntegrationDataMappingByTpItemIdsArgs = {
  integrationRefId: Scalars['ID']['input'];
  tpEntityId: Scalars['String']['input'];
  tpItemIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGetIntegrationDataSyncReportArgs = {
  entityName: Scalars['String']['input'];
  integrationRefId: Scalars['ID']['input'];
};


export type QueryGetIntegrationEntityDefaultMappingInfoArgs = {
  entityName: Scalars['String']['input'];
  integrationRefId: Scalars['ID']['input'];
  tpEntityId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetIntegrationEntityFieldsArgs = {
  entityName: Scalars['String']['input'];
  integrationRefId: Scalars['ID']['input'];
};


export type QueryGetIntegrationEntityMappingArgs = {
  entityName?: InputMaybe<Scalars['String']['input']>;
  integrationRefId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetIntegrationSetupCurrentStateArgs = {
  integrationRefId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetIntegrationSetupMetaArgs = {
  integrationRefId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetIntegrationV2Args = {
  integrationRefId: Scalars['ID']['input'];
};


export type QueryGetIntegrationsByIdsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type QueryGetIntegrationsByIdsV2Args = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type QueryGetInvoiceArgs = {
  invoiceId: Scalars['ID']['input'];
};


export type QueryGetInvoiceAddressArgs = {
  input?: InputMaybe<GetBillingAddressInput>;
};


export type QueryGetInvoiceDownloadLinkArgs = {
  invoiceId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetInvoiceItemListArgs = {
  listInfo: ListInfoInput;
};


export type QueryGetInvoiceLineItemPlaceholdersArgs = {
  module: Scalars['String']['input'];
};


export type QueryGetInvoiceListArgs = {
  listInfo?: InputMaybe<ListInfoInput>;
};


export type QueryGetInvoiceListViewMetaArgs = {
  input?: InputMaybe<InvoiceMetaSource>;
};


export type QueryGetInvoiceSettingArgs = {
  clientId: Scalars['ID']['input'];
};


export type QueryGetInvoiceSettingsArgs = {
  input?: InputMaybe<ClientIdentifierInput>;
};


export type QueryGetInvoiceSummaryArgs = {
  clientId: Scalars['ID']['input'];
};


export type QueryGetInvoiceTemplateArgs = {
  input: InvoiceTemplateIdentifierInput;
};


export type QueryGetInvoiceViewsCountArgs = {
  viewIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type QueryGetLabourRevenueArgs = {
  input: ListInfoInput;
};


export type QueryGetMailProviderConfigsArgs = {
  boxId: Scalars['ID']['input'];
};


export type QueryGetMailboxForwardingAddressArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetMappedTpItemInfoArgs = {
  entityName?: InputMaybe<Scalars['String']['input']>;
  integrationRefId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetMonthlyLabourRevenueArgs = {
  input: ListInfoInput;
};


export type QueryGetMonthlyRevenueArgs = {
  input: ListInfoInput;
};


export type QueryGetMyMentionsArgs = {
  listInfo: ListInfoInput;
};


export type QueryGetNextBillDateArgs = {
  input: GetNextBillDateInput;
};


export type QueryGetNotificationTemplateArgs = {
  notificationTemplateType: Scalars['String']['input'];
  templateId: Scalars['ID']['input'];
};


export type QueryGetNotificationTemplateByConstantArgs = {
  constant: Scalars['String']['input'];
  notificationTemplateType: Scalars['String']['input'];
};


export type QueryGetNotificationTemplateInfoArgs = {
  templateType: Scalars['String']['input'];
};


export type QueryGetNotificationTemplateMetaInfoArgs = {
  constant?: InputMaybe<Scalars['String']['input']>;
  templateSubtype?: InputMaybe<Scalars['String']['input']>;
  templateType: Scalars['String']['input'];
};


export type QueryGetNotificationTemplatesArgs = {
  notificationTemplateType: Scalars['String']['input'];
};


export type QueryGetOfferedItemListMetaArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetOfferedItemsArgs = {
  listInfo?: InputMaybe<ListInfoInput>;
};


export type QueryGetOptionsArgs = {
  input: GetOptionsInput;
};


export type QueryGetOverageItemsArgs = {
  billableItems?: InputMaybe<Scalars['Boolean']['input']>;
  entityId?: InputMaybe<Scalars['ID']['input']>;
  listInfoInput: ListInfoInput;
};


export type QueryGetPaymentSettingArgs = {
  clientId: Scalars['ID']['input'];
};


export type QueryGetPersonalizationByCategoryArgs = {
  category: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type QueryGetPersonalizationByCategoryAndNameArgs = {
  category: Scalars['String']['input'];
  name: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type QueryGetPlaceholderTemplateArgs = {
  constant?: InputMaybe<Scalars['String']['input']>;
  templateId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetPlaceholderTemplateMetaInfoArgs = {
  constant: Scalars['String']['input'];
};


export type QueryGetPlaceholderTemplatesArgs = {
  constant: Scalars['String']['input'];
};


export type QueryGetPolicyIntegrationSetupMetaArgs = {
  classId?: InputMaybe<Scalars['String']['input']>;
  integrationCategory?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetProductFeaturesCategoriesArgs = {
  input: GetProductFeaturesCategoriesInput;
};


export type QueryGetProductSubscriptionEstimateForExistingLineItemsArgs = {
  input?: InputMaybe<IdentifierInput>;
};


export type QueryGetProductSubscriptionEstimateForLineItemsArgs = {
  input: GetProductSubscriptionEstimateForLineItemsInput;
};


export type QueryGetProductSubscriptionEstimateForUpsellArgs = {
  input: GetProductSubscriptionEstimateForUpsellInput;
};


export type QueryGetProratedAmountArgs = {
  input?: InputMaybe<GetProratedAmountInput>;
};


export type QueryGetProvisionRuleArgs = {
  input: ProvisionRuleIdentifierInput;
};


export type QueryGetProvisionRuleConditionMetaArgs = {
  input: GetProvisionRuleConditionMetaInput;
};


export type QueryGetProvisionRuleItemsArgs = {
  input?: InputMaybe<ListInfoInput>;
};


export type QueryGetProvisionRuleTemplateListArgs = {
  input: BillingTemplateIdentifierInput;
};


export type QueryGetQuoteArgs = {
  input: QuoteIdentifierInput;
};


export type QueryGetQuoteAddressArgs = {
  input?: InputMaybe<GetBillingAddressInput>;
};


export type QueryGetQuoteEventsArgs = {
  input: GetQuoteEventsInput;
};


export type QueryGetQuoteListArgs = {
  listInfo?: InputMaybe<ListInfoInput>;
};


export type QueryGetQuoteTemplateArgs = {
  input: QuoteTemplateIdentifierInput;
};


export type QueryGetQuoteVersionsArgs = {
  input: QuoteIdentifierInput;
};


export type QueryGetQuoteViewsCountArgs = {
  viewIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type QueryGetRecordWiseAuditArgs = {
  entityId: Scalars['ID']['input'];
  listInfo: ListInfoInput;
};


export type QueryGetReportArgs = {
  reportId: Scalars['ID']['input'];
};


export type QueryGetReportConfigMetaArgs = {
  reportId: Scalars['ID']['input'];
};


export type QueryGetReportDataArgs = {
  input: GetReportDataInput;
};


export type QueryGetReportExportConfigArgs = {
  input: ReportExportConfigInput;
};


export type QueryGetReportSchedulesArgs = {
  input: ReportIdentifierInput;
};


export type QueryGetReportsArgs = {
  listInfo?: InputMaybe<ListInfoInput>;
};


export type QueryGetRequesterListArgs = {
  listInfo: ListInfoInput;
};


export type QueryGetRequesterListByCriteriaArgs = {
  clientIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  listInfo: ListInfoInput;
};


export type QueryGetRoleFeatureDependenciesArgs = {
  roleTypeId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetRoleListArgs = {
  input: RoleTypeInput;
};


export type QueryGetRolePermissionsArgs = {
  roleId: Scalars['ID']['input'];
};


export type QueryGetRoleUsersArgs = {
  roleId: Scalars['ID']['input'];
};


export type QueryGetSalesInboxViewsCountArgs = {
  viewIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type QueryGetSalesInboxViewsRecordCountArgs = {
  input: GetSalesInboxViewsCountInput;
};


export type QueryGetSecureFieldValueArgs = {
  input: SecureFieldValueInput;
};


export type QueryGetServiceCatalogItemArgs = {
  input: ServiceCatalogItemIdentifierInput;
};


export type QueryGetServiceCatalogItemsArgs = {
  listInfo: ListInfoInput;
};


export type QueryGetServiceItemArgs = {
  itemId: Scalars['ID']['input'];
};


export type QueryGetServiceItemsArgs = {
  listInfo?: InputMaybe<ListInfoInput>;
};


export type QueryGetServiceUtilisationArgs = {
  input: ListInfoInput;
};


export type QueryGetSharedReportArgs = {
  sharedReportId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetSiteArgs = {
  siteId: Scalars['ID']['input'];
};


export type QueryGetSiteListArgs = {
  accountId: Scalars['ID']['input'];
};


export type QueryGetSnapShotAuditsArgs = {
  entityId: Scalars['ID']['input'];
  entityName?: InputMaybe<Scalars['String']['input']>;
  listInfo: ListInfoInput;
};


export type QueryGetStripeCustomerListArgs = {
  listInfo?: InputMaybe<ListInfoInput>;
};


export type QueryGetSubscriptionInvoicesArgs = {
  offset?: InputMaybe<Scalars['String']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetSubscriptionItemQuantityArgs = {
  input?: InputMaybe<GetSubscriptionItemQuantityInput>;
};


export type QueryGetTpEntitiesForMappingArgs = {
  entityName?: InputMaybe<Scalars['String']['input']>;
  integrationRefId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetTpEntityFieldsArgs = {
  integrationRefId?: InputMaybe<Scalars['ID']['input']>;
  tpEntityId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetTpEntityItemsArgs = {
  destinationParentId?: InputMaybe<Scalars['String']['input']>;
  entityName?: InputMaybe<Scalars['String']['input']>;
  integrationRefId?: InputMaybe<Scalars['ID']['input']>;
  tpEntityId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTaxArgs = {
  taxId: Scalars['ID']['input'];
};


export type QueryGetTaxListArgs = {
  listInfo?: InputMaybe<ListInfoInput>;
};


export type QueryGetTechnicianListArgs = {
  input: GetTechnicianListInput;
};


export type QueryGetTechnicianListByCriteriaArgs = {
  clientIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  listInfo: ListInfoInput;
};


export type QueryGetTechnicianUtilisationArgs = {
  input: ListInfoInput;
};


export type QueryGetTicketApproverListArgs = {
  input: GetTicketApproverInput;
};


export type QueryGetTopClientsByFinancialSegmentsArgs = {
  input: ListInfoInput;
};


export type QueryGetTopContractsByFinancialSegmentsArgs = {
  input: ListInfoInput;
};


export type QueryGetUnProvisionedIncludedItemsArgs = {
  input: ClientIdentifierInput;
};


export type QueryGetUnProvisionedTemplateIncludedItemsArgs = {
  input: BillingTemplateIdentifierInput;
};


export type QueryGetUnknownEmailArgs = {
  unknownEmailId: Scalars['ID']['input'];
};


export type QueryGetUnknownEmailsArgs = {
  listInfo: ListInfoInput;
};


export type QueryGetVendorConversationContentFromTemplateArgs = {
  input: GetVendorConversationContentFromTemplateInput;
};


export type QueryGetVendorConversationReplyRecipientsArgs = {
  input: GetVendorConversationThreadedContentInput;
};


export type QueryGetVendorConversationThreadedContentArgs = {
  input: GetVendorConversationThreadedContentInput;
};


export type QueryGetVendorConversationsListArgs = {
  input: GetVendorConversationListInput;
};


export type QueryGetViewArgs = {
  module: Scalars['String']['input'];
  viewId: Scalars['ID']['input'];
};


export type QueryGetViewsArgs = {
  modules?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type QueryGetViewsCountArgs = {
  input: GetViewsCountInput;
};


export type QueryGetWebhookSubscriptionArgs = {
  input: WebhookSubscriptionIdentifierInput;
};


export type QueryGetWebhookSubscriptionListArgs = {
  input?: InputMaybe<ListInfoInput>;
};


export type QueryGetWhitelistedServiceItemsArgs = {
  clientId: Scalars['ID']['input'];
  listInfo?: InputMaybe<ListInfoInput>;
};


export type QueryListAchAccountsArgs = {
  clientId: Scalars['ID']['input'];
};


export type QueryListCardsArgs = {
  clientId: Scalars['ID']['input'];
  listInfo?: InputMaybe<ListInfoInput>;
};


export type QueryPreviewChartArgs = {
  input: PreviewChartInput;
};


export type QuerySearchArgs = {
  filters?: InputMaybe<Scalars['JSON']['input']>;
  modules?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageInfo?: InputMaybe<Scalars['JSON']['input']>;
  term: Scalars['String']['input'];
};


export type QueryVerifyCustomMailServerConnectionArgs = {
  input?: InputMaybe<VerifyCustomMailServerConnectionInput>;
};


export type QueryVerifyMailProviderConnectionArgs = {
  input?: InputMaybe<VerifyMailProviderConnectionInput>;
};

export type QuickBooksAccount = {
  __typename?: 'QuickBooksAccount';
  accountId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Quote = {
  __typename?: 'Quote';
  additionalDiscount?: Maybe<Scalars['String']['output']>;
  additionalDiscountRate?: Maybe<Scalars['String']['output']>;
  additionalDiscountType?: Maybe<DiscountType>;
  approverName?: Maybe<Scalars['String']['output']>;
  billingAddress?: Maybe<Scalars['String']['output']>;
  client?: Maybe<Organization>;
  createdTime?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discountAmount?: Maybe<Scalars['String']['output']>;
  discountRate?: Maybe<Scalars['String']['output']>;
  displayId: Scalars['ID']['output'];
  expiryDate: Scalars['String']['output'];
  footer?: Maybe<Scalars['String']['output']>;
  invoice?: Maybe<Invoice>;
  items?: Maybe<Array<Maybe<QuoteItem>>>;
  memo?: Maybe<Scalars['String']['output']>;
  quoteDate: Scalars['String']['output'];
  quoteId: Scalars['ID']['output'];
  senderAddress?: Maybe<Scalars['String']['output']>;
  site?: Maybe<Site>;
  statusEnum?: Maybe<QuoteStatusEnum>;
  taxAmount?: Maybe<Scalars['String']['output']>;
  taxes?: Maybe<Array<Maybe<QuoteTaxItem>>>;
  title?: Maybe<Scalars['String']['output']>;
  totalAmount?: Maybe<Scalars['String']['output']>;
};

export type QuoteApproval = {
  __typename?: 'QuoteApproval';
  approvalId: Scalars['ID']['output'];
  approver?: Maybe<User>;
  comment?: Maybe<Scalars['String']['output']>;
  status: QuoteApprovalStatus;
};

export type QuoteApprovalInput = {
  approver: QuoteApproverInput;
  /** QuoteApprovalStatus */
  comment?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
};

export enum QuoteApprovalStatus {
  Approved = 'APPROVED',
  Rejected = 'REJECTED'
}

export type QuoteApproverInput = {
  approverId?: InputMaybe<Scalars['ID']['input']>;
  approverName: Scalars['String']['input'];
};

export type QuoteEvent = {
  __typename?: 'QuoteEvent';
  approval?: Maybe<QuoteApproval>;
  conversation?: Maybe<Conversation>;
  createdTime: Scalars['String']['output'];
  eventType?: Maybe<QuoteEventType>;
};

export enum QuoteEventType {
  Approval = 'APPROVAL',
  Conversation = 'CONVERSATION'
}

export type QuoteEvents = {
  __typename?: 'QuoteEvents';
  events?: Maybe<Array<Maybe<QuoteEvent>>>;
  listInfo?: Maybe<ListInfo>;
};

export type QuoteIdentifierInput = {
  quoteId: Scalars['ID']['input'];
};

export type QuoteItem = {
  __typename?: 'QuoteItem';
  amount: Scalars['String']['output'];
  details?: Maybe<Scalars['String']['output']>;
  discountAmount?: Maybe<Scalars['String']['output']>;
  discountRate?: Maybe<Scalars['String']['output']>;
  discountType?: Maybe<DiscountType>;
  itemId: Scalars['ID']['output'];
  itemOrder?: Maybe<Scalars['Int']['output']>;
  quantity: Scalars['String']['output'];
  serviceCatalogItem?: Maybe<ServiceCatalogItem>;
  serviceItem?: Maybe<ServiceItem>;
  tax?: Maybe<Tax>;
  taxAmount?: Maybe<Scalars['String']['output']>;
  taxRate?: Maybe<Scalars['String']['output']>;
  taxable?: Maybe<Scalars['Boolean']['output']>;
  totalAmount?: Maybe<Scalars['String']['output']>;
  unitPrice: Scalars['String']['output'];
};

export type QuoteItemIdentifierInput = {
  itemId: Scalars['ID']['input'];
};

export type QuoteList = {
  __typename?: 'QuoteList';
  listInfo?: Maybe<ListInfo>;
  quotes?: Maybe<Array<Maybe<Quote>>>;
};

export enum QuoteStatusEnum {
  Approved = 'APPROVED',
  Draft = 'DRAFT',
  Expired = 'EXPIRED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type QuoteTaxItem = {
  __typename?: 'QuoteTaxItem';
  id: Scalars['ID']['output'];
  rate: TaxRate;
  tax: Tax;
  taxAmount: Scalars['String']['output'];
  taxRate: Scalars['String']['output'];
  taxableAmount: Scalars['String']['output'];
};

export type QuoteTemplate = {
  __typename?: 'QuoteTemplate';
  footer?: Maybe<Scalars['String']['output']>;
  layoutConfiguration?: Maybe<Scalars['JSON']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  templateId?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type QuoteTemplateIdentifierInput = {
  templateId: Scalars['ID']['input'];
};

export enum RatingType {
  Star = 'STAR',
  Thumbs = 'THUMBS'
}

export type RecentSearchInfo = {
  __typename?: 'RecentSearchInfo';
  recentHits?: Maybe<Scalars['JSON']['output']>;
  recentTerms?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Recipient = {
  __typename?: 'Recipient';
  email?: Maybe<Scalars['String']['output']>;
  /** RecipientType */
  group?: Maybe<Group>;
  placeHolder?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  user?: Maybe<User>;
  userTypeRole?: Maybe<Role>;
};

export type RecipientInfo = {
  __typename?: 'RecipientInfo';
  mailDeliveryStatus?: Maybe<Scalars['String']['output']>;
  mailFailureReason?: Maybe<Scalars['JSON']['output']>;
  user?: Maybe<User>;
};

export type RecipientInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  /** RecipientType */
  group?: InputMaybe<GroupInput>;
  placeHolder?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  user?: InputMaybe<UserInput>;
  userTypeRole?: InputMaybe<RoleInput>;
};

export enum RecipientType {
  Email = 'EMAIL',
  Group = 'GROUP',
  Placeholder = 'PLACEHOLDER',
  User = 'USER',
  UserTypeRole = 'USER_TYPE_ROLE'
}

export type RecurringContract = {
  __typename?: 'RecurringContract';
  billingOffset: Scalars['Int']['output'];
  contractId: Scalars['ID']['output'];
  frequencyDurationUnit: FrequencyDurationUnit;
  frequencyInterval: Scalars['Int']['output'];
  nextBillDate?: Maybe<Scalars['String']['output']>;
  pax8Subscription?: Maybe<Pax8Subscription>;
  recurringMode: RecurringMode;
};

export type RecurringContractFrequencyInput = {
  billingOffset?: InputMaybe<Scalars['Int']['input']>;
  frequencyDurationUnit: FrequencyDurationUnit;
  frequencyInterval: Scalars['Int']['input'];
  recurringMode: RecurringMode;
};

export type RecurringContractInput = {
  billingOffset?: InputMaybe<Scalars['Int']['input']>;
  frequencyDurationUnit: FrequencyDurationUnit;
  frequencyInterval: Scalars['Int']['input'];
  recurringMode: RecurringMode;
};

export enum RecurringMode {
  Advance = 'ADVANCE',
  Arrear = 'ARREAR',
  Upfront = 'UPFRONT'
}

export enum RedeemableBundleApplicableHours {
  AfterHours = 'AFTER_HOURS',
  AllHours = 'ALL_HOURS',
  BusinessHours = 'BUSINESS_HOURS'
}

export enum RedeemableBundleApplicableType {
  AllItems = 'ALL_ITEMS',
  IncludedItems = 'INCLUDED_ITEMS'
}

export type RedeemableContract = {
  __typename?: 'RedeemableContract';
  applicableHours: RedeemableBundleApplicableHours;
  applicableType: RedeemableBundleApplicableType;
  carryForwardRemainingQuantity: Scalars['Boolean']['output'];
  contractId: Scalars['ID']['output'];
  reminderThreshold?: Maybe<Scalars['Int']['output']>;
};

export type RedeemableContractInput = {
  applicableHours: RedeemableBundleApplicableHours;
  applicableType: RedeemableBundleApplicableType;
  carryForwardRemainingQuantity?: InputMaybe<Scalars['Boolean']['input']>;
  reminderThreshold?: InputMaybe<Scalars['Int']['input']>;
};

export type RedeemableServiceBundle = {
  __typename?: 'RedeemableServiceBundle';
  applicableHours: RedeemableBundleApplicableHours;
  applicableType: RedeemableBundleApplicableType;
  itemId: Scalars['ID']['output'];
  redeemableQuantity: Scalars['String']['output'];
};

export type RemoteDesktopConfig = {
  __typename?: 'RemoteDesktopConfig';
  config?: Maybe<Scalars['JSON']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  integrationId: Scalars['ID']['output'];
};

export type ReplyContext = {
  __typename?: 'ReplyContext';
  bcc?: Maybe<Array<Maybe<ConversationRecipient>>>;
  cc?: Maybe<Array<Maybe<ConversationRecipient>>>;
  hasAdditionalRecipients?: Maybe<Scalars['Boolean']['output']>;
  mailboxes?: Maybe<Array<Maybe<ReplyMailbox>>>;
  selectedMailbox?: Maybe<ReplyMailbox>;
  to?: Maybe<Array<Maybe<ConversationRecipient>>>;
};

export type ReplyMailbox = {
  __typename?: 'ReplyMailbox';
  boxId: Scalars['ID']['output'];
  /** Below field is added, only for vendor conversations. */
  emailSignature?: Maybe<Scalars['String']['output']>;
  outgoingAddress: Scalars['String']['output'];
  outgoingDomainVerified?: Maybe<Scalars['Boolean']['output']>;
};

export type Report = {
  __typename?: 'Report';
  charts?: Maybe<Array<Maybe<Chart>>>;
  createdBy?: Maybe<User>;
  createdTime?: Maybe<Scalars['String']['output']>;
  dataCondition?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** The below attributes are mandatory if the reportType is 'DATA' */
  entity?: Maybe<Scalars['String']['output']>;
  filterCondition?: Maybe<Scalars['JSON']['output']>;
  fullScreenModeEnabled?: Maybe<Scalars['Boolean']['output']>;
  fullScreenModeRefreshInterval?: Maybe<Scalars['Int']['output']>;
  groupBy?: Maybe<Scalars['JSON']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  layout?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  notificationTemplateId?: Maybe<Scalars['ID']['output']>;
  reportConfig?: Maybe<Scalars['JSON']['output']>;
  reportId: Scalars['ID']['output'];
  reportType?: Maybe<ReportType>;
  scheduleDefinition?: Maybe<Scalars['JSON']['output']>;
  selectAttributes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Below attributes are deprecated, use ReportSchedule API to access this */
  shareFilterCondition?: Maybe<Scalars['JSON']['output']>;
  shareUsers?: Maybe<Array<Maybe<ShareReportUser>>>;
  sharedUsers?: Maybe<Array<Maybe<User>>>;
  systemReport?: Maybe<Scalars['Boolean']['output']>;
};

export type ReportData = {
  __typename?: 'ReportData';
  data?: Maybe<Scalars['JSON']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pageSize?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ReportExportConfig = {
  __typename?: 'ReportExportConfig';
  pdfReportConfig?: Maybe<PdfReportExportConfig>;
  reportType: Scalars['String']['output'];
};

export type ReportExportConfigInput = {
  pdfReportConfig?: InputMaybe<Scalars['JSON']['input']>;
  reportType?: InputMaybe<Scalars['String']['input']>;
};

export type ReportIdentifierInput = {
  reportId: Scalars['ID']['input'];
};

export type ReportInput = {
  addCharts?: InputMaybe<Array<InputMaybe<ChartInput>>>;
  addShareUsers?: InputMaybe<Array<InputMaybe<ShareReportUserInput>>>;
  dataCondition?: InputMaybe<Scalars['JSON']['input']>;
  deleteCharts?: InputMaybe<Array<InputMaybe<ChartInput>>>;
  deleteShareUsers?: InputMaybe<Array<InputMaybe<ShareReportUserInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** The below attributes are mandatory if the reportType is 'DATA' */
  entity?: InputMaybe<Scalars['String']['input']>;
  filterCondition?: InputMaybe<Scalars['JSON']['input']>;
  fullScreenModeEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  fullScreenModeRefreshInterval?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<Array<InputMaybe<GroupByInput>>>;
  layout?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** Below attributes are deprecated, use ReportSchedule API to access this */
  notificationTemplate?: InputMaybe<NotificationTemplateInput>;
  reportConfig?: InputMaybe<Scalars['JSON']['input']>;
  reportId?: InputMaybe<Scalars['ID']['input']>;
  reportType?: InputMaybe<ReportType>;
  scheduleDefinition?: InputMaybe<Scalars['JSON']['input']>;
  selectAttributes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shareFilterCondition?: InputMaybe<Scalars['JSON']['input']>;
};

export type ReportList = {
  __typename?: 'ReportList';
  listInfo?: Maybe<ListInfo>;
  reports?: Maybe<Array<Maybe<Report>>>;
};

export type ReportSchedule = {
  __typename?: 'ReportSchedule';
  filterCondition?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  notificationTemplate?: Maybe<NotificationTemplate>;
  scheduleDefinition?: Maybe<Scalars['JSON']['output']>;
  shareUsers?: Maybe<Array<Maybe<ReportScheduleUser>>>;
  userType: UserType;
};

export type ReportScheduleList = {
  __typename?: 'ReportScheduleList';
  schedules?: Maybe<Array<Maybe<ReportSchedule>>>;
};

export type ReportScheduleUser = {
  __typename?: 'ReportScheduleUser';
  client?: Maybe<Account>;
  user: User;
};

export enum ReportType {
  Data = 'DATA',
  Efficiency = 'EFFICIENCY',
  Metric = 'METRIC',
  Pdf = 'PDF',
  Profitability = 'PROFITABILITY'
}

export type ResellingClientConfig = {
  __typename?: 'ResellingClientConfig';
  addOn?: Maybe<IntegrationAddOn>;
  addToContract?: Maybe<Scalars['Boolean']['output']>;
  client?: Maybe<Account>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  itemCount?: Maybe<Scalars['Int']['output']>;
};

export type ResellingClientConfigInput = {
  addAllClientItems?: InputMaybe<Scalars['Boolean']['input']>;
  addItems?: InputMaybe<Array<InputMaybe<ResellingItemConfigInput>>>;
  addToContract?: InputMaybe<Scalars['Boolean']['input']>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  deleteItems?: InputMaybe<Array<InputMaybe<ResellingItemConfigInput>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  updateItems?: InputMaybe<Array<InputMaybe<ResellingItemConfigInput>>>;
};

export type ResellingItem = {
  __typename?: 'ResellingItem';
  assetItem?: Maybe<Asset>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  itemId?: Maybe<Scalars['ID']['output']>;
  itemType?: Maybe<Scalars['String']['output']>;
  requesterItem?: Maybe<User>;
};

export type ResellingItemConfig = {
  __typename?: 'ResellingItemConfig';
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  user?: Maybe<User>;
};

export type ResellingItemConfigInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  itemId?: InputMaybe<Scalars['String']['input']>;
  itemType?: InputMaybe<Scalars['String']['input']>;
};

export type ResellingItemList = {
  __typename?: 'ResellingItemList';
  clientId?: Maybe<Scalars['String']['output']>;
  itemType?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<ResellingItem>>>;
  listInfo?: Maybe<ListInfo>;
  totalSelectCount?: Maybe<Scalars['Int']['output']>;
};

export type ResellingLicenseDetails = {
  __typename?: 'ResellingLicenseDetails';
  clientCount?: Maybe<Scalars['Int']['output']>;
  itemCount?: Maybe<Scalars['Int']['output']>;
};

export type ResendVendorConversationInput = {
  conversation: ConversationIdentifierInput;
  workItem: WorkItemIdentifierInput;
};

export type ReservedSubDomain = {
  __typename?: 'ReservedSubDomain';
  domainName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  matchType?: Maybe<Scalars['String']['output']>;
};

export type ReservedSubDomainInput = {
  domainName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  matchType?: InputMaybe<Scalars['String']['input']>;
};

export type ResyncItems = {
  __typename?: 'ResyncItems';
  createItemsCount?: Maybe<Scalars['Int']['output']>;
  isResyncTriggered?: Maybe<Scalars['Boolean']['output']>;
};

export type Role = {
  __typename?: 'Role';
  creationType?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  editable?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** RoleCreationType */
  roleFeatureList?: Maybe<Array<Maybe<RoleFeature>>>;
  roleId: Scalars['ID']['output'];
  roleType?: Maybe<RoleType>;
  roleUserList?: Maybe<Array<Maybe<User>>>;
};

export type RoleFeature = {
  __typename?: 'RoleFeature';
  feature?: Maybe<Feature>;
  operationList?: Maybe<Array<Maybe<Operation>>>;
};

export type RoleFeatureInput = {
  feature?: InputMaybe<FeatureInput>;
  operationList?: InputMaybe<Array<InputMaybe<OperationInput>>>;
};

export type RoleInput = {
  addUserList?: InputMaybe<Array<InputMaybe<UserInput>>>;
  deleteUserList?: InputMaybe<Array<InputMaybe<UserInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  roleFeatureList?: InputMaybe<Array<InputMaybe<RoleFeatureInput>>>;
  roleId?: InputMaybe<Scalars['ID']['input']>;
  roleType?: InputMaybe<RoleTypeInput>;
};

export type RoleType = {
  __typename?: 'RoleType';
  name?: Maybe<Scalars['String']['output']>;
  roleTypeFeatureList?: Maybe<Array<Maybe<RoleTypeFeature>>>;
  roleTypeId: Scalars['ID']['output'];
  type: RoleTypeEnum;
};

export enum RoleTypeEnum {
  Requester = 'REQUESTER',
  Technician = 'TECHNICIAN'
}

export type RoleTypeFeature = {
  __typename?: 'RoleTypeFeature';
  feature?: Maybe<Feature>;
  operationList?: Maybe<Array<Maybe<Operation>>>;
};

export type RoleTypeInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  roleTypeId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<RoleTypeEnum>;
};

export type RuleConditionInput = {
  attribute?: InputMaybe<Scalars['String']['input']>;
  joinOperator?: InputMaybe<Scalars['String']['input']>;
  operands?: InputMaybe<Array<RuleConditionInput>>;
  operator?: InputMaybe<Scalars['String']['input']>;
  operatorValue?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type Runbook = {
  __typename?: 'Runbook';
  actions?: Maybe<Array<Maybe<RunbookAction>>>;
  associatedCount?: Maybe<Scalars['Int']['output']>;
  completedCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  displayIcon?: Maybe<Scalars['String']['output']>;
  layoutMeta?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  sopId: Scalars['ID']['output'];
  status?: Maybe<RunbookStatus>;
};

export type RunbookAction = {
  __typename?: 'RunbookAction';
  actionOrder?: Maybe<Scalars['Int']['output']>;
  flowAction?: Maybe<FlowAction>;
  parentFlowAction?: Maybe<FlowActionIdentifier>;
};

export enum RunbookStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type ScimConfiguration = {
  __typename?: 'SCIMConfiguration';
  /** AccountType */
  account?: Maybe<Organization>;
  accountType?: Maybe<Scalars['String']['output']>;
  authToken?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ScimConfigurationInput = {
  /** AccountType */
  accountId?: InputMaybe<Scalars['ID']['input']>;
  accountType?: InputMaybe<Scalars['String']['input']>;
};

export type Sla = {
  __typename?: 'SLA';
  active?: Maybe<Scalars['Boolean']['output']>;
  associatedClients?: Maybe<Array<Maybe<Organization>>>;
  clients?: Maybe<Array<Maybe<ClientSla>>>;
  description?: Maybe<Scalars['String']['output']>;
  executeForAllClients?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slaCondition?: Maybe<Scalars['JSON']['output']>;
  slaEscalationAction?: Maybe<SlaEscalationAction>;
  slaOrder?: Maybe<Scalars['Int']['output']>;
  slaTiming: Array<SlaTiming>;
};

export type SlaDuration = {
  __typename?: 'SLADuration';
  /** SLA_DURATION_TYPE */
  fixedDuration?: Maybe<Array<Maybe<FixedDuration>>>;
  relativeDuration?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type SlaDurationInput = {
  /** SLA_DURATION_TYPE */
  fixedDuration?: InputMaybe<Array<InputMaybe<FixedDurationInput>>>;
  relativeDuration?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type SlaEscalationAction = {
  __typename?: 'SLAEscalationAction';
  escalatedTo?: Maybe<Array<Maybe<Recipient>>>;
  techGroup?: Maybe<Group>;
  technician?: Maybe<User>;
};

export type SlaEscalationActionInput = {
  escalatedTo?: InputMaybe<Array<InputMaybe<RecipientInput>>>;
  techGroup?: InputMaybe<GroupInput>;
  technician?: InputMaybe<UserInput>;
};

export type SlaInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  addClients?: InputMaybe<Array<InputMaybe<ClientSlaInput>>>;
  deleteClients?: InputMaybe<Array<InputMaybe<ClientSlaInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  executeForAllClients?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slaCondition?: InputMaybe<RuleConditionInput>;
  slaEscalationAction?: InputMaybe<SlaEscalationActionInput>;
  slaTiming?: InputMaybe<Array<InputMaybe<SlaTimingInput>>>;
};

export type SlaTiming = {
  __typename?: 'SLATiming';
  executeIn: Scalars['String']['output'];
  firstResponseEscalation?: Maybe<SlaDuration>;
  /** SLA_EXECUTION_HOURS */
  firstResponseTarget?: Maybe<SlaDuration>;
  id?: Maybe<Scalars['ID']['output']>;
  priority: Scalars['String']['output'];
  resolutionEscalation?: Maybe<SlaDuration>;
  resolutionTarget?: Maybe<SlaDuration>;
};

export type SlaTimingInput = {
  executeIn: Scalars['String']['input'];
  firstResponseEscalation?: InputMaybe<SlaDurationInput>;
  /** SLA_EXECUTION_HOURS */
  firstResponseTarget?: InputMaybe<SlaDurationInput>;
  priority: Scalars['String']['input'];
  resolutionEscalation?: InputMaybe<SlaDurationInput>;
  resolutionTarget?: InputMaybe<SlaDurationInput>;
};

export type SopTaskTemplate = {
  __typename?: 'SOPTaskTemplate';
  taskOrder?: Maybe<Scalars['Int']['output']>;
  taskTemplate?: Maybe<TaskTemplate>;
};

export enum ScopeEnum {
  Asset = 'ASSET',
  Policy = 'POLICY'
}

export type ScriptAdditionalFile = {
  __typename?: 'ScriptAdditionalFile';
  fileId?: Maybe<Scalars['ID']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  fileSize?: Maybe<Scalars['String']['output']>;
};

export type ScriptPlaceHolderVariables = {
  __typename?: 'ScriptPlaceHolderVariables';
  columnName?: Maybe<Scalars['String']['output']>;
  labelName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ScriptRuntimeVariables = {
  __typename?: 'ScriptRuntimeVariables';
  name?: Maybe<Scalars['String']['output']>;
};

export type ScriptVariables = {
  __typename?: 'ScriptVariables';
  placeHolders?: Maybe<Array<Maybe<ScriptPlaceHolderVariables>>>;
  runTime?: Maybe<Array<Maybe<ScriptRuntimeVariables>>>;
};

export type SecureFieldValueInput = {
  customFieldName: Scalars['String']['input'];
  entityId: Scalars['ID']['input'];
  module: Scalars['String']['input'];
};

export type SelectionInput = {
  filterCondition?: InputMaybe<RuleConditionInput>;
  /** SelectionType */
  ids?: InputMaybe<Array<InputMaybe<IdentifierInput>>>;
  selectionType?: InputMaybe<Scalars['String']['input']>;
};

export type SequenceGenerator = {
  __typename?: 'SequenceGenerator';
  name: IdentifierName;
  value: Scalars['Int']['output'];
};

export type ServiceCatalogItem = {
  __typename?: 'ServiceCatalogItem';
  category?: Maybe<ServiceCategory>;
  costPrice?: Maybe<PricingModel>;
  description?: Maybe<Scalars['String']['output']>;
  integrationAddOn?: Maybe<IntegrationAddOn>;
  integrationState: ServiceCatalogItemIntegrationState;
  itemId: Scalars['ID']['output'];
  itemType: ServiceCatalogItemType;
  name: Scalars['String']['output'];
  offerAsWorklogItem: Scalars['Boolean']['output'];
  salesTax?: Maybe<Tax>;
  sellingPrice?: Maybe<PricingModel>;
  serviceTypeItem?: Maybe<ServiceTypeItem>;
  status: ServiceCatalogItemStatus;
  taxable: Scalars['Boolean']['output'];
};

export type ServiceCatalogItemIdentifier = {
  __typename?: 'ServiceCatalogItemIdentifier';
  itemId?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ServiceCatalogItemIdentifierInput = {
  itemId: Scalars['ID']['input'];
};

export type ServiceCatalogItemIntegrationState = {
  __typename?: 'ServiceCatalogItemIntegrationState';
  pax8?: Maybe<Scalars['Boolean']['output']>;
  quickbooks?: Maybe<Scalars['Boolean']['output']>;
  xero?: Maybe<Scalars['Boolean']['output']>;
};

export type ServiceCatalogItemList = {
  __typename?: 'ServiceCatalogItemList';
  items?: Maybe<Array<ServiceCatalogItem>>;
  listInfo?: Maybe<ListInfo>;
};

export enum ServiceCatalogItemStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export enum ServiceCatalogItemType {
  Product = 'PRODUCT',
  Service = 'SERVICE'
}

export type ServiceCategory = {
  __typename?: 'ServiceCategory';
  categoryId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ServiceCategoryInput = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceItem = {
  __typename?: 'ServiceItem';
  /** BLOCK_ITEM_USAGE_TYPE # deprecated */
  adjustBlockItemAgainstAllItems?: Maybe<Scalars['Boolean']['output']>;
  afterHoursUnitPrice?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['String']['output']>;
  blockHoursAdjustedItems?: Maybe<Array<Maybe<ServiceItem>>>;
  /** deprecated */
  blockHoursUsedIn?: Maybe<Scalars['String']['output']>;
  /** BLOCK_ITEM_USAGE_TYPE */
  blockItemAdjustedItems?: Maybe<Array<Maybe<ServiceItem>>>;
  blockItemUsedIn?: Maybe<Scalars['String']['output']>;
  businessHoursUnitPrice?: Maybe<Scalars['String']['output']>;
  category?: Maybe<ServiceCategory>;
  costPrice?: Maybe<Scalars['String']['output']>;
  defaultItem?: Maybe<Scalars['Boolean']['output']>;
  integrationAddOn?: Maybe<IntegrationAddOn>;
  integrationState?: Maybe<ServiceItemIntegrationState>;
  invoiceDescription?: Maybe<Scalars['String']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  itemId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  quantity?: Maybe<Scalars['String']['output']>;
  quantityType: Scalars['String']['output'];
  /** ServiceItemQuantityType */
  roundUpValue?: Maybe<Scalars['Int']['output']>;
  salesTax?: Maybe<Tax>;
  salesTaxEnabled?: Maybe<Scalars['Boolean']['output']>;
  unitPrice?: Maybe<Scalars['String']['output']>;
  useAsWorklogItem?: Maybe<Scalars['Boolean']['output']>;
};

export type ServiceItemCustomPrice = {
  __typename?: 'ServiceItemCustomPrice';
  afterHoursUnitPrice?: Maybe<Scalars['String']['output']>;
  discountRate?: Maybe<Scalars['String']['output']>;
  itemId: Scalars['ID']['output'];
  serviceItem: ServiceItem;
  unitPrice: Scalars['String']['output'];
};

export type ServiceItemCustomPriceInput = {
  discountRate?: InputMaybe<Scalars['String']['input']>;
  itemId?: InputMaybe<Scalars['ID']['input']>;
  serviceItem?: InputMaybe<ServiceItemInput>;
};

export type ServiceItemIdentifier = {
  __typename?: 'ServiceItemIdentifier';
  itemId?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ServiceItemIdentifierInput = {
  itemId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceItemInput = {
  /** BLOCK_ITEM_USAGE_TYPE  # deprecated */
  addBlockHoursAdjustedItems?: InputMaybe<Array<InputMaybe<ServiceItemInput>>>;
  /** BLOCK_ITEM_USAGE_TYPE */
  addBlockItemAdjustedItems?: InputMaybe<Array<InputMaybe<ServiceItemInput>>>;
  adjustBlockItemAgainstAllItems?: InputMaybe<Scalars['Boolean']['input']>;
  afterHoursUnitPrice?: InputMaybe<Scalars['String']['input']>;
  /** deprecated */
  amount?: InputMaybe<Scalars['String']['input']>;
  blockHoursUsedIn?: InputMaybe<Scalars['String']['input']>;
  blockItemUsedIn?: InputMaybe<Scalars['String']['input']>;
  businessHoursUnitPrice?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<ServiceCategoryInput>;
  costPrice?: InputMaybe<Scalars['String']['input']>;
  /** deprecated */
  deleteBlockHoursAdjustedItems?: InputMaybe<Array<InputMaybe<ServiceItemInput>>>;
  deleteBlockItemAdjustedItems?: InputMaybe<Array<InputMaybe<ServiceItemInput>>>;
  invoiceDescription?: InputMaybe<Scalars['String']['input']>;
  itemId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['String']['input']>;
  quantityType?: InputMaybe<Scalars['String']['input']>;
  /** ServiceItemQuantityType */
  roundUpValue?: InputMaybe<Scalars['Int']['input']>;
  salesTax?: InputMaybe<TaxInput>;
  salesTaxEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  unitPrice?: InputMaybe<Scalars['String']['input']>;
  useAsWorklogItem?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServiceItemIntegrationState = {
  __typename?: 'ServiceItemIntegrationState';
  pax8?: Maybe<Scalars['Boolean']['output']>;
  quickbooks?: Maybe<Scalars['Boolean']['output']>;
  xero?: Maybe<Scalars['Boolean']['output']>;
};

export type ServiceItemList = {
  __typename?: 'ServiceItemList';
  customPriceItems?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  items?: Maybe<Array<Maybe<ServiceItem>>>;
  listInfo?: Maybe<ListInfo>;
};

export type ServiceTypeItem = {
  __typename?: 'ServiceTypeItem';
  bundledItems?: Maybe<Array<ServiceCatalogItem>>;
  hourlyServiceTypeItem?: Maybe<HourlyServiceTypeItem>;
  itemId: Scalars['ID']['output'];
  offeringType: ServiceTypeItemOfferingType;
  redeemableServiceBundle?: Maybe<RedeemableServiceBundle>;
};

export enum ServiceTypeItemOfferingType {
  BlockHour = 'BLOCK_HOUR',
  BlockMoney = 'BLOCK_MONEY',
  Hours = 'HOURS',
  Quantity = 'QUANTITY',
  ServiceBundle = 'SERVICE_BUNDLE'
}

export type ServiceUtilisation = {
  __typename?: 'ServiceUtilisation';
  billedHours?: Maybe<Scalars['String']['output']>;
  revenue?: Maybe<Scalars['String']['output']>;
  serviceCatalog: ServiceCatalogItem;
};

export type ServiceUtilisationList = {
  __typename?: 'ServiceUtilisationList';
  listInfo: ListInfo;
  serviceUtilisationList?: Maybe<Array<ServiceUtilisation>>;
};

export enum SessionAppType {
  Android = 'ANDROID',
  Apple = 'APPLE',
  Chrome = 'CHROME',
  Safari = 'SAFARI'
}

export type SetupIntegratedPaymentMethodInput = {
  /** PaymentMethodEnum */
  client: ClientIdentifierInput;
  integration: IntegrationIdentifierInput;
  type: Scalars['String']['input'];
};

export type ShareReportInput = {
  notificationTemplate?: InputMaybe<NotificationTemplateInput>;
  reportId?: InputMaybe<Scalars['ID']['input']>;
  shareFilterCondition?: InputMaybe<Scalars['JSON']['input']>;
  shareUsers?: InputMaybe<Array<InputMaybe<ShareReportUserInput>>>;
};

/** Below attributes are deprecated, use ReportScheduleUser type */
export type ShareReportUser = {
  __typename?: 'ShareReportUser';
  client: Organization;
  user: User;
};

export type ShareReportUserInput = {
  client?: InputMaybe<ClientIdentifierInput>;
  user: UserIdentifierInput;
};

export type SharedReport = {
  __typename?: 'SharedReport';
  data?: Maybe<Scalars['JSON']['output']>;
  endDateTime?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  layout?: Maybe<Scalars['JSON']['output']>;
  reportName?: Maybe<Scalars['String']['output']>;
  startDateTime?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type SilentInstaller = {
  __typename?: 'SilentInstaller';
  arch?: Maybe<Scalars['String']['output']>;
  command?: Maybe<Scalars['String']['output']>;
  os?: Maybe<Os>;
  scriptType?: Maybe<Scalars['String']['output']>;
};

export type Site = {
  __typename?: 'Site';
  account?: Maybe<Organization>;
  /** deprecated */
  address?: Maybe<Address>;
  businessHour?: Maybe<Array<Maybe<BusinessHour>>>;
  /** deprecated */
  city?: Maybe<Scalars['String']['output']>;
  /** deprecated */
  contactNumber?: Maybe<Scalars['String']['output']>;
  /** deprecated */
  country?: Maybe<Scalars['String']['output']>;
  /** deprecated */
  countryCode?: Maybe<Scalars['String']['output']>;
  holidayList?: Maybe<HolidayList>;
  hq?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  installerInfo?: Maybe<Array<Maybe<InstallerInfo>>>;
  line1?: Maybe<Scalars['String']['output']>;
  /** deprecated */
  line2?: Maybe<Scalars['String']['output']>;
  /** deprecated */
  line3?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  /** deprecated */
  postalCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  /** deprecated */
  stateCode?: Maybe<Scalars['String']['output']>;
  timezoneCode?: Maybe<Scalars['String']['output']>;
  working24x7?: Maybe<Scalars['Boolean']['output']>;
};

export type SiteContext = {
  __typename?: 'SiteContext';
  businessHour?: Maybe<Array<Maybe<BusinessHour>>>;
  countryCode?: Maybe<Scalars['String']['output']>;
  timezoneCode?: Maybe<Scalars['String']['output']>;
  working24x7?: Maybe<Scalars['Boolean']['output']>;
};

export type SiteIdentifierInput = {
  id: Scalars['ID']['input'];
};

export type SiteInput = {
  businessHour?: InputMaybe<Array<InputMaybe<BusinessHourInput>>>;
  city?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  holidayList?: InputMaybe<HolidayListInput>;
  hq?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  line1?: InputMaybe<Scalars['String']['input']>;
  line2?: InputMaybe<Scalars['String']['input']>;
  line3?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /**
   * deprecated
   *  deprecated
   */
  state?: InputMaybe<Scalars['String']['input']>;
  stateCode?: InputMaybe<Scalars['String']['input']>;
  timezoneCode?: InputMaybe<Scalars['String']['input']>;
  working24x7?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SiteList = {
  __typename?: 'SiteList';
  listInfo?: Maybe<ListInfo>;
  sites?: Maybe<Array<Maybe<Site>>>;
};

export type SlackWebHook = {
  __typename?: 'SlackWebHook';
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  webHookId: Scalars['ID']['output'];
};

export type Sort = {
  __typename?: 'Sort';
  attribute?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['String']['output']>;
};

export type SortInput = {
  attribute?: InputMaybe<Scalars['String']['input']>;
  /** SortOrder */
  emptyAtLast?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
};

export type SpSamlProviderDetail = {
  __typename?: 'SpSamlProviderDetail';
  spConsumerUrl?: Maybe<Scalars['String']['output']>;
};

export type SsoDetail = {
  __typename?: 'SsoDetail';
  /** SSO_TYPE('NONE','SAML') */
  idpDetail?: Maybe<IdpSamlProviderDetail>;
  spDetail?: Maybe<SpSamlProviderDetail>;
  ssoType?: Maybe<Scalars['String']['output']>;
};

export type SsoDetailInput = {
  /** SSO_TYPE('NONE','SAML') */
  idpDetail?: InputMaybe<IdpSamlProviderDetailInput>;
  ssoType?: InputMaybe<Scalars['String']['input']>;
};

export type StandardOperatingProcedure = {
  __typename?: 'StandardOperatingProcedure';
  approverList?: Maybe<Array<Maybe<Recipient>>>;
  description?: Maybe<Scalars['String']['output']>;
  emailTemplateList?: Maybe<Array<Maybe<NotificationTemplate>>>;
  name?: Maybe<Scalars['String']['output']>;
  sopId: Scalars['ID']['output'];
  /** @deprecated Use taskTemplates */
  taskTemplateList?: Maybe<Array<Maybe<TaskTemplate>>>;
  taskTemplates?: Maybe<Array<Maybe<SopTaskTemplate>>>;
};

/** --------------- RMM ------------------- */
export enum State {
  Delete = 'DELETE',
  Disable = 'DISABLE',
  Enable = 'ENABLE'
}

export type Status = {
  __typename?: 'Status';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export enum StatusEnum {
  Completed = 'COMPLETED',
  Ended = 'ENDED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Scheduled = 'SCHEDULED'
}

export type StickyNote = {
  __typename?: 'StickyNote';
  content?: Maybe<Scalars['String']['output']>;
};

export type StripeCustomer = {
  __typename?: 'StripeCustomer';
  name?: Maybe<Scalars['String']['output']>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
};

export type StripeCustomerList = {
  __typename?: 'StripeCustomerList';
  listInfo?: Maybe<ListInfo>;
  stripeCustomers?: Maybe<Array<Maybe<StripeCustomer>>>;
};

export type SubCategory = {
  __typename?: 'SubCategory';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type SubscribedAddon = {
  __typename?: 'SubscribedAddon';
  addon?: Maybe<Addon>;
  addonLicenseCount?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SubscriptionContext = {
  __typename?: 'SubscriptionContext';
  activatedDateTime?: Maybe<Scalars['String']['output']>;
  chargeBeePlanId?: Maybe<Scalars['String']['output']>;
  daysSinceActivated?: Maybe<Scalars['Int']['output']>;
  planName?: Maybe<Scalars['String']['output']>;
  subscriptionStatus: SubscriptionStatus;
  trialExpiryDays?: Maybe<Scalars['String']['output']>;
};

export enum SubscriptionDurationUnit {
  Day = 'DAY',
  Month = 'MONTH',
  Week = 'WEEK',
  Year = 'YEAR'
}

export type SubscriptionInvoice = {
  __typename?: 'SubscriptionInvoice';
  addonQuantity?: Maybe<Scalars['Int']['output']>;
  /** SubscriptionInvoiceStatus */
  date?: Maybe<Scalars['String']['output']>;
  hasOverageDevice?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  licenseQuantity?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type SubscriptionInvoiceList = {
  __typename?: 'SubscriptionInvoiceList';
  invoices?: Maybe<Array<Maybe<SubscriptionInvoice>>>;
  offset?: Maybe<Scalars['String']['output']>;
};

export enum SubscriptionStatus {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  NonRenewing = 'NON_RENEWING',
  Paused = 'PAUSED',
  Trial = 'TRIAL',
  TrialExpired = 'TRIAL_EXPIRED'
}

export type SupportAccess = {
  __typename?: 'SupportAccess';
  email?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  remainingTime?: Maybe<Scalars['Int']['output']>;
};

export enum TpEntityType {
  BookkeepingAccount = 'BOOKKEEPING_ACCOUNT',
  Client = 'CLIENT',
  ServiceItem = 'SERVICE_ITEM'
}

export type TpMappingRuleCondition = {
  __typename?: 'TPMappingRuleCondition';
  conditionAttribute: Scalars['String']['output'];
  conditionValue: MappingObject;
  destination: MappingObject;
  entityType: TpEntityType;
  ruleId: Scalars['ID']['output'];
};

export type TpMappingRuleIdentifierInput = {
  ruleId: Scalars['ID']['input'];
};

export type TpSourceInput = {
  integrationId?: InputMaybe<Scalars['ID']['input']>;
  tpItemId?: InputMaybe<Scalars['String']['input']>;
};

export type Task = {
  __typename?: 'Task';
  actualEndDate?: Maybe<Scalars['String']['output']>;
  actualStartDate?: Maybe<Scalars['String']['output']>;
  createdTime: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  displayId: Scalars['ID']['output'];
  dueDate?: Maybe<Scalars['String']['output']>;
  estimatedTime?: Maybe<Scalars['Int']['output']>;
  milestone?: Maybe<Milestone>;
  module?: Maybe<Scalars['String']['output']>;
  overdue?: Maybe<Scalars['Boolean']['output']>;
  project?: Maybe<Project>;
  scheduledStartDate?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  taskId: Scalars['ID']['output'];
  taskOrder?: Maybe<Scalars['Int']['output']>;
  techGroup?: Maybe<Group>;
  technician?: Maybe<User>;
  /** TaskModule */
  ticket?: Maybe<TaskTicket>;
  ticketPermission?: Maybe<Scalars['JSON']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  workItem?: Maybe<WorkItem>;
};

export type TaskTemplate = {
  __typename?: 'TaskTemplate';
  description?: Maybe<Scalars['String']['output']>;
  dueDate?: Maybe<Scalars['JSON']['output']>;
  estimatedTime?: Maybe<Scalars['Int']['output']>;
  scheduledStartDate?: Maybe<Scalars['JSON']['output']>;
  taskOrder?: Maybe<Scalars['Int']['output']>;
  taskTemplateId: Scalars['ID']['output'];
  techGroup?: Maybe<Group>;
  technician?: Maybe<User>;
  title?: Maybe<Scalars['String']['output']>;
};

export type TaskTicket = {
  __typename?: 'TaskTicket';
  approvalStatus?: Maybe<Scalars['String']['output']>;
  displayId: Scalars['ID']['output'];
  loggedInUserAsFollower?: Maybe<LoggedInUserAsFollower>;
  priority?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  technician?: Maybe<User>;
  ticketId: Scalars['ID']['output'];
};

export type Tax = {
  __typename?: 'Tax';
  integrated?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  rates?: Maybe<Array<Maybe<TaxRate>>>;
  taxId: Scalars['ID']['output'];
  totalRate?: Maybe<Scalars['String']['output']>;
};

export type TaxIdentifierInput = {
  taxId: Scalars['ID']['input'];
};

export type TaxInput = {
  addRates?: InputMaybe<Array<InputMaybe<TaxRateInput>>>;
  deleteRates?: InputMaybe<Array<InputMaybe<TaxRateInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  taxId?: InputMaybe<Scalars['ID']['input']>;
  updateRates?: InputMaybe<Array<InputMaybe<TaxRateInput>>>;
};

export type TaxList = {
  __typename?: 'TaxList';
  listInfo?: Maybe<ListInfo>;
  taxes?: Maybe<Array<Maybe<Tax>>>;
};

export type TaxRate = {
  __typename?: 'TaxRate';
  name: Scalars['String']['output'];
  rateId: Scalars['ID']['output'];
  rateValue: Scalars['String']['output'];
};

export type TaxRateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  rateId?: InputMaybe<Scalars['ID']['input']>;
  rateValue?: InputMaybe<Scalars['String']['input']>;
};

export type Team = {
  __typename?: 'Team';
  name?: Maybe<Scalars['String']['output']>;
  teamId: Scalars['ID']['output'];
};

export type TeamInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['ID']['input']>;
};

export type TechnicianGroupIdentifierInput = {
  groupId: Scalars['ID']['input'];
};

export type TechnicianUtilisation = {
  __typename?: 'TechnicianUtilisation';
  billedHours?: Maybe<Scalars['String']['output']>;
  cost?: Maybe<Scalars['String']['output']>;
  profit?: Maybe<Scalars['String']['output']>;
  revenue?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type TechnicianUtilisationList = {
  __typename?: 'TechnicianUtilisationList';
  listInfo: ListInfo;
  technicianUtilisationList?: Maybe<Array<TechnicianUtilisation>>;
};

export type ThirdPartyApplication = {
  __typename?: 'ThirdPartyApplication';
  applicationReferenceId?: Maybe<Scalars['ID']['output']>;
  applicationUrl?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  dependencies?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  iconUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastSyncedTime?: Maybe<Scalars['String']['output']>;
  lastUpdatedTime?: Maybe<Scalars['String']['output']>;
  latestVersion?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  packageApprovedDate?: Maybe<Scalars['String']['output']>;
  packageStatus?: Maybe<Scalars['String']['output']>;
  patchOptions?: Maybe<Scalars['JSON']['output']>;
  publishedAt?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  thirdPartyPackageManager?: Maybe<ThirdPartyPackageManager>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ThirdPartyApplicationBundle = {
  __typename?: 'ThirdPartyApplicationBundle';
  applications?: Maybe<Array<Maybe<ThirdPartyApplication>>>;
  assetClassId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ThirdPartyApplicationPatchConfig = {
  __typename?: 'ThirdPartyApplicationPatchConfig';
  application?: Maybe<ThirdPartyApplication>;
  patchType?: Maybe<Scalars['String']['output']>;
};

export type ThirdPartyApplicationPolicyBundleConfig = {
  __typename?: 'ThirdPartyApplicationPolicyBundleConfig';
  applicationConfigs?: Maybe<Array<Maybe<ThirdPartyApplicationPatchConfig>>>;
  bundle?: Maybe<ThirdPartyApplicationBundle>;
};

export type ThirdPartyApplicationPolicyConfig = {
  __typename?: 'ThirdPartyApplicationPolicyConfig';
  applicationConfigs?: Maybe<Array<Maybe<ThirdPartyApplicationPatchConfig>>>;
  bundleConfigs?: Maybe<Array<Maybe<ThirdPartyApplicationPolicyBundleConfig>>>;
  scheduleDetail?: Maybe<Scalars['JSON']['output']>;
};

export type ThirdPartyPackageManager = {
  __typename?: 'ThirdPartyPackageManager';
  packageManager?: Maybe<Scalars['String']['output']>;
  pmId?: Maybe<Scalars['Int']['output']>;
};

export type Ticket = {
  __typename?: 'Ticket';
  /** TicketOperationalStatus */
  activeType?: Maybe<Scalars['String']['output']>;
  additionalRequester?: Maybe<Array<Maybe<User>>>;
  approvalStatus?: Maybe<Scalars['String']['output']>;
  approverPermission?: Maybe<Scalars['JSON']['output']>;
  assets?: Maybe<Array<Maybe<AssetBase>>>;
  category?: Maybe<Scalars['String']['output']>;
  cause?: Maybe<Scalars['String']['output']>;
  childTickets?: Maybe<Array<Maybe<Ticket>>>;
  client?: Maybe<Organization>;
  completedTasks?: Maybe<Scalars['Int']['output']>;
  contractTicketMapping?: Maybe<Array<Maybe<ContractTicketMapping>>>;
  createdBy?: Maybe<User>;
  createdTime: Scalars['String']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  department?: Maybe<BusinessFunction>;
  displayId: Scalars['String']['output'];
  /** TicketActiveType */
  dormantType?: Maybe<Scalars['String']['output']>;
  firstResponseDueTime?: Maybe<Scalars['String']['output']>;
  firstResponseDueTimeLeft?: Maybe<Scalars['Int']['output']>;
  firstResponseTime?: Maybe<Scalars['String']['output']>;
  firstResponseViolated?: Maybe<Scalars['Boolean']['output']>;
  /** TODO - Remove */
  followerPermission?: Maybe<Scalars['JSON']['output']>;
  followers?: Maybe<Array<Maybe<User>>>;
  form?: Maybe<TicketForm>;
  impact?: Maybe<Scalars['String']['output']>;
  latestReply?: Maybe<Conversation>;
  loggedInUserAsApprover?: Maybe<LoggedInUserAsApprover>;
  loggedInUserAsFollower?: Maybe<LoggedInUserAsFollower>;
  numberOfUnreadVendorConversation?: Maybe<Scalars['Int']['output']>;
  operationalStatus?: Maybe<Scalars['String']['output']>;
  parentTicket?: Maybe<Ticket>;
  priority?: Maybe<Scalars['String']['output']>;
  readStatus?: Maybe<Scalars['Boolean']['output']>;
  requester?: Maybe<User>;
  resolutionCode?: Maybe<Scalars['String']['output']>;
  resolutionDueTime?: Maybe<Scalars['String']['output']>;
  resolutionDueTimeLeft?: Maybe<Scalars['Int']['output']>;
  resolutionPauseTime?: Maybe<Scalars['String']['output']>;
  resolutionTime?: Maybe<Scalars['String']['output']>;
  resolutionViolated?: Maybe<Scalars['Boolean']['output']>;
  site?: Maybe<Site>;
  sla?: Maybe<Sla>;
  sop?: Maybe<StandardOperatingProcedure>;
  source: Scalars['String']['output'];
  status: Scalars['String']['output'];
  subcategory?: Maybe<Scalars['String']['output']>;
  subcause?: Maybe<Scalars['String']['output']>;
  subject: Scalars['String']['output'];
  techGroup?: Maybe<Group>;
  technician?: Maybe<User>;
  ticketId: Scalars['ID']['output'];
  ticketType?: Maybe<Scalars['String']['output']>;
  /** TicketDormantType */
  totalTasks?: Maybe<Scalars['Int']['output']>;
  updatedTime?: Maybe<Scalars['String']['output']>;
  urgency?: Maybe<Scalars['String']['output']>;
  worklogTimerStarted?: Maybe<Scalars['Boolean']['output']>;
  worklogTimespent?: Maybe<Scalars['String']['output']>;
};


export type TicketCustomFieldsArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TicketData = {
  __typename?: 'TicketData';
  attachments?: Maybe<Array<Maybe<Attachment>>>;
  category?: Maybe<Scalars['String']['output']>;
  cause?: Maybe<Scalars['String']['output']>;
  client?: Maybe<Organization>;
  customFields?: Maybe<Scalars['JSON']['output']>;
  dataId?: Maybe<Scalars['ID']['output']>;
  dataSource?: Maybe<Scalars['String']['output']>;
  department?: Maybe<BusinessFunction>;
  description?: Maybe<Scalars['String']['output']>;
  impact?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** TicketDataSource */
  placeholdersUsed?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['String']['output']>;
  requester?: Maybe<User>;
  resolutionCode?: Maybe<Scalars['String']['output']>;
  site?: Maybe<Site>;
  /** TicketTypeEnum */
  status?: Maybe<Scalars['String']['output']>;
  subcategory?: Maybe<Scalars['String']['output']>;
  subcause?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  techGroup?: Maybe<Group>;
  technician?: Maybe<User>;
  ticketType?: Maybe<Scalars['String']['output']>;
  urgency?: Maybe<Scalars['String']['output']>;
};


export type TicketDataCustomFieldsArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TicketForm = {
  __typename?: 'TicketForm';
  allowDeleteOrClientVisibilityUpdate?: Maybe<Scalars['Boolean']['output']>;
  clientVisibility?: Maybe<Scalars['String']['output']>;
  /** ClientVisibility */
  clients?: Maybe<Array<Maybe<Organization>>>;
  defaultForm?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldDetails?: Maybe<Scalars['String']['output']>;
  formDescription?: Maybe<Scalars['String']['output']>;
  formId: Scalars['ID']['output'];
  formName?: Maybe<Scalars['String']['output']>;
  formStatus?: Maybe<Scalars['String']['output']>;
  runbook?: Maybe<Runbook>;
  /**
   * this will have value only if visibility is SPEICFIC
   * @deprecated No longer supported
   */
  standardOperatingProcedure?: Maybe<StandardOperatingProcedure>;
  /** FormStatus */
  subject?: Maybe<Scalars['String']['output']>;
};

export type TicketTemplate = {
  __typename?: 'TicketTemplate';
  category?: Maybe<Category>;
  customFields?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  impact?: Maybe<Impact>;
  name?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Priority>;
  status?: Maybe<Status>;
  subject?: Maybe<Scalars['String']['output']>;
  templateId?: Maybe<Scalars['ID']['output']>;
  templateLayout?: Maybe<Scalars['String']['output']>;
  urgency?: Maybe<Urgency>;
};


export type TicketTemplateCustomFieldsArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TimeseriesAggregationInput = {
  function?: InputMaybe<Scalars['String']['input']>;
  interval?: InputMaybe<Scalars['Int']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
};

export type TpEntityList = {
  __typename?: 'TpEntityList';
  listInfo: ListInfo;
  objects: Array<Maybe<MappingObject>>;
};

export type TransientInvoiceItem = {
  __typename?: 'TransientInvoiceItem';
  amount: Scalars['String']['output'];
  billedDate: Scalars['String']['output'];
  details?: Maybe<Scalars['String']['output']>;
  discountRate?: Maybe<Scalars['String']['output']>;
  discountType?: Maybe<DiscountType>;
  offeredItem: OfferedItem;
  quantity: Scalars['String']['output'];
  serviceCatalogItem?: Maybe<ServiceCatalogItem>;
  serviceItem?: Maybe<ServiceItem>;
  site?: Maybe<Site>;
  tax?: Maybe<Tax>;
  taxable?: Maybe<Scalars['Boolean']['output']>;
  unitPrice: Scalars['String']['output'];
};

export type TrayIcon = {
  __typename?: 'TrayIcon';
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  iconId?: Maybe<Scalars['ID']['output']>;
  logoFileName?: Maybe<Scalars['String']['output']>;
  menus?: Maybe<Array<Maybe<TrayIconMenu>>>;
  name?: Maybe<Scalars['String']['output']>;
};

export type TrayIconMenu = {
  __typename?: 'TrayIconMenu';
  aboutMessage?: Maybe<Scalars['String']['output']>;
  menuId: Scalars['ID']['output'];
  /** TrayIconMenuType */
  menuOrder?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  scripts?: Maybe<Array<Maybe<TrayIconMenuScript>>>;
  ticketFormId?: Maybe<Scalars['String']['output']>;
  toolTipText?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type TrayIconMenuScript = {
  __typename?: 'TrayIconMenuScript';
  /** TrayIconMenuScriptType */
  arguments?: Maybe<Scalars['JSON']['output']>;
  script: AssetScript;
  type: Scalars['String']['output'];
};

export enum User_Email_Validation_Status {
  Available = 'AVAILABLE',
  DuplicateEmailAddress = 'DUPLICATE_EMAIL_ADDRESS',
  DuplicateEmailAddressAsMailboxAddress = 'DUPLICATE_EMAIL_ADDRESS_AS_MAILBOX_ADDRESS',
  DuplicateEmailAddressInDifferentAccountType = 'DUPLICATE_EMAIL_ADDRESS_IN_DIFFERENT_ACCOUNT_TYPE',
  InvalidDomain = 'INVALID_DOMAIN'
}

export type UnknownEmail = {
  __typename?: 'UnknownEmail';
  attachments?: Maybe<Array<Maybe<Attachment>>>;
  ccRecipients?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fromAddress?: Maybe<Scalars['String']['output']>;
  messageId?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<Scalars['JSON']['output']>;
  module?: Maybe<Scalars['String']['output']>;
  readStatus?: Maybe<Scalars['Boolean']['output']>;
  /** EmailModule */
  receivedTime?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  toRecipients?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  unknownEmailId: Scalars['ID']['output'];
};

export type UnknownEmailList = {
  __typename?: 'UnknownEmailList';
  listInfo?: Maybe<ListInfo>;
  unknownEmails?: Maybe<Array<Maybe<UnknownEmail>>>;
};

export type UpdateAiFeatureGroupInput = {
  enabled: Scalars['Boolean']['input'];
  featureGroupId: Scalars['ID']['input'];
};

export type UpdateAiFeatureInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  /** Deprecated */
  displayIcon?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  featureId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  prompt?: InputMaybe<AiPromptInput>;
  state?: InputMaybe<AiFeatureState>;
};

export type UpdateAiFeatureUsageCountInput = {
  featureId: Scalars['ID']['input'];
  usageCount: Scalars['Int']['input'];
};

export type UpdateAddonInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  addApplicablePlans?: InputMaybe<Array<InputMaybe<PlanIdentifierInput>>>;
  addFeatures?: InputMaybe<Array<InputMaybe<ProductFeatureIdentifierInput>>>;
  addonId: Scalars['ID']['input'];
  addonOrder?: InputMaybe<Scalars['Int']['input']>;
  countPerLicense?: InputMaybe<Scalars['Int']['input']>;
  deleteApplicablePlans?: InputMaybe<Array<InputMaybe<PlanIdentifierInput>>>;
  deleteFeatures?: InputMaybe<Array<InputMaybe<ProductFeatureIdentifierInput>>>;
  offeringEntityType?: InputMaybe<ProductOfferingEntityType>;
};

export type UpdateBillableContractInput = {
  addIncludedItems?: InputMaybe<Array<ServiceCatalogItemIdentifierInput>>;
  addSites?: InputMaybe<Array<SiteIdentifierInput>>;
  billableSiteType?: InputMaybe<BillableSiteType>;
  change?: InputMaybe<BillableContractQuantityChangeInput>;
  deleteIncludedItems?: InputMaybe<Array<ServiceCatalogItemIdentifierInput>>;
  deleteSites?: InputMaybe<Array<SiteIdentifierInput>>;
  discountRate?: InputMaybe<Scalars['String']['input']>;
  frequencyType?: InputMaybe<ContractFrequencyType>;
  generateInvoice?: InputMaybe<Scalars['Boolean']['input']>;
  paymentTerm?: InputMaybe<PaymentTermIdentifierInput>;
  perpetualContract?: InputMaybe<PerpetualContractInput>;
  project?: InputMaybe<ProjectIdentifierInput>;
  provisionRule?: InputMaybe<ProvisionRuleIdentifierInput>;
  quantityCalculationType?: InputMaybe<ContractQuantityCalculationType>;
  recurringContract?: InputMaybe<RecurringContractInput>;
  redeemableContract?: InputMaybe<RedeemableContractInput>;
  sellingPrice?: InputMaybe<PricingModelInput>;
  sellingPriceCalculationType?: InputMaybe<ContractSellingPriceCalculationType>;
  sellingPriceOverridden?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateBillableContractPricesInput = {
  /** PriceChangeOperation! */
  changeValue: PricingModelInput;
  clientContracts: Array<ContractIdentifierInput>;
  /** PriceUpdateByMetric! */
  priceChangeOperation: Scalars['String']['input'];
  priceUpdateByMetric: Scalars['String']['input'];
};

export type UpdateBillingTemplateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  templateId: Scalars['ID']['input'];
};

export type UpdateCheckListInput = {
  addItems?: InputMaybe<Array<InputMaybe<CreateCheckListItemInput>>>;
  deleteItems?: InputMaybe<Array<InputMaybe<CheckListItemRefInput>>>;
  updateItems?: InputMaybe<Array<InputMaybe<UpdateCheckListItemInput>>>;
};

export type UpdateCheckListItemInput = {
  content: Scalars['String']['input'];
  itemId: Scalars['ID']['input'];
};

export type UpdateClientContractInput = {
  contract: UpdateContractInput;
  endDate?: InputMaybe<Scalars['String']['input']>;
  remindDuration?: InputMaybe<FixedDurationInput>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateClientProvisionRuleLayoutInput = {
  client: ClientIdentifierInput;
  layout: Scalars['JSON']['input'];
};

export type UpdateContractApplicationInput = {
  addAutoApproveItems?: InputMaybe<Array<ServiceCatalogItemIdentifierInput>>;
  addBlacklistedItems?: InputMaybe<Array<ServiceCatalogItemIdentifierInput>>;
  addContractSLA?: InputMaybe<Array<CreateContractSlaInput>>;
  addOverrides?: InputMaybe<Array<CreateContractPricingOverrideInput>>;
  applicationRuleCondition?: InputMaybe<Scalars['JSON']['input']>;
  contractOrder?: InputMaybe<Scalars['Int']['input']>;
  deleteAutoApproveItems?: InputMaybe<Array<ServiceCatalogItemIdentifierInput>>;
  deleteBlacklistedItems?: InputMaybe<Array<ServiceCatalogItemIdentifierInput>>;
  deleteContractSLA?: InputMaybe<Array<ContractSlaIdentifierInput>>;
  deleteOverrides?: InputMaybe<Array<ContractPricingOverrideIdentifierInput>>;
  updateContractSLA?: InputMaybe<Array<UpdateContractSlaInput>>;
  updateOverrides?: InputMaybe<Array<UpdateContractPricingOverrideInput>>;
};

export type UpdateContractInput = {
  billableContract?: InputMaybe<UpdateBillableContractInput>;
  contractApplication?: InputMaybe<UpdateContractApplicationInput>;
  contractId: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateContractPricingOverrideInput = {
  addOverrideItems?: InputMaybe<Array<ContractPricingOverrideItemInput>>;
  conditionalPricing?: InputMaybe<ContractConditionalPricingOverrideInput>;
  deleteOverrideItems?: InputMaybe<Array<ContractPricingOverrideItemIdentifierInput>>;
  overrideCategory?: InputMaybe<ContractPricingOverrideCategory>;
  overrideId: Scalars['ID']['input'];
  updateOverrideItems?: InputMaybe<Array<ContractPricingOverrideItemInput>>;
};

export type UpdateContractSlaInput = {
  id: Scalars['ID']['input'];
  slaOrder?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateContractTemplateInput = {
  contract: UpdateContractInput;
};

export type UpdateCustomerOnPostSignupInput = {
  billingPeriod?: InputMaybe<Scalars['String']['input']>;
  /** BillingPeriod */
  billingPeriodFrequency?: InputMaybe<Scalars['Int']['input']>;
  chargeBeePlanId?: InputMaybe<Scalars['String']['input']>;
  leadCategory?: InputMaybe<Scalars['String']['input']>;
  technicianSizeRange?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFieldInput = {
  addOptions?: InputMaybe<Array<InputMaybe<CreateFieldOptionInput>>>;
  deleteOptions?: InputMaybe<Array<InputMaybe<IdentifierInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  mandatoryOnClosure?: InputMaybe<Scalars['Boolean']['input']>;
  mandatoryOnCreate?: InputMaybe<Scalars['Boolean']['input']>;
  showToClient?: InputMaybe<Scalars['Boolean']['input']>;
  updateOptions?: InputMaybe<Array<InputMaybe<UpdateFieldOptionInput>>>;
};

export type UpdateFieldOptionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateHourlyServiceTypeItemInput = {
  roundUpValue?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateInAppNotificationInput = {
  allNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  notificationIds?: InputMaybe<Array<InputMaybe<InAppNotificationIdentifierInput>>>;
  state: InAppNotificationState;
};

export type UpdateInvoiceInput = {
  addItems?: InputMaybe<Array<InputMaybe<CreateInvoiceItemInput>>>;
  additionalDiscount?: InputMaybe<Scalars['String']['input']>;
  additionalDiscountRate?: InputMaybe<Scalars['String']['input']>;
  conversation?: InputMaybe<ConversationInput>;
  deleteItems?: InputMaybe<Array<InputMaybe<InvoiceItemRefInput>>>;
  dueDate?: InputMaybe<Scalars['String']['input']>;
  footer?: InputMaybe<Scalars['String']['input']>;
  inlineImages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  invoiceDate?: InputMaybe<Scalars['String']['input']>;
  invoiceId: Scalars['ID']['input'];
  memo?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  paymentDate?: InputMaybe<Scalars['String']['input']>;
  paymentLink?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<PaymentMethodIdentifierInput>;
  paymentReference?: InputMaybe<Scalars['String']['input']>;
  paymentTerm?: InputMaybe<PaymentTermIdentifierInput>;
  statusEnum?: InputMaybe<InvoiceStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
  updateItems?: InputMaybe<Array<InputMaybe<UpdateInvoiceItemInput>>>;
};

export type UpdateInvoiceItemInput = {
  billedDate?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  discountAmount?: InputMaybe<Scalars['String']['input']>;
  discountRate?: InputMaybe<Scalars['String']['input']>;
  itemId: Scalars['ID']['input'];
  itemOrder?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['String']['input']>;
  serviceCatalogItem?: InputMaybe<ServiceCatalogItemIdentifierInput>;
  serviceItem?: InputMaybe<ServiceItemInput>;
  tax?: InputMaybe<TaxInput>;
  taxable?: InputMaybe<Scalars['Boolean']['input']>;
  unitPrice?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInvoiceSettingInput = {
  allowEmptyInvoice?: InputMaybe<Scalars['Boolean']['input']>;
  attachPdf?: InputMaybe<Scalars['Boolean']['input']>;
  autoPushInvoice?: InputMaybe<Scalars['Boolean']['input']>;
  autoSendInvoice?: InputMaybe<Scalars['Boolean']['input']>;
  clientId?: InputMaybe<Scalars['ID']['input']>;
  generateSiteSpecific?: InputMaybe<Scalars['Boolean']['input']>;
  ignoreConsumedItem?: InputMaybe<Scalars['Boolean']['input']>;
  invoiceDueDays?: InputMaybe<Scalars['Int']['input']>;
  invoicePaymentMethod?: InputMaybe<PaymentMethodInput>;
  invoicePaymentTerm?: InputMaybe<PaymentTermIdentifierInput>;
  invoiceSchedule?: InputMaybe<Scalars['JSON']['input']>;
  invoiceTemplate?: InputMaybe<InvoiceTemplateIdentifierInput>;
  projectLineItemContent?: InputMaybe<Scalars['String']['input']>;
  projectLineItemPlaceholdersUsed?: InputMaybe<Scalars['JSON']['input']>;
  quoteTemplate?: InputMaybe<QuoteTemplateIdentifierInput>;
  salesTax?: InputMaybe<TaxInput>;
  scheduleEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  sendTemplate?: InputMaybe<NotificationTemplateInput>;
  subscriptionLineItemContent?: InputMaybe<Scalars['String']['input']>;
  subscriptionLineItemPlaceholdersUsed?: InputMaybe<Scalars['JSON']['input']>;
  taxExempted?: InputMaybe<Scalars['Boolean']['input']>;
  ticketLineItemContent?: InputMaybe<Scalars['String']['input']>;
  ticketLineItemPlaceholdersUsed?: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateInvoiceTemplateInput = {
  footer?: InputMaybe<Scalars['String']['input']>;
  inlineImages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  layoutConfiguration?: InputMaybe<Scalars['JSON']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  templateId: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMailProviderConfigInput = {
  customServer?: InputMaybe<Scalars['Boolean']['input']>;
  imapHost?: InputMaybe<Scalars['String']['input']>;
  imapPort?: InputMaybe<Scalars['Int']['input']>;
  mailProviderConfigId?: InputMaybe<Scalars['ID']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  smtpHost?: InputMaybe<Scalars['String']['input']>;
  smtpPort?: InputMaybe<Scalars['Int']['input']>;
  sslRequired?: InputMaybe<Scalars['Boolean']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMailboxInput = {
  boxId: Scalars['ID']['input'];
  client?: InputMaybe<ClientInput>;
  /** OutgoingAddressType */
  conversationOnBehalfOf?: InputMaybe<Scalars['String']['input']>;
  customServerOutgoingOnly?: InputMaybe<Scalars['Boolean']['input']>;
  customServerType?: InputMaybe<CustomMailServerType>;
  defaultBox?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  emailSignature?: InputMaybe<Scalars['String']['input']>;
  hasAdvancedConfiguration?: InputMaybe<Scalars['Boolean']['input']>;
  hasCustomImapSettingsChanged?: InputMaybe<Scalars['Boolean']['input']>;
  imapHost?: InputMaybe<Scalars['String']['input']>;
  imapPort?: InputMaybe<Scalars['Int']['input']>;
  incomingAddress?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** ConversationOnBehalf -> Deprecated */
  onBehalfOf?: InputMaybe<Scalars['String']['input']>;
  outgoingAddress?: InputMaybe<Scalars['String']['input']>;
  outgoingAddressType?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  /** ConversationOnBehalf */
  senderName?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<SiteIdentifierInput>;
  smtpHost?: InputMaybe<Scalars['String']['input']>;
  smtpPort?: InputMaybe<Scalars['Int']['input']>;
  sslRequired?: InputMaybe<Scalars['Boolean']['input']>;
  techGroup?: InputMaybe<TechnicianGroupIdentifierInput>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateNotificationTemplateInfoInput = {
  dataCondition?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  templateType: NotificationTemplateType;
};

export type UpdateOrganizationInput = {
  accountId: Scalars['ID']['input'];
  addEmailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  deleteEmailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** It is applicable only for company. */
  details?: InputMaybe<OrganizationDetailsInput>;
  hqSite?: InputMaybe<UpdateSiteInput>;
  logoFileName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  primaryContact?: InputMaybe<UserIdentifierInput>;
  secondaryContact?: InputMaybe<UserIdentifierInput>;
};

export type UpdatePaymentMethodsInput = {
  addPaymentMethods?: InputMaybe<Array<InputMaybe<PaymentMethodInput>>>;
  deletePaymentMethods?: InputMaybe<Array<InputMaybe<PaymentMethodIdentifierInput>>>;
  updatePaymentMethods?: InputMaybe<Array<InputMaybe<PaymentMethodInput>>>;
};

export type UpdatePaymentTermInput = {
  addPaymentTerms?: InputMaybe<Array<InputMaybe<PaymentTermInput>>>;
  deletePaymentTerms?: InputMaybe<Array<InputMaybe<PaymentTermIdentifierInput>>>;
  updatePaymentTerms?: InputMaybe<Array<InputMaybe<PaymentTermInput>>>;
};

export type UpdatePlaceholderTemplateInput = {
  constant?: InputMaybe<PlaceholderTemplateConstant>;
  content?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  placeholdersUsed?: InputMaybe<Scalars['JSON']['input']>;
  templateId?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePlanInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  addFeatures?: InputMaybe<Array<InputMaybe<CreatePlanProductFeatureInput>>>;
  deleteFeatures?: InputMaybe<Array<InputMaybe<PlanProductFeatureIdentifierInput>>>;
  planId: Scalars['ID']['input'];
  updateFeatures?: InputMaybe<Array<InputMaybe<UpdatePlanProductFeatureInput>>>;
  upgradePlanId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdatePlanProductFeatureInput = {
  available?: InputMaybe<Scalars['Boolean']['input']>;
  availableWithAddOn?: InputMaybe<Scalars['Boolean']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  enabledInTrial?: InputMaybe<Scalars['Boolean']['input']>;
  enabledWithFlag?: InputMaybe<Scalars['Boolean']['input']>;
  planProductFeatureId: Scalars['ID']['input'];
  upsellAddon?: InputMaybe<AddonIdentifierInput>;
  upsellPlan?: InputMaybe<PlanIdentifierInput>;
};

export type UpdatePortalDomainInput = {
  domainId: Scalars['String']['input'];
  domainName: Scalars['String']['input'];
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<DomainType>;
};

export type UpdateProductFeatureCategoryInput = {
  categoryId: Scalars['ID']['input'];
  labelKey?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  parentCategoryId?: InputMaybe<Scalars['ID']['input']>;
  releaseState?: InputMaybe<ProductFeatureReleaseState>;
};

export type UpdateProductFeatureInput = {
  category?: InputMaybe<ProductFeatureCategoryIdentifierInput>;
  featureId: Scalars['String']['input'];
  labelKey?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  releaseState?: InputMaybe<ProductFeatureReleaseState>;
  visibleInPurchase?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateProvisionRuleInput = {
  addItems?: InputMaybe<Array<ServiceCatalogItemIdentifierInput>>;
  deleteItems?: InputMaybe<Array<ServiceCatalogItemIdentifierInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentRule?: InputMaybe<ProvisionRuleIdentifierInput>;
  provisionRuleId: Scalars['ID']['input'];
  ruleCondition?: InputMaybe<RuleConditionInput>;
};

export type UpdateProvisionRuleTemplateLayoutInput = {
  layout: Scalars['JSON']['input'];
  template: BillingTemplateIdentifierInput;
};

export type UpdatePurchaseSubscriptionStatusInput = {
  /** either SUCCESS/CANCEL */
  status?: InputMaybe<OperationStatus>;
};

export type UpdateQuoteInput = {
  addItems?: InputMaybe<Array<InputMaybe<CreateQuoteItemInput>>>;
  additionalDiscount?: InputMaybe<Scalars['String']['input']>;
  additionalDiscountRate?: InputMaybe<Scalars['String']['input']>;
  conversation?: InputMaybe<ConversationInput>;
  deleteItems?: InputMaybe<Array<InputMaybe<QuoteItemIdentifierInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  expiryDate?: InputMaybe<Scalars['String']['input']>;
  footer?: InputMaybe<Scalars['String']['input']>;
  inlineImages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  memo?: InputMaybe<Scalars['String']['input']>;
  quoteDate?: InputMaybe<Scalars['String']['input']>;
  quoteId: Scalars['ID']['input'];
  statusEnum?: InputMaybe<QuoteStatusEnum>;
  title?: InputMaybe<Scalars['String']['input']>;
  updateItems?: InputMaybe<Array<InputMaybe<UpdateQuoteItemInput>>>;
};

export type UpdateQuoteItemInput = {
  details?: InputMaybe<Scalars['String']['input']>;
  discountAmount?: InputMaybe<Scalars['String']['input']>;
  discountRate?: InputMaybe<Scalars['String']['input']>;
  itemId: Scalars['ID']['input'];
  itemOrder?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['String']['input']>;
  serviceCatalogItem?: InputMaybe<ServiceCatalogItemIdentifierInput>;
  serviceItem?: InputMaybe<ServiceItemInput>;
  tax?: InputMaybe<TaxInput>;
  taxable?: InputMaybe<Scalars['Boolean']['input']>;
  unitPrice?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateQuoteTemplateInput = {
  footer?: InputMaybe<Scalars['String']['input']>;
  inlineImages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  layoutConfiguration?: InputMaybe<Scalars['JSON']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  templateId: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRedeemableServiceBundleInput = {
  applicableHours?: InputMaybe<RedeemableBundleApplicableHours>;
  applicableType?: InputMaybe<RedeemableBundleApplicableType>;
  redeemableQuantity?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateReportScheduleInput = {
  addShareUsers?: InputMaybe<Array<InputMaybe<ShareReportUserInput>>>;
  deleteShareUsers?: InputMaybe<Array<InputMaybe<ShareReportUserInput>>>;
  filterCondition?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  notificationTemplate?: InputMaybe<NotificationTemplateInput>;
  scheduleDefinition?: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateSequenceGeneratorInput = {
  name: IdentifierName;
  value: Scalars['Int']['input'];
};

export type UpdateServiceCatalogItemInput = {
  category?: InputMaybe<ServiceCategoryInput>;
  costPrice?: InputMaybe<PricingModelInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  itemId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  offerAsWorklogItem?: InputMaybe<Scalars['Boolean']['input']>;
  salesTax?: InputMaybe<TaxIdentifierInput>;
  sellingPrice?: InputMaybe<PricingModelInput>;
  serviceTypeItem?: InputMaybe<UpdateServiceTypeItemInput>;
  taxable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateServiceTypeItemInput = {
  addBundledItems?: InputMaybe<Array<ServiceCatalogItemIdentifierInput>>;
  deleteBundledItems?: InputMaybe<Array<ServiceCatalogItemIdentifierInput>>;
  hourlyServiceTypeItem?: InputMaybe<UpdateHourlyServiceTypeItemInput>;
  redeemableServiceBundle?: InputMaybe<UpdateRedeemableServiceBundleInput>;
};

export type UpdateSiteInput = {
  address?: InputMaybe<AddressInput>;
  businessHour?: InputMaybe<Array<InputMaybe<BusinessHourInput>>>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  holidayList?: InputMaybe<HolidayListInputIdentifierInput>;
  hq?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  timezoneCode?: InputMaybe<Scalars['String']['input']>;
  working24x7?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateTpMappingRuleInput = {
  conditionAttribute: Scalars['String']['input'];
  conditionValue: MappingObjectInput;
  destination: MappingObjectInput;
  ruleId: Scalars['ID']['input'];
};

export type UpdateUserAssociationInput = {
  client?: InputMaybe<ClientIdentifierInput>;
  id: Scalars['ID']['input'];
  organization?: InputMaybe<OrganizationIdentifierInput>;
  site?: InputMaybe<SiteIdentifierInput>;
};

export type UpdateVendorConversationReadStatusInput = {
  /** parent conversation */
  conversation: ConversationIdentifierInput;
  status: Scalars['Boolean']['input'];
  workItem: WorkItemIdentifierInput;
};

export type UpdateWebhookSubscriptionInput = {
  addEvents?: InputMaybe<Array<WebhookSubscriptionEventInput>>;
  deleteEvents?: InputMaybe<Array<WebhookSubscriptionEventInput>>;
  description?: InputMaybe<Scalars['String']['input']>;
  headers?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<WebhookSubscriptionStatusInput>;
  webhookSubscriptionId: Scalars['ID']['input'];
  webhookUrl?: InputMaybe<Scalars['String']['input']>;
};

export type Urgency = {
  __typename?: 'Urgency';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type UsageContract = {
  __typename?: 'UsageContract';
  contractId: Scalars['ID']['output'];
  costPrice?: Maybe<PricingModel>;
  integrationSource: IntegrationSource;
};

export type User = {
  __typename?: 'User';
  account?: Maybe<Account>;
  accountType?: Maybe<Scalars['String']['output']>;
  /** deprecated */
  activated?: Maybe<Scalars['Boolean']['output']>;
  /** MailStatus */
  activationMailFailureReason?: Maybe<Scalars['JSON']['output']>;
  /** It will be return while creating an client user to indicate whether activation mail has been sent or not */
  activationMailSent?: Maybe<Scalars['Boolean']['output']>;
  /** MailDeliveryStatus enum values */
  activationMailStatus?: Maybe<Scalars['String']['output']>;
  /** This user association is only for requester */
  associations?: Maybe<Array<Maybe<UserAssociation>>>;
  authenticated?: Maybe<Scalars['Boolean']['output']>;
  avatarFileName?: Maybe<Scalars['String']['output']>;
  businessFunction?: Maybe<BusinessFunction>;
  calendarIntegrated?: Maybe<Scalars['Boolean']['output']>;
  chargeBeePlanId?: Maybe<Scalars['String']['output']>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  contactType?: Maybe<Scalars['Int']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  customFields?: Maybe<Scalars['JSON']['output']>;
  customer?: Maybe<CustomerDetail>;
  customerId?: Maybe<Scalars['String']['output']>;
  deletedTime?: Maybe<Scalars['String']['output']>;
  designation?: Maybe<Designation>;
  domain?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailSignature?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  forgotten?: Maybe<Scalars['Boolean']['output']>;
  groups?: Maybe<Array<Maybe<Group>>>;
  lastName?: Maybe<Scalars['String']['output']>;
  loginRequired?: Maybe<Scalars['Boolean']['output']>;
  mspLogoFileName?: Maybe<Scalars['String']['output']>;
  /** Deprecated use activationMailStatus */
  mspName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  operationalStatus?: Maybe<UserOperationalStatus>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  planName?: Maybe<Scalars['String']['output']>;
  remoteDesktopAddOnEnabledStatus?: Maybe<Scalars['JSON']['output']>;
  reportingManager?: Maybe<User>;
  role?: Maybe<Role>;
  roles?: Maybe<Array<Maybe<Role>>>;
  site?: Maybe<Site>;
  splashtopWFHEnabled?: Maybe<Scalars['Boolean']['output']>;
  subscriptionStatus?: Maybe<Scalars['String']['output']>;
  team?: Maybe<Team>;
  techRoleType?: Maybe<RoleTypeEnum>;
  technicianBurnRate?: Maybe<Scalars['String']['output']>;
  /** SubscriptionStatus */
  trialExpiryDays?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['ID']['output']>;
};


export type UserCustomFieldsArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UserAssociation = {
  __typename?: 'UserAssociation';
  client?: Maybe<Organization>;
  id: Scalars['ID']['output'];
  org?: Maybe<Organization>;
  site?: Maybe<Site>;
  user?: Maybe<User>;
};

export type UserAssociationIdentifierInput = {
  id: Scalars['ID']['input'];
};

export type UserAssociationList = {
  __typename?: 'UserAssociationList';
  associations?: Maybe<Array<Maybe<UserAssociation>>>;
  listInfo?: Maybe<ListInfo>;
};

export type UserBackupCode = {
  __typename?: 'UserBackupCode';
  backupCode?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['String']['output']>;
};

export type UserEmailAddressAvailability = {
  __typename?: 'UserEmailAddressAvailability';
  status?: Maybe<User_Email_Validation_Status>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type UserIdentifierInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UserInput = {
  activated?: InputMaybe<Scalars['Boolean']['input']>;
  /** Requester Association */
  addAssociations?: InputMaybe<Array<InputMaybe<CreateUserAssociationInput>>>;
  addGroups?: InputMaybe<Array<InputMaybe<GroupInput>>>;
  businessFunction?: InputMaybe<BusinessFunctionInput>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  contactType?: InputMaybe<Scalars['Int']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  deleteAssociations?: InputMaybe<Array<InputMaybe<UserAssociationIdentifierInput>>>;
  deleteGroups?: InputMaybe<Array<InputMaybe<GroupInput>>>;
  designation?: InputMaybe<DesignationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailSignature?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** deprecated */
  loginRequired?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  reportingManager?: InputMaybe<UserInput>;
  role?: InputMaybe<RoleInput>;
  roles?: InputMaybe<Array<InputMaybe<RoleInput>>>;
  sendActivationMail?: InputMaybe<Scalars['Boolean']['input']>;
  site?: InputMaybe<SiteInput>;
  team?: InputMaybe<TeamInput>;
  technicianBurnRate?: InputMaybe<Scalars['String']['input']>;
  updateAssociations?: InputMaybe<Array<InputMaybe<UpdateUserAssociationInput>>>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UserList = {
  __typename?: 'UserList';
  listInfo?: Maybe<ListInfo>;
  userList?: Maybe<Array<Maybe<User>>>;
};

export enum UserOperationalStatus {
  Active = 'ACTIVE',
  UnLicensed = 'UN_LICENSED'
}

export type UserPersonalization = {
  __typename?: 'UserPersonalization';
  category?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type UserPersonalizationInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserInput>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UserSessionDeviceInfoInput = {
  appType?: InputMaybe<SessionAppType>;
  appVersion?: InputMaybe<Scalars['String']['input']>;
  deviceFCMId: Scalars['String']['input'];
  deviceIdentifier?: InputMaybe<Scalars['String']['input']>;
};

export type UserTfaDetail = {
  __typename?: 'UserTfaDetail';
  /** TFA_TYPE */
  authenticatorSecretKey?: Maybe<Scalars['String']['output']>;
  tfaType?: Maybe<Scalars['String']['output']>;
};

export enum UserType {
  Requester = 'REQUESTER',
  Technician = 'TECHNICIAN'
}

export type ValidateAchAccountInput = {
  deposit1?: InputMaybe<Scalars['String']['input']>;
  deposit2?: InputMaybe<Scalars['String']['input']>;
  descriptorCode?: InputMaybe<Scalars['String']['input']>;
  paymentMethodId: Scalars['ID']['input'];
};

export type VendorsInput = {
  accountNumber?: InputMaybe<Scalars['String']['input']>;
  contactCountryCode?: InputMaybe<Scalars['Int']['input']>;
  contactEmail?: InputMaybe<Scalars['String']['input']>;
  contactName?: InputMaybe<Scalars['String']['input']>;
  contactPhNo?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orgName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  sla?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type VerifyCustomMailServerConnectionInput = {
  boxId?: InputMaybe<Scalars['ID']['input']>;
  imapHost: Scalars['String']['input'];
  imapPort: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  outgoingAddress: Scalars['String']['input'];
  password: Scalars['String']['input'];
  smtpHost: Scalars['String']['input'];
  smtpPort: Scalars['Int']['input'];
  sslRequired: Scalars['Boolean']['input'];
  userName: Scalars['String']['input'];
};

export type VerifyMailProviderConnectionInput = {
  boxId?: InputMaybe<Scalars['ID']['input']>;
  customServerProvider: Scalars['String']['input'];
  imapHost: Scalars['String']['input'];
  imapPort: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  outgoingAddress: Scalars['String']['input'];
  password: Scalars['String']['input'];
  smtpHost: Scalars['String']['input'];
  smtpPort: Scalars['Int']['input'];
  sslRequired: Scalars['Boolean']['input'];
  userName: Scalars['String']['input'];
};

export type WebhookSubscription = {
  __typename?: 'WebhookSubscription';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<Maybe<WebhookSubscriptionEvent>>>;
  headers?: Maybe<Scalars['JSON']['output']>;
  signingSecret: Scalars['String']['output'];
  status: WebhookSubscriptionStatus;
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<User>;
  webhookSubscriptionId: Scalars['ID']['output'];
  webhookUrl: Scalars['String']['output'];
};

export type WebhookSubscriptionEvent = {
  __typename?: 'WebhookSubscriptionEvent';
  eventType: EventType;
};

export type WebhookSubscriptionEventInput = {
  eventType: EventType;
};

export type WebhookSubscriptionIdentifierInput = {
  webhookSubscriptionId: Scalars['ID']['input'];
};

export type WebhookSubscriptionList = {
  __typename?: 'WebhookSubscriptionList';
  listInfo?: Maybe<ListInfo>;
  webhookSubscriptions?: Maybe<Array<Maybe<WebhookSubscription>>>;
};

export enum WebhookSubscriptionStatus {
  Disabled = 'DISABLED',
  DisabledBySystem = 'DISABLED_BY_SYSTEM',
  Enabled = 'ENABLED'
}

export enum WebhookSubscriptionStatusInput {
  Disabled = 'DISABLED',
  Enabled = 'ENABLED'
}

export type WorkItem = {
  __typename?: 'WorkItem';
  /** WorkModule */
  client?: Maybe<Organization>;
  displayId: Scalars['String']['output'];
  module: Scalars['String']['output'];
  /** If the module is 'PROJECT', then this field will contains the project specific fields. */
  project?: Maybe<Project>;
  site?: Maybe<Site>;
  subject?: Maybe<Scalars['String']['output']>;
  /** If the module is TICKET, this field used to fetch the ticket specific properties */
  ticket?: Maybe<Ticket>;
  workId: Scalars['ID']['output'];
};

export type WorkItemIdentifierInput = {
  module: Scalars['String']['input'];
  workId: Scalars['ID']['input'];
};

export type WorkStation = AssetBase & {
  __typename?: 'WorkStation';
  agentVersion?: Maybe<Scalars['String']['output']>;
  assetAge?: Maybe<Scalars['Int']['output']>;
  assetClass?: Maybe<AssetClass>;
  assetId?: Maybe<Scalars['ID']['output']>;
  assetMake?: Maybe<AssetMake>;
  assetModel?: Maybe<AssetModel>;
  assetProtocolMapping?: Maybe<Array<Maybe<AssetProtocolMapping>>>;
  /** AssetPlatformCategory */
  associatedAssets?: Maybe<Scalars['JSON']['output']>;
  biosInstallDate?: Maybe<Scalars['String']['output']>;
  biosVersion?: Maybe<Scalars['String']['output']>;
  bitLockerStatus?: Maybe<Scalars['String']['output']>;
  /** AdvanceRuleBuilder */
  categoryAssignedStrategy?: Maybe<PolicyCategoryAssignedBy>;
  chocolateyInstalled?: Maybe<Scalars['Boolean']['output']>;
  client?: Maybe<Organization>;
  customFields?: Maybe<Scalars['JSON']['output']>;
  cwcIntegrated?: Maybe<Scalars['Boolean']['output']>;
  department?: Maybe<BusinessFunction>;
  domain?: Maybe<Scalars['String']['output']>;
  domainFirewall?: Maybe<Scalars['Boolean']['output']>;
  gateway?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use IPAsset.hostName */
  hostName?: Maybe<Scalars['String']['output']>;
  isMetricDataAvailable?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use IPAsset.isProbe */
  isProbe?: Maybe<Scalars['Boolean']['output']>;
  islIntegrated?: Maybe<Scalars['Boolean']['output']>;
  lastCommunicatedTime?: Maybe<Scalars['String']['output']>;
  lastMetricDataTime?: Maybe<Scalars['String']['output']>;
  lastReportedTime?: Maybe<Scalars['String']['output']>;
  loggedInUser?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use IPAsset.make.name */
  manufacturer?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use IPAsset.model.name */
  model?: Maybe<Scalars['String']['output']>;
  monitoringStatus?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nextPolicyCategory?: Maybe<PolicyCategory>;
  osInstallDate?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<User>;
  patchStatus?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  platformCategory?: Maybe<Scalars['String']['output']>;
  platformFamily?: Maybe<Scalars['String']['output']>;
  platformVersion?: Maybe<Scalars['String']['output']>;
  policyCategory?: Maybe<PolicyCategory>;
  /** @deprecated Use IPAsset.publicIpAddress */
  primaryIp?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use IPAsset.macAddress */
  primaryMac?: Maybe<Scalars['String']['output']>;
  privateFirewall?: Maybe<Scalars['Boolean']['output']>;
  privateIp?: Maybe<Scalars['String']['output']>;
  publicFirewall?: Maybe<Scalars['Boolean']['output']>;
  purchasedDate?: Maybe<Scalars['String']['output']>;
  rebootCause?: Maybe<Scalars['JSON']['output']>;
  rebootNeeded?: Maybe<Scalars['Boolean']['output']>;
  registeredTime?: Maybe<Scalars['String']['output']>;
  remoteDesktopEnabledStatus?: Maybe<Scalars['JSON']['output']>;
  serialKey?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use IPAsset.serialNumber */
  serialNumber?: Maybe<Scalars['String']['output']>;
  site?: Maybe<Site>;
  splashtopIntegrated?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use IPAsset.status */
  status?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use IPAsset.sysUptime */
  sysUptime?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  teamViewerIntegrated?: Maybe<Scalars['Boolean']['output']>;
  timeZone?: Maybe<Scalars['String']['output']>;
  warrantyExpiry?: Maybe<Scalars['Int']['output']>;
  warrantyExpiryDate?: Maybe<Scalars['String']['output']>;
};


export type WorkStationAssociatedAssetsArgs = {
  refEntityAttributes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type WorkStationCustomFieldsArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type WorkStationInfo = {
  __typename?: 'WorkStationInfo';
  assetUserLoggedIn?: Maybe<Array<Maybe<AssetUserLoggedIn>>>;
  cwcIntegrated?: Maybe<Scalars['Boolean']['output']>;
  islIntegrated?: Maybe<Scalars['Boolean']['output']>;
  remoteDesktopEnabledStatus?: Maybe<Scalars['JSON']['output']>;
  splashtopIntegrated?: Maybe<Scalars['Boolean']['output']>;
  teamViewerIntegrated?: Maybe<Scalars['Boolean']['output']>;
};

export type Worklog = {
  __typename?: 'Worklog';
  client?: Maybe<Organization>;
  createdTime?: Maybe<Scalars['String']['output']>;
  module?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  project?: Maybe<Project>;
  site?: Maybe<Site>;
  technician: User;
  ticket?: Maybe<Ticket>;
  worklogDate?: Maybe<Scalars['String']['output']>;
  worklogId: Scalars['ID']['output'];
  worklogItems?: Maybe<Array<Maybe<WorklogItem>>>;
};

export type WorklogItem = {
  __typename?: 'WorklogItem';
  afterHours?: Maybe<Scalars['Boolean']['output']>;
  /** OfferedItemAuditStatus */
  billable?: Maybe<Scalars['Boolean']['output']>;
  itemId: Scalars['ID']['output'];
  qty: Scalars['String']['output'];
  serviceItem?: Maybe<ServiceItem>;
  status?: Maybe<Scalars['String']['output']>;
  worklog?: Maybe<Worklog>;
};

export type XeroAccount = {
  __typename?: 'XeroAccount';
  accountId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BlockItemInfo = {
  __typename?: 'blockItemInfo';
  balance?: Maybe<Scalars['String']['output']>;
  blockItemId?: Maybe<Scalars['ID']['output']>;
};

export type ParentDetailsDto = {
  __typename?: 'parentDetailsDTO';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tpItemId?: Maybe<Scalars['String']['output']>;
  tpItemLabel?: Maybe<Scalars['String']['output']>;
};

export type GetAllEmployeesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllEmployeesQuery = { __typename?: 'Query', getAllEmployees?: Array<{ __typename?: 'User', userId?: string | null, name?: string | null, email?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: any | null, designation?: { __typename?: 'Designation', designationId: string, name?: string | null } | null, team?: { __typename?: 'Team', teamId: string, name?: string | null } | null } | null> | null };

export type GetAllMailboxesQueryVariables = Exact<{
  isClientMailbox: Scalars['Boolean']['input'];
  isMSPProduct: Scalars['Boolean']['input'];
}>;


export type GetAllMailboxesQuery = { __typename?: 'Query', getMailboxes?: Array<{ __typename?: 'Mailbox', boxId: string, type: string, systemBox?: boolean | null, incomingAddress?: string | null, outgoingAddress?: string | null, customServer?: boolean | null, customServerType?: CustomMailServerType | null, customServerOutgoingOnly?: boolean | null, imapHost?: string | null, userName?: string | null, imapPort?: number | null, smtpHost?: string | null, smtpPort?: number | null, sslRequired?: boolean | null, customServerAccountSyncState?: CustomMailServerAccountSyncState | null, outgoingAddressType: string, outgoingDomainVerified?: boolean | null, onBehalfOf?: string | null, senderName?: string | null, emailSignature?: string | null, hasAdvancedConfiguration?: boolean | null, defaultBox?: boolean | null, name?: string | null, description?: string | null, mailProviderConfigs?: Array<{ __typename?: 'MailProviderConfig', providerConfigId: string, customServerProvider?: string | null, imapHost?: string | null } | null> | null, senderConfiguration?: { __typename?: 'MailSenderConfiguration', verificationRecords?: Array<{ __typename?: 'MailConfigurationRecord', recordType?: string | null, host: string, value?: string | null } | null> | null } | null, client?: { __typename?: 'Organization', accountId: string, name?: string | null } | null, site?: { __typename?: 'Site', id: string, name: string } | null, techGroup?: { __typename?: 'Group', groupId: string, name?: string | null } | null } | null> | null };


export const GetAllEmployeesDocument = gql`
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
export const GetAllMailboxesDocument = gql`
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

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetAllEmployees(variables?: GetAllEmployeesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllEmployeesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllEmployeesQuery>(GetAllEmployeesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllEmployees', 'query', variables);
    },
    GetAllMailboxes(variables: GetAllMailboxesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllMailboxesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllMailboxesQuery>(GetAllMailboxesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllMailboxes', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;