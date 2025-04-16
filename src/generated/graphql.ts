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

/** Specifies an alert's data */
export type Alert = {
  __typename?: 'Alert';
  /** The asset that the alert is associated to */
  asset?: Maybe<Scalars['JSON']['output']>;
  /** The time of creation of the alert */
  createdTime?: Maybe<Scalars['String']['output']>;
  /** The alert's description */
  description?: Maybe<Scalars['String']['output']>;
  /** ID of the alert */
  id?: Maybe<Scalars['ID']['output']>;
  /** The alert message */
  message?: Maybe<Scalars['String']['output']>;
  /** The policy through which the alert is created */
  policy?: Maybe<Scalars['JSON']['output']>;
  /** The severity of the alert */
  severity?: Maybe<Scalars['String']['output']>;
  /** The alert's status */
  status?: Maybe<Scalars['String']['output']>;
};

/** The list of data for Alert details. */
export type AlertList = {
  __typename?: 'AlertList';
  /** Data about the list of alerts. */
  alerts?: Maybe<Array<Maybe<Alert>>>;
  /** Details about the list. */
  listInfo?: Maybe<ListInfo>;
};

/** Specifies the asset's data. */
export type Asset = {
  __typename?: 'Asset';
  /** The asset's SuperOps.ai agent version */
  agentVersion?: Maybe<Scalars['String']['output']>;
  /** Asset class details of the asset */
  assetClass: Scalars['JSON']['output'];
  /** ID of the asset */
  assetId?: Maybe<Scalars['ID']['output']>;
  /** Client details of the asset */
  client: Scalars['JSON']['output'];
  /** Custom field details of the asset */
  customFields?: Maybe<Scalars['JSON']['output']>;
  /** The Device Category of the asset */
  deviceCategory?: Maybe<Scalars['JSON']['output']>;
  /** The domain of the asset */
  domain?: Maybe<Scalars['String']['output']>;
  /** Gateway of the asset */
  gateway?: Maybe<Scalars['String']['output']>;
  /** Hostname of the asset */
  hostName?: Maybe<Scalars['String']['output']>;
  /** The last communicated time of the asset to SuperOps.ai */
  lastCommunicatedTime?: Maybe<Scalars['String']['output']>;
  /** The last reported time of the asset to SuperOps.ai */
  lastReportedTime?: Maybe<Scalars['String']['output']>;
  /** The asset's current logged-in user */
  loggedInUser?: Maybe<Scalars['String']['output']>;
  /** Manufacturer of the asset */
  manufacturer?: Maybe<Scalars['String']['output']>;
  /** Model of the asset */
  model?: Maybe<Scalars['String']['output']>;
  /** Name of the asset */
  name: Scalars['String']['output'];
  /** The patch status of the asset */
  patchStatus?: Maybe<Scalars['String']['output']>;
  /** The platform of the asset */
  platform?: Maybe<Scalars['String']['output']>;
  /** The platform category of the asset */
  platformCategory?: Maybe<Scalars['String']['output']>;
  /** The platform family of the asset */
  platformFamily?: Maybe<Scalars['String']['output']>;
  /** The platform version of the asset */
  platformVersion?: Maybe<Scalars['String']['output']>;
  /** Primary mac address of the asset */
  primaryMac?: Maybe<Scalars['String']['output']>;
  /** The public IP of the asset */
  publicIp?: Maybe<Scalars['String']['output']>;
  /** The Purchased Date of the Asset */
  purchasedDate?: Maybe<Scalars['String']['output']>;
  /** The requester of the asset */
  requester: Scalars['JSON']['output'];
  /** Serial number of the asset */
  serialNumber?: Maybe<Scalars['String']['output']>;
  /** Site details of the asset */
  site: Scalars['JSON']['output'];
  /** ONLINE/ OFFLINE Status of the asset */
  status?: Maybe<Scalars['String']['output']>;
  /** System uptime of the asset */
  sysUptime?: Maybe<Scalars['String']['output']>;
  /** The Warranty Expiration Date of the Asset */
  warrantyExpiryDate?: Maybe<Scalars['String']['output']>;
};


/** Specifies the asset's data. */
export type AssetCustomFieldsArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies the activity data of an asset. */
export type AssetActivityData = {
  __typename?: 'AssetActivityData';
  /** The activity's data */
  activityData?: Maybe<Scalars['JSON']['output']>;
  /** The ID of the activity data */
  activityId?: Maybe<Scalars['ID']['output']>;
  /** The type of the activity */
  activityType?: Maybe<Scalars['String']['output']>;
  /** Specifies the user that triggered the activity */
  createdBy?: Maybe<Scalars['JSON']['output']>;
  /** The time of creation of the activity */
  createdTime?: Maybe<Scalars['String']['output']>;
  /** The module name of the activity */
  module?: Maybe<Scalars['String']['output']>;
};

/** Specifies the Response of AssetActivity */
export type AssetActivityList = {
  __typename?: 'AssetActivityList';
  /** Specifies the list of activities on the asset. */
  activities?: Maybe<Array<Maybe<AssetActivityData>>>;
  /** Details about the list. */
  listInfo?: Maybe<ListInfo>;
};

/** Specifies the CPU Details */
export type AssetCpu = {
  __typename?: 'AssetCPU';
  /** Specifies the CPU's architecture. */
  architecture?: Maybe<Scalars['String']['output']>;
  /** The ID of the asset */
  assetId: Scalars['ID']['output'];
  /** Specifies the asset's CPU name. */
  cpuName?: Maybe<Scalars['String']['output']>;
  /** specifies the asset's current CPU usage. */
  cpuUsage?: Maybe<Scalars['JSON']['output']>;
  /** Specifies the current CPU speed of the asset. */
  currentSpeed?: Maybe<Scalars['JSON']['output']>;
  /** Specifies the total number of handles of the CPU. */
  handlesCount?: Maybe<Scalars['String']['output']>;
  /** Specifies the details of the L1 cache. */
  l1Cache?: Maybe<Scalars['JSON']['output']>;
  /** Specifies the Details of the L2 cache. */
  l2Cache?: Maybe<Scalars['JSON']['output']>;
  /** Specifies the Details of the L3 cache. */
  l3Cache?: Maybe<Scalars['JSON']['output']>;
  /** Specifies the logical core count of the CPU. */
  logicalCore?: Maybe<Scalars['Int']['output']>;
  /** Specifies the maximum CPU speed of the asset. */
  maxSpeed?: Maybe<Scalars['JSON']['output']>;
  /** Specifies the physical core count of the CPU. */
  physicalCore?: Maybe<Scalars['Int']['output']>;
  /** Specifies the total number of processes. */
  processCount?: Maybe<Scalars['String']['output']>;
  /** Specifies the total thread count of the CPU. */
  threadsCount?: Maybe<Scalars['String']['output']>;
};

/** Specifies the input required to fetch asset details */
export type AssetDetailsListInput = {
  /** The ID of the asset. */
  assetId: Scalars['ID']['input'];
  /** Specifies the input required to fetch multiple records. */
  listInfo?: InputMaybe<ListInfoInput>;
};

/** Specifies the data in each partition */
export type AssetDisk = {
  __typename?: 'AssetDisk';
  /** Specifies the disk's active time */
  activeTime?: Maybe<Scalars['JSON']['output']>;
  /** Specifies whether the partition is autoMounted */
  autoMounted?: Maybe<Scalars['Boolean']['output']>;
  /** Specifies whether the partition is compressed */
  compressed?: Maybe<Scalars['Boolean']['output']>;
  /** Disk type of the partition Ex:"Local Disk" */
  discType?: Maybe<Scalars['String']['output']>;
  /** Name of the disk partition Ex:"c:" */
  drive?: Maybe<Scalars['String']['output']>;
  /** Specifies the drive usage of the partition drive */
  driveUsage?: Maybe<Scalars['JSON']['output']>;
  /** Type of file system Ex: "NTFS" */
  fileSystem?: Maybe<Scalars['String']['output']>;
  /** Free size available in the partition */
  freeSize?: Maybe<Scalars['JSON']['output']>;
  /** Specifies whether the partition is indexed */
  indexed?: Maybe<Scalars['Boolean']['output']>;
  /** Specifies that maximum file size length in the partition */
  maxFileLength?: Maybe<Scalars['Int']['output']>;
  /** Specifies whether pagefile is enabled in the partition */
  pageFile?: Maybe<Scalars['Boolean']['output']>;
  /** Specifies the reading speed of the partition */
  readSpeed?: Maybe<Scalars['JSON']['output']>;
  /** Specifies the response time of the partition */
  responseTime?: Maybe<Scalars['JSON']['output']>;
  /** Total space allocated to the partition */
  size?: Maybe<Scalars['JSON']['output']>;
  /** Specifies the writing speed of the partition */
  writeSpeed?: Maybe<Scalars['JSON']['output']>;
};

/** Specifies the identifier input for the asset. */
export type AssetIdentifierInput = {
  /** The ID of the asset. */
  assetId: Scalars['ID']['input'];
};

/** Specifies the primary network interface's details */
export type AssetInterface = {
  __typename?: 'AssetInterface';
  /** Specifies the adapter name Ex:Intel(R) PRO/1000 MT Desktop Adapter */
  adapterName?: Maybe<Scalars['String']['output']>;
  /** Specifies the connection type Ex: Ethernet 802.3 */
  connectType?: Maybe<Scalars['String']['output']>;
  /** Specifies the interface data in per sec */
  dataInPerSec?: Maybe<Scalars['JSON']['output']>;
  /** Specifies the interface data out per sec */
  dataOutPerSec?: Maybe<Scalars['JSON']['output']>;
  /** Specifies the unique identifying number associated with a physical or logical interface */
  infIndex?: Maybe<Scalars['Int']['output']>;
  /** Specifies ipv4 address of the interface */
  ipv4Address?: Maybe<Scalars['String']['output']>;
  /** Specifies ipv6 address of the interface */
  ipv6Address?: Maybe<Scalars['String']['output']>;
  /** Specifies the line speed of the interface */
  lineSpeed?: Maybe<Scalars['JSON']['output']>;
  /** Specifies the mac address of the interface */
  mac?: Maybe<Scalars['String']['output']>;
  /** Size of the maximum transmission unit of the interface */
  mtu?: Maybe<Scalars['String']['output']>;
  /** Specifies the interface name Ex: Ethernet */
  name?: Maybe<Scalars['String']['output']>;
};

/** The list of data for asset details. */
export type AssetList = {
  __typename?: 'AssetList';
  /** The list of assets. */
  assets?: Maybe<Array<Maybe<Asset>>>;
  /** Details about the list. */
  listInfo?: Maybe<ListInfo>;
};

/** Specifies the memory details of the asset */
export type AssetMemory = {
  __typename?: 'AssetMemory';
  /** Specifies the available memory in the asset */
  availableMemory?: Maybe<Scalars['JSON']['output']>;
  /** Specifies the asset's cache memory details */
  cachedMemory?: Maybe<Scalars['JSON']['output']>;
  /** Specifies how much memory was used (in %) */
  memoryUsage?: Maybe<Scalars['JSON']['output']>;
  /** Specifies the nonPagedPoolByte size */
  nonPagedPoolByte?: Maybe<Scalars['JSON']['output']>;
  /** Specifies the pagedPoolByte size */
  pagedPoolByte?: Maybe<Scalars['JSON']['output']>;
  /** Specifies the available swap memory */
  swapAvailableMemory?: Maybe<Scalars['JSON']['output']>;
  /** Specifies the total swap memory */
  swapTotalMemory?: Maybe<Scalars['JSON']['output']>;
  /** Specifies the used swap memory */
  swapUsedMemory?: Maybe<Scalars['JSON']['output']>;
  /** Specifies the asset's total memory */
  totalMemory?: Maybe<Scalars['JSON']['output']>;
  /** Specifies the used memory in the asset */
  usedMemory?: Maybe<Scalars['JSON']['output']>;
};

/** Specifies the patch list data */
export type AssetPatchList = {
  __typename?: 'AssetPatchList';
  /** Specifies the list of asset patch details */
  assetPatches?: Maybe<Array<Maybe<PatchData>>>;
  /** The detail about the list. */
  listInfo?: Maybe<ListInfo>;
};

/** Specifies the asset software details */
export type AssetSoftware = {
  __typename?: 'AssetSoftware';
  /** Bit version of the software */
  bitVersion?: Maybe<Scalars['String']['output']>;
  /** The ID of the Software Inventory */
  id?: Maybe<Scalars['ID']['output']>;
  /** Installed date of the software */
  installedDate?: Maybe<Scalars['String']['output']>;
  /** Installed path of the software */
  installedPath?: Maybe<Scalars['String']['output']>;
  /** Specifies the details about the software */
  software?: Maybe<Scalars['JSON']['output']>;
  /** Version of the software */
  version?: Maybe<Scalars['String']['output']>;
};

/** Specifies the asset software list data */
export type AssetSoftwareList = {
  __typename?: 'AssetSoftwareList';
  /** Specifies the list of asset softwares */
  assetSoftwares?: Maybe<Array<Maybe<AssetSoftware>>>;
  /** The detail about the list. */
  listInfo?: Maybe<ListInfo>;
};

/** Specifies the Summary Details of Asset including CPU,Memory,disk,netinterface,userlog */
export type AssetSummary = {
  __typename?: 'AssetSummary';
  /** specifies the interface details of the Asset */
  assetInterface?: Maybe<AssetInterface>;
  /** specifies the cpu details of the Asset */
  cpu?: Maybe<AssetCpu>;
  /** specifies the disk details of the Asset */
  disk?: Maybe<Disks>;
  /** user logs details of the Asset */
  lastUserLog?: Maybe<AssetUserLog>;
  /** specifies the memory details of the Asset */
  memory?: Maybe<AssetMemory>;
};

/** Specifies an asset's user log details */
export type AssetUserLog = {
  __typename?: 'AssetUserLog';
  /** Specifies the ID of the user log record */
  id?: Maybe<Scalars['ID']['output']>;
  /** Specifies the last logged-in time of the user */
  lastLoginTime?: Maybe<Scalars['String']['output']>;
  /** Specifies the user who last logged in to the asset */
  name?: Maybe<Scalars['String']['output']>;
};

/** The attachment. */
export type Attachment = {
  __typename?: 'Attachment';
  /** The sanitized file name. */
  fileName: Scalars['String']['output'];
  /** The file size. */
  fileSize: Scalars['String']['output'];
  /** The original file name. */
  originalFileName: Scalars['String']['output'];
};

/** Specifies the usage type of the block item. */
export enum Block_Item_Usage_Type {
  /** Denotes that the usage type is set to all hours. */
  AllHours = 'ALL_HOURS',
  /** Denotes that the usage type is set to business hours. */
  BusinessHours = 'BUSINESS_HOURS'
}

/** Specifies the billable contract. */
export type BillableContract = {
  __typename?: 'BillableContract';
  /** The billable site type of the contract. */
  billableSiteType: BillableSiteType;
  /** The block item balance details. */
  blockItemsInfo?: Maybe<Array<Maybe<BlockItemInfo>>>;
  /** The contract quantity change list. */
  changes?: Maybe<Array<BillableContractQuantityChange>>;
  /** The charge item associated with the contract. */
  chargeItem: Scalars['JSON']['output'];
  /** The ID of the contract. */
  contractId: Scalars['ID']['output'];
  /** The discount rate applied to the contract. */
  discountRate?: Maybe<Scalars['String']['output']>;
  /** The contract's frequency type. */
  frequencyType: ContractFrequencyType;
  /** The items included in the contract. */
  includedItems?: Maybe<Array<Scalars['JSON']['output']>>;
  /** The perpetual contract details. */
  perpetualContract?: Maybe<PerpetualContract>;
  /** The project assoicated with the contract. */
  project?: Maybe<Scalars['JSON']['output']>;
  /** The provision rule associated with the contract if the contracts quantity calculation type is 'DYNAMIC'. */
  provisionRule?: Maybe<Scalars['JSON']['output']>;
  /** The contract's quantity calculation type. */
  quantityCalculationType: ContractQuantityCalculationType;
  /** The recurring contract details. */
  recurringContract?: Maybe<RecurringContract>;
  /** The redeemable contract details. */
  redeemableContract?: Maybe<RedeemableContract>;
  /** The selling price of the contract. */
  sellingPrice?: Maybe<PricingModel>;
  /** The contract's selling price calculation type. */
  sellingPriceCalculationType: ContractSellingPriceCalculationType;
  /** Indicates whether the selling price is overridden. */
  sellingPriceOverridden?: Maybe<Scalars['Boolean']['output']>;
  /** The billable sites mentioned in the contract when the billable site type is 'INCLUDED'. */
  sites?: Maybe<Array<Scalars['JSON']['output']>>;
};

/** Specifies the contract quantity change. */
export type BillableContractQuantityChange = {
  __typename?: 'BillableContractQuantityChange';
  /** The ID of the contract quantity change. */
  changeId: Scalars['ID']['output'];
  /** The effective date for the contract quantity change. */
  effectiveDate?: Maybe<Scalars['String']['output']>;
  /** The end date for the contract quantity change. */
  endDate?: Maybe<Scalars['String']['output']>;
  /** The quantity of the billable contract. */
  quantity?: Maybe<Scalars['String']['output']>;
  /** The quantity change operation of the contract. */
  quantityChangeOperation: BillableContractQuantityChangeOperation;
};

/** Specifies the input required for a contract quantity change. */
export type BillableContractQuantityChangeInput = {
  /** The quantity change id of the billable contract. */
  changeId?: InputMaybe<Scalars['ID']['input']>;
  /** The effective date of the billable contract. */
  effectiveDate?: InputMaybe<Scalars['String']['input']>;
  /** The quantity of the billable contract. */
  quantity?: InputMaybe<Scalars['String']['input']>;
  /** The quantity change operation date of the billable contract. */
  quantityChangeOperation?: InputMaybe<BillableContractQuantityChangeOperation>;
};

/** Specifies the quantity change operation for a billable contract. */
export enum BillableContractQuantityChangeOperation {
  /** Indicates the initial quantity value for the contract. */
  Baseline = 'BASELINE',
  /** Indicates that the contract's quantity has decreased. */
  Decrease = 'DECREASE',
  /** Indicates that the contract's quantity has increased. */
  Increase = 'INCREASE'
}

/** Specifies the type of billable site for the contract. */
export enum BillableSiteType {
  /** Indicates the contract will be billed to all the client sites. */
  All = 'ALL',
  /** Indicates the contract will be billed to client's headquarters. */
  Hq = 'HQ',
  /** Indicates the contract will be billed to the specified client sites. */
  Included = 'INCLUDED'
}

/** Specifies the block item balance information. */
export type BlockItemInfo = {
  __typename?: 'BlockItemInfo';
  /** Specifies the block item balance. */
  balance?: Maybe<Scalars['String']['output']>;
  /** The ID of the block item. */
  blockItemId?: Maybe<Scalars['ID']['output']>;
};

/** Business function of the technician. */
export type BusinessFunction = {
  __typename?: 'BusinessFunction';
  /** The ID of the business function. */
  businessFunctionId: Scalars['ID']['output'];
  /** The name of the business function. */
  name: Scalars['String']['output'];
};

/** Specifies the identifier input for the business function. */
export type BusinessFunctionIdentifierInput = {
  /** The ID of the business function. */
  businessFunctionId: Scalars['ID']['input'];
};

/** The operating hours definition. */
export type BusinessHour = {
  __typename?: 'BusinessHour';
  /** The day of the week. */
  day: DayOfWeek;
  /** The end time of the day. */
  end: Scalars['String']['output'];
  /** The start time of the day. */
  start: Scalars['String']['output'];
};

/** The ticket category. */
export type Category = {
  __typename?: 'Category';
  /** The ID of the category. */
  id: Scalars['ID']['output'];
  /** The name of the category. */
  name: Scalars['String']['output'];
  /** The list of subcategories. */
  subCategories?: Maybe<Array<Maybe<SubCategory>>>;
};

/** The ticket cause. */
export type Cause = {
  __typename?: 'Cause';
  /** The ID of the cause. */
  id: Scalars['ID']['output'];
  /** The name of the cause. */
  name: Scalars['String']['output'];
  /** The list of sub causes. */
  subCauses?: Maybe<Array<Maybe<SubCause>>>;
};

/** The MSP's clients. */
export type Client = {
  __typename?: 'Client';
  /** The ID of the client. */
  accountId: Scalars['ID']['output'];
  /**
   * The account manager of the client i.,e the technician who is the point of contact for the client.
   * The actual type of this field is Technician. Returns userId and name fields as JSON.
   * The name, email fields of Technician can be used in the filter condition.
   */
  accountManager?: Maybe<Scalars['JSON']['output']>;
  /** A JSON contains the values for the client custom fields. */
  customFields?: Maybe<Scalars['JSON']['output']>;
  /**
   * The list of email domains (for example, acme.com) of the client. These domains will be used to identify the client
   * when receiving emails from the client user.
   */
  emailDomains?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * The headquarters/main site of the client. The headquarters site is mandatory, it is recommended to update the headquarters
   * site for the client after creation.
   * The actual type of this field is ClientSite. Returns id, name fields as JSON.
   */
  hqSite?: Maybe<Scalars['JSON']['output']>;
  /** The name of the client. */
  name: Scalars['String']['output'];
  /**
   * The primary contact of the client. The primary contact is mandatory, it is recommended to update primary contact
   * for the client after creation.
   * The actual type of this field is ClientUser. Returns userId and name fields as JSON.
   * The name, email fields of ClientUser can be used in the filter condition.
   */
  primaryContact?: Maybe<Scalars['JSON']['output']>;
  /**
   * The secondary contact of the client.
   * The actual type of this field is ClientUser. Returns userId and name fields as JSON.
   * The name, email fields of ClientUser can be used in the filter condition.
   */
  secondaryContact?: Maybe<Scalars['JSON']['output']>;
  /** The stage of the client. */
  stage: Scalars['String']['output'];
  /** The status of the client. */
  status?: Maybe<Scalars['String']['output']>;
  /**
   * The list of technician groups associated to the client.
   * The actual type of this field is TechnicianGroup. Returns array of object as JSON, each object contains groupId and name fields.
   */
  technicianGroups?: Maybe<Scalars['JSON']['output']>;
};


/** The MSP's clients. */
export type ClientCustomFieldsArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies the client contract. */
export type ClientContract = {
  __typename?: 'ClientContract';
  /** The client associated with the contract. */
  client: Scalars['JSON']['output'];
  /** Details of the contract. */
  contract: Contract;
  /** The ID of the contract. */
  contractId?: Maybe<Scalars['ID']['output']>;
  /** The status of the client contract. */
  contractStatus: ClientContractStatus;
  /** The end date of the client contract. */
  endDate?: Maybe<Scalars['String']['output']>;
  /** The start date of the cleint contract. */
  startDate: Scalars['String']['output'];
};

/** Specifies the client contract list. */
export type ClientContractList = {
  __typename?: 'ClientContractList';
  /** The list of client contracts. */
  clientContracts?: Maybe<Array<ClientContract>>;
  /** Details about the list. */
  listInfo?: Maybe<ListInfo>;
};

/** Specifies the status of a client contract. */
export enum ClientContractStatus {
  /** Indicates that the client contract is currently active and in effect. */
  Active = 'ACTIVE',
  /** Indicates that the client contract is in draft state. This could mean the start date is in the future or the contract hasn't been billed yet. */
  Draft = 'DRAFT',
  /** Indicates that the client contract is inactive and not in effect. */
  Inactive = 'INACTIVE'
}

/** Specifies the identifier input for the client. */
export type ClientIdentifierInput = {
  /** The ID of the client. */
  accountId: Scalars['ID']['input'];
};

/** The response payload for list of clients fetched. */
export type ClientList = {
  __typename?: 'ClientList';
  /** The list of clients. */
  clients?: Maybe<Array<Maybe<Client>>>;
  /** The detail about the list. */
  listInfo?: Maybe<ListInfo>;
};

/** The site of a client. */
export type ClientSite = {
  __typename?: 'ClientSite';
  /** The operation hours of the site. */
  businessHour?: Maybe<Array<Maybe<BusinessHour>>>;
  /** The city of the site. */
  city?: Maybe<Scalars['String']['output']>;
  /** The client to which this site belongs to. */
  client: Scalars['JSON']['output'];
  /** The contact number of the site. */
  contactNumber?: Maybe<Scalars['String']['output']>;
  /** The country of the site. */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** The holiday list of the site. */
  holidayList?: Maybe<HolidayList>;
  /** The ID of the site. */
  id: Scalars['ID']['output'];
  /** The agent Installer Details */
  installerInfo?: Maybe<Array<Maybe<InstallerDetails>>>;
  /** The address line 1 of the site. */
  line1?: Maybe<Scalars['String']['output']>;
  /** The address line 2 of the site. */
  line2?: Maybe<Scalars['String']['output']>;
  /** The address line 3 of the site. */
  line3?: Maybe<Scalars['String']['output']>;
  /** The name of the site. */
  name: Scalars['String']['output'];
  /** The postal code of the site. */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** The state/subdivision of the site. */
  stateCode?: Maybe<Scalars['String']['output']>;
  /** The timezone of the site. */
  timezoneCode: Scalars['String']['output'];
  /** Denotes whether the site has specific business hours or works 24x7. */
  working24x7: Scalars['Boolean']['output'];
};

/** Specifies the identifier input for the client site. */
export type ClientSiteIdentifierInput = {
  /** The ID of the client site. */
  id: Scalars['ID']['input'];
};

/** The response payload for list of client sites fetched. */
export type ClientSiteList = {
  __typename?: 'ClientSiteList';
  /** The detail about the list. */
  listInfo?: Maybe<ListInfo>;
  /** The list of sites. */
  sites?: Maybe<Array<Maybe<ClientSite>>>;
};

/** The stage of the client. */
export type ClientStage = {
  __typename?: 'ClientStage';
  /** The system-generated unique name to identify the default client stages provided by the system. */
  constant?: Maybe<Scalars['String']['output']>;
  /** The name of the client stage. */
  name: Scalars['String']['output'];
  /** The ID of the client stage. */
  stageId: Scalars['ID']['output'];
  /** The list of client statuses of the client stage. */
  statuses?: Maybe<Array<Maybe<ClientStatus>>>;
};

/** The status of the client. */
export type ClientStatus = {
  __typename?: 'ClientStatus';
  /** The system-generated unique name to identify the default client statuses provided by the system. */
  constant?: Maybe<Scalars['String']['output']>;
  /** The name of the client status. */
  name?: Maybe<Scalars['String']['output']>;
  /** The ID of the client status. */
  statusId: Scalars['ID']['output'];
};

/** The client user ie. requester. */
export type ClientUser = {
  __typename?: 'ClientUser';
  /**
   * The client to which this requester belongs to.
   * The actual type of this field is Client. This field returns accountId and name fields as JSON.
   * The name field can be used in the filter condition.
   * @deprecated As a client user can now be associated to multiple clients.
   */
  client?: Maybe<Scalars['JSON']['output']>;
  /**
   * The contact number of the client user.
   * It is recommended to provide the value in the standard format [+][country code][area code][local phone number].
   */
  contactNumber?: Maybe<Scalars['String']['output']>;
  /**
   * Specifies the custom fields values for the client user. Each entry in the JSON would be key-value.
   * The key will be a system-generated, unique name of the custom field (columnName field of CustomField type).
   * The value for text, paragraph, radio, select, numeric, decimal, date, datetime should be given as a string.
   * The value for checkbox, multi-select should be an array of string.
   *
   * For example, the value could be {"udf1text": "value", "udf2mselect": ["value1", "value2"]}
   */
  customFields?: Maybe<Scalars['JSON']['output']>;
  /** The email address of the client user. */
  email: Scalars['String']['output'];
  /** The first name of the client user. */
  firstName: Scalars['String']['output'];
  /** The last name of the client user. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** The full name of the client user. */
  name: Scalars['String']['output'];
  /**
   * The reporting manager of the client user.
   * The actual type of this field is ClientUser. This field returns userId and name fields as JSON.
   * The name and email fields can be used in the filter condition.
   */
  reportingManager?: Maybe<Scalars['JSON']['output']>;
  /**
   * The application role of the client user.
   * The actual type of this field is Role. This field returns roleId and name fields as JSON.
   * The name field can be used in the filter condition.
   */
  role: Scalars['JSON']['output'];
  /**
   * The site to which the client user is associated.
   * The actual type of this field is ClientSite. This field returns id and name fields as JSON.
   * The name field can be used in the filter condition.
   * @deprecated As a client user can now be associated to multiple clients.
   */
  site?: Maybe<Scalars['JSON']['output']>;
  /** The ID of the client user. */
  userId: Scalars['ID']['output'];
};


/** The client user ie. requester. */
export type ClientUserCustomFieldsArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * All the clients and sites associated with a client user.
 * A client user can have one or more associations.
 */
export type ClientUserAssociation = {
  __typename?: 'ClientUserAssociation';
  /** The client to which the client user is associated. */
  client: Client;
  /** The ID of the association. */
  id: Scalars['ID']['output'];
  /** The site to which the client user is associated. */
  site: ClientSite;
  /** The client user. */
  user: ClientUser;
};

/** Specifies the identifier input for the client user association. */
export type ClientUserAssociationIdentifierInput = {
  /** Specifies the ID of the requester association. */
  id: Scalars['ID']['input'];
};

/** The response payload for the list of client user associations. */
export type ClientUserAssociationList = {
  __typename?: 'ClientUserAssociationList';
  /** The list of client user associations. */
  associations?: Maybe<Array<Maybe<ClientUserAssociation>>>;
  /** Information about the list of associations. */
  listInfo?: Maybe<ListInfo>;
};

/** Specifies the identifier input for the client user. */
export type ClientUserIdentifierInput = {
  /** The ID of the client user. */
  userId: Scalars['ID']['input'];
};

/** The response payload for list of client users fetched. */
export type ClientUserList = {
  __typename?: 'ClientUserList';
  /** The detail about the list. */
  listInfo?: Maybe<ListInfo>;
  /** The list of client users. */
  userList?: Maybe<Array<Maybe<ClientUser>>>;
};

/** Specifies the contract. */
export type Contract = {
  __typename?: 'Contract';
  /** The billable contract details. */
  billableContract?: Maybe<BillableContract>;
  /** The ID of the contract. */
  contractId: Scalars['ID']['output'];
  /** The contract's type. */
  contractType: ContractType;
  /** The description of the contract. */
  description?: Maybe<Scalars['String']['output']>;
  /** The name of the contract. */
  name?: Maybe<Scalars['String']['output']>;
};

/** Specifies the frequency type of the contract. */
export enum ContractFrequencyType {
  /** Indicates the contract's frequency type is 'ONCE'. */
  Once = 'ONCE',
  /** Indicates the contract's frequency type is 'PERPETUAL'. */
  Perpetual = 'PERPETUAL',
  /** Indicates the contract's frequency type is 'RECURRING'. */
  Recurring = 'RECURRING'
}

/** Specifies the identifier input for contract. */
export type ContractIdentifierInput = {
  /** The ID of the contract. */
  contractId: Scalars['ID']['input'];
};

/** Specifies the quantity calculation type for the contract. */
export enum ContractQuantityCalculationType {
  /** Indicates the quantity calculation type is 'DYNAMIC'. */
  Dynamic = 'DYNAMIC',
  /** Indicates the quantity calculation type is 'FIXED'. */
  Fixed = 'FIXED'
}

/** Specifies how the selling price of the contract is calculated. */
export enum ContractSellingPriceCalculationType {
  /** Indicates the selling price calculation type is 'DYNAMIC'. */
  Dynamic = 'DYNAMIC',
  /** Indicates the selling price calculation type is 'FIXED'. */
  Fixed = 'FIXED'
}

/** Specifies the type of client contract. */
export enum ContractType {
  OneTime = 'ONE_TIME',
  Service = 'SERVICE',
  TimeAndMaterial = 'TIME_AND_MATERIAL',
  Usage = 'USAGE'
}

export type CreateAlertInput = {
  /** ID of the Asset */
  assetId: Scalars['ID']['input'];
  /** The alert's description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The alert message */
  message: Scalars['String']['input'];
  /** The severity of the alert */
  severity?: InputMaybe<Scalars['String']['input']>;
};

/** Specifies the input required to create an attachment. */
export type CreateAttachmentInput = {
  /**
   * The name of the file.
   * This input is mandatory.
   */
  fileName: Scalars['String']['input'];
  /**
   * The size of the file.
   * This input is mandatory.
   */
  fileSize: Scalars['String']['input'];
  /**
   * The original file name of the file.
   * This input is mandatory.
   */
  originalFileName: Scalars['String']['input'];
};

/** Specifies the input required to create a billable contract. */
export type CreateBillableContractInput = {
  /** The sites to be billable for the contract if the billable site type is 'INCLUDED'. */
  addSites?: InputMaybe<Array<ClientSiteIdentifierInput>>;
  /** The billable site type for the contract. */
  billableSiteType: BillableSiteType;
  /** Specifies the billable contract quantity change input details. This input is mandatory. */
  change: BillableContractQuantityChangeInput;
  /** Specifies the charge item to be associated with the billable contract. This input is mandatory. */
  chargeItem: ServiceCatalogItemIdentifierInput;
  /** The discount rate input for the contract. */
  discountRate?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the recurring contract input details. This input is mandatory. */
  recurringContract: RecurringContractInput;
  /** The selling price of the contract, applicable if the price is overridden. */
  sellingPrice?: InputMaybe<PricingModelInput>;
  /** Indicates whether the contract's selling price is overridden. */
  sellingPriceOverridden: Scalars['Boolean']['input'];
};

/** Specifies the input to create business hours. */
export type CreateBusinessHourInput = {
  /**
   * The day of the week.
   * This input is mandatory.
   */
  day: DayOfWeek;
  /**
   * The end time of the day. The value should be in the format of HH:MM i.,e between 00:00 to 23:59.
   * This input is mandatory.
   */
  end: Scalars['String']['input'];
  /**
   * The start time of the day. The value should be in the format of HH:MM i.,e between 00:00 to 23:59.
   * This input is mandatory.
   */
  start: Scalars['String']['input'];
};

/** Specifies the input required to create a new ticket category. */
export type CreateCategoryInput = {
  /** Specifies the input to create subcategories. */
  addSubCategories?: InputMaybe<Array<InputMaybe<CreateSubCategoryInput>>>;
  /**
   * Specifies the name of the category.
   * This input should be mandatory and unique.
   */
  name: Scalars['String']['input'];
};

/** Specifies the input create ticket cause. */
export type CreateCauseInput = {
  /** Specifies the input to create sub causes. */
  addSubCauses?: InputMaybe<Array<InputMaybe<CreateSubCauseInput>>>;
  /** Specifies the name of the cause. */
  name: Scalars['String']['input'];
};

/** Specifies the input required to create a client contract. */
export type CreateClientContractInput = {
  /** Specifies the client to be associated with the contract. */
  client: ClientIdentifierInput;
  /** Specifies the contract input details. */
  contract: CreateContractInput;
  /** Specifies the contract's end date. */
  endDate?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the contract's start date. */
  startDate: Scalars['String']['input'];
};

/**
 * Specifies the input required to create a new client.
 * @deprecated(reason: "Use 'CreateClientInputV2' input instead.")
 */
export type CreateClientInput = {
  /** Specifies the account manager of the client. */
  accountManager?: InputMaybe<TechnicianIdentifierInput>;
  /** Specifies the list of technician groups to be associated to the client. */
  addTechnicianGroups?: InputMaybe<Array<InputMaybe<TechnicianGroupIdentifierInput>>>;
  /**
   * Specifies the custom field values for the client. Each entry in the JSON would be key-value.
   * The key will be a system-generated unique name of the custom field (columnName field of CustomField type).
   * The value for text, paragraph, radio, select, numeric, decimal, date, datetime should be given as a string.
   * The value for checkbox, multi-select should be an array of string.
   *
   * For example, the value could be {"udf1text": "value", "udf2mselect": ["value1", "value2"]}
   */
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  /**
   * Specifies the list of email domains (for example, acme.com) of the client. These domains will be used to identify the client
   * when receiving emails from the client user. This input must be unique.
   */
  emailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * Specifies the name of the client.
   * This input should be mandatory and unique.
   */
  name: Scalars['String']['input'];
  /** Specifies the stage of the client. The stage will be set to Active if not specified. */
  stage?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the status of the client. The status will be set to Paid if not specified. */
  status?: InputMaybe<Scalars['String']['input']>;
};

/** Specifies the input required to create a new client. */
export type CreateClientInputV2 = {
  /** Specifies the account manager of the client. */
  accountManager?: InputMaybe<TechnicianIdentifierInput>;
  /** Specifies the list of technician groups to be associated to the client. */
  addTechnicianGroups?: InputMaybe<Array<InputMaybe<TechnicianGroupIdentifierInput>>>;
  /**
   * Specifies the custom field values for the client. Each entry in the JSON would be key-value.
   * The key will be a system-generated unique name of the custom field (columnName field of CustomField type).
   * The value for text, paragraph, radio, select, numeric, decimal, date, datetime should be given as a string.
   * The value for checkbox, multi-select should be an array of string.
   *
   * For example, the value could be {"udf1text": "value", "udf2mselect": ["value1", "value2"]}
   */
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  /**
   * Specifies the list of email domains (for example, acme.com) of the client. These domains will be used to identify the client
   * when receiving emails from the client user. This input must be unique.
   */
  emailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specifies the headquarters site of the client. */
  hqSite: CreateClientSiteInput;
  /**
   * Specifies the name of the client.
   * This input should be mandatory and unique.
   */
  name: Scalars['String']['input'];
  /** Specifies the stage of the client. The stage will be set to Active if not specified. */
  stage?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the status of the client. The status will be set to Paid if not specified. */
  status?: InputMaybe<Scalars['String']['input']>;
};

/** Specifies the input required to create a client site. */
export type CreateClientSiteInput = {
  /** Specifies the business hours of the site if working 24x7 is false. */
  businessHour?: InputMaybe<Array<InputMaybe<CreateBusinessHourInput>>>;
  /** Specifies the city of the site. */
  city?: InputMaybe<Scalars['String']['input']>;
  /**
   * Specifies the client identifier input for the site to be created.
   * When CreateClientSiteInput is used as part of a new client creation, this field is not mandatory; otherwise, it is required.
   */
  client?: InputMaybe<ClientIdentifierInput>;
  /** The contact number of the site. */
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the country of the site. The value should be specified as ISO 3166 two letter country code. */
  countryCode?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the holiday list of the site. */
  holidayList?: InputMaybe<HolidayListIdentifierInput>;
  /** Specifies the address line 1 of the site. */
  line1?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the address line 2 of the site. */
  line2?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the address line 3 of the site. */
  line3?: InputMaybe<Scalars['String']['input']>;
  /** The name of the site. This input is mandatory. */
  name: Scalars['String']['input'];
  /** Specifies the postal code of the site. */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the state/subdivision of the site. The value should be specified as an ISO 3166 state/subdivision code. */
  stateCode?: InputMaybe<Scalars['String']['input']>;
  /**
   * Specifies the site's timezone. The value should be provided using the IANA time zone database format (e.g., America/New_York).
   * This input is mandatory.
   */
  timezoneCode: Scalars['String']['input'];
  /** Specifies whether the site has specific business hours or works 24x7. This input is mandatory. */
  working24x7: Scalars['Boolean']['input'];
};

/** Specifies the input required to create a user association. */
export type CreateClientUserAssociationInput = {
  /** Specifies the client which will be associated to the client user. */
  client: ClientIdentifierInput;
  /** Specifies the client site that will be associated to the client user. */
  site: ClientSiteIdentifierInput;
  /**
   * Specifies the requester who will be associated.
   * This attribute is optional when creating a new client user.
   */
  user?: InputMaybe<ClientUserIdentifierInput>;
};

/** Specifies the input required to create client user. */
export type CreateClientUserInput = {
  /** Specifies the associated clients and sites. The user attribute is optional when creating a new client user. */
  addAssociations?: InputMaybe<Array<InputMaybe<CreateClientUserAssociationInput>>>;
  /** Specifies the client identifier input to which the client user is going to be created. This input is mandatory. */
  client?: InputMaybe<ClientIdentifierInput>;
  /**
   * Specifies the contact number of the client user.
   * It is recommended to provide the value in the standard format [+][country code][area code][local phone number].
   */
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  /**
   * Specifies the custom fields values for the client user. Each entry in the JSON would be key-value.
   * The key will be a system-generated, unique name of the custom field (columnName field of CustomField type).
   * The value for text, paragraph, radio, select, numeric, decimal, date, datetime should be given as a string.
   * The value for checkbox, multi-select should be an array of string.
   *
   * For example, the value could be {"udf1text": "value", "udf2mselect": ["value1", "value2"]}
   */
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  /**
   * Specifies the email address of the client user which is unique across the technicians and client users. The email will be used for login.
   * This input should be mandatory and unique.
   */
  email: Scalars['String']['input'];
  /**
   * Specifies the first name of the client user.
   * This input is mandatory.
   */
  firstName: Scalars['String']['input'];
  /** Specifies the last name of the client user. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the reporting manager identifier input for the client user. */
  reportingManager?: InputMaybe<ClientUserIdentifierInput>;
  /** Specifies the application role identifier input for the client user. This input is mandatory. */
  role: RoleIdentifierInput;
  /** Specifies the site identifier input to which the client user is going to be created. This input is mandatory. */
  site?: InputMaybe<ClientSiteIdentifierInput>;
};

/** Specifies the input required to create a contract. */
export type CreateContractInput = {
  /** Specifies the billable contract input details. */
  billableContract: CreateBillableContractInput;
  /** Specifies the description of the contract. */
  description?: InputMaybe<Scalars['String']['input']>;
};

/** Specifies the input to create a custom filed. */
export type CreateCustomFieldInput = {
  /** Specifies the description of the custom field. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the type of the custom field. */
  fieldType: CustomFieldType;
  /**
   * Specifies the label of the custom field.
   * This input should be mandatory and unique.
   */
  label: Scalars['String']['input'];
  /** Specifies the options for select/radio/checkbox/multi select field. */
  options?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * Specifies whether the custom filed is visible for the client.
   * This input is mandatory.
   */
  showToClient: Scalars['Boolean']['input'];
};

/** Specifies the input required to create a field for an entity */
export type CreateFieldInput = {
  /** This is for denoting the options for the field */
  addOptions?: InputMaybe<Array<InputMaybe<CreateFieldOptionInput>>>;
  /** The description of the field */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The type of the field */
  fieldType: CustomFieldType;
  /** The label of the field */
  label: Scalars['String']['input'];
  /** This is for fields of TICKET module whether the field valu e is mandatory when ticket is closed or resolved */
  mandatoryOnClosure?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is for fields of TICKET module whether the field value is mandatory when ticket is created */
  mandatoryOnCreate?: InputMaybe<Scalars['Boolean']['input']>;
  /** The module of the field i.e. TICKET, COMPANY_USER */
  module: Scalars['String']['input'];
  /** This denotes the id of the parent field */
  parentField?: InputMaybe<IdentifierInput>;
  /** The field which denotes whether field should be visible to requesters or not */
  showToRequester?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies the field options input */
export type CreateFieldOptionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  order: Scalars['Int']['input'];
  parentOption?: InputMaybe<IdentifierInput>;
  value: Scalars['String']['input'];
};

/** Input for details in a for a HOURS SERVICE item */
export type CreateHourlyServiceTypeItemInput = {
  /** Value to which a time spent is rounded up to */
  roundUpValue: Scalars['Int']['input'];
};

/** Specifies the input required to create a new IT Document Record */
export type CreateItDocumentationInput = {
  /** Client details of the IT document record */
  client?: InputMaybe<ClientIdentifierInput>;
  /** Custom field details of the IT document record */
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  /** Name of the IT document */
  name: Scalars['String']['input'];
  /** Site details of the IT document record */
  site?: InputMaybe<ClientSiteIdentifierInput>;
  /** Specifies the type ID of IT document category to create a new IT document */
  typeId: Scalars['ID']['input'];
};

/** Specifies the input required to create a quote. */
export type CreateQuoteInput = {
  /** Specifies the list of service items to be added to the quote. */
  addItems: Array<InputMaybe<CreateQuoteItemInput>>;
  /** Specifies the additional discount amount applied on the quote. */
  additionalDiscount?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the additional discount rate applied on the quote. */
  additionalDiscountRate?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the client to which the quote belongs to. */
  client: ClientIdentifierInput;
  /** Specifies the description of the quote. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the expiry date of the quote. */
  expiryDate: Scalars['String']['input'];
  /** Specifies the footer of the quote. */
  footer?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the memo of the quote. */
  memo?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the quote date. */
  quoteDate?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the site to which the quote belongs to. */
  site: ClientSiteIdentifierInput;
  /** Specifies the status of the quote. */
  statusEnum: QuoteStatusEnum;
  /** Specifies the title of the quote. */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Specifies the input required to create a quote item. */
export type CreateQuoteItemInput = {
  /** Specifies the details of the quote item. */
  details?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the discount amount applied for the quote item. */
  discountAmount?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the discount rate applied for the quote item. */
  discountRate?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the quantity of the quote item. */
  quantity: Scalars['String']['input'];
  /** Specifies the service item. */
  serviceItem: ServiceItemIdentifierInput;
  /** Specifies the applicable tax for the quote item. */
  tax?: InputMaybe<TaxIdentifierInput>;
  /** Specifies whether the quote item is taxable or not. */
  taxable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specifies the unit price of the quote item. */
  unitPrice: Scalars['String']['input'];
};

/** Input for Retainer */
export type CreateRedeemableServiceBundleInput = {
  /** Can a retainer be consumed in business hours, after hours and all hours */
  applicableHours: RedeemableBundleApplicableHours;
  /** Can a retainer be consumed by all items or items specified under it */
  applicableType: RedeemableBundleApplicableType;
  /** Amount that can be consumed by the items under this item */
  redeemableQuantity: Scalars['String']['input'];
};

/** Specifies a input for service catalog item */
export type CreateServiceCatalogItemInput = {
  /** Category under which the item is created. */
  category?: InputMaybe<ServiceCategoryIdentifierInput>;
  /** The cost price when item is purchased */
  costPrice?: InputMaybe<PricingModelInput>;
  /** Description of the item which can be used in invoice */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Type of an Item */
  itemType: ServiceCatalogItemType;
  /** Name of the item. must be unique in the list */
  name: Scalars['String']['input'];
  /** Set to true to offer this item in worklog */
  offerAsWorklogItem?: InputMaybe<Scalars['Boolean']['input']>;
  /** Tax to be set for this item */
  salesTax?: InputMaybe<TaxIdentifierInput>;
  /** Price at which item is offered to a client */
  sellingPrice?: InputMaybe<PricingModelInput>;
  /** Details needed for a SERVICE type item */
  serviceTypeItem?: InputMaybe<CreateServiceTypeItemInput>;
  /** Set to true to apply tax for this item */
  taxable: Scalars['Boolean']['input'];
};

/** Specifies the input for the service category. */
export type CreateServiceCategoryInput = {
  /** The name of the category. */
  name: Scalars['String']['input'];
};

/** Specifies the input for the service item. */
export type CreateServiceItemInput = {
  /** The list of identifier input for BlockItem. */
  addBlockItemAdjustedItems?: InputMaybe<Array<InputMaybe<ServiceItemIdentifierInput>>>;
  /** Denotes whether the service item is adjusted against all items. */
  adjustBlockItemAgainstAllItems?: InputMaybe<Scalars['Boolean']['input']>;
  /** The unit price of the service item for after-hours. */
  afterHoursUnitPrice?: InputMaybe<Scalars['String']['input']>;
  /** The amount of the service item. */
  amount?: InputMaybe<Scalars['String']['input']>;
  /** Denotes the usage type of the service item. */
  blockItemUsedIn?: InputMaybe<Block_Item_Usage_Type>;
  /** The unit price of the service item for business hours. */
  businessHoursUnitPrice?: InputMaybe<Scalars['String']['input']>;
  /** The category of the service item. */
  category?: InputMaybe<ServiceCategoryIdentifierInput>;
  /** A short description of the service item. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The name of the service item. */
  name: Scalars['String']['input'];
  /** Denotes the quantity of the service item. */
  quantity?: InputMaybe<Scalars['String']['input']>;
  /** The type of service item. */
  quantityType: ServiceItemQuantityType;
  /** The rounded value of the service item. */
  roundUpValue?: InputMaybe<Scalars['Int']['input']>;
  /** The identifier input for sales tax. */
  salesTax?: InputMaybe<TaxIdentifierInput>;
  /** Denotes whether sales tax is enabled for the service item. */
  salesTaxEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** The unit price of the service item. */
  unitPrice?: InputMaybe<Scalars['String']['input']>;
  /** Denotes whether the service item is a worklog item. */
  useAsWorklogItem?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input details for a SERVICE type item */
export type CreateServiceTypeItemInput = {
  /** Items bundled under this item, used when creating a Package or Retainer */
  addBundledItems?: InputMaybe<Array<ServiceCatalogItemIdentifierInput>>;
  /** input for details needed for a HOURS type SERVICE item */
  hourlyServiceTypeItem?: InputMaybe<CreateHourlyServiceTypeItemInput>;
  /** Denotes type by which a SERVICE item is offered a client */
  offeringType: ServiceTypeItemOfferingType;
  /** Input for details needed for a Retainer item */
  redeemableServiceBundle?: InputMaybe<CreateRedeemableServiceBundleInput>;
};

/** Specifies the input required to create a new ticket status. */
export type CreateStatusInput = {
  /** The description of the status. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The name of the status. */
  name: Scalars['String']['input'];
};

/** Specifies the input required to create a new ticket subcategory. */
export type CreateSubCategoryInput = {
  /**
   * The name of the subcategory.
   * Mandatory and unique within the category.
   */
  name: Scalars['String']['input'];
};

/** Specifies the input to create a sub cause. */
export type CreateSubCauseInput = {
  /** Specifies the description of the cause. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the name of the sub-cause. */
  name: Scalars['String']['input'];
};

/** Specifies the input required to create a task. */
export type CreateTaskInput = {
  /** Specifies the description of the task. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the due datetime of the task. The datetime value should be specified in ISO 8601 format i.e., 2022-08-15T13:15:30 */
  dueDate?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the estimated time of the task in minutes. */
  estimatedTime?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies the entity for which the task is created. */
  module: TaskModule;
  /** Specifies the scheduled start datetime of the task. The datetime value should be specified in ISO 8601 format i.e., 2022-08-15T13:15:30 */
  scheduledStartDate?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the status of the task. The value should be from the WorkStatus (name field) type. */
  status: Scalars['String']['input'];
  /** The Order in which the tasks should be displayed in UI */
  taskOrder?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies the technician group to which the task is assigned. */
  techGroup?: InputMaybe<TechnicianGroupIdentifierInput>;
  /** Specifies the technician to whom the task is assigned. */
  technician?: InputMaybe<TechnicianIdentifierInput>;
  /** Specifies the ticket identifier under which the task is created. This input is mandatory if the module is TICKET. */
  ticket?: InputMaybe<TicketIdentifierInput>;
  /** Specifies the title of the task. This input is mandatory. */
  title: Scalars['String']['input'];
};

/** Specifies the input for the tax. */
export type CreateTaxInput = {
  /** The list of inputs for the tax rate. */
  addRates: Array<InputMaybe<CreateTaxRateInput>>;
  /** The name of the tax. */
  name: Scalars['String']['input'];
};

/** Specifies the inputs for the tax rate. */
export type CreateTaxRateInput = {
  /** The name of the tax rate. */
  name: Scalars['String']['input'];
  /** The value of the tax rate. */
  rateValue: Scalars['String']['input'];
};

/** Specifies the input required to create a new technician. */
export type CreateTechnicianInput = {
  /** Specifies the list of technician groups that the technician will be associated with. */
  addGroups?: InputMaybe<Array<InputMaybe<TechnicianGroupIdentifierInput>>>;
  /** Specifies the business function of the technician. */
  businessFunction?: InputMaybe<BusinessFunctionIdentifierInput>;
  /**
   * The contact number of the technician.
   * It is recommended to provide the value in the standard format [+][country code][area code][local phone number].
   */
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the designation of the technician. */
  designation?: InputMaybe<DesignationIdentifierInput>;
  /**
   * The email address of the technician. This is unique across technicians and client users. The email will be used for login.
   * This input should be mandatory and unique.
   */
  email: Scalars['String']['input'];
  /** The email signature of the technician which will be used in their email responses. */
  emailSignature?: InputMaybe<Scalars['String']['input']>;
  /** The first name of the technician. This input is mandatory. */
  firstName: Scalars['String']['input'];
  /** The last name of the technician. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the technician's reporting manager. */
  reportingManager?: InputMaybe<TechnicianIdentifierInput>;
  /** Specifies the application role of the technician. This input is mandatory. */
  role: RoleIdentifierInput;
  /** Specifies the technician's team. */
  team?: InputMaybe<TeamIdentifierInput>;
};

/** Specifies the input required to create a ticket conversation. */
export type CreateTicketConversationInput = {
  /** Specifies the list of attachments */
  attachments?: InputMaybe<Array<InputMaybe<CreateAttachmentInput>>>;
  /** Specifies the list of BCC recipients. */
  bccUsers?: InputMaybe<Array<InputMaybe<RecipientIdentifierInput>>>;
  /** Specifies the list of CC recipients. */
  ccUsers?: InputMaybe<Array<InputMaybe<RecipientIdentifierInput>>>;
  /** Specifies the conversation content. */
  content?: InputMaybe<Scalars['String']['input']>;
  /**
   * An email will be send for the conversation initiated by the technician.
   * This attribute specifies whether an email need to be send or not.
   */
  sendMail?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specifies the ticket under which the conversation will be created. */
  ticket: TicketIdentifierInput;
  /** Specifies the datetime when the conversation was created. */
  time?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the list of TO recipients. */
  toUsers?: InputMaybe<Array<InputMaybe<RecipientIdentifierInput>>>;
  /**
   * Specifies the third Party Integration source details from
   * which the conversation will be created.
   */
  tpSource?: InputMaybe<ThirdPartySourceInput>;
  /** Specifies the user who creates the conversation. */
  user?: InputMaybe<UserIdentifierInput>;
};

/** Specifies the input required to create a ticket. */
export type CreateTicketInput = {
  /** Specifies the additional requesters to be added. */
  addAdditionalRequester?: InputMaybe<Array<InputMaybe<ClientUserIdentifierInput>>>;
  /** Specifies the assets to be added */
  addAssets?: InputMaybe<Array<InputMaybe<AssetIdentifierInput>>>;
  /** Specifies the followers to be added. */
  addFollowers?: InputMaybe<Array<InputMaybe<TechnicianIdentifierInput>>>;
  /** Specifies the category of the ticket. The value should be from the Category (name field) type. */
  category?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the cause of the ticket. The value should be from the Cause (name field) type. */
  cause?: InputMaybe<Scalars['String']['input']>;
  /**
   * Specifies the client to whom the ticket is associated.
   * This input is mandatory.
   */
  client: ClientIdentifierInput;
  /** Specifies the datetime when the ticket was created. */
  createdTime?: InputMaybe<Scalars['String']['input']>;
  /**
   * Specifies the custom fields values for the ticket. Each entry in the JSON would be a key-value.
   * The key will be a system-generated, unique name of the custom field (columnName field of CustomField type).
   * The value for text, paragraph, radio, select, numeric, decimal, date, datetime should be given as a string.
   * The value for checkbox, multi-select should be an array of string.
   *
   * For example, the value could be {"udf1text": "value", "udf2mselect": ["value1", "value2"]}
   */
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  /** Specifies the description of the ticket. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the description attachments of the ticket. */
  descriptionAttachments?: InputMaybe<Array<InputMaybe<CreateAttachmentInput>>>;
  /** The first response time of the ticket. */
  firstResponseTime?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the impact of the ticket. The value should be from the Impact (name field) type. */
  impact?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the priority of the ticket. The value should be from the Priority (name field) type. */
  priority?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the type of the ticket. */
  requestType?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the requester for whom the ticket is created. */
  requester?: InputMaybe<ClientUserIdentifierInput>;
  /** Specifies the resolution code of the ticket. */
  resolutionCode?: InputMaybe<Scalars['String']['input']>;
  /** The resolution time of the ticket. */
  resolutionTime?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the site to which the ticket is associated. The site of the requester will be assigned by the system if not specified. */
  site?: InputMaybe<ClientSiteIdentifierInput>;
  /** Specifies the SLA of the ticket. */
  sla?: InputMaybe<SlaIdentifierInput>;
  /**
   * Specifies the creation source of the ticket.
   * This input is mandatory.
   */
  source: TicketSource;
  /** Specifies the referenceId of the ticket in the integration the ticket was created from. */
  sourceReferenceId?: InputMaybe<Scalars['String']['input']>;
  /**
   * Specifies the status of the ticket. The value should be from the Status (name field) type.
   * This input is mandatory.
   */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the source with which integration the ticket was created from. */
  subSource?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the subcategory of the ticket. The value should be from the SubCategory (name field) type. */
  subcategory?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the sub-cause of the ticket. The value should be from the SubCause (name field) type. */
  subcause?: InputMaybe<Scalars['String']['input']>;
  /**
   * Specifies the subject of the ticket.
   * This input is mandatory.
   */
  subject: Scalars['String']['input'];
  /** Indicates whether the close notification has to be suppressed while closing the ticket */
  suppressCloseNotification?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specifies the technician group to which the ticket is assigned. */
  techGroup?: InputMaybe<TechnicianGroupIdentifierInput>;
  /** Specifies the technician to whom the ticket is assigned. */
  technician?: InputMaybe<TechnicianIdentifierInput>;
  /**
   * Specifies the type of the ticket.
   * This input is mandatory.
   */
  ticketType?: InputMaybe<Scalars['String']['input']>;
  /**
   * Specifies the third Party Integration source details from
   * which the ticket will be created.
   */
  tpSource?: InputMaybe<ThirdPartySourceInput>;
  /** Specifies the datetime when the ticket was updated. */
  updatedTime?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the urgency of the ticket. The value should be from the Urgency (name field) type. */
  urgency?: InputMaybe<Scalars['String']['input']>;
};

/** Specifies the input to create ticket note. */
export type CreateTicketNoteInput = {
  /** Specifies the technician who created the note. */
  addedBy?: InputMaybe<UserIdentifierInput>;
  /** Specifies the datetime when the note was created. */
  addedOn?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the attachments of the note. */
  attachments?: InputMaybe<Array<InputMaybe<CreateAttachmentInput>>>;
  /** Specifies the content of the note. */
  content: Scalars['String']['input'];
  /** Set to PUBLIC if the note should be shown to the requester; otherwise, set to PRIVATE. The default is PRIVATE. */
  privacyType?: InputMaybe<NotePrivacyType>;
  /** Specifies the ticket under which the note will be created. */
  ticket: TicketIdentifierInput;
};

export type CreateWebhookSubscriptionInput = {
  addEvents: Array<WebhookSubscriptionEventInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  headers?: InputMaybe<Scalars['JSON']['input']>;
  status: WebhookSubscriptionStatusInput;
  webhookUrl: Scalars['String']['input'];
};

export type CreateWorklogEntryInput = {
  /** Denotes whether the service is provided after business hours. */
  afterHours?: InputMaybe<Scalars['Boolean']['input']>;
  /** The datetime of the worklog. */
  billDateTime: Scalars['String']['input'];
  /** Denotes whether the service item is billable or not. */
  billable?: InputMaybe<Scalars['Boolean']['input']>;
  /** The notes of the worklog. */
  notes?: InputMaybe<Scalars['String']['input']>;
  /**
   * The number of offered units/hours.
   * The unit is hours if service item is HOURS type.
   */
  qty: Scalars['String']['input'];
  /** Specifies the service item. */
  serviceItem?: InputMaybe<ServiceItemIdentifierInput>;
  /** Specifies the technician of the worklog. */
  technician?: InputMaybe<TechnicianIdentifierInput>;
  /** The unit price of the worklog item. */
  unitPrice?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the Work identifier under which the worklog is created. */
  workItem: WorkItemIdentifierInput;
};

/** Specifies the input required to create a worklog. */
export type CreateWorklogInput = {
  /** Specifies the list of offered services/items through worklog. */
  addItems?: InputMaybe<Array<InputMaybe<CreateWorklogItemInput>>>;
  /** Specifies the entity for which the task is created. */
  module: WorklogModule;
  /** Specifies the worklog notes. */
  notes?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the task if the worklog will be created under it. */
  task?: InputMaybe<TaskIdentifierInput>;
  /** Specifies the ticket under which the worklog will be created. It is mandatory if the module is TICKET. */
  ticket?: InputMaybe<TicketIdentifierInput>;
  /** Specifies the date of the worklog. */
  worklogDate?: InputMaybe<Scalars['String']['input']>;
};

/** Specifies the offered service/item through worklog. */
export type CreateWorklogItemInput = {
  /** Specifies whether the service is provided after the business hours. */
  afterHours?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specifies whether the offered service/item is billable. */
  billable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specifies the number of offered units/hours. */
  qty?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the service item. */
  serviceItem: ServiceItemIdentifierInput;
};

export type CreateWorklogTimerEntryInput = {
  /** The below fields are applicable only for MANUAL timer. */
  addSegments?: InputMaybe<Array<InputMaybe<CreateWorklogTimerSegmentInput>>>;
  billable?: InputMaybe<Scalars['Boolean']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  serviceItem?: InputMaybe<ServiceItemIdentifierInput>;
  type?: InputMaybe<WorklogTimerType>;
  workItem?: InputMaybe<WorkItemIdentifierInput>;
};

export type CreateWorklogTimerSegmentInput = {
  afterHours: Scalars['Boolean']['input'];
  endTime: Scalars['String']['input'];
  startTime: Scalars['String']['input'];
  timespent: Scalars['String']['input'];
};

/** The custom fields created by the user. */
export type CustomField = {
  __typename?: 'CustomField';
  /** The system-generated name of the custom field. This name is unique and will be used to identify the field. */
  columnName: Scalars['String']['output'];
  /** The description of the custom field. */
  description?: Maybe<Scalars['String']['output']>;
  /** The type of the custom field. */
  fieldType: CustomFieldType;
  /** The ID of custom field. */
  id: Scalars['ID']['output'];
  /** Defines the boolean value, which represents the field must be filled compulsory or not. */
  isMandatory?: Maybe<Scalars['Boolean']['output']>;
  /** The label of the custom field. */
  label: Scalars['String']['output'];
  /** The list of options for select/radio/checkbox/multi select field. */
  options?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Denotes whether the field is visible for the client. */
  showToClient: Scalars['Boolean']['output'];
};

/** Specifies the identifier input for the custom field. */
export type CustomFieldIdentifierInput = {
  /** The ID of the custom field. */
  fieldId: Scalars['ID']['input'];
};

/** The type of the custom field created by the user. */
export enum CustomFieldType {
  /**
   * The checkbox field. The maximum length of an option value is 255 characters.
   * The maximum number of checkbox fields is 64.
   */
  Checkbox = 'CHECKBOX',
  /** The date field. The date value should be specified in the ISO 8601 format i.e., 2022-08-15 */
  Date = 'DATE',
  /** The datetime filed. The datetime value should be specified in the ISO 8601 format i.e., 2022-08-15T13:15:30 */
  Datetime = 'DATETIME',
  /** The decimal number field. The maximum number of digits is 10 and maximum number of digits in the fractional part is 2. */
  Decimal = 'DECIMAL',
  /**
   * The multi select field. The maximum length of an option value is 255 characters.
   * The maximum number of checkbox fields is 64.
   */
  MultiSelect = 'MULTI_SELECT',
  /** The whole number field. The maximum number of digits is 10. */
  Numeric = 'NUMERIC',
  /**
   * The paragraph/multi-line field. The maximum length of the paragraph value is 65,535 characters.
   * The maximum number of paragraph fields is 5.
   */
  Paragraph = 'PARAGRAPH',
  /** The password field. used to store password value. */
  Password = 'PASSWORD',
  /** The radio field. The maximum length of an option value is 255 characters. */
  Radio = 'RADIO',
  /** The rich text field. used to store large formatted Text */
  RichText = 'RICH_TEXT',
  /** The Secure text field. used to store secure text */
  SecureText = 'SECURE_TEXT',
  /** The select/dropdown field. The maximum length of an option value is 255 characters. */
  Select = 'SELECT',
  /** The text field. The maximum length of the text value is 255 characters. */
  Text = 'TEXT',
  /** The URL field. used to store an url in secured text field type */
  Url = 'URL'
}

/** The day of the week. */
export enum DayOfWeek {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

/** Specifies the input to delete client user. */
export type DeleteUserInput = {
  /** The user will be soft deleted by default. The personally identifiable information (PII) will be anonymized by specifying true for this attribute. */
  forget?: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of the client user who is going to be deleted. */
  userId: Scalars['ID']['input'];
};

/** Designation of the technician. */
export type Designation = {
  __typename?: 'Designation';
  /** The ID of the designation. */
  designationId: Scalars['ID']['output'];
  /** The name of the designation. */
  name: Scalars['String']['output'];
};

/** Specifies the identifier input for the designation. */
export type DesignationIdentifierInput = {
  /** The ID of the designation. */
  designationId: Scalars['ID']['input'];
};

/** Specifies the asset's disk data */
export type Disks = {
  __typename?: 'Disks';
  /** disk partition details */
  disks?: Maybe<Array<Maybe<AssetDisk>>>;
  /** Total free space available in the disk */
  totalFreeSpace?: Maybe<Scalars['JSON']['output']>;
  /** Total size of the disk */
  totalSize?: Maybe<Scalars['JSON']['output']>;
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
  WorklogCreated = 'WORKLOG_CREATED'
}

/** This is a system-defined feature which is used along with the operation to define the user authorization under a role. */
export type Feature = {
  __typename?: 'Feature';
  /** The ID of the feature. */
  featureId: Scalars['ID']['output'];
  /** The constant value used to identify the feature programmatically. */
  key: Scalars['String']['output'];
  /** The name of the feature. */
  name: Scalars['String']['output'];
};

/** The field of the entity. */
export type Field = {
  __typename?: 'Field';
  columnName: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  fieldCategory?: Maybe<FieldCategory>;
  fieldOptions?: Maybe<Scalars['JSON']['output']>;
  fieldType: CustomFieldType;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  mandatoryOnClosure?: Maybe<Scalars['Boolean']['output']>;
  mandatoryOnCreate?: Maybe<Scalars['Boolean']['output']>;
  module: Scalars['String']['output'];
  options?: Maybe<Array<Maybe<Option>>>;
  parentField?: Maybe<Field>;
  /** Deprecated - Field options have been moved to a separate table instead of being stored as JSON. Use the 'options' field to retrieve the values. */
  showToRequester: Scalars['Boolean']['output'];
};

/** The category of the field. */
export enum FieldCategory {
  Custom = 'CUSTOM',
  Default = 'DEFAULT'
}

/**
 * Input for fetching a field by `id` or `columnName` in a specific module.
 * The `module` must be either 'TICKET' or 'CLIENT'.
 */
export type FieldIdentifierInput = {
  columnName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  module: Scalars['String']['input'];
};

/** Specifies the frequency duration unit for a recurring contract. */
export enum FrequencyDurationUnit {
  /** Indicates the contract's recurring duration is based on 'DAY'. */
  Day = 'DAY',
  /** Indicates the contract's recurring duration is based on 'MONTH'. */
  Month = 'MONTH',
  /** Indicates the contract's recurring duration is based on 'WEEK'. */
  Week = 'WEEK',
  /** Indicates the contract's recurring duration is based on 'YEAR'. */
  Year = 'YEAR'
}

export type GetAllowedServiceItemsInput = {
  client: ClientIdentifierInput;
  listInfo: ListInfoInput;
};

/** Specifies the input required to fetch the client site. */
export type GetClientSiteListInput = {
  /** The ID of the client. This optional input attribute can be used to fetch sites that belong to a particular client. */
  clientId?: InputMaybe<Scalars['ID']['input']>;
  /** Specifies the list input required to fetch multiple records */
  listInfo?: InputMaybe<ListInfoInput>;
};

/** Specifies the input required to fetch client users. */
export type GetClientUserListInput = {
  /** The ID of the client. This optional input attribute can be used to fetch sites that belong to a particular client. */
  clientId?: InputMaybe<Scalars['ID']['input']>;
  /** Specifies the list input to fetch multiple records. */
  listInfo?: InputMaybe<ListInfoInput>;
};

/** Input for get eligible items to create a worklog for ticket or a project using a contract associated with it. */
export type GetEligibleServiceCatalogItemsInput = {
  contract?: InputMaybe<ContractIdentifierInput>;
  listInfo: ListInfoInput;
};

/** Specifies the input required to fetch a task. */
export type GetTaskInput = {
  /**
   * The task can be created under different entities such as Tickets, Projects, etc.,
   * This specifies the entity under which the task is created.
   * This input is mandatory.
   */
  module?: InputMaybe<TaskModule>;
  /**
   * The ID of the task.
   * This input is mandatory.
   */
  taskId: Scalars['ID']['input'];
};

/** Specifies the input required to fetch a list of tasks. */
export type GetTaskListInput = {
  /** Specifies the list input to fetch multiple records. */
  listInfo?: InputMaybe<ListInfoInput>;
  /** Specifies the entity to filter out the tasks belongs to that entity. */
  module?: InputMaybe<TaskModule>;
};

/** Specifies the input required to fetch worklog entries. */
export type GetWorklogEntriesInput = {
  /** Specifies the list input required to fetch multiple records, with conditions, pagination etc.. */
  listInfo?: InputMaybe<ListInfoInput>;
  /** The worklog can be created under different entities such as tickets, projects, etc. and this specifies the entity under which the worklog is created. */
  module?: InputMaybe<WorkModule>;
};

/** Specifies the input required to fetch a worklog. */
export type GetWorklogInput = {
  /**
   * The worklog can be created under different entities like Tickets, Projects, etc.,
   * Specifies the entity under which the worklog is created.
   * This input is mandatory.
   */
  module: WorklogModule;
  /**
   * Specifies the ID of the worklog.
   * This input is mandatory.
   */
  worklogId: Scalars['ID']['input'];
};

/** Specifies the input required to fetch a list of worklogs. */
export type GetWorklogListInput = {
  /** Specifies the entity used to filter out the worklogs belonging to that entity. */
  module?: InputMaybe<WorklogModule>;
  /** Specifies the ticket identifier to fetch worklogs that belong to that ticket. This input is mandatory if the module is TICKET. */
  ticket?: InputMaybe<TicketIdentifierInput>;
};

/** The list of holidays. */
export type HolidayList = {
  __typename?: 'HolidayList';
  /** The ID of the holiday list. */
  id: Scalars['ID']['output'];
  /** The name of the holiday list. */
  name: Scalars['String']['output'];
};

/** Specifies the identifier input for the holiday list. */
export type HolidayListIdentifierInput = {
  /** The ID of the holiday list. */
  id: Scalars['ID']['input'];
};

/** Contains details for a HOURS type SERVICE item */
export type HourlyServiceTypeItem = {
  __typename?: 'HourlyServiceTypeItem';
  /** Denotes whether the item is used in default when a work is logged */
  defaultItem: Scalars['Boolean']['output'];
  /** Identifier of the item */
  itemId: Scalars['ID']['output'];
  /** Denotes the value to which a HOURS item quantity must be rounded up to during computation */
  roundUpValue: Scalars['Int']['output'];
};

/** Specifies the IT Documentation Class created in SuperOps.ai */
export type ItDocumentationType = {
  __typename?: 'ITDocumentationType';
  /** Specifies the custom field information of the IT document category */
  customFields?: Maybe<Scalars['JSON']['output']>;
  /** Description of the IT document category */
  description?: Maybe<Scalars['String']['output']>;
  /** Entity name of the IT document category */
  entityName?: Maybe<Scalars['String']['output']>;
  /** Last Updated Time of the IT Documentation Class */
  lastUpdatedTime?: Maybe<Scalars['String']['output']>;
  /** Name of the IT document category */
  name?: Maybe<Scalars['String']['output']>;
  /** Type ID of the IT document category */
  typeId?: Maybe<Scalars['ID']['output']>;
};

/** Specifies the identifier for denoting the parent custom field */
export type IdentifierInput = {
  id: Scalars['ID']['input'];
};

/** The ticket's impact. */
export type Impact = {
  __typename?: 'Impact';
  /** The ID of the impact. */
  id: Scalars['ID']['output'];
  /** The name of the impact. */
  name: Scalars['String']['output'];
};

/** Specifies the installer Information of a specific client-site */
export type InstallerDetails = {
  __typename?: 'InstallerDetails';
  /** ID of the SuperOps Agent installer */
  id?: Maybe<Scalars['String']['output']>;
  /** Download URL of the SuperOps Agent */
  installerDownloadUrl?: Maybe<Scalars['String']['output']>;
  /** Agent installer name */
  installerName?: Maybe<Scalars['String']['output']>;
  /** OS type of the Installer */
  os?: Maybe<Scalars['String']['output']>;
};

/** specifies the input required to fetch Superops installer details */
export type InstallerInfoInput = {
  /** Client name of the Installer */
  clientName?: InputMaybe<Scalars['String']['input']>;
  /** Site name of the Installer */
  siteName?: InputMaybe<Scalars['String']['input']>;
};

/** the response type for Integration Data Mapping Data */
export type IntegrationDataMapping = {
  __typename?: 'IntegrationDataMapping';
  /** Superops Item Id mapped with Third party item */
  superOpsId?: Maybe<Scalars['String']['output']>;
  /** Third party item ID mapped with Superops item */
  tpItemId?: Maybe<Scalars['String']['output']>;
};

export type Invoice = {
  __typename?: 'Invoice';
  /** The additional discount amount applied on the invoice. */
  additionalDiscount?: Maybe<Scalars['String']['output']>;
  /** The additional discount rate applied on the invoice. */
  additionalDiscountRate?: Maybe<Scalars['String']['output']>;
  /** The client to whom the invoice is created. */
  client?: Maybe<Scalars['JSON']['output']>;
  /** The sum of discount amounts applied on each line items. */
  discountAmount?: Maybe<Scalars['String']['output']>;
  /** The system-generated, human-readable ID of the invoice. */
  displayId: Scalars['String']['output'];
  /**
   * The due date of the invoice i.,e the invoice should be paid on or before the due date.
   * Otherwise the invoice will be marked as overdue.
   */
  dueDate?: Maybe<Scalars['String']['output']>;
  /** The invoice creation date. */
  invoiceDate: Scalars['String']['output'];
  /** The ID of the invoice */
  invoiceId: Scalars['ID']['output'];
  /** The payment term of the invoice. */
  invoicePaymentTerm?: Maybe<Scalars['JSON']['output']>;
  /** The list of line items. */
  items?: Maybe<Array<Maybe<InvoiceItem>>>;
  /** The notes about the invoice. */
  notes?: Maybe<Scalars['String']['output']>;
  /** The payment date of the invoice. */
  paymentDate?: Maybe<Scalars['String']['output']>;
  paymentLink?: Maybe<Scalars['String']['output']>;
  /** The payment method of the invoice. */
  paymentMethod?: Maybe<Scalars['JSON']['output']>;
  /** Denotes the comments, notes, or references related to a payment, providing additional context or information. */
  paymentReference?: Maybe<Scalars['String']['output']>;
  /** Denotes whether the invoice has been sent to the client. */
  sentToClient?: Maybe<Scalars['Boolean']['output']>;
  /** The client site to which the invoice is created. */
  site?: Maybe<Scalars['JSON']['output']>;
  /** The invoice status. */
  statusEnum?: Maybe<InvoiceStatus>;
  /** The list of tax line items. */
  taxes?: Maybe<Array<Maybe<InvoiceTaxItem>>>;
  /** The total amount of the invoice includes all the discounts and taxes. */
  totalAmount?: Maybe<Scalars['String']['output']>;
};

/** Specifies the identifier input for the invoice. */
export type InvoiceIdentifierInput = {
  /** The ID of the invoice. */
  invoiceId: Scalars['ID']['input'];
};

/** Denotes the line items on the invoice */
export type InvoiceItem = {
  __typename?: 'InvoiceItem';
  /** The total amount of the line item, excluding tax i.,e (unitPrice * quantity) - discount */
  amount?: Maybe<Scalars['String']['output']>;
  /** The offered/billed date of the line item */
  billedDate: Scalars['String']['output'];
  /** The details about the line item. */
  details?: Maybe<Scalars['String']['output']>;
  /** The discount amount applied for the line item. */
  discountAmount?: Maybe<Scalars['String']['output']>;
  /** The discount rate applied for the line item. */
  discountRate?: Maybe<Scalars['String']['output']>;
  /** The invoice for the line item */
  invoice?: Maybe<Invoice>;
  /** The ID of the invoice line item. */
  itemId: Scalars['ID']['output'];
  /** The quantity of the line item. */
  quantity: Scalars['String']['output'];
  /** The offered service item. */
  serviceItem?: Maybe<Scalars['JSON']['output']>;
  /** The applicable tax for the line item. */
  tax?: Maybe<Scalars['JSON']['output']>;
  /** Shows the tax amount applied for the line item. */
  taxAmount?: Maybe<Scalars['String']['output']>;
  /** Specifies whether the line item is taxable or not. */
  taxable?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates the total amount for the line item. This includes the total of all the charges and the taxes. */
  totalAmount?: Maybe<Scalars['String']['output']>;
  /** The unit price of the line item. */
  unitPrice: Scalars['String']['output'];
};

/** The response payload for a list of invoice items. */
export type InvoiceItemList = {
  __typename?: 'InvoiceItemList';
  /** The list of invoice items. */
  items?: Maybe<Array<Maybe<InvoiceItem>>>;
  /** The details about the list */
  listInfo?: Maybe<ListInfo>;
};

/** The response payload for list of invoices fetched. */
export type InvoiceList = {
  __typename?: 'InvoiceList';
  /** The list of invoices. */
  invoices?: Maybe<Array<Maybe<Invoice>>>;
  /** The detail about the list. */
  listInfo?: Maybe<ListInfo>;
};

/** Specifies the status of the invoice. */
export enum InvoiceStatus {
  /** Denotes that the invoice has been finalized. The invoice is moved to this status when it is sent to the client or synced with bookkeeping tools such as QuickBooks or Xero. */
  Approved = 'APPROVED',
  /** Denotes that the invoice has been created. */
  Draft = 'DRAFT',
  /** Denotes that the invoice has not paid on or before the due date. */
  Overdue = 'OVERDUE',
  /** Denotes that the invoice has been paid. */
  Paid = 'PAID',
  /** Denotes that the invoice payment is in progress. */
  PaymentInProgress = 'PAYMENT_IN_PROGRESS',
  /** Denotes that the invoice has been marked as void. */
  Void = 'VOID'
}

/** The invoice tax line item. */
export type InvoiceTaxItem = {
  __typename?: 'InvoiceTaxItem';
  /** Id of the tax Item. */
  id: Scalars['ID']['output'];
  /** The rate under a tax. */
  rate: Scalars['JSON']['output'];
  /** The tax. The actual type of this field is Tax. This field returns taxId and name fields of Tax as JSON. */
  tax: Scalars['JSON']['output'];
  /** The tax amount. */
  taxAmount: Scalars['String']['output'];
  /** The rate of the tax. */
  taxRate: Scalars['String']['output'];
  /** The taxable amount. */
  taxableAmount: Scalars['String']['output'];
};

/** Specifies the IT document Record Details */
export type ItDocumentation = {
  __typename?: 'ItDocumentation';
  /** Client Details of the IT document record */
  client?: Maybe<Scalars['JSON']['output']>;
  /** Custom field details of the IT document record */
  customFields?: Maybe<Scalars['JSON']['output']>;
  /** ID of the IT Document */
  itDocId: Scalars['ID']['output'];
  /** Name of the IT document record */
  name?: Maybe<Scalars['String']['output']>;
  /** Site details of the IT document record */
  site?: Maybe<Scalars['JSON']['output']>;
};


/** Specifies the IT document Record Details */
export type ItDocumentationCustomFieldsArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies the identifier input for the IT Document. */
export type ItDocumentationIdentifierInput = {
  /** The ID of the IT Document. */
  itDocId: Scalars['ID']['input'];
};

/** Specifies the list of IT Documents that are fetched */
export type ItDocumentationList = {
  __typename?: 'ItDocumentationList';
  /** list of IT documents */
  documents?: Maybe<Array<Maybe<ItDocumentation>>>;
  /** The detail about the list. */
  listInfo?: Maybe<ListInfo>;
};

/** specifies the input required to fetch a list of IT documents under one type ID */
export type ItDocumentationListInput = {
  /** list info details */
  listInfo?: InputMaybe<ListInfoInput>;
  /** type ID of the IT document */
  typeId?: InputMaybe<Scalars['ID']['input']>;
};

/** Displays details about the list when multiple records are fetched. */
export type ListInfo = {
  __typename?: 'ListInfo';
  /** Filter condition. */
  condition?: Maybe<Scalars['JSON']['output']>;
  /** Denotes whether more number of records still present during pagination. */
  hasMore?: Maybe<Scalars['Boolean']['output']>;
  /** The page number starts from 1 during pagination. */
  page?: Maybe<Scalars['Int']['output']>;
  /** The maximum number of records per page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** Sort definition. */
  sort?: Maybe<Array<Maybe<Sort>>>;
  /** Denotes the total number of available records. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** Specifies the input required to fetch multiple records. */
export type ListInfoInput = {
  /** Specifies the filter condition. */
  condition?: InputMaybe<RuleConditionInput>;
  /** Specifies the page number for pagination. */
  page?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies the maximum number of records per page for pagination. */
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies the sorting. */
  sort?: InputMaybe<Array<InputMaybe<SortInput>>>;
};

export type LogInContext = {
  __typename?: 'LogInContext';
  /** Logged-in user. */
  user?: Maybe<Scalars['JSON']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates an alert for an asset */
  createAlert?: Maybe<Alert>;
  /** Creates new ticket categories. */
  createCategories?: Maybe<Array<Maybe<Category>>>;
  /** Creates new ticket causes. */
  createCauses?: Maybe<Array<Maybe<Cause>>>;
  /**
   * Creates a client.
   * @deprecated(reason: "Use 'createClientV2' instead.")
   */
  createClient?: Maybe<Client>;
  /** Creates a new usage based client contract. */
  createClientContract: Scalars['ID']['output'];
  /** Creates a client custom field. */
  createClientCustomField?: Maybe<CustomField>;
  /** Creates a client site. */
  createClientSite?: Maybe<ClientSite>;
  /** Creates a new client user. */
  createClientUser?: Maybe<ClientUser>;
  /** Creates client user associations */
  createClientUserAssociations?: Maybe<Array<Maybe<ClientUserAssociation>>>;
  /** Creates a client user custom field. */
  createClientUserCustomField?: Maybe<CustomField>;
  /** Creates a client. */
  createClientV2?: Maybe<Client>;
  /** Creates a new field. */
  createField?: Maybe<Field>;
  /** Creates a new IT document record. */
  createItDocumentation?: Maybe<ItDocumentation>;
  /** Creates a quote. */
  createQuote?: Maybe<Quote>;
  /** Creates a new item in the Products and Services catalog */
  createServiceCatalogItem?: Maybe<ServiceCatalogItem>;
  /** Creates a new service category in the service catalog. */
  createServiceCategory?: Maybe<ServiceCategory>;
  /**
   * Creates a new service item in the service catalog.
   * @deprecated Use createServiceCatalogItem
   */
  createServiceItem?: Maybe<ServiceItem>;
  /** Creates new ticket statuses. */
  createStatus?: Maybe<Array<Maybe<Status>>>;
  /** Creates a task */
  createTask?: Maybe<Task>;
  /** Creates a new tax rate. */
  createTax?: Maybe<Tax>;
  /** Creates a new technician. */
  createTechnician?: Maybe<Technician>;
  /** Creates a new ticket */
  createTicket?: Maybe<Ticket>;
  /** Creates a new ticket conversation. */
  createTicketConversation?: Maybe<TicketConversation>;
  /**
   * Creates a ticket custom field.
   * @deprecated Use CreateField API
   */
  createTicketCustomField?: Maybe<CustomField>;
  /** Creates a new ticket note. */
  createTicketNote?: Maybe<Note>;
  createWebhookSubscription?: Maybe<WebhookSubscription>;
  createWorklog?: Maybe<Worklog>;
  /** Creates new worklog entries */
  createWorklogEntries?: Maybe<Array<Maybe<WorklogEntry>>>;
  createWorklogTimerEntry?: Maybe<WorklogTimerEntry>;
  /** Deletes the records of an existing client user. */
  deleteClientUser: Scalars['ID']['output'];
  /** Deletes existing client user associations. */
  deleteClientUserAssociations?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** Delete an existing field. */
  deleteField?: Maybe<Field>;
  /** Deletes an IT document record. */
  deleteItDocumentation?: Maybe<Scalars['Boolean']['output']>;
  /** Deletes the records of an existing technician. */
  deleteTechnician?: Maybe<Scalars['ID']['output']>;
  deleteWebhookSubscription?: Maybe<Scalars['Boolean']['output']>;
  /** Delete a worklog entry */
  deleteWorklogEntry?: Maybe<Scalars['Boolean']['output']>;
  deleteWorklogTimerEntry?: Maybe<Scalars['Boolean']['output']>;
  /** Trashed clients will be deleted from the system automatically after 30 days. This mutation can be used to permanently delete clients in the trash. */
  hardDeleteClients?: Maybe<Scalars['Boolean']['output']>;
  /** Trashed tickets will be deleted from the system automatically after 30 days. This mutation can be used to delete tickets from the trash. */
  hardDeleteTickets?: Maybe<Scalars['Boolean']['output']>;
  registerAPIGatewayNestedInputTypes?: Maybe<Scalars['Boolean']['output']>;
  resetSigningSecret?: Maybe<WebhookSubscription>;
  /** Resolves a list of alerts. */
  resolveAlerts?: Maybe<Scalars['Boolean']['output']>;
  /** Restores trashed clients. */
  restoreClients?: Maybe<Scalars['Boolean']['output']>;
  /** Restores trashed tickets. */
  restoreTickets?: Maybe<Scalars['Boolean']['output']>;
  /** Runs a script on an asset. */
  runScriptOnAsset?: Maybe<RunScriptData>;
  /** Soft-deletes an asset from the platform. */
  softDeleteAsset?: Maybe<Scalars['Boolean']['output']>;
  /** Trash i.,e soft delete an existing client. */
  softDeleteClients?: Maybe<Scalars['Boolean']['output']>;
  /** Trash i.,e soft delete tickets. */
  softDeleteTickets?: Maybe<Scalars['Boolean']['output']>;
  /** Updates an asset's data. */
  updateAsset?: Maybe<UpdatedAsset>;
  /** Updates information of an existing client. */
  updateClient?: Maybe<Client>;
  /** Updates an existing usage or recurring client contract. */
  updateClientContract: Scalars['ID']['output'];
  /** Updates information of an existing client user. */
  updateClientUser?: Maybe<ClientUser>;
  /** Updates existing client user associations. */
  updateClientUserAssociations?: Maybe<Array<Maybe<ClientUserAssociation>>>;
  /** Updates an existing field. */
  updateField?: Maybe<Field>;
  /** Updates an existing invoice */
  updateInvoice?: Maybe<Invoice>;
  /** Updates an existing IT document record. */
  updateItDocumentation?: Maybe<ItDocumentation>;
  /** Updates an existing quote */
  updateQuote?: Maybe<Quote>;
  /** Updates information of an existing technician. */
  updateTechnician?: Maybe<Technician>;
  /** Updates an existing ticket */
  updateTicket?: Maybe<Ticket>;
  updateWebhookSubscription?: Maybe<WebhookSubscription>;
  /** Updates a worklog entry */
  updateWorklogEntry?: Maybe<WorklogEntry>;
  updateWorklogTimerEntry?: Maybe<WorklogTimerEntry>;
};


export type MutationCreateAlertArgs = {
  input: CreateAlertInput;
};


export type MutationCreateCategoriesArgs = {
  input: Array<CreateCategoryInput>;
};


export type MutationCreateCausesArgs = {
  input: Array<CreateCauseInput>;
};


export type MutationCreateClientArgs = {
  input: CreateClientInput;
};


export type MutationCreateClientContractArgs = {
  input: CreateClientContractInput;
};


export type MutationCreateClientCustomFieldArgs = {
  input: CreateCustomFieldInput;
};


export type MutationCreateClientSiteArgs = {
  input: CreateClientSiteInput;
};


export type MutationCreateClientUserArgs = {
  input: CreateClientUserInput;
};


export type MutationCreateClientUserAssociationsArgs = {
  input: Array<CreateClientUserAssociationInput>;
};


export type MutationCreateClientUserCustomFieldArgs = {
  input: CreateCustomFieldInput;
};


export type MutationCreateClientV2Args = {
  input: CreateClientInputV2;
};


export type MutationCreateFieldArgs = {
  input: CreateFieldInput;
};


export type MutationCreateItDocumentationArgs = {
  input: CreateItDocumentationInput;
};


export type MutationCreateQuoteArgs = {
  input: CreateQuoteInput;
};


export type MutationCreateServiceCatalogItemArgs = {
  input: CreateServiceCatalogItemInput;
};


export type MutationCreateServiceCategoryArgs = {
  input: CreateServiceCategoryInput;
};


export type MutationCreateServiceItemArgs = {
  input: CreateServiceItemInput;
};


export type MutationCreateStatusArgs = {
  input: Array<CreateStatusInput>;
};


export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};


export type MutationCreateTaxArgs = {
  input: CreateTaxInput;
};


export type MutationCreateTechnicianArgs = {
  input?: InputMaybe<CreateTechnicianInput>;
};


export type MutationCreateTicketArgs = {
  input: CreateTicketInput;
};


export type MutationCreateTicketConversationArgs = {
  input: CreateTicketConversationInput;
};


export type MutationCreateTicketCustomFieldArgs = {
  input: CreateCustomFieldInput;
};


export type MutationCreateTicketNoteArgs = {
  input: CreateTicketNoteInput;
};


export type MutationCreateWebhookSubscriptionArgs = {
  input?: InputMaybe<CreateWebhookSubscriptionInput>;
};


export type MutationCreateWorklogArgs = {
  input: CreateWorklogInput;
};


export type MutationCreateWorklogEntriesArgs = {
  input: Array<CreateWorklogEntryInput>;
};


export type MutationCreateWorklogTimerEntryArgs = {
  input: CreateWorklogTimerEntryInput;
};


export type MutationDeleteClientUserArgs = {
  input: DeleteUserInput;
};


export type MutationDeleteClientUserAssociationsArgs = {
  input: Array<ClientUserAssociationIdentifierInput>;
};


export type MutationDeleteFieldArgs = {
  input?: InputMaybe<FieldIdentifierInput>;
};


export type MutationDeleteItDocumentationArgs = {
  input: ItDocumentationIdentifierInput;
};


export type MutationDeleteTechnicianArgs = {
  input: DeleteUserInput;
};


export type MutationDeleteWebhookSubscriptionArgs = {
  input: WebhookSubscriptionIdentifierInput;
};


export type MutationDeleteWorklogEntryArgs = {
  input: WorklogEntryIdentifier;
};


export type MutationDeleteWorklogTimerEntryArgs = {
  input: WorklogTimerEntryIdentifier;
};


export type MutationHardDeleteClientsArgs = {
  input: Array<ClientIdentifierInput>;
};


export type MutationHardDeleteTicketsArgs = {
  input?: InputMaybe<Array<InputMaybe<TicketIdentifierInput>>>;
};


export type MutationRegisterApiGatewayNestedInputTypesArgs = {
  billableContractQuantityChangeInput?: InputMaybe<BillableContractQuantityChangeInput>;
  businessFunctionIdentifierInput?: InputMaybe<BusinessFunctionIdentifierInput>;
  businessHour?: InputMaybe<CreateBusinessHourInput>;
  clientIdentifierInput?: InputMaybe<ClientIdentifierInput>;
  clientSiteIdentifierInput?: InputMaybe<ClientSiteIdentifierInput>;
  clientUserIdentifierInput?: InputMaybe<ClientUserIdentifierInput>;
  condition?: InputMaybe<RuleConditionInput>;
  contractIdentifierInput?: InputMaybe<ContractIdentifierInput>;
  createAttachmentInput?: InputMaybe<CreateAttachmentInput>;
  createBillableContractInput?: InputMaybe<CreateBillableContractInput>;
  createContractInput?: InputMaybe<CreateContractInput>;
  createFieldOptionInput?: InputMaybe<CreateFieldOptionInput>;
  createHourlyServiceTypeItemInput?: InputMaybe<CreateHourlyServiceTypeItemInput>;
  createQuoteItemInput?: InputMaybe<CreateQuoteItemInput>;
  createRedeemableServiceBundleInput?: InputMaybe<CreateRedeemableServiceBundleInput>;
  createServiceTypeItemInput?: InputMaybe<CreateServiceTypeItemInput>;
  createSubCategoryInput?: InputMaybe<CreateSubCategoryInput>;
  createSubCauseInput?: InputMaybe<CreateSubCauseInput>;
  createTaxRateInput?: InputMaybe<CreateTaxRateInput>;
  createWebhookSubscriptionInput?: InputMaybe<CreateWebhookSubscriptionInput>;
  createWorklogItemInput?: InputMaybe<CreateWorklogItemInput>;
  createWorklogTimerSegmentInput?: InputMaybe<CreateWorklogTimerSegmentInput>;
  customFieldType?: InputMaybe<CustomFieldType>;
  day?: InputMaybe<DayOfWeek>;
  designationIdentifierInput?: InputMaybe<DesignationIdentifierInput>;
  holidayList?: InputMaybe<HolidayListIdentifierInput>;
  identifierInput?: InputMaybe<IdentifierInput>;
  order?: InputMaybe<SortOrder>;
  paymentMethodInput?: InputMaybe<PaymentTermIdentifierInput>;
  paymentTermInput?: InputMaybe<PaymentMethodIdentifierInput>;
  pricingModelDetailsInput?: InputMaybe<PricingModelDetailsInput>;
  pricingModelInput?: InputMaybe<PricingModelInput>;
  quoteItemIdentifierInput?: InputMaybe<QuoteItemIdentifierInput>;
  recipientIdentifierInput?: InputMaybe<RecipientIdentifierInput>;
  recurringContractInput?: InputMaybe<RecurringContractInput>;
  roleIdentifierInput?: InputMaybe<RoleIdentifierInput>;
  serviceCatalogItemIdentifierInput?: InputMaybe<ServiceCatalogItemIdentifierInput>;
  serviceCategoryIdentifierInput?: InputMaybe<ServiceCategoryIdentifierInput>;
  serviceItemIdentifierInput?: InputMaybe<ServiceItemIdentifierInput>;
  slaIdentifierInput?: InputMaybe<SlaIdentifierInput>;
  sort?: InputMaybe<SortInput>;
  source?: InputMaybe<TicketSource>;
  taskIdentifierInput?: InputMaybe<TaskIdentifierInput>;
  taskModule?: InputMaybe<TaskModule>;
  teamIdentifierInput?: InputMaybe<TeamIdentifierInput>;
  technicianGroupIdentifierInput?: InputMaybe<TechnicianGroupIdentifierInput>;
  technicianIdentifierInput?: InputMaybe<TechnicianIdentifierInput>;
  thirdPartySourceInput?: InputMaybe<ThirdPartySourceInput>;
  updateBillableContractInput?: InputMaybe<UpdateBillableContractInput>;
  updateContractInput?: InputMaybe<UpdateContractInput>;
  updateFieldOptionInput?: InputMaybe<UpdateFieldOptionInput>;
  updateQuoteItemInput?: InputMaybe<UpdateQuoteItemInput>;
  updateTicketInput?: InputMaybe<UpdateTicketInput>;
  updateWebhookSubscriptionInput?: InputMaybe<UpdateWebhookSubscriptionInput>;
  updateWorklogTimerSegmentInput?: InputMaybe<UpdateWorklogTimerSegmentInput>;
  userIdentifierInput?: InputMaybe<UserIdentifierInput>;
  webhookSubscriptionEventInput?: InputMaybe<WebhookSubscriptionEventInput>;
  webhookSubscriptionIdentifierInput?: InputMaybe<WebhookSubscriptionIdentifierInput>;
  webhookSubscriptionStatusInput?: InputMaybe<WebhookSubscriptionStatusInput>;
  workItemIdentifierInput?: InputMaybe<WorkItemIdentifierInput>;
  workModule?: InputMaybe<WorkModule>;
  worklogModule?: InputMaybe<WorklogModule>;
  worklogTimerSegmentIdentifierInput?: InputMaybe<WorklogTimerSegmentIdentifierInput>;
};


export type MutationResetSigningSecretArgs = {
  input: WebhookSubscriptionIdentifierInput;
};


export type MutationResolveAlertsArgs = {
  input?: InputMaybe<Array<InputMaybe<ResolveAlertInput>>>;
};


export type MutationRestoreClientsArgs = {
  input: Array<ClientIdentifierInput>;
};


export type MutationRestoreTicketsArgs = {
  input?: InputMaybe<Array<InputMaybe<TicketIdentifierInput>>>;
};


export type MutationRunScriptOnAssetArgs = {
  input: RunScriptInput;
};


export type MutationSoftDeleteAssetArgs = {
  input?: InputMaybe<AssetIdentifierInput>;
};


export type MutationSoftDeleteClientsArgs = {
  input: Array<ClientIdentifierInput>;
};


export type MutationSoftDeleteTicketsArgs = {
  input?: InputMaybe<Array<InputMaybe<TicketIdentifierInput>>>;
};


export type MutationUpdateAssetArgs = {
  input: UpdateAssetInput;
};


export type MutationUpdateClientArgs = {
  input: UpdateClientInput;
};


export type MutationUpdateClientContractArgs = {
  input: UpdateClientContractInput;
};


export type MutationUpdateClientUserArgs = {
  input: UpdateClientUserInput;
};


export type MutationUpdateClientUserAssociationsArgs = {
  input: Array<UpdateClientUserAssociationInput>;
};


export type MutationUpdateFieldArgs = {
  input: UpdateFieldInput;
};


export type MutationUpdateInvoiceArgs = {
  input: UpdateInvoiceInput;
};


export type MutationUpdateItDocumentationArgs = {
  input: UpdateItDocumentationInput;
};


export type MutationUpdateQuoteArgs = {
  input: UpdateQuoteInput;
};


export type MutationUpdateTechnicianArgs = {
  input?: InputMaybe<UpdateTechnicianInput>;
};


export type MutationUpdateTicketArgs = {
  input: UpdateTicketInput;
};


export type MutationUpdateWebhookSubscriptionArgs = {
  input?: InputMaybe<UpdateWebhookSubscriptionInput>;
};


export type MutationUpdateWorklogEntryArgs = {
  input: UpdateWorklogEntryInput;
};


export type MutationUpdateWorklogTimerEntryArgs = {
  input: UpdateWorklogTimerEntryInput;
};

/** The note added by a technician. */
export type Note = {
  __typename?: 'Note';
  /**
   * The technician who created the note.
   * The actual type of this field is Technician. Returns userId and name fields as JSON.
   */
  addedBy?: Maybe<Scalars['JSON']['output']>;
  /** The created datetime of the note. */
  addedOn: Scalars['String']['output'];
  /** The list of attachments. */
  attachments?: Maybe<Array<Maybe<Attachment>>>;
  /** The content of the note. */
  content: Scalars['String']['output'];
  /** The ID of the note. */
  noteId: Scalars['ID']['output'];
  /** Indicates whether the note can be shown to the requester if set to PUBLIC; otherwise, it can be shown to the technician only. */
  privacyType?: Maybe<NotePrivacyType>;
};

export enum NotePrivacyType {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

/** The offered items */
export type OfferedItem = {
  __typename?: 'OfferedItem';
  /** If the type is WORK, and the offered item was adjusted from block hour, it indicates the quantity adjusted from the block hour */
  adjustedBlockHour?: Maybe<Scalars['String']['output']>;
  /** If the type is WORK, and the offered item was adjusted from block money, it indicates the amount adjusted from the block money */
  adjustedBlockMoney?: Maybe<Scalars['String']['output']>;
  /** If the type is WORK, it indicates whether the service is offered after hours */
  afterHours?: Maybe<Scalars['Boolean']['output']>;
  /** The actual amount of the offered item. */
  amount?: Maybe<Scalars['String']['output']>;
  /** The offered date. */
  billDate: Scalars['String']['output'];
  /**
   * The client to whom the offered item belongs.
   * The actual type of this field is Client. Returns accountId, name fields as JSON.
   */
  client?: Maybe<Scalars['JSON']['output']>;
  /** The created time of the offered item. */
  createdTime?: Maybe<Scalars['String']['output']>;
  /** The actual discount rate of the offered item. */
  discountRate?: Maybe<Scalars['String']['output']>;
  /** The ID of the offered item */
  itemId: Scalars['ID']['output'];
  /** The notes of the offered item. */
  notes?: Maybe<Scalars['String']['output']>;
  /** The actual quantity of the offered item. */
  qty?: Maybe<Scalars['String']['output']>;
  /** The revised amount of the offered item after the audit. */
  revisedAmount?: Maybe<Scalars['String']['output']>;
  /** The revised discount rate of the offered item after the audit. */
  revisedDiscountRate?: Maybe<Scalars['String']['output']>;
  /** The revised quantity of the offered item after the audit. */
  revisedQuantity?: Maybe<Scalars['String']['output']>;
  /** The revised unit price of the offered item after the audit. */
  revisedUnitPrice?: Maybe<Scalars['String']['output']>;
  /**
   * The offered service item.
   * The actual type of this field is ServiceItem. Returns itemId, name, quantityType fields as JSON.
   */
  serviceItem: Scalars['JSON']['output'];
  /**
   * The client site to which the offered item belongs.
   * The actual type of this field is ClientSite. Returns id, name fields as JSON.
   */
  site?: Maybe<Scalars['JSON']['output']>;
  /** Indicates the audit state of the offered item */
  status: OfferedItemAuditStatus;
  /** If the type is WORK, it indicates the technician who offered the item. */
  technician?: Maybe<Scalars['JSON']['output']>;
  /** Indicates whether the offered item is from the contract or worklog. */
  type: OfferedItemType;
  /** The actual unit price of the offered item. */
  unitPrice?: Maybe<Scalars['String']['output']>;
  /** The updated time of the offered item. */
  updatedTime?: Maybe<Scalars['String']['output']>;
  /**
   * If the type is WORK, it indicates the work item (ticket/project) to which the offered item belongs.
   * The actual type of this field is WorkItem. Returns workId, displayId, module fields as JSON.
   */
  workItem?: Maybe<Scalars['JSON']['output']>;
};

export enum OfferedItemAuditStatus {
  Approved = 'APPROVED',
  Ignored = 'IGNORED',
  Invoiced = 'INVOICED',
  Pending = 'PENDING'
}

/** The response payload for the list of offered items. */
export type OfferedItemList = {
  __typename?: 'OfferedItemList';
  /** The list of offered items */
  items?: Maybe<Array<Maybe<OfferedItem>>>;
  /** The details about the list. */
  listInfo?: Maybe<ListInfo>;
};

/** Specifies the offered item type. */
export enum OfferedItemType {
  /** The specified item is under a contract. */
  Contract = 'CONTRACT',
  /** The specified item is part of a ticket/project. */
  Work = 'WORK'
}

/** A system-defined operation like Add, Edit, Delete, View, Allow which is used along with the feature to define the user authorization under a role. */
export type Operation = {
  __typename?: 'Operation';
  /** The name of the operation. */
  name: Scalars['String']['output'];
  /** The ID of the operation. */
  operationId: Scalars['ID']['output'];
};

/** Option of the field */
export type Option = {
  __typename?: 'Option';
  children?: Maybe<Array<Maybe<Option>>>;
  description?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  order: Scalars['Int']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

/** Specifies all the details of a particular patch */
export type PatchData = {
  __typename?: 'PatchData';
  /** The approval status of that patch in that asset */
  approvalStatus?: Maybe<Scalars['String']['output']>;
  /** The failure message, if the patch installation failed */
  failedMessage?: Maybe<Scalars['String']['output']>;
  /** Patch installation status of the asset */
  installationStatus?: Maybe<Scalars['String']['output']>;
  /** The installation time of that patch, if installed */
  installationTime?: Maybe<Scalars['String']['output']>;
  /** Specifies the patch details */
  patchDetail?: Maybe<PatchDetails>;
};

/** Specifies the patch details */
export type PatchDetails = {
  __typename?: 'PatchDetails';
  /** The category of the patch */
  category?: Maybe<Scalars['String']['output']>;
  /** The KB numbers of the patch */
  kbNumbers?: Maybe<Array<Maybe<PatchKb>>>;
  /** The patch ID of the patch's data */
  patchId: Scalars['ID']['output'];
  /** The patch key of the patch's data */
  patchKey?: Maybe<Scalars['String']['output']>;
  /** The published data of the patch */
  publishedDate?: Maybe<Scalars['String']['output']>;
  /** Specifies whether a restart is required after patch installation */
  restartRequired?: Maybe<Scalars['Boolean']['output']>;
  /** The severity of the patch */
  severity?: Maybe<Scalars['String']['output']>;
  /** The title of the patch */
  title?: Maybe<Scalars['String']['output']>;
};

/** Specifies the PatchKb numbers of a patch */
export type PatchKb = {
  __typename?: 'PatchKb';
  /** KB number associated with the patch */
  kbNumber?: Maybe<Scalars['String']['output']>;
};

/** Payment method is the specific way or channel used to transfer funds for a purchase, like credit card, bank transfer, or cash */
export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  /** The ID of the payment method. */
  paymentMethodId: Scalars['ID']['output'];
  /** The name of the payment method. */
  paymentMethodName: Scalars['String']['output'];
};

/** Specifies the identifier input for the payment method. */
export type PaymentMethodIdentifierInput = {
  /** The ID of the payment method. */
  paymentMethodId: Scalars['ID']['input'];
};

/**
 * Payment term specifies when and how a customer is expected to make a payment in a business transaction,
 * such as "Net 30" meaning payment due within 30 days.
 */
export type PaymentTerm = {
  __typename?: 'PaymentTerm';
  /** The ID of the payment term. */
  paymentTermId: Scalars['ID']['output'];
  /** The name of the payemnt term. */
  paymentTermName: Scalars['String']['output'];
  /** The number of days. */
  paymentTermValue?: Maybe<Scalars['Int']['output']>;
};

/** Specifies the identifier input for the payment term. */
export type PaymentTermIdentifierInput = {
  /** The ID of the payment term. */
  paymentTermId: Scalars['ID']['input'];
};

/** Specifies the perpetual contract. */
export type PerpetualContract = {
  __typename?: 'PerpetualContract';
  /** Indicates whether the autoRenew option is enabled. */
  autoRenew: Scalars['Boolean']['output'];
  /** The ID of the contract. */
  contractId: Scalars['ID']['output'];
};

/** Contains pricing details of the item */
export type PricingModel = {
  __typename?: 'PricingModel';
  /** List of pricing details */
  details: Array<PricingModelDetail>;
  /** Indicates the pricing model used */
  model: PricingModelType;
};

/** Contains price for a item in business hours and after hours */
export type PricingModelDetail = {
  __typename?: 'PricingModelDetail';
  /** The after hours price value. */
  afterHoursValue?: Maybe<Scalars['String']['output']>;
  /** The business hours price value. */
  value: Scalars['String']['output'];
};

/** Specifies the input details of a pricing model. */
export type PricingModelDetailsInput = {
  /** Indicates the after hours price value. */
  afterHoursValue?: InputMaybe<Scalars['String']['input']>;
  /** Indicates the business hours price value. */
  value: Scalars['String']['input'];
};

/** Specifies the input for the pricing model and its details. */
export type PricingModelInput = {
  /** Specifies the pricing model details. */
  details: Array<PricingModelDetailsInput>;
  /** Specifies the pricing model type. */
  model: PricingModelType;
};

/** Specifies the pricing model type. */
export enum PricingModelType {
  PerUnit = 'PER_UNIT'
}

/** The ticket's priority. */
export type Priority = {
  __typename?: 'Priority';
  /** The color code of the priority. The value should be CSS color code like #00FFFF. */
  colorCode?: Maybe<Scalars['String']['output']>;
  /** The ID of the priority. */
  id: Scalars['ID']['output'];
  /** The name of the priority. */
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** Fetches the list of all your alerts. */
  getAlertList?: Maybe<AlertList>;
  /** Fetches the list of alerts of an asset. */
  getAlertsForAsset?: Maybe<AlertList>;
  /** Fetches all the fields for a Module, Ex: TICKET, CLIENT,CLIENT_USER, Windows, Mac */
  getAllFields?: Maybe<Array<Maybe<Field>>>;
  /** @deprecated Use getAllowedServiceCatalogItems */
  getAllowedServiceItems?: Maybe<ServiceItemList>;
  /** Fetches an asset. */
  getAsset?: Maybe<Asset>;
  /** Fetches the list of asset activities. */
  getAssetActivity?: Maybe<AssetActivityList>;
  /** Fetches the list of asset custom fields based on module Ex: Windows, Mac */
  getAssetCustomFields?: Maybe<Array<Maybe<CustomField>>>;
  /** To Fetch Asset Disk Details. */
  getAssetDiskDetails?: Maybe<Array<Maybe<AssetDisk>>>;
  /** Fetch Asset Info By TP EndpointIds */
  getAssetInfoByTPEndpointIds?: Maybe<Array<Maybe<TpEndpointAssetInfo>>>;
  /** Fetches the list of assets. */
  getAssetList?: Maybe<AssetList>;
  /** Fetches all the patch details of an asset. */
  getAssetPatchDetails?: Maybe<AssetPatchList>;
  /**
   * Fetches the asset's patch status.
   * @deprecated use Patch status in getAsset API
   */
  getAssetPatchStatus?: Maybe<Scalars['String']['output']>;
  /** Fetch Asset's Softwares */
  getAssetSoftwareList?: Maybe<AssetSoftwareList>;
  /** Fetches the asset's summary details. */
  getAssetSummary?: Maybe<AssetSummary>;
  /** Fetches the asset's user logs. */
  getAssetUserLog?: Maybe<Array<Maybe<AssetUserLog>>>;
  /** Fetches the list of business functions. */
  getBusinessFunctionList?: Maybe<Array<Maybe<BusinessFunction>>>;
  /** Fetches the list of available ticket categories. */
  getCategoryList?: Maybe<Array<Maybe<Category>>>;
  /** Fetches the list of available ticket causes. */
  getCauseList?: Maybe<Array<Maybe<Cause>>>;
  /** Fetches a client. */
  getClient?: Maybe<Client>;
  /** Fetches a client contract */
  getClientContract?: Maybe<ClientContract>;
  /** Fetches a list of client contracts */
  getClientContractList?: Maybe<ClientContractList>;
  /** Fetches a client custom field. */
  getClientCustomField?: Maybe<CustomField>;
  /** Fetches the list of client custom fields. */
  getClientCustomFieldList?: Maybe<Array<Maybe<CustomField>>>;
  /** Fetches a list of clients. */
  getClientList?: Maybe<ClientList>;
  /** Fetch a client site. */
  getClientSite?: Maybe<ClientSite>;
  /** Fetches a list of client sites. */
  getClientSiteList?: Maybe<ClientSiteList>;
  /** Fetches a list of client stages. */
  getClientStageList?: Maybe<Array<Maybe<ClientStage>>>;
  /** Fetches a client user. */
  getClientUser?: Maybe<ClientUser>;
  /** Fetches a list of client user associations. */
  getClientUserAssociationList?: Maybe<ClientUserAssociationList>;
  /** Fetches a client user custom field. */
  getClientUserCustomField?: Maybe<CustomField>;
  /** Fetches the list of client user custom fields. */
  getClientUserCustomFieldList?: Maybe<Array<Maybe<CustomField>>>;
  /** Fetches a list of client users. */
  getClientUserList?: Maybe<ClientUserList>;
  /** Fetches the list of designations. */
  getDesignationList?: Maybe<Array<Maybe<Designation>>>;
  /** Fetch a list of eligible service catalog items. */
  getEligibleServiceCatalogItems?: Maybe<ServiceCatalogItemList>;
  /** Fetches a field by module. */
  getField?: Maybe<Field>;
  /** Fetches the fields's of entities. */
  getFields?: Maybe<Array<Maybe<Field>>>;
  /** Fetches the list of holiday lists. */
  getHolidayList?: Maybe<Array<Maybe<HolidayList>>>;
  /** Fetches the list of available impact levels. */
  getImpactList?: Maybe<Array<Maybe<Impact>>>;
  /** Fetch Installer Info for a Specific client site */
  getInstallerInfo?: Maybe<Array<Maybe<InstallerDetails>>>;
  /** Fetch Integration Data Mappings By TP ItemIds */
  getIntegrationDataMapping?: Maybe<Array<Maybe<IntegrationDataMapping>>>;
  /** Fetches an invoice. */
  getInvoice?: Maybe<Invoice>;
  /** Fetches a list of all the invoice items. */
  getInvoiceItemList?: Maybe<InvoiceItemList>;
  /** Fetches a list of invoices. */
  getInvoiceList?: Maybe<InvoiceList>;
  /** Fetches an IT document's details. */
  getItDocumentation?: Maybe<ItDocumentation>;
  /** Fetches all available IT document categories. */
  getItDocumentationCategories?: Maybe<Array<Maybe<ItDocumentationType>>>;
  /** Fetches all the IT documents under a category. */
  getItDocumentationList?: Maybe<ItDocumentationList>;
  getLoggedInContext?: Maybe<LogInContext>;
  /** Fetches a list of the offered services */
  getOfferedItems?: Maybe<OfferedItemList>;
  /** Fetches the list of payment method list. */
  getPaymentMethodList?: Maybe<Array<Maybe<PaymentMethod>>>;
  /** Fetches the list of payment terms. */
  getPaymentTermList?: Maybe<Array<Maybe<PaymentTerm>>>;
  /** Fetches the list of available priority levels. */
  getPriorityList?: Maybe<Array<Maybe<Priority>>>;
  /** Fetches a quote. */
  getQuote?: Maybe<Quote>;
  /** Fetches a list of quotes. */
  getQuoteList?: Maybe<QuoteList>;
  /** Fetches the list of requester-type roles. */
  getRequesterRoleList?: Maybe<Array<Maybe<Role>>>;
  /** Fetches the list of resolution codes. */
  getResolutionCodeList?: Maybe<Array<Maybe<ResolutionCode>>>;
  /** Fetch a list of available SLAs. */
  getSLAList?: Maybe<Array<Maybe<Sla>>>;
  /** Fetches all available scripts. */
  getScriptList?: Maybe<ScriptList>;
  /** Fetches all the Scripts supported to particular OS type Ex :Windows */
  getScriptListByType?: Maybe<ScriptList>;
  /** Retrieves a product or service. */
  getServiceCatalogItem?: Maybe<ServiceCatalogItem>;
  /** Retrieves a list of all products and services. */
  getServiceCatalogItemList?: Maybe<ServiceCatalogItemList>;
  /**
   * Fetches a list of all the service categories created in the service catalog.
   * Fetches a list of all the service categories created in the service catalog.
   */
  getServiceCategoryList?: Maybe<Array<Maybe<ServiceCategory>>>;
  /**
   * Fetch a service item.
   * @deprecated Use getServiceCatalogItem
   */
  getServiceItem?: Maybe<ServiceItem>;
  /**
   * Fetches a list of service items.
   * @deprecated Use getServiceCatalogItemList
   */
  getServiceItemList?: Maybe<ServiceItemList>;
  /** Fetch the list of available ticket statuses. */
  getStatusList?: Maybe<Array<Maybe<Status>>>;
  /** Fetches a task. */
  getTask?: Maybe<Task>;
  /** Fetches a list of tasks. */
  getTaskList?: Maybe<TaskList>;
  /** Fetches a tax rate from the list of saved tax rates. */
  getTax?: Maybe<Tax>;
  /** Fetches all the tax rates saved in SuperOps.ai. */
  getTaxList?: Maybe<TaxList>;
  /** Fetches the list of teams. */
  getTeamList?: Maybe<Array<Maybe<Team>>>;
  /** Fetches the list of technician groups. */
  getTechnicianGroupList?: Maybe<Array<Maybe<TechnicianGroup>>>;
  /** Fetches the list of technicians. */
  getTechnicianList?: Maybe<TechnicianList>;
  /** Fetches the list of technician-type roles. */
  getTechnicianRoleList?: Maybe<Array<Maybe<Role>>>;
  /** Fetches a ticket. */
  getTicket?: Maybe<Ticket>;
  /** Fetches the list of conversations in a ticket. */
  getTicketConversationList?: Maybe<Array<Maybe<TicketConversation>>>;
  /**
   * Fetches a ticket custom field.
   * @deprecated Use getField API
   */
  getTicketCustomField?: Maybe<CustomField>;
  /**
   * Fetches the list of ticket custom fields.
   * @deprecated Use getFields API
   */
  getTicketCustomFieldList?: Maybe<Array<Maybe<CustomField>>>;
  /** Fetches a list of tickets. */
  getTicketList?: Maybe<TicketList>;
  /** Fetches the list of notes in a ticket. */
  getTicketNoteList?: Maybe<Array<Maybe<Note>>>;
  /** Fetches the list of available urgency levels. */
  getUrgencyList?: Maybe<Array<Maybe<Urgency>>>;
  getWebhookSubscription?: Maybe<WebhookSubscription>;
  getWebhookSubscriptionList?: Maybe<WebhookSubscriptionList>;
  /** Fetches a list of work (task/project) statuses. */
  getWorkStatusList?: Maybe<Array<Maybe<WorkStatus>>>;
  /** Fetches a worklog. */
  getWorklog?: Maybe<Worklog>;
  /** Fetches worklog Entries. */
  getWorklogEntries?: Maybe<WorklogEntryList>;
  /** Fetch a list of worklogs. */
  getWorklogList?: Maybe<Array<Maybe<Worklog>>>;
  getWorklogTimerEntries?: Maybe<WorklogTimerEntryList>;
};


export type QueryGetAlertListArgs = {
  input: ListInfoInput;
};


export type QueryGetAlertsForAssetArgs = {
  input: AssetDetailsListInput;
};


export type QueryGetAllFieldsArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetAllowedServiceItemsArgs = {
  input: GetAllowedServiceItemsInput;
};


export type QueryGetAssetArgs = {
  input: AssetIdentifierInput;
};


export type QueryGetAssetActivityArgs = {
  input: AssetDetailsListInput;
};


export type QueryGetAssetCustomFieldsArgs = {
  input?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryGetAssetDiskDetailsArgs = {
  input: AssetIdentifierInput;
};


export type QueryGetAssetInfoByTpEndpointIdsArgs = {
  input?: InputMaybe<TpAssetInfoInput>;
};


export type QueryGetAssetListArgs = {
  input: ListInfoInput;
};


export type QueryGetAssetPatchDetailsArgs = {
  input: AssetDetailsListInput;
};


export type QueryGetAssetPatchStatusArgs = {
  input: AssetIdentifierInput;
};


export type QueryGetAssetSoftwareListArgs = {
  input: AssetDetailsListInput;
};


export type QueryGetAssetSummaryArgs = {
  input: AssetIdentifierInput;
};


export type QueryGetAssetUserLogArgs = {
  input: AssetIdentifierInput;
};


export type QueryGetClientArgs = {
  input: ClientIdentifierInput;
};


export type QueryGetClientContractArgs = {
  input: ContractIdentifierInput;
};


export type QueryGetClientContractListArgs = {
  input?: InputMaybe<ListInfoInput>;
};


export type QueryGetClientCustomFieldArgs = {
  input?: InputMaybe<CustomFieldIdentifierInput>;
};


export type QueryGetClientListArgs = {
  input: ListInfoInput;
};


export type QueryGetClientSiteArgs = {
  input: ClientSiteIdentifierInput;
};


export type QueryGetClientSiteListArgs = {
  input: GetClientSiteListInput;
};


export type QueryGetClientUserArgs = {
  input: ClientUserIdentifierInput;
};


export type QueryGetClientUserAssociationListArgs = {
  input: ListInfoInput;
};


export type QueryGetClientUserCustomFieldArgs = {
  input?: InputMaybe<CustomFieldIdentifierInput>;
};


export type QueryGetClientUserListArgs = {
  input: GetClientUserListInput;
};


export type QueryGetEligibleServiceCatalogItemsArgs = {
  input: GetEligibleServiceCatalogItemsInput;
};


export type QueryGetFieldArgs = {
  input: FieldIdentifierInput;
};


export type QueryGetFieldsArgs = {
  input: Array<FieldIdentifierInput>;
};


export type QueryGetInstallerInfoArgs = {
  input?: InputMaybe<InstallerInfoInput>;
};


export type QueryGetIntegrationDataMappingArgs = {
  input?: InputMaybe<TpItemsInput>;
};


export type QueryGetInvoiceArgs = {
  input: InvoiceIdentifierInput;
};


export type QueryGetInvoiceItemListArgs = {
  input: ListInfoInput;
};


export type QueryGetInvoiceListArgs = {
  input: ListInfoInput;
};


export type QueryGetItDocumentationArgs = {
  input: ItDocumentationIdentifierInput;
};


export type QueryGetItDocumentationListArgs = {
  input: ItDocumentationListInput;
};


export type QueryGetOfferedItemsArgs = {
  input?: InputMaybe<ListInfoInput>;
};


export type QueryGetQuoteArgs = {
  input: QuoteIdentifierInput;
};


export type QueryGetQuoteListArgs = {
  input: ListInfoInput;
};


export type QueryGetScriptListArgs = {
  input: ListInfoInput;
};


export type QueryGetScriptListByTypeArgs = {
  input: ScriptListByTypeInput;
};


export type QueryGetServiceCatalogItemArgs = {
  input: ServiceCatalogItemIdentifierInput;
};


export type QueryGetServiceCatalogItemListArgs = {
  input: ListInfoInput;
};


export type QueryGetServiceItemArgs = {
  input: ServiceItemIdentifierInput;
};


export type QueryGetServiceItemListArgs = {
  input: ListInfoInput;
};


export type QueryGetTaskArgs = {
  input: GetTaskInput;
};


export type QueryGetTaskListArgs = {
  input: GetTaskListInput;
};


export type QueryGetTaxArgs = {
  input: TaxIdentifierInput;
};


export type QueryGetTaxListArgs = {
  input: ListInfoInput;
};


export type QueryGetTechnicianListArgs = {
  input: ListInfoInput;
};


export type QueryGetTicketArgs = {
  input: TicketIdentifierInput;
};


export type QueryGetTicketConversationListArgs = {
  input: TicketIdentifierInput;
};


export type QueryGetTicketCustomFieldArgs = {
  input?: InputMaybe<CustomFieldIdentifierInput>;
};


export type QueryGetTicketListArgs = {
  input: ListInfoInput;
};


export type QueryGetTicketNoteListArgs = {
  input: TicketIdentifierInput;
};


export type QueryGetWebhookSubscriptionArgs = {
  input: WebhookSubscriptionIdentifierInput;
};


export type QueryGetWebhookSubscriptionListArgs = {
  input?: InputMaybe<ListInfoInput>;
};


export type QueryGetWorklogArgs = {
  input: GetWorklogInput;
};


export type QueryGetWorklogEntriesArgs = {
  input: GetWorklogEntriesInput;
};


export type QueryGetWorklogListArgs = {
  input: GetWorklogListInput;
};


export type QueryGetWorklogTimerEntriesArgs = {
  input: ListInfoInput;
};

export type Quote = {
  __typename?: 'Quote';
  /** The additional discount amount applied on the quote. */
  additionalDiscount?: Maybe<Scalars['String']['output']>;
  /** The additional discount rate applied on the quote. */
  additionalDiscountRate?: Maybe<Scalars['String']['output']>;
  /** The client to whom the quote is created. */
  client?: Maybe<Scalars['JSON']['output']>;
  /** Specifies the description of the quote. */
  description?: Maybe<Scalars['String']['output']>;
  /** The sum of discount amounts applied on each line items. */
  discountAmount?: Maybe<Scalars['String']['output']>;
  /** The system-generated, human-readable ID of the quote. */
  displayId: Scalars['String']['output'];
  /** The expiration date of the quote. */
  expiryDate: Scalars['String']['output'];
  /** Specifies the footer of the quote. */
  footer?: Maybe<Scalars['String']['output']>;
  /** The list of line items. */
  items?: Maybe<Array<Maybe<QuoteItem>>>;
  /** Specifies the memo of the quote. */
  memo?: Maybe<Scalars['String']['output']>;
  /** The quote date. */
  quoteDate: Scalars['String']['output'];
  /** The ID of the quote */
  quoteId: Scalars['ID']['output'];
  /** The client site to which the quote is created. */
  site?: Maybe<Scalars['JSON']['output']>;
  /** The quote status. */
  statusEnum?: Maybe<QuoteStatusEnum>;
  /** The list of tax line items. */
  taxes?: Maybe<Array<Maybe<QuoteTaxItem>>>;
  /** Specifies the title of the quote. */
  title?: Maybe<Scalars['String']['output']>;
  /** The total amount of the quote includes all the discounts and taxes. */
  totalAmount?: Maybe<Scalars['String']['output']>;
};

/** Specifies the identifier input for the quote. */
export type QuoteIdentifierInput = {
  /** The ID of the quote. */
  quoteId: Scalars['ID']['input'];
};

/** Denotes the line items on the quote */
export type QuoteItem = {
  __typename?: 'QuoteItem';
  /** The total amount of the line item, excluding tax i.,e (unitPrice * quantity) - discount */
  amount: Scalars['String']['output'];
  /** The details about the line item. */
  details?: Maybe<Scalars['String']['output']>;
  /** The discount amount applied for the line item. */
  discountAmount?: Maybe<Scalars['String']['output']>;
  /** The discount rate applied for the line item. */
  discountRate?: Maybe<Scalars['String']['output']>;
  /** The ID of the quote line item. */
  itemId: Scalars['ID']['output'];
  /** The quantity of the line item. */
  quantity: Scalars['String']['output'];
  /** The service item. */
  serviceItem: Scalars['JSON']['output'];
  /** The applicable tax for the line item. */
  tax?: Maybe<Scalars['JSON']['output']>;
  /** Shows the tax amount applied for the line item. */
  taxAmount?: Maybe<Scalars['String']['output']>;
  /** Specifies whether the line item is taxable or not. */
  taxable?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates the total amount for the line item. This includes the total of all the charges and the taxes. */
  totalAmount?: Maybe<Scalars['String']['output']>;
  /** The unit price of the line item. */
  unitPrice: Scalars['String']['output'];
};

/** Specifies the identifier input for the quote item. */
export type QuoteItemIdentifierInput = {
  /** Specifies the ID of the quote item. */
  itemId: Scalars['ID']['input'];
};

/** The response payload for list of quotes fetched. */
export type QuoteList = {
  __typename?: 'QuoteList';
  /** The detail about the list. */
  listInfo?: Maybe<ListInfo>;
  /** The list of quotes. */
  quotes?: Maybe<Array<Maybe<Quote>>>;
};

/** Specifies the status of the quote. */
export enum QuoteStatusEnum {
  /** Denotes that the quote has been finalized. The quote is moved to this status when it is sent to the client and approved. */
  Approved = 'APPROVED',
  /** Denotes that the quote has been created. */
  Draft = 'DRAFT',
  /** Denoted that the quote has been expired. */
  Expired = 'EXPIRED',
  /** Denotes that the quote is waiting for approval. */
  Pending = 'PENDING',
  /** Denotes that the quote has been rejected. */
  Rejected = 'REJECTED'
}

/** The quote tax line item. */
export type QuoteTaxItem = {
  __typename?: 'QuoteTaxItem';
  /** Id of the tax Item. */
  id: Scalars['ID']['output'];
  /** The rate under a tax. */
  rate: Scalars['JSON']['output'];
  /** The tax. The actual type of this field is Tax. This field returns taxId and name fields of Tax as JSON. */
  tax: Scalars['JSON']['output'];
  /** The tax amount. */
  taxAmount: Scalars['String']['output'];
  /** The rate of the tax. */
  taxRate: Scalars['String']['output'];
  /** The taxable amount. */
  taxableAmount: Scalars['String']['output'];
};

/** Specifies the identifier input for the conversation recipient. */
export type RecipientIdentifierInput = {
  /** The Recepient's email. */
  email: Scalars['String']['input'];
};

/** The conversation recipient. */
export type RecipientInfo = {
  __typename?: 'RecipientInfo';
  /** The delivery status. */
  mailDeliveryStatus?: Maybe<Scalars['String']['output']>;
  /**
   * The recipient of the conversation.
   * The actual type of this field is User. Returns userId, name and email fields as JSON
   * It is possible that the email conversation can be sent to a user who does not exist in the system, in which case, only the email field will be returned.
   */
  user: Scalars['JSON']['output'];
};

/** Specifies the recurring contract. */
export type RecurringContract = {
  __typename?: 'RecurringContract';
  /** The billing offset of the recurring contract. */
  billingOffset: Scalars['Int']['output'];
  /** The ID of the contract. */
  contractId: Scalars['ID']['output'];
  /** The frequency duration unit of the recurring contract. */
  frequencyDurationUnit: FrequencyDurationUnit;
  /** The frequency interval of the recurring contract. */
  frequencyInterval: Scalars['Int']['output'];
  /** The next bill date of the recurring contract. */
  nextBillDate?: Maybe<Scalars['String']['output']>;
  /** The recurring mode of the recurring contract. */
  recurringMode: RecurringMode;
};

/** Specifies the input required for a recurring contract. */
export type RecurringContractInput = {
  /** The billing offset recurring contract. This input is mandatory if the recurring mode is 'ADVANCE'. */
  billingOffset?: InputMaybe<Scalars['Int']['input']>;
  /** The frequency duration unit of a recurring contract. This input is mandatory. */
  frequencyDurationUnit: FrequencyDurationUnit;
  /** The frequency interval of a recurring contract. This input is mandatory. */
  frequencyInterval: Scalars['Int']['input'];
  /** The recurring mode of a recurring contract. This input is mandatory. */
  recurringMode: RecurringMode;
};

/** Specifies the recurring mode of a recurring contract. */
export enum RecurringMode {
  /** Indicates the contract's recurring mode is 'ADVANCE'. */
  Advance = 'ADVANCE',
  /** Indicates the contract's recurring mode is 'ARREAR'. */
  Arrear = 'ARREAR',
  /** Indicates the contract's recurring mode is 'UPFRONT'. */
  Upfront = 'UPFRONT'
}

/** Specifies the applicable hours type for a redeemable bundle. */
export enum RedeemableBundleApplicableHours {
  /** Indicates that the redeemable bundle is applicable in after hours. */
  AfterHours = 'AFTER_HOURS',
  /** Indicates that the redeemable bundle is applicable in all hours. */
  AllHours = 'ALL_HOURS',
  /** Indicates that the redeemable bundle is applicable in business hours. */
  BusinessHours = 'BUSINESS_HOURS'
}

/** Specifies the applicable items for a redeemable bundle. */
export enum RedeemableBundleApplicableType {
  /** Indicates that redeemable bundle is applicable for all items. */
  AllItems = 'ALL_ITEMS',
  /** Indicates that redeemable bundle is applicable for the included items. */
  IncludedItems = 'INCLUDED_ITEMS'
}

/** Specifies the redeemable contract. */
export type RedeemableContract = {
  __typename?: 'RedeemableContract';
  /** Specifies the applicable type of the redeemable bundle. */
  applicableHours: RedeemableBundleApplicableHours;
  /** Specifies the applicable type of the redeemable bundle. */
  applicableType: RedeemableBundleApplicableType;
  /** Specifies the applicable type of the redeemable bundle. */
  carryForwardRemainingQuantity: Scalars['Boolean']['output'];
  /** The ID of the contract. */
  contractId: Scalars['ID']['output'];
};

/** Contains Details for a Retainer(BLOCK_HOUR/BLOCK_MONEY). */
export type RedeemableServiceBundle = {
  __typename?: 'RedeemableServiceBundle';
  /** Denotes when the retainer can be applied */
  applicableHours: RedeemableBundleApplicableHours;
  /** Denotes Whether the retainer can be used for all items or only included items. If INCLUDED_ITEMS is used it is mandatory to add items under bundledItems */
  applicableType: RedeemableBundleApplicableType;
  /** Identifier of the item */
  itemId: Scalars['ID']['output'];
  /** Quantity that the retainer can be redeemed */
  redeemableQuantity: Scalars['String']['output'];
};

/** The ticket's resolution code. */
export type ResolutionCode = {
  __typename?: 'ResolutionCode';
  /** The description of the resolution code. */
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of the resolution code. */
  id: Scalars['ID']['output'];
  /** The name of the resolution code. */
  name: Scalars['String']['output'];
};

/** Specifies the input required to resolve an existing alert. */
export type ResolveAlertInput = {
  /** ID of the Alert need to be Resolved */
  id: Scalars['ID']['input'];
};

/** The role defines access permissions for user authorization. */
export type Role = {
  __typename?: 'Role';
  /** The description of the role. */
  description?: Maybe<Scalars['String']['output']>;
  /** The name of the role. */
  name: Scalars['String']['output'];
  /** The set of allowed features and permissions. */
  roleFeatureList?: Maybe<Array<Maybe<RoleFeature>>>;
  /** The ID of the role. */
  roleId: Scalars['ID']['output'];
  /** The role type denotes whether the role belongs to a technician or a client user. */
  roleType?: Maybe<RoleType>;
  /**
   * The set of users who has the particular role.
   * The actual type of this field is User. Returns array of objects as JSON, each object contains userId and name fields.
   */
  roleUserList?: Maybe<Scalars['JSON']['output']>;
};

/** The combination of a feature and permitted operations. */
export type RoleFeature = {
  __typename?: 'RoleFeature';
  /** The feature. */
  feature: Feature;
  /** The permitted operations. */
  operationList: Array<Maybe<Operation>>;
};

/** Specifies the identifier input for the role. */
export type RoleIdentifierInput = {
  /** The ID of the role. */
  roleId: Scalars['ID']['input'];
};

/** The role type denotes whether a role belongs to a technician or a client user. */
export type RoleType = {
  __typename?: 'RoleType';
  /** The name of the role. */
  name: Scalars['String']['output'];
  /** The ID of the role type. */
  roleTypeId: Scalars['ID']['output'];
};

/** Specifies the conditional input used to filter the records. */
export type RuleConditionInput = {
  /** The Condition attribute. */
  attribute?: InputMaybe<Scalars['String']['input']>;
  /** The join operator helps specify how multiple conditions should be matched. (This is an optional field.) */
  joinOperator?: InputMaybe<Scalars['String']['input']>;
  /** The list of operands (i.e., conditions) for the join operator. The operands will be matched based on the join operator. (This field is mandatory if joinOperator is given.) */
  operands?: InputMaybe<Array<RuleConditionInput>>;
  /** The Condition operator. */
  operator?: InputMaybe<Scalars['String']['input']>;
  /** The Condition value. */
  value?: InputMaybe<Scalars['JSON']['input']>;
};

/** Specifies the output response of the Run Script Action on an asset */
export type RunScriptData = {
  __typename?: 'RunScriptData';
  /** The action ID Related to the action */
  actionConfigId?: Maybe<Scalars['ID']['output']>;
  /** Specifies the user who created the action */
  addedBy?: Maybe<Scalars['JSON']['output']>;
  /** The configured script for the action */
  script?: Maybe<Scalars['JSON']['output']>;
  /** The script arguments passed to the script while running */
  scriptArguments?: Maybe<Scalars['JSON']['output']>;
};

/** Specifies the input required to run a script on an asset */
export type RunScriptInput = {
  /** The ID of the asset on which the script needs to be run on */
  assetId: Scalars['ID']['input'];
  /**
   * The script's runtime arguments that need to be passed to run this script
   * ex:[{"name": "appName", "value": "SuperOps.ai"},{"name": "downloadURL", "value": "superops.ai/download"}] here appName is used inside script like $appName for that variable the value will be "SuperOps.ai"
   */
  scriptArguments?: InputMaybe<Scalars['JSON']['input']>;
  /** The ID of the script needs to be triggered */
  scriptId: Scalars['ID']['input'];
};

/** The SLA for ticket. */
export type Sla = {
  __typename?: 'SLA';
  /** The ID of the SLA. */
  id: Scalars['ID']['output'];
  /** The name of the SLA. */
  name: Scalars['String']['output'];
};

/** Specifies the identifier input for the SLA. */
export type SlaIdentifierInput = {
  /** The ID of the SLA. */
  id: Scalars['ID']['input'];
};

/** Specifies the script's details */
export type Script = {
  __typename?: 'Script';
  /** The user that created the script */
  addedBy?: Maybe<Scalars['JSON']['output']>;
  /** The time of creation of the Script */
  createdTime?: Maybe<Scalars['String']['output']>;
  /** Description of the script */
  description?: Maybe<Scalars['String']['output']>;
  /** Specifies whether this script marked as a Favourite */
  favourite?: Maybe<Scalars['Boolean']['output']>;
  /** Language of the script */
  language?: Maybe<Scalars['String']['output']>;
  /** Name of the script */
  name?: Maybe<Scalars['String']['output']>;
  /** ReadMe content of the script */
  readMe?: Maybe<Scalars['String']['output']>;
  /** 'Run as' configuration of the script. Ex: run as SystemUser/LoggedInUser */
  runAs?: Maybe<Scalars['String']['output']>;
  /** Script runtime variable that needs to be passed while running this script */
  runTimeVariables?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** ID of the script */
  scriptId: Scalars['ID']['output'];
  /** Tags of the script */
  tags?: Maybe<Scalars['JSON']['output']>;
  /** Timeout of the script, in seconds */
  timeOut?: Maybe<Scalars['Int']['output']>;
};

/** Specifies the list of scripts that are fetched */
export type ScriptList = {
  __typename?: 'ScriptList';
  /** details about the list */
  listInfo?: Maybe<ListInfo>;
  /** specifies the list of scripts */
  scripts?: Maybe<Array<Maybe<Script>>>;
};

/** Specifies the input required to fetch a script list, including predefined scripts by OS type */
export type ScriptListByTypeInput = {
  /** List info details */
  listInfo?: InputMaybe<ListInfoInput>;
  /** Specifies the type of script Ex: WINDOWS or MAC */
  type: Scalars['String']['input'];
};

/** The service catalog item */
export type ServiceCatalogItem = {
  __typename?: 'ServiceCatalogItem';
  /** The category of the service catalog item. */
  category?: Maybe<ServiceCategory>;
  /** The cost price of the item. */
  costPrice?: Maybe<PricingModel>;
  /** The service catalog item's description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of the service catalog item. */
  itemId: Scalars['ID']['output'];
  /** The type of the service catalog item. */
  itemType: ServiceCatalogItemType;
  /** The name of the service catalog item. It is unique in the Catalog. */
  name: Scalars['String']['output'];
  /** If the itemType is PRODUCT or itemType is SERVICE and offeringType is QUANTITY, it denotes whether the service catalog item can be used in worklog. */
  offerAsWorklogItem?: Maybe<Scalars['Boolean']['output']>;
  /** Sales tax for the item */
  salesTax?: Maybe<Tax>;
  /** The selling price of the item. */
  sellingPrice?: Maybe<PricingModel>;
  /** Details of an Item for itemType SERVICE. */
  serviceTypeItem?: Maybe<ServiceTypeItem>;
  /** It denotes the status of the service catalog item */
  status?: Maybe<ServiceCatalogItemStatus>;
  /** It is set to true if the item is taxable */
  taxable?: Maybe<Scalars['Boolean']['output']>;
};

/** Specifies the identifier input for service catalog item. */
export type ServiceCatalogItemIdentifierInput = {
  /** The ID of the service catalog item. */
  itemId: Scalars['ID']['input'];
};

/** The response payload for list of service catalog items fetched. */
export type ServiceCatalogItemList = {
  __typename?: 'ServiceCatalogItemList';
  /** The list of service catalog items. */
  items?: Maybe<Array<Maybe<ServiceCatalogItem>>>;
  /** The detail about the list. */
  listInfo?: Maybe<ListInfo>;
};

/** Specifies the status of the item */
export enum ServiceCatalogItemStatus {
  /** Indicates that the listed item is available for use. */
  Active = 'ACTIVE',
  /** Indicates that the listed item is currently unavailable for use. */
  Inactive = 'INACTIVE'
}

/** Defines the type of item. */
export enum ServiceCatalogItemType {
  /** Represents an item that is a product for sale. */
  Product = 'PRODUCT',
  /** Represents an item that is a service being offered. */
  Service = 'SERVICE'
}

/** The response payload for the service category. */
export type ServiceCategory = {
  __typename?: 'ServiceCategory';
  /** The ID of the service category. */
  categoryId: Scalars['ID']['output'];
  /** The name of the service category. */
  name: Scalars['String']['output'];
};

/** Specifies the identifier input for the service category. */
export type ServiceCategoryIdentifierInput = {
  /** The ID of the category. */
  categoryId: Scalars['ID']['input'];
};

/** The service item */
export type ServiceItem = {
  __typename?: 'ServiceItem';
  /** Denotes whether block money/items can be adjusted for the service item against all items. */
  adjustBlockItemAgainstAllItems?: Maybe<Scalars['Boolean']['output']>;
  /** The unit price of the service item for after hours. */
  afterHoursUnitPrice?: Maybe<Scalars['String']['output']>;
  /** The amount of the service item (applicable for block hour/money items). */
  amount?: Maybe<Scalars['String']['output']>;
  /** The list of identifier inputs for block items. */
  blockItemAdjustedItems?: Maybe<Array<Maybe<ServiceItem>>>;
  /** Denotes the usage type of the block item. */
  blockItemUsedIn?: Maybe<Block_Item_Usage_Type>;
  /** The unit price of the service item for business hours. */
  businessHoursUnitPrice?: Maybe<Scalars['String']['output']>;
  /** The category of the service item. */
  category?: Maybe<ServiceCategory>;
  /** The service item's description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of the service item. */
  itemId: Scalars['ID']['output'];
  /** The name of the service item. */
  name: Scalars['String']['output'];
  /** The quantity of the service item (applicable for block hour/money items). */
  quantity?: Maybe<Scalars['String']['output']>;
  /** The type of the service item. */
  quantityType: ServiceItemQuantityType;
  /** The rounded value of the service item. */
  roundUpValue?: Maybe<Scalars['Int']['output']>;
  /** Returns the specified tax rate. */
  salesTax?: Maybe<Tax>;
  /** Denotes whether the sales tax has been enabled. */
  salesTaxEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** The unit price of the service item. */
  unitPrice?: Maybe<Scalars['String']['output']>;
  /** If the quantityType is UNITS, it denotes whether the service item can be used in worklog. */
  useAsWorklogItem?: Maybe<Scalars['Boolean']['output']>;
};

/** Specifies the identifier input for the service item. */
export type ServiceItemIdentifierInput = {
  /** The ID of the service item. */
  itemId: Scalars['ID']['input'];
};

/** The response payload for list of service items fetched. */
export type ServiceItemList = {
  __typename?: 'ServiceItemList';
  /** The list of service items. */
  items?: Maybe<Array<Maybe<ServiceItem>>>;
  /** The detail about the list. */
  listInfo?: Maybe<ListInfo>;
};

/** The type of the service item. */
export enum ServiceItemQuantityType {
  /** Denotes the block hour service. */
  BlockHours = 'BLOCK_HOURS',
  /** Denotes the block money service. */
  BlockMoney = 'BLOCK_MONEY',
  /** Denotes the service. */
  Hours = 'HOURS',
  /** Denotes the product. */
  Units = 'UNITS'
}

/** Contains additional details specific to the SERVICE itemType of an Item */
export type ServiceTypeItem = {
  __typename?: 'ServiceTypeItem';
  /** Contains a list of item which can be use by a Package or a Retainer Item. It is mandatory for offering type BLOCK_HOUR, BLOCK_MONEY, SERVICE_BUNDLE. */
  bundledItems?: Maybe<Array<ServiceCatalogItem>>;
  /** Contains details for HOURS type SERVICE item */
  hourlyServiceTypeItem?: Maybe<HourlyServiceTypeItem>;
  /** Identifier of the item */
  itemId: Scalars['ID']['output'];
  /** Denotes the type in which the SERVICE itemType item is offered to a client */
  offeringType: ServiceTypeItemOfferingType;
  /** Contains details required by a Retainer. It is mandatory for BLOCK_HOUR and BLOCK_MONEY */
  redeemableServiceBundle?: Maybe<RedeemableServiceBundle>;
};

/** Denotes how the SERVICE item is offered to clients */
export enum ServiceTypeItemOfferingType {
  /** A block of Hours Prepaid, Available for consumption by the items included under it */
  BlockHour = 'BLOCK_HOUR',
  /** A block of Money Prepaid, Available for consumption by the items included under it */
  BlockMoney = 'BLOCK_MONEY',
  /** Used for manual service offered for the client */
  Hours = 'HOURS',
  /** A product is offered as a service to a client */
  Quantity = 'QUANTITY',
  /** A package of items bundled which is offered to a client */
  ServiceBundle = 'SERVICE_BUNDLE'
}

/** Defines how the available records will be sorted. */
export type Sort = {
  __typename?: 'Sort';
  /** The sort attribute. */
  attribute?: Maybe<Scalars['String']['output']>;
  /** Denotes the order of the sorting. */
  order?: Maybe<SortOrder>;
};

/** Specifies the input required for sorting. */
export type SortInput = {
  /** The sort attribute. */
  attribute?: InputMaybe<Scalars['String']['input']>;
  /** Moves the null values to the end of the list */
  emptyAtLast?: InputMaybe<Scalars['Boolean']['input']>;
  /** Denotes the order of the sorting. */
  order?: InputMaybe<SortOrder>;
};

/** Specifies the order in which the records will be sorted ie. ascending or descending. */
export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** The ticket status. */
export type Status = {
  __typename?: 'Status';
  /** The description of the status. */
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of the status. */
  id: Scalars['ID']['output'];
  /** The name of the status. */
  name: Scalars['String']['output'];
};

/** The ticket subcategory. */
export type SubCategory = {
  __typename?: 'SubCategory';
  /** The ID of the subcategory. */
  id: Scalars['ID']['output'];
  /** The name of the subcategory */
  name: Scalars['String']['output'];
};

/** The ticket sub cause. */
export type SubCause = {
  __typename?: 'SubCause';
  /** The description of the sub cause. */
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of the sub cause. */
  id: Scalars['ID']['output'];
  /** The name of the sub cause. */
  name: Scalars['String']['output'];
};

/** Specifies The input Required to fetch SuperOps Asset Info */
export type TpAssetInfoInput = {
  /** SuperOps ThirdParty Integration Reference ID */
  integrationRefId: Scalars['ID']['input'];
  /** The Endpoint ID of the ThirdParty Integration */
  tpEndpointIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Specifies The SuperOps Asset Info for Given TP Endpoint Ids */
export type TpEndpointAssetInfo = {
  __typename?: 'TPEndpointAssetInfo';
  /** SuperOps Asset Info For Respective ThirdParty Integration Endpoint ID */
  superOpsAssetInfo?: Maybe<Asset>;
  /** The Endpoint ID of the ThirdParty Integration */
  tpEndpointId?: Maybe<Scalars['String']['output']>;
};

/** specifies the input required to get Integration data mapping by TP Item Id */
export type TpItemsInput = {
  /** Third party Integration ID provided by Superops */
  integrationRefId: Scalars['ID']['input'];
  /** Third party entity ID mapped with superops entity */
  tpEntityId: Scalars['String']['input'];
  /** Third party item ID mapped with Superops item */
  tpItemIds: Array<InputMaybe<Scalars['String']['input']>>;
};

/** The major work (ticket or project) can be divided into multiple units of tasks. The task can also delegated to other technicians. */
export type Task = {
  __typename?: 'Task';
  /** The actual end datetime of the task i.,e when the task status is set to COMPLETED. */
  actualEndDate?: Maybe<Scalars['String']['output']>;
  /** The actual start datetime of the task i.,e when the task status is set to PROGRESS first time. */
  actualStartDate?: Maybe<Scalars['String']['output']>;
  /** The description of the task. */
  description?: Maybe<Scalars['String']['output']>;
  /** The human readable ID of the task. */
  displayId: Scalars['ID']['output'];
  /** The due datetime of the task */
  dueDate?: Maybe<Scalars['String']['output']>;
  /** The estimated time of the task in minutes. */
  estimatedTime?: Maybe<Scalars['Int']['output']>;
  /**
   * The entity for which the task is created.
   * @deprecated The module field within the workItem field replaces this field
   */
  module?: Maybe<TaskModule>;
  /** Indicates whether the task is overdue i.e, crossed the due time. */
  overdue?: Maybe<Scalars['Boolean']['output']>;
  /** The scheduled start datetime of the task. */
  scheduledStartDate?: Maybe<Scalars['String']['output']>;
  /** The status of the task. */
  status: Scalars['String']['output'];
  /** The ID of the task. */
  taskId: Scalars['ID']['output'];
  /** The Order in which the tasks should be displayed in UI */
  taskOrder?: Maybe<Scalars['Int']['output']>;
  /**
   * The technician group to which the task is assigned.
   * The actual type of this field is TechnicianGroup. Returns groupId and name fields as JSON.
   * The name field can be used in the filter condition.
   */
  techGroup?: Maybe<Scalars['JSON']['output']>;
  /**
   * The technician to whom the task is assigned.
   * The actual type of this field is Technician. Returns userId and name fields as JSON.
   * The name and email fields can be used in the filter condition.
   */
  technician?: Maybe<Scalars['JSON']['output']>;
  /**
   * The ticket under which the task is created. Available only if the module is TICKET.
   * The actual type of this field is Ticket. Returns ticketId, displayId, subject fields as JSON.
   * The displayId and subject can be used in the filter condition.
   * @deprecated The workItem field replaces this field
   */
  ticket?: Maybe<Scalars['JSON']['output']>;
  /** The title of the task. */
  title: Scalars['String']['output'];
  /**
   * It indicates the work item (ticket/project) to which the task belongs. The actual type of this
   * field is WorkItem. Returns workId, displayId, module fields as JSON
   */
  workItem?: Maybe<Scalars['JSON']['output']>;
};

/** Specifies the identifier input for the task. */
export type TaskIdentifierInput = {
  /** The ID of the task. */
  taskId: Scalars['ID']['input'];
};

/** The response payload for list of tasks fetched. */
export type TaskList = {
  __typename?: 'TaskList';
  /** The detail about the list. */
  listInfo?: Maybe<ListInfo>;
  /** The list of tasks. */
  tasks?: Maybe<Array<Maybe<Task>>>;
};

/** Represents the entity/type. */
export enum TaskModule {
  /** The ticket entity. */
  Ticket = 'TICKET'
}

/** The response payload for the tax. */
export type Tax = {
  __typename?: 'Tax';
  /** The name of the tax. */
  name: Scalars['String']['output'];
  /** The list of tax rates. */
  rates?: Maybe<Array<Maybe<TaxRate>>>;
  /** The ID of the tax. */
  taxId: Scalars['ID']['output'];
  /** The sum of all the tax rates. */
  totalRate?: Maybe<Scalars['String']['output']>;
};

/** Specifies the identifier input for the tax. */
export type TaxIdentifierInput = {
  /** The ID of the tax. */
  taxId: Scalars['ID']['input'];
};

/** The response payload for the list of taxes. */
export type TaxList = {
  __typename?: 'TaxList';
  /** The details about the list. */
  listInfo?: Maybe<ListInfo>;
  /** The list of taxes. */
  taxes?: Maybe<Array<Maybe<Tax>>>;
};

/** Specifies the response for tax rates. */
export type TaxRate = {
  __typename?: 'TaxRate';
  /** The name of the tax rate. */
  name: Scalars['String']['output'];
  /** The ID of the tax rate. */
  rateId: Scalars['ID']['output'];
  /** The value of the tax rate. */
  rateValue: Scalars['String']['output'];
};

/** The technician's team. */
export type Team = {
  __typename?: 'Team';
  /** The name of the team. */
  name: Scalars['String']['output'];
  /** The ID of the team. */
  teamId: Scalars['ID']['output'];
};

/** Specifies the identifier input for the technician's team. */
export type TeamIdentifierInput = {
  /** The ID of the team. */
  teamId: Scalars['ID']['input'];
};

/** The user of the MSP. */
export type Technician = {
  __typename?: 'Technician';
  /**
   * The business function of the technician.
   * The actual type of this field is BusinessFunction. Returns as JSON, object contains businessFunctionId and name fields.
   */
  businessFunction?: Maybe<Scalars['JSON']['output']>;
  /**
   * The contact number of the technician.
   * It is recommended to provide the value in the standard format [+][country code][area code][local phone number].
   */
  contactNumber?: Maybe<Scalars['String']['output']>;
  /**
   * The designation of the technician.
   * The actual type of this field is Designation. Returns as JSON, object contains designationId and name fields.
   */
  designation?: Maybe<Scalars['JSON']['output']>;
  /** The email address of the technician. */
  email: Scalars['String']['output'];
  /** The email signature of the technician which will be used in their email responses. */
  emailSignature?: Maybe<Scalars['String']['output']>;
  /** The first name of the technician. */
  firstName: Scalars['String']['output'];
  /**
   * The list of technician groups to which the technician is associated.
   * The actual type of this field is Technician Group. Returns array of objects as JSON, each object contains groupId and name fields.
   */
  groups?: Maybe<Scalars['JSON']['output']>;
  /** The last name of the technician. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** The full name of the technician. */
  name: Scalars['String']['output'];
  /**
   * The technician's reporting manager.
   * The actual type of this field is User. Returns as JSON, object contains userId and name fields.
   */
  reportingManager?: Maybe<Scalars['JSON']['output']>;
  /**
   * The application role of the technician.
   * The actual type of this field is Role. Returns as JSON, object contains roleId and name fields.
   */
  role?: Maybe<Scalars['JSON']['output']>;
  /**
   * The technician's team.
   * The actual type of this field is Team. Returns as JSON, object contains teamId and name fields.
   */
  team?: Maybe<Scalars['JSON']['output']>;
  /** The ID of the technician. */
  userId: Scalars['ID']['output'];
};

/**
 * Technician groups help group a set of technicians together based on function, expertise, etc for the purpose of easy assignment of tickets.
 * Clients can be associated to one or more technician groups so that the technicians in those groups can access the client's data.
 */
export type TechnicianGroup = {
  __typename?: 'TechnicianGroup';
  /** The ID of the technician group. */
  groupId: Scalars['ID']['output'];
  /** The name of the technician group. */
  name: Scalars['String']['output'];
};

/** Specifies the identifier input for the technician group. */
export type TechnicianGroupIdentifierInput = {
  /** The ID of the technician group. */
  groupId: Scalars['ID']['input'];
};

/** Specifies the identifier input for the technician. */
export type TechnicianIdentifierInput = {
  /** The ID of the technician. */
  userId: Scalars['ID']['input'];
};

/** The response payload for list of technicians fetched. */
export type TechnicianList = {
  __typename?: 'TechnicianList';
  /** The detail about the list. */
  listInfo?: Maybe<ListInfo>;
  /** The list of technicians. */
  userList?: Maybe<Array<Maybe<Technician>>>;
};

/** Specifies the Third Party Integration source details Input */
export type ThirdPartySourceInput = {
  /** Third party Integration ID provided by Superops */
  integrationId: Scalars['ID']['input'];
  /** Third party item ID to be mapped with Superops item. */
  tpItemId: Scalars['String']['input'];
};

/** The ticket is a type of record used to track and manage issues or requests */
export type Ticket = {
  __typename?: 'Ticket';
  /**
   * The list of client users who act as additional requesters.
   * The actual type of this field is ClientUser. Returns array of objects as JSON, each object contains userId and name fields.
   */
  additionalRequester?: Maybe<Scalars['JSON']['output']>;
  /** The approval status of the ticket. */
  approvalStatus?: Maybe<Scalars['String']['output']>;
  /** The category of the ticket. */
  category?: Maybe<Scalars['String']['output']>;
  /** The cause of the ticket. */
  cause?: Maybe<Scalars['String']['output']>;
  /**
   * The client to whom the ticket is associated.
   * The actual type of this field is Client. Returns accountId and name fields as JSON.
   * The name field can be used in the filter condition.
   */
  client?: Maybe<Scalars['JSON']['output']>;
  /** The time when the ticket was created. */
  createdTime?: Maybe<Scalars['String']['output']>;
  /**
   * Specifies the custom field values for the ticket. Each entry in the JSON would be a key-value.
   * The key will be a system-generated unique name of the custom field (columnName field of CustomField type).
   * The value for text, paragraph, radio, select, numeric, decimal, date, datetime should be given as a string.
   * The value for checkbox, multi-select should be an array of string.
   *
   * For example, the value could be {"udf1text": "value", "udf2mselect": ["value1", "value2"]}
   */
  customFields?: Maybe<Scalars['JSON']['output']>;
  /** The system-generated, human-readable ID of the ticket. */
  displayId: Scalars['String']['output'];
  /** The due time of first response metric. */
  firstResponseDueTime?: Maybe<Scalars['String']['output']>;
  /** The first response time of the ticket. */
  firstResponseTime?: Maybe<Scalars['String']['output']>;
  /** Denotes whether the first response metric is violated. */
  firstResponseViolated?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The list of technicians who follow the ticket.
   * The actual type of this field is Technician. Returns array of objects as JSON, each object contains userId and name fields.
   */
  followers?: Maybe<Scalars['JSON']['output']>;
  /** The impact of the ticket. */
  impact?: Maybe<Scalars['String']['output']>;
  /** The priority of the ticket. */
  priority?: Maybe<Scalars['String']['output']>;
  /** Specifies the type of the ticket. */
  requestType?: Maybe<Scalars['String']['output']>;
  /**
   * The client user for whom the ticket is created.
   * The actual type of this field is ClientUser. Returns userId and name fields as JSON.
   * The name and email fields can be used in the filter condition.
   */
  requester?: Maybe<Scalars['JSON']['output']>;
  /** The resolution code of the ticket. */
  resolutionCode?: Maybe<Scalars['String']['output']>;
  /** The due time of resolution metric. */
  resolutionDueTime?: Maybe<Scalars['String']['output']>;
  /** The resolution time of the ticket. */
  resolutionTime?: Maybe<Scalars['String']['output']>;
  /** Denotes whether the resolution metric is violated. */
  resolutionViolated?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The site to which the ticket is associated.
   * The actual type of this field is ClientSite. Returns ID and name fields as JSON.
   * The name field can be used in the filter condition.
   */
  site?: Maybe<Scalars['JSON']['output']>;
  /**
   * The SLA of the ticket.
   * The actual type of this field is SLA. Returns id and name fields as JSON.
   */
  sla?: Maybe<Scalars['JSON']['output']>;
  /** The creation source of the ticket. */
  source: TicketSource;
  /** The status of the ticket. */
  status?: Maybe<Scalars['String']['output']>;
  /** The subcategory of the ticket. */
  subcategory?: Maybe<Scalars['String']['output']>;
  /** The sub cause of the ticket. */
  subcause?: Maybe<Scalars['String']['output']>;
  /** The subject of the ticket. */
  subject: Scalars['String']['output'];
  /**
   * The technician group to which the ticket is assigned.
   * The actual type of this field is TechnicianGroup. Returns groupId and name fields as JSON.
   * The name field can be used in the filter condition.
   */
  techGroup?: Maybe<Scalars['JSON']['output']>;
  /**
   * The technician to whom the ticket is assigned.
   * The actual type of this field is Technician. Returns userId and name fields as JSON.
   * The name and email fields can be used in the filter condition.
   */
  technician?: Maybe<Scalars['JSON']['output']>;
  /** The ID of the ticket. */
  ticketId: Scalars['ID']['output'];
  /**
   * The type of the ticket.
   * @deprecated As Ticket Type value is customizable, instead of this field, requestType field will have the value
   */
  ticketType?: Maybe<Scalars['String']['output']>;
  /** The time when the ticket was updated. */
  updatedTime?: Maybe<Scalars['String']['output']>;
  /** The urgency of the ticket. */
  urgency?: Maybe<Scalars['String']['output']>;
};


/** The ticket is a type of record used to track and manage issues or requests */
export type TicketCustomFieldsArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** The conversations of the ticket. */
export type TicketConversation = {
  __typename?: 'TicketConversation';
  /** The list of attachments. */
  attachments?: Maybe<Array<Maybe<Attachment>>>;
  /** The list of BCC recipients. */
  bccUsers?: Maybe<Array<Maybe<RecipientInfo>>>;
  /** The list of CC recipients. */
  ccUsers?: Maybe<Array<Maybe<RecipientInfo>>>;
  /** The content/description of the conversation. */
  content?: Maybe<Scalars['String']['output']>;
  /** The ID of the conversation */
  conversationId: Scalars['ID']['output'];
  /** The created datetime of the conversation. */
  time: Scalars['String']['output'];
  /** The list of TO recipients. */
  toUsers?: Maybe<Array<Maybe<RecipientInfo>>>;
  /** The type of the ticket conversation. */
  type: TicketConversationType;
  /**
   * The user who created the conversation.
   * The actual type of this field is User. Returns userId, name and email fields as JSON.
   * It is possible that the user who not exist in the system can create the conversation (through email), returns email field only in that case.
   */
  user?: Maybe<Scalars['JSON']['output']>;
};

/** Denotes the type of the ticket conversation. */
export enum TicketConversationType {
  /** Denotes the description of the ticket since it will be created as the first message of a conversation. */
  Description = 'DESCRIPTION',
  /** Denotes the requester notification. */
  ReqNotification = 'REQ_NOTIFICATION',
  /** Denotes the requester reply. */
  ReqReply = 'REQ_REPLY',
  /** Denotes the technician notification. */
  TechNotification = 'TECH_NOTIFICATION',
  /** Denotes the technician reply. */
  TechReply = 'TECH_REPLY'
}

/** Specifies the identifier input for the ticket. */
export type TicketIdentifierInput = {
  /** The ID of the ticket. */
  ticketId: Scalars['ID']['input'];
};

/** The response payload for list of tickets fetched. */
export type TicketList = {
  __typename?: 'TicketList';
  /** The detail about the list. */
  listInfo?: Maybe<ListInfo>;
  /** The list of tickets. */
  tickets?: Maybe<Array<Maybe<Ticket>>>;
};

/** The creation source of the ticket. */
export enum TicketSource {
  /** Denotes the ticket is created from SuperOps agent (i.,e from tray icon). */
  Agent = 'AGENT',
  /** Denotes the ticket is created from AI */
  Ai = 'AI',
  /** Denotes the ticket is created from contract. */
  Contract = 'CONTRACT',
  /** Denotes the ticket is created from contract reminder. */
  ContractReminder = 'CONTRACT_REMINDER',
  /** Denotes the ticket is created from email. */
  Email = 'EMAIL',
  /** Denotes the ticket is created from the form. */
  Form = 'FORM',
  /** Denotes the ticket is created via Integration Platform. */
  Integration = 'INTEGRATION',
  /** Denotes the ticket is created from Phone. */
  Phone = 'PHONE',
  /** Denotes the ticket is created from Ticket Schedule. */
  Schedule = 'SCHEDULE'
}

/** specifies the input to update an Asset API */
export type UpdateAssetInput = {
  /** The ID of the asset which needs to be updated */
  assetId: Scalars['ID']['input'];
  /** Client details of the asset to be updated */
  client?: InputMaybe<ClientIdentifierInput>;
  /** The custom fields that need to be updated */
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  /** Name of the asset to be updated */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The Purchased Date of the Asset */
  purchasedDate?: InputMaybe<Scalars['String']['input']>;
  /** The requester that needs to be updated */
  requester?: InputMaybe<ClientUserIdentifierInput>;
  /** Site details of the asset to be updated */
  site?: InputMaybe<ClientSiteIdentifierInput>;
  /** The Warranty Expiration Date of the Asset */
  warrantyExpiryDate?: InputMaybe<Scalars['String']['input']>;
};

/** Specifies the input required to update a billable contract. */
export type UpdateBillableContractInput = {
  /** Specifies the billable contract quantity change input details. */
  change?: InputMaybe<BillableContractQuantityChangeInput>;
  /** The selling price of the contract, applicable if the price is overridden. */
  sellingPrice?: InputMaybe<PricingModelInput>;
  /** Indicates whether the contract's selling price is overridden. */
  sellingPriceOverridden?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies the input required to update a client contract. */
export type UpdateClientContractInput = {
  /** Specifies the contract input. */
  contract: UpdateContractInput;
  /** Specifies the contract's end date. */
  endDate?: InputMaybe<Scalars['String']['input']>;
};

/** Specifies input required to update an existing client. */
export type UpdateClientInput = {
  /** The ID of the client who is going to be updated. */
  accountId: Scalars['ID']['input'];
  /** Specifies the account manager of the client. */
  accountManager?: InputMaybe<TechnicianIdentifierInput>;
  /** Specifies the list of technician groups to be associated to the client. */
  addTechnicianGroups?: InputMaybe<Array<InputMaybe<TechnicianGroupIdentifierInput>>>;
  /**
   * Specifies the custom fields values for the client. Each entry in the JSON would be key-value.
   * The key will be system generated unique name of the custom field (columnName field of CustomField type).
   * The value for text, paragraph, radio, select, numeric, decimal, date, datetime should be given as a string.
   * The value for checkbox, multi select should be array of string.
   *
   * For example, the value could be {"udf1text": "value", "udf2mselect": ["value1", "value2"]}
   */
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  /** Specifies the list of technician groups to be disassociated to the client. */
  deleteTechnicianGroups?: InputMaybe<Array<InputMaybe<TechnicianGroupIdentifierInput>>>;
  /**
   * Specifies the list of email domains (for example, acme.com) of the client. These domains will be used to identify the client
   * when receiving emails from the client user. This input must be unique.
   */
  emailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specifies the headquarters site of the client. */
  hqSite?: InputMaybe<ClientSiteIdentifierInput>;
  /** Specifies the name of the client. Cannot be set to null. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the primary contact of the client. */
  primaryContact?: InputMaybe<ClientUserIdentifierInput>;
  /** Specifies the secondary contact of the client. */
  secondaryContact?: InputMaybe<ClientUserIdentifierInput>;
  /** Specifies the stage of the client. Cannot be set to null. */
  stage?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the status of the client. */
  status?: InputMaybe<Scalars['String']['input']>;
};

/** Specifies the input required to update the client user association. */
export type UpdateClientUserAssociationInput = {
  /** Specifies the ID of the association. */
  id: Scalars['ID']['input'];
  /** Specifies the site which will be updated. */
  site: ClientSiteIdentifierInput;
};

/** Specifies the input required to update the information of an existing client user ie. requester. */
export type UpdateClientUserInput = {
  /**
   * Specifies the contact number of the client user.
   * It is recommended to provide the value in the standard format [+][country code][area code][local phone number].
   */
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  /**
   * Specifies the custom fields values for the client user. Each entry in the JSON would be key-value.
   * The key will be a system-generated, unique name of the custom field (columnName field of CustomField type).
   * The value for text, paragraph, radio, select, numeric, decimal, date, datetime should be given as a string.
   * The value for checkbox, multi-select should be an array of string.
   *
   * For example, the value could be {"udf1text": "value", "udf2mselect": ["value1", "value2"]}
   */
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  /** Specifies the email address of the client user. Cannot be set to null. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the first name of the client user. Cannot be set to null. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the last name of the client user. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the reporting manager identifier input for the client user. */
  reportingManager?: InputMaybe<ClientUserIdentifierInput>;
  /** Specifies the application role identifier input for the client user. Cannot be set to null. */
  role?: InputMaybe<RoleIdentifierInput>;
  /** Specifies the site identifier input for the client user. Cannot be set to null. */
  site?: InputMaybe<ClientSiteIdentifierInput>;
  /** Specifies ID of the client user whose recored is to be updated. */
  userId: Scalars['ID']['input'];
};

/** Specifies the input required to update a contract. */
export type UpdateContractInput = {
  /** Specifies the billable contract input. */
  billableContract?: InputMaybe<UpdateBillableContractInput>;
  /** The ID of the contract to be updated. */
  contractId: Scalars['ID']['input'];
};

/** Specifies the input required to update an existing field of an entity */
export type UpdateFieldInput = {
  /** This is for adding the options for a custom field */
  addOptions?: InputMaybe<Array<InputMaybe<CreateFieldOptionInput>>>;
  /** This is for deleting the options in a custom field */
  deleteOptions?: InputMaybe<Array<InputMaybe<IdentifierInput>>>;
  /** The description of the field */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the Field. */
  id: Scalars['ID']['input'];
  /** The label of the field */
  label?: InputMaybe<Scalars['String']['input']>;
  /** This is for fields of TICKET module whether the field value is mandatory when ticket is closed or resolved */
  mandatoryOnClosure?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is for fields of TICKET module whether the field value is mandatory when ticket is created */
  mandatoryOnCreate?: InputMaybe<Scalars['Boolean']['input']>;
  /** The field which denotes whether field should be visible to requesters or not */
  showToRequester?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is for updating the options in a custom field */
  updateOptions?: InputMaybe<Array<InputMaybe<UpdateFieldOptionInput>>>;
};

/** Specifies the the update option input */
export type UpdateFieldOptionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Specifies the input required to update an existing invoice. */
export type UpdateInvoiceInput = {
  /** The due date of the invoice */
  dueDate?: InputMaybe<Scalars['String']['input']>;
  /** The creation date of the invoice. */
  invoiceDate?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the invoice going to be updated. */
  invoiceId: Scalars['ID']['input'];
  /** The payment term of the invoice. */
  invoicePaymentTerm?: InputMaybe<PaymentTermIdentifierInput>;
  /** The payment date of the invoice. */
  paymentDate?: InputMaybe<Scalars['String']['input']>;
  paymentLink?: InputMaybe<Scalars['String']['input']>;
  /** The payment method of the invoice. */
  paymentMethod?: InputMaybe<PaymentMethodIdentifierInput>;
  /**
   * Specifies comments, notes, or references related to a payment, providing additional context or information.
   * The maximum length of the value is 255 characters.
   */
  paymentReference?: InputMaybe<Scalars['String']['input']>;
  /** The status of the invoice. */
  statusEnum?: InputMaybe<InvoiceStatus>;
};

/** Specifies the input required to update an existing IT document */
export type UpdateItDocumentationInput = {
  /** Client details that need to be updated */
  client?: InputMaybe<ClientIdentifierInput>;
  /** Custom fields that need to be updated */
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  /** The ID of the IT document that needs to be updated */
  itDocId: Scalars['ID']['input'];
  /** The name that needs to be updated for the IT document */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Site details that need to be updated */
  site?: InputMaybe<ClientSiteIdentifierInput>;
  /** Type ID of the IT document category */
  typeId: Scalars['ID']['input'];
};

/** Specifies the input required to update a quote. */
export type UpdateQuoteInput = {
  /** Specifies the list of service items to be added to the quote. */
  addItems?: InputMaybe<Array<InputMaybe<CreateQuoteItemInput>>>;
  /** Specifies the additional discount amount applied on the quote. */
  additionalDiscount?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the additional discount rate applied on the quote. */
  additionalDiscountRate?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the list of quote items to be deleted from the quote. */
  deleteItems?: InputMaybe<Array<InputMaybe<QuoteItemIdentifierInput>>>;
  /** Specifies the description of the quote. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the expiry date of the quote. */
  expiryDate?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the footer of the quote. */
  footer?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the memo of the quote. */
  memo?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the quote date. */
  quoteDate?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the ID of the quote going to be updated. */
  quoteId: Scalars['ID']['input'];
  /** Specifies the status of the quote. */
  statusEnum?: InputMaybe<QuoteStatusEnum>;
  /** Specifies the title of the quote. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the list of quote items to be updated in the quote. */
  updateItems?: InputMaybe<Array<InputMaybe<UpdateQuoteItemInput>>>;
};

/** Specifies the input required to update a quote item. */
export type UpdateQuoteItemInput = {
  /** Specifies the details of the quote item. */
  details?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the discount amount applied for the quote item. */
  discountAmount?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the discount rate applied for the quote item. */
  discountRate?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the ID of the quote item which needs to be updated. */
  itemId: Scalars['ID']['input'];
  /** Specifies the quantity of the quote item. */
  quantity?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the service item. */
  serviceItem?: InputMaybe<ServiceItemIdentifierInput>;
  /** Specifies the applicable tax for the quote item. */
  tax?: InputMaybe<TaxIdentifierInput>;
  /** Specifies whether the quote item is taxable or not. */
  taxable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specifies the unit price of the quote item. */
  unitPrice?: InputMaybe<Scalars['String']['input']>;
};

/** Specifies the input required to update the information of an existing technician. */
export type UpdateTechnicianInput = {
  /** Specifies the list of technician groups that the technician will be associated with. */
  addGroups?: InputMaybe<Array<InputMaybe<TechnicianGroupIdentifierInput>>>;
  /** Specifies the business function of the technician. */
  businessFunction?: InputMaybe<BusinessFunctionIdentifierInput>;
  /**
   * The contact number of the technician.
   * It is recommended to provide the value in the standard format [+][country code][area code][local phone number].
   */
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  /** Specified the list of technician groups from which the technician will be disassociated. */
  deleteGroups?: InputMaybe<Array<InputMaybe<TechnicianGroupIdentifierInput>>>;
  /** Specifies the designation of the technician. */
  designation?: InputMaybe<DesignationIdentifierInput>;
  /** The email address of the technician. This input cannot be set to null. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The email signature of the technician which will be used in email reply. */
  emailSignature?: InputMaybe<Scalars['String']['input']>;
  /** The first name of the technician. This input cannot be set to null. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** The last name of the technician. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the reporting manager of the technician. */
  reportingManager?: InputMaybe<TechnicianIdentifierInput>;
  /** Specifies the application role of the technician. This input cannot be set to null. */
  role?: InputMaybe<RoleIdentifierInput>;
  /** Specifies the technician's team. */
  team?: InputMaybe<TeamIdentifierInput>;
  /** The ID of the technician who is going to be updated. This input is mandatory. */
  userId: Scalars['ID']['input'];
};

/** Specifies the input required to update an existing ticket. */
export type UpdateTicketInput = {
  /** Specifies the additional requesters to be added. */
  addAdditionalRequester?: InputMaybe<Array<InputMaybe<ClientUserIdentifierInput>>>;
  /** Specifies the followers to be added. */
  addFollowers?: InputMaybe<Array<InputMaybe<TechnicianIdentifierInput>>>;
  /** Specifies the category of the ticket. The value should be from the Category (name field) type. */
  category?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the cause of the ticket. The value should be from the Cause (name field) type. */
  cause?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the client to whom the ticket is associated. Cannot be set to null. */
  client?: InputMaybe<ClientIdentifierInput>;
  /**
   * Specifies the custom fields values for the ticket. Each entry in the JSON would be key-value.
   * The key will be a system-generated, unique name of the custom field (columnName field of CustomField type).
   * The value for text, paragraph, radio, select, numeric, decimal, date, datetime should be given as a string.
   * The value for checkbox, multi-select should be an array of string.
   *
   * For example, the value could be {"udf1text": "value", "udf2mselect": ["value1", "value2"]}
   */
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  /** Specifies the additional requesters to be deleted. */
  deleteAdditionalRequester?: InputMaybe<Array<InputMaybe<ClientUserIdentifierInput>>>;
  /** Specifies the followers to be deleted. */
  deleteFollowers?: InputMaybe<Array<InputMaybe<TechnicianIdentifierInput>>>;
  /** The first response time of the ticket. */
  firstResponseTime?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the impact of the ticket. The value should be from the Impact (name field) type. */
  impact?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the priority of the ticket. The value should be from the Priority (name field) type. */
  priority?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the type of the ticket. Cannot be set to null. */
  requestType?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the requester for whom the ticket is created. Cannot be set to null. */
  requester?: InputMaybe<ClientUserIdentifierInput>;
  /** Specifies the resolution code of the ticket. */
  resolutionCode?: InputMaybe<Scalars['String']['input']>;
  /** The resolution time of the ticket. */
  resolutionTime?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the site to which the ticket is associated. Cannot be set to null. */
  site?: InputMaybe<ClientSiteIdentifierInput>;
  /** Specifies the creation source of the ticket. Cannot be set to null. */
  source?: InputMaybe<TicketSource>;
  /** Specifies the status of the ticket. The value should be from the Status (name field) type. Cannot be set to null. */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the subcategory of the ticket. The value should be from the SubCategory (name field) type. */
  subcategory?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the sub cause of the ticket. The value should be from the SubCause (name field) type. */
  subcause?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the subject of the ticket. */
  subject?: InputMaybe<Scalars['String']['input']>;
  /** Indicates whether the close notification has to be suppressed while closing the ticket */
  suppressCloseNotification?: InputMaybe<Scalars['Boolean']['input']>;
  /** Specifies the technician group to which the ticket is assigned. */
  techGroup?: InputMaybe<TechnicianGroupIdentifierInput>;
  /** Specifies the technician to whom the ticket is assigned. */
  technician?: InputMaybe<TechnicianIdentifierInput>;
  /** The ID of the ticket going to be updated. */
  ticketId: Scalars['ID']['input'];
  /** Specifies the type of the ticket. Cannot be set to null. */
  ticketType?: InputMaybe<Scalars['String']['input']>;
  /**
   * Specifies the third Party Integration source details from
   * which the ticket will be updated.
   */
  tpSource?: InputMaybe<ThirdPartySourceInput>;
  /** Specifies the urgency of the ticket. The value should be from the Urgency (name field) type. */
  urgency?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWebhookSubscriptionInput = {
  addEvents?: InputMaybe<Array<InputMaybe<WebhookSubscriptionEventInput>>>;
  deleteEvents?: InputMaybe<Array<InputMaybe<WebhookSubscriptionEventInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  headers?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<WebhookSubscriptionStatusInput>;
  webhookSubscriptionId: Scalars['ID']['input'];
  webhookUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWorklogEntryInput = {
  /** Denotes whether the service is provided after the business hours. */
  afterHours?: InputMaybe<Scalars['Boolean']['input']>;
  /** The date and time that the worklog was added. */
  billDateTime?: InputMaybe<Scalars['String']['input']>;
  /** Denotes whether the service item is billable or not. */
  billable?: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of the worklog item. */
  itemId: Scalars['ID']['input'];
  /** The notes added to the worklog. */
  notes?: InputMaybe<Scalars['String']['input']>;
  /**
   * The number of offered units/hours.
   * The unit is hrs for HOURS type item.
   */
  qty?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the service item. */
  serviceItem?: InputMaybe<ServiceItemIdentifierInput>;
  /** The unit price of the worklog item. */
  unitPrice?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWorklogTimerEntryInput = {
  /** The below fields are applicable only for MANUAL timer. */
  addSegments?: InputMaybe<Array<InputMaybe<CreateWorklogTimerSegmentInput>>>;
  billable?: InputMaybe<Scalars['Boolean']['input']>;
  deleteSegments?: InputMaybe<Array<InputMaybe<WorklogTimerSegmentIdentifierInput>>>;
  notes?: InputMaybe<Scalars['String']['input']>;
  /** The below fields are applicable only for AUTOMATIC timer. */
  running?: InputMaybe<Scalars['Boolean']['input']>;
  serviceItem?: InputMaybe<ServiceItemIdentifierInput>;
  timerId: Scalars['ID']['input'];
  type?: InputMaybe<WorklogTimerType>;
  updateSegments?: InputMaybe<Array<InputMaybe<UpdateWorklogTimerSegmentInput>>>;
  workItem?: InputMaybe<WorkItemIdentifierInput>;
};

export type UpdateWorklogTimerSegmentInput = {
  afterHours?: InputMaybe<Scalars['Boolean']['input']>;
  endTime?: InputMaybe<Scalars['String']['input']>;
  segmentId: Scalars['ID']['input'];
  startTime?: InputMaybe<Scalars['String']['input']>;
  timeSpent?: InputMaybe<Scalars['String']['input']>;
};

/** Specifies the details about the updated asset */
export type UpdatedAsset = {
  __typename?: 'UpdatedAsset';
  /** Asset class details of the asset */
  assetClass: Scalars['JSON']['output'];
  /** ID of the asset */
  assetId?: Maybe<Scalars['ID']['output']>;
  /** Client details of the asset */
  client: Scalars['JSON']['output'];
  /** Custom field details of the asset */
  customFields?: Maybe<Scalars['JSON']['output']>;
  /** Name of the asset */
  name: Scalars['String']['output'];
  /** The requester of the asset */
  requester: Scalars['JSON']['output'];
  /** Site details of the asset */
  site: Scalars['JSON']['output'];
};

/** The ticket's urgency. */
export type Urgency = {
  __typename?: 'Urgency';
  /** The ID of the urgency. */
  id: Scalars['ID']['output'];
  /** The name of the urgency. */
  name: Scalars['String']['output'];
};

/** Specifies the identifier input for the technician or client user. */
export type UserIdentifierInput = {
  /** The ID of the user. */
  userId: Scalars['ID']['input'];
};

export type WebhookSubscription = {
  __typename?: 'WebhookSubscription';
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<Maybe<WebhookSubscriptionEvent>>>;
  headers?: Maybe<Scalars['JSON']['output']>;
  signingSecret: Scalars['String']['output'];
  status: WebhookSubscriptionStatus;
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['JSON']['output']>;
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

/** Specifies the identifier input for the work. */
export type WorkItemIdentifierInput = {
  /** Used to distinguish the work item. */
  module: WorkModule;
  /** The ID of the work item */
  workId: Scalars['ID']['input'];
};

export enum WorkModule {
  Project = 'PROJECT',
  Ticket = 'TICKET'
}

/** The system defined constants used to identify the task/project statuses programmatically. */
export enum WorkState {
  /** Denotes that the work is blocked/on hold. */
  Blocked = 'BLOCKED',
  /** Denotes that the work is cancelled. */
  Cancelled = 'CANCELLED',
  /** Denotes that the work is completed. */
  Completed = 'COMPLETED',
  /** Denotes that the work is planned. */
  Planned = 'PLANNED',
  /** Denotes that the work is in progress. */
  Progress = 'PROGRESS'
}

/** The work status. It is used to define the status for task and project. */
export type WorkStatus = {
  __typename?: 'WorkStatus';
  /** The name of the status. */
  name: Scalars['String']['output'];
  /** The system defined constant used to identify the status programmatically. */
  state?: Maybe<WorkState>;
  /** The ID of the status. */
  statusId: Scalars['ID']['output'];
};

/** The worklog used to log the work done by the technician under a ticket, task, project. */
export type Worklog = {
  __typename?: 'Worklog';
  /** The created datetime of the worklog. */
  createdTime?: Maybe<Scalars['String']['output']>;
  /** The entity under which the worklog is created. */
  module: WorklogModule;
  /** The notes of the worklog. */
  notes?: Maybe<Scalars['String']['output']>;
  /**
   * The technician who logged the work.
   * The actual type of this field is Technician. Returns userId and name fields as JSON.
   */
  technician: Scalars['JSON']['output'];
  /** The date of the worklog. */
  worklogDate?: Maybe<Scalars['String']['output']>;
  /** The ID of the worklog. */
  worklogId: Scalars['ID']['output'];
  /** The list of offered services/items */
  worklogItems?: Maybe<Array<Maybe<WorklogItem>>>;
};

export type WorklogEntry = {
  __typename?: 'WorklogEntry';
  /** Denotes whether the service is provided after business hours. */
  afterHours: Scalars['Boolean']['output'];
  /** The datetime of the worklog. */
  billDateTime: Scalars['String']['output'];
  /** Denotes whether the service item is billable or not. */
  billable: Scalars['Boolean']['output'];
  /** The ID of the worklog item. */
  itemId: Scalars['ID']['output'];
  /** The notes added to the worklog. */
  notes?: Maybe<Scalars['String']['output']>;
  /**
   * The number of offered units/hours.
   * The unit is hrs for HOURS type item.
   */
  qty: Scalars['String']['output'];
  /** The revised quantity of the worklog item. */
  revisedQuantity?: Maybe<Scalars['String']['output']>;
  /**
   * The offered service item.
   * The actual type of this field is ServiceItem. Returns itemId and name fields as JSON.
   */
  serviceItem: Scalars['JSON']['output'];
  /** The invoicing status of the worklog item. */
  status: OfferedItemAuditStatus;
  /**
   * The technician who logged the work.
   * The actual type of this field is Technician. Returns userId and name fields as JSON.
   */
  technician: Scalars['JSON']['output'];
  /** The unit price of the worklog item. */
  unitPrice?: Maybe<Scalars['String']['output']>;
  /** The WorkItem under which the worklog is created. */
  workItem: Scalars['JSON']['output'];
};

/** Specifies the identifier input for the worklog. */
export type WorklogEntryIdentifier = {
  /** The ID of the worklog. */
  itemId: Scalars['ID']['input'];
};

/** The response payload for a list of worklog entries */
export type WorklogEntryList = {
  __typename?: 'WorklogEntryList';
  /** The list of worklog entries. */
  entries?: Maybe<Array<Maybe<WorklogEntry>>>;
  /** The details about the list */
  listInfo?: Maybe<ListInfo>;
};

/** The offered service/item through worklogs. */
export type WorklogItem = {
  __typename?: 'WorklogItem';
  /** Denotes whether the service is provided after the business hours. */
  afterHours?: Maybe<Scalars['Boolean']['output']>;
  /** Denotes whether the service item is billable or not. */
  billable?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the worklog item. */
  itemId: Scalars['ID']['output'];
  /** The number of offered units/hours. */
  qty: Scalars['String']['output'];
  /**
   * The offered service item.
   * The actual type of this field is ServiceItem. Returns itemId and name fields as JSON.
   */
  serviceItem?: Maybe<Scalars['JSON']['output']>;
  /** The invoicing status of the worklog item. */
  status?: Maybe<OfferedItemAuditStatus>;
};

/** Represents the entity/type. */
export enum WorklogModule {
  /** The ticket entity. */
  Ticket = 'TICKET'
}

export type WorklogTimerEntry = {
  __typename?: 'WorklogTimerEntry';
  billable?: Maybe<Scalars['Boolean']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  /** The below fields are applicable only for AUTOMATIC timer. */
  running?: Maybe<Scalars['Boolean']['output']>;
  segments?: Maybe<Array<Maybe<WorklogTimerSegment>>>;
  serviceItem?: Maybe<Scalars['JSON']['output']>;
  timerId?: Maybe<Scalars['ID']['output']>;
  /** Sum of timespent of all segments */
  timespent?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<WorklogTimerType>;
  workItem?: Maybe<Scalars['JSON']['output']>;
};

export type WorklogTimerEntryIdentifier = {
  timerId: Scalars['ID']['input'];
};

export type WorklogTimerEntryList = {
  __typename?: 'WorklogTimerEntryList';
  entries?: Maybe<Array<Maybe<WorklogTimerEntry>>>;
  listInfo?: Maybe<ListInfo>;
};

export type WorklogTimerSegment = {
  __typename?: 'WorklogTimerSegment';
  afterHours: Scalars['Boolean']['output'];
  endTime: Scalars['String']['output'];
  segmentId: Scalars['ID']['output'];
  startTime: Scalars['String']['output'];
  timespent: Scalars['String']['output'];
};

export type WorklogTimerSegmentIdentifierInput = {
  segmentId: Scalars['ID']['input'];
};

export enum WorklogTimerType {
  Automatic = 'AUTOMATIC',
  Manual = 'MANUAL'
}

export type GetClientListQueryVariables = Exact<{
  listInfo: ListInfoInput;
}>;


export type GetClientListQuery = { __typename?: 'Query', getClientList?: { __typename?: 'ClientList', clients?: Array<{ __typename?: 'Client', accountId: string } | null> | null } | null };


export const GetClientListDocument = gql`
    query GetClientList($listInfo: ListInfoInput!) {
  getClientList(input: $listInfo) {
    clients {
      accountId
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetClientList(variables: GetClientListQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetClientListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetClientListQuery>(GetClientListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetClientList', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;