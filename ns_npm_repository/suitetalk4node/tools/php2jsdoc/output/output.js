/* @module suitetalk */
/*
@class RecordType
*/
/*
@class SearchRecordType
*/
/*
@class GetAllRecordType
*/
/*
@class GetCustomizationType
*/
/*
@class InitializeType
*/
/*
@class InitializeRefType
*/
/*
@class InitializeAuxRefType
*/
/*
@class DeletedRecordType
*/
/*
@class AsyncStatusType
*/
/*
@class SearchStringFieldOperator
*/
/*
@class SearchLongFieldOperator
*/
/*
@class SearchTextNumberFieldOperator
*/
/*
@class SearchDoubleFieldOperator
*/
/*
@class SearchDateFieldOperator
*/
/*
@class SearchEnumMultiSelectFieldOperator
*/
/*
@class SearchMultiSelectFieldOperator
*/
/*
@class SearchDate
*/
/*
@class DurationUnit
*/
/*
@class CalendarEventAttendeeResponse
*/
/*
@class GetSelectValueFilterOperator
*/
/*
@class StatusDetailType
*/
/*
@class StatusDetailCodeType
*/
/*
@class FaultCodeType
*/
/*
@class Passport
@property {String} email
@property {String} password
@property {String} account
@property {RecordRef} role
*/
/*
@class SsoPassport
@property {String} authenticationToken
@property {String} partnerId
@property {String} partnerAccount
*/
/*
@class SsoCredentials
@property {String} email
@property {String} password
@property {String} account
@property {RecordRef} role
@property {String} authenticationToken
@property {String} partnerId
*/
/*
@class ChangePassword
@property {String} currentPassword
@property {String} newPassword
@property {String} newPassword2
@property {boolean} justThisAccount
*/
/*
@class ChangeEmail
@property {String} currentPassword
@property {String} newEmail
@property {String} newEmail2
@property {boolean} justThisAccount
*/
/*
@class StatusDetail
@property {StatusDetailCodeType} code
@property {String} message
@property {StatusDetailType} type
*/
/*
@class Status
@property {StatusDetail[]} statusDetail
@property {boolean} isSuccess
*/
/*
@class WsRole
@property {RecordRef} role
@property {boolean} isDefault
@property {boolean} isInactive
@property {boolean} isLoggedInRole
*/
/*
@class WsRoleList
@property {WsRole[]} wsRole
*/
/*
@class Record
@property {NullField} nullFieldList
*/
/*
@class NullField
@property {string[]} name
*/
/*
@class SearchRecord
*/
/*
@class SearchRecordBasic @extends SearchRecord
*/
/*
@class SearchRow @extends SearchRecord
*/
/*
@class SearchRowBasic @extends SearchRow
*/
/*
@class SearchResult @extends SearchRow
@property {Status} status
@property {integer} totalRecords
@property {integer} pageSize
@property {integer} totalPages
@property {integer} pageIndex
@property {String} searchId
@property {RecordList} recordList
@property {SearchRowList} searchRowList
*/
/*
@class AsyncStatusResult @extends SearchRow
@property {String} jobId
@property {AsyncStatusType} status
@property {float} percentCompleted
@property {float} estRemainingDuration
*/
/*
@class GetAllResult @extends SearchRow
@property {Status} status
@property {integer} totalRecords
@property {RecordList} recordList
*/
/*
@class GetSavedSearchResult @extends SearchRow
@property {Status} status
@property {integer} totalRecords
@property {RecordRefList} recordRefList
*/
/*
@class GetCustomizationIdResult @extends SearchRow
@property {Status} status
@property {integer} totalRecords
@property {CustomizationRefList} customizationRefList
*/
/*
@class GetSelectValueResult @extends SearchRow
@property {Status} status
@property {integer} totalRecords
@property {integer} totalPages
@property {BaseRefList} baseRefList
*/
/*
@class RecordList @extends SearchRow
@property {Record[]} record
*/
/*
@class SearchRowList @extends SearchRow
@property {SearchRow[]} searchRow
*/
/*
@class RecordRefList @extends SearchRow
@property {RecordRef[]} recordRef
*/
/*
@class BaseRef @extends SearchRow
@property {String} name
*/
/*
@class BaseRefList @extends SearchRow
@property {BaseRef[]} baseRef
*/
/*
@class RecordRef @extends BaseRef
@property {String} internalId
@property {String} externalId
@property {RecordType} type
*/
/*
@class Duration @extends BaseRef
@property {float} timeSpan
@property {DurationUnit} unit
*/
/*
@class CustomRecordRef @extends BaseRef
@property {String} internalId
@property {String} externalId
@property {String} typeId
*/
/*
@class CustomTransactionRef @extends BaseRef
@property {String} internalId
@property {String} externalId
@property {String} typeId
@property {String} scriptId
*/
/*
@class CustomizationRef @extends RecordRef
@property {String} scriptId
*/
/*
@class CustomizationRefList @extends RecordRef
@property {CustomizationRef[]} customizationRef
*/
/*
@class InitializeRecord @extends RecordRef
@property {InitializeType} type
@property {InitializeRef} reference
@property {InitializeAuxRef} auxReference
@property {InitializeRefList} referenceList
*/
/*
@class InitializeRef @extends BaseRef
@property {InitializeRefType} type
@property {String} internalId
@property {String} externalId
*/
/*
@class InitializeRefList @extends BaseRef
@property {InitializeRef[]} initializeRef
*/
/*
@class InitializeAuxRef @extends BaseRef
@property {InitializeAuxRefType} type
@property {String} internalId
@property {String} externalId
*/
/*
@class UpdateInviteeStatusReference @extends BaseRef
@property {RecordRef} eventId
@property {CalendarEventAttendeeResponse} responseCode
*/
/*
@class GetAllRecord @extends BaseRef
@property {GetAllRecordType} recordType
*/
/*
@class GetSavedSearchRecord @extends BaseRef
@property {SearchRecordType} searchType
*/
/*
@class CustomizationType @extends BaseRef
@property {GetCustomizationType} getCustomizationType
*/
/*
@class ListOrRecordRef @extends BaseRef
@property {String} name
@property {String} internalId
@property {String} externalId
@property {String} typeId
*/
/*
@class CustomFieldRef @extends BaseRef
@property {String} internalId
@property {String} scriptId
*/
/*
@class LongCustomFieldRef @extends CustomFieldRef
@property {integer} value
*/
/*
@class DoubleCustomFieldRef @extends CustomFieldRef
@property {float} value
*/
/*
@class BooleanCustomFieldRef @extends CustomFieldRef
@property {boolean} value
*/
/*
@class StringCustomFieldRef @extends CustomFieldRef
@property {String} value
*/
/*
@class DateCustomFieldRef @extends CustomFieldRef
@property {dateTime} value
*/
/*
@class SelectCustomFieldRef @extends CustomFieldRef
@property {ListOrRecordRef} value
*/
/*
@class MultiSelectCustomFieldRef @extends CustomFieldRef
@property {ListOrRecordRef[]} value
*/
/*
@class CustomFieldList @extends CustomFieldRef
@property {CustomFieldRef[]} customField
*/
/*
@class SearchBooleanField @extends CustomFieldRef
@property {boolean} searchValue
*/
/*
@class SearchStringField @extends CustomFieldRef
@property {String} searchValue
@property {SearchStringFieldOperator} operator
*/
/*
@class SearchLongField @extends CustomFieldRef
@property {integer} searchValue
@property {integer} searchValue2
@property {SearchLongFieldOperator} operator
*/
/*
@class SearchTextNumberField @extends CustomFieldRef
@property {String} searchValue
@property {String} searchValue2
@property {SearchTextNumberFieldOperator} operator
*/
/*
@class SearchDoubleField @extends CustomFieldRef
@property {float} searchValue
@property {float} searchValue2
@property {SearchDoubleFieldOperator} operator
*/
/*
@class SearchDateField @extends CustomFieldRef
@property {SearchDate} predefinedSearchValue
@property {dateTime} searchValue
@property {dateTime} searchValue2
@property {SearchDateFieldOperator} operator
*/
/*
@class SearchEnumMultiSelectField @extends CustomFieldRef
@property {string[]} searchValue
@property {SearchEnumMultiSelectFieldOperator} operator
*/
/*
@class SearchMultiSelectField @extends CustomFieldRef
@property {RecordRef[]} searchValue
@property {SearchMultiSelectFieldOperator} operator
*/
/*
@class SearchCustomField @extends CustomFieldRef
@property {String} internalId
@property {String} scriptId
*/
/*
@class SearchBooleanCustomField @extends SearchCustomField
@property {boolean} searchValue
*/
/*
@class SearchStringCustomField @extends SearchCustomField
@property {String} searchValue
@property {SearchStringFieldOperator} operator
*/
/*
@class SearchLongCustomField @extends SearchCustomField
@property {integer} searchValue
@property {integer} searchValue2
@property {SearchLongFieldOperator} operator
*/
/*
@class SearchDoubleCustomField @extends SearchCustomField
@property {float} searchValue
@property {float} searchValue2
@property {SearchDoubleFieldOperator} operator
*/
/*
@class SearchDateCustomField @extends SearchCustomField
@property {SearchDate} predefinedSearchValue
@property {dateTime} searchValue
@property {dateTime} searchValue2
@property {SearchDateFieldOperator} operator
*/
/*
@class SearchEnumMultiSelectCustomField @extends SearchCustomField
@property {string[]} searchValue
@property {SearchEnumMultiSelectFieldOperator} operator
*/
/*
@class SearchMultiSelectCustomField @extends SearchCustomField
@property {ListOrRecordRef[]} searchValue
@property {SearchMultiSelectFieldOperator} operator
*/
/*
@class SearchCustomFieldList @extends SearchCustomField
@property {SearchCustomField[]} customField
*/
/*
@class SearchColumnField @extends SearchCustomField
@property {String} customLabel
*/
/*
@class SearchColumnBooleanField @extends SearchColumnField
@property {boolean} searchValue
*/
/*
@class SearchColumnStringField @extends SearchColumnField
@property {String} searchValue
*/
/*
@class SearchColumnLongField @extends SearchColumnField
@property {integer} searchValue
*/
/*
@class SearchColumnTextNumberField @extends SearchColumnField
@property {String} searchValue
*/
/*
@class SearchColumnDoubleField @extends SearchColumnField
@property {float} searchValue
*/
/*
@class SearchColumnDateField @extends SearchColumnField
@property {dateTime} searchValue
*/
/*
@class SearchColumnEnumSelectField @extends SearchColumnField
@property {String} searchValue
*/
/*
@class SearchColumnSelectField @extends SearchColumnField
@property {RecordRef} searchValue
*/
/*
@class SearchColumnCustomField @extends SearchColumnField
@property {String} customLabel
@property {String} internalId
@property {String} scriptId
*/
/*
@class SearchColumnBooleanCustomField @extends SearchColumnCustomField
@property {boolean} searchValue
*/
/*
@class SearchColumnStringCustomField @extends SearchColumnCustomField
@property {String} searchValue
*/
/*
@class SearchColumnLongCustomField @extends SearchColumnCustomField
@property {integer} searchValue
*/
/*
@class SearchColumnDoubleCustomField @extends SearchColumnCustomField
@property {float} searchValue
*/
/*
@class SearchColumnDateCustomField @extends SearchColumnCustomField
@property {dateTime} searchValue
*/
/*
@class SearchColumnEnumMultiSelectCustomField @extends SearchColumnCustomField
@property {string[]} searchValue
*/
/*
@class SearchColumnSelectCustomField @extends SearchColumnCustomField
@property {ListOrRecordRef} searchValue
*/
/*
@class SearchColumnMultiSelectCustomField @extends SearchColumnCustomField
@property {ListOrRecordRef[]} searchValue
*/
/*
@class SearchColumnCustomFieldList @extends SearchColumnCustomField
@property {SearchColumnCustomField[]} customField
*/
/*
@class ItemAvailabilityFilter @extends SearchColumnCustomField
@property {RecordRefList} item
@property {dateTime} lastQtyAvailableChange
*/
/*
@class ItemAvailability @extends SearchColumnCustomField
@property {RecordRef} item
@property {dateTime} lastQtyAvailableChange
@property {RecordRef} locationId
@property {float} quantityOnHand
@property {float} onHandValueMli
@property {float} reorderPoint
@property {float} preferredStockLevel
@property {float} quantityOnOrder
@property {float} quantityCommitted
@property {float} quantityBackOrdered
@property {float} quantityAvailable
*/
/*
@class ItemAvailabilityList @extends SearchColumnCustomField
@property {ItemAvailability[]} itemAvailability
*/
/*
@class GetItemAvailabilityResult @extends SearchColumnCustomField
@property {Status} status
@property {ItemAvailabilityList} itemAvailabilityList
*/
/*
@class BudgetExchangeRateFilter @extends SearchColumnCustomField
@property {RecordRef} period
@property {RecordRef} fromSubsidiary
@property {RecordRef} toSubsidiary
*/
/*
@class BudgetExchangeRate @extends SearchColumnCustomField
@property {RecordRef} period
@property {RecordRef} fromSubsidiary
@property {RecordRef} toSubsidiary
@property {float} currentRate
@property {float} averageRate
@property {float} historicalRate
*/
/*
@class BudgetExchangeRateList @extends SearchColumnCustomField
@property {BudgetExchangeRate[]} budgetExchangeRate
*/
/*
@class GetBudgetExchangeRateResult @extends SearchColumnCustomField
@property {Status} status
@property {BudgetExchangeRateList} budgetExchangeRateList
*/
/*
@class ConsolidatedExchangeRateFilter @extends SearchColumnCustomField
@property {RecordRef} period
@property {RecordRef} fromSubsidiary
@property {RecordRef} toSubsidiary
*/
/*
@class ConsolidatedExchangeRate @extends SearchColumnCustomField
@property {RecordRef} period
@property {RecordRef} fromSubsidiary
@property {RecordRef} toSubsidiary
@property {float} currentRate
@property {float} averageRate
@property {float} historicalRate
*/
/*
@class ConsolidatedExchangeRateList @extends SearchColumnCustomField
@property {ConsolidatedExchangeRate[]} consolidatedExchangeRate
*/
/*
@class GetConsolidatedExchangeRateResult @extends SearchColumnCustomField
@property {Status} status
@property {ConsolidatedExchangeRateList} consolidatedExchangeRateList
*/
/*
@class CurrencyRateFilter @extends SearchColumnCustomField
@property {RecordRef} baseCurrency
@property {RecordRef} fromCurrency
@property {dateTime} effectiveDate
*/
/*
@class CurrencyRate @extends Record
@property {RecordRef} baseCurrency
@property {RecordRef} transactionCurrency
@property {float} exchangeRate
@property {dateTime} effectiveDate
@property {String} internalId
*/
/*
@class CurrencyRateList @extends Record
@property {CurrencyRate[]} currencyRate
*/
/*
@class GetCurrencyRateResult @extends Record
@property {Status} status
@property {CurrencyRateList} currencyRateList
*/
/*
@class DataCenterUrls @extends Record
@property {String} restDomain
@property {String} webservicesDomain
@property {String} systemDomain
*/
/*
@class GetDataCenterUrlsResult @extends Record
@property {Status} status
@property {DataCenterUrls} dataCenterUrls
*/
/*
@class PostingTransactionSummaryField @extends Record
@property {boolean} period
@property {boolean} account
@property {boolean} parentItem
@property {boolean} item
@property {boolean} entity
@property {boolean} department
@property {boolean} class
@property {boolean} location
@property {boolean} subsidiary
@property {boolean} book
*/
/*
@class PostingTransactionSummaryFilter @extends Record
@property {RecordRefList} period
@property {RecordRefList} account
@property {RecordRefList} parentItem
@property {RecordRefList} item
@property {RecordRefList} entity
@property {RecordRefList} department
@property {RecordRefList} class
@property {RecordRefList} location
@property {RecordRefList} subsidiary
@property {RecordRefList} book
*/
/*
@class PostingTransactionSummary @extends Record
@property {RecordRef} period
@property {RecordRef} account
@property {RecordRef} parentItem
@property {RecordRef} item
@property {RecordRef} entity
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} subsidiary
@property {RecordRef} book
@property {float} amount
*/
/*
@class PostingTransactionSummaryList @extends Record
@property {PostingTransactionSummary[]} postingTransactionSummary
*/
/*
@class GetPostingTransactionSummaryResult @extends Record
@property {Status} status
@property {integer} totalRecords
@property {integer} pageSize
@property {integer} totalPages
@property {integer} pageIndex
@property {PostingTransactionSummaryList} postingTransactionSummaryList
*/
/*
@class GetSelectValueFieldDescription @extends Record
@property {RecordType} recordType
@property {RecordRef} customRecordType
@property {RecordRef} customTransactionType
@property {String} sublist
@property {String} field
@property {RecordRef} customForm
@property {GetSelectValueFilter} filter
@property {GetSelectFilterByFieldValueList} filterByValueList
*/
/*
@class GetSelectValueFilter @extends Record
@property {String} filterValue
@property {GetSelectValueFilterOperator} operator
*/
/*
@class GetSelectFilterByFieldValueList @extends Record
@property {GetSelectFilterByFieldValue[]} filterBy
*/
/*
@class GetSelectFilterByFieldValue @extends Record
@property {String} sublist
@property {String} field
@property {String} internalId
*/
/*
@class GetServerTimeResult @extends Record
@property {Status} status
@property {dateTime} serverTime
*/
/*
@class DeletedRecord @extends Record
@property {dateTime} deletedDate
@property {BaseRef} record
*/
/*
@class DeletedRecordList @extends Record
@property {DeletedRecord[]} deletedRecord
*/
/*
@class GetDeletedResult @extends Record
@property {Status} status
@property {integer} totalRecords
@property {integer} pageSize
@property {integer} totalPages
@property {integer} pageIndex
@property {DeletedRecordList} deletedRecordList
*/
/*
@class GetDeletedFilter @extends Record
@property {SearchDateField} deletedDate
@property {SearchEnumMultiSelectField} type
@property {SearchStringField} scriptId
*/
/*
@class AttachReference @extends Record
@property {BaseRef} attachTo
*/
/*
@class DetachReference @extends Record
@property {BaseRef} detachFrom
*/
/*
@class AttachContactReference @extends AttachReference
@property {RecordRef} contact
@property {RecordRef} contactRole
*/
/*
@class AttachBasicReference @extends AttachReference
@property {BaseRef} attachedRecord
*/
/*
@class DetachBasicReference @extends DetachReference
@property {BaseRef} detachedRecord
*/
/*
@class NSSoapFault @extends DetachReference
@property {FaultCodeType} code
@property {String} message
*/
/*
@class InsufficientPermissionFault @extends NSSoapFault
*/
/*
@class InvalidAccountFault @extends NSSoapFault
*/
/*
@class InvalidCredentialsFault @extends NSSoapFault
*/
/*
@class InvalidSessionFault @extends NSSoapFault
*/
/*
@class ExceededRequestLimitFault @extends NSSoapFault
*/
/*
@class ExceededUsageLimitFault @extends NSSoapFault
*/
/*
@class ExceededRecordCountFault @extends NSSoapFault
*/
/*
@class InvalidVersionFault @extends NSSoapFault
*/
/*
@class ExceededRequestSizeFault @extends NSSoapFault
*/
/*
@class AsyncFault @extends NSSoapFault
*/
/*
@class UnexpectedErrorFault @extends NSSoapFault
*/
/*
@class ApplicationInfo @extends NSSoapFault
@property {String} applicationId
*/
/*
@class PartnerInfo @extends NSSoapFault
@property {String} partnerId
*/
/*
@class DocumentInfo @extends NSSoapFault
@property {String} nsId
*/
/*
@class Preferences @extends NSSoapFault
@property {boolean} warningAsError
@property {boolean} disableMandatoryCustomFieldValidation
@property {boolean} disableSystemNotesForCustomFields
@property {boolean} ignoreReadOnlyFields
*/
/*
@class SearchPreferences @extends NSSoapFault
@property {boolean} bodyFieldsOnly
@property {boolean} returnSearchColumns
@property {integer} pageSize
*/
/*
@class SessionResponse @extends NSSoapFault
@property {Status} status
@property {RecordRef} userId
@property {WsRoleList} wsRoleList
*/
/*
@class WriteResponse @extends NSSoapFault
@property {Status} status
@property {BaseRef} baseRef
*/
/*
@class ReadResponse @extends NSSoapFault
@property {Status} status
@property {Record} record
*/
/*
@class WriteResponseList @extends NSSoapFault
@property {Status} status
@property {WriteResponse[]} writeResponse
*/
/*
@class ReadResponseList @extends NSSoapFault
@property {Status} status
@property {ReadResponse[]} readResponse
*/
/*
@class LoginResponse @extends NSSoapFault
@property {SessionResponse} sessionResponse
*/
/*
@class SsoLoginResponse @extends NSSoapFault
@property {SessionResponse} sessionResponse
*/
/*
@class MapSsoResponse @extends NSSoapFault
@property {SessionResponse} sessionResponse
*/
/*
@class ChangePasswordResponse @extends NSSoapFault
@property {SessionResponse} sessionResponse
*/
/*
@class ChangeEmailResponse @extends NSSoapFault
@property {SessionResponse} sessionResponse
*/
/*
@class LogoutResponse @extends NSSoapFault
@property {SessionResponse} sessionResponse
*/
/*
@class AddResponse @extends NSSoapFault
@property {WriteResponse} writeResponse
*/
/*
@class AddListResponse @extends NSSoapFault
@property {WriteResponseList} writeResponseList
*/
/*
@class UpdateResponse @extends NSSoapFault
@property {WriteResponse} writeResponse
*/
/*
@class UpdateListResponse @extends NSSoapFault
@property {WriteResponseList} writeResponseList
*/
/*
@class UpsertResponse @extends NSSoapFault
@property {WriteResponse} writeResponse
*/
/*
@class UpsertListResponse @extends NSSoapFault
@property {WriteResponseList} writeResponseList
*/
/*
@class DeleteResponse @extends NSSoapFault
@property {WriteResponse} writeResponse
*/
/*
@class DeleteListResponse @extends NSSoapFault
@property {WriteResponseList} writeResponseList
*/
/*
@class SearchResponse @extends NSSoapFault
@property {SearchResult} searchResult
*/
/*
@class SearchMoreResponse @extends NSSoapFault
@property {SearchResult} searchResult
*/
/*
@class SearchMoreWithIdResponse @extends NSSoapFault
@property {SearchResult} searchResult
*/
/*
@class SearchNextResponse @extends NSSoapFault
@property {SearchResult} searchResult
*/
/*
@class GetResponse @extends NSSoapFault
@property {ReadResponse} readResponse
*/
/*
@class GetListResponse @extends NSSoapFault
@property {ReadResponseList} readResponseList
*/
/*
@class GetAllResponse @extends NSSoapFault
@property {GetAllResult} getAllResult
*/
/*
@class GetSavedSearchResponse @extends NSSoapFault
@property {GetSavedSearchResult} getSavedSearchResult
*/
/*
@class GetCustomizationIdResponse @extends NSSoapFault
@property {GetCustomizationIdResult} getCustomizationIdResult
*/
/*
@class InitializeResponse @extends NSSoapFault
@property {ReadResponse} readResponse
*/
/*
@class InitializeListResponse @extends NSSoapFault
@property {ReadResponseList} readResponseList
*/
/*
@class getSelectValueResponse @extends NSSoapFault
@property {GetSelectValueResult} getSelectValueResult
*/
/*
@class GetItemAvailabilityResponse @extends NSSoapFault
@property {GetItemAvailabilityResult} getItemAvailabilityResult
*/
/*
@class GetBudgetExchangeRateResponse @extends NSSoapFault
@property {GetBudgetExchangeRateResult} getBudgetExchangeRateResult
*/
/*
@class GetConsolidatedExchangeRateResponse @extends NSSoapFault
@property {GetConsolidatedExchangeRateResult} getConsolidatedExchangeRateResult
*/
/*
@class GetCurrencyRateResponse @extends NSSoapFault
@property {GetCurrencyRateResult} getCurrencyRateResult
*/
/*
@class GetDataCenterUrlsResponse @extends NSSoapFault
@property {GetDataCenterUrlsResult} getDataCenterUrlsResult
*/
/*
@class GetPostingTransactionSummaryResponse @extends NSSoapFault
@property {GetPostingTransactionSummaryResult} getPostingTransactionSummaryResult
*/
/*
@class GetServerTimeResponse @extends NSSoapFault
@property {GetServerTimeResult} getServerTimeResult
*/
/*
@class AttachResponse @extends NSSoapFault
@property {WriteResponse} writeResponse
*/
/*
@class DetachResponse @extends NSSoapFault
@property {WriteResponse} writeResponse
*/
/*
@class UpdateInviteeStatusResponse @extends NSSoapFault
@property {WriteResponse} writeResponse
*/
/*
@class UpdateInviteeStatusListResponse @extends NSSoapFault
@property {WriteResponseList} writeResponseList
*/
/*
@class AsyncStatusResponse @extends NSSoapFault
@property {AsyncStatusResult} asyncStatusResult
*/
/*
@class GetAsyncResultResponse @extends NSSoapFault
@property {AsyncResult} asyncResult
*/
/*
@class AsyncResult @extends NSSoapFault
*/
/*
@class AsyncAddListResult @extends AsyncResult
@property {WriteResponseList} writeResponseList
*/
/*
@class AsyncUpdateListResult @extends AsyncResult
@property {WriteResponseList} writeResponseList
*/
/*
@class AsyncUpsertListResult @extends AsyncResult
@property {WriteResponseList} writeResponseList
*/
/*
@class AsyncDeleteListResult @extends AsyncResult
@property {WriteResponseList} writeResponseList
*/
/*
@class AsyncGetListResult @extends AsyncResult
@property {ReadResponseList} readResponseList
*/
/*
@class AsyncSearchResult @extends AsyncResult
@property {SearchResult} searchResult
*/
/*
@class AsyncInitializeListResult @extends AsyncResult
@property {ReadResponseList} readResponseList
*/
/*
@class GetDeletedResponse @extends AsyncResult
@property {GetDeletedResult} getDeletedResult
*/
/*
@class LoginRequest @extends AsyncResult
@property {Passport} passport
*/
/*
@class SsoLoginRequest @extends AsyncResult
@property {SsoPassport} ssoPassport
*/
/*
@class MapSsoRequest @extends AsyncResult
@property {SsoCredentials} ssoCredentials
*/
/*
@class ChangePasswordRequest @extends AsyncResult
@property {ChangePassword} changePassword
*/
/*
@class ChangeEmailRequest @extends AsyncResult
@property {ChangeEmail} changeEmail
*/
/*
@class LogoutRequest @extends AsyncResult
*/
/*
@class AddRequest @extends AsyncResult
@property {Record} record
*/
/*
@class DeleteRequest @extends AsyncResult
@property {BaseRef} baseRef
*/
/*
@class SearchRequest @extends AsyncResult
@property {SearchRecord} searchRecord
*/
/*
@class SearchMoreRequest @extends AsyncResult
@property {integer} pageIndex
*/
/*
@class SearchMoreWithIdRequest @extends AsyncResult
@property {String} searchId
@property {integer} pageIndex
*/
/*
@class SearchNextRequest @extends AsyncResult
*/
/*
@class UpdateRequest @extends AsyncResult
@property {Record} record
*/
/*
@class UpsertRequest @extends AsyncResult
@property {Record} record
*/
/*
@class AddListRequest @extends AsyncResult
@property {Record[]} record
*/
/*
@class DeleteListRequest @extends AsyncResult
@property {BaseRef[]} baseRef
*/
/*
@class UpdateListRequest @extends AsyncResult
@property {Record[]} record
*/
/*
@class UpsertListRequest @extends AsyncResult
@property {Record[]} record
*/
/*
@class GetRequest @extends AsyncResult
@property {BaseRef} baseRef
*/
/*
@class GetListRequest @extends AsyncResult
@property {BaseRef[]} baseRef
*/
/*
@class GetAllRequest @extends AsyncResult
@property {GetAllRecord} record
*/
/*
@class GetSavedSearchRequest @extends AsyncResult
@property {GetSavedSearchRecord} record
*/
/*
@class GetCustomizationIdRequest @extends AsyncResult
@property {CustomizationType} customizationType
@property {boolean} includeInactives
*/
/*
@class InitializeRequest @extends AsyncResult
@property {InitializeRecord} initializeRecord
*/
/*
@class InitializeListRequest @extends AsyncResult
@property {InitializeRecord[]} initializeRecord
*/
/*
@class getSelectValueRequest @extends AsyncResult
@property {GetSelectValueFieldDescription} fieldDescription
@property {integer} pageIndex
*/
/*
@class GetItemAvailabilityRequest @extends AsyncResult
@property {ItemAvailabilityFilter} itemAvailabilityFilter
*/
/*
@class GetBudgetExchangeRateRequest @extends AsyncResult
@property {BudgetExchangeRateFilter} budgetExchangeRateFilter
*/
/*
@class GetConsolidatedExchangeRateRequest @extends AsyncResult
@property {ConsolidatedExchangeRateFilter} consolidatedExchangeRateFilter
*/
/*
@class GetCurrencyRateRequest @extends AsyncResult
@property {CurrencyRateFilter} currencyRateFilter
*/
/*
@class GetDataCenterUrlsRequest @extends AsyncResult
@property {String} account
*/
/*
@class GetPostingTransactionSummaryRequest @extends AsyncResult
@property {PostingTransactionSummaryField} fields
@property {PostingTransactionSummaryFilter} filters
@property {integer} pageIndex
*/
/*
@class GetServerTimeRequest @extends AsyncResult
*/
/*
@class AttachRequest @extends AsyncResult
@property {AttachReference} attachReference
*/
/*
@class DetachRequest @extends AsyncResult
@property {DetachReference} detachReference
*/
/*
@class AsyncAddListRequest @extends AsyncResult
@property {Record[]} record
*/
/*
@class UpdateInviteeStatusRequest @extends AsyncResult
@property {UpdateInviteeStatusReference} updateInviteeStatusReference
*/
/*
@class UpdateInviteeStatusListRequest @extends AsyncResult
@property {UpdateInviteeStatusReference[]} updateInviteeStatusReference
*/
/*
@class AsyncUpdateListRequest @extends AsyncResult
@property {Record[]} record
*/
/*
@class AsyncUpsertListRequest @extends AsyncResult
@property {Record[]} record
*/
/*
@class AsyncDeleteListRequest @extends AsyncResult
@property {BaseRef[]} baseRef
*/
/*
@class AsyncGetListRequest @extends AsyncResult
@property {BaseRef[]} baseRef
*/
/*
@class AsyncInitializeListRequest @extends AsyncResult
@property {InitializeRecord[]} initializeRecord
*/
/*
@class AsyncSearchRequest @extends AsyncResult
@property {SearchRecord} searchRecord
*/
/*
@class CheckAsyncStatusRequest @extends AsyncResult
@property {String} jobId
*/
/*
@class GetAsyncResultRequest @extends AsyncResult
@property {String} jobId
@property {integer} pageIndex
*/
/*
@class GetDeletedRequest @extends AsyncResult
@property {GetDeletedFilter} getDeletedFilter
@property {integer} pageIndex
*/
/*
@class Country @extends AsyncResult
*/
/*
@class Language @extends AsyncResult
*/
/*
@class AvsMatchCode @extends AsyncResult
*/
/*
@class CscMatchCode @extends AsyncResult
*/
/*
@class VsoeSopGroup @extends AsyncResult
*/
/*
@class VsoeDeferral @extends AsyncResult
*/
/*
@class VsoePermitDiscount @extends AsyncResult
*/
/*
@class RevenueStatus @extends AsyncResult
*/
/*
@class RevenueCommitStatus @extends AsyncResult
*/
/*
@class PostingPeriodDate @extends AsyncResult
*/
/*
@class PermissionLevel @extends AsyncResult
*/
/*
@class Source @extends AsyncResult
*/
/*
@class GlobalSubscriptionStatus @extends AsyncResult
*/
/*
@class ItemCostEstimateType @extends AsyncResult
*/
/*
@class PresentationItemType @extends AsyncResult
*/
/*
@class LandedCostSource @extends AsyncResult
*/
/*
@class LandedCostMethod @extends AsyncResult
*/
/*
@class SitemapPriority @extends AsyncResult
*/
/*
@class TimeItemTimeType @extends AsyncResult
*/
/*
@class PermissionCode @extends AsyncResult
*/
/*
@class IntercoStatus @extends AsyncResult
*/
/*
@class CurrencySymbolPlacement @extends AsyncResult
*/
/*
@class RecurrenceFrequency @extends AsyncResult
*/
/*
@class RecurrenceDow @extends AsyncResult
*/
/*
@class RecurrenceDowim @extends AsyncResult
*/
/*
@class Address @extends Record
@property {String} internalId
@property {Country} country
@property {String} attention
@property {String} addressee
@property {String} addrPhone
@property {String} addr1
@property {String} addr2
@property {String} addr3
@property {String} city
@property {String} state
@property {String} zip
@property {String} addrText
@property {boolean} override
@property {CustomFieldList} customFieldList
*/
/*
@class PresentationItem @extends Record
@property {RecordRef} item
@property {PresentationItemType} itemType
@property {String} description
@property {float} onlinePrice
@property {float} basePrice
*/
/*
@class Partners @extends Record
@property {RecordRef} partner
@property {RecordRef} partnerRole
@property {boolean} isPrimary
@property {float} contribution
*/
/*
@class LandedCost @extends Record
@property {LandedCostDataList} landedCostDataList
*/
/*
@class LandedCostDataList @extends Record
@property {LandedCostData[]} landedCostData
@property {boolean} replaceAll
*/
/*
@class LandedCostData @extends Record
@property {RecordRef} costCategory
@property {float} amount
*/
/*
@class LandedCostSummary @extends Record
@property {RecordRef} category
@property {float} amount
@property {LandedCostSource} source
@property {RecordRef} transaction
*/
/*
@class CustomerSalesTeam @extends Record
@property {RecordRef} employee
@property {RecordRef} salesRole
@property {boolean} isPrimary
@property {float} contribution
*/
/*
@class TimeItem @extends Record
@property {integer} id
@property {RecordRef} employee
@property {TimeItemTimeType} timeType
@property {dateTime} tranDate
@property {RecordRef} customer
@property {boolean} isBillable
@property {RecordRef} payrollItem
@property {RecordRef} item
@property {RecordRef} temporaryLocalJurisdiction
@property {RecordRef} temporaryStateJurisdiction
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {Duration} hours
@property {RecordRef} price
@property {float} rate
@property {boolean} overrideRate
@property {Duration} hoursTotal
@property {RecordRef} caseTaskEvent
@property {String} memo
@property {boolean} isUtilized
@property {boolean} isProductive
@property {boolean} isExempt
*/
/*
@class InventoryDetail @extends Record
@property {InventoryAssignmentList} inventoryAssignmentList
@property {RecordRef} customForm
*/
/*
@class RecurrenceDowMaskList @extends Record
@property {RecurrenceDow} recurrenceDowMask
*/
/*
@class InventoryAssignmentList @extends Record
@property {InventoryAssignment[]} inventoryAssignment
@property {boolean} replaceAll
*/
/*
@class InventoryAssignment @extends Record
@property {String} internalId
@property {RecordRef} issueInventoryNumber
@property {String} receiptInventoryNumber
@property {RecordRef} binNumber
@property {RecordRef} toBinNumber
@property {float} quantity
@property {dateTime} expirationDate
@property {boolean} quantityAvailable
*/
/*
@class InventoryDetailSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} binNumber
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchMultiSelectField} inventoryNumber
@property {SearchDoubleField} quantity
*/
/*
@class InventoryDetailSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} binNumber
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnSelectField[]} inventoryNumber
@property {SearchColumnDoubleField[]} quantity
*/
/*
@class EntitySearchBasic @extends SearchRecordBasic
@property {SearchStringField} address
@property {SearchStringField} addressee
@property {SearchStringField} addressLabel
@property {SearchStringField} addressPhone
@property {SearchStringField} attention
@property {SearchStringField} city
@property {SearchStringField} comments
@property {SearchEnumMultiSelectField} country
@property {SearchStringField} county
@property {SearchDateField} dateCreated
@property {SearchStringField} email
@property {SearchStringField} entityId
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchStringField} fax
@property {SearchBooleanField} giveAccess
@property {SearchEnumMultiSelectField} globalSubscriptionStatus
@property {SearchStringField} image
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isDefaultBilling
@property {SearchBooleanField} isDefaultShipping
@property {SearchBooleanField} isInactive
@property {SearchEnumMultiSelectField} language
@property {SearchDateField} lastModifiedDate
@property {SearchEnumMultiSelectField} level
@property {SearchEnumMultiSelectField} permission
@property {SearchStringField} phone
@property {SearchStringField} phoneticName
@property {SearchStringField} state
@property {SearchMultiSelectField} subsidiary
@property {SearchEnumMultiSelectField} type
@property {SearchStringField} zipCode
@property {SearchCustomFieldList} customFieldList
*/
/*
@class EntitySearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} address
@property {SearchColumnStringField[]} address1
@property {SearchColumnStringField[]} address2
@property {SearchColumnStringField[]} address3
@property {SearchColumnStringField[]} addressee
@property {SearchColumnStringField[]} addressInternalId
@property {SearchColumnStringField[]} addressLabel
@property {SearchColumnStringField[]} addressPhone
@property {SearchColumnStringField[]} altEmail
@property {SearchColumnStringField[]} altName
@property {SearchColumnStringField[]} altPhone
@property {SearchColumnStringField[]} attention
@property {SearchColumnStringField[]} billAddress1
@property {SearchColumnStringField[]} billAddress2
@property {SearchColumnStringField[]} billAddress3
@property {SearchColumnStringField[]} billAddressee
@property {SearchColumnStringField[]} billAttention
@property {SearchColumnStringField[]} billCity
@property {SearchColumnEnumSelectField[]} billCountry
@property {SearchColumnStringField[]} billCountryCode
@property {SearchColumnStringField[]} billPhone
@property {SearchColumnStringField[]} billState
@property {SearchColumnStringField[]} billZipCode
@property {SearchColumnStringField[]} city
@property {SearchColumnStringField[]} comments
@property {SearchColumnEnumSelectField[]} country
@property {SearchColumnStringField[]} countryCode
@property {SearchColumnDateField[]} dateCreated
@property {SearchColumnStringField[]} email
@property {SearchColumnStringField[]} entityId
@property {SearchColumnLongField[]} entityNumber
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnStringField[]} fax
@property {SearchColumnEnumSelectField[]} globalSubscriptionStatus
@property {SearchColumnSelectField[]} image
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isDefaultBilling
@property {SearchColumnBooleanField[]} isDefaultShipping
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnEnumSelectField[]} language
@property {SearchColumnDateField[]} lastModifiedDate
@property {SearchColumnEnumSelectField[]} level
@property {SearchColumnEnumSelectField[]} permission
@property {SearchColumnStringField[]} phone
@property {SearchColumnStringField[]} phoneticName
@property {SearchColumnStringField[]} shipAddress1
@property {SearchColumnStringField[]} shipAddress2
@property {SearchColumnStringField[]} shipAddress3
@property {SearchColumnStringField[]} shipAddressee
@property {SearchColumnStringField[]} shipAttention
@property {SearchColumnStringField[]} shipCity
@property {SearchColumnEnumSelectField[]} shipCountry
@property {SearchColumnStringField[]} shipCountryCode
@property {SearchColumnStringField[]} shipPhone
@property {SearchColumnStringField[]} shipState
@property {SearchColumnStringField[]} shipZip
@property {SearchColumnStringField[]} state
@property {SearchColumnSelectField[]} subscription
@property {SearchColumnDateField[]} subscriptionDate
@property {SearchColumnBooleanField[]} subscriptionStatus
@property {SearchColumnSelectField[]} subsidiary
@property {SearchColumnEnumSelectField[]} type
@property {SearchColumnStringField[]} zipCode
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class ContactSearchBasic @extends SearchRecordBasic
@property {SearchStringField} address
@property {SearchStringField} addressee
@property {SearchStringField} addressLabel
@property {SearchStringField} addressPhone
@property {SearchStringField} attention
@property {SearchBooleanField} availableOffline
@property {SearchMultiSelectField} category
@property {SearchStringField} city
@property {SearchStringField} comments
@property {SearchMultiSelectField} company
@property {SearchMultiSelectField} contactRole
@property {SearchMultiSelectField} contactSource
@property {SearchEnumMultiSelectField} country
@property {SearchStringField} county
@property {SearchDateField} dateCreated
@property {SearchStringField} email
@property {SearchStringField} employer
@property {SearchStringField} entityId
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchStringField} fax
@property {SearchStringField} firstName
@property {SearchBooleanField} giveAccess
@property {SearchEnumMultiSelectField} globalSubscriptionStatus
@property {SearchMultiSelectField} group
@property {SearchBooleanField} hasDuplicates
@property {SearchStringField} image
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isDefaultBilling
@property {SearchBooleanField} isDefaultShipping
@property {SearchBooleanField} isInactive
@property {SearchBooleanField} isPrivate
@property {SearchEnumMultiSelectField} language
@property {SearchDateField} lastModifiedDate
@property {SearchStringField} lastName
@property {SearchEnumMultiSelectField} level
@property {SearchStringField} middleName
@property {SearchMultiSelectField} owner
@property {SearchEnumMultiSelectField} permission
@property {SearchStringField} phone
@property {SearchStringField} phoneticName
@property {SearchStringField} salutation
@property {SearchStringField} state
@property {SearchMultiSelectField} subsidiary
@property {SearchStringField} title
@property {SearchEnumMultiSelectField} type
@property {SearchStringField} zipCode
@property {SearchCustomFieldList} customFieldList
*/
/*
@class ContactSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} address
@property {SearchColumnStringField[]} address1
@property {SearchColumnStringField[]} address2
@property {SearchColumnStringField[]} address3
@property {SearchColumnStringField[]} addressee
@property {SearchColumnStringField[]} addressInternalId
@property {SearchColumnStringField[]} addressLabel
@property {SearchColumnStringField[]} addressPhone
@property {SearchColumnStringField[]} altEmail
@property {SearchColumnStringField[]} altName
@property {SearchColumnStringField[]} altPhone
@property {SearchColumnStringField[]} attention
@property {SearchColumnBooleanField[]} availableOffline
@property {SearchColumnStringField[]} billAddress1
@property {SearchColumnStringField[]} billAddress2
@property {SearchColumnStringField[]} billAddress3
@property {SearchColumnStringField[]} billAddressee
@property {SearchColumnStringField[]} billAttention
@property {SearchColumnStringField[]} billCity
@property {SearchColumnEnumSelectField[]} billCountry
@property {SearchColumnStringField[]} billCountryCode
@property {SearchColumnStringField[]} billPhone
@property {SearchColumnStringField[]} billState
@property {SearchColumnStringField[]} billZipCode
@property {SearchColumnSelectField[]} category
@property {SearchColumnStringField[]} city
@property {SearchColumnStringField[]} comments
@property {SearchColumnSelectField[]} company
@property {SearchColumnSelectField[]} contactRole
@property {SearchColumnStringField[]} contactSource
@property {SearchColumnEnumSelectField[]} country
@property {SearchColumnStringField[]} countryCode
@property {SearchColumnDateField[]} dateCreated
@property {SearchColumnStringField[]} email
@property {SearchColumnStringField[]} entityId
@property {SearchColumnLongField[]} entityNumber
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnStringField[]} fax
@property {SearchColumnStringField[]} firstName
@property {SearchColumnBooleanField[]} giveAccess
@property {SearchColumnEnumSelectField[]} globalSubscriptionStatus
@property {SearchColumnBooleanField[]} hasDuplicates
@property {SearchColumnStringField[]} homePhone
@property {SearchColumnSelectField[]} image
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isDefaultBilling
@property {SearchColumnBooleanField[]} isDefaultShipping
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnEnumSelectField[]} language
@property {SearchColumnDateField[]} lastModifiedDate
@property {SearchColumnStringField[]} lastName
@property {SearchColumnEnumSelectField[]} level
@property {SearchColumnStringField[]} middleName
@property {SearchColumnStringField[]} mobilePhone
@property {SearchColumnSelectField[]} owner
@property {SearchColumnEnumSelectField[]} permission
@property {SearchColumnStringField[]} phone
@property {SearchColumnStringField[]} phoneticName
@property {SearchColumnStringField[]} salutation
@property {SearchColumnStringField[]} shipAddress1
@property {SearchColumnStringField[]} shipAddress2
@property {SearchColumnStringField[]} shipAddress3
@property {SearchColumnStringField[]} shipAddressee
@property {SearchColumnStringField[]} shipAttention
@property {SearchColumnStringField[]} shipCity
@property {SearchColumnEnumSelectField[]} shipCountry
@property {SearchColumnStringField[]} shipCountryCode
@property {SearchColumnStringField[]} shipPhone
@property {SearchColumnStringField[]} shipState
@property {SearchColumnStringField[]} shipZip
@property {SearchColumnStringField[]} state
@property {SearchColumnSelectField[]} subscription
@property {SearchColumnDateField[]} subscriptionDate
@property {SearchColumnBooleanField[]} subscriptionStatus
@property {SearchColumnSelectField[]} subsidiary
@property {SearchColumnStringField[]} title
@property {SearchColumnStringField[]} zipCode
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class CustomerSearchBasic @extends SearchRecordBasic
@property {SearchStringField} accountNumber
@property {SearchStringField} address
@property {SearchStringField} addressee
@property {SearchStringField} addressLabel
@property {SearchStringField} addressPhone
@property {SearchStringField} attention
@property {SearchBooleanField} availableOffline
@property {SearchDoubleField} balance
@property {SearchStringField} billAddress
@property {SearchDoubleField} boughtAmount
@property {SearchDateField} boughtDate
@property {SearchMultiSelectField} buyingReason
@property {SearchMultiSelectField} buyingTimeFrame
@property {SearchMultiSelectField} category
@property {SearchStringField} ccCustomerCode
@property {SearchBooleanField} ccDefault
@property {SearchDateField} ccExpDate
@property {SearchStringField} ccHolderName
@property {SearchStringField} ccNumber
@property {SearchMultiSelectField} ccState
@property {SearchDateField} ccStateFrom
@property {SearchMultiSelectField} ccType
@property {SearchStringField} city
@property {SearchMultiSelectField} classBought
@property {SearchStringField} comments
@property {SearchStringField} companyName
@property {SearchDoubleField} consolBalance
@property {SearchLongField} consolDaysOverdue
@property {SearchDoubleField} consolDepositBalance
@property {SearchDoubleField} consolOverdueBalance
@property {SearchDoubleField} consolUnbilledOrders
@property {SearchStringField} contact
@property {SearchLongField} contribution
@property {SearchDateField} conversionDate
@property {SearchEnumMultiSelectField} country
@property {SearchStringField} county
@property {SearchEnumMultiSelectField} creditHold
@property {SearchBooleanField} creditHoldOverride
@property {SearchDoubleField} creditLimit
@property {SearchMultiSelectField} currency
@property {SearchMultiSelectField} custStage
@property {SearchMultiSelectField} custStatus
@property {SearchDateField} dateClosed
@property {SearchDateField} dateCreated
@property {SearchLongField} daysOverdue
@property {SearchDoubleField} defaultOrderPriority
@property {SearchDoubleField} depositBalance
@property {SearchMultiSelectField} deptBought
@property {SearchMultiSelectField} drAccount
@property {SearchStringField} email
@property {SearchEnumMultiSelectField} emailPreference
@property {SearchBooleanField} emailTransactions
@property {SearchDateField} endDate
@property {SearchStringField} entityId
@property {SearchMultiSelectField} entityStatus
@property {SearchDoubleField} estimatedBudget
@property {SearchBooleanField} explicitConversion
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchStringField} fax
@property {SearchBooleanField} faxTransactions
@property {SearchStringField} firstName
@property {SearchDateField} firstOrderDate
@property {SearchDateField} firstSaleDate
@property {SearchMultiSelectField} fxAccount
@property {SearchDoubleField} fxBalance
@property {SearchDoubleField} fxConsolBalance
@property {SearchDoubleField} fxConsolUnbilledOrders
@property {SearchDoubleField} fxUnbilledOrders
@property {SearchBooleanField} giveAccess
@property {SearchEnumMultiSelectField} globalSubscriptionStatus
@property {SearchMultiSelectField} group
@property {SearchMultiSelectField} groupPricingLevel
@property {SearchBooleanField} hasDuplicates
@property {SearchStringField} image
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isBudgetApproved
@property {SearchBooleanField} isDefaultBilling
@property {SearchBooleanField} isDefaultShipping
@property {SearchBooleanField} isInactive
@property {SearchBooleanField} isPerson
@property {SearchBooleanField} isReportedLead
@property {SearchBooleanField} isShipAddress
@property {SearchMultiSelectField} itemPricingLevel
@property {SearchDoubleField} itemPricingUnitPrice
@property {SearchMultiSelectField} itemsBought
@property {SearchMultiSelectField} itemsOrdered
@property {SearchEnumMultiSelectField} language
@property {SearchDateField} lastModifiedDate
@property {SearchStringField} lastName
@property {SearchDateField} lastOrderDate
@property {SearchDateField} lastSaleDate
@property {SearchDateField} leadDate
@property {SearchMultiSelectField} leadSource
@property {SearchEnumMultiSelectField} level
@property {SearchMultiSelectField} locationBought
@property {SearchBooleanField} manualCreditHold
@property {SearchMultiSelectField} merchantAccount
@property {SearchStringField} middleName
@property {SearchEnumMultiSelectField} monthlyClosing
@property {SearchBooleanField} onCreditHold
@property {SearchDoubleField} orderedAmount
@property {SearchDateField} orderedDate
@property {SearchEnumMultiSelectField} otherRelationships
@property {SearchDoubleField} overdueBalance
@property {SearchMultiSelectField} parent
@property {SearchMultiSelectField} parentItemsBought
@property {SearchMultiSelectField} parentItemsOrdered
@property {SearchMultiSelectField} partner
@property {SearchLongField} partnerContribution
@property {SearchMultiSelectField} partnerRole
@property {SearchMultiSelectField} partnerTeamMember
@property {SearchStringField} pec
@property {SearchEnumMultiSelectField} permission
@property {SearchStringField} phone
@property {SearchStringField} phoneticName
@property {SearchMultiSelectField} priceLevel
@property {SearchMultiSelectField} pricingGroup
@property {SearchMultiSelectField} pricingItem
@property {SearchBooleanField} printTransactions
@property {SearchDateField} prospectDate
@property {SearchBooleanField} pstExempt
@property {SearchMultiSelectField} receivablesAccount
@property {SearchDateField} reminderDate
@property {SearchStringField} resaleNumber
@property {SearchMultiSelectField} role
@property {SearchMultiSelectField} salesReadiness
@property {SearchMultiSelectField} salesRep
@property {SearchMultiSelectField} salesTeamMember
@property {SearchMultiSelectField} salesTeamRole
@property {SearchStringField} salutation
@property {SearchStringField} shipAddress
@property {SearchBooleanField} shipComplete
@property {SearchMultiSelectField} shippingItem
@property {SearchEnumMultiSelectField} stage
@property {SearchDateField} startDate
@property {SearchStringField} state
@property {SearchMultiSelectField} subsidBought
@property {SearchMultiSelectField} subsidiary
@property {SearchBooleanField} taxable
@property {SearchMultiSelectField} terms
@property {SearchMultiSelectField} territory
@property {SearchStringField} title
@property {SearchDoubleField} unbilledOrders
@property {SearchStringField} url
@property {SearchStringField} vatRegNumber
@property {SearchBooleanField} webLead
@property {SearchStringField} zipCode
@property {SearchCustomFieldList} customFieldList
*/
/*
@class CustomerSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} accountNumber
@property {SearchColumnStringField[]} address
@property {SearchColumnStringField[]} address1
@property {SearchColumnStringField[]} address2
@property {SearchColumnStringField[]} address3
@property {SearchColumnStringField[]} addressee
@property {SearchColumnStringField[]} addressInternalId
@property {SearchColumnStringField[]} addressLabel
@property {SearchColumnStringField[]} addressPhone
@property {SearchColumnStringField[]} altContact
@property {SearchColumnStringField[]} altEmail
@property {SearchColumnStringField[]} altName
@property {SearchColumnStringField[]} altPhone
@property {SearchColumnStringField[]} attention
@property {SearchColumnBooleanField[]} availableOffline
@property {SearchColumnDoubleField[]} balance
@property {SearchColumnStringField[]} billAddress
@property {SearchColumnStringField[]} billAddress1
@property {SearchColumnStringField[]} billAddress2
@property {SearchColumnStringField[]} billAddress3
@property {SearchColumnStringField[]} billAddressee
@property {SearchColumnStringField[]} billAttention
@property {SearchColumnStringField[]} billCity
@property {SearchColumnEnumSelectField[]} billCountry
@property {SearchColumnStringField[]} billCountryCode
@property {SearchColumnStringField[]} billPhone
@property {SearchColumnStringField[]} billState
@property {SearchColumnStringField[]} billZipCode
@property {SearchColumnStringField[]} buyingReason
@property {SearchColumnStringField[]} buyingTimeFrame
@property {SearchColumnSelectField[]} category
@property {SearchColumnStringField[]} ccCustomerCode
@property {SearchColumnBooleanField[]} ccDefault
@property {SearchColumnDateField[]} ccExpDate
@property {SearchColumnStringField[]} ccHolderName
@property {SearchColumnStringField[]} ccInternalId
@property {SearchColumnStringField[]} ccNumber
@property {SearchColumnSelectField[]} ccState
@property {SearchColumnDateField[]} ccStateFrom
@property {SearchColumnSelectField[]} ccType
@property {SearchColumnStringField[]} city
@property {SearchColumnStringField[]} comments
@property {SearchColumnStringField[]} companyName
@property {SearchColumnDoubleField[]} consolBalance
@property {SearchColumnLongField[]} consolDaysOverdue
@property {SearchColumnDoubleField[]} consolDepositBalance
@property {SearchColumnDoubleField[]} consolOverdueBalance
@property {SearchColumnDoubleField[]} consolUnbilledOrders
@property {SearchColumnStringField[]} contact
@property {SearchColumnDoubleField[]} contribution
@property {SearchColumnDoubleField[]} contributionPrimary
@property {SearchColumnDateField[]} conversionDate
@property {SearchColumnEnumSelectField[]} country
@property {SearchColumnStringField[]} countryCode
@property {SearchColumnEnumSelectField[]} creditHold
@property {SearchColumnBooleanField[]} creditHoldOverride
@property {SearchColumnDoubleField[]} creditLimit
@property {SearchColumnSelectField[]} currency
@property {SearchColumnDateField[]} dateClosed
@property {SearchColumnDateField[]} dateCreated
@property {SearchColumnLongField[]} daysOverdue
@property {SearchColumnDoubleField[]} defaultOrderPriority
@property {SearchColumnDoubleField[]} depositBalance
@property {SearchColumnStringField[]} drAccount
@property {SearchColumnStringField[]} email
@property {SearchColumnEnumSelectField[]} emailPreference
@property {SearchColumnBooleanField[]} emailTransactions
@property {SearchColumnDateField[]} endDate
@property {SearchColumnStringField[]} entityId
@property {SearchColumnLongField[]} entityNumber
@property {SearchColumnSelectField[]} entityStatus
@property {SearchColumnDoubleField[]} estimatedBudget
@property {SearchColumnBooleanField[]} explicitConversion
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnStringField[]} fax
@property {SearchColumnBooleanField[]} faxTransactions
@property {SearchColumnStringField[]} firstName
@property {SearchColumnDateField[]} firstOrderDate
@property {SearchColumnDateField[]} firstSaleDate
@property {SearchColumnStringField[]} fxAccount
@property {SearchColumnDoubleField[]} fxBalance
@property {SearchColumnDoubleField[]} fxConsolBalance
@property {SearchColumnDoubleField[]} fxConsolUnbilledOrders
@property {SearchColumnDoubleField[]} fxUnbilledOrders
@property {SearchColumnBooleanField[]} giveAccess
@property {SearchColumnEnumSelectField[]} globalSubscriptionStatus
@property {SearchColumnStringField[]} groupPricingLevel
@property {SearchColumnBooleanField[]} hasDuplicates
@property {SearchColumnStringField[]} homePhone
@property {SearchColumnSelectField[]} image
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isBudgetApproved
@property {SearchColumnBooleanField[]} isDefaultBilling
@property {SearchColumnBooleanField[]} isDefaultShipping
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnBooleanField[]} isPerson
@property {SearchColumnBooleanField[]} isShipAddress
@property {SearchColumnStringField[]} itemPricingLevel
@property {SearchColumnDoubleField[]} itemPricingUnitPrice
@property {SearchColumnDateField[]} jobEndDate
@property {SearchColumnDateField[]} jobProjectedEnd
@property {SearchColumnDateField[]} jobStartDate
@property {SearchColumnSelectField[]} jobType
@property {SearchColumnEnumSelectField[]} language
@property {SearchColumnDateField[]} lastModifiedDate
@property {SearchColumnStringField[]} lastName
@property {SearchColumnDateField[]} lastOrderDate
@property {SearchColumnDateField[]} lastSaleDate
@property {SearchColumnDateField[]} leadDate
@property {SearchColumnSelectField[]} leadSource
@property {SearchColumnEnumSelectField[]} level
@property {SearchColumnBooleanField[]} manualCreditHold
@property {SearchColumnStringField[]} middleName
@property {SearchColumnStringField[]} mobilePhone
@property {SearchColumnEnumSelectField[]} monthlyClosing
@property {SearchColumnBooleanField[]} onCreditHold
@property {SearchColumnDoubleField[]} overdueBalance
@property {SearchColumnSelectField[]} parent
@property {SearchColumnSelectField[]} partner
@property {SearchColumnDoubleField[]} partnerContribution
@property {SearchColumnStringField[]} partnerRole
@property {SearchColumnSelectField[]} partnerTeamMember
@property {SearchColumnStringField[]} pec
@property {SearchColumnEnumSelectField[]} permission
@property {SearchColumnStringField[]} phone
@property {SearchColumnStringField[]} phoneticName
@property {SearchColumnSelectField[]} prefCCProcessor
@property {SearchColumnSelectField[]} priceLevel
@property {SearchColumnStringField[]} pricingGroup
@property {SearchColumnStringField[]} pricingItem
@property {SearchColumnBooleanField[]} printTransactions
@property {SearchColumnDateField[]} prospectDate
@property {SearchColumnStringField[]} receivablesAccount
@property {SearchColumnLongField[]} reminderDays
@property {SearchColumnStringField[]} resaleNumber
@property {SearchColumnStringField[]} role
@property {SearchColumnStringField[]} salesReadiness
@property {SearchColumnSelectField[]} salesRep
@property {SearchColumnSelectField[]} salesTeamMember
@property {SearchColumnSelectField[]} salesTeamRole
@property {SearchColumnStringField[]} salutation
@property {SearchColumnStringField[]} shipAddress
@property {SearchColumnStringField[]} shipAddress1
@property {SearchColumnStringField[]} shipAddress2
@property {SearchColumnStringField[]} shipAddress3
@property {SearchColumnStringField[]} shipAddressee
@property {SearchColumnStringField[]} shipAttention
@property {SearchColumnStringField[]} shipCity
@property {SearchColumnBooleanField[]} shipComplete
@property {SearchColumnEnumSelectField[]} shipCountry
@property {SearchColumnStringField[]} shipCountryCode
@property {SearchColumnStringField[]} shipPhone
@property {SearchColumnSelectField[]} shippingItem
@property {SearchColumnStringField[]} shipState
@property {SearchColumnStringField[]} shipZip
@property {SearchColumnEnumSelectField[]} stage
@property {SearchColumnDateField[]} startDate
@property {SearchColumnStringField[]} state
@property {SearchColumnSelectField[]} subscription
@property {SearchColumnDateField[]} subscriptionDate
@property {SearchColumnBooleanField[]} subscriptionStatus
@property {SearchColumnSelectField[]} subsidiary
@property {SearchColumnBooleanField[]} taxable
@property {SearchColumnSelectField[]} taxItem
@property {SearchColumnSelectField[]} terms
@property {SearchColumnSelectField[]} territory
@property {SearchColumnStringField[]} title
@property {SearchColumnDoubleField[]} unbilledOrders
@property {SearchColumnStringField[]} url
@property {SearchColumnStringField[]} vatRegNumber
@property {SearchColumnBooleanField[]} webLead
@property {SearchColumnStringField[]} zipCode
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class CalendarEventSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} attendee
@property {SearchMultiSelectField} calendar
@property {SearchDateField} completedDate
@property {SearchDateField} createdDate
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchDateField} instanceStart
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isUpcomingEvent
@property {SearchDateField} lastModifiedDate
@property {SearchStringField} location
@property {SearchStringField} message
@property {SearchMultiSelectField} organizer
@property {SearchMultiSelectField} owner
@property {SearchMultiSelectField} resource
@property {SearchEnumMultiSelectField} response
@property {SearchDateField} startDate
@property {SearchEnumMultiSelectField} status
@property {SearchStringField} title
@property {SearchCustomFieldList} customFieldList
*/
/*
@class CalendarEventSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} attendee
@property {SearchColumnSelectField[]} company
@property {SearchColumnDateField[]} completedDate
@property {SearchColumnSelectField[]} contact
@property {SearchColumnDateField[]} createdDate
@property {SearchColumnStringField[]} endTime
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnDateField[]} instanceEnd
@property {SearchColumnDateField[]} instanceStart
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnDateField[]} lastModifiedDate
@property {SearchColumnStringField[]} location
@property {SearchColumnStringField[]} markdone
@property {SearchColumnStringField[]} message
@property {SearchColumnSelectField[]} organizer
@property {SearchColumnSelectField[]} owner
@property {SearchColumnStringField[]} recurrence
@property {SearchColumnSelectField[]} resource
@property {SearchColumnEnumSelectField[]} response
@property {SearchColumnStringField[]} startDate
@property {SearchColumnStringField[]} startTime
@property {SearchColumnEnumSelectField[]} status
@property {SearchColumnStringField[]} title
@property {SearchColumnSelectField[]} transaction
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class TaskSearchBasic @extends SearchRecordBasic
@property {SearchDoubleField} actualTime
@property {SearchMultiSelectField} assigned
@property {SearchMultiSelectField} company
@property {SearchDateField} completedDate
@property {SearchMultiSelectField} contact
@property {SearchDateField} createdDate
@property {SearchDateField} endDate
@property {SearchDoubleField} estimatedTime
@property {SearchDoubleField} estimatedTimeOverride
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isJobSummaryTask
@property {SearchBooleanField} isJobTask
@property {SearchBooleanField} isPrivate
@property {SearchDateField} lastModifiedDate
@property {SearchLongField} milestone
@property {SearchMultiSelectField} owner
@property {SearchLongField} percentComplete
@property {SearchLongField} percentTimeComplete
@property {SearchEnumMultiSelectField} priority
@property {SearchDateField} startDate
@property {SearchEnumMultiSelectField} status
@property {SearchDoubleField} timeRemaining
@property {SearchStringField} title
@property {SearchCustomFieldList} customFieldList
*/
/*
@class TaskSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} accessLevel
@property {SearchColumnDoubleField[]} actualTime
@property {SearchColumnSelectField[]} assigned
@property {SearchColumnSelectField[]} company
@property {SearchColumnDateField[]} completedDate
@property {SearchColumnSelectField[]} contact
@property {SearchColumnDateField[]} createdDate
@property {SearchColumnDateField[]} dueDate
@property {SearchColumnDoubleField[]} estimatedTime
@property {SearchColumnDoubleField[]} estimatedTimeOverride
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isJobSummaryTask
@property {SearchColumnBooleanField[]} isJobTask
@property {SearchColumnDateField[]} lastModifiedDate
@property {SearchColumnStringField[]} markdone
@property {SearchColumnStringField[]} message
@property {SearchColumnSelectField[]} milestone
@property {SearchColumnLongField[]} order
@property {SearchColumnSelectField[]} owner
@property {SearchColumnDoubleField[]} percentComplete
@property {SearchColumnDoubleField[]} percentTimeComplete
@property {SearchColumnEnumSelectField[]} priority
@property {SearchColumnDateField[]} startDate
@property {SearchColumnStringField[]} startTime
@property {SearchColumnEnumSelectField[]} status
@property {SearchColumnDoubleField[]} timeRemaining
@property {SearchColumnStringField[]} title
@property {SearchColumnSelectField[]} transaction
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class OpportunitySearchBasic @extends SearchRecordBasic
@property {SearchDoubleField} amount
@property {SearchBooleanField} availableOffline
@property {SearchMultiSelectField} buyingReason
@property {SearchMultiSelectField} buyingTimeFrame
@property {SearchMultiSelectField} class
@property {SearchDateField} closeDate
@property {SearchMultiSelectField} competitor
@property {SearchLongField} contribution
@property {SearchMultiSelectField} currency
@property {SearchMultiSelectField} custType
@property {SearchDateField} dateCreated
@property {SearchLongField} daysOpen
@property {SearchLongField} daysToClose
@property {SearchMultiSelectField} department
@property {SearchMultiSelectField} entity
@property {SearchMultiSelectField} entityStatus
@property {SearchDoubleField} estimatedBudget
@property {SearchDateField} expectedCloseDate
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchEnumMultiSelectField} forecastType
@property {SearchDoubleField} foreignProjectedAmount
@property {SearchDoubleField} foreignRangeHigh
@property {SearchDoubleField} foreignRangeLow
@property {SearchDoubleField} fxTranCostEstimate
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isBudgetApproved
@property {SearchMultiSelectField} item
@property {SearchDateField} lastModifiedDate
@property {SearchMultiSelectField} leadSource
@property {SearchMultiSelectField} location
@property {SearchStringField} memo
@property {SearchLongField} number
@property {SearchMultiSelectField} partner
@property {SearchLongField} partnerContribution
@property {SearchMultiSelectField} partnerRole
@property {SearchMultiSelectField} partnerTeamMember
@property {RecordRef} postingPeriod
@property {PostingPeriodDate} postingPeriodRelative
@property {SearchLongField} probability
@property {SearchDoubleField} projAltSalesAmt
@property {SearchDoubleField} projectedTotal
@property {SearchDoubleField} rangeHigh
@property {SearchDoubleField} rangeHighAlt
@property {SearchDoubleField} rangeLow
@property {SearchDoubleField} rangeLowAlt
@property {SearchMultiSelectField} salesReadiness
@property {SearchMultiSelectField} salesRep
@property {SearchMultiSelectField} salesTeamMember
@property {SearchMultiSelectField} salesTeamRole
@property {SearchEnumMultiSelectField} status
@property {SearchMultiSelectField} subsidiary
@property {RecordRef} taxPeriod
@property {PostingPeriodDate} taxPeriodRelative
@property {SearchStringField} title
@property {SearchDoubleField} tranCostEstimate
@property {SearchDateField} tranDate
@property {SearchDoubleField} tranEstGrossProfit
@property {SearchDoubleField} tranEstGrossProfitPct
@property {SearchDoubleField} tranFxEstGrossProfit
@property {SearchStringField} tranId
@property {SearchMultiSelectField} winLossReason
@property {SearchMultiSelectField} wonBy
@property {SearchCustomFieldList} customFieldList
*/
/*
@class OpportunitySearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} actionItem
@property {SearchColumnBooleanField[]} availableOffline
@property {SearchColumnStringField[]} buyingReason
@property {SearchColumnStringField[]} buyingTimeFrame
@property {SearchColumnSelectField[]} class
@property {SearchColumnDateField[]} closeDate
@property {SearchColumnSelectField[]} competitor
@property {SearchColumnDoubleField[]} contribution
@property {SearchColumnDoubleField[]} contributionPrimary
@property {SearchColumnSelectField[]} currency
@property {SearchColumnStringField[]} custType
@property {SearchColumnDateField[]} dateCreated
@property {SearchColumnLongField[]} daysOpen
@property {SearchColumnLongField[]} daysToClose
@property {SearchColumnSelectField[]} decisionMaker
@property {SearchColumnSelectField[]} department
@property {SearchColumnEnumSelectField[]} status
@property {SearchColumnSelectField[]} entity
@property {SearchColumnSelectField[]} entityStatus
@property {SearchColumnDoubleField[]} estimatedBudget
@property {SearchColumnDateField[]} expectedCloseDate
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnEnumSelectField[]} forecastType
@property {SearchColumnDoubleField[]} foreignProjectedAmount
@property {SearchColumnDoubleField[]} foreignRangeHigh
@property {SearchColumnDoubleField[]} foreignRangeLow
@property {SearchColumnDoubleField[]} fxTranCostEstimate
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isBudgetApproved
@property {SearchColumnDateField[]} lastModifiedDate
@property {SearchColumnSelectField[]} leadSource
@property {SearchColumnSelectField[]} location
@property {SearchColumnStringField[]} memo
@property {SearchColumnSelectField[]} partner
@property {SearchColumnDoubleField[]} partnerContribution
@property {SearchColumnSelectField[]} partnerRole
@property {SearchColumnSelectField[]} partnerTeamMember
@property {SearchColumnStringField[]} period
@property {SearchColumnDoubleField[]} probability
@property {SearchColumnDoubleField[]} projAltSalesAmt
@property {SearchColumnDoubleField[]} projectedTotal
@property {SearchColumnDoubleField[]} rangeHigh
@property {SearchColumnDoubleField[]} rangeHighAlt
@property {SearchColumnDoubleField[]} rangeLow
@property {SearchColumnDoubleField[]} rangeLowAlt
@property {SearchColumnStringField[]} salesReadiness
@property {SearchColumnSelectField[]} salesRep
@property {SearchColumnSelectField[]} salesTeamMember
@property {SearchColumnSelectField[]} salesTeamRole
@property {SearchColumnSelectField[]} subsidiary
@property {SearchColumnSelectField[]} taxPeriod
@property {SearchColumnStringField[]} title
@property {SearchColumnDoubleField[]} total
@property {SearchColumnDoubleField[]} tranCostEstimate
@property {SearchColumnDateField[]} tranDate
@property {SearchColumnDoubleField[]} tranEstGrossProfit
@property {SearchColumnDoubleField[]} tranEstGrossProfitPct
@property {SearchColumnDoubleField[]} tranFxEstGrossProfit
@property {SearchColumnStringField[]} tranId
@property {SearchColumnDoubleField[]} weightedTotal
@property {SearchColumnSelectField[]} winLossReason
@property {SearchColumnSelectField[]} wonBy
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class EmployeeSearchBasic @extends SearchRecordBasic
@property {SearchStringField} address
@property {SearchStringField} addressee
@property {SearchStringField} addressLabel
@property {SearchStringField} addressPhone
@property {SearchStringField} alienNumber
@property {SearchDateField} anniversary
@property {SearchDoubleField} approvalLimit
@property {SearchMultiSelectField} approver
@property {SearchStringField} attention
@property {SearchDateField} authWorkDate
@property {SearchStringField} billAddress
@property {SearchMultiSelectField} billingClass
@property {SearchDateField} birthDate
@property {SearchDateField} birthDay
@property {SearchMultiSelectField} cContribution
@property {SearchStringField} city
@property {SearchMultiSelectField} class
@property {SearchStringField} comments
@property {SearchMultiSelectField} commissionPlan
@property {SearchBooleanField} concurrentWebServicesUser
@property {SearchEnumMultiSelectField} country
@property {SearchStringField} county
@property {SearchDateField} dateCreated
@property {SearchMultiSelectField} deduction
@property {SearchMultiSelectField} department
@property {SearchMultiSelectField} earning
@property {SearchMultiSelectField} education
@property {SearchBooleanField} eligibleForCommission
@property {SearchStringField} email
@property {SearchMultiSelectField} employeeStatus
@property {SearchMultiSelectField} employeeType
@property {SearchBooleanField} employeeTypeKpi
@property {SearchStringField} entityId
@property {SearchMultiSelectField} ethnicity
@property {SearchDoubleField} expenseLimit
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchStringField} fax
@property {SearchStringField} firstName
@property {SearchEnumMultiSelectField} gender
@property {SearchBooleanField} giveAccess
@property {SearchEnumMultiSelectField} globalSubscriptionStatus
@property {SearchMultiSelectField} group
@property {SearchDateField} hireDate
@property {SearchBooleanField} I9Verified
@property {SearchStringField} image
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isDefaultBilling
@property {SearchBooleanField} isDefaultShipping
@property {SearchBooleanField} isInactive
@property {SearchBooleanField} isJobResource
@property {SearchBooleanField} isTemplate
@property {SearchStringField} jobDescription
@property {SearchDoubleField} laborCost
@property {SearchEnumMultiSelectField} language
@property {SearchDateField} lastModifiedDate
@property {SearchStringField} lastName
@property {SearchDateField} lastPaidDate
@property {SearchDateField} lastReviewDate
@property {SearchEnumMultiSelectField} level
@property {SearchMultiSelectField} location
@property {SearchMultiSelectField} maritalStatus
@property {SearchStringField} middleName
@property {SearchDateField} nextReviewDate
@property {SearchBooleanField} offlineAccess
@property {SearchEnumMultiSelectField} payFrequency
@property {SearchDateField} permChangeDate
@property {SearchEnumMultiSelectField} permission
@property {SearchEnumMultiSelectField} permissionChange
@property {SearchStringField} phone
@property {SearchStringField} phoneticName
@property {SearchDoubleField} primaryEarningAmount
@property {SearchStringField} primaryEarningItem
@property {SearchStringField} primaryEarningType
@property {SearchDoubleField} purchaseOrderApprovalLimit
@property {SearchMultiSelectField} purchaseOrderApprover
@property {SearchDoubleField} purchaseOrderLimit
@property {SearchDateField} releaseDate
@property {SearchMultiSelectField} residentStatus
@property {SearchMultiSelectField} role
@property {SearchMultiSelectField} roleChange
@property {SearchDateField} roleChangeDate
@property {SearchBooleanField} salesRep
@property {SearchMultiSelectField} salesRole
@property {SearchStringField} salutation
@property {SearchStringField} socialSecurityNumber
@property {SearchStringField} state
@property {SearchMultiSelectField} subsidiary
@property {SearchMultiSelectField} supervisor
@property {SearchBooleanField} supportRep
@property {SearchMultiSelectField} timeApprover
@property {SearchStringField} title
@property {SearchBooleanField} usePerquest
@property {SearchBooleanField} useTimeData
@property {SearchDateField} visaExpDate
@property {SearchMultiSelectField} visaType
@property {SearchMultiSelectField} withholding
@property {SearchMultiSelectField} workCalendar
@property {SearchMultiSelectField} workplace
@property {SearchStringField} zipCode
@property {SearchCustomFieldList} customFieldList
*/
/*
@class EmployeeSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} accountNumber
@property {SearchColumnStringField[]} address
@property {SearchColumnStringField[]} address1
@property {SearchColumnStringField[]} address2
@property {SearchColumnStringField[]} address3
@property {SearchColumnStringField[]} addressee
@property {SearchColumnStringField[]} addressInternalId
@property {SearchColumnStringField[]} addressLabel
@property {SearchColumnStringField[]} addressPhone
@property {SearchColumnStringField[]} alienNumber
@property {SearchColumnStringField[]} altEmail
@property {SearchColumnStringField[]} altName
@property {SearchColumnStringField[]} altPhone
@property {SearchColumnDoubleField[]} approvalLimit
@property {SearchColumnSelectField[]} approver
@property {SearchColumnStringField[]} attention
@property {SearchColumnDateField[]} authWorkDate
@property {SearchColumnStringField[]} billAddress
@property {SearchColumnStringField[]} billAddress1
@property {SearchColumnStringField[]} billAddress2
@property {SearchColumnStringField[]} billAddress3
@property {SearchColumnStringField[]} billAddressee
@property {SearchColumnStringField[]} billAttention
@property {SearchColumnStringField[]} billCity
@property {SearchColumnEnumSelectField[]} billCountry
@property {SearchColumnStringField[]} billCountryCode
@property {SearchColumnSelectField[]} billingClass
@property {SearchColumnStringField[]} billPhone
@property {SearchColumnStringField[]} billState
@property {SearchColumnStringField[]} billZipCode
@property {SearchColumnDateField[]} birthDate
@property {SearchColumnDateField[]} birthDay
@property {SearchColumnStringField[]} city
@property {SearchColumnSelectField[]} class
@property {SearchColumnStringField[]} comments
@property {SearchColumnBooleanField[]} concurrentWebServicesUser
@property {SearchColumnEnumSelectField[]} country
@property {SearchColumnStringField[]} countryCode
@property {SearchColumnDateField[]} dateCreated
@property {SearchColumnSelectField[]} department
@property {SearchColumnBooleanField[]} eligibleForCommission
@property {SearchColumnStringField[]} email
@property {SearchColumnSelectField[]} employeeStatus
@property {SearchColumnSelectField[]} employeeType
@property {SearchColumnStringField[]} entityId
@property {SearchColumnLongField[]} entityNumber
@property {SearchColumnSelectField[]} ethnicity
@property {SearchColumnDoubleField[]} expenseLimit
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnStringField[]} fax
@property {SearchColumnStringField[]} firstName
@property {SearchColumnEnumSelectField[]} gender
@property {SearchColumnBooleanField[]} giveAccess
@property {SearchColumnEnumSelectField[]} globalSubscriptionStatus
@property {SearchColumnDateField[]} hireDate
@property {SearchColumnStringField[]} homePhone
@property {SearchColumnBooleanField[]} i9Verified
@property {SearchColumnSelectField[]} image
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isDefaultBilling
@property {SearchColumnBooleanField[]} isDefaultShipping
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnBooleanField[]} isJobResource
@property {SearchColumnBooleanField[]} isSalesRep
@property {SearchColumnBooleanField[]} isSupportRep
@property {SearchColumnBooleanField[]} isTemplate
@property {SearchColumnDoubleField[]} laborCost
@property {SearchColumnEnumSelectField[]} language
@property {SearchColumnDateField[]} lastModifiedDate
@property {SearchColumnStringField[]} lastName
@property {SearchColumnDateField[]} lastPaidDate
@property {SearchColumnDateField[]} lastReviewDate
@property {SearchColumnEnumSelectField[]} level
@property {SearchColumnSelectField[]} location
@property {SearchColumnSelectField[]} maritalStatus
@property {SearchColumnStringField[]} middleName
@property {SearchColumnStringField[]} mobilePhone
@property {SearchColumnDateField[]} nextReviewDate
@property {SearchColumnBooleanField[]} offlineAccess
@property {SearchColumnEnumSelectField[]} payFrequency
@property {SearchColumnDateField[]} permChangeDate
@property {SearchColumnStringField[]} permChangeLevel
@property {SearchColumnEnumSelectField[]} permission
@property {SearchColumnEnumSelectField[]} permissionChange
@property {SearchColumnStringField[]} phone
@property {SearchColumnStringField[]} phoneticName
@property {SearchColumnDoubleField[]} primaryEarningAmount
@property {SearchColumnStringField[]} primaryEarningItem
@property {SearchColumnStringField[]} primaryEarningType
@property {SearchColumnDoubleField[]} purchaseOrderApprovalLimit
@property {SearchColumnSelectField[]} purchaseOrderApprover
@property {SearchColumnDoubleField[]} purchaseOrderLimit
@property {SearchColumnDateField[]} releaseDate
@property {SearchColumnSelectField[]} residentStatus
@property {SearchColumnSelectField[]} role
@property {SearchColumnStringField[]} roleChange
@property {SearchColumnStringField[]} roleChangeAction
@property {SearchColumnDateField[]} roleChangeDate
@property {SearchColumnSelectField[]} salesRole
@property {SearchColumnStringField[]} salutation
@property {SearchColumnStringField[]} shipAddress1
@property {SearchColumnStringField[]} shipAddress2
@property {SearchColumnStringField[]} shipAddress3
@property {SearchColumnStringField[]} shipAddressee
@property {SearchColumnStringField[]} shipAttention
@property {SearchColumnStringField[]} shipCity
@property {SearchColumnEnumSelectField[]} shipCountry
@property {SearchColumnStringField[]} shipCountryCode
@property {SearchColumnStringField[]} shipPhone
@property {SearchColumnStringField[]} shipState
@property {SearchColumnStringField[]} shipZip
@property {SearchColumnStringField[]} socialSecurityNumber
@property {SearchColumnEnumSelectField[]} state
@property {SearchColumnSelectField[]} subscription
@property {SearchColumnDateField[]} subscriptionDate
@property {SearchColumnBooleanField[]} subscriptionStatus
@property {SearchColumnSelectField[]} subsidiary
@property {SearchColumnSelectField[]} supervisor
@property {SearchColumnSelectField[]} timeApprover
@property {SearchColumnStringField[]} title
@property {SearchColumnBooleanField[]} usePerquest
@property {SearchColumnBooleanField[]} useTimeData
@property {SearchColumnDateField[]} visaExpDate
@property {SearchColumnSelectField[]} visaType
@property {SearchColumnStringField[]} workCalendar
@property {SearchColumnSelectField[]} workplace
@property {SearchColumnStringField[]} zipCode
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class PhoneCallSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} assigned
@property {SearchMultiSelectField} company
@property {SearchDateField} completedDate
@property {SearchMultiSelectField} contact
@property {SearchMultiSelectField} createdBy
@property {SearchDateField} createdDate
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isPrivate
@property {SearchDateField} lastModifiedDate
@property {SearchBooleanField} owner
@property {SearchStringField} phone
@property {SearchEnumMultiSelectField} priority
@property {SearchDateField} startDate
@property {SearchEnumMultiSelectField} status
@property {SearchStringField} title
@property {SearchCustomFieldList} customFieldList
*/
/*
@class PhoneCallSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} accessLevel
@property {SearchColumnSelectField[]} assigned
@property {SearchColumnSelectField[]} company
@property {SearchColumnDateField[]} completedDate
@property {SearchColumnSelectField[]} contact
@property {SearchColumnDateField[]} createdDate
@property {SearchColumnDateField[]} endDate
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnDateField[]} lastModifiedDate
@property {SearchColumnStringField[]} markdone
@property {SearchColumnStringField[]} message
@property {SearchColumnSelectField[]} owner
@property {SearchColumnStringField[]} phone
@property {SearchColumnEnumSelectField[]} priority
@property {SearchColumnDateField[]} startDate
@property {SearchColumnDateField[]} startTime
@property {SearchColumnEnumSelectField[]} status
@property {SearchColumnStringField[]} title
@property {SearchColumnSelectField[]} transaction
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class SupportCaseSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} assigned
@property {SearchBooleanField} awaitingReply
@property {SearchStringField} caseNumber
@property {SearchMultiSelectField} category
@property {SearchDateField} closedDate
@property {SearchStringField} company
@property {SearchStringField} contact
@property {SearchDateField} createdDate
@property {SearchStringField} email
@property {SearchMultiSelectField} escalateTo
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchBooleanField} helpDesk
@property {SearchStringField} inboundEmail
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchMultiSelectField} issue
@property {SearchMultiSelectField} item
@property {SearchBooleanField} lastMessage
@property {SearchDateField} lastModifiedDate
@property {SearchDateField} lastReopenedDate
@property {SearchBooleanField} locked
@property {SearchStringField} message
@property {SearchMultiSelectField} messageAuthor
@property {SearchDateField} messageDate
@property {SearchBooleanField} messageType
@property {SearchMultiSelectField} module
@property {SearchLongField} number
@property {SearchMultiSelectField} origin
@property {SearchMultiSelectField} priority
@property {SearchMultiSelectField} product
@property {SearchMultiSelectField} profile
@property {SearchStringField} serialNumber
@property {SearchEnumMultiSelectField} stage
@property {SearchDateField} startDate
@property {SearchMultiSelectField} status
@property {SearchMultiSelectField} subsidiary
@property {SearchStringField} title
@property {SearchCustomFieldList} customFieldList
*/
/*
@class SupportCaseSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} assigned
@property {SearchColumnBooleanField[]} awaitingReply
@property {SearchColumnStringField[]} caseNumber
@property {SearchColumnSelectField[]} category
@property {SearchColumnSelectField[]} company
@property {SearchColumnSelectField[]} contact
@property {SearchColumnDateField[]} createdDate
@property {SearchColumnEnumSelectField[]} customerStage
@property {SearchColumnStringField[]} email
@property {SearchColumnDateField[]} endDate
@property {SearchColumnSelectField[]} escalatee
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnBooleanField[]} helpDesk
@property {SearchColumnStringField[]} inboundEmail
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnSelectField[]} issue
@property {SearchColumnStringField[]} issueNumber
@property {SearchColumnSelectField[]} item
@property {SearchColumnDateField[]} lastMessageDate
@property {SearchColumnDateField[]} lastModifiedDate
@property {SearchColumnDateField[]} lastReopenedDate
@property {SearchColumnBooleanField[]} locked
@property {SearchColumnSelectField[]} module
@property {SearchColumnSelectField[]} origin
@property {SearchColumnSelectField[]} priority
@property {SearchColumnSelectField[]} product
@property {SearchColumnSelectField[]} profile
@property {SearchColumnStringField[]} serialNumber
@property {SearchColumnEnumSelectField[]} stage
@property {SearchColumnDateField[]} startDate
@property {SearchColumnSelectField[]} status
@property {SearchColumnSelectField[]} subsidiary
@property {SearchColumnStringField[]} title
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class MessageSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} author
@property {SearchStringField} authorEmail
@property {SearchStringField} bcc
@property {SearchStringField} cc
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchBooleanField} hasAttachment
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} internalOnly
@property {SearchStringField} message
@property {SearchDateField} messageDate
@property {SearchEnumMultiSelectField} messageType
@property {SearchMultiSelectField} recipient
@property {SearchStringField} recipientEmail
@property {SearchStringField} subject
*/
/*
@class MessageSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} author
@property {SearchColumnStringField[]} authorEmail
@property {SearchColumnStringField[]} bcc
@property {SearchColumnStringField[]} cc
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnBooleanField[]} hasAttachment
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} internalOnly
@property {SearchColumnBooleanField[]} isEmailed
@property {SearchColumnBooleanField[]} isIncoming
@property {SearchColumnStringField[]} message
@property {SearchColumnDateField[]} messageDate
@property {SearchColumnEnumSelectField[]} messageType
@property {SearchColumnSelectField[]} recipient
@property {SearchColumnStringField[]} recipientEmail
@property {SearchColumnStringField[]} subject
*/
/*
@class NoteSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} author
@property {SearchBooleanField} direction
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchStringField} note
@property {SearchDateField} noteDate
@property {SearchMultiSelectField} noteType
@property {SearchStringField} title
@property {SearchCustomFieldList} customFieldList
*/
/*
@class NoteSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} author
@property {SearchColumnStringField[]} direction
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnStringField[]} note
@property {SearchColumnDateField[]} noteDate
@property {SearchColumnStringField[]} noteType
@property {SearchColumnStringField[]} title
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class CustomRecordSearchBasic @extends SearchRecordBasic
@property {RecordRef} recType
@property {SearchBooleanField} availableOffline
@property {SearchDateField} created
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchLongField} id
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchDateField} lastModified
@property {SearchMultiSelectField} lastModifiedBy
@property {SearchStringField} name
@property {SearchMultiSelectField} owner
@property {SearchCustomFieldList} customFieldList
*/
/*
@class CustomRecordSearchRowBasic @extends SearchRowBasic
@property {RecordRef} recType
@property {SearchColumnStringField[]} altName
@property {SearchColumnBooleanField[]} availableOffline
@property {SearchColumnDateField[]} created
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnLongField[]} id
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnDateField[]} lastModified
@property {SearchColumnSelectField[]} lastModifiedBy
@property {SearchColumnStringField[]} name
@property {SearchColumnSelectField[]} owner
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class AccountSearchBasic @extends SearchRecordBasic
@property {SearchDoubleField} balance
@property {SearchEnumMultiSelectField} cashFlowRateType
@property {SearchMultiSelectField} category1099Misc
@property {SearchStringField} description
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchEnumMultiSelectField} generalRateType
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchStringField} name
@property {SearchStringField} number
@property {SearchMultiSelectField} parent
@property {SearchMultiSelectField} subsidiary
@property {SearchEnumMultiSelectField} type
@property {SearchCustomFieldList} customFieldList
*/
/*
@class AccountSearchRowBasic @extends SearchRowBasic
@property {SearchColumnDoubleField[]} balance
@property {SearchColumnEnumSelectField[]} cashFlowRateType
@property {SearchColumnSelectField[]} category1099Misc
@property {SearchColumnStringField[]} description
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnEnumSelectField[]} generalRateType
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnStringField[]} name
@property {SearchColumnStringField[]} number
@property {SearchColumnSelectField[]} subsidiary
@property {SearchColumnEnumSelectField[]} type
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class RevRecScheduleSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} accountingBook
@property {SearchEnumMultiSelectField} amorStatus
@property {SearchDoubleField} amortizedAmount
@property {SearchEnumMultiSelectField} amorType
@property {SearchDoubleField} amount
@property {SearchMultiSelectField} currency
@property {SearchDoubleField} deferredAmount
@property {SearchMultiSelectField} destAcct
@property {SearchDoubleField} initialAmt
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isRecognized
@property {SearchMultiSelectField} jeDoc
@property {SearchStringField} name
@property {SearchDoubleField} pctComplete
@property {SearchDoubleField} pctRecognition
@property {SearchLongField} periodOffset
@property {SearchMultiSelectField} postPeriod
@property {SearchDateField} schedDate
@property {SearchLongField} scheduleNumber
@property {SearchStringField} scheduleNumberText
@property {SearchMultiSelectField} sourceAcct
@property {SearchMultiSelectField} srcTranPostPeriod
@property {SearchMultiSelectField} srcTranType
@property {SearchLongField} startOffset
@property {SearchStringField} templateName
@property {SearchBooleanField} useForeignAmounts
*/
/*
@class RevRecScheduleSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} accountingBook
@property {SearchColumnEnumSelectField[]} amorStatus
@property {SearchColumnStringField[]} amorTemplate
@property {SearchColumnDoubleField[]} amortizedAmount
@property {SearchColumnEnumSelectField[]} amorType
@property {SearchColumnDoubleField[]} amount
@property {SearchColumnStringField[]} currency
@property {SearchColumnDoubleField[]} deferredAmount
@property {SearchColumnStringField[]} destAcct
@property {SearchColumnDoubleField[]} initialAmt
@property {SearchColumnLongField[]} internalId
@property {SearchColumnBooleanField[]} isRecognized
@property {SearchColumnStringField[]} jeDoc
@property {SearchColumnLongField[]} lineSequenceNumber
@property {SearchColumnStringField[]} name
@property {SearchColumnStringField[]} nameUrl
@property {SearchColumnDoubleField[]} pctComplete
@property {SearchColumnDoubleField[]} pctRecognition
@property {SearchColumnLongField[]} periodOffset
@property {SearchColumnDoubleField[]} recurAmount
@property {SearchColumnDoubleField[]} recurFxAmount
@property {SearchColumnDateField[]} schedDate
@property {SearchColumnStringField[]} scheduleNumber
@property {SearchColumnStringField[]} sourceAcct
@property {SearchColumnStringField[]} srcDocLine
@property {SearchColumnStringField[]} srcTran
@property {SearchColumnStringField[]} srcTranPostPeriod
@property {SearchColumnLongField[]} startOffset
@property {SearchColumnBooleanField[]} useForeignAmounts
*/
/*
@class RevRecTemplateSearchBasic @extends SearchRecordBasic
@property {SearchEnumMultiSelectField} amorMethod
@property {SearchLongField} amorPeriod
@property {SearchLongField} amorStartOffset
@property {SearchEnumMultiSelectField} amorTermSrc
@property {SearchEnumMultiSelectField} amorType
@property {SearchMultiSelectField} contraAccount
@property {SearchMultiSelectField} deferralAccount
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchStringField} name
@property {SearchLongField} periodOffset
@property {SearchMultiSelectField} targetAccount
@property {SearchBooleanField} useForeignAmounts
*/
/*
@class RevRecTemplateSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} amorMethod
@property {SearchColumnStringField[]} amorPeriod
@property {SearchColumnStringField[]} amorStartOffset
@property {SearchColumnStringField[]} amorTermSrc
@property {SearchColumnStringField[]} amorType
@property {SearchColumnStringField[]} contraAccount
@property {SearchColumnStringField[]} deferralAccount
@property {SearchColumnStringField[]} externalId
@property {SearchColumnLongField[]} internalId
@property {SearchColumnStringField[]} isInactive
@property {SearchColumnStringField[]} name
@property {SearchColumnStringField[]} periodOffset
@property {SearchColumnStringField[]} targetAccount
@property {SearchColumnBooleanField[]} useForeignAmounts
*/
/*
@class BinSearchBasic @extends SearchRecordBasic
@property {SearchStringField} binNumber
@property {SearchBooleanField} inactive
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchMultiSelectField} location
@property {SearchStringField} memo
@property {SearchCustomFieldList} customFieldList
*/
/*
@class BinSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} binNumber
@property {SearchColumnBooleanField[]} inactive
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnStringField[]} location
@property {SearchColumnStringField[]} memo
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class DepartmentSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchStringField} name
@property {SearchStringField} nameNoHierarchy
@property {SearchMultiSelectField} subsidiary
@property {SearchCustomFieldList} customFieldList
*/
/*
@class DepartmentSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnStringField[]} name
@property {SearchColumnStringField[]} nameNoHierarchy
@property {SearchColumnSelectField[]} subsidiary
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class LocationSearchBasic @extends SearchRecordBasic
@property {SearchStringField} address
@property {SearchStringField} city
@property {SearchEnumMultiSelectField} country
@property {SearchStringField} county
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchBooleanField} isOffice
@property {SearchBooleanField} makeInventoryAvailable
@property {SearchBooleanField} makeInventoryAvailableStore
@property {SearchStringField} name
@property {SearchStringField} nameNoHierarchy
@property {SearchStringField} phone
@property {SearchStringField} state
@property {SearchMultiSelectField} subsidiary
@property {SearchStringField} tranprefix
@property {SearchStringField} zip
@property {SearchCustomFieldList} customFieldList
*/
/*
@class LocationSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} address1
@property {SearchColumnStringField[]} address2
@property {SearchColumnStringField[]} address3
@property {SearchColumnStringField[]} city
@property {SearchColumnEnumSelectField[]} country
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnBooleanField[]} isOffice
@property {SearchColumnBooleanField[]} makeInventoryAvailable
@property {SearchColumnBooleanField[]} makeInventoryAvailableStore
@property {SearchColumnStringField[]} name
@property {SearchColumnStringField[]} nameNoHierarchy
@property {SearchColumnStringField[]} phone
@property {SearchColumnStringField[]} state
@property {SearchColumnSelectField[]} subsidiary
@property {SearchColumnStringField[]} tranPrefix
@property {SearchColumnStringField[]} zip
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class ClassificationSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchStringField} name
@property {SearchStringField} nameNoHierarchy
@property {SearchMultiSelectField} subsidiary
@property {SearchCustomFieldList} customFieldList
*/
/*
@class ClassificationSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnStringField[]} name
@property {SearchColumnStringField[]} nameNoHierarchy
@property {SearchColumnSelectField[]} subsidiary
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class TransactionSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} account
@property {SearchMultiSelectField} accountType
@property {SearchDateField} actualShipDate
@property {SearchDoubleField} altSalesAmount
@property {SearchDoubleField} altSalesNetAmount
@property {SearchDoubleField} amount
@property {SearchDoubleField} amountPaid
@property {SearchDoubleField} amountRemaining
@property {SearchDoubleField} amountUnbilled
@property {SearchMultiSelectField} anyLineItem
@property {SearchDoubleField} appliedToForeignAmount
@property {SearchBooleanField} appliedToIsFxVariance
@property {SearchDoubleField} appliedToLinkAmount
@property {SearchEnumMultiSelectField} appliedToLinkType
@property {SearchMultiSelectField} appliedToTransaction
@property {SearchDoubleField} applyingForeignAmount
@property {SearchBooleanField} applyingIsFxVariance
@property {SearchDoubleField} applyingLinkAmount
@property {SearchEnumMultiSelectField} applyingLinkType
@property {SearchMultiSelectField} applyingTransaction
@property {SearchEnumMultiSelectField} approvalStatus
@property {SearchStringField} authCode
@property {SearchBooleanField} autoCalculateLag
@property {SearchEnumMultiSelectField} avsStreetMatch
@property {SearchEnumMultiSelectField} avsZipMatch
@property {SearchBooleanField} billable
@property {SearchStringField} billAddress
@property {SearchStringField} billAddressee
@property {SearchStringField} billAttention
@property {SearchStringField} billCity
@property {SearchEnumMultiSelectField} billCountry
@property {SearchStringField} billCounty
@property {SearchDateField} billedDate
@property {SearchMultiSelectField} billingSchedule
@property {SearchBooleanField} billingStatus
@property {SearchMultiSelectField} billingTransaction
@property {SearchStringField} billPhone
@property {SearchStringField} billState
@property {SearchEnumMultiSelectField} billVarianceStatus
@property {SearchStringField} billZip
@property {SearchStringField} binNumber
@property {SearchDoubleField} binNumberQuantity
@property {SearchDoubleField} bomQuantity
@property {SearchBooleanField} bookSpecificTransaction
@property {SearchBooleanField} buildEntireAssembly
@property {SearchDoubleField} buildVariance
@property {SearchDoubleField} built
@property {SearchMultiSelectField} catchUpPeriod
@property {SearchStringField} ccCustomerCode
@property {SearchDateField} ccExpireDate
@property {SearchStringField} ccName
@property {SearchStringField} ccNumber
@property {SearchEnumMultiSelectField} chargeType
@property {SearchMultiSelectField} class
@property {SearchBooleanField} cleared
@property {SearchBooleanField} closed
@property {SearchDateField} closeDate
@property {SearchBooleanField} cogs
@property {SearchDateField} commissionEffectiveDate
@property {SearchEnumMultiSelectField} commit
@property {SearchDoubleField} componentYield
@property {SearchStringField} confirmationNumber
@property {SearchLongField} contribution
@property {SearchDoubleField} costComponentAmount
@property {SearchMultiSelectField} costComponentCategory
@property {SearchMultiSelectField} costComponentItem
@property {SearchDoubleField} costComponentQuantity
@property {SearchDoubleField} costComponentStandardCost
@property {SearchDoubleField} costEstimate
@property {SearchDoubleField} costEstimateRate
@property {SearchEnumMultiSelectField} costEstimateType
@property {SearchMultiSelectField} createdBy
@property {SearchMultiSelectField} createdFrom
@property {SearchDoubleField} creditAmount
@property {SearchEnumMultiSelectField} cscMatch
@property {SearchMultiSelectField} currency
@property {SearchMultiSelectField} customerSubOf
@property {SearchMultiSelectField} customForm
@property {SearchMultiSelectField} custType
@property {SearchDateField} dateCreated
@property {SearchLongField} daysOpen
@property {SearchLongField} daysOverdue
@property {SearchDoubleField} debitAmount
@property {SearchDoubleField} deferredRevenue
@property {SearchBooleanField} deferRevRec
@property {SearchMultiSelectField} department
@property {SearchDateField} depositDate
@property {SearchMultiSelectField} depositTransaction
@property {SearchMultiSelectField} drAccount
@property {SearchDateField} dueDate
@property {SearchStringField} email
@property {SearchMultiSelectField} employee
@property {SearchDateField} endDate
@property {SearchMultiSelectField} entity
@property {SearchMultiSelectField} entityStatus
@property {SearchDoubleField} estGrossProfit
@property {SearchDoubleField} estGrossProfitPct
@property {SearchDoubleField} exchangeRate
@property {SearchBooleanField} excludeCommission
@property {SearchBooleanField} excludeFromRateRequest
@property {SearchDateField} expectedCloseDate
@property {SearchDateField} expectedReceiptDate
@property {SearchMultiSelectField} expenseCategory
@property {SearchDateField} expenseDate
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchBooleanField} finChrg
@property {SearchBooleanField} firmed
@property {SearchEnumMultiSelectField} forecastType
@property {SearchMultiSelectField} fulfillingTransaction
@property {SearchMultiSelectField} fxAccount
@property {SearchDoubleField} fxAmount
@property {SearchDoubleField} fxCostEstimate
@property {SearchDoubleField} fxCostEstimateRate
@property {SearchDoubleField} fxEstGrossProfit
@property {SearchDoubleField} fxTranCostEstimate
@property {SearchDoubleField} fxVsoeAllocation
@property {SearchDoubleField} fxVsoeAmount
@property {SearchDoubleField} fxVsoePrice
@property {SearchBooleanField} gcoAvailabelToCharge
@property {SearchBooleanField} gcoAvailableToRefund
@property {SearchEnumMultiSelectField} gcoAvsStreetMatch
@property {SearchEnumMultiSelectField} gcoAvsZipMatch
@property {SearchLongField} gcoBuyerAccountAge
@property {SearchStringField} gcoBuyerIp
@property {SearchDoubleField} gcoChargeAmount
@property {SearchDoubleField} gcoChargebackAmount
@property {SearchDoubleField} gcoConfirmedChargedTotal
@property {SearchDoubleField} gcoConfirmedRefundedTotal
@property {SearchStringField} gcoCreditcardNumber
@property {SearchEnumMultiSelectField} gcoCscMatch
@property {SearchStringField} gcoFinancialState
@property {SearchStringField} gcoFulfillmentState
@property {SearchStringField} gcoOrderId
@property {SearchDoubleField} gcoOrderTotal
@property {SearchDoubleField} gcoPromotionAmount
@property {SearchStringField} gcoPromotionName
@property {SearchDoubleField} gcoRefundAmount
@property {SearchDoubleField} gcoShippingTotal
@property {SearchStringField} gcoStateChangedDetail
@property {SearchStringField} giftCertificate
@property {SearchDoubleField} grossAmount
@property {SearchBooleanField} includeInForecast
@property {SearchEnumMultiSelectField} intercoStatus
@property {SearchMultiSelectField} intercoTransaction
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} inVsoeBundle
@property {SearchBooleanField} isAllocation
@property {SearchBooleanField} isBackflush
@property {SearchBooleanField} isGcoChargeback
@property {SearchBooleanField} isGcoChargeConfirmed
@property {SearchBooleanField} isGcoPaymentGuaranteed
@property {SearchBooleanField} isGcoRefundConfirmed
@property {SearchBooleanField} isIntercompanyAdjustment
@property {SearchBooleanField} isMultiShipTo
@property {SearchBooleanField} isPayPalMeth
@property {SearchBooleanField} isReversal
@property {SearchBooleanField} isRevRecTransaction
@property {SearchBooleanField} isScrap
@property {SearchBooleanField} isShipAddress
@property {SearchBooleanField} isTransferPriceCosting
@property {SearchBooleanField} isVsoeAlloc
@property {SearchBooleanField} isWip
@property {SearchMultiSelectField} item
@property {SearchMultiSelectField} itemRevision
@property {SearchMultiSelectField} itemSubOf
@property {SearchBooleanField} landedCostPerLine
@property {SearchDateField} lastModifiedDate
@property {SearchMultiSelectField} leadSource
@property {SearchMultiSelectField} location
@property {SearchBooleanField} mainLine
@property {SearchMultiSelectField} mainName
@property {SearchMultiSelectField} manufacturingRouting
@property {SearchBooleanField} matchBillToReceipt
@property {SearchStringField} memo
@property {SearchStringField} memoMain
@property {SearchBooleanField} memorized
@property {SearchStringField} merchantAccount
@property {SearchStringField} message
@property {SearchBooleanField} multiSubsidiary
@property {SearchStringField} nameText
@property {SearchDoubleField} netAmount
@property {SearchMultiSelectField} nextApprover
@property {SearchDateField} nextBillDate
@property {SearchBooleanField} nonReimbursable
@property {SearchLongField} number
@property {SearchMultiSelectField} opportunity
@property {SearchDoubleField} orderPriority
@property {SearchTextNumberField} otherRefNum
@property {SearchTextNumberField} otherRefNumNonDeposit
@property {SearchMultiSelectField} overheadParentItem
@property {SearchLongField} packageCount
@property {SearchMultiSelectField} paidTransaction
@property {SearchLongField} parent
@property {SearchMultiSelectField} partner
@property {SearchLongField} partnerContribution
@property {SearchMultiSelectField} partnerRole
@property {SearchMultiSelectField} partnerTeamMember
@property {SearchMultiSelectField} payingTransaction
@property {SearchBooleanField} paymentApproved
@property {SearchDateField} paymentEventDate
@property {SearchEnumMultiSelectField} paymentEventHoldReason
@property {SearchBooleanField} paymentEventPurchaseCardUsed
@property {SearchBooleanField} paymentEventPurchaseDataSent
@property {SearchEnumMultiSelectField} paymentEventResult
@property {SearchEnumMultiSelectField} paymentEventType
@property {SearchBooleanField} paymentHold
@property {SearchMultiSelectField} paymentMethod
@property {SearchBooleanField} payPalPending
@property {SearchStringField} payPalStatus
@property {SearchStringField} payPalTranId
@property {SearchStringField} pnRefNum
@property {SearchStringField} poAsText
@property {SearchBooleanField} posting
@property {RecordRef} postingPeriod
@property {PostingPeriodDate} postingPeriodRelative
@property {SearchMultiSelectField} priceLevel
@property {SearchBooleanField} printedPickingTicket
@property {SearchLongField} probability
@property {SearchDoubleField} projectedAmount
@property {SearchMultiSelectField} promoCode
@property {SearchMultiSelectField} purchaseOrder
@property {SearchDoubleField} quantity
@property {SearchDoubleField} quantityBilled
@property {SearchDoubleField} quantityCommitted
@property {SearchDoubleField} quantityPacked
@property {SearchDoubleField} quantityPicked
@property {SearchDoubleField} quantityRevCommitted
@property {SearchDoubleField} quantityShipRecv
@property {SearchDoubleField} recognizedRevenue
@property {SearchStringField} recordType
@property {SearchLongField} refNumber
@property {SearchEnumMultiSelectField} revCommitStatus
@property {SearchBooleanField} revCommittingStatus
@property {SearchMultiSelectField} revCommittingTransaction
@property {SearchEnumMultiSelectField} revenueStatus
@property {SearchDateField} reversalDate
@property {SearchStringField} reversalNumber
@property {SearchDateField} revRecEndDate
@property {SearchBooleanField} revRecOnRevCommitment
@property {SearchDateField} revRecStartDate
@property {SearchLongField} revRecTermInMonths
@property {SearchDateField} salesEffectiveDate
@property {SearchMultiSelectField} salesOrder
@property {SearchMultiSelectField} salesRep
@property {SearchMultiSelectField} salesTeamMember
@property {SearchMultiSelectField} salesTeamRole
@property {SearchEnumMultiSelectField} schedulingMethod
@property {SearchStringField} serialNumber
@property {SearchDoubleField} serialNumberCost
@property {SearchDoubleField} serialNumberCostAdjustment
@property {SearchDoubleField} serialNumberQuantity
@property {SearchStringField} serialNumbers
@property {SearchStringField} shipAddress
@property {SearchStringField} shipAddressee
@property {SearchStringField} shipAttention
@property {SearchStringField} shipCity
@property {SearchBooleanField} shipComplete
@property {SearchEnumMultiSelectField} shipCountry
@property {SearchStringField} shipCounty
@property {SearchDateField} shipDate
@property {SearchLongField} shipGroup
@property {SearchMultiSelectField} shipMethod
@property {SearchStringField} shipPhone
@property {SearchBooleanField} shipping
@property {SearchBooleanField} shipRecvStatus
@property {SearchBooleanField} shipRecvStatusLine
@property {SearchMultiSelectField} shipState
@property {SearchMultiSelectField} shipTo
@property {SearchStringField} shipZip
@property {SearchEnumMultiSelectField} source
@property {SearchDateField} startDate
@property {SearchBooleanField} statistical
@property {SearchEnumMultiSelectField} status
@property {SearchMultiSelectField} subsidiary
@property {SearchMultiSelectField} taxItem
@property {SearchBooleanField} taxLine
@property {RecordRef} taxPeriod
@property {PostingPeriodDate} taxPeriodRelative
@property {SearchDoubleField} taxRate
@property {SearchMultiSelectField} terms
@property {SearchStringField} title
@property {SearchBooleanField} toBeEmailed
@property {SearchBooleanField} toBePrinted
@property {SearchMultiSelectField} toSubsidiary
@property {SearchDoubleField} totalAmount
@property {SearchStringField} trackingNumbers
@property {SearchDoubleField} tranCostEstimate
@property {SearchDateField} tranDate
@property {SearchDoubleField} tranEstGrossProfit
@property {SearchDoubleField} tranEstGrossProfitPct
@property {SearchDoubleField} tranFxEstGrossProfit
@property {SearchStringField} tranId
@property {SearchBooleanField} tranIsVsoeBundle
@property {SearchBooleanField} transactionDiscount
@property {SearchEnumMultiSelectField} transactionLineType
@property {SearchStringField} transactionNumber
@property {SearchMultiSelectField} transferLocation
@property {SearchDoubleField} transferOrderQuantityCommitted
@property {SearchDoubleField} transferOrderQuantityPacked
@property {SearchDoubleField} transferOrderQuantityPicked
@property {SearchDoubleField} transferOrderQuantityReceived
@property {SearchDoubleField} transferOrderQuantityShipped
@property {SearchEnumMultiSelectField} type
@property {SearchMultiSelectField} unit
@property {SearchDoubleField} unitCostOverride
@property {SearchMultiSelectField} unitsType
@property {SearchMultiSelectField} vendType
@property {SearchBooleanField} visibleToCustomer
@property {SearchBooleanField} voided
@property {SearchDoubleField} vsoeAllocation
@property {SearchDoubleField} vsoeAmount
@property {SearchEnumMultiSelectField} vsoeDeferral
@property {SearchBooleanField} vsoeDelivered
@property {SearchEnumMultiSelectField} vsoePermitDiscount
@property {SearchDoubleField} vsoePrice
@property {SearchMultiSelectField} webSite
@property {SearchCustomFieldList} customFieldList
*/
/*
@class TransactionSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} abbrev
@property {SearchColumnSelectField[]} account
@property {SearchColumnStringField[]} accountType
@property {SearchColumnDateField[]} actualShipDate
@property {SearchColumnDoubleField[]} altSalesAmount
@property {SearchColumnDoubleField[]} altSalesNetAmount
@property {SearchColumnDoubleField[]} amount
@property {SearchColumnDoubleField[]} amountPaid
@property {SearchColumnDoubleField[]} amountRemaining
@property {SearchColumnDoubleField[]} amountUnbilled
@property {SearchColumnDoubleField[]} appliedToForeignAmount
@property {SearchColumnBooleanField[]} appliedToIsFxVariance
@property {SearchColumnDoubleField[]} appliedToLinkAmount
@property {SearchColumnStringField[]} appliedToLinkType
@property {SearchColumnSelectField[]} appliedToTransaction
@property {SearchColumnDoubleField[]} applyingForeignAmount
@property {SearchColumnBooleanField[]} applyingIsFxVariance
@property {SearchColumnDoubleField[]} applyingLinkAmount
@property {SearchColumnStringField[]} applyingLinkType
@property {SearchColumnSelectField[]} applyingTransaction
@property {SearchColumnEnumSelectField[]} approvalStatus
@property {SearchColumnStringField[]} authCode
@property {SearchColumnBooleanField[]} autoCalculateLag
@property {SearchColumnEnumSelectField[]} avsStreetMatch
@property {SearchColumnEnumSelectField[]} avsZipMatch
@property {SearchColumnBooleanField[]} billable
@property {SearchColumnStringField[]} billAddress
@property {SearchColumnStringField[]} billAddress1
@property {SearchColumnStringField[]} billAddress2
@property {SearchColumnStringField[]} billAddress3
@property {SearchColumnStringField[]} billAddressee
@property {SearchColumnStringField[]} billAttention
@property {SearchColumnStringField[]} billCity
@property {SearchColumnEnumSelectField[]} billCountry
@property {SearchColumnStringField[]} billCountryCode
@property {SearchColumnDateField[]} billedDate
@property {SearchColumnDoubleField[]} billingAmount
@property {SearchColumnSelectField[]} billingSchedule
@property {SearchColumnSelectField[]} billingTransaction
@property {SearchColumnStringField[]} billPhone
@property {SearchColumnStringField[]} billState
@property {SearchColumnEnumSelectField[]} billVarianceStatus
@property {SearchColumnStringField[]} billZip
@property {SearchColumnStringField[]} binNumber
@property {SearchColumnDoubleField[]} binNumberQuantity
@property {SearchColumnDoubleField[]} bomQuantity
@property {SearchColumnBooleanField[]} buildEntireAssembly
@property {SearchColumnDoubleField[]} buildVariance
@property {SearchColumnDoubleField[]} built
@property {SearchColumnStringField[]} catchUpPeriod
@property {SearchColumnStringField[]} ccCustomerCode
@property {SearchColumnDateField[]} ccExpDate
@property {SearchColumnStringField[]} ccHolderName
@property {SearchColumnStringField[]} ccNumber
@property {SearchColumnStringField[]} ccStreet
@property {SearchColumnStringField[]} ccZipCode
@property {SearchColumnSelectField[]} class
@property {SearchColumnBooleanField[]} cleared
@property {SearchColumnBooleanField[]} closed
@property {SearchColumnDateField[]} closeDate
@property {SearchColumnDoubleField[]} cogsAmount
@property {SearchColumnDateField[]} commissionEffectiveDate
@property {SearchColumnEnumSelectField[]} commit
@property {SearchColumnDoubleField[]} componentYield
@property {SearchColumnStringField[]} confirmationNumber
@property {SearchColumnDoubleField[]} contribution
@property {SearchColumnDoubleField[]} contributionPrimary
@property {SearchColumnDoubleField[]} costComponentAmount
@property {SearchColumnStringField[]} costComponentCategory
@property {SearchColumnStringField[]} costComponentItem
@property {SearchColumnDoubleField[]} costComponentQuantity
@property {SearchColumnDoubleField[]} costComponentStandardCost
@property {SearchColumnDoubleField[]} costEstimate
@property {SearchColumnDoubleField[]} costEstimateRate
@property {SearchColumnEnumSelectField[]} costEstimateType
@property {SearchColumnSelectField[]} createdBy
@property {SearchColumnSelectField[]} createdFrom
@property {SearchColumnDoubleField[]} creditAmount
@property {SearchColumnEnumSelectField[]} cscMatch
@property {SearchColumnSelectField[]} currency
@property {SearchColumnSelectField[]} customForm
@property {SearchColumnSelectField[]} custType
@property {SearchColumnDateField[]} dateCreated
@property {SearchColumnLongField[]} daysOpen
@property {SearchColumnLongField[]} daysOverdue
@property {SearchColumnDoubleField[]} debitAmount
@property {SearchColumnDoubleField[]} deferredRevenue
@property {SearchColumnBooleanField[]} deferRevRec
@property {SearchColumnSelectField[]} department
@property {SearchColumnDateField[]} depositDate
@property {SearchColumnSelectField[]} depositTransaction
@property {SearchColumnDoubleField[]} discountAmount
@property {SearchColumnStringField[]} docUnit
@property {SearchColumnStringField[]} drAccount
@property {SearchColumnDateField[]} dueDate
@property {SearchColumnDoubleField[]} effectiveRate
@property {SearchColumnStringField[]} email
@property {SearchColumnDateField[]} endDate
@property {SearchColumnSelectField[]} entity
@property {SearchColumnSelectField[]} entityStatus
@property {SearchColumnDoubleField[]} estGrossProfit
@property {SearchColumnDoubleField[]} estGrossProfitPct
@property {SearchColumnDoubleField[]} estGrossProfitPercent
@property {SearchColumnDoubleField[]} exchangeRate
@property {SearchColumnBooleanField[]} excludeCommission
@property {SearchColumnBooleanField[]} excludeFromRateRequest
@property {SearchColumnDateField[]} expectedCloseDate
@property {SearchColumnDateField[]} expectedReceiptDate
@property {SearchColumnSelectField[]} expenseCategory
@property {SearchColumnDateField[]} expenseDate
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnBooleanField[]} firmed
@property {SearchColumnEnumSelectField[]} forecastType
@property {SearchColumnSelectField[]} fulfillingTransaction
@property {SearchColumnStringField[]} fxAccount
@property {SearchColumnDoubleField[]} fxAmount
@property {SearchColumnDoubleField[]} fxCostEstimate
@property {SearchColumnDoubleField[]} fxCostEstimateRate
@property {SearchColumnDoubleField[]} fxEstGrossProfit
@property {SearchColumnDoubleField[]} fxTranCostEstimate
@property {SearchColumnDoubleField[]} fxVsoeAllocation
@property {SearchColumnDoubleField[]} fxVsoeAmount
@property {SearchColumnDoubleField[]} fxVsoePrice
@property {SearchColumnBooleanField[]} gcoAvailabelToCharge
@property {SearchColumnBooleanField[]} gcoAvailableToRefund
@property {SearchColumnEnumSelectField[]} gcoAvsStreetMatch
@property {SearchColumnEnumSelectField[]} gcoAvsZipMatch
@property {SearchColumnLongField[]} gcoBuyerAccountAge
@property {SearchColumnStringField[]} gcoBuyerIp
@property {SearchColumnDoubleField[]} gcoChargeAmount
@property {SearchColumnDoubleField[]} gcoChargebackAmount
@property {SearchColumnDoubleField[]} gcoConfirmedChargedTotal
@property {SearchColumnDoubleField[]} gcoConfirmedRefundedTotal
@property {SearchColumnStringField[]} gcoCreditcardNumber
@property {SearchColumnEnumSelectField[]} gcoCscMatch
@property {SearchColumnStringField[]} gcoFinancialState
@property {SearchColumnStringField[]} gcoFulfillmentState
@property {SearchColumnStringField[]} gcoOrderId
@property {SearchColumnDoubleField[]} gcoOrderTotal
@property {SearchColumnDoubleField[]} gcoPromotionAmount
@property {SearchColumnStringField[]} gcoPromotionName
@property {SearchColumnDoubleField[]} gcoRefundAmount
@property {SearchColumnDoubleField[]} gcoShippingTotal
@property {SearchColumnStringField[]} gcoStateChangedDetail
@property {SearchColumnStringField[]} giftCert
@property {SearchColumnDoubleField[]} grossAmount
@property {SearchColumnBooleanField[]} includeInForecast
@property {SearchColumnEnumSelectField[]} intercoStatus
@property {SearchColumnStringField[]} intercoTransaction
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} inVsoeBundle
@property {SearchColumnBooleanField[]} isAllocation
@property {SearchColumnBooleanField[]} isBackflush
@property {SearchColumnBooleanField[]} isGcoChargeback
@property {SearchColumnBooleanField[]} isGcoChargeConfirmed
@property {SearchColumnBooleanField[]} isGcoPaymentGuaranteed
@property {SearchColumnBooleanField[]} isGcoRefundConfirmed
@property {SearchColumnBooleanField[]} isIntercompanyAdjustment
@property {SearchColumnBooleanField[]} isMultiShipTo
@property {SearchColumnBooleanField[]} isReversal
@property {SearchColumnBooleanField[]} isRevRecTransaction
@property {SearchColumnBooleanField[]} isScrap
@property {SearchColumnBooleanField[]} isShipAddress
@property {SearchColumnBooleanField[]} isTransferPriceCosting
@property {SearchColumnBooleanField[]} isWip
@property {SearchColumnSelectField[]} item
@property {SearchColumnSelectField[]} itemRevision
@property {SearchColumnBooleanField[]} landedCostPerLine
@property {SearchColumnDateField[]} lastModifiedDate
@property {SearchColumnSelectField[]} leadSource
@property {SearchColumnLongField[]} line
@property {SearchColumnLongField[]} lineSequenceNumber
@property {SearchColumnSelectField[]} location
@property {SearchColumnBooleanField[]} mainLine
@property {SearchColumnStringField[]} mainName
@property {SearchColumnSelectField[]} manufacturingRouting
@property {SearchColumnBooleanField[]} matchBillToReceipt
@property {SearchColumnStringField[]} memo
@property {SearchColumnStringField[]} memoMain
@property {SearchColumnBooleanField[]} memorized
@property {SearchColumnSelectField[]} merchantAccount
@property {SearchColumnStringField[]} message
@property {SearchColumnBooleanField[]} multiSubsidiary
@property {SearchColumnDoubleField[]} netAmount
@property {SearchColumnDoubleField[]} netAmountNoTax
@property {SearchColumnSelectField[]} nextApprover
@property {SearchColumnDateField[]} nextBillDate
@property {SearchColumnBooleanField[]} nonReimbursable
@property {SearchColumnSelectField[]} opportunity
@property {SearchColumnStringField[]} options
@property {SearchColumnDoubleField[]} orderPriority
@property {SearchColumnEnumSelectField[]} originator
@property {SearchColumnTextNumberField[]} otherRefNum
@property {SearchColumnSelectField[]} overheadParentItem
@property {SearchColumnLongField[]} packageCount
@property {SearchColumnDoubleField[]} paidAmount
@property {SearchColumnSelectField[]} paidTransaction
@property {SearchColumnSelectField[]} partner
@property {SearchColumnDoubleField[]} partnerContribution
@property {SearchColumnSelectField[]} partnerRole
@property {SearchColumnSelectField[]} partnerTeamMember
@property {SearchColumnDoubleField[]} payingAmount
@property {SearchColumnSelectField[]} payingTransaction
@property {SearchColumnBooleanField[]} paymentApproved
@property {SearchColumnDateField[]} paymentEventDate
@property {SearchColumnEnumSelectField[]} paymentEventHoldReason
@property {SearchColumnBooleanField[]} paymentEventPurchaseCardUsed
@property {SearchColumnBooleanField[]} paymentEventPurchaseDataSent
@property {SearchColumnEnumSelectField[]} paymentEventResult
@property {SearchColumnEnumSelectField[]} paymentEventType
@property {SearchColumnBooleanField[]} paymentHold
@property {SearchColumnSelectField[]} paymentMethod
@property {SearchColumnBooleanField[]} payPalPending
@property {SearchColumnStringField[]} payPalStatus
@property {SearchColumnStringField[]} payPalTranId
@property {SearchColumnStringField[]} payrollBatch
@property {SearchColumnStringField[]} pnRefNum
@property {SearchColumnDoubleField[]} poRate
@property {SearchColumnBooleanField[]} posting
@property {SearchColumnSelectField[]} postingPeriod
@property {SearchColumnSelectField[]} priceLevel
@property {SearchColumnStringField[]} print
@property {SearchColumnDoubleField[]} probability
@property {SearchColumnDoubleField[]} projectedAmount
@property {SearchColumnSelectField[]} promoCode
@property {SearchColumnSelectField[]} purchaseOrder
@property {SearchColumnDoubleField[]} quantity
@property {SearchColumnDoubleField[]} quantityBilled
@property {SearchColumnDoubleField[]} quantityCommitted
@property {SearchColumnDoubleField[]} quantityPacked
@property {SearchColumnDoubleField[]} quantityPicked
@property {SearchColumnDoubleField[]} quantityRevCommitted
@property {SearchColumnDoubleField[]} quantityShipRecv
@property {SearchColumnDoubleField[]} quantityUom
@property {SearchColumnDoubleField[]} rate
@property {SearchColumnStringField[]} realizedGainPostingTransaction
@property {SearchColumnDoubleField[]} recognizedRevenue
@property {SearchColumnStringField[]} recordType
@property {SearchColumnLongField[]} refNumber
@property {SearchColumnEnumSelectField[]} revCommitStatus
@property {SearchColumnSelectField[]} revCommittingTransaction
@property {SearchColumnEnumSelectField[]} revenueStatus
@property {SearchColumnDateField[]} reversalDate
@property {SearchColumnStringField[]} reversalNumber
@property {SearchColumnDateField[]} revRecEndDate
@property {SearchColumnBooleanField[]} revRecOnRevCommitment
@property {SearchColumnDateField[]} revRecStartDate
@property {SearchColumnSelectField[]} rgAccount
@property {SearchColumnDoubleField[]} rgAmount
@property {SearchColumnDateField[]} salesEffectiveDate
@property {SearchColumnSelectField[]} salesOrder
@property {SearchColumnSelectField[]} salesRep
@property {SearchColumnSelectField[]} salesTeamMember
@property {SearchColumnSelectField[]} salesTeamRole
@property {SearchColumnEnumSelectField[]} schedulingMethod
@property {SearchColumnStringField[]} serialNumber
@property {SearchColumnDoubleField[]} serialNumberCost
@property {SearchColumnDoubleField[]} serialNumberCostAdjustment
@property {SearchColumnDoubleField[]} serialNumberQuantity
@property {SearchColumnStringField[]} serialNumbers
@property {SearchColumnStringField[]} shipAddress
@property {SearchColumnStringField[]} shipAddress1
@property {SearchColumnStringField[]} shipAddress2
@property {SearchColumnStringField[]} shipAddress3
@property {SearchColumnStringField[]} shipAddressee
@property {SearchColumnStringField[]} shipAttention
@property {SearchColumnStringField[]} shipCity
@property {SearchColumnBooleanField[]} shipComplete
@property {SearchColumnEnumSelectField[]} shipCountry
@property {SearchColumnStringField[]} shipCountryCode
@property {SearchColumnDateField[]} shipDate
@property {SearchColumnLongField[]} shipGroup
@property {SearchColumnSelectField[]} shipMethod
@property {SearchColumnStringField[]} shipPhone
@property {SearchColumnDoubleField[]} shippingAmount
@property {SearchColumnBooleanField[]} shipRecvStatusLine
@property {SearchColumnStringField[]} shipState
@property {SearchColumnSelectField[]} shipTo
@property {SearchColumnStringField[]} shipZip
@property {SearchColumnDoubleField[]} signedAmount
@property {SearchColumnStringField[]} source
@property {SearchColumnDateField[]} startDate
@property {SearchColumnEnumSelectField[]} status
@property {SearchColumnSelectField[]} subsidiary
@property {SearchColumnDoubleField[]} taxAmount
@property {SearchColumnSelectField[]} taxCode
@property {SearchColumnBooleanField[]} taxLine
@property {SearchColumnSelectField[]} taxPeriod
@property {SearchColumnDoubleField[]} taxTotal
@property {SearchColumnLongField[]} termInMonths
@property {SearchColumnSelectField[]} terms
@property {SearchColumnStringField[]} title
@property {SearchColumnBooleanField[]} toBeEmailed
@property {SearchColumnBooleanField[]} toBePrinted
@property {SearchColumnSelectField[]} toSubsidiary
@property {SearchColumnDoubleField[]} total
@property {SearchColumnDoubleField[]} totalCostEstimate
@property {SearchColumnStringField[]} trackingNumbers
@property {SearchColumnDateField[]} tranDate
@property {SearchColumnDoubleField[]} tranEstGrossProfit
@property {SearchColumnDoubleField[]} tranFxEstGrossProfit
@property {SearchColumnStringField[]} tranId
@property {SearchColumnBooleanField[]} tranIsVsoeBundle
@property {SearchColumnBooleanField[]} transactionDiscount
@property {SearchColumnEnumSelectField[]} transactionLineType
@property {SearchColumnStringField[]} transactionNumber
@property {SearchColumnSelectField[]} transferLocation
@property {SearchColumnStringField[]} transferOrderItemLine
@property {SearchColumnDoubleField[]} transferOrderQuantityCommitted
@property {SearchColumnDoubleField[]} transferOrderQuantityPacked
@property {SearchColumnDoubleField[]} transferOrderQuantityPicked
@property {SearchColumnDoubleField[]} transferOrderQuantityReceived
@property {SearchColumnDoubleField[]} transferOrderQuantityShipped
@property {SearchColumnEnumSelectField[]} type
@property {SearchColumnStringField[]} unit
@property {SearchColumnDoubleField[]} unitCostOverride
@property {SearchColumnSelectField[]} vendType
@property {SearchColumnBooleanField[]} visibleToCustomer
@property {SearchColumnDoubleField[]} vsoeAllocation
@property {SearchColumnDoubleField[]} vsoeAmount
@property {SearchColumnEnumSelectField[]} vsoeDeferral
@property {SearchColumnBooleanField[]} vsoeDelivered
@property {SearchColumnEnumSelectField[]} vsoePermitDiscount
@property {SearchColumnDoubleField[]} vsoePrice
@property {SearchColumnStringField[]} webSite
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class ItemSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} account
@property {SearchMultiSelectField} accountingBook
@property {SearchMultiSelectField} accountingBookAmortization
@property {SearchMultiSelectField} accountingBookRevRecSchedule
@property {SearchMultiSelectField} allowedShippingMethod
@property {SearchMultiSelectField} alternateDemandSourceItem
@property {SearchDoubleField} atpLeadTime
@property {SearchEnumMultiSelectField} atpMethod
@property {SearchBooleanField} autoLeadTime
@property {SearchBooleanField} autoPreferredStockLevel
@property {SearchBooleanField} autoReorderPoint
@property {SearchBooleanField} availableToPartners
@property {SearchDoubleField} averageCost
@property {SearchLongField} backwardConsumptionDays
@property {SearchStringField} binNumber
@property {SearchDoubleField} binOnHandAvail
@property {SearchDoubleField} binOnHandCount
@property {SearchDoubleField} bomQuantity
@property {SearchBooleanField} buildEntireAssembly
@property {SearchDoubleField} buildTime
@property {SearchDoubleField} buyItNowPrice
@property {SearchStringField} caption
@property {SearchMultiSelectField} category
@property {SearchMultiSelectField} class
@property {SearchMultiSelectField} component
@property {SearchMultiSelectField} componentOf
@property {SearchDoubleField} componentYield
@property {SearchBooleanField} copyDescription
@property {SearchMultiSelectField} correlatedItem
@property {SearchDoubleField} correlatedItemCorrelation
@property {SearchLongField} correlatedItemCount
@property {SearchDoubleField} correlatedItemLift
@property {SearchDoubleField} correlatedItemPurchaseRate
@property {SearchDoubleField} cost
@property {SearchEnumMultiSelectField} costAccountingStatus
@property {SearchMultiSelectField} costCategory
@property {SearchDoubleField} costEstimate
@property {SearchEnumMultiSelectField} costEstimateType
@property {SearchEnumMultiSelectField} costingMethod
@property {SearchEnumMultiSelectField} countryOfManufacture
@property {SearchDateField} created
@property {SearchBooleanField} createJob
@property {SearchDateField} dateViewed
@property {SearchDoubleField} daysBeforeExpiration
@property {SearchDoubleField} defaultReturnCost
@property {SearchMultiSelectField} defaultShippingMethod
@property {SearchBooleanField} deferRevRec
@property {SearchDoubleField} demandModifier
@property {SearchEnumMultiSelectField} demandSource
@property {SearchLongField} demandTimeFence
@property {SearchMultiSelectField} department
@property {SearchBooleanField} displayIneBayStore
@property {SearchStringField} displayName
@property {SearchMultiSelectField} distributionCategory
@property {SearchMultiSelectField} distributionNetwork
@property {SearchBooleanField} dontShowPrice
@property {SearchStringField} eBayItemDescription
@property {SearchStringField} eBayItemSubtitle
@property {SearchStringField} eBayItemTitle
@property {SearchEnumMultiSelectField} ebayRelistingOption
@property {SearchEnumMultiSelectField} effectiveBomControl
@property {SearchDateField} effectiveDate
@property {SearchMultiSelectField} effectiveRevision
@property {SearchBooleanField} endAuctionsWhenOutOfStock
@property {SearchBooleanField} excludeFromSitemap
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchStringField} featuredDescription
@property {SearchStringField} feedDescription
@property {SearchStringField} feedName
@property {SearchDoubleField} fixedLotSize
@property {SearchLongField} forwardConsumptionDays
@property {SearchEnumMultiSelectField} fraudRisk
@property {SearchBooleanField} froogleProductFeed
@property {SearchDoubleField} fxCost
@property {SearchBooleanField} generateAccruals
@property {SearchStringField} giftCertAuthCode
@property {SearchStringField} giftCertEmail
@property {SearchDateField} giftCertExpDate
@property {SearchStringField} giftCertFrom
@property {SearchStringField} giftCertMsg
@property {SearchStringField} giftCertOrigAmt
@property {SearchStringField} giftCertRecipient
@property {SearchStringField} imageUrl
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchMultiSelectField} inventoryLocation
@property {SearchEnumMultiSelectField} invtClassification
@property {SearchLongField} invtCountInterval
@property {SearchBooleanField} isAvailable
@property {SearchBooleanField} isDropShipItem
@property {SearchBooleanField} isFulfillable
@property {SearchBooleanField} isGcoCompliant
@property {SearchBooleanField} isInactive
@property {SearchBooleanField} isLotItem
@property {SearchBooleanField} isOnline
@property {SearchBooleanField} isPreferredVendor
@property {SearchBooleanField} isSerialItem
@property {SearchBooleanField} isSpecialOrderItem
@property {SearchBooleanField} isSpecialWorkOrderItem
@property {SearchMultiSelectField} issueProduct
@property {SearchBooleanField} isTaxable
@property {SearchBooleanField} isVsoeBundle
@property {SearchBooleanField} isWip
@property {SearchStringField} itemId
@property {SearchStringField} itemUrl
@property {SearchDateField} lastInvtCountDate
@property {SearchDateField} lastModifiedDate
@property {SearchDoubleField} lastPurchasePrice
@property {SearchDateField} lastQuantityAvailableChange
@property {SearchLongField} leadTime
@property {SearchEnumMultiSelectField} listingDuration
@property {SearchMultiSelectField} location
@property {SearchDoubleField} locationAtpLeadTime
@property {SearchDoubleField} locationAverageCost
@property {SearchDoubleField} locationBuildTime
@property {SearchDoubleField} locationCost
@property {SearchEnumMultiSelectField} locationCostAccountingStatus
@property {SearchDoubleField} locationDefaultReturnCost
@property {SearchEnumMultiSelectField} locationDemandSource
@property {SearchLongField} locationDemandTimeFence
@property {SearchDoubleField} locationFixedLotSize
@property {SearchMultiSelectField} locationInventoryCostTemplate
@property {SearchEnumMultiSelectField} locationInvtClassification
@property {SearchLongField} locationInvtCountInterval
@property {SearchDateField} locationLastInvtCountDate
@property {SearchLongField} locationLeadTime
@property {SearchDateField} locationNextInvtCountDate
@property {SearchLongField} locationPeriodicLotSizeDays
@property {SearchEnumMultiSelectField} locationPeriodicLotSizeType
@property {SearchDoubleField} locationPreferredStockLevel
@property {SearchDoubleField} locationQuantityAvailable
@property {SearchDoubleField} locationQuantityBackOrdered
@property {SearchDoubleField} locationQuantityCommitted
@property {SearchDoubleField} locationQuantityInTransit
@property {SearchDoubleField} locationQuantityOnHand
@property {SearchDoubleField} locationQuantityOnOrder
@property {SearchDoubleField} locationReorderPoint
@property {SearchLongField} locationRescheduleInDays
@property {SearchLongField} locationRescheduleOutDays
@property {SearchDoubleField} locationSafetyStockLevel
@property {SearchEnumMultiSelectField} locationSupplyLotSizingMethod
@property {SearchLongField} locationSupplyTimeFence
@property {SearchEnumMultiSelectField} locationSupplyType
@property {SearchDoubleField} locationTotalValue
@property {SearchLongField} locBackwardConsumptionDays
@property {SearchLongField} locForwardConsumptionDays
@property {SearchStringField} manufacturer
@property {SearchStringField} manufactureraddr1
@property {SearchStringField} manufacturerCity
@property {SearchStringField} manufacturerState
@property {SearchStringField} manufacturerTariff
@property {SearchStringField} manufacturerTaxId
@property {SearchStringField} manufacturerZip
@property {SearchBooleanField} manufacturingChargeItem
@property {SearchBooleanField} matchBillToReceipt
@property {SearchBooleanField} matrix
@property {SearchBooleanField} matrixChild
@property {SearchStringField} metaTagHtml
@property {SearchLongField} minimumQuantity
@property {SearchBooleanField} mossApplies
@property {SearchStringField} mpn
@property {SearchBooleanField} multManufactureAddr
@property {SearchStringField} nexTagCategory
@property {SearchBooleanField} nexTagProductFeed
@property {SearchDateField} nextInvtCountDate
@property {SearchLongField} numActiveListings
@property {SearchDoubleField} numberAllowedDownloads
@property {SearchLongField} numCurrentlyListed
@property {SearchDateField} obsoleteDate
@property {SearchMultiSelectField} obsoleteRevision
@property {SearchBooleanField} offerSupport
@property {SearchDoubleField} onlineCustomerPrice
@property {SearchBooleanField} onSpecial
@property {SearchMultiSelectField} otherVendor
@property {SearchMultiSelectField} outOfStockBehavior
@property {SearchEnumMultiSelectField} overallQuantityPricingType
@property {SearchEnumMultiSelectField} overheadType
@property {SearchStringField} pageTitle
@property {SearchMultiSelectField} parent
@property {SearchLongField} periodicLotSizeDays
@property {SearchEnumMultiSelectField} periodicLotSizeType
@property {SearchStringField} preferenceCriterion
@property {SearchBooleanField} preferredBin
@property {SearchMultiSelectField} preferredLocation
@property {SearchDoubleField} preferredStockLevel
@property {SearchLongField} preferredStockLevelDays
@property {SearchDoubleField} price
@property {SearchBooleanField} pricesIncludeTax
@property {SearchMultiSelectField} pricingGroup
@property {SearchLongField} primaryCategory
@property {SearchDoubleField} purchaseOrderAmount
@property {SearchDoubleField} purchaseOrderQuantity
@property {SearchDoubleField} purchaseOrderQuantityDiff
@property {SearchMultiSelectField} purchaseUnit
@property {SearchDoubleField} quantityAvailable
@property {SearchDoubleField} quantityBackOrdered
@property {SearchDoubleField} quantityCommitted
@property {SearchDoubleField} quantityOnHand
@property {SearchDoubleField} quantityOnOrder
@property {SearchMultiSelectField} quantityPricingSchedule
@property {SearchDoubleField} receiptAmount
@property {SearchDoubleField} receiptQuantity
@property {SearchDoubleField} receiptQuantityDiff
@property {SearchLongField} reorderMultiple
@property {SearchDoubleField} reorderPoint
@property {SearchLongField} rescheduleInDays
@property {SearchLongField} rescheduleOutDays
@property {SearchDoubleField} reservePrice
@property {SearchMultiSelectField} revRecSchedule
@property {SearchBooleanField} roundUpAsComponent
@property {SearchDoubleField} safetyStockLevel
@property {SearchLongField} safetyStockLevelDays
@property {SearchStringField} salesDescription
@property {SearchMultiSelectField} saleUnit
@property {SearchBooleanField} sameAsPrimaryBookAmortization
@property {SearchBooleanField} sameAsPrimaryBookRevRec
@property {SearchEnumMultiSelectField} scheduleBCode
@property {SearchStringField} scheduleBNumber
@property {SearchStringField} scheduleBQuantity
@property {SearchStringField} searchKeywords
@property {SearchBooleanField} seasonalDemand
@property {SearchBooleanField} sellOnEBay
@property {SearchStringField} serialNumber
@property {SearchMultiSelectField} serialNumberLocation
@property {SearchBooleanField} shipIndividually
@property {SearchMultiSelectField} shipPackage
@property {SearchEnumMultiSelectField} shippingCarrier
@property {SearchDoubleField} shippingRate
@property {SearchStringField} shoppingDotComCategory
@property {SearchBooleanField} shoppingProductFeed
@property {SearchLongField} shopzillaCategoryId
@property {SearchBooleanField} shopzillaProductFeed
@property {SearchEnumMultiSelectField} sitemapPriority
@property {SearchMultiSelectField} softDescriptor
@property {SearchDoubleField} startingPrice
@property {SearchStringField} stockDescription
@property {SearchMultiSelectField} stockUnit
@property {SearchStringField} storeDescription
@property {SearchMultiSelectField} subsidiary
@property {SearchEnumMultiSelectField} subType
@property {SearchEnumMultiSelectField} supplyLotSizingMethod
@property {SearchEnumMultiSelectField} supplyReplenishmentMethod
@property {SearchLongField} supplyTimeFence
@property {SearchEnumMultiSelectField} supplyType
@property {SearchMultiSelectField} taxCode
@property {SearchMultiSelectField} taxSchedule
@property {SearchStringField} thumbnailUrl
@property {SearchDoubleField} totalValue
@property {SearchBooleanField} trackLandedCost
@property {SearchDoubleField} transferPrice
@property {SearchEnumMultiSelectField} type
@property {SearchMultiSelectField} unitsType
@property {SearchStringField} upcCode
@property {SearchStringField} urlComponent
@property {SearchBooleanField} useBins
@property {SearchBooleanField} useComponentYield
@property {SearchBooleanField} useMarginalRates
@property {SearchMultiSelectField} vendor
@property {SearchStringField} vendorCode
@property {SearchDoubleField} vendorCost
@property {SearchDoubleField} vendorCostEntered
@property {SearchStringField} vendorName
@property {SearchMultiSelectField} vendorPriceCurrency
@property {SearchEnumMultiSelectField} vsoeDeferral
@property {SearchBooleanField} vsoeDelivered
@property {SearchEnumMultiSelectField} vsoePermitDiscount
@property {SearchDoubleField} vsoePrice
@property {SearchMultiSelectField} webSite
@property {SearchDoubleField} weight
@property {SearchBooleanField} yahooProductFeed
@property {SearchCustomFieldList} customFieldList
*/
/*
@class ItemSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} accountingBook
@property {SearchColumnSelectField[]} accountingBookAmortization
@property {SearchColumnSelectField[]} accountingBookRevRecSchedule
@property {SearchColumnSelectField[]} allowedShippingMethod
@property {SearchColumnStringField[]} alternateDemandSourceItem
@property {SearchColumnSelectField[]} assetAccount
@property {SearchColumnDoubleField[]} atpLeadTime
@property {SearchColumnEnumSelectField[]} atpMethod
@property {SearchColumnBooleanField[]} autoLeadTime
@property {SearchColumnBooleanField[]} autoPreferredStockLevel
@property {SearchColumnBooleanField[]} autoReorderPoint
@property {SearchColumnBooleanField[]} availableToPartners
@property {SearchColumnDoubleField[]} averageCost
@property {SearchColumnLongField[]} backwardConsumptionDays
@property {SearchColumnDoubleField[]} basePrice
@property {SearchColumnSelectField[]} billExchRateVarianceAcct
@property {SearchColumnSelectField[]} billPriceVarianceAcct
@property {SearchColumnSelectField[]} billQtyVarianceAcct
@property {SearchColumnStringField[]} binNumber
@property {SearchColumnDoubleField[]} binOnHandAvail
@property {SearchColumnDoubleField[]} binOnHandCount
@property {SearchColumnDoubleField[]} bomQuantity
@property {SearchColumnBooleanField[]} buildEntireAssembly
@property {SearchColumnDoubleField[]} buildTime
@property {SearchColumnDoubleField[]} buyItNowPrice
@property {SearchColumnStringField[]} category
@property {SearchColumnStringField[]} categoryPreferred
@property {SearchColumnSelectField[]} class
@property {SearchColumnDoubleField[]} componentYield
@property {SearchColumnBooleanField[]} copyDescription
@property {SearchColumnSelectField[]} correlatedItem
@property {SearchColumnDoubleField[]} correlatedItemCorrelation
@property {SearchColumnLongField[]} correlatedItemCount
@property {SearchColumnDoubleField[]} correlatedItemLift
@property {SearchColumnDoubleField[]} correlatedItemPurchaseRate
@property {SearchColumnDoubleField[]} cost
@property {SearchColumnEnumSelectField[]} costAccountingStatus
@property {SearchColumnStringField[]} costCategory
@property {SearchColumnDoubleField[]} costEstimate
@property {SearchColumnEnumSelectField[]} costEstimateType
@property {SearchColumnEnumSelectField[]} costingMethod
@property {SearchColumnEnumSelectField[]} countryOfManufacture
@property {SearchColumnDateField[]} created
@property {SearchColumnBooleanField[]} createJob
@property {SearchColumnSelectField[]} custReturnVarianceAccount
@property {SearchColumnDateField[]} dateViewed
@property {SearchColumnStringField[]} daysBeforeExpiration
@property {SearchColumnDoubleField[]} defaultReturnCost
@property {SearchColumnStringField[]} defaultShippingMethod
@property {SearchColumnSelectField[]} deferredExpenseAccount
@property {SearchColumnSelectField[]} deferredRevenueAccount
@property {SearchColumnBooleanField[]} deferRevRec
@property {SearchColumnDoubleField[]} demandModifier
@property {SearchColumnEnumSelectField[]} demandSource
@property {SearchColumnLongField[]} demandTimeFence
@property {SearchColumnSelectField[]} department
@property {SearchColumnSelectField[]} departmentnohierarchy
@property {SearchColumnBooleanField[]} displayIneBayStore
@property {SearchColumnStringField[]} displayName
@property {SearchColumnSelectField[]} distributionCategory
@property {SearchColumnSelectField[]} distributionNetwork
@property {SearchColumnBooleanField[]} dontShowPrice
@property {SearchColumnStringField[]} eBayItemDescription
@property {SearchColumnStringField[]} eBayItemSubtitle
@property {SearchColumnStringField[]} eBayItemTitle
@property {SearchColumnEnumSelectField[]} ebayRelistingOption
@property {SearchColumnEnumSelectField[]} effectiveBomControl
@property {SearchColumnDateField[]} effectiveDate
@property {SearchColumnSelectField[]} effectiveRevision
@property {SearchColumnBooleanField[]} endAuctionsWhenOutOfStock
@property {SearchColumnBooleanField[]} excludeFromSitemap
@property {SearchColumnSelectField[]} expenseAccount
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnStringField[]} featuredDescription
@property {SearchColumnStringField[]} feedDescription
@property {SearchColumnStringField[]} feedName
@property {SearchColumnDoubleField[]} fixedLotSize
@property {SearchColumnLongField[]} forwardConsumptionDays
@property {SearchColumnEnumSelectField[]} fraudRisk
@property {SearchColumnBooleanField[]} froogleProductFeed
@property {SearchColumnDoubleField[]} fxCost
@property {SearchColumnSelectField[]} gainLossAccount
@property {SearchColumnBooleanField[]} generateAccruals
@property {SearchColumnStringField[]} giftCertAuthCode
@property {SearchColumnStringField[]} giftCertEmail
@property {SearchColumnStringField[]} giftCertExpirationDate
@property {SearchColumnStringField[]} giftCertFrom
@property {SearchColumnStringField[]} giftCertMessage
@property {SearchColumnStringField[]} giftCertOriginalAmount
@property {SearchColumnStringField[]} giftCertRecipient
@property {SearchColumnLongField[]} hits
@property {SearchColumnStringField[]} imageUrl
@property {SearchColumnSelectField[]} incomeAccount
@property {SearchColumnSelectField[]} intercoExpenseAccount
@property {SearchColumnSelectField[]} intercoIncomeAccount
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnSelectField[]} inventoryLocation
@property {SearchColumnEnumSelectField[]} invtClassification
@property {SearchColumnLongField[]} invtCountInterval
@property {SearchColumnBooleanField[]} isAvailable
@property {SearchColumnBooleanField[]} isDropShipItem
@property {SearchColumnBooleanField[]} isFulfillable
@property {SearchColumnBooleanField[]} isGcoCompliant
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnBooleanField[]} isLotItem
@property {SearchColumnBooleanField[]} isOnline
@property {SearchColumnBooleanField[]} isSerialItem
@property {SearchColumnBooleanField[]} isSpecialOrderItem
@property {SearchColumnBooleanField[]} isSpecialWorkOrderItem
@property {SearchColumnSelectField[]} issueProduct
@property {SearchColumnBooleanField[]} isTaxable
@property {SearchColumnBooleanField[]} isVsoeBundle
@property {SearchColumnBooleanField[]} isWip
@property {SearchColumnStringField[]} itemId
@property {SearchColumnStringField[]} itemUrl
@property {SearchColumnDateField[]} lastInvtCountDate
@property {SearchColumnDoubleField[]} lastPurchasePrice
@property {SearchColumnDateField[]} lastQuantityAvailableChange
@property {SearchColumnLongField[]} leadTime
@property {SearchColumnSelectField[]} liabilityAccount
@property {SearchColumnEnumSelectField[]} listingDuration
@property {SearchColumnSelectField[]} location
@property {SearchColumnDoubleField[]} locationAtpLeadTime
@property {SearchColumnDoubleField[]} locationAverageCost
@property {SearchColumnStringField[]} locationBinQuantityAvailable
@property {SearchColumnDoubleField[]} locationBuildTime
@property {SearchColumnDoubleField[]} locationCost
@property {SearchColumnEnumSelectField[]} locationCostAccountingStatus
@property {SearchColumnDoubleField[]} locationDefaultReturnCost
@property {SearchColumnEnumSelectField[]} locationDemandSource
@property {SearchColumnLongField[]} locationDemandTimeFence
@property {SearchColumnDoubleField[]} locationFixedLotSize
@property {SearchColumnStringField[]} locationInventoryCostTemplate
@property {SearchColumnEnumSelectField[]} locationInvtClassification
@property {SearchColumnLongField[]} locationInvtCountInterval
@property {SearchColumnDateField[]} locationLastInvtCountDate
@property {SearchColumnLongField[]} locationLeadTime
@property {SearchColumnDateField[]} locationNextInvtCountDate
@property {SearchColumnLongField[]} locationPeriodicLotSizeDays
@property {SearchColumnEnumSelectField[]} locationPeriodicLotSizeType
@property {SearchColumnDoubleField[]} locationPreferredStockLevel
@property {SearchColumnDoubleField[]} locationQuantityAvailable
@property {SearchColumnDoubleField[]} locationQuantityBackOrdered
@property {SearchColumnDoubleField[]} locationQuantityCommitted
@property {SearchColumnDoubleField[]} locationQuantityInTransit
@property {SearchColumnDoubleField[]} locationQuantityOnHand
@property {SearchColumnDoubleField[]} locationQuantityOnOrder
@property {SearchColumnDoubleField[]} locationReOrderPoint
@property {SearchColumnLongField[]} locationRescheduleInDays
@property {SearchColumnLongField[]} locationRescheduleOutDays
@property {SearchColumnDoubleField[]} locationSafetyStockLevel
@property {SearchColumnEnumSelectField[]} locationSupplyLotSizingMethod
@property {SearchColumnLongField[]} locationSupplyTimeFence
@property {SearchColumnEnumSelectField[]} locationSupplyType
@property {SearchColumnDoubleField[]} locationTotalValue
@property {SearchColumnLongField[]} locBackwardConsumptionDays
@property {SearchColumnLongField[]} locForwardConsumptionDays
@property {SearchColumnStringField[]} manufacturer
@property {SearchColumnStringField[]} manufacturerAddr1
@property {SearchColumnStringField[]} manufacturerCity
@property {SearchColumnStringField[]} manufacturerState
@property {SearchColumnStringField[]} manufacturerTariff
@property {SearchColumnStringField[]} manufacturerTaxId
@property {SearchColumnStringField[]} manufacturerZip
@property {SearchColumnBooleanField[]} manufacturingChargeItem
@property {SearchColumnBooleanField[]} matchBillToReceipt
@property {SearchColumnSelectField[]} memberItem
@property {SearchColumnDoubleField[]} memberQuantity
@property {SearchColumnStringField[]} metaTagHtml
@property {SearchColumnStringField[]} minimumQuantity
@property {SearchColumnDateField[]} modified
@property {SearchColumnBooleanField[]} mossApplies
@property {SearchColumnStringField[]} mpn
@property {SearchColumnBooleanField[]} multManufactureAddr
@property {SearchColumnStringField[]} nextagCategory
@property {SearchColumnBooleanField[]} nextagProductFeed
@property {SearchColumnDateField[]} nextInvtCountDate
@property {SearchColumnStringField[]} noPriceMessage
@property {SearchColumnLongField[]} numActiveListings
@property {SearchColumnStringField[]} numberAllowedDownloads
@property {SearchColumnLongField[]} numCurrentlyListed
@property {SearchColumnDateField[]} obsoleteDate
@property {SearchColumnSelectField[]} obsoleteRevision
@property {SearchColumnBooleanField[]} offerSupport
@property {SearchColumnDoubleField[]} onlineCustomerPrice
@property {SearchColumnDoubleField[]} onlinePrice
@property {SearchColumnBooleanField[]} onSpecial
@property {SearchColumnDoubleField[]} otherPrices
@property {SearchColumnSelectField[]} otherVendor
@property {SearchColumnStringField[]} outOfStockBehavior
@property {SearchColumnStringField[]} outOfStockMessage
@property {SearchColumnEnumSelectField[]} overallQuantityPricingType
@property {SearchColumnEnumSelectField[]} overheadType
@property {SearchColumnStringField[]} pageTitle
@property {SearchColumnSelectField[]} parent
@property {SearchColumnLongField[]} periodicLotSizeDays
@property {SearchColumnEnumSelectField[]} periodicLotSizeType
@property {SearchColumnStringField[]} preferenceCriterion
@property {SearchColumnBooleanField[]} preferredBin
@property {SearchColumnSelectField[]} preferredLocation
@property {SearchColumnDoubleField[]} preferredStockLevel
@property {SearchColumnLongField[]} preferredStockLevelDays
@property {SearchColumnBooleanField[]} pricesIncludeTax
@property {SearchColumnSelectField[]} pricingGroup
@property {SearchColumnStringField[]} primaryCategory
@property {SearchColumnSelectField[]} prodPriceVarianceAcct
@property {SearchColumnSelectField[]} prodQtyVarianceAcct
@property {SearchColumnStringField[]} purchaseDescription
@property {SearchColumnDoubleField[]} purchaseOrderAmount
@property {SearchColumnDoubleField[]} purchaseOrderQuantity
@property {SearchColumnDoubleField[]} purchaseOrderQuantityDiff
@property {SearchColumnSelectField[]} purchasePriceVarianceAcct
@property {SearchColumnSelectField[]} purchaseUnit
@property {SearchColumnDoubleField[]} quantityAvailable
@property {SearchColumnDoubleField[]} quantityBackOrdered
@property {SearchColumnDoubleField[]} quantityCommitted
@property {SearchColumnDoubleField[]} quantityOnHand
@property {SearchColumnDoubleField[]} quantityOnOrder
@property {SearchColumnSelectField[]} quantityPricingSchedule
@property {SearchColumnDoubleField[]} receiptAmount
@property {SearchColumnDoubleField[]} receiptQuantity
@property {SearchColumnDoubleField[]} receiptQuantityDiff
@property {SearchColumnLongField[]} reorderMultiple
@property {SearchColumnDoubleField[]} reOrderPoint
@property {SearchColumnLongField[]} rescheduleInDays
@property {SearchColumnLongField[]} rescheduleOutDays
@property {SearchColumnDoubleField[]} reservePrice
@property {SearchColumnSelectField[]} revRecSchedule
@property {SearchColumnBooleanField[]} roundUpAsComponent
@property {SearchColumnDoubleField[]} safetyStockLevel
@property {SearchColumnLongField[]} safetyStockLevelDays
@property {SearchColumnStringField[]} salesDescription
@property {SearchColumnSelectField[]} salesTaxCode
@property {SearchColumnSelectField[]} saleUnit
@property {SearchColumnBooleanField[]} sameAsPrimaryBookAmortization
@property {SearchColumnBooleanField[]} sameAsPrimaryBookRevRec
@property {SearchColumnEnumSelectField[]} scheduleBCode
@property {SearchColumnStringField[]} scheduleBNumber
@property {SearchColumnStringField[]} scheduleBQuantity
@property {SearchColumnSelectField[]} scrapAcct
@property {SearchColumnStringField[]} searchKeywords
@property {SearchColumnBooleanField[]} seasonalDemand
@property {SearchColumnBooleanField[]} sellOnEBay
@property {SearchColumnStringField[]} serialNumber
@property {SearchColumnStringField[]} serialNumberLocation
@property {SearchColumnBooleanField[]} shipIndividually
@property {SearchColumnSelectField[]} shipPackage
@property {SearchColumnEnumSelectField[]} shippingCarrier
@property {SearchColumnDoubleField[]} shippingRate
@property {SearchColumnStringField[]} shoppingDotComCategory
@property {SearchColumnBooleanField[]} shoppingProductFeed
@property {SearchColumnLongField[]} shopzillaCategoryId
@property {SearchColumnBooleanField[]} shopzillaProductFeed
@property {SearchColumnEnumSelectField[]} sitemapPriority
@property {SearchColumnSelectField[]} softDescriptor
@property {SearchColumnDoubleField[]} startingPrice
@property {SearchColumnStringField[]} stockDescription
@property {SearchColumnSelectField[]} stockUnit
@property {SearchColumnStringField[]} storeDescription
@property {SearchColumnStringField[]} storeDetailedDescription
@property {SearchColumnSelectField[]} storeDisplayImage
@property {SearchColumnStringField[]} storeDisplayName
@property {SearchColumnSelectField[]} storeDisplayThumbnail
@property {SearchColumnSelectField[]} subsidiary
@property {SearchColumnEnumSelectField[]} subType
@property {SearchColumnEnumSelectField[]} supplyLotSizingMethod
@property {SearchColumnEnumSelectField[]} supplyReplenishmentMethod
@property {SearchColumnLongField[]} supplyTimeFence
@property {SearchColumnEnumSelectField[]} supplyType
@property {SearchColumnSelectField[]} taxSchedule
@property {SearchColumnStringField[]} thumbNailUrl
@property {SearchColumnDoubleField[]} totalValue
@property {SearchColumnBooleanField[]} trackLandedCost
@property {SearchColumnDoubleField[]} transferPrice
@property {SearchColumnEnumSelectField[]} type
@property {SearchColumnSelectField[]} unbuildVarianceAccount
@property {SearchColumnSelectField[]} unitsType
@property {SearchColumnStringField[]} upcCode
@property {SearchColumnStringField[]} urlComponent
@property {SearchColumnBooleanField[]} useBins
@property {SearchColumnBooleanField[]} useComponentYield
@property {SearchColumnBooleanField[]} useMarginalRates
@property {SearchColumnSelectField[]} vendor
@property {SearchColumnStringField[]} vendorCode
@property {SearchColumnDoubleField[]} vendorCost
@property {SearchColumnDoubleField[]} vendorCostEntered
@property {SearchColumnStringField[]} vendorName
@property {SearchColumnStringField[]} vendorPriceCurrency
@property {SearchColumnSelectField[]} vendorSchedule
@property {SearchColumnSelectField[]} vendReturnVarianceAccount
@property {SearchColumnEnumSelectField[]} vsoeDeferral
@property {SearchColumnBooleanField[]} vsoeDelivered
@property {SearchColumnEnumSelectField[]} vsoePermitDiscount
@property {SearchColumnDoubleField[]} vsoePrice
@property {SearchColumnSelectField[]} webSite
@property {SearchColumnDoubleField[]} weight
@property {SearchColumnEnumSelectField[]} weightUnit
@property {SearchColumnSelectField[]} wipAcct
@property {SearchColumnSelectField[]} wipVarianceAcct
@property {SearchColumnBooleanField[]} yahooProductFeed
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class PartnerSearchBasic @extends SearchRecordBasic
@property {SearchStringField} address
@property {SearchStringField} addressee
@property {SearchStringField} addressLabel
@property {SearchStringField} addressPhone
@property {SearchBooleanField} assignTasks
@property {SearchStringField} attention
@property {SearchStringField} billAddress
@property {SearchMultiSelectField} category
@property {SearchStringField} city
@property {SearchMultiSelectField} class
@property {SearchStringField} comments
@property {SearchMultiSelectField} commissionPlan
@property {SearchEnumMultiSelectField} country
@property {SearchStringField} county
@property {SearchDateField} dateCreated
@property {SearchMultiSelectField} department
@property {SearchBooleanField} eligibleForCommission
@property {SearchStringField} email
@property {SearchEnumMultiSelectField} emailPreference
@property {SearchStringField} entityId
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchStringField} fax
@property {SearchStringField} firstName
@property {SearchBooleanField} giveAccess
@property {SearchEnumMultiSelectField} globalSubscriptionStatus
@property {SearchMultiSelectField} group
@property {SearchBooleanField} hasDuplicates
@property {SearchStringField} image
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isDefaultBilling
@property {SearchBooleanField} isDefaultShipping
@property {SearchBooleanField} isInactive
@property {SearchBooleanField} isPerson
@property {SearchEnumMultiSelectField} language
@property {SearchDateField} lastModifiedDate
@property {SearchStringField} lastName
@property {SearchEnumMultiSelectField} level
@property {SearchMultiSelectField} location
@property {SearchStringField} middleName
@property {SearchEnumMultiSelectField} otherRelationships
@property {SearchMultiSelectField} parent
@property {SearchStringField} partnerCode
@property {SearchEnumMultiSelectField} permission
@property {SearchStringField} phone
@property {SearchStringField} phoneticName
@property {SearchMultiSelectField} promoCode
@property {SearchStringField} salutation
@property {SearchStringField} shipAddress
@property {SearchStringField} state
@property {SearchMultiSelectField} subsidiary
@property {SearchStringField} title
@property {SearchStringField} URL
@property {SearchStringField} zipCode
@property {SearchCustomFieldList} customFieldList
*/
/*
@class PartnerSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} address
@property {SearchColumnStringField[]} address1
@property {SearchColumnStringField[]} address2
@property {SearchColumnStringField[]} address3
@property {SearchColumnStringField[]} addressee
@property {SearchColumnStringField[]} addressInternalId
@property {SearchColumnStringField[]} addressLabel
@property {SearchColumnStringField[]} addressPhone
@property {SearchColumnStringField[]} altEmail
@property {SearchColumnStringField[]} altName
@property {SearchColumnStringField[]} altPhone
@property {SearchColumnBooleanField[]} assignTasks
@property {SearchColumnStringField[]} attention
@property {SearchColumnStringField[]} billAddress
@property {SearchColumnStringField[]} billAddress1
@property {SearchColumnStringField[]} billAddress2
@property {SearchColumnStringField[]} billAddress3
@property {SearchColumnStringField[]} billAddressee
@property {SearchColumnStringField[]} billAttention
@property {SearchColumnStringField[]} billCity
@property {SearchColumnEnumSelectField[]} billCountry
@property {SearchColumnStringField[]} billCountryCode
@property {SearchColumnStringField[]} billPhone
@property {SearchColumnStringField[]} billState
@property {SearchColumnStringField[]} billZipCode
@property {SearchColumnStringField[]} category
@property {SearchColumnStringField[]} city
@property {SearchColumnSelectField[]} class
@property {SearchColumnStringField[]} comments
@property {SearchColumnStringField[]} companyName
@property {SearchColumnEnumSelectField[]} country
@property {SearchColumnStringField[]} countryCode
@property {SearchColumnDateField[]} dateCreated
@property {SearchColumnSelectField[]} department
@property {SearchColumnBooleanField[]} eligibleForCommission
@property {SearchColumnStringField[]} email
@property {SearchColumnEnumSelectField[]} emailPreference
@property {SearchColumnStringField[]} entityId
@property {SearchColumnLongField[]} entityNumber
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnStringField[]} fax
@property {SearchColumnStringField[]} firstName
@property {SearchColumnBooleanField[]} giveAccess
@property {SearchColumnEnumSelectField[]} globalSubscriptionStatus
@property {SearchColumnBooleanField[]} hasDuplicates
@property {SearchColumnStringField[]} homePhone
@property {SearchColumnSelectField[]} image
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isDefaultBilling
@property {SearchColumnBooleanField[]} isDefaultShipping
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnBooleanField[]} isPerson
@property {SearchColumnEnumSelectField[]} language
@property {SearchColumnDateField[]} lastModifiedDate
@property {SearchColumnStringField[]} lastName
@property {SearchColumnEnumSelectField[]} level
@property {SearchColumnSelectField[]} location
@property {SearchColumnStringField[]} middleName
@property {SearchColumnStringField[]} mobilePhone
@property {SearchColumnSelectField[]} parent
@property {SearchColumnStringField[]} partnerCode
@property {SearchColumnEnumSelectField[]} permission
@property {SearchColumnStringField[]} phone
@property {SearchColumnStringField[]} phoneticName
@property {SearchColumnStringField[]} promoCode
@property {SearchColumnStringField[]} salutation
@property {SearchColumnStringField[]} shipAddress
@property {SearchColumnStringField[]} shipAddress1
@property {SearchColumnStringField[]} shipAddress2
@property {SearchColumnStringField[]} shipAddress3
@property {SearchColumnStringField[]} shipAddressee
@property {SearchColumnStringField[]} shipAttention
@property {SearchColumnStringField[]} shipCity
@property {SearchColumnEnumSelectField[]} shipCountry
@property {SearchColumnStringField[]} shipCountryCode
@property {SearchColumnStringField[]} shipPhone
@property {SearchColumnStringField[]} shipState
@property {SearchColumnStringField[]} shipZip
@property {SearchColumnStringField[]} state
@property {SearchColumnSelectField[]} subscription
@property {SearchColumnDateField[]} subscriptionDate
@property {SearchColumnBooleanField[]} subscriptionStatus
@property {SearchColumnSelectField[]} subsidiary
@property {SearchColumnStringField[]} title
@property {SearchColumnStringField[]} url
@property {SearchColumnStringField[]} zipCode
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class VendorSearchBasic @extends SearchRecordBasic
@property {SearchStringField} accountNumber
@property {SearchStringField} address
@property {SearchStringField} addressee
@property {SearchStringField} addressLabel
@property {SearchStringField} addressPhone
@property {SearchStringField} attention
@property {SearchDoubleField} balance
@property {SearchStringField} billAddress
@property {SearchMultiSelectField} category
@property {SearchStringField} city
@property {SearchStringField} comments
@property {SearchStringField} contact
@property {SearchEnumMultiSelectField} country
@property {SearchStringField} county
@property {SearchDoubleField} creditLimit
@property {SearchMultiSelectField} currency
@property {SearchDoubleField} currentExchangeRate
@property {SearchDateField} dateCreated
@property {SearchBooleanField} eligibleForCommission
@property {SearchStringField} email
@property {SearchEnumMultiSelectField} emailPreference
@property {SearchBooleanField} emailTransactions
@property {SearchStringField} entityId
@property {SearchMultiSelectField} expenseAccount
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchStringField} fax
@property {SearchBooleanField} faxTransactions
@property {SearchStringField} firstName
@property {SearchDoubleField} fxBalance
@property {SearchDoubleField} fxUnbilledOrders
@property {SearchBooleanField} giveAccess
@property {SearchEnumMultiSelectField} globalSubscriptionStatus
@property {SearchMultiSelectField} group
@property {SearchBooleanField} hasDuplicates
@property {SearchStringField} image
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} is1099Eligible
@property {SearchBooleanField} isDefaultBilling
@property {SearchBooleanField} isDefaultShipping
@property {SearchBooleanField} isInactive
@property {SearchBooleanField} isJobResourceVend
@property {SearchBooleanField} isPerson
@property {SearchDoubleField} laborCost
@property {SearchEnumMultiSelectField} language
@property {SearchDateField} lastModifiedDate
@property {SearchStringField} lastName
@property {SearchEnumMultiSelectField} level
@property {SearchStringField} middleName
@property {SearchEnumMultiSelectField} otherRelationships
@property {SearchMultiSelectField} payablesAccount
@property {SearchStringField} pec
@property {SearchEnumMultiSelectField} permission
@property {SearchStringField} phone
@property {SearchStringField} phoneticName
@property {SearchBooleanField} printTransactions
@property {SearchDoubleField} purchaseOrderAmount
@property {SearchDoubleField} purchaseOrderQuantity
@property {SearchDoubleField} purchaseOrderQuantityDiff
@property {SearchDoubleField} receiptAmount
@property {SearchDoubleField} receiptQuantity
@property {SearchDoubleField} receiptQuantityDiff
@property {SearchStringField} salutation
@property {SearchStringField} shipAddress
@property {SearchStringField} state
@property {SearchMultiSelectField} subsidiary
@property {SearchStringField} taxIdNum
@property {SearchStringField} title
@property {SearchDoubleField} unbilledOrders
@property {SearchStringField} url
@property {SearchStringField} vatRegNumber
@property {SearchMultiSelectField} workCalendar
@property {SearchStringField} zipCode
@property {SearchCustomFieldList} customFieldList
*/
/*
@class VendorSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} accountNumber
@property {SearchColumnStringField[]} address
@property {SearchColumnStringField[]} address1
@property {SearchColumnStringField[]} address2
@property {SearchColumnStringField[]} address3
@property {SearchColumnStringField[]} addressee
@property {SearchColumnStringField[]} addressInternalId
@property {SearchColumnStringField[]} addressLabel
@property {SearchColumnStringField[]} addressPhone
@property {SearchColumnStringField[]} altContact
@property {SearchColumnStringField[]} altEmail
@property {SearchColumnStringField[]} altName
@property {SearchColumnStringField[]} altPhone
@property {SearchColumnStringField[]} attention
@property {SearchColumnDoubleField[]} balance
@property {SearchColumnStringField[]} billAddress
@property {SearchColumnStringField[]} billAddress1
@property {SearchColumnStringField[]} billAddress2
@property {SearchColumnStringField[]} billAddress3
@property {SearchColumnStringField[]} billAddressee
@property {SearchColumnStringField[]} billAttention
@property {SearchColumnStringField[]} billCity
@property {SearchColumnEnumSelectField[]} billCountry
@property {SearchColumnStringField[]} billCountryCode
@property {SearchColumnStringField[]} billPhone
@property {SearchColumnStringField[]} billState
@property {SearchColumnStringField[]} billZipCode
@property {SearchColumnSelectField[]} category
@property {SearchColumnStringField[]} city
@property {SearchColumnStringField[]} comments
@property {SearchColumnStringField[]} companyName
@property {SearchColumnStringField[]} contact
@property {SearchColumnEnumSelectField[]} country
@property {SearchColumnStringField[]} countryCode
@property {SearchColumnDoubleField[]} creditLimit
@property {SearchColumnSelectField[]} currency
@property {SearchColumnDoubleField[]} currentExchangeRate
@property {SearchColumnDateField[]} dateCreated
@property {SearchColumnBooleanField[]} eligibleForCommission
@property {SearchColumnStringField[]} email
@property {SearchColumnEnumSelectField[]} emailPreference
@property {SearchColumnBooleanField[]} emailTransactions
@property {SearchColumnStringField[]} entityId
@property {SearchColumnLongField[]} entityNumber
@property {SearchColumnSelectField[]} expenseAccount
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnStringField[]} fax
@property {SearchColumnBooleanField[]} faxTransactions
@property {SearchColumnStringField[]} firstName
@property {SearchColumnDoubleField[]} fxBalance
@property {SearchColumnDoubleField[]} fxUnbilledOrders
@property {SearchColumnBooleanField[]} giveAccess
@property {SearchColumnEnumSelectField[]} globalSubscriptionStatus
@property {SearchColumnBooleanField[]} hasDuplicates
@property {SearchColumnStringField[]} homePhone
@property {SearchColumnSelectField[]} image
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} is1099Eligible
@property {SearchColumnBooleanField[]} isDefaultBilling
@property {SearchColumnBooleanField[]} isDefaultShipping
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnBooleanField[]} isJobResourceVend
@property {SearchColumnBooleanField[]} isPerson
@property {SearchColumnDoubleField[]} laborCost
@property {SearchColumnEnumSelectField[]} language
@property {SearchColumnDateField[]} lastModifiedDate
@property {SearchColumnStringField[]} lastName
@property {SearchColumnEnumSelectField[]} level
@property {SearchColumnStringField[]} middleName
@property {SearchColumnStringField[]} mobilePhone
@property {SearchColumnSelectField[]} payablesAccount
@property {SearchColumnStringField[]} pec
@property {SearchColumnEnumSelectField[]} permission
@property {SearchColumnStringField[]} phone
@property {SearchColumnStringField[]} phoneticName
@property {SearchColumnStringField[]} printOnCheckAs
@property {SearchColumnBooleanField[]} printTransactions
@property {SearchColumnDoubleField[]} purchaseOrderAmount
@property {SearchColumnDoubleField[]} purchaseOrderQuantity
@property {SearchColumnDoubleField[]} purchaseOrderQuantityDiff
@property {SearchColumnDoubleField[]} receiptAmount
@property {SearchColumnDoubleField[]} receiptQuantity
@property {SearchColumnDoubleField[]} receiptQuantityDiff
@property {SearchColumnStringField[]} salutation
@property {SearchColumnStringField[]} shipAddress
@property {SearchColumnStringField[]} shipAddress1
@property {SearchColumnStringField[]} shipAddress2
@property {SearchColumnStringField[]} shipAddress3
@property {SearchColumnStringField[]} shipAddressee
@property {SearchColumnStringField[]} shipAttention
@property {SearchColumnStringField[]} shipCity
@property {SearchColumnEnumSelectField[]} shipCountry
@property {SearchColumnStringField[]} shipCountryCode
@property {SearchColumnStringField[]} shipPhone
@property {SearchColumnStringField[]} shipState
@property {SearchColumnStringField[]} shipZip
@property {SearchColumnStringField[]} state
@property {SearchColumnSelectField[]} subscription
@property {SearchColumnDateField[]} subscriptionDate
@property {SearchColumnBooleanField[]} subscriptionStatus
@property {SearchColumnSelectField[]} subsidiary
@property {SearchColumnStringField[]} taxIdNum
@property {SearchColumnSelectField[]} terms
@property {SearchColumnStringField[]} title
@property {SearchColumnDoubleField[]} unbilledOrders
@property {SearchColumnStringField[]} url
@property {SearchColumnStringField[]} vatRegNumber
@property {SearchColumnSelectField[]} workCalendar
@property {SearchColumnStringField[]} zipCode
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class SiteCategorySearchBasic @extends SearchRecordBasic
@property {SearchDateField} dateViewed
@property {SearchStringField} description
@property {SearchBooleanField} excludeFromSitemap
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchMultiSelectField} name
@property {SearchEnumMultiSelectField} sitemapPriority
*/
/*
@class SiteCategorySearchRowBasic @extends SearchRowBasic
@property {SearchColumnDateField[]} dateViewed
@property {SearchColumnStringField[]} description
@property {SearchColumnBooleanField[]} excludeFromSitemap
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnStringField[]} fullName
@property {SearchColumnBooleanField[]} hidden
@property {SearchColumnLongField[]} hits
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnStringField[]} longDescription
@property {SearchColumnStringField[]} name
@property {SearchColumnStringField[]} pageTitle
@property {SearchColumnEnumSelectField[]} sitemapPriority
@property {SearchColumnStringField[]} urlComponent
*/
/*
@class TimeBillSearchBasic @extends SearchRecordBasic
@property {SearchBooleanField} approved
@property {SearchBooleanField} billable
@property {SearchMultiSelectField} class
@property {SearchMultiSelectField} customer
@property {SearchDateField} date
@property {SearchDateField} dateCreated
@property {SearchMultiSelectField} department
@property {SearchDoubleField} duration
@property {SearchMultiSelectField} employee
@property {SearchBooleanField} exempt
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchMultiSelectField} item
@property {SearchDateField} lastModified
@property {SearchMultiSelectField} location
@property {SearchStringField} memo
@property {SearchBooleanField} paidByPayroll
@property {SearchBooleanField} paidExternally
@property {SearchMultiSelectField} payItem
@property {SearchBooleanField} productive
@property {SearchBooleanField} status
@property {SearchMultiSelectField} subsidiary
@property {SearchMultiSelectField} temporaryLocalJurisdiction
@property {SearchMultiSelectField} temporaryStateJurisdiction
@property {SearchEnumMultiSelectField} type
@property {SearchBooleanField} utilized
@property {SearchCustomFieldList} customFieldList
*/
/*
@class TimeBillSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} break
@property {SearchColumnSelectField[]} class
@property {SearchColumnSelectField[]} customer
@property {SearchColumnDateField[]} date
@property {SearchColumnDateField[]} dateCreated
@property {SearchColumnSelectField[]} department
@property {SearchColumnDoubleField[]} durationDecimal
@property {SearchColumnSelectField[]} employee
@property {SearchColumnDateField[]} endTime
@property {SearchColumnStringField[]} externalId
@property {SearchColumnStringField[]} hours
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isBillable
@property {SearchColumnBooleanField[]} isExempt
@property {SearchColumnBooleanField[]} isProductive
@property {SearchColumnBooleanField[]} isUtilized
@property {SearchColumnStringField[]} item
@property {SearchColumnDateField[]} lastModified
@property {SearchColumnSelectField[]} location
@property {SearchColumnStringField[]} memo
@property {SearchColumnBooleanField[]} paidExternally
@property {SearchColumnSelectField[]} payItem
@property {SearchColumnDateField[]} payrollDate
@property {SearchColumnDoubleField[]} rate
@property {SearchColumnDateField[]} startTime
@property {SearchColumnStringField[]} status
@property {SearchColumnStringField[]} subsidiary
@property {SearchColumnBooleanField[]} supervisorApproval
@property {SearchColumnStringField[]} temporaryLocalJurisdiction
@property {SearchColumnStringField[]} temporaryStateJurisdiction
@property {SearchColumnEnumSelectField[]} type
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class SolutionSearchBasic @extends SearchRecordBasic
@property {SearchStringField} abstract
@property {SearchMultiSelectField} assigned
@property {SearchLongField} caseCount
@property {SearchStringField} code
@property {SearchDateField} createdDate
@property {SearchStringField} description
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchStringField} find
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchBooleanField} isOnline
@property {SearchDateField} lastModifiedDate
@property {SearchLongField} number
@property {SearchEnumMultiSelectField} status
@property {SearchStringField} title
@property {SearchMultiSelectField} topic
@property {SearchCustomFieldList} customFieldList
*/
/*
@class SolutionSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} assigned
@property {SearchColumnLongField[]} caseCount
@property {SearchColumnDateField[]} createdDate
@property {SearchColumnStringField[]} description
@property {SearchColumnBooleanField[]} displayOnline
@property {SearchColumnStringField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnDateField[]} lastModifiedDate
@property {SearchColumnStringField[]} message
@property {SearchColumnStringField[]} previewref
@property {SearchColumnStringField[]} solutionCode
@property {SearchColumnEnumSelectField[]} status
@property {SearchColumnStringField[]} title
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class TopicSearchBasic @extends SearchRecordBasic
@property {SearchStringField} description
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchStringField} name
*/
/*
@class TopicSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} description
@property {SearchColumnStringField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnStringField[]} name
*/
/*
@class SubsidiarySearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} accountingBook
@property {SearchMultiSelectField} accountingBookCurrency
@property {SearchStringField} address
@property {SearchStringField} city
@property {SearchEnumMultiSelectField} country
@property {SearchMultiSelectField} currency
@property {SearchStringField} email
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchStringField} fax
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isElimination
@property {SearchBooleanField} isInactive
@property {SearchStringField} legalName
@property {SearchStringField} name
@property {SearchStringField} nameNoHierarchy
@property {SearchStringField} phone
@property {SearchDoubleField} purchaseOrderAmount
@property {SearchDoubleField} purchaseOrderQuantity
@property {SearchDoubleField} purchaseOrderQuantityDiff
@property {SearchDoubleField} receiptAmount
@property {SearchDoubleField} receiptQuantity
@property {SearchDoubleField} receiptQuantityDiff
@property {SearchStringField} state
@property {SearchStringField} taxIdNum
@property {SearchStringField} tranPrefix
@property {SearchStringField} url
@property {SearchStringField} zip
@property {SearchCustomFieldList} customFieldList
*/
/*
@class SubsidiarySearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} accountingBook
@property {SearchColumnSelectField[]} accountingBookCurrency
@property {SearchColumnStringField[]} address1
@property {SearchColumnStringField[]} address2
@property {SearchColumnStringField[]} address3
@property {SearchColumnStringField[]} anonymousCustomerInboundEmail
@property {SearchColumnStringField[]} anonymousCustomerOnlineForms
@property {SearchColumnStringField[]} caseAssignmentTemplate
@property {SearchColumnStringField[]} caseAutomaticClosureTemplate
@property {SearchColumnStringField[]} caseCopyEmployeeTemplate
@property {SearchColumnStringField[]} caseCreationTemplate
@property {SearchColumnStringField[]} caseEscalationTemplate
@property {SearchColumnStringField[]} caseUpdateTemplate
@property {SearchColumnStringField[]} city
@property {SearchColumnStringField[]} companyNameForSupportMessages
@property {SearchColumnEnumSelectField[]} country
@property {SearchColumnSelectField[]} currency
@property {SearchColumnStringField[]} email
@property {SearchColumnStringField[]} employeeCaseUpdateTemplate
@property {SearchColumnStringField[]} externalId
@property {SearchColumnStringField[]} fax
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isElimination
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnStringField[]} legalName
@property {SearchColumnStringField[]} mainSupportEmailAddress
@property {SearchColumnStringField[]} name
@property {SearchColumnStringField[]} nameNoHierarchy
@property {SearchColumnStringField[]} phone
@property {SearchColumnDoubleField[]} purchaseOrderAmount
@property {SearchColumnDoubleField[]} purchaseOrderQuantity
@property {SearchColumnDoubleField[]} purchaseOrderQuantityDiff
@property {SearchColumnDoubleField[]} receiptAmount
@property {SearchColumnDoubleField[]} receiptQuantity
@property {SearchColumnDoubleField[]} receiptQuantityDiff
@property {SearchColumnStringField[]} state
@property {SearchColumnStringField[]} taxIdNum
@property {SearchColumnStringField[]} tranPrefix
@property {SearchColumnStringField[]} url
@property {SearchColumnStringField[]} zip
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class GiftCertificateSearchBasic @extends SearchRecordBasic
@property {SearchDoubleField} amountAvailableBilled
@property {SearchDoubleField} amountRemaining
@property {SearchDateField} createdDate
@property {SearchStringField} email
@property {SearchDateField} expirationDate
@property {SearchStringField} giftCertCode
@property {SearchMultiSelectField} incomeAccount
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isActive
@property {SearchMultiSelectField} item
@property {SearchMultiSelectField} liabilityAccount
@property {SearchStringField} message
@property {SearchStringField} name
@property {SearchDoubleField} originalAmount
@property {SearchDateField} purchaseDate
@property {SearchStringField} sender
@property {SearchCustomFieldList} customFieldList
*/
/*
@class GiftCertificateSearchRowBasic @extends SearchRowBasic
@property {SearchColumnDoubleField[]} amountRemaining
@property {SearchColumnDoubleField[]} amtAvailBilled
@property {SearchColumnDateField[]} createdDate
@property {SearchColumnStringField[]} email
@property {SearchColumnDateField[]} expirationDate
@property {SearchColumnBooleanField[]} gcActive
@property {SearchColumnStringField[]} giftCertCode
@property {SearchColumnStringField[]} incomeAcct
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnSelectField[]} item
@property {SearchColumnStringField[]} liabilityAcct
@property {SearchColumnStringField[]} message
@property {SearchColumnStringField[]} name
@property {SearchColumnDoubleField[]} originalAmount
@property {SearchColumnDateField[]} purchaseDate
@property {SearchColumnStringField[]} sender
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class FolderSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} class
@property {SearchMultiSelectField} department
@property {SearchStringField} description
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} group
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchBooleanField} isTopLevel
@property {SearchDateField} lastModifiedDate
@property {SearchMultiSelectField} location
@property {SearchStringField} name
@property {SearchLongField} numFiles
@property {SearchMultiSelectField} owner
@property {SearchMultiSelectField} parent
@property {SearchMultiSelectField} predecessor
@property {SearchBooleanField} private
@property {SearchLongField} size
@property {SearchMultiSelectField} subsidiary
*/
/*
@class FolderSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} class
@property {SearchColumnSelectField[]} department
@property {SearchColumnStringField[]} description
@property {SearchColumnStringField[]} externalId
@property {SearchColumnLongField[]} folderSize
@property {SearchColumnSelectField[]} group
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnDateField[]} lastModifiedDate
@property {SearchColumnSelectField[]} location
@property {SearchColumnStringField[]} name
@property {SearchColumnLongField[]} numFiles
@property {SearchColumnSelectField[]} owner
@property {SearchColumnSelectField[]} parent
@property {SearchColumnSelectField[]} subsidiary
*/
/*
@class FileSearchBasic @extends SearchRecordBasic
@property {SearchBooleanField} availableWithoutLogin
@property {SearchDateField} created
@property {SearchDateField} dateViewed
@property {SearchStringField} description
@property {SearchLongField} documentSize
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchEnumMultiSelectField} fileType
@property {SearchMultiSelectField} folder
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isAvailable
@property {SearchBooleanField} isLink
@property {SearchDateField} modified
@property {SearchStringField} name
@property {SearchMultiSelectField} owner
@property {SearchStringField} url
*/
/*
@class FileSearchRowBasic @extends SearchRowBasic
@property {SearchColumnBooleanField[]} availableWithoutLogin
@property {SearchColumnDateField[]} created
@property {SearchColumnDateField[]} dateViewed
@property {SearchColumnStringField[]} description
@property {SearchColumnLongField[]} documentSize
@property {SearchColumnStringField[]} externalId
@property {SearchColumnEnumSelectField[]} fileType
@property {SearchColumnSelectField[]} folder
@property {SearchColumnLongField[]} hits
@property {SearchColumnStringField[]} hostedPath
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isAvailable
@property {SearchColumnDateField[]} modified
@property {SearchColumnStringField[]} name
@property {SearchColumnSelectField[]} owner
@property {SearchColumnStringField[]} url
*/
/*
@class JobSearchBasic @extends SearchRecordBasic
@property {SearchStringField} accountNumber
@property {SearchDoubleField} actualTime
@property {SearchStringField} address
@property {SearchStringField} addressee
@property {SearchStringField} addressLabel
@property {SearchStringField} addressPhone
@property {SearchBooleanField} allocatePayrollExpenses
@property {SearchBooleanField} allowAllResourcesForTasks
@property {SearchBooleanField} allowExpenses
@property {SearchBooleanField} allowTime
@property {SearchBooleanField} applyProjectExpenseTypeToAll
@property {SearchStringField} attention
@property {SearchMultiSelectField} billingSchedule
@property {SearchDateField} calculatedEndDate
@property {SearchDateField} calculatedEndDateBaseline
@property {SearchMultiSelectField} category
@property {SearchStringField} city
@property {SearchStringField} comments
@property {SearchStringField} contact
@property {SearchEnumMultiSelectField} country
@property {SearchStringField} county
@property {SearchMultiSelectField} customer
@property {SearchDateField} dateCreated
@property {SearchStringField} email
@property {SearchDateField} endDate
@property {SearchStringField} entityId
@property {SearchDoubleField} estCost
@property {SearchDateField} estEndDate
@property {SearchDoubleField} estimatedGrossProfit
@property {SearchDoubleField} estimatedGrossProfitPercent
@property {SearchDoubleField} estimatedLaborCost
@property {SearchDoubleField} estimatedLaborCostBaseline
@property {SearchDoubleField} estimatedLaborRevenue
@property {SearchDoubleField} estimatedTime
@property {SearchDoubleField} estimatedTimeOverride
@property {SearchDoubleField} estimatedTimeOverrideBaseline
@property {SearchDoubleField} estRevenue
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchStringField} fax
@property {SearchBooleanField} giveAccess
@property {SearchEnumMultiSelectField} globalSubscriptionStatus
@property {SearchStringField} image
@property {SearchBooleanField} includeCrmTasksInTotals
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isDefaultBilling
@property {SearchBooleanField} isDefaultShipping
@property {SearchBooleanField} isExemptTime
@property {SearchBooleanField} isInactive
@property {SearchBooleanField} isProductiveTime
@property {SearchBooleanField} isUtilizedTime
@property {SearchEnumMultiSelectField} jobBillingType
@property {SearchMultiSelectField} jobItem
@property {SearchDoubleField} jobPrice
@property {SearchMultiSelectField} jobResource
@property {SearchMultiSelectField} jobResourceRole
@property {SearchEnumMultiSelectField} language
@property {SearchDateField} lastBaselineDate
@property {SearchDateField} lastModifiedDate
@property {SearchEnumMultiSelectField} level
@property {SearchBooleanField} limitTimeToAssignees
@property {SearchBooleanField} materializeTime
@property {SearchMultiSelectField} parent
@property {SearchLongField} pctComplete
@property {SearchLongField} percentTimeComplete
@property {SearchEnumMultiSelectField} permission
@property {SearchStringField} phone
@property {SearchStringField} phoneticName
@property {SearchDateField} projectedEndDateBaseline
@property {SearchMultiSelectField} projectExpenseType
@property {SearchDateField} startDate
@property {SearchDateField} startDateBaseline
@property {SearchStringField} state
@property {SearchMultiSelectField} status
@property {SearchMultiSelectField} subsidiary
@property {SearchDoubleField} timeRemaining
@property {SearchMultiSelectField} type
@property {SearchStringField} zipCode
@property {SearchCustomFieldList} customFieldList
*/
/*
@class JobSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} accountNumber
@property {SearchColumnDoubleField[]} actualTime
@property {SearchColumnStringField[]} address
@property {SearchColumnStringField[]} address1
@property {SearchColumnStringField[]} address2
@property {SearchColumnStringField[]} address3
@property {SearchColumnStringField[]} addressee
@property {SearchColumnStringField[]} addressInternalId
@property {SearchColumnStringField[]} addressLabel
@property {SearchColumnStringField[]} addressPhone
@property {SearchColumnBooleanField[]} allocatePayrollExpenses
@property {SearchColumnBooleanField[]} allowAllResourcesForTasks
@property {SearchColumnBooleanField[]} allowExpenses
@property {SearchColumnBooleanField[]} allowTime
@property {SearchColumnStringField[]} altContact
@property {SearchColumnStringField[]} altEmail
@property {SearchColumnStringField[]} altName
@property {SearchColumnStringField[]} altPhone
@property {SearchColumnStringField[]} attention
@property {SearchColumnStringField[]} billAddress1
@property {SearchColumnStringField[]} billAddress2
@property {SearchColumnStringField[]} billAddress3
@property {SearchColumnStringField[]} billAddressee
@property {SearchColumnStringField[]} billAttention
@property {SearchColumnStringField[]} billCity
@property {SearchColumnEnumSelectField[]} billCountry
@property {SearchColumnStringField[]} billCountryCode
@property {SearchColumnSelectField[]} billingSchedule
@property {SearchColumnStringField[]} billPhone
@property {SearchColumnStringField[]} billState
@property {SearchColumnStringField[]} billZipCode
@property {SearchColumnDateField[]} calculatedEndDate
@property {SearchColumnDateField[]} calculatedEndDateBaseline
@property {SearchColumnSelectField[]} category
@property {SearchColumnStringField[]} city
@property {SearchColumnStringField[]} comments
@property {SearchColumnStringField[]} companyName
@property {SearchColumnStringField[]} contact
@property {SearchColumnEnumSelectField[]} country
@property {SearchColumnStringField[]} countryCode
@property {SearchColumnSelectField[]} customer
@property {SearchColumnDateField[]} dateCreated
@property {SearchColumnStringField[]} email
@property {SearchColumnDateField[]} endDate
@property {SearchColumnStringField[]} entityId
@property {SearchColumnLongField[]} entityNumber
@property {SearchColumnSelectField[]} entityStatus
@property {SearchColumnDoubleField[]} estimatedCost
@property {SearchColumnDoubleField[]} estimatedGrossProfit
@property {SearchColumnDoubleField[]} estimatedGrossProfitPercent
@property {SearchColumnDoubleField[]} estimatedLaborCost
@property {SearchColumnDoubleField[]} estimatedLaborCostBaseline
@property {SearchColumnDoubleField[]} estimatedLaborRevenue
@property {SearchColumnDoubleField[]} estimatedRevenue
@property {SearchColumnDoubleField[]} estimatedTime
@property {SearchColumnDoubleField[]} estimatedTimeOverride
@property {SearchColumnDoubleField[]} estimatedTimeOverrideBaseline
@property {SearchColumnStringField[]} externalId
@property {SearchColumnStringField[]} fax
@property {SearchColumnEnumSelectField[]} globalSubscriptionStatus
@property {SearchColumnSelectField[]} image
@property {SearchColumnBooleanField[]} includeCrmTasksInTotals
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isDefaultBilling
@property {SearchColumnBooleanField[]} isDefaultShipping
@property {SearchColumnBooleanField[]} isExemptTime
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnBooleanField[]} isProductiveTime
@property {SearchColumnBooleanField[]} isUtilizedTime
@property {SearchColumnEnumSelectField[]} jobBillingType
@property {SearchColumnSelectField[]} jobItem
@property {SearchColumnDoubleField[]} jobPrice
@property {SearchColumnSelectField[]} jobResource
@property {SearchColumnSelectField[]} jobResourceRole
@property {SearchColumnEnumSelectField[]} language
@property {SearchColumnDateField[]} lastBaselineDate
@property {SearchColumnDateField[]} lastModifiedDate
@property {SearchColumnEnumSelectField[]} level
@property {SearchColumnBooleanField[]} limitTimeToAssignees
@property {SearchColumnBooleanField[]} materializeTime
@property {SearchColumnDoubleField[]} percentComplete
@property {SearchColumnDoubleField[]} percentTimeComplete
@property {SearchColumnEnumSelectField[]} permission
@property {SearchColumnStringField[]} phone
@property {SearchColumnStringField[]} phoneticName
@property {SearchColumnDateField[]} projectedEndDate
@property {SearchColumnDateField[]} projectedEndDateBaseline
@property {SearchColumnSelectField[]} projectExpenseType
@property {SearchColumnStringField[]} shipAddress1
@property {SearchColumnStringField[]} shipAddress2
@property {SearchColumnStringField[]} shipAddress3
@property {SearchColumnStringField[]} shipAddressee
@property {SearchColumnStringField[]} shipAttention
@property {SearchColumnStringField[]} shipCity
@property {SearchColumnEnumSelectField[]} shipCountry
@property {SearchColumnStringField[]} shipCountryCode
@property {SearchColumnStringField[]} shipPhone
@property {SearchColumnStringField[]} shipState
@property {SearchColumnStringField[]} shipZip
@property {SearchColumnDateField[]} startDate
@property {SearchColumnDateField[]} startDateBaseline
@property {SearchColumnStringField[]} state
@property {SearchColumnSelectField[]} subscription
@property {SearchColumnDateField[]} subscriptionDate
@property {SearchColumnBooleanField[]} subscriptionStatus
@property {SearchColumnSelectField[]} subsidiary
@property {SearchColumnDoubleField[]} timeRemaining
@property {SearchColumnStringField[]} zipCode
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class IssueSearchBasic @extends SearchRecordBasic
@property {SearchLongField} ageInMonths
@property {SearchMultiSelectField} assigned
@property {SearchMultiSelectField} buildBroken
@property {SearchStringField} buildBrokenName
@property {SearchMultiSelectField} buildFixed
@property {SearchStringField} buildFixedName
@property {SearchMultiSelectField} buildTarget
@property {SearchStringField} buildTargetName
@property {SearchLongField} caseCount
@property {SearchStringField} caseNumber
@property {SearchDateField} closedDate
@property {SearchDateField} createdDate
@property {SearchDateField} dateReleased
@property {SearchStringField} details
@property {SearchMultiSelectField} duplicateOf
@property {SearchBooleanField} eFix
@property {SearchMultiSelectField} employeeOrTeam
@property {SearchEnumMultiSelectField} eventStatus
@property {SearchStringField} externalAbstract
@property {SearchStringField} externalDetails
@property {SearchMultiSelectField} externalFixedIn
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} externalStatus
@property {SearchDateField} fixed
@property {SearchMultiSelectField} fixedBy
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isOwner
@property {SearchBooleanField} isReviewed
@property {SearchBooleanField} isShowStopper
@property {SearchStringField} issueAbstract
@property {SearchStringField} issueNumber
@property {SearchMultiSelectField} item
@property {SearchDateField} lastModifiedDate
@property {SearchMultiSelectField} module
@property {SearchLongField} number
@property {SearchStringField} originalFixedIn
@property {SearchMultiSelectField} priority
@property {SearchMultiSelectField} product
@property {SearchMultiSelectField} productTeam
@property {SearchMultiSelectField} relatedIssue
@property {SearchEnumMultiSelectField} relationship
@property {SearchStringField} relationshipComment
@property {SearchMultiSelectField} reportedBy
@property {SearchMultiSelectField} reproduce
@property {SearchDateField} resolved
@property {SearchMultiSelectField} resolvedBy
@property {SearchMultiSelectField} reviewer
@property {SearchMultiSelectField} severity
@property {SearchEnumMultiSelectField} source
@property {SearchMultiSelectField} status
@property {SearchMultiSelectField} tags
@property {SearchBooleanField} tracking
@property {SearchMultiSelectField} type
@property {SearchMultiSelectField} userType
@property {SearchMultiSelectField} versionBroken
@property {SearchMultiSelectField} versionFixed
@property {SearchMultiSelectField} versionTarget
@property {SearchCustomFieldList} customFieldList
*/
/*
@class IssueSearchRowBasic @extends SearchRowBasic
@property {SearchColumnLongField[]} ageInMonths
@property {SearchColumnSelectField[]} assigned
@property {SearchColumnSelectField[]} buildBroken
@property {SearchColumnSelectField[]} buildFixed
@property {SearchColumnSelectField[]} buildTarget
@property {SearchColumnLongField[]} caseCount
@property {SearchColumnStringField[]} caseNumber
@property {SearchColumnDateField[]} closedDate
@property {SearchColumnDateField[]} createdDate
@property {SearchColumnDateField[]} dateReleased
@property {SearchColumnSelectField[]} duplicateOf
@property {SearchColumnSelectField[]} employeeOrTeam
@property {SearchColumnEnumSelectField[]} eventStatus
@property {SearchColumnStringField[]} externalAbstract
@property {SearchColumnStringField[]} externalDetails
@property {SearchColumnStringField[]} externalFixedIn
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} externalStatus
@property {SearchColumnDateField[]} fixed
@property {SearchColumnSelectField[]} fixedBy
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isOwner
@property {SearchColumnBooleanField[]} isReviewed
@property {SearchColumnBooleanField[]} isShowStopper
@property {SearchColumnStringField[]} issueAbstract
@property {SearchColumnSelectField[]} issueStatus
@property {SearchColumnSelectField[]} item
@property {SearchColumnDateField[]} lastModifiedDate
@property {SearchColumnStringField[]} module
@property {SearchColumnStringField[]} number
@property {SearchColumnStringField[]} originalFixedIn
@property {SearchColumnSelectField[]} priority
@property {SearchColumnSelectField[]} product
@property {SearchColumnSelectField[]} productTeam
@property {SearchColumnSelectField[]} relatedIssue
@property {SearchColumnEnumSelectField[]} relationship
@property {SearchColumnStringField[]} relationshipComment
@property {SearchColumnSelectField[]} reportedBy
@property {SearchColumnSelectField[]} reproduce
@property {SearchColumnDateField[]} resolved
@property {SearchColumnSelectField[]} resolvedBy
@property {SearchColumnSelectField[]} reviewer
@property {SearchColumnSelectField[]} severity
@property {SearchColumnEnumSelectField[]} source
@property {SearchColumnSelectField[]} tags
@property {SearchColumnStringField[]} type
@property {SearchColumnSelectField[]} userType
@property {SearchColumnSelectField[]} versionBroken
@property {SearchColumnSelectField[]} versionFixed
@property {SearchColumnSelectField[]} versionTarget
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class GroupMemberSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} groupId
*/
/*
@class CampaignSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} audience
@property {SearchDoubleField} baseCost
@property {SearchEnumMultiSelectField} campaignEventType
@property {SearchStringField} campaignId
@property {SearchMultiSelectField} category
@property {SearchMultiSelectField} channel
@property {SearchDoubleField} cost
@property {SearchDateField} createdDate
@property {SearchDateField} endDate
@property {SearchStringField} event
@property {SearchDoubleField} expectedRevenue
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} family
@property {SearchMultiSelectField} group
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchBooleanField} isSalesCampaign
@property {SearchMultiSelectField} item
@property {SearchStringField} keyword
@property {SearchDateField} lastModifiedDate
@property {SearchMultiSelectField} manager
@property {SearchMultiSelectField} managerRole
@property {SearchLongField} number
@property {SearchMultiSelectField} offer
@property {SearchMultiSelectField} promoCode
@property {SearchMultiSelectField} recipient
@property {SearchEnumMultiSelectField} response
@property {SearchEnumMultiSelectField} responseCategory
@property {SearchLongField} responseCode
@property {SearchStringField} responseComments
@property {SearchDateField} responseDate
@property {SearchDateField} scheduleDate
@property {SearchMultiSelectField} searchEngine
@property {SearchDateField} startDate
@property {SearchEnumMultiSelectField} status
@property {SearchMultiSelectField} subscription
@property {SearchMultiSelectField} template
@property {SearchStringField} title
@property {SearchMultiSelectField} vertical
@property {SearchCustomFieldList} customFieldList
*/
/*
@class CampaignSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} audience
@property {SearchColumnDoubleField[]} baseCost
@property {SearchColumnStringField[]} campaignId
@property {SearchColumnSelectField[]} category
@property {SearchColumnSelectField[]} channel
@property {SearchColumnDoubleField[]} cost
@property {SearchColumnDateField[]} createdDate
@property {SearchColumnDateField[]} endDate
@property {SearchColumnStringField[]} event
@property {SearchColumnDateField[]} executedDate
@property {SearchColumnDoubleField[]} expectedRevenue
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} family
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnBooleanField[]} isSalesCampaign
@property {SearchColumnSelectField[]} item
@property {SearchColumnStringField[]} keyword
@property {SearchColumnDateField[]} lastModifiedDate
@property {SearchColumnSelectField[]} managerRole
@property {SearchColumnStringField[]} message
@property {SearchColumnSelectField[]} offer
@property {SearchColumnSelectField[]} owner
@property {SearchColumnStringField[]} promoCode
@property {SearchColumnSelectField[]} recipient
@property {SearchColumnEnumSelectField[]} response
@property {SearchColumnEnumSelectField[]} responseCategory
@property {SearchColumnLongField[]} responseCode
@property {SearchColumnDateField[]} responseDate
@property {SearchColumnStringField[]} responseNotes
@property {SearchColumnDoubleField[]} revenue
@property {SearchColumnDoubleField[]} roi
@property {SearchColumnDateField[]} scheduledDate
@property {SearchColumnSelectField[]} searchEngine
@property {SearchColumnDateField[]} startDate
@property {SearchColumnEnumSelectField[]} status
@property {SearchColumnSelectField[]} subscription
@property {SearchColumnStringField[]} title
@property {SearchColumnStringField[]} url
@property {SearchColumnSelectField[]} vertical
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class EntityGroupSearchBasic @extends SearchRecordBasic
@property {SearchStringField} email
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchStringField} groupName
@property {SearchMultiSelectField} groupOwner
@property {SearchMultiSelectField} groupType
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isDynamic
@property {SearchBooleanField} isInactive
@property {SearchBooleanField} isManufacturingWorkCenter
@property {SearchBooleanField} isPrivate
@property {SearchLongField} laborResources
@property {SearchDateField} lastModifiedDate
@property {SearchLongField} machineResources
@property {SearchMultiSelectField} subsidiary
@property {SearchMultiSelectField} workCalendar
@property {SearchCustomFieldList} customFieldList
*/
/*
@class EntityGroupSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} email
@property {SearchColumnStringField[]} externalId
@property {SearchColumnStringField[]} groupName
@property {SearchColumnStringField[]} groupType
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isDynamic
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnBooleanField[]} isManufacturingWorkCenter
@property {SearchColumnBooleanField[]} isPrivate
@property {SearchColumnLongField[]} laborResources
@property {SearchColumnDateField[]} lastModifiedDate
@property {SearchColumnLongField[]} machineResources
@property {SearchColumnSelectField[]} owner
@property {SearchColumnStringField[]} savedSearch
@property {SearchColumnLongField[]} size
@property {SearchColumnSelectField[]} subsidiary
@property {SearchColumnSelectField[]} workCalendar
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class PromotionCodeSearchBasic @extends SearchRecordBasic
@property {SearchEnumMultiSelectField} applyDiscountTo
@property {SearchStringField} code
@property {SearchStringField} description
@property {SearchMultiSelectField} discount
@property {SearchDoubleField} discountAmount
@property {SearchDateField} endDate
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} freeShipItem
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchBooleanField} isPublic
@property {SearchMultiSelectField} item
@property {SearchMultiSelectField} location
@property {SearchStringField} name
@property {SearchMultiSelectField} partner
@property {SearchDateField} startDate
@property {SearchCustomFieldList} customFieldList
*/
/*
@class PromotionCodeSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} code
@property {SearchColumnStringField[]} description
@property {SearchColumnStringField[]} discount
@property {SearchColumnDoubleField[]} discountAmount
@property {SearchColumnDateField[]} endDate
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnBooleanField[]} isPublic
@property {SearchColumnSelectField[]} location
@property {SearchColumnStringField[]} name
@property {SearchColumnDateField[]} startDate
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class BudgetSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} account
@property {SearchDoubleField} amount
@property {SearchMultiSelectField} category
@property {SearchMultiSelectField} class
@property {SearchMultiSelectField} currency
@property {SearchMultiSelectField} customer
@property {SearchMultiSelectField} department
@property {SearchBooleanField} global
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchMultiSelectField} item
@property {SearchMultiSelectField} location
@property {SearchMultiSelectField} subsidiary
@property {SearchMultiSelectField} year
@property {SearchMultiSelectField} year2
*/
/*
@class BudgetSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} account
@property {SearchColumnDoubleField[]} amount
@property {SearchColumnStringField[]} category
@property {SearchColumnStringField[]} class
@property {SearchColumnStringField[]} classnohierarchy
@property {SearchColumnStringField[]} currency
@property {SearchColumnStringField[]} customer
@property {SearchColumnStringField[]} department
@property {SearchColumnStringField[]} departmentnohierarchy
@property {SearchColumnBooleanField[]} global
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnStringField[]} item
@property {SearchColumnStringField[]} location
@property {SearchColumnStringField[]} locationnohierarchy
@property {SearchColumnStringField[]} subsidiary
@property {SearchColumnStringField[]} subsidiarynohierarchy
@property {SearchColumnStringField[]} year
@property {SearchColumnStringField[]} year2
*/
/*
@class ProjectTaskSearchBasic @extends SearchRecordBasic
@property {SearchDoubleField} actualWork
@property {SearchMultiSelectField} assignee
@property {SearchMultiSelectField} company
@property {SearchEnumMultiSelectField} constraintType
@property {SearchMultiSelectField} contact
@property {SearchDoubleField} cost
@property {SearchDoubleField} costBase
@property {SearchDoubleField} costBaseBaseline
@property {SearchDoubleField} costBaseline
@property {SearchDoubleField} costBaseVariance
@property {SearchDoubleField} costVariance
@property {SearchDoubleField} costVariancePercent
@property {SearchDateField} createdDate
@property {SearchDateField} endDate
@property {SearchDateField} endDateBaseline
@property {SearchDoubleField} endDateVariance
@property {SearchDoubleField} estimatedWork
@property {SearchDoubleField} estimatedWorkBaseline
@property {SearchDoubleField} estimatedWorkVariance
@property {SearchDoubleField} estimatedWorkVariancePercent
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchDateField} finishByDate
@property {SearchLongField} id
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isMilestone
@property {SearchBooleanField} isSummaryTask
@property {SearchDateField} lastModifiedDate
@property {SearchBooleanField} nonBillableTask
@property {SearchMultiSelectField} owner
@property {SearchMultiSelectField} parent
@property {SearchDoubleField} percentWorkComplete
@property {SearchMultiSelectField} predecessor
@property {SearchStringField} predecessors
@property {SearchEnumMultiSelectField} priority
@property {SearchDoubleField} remainingWork
@property {SearchDateField} startDate
@property {SearchDateField} startDateBaseline
@property {SearchDoubleField} startDateVariance
@property {SearchEnumMultiSelectField} status
@property {SearchMultiSelectField} successor
@property {SearchStringField} title
@property {SearchCustomFieldList} customFieldList
*/
/*
@class ProjectTaskSearchRowBasic @extends SearchRowBasic
@property {SearchColumnDoubleField[]} actualWork
@property {SearchColumnSelectField[]} company
@property {SearchColumnEnumSelectField[]} constraintType
@property {SearchColumnSelectField[]} contact
@property {SearchColumnDoubleField[]} cost
@property {SearchColumnDoubleField[]} costBase
@property {SearchColumnDoubleField[]} costBaseBaseline
@property {SearchColumnDoubleField[]} costBaseline
@property {SearchColumnDoubleField[]} costBaseVariance
@property {SearchColumnDoubleField[]} costVariance
@property {SearchColumnDoubleField[]} costVariancePercent
@property {SearchColumnDateField[]} createdDate
@property {SearchColumnDateField[]} endDate
@property {SearchColumnDateField[]} endDateBaseline
@property {SearchColumnDoubleField[]} endDateVariance
@property {SearchColumnDoubleField[]} estimatedWork
@property {SearchColumnDoubleField[]} estimatedWorkBaseline
@property {SearchColumnDoubleField[]} estimatedWorkVariance
@property {SearchColumnDoubleField[]} estimatedWorkVariancePercent
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnDateField[]} finishByDate
@property {SearchColumnLongField[]} id
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isMilestone
@property {SearchColumnBooleanField[]} isSummaryTask
@property {SearchColumnDateField[]} lastModifiedDate
@property {SearchColumnStringField[]} message
@property {SearchColumnBooleanField[]} nonBillableTask
@property {SearchColumnSelectField[]} owner
@property {SearchColumnSelectField[]} parent
@property {SearchColumnDoubleField[]} percentWorkComplete
@property {SearchColumnSelectField[]} predecessor
@property {SearchColumnDoubleField[]} predecessorLagDays
@property {SearchColumnStringField[]} predecessors
@property {SearchColumnStringField[]} predecessorType
@property {SearchColumnEnumSelectField[]} priority
@property {SearchColumnDoubleField[]} remainingWork
@property {SearchColumnDateField[]} startDate
@property {SearchColumnDateField[]} startDateBaseline
@property {SearchColumnDoubleField[]} startDateVariance
@property {SearchColumnEnumSelectField[]} status
@property {SearchColumnSelectField[]} successor
@property {SearchColumnStringField[]} successorType
@property {SearchColumnStringField[]} title
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class ProjectTaskAssignmentSearchBasic @extends SearchRecordBasic
@property {SearchDoubleField} actualWork
@property {SearchDoubleField} cost
@property {SearchDoubleField} costBase
@property {SearchDateField} endDate
@property {SearchDoubleField} estimatedWork
@property {SearchDoubleField} estimatedWorkBaseline
@property {SearchDoubleField} grossProfit
@property {SearchDoubleField} grossProfitBase
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchDoubleField} price
@property {SearchDoubleField} priceBase
@property {SearchMultiSelectField} resource
@property {SearchStringField} resourceName
@property {SearchStringField} serviceItem
@property {SearchStringField} serviceItemDesc
@property {SearchDateField} startDate
@property {SearchDoubleField} unitCost
@property {SearchDoubleField} unitCostBase
@property {SearchDoubleField} unitPrice
@property {SearchDoubleField} unitPriceBase
@property {SearchDoubleField} units
@property {SearchMultiSelectField} workCalendar
*/
/*
@class ProjectTaskAssignmentSearchRowBasic @extends SearchRowBasic
@property {SearchColumnDoubleField[]} actualWork
@property {SearchColumnDoubleField[]} cost
@property {SearchColumnDoubleField[]} costBase
@property {SearchColumnDateField[]} endDate
@property {SearchColumnDoubleField[]} estimatedWork
@property {SearchColumnDoubleField[]} estimatedWorkBaseline
@property {SearchColumnDoubleField[]} grossProfit
@property {SearchColumnDoubleField[]} grossProfitBase
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnDoubleField[]} price
@property {SearchColumnDoubleField[]} priceBase
@property {SearchColumnSelectField[]} resource
@property {SearchColumnStringField[]} resourceName
@property {SearchColumnStringField[]} serviceItem
@property {SearchColumnStringField[]} serviceItemDesc
@property {SearchColumnDateField[]} startDate
@property {SearchColumnDoubleField[]} unitCost
@property {SearchColumnDoubleField[]} unitCostBase
@property {SearchColumnDoubleField[]} unitPrice
@property {SearchColumnDoubleField[]} unitPriceBase
@property {SearchColumnDoubleField[]} units
@property {SearchColumnSelectField[]} workCalendar
*/
/*
@class AccountingPeriodSearchBasic @extends SearchRecordBasic
@property {SearchBooleanField} allLocked
@property {SearchBooleanField} allowNonGlChanges
@property {SearchBooleanField} apLocked
@property {SearchBooleanField} arLocked
@property {SearchBooleanField} closed
@property {SearchDateField} closedOnDate
@property {SearchDateField} endDate
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isAdjust
@property {SearchBooleanField} isInactive
@property {SearchBooleanField} isQuarter
@property {SearchBooleanField} isYear
@property {SearchMultiSelectField} parent
@property {SearchBooleanField} payrollLocked
@property {SearchStringField} periodName
@property {SearchDateField} startDate
*/
/*
@class AccountingPeriodSearchRowBasic @extends SearchRowBasic
@property {SearchColumnBooleanField[]} allLocked
@property {SearchColumnBooleanField[]} allowNonGLChanges
@property {SearchColumnBooleanField[]} apLocked
@property {SearchColumnBooleanField[]} arLocked
@property {SearchColumnBooleanField[]} closed
@property {SearchColumnDateField[]} closedOnDate
@property {SearchColumnDateField[]} endDate
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isAdjust
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnBooleanField[]} isQuarter
@property {SearchColumnBooleanField[]} isYear
@property {SearchColumnSelectField[]} parent
@property {SearchColumnBooleanField[]} payrollLocked
@property {SearchColumnStringField[]} periodName
@property {SearchColumnDateField[]} startDate
*/
/*
@class ContactCategorySearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchStringField} name
@property {SearchBooleanField} private
@property {SearchBooleanField} sync
*/
/*
@class ContactCategorySearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnStringField[]} name
@property {SearchColumnBooleanField[]} private
@property {SearchColumnBooleanField[]} sync
*/
/*
@class ContactRoleSearchBasic @extends SearchRecordBasic
@property {SearchStringField} description
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchStringField} name
*/
/*
@class ContactRoleSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} description
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnStringField[]} name
*/
/*
@class CustomerCategorySearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchStringField} name
*/
/*
@class CustomerCategorySearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnStringField[]} name
*/
/*
@class CustomerStatusSearchBasic @extends SearchRecordBasic
@property {SearchStringField} description
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchBooleanField} includeInLeadReports
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchStringField} name
@property {SearchDoubleField} probability
*/
/*
@class CustomerStatusSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} description
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnBooleanField[]} includeInLeadReports
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnStringField[]} name
@property {SearchColumnStringField[]} probability
*/
/*
@class ExpenseCategorySearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} account
@property {SearchStringField} description
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchStringField} name
@property {SearchBooleanField} rateRequired
@property {SearchCustomFieldList} customFieldList
*/
/*
@class ExpenseCategorySearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} account
@property {SearchColumnStringField[]} description
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnStringField[]} name
@property {SearchColumnBooleanField[]} rateRequired
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class JobStatusSearchBasic @extends SearchRecordBasic
@property {SearchStringField} description
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchStringField} name
*/
/*
@class JobStatusSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} description
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnStringField[]} name
*/
/*
@class JobTypeSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchStringField} name
@property {SearchMultiSelectField} parent
*/
/*
@class JobTypeSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnStringField[]} name
@property {SearchColumnSelectField[]} parent
*/
/*
@class NoteTypeSearchBasic @extends SearchRecordBasic
@property {SearchStringField} description
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchStringField} name
*/
/*
@class NoteTypeSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} description
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnStringField[]} name
*/
/*
@class PartnerCategorySearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchStringField} name
@property {SearchMultiSelectField} parent
*/
/*
@class PartnerCategorySearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnStringField[]} name
@property {SearchColumnSelectField[]} parent
*/
/*
@class PaymentMethodSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} account
@property {SearchBooleanField} creditCard
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isDebitCard
@property {SearchBooleanField} isInactive
@property {SearchStringField} name
*/
/*
@class PaymentMethodSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} account
@property {SearchColumnBooleanField[]} creditCard
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isDebitCard
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnStringField[]} name
*/
/*
@class PriceLevelSearchBasic @extends SearchRecordBasic
@property {SearchDoubleField} discountPct
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchBooleanField} isOnline
@property {SearchStringField} name
*/
/*
@class PriceLevelSearchRowBasic @extends SearchRowBasic
@property {SearchColumnDoubleField[]} discountPct
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnBooleanField[]} isOnline
@property {SearchColumnStringField[]} name
*/
/*
@class SalesRoleSearchBasic @extends SearchRecordBasic
@property {SearchStringField} description
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchStringField} name
*/
/*
@class SalesRoleSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} description
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnStringField[]} name
*/
/*
@class TermSearchBasic @extends SearchRecordBasic
@property {SearchBooleanField} dateDriven
@property {SearchLongField} dayDiscountExpires
@property {SearchLongField} dayOfMonthNetDue
@property {SearchLongField} daysUntilExpiry
@property {SearchLongField} daysUntilNetDue
@property {SearchDoubleField} discountPercent
@property {SearchDoubleField} discountPercentDateDriven
@property {SearchLongField} dueNextMonthIfWithinDays
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchStringField} name
@property {SearchBooleanField} preferred
*/
/*
@class TermSearchRowBasic @extends SearchRowBasic
@property {SearchColumnBooleanField[]} dateDriven
@property {SearchColumnLongField[]} dayDiscountExpires
@property {SearchColumnLongField[]} dayOfMonthNetDue
@property {SearchColumnLongField[]} daysUntilExpiry
@property {SearchColumnLongField[]} daysUntilNetDue
@property {SearchColumnDoubleField[]} discountPercent
@property {SearchColumnDoubleField[]} discountPercentDateDriven
@property {SearchColumnLongField[]} dueNextMonthIfWithinDays
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnStringField[]} name
@property {SearchColumnBooleanField[]} preferred
*/
/*
@class VendorCategorySearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchBooleanField} isTaxAgency
@property {SearchStringField} name
*/
/*
@class VendorCategorySearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnBooleanField[]} isTaxAgency
@property {SearchColumnStringField[]} name
*/
/*
@class WinLossReasonSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchStringField} name
*/
/*
@class WinLossReasonSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnStringField[]} name
*/
/*
@class OriginatingLeadSearchBasic @extends SearchRecordBasic
@property {SearchStringField} accountNumber
@property {SearchStringField} address
@property {SearchStringField} addressee
@property {SearchStringField} addressLabel
@property {SearchStringField} addressPhone
@property {SearchStringField} attention
@property {SearchBooleanField} availableOffline
@property {SearchDoubleField} balance
@property {SearchStringField} billAddress
@property {SearchDoubleField} boughtAmount
@property {SearchDateField} boughtDate
@property {SearchMultiSelectField} buyingReason
@property {SearchMultiSelectField} buyingTimeFrame
@property {SearchMultiSelectField} category
@property {SearchStringField} ccCustomerCode
@property {SearchBooleanField} ccDefault
@property {SearchDateField} ccExpDate
@property {SearchStringField} ccHolderName
@property {SearchStringField} ccNumber
@property {SearchMultiSelectField} ccState
@property {SearchDateField} ccStateFrom
@property {SearchMultiSelectField} ccType
@property {SearchStringField} city
@property {SearchMultiSelectField} classBought
@property {SearchStringField} comments
@property {SearchStringField} companyName
@property {SearchDoubleField} consolBalance
@property {SearchLongField} consolDaysOverdue
@property {SearchDoubleField} consolDepositBalance
@property {SearchDoubleField} consolOverdueBalance
@property {SearchDoubleField} consolUnbilledOrders
@property {SearchStringField} contact
@property {SearchLongField} contribution
@property {SearchDateField} conversionDate
@property {SearchEnumMultiSelectField} country
@property {SearchStringField} county
@property {SearchEnumMultiSelectField} creditHold
@property {SearchBooleanField} creditHoldOverride
@property {SearchDoubleField} creditLimit
@property {SearchMultiSelectField} currency
@property {SearchMultiSelectField} custStage
@property {SearchMultiSelectField} custStatus
@property {SearchDateField} dateClosed
@property {SearchDateField} dateCreated
@property {SearchLongField} daysOverdue
@property {SearchDoubleField} defaultOrderPriority
@property {SearchDoubleField} depositBalance
@property {SearchMultiSelectField} deptBought
@property {SearchMultiSelectField} drAccount
@property {SearchStringField} email
@property {SearchEnumMultiSelectField} emailPreference
@property {SearchBooleanField} emailTransactions
@property {SearchDateField} endDate
@property {SearchStringField} entityId
@property {SearchMultiSelectField} entityStatus
@property {SearchDoubleField} estimatedBudget
@property {SearchBooleanField} explicitConversion
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchStringField} fax
@property {SearchBooleanField} faxTransactions
@property {SearchStringField} firstName
@property {SearchDateField} firstOrderDate
@property {SearchDateField} firstSaleDate
@property {SearchMultiSelectField} fxAccount
@property {SearchDoubleField} fxBalance
@property {SearchDoubleField} fxConsolBalance
@property {SearchDoubleField} fxConsolUnbilledOrders
@property {SearchDoubleField} fxUnbilledOrders
@property {SearchBooleanField} giveAccess
@property {SearchEnumMultiSelectField} globalSubscriptionStatus
@property {SearchMultiSelectField} group
@property {SearchMultiSelectField} groupPricingLevel
@property {SearchBooleanField} hasDuplicates
@property {SearchStringField} image
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isBudgetApproved
@property {SearchBooleanField} isDefaultBilling
@property {SearchBooleanField} isDefaultShipping
@property {SearchBooleanField} isInactive
@property {SearchBooleanField} isPerson
@property {SearchBooleanField} isReportedLead
@property {SearchBooleanField} isShipAddress
@property {SearchMultiSelectField} itemPricingLevel
@property {SearchDoubleField} itemPricingUnitPrice
@property {SearchMultiSelectField} itemsBought
@property {SearchMultiSelectField} itemsOrdered
@property {SearchEnumMultiSelectField} language
@property {SearchDateField} lastModifiedDate
@property {SearchStringField} lastName
@property {SearchDateField} lastOrderDate
@property {SearchDateField} lastSaleDate
@property {SearchDateField} leadDate
@property {SearchMultiSelectField} leadSource
@property {SearchEnumMultiSelectField} level
@property {SearchMultiSelectField} locationBought
@property {SearchBooleanField} manualCreditHold
@property {SearchMultiSelectField} merchantAccount
@property {SearchStringField} middleName
@property {SearchEnumMultiSelectField} monthlyClosing
@property {SearchBooleanField} onCreditHold
@property {SearchDoubleField} orderedAmount
@property {SearchDateField} orderedDate
@property {SearchEnumMultiSelectField} otherRelationships
@property {SearchDoubleField} overdueBalance
@property {SearchMultiSelectField} parent
@property {SearchMultiSelectField} parentItemsBought
@property {SearchMultiSelectField} parentItemsOrdered
@property {SearchMultiSelectField} partner
@property {SearchLongField} partnerContribution
@property {SearchMultiSelectField} partnerRole
@property {SearchMultiSelectField} partnerTeamMember
@property {SearchStringField} pec
@property {SearchEnumMultiSelectField} permission
@property {SearchStringField} phone
@property {SearchStringField} phoneticName
@property {SearchMultiSelectField} priceLevel
@property {SearchMultiSelectField} pricingGroup
@property {SearchMultiSelectField} pricingItem
@property {SearchBooleanField} printTransactions
@property {SearchDateField} prospectDate
@property {SearchBooleanField} pstExempt
@property {SearchMultiSelectField} receivablesAccount
@property {SearchDateField} reminderDate
@property {SearchStringField} resaleNumber
@property {SearchMultiSelectField} role
@property {SearchMultiSelectField} salesReadiness
@property {SearchMultiSelectField} salesRep
@property {SearchMultiSelectField} salesTeamMember
@property {SearchMultiSelectField} salesTeamRole
@property {SearchStringField} salutation
@property {SearchStringField} shipAddress
@property {SearchBooleanField} shipComplete
@property {SearchMultiSelectField} shippingItem
@property {SearchMultiSelectField} stage
@property {SearchDateField} startDate
@property {SearchStringField} state
@property {SearchMultiSelectField} subsidBought
@property {SearchMultiSelectField} subsidiary
@property {SearchBooleanField} taxable
@property {SearchMultiSelectField} terms
@property {SearchMultiSelectField} territory
@property {SearchStringField} title
@property {SearchDoubleField} unbilledOrders
@property {SearchStringField} url
@property {SearchStringField} vatRegNumber
@property {SearchBooleanField} webLead
@property {SearchStringField} zipCode
@property {SearchCustomFieldList} customFieldList
*/
/*
@class OriginatingLeadSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} accountNumber
@property {SearchColumnStringField[]} address
@property {SearchColumnStringField[]} address1
@property {SearchColumnStringField[]} address2
@property {SearchColumnStringField[]} address3
@property {SearchColumnStringField[]} addressee
@property {SearchColumnStringField[]} addressInternalId
@property {SearchColumnStringField[]} addressLabel
@property {SearchColumnStringField[]} addressPhone
@property {SearchColumnStringField[]} altContact
@property {SearchColumnStringField[]} altEmail
@property {SearchColumnStringField[]} altName
@property {SearchColumnStringField[]} altPhone
@property {SearchColumnStringField[]} attention
@property {SearchColumnBooleanField[]} availableOffline
@property {SearchColumnDoubleField[]} balance
@property {SearchColumnStringField[]} billAddress
@property {SearchColumnStringField[]} billAddress1
@property {SearchColumnStringField[]} billAddress2
@property {SearchColumnStringField[]} billAddress3
@property {SearchColumnStringField[]} billAddressee
@property {SearchColumnStringField[]} billAttention
@property {SearchColumnStringField[]} billCity
@property {SearchColumnEnumSelectField[]} billCountry
@property {SearchColumnStringField[]} billCountryCode
@property {SearchColumnStringField[]} billPhone
@property {SearchColumnStringField[]} billState
@property {SearchColumnStringField[]} billZipCode
@property {SearchColumnStringField[]} buyingReason
@property {SearchColumnStringField[]} buyingTimeFrame
@property {SearchColumnSelectField[]} category
@property {SearchColumnStringField[]} ccCustomerCode
@property {SearchColumnBooleanField[]} ccDefault
@property {SearchColumnDateField[]} ccExpDate
@property {SearchColumnStringField[]} ccHolderName
@property {SearchColumnStringField[]} ccInternalId
@property {SearchColumnStringField[]} ccNumber
@property {SearchColumnSelectField[]} ccState
@property {SearchColumnDateField[]} ccStateFrom
@property {SearchColumnSelectField[]} ccType
@property {SearchColumnStringField[]} city
@property {SearchColumnStringField[]} comments
@property {SearchColumnStringField[]} companyName
@property {SearchColumnDoubleField[]} consolBalance
@property {SearchColumnLongField[]} consolDaysOverdue
@property {SearchColumnDoubleField[]} consolDepositBalance
@property {SearchColumnDoubleField[]} consolOverdueBalance
@property {SearchColumnDoubleField[]} consolUnbilledOrders
@property {SearchColumnStringField[]} contact
@property {SearchColumnDoubleField[]} contribution
@property {SearchColumnDoubleField[]} contributionPrimary
@property {SearchColumnDateField[]} conversionDate
@property {SearchColumnEnumSelectField[]} country
@property {SearchColumnStringField[]} countryCode
@property {SearchColumnEnumSelectField[]} creditHold
@property {SearchColumnBooleanField[]} creditHoldOverride
@property {SearchColumnDoubleField[]} creditLimit
@property {SearchColumnSelectField[]} currency
@property {SearchColumnDateField[]} dateClosed
@property {SearchColumnDateField[]} dateCreated
@property {SearchColumnLongField[]} daysOverdue
@property {SearchColumnDoubleField[]} defaultOrderPriority
@property {SearchColumnDoubleField[]} depositBalance
@property {SearchColumnStringField[]} drAccount
@property {SearchColumnStringField[]} email
@property {SearchColumnEnumSelectField[]} emailPreference
@property {SearchColumnBooleanField[]} emailTransactions
@property {SearchColumnDateField[]} endDate
@property {SearchColumnStringField[]} entityId
@property {SearchColumnLongField[]} entityNumber
@property {SearchColumnSelectField[]} entityStatus
@property {SearchColumnDoubleField[]} estimatedBudget
@property {SearchColumnBooleanField[]} explicitConversion
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnStringField[]} fax
@property {SearchColumnBooleanField[]} faxTransactions
@property {SearchColumnStringField[]} firstName
@property {SearchColumnDateField[]} firstOrderDate
@property {SearchColumnDateField[]} firstSaleDate
@property {SearchColumnStringField[]} fxAccount
@property {SearchColumnDoubleField[]} fxBalance
@property {SearchColumnDoubleField[]} fxConsolBalance
@property {SearchColumnDoubleField[]} fxConsolUnbilledOrders
@property {SearchColumnDoubleField[]} fxUnbilledOrders
@property {SearchColumnBooleanField[]} giveAccess
@property {SearchColumnEnumSelectField[]} globalSubscriptionStatus
@property {SearchColumnStringField[]} groupPricingLevel
@property {SearchColumnBooleanField[]} hasDuplicates
@property {SearchColumnStringField[]} homePhone
@property {SearchColumnSelectField[]} image
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isBudgetApproved
@property {SearchColumnBooleanField[]} isDefaultBilling
@property {SearchColumnBooleanField[]} isDefaultShipping
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnBooleanField[]} isPerson
@property {SearchColumnBooleanField[]} isShipAddress
@property {SearchColumnStringField[]} itemPricingLevel
@property {SearchColumnDoubleField[]} itemPricingUnitPrice
@property {SearchColumnDateField[]} jobEndDate
@property {SearchColumnDateField[]} jobProjectedEnd
@property {SearchColumnDateField[]} jobStartDate
@property {SearchColumnSelectField[]} jobType
@property {SearchColumnEnumSelectField[]} language
@property {SearchColumnDateField[]} lastModifiedDate
@property {SearchColumnStringField[]} lastName
@property {SearchColumnDateField[]} lastOrderDate
@property {SearchColumnDateField[]} lastSaleDate
@property {SearchColumnDateField[]} leadDate
@property {SearchColumnSelectField[]} leadSource
@property {SearchColumnEnumSelectField[]} level
@property {SearchColumnBooleanField[]} manualCreditHold
@property {SearchColumnStringField[]} middleName
@property {SearchColumnStringField[]} mobilePhone
@property {SearchColumnEnumSelectField[]} monthlyClosing
@property {SearchColumnBooleanField[]} onCreditHold
@property {SearchColumnDoubleField[]} overdueBalance
@property {SearchColumnSelectField[]} parent
@property {SearchColumnSelectField[]} partner
@property {SearchColumnDoubleField[]} partnerContribution
@property {SearchColumnStringField[]} partnerRole
@property {SearchColumnSelectField[]} partnerTeamMember
@property {SearchColumnStringField[]} pec
@property {SearchColumnEnumSelectField[]} permission
@property {SearchColumnStringField[]} phone
@property {SearchColumnStringField[]} phoneticName
@property {SearchColumnSelectField[]} prefCCProcessor
@property {SearchColumnSelectField[]} priceLevel
@property {SearchColumnStringField[]} pricingGroup
@property {SearchColumnStringField[]} pricingItem
@property {SearchColumnBooleanField[]} printTransactions
@property {SearchColumnDateField[]} prospectDate
@property {SearchColumnStringField[]} receivablesAccount
@property {SearchColumnLongField[]} reminderDays
@property {SearchColumnStringField[]} resaleNumber
@property {SearchColumnStringField[]} role
@property {SearchColumnStringField[]} salesReadiness
@property {SearchColumnSelectField[]} salesRep
@property {SearchColumnSelectField[]} salesTeamMember
@property {SearchColumnSelectField[]} salesTeamRole
@property {SearchColumnStringField[]} salutation
@property {SearchColumnStringField[]} shipAddress
@property {SearchColumnStringField[]} shipAddress1
@property {SearchColumnStringField[]} shipAddress2
@property {SearchColumnStringField[]} shipAddress3
@property {SearchColumnStringField[]} shipAddressee
@property {SearchColumnStringField[]} shipAttention
@property {SearchColumnStringField[]} shipCity
@property {SearchColumnBooleanField[]} shipComplete
@property {SearchColumnEnumSelectField[]} shipCountry
@property {SearchColumnStringField[]} shipCountryCode
@property {SearchColumnStringField[]} shipPhone
@property {SearchColumnSelectField[]} shippingItem
@property {SearchColumnStringField[]} shipState
@property {SearchColumnStringField[]} shipZip
@property {SearchColumnStringField[]} stage
@property {SearchColumnDateField[]} startDate
@property {SearchColumnEnumSelectField[]} state
@property {SearchColumnSelectField[]} subscription
@property {SearchColumnDateField[]} subscriptionDate
@property {SearchColumnBooleanField[]} subscriptionStatus
@property {SearchColumnSelectField[]} subsidiary
@property {SearchColumnBooleanField[]} taxable
@property {SearchColumnSelectField[]} taxItem
@property {SearchColumnSelectField[]} terms
@property {SearchColumnSelectField[]} territory
@property {SearchColumnStringField[]} title
@property {SearchColumnDoubleField[]} unbilledOrders
@property {SearchColumnStringField[]} url
@property {SearchColumnStringField[]} vatRegNumber
@property {SearchColumnBooleanField[]} webLead
@property {SearchColumnStringField[]} zipCode
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class UnitsTypeSearchBasic @extends SearchRecordBasic
@property {SearchStringField} abbreviation
@property {SearchBooleanField} baseUnit
@property {SearchStringField} conversionRate
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInActive
@property {SearchStringField} name
@property {SearchStringField} pluralAbbreviation
@property {SearchStringField} pluralName
@property {SearchStringField} unitName
*/
/*
@class UnitsTypeSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} abbreviation
@property {SearchColumnBooleanField[]} baseUnit
@property {SearchColumnStringField[]} conversionRate
@property {SearchColumnStringField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInActive
@property {SearchColumnStringField[]} name
@property {SearchColumnStringField[]} pluralAbbreviation
@property {SearchColumnStringField[]} pluralName
@property {SearchColumnStringField[]} unitName
*/
/*
@class CustomListSearchBasic @extends SearchRecordBasic
@property {SearchStringField} description
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchBooleanField} isOrdered
@property {SearchStringField} name
@property {SearchMultiSelectField} owner
@property {SearchStringField} scriptId
*/
/*
@class CustomListSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} description
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnBooleanField[]} isOrdered
@property {SearchColumnStringField[]} name
@property {SearchColumnSelectField[]} owner
@property {SearchColumnStringField[]} scriptId
*/
/*
@class PricingGroupSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchStringField} name
*/
/*
@class PricingGroupSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnStringField[]} name
*/
/*
@class InventoryNumberSearchBasic @extends SearchRecordBasic
@property {SearchDateField} expirationDate
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchStringField} inventoryNumber
@property {SearchBooleanField} isOnHand
@property {SearchMultiSelectField} item
@property {SearchMultiSelectField} location
@property {SearchStringField} memo
@property {SearchDoubleField} quantityAvailable
@property {SearchDoubleField} quantityInTransit
@property {SearchDoubleField} quantityOnHand
@property {SearchDoubleField} quantityOnOrder
@property {SearchCustomFieldList} customFieldList
*/
/*
@class InventoryNumberSearchRowBasic @extends SearchRowBasic
@property {SearchColumnDateField[]} expirationDate
@property {SearchColumnStringField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnStringField[]} inventoryNumber
@property {SearchColumnBooleanField[]} isonhand
@property {SearchColumnSelectField[]} item
@property {SearchColumnSelectField[]} location
@property {SearchColumnStringField[]} memo
@property {SearchColumnDoubleField[]} quantityavailable
@property {SearchColumnDoubleField[]} quantityintransit
@property {SearchColumnDoubleField[]} quantityonhand
@property {SearchColumnDoubleField[]} quantityonorder
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class InventoryNumberBinSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} binNumber
@property {SearchStringField} inventoryNumber
@property {SearchMultiSelectField} location
@property {SearchDoubleField} quantityAvailable
@property {SearchDoubleField} quantityOnHand
*/
/*
@class InventoryNumberBinSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} binNumber
@property {SearchColumnStringField[]} inventoryNumber
@property {SearchColumnSelectField[]} location
@property {SearchColumnDoubleField[]} quantityAvailable
@property {SearchColumnDoubleField[]} quantityOnHand
*/
/*
@class ItemBinNumberSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} binNumber
@property {SearchMultiSelectField} location
@property {SearchDoubleField} quantityAvailable
@property {SearchDoubleField} quantityOnHand
*/
/*
@class ItemBinNumberSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} binNumber
@property {SearchColumnSelectField[]} location
@property {SearchColumnDoubleField[]} quantityAvailable
@property {SearchColumnDoubleField[]} quantityOnHand
*/
/*
@class PricingSearchBasic @extends SearchRecordBasic
@property {SearchBooleanField} assignedPriceLevel
@property {SearchMultiSelectField} currency
@property {SearchMultiSelectField} customer
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchMultiSelectField} item
@property {SearchDoubleField} maximumQuantity
@property {SearchDoubleField} minimumQuantity
@property {SearchMultiSelectField} priceLevel
@property {SearchDoubleField} rate
*/
/*
@class PricingSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} currency
@property {SearchColumnSelectField[]} customer
@property {SearchColumnLongField[]} internalId
@property {SearchColumnSelectField[]} item
@property {SearchColumnDoubleField[]} maximumQuantity
@property {SearchColumnDoubleField[]} minimumQuantity
@property {SearchColumnSelectField[]} priceLevel
@property {SearchColumnStringField[]} quantityRange
@property {SearchColumnSelectField[]} saleUnit
@property {SearchColumnDoubleField[]} unitPrice
*/
/*
@class AppDefinitionSearchBasic @extends SearchRecordBasic
@property {SearchStringField} description
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchStringField} name
*/
/*
@class AppDefinitionSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} description
@property {SearchColumnStringField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnStringField[]} name
*/
/*
@class AppPackageSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} appDefinition
@property {SearchStringField} description
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchStringField} version
*/
/*
@class AppPackageSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} appDefinition
@property {SearchColumnSelectField[]} bundle
@property {SearchColumnStringField[]} description
@property {SearchColumnStringField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnSelectField[]} packageFile
@property {SearchColumnStringField[]} version
*/
/*
@class NexusSearchBasic @extends SearchRecordBasic
@property {SearchEnumMultiSelectField} country
@property {SearchStringField} description
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchMultiSelectField} state
*/
/*
@class NexusSearchRowBasic @extends SearchRowBasic
@property {SearchColumnEnumSelectField[]} country
@property {SearchColumnStringField[]} description
@property {SearchColumnStringField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnSelectField[]} state
*/
/*
@class OtherNameCategorySearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchStringField} name
*/
/*
@class OtherNameCategorySearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnStringField[]} name
*/
/*
@class CustomerMessageSearchBasic @extends SearchRecordBasic
@property {SearchStringField} description
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchStringField} name
@property {SearchBooleanField} preferred
*/
/*
@class CustomerMessageSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} description
@property {SearchColumnStringField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnStringField[]} name
@property {SearchColumnStringField[]} preferred
*/
/*
@class ItemDemandPlanSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} alternateSourceItem
@property {SearchLongField} analysisDuration
@property {SearchDateField} demandDate
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchMultiSelectField} item
@property {SearchDateField} lastModifiedDate
@property {SearchMultiSelectField} location
@property {SearchStringField} memo
@property {SearchLongField} projectionDuration
@property {SearchMultiSelectField} projectionInterval
@property {SearchEnumMultiSelectField} projectionMethod
@property {SearchDateField} projectionStartDate
@property {SearchDoubleField} quantity
@property {SearchMultiSelectField} subsidiary
@property {SearchMultiSelectField} units
@property {SearchCustomFieldList} customFieldList
*/
/*
@class ItemDemandPlanSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} alternateSourceItem
@property {SearchColumnLongField[]} analysisDuration
@property {SearchColumnDateField[]} demandDate
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnSelectField[]} item
@property {SearchColumnDateField[]} lastModifiedDate
@property {SearchColumnSelectField[]} location
@property {SearchColumnStringField[]} memo
@property {SearchColumnLongField[]} projectionDuration
@property {SearchColumnStringField[]} projectionInterval
@property {SearchColumnStringField[]} projectionMethod
@property {SearchColumnDateField[]} projectionStartDate
@property {SearchColumnDoubleField[]} quantity
@property {SearchColumnDoubleField[]} quantityUom
@property {SearchColumnSelectField[]} subsidiary
@property {SearchColumnSelectField[]} units
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class ItemSupplyPlanSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchMultiSelectField} item
@property {SearchDateField} lastModifiedDate
@property {SearchMultiSelectField} location
@property {SearchStringField} memo
@property {SearchBooleanField} orderCreated
@property {SearchDateField} orderDate
@property {SearchMultiSelectField} orderType
@property {SearchDoubleField} quantity
@property {SearchDateField} receiptDate
@property {SearchMultiSelectField} subsidiary
@property {SearchMultiSelectField} units
@property {SearchCustomFieldList} customFieldList
*/
/*
@class ItemSupplyPlanSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnSelectField[]} item
@property {SearchColumnDateField[]} lastModifiedDate
@property {SearchColumnSelectField[]} location
@property {SearchColumnStringField[]} memo
@property {SearchColumnBooleanField[]} orderCreated
@property {SearchColumnDateField[]} orderDate
@property {SearchColumnSelectField[]} orderType
@property {SearchColumnDoubleField[]} quantity
@property {SearchColumnDoubleField[]} quantityUom
@property {SearchColumnDateField[]} receiptDate
@property {SearchColumnSelectField[]} subsidiary
@property {SearchColumnSelectField[]} units
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class CurrencyRateSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} baseCurrency
@property {SearchDateField} effectiveDate
@property {SearchDoubleField} exchangeRate
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchMultiSelectField} transactionCurrency
*/
/*
@class CurrencyRateSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} baseCurrency
@property {SearchColumnDateField[]} effectiveDate
@property {SearchColumnDoubleField[]} exchangeRate
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnSelectField[]} transactionCurrency
*/
/*
@class ItemRevisionSearchBasic @extends SearchRecordBasic
@property {SearchDateField} effectiveDate
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchMultiSelectField} item
@property {SearchStringField} name
@property {SearchDateField} obsoleteDate
*/
/*
@class ItemRevisionSearchRowBasic @extends SearchRowBasic
@property {SearchColumnDateField[]} effectiveDate
@property {SearchColumnStringField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnSelectField[]} item
@property {SearchColumnStringField[]} memo
@property {SearchColumnStringField[]} name
@property {SearchColumnDateField[]} obsoleteDate
*/
/*
@class CouponCodeSearchBasic @extends SearchRecordBasic
@property {SearchStringField} code
@property {SearchDateField} dateSent
@property {SearchLongField} id
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchMultiSelectField} promotion
@property {SearchMultiSelectField} recipient
@property {SearchLongField} useCount
@property {SearchBooleanField} used
*/
/*
@class CouponCodeSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} code
@property {SearchColumnDateField[]} dateSent
@property {SearchColumnLongField[]} id
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnStringField[]} promotion
@property {SearchColumnStringField[]} recipient
@property {SearchColumnLongField[]} useCount
@property {SearchColumnBooleanField[]} used
*/
/*
@class PayrollItemSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchMultiSelectField} expenseAccount
@property {SearchEnumMultiSelectField} itemTypeNoHierarchy
@property {SearchMultiSelectField} liabilityAccount
@property {SearchStringField} name
@property {SearchMultiSelectField} subsidiary
@property {SearchMultiSelectField} vendor
@property {SearchCustomFieldList} customFieldList
*/
/*
@class PayrollItemSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnStringField[]} expenseAccount
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnStringField[]} itemTypeNoHierarchy
@property {SearchColumnStringField[]} liabilityAccount
@property {SearchColumnStringField[]} name
@property {SearchColumnStringField[]} vendor
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class ManufacturingCostTemplateSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchMultiSelectField} item
@property {SearchStringField} memo
@property {SearchStringField} name
@property {SearchMultiSelectField} subsidiary
@property {SearchCustomFieldList} customFieldList
*/
/*
@class ManufacturingCostTemplateSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnSelectField[]} item
@property {SearchColumnStringField[]} memo
@property {SearchColumnStringField[]} name
@property {SearchColumnSelectField[]} subsidiary
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class ManufacturingRoutingSearchBasic @extends SearchRecordBasic
@property {SearchBooleanField} autoCalculateLag
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isDefault
@property {SearchBooleanField} isInactive
@property {SearchMultiSelectField} subsidiary
@property {SearchMultiSelectField} item
@property {SearchDoubleField} lagAmount
@property {SearchEnumMultiSelectField} lagType
@property {SearchStringField} lagUnits
@property {SearchMultiSelectField} location
@property {SearchMultiSelectField} manufacturingCostTemplate
@property {SearchMultiSelectField} manufacturingWorkCenter
@property {SearchStringField} memo
@property {SearchStringField} name
@property {SearchStringField} operationName
@property {SearchDoubleField} operationYield
@property {SearchDoubleField} runRate
@property {SearchLongField} sequence
@property {SearchDoubleField} setupTime
@property {SearchCustomFieldList} customFieldList
*/
/*
@class ManufacturingRoutingSearchRowBasic @extends SearchRowBasic
@property {SearchColumnBooleanField[]} autoCalculateLag
@property {SearchColumnStringField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isDefault
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnSelectField[]} subsidiary
@property {SearchColumnSelectField[]} item
@property {SearchColumnDoubleField[]} lagAmount
@property {SearchColumnEnumSelectField[]} lagType
@property {SearchColumnStringField[]} lagUnits
@property {SearchColumnSelectField[]} location
@property {SearchColumnSelectField[]} manufacturingCostTemplate
@property {SearchColumnSelectField[]} manufacturingWorkCenter
@property {SearchColumnStringField[]} memo
@property {SearchColumnStringField[]} name
@property {SearchColumnStringField[]} operationName
@property {SearchColumnDoubleField[]} operationYield
@property {SearchColumnDoubleField[]} runRate
@property {SearchColumnLongField[]} sequence
@property {SearchColumnDoubleField[]} setupTime
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class ManufacturingOperationTaskSearchBasic @extends SearchRecordBasic
@property {SearchDoubleField} actualRunTime
@property {SearchDoubleField} actualSetupTime
@property {SearchDoubleField} completedQuantity
@property {SearchDateField} endDate
@property {SearchDoubleField} estimatedWork
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchLongField} id
@property {SearchDoubleField} inputQuantity
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchLongField} laborResources
@property {SearchDoubleField} lagAmount
@property {SearchEnumMultiSelectField} lagType
@property {SearchStringField} lagUnits
@property {SearchLongField} machineResources
@property {SearchMultiSelectField} manufacturingCostTemplate
@property {SearchMultiSelectField} manufacturingWorkCenter
@property {SearchStringField} name
@property {SearchDoubleField} order
@property {SearchMultiSelectField} predecessor
@property {SearchDoubleField} remainingQuantity
@property {SearchDoubleField} runRate
@property {SearchDoubleField} runTime
@property {SearchLongField} sequence
@property {SearchDoubleField} setupTime
@property {SearchDateField} startDate
@property {SearchMultiSelectField} status
@property {SearchMultiSelectField} workOrder
@property {SearchCustomFieldList} customFieldList
*/
/*
@class ManufacturingOperationTaskSearchRowBasic @extends SearchRowBasic
@property {SearchColumnDoubleField[]} actualRunTime
@property {SearchColumnDoubleField[]} actualSetupTime
@property {SearchColumnDoubleField[]} completedQuantity
@property {SearchColumnDateField[]} endDate
@property {SearchColumnDoubleField[]} estimatedWork
@property {SearchColumnStringField[]} externalId
@property {SearchColumnLongField[]} id
@property {SearchColumnDoubleField[]} inputQuantity
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnLongField[]} laborResources
@property {SearchColumnDoubleField[]} lagAmount
@property {SearchColumnEnumSelectField[]} lagType
@property {SearchColumnStringField[]} lagUnits
@property {SearchColumnLongField[]} machineResources
@property {SearchColumnSelectField[]} manufacturingCostTemplate
@property {SearchColumnSelectField[]} manufacturingWorkCenter
@property {SearchColumnStringField[]} message
@property {SearchColumnStringField[]} name
@property {SearchColumnDoubleField[]} order
@property {SearchColumnSelectField[]} predecessor
@property {SearchColumnStringField[]} predecessorType
@property {SearchColumnDoubleField[]} remainingQuantity
@property {SearchColumnDoubleField[]} runRate
@property {SearchColumnDoubleField[]} runTime
@property {SearchColumnLongField[]} sequence
@property {SearchColumnDoubleField[]} setupTime
@property {SearchColumnDateField[]} startDate
@property {SearchColumnSelectField[]} status
@property {SearchColumnStringField[]} workOrder
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class ResourceAllocationSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} allocationType
@property {SearchEnumMultiSelectField} allocationUnit
@property {SearchEnumMultiSelectField} approvalStatus
@property {SearchMultiSelectField} customer
@property {SearchDateField} endDate
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchMultiSelectField} nextApprover
@property {SearchStringField} notes
@property {SearchDoubleField} numberHours
@property {SearchDoubleField} percentOfTime
@property {SearchMultiSelectField} project
@property {SearchMultiSelectField} requestedBy
@property {SearchMultiSelectField} resource
@property {SearchDateField} startDate
@property {SearchCustomFieldList} customFieldList
*/
/*
@class ResourceAllocationSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} allocationType
@property {SearchColumnEnumSelectField[]} allocationUnit
@property {SearchColumnEnumSelectField[]} approvalStatus
@property {SearchColumnSelectField[]} project
@property {SearchColumnSelectField[]} customer
@property {SearchColumnDateField[]} endDate
@property {SearchColumnStringField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnSelectField[]} nextApprover
@property {SearchColumnStringField[]} notes
@property {SearchColumnDoubleField[]} numberHours
@property {SearchColumnDoubleField[]} percentOfTime
@property {SearchColumnSelectField[]} requestedBy
@property {SearchColumnSelectField[]} resource
@property {SearchColumnDateField[]} startDate
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class CustomSearchJoin @extends SearchRowBasic
@property {CustomizationRef} customizationRef
@property {SearchRecordBasic} searchRecordBasic
*/
/*
@class CustomSearchRowBasic @extends SearchRowBasic
@property {CustomizationRef} customizationRef
@property {SearchRowBasic} searchRowBasic
*/
/*
@class ChargeSearchBasic @extends SearchRecordBasic
@property {SearchDoubleField} amount
@property {SearchMultiSelectField} billingItem
@property {SearchMultiSelectField} billTo
@property {SearchDateField} chargeDate
@property {SearchMultiSelectField} class
@property {SearchMultiSelectField} chargeType
@property {SearchDateField} createdDate
@property {SearchMultiSelectField} currency
@property {SearchMultiSelectField} department
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchMultiSelectField} location
@property {SearchDateField} modifiedDate
@property {RecordRef} postingPeriod
@property {PostingPeriodDate} postingPeriodRelative
@property {SearchDoubleField} quantity
@property {SearchDoubleField} rate
@property {SearchMultiSelectField} rule
@property {SearchStringField} runId
@property {SearchLongField} salesOrder
@property {SearchEnumMultiSelectField} stage
@property {SearchEnumMultiSelectField} use
@property {SearchCustomFieldList} customFieldList
*/
/*
@class ChargeSearchRowBasic @extends SearchRowBasic
@property {SearchColumnDoubleField[]} amount
@property {SearchColumnSelectField[]} billingItem
@property {SearchColumnSelectField[]} billTo
@property {SearchColumnDateField[]} chargeDate
@property {SearchColumnSelectField[]} class
@property {SearchColumnSelectField[]} chargeType
@property {SearchColumnDateField[]} createdDate
@property {SearchColumnSelectField[]} currency
@property {SearchColumnSelectField[]} department
@property {SearchColumnStringField[]} description
@property {SearchColumnStringField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnSelectField[]} location
@property {SearchColumnDateField[]} modifiedDate
@property {SearchColumnStringField[]} postingPeriod
@property {SearchColumnStringField[]} quantity
@property {SearchColumnStringField[]} rate
@property {SearchColumnSelectField[]} rule
@property {SearchColumnStringField[]} runId
@property {SearchColumnStringField[]} salesOrder
@property {SearchColumnEnumSelectField[]} stage
@property {SearchColumnEnumSelectField[]} use
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class BillingScheduleSearchBasic @extends SearchRecordBasic
@property {SearchBooleanField} applyToSubtotal
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchEnumMultiSelectField} frequency
@property {SearchBooleanField} inArrears
@property {SearchDoubleField} initialAmount
@property {SearchMultiSelectField} initialTerms
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isInactive
@property {SearchBooleanField} isPublic
@property {SearchStringField} name
@property {SearchLongField} recurrenceCount
@property {SearchMultiSelectField} recurrenceTerms
@property {SearchLongField} repeatEvery
@property {SearchEnumMultiSelectField} type
*/
/*
@class BillingScheduleSearchRowBasic @extends SearchRowBasic
@property {SearchColumnBooleanField[]} applyToSubtotal
@property {SearchColumnStringField[]} externalId
@property {SearchColumnEnumSelectField[]} frequency
@property {SearchColumnBooleanField[]} inArrears
@property {SearchColumnStringField[]} initialAmount
@property {SearchColumnStringField[]} initialTerms
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} isInactive
@property {SearchColumnBooleanField[]} isPublic
@property {SearchColumnStringField[]} name
@property {SearchColumnLongField[]} recurrenceCount
@property {SearchColumnStringField[]} recurrenceTerms
@property {SearchColumnLongField[]} repeatEvery
@property {SearchColumnEnumSelectField[]} type
*/
/*
@class GlobalAccountMappingSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} accountingBook
@property {SearchMultiSelectField} class
@property {SearchMultiSelectCustomField} customDimension
@property {SearchMultiSelectField} department
@property {SearchMultiSelectField} destinationAccount
@property {SearchDateField} effectiveDate
@property {SearchDateField} endDate
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchMultiSelectField} location
@property {SearchMultiSelectField} sourceAccount
@property {SearchMultiSelectField} subsidiary
@property {SearchCustomFieldList} customFieldList
*/
/*
@class GlobalAccountMappingSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} accountingBook
@property {SearchColumnSelectField[]} class
@property {SearchColumnSelectCustomField[]} customDimension
@property {SearchColumnSelectField[]} department
@property {SearchColumnSelectField[]} destinationAccount
@property {SearchColumnDateField[]} effectiveDate
@property {SearchColumnDateField[]} endDate
@property {SearchColumnStringField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnSelectField[]} location
@property {SearchColumnSelectField[]} sourceAccount
@property {SearchColumnSelectField[]} subsidiary
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class ItemAccountMappingSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} accountingBook
@property {SearchMultiSelectField} class
@property {SearchMultiSelectCustomField} customDimension
@property {SearchMultiSelectField} department
@property {SearchMultiSelectField} destinationAccount
@property {SearchDateField} effectiveDate
@property {SearchDateField} endDate
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchEnumMultiSelectField} itemAccount
@property {SearchMultiSelectField} location
@property {SearchMultiSelectField} sourceAccount
@property {SearchMultiSelectField} subsidiary
@property {SearchCustomFieldList} customFieldList
*/
/*
@class ItemAccountMappingSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} accountingBook
@property {SearchColumnSelectField[]} class
@property {SearchColumnSelectCustomField[]} customDimension
@property {SearchColumnSelectField[]} department
@property {SearchColumnSelectField[]} destinationAccount
@property {SearchColumnDateField[]} effectiveDate
@property {SearchColumnDateField[]} endDate
@property {SearchColumnStringField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnEnumSelectField[]} itemAccount
@property {SearchColumnSelectField[]} location
@property {SearchColumnSelectField[]} sourceAccount
@property {SearchColumnSelectField[]} subsidiary
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class TimeEntrySearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} approvalStatus
@property {SearchBooleanField} billable
@property {SearchMultiSelectField} billingClass
@property {SearchBooleanField} billingStatus
@property {SearchMultiSelectField} class
@property {SearchMultiSelectField} customer
@property {SearchDateField} date
@property {SearchDateField} dateCreated
@property {SearchMultiSelectField} department
@property {SearchDoubleField} duration
@property {SearchMultiSelectField} employee
@property {SearchBooleanField} exempt
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} isCharged
@property {SearchMultiSelectField} item
@property {SearchDateField} lastModified
@property {SearchMultiSelectField} location
@property {SearchStringField} memo
@property {SearchMultiSelectField} nextApprover
@property {SearchBooleanField} paidByPayroll
@property {SearchBooleanField} paidExternally
@property {SearchMultiSelectField} payItem
@property {SearchBooleanField} productive
@property {SearchMultiSelectField} subsidiary
@property {SearchEnumMultiSelectField} type
@property {SearchBooleanField} utilized
@property {SearchCustomFieldList} customFieldList
*/
/*
@class TimeEntrySearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} approvalStatus
@property {SearchColumnSelectField[]} billingClass
@property {SearchColumnStringField[]} billingStatus
@property {SearchColumnStringField[]} break
@property {SearchColumnSelectField[]} caseTaskEvent
@property {SearchColumnSelectField[]} class
@property {SearchColumnSelectField[]} classNoHierarchy
@property {SearchColumnSelectField[]} customer
@property {SearchColumnDateField[]} date
@property {SearchColumnDateField[]} dateCreated
@property {SearchColumnSelectField[]} department
@property {SearchColumnSelectField[]} departmentNoHierarchy
@property {SearchColumnDoubleField[]} durationDecimal
@property {SearchColumnSelectField[]} employee
@property {SearchColumnDateField[]} endTime
@property {SearchColumnStringField[]} externalId
@property {SearchColumnStringField[]} hours
@property {SearchColumnLongField[]} internalId
@property {SearchColumnBooleanField[]} isBillable
@property {SearchColumnBooleanField[]} isExempt
@property {SearchColumnBooleanField[]} isProductive
@property {SearchColumnBooleanField[]} isUtilized
@property {SearchColumnStringField[]} item
@property {SearchColumnDateField[]} lastModified
@property {SearchColumnSelectField[]} location
@property {SearchColumnSelectField[]} locationNoHierarchy
@property {SearchColumnStringField[]} memo
@property {SearchColumnSelectField[]} nextApprover
@property {SearchColumnBooleanField[]} paidExternally
@property {SearchColumnSelectField[]} payItem
@property {SearchColumnDateField[]} payrollDate
@property {SearchColumnDoubleField[]} rate
@property {SearchColumnDateField[]} startTime
@property {SearchColumnStringField[]} subsidiary
@property {SearchColumnStringField[]} subsidiaryNoHierarchy
@property {SearchColumnStringField[]} timeSheet
@property {SearchColumnEnumSelectField[]} type
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class TimeSheetSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} approvalStatus
@property {SearchMultiSelectField} employee
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchLongField} id
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchDateField} timeSheetDate
@property {SearchDoubleField} totalHours
@property {SearchCustomFieldList} customFieldList
*/
/*
@class TimeSheetSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} approvalStatus
@property {SearchColumnSelectField[]} employee
@property {SearchColumnDateField[]} endDate
@property {SearchColumnStringField[]} externalId
@property {SearchColumnLongField[]} id
@property {SearchColumnLongField[]} internalId
@property {SearchColumnDateField[]} startDate
@property {SearchColumnStringField[]} totalHours
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class AccountingTransactionSearchBasic @extends SearchRecordBasic
@property {SearchMultiSelectField} account
@property {SearchMultiSelectField} accountingBook
@property {SearchMultiSelectField} accountType
@property {SearchDoubleField} altSalesAmount
@property {SearchDoubleField} altSalesNetAmount
@property {SearchDoubleField} amount
@property {SearchBooleanField} bookSpecificTransaction
@property {SearchMultiSelectField} catchUpPeriod
@property {SearchDoubleField} creditAmount
@property {SearchDoubleField} debitAmount
@property {SearchBooleanField} deferRevRec
@property {SearchDoubleField} exchangeRate
@property {SearchDoubleField} grossAmount
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} multiSubsidiary
@property {SearchDoubleField} netAmount
@property {SearchBooleanField} posting
@property {SearchDoubleField} quantityRevCommitted
@property {SearchDoubleField} recognizedRevenue
@property {SearchEnumMultiSelectField} revCommitStatus
@property {SearchEnumMultiSelectField} revenueStatus
@property {SearchDateField} revRecEndDate
@property {SearchBooleanField} revRecOnRevCommitment
@property {SearchDateField} revRecStartDate
@property {SearchMultiSelectField} subsidiary
@property {SearchBooleanField} tranIsVsoeBundle
@property {SearchEnumMultiSelectField} type
@property {SearchDoubleField} vsoeAllocation
*/
/*
@class AccountingTransactionSearchRowBasic @extends SearchRowBasic
@property {SearchColumnSelectField[]} account
@property {SearchColumnSelectField[]} accountingBook
@property {SearchColumnStringField[]} accountType
@property {SearchColumnDoubleField[]} altSalesAmount
@property {SearchColumnDoubleField[]} altSalesNetAmount
@property {SearchColumnDoubleField[]} amount
@property {SearchColumnStringField[]} baseCurrency
@property {SearchColumnStringField[]} catchUpPeriod
@property {SearchColumnDoubleField[]} creditAmount
@property {SearchColumnDateField[]} dateCreated
@property {SearchColumnDoubleField[]} debitAmount
@property {SearchColumnBooleanField[]} deferRevRec
@property {SearchColumnDoubleField[]} exchangeRate
@property {SearchColumnDoubleField[]} fxAmount
@property {SearchColumnDoubleField[]} grossAmount
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnDateField[]} lastModifiedDate
@property {SearchColumnBooleanField[]} multiSubsidiary
@property {SearchColumnDoubleField[]} netAmount
@property {SearchColumnBooleanField[]} posting
@property {SearchColumnDoubleField[]} quantityRevCommitted
@property {SearchColumnDoubleField[]} recognizedRevenue
@property {SearchColumnEnumSelectField[]} revCommitStatus
@property {SearchColumnEnumSelectField[]} revenueStatus
@property {SearchColumnDateField[]} revRecEndDate
@property {SearchColumnBooleanField[]} revRecOnRevCommitment
@property {SearchColumnDateField[]} revRecStartDate
@property {SearchColumnSelectField[]} subsidiary
@property {SearchColumnBooleanField[]} tranIsVsoeBundle
@property {SearchColumnDoubleField[]} vsoeAllocation
*/
/*
@class AddressSearchBasic @extends SearchRecordBasic
@property {SearchStringField} address
@property {SearchStringField} address1
@property {SearchStringField} address2
@property {SearchStringField} address3
@property {SearchStringField} addressee
@property {SearchStringField} attention
@property {SearchStringField} city
@property {SearchEnumMultiSelectField} country
@property {SearchStringField} countryCode
@property {SearchMultiSelectField} externalId
@property {SearchStringField} externalIdString
@property {SearchMultiSelectField} internalId
@property {SearchLongField} internalIdNumber
@property {SearchBooleanField} override
@property {SearchStringField} phone
@property {SearchStringField} state
@property {SearchStringField} zip
@property {SearchCustomFieldList} customFieldList
*/
/*
@class AddressSearchRowBasic @extends SearchRowBasic
@property {SearchColumnStringField[]} address
@property {SearchColumnStringField[]} address1
@property {SearchColumnStringField[]} address2
@property {SearchColumnStringField[]} address3
@property {SearchColumnStringField[]} addressee
@property {SearchColumnStringField[]} attention
@property {SearchColumnStringField[]} city
@property {SearchColumnEnumSelectField[]} country
@property {SearchColumnStringField[]} countryCode
@property {SearchColumnStringField[]} externalId
@property {SearchColumnSelectField[]} internalId
@property {SearchColumnBooleanField[]} override
@property {SearchColumnStringField[]} phone
@property {SearchColumnStringField[]} state
@property {SearchColumnStringField[]} zip
@property {SearchColumnCustomFieldList} customFieldList
*/
/*
@class CalendarEventAccessLevel @extends SearchRowBasic
*/
/*
@class CalendarEventAttendeeAttendance @extends SearchRowBasic
*/
/*
@class CalendarEventReminderMinutes @extends SearchRowBasic
*/
/*
@class CalendarEventReminderType @extends SearchRowBasic
*/
/*
@class CalendarEventStatus @extends SearchRowBasic
*/
/*
@class TaskPriority @extends SearchRowBasic
*/
/*
@class TaskReminderMinutes @extends SearchRowBasic
*/
/*
@class TaskReminderType @extends SearchRowBasic
*/
/*
@class TaskStatus @extends SearchRowBasic
*/
/*
@class PhoneCallPriority @extends SearchRowBasic
*/
/*
@class PhoneCallReminderMinutes @extends SearchRowBasic
*/
/*
@class PhoneCallReminderType @extends SearchRowBasic
*/
/*
@class PhoneCallStatus @extends SearchRowBasic
*/
/*
@class ProjectTaskPriority @extends SearchRowBasic
*/
/*
@class ProjectTaskStatus @extends SearchRowBasic
*/
/*
@class ProjectTaskConstraintType @extends SearchRowBasic
*/
/*
@class ProjectTaskPredecessorPredecessorType @extends SearchRowBasic
*/
/*
@class ResourceAllocationAllocationUnit @extends SearchRowBasic
*/
/*
@class ResourceAllocationApprovalStatus @extends SearchRowBasic
*/
/*
@class CalendarEvent @extends Record
@property {RecordRef} company
@property {RecordRef} contact
@property {RecordRef} supportCase
@property {RecordRef} transaction
@property {integer} period
@property {RecurrenceFrequency} frequency
@property {RecurrenceDowMaskList} recurrenceDowMaskList
@property {RecurrenceDow} recurrenceDow
@property {RecurrenceDowim} recurrenceDowim
@property {dateTime} seriesStartDate
@property {dateTime} endByDate
@property {boolean} noEndDate
@property {boolean} sendEmail
@property {RecordRef} customForm
@property {String} title
@property {String} recurrence
@property {String} location
@property {dateTime} startDate
@property {boolean} allDayEvent
@property {boolean} timedEvent
@property {CalendarEventReminderType} reminderType
@property {CalendarEventReminderMinutes} reminderMinutes
@property {CalendarEventStatus} status
@property {CalendarEventAccessLevel} accessLevel
@property {RecordRef} organizer
@property {String} message
@property {dateTime} createdDate
@property {dateTime} endDate
@property {ExclusionDateList} exclusionDateList
@property {dateTime} lastModifiedDate
@property {RecordRef} owner
@property {CalendarEventAttendeeList} attendeeList
@property {CalendarEventResourceList} resourceList
@property {CalendarEventTimeItemList} timeItemList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class ExclusionDateList @extends Record
@property {dateTime[]} exclusionDate
*/
/*
@class CalendarEventAttendee @extends Record
@property {boolean} sendEmail
@property {RecordRef} attendee
@property {CalendarEventAttendeeResponse} response
@property {CalendarEventAttendeeAttendance} attendance
*/
/*
@class CalendarEventAttendeeList @extends Record
@property {CalendarEventAttendee[]} attendee
@property {boolean} replaceAll
*/
/*
@class CalendarEventResource @extends Record
@property {RecordRef} resource
@property {String} location
*/
/*
@class CalendarEventResourceList @extends Record
@property {CalendarEventResource[]} resource
@property {boolean} replaceAll
*/
/*
@class CalendarEventSearch @extends SearchRecord
@property {CalendarEventSearchBasic} basic
@property {EntitySearchBasic} attendeeJoin
@property {ContactSearchBasic} attendeeContactJoin
@property {CustomerSearchBasic} attendeeCustomerJoin
@property {SupportCaseSearchBasic} caseJoin
@property {FileSearchBasic} fileJoin
@property {OpportunitySearchBasic} opportunityJoin
@property {OriginatingLeadSearchBasic} originatingLeadJoin
@property {TimeBillSearchBasic} timeJoin
@property {TransactionSearchBasic} transactionJoin
@property {EmployeeSearchBasic} userJoin
@property {NoteSearchBasic} userNotesJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class CalendarEventSearchAdvanced @extends SearchRecord
@property {CalendarEventSearch} criteria
@property {CalendarEventSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class CalendarEventSearchRow @extends SearchRow
@property {CalendarEventSearchRowBasic} basic
@property {EntitySearchRowBasic} attendeeJoin
@property {ContactSearchRowBasic} attendeeContactJoin
@property {CustomerSearchRowBasic} attendeeCustomerJoin
@property {SupportCaseSearchRowBasic} caseJoin
@property {FileSearchRowBasic} fileJoin
@property {OpportunitySearchRowBasic} opportunityJoin
@property {OriginatingLeadSearchRowBasic} originatingLeadJoin
@property {TimeBillSearchRowBasic} timeJoin
@property {TransactionSearchRowBasic} transactionJoin
@property {EmployeeSearchRowBasic} userJoin
@property {NoteSearchRowBasic} userNotesJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class Task @extends Record
@property {RecordRef} company
@property {RecordRef} contact
@property {RecordRef} supportCase
@property {RecordRef} transaction
@property {RecordRef} milestone
@property {RecordRef} customForm
@property {String} title
@property {RecordRef} assigned
@property {boolean} sendEmail
@property {boolean} timedEvent
@property {Duration} estimatedTime
@property {Duration} estimatedTimeOverride
@property {Duration} actualTime
@property {Duration} timeRemaining
@property {float} percentTimeComplete
@property {float} percentComplete
@property {RecordRef} parent
@property {dateTime} startDate
@property {dateTime} endDate
@property {dateTime} dueDate
@property {dateTime} completedDate
@property {TaskPriority} priority
@property {TaskStatus} status
@property {String} message
@property {boolean} accessLevel
@property {TaskReminderType} reminderType
@property {TaskReminderMinutes} reminderMinutes
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} owner
@property {TaskContactList} contactList
@property {TaskTimeItemList} timeItemList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class TaskContact @extends Record
@property {RecordRef} company
@property {RecordRef} contact
*/
/*
@class TaskContactList @extends Record
@property {TaskContact[]} contact
@property {boolean} replaceAll
*/
/*
@class TaskSearch @extends SearchRecord
@property {TaskSearchBasic} basic
@property {SupportCaseSearchBasic} caseJoin
@property {CustomerSearchBasic} companyCustomerJoin
@property {ContactSearchBasic} contactJoin
@property {EmployeeSearchBasic} employeeJoin
@property {FileSearchBasic} fileJoin
@property {JobSearchBasic} jobJoin
@property {OpportunitySearchBasic} opportunityJoin
@property {OriginatingLeadSearchBasic} originatingLeadJoin
@property {TimeBillSearchBasic} timeJoin
@property {TransactionSearchBasic} transactionJoin
@property {EmployeeSearchBasic} userJoin
@property {NoteSearchBasic} userNotesJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class TaskSearchAdvanced @extends SearchRecord
@property {TaskSearch} criteria
@property {TaskSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class TaskSearchRow @extends SearchRow
@property {TaskSearchRowBasic} basic
@property {SupportCaseSearchRowBasic} caseJoin
@property {CustomerSearchRowBasic} companyCustomerJoin
@property {ContactSearchRowBasic} contactJoin
@property {EmployeeSearchRowBasic} employeeJoin
@property {FileSearchRowBasic} fileJoin
@property {JobSearchRowBasic} jobJoin
@property {OpportunitySearchRowBasic} opportunityJoin
@property {OriginatingLeadSearchRowBasic} originatingLeadJoin
@property {TimeBillSearchRowBasic} timeJoin
@property {TransactionSearchRowBasic} transactionJoin
@property {EmployeeSearchRowBasic} userJoin
@property {NoteSearchRowBasic} userNotesJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class PhoneCall @extends Record
@property {String} message
@property {RecordRef} company
@property {RecordRef} contact
@property {RecordRef} supportCase
@property {RecordRef} transaction
@property {RecordRef} milestone
@property {RecordRef} customForm
@property {String} title
@property {RecordRef} owner
@property {RecordRef} assigned
@property {boolean} sendEmail
@property {dateTime} startDate
@property {dateTime} endDate
@property {boolean} timedEvent
@property {dateTime} completedDate
@property {String} phone
@property {PhoneCallStatus} status
@property {PhoneCallPriority} priority
@property {boolean} accessLevel
@property {PhoneCallReminderType} reminderType
@property {PhoneCallReminderMinutes} reminderMinutes
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {PhoneCallContactList} contactList
@property {PhoneCallTimeItemList} timeItemList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class PhoneCallContact @extends Record
@property {RecordRef} company
@property {RecordRef} contact
@property {String} phone
@property {String} email
*/
/*
@class PhoneCallContactList @extends Record
@property {PhoneCallContact[]} contact
@property {boolean} replaceAll
*/
/*
@class PhoneCallSearch @extends SearchRecord
@property {PhoneCallSearchBasic} basic
@property {SupportCaseSearchBasic} caseJoin
@property {CustomerSearchBasic} companyCustomerJoin
@property {ContactSearchBasic} contactJoin
@property {EmployeeSearchBasic} employeeJoin
@property {FileSearchBasic} fileJoin
@property {OpportunitySearchBasic} opportunityJoin
@property {OriginatingLeadSearchBasic} originatingLeadJoin
@property {EntitySearchBasic} participantJoin
@property {TransactionSearchBasic} transactionJoin
@property {EmployeeSearchBasic} userJoin
@property {NoteSearchBasic} userNotesJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class PhoneCallSearchAdvanced @extends SearchRecord
@property {PhoneCallSearch} criteria
@property {PhoneCallSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class PhoneCallSearchRow @extends SearchRow
@property {PhoneCallSearchRowBasic} basic
@property {SupportCaseSearchRowBasic} caseJoin
@property {CustomerSearchRowBasic} companyCustomerJoin
@property {ContactSearchRowBasic} contactJoin
@property {EmployeeSearchRowBasic} employeeJoin
@property {FileSearchRowBasic} fileJoin
@property {OpportunitySearchRowBasic} opportunityJoin
@property {OriginatingLeadSearchRowBasic} originatingLeadJoin
@property {EntitySearchRowBasic} participantJoin
@property {TransactionSearchRowBasic} transactionJoin
@property {EmployeeSearchRowBasic} userJoin
@property {NoteSearchRowBasic} userNotesJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class ProjectTask @extends Record
@property {RecordRef} customForm
@property {RecordRef} eventId
@property {float} percentTimeComplete
@property {String} title
@property {RecordRef} company
@property {RecordRef} contact
@property {RecordRef} order
@property {RecordRef} owner
@property {RecordRef} parent
@property {RecordRef} priority
@property {float} estimatedWork
@property {float} estimatedWorkBaseline
@property {ProjectTaskConstraintType} constraintType
@property {dateTime} startDate
@property {dateTime} startDateBaseline
@property {dateTime} endDate
@property {dateTime} finishByDate
@property {dateTime} endDateBaseline
@property {float} actualWork
@property {float} remainingWork
@property {String} message
@property {boolean} isMilestone
@property {String} isOnCriticalPath
@property {float} slackMinutes
@property {dateTime} lateEnd
@property {dateTime} lateStart
@property {ProjectTaskStatus} status
@property {boolean} nonBillableTask
@property {ProjectTaskAssigneeList} assigneeList
@property {ProjectTaskPredecessorList} predecessorList
@property {ProjectTaskTimeItemList} timeItemList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class ProjectTaskPredecessor @extends Record
@property {RecordRef} task
@property {ProjectTaskPredecessorPredecessorType} type
@property {float} lagDays
@property {dateTime} startDate
@property {dateTime} endDate
*/
/*
@class ProjectTaskPredecessorList @extends Record
@property {ProjectTaskPredecessor[]} projectTaskPredecessor
@property {boolean} replaceAll
*/
/*
@class ProjectTaskAssignee @extends Record
@property {RecordRef} resource
@property {float} units
@property {RecordRef} serviceItem
@property {float} estimatedWork
@property {float} unitCost
@property {float} unitPrice
@property {float} cost
@property {float} price
*/
/*
@class ProjectTaskAssigneeList @extends Record
@property {ProjectTaskAssignee[]} projectTaskAssignee
@property {boolean} replaceAll
*/
/*
@class ProjectTaskSearch @extends SearchRecord
@property {ProjectTaskSearchBasic} basic
@property {JobSearchBasic} jobJoin
@property {ProjectTaskSearchBasic} predecessorJoin
@property {ProjectTaskAssignmentSearchBasic} projectTaskAssignmentJoin
@property {ProjectTaskSearchBasic} successorJoin
@property {TimeBillSearchBasic} timeJoin
@property {EmployeeSearchBasic} userJoin
@property {NoteSearchBasic} userNotesJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class ProjectTaskSearchAdvanced @extends SearchRecord
@property {ProjectTaskSearch} criteria
@property {ProjectTaskSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class ProjectTaskSearchRow @extends SearchRow
@property {ProjectTaskSearchRowBasic} basic
@property {JobSearchRowBasic} jobJoin
@property {ProjectTaskSearchRowBasic} predecessorJoin
@property {ProjectTaskAssignmentSearchRowBasic} projectTaskAssignmentJoin
@property {ProjectTaskSearchRowBasic} successorJoin
@property {TimeBillSearchRowBasic} timeJoin
@property {EmployeeSearchRowBasic} userJoin
@property {NoteSearchRowBasic} userNotesJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class PhoneCallTimeItemList @extends SearchRow
@property {TimeItem[]} timeItem
@property {boolean} replaceAll
*/
/*
@class CalendarEventTimeItemList @extends SearchRow
@property {TimeItem[]} timeItem
@property {boolean} replaceAll
*/
/*
@class TaskTimeItemList @extends SearchRow
@property {TimeItem[]} timeItem
@property {boolean} replaceAll
*/
/*
@class ProjectTaskTimeItemList @extends SearchRow
@property {TimeItem[]} timeItem
@property {boolean} replaceAll
*/
/*
@class ResourceAllocation @extends Record
@property {RecordRef} requestedby
@property {ResourceAllocationApprovalStatus} approvalStatus
@property {RecordRef} nextApprover
@property {RecordRef} allocationResource
@property {RecordRef} project
@property {String} notes
@property {dateTime} startDate
@property {dateTime} endDate
@property {float} allocationAmount
@property {ResourceAllocationAllocationUnit} allocationUnit
@property {float} numberHours
@property {float} percentOfTime
@property {RecordRef} allocationType
@property {RecordRef} customForm
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class ResourceAllocationSearch @extends SearchRecord
@property {ResourceAllocationSearchBasic} basic
@property {CustomerSearchBasic} customerJoin
@property {EmployeeSearchBasic} employeeJoin
@property {JobSearchBasic} jobJoin
@property {EntitySearchBasic} requestedByJoin
@property {EntitySearchBasic} resourceJoin
@property {EmployeeSearchBasic} userJoin
@property {VendorSearchBasic} vendorJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class ResourceAllocationSearchAdvanced @extends SearchRecord
@property {ResourceAllocationSearch} criteria
@property {ResourceAllocationSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class ResourceAllocationSearchRow @extends SearchRow
@property {ResourceAllocationSearchRowBasic} basic
@property {CustomerSearchRowBasic} customerJoin
@property {EmployeeSearchRowBasic} employeeJoin
@property {JobSearchRowBasic} jobJoin
@property {EntitySearchRowBasic} requestedByJoin
@property {EntitySearchRowBasic} resourceJoin
@property {EmployeeSearchRowBasic} userJoin
@property {VendorSearchRowBasic} vendorJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class NoteDirection @extends SearchRow
*/
/*
@class MessageMessageType @extends SearchRow
*/
/*
@class File @extends Record
@property {String} name
@property {FileAttachFrom} attachFrom
@property {String} mediaTypeName
@property {MediaType} fileType
@property {base64Binary} content
@property {RecordRef} folder
@property {float} fileSize
@property {String} url
@property {String} urlComponent
@property {RecordRef} mediaFile
@property {TextFileEncoding} textFileEncoding
@property {String} description
@property {FileEncoding} encoding
@property {String} altTagCaption
@property {boolean} isOnline
@property {boolean} isInactive
@property {String} class
@property {boolean} bundleable
@property {String} department
@property {boolean} hideInBundle
@property {boolean} isPrivate
@property {RecordRef} owner
@property {String} caption
@property {RecordRef} storeDisplayThumbnail
@property {String} siteDescription
@property {String} featuredDescription
@property {dateTime} lastModifiedDate
@property {dateTime} createdDate
@property {FileSiteCategoryList} siteCategoryList
@property {String} internalId
@property {String} externalId
*/
/*
@class FileSiteCategory @extends Record
@property {boolean} isDefault
@property {RecordRef} category
@property {String} categoryDescription
@property {RecordRef} website
*/
/*
@class FileSiteCategoryList @extends Record
@property {FileSiteCategory[]} siteCategory
@property {boolean} replaceAll
*/
/*
@class FileSearch @extends SearchRecord
@property {FileSearchBasic} basic
@property {CustomerSearchBasic} shopperJoin
@property {EmployeeSearchBasic} userJoin
*/
/*
@class FileSearchAdvanced @extends SearchRecord
@property {FileSearch} criteria
@property {FileSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class FileSearchRow @extends SearchRow
@property {FileSearchRowBasic} basic
@property {CustomerSearchRowBasic} shopperJoin
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class Folder @extends Record
@property {String} name
@property {RecordRef} department
@property {String} description
@property {boolean} isInactive
@property {boolean} isPrivate
@property {boolean} bundleable
@property {boolean} hideInBundle
@property {boolean} isOnline
@property {RecordRef} group
@property {RecordRef} parent
@property {FolderFolderType} folderType
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} subsidiary
@property {String} internalId
@property {String} externalId
*/
/*
@class FolderSearch @extends SearchRecord
@property {FolderSearchBasic} basic
@property {FileSearchBasic} fileJoin
@property {EmployeeSearchBasic} userJoin
*/
/*
@class FolderSearchAdvanced @extends SearchRecord
@property {FolderSearch} criteria
@property {FolderSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class FolderSearchRow @extends SearchRow
@property {FolderSearchRowBasic} basic
@property {FileSearchRowBasic} fileJoin
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class Note @extends Record
@property {String} title
@property {RecordRef} noteType
@property {NoteDirection} direction
@property {dateTime} noteDate
@property {String} note
@property {dateTime} lastModifiedDate
@property {RecordRef} activity
@property {RecordRef} author
@property {RecordRef} entity
@property {RecordRef} folder
@property {RecordRef} item
@property {RecordRef} media
@property {RecordRef} record
@property {RecordRef} recordType
@property {RecordRef} topic
@property {RecordRef} transaction
@property {RecordRef} customForm
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class NoteSearch @extends SearchRecord
@property {NoteSearchBasic} basic
@property {EmployeeSearchBasic} authorJoin
@property {PhoneCallSearchBasic} callJoin
@property {CampaignSearchBasic} campaignJoin
@property {SupportCaseSearchBasic} caseJoin
@property {ContactSearchBasic} contactJoin
@property {CustomerSearchBasic} customerJoin
@property {EmployeeSearchBasic} employeeJoin
@property {EntitySearchBasic} entityJoin
@property {CalendarEventSearchBasic} eventJoin
@property {IssueSearchBasic} issueJoin
@property {ItemSearchBasic} itemJoin
@property {OpportunitySearchBasic} opportunityJoin
@property {OriginatingLeadSearchBasic} originatingLeadJoin
@property {PartnerSearchBasic} partnerJoin
@property {SolutionSearchBasic} solutionJoin
@property {TaskSearchBasic} taskJoin
@property {TransactionSearchBasic} transactionJoin
@property {EmployeeSearchBasic} userJoin
@property {VendorSearchBasic} vendorJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class NoteSearchAdvanced @extends SearchRecord
@property {NoteSearch} criteria
@property {NoteSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class NoteSearchRow @extends SearchRow
@property {NoteSearchRowBasic} basic
@property {EmployeeSearchRowBasic} authorJoin
@property {PhoneCallSearchRowBasic} callJoin
@property {CampaignSearchRowBasic} campaignJoin
@property {SupportCaseSearchRowBasic} caseJoin
@property {ContactSearchRowBasic} contactJoin
@property {CustomerSearchRowBasic} customerJoin
@property {EmployeeSearchRowBasic} employeeJoin
@property {EntitySearchRowBasic} entityJoin
@property {CalendarEventSearchRowBasic} eventJoin
@property {IssueSearchRowBasic} issueJoin
@property {ItemSearchRowBasic} itemJoin
@property {OpportunitySearchRowBasic} opportunityJoin
@property {OriginatingLeadSearchRowBasic} originatingLeadJoin
@property {PartnerSearchRowBasic} partnerJoin
@property {SolutionSearchRowBasic} solutionJoin
@property {TaskSearchRowBasic} taskJoin
@property {TransactionSearchRowBasic} transactionJoin
@property {EmployeeSearchRowBasic} userJoin
@property {VendorSearchRowBasic} vendorJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class Message @extends Record
@property {RecordRef} author
@property {RecordRef} recipient
@property {String} cc
@property {String} bcc
@property {dateTime} messageDate
@property {String} recordName
@property {String} recordTypeName
@property {String} subject
@property {String} message
@property {boolean} emailed
@property {RecordRef} activity
@property {boolean} compressAttachments
@property {boolean} incoming
@property {dateTime} lastModifiedDate
@property {RecordRef} transaction
@property {MessageMediaItemList} mediaItemList
@property {String} dateTime
@property {String} internalId
@property {String} externalId
*/
/*
@class MessageMediaItemList @extends Record
@property {File[]} mediaItem
@property {boolean} replaceAll
*/
/*
@class MessageSearch @extends SearchRecord
@property {MessageSearchBasic} basic
@property {FileSearchBasic} attachmentsJoin
@property {EntitySearchBasic} authorJoin
@property {CampaignSearchBasic} campaignJoin
@property {SupportCaseSearchBasic} caseJoin
@property {ContactSearchBasic} contactJoin
@property {CustomerSearchBasic} customerJoin
@property {EmployeeSearchBasic} employeeJoin
@property {EntitySearchBasic} entityJoin
@property {OpportunitySearchBasic} opportunityJoin
@property {OriginatingLeadSearchBasic} originatingLeadJoin
@property {PartnerSearchBasic} partnerJoin
@property {EntitySearchBasic} recipientJoin
@property {TransactionSearchBasic} transactionJoin
@property {EmployeeSearchBasic} userJoin
@property {VendorSearchBasic} vendorJoin
*/
/*
@class MessageSearchAdvanced @extends SearchRecord
@property {MessageSearch} criteria
@property {MessageSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class MessageSearchRow @extends SearchRow
@property {MessageSearchRowBasic} basic
@property {FileSearchRowBasic} attachmentsJoin
@property {EntitySearchRowBasic} authorJoin
@property {CampaignSearchRowBasic} campaignJoin
@property {SupportCaseSearchRowBasic} caseJoin
@property {ContactSearchRowBasic} contactJoin
@property {CustomerSearchRowBasic} customerJoin
@property {EmployeeSearchRowBasic} employeeJoin
@property {EntitySearchRowBasic} entityJoin
@property {OpportunitySearchRowBasic} opportunityJoin
@property {OriginatingLeadSearchRowBasic} originatingLeadJoin
@property {PartnerSearchRowBasic} partnerJoin
@property {EntitySearchRowBasic} recipientJoin
@property {TransactionSearchRowBasic} transactionJoin
@property {EmployeeSearchRowBasic} userJoin
@property {VendorSearchRowBasic} vendorJoin
*/
/*
@class EntityType @extends SearchRow
*/
/*
@class CustomerStatusStage @extends SearchRow
*/
/*
@class ContactType @extends SearchRow
*/
/*
@class CustomerStage @extends SearchRow
*/
/*
@class CustomerCreditHoldOverride @extends SearchRow
*/
/*
@class CustomerMonthlyClosing @extends SearchRow
*/
/*
@class EmailPreference @extends SearchRow
*/
/*
@class EntityGroupType @extends SearchRow
*/
/*
@class TaxFractionUnit @extends SearchRow
*/
/*
@class TaxRounding @extends SearchRow
*/
/*
@class JobBillingType @extends SearchRow
*/
/*
@class PartnerOtherRelationships @extends SearchRow
*/
/*
@class CustomerOtherRelationships @extends SearchRow
*/
/*
@class VendorOtherRelationships @extends SearchRow
*/
/*
@class CustomerNegativeNumberFormat @extends SearchRow
*/
/*
@class CustomerNumberFormat @extends SearchRow
*/
/*
@class Subscriptions @extends SearchRow
@property {boolean} subscribed
@property {RecordRef} subscription
@property {dateTime} lastModifiedDate
*/
/*
@class SubscriptionsList @extends SearchRow
@property {Subscriptions[]} subscriptions
@property {boolean} replaceAll
*/
/*
@class Contact @extends Record
@property {RecordRef} customForm
@property {String} entityId
@property {RecordRef} contactSource
@property {RecordRef} company
@property {String} salutation
@property {String} firstName
@property {String} middleName
@property {String} lastName
@property {String} title
@property {String} phone
@property {String} fax
@property {String} email
@property {String} defaultAddress
@property {boolean} isPrivate
@property {boolean} isInactive
@property {RecordRef} subsidiary
@property {String} phoneticName
@property {CategoryList} categoryList
@property {String} altEmail
@property {String} officePhone
@property {String} homePhone
@property {String} mobilePhone
@property {RecordRef} supervisor
@property {String} supervisorPhone
@property {RecordRef} assistant
@property {String} assistantPhone
@property {String} comments
@property {GlobalSubscriptionStatus} globalSubscriptionStatus
@property {RecordRef} image
@property {boolean} billPay
@property {dateTime} dateCreated
@property {dateTime} lastModifiedDate
@property {ContactAddressbookList} addressbookList
@property {SubscriptionsList} subscriptionsList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class CategoryList @extends Record
@property {RecordRef[]} category
*/
/*
@class ContactAddressbook @extends Record
@property {boolean} defaultShipping
@property {boolean} defaultBilling
@property {String} label
@property {Address} addressbookAddress
@property {String} internalId
*/
/*
@class ContactAddressbookList @extends Record
@property {ContactAddressbook[]} addressbook
@property {boolean} replaceAll
*/
/*
@class ContactSearch @extends SearchRecord
@property {ContactSearchBasic} basic
@property {PhoneCallSearchBasic} callJoin
@property {CampaignSearchBasic} campaignResponseJoin
@property {SupportCaseSearchBasic} caseJoin
@property {CustomerSearchBasic} customerJoin
@property {CustomerSearchBasic} customerPrimaryJoin
@property {CalendarEventSearchBasic} eventJoin
@property {FileSearchBasic} fileJoin
@property {JobSearchBasic} jobJoin
@property {JobSearchBasic} jobPrimaryJoin
@property {MessageSearchBasic} messagesJoin
@property {MessageSearchBasic} messagesFromJoin
@property {MessageSearchBasic} messagesToJoin
@property {OpportunitySearchBasic} opportunityJoin
@property {CustomerSearchBasic} parentCustomerJoin
@property {JobSearchBasic} parentJobJoin
@property {PartnerSearchBasic} parentPartnerJoin
@property {VendorSearchBasic} parentVendorJoin
@property {PartnerSearchBasic} partnerJoin
@property {PartnerSearchBasic} partnerPrimaryJoin
@property {ItemSearchBasic} purchasedItemJoin
@property {TaskSearchBasic} taskJoin
@property {TransactionSearchBasic} transactionJoin
@property {ItemSearchBasic} upsellItemJoin
@property {EmployeeSearchBasic} userJoin
@property {NoteSearchBasic} userNotesJoin
@property {VendorSearchBasic} vendorJoin
@property {VendorSearchBasic} vendorPrimaryJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class ContactSearchAdvanced @extends SearchRecord
@property {ContactSearch} criteria
@property {ContactSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class ContactSearchRow @extends SearchRow
@property {ContactSearchRowBasic} basic
@property {PhoneCallSearchRowBasic} callJoin
@property {CampaignSearchRowBasic} campaignResponseJoin
@property {SupportCaseSearchRowBasic} caseJoin
@property {CustomerSearchRowBasic} customerJoin
@property {CustomerSearchRowBasic} customerPrimaryJoin
@property {CalendarEventSearchRowBasic} eventJoin
@property {FileSearchRowBasic} fileJoin
@property {JobSearchRowBasic} jobJoin
@property {JobSearchRowBasic} jobPrimaryJoin
@property {MessageSearchRowBasic} messagesJoin
@property {MessageSearchRowBasic} messagesFromJoin
@property {MessageSearchRowBasic} messagesToJoin
@property {OpportunitySearchRowBasic} opportunityJoin
@property {CustomerSearchRowBasic} parentCustomerJoin
@property {JobSearchRowBasic} parentJobJoin
@property {PartnerSearchRowBasic} parentPartnerJoin
@property {VendorSearchRowBasic} parentVendorJoin
@property {PartnerSearchRowBasic} partnerJoin
@property {PartnerSearchRowBasic} partnerPrimaryJoin
@property {ItemSearchRowBasic} purchasedItemJoin
@property {TaskSearchRowBasic} taskJoin
@property {TransactionSearchRowBasic} transactionJoin
@property {ItemSearchRowBasic} upsellItemJoin
@property {EmployeeSearchRowBasic} userJoin
@property {NoteSearchRowBasic} userNotesJoin
@property {VendorSearchRowBasic} vendorJoin
@property {VendorSearchRowBasic} vendorPrimaryJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class Customer @extends Record
@property {RecordRef} customForm
@property {String} entityId
@property {String} altName
@property {boolean} isPerson
@property {String} phoneticName
@property {String} salutation
@property {String} firstName
@property {String} middleName
@property {String} lastName
@property {String} companyName
@property {RecordRef} entityStatus
@property {RecordRef} parent
@property {String} phone
@property {String} fax
@property {String} email
@property {String} url
@property {String} defaultAddress
@property {boolean} isInactive
@property {RecordRef} category
@property {String} title
@property {String} printOnCheckAs
@property {String} altPhone
@property {String} homePhone
@property {String} mobilePhone
@property {String} altEmail
@property {Language} language
@property {String} comments
@property {CustomerNumberFormat} numberFormat
@property {CustomerNegativeNumberFormat} negativeNumberFormat
@property {dateTime} dateCreated
@property {RecordRef} image
@property {EmailPreference} emailPreference
@property {RecordRef} subsidiary
@property {RecordRef} representingSubsidiary
@property {RecordRef} salesRep
@property {RecordRef} territory
@property {String} contribPct
@property {RecordRef} partner
@property {RecordRef} salesGroup
@property {String} vatRegNumber
@property {String} accountNumber
@property {boolean} taxExempt
@property {RecordRef} terms
@property {float} creditLimit
@property {CustomerCreditHoldOverride} creditHoldOverride
@property {CustomerMonthlyClosing} monthlyClosing
@property {boolean} overrideCurrencyFormat
@property {String} displaySymbol
@property {CurrencySymbolPlacement} symbolPlacement
@property {float} balance
@property {float} overdueBalance
@property {integer} daysOverdue
@property {float} unbilledOrders
@property {float} consolUnbilledOrders
@property {float} consolOverdueBalance
@property {float} consolDepositBalance
@property {float} consolBalance
@property {float} consolAging
@property {integer} consolDaysOverdue
@property {RecordRef} priceLevel
@property {RecordRef} currency
@property {RecordRef} prefCCProcessor
@property {float} depositBalance
@property {boolean} shipComplete
@property {boolean} taxable
@property {RecordRef} taxItem
@property {String} resaleNumber
@property {float} aging
@property {dateTime} startDate
@property {dateTime} endDate
@property {integer} reminderDays
@property {RecordRef} shippingItem
@property {String} thirdPartyAcct
@property {String} thirdPartyZipcode
@property {Country} thirdPartyCountry
@property {boolean} giveAccess
@property {float} estimatedBudget
@property {RecordRef} accessRole
@property {boolean} sendEmail
@property {String} password
@property {String} password2
@property {boolean} requirePwdChange
@property {RecordRef} campaignCategory
@property {RecordRef} leadSource
@property {RecordRef} receivablesAccount
@property {RecordRef} drAccount
@property {RecordRef} fxAccount
@property {float} defaultOrderPriority
@property {String} webLead
@property {String} referrer
@property {String} keywords
@property {String} clickStream
@property {String} lastPageVisited
@property {integer} visits
@property {dateTime} firstVisit
@property {dateTime} lastVisit
@property {boolean} billPay
@property {float} openingBalance
@property {dateTime} lastModifiedDate
@property {dateTime} openingBalanceDate
@property {RecordRef} openingBalanceAccount
@property {CustomerStage} stage
@property {boolean} emailTransactions
@property {boolean} printTransactions
@property {boolean} faxTransactions
@property {boolean} syncPartnerTeams
@property {boolean} isBudgetApproved
@property {GlobalSubscriptionStatus} globalSubscriptionStatus
@property {RecordRef} salesReadiness
@property {CustomerSalesTeamList} salesTeamList
@property {RecordRef} buyingReason
@property {CustomerDownloadList} downloadList
@property {RecordRef} buyingTimeFrame
@property {CustomerAddressbookList} addressbookList
@property {SubscriptionsList} subscriptionsList
@property {ContactAccessRolesList} contactRolesList
@property {CustomerCurrencyList} currencyList
@property {CustomerCreditCardsList} creditCardsList
@property {CustomerPartnersList} partnersList
@property {CustomerGroupPricingList} groupPricingList
@property {CustomerItemPricingList} itemPricingList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class CustomerDownload @extends Record
@property {RecordRef} file
@property {String} licenseCode
@property {integer} remainingDownloads
@property {dateTime} expiration
*/
/*
@class CustomerDownloadList @extends Record
@property {CustomerDownload[]} download
@property {boolean} replaceAll
*/
/*
@class ContactAccessRoles @extends Record
@property {boolean} giveAccess
@property {RecordRef} contact
@property {String} email
@property {RecordRef} role
@property {String} password
@property {String} password2
@property {boolean} sendEmail
*/
/*
@class ContactAccessRolesList @extends Record
@property {ContactAccessRoles[]} contactRoles
@property {boolean} replaceAll
*/
/*
@class CustomerSalesTeam_relationships @extends Record
@property {RecordRef} employee
@property {RecordRef} salesRole
@property {boolean} isPrimary
@property {float} contribution
*/
/*
@class CustomerSalesTeamList @extends Record
@property {CustomerSalesTeam[]} salesTeam
@property {boolean} replaceAll
*/
/*
@class CustomerAddressbook @extends Record
@property {boolean} defaultShipping
@property {boolean} defaultBilling
@property {boolean} isResidential
@property {String} label
@property {Address} addressbookAddress
@property {String} internalId
*/
/*
@class CustomerAddressbookList @extends Record
@property {CustomerAddressbook[]} addressbook
@property {boolean} replaceAll
*/
/*
@class CustomerCreditCards @extends Record
@property {String} internalId
@property {String} ccNumber
@property {dateTime} ccExpireDate
@property {String} ccName
@property {RecordRef} paymentMethod
@property {RecordRef} cardState
@property {dateTime} stateFrom
@property {String} debitcardIssueNo
@property {String} ccMemo
@property {dateTime} validfrom
@property {boolean} ccDefault
*/
/*
@class CustomerCreditCardsList @extends Record
@property {CustomerCreditCards[]} creditCards
@property {boolean} replaceAll
*/
/*
@class CustomerGroupPricing @extends Record
@property {RecordRef} group
@property {RecordRef} level
*/
/*
@class CustomerGroupPricingList @extends Record
@property {CustomerGroupPricing[]} groupPricing
@property {boolean} replaceAll
*/
/*
@class CustomerItemPricing @extends Record
@property {RecordRef} item
@property {RecordRef} level
@property {RecordRef} currency
@property {float} price
*/
/*
@class CustomerItemPricingList @extends Record
@property {CustomerItemPricing[]} itemPricing
@property {boolean} replaceAll
*/
/*
@class CustomerPartnersList @extends Record
@property {Partners[]} partners
@property {boolean} replaceAll
*/
/*
@class CustomerSearch @extends SearchRecord
@property {CustomerSearchBasic} basic
@property {BillingScheduleSearchBasic} billingScheduleJoin
@property {PhoneCallSearchBasic} callJoin
@property {CampaignSearchBasic} campaignResponseJoin
@property {SupportCaseSearchBasic} caseJoin
@property {ContactSearchBasic} contactJoin
@property {ContactSearchBasic} contactPrimaryJoin
@property {CalendarEventSearchBasic} eventJoin
@property {FileSearchBasic} fileJoin
@property {FileSearchBasic} hostedPageJoin
@property {JobSearchBasic} jobJoin
@property {CampaignSearchBasic} leadSourceJoin
@property {MessageSearchBasic} messagesJoin
@property {MessageSearchBasic} messagesFromJoin
@property {MessageSearchBasic} messagesToJoin
@property {OpportunitySearchBasic} opportunityJoin
@property {OriginatingLeadSearchBasic} originatingLeadJoin
@property {CustomerSearchBasic} parentCustomerJoin
@property {PartnerSearchBasic} partnerJoin
@property {PricingSearchBasic} pricingJoin
@property {ItemSearchBasic} purchasedItemJoin
@property {ResourceAllocationSearchBasic} resourceAllocationJoin
@property {EmployeeSearchBasic} salesRepJoin
@property {CustomerSearchBasic} subCustomerJoin
@property {TaskSearchBasic} taskJoin
@property {TimeBillSearchBasic} timeJoin
@property {CustomerSearchBasic} topLevelParentJoin
@property {TransactionSearchBasic} transactionJoin
@property {ItemSearchBasic} upsellItemJoin
@property {EmployeeSearchBasic} userJoin
@property {NoteSearchBasic} userNotesJoin
@property {SiteCategorySearchBasic} webSiteCategoryJoin
@property {ItemSearchBasic} webSiteItemJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class CustomerSearchAdvanced @extends SearchRecord
@property {CustomerSearch} criteria
@property {CustomerSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class CustomerSearchRow @extends SearchRow
@property {CustomerSearchRowBasic} basic
@property {BillingScheduleSearchRowBasic} billingScheduleJoin
@property {PhoneCallSearchRowBasic} callJoin
@property {CampaignSearchRowBasic} campaignResponseJoin
@property {SupportCaseSearchRowBasic} caseJoin
@property {ContactSearchRowBasic} contactJoin
@property {ContactSearchRowBasic} contactPrimaryJoin
@property {CalendarEventSearchRowBasic} eventJoin
@property {FileSearchRowBasic} fileJoin
@property {FileSearchRowBasic} hostedPageJoin
@property {JobSearchRowBasic} jobJoin
@property {CampaignSearchRowBasic} leadSourceJoin
@property {MessageSearchRowBasic} messagesJoin
@property {MessageSearchRowBasic} messagesFromJoin
@property {MessageSearchRowBasic} messagesToJoin
@property {OpportunitySearchRowBasic} opportunityJoin
@property {OriginatingLeadSearchRowBasic} originatingLeadJoin
@property {CustomerSearchRowBasic} parentCustomerJoin
@property {PartnerSearchRowBasic} partnerJoin
@property {PricingSearchRowBasic} pricingJoin
@property {ItemSearchRowBasic} purchasedItemJoin
@property {ResourceAllocationSearchRowBasic} resourceAllocationJoin
@property {EmployeeSearchRowBasic} salesRepJoin
@property {CustomerSearchRowBasic} subCustomerJoin
@property {TaskSearchRowBasic} taskJoin
@property {TimeBillSearchRowBasic} timeJoin
@property {CustomerSearchRowBasic} topLevelParentJoin
@property {TransactionSearchRowBasic} transactionJoin
@property {ItemSearchRowBasic} upsellItemJoin
@property {EmployeeSearchRowBasic} userJoin
@property {NoteSearchRowBasic} userNotesJoin
@property {SiteCategorySearchRowBasic} webSiteCategoryJoin
@property {ItemSearchRowBasic} webSiteItemJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class CustomerStatus @extends Record
@property {String} name
@property {CustomerStatusStage} stage
@property {float} probability
@property {String} description
@property {boolean} includeInLeadReports
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class Partner @extends Record
@property {RecordRef} customForm
@property {String} entityId
@property {String} altName
@property {String} partnerCode
@property {boolean} isPerson
@property {String} phoneticName
@property {String} salutation
@property {String} firstName
@property {String} middleName
@property {String} lastName
@property {String} companyName
@property {RecordRef} parent
@property {String} phone
@property {String} fax
@property {String} email
@property {String} url
@property {String} defaultAddress
@property {boolean} isInactive
@property {dateTime} lastModifiedDate
@property {dateTime} dateCreated
@property {GlobalSubscriptionStatus} globalSubscriptionStatus
@property {String} referringUrl
@property {RecordRefList} roleList
@property {CategoryList} categoryList
@property {String} title
@property {String} printOnCheckAs
@property {String} taxIdNum
@property {String} vatRegNumber
@property {String} comments
@property {String} bcn
@property {RecordRef} image
@property {TaxFractionUnit} taxFractionUnit
@property {EmailPreference} emailPreference
@property {TaxRounding} taxRounding
@property {RecordRef} department
@property {RecordRef} location
@property {RecordRef} class
@property {RecordRef} subsidiary
@property {String} homePhone
@property {String} mobilePhone
@property {String} altEmail
@property {boolean} giveAccess
@property {RecordRef} accessRole
@property {boolean} sendEmail
@property {String} password
@property {String} password2
@property {boolean} requirePwdChange
@property {boolean} subPartnerLogin
@property {String} loginAs
@property {boolean} eligibleForCommission
@property {ContactAccessRolesList} contactRolesList
@property {PartnerPromoCodeList} promoCodeList
@property {PartnerAddressbookList} addressbookList
@property {SubscriptionsList} subscriptionsList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class PartnerPromoCode @extends Record
@property {RecordRef} promoCode
@property {String} discount
@property {dateTime} endDate
*/
/*
@class PartnerPromoCodeList @extends Record
@property {PartnerPromoCode[]} promoCode
@property {boolean} replaceAll
*/
/*
@class PartnerAddressbook @extends Record
@property {boolean} defaultShipping
@property {boolean} defaultBilling
@property {String} label
@property {String} internalId
@property {Address} addressbookAddress
*/
/*
@class PartnerAddressbookList @extends Record
@property {PartnerAddressbook[]} addressbook
@property {boolean} replaceAll
*/
/*
@class PartnerSearch @extends SearchRecord
@property {PartnerSearchBasic} basic
@property {CampaignSearchBasic} campaignResponseJoin
@property {ContactSearchBasic} contactJoin
@property {ContactSearchBasic} contactPrimaryJoin
@property {CustomerSearchBasic} customerJoin
@property {FileSearchBasic} fileJoin
@property {MessageSearchBasic} messagesJoin
@property {MessageSearchBasic} messagesFromJoin
@property {MessageSearchBasic} messagesToJoin
@property {OpportunitySearchBasic} opportunityJoin
@property {TransactionSearchBasic} transactionJoin
@property {EmployeeSearchBasic} userJoin
@property {NoteSearchBasic} userNotesJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class PartnerSearchAdvanced @extends SearchRecord
@property {PartnerSearch} criteria
@property {PartnerSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class PartnerSearchRow @extends SearchRow
@property {PartnerSearchRowBasic} basic
@property {CampaignSearchRowBasic} campaignResponseJoin
@property {ContactSearchRowBasic} contactJoin
@property {ContactSearchRowBasic} contactPrimaryJoin
@property {CustomerSearchRowBasic} customerJoin
@property {FileSearchRowBasic} fileJoin
@property {MessageSearchRowBasic} messagesJoin
@property {MessageSearchRowBasic} messagesFromJoin
@property {MessageSearchRowBasic} messagesToJoin
@property {OpportunitySearchRowBasic} opportunityJoin
@property {TransactionSearchRowBasic} transactionJoin
@property {EmployeeSearchRowBasic} userJoin
@property {NoteSearchRowBasic} userNotesJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class Vendor @extends Record
@property {RecordRef} customForm
@property {String} entityId
@property {String} altName
@property {boolean} isPerson
@property {String} phoneticName
@property {String} salutation
@property {String} firstName
@property {String} middleName
@property {String} lastName
@property {String} companyName
@property {String} phone
@property {String} fax
@property {String} email
@property {String} url
@property {String} defaultAddress
@property {boolean} isInactive
@property {dateTime} lastModifiedDate
@property {dateTime} dateCreated
@property {RecordRef} category
@property {String} title
@property {String} printOnCheckAs
@property {String} altPhone
@property {String} homePhone
@property {String} mobilePhone
@property {String} altEmail
@property {String} comments
@property {GlobalSubscriptionStatus} globalSubscriptionStatus
@property {RecordRef} image
@property {EmailPreference} emailPreference
@property {RecordRef} subsidiary
@property {RecordRef} representingSubsidiary
@property {String} accountNumber
@property {String} legalName
@property {String} vatRegNumber
@property {RecordRef} expenseAccount
@property {RecordRef} payablesAccount
@property {RecordRef} terms
@property {float} creditLimit
@property {float} balancePrimary
@property {float} openingBalance
@property {dateTime} openingBalanceDate
@property {RecordRef} openingBalanceAccount
@property {float} balance
@property {float} unbilledOrdersPrimary
@property {String} bcn
@property {float} unbilledOrders
@property {RecordRef} currency
@property {boolean} is1099Eligible
@property {boolean} isJobResourceVend
@property {float} laborCost
@property {float} purchaseOrderQuantity
@property {float} purchaseOrderAmount
@property {float} purchaseOrderQuantityDiff
@property {float} receiptQuantity
@property {float} receiptAmount
@property {float} receiptQuantityDiff
@property {RecordRef} workCalendar
@property {String} taxIdNum
@property {RecordRef} taxItem
@property {boolean} giveAccess
@property {boolean} sendEmail
@property {boolean} billPay
@property {boolean} isAccountant
@property {String} password
@property {String} password2
@property {boolean} requirePwdChange
@property {boolean} eligibleForCommission
@property {boolean} emailTransactions
@property {boolean} printTransactions
@property {boolean} faxTransactions
@property {VendorPricingScheduleList} pricingScheduleList
@property {SubscriptionsList} subscriptionsList
@property {VendorAddressbookList} addressbookList
@property {VendorCurrencyList} currencyList
@property {VendorRolesList} rolesList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class VendorPricingSchedule @extends Record
@property {String} scheduleName
@property {float} scheduleDiscount
*/
/*
@class VendorPricingScheduleList @extends Record
@property {VendorPricingSchedule[]} pricingSchedule
@property {boolean} replaceAll
*/
/*
@class VendorAddressbook @extends Record
@property {boolean} defaultShipping
@property {boolean} defaultBilling
@property {String} label
@property {String} internalId
@property {Address} addressbookAddress
*/
/*
@class VendorAddressbookList @extends Record
@property {VendorAddressbook[]} addressbook
@property {boolean} replaceAll
*/
/*
@class VendorRoles @extends Record
@property {RecordRef} selectedRole
*/
/*
@class VendorRolesList @extends Record
@property {VendorRoles[]} roles
@property {boolean} replaceAll
*/
/*
@class VendorSearch @extends SearchRecord
@property {VendorSearchBasic} basic
@property {AccountSearchBasic} accountJoin
@property {CampaignSearchBasic} campaignResponseJoin
@property {ContactSearchBasic} contactJoin
@property {ContactSearchBasic} contactPrimaryJoin
@property {AccountSearchBasic} expAccountJoin
@property {FileSearchBasic} fileJoin
@property {MessageSearchBasic} messagesJoin
@property {MessageSearchBasic} messagesFromJoin
@property {MessageSearchBasic} messagesToJoin
@property {TransactionSearchBasic} transactionJoin
@property {EmployeeSearchBasic} userJoin
@property {NoteSearchBasic} userNotesJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class VendorSearchAdvanced @extends SearchRecord
@property {VendorSearch} criteria
@property {VendorSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class VendorSearchRow @extends SearchRow
@property {VendorSearchRowBasic} basic
@property {AccountSearchRowBasic} accountJoin
@property {CampaignSearchRowBasic} campaignResponseJoin
@property {ContactSearchRowBasic} contactJoin
@property {ContactSearchRowBasic} contactPrimaryJoin
@property {AccountSearchRowBasic} expAccountJoin
@property {FileSearchRowBasic} fileJoin
@property {MessageSearchRowBasic} messagesJoin
@property {MessageSearchRowBasic} messagesFromJoin
@property {MessageSearchRowBasic} messagesToJoin
@property {TransactionSearchRowBasic} transactionJoin
@property {EmployeeSearchRowBasic} userJoin
@property {NoteSearchRowBasic} userNotesJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class EntityGroup @extends Record
@property {String} groupName
@property {EntityGroupType} groupType
@property {String} email
@property {RecordRef} groupOwner
@property {boolean} isSavedSearch
@property {EntityGroupType} parentGroupType
@property {RecordRef} savedSearch
@property {boolean} isSalesTeam
@property {String} comments
@property {boolean} isPrivate
@property {RecordRef} restrictionGroup
@property {boolean} isInactive
@property {boolean} isSalesRep
@property {boolean} isSupportRep
@property {boolean} isProductTeam
@property {boolean} isFunctionalTeam
@property {RecordRef} issueRole
@property {boolean} isManufacturingWorkCenter
@property {RecordRef} subsidiary
@property {integer} machineResources
@property {integer} laborResources
@property {RecordRef} workCalendar
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class EntityGroupSearch @extends SearchRecord
@property {EntityGroupSearchBasic} basic
@property {EntitySearchBasic} groupMemberJoin
@property {EmployeeSearchBasic} userJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class EntityGroupSearchAdvanced @extends SearchRecord
@property {EntityGroupSearch} criteria
@property {EntityGroupSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class EntityGroupSearchRow @extends SearchRow
@property {EntityGroupSearchRowBasic} basic
@property {EntitySearchRowBasic} groupMemberJoin
@property {EmployeeSearchRowBasic} userJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class Job @extends Record
@property {RecordRef} customForm
@property {String} entityId
@property {String} altName
@property {String} companyName
@property {String} phoneticName
@property {RecordRef} entityStatus
@property {String} defaultAddress
@property {RecordRef} parent
@property {boolean} isInactive
@property {dateTime} lastModifiedDate
@property {boolean} billPay
@property {dateTime} dateCreated
@property {RecordRef} category
@property {RecordRef} workplace
@property {RecordRef} language
@property {String} comments
@property {String} accountNumber
@property {RecordRef} currency
@property {float} fxRate
@property {dateTime} startDate
@property {dateTime} endDate
@property {String} phone
@property {String} altPhone
@property {dateTime} calculatedEndDate
@property {dateTime} calculatedEndDateBaseline
@property {dateTime} startDateBaseline
@property {dateTime} projectedEndDate
@property {dateTime} projectedEndDateBaseline
@property {dateTime} lastBaselineDate
@property {RecordRef} jobType
@property {float} percentComplete
@property {float} estimatedCost
@property {float} estimatedRevenue
@property {Duration} estimatedTime
@property {Duration} estimatedTimeOverride
@property {String} fax
@property {String} email
@property {EmailPreference} emailPreference
@property {float} openingBalance
@property {dateTime} openingBalanceDate
@property {RecordRef} openingBalanceAccount
@property {RecordRef} subsidiary
@property {JobBillingType} jobBillingType
@property {RecordRef} billingSchedule
@property {RecordRef} jobItem
@property {float} percentTimeComplete
@property {Duration} actualTime
@property {boolean} allowTime
@property {Duration} timeRemaining
@property {boolean} limitTimeToAssignees
@property {float} estimatedLaborCost
@property {float} estimatedLaborCostBaseline
@property {RecordRef} estimateRevRecTemplate
@property {float} estimatedLaborRevenue
@property {float} estimatedGrossProfit
@property {float} estimatedGrossProfitPercent
@property {RecordRef} projectExpenseType
@property {boolean} applyProjectExpenseTypeToAll
@property {boolean} allowAllResourcesForTasks
@property {float} jobPrice
@property {boolean} isUtilizedTime
@property {boolean} isProductiveTime
@property {boolean} isExemptTime
@property {boolean} materializeTime
@property {boolean} allowExpenses
@property {boolean} allocatePayrollExpenses
@property {boolean} includeCrmTasksInTotals
@property {GlobalSubscriptionStatus} globalSubscriptionStatus
@property {JobResourcesList} jobResourcesList
@property {JobPlStatementList} plStatementList
@property {JobAddressbookList} addressbookList
@property {JobMilestonesList} milestonesList
@property {JobCreditCardsList} creditCardsList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class JobAddressbook @extends Record
@property {boolean} defaultShipping
@property {boolean} defaultBilling
@property {boolean} isResidential
@property {String} label
@property {String} internalId
@property {Address} addressbookAddress
*/
/*
@class JobAddressbookList @extends Record
@property {JobAddressbook[]} addressbook
@property {boolean} replaceAll
*/
/*
@class JobResources @extends Record
@property {RecordRef} jobResource
@property {String} email
@property {RecordRef} role
*/
/*
@class JobResourcesList @extends Record
@property {JobResources[]} jobResources
@property {boolean} replaceAll
*/
/*
@class JobMilestones @extends Record
@property {String} milestoneName
@property {String} milestoneOrder
@property {dateTime} milestoneEstComplete
@property {boolean} milestoneCompleted
@property {String} milestoneComments
*/
/*
@class JobMilestonesList @extends Record
@property {JobMilestones[]} milestones
@property {boolean} replaceAll
*/
/*
@class JobCreditCards @extends Record
@property {String} internalId
@property {String} ccNumber
@property {dateTime} ccExpireDate
@property {String} ccName
@property {RecordRef} paymentMethod
@property {String} ccMemo
@property {boolean} ccDefault
@property {String} debitCardIssueNo
@property {dateTime} validFrom
*/
/*
@class JobCreditCardsList @extends Record
@property {JobCreditCards[]} creditCards
@property {boolean} replaceAll
*/
/*
@class JobSearch @extends SearchRecord
@property {JobSearchBasic} basic
@property {BillingScheduleSearchBasic} billingScheduleJoin
@property {ContactSearchBasic} contactPrimaryJoin
@property {CustomerSearchBasic} customerJoin
@property {ProjectTaskSearchBasic} projectTaskJoin
@property {ResourceAllocationSearchBasic} resourceAllocationJoin
@property {TaskSearchBasic} taskJoin
@property {TimeBillSearchBasic} timeJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class JobSearchAdvanced @extends SearchRecord
@property {JobSearch} criteria
@property {JobSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class JobSearchRow @extends SearchRow
@property {JobSearchRowBasic} basic
@property {BillingScheduleSearchRowBasic} billingScheduleJoin
@property {ContactSearchRowBasic} contactPrimaryJoin
@property {CustomerSearchRowBasic} customerJoin
@property {ProjectTaskSearchRowBasic} projectTaskJoin
@property {ResourceAllocationSearchRowBasic} resourceAllocationJoin
@property {TaskSearchRowBasic} taskJoin
@property {TimeBillSearchRowBasic} timeJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class JobType @extends Record
@property {String} name
@property {RecordRef} parent
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class JobStatus @extends Record
@property {String} name
@property {String} description
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class CustomerStatusSearch @extends SearchRecord
@property {CustomerStatusSearchBasic} basic
@property {EmployeeSearchBasic} userJoin
*/
/*
@class CustomerStatusSearchAdvanced @extends SearchRecord
@property {CustomerStatusSearch} criteria
@property {CustomerStatusSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class CustomerStatusSearchRow @extends SearchRow
@property {CustomerStatusSearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class JobStatusSearch @extends SearchRecord
@property {JobStatusSearchBasic} basic
@property {EmployeeSearchBasic} userJoin
*/
/*
@class JobStatusSearchAdvanced @extends SearchRecord
@property {JobStatusSearch} criteria
@property {JobStatusSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class JobStatusSearchRow @extends SearchRow
@property {JobStatusSearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class JobTypeSearch @extends SearchRecord
@property {JobTypeSearchBasic} basic
@property {EmployeeSearchBasic} userJoin
*/
/*
@class JobTypeSearchAdvanced @extends SearchRecord
@property {JobTypeSearch} criteria
@property {JobTypeSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class JobTypeSearchRow @extends SearchRow
@property {JobTypeSearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class OriginatingLeadSearch @extends SearchRecord
@property {OriginatingLeadSearchBasic} basic
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class OriginatingLeadSearchRow @extends SearchRow
@property {OriginatingLeadSearchRowBasic} basic
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class CustomerCurrency @extends SearchRow
@property {RecordRef} currency
@property {float} balance
@property {float} consolBalance
@property {float} depositBalance
@property {float} consolDepositBalance
@property {float} overdueBalance
@property {float} consolOverdueBalance
@property {float} unbilledOrders
@property {float} consolUnbilledOrders
@property {boolean} overrideCurrencyFormat
@property {String} displaySymbol
@property {CurrencySymbolPlacement} symbolPlacement
*/
/*
@class CustomerCurrencyList @extends SearchRow
@property {CustomerCurrency[]} currency
@property {boolean} replaceAll
*/
/*
@class VendorCurrency @extends SearchRow
@property {RecordRef} currency
@property {float} balance
@property {float} unbilledOrders
*/
/*
@class VendorCurrencyList @extends SearchRow
@property {VendorCurrency[]} vendorCurrency
@property {boolean} replaceAll
*/
/*
@class JobPlStatement @extends SearchRow
@property {String} costCategory
@property {float} revenue
@property {float} cost
@property {float} profit
@property {float} margin
*/
/*
@class JobPlStatementList @extends SearchRow
@property {JobPlStatement[]} jobPlStatement
@property {boolean} replaceAll
*/
/*
@class SupportCaseStatusStage @extends SearchRow
*/
/*
@class SupportCaseStage @extends SearchRow
*/
/*
@class SolutionStatus @extends SearchRow
*/
/*
@class IssueEventStatus @extends SearchRow
*/
/*
@class IssueTrackCode @extends SearchRow
*/
/*
@class IssueRelationship @extends SearchRow
*/
/*
@class SupportCase @extends Record
@property {String} escalationMessage
@property {dateTime} lastReopenedDate
@property {dateTime} endDate
@property {String} incomingMessage
@property {RecordRef} insertSolution
@property {String} outgoingMessage
@property {String} searchSolution
@property {boolean} emailForm
@property {String} newSolutionFromMsg
@property {boolean} internalOnly
@property {RecordRef} customForm
@property {String} title
@property {String} caseNumber
@property {dateTime} startDate
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {dateTime} lastMessageDate
@property {RecordRef} company
@property {RecordRef} profile
@property {RecordRef} subsidiary
@property {RecordRef} contact
@property {String} email
@property {String} phone
@property {RecordRef} product
@property {RecordRef} module
@property {RecordRef} item
@property {RecordRef} serialNumber
@property {String} inboundEmail
@property {RecordRef} issue
@property {RecordRef} status
@property {boolean} isInactive
@property {RecordRef} priority
@property {RecordRef} origin
@property {RecordRef} category
@property {RecordRef} assigned
@property {boolean} helpDesk
@property {EmailEmployeesList} emailEmployeesList
@property {SupportCaseEscalateToList} escalateToList
@property {SupportCaseTimeItemList} timeItemList
@property {SupportCaseSolutionsList} solutionsList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class EmailEmployeesList @extends Record
@property {RecordRef[]} emailEmployees
*/
/*
@class SupportCaseEscalateTo @extends Record
@property {RecordRef} escalatee
@property {String} email
@property {String} phone
*/
/*
@class SupportCaseEscalateToList @extends Record
@property {SupportCaseEscalateTo[]} escalateTo
@property {boolean} replaceAll
*/
/*
@class SupportCaseSolutions @extends Record
@property {RecordRef} solution
@property {String} message
@property {dateTime} dateApplied
*/
/*
@class SupportCaseSolutionsList @extends Record
@property {SupportCaseSolutions[]} solutions
@property {boolean} replaceAll
*/
/*
@class SupportCaseTimeItemList @extends Record
@property {TimeItem[]} timeItem
@property {boolean} replaceAll
*/
/*
@class SupportCaseSearch @extends SearchRecord
@property {SupportCaseSearchBasic} basic
@property {EntitySearchBasic} companyJoin
@property {ContactSearchBasic} contactJoin
@property {CustomerSearchBasic} customerJoin
@property {EmployeeSearchBasic} employeeJoin
@property {FileSearchBasic} fileJoin
@property {IssueSearchBasic} issueJoin
@property {ItemSearchBasic} itemJoin
@property {MessageSearchBasic} messagesJoin
@property {TimeBillSearchBasic} timeJoin
@property {TransactionSearchBasic} transactionJoin
@property {EmployeeSearchBasic} userJoin
@property {NoteSearchBasic} userNotesJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class SupportCaseSearchAdvanced @extends SearchRecord
@property {SupportCaseSearch} criteria
@property {SupportCaseSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class SupportCaseSearchRow @extends SearchRow
@property {SupportCaseSearchRowBasic} basic
@property {EntitySearchRowBasic} companyJoin
@property {ContactSearchRowBasic} contactJoin
@property {CustomerSearchRowBasic} customerJoin
@property {EmployeeSearchRowBasic} employeeJoin
@property {FileSearchRowBasic} fileJoin
@property {IssueSearchRowBasic} issueJoin
@property {ItemSearchRowBasic} itemJoin
@property {MessageSearchRowBasic} messagesJoin
@property {TimeBillSearchRowBasic} timeJoin
@property {TransactionSearchRowBasic} transactionJoin
@property {EmployeeSearchRowBasic} userJoin
@property {NoteSearchRowBasic} userNotesJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class SupportCaseStatus @extends Record
@property {String} name
@property {RecordRef} insertBefore
@property {SupportCaseStatusStage} stage
@property {boolean} caseOnHold
@property {boolean} autoCloseCase
@property {String} description
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class SupportCaseType @extends Record
@property {String} name
@property {RecordRef} insertBefore
@property {String} description
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class SupportCaseOrigin @extends Record
@property {String} name
@property {RecordRef} insertBefore
@property {String} description
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class SupportCaseIssue @extends Record
@property {String} name
@property {RecordRef} insertBefore
@property {String} description
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class SupportCasePriority @extends Record
@property {String} name
@property {RecordRef} insertBefore
@property {String} description
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class Solution @extends Record
@property {RecordRef} customForm
@property {String} solutionCode
@property {String} title
@property {String} message
@property {SolutionStatus} status
@property {boolean} displayOnline
@property {RecordRef} assigned
@property {boolean} isInactive
@property {String} longDescription
@property {SolutionTopicsList} topicsList
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {SolutionsList} solutionsList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class SolutionTopics @extends Record
@property {RecordRef} topic
*/
/*
@class SolutionTopicsList @extends Record
@property {SolutionTopics[]} topics
@property {boolean} replaceAll
*/
/*
@class Solutions @extends Record
@property {RecordRef} solution
@property {String} message
*/
/*
@class SolutionsList @extends Record
@property {Solutions[]} solutions
@property {boolean} replaceAll
*/
/*
@class SolutionSearch @extends SearchRecord
@property {SolutionSearchBasic} basic
@property {SupportCaseSearchBasic} caseJoin
@property {SolutionSearchBasic} relatedSolutionJoin
@property {TopicSearchBasic} topicJoin
@property {EmployeeSearchBasic} userJoin
@property {NoteSearchBasic} userNotesJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class SolutionSearchAdvanced @extends SearchRecord
@property {SolutionSearch} criteria
@property {SolutionSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class SolutionSearchRow @extends SearchRow
@property {SolutionSearchRowBasic} basic
@property {SupportCaseSearchRowBasic} caseJoin
@property {SolutionSearchRowBasic} relatedSolutionJoin
@property {TopicSearchRowBasic} topicJoin
@property {EmployeeSearchRowBasic} userJoin
@property {NoteSearchRowBasic} userNotesJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class Topic @extends Record
@property {String} title
@property {RecordRef} parentTopic
@property {String} description
@property {boolean} isInactive
@property {String} longDescription
@property {TopicSolutionList} solutionList
@property {String} internalId
@property {String} externalId
*/
/*
@class TopicSolution @extends Record
@property {RecordRef} solution
@property {String} message
*/
/*
@class TopicSolutionList @extends Record
@property {TopicSolution[]} solution
@property {boolean} replaceAll
*/
/*
@class TopicSearch @extends SearchRecord
@property {TopicSearchBasic} basic
@property {SolutionSearchBasic} solutionJoin
@property {EmployeeSearchBasic} userJoin
*/
/*
@class TopicSearchAdvanced @extends SearchRecord
@property {TopicSearch} criteria
@property {TopicSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class TopicSearchRow @extends SearchRow
@property {TopicSearchRowBasic} basic
@property {SolutionSearchRowBasic} solutionJoin
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class Issue @extends Record
@property {RecordRef} customForm
@property {String} issueNumber
@property {dateTime} createdDate
@property {RecordRef} issueType
@property {RecordRef} product
@property {RecordRef} module
@property {RecordRef} item
@property {RecordRef} productTeam
@property {RecordRef} source
@property {RecordRef} reportedBy
@property {RecordRef} reproduce
@property {RecordRef} versionBroken
@property {RecordRef} buildBroken
@property {RecordRef} versionTarget
@property {RecordRef} buildTarget
@property {RecordRef} versionFixed
@property {RecordRef} buildFixed
@property {RecordRef} severity
@property {RecordRef} priority
@property {boolean} isShowStopper
@property {RecordRef} assigned
@property {RecordRef} reviewer
@property {boolean} isReviewed
@property {RecordRef} issueStatus
@property {dateTime} lastModifiedDate
@property {RecordRefList} issueTagsList
@property {String} issueAbstract
@property {String} newDetails
@property {boolean} isOwner
@property {IssueTrackCode} trackCode
@property {boolean} emailAssignee
@property {EmailEmployeesList} emailEmployeesList
@property {RecordRefList} emailCellsList
@property {String} externalAbstract
@property {String} externalDetails
@property {IssueVersionList} brokenInVersionList
@property {IssueVersionList} targetVersionList
@property {IssueVersionList} fixedInVersionList
@property {IssueRelatedIssuesList} relatedIssuesList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class IssueVersion @extends Record
@property {boolean} primary
@property {RecordRef} version
@property {RecordRef} build
*/
/*
@class IssueVersionList @extends Record
@property {IssueVersion[]} issueVersion
@property {boolean} replaceAll
*/
/*
@class IssueSearch @extends SearchRecord
@property {IssueSearchBasic} basic
@property {SupportCaseSearchBasic} caseJoin
@property {EmployeeSearchBasic} employeeJoin
@property {FileSearchBasic} fileJoin
@property {EmployeeSearchBasic} userJoin
@property {NoteSearchBasic} userNotesJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class IssueSearchAdvanced @extends SearchRecord
@property {IssueSearch} criteria
@property {IssueSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class IssueSearchRow @extends SearchRow
@property {IssueSearchRowBasic} basic
@property {SupportCaseSearchRowBasic} caseJoin
@property {EmployeeSearchRowBasic} employeeJoin
@property {FileSearchRowBasic} fileJoin
@property {EmployeeSearchRowBasic} userJoin
@property {NoteSearchRowBasic} userNotesJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class IssueRelatedIssues @extends SearchRow
@property {IssueRelationship} relationship
@property {RecordRef} issueNumber
@property {String} relationshipComment
*/
/*
@class IssueRelatedIssuesList @extends SearchRow
@property {IssueRelatedIssues[]} issueRelatedIssues
@property {boolean} replaceAll
*/
/*
@class CurrencyLocale @extends SearchRow
*/
/*
@class AccountType @extends SearchRow
*/
/*
@class ItemCostingMethod @extends SearchRow
*/
/*
@class ItemProductFeed @extends SearchRow
*/
/*
@class ItemType @extends SearchRow
*/
/*
@class ItemWeightUnit @extends SearchRow
*/
/*
@class ItemPreferenceCriterion @extends SearchRow
*/
/*
@class ItemOverallQuantityPricingType @extends SearchRow
*/
/*
@class ScheduleBCode @extends SearchRow
*/
/*
@class ItemSubType @extends SearchRow
*/
/*
@class CurrencyCurrencyPrecision @extends SearchRow
*/
/*
@class CurrencyFxRateUpdateTimezone @extends SearchRow
*/
/*
@class SalesTaxItemAvailable @extends SearchRow
*/
/*
@class ItemEbayAuctionDuration @extends SearchRow
*/
/*
@class ItemOutOfStockBehavior @extends SearchRow
*/
/*
@class ItemEbayRelistingOption @extends SearchRow
*/
/*
@class ConsolidatedRate @extends SearchRow
*/
/*
@class CashFlowRateType @extends SearchRow
*/
/*
@class GeneralRateType @extends SearchRow
*/
/*
@class ItemMatrixType @extends SearchRow
*/
/*
@class ItemDemandSource @extends SearchRow
*/
/*
@class ItemSupplyLotSizingMethod @extends SearchRow
*/
/*
@class ItemSupplyType @extends SearchRow
*/
/*
@class ItemSupplyReplenishmentMethod @extends SearchRow
*/
/*
@class RevRecScheduleRecogIntervalSrc @extends SearchRow
*/
/*
@class RevRecScheduleRecurrenceType @extends SearchRow
*/
/*
@class RevRecScheduleAmortizationType @extends SearchRow
*/
/*
@class RevRecScheduleAmortizationStatus @extends SearchRow
*/
/*
@class CostCategoryItemCostType @extends SearchRow
*/
/*
@class ItemAtpMethod @extends SearchRow
*/
/*
@class AssemblyItemEffectiveBomControl @extends SearchRow
*/
/*
@class ItemInvtClassification @extends SearchRow
*/
/*
@class PeriodicLotSizeType @extends SearchRow
*/
/*
@class HazmatPackingGroup @extends SearchRow
*/
/*
@class ItemCarrier @extends SearchRow
*/
/*
@class TaxAcctType @extends SearchRow
*/
/*
@class ItemOverheadType @extends SearchRow
*/
/*
@class ItemCostAccountingStatus @extends SearchRow
*/
/*
@class BillingScheduleRecurrenceRecurrenceUnits @extends SearchRow
*/
/*
@class BillingScheduleType @extends SearchRow
*/
/*
@class BillingScheduleFrequency @extends SearchRow
*/
/*
@class ItemAccountMappingItemAccount @extends SearchRow
*/
/*
@class AccountingBookStatus @extends SearchRow
*/
/*
@class BillingScheduleRepeatEvery @extends SearchRow
*/
/*
@class BillingScheduleMonthDow @extends SearchRow
*/
/*
@class BillingScheduleYearMonth @extends SearchRow
*/
/*
@class BillingScheduleYearDow @extends SearchRow
*/
/*
@class BillingScheduleYearDowim @extends SearchRow
*/
/*
@class BillingScheduleYearDowimMonth @extends SearchRow
*/
/*
@class BillingScheduleMonthDowim @extends SearchRow
*/
/*
@class BillingScheduleRecurrenceMode @extends SearchRow
*/
/*
@class InventoryItemFraudRisk @extends SearchRow
*/
/*
@class ClassTranslation @extends SearchRow
@property {String} locale
@property {String} language
@property {String} name
*/
/*
@class ClassTranslationList @extends SearchRow
@property {ClassTranslation[]} classTranslation
@property {boolean} replaceAll
*/
/*
@class ContactCategory @extends Record
@property {String} name
@property {boolean} private
@property {boolean} sync
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class CustomerCategory @extends Record
@property {String} name
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class SalesRole @extends Record
@property {String} name
@property {String} description
@property {boolean} isSalesRep
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class PriceLevel @extends Record
@property {String} name
@property {float} discountpct
@property {boolean} updateExistingPrices
@property {boolean} isOnline
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class WinLossReason @extends Record
@property {String} name
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class Term @extends Record
@property {String} name
@property {boolean} dateDriven
@property {integer} daysUntilNetDue
@property {float} discountPercent
@property {integer} daysUntilExpiry
@property {integer} dayOfMonthNetDue
@property {integer} dueNextMonthIfWithinDays
@property {float} discountPercentDateDriven
@property {integer} dayDiscountExpires
@property {boolean} preferred
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class NoteType @extends Record
@property {String} name
@property {String} description
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class PaymentMethod @extends Record
@property {String} name
@property {boolean} creditCard
@property {boolean} undepFunds
@property {RecordRef} account
@property {boolean} isInactive
@property {boolean} isOnline
@property {PaymentMethodVisualsList} visualsList
@property {boolean} isDebitCard
@property {RecordRefList} merchantAccountsList
@property {String} payPalEmailAddress
@property {String} expressCheckoutArrangement
@property {boolean} useExpressCheckout
@property {String} internalId
@property {String} externalId
*/
/*
@class LeadSource @extends Record
@property {String} name
@property {String} description
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class Price @extends Record
@property {float} value
@property {float} quantity
*/
/*
@class PriceList @extends Record
@property {Price[]} price
*/
/*
@class Pricing @extends Record
@property {RecordRef} currency
@property {RecordRef} priceLevel
@property {float} discount
@property {PriceList} priceList
*/
/*
@class PricingMatrix @extends Record
@property {Pricing[]} pricing
@property {boolean} replaceAll
*/
/*
@class Rate @extends Record
@property {float} value
@property {RecordRef} priceLevel
*/
/*
@class RateList @extends Record
@property {Rate[]} rate
*/
/*
@class BillingRates @extends Record
@property {RecordRef} currency
@property {RecordRef} billingClass
@property {RateList} rateList
*/
/*
@class BillingRatesMatrix @extends Record
@property {BillingRates[]} billingRates
@property {boolean} replaceAll
*/
/*
@class Translation @extends Record
@property {Language} locale
@property {String} language
@property {String} displayName
@property {String} description
@property {String} salesDescription
@property {String} storeDisplayName
@property {String} storeDescription
@property {String} storeDetailedDescription
@property {String} featuredDescription
@property {String} specialsDescription
@property {String} pageTitle
@property {String} noPriceMessage
@property {String} outOfStockMessage
*/
/*
@class TranslationList @extends Record
@property {Translation[]} translation
@property {boolean} replaceAll
*/
/*
@class ItemOptionsList @extends Record
@property {RecordRef[]} itemOptions
*/
/*
@class ItemVendor @extends Record
@property {RecordRef} vendor
@property {String} vendorCode
@property {String} vendorCurrencyName
@property {RecordRef} vendorCurrency
@property {float} purchasePrice
@property {boolean} preferredVendor
@property {RecordRef} schedule
@property {String} subsidiary
*/
/*
@class ItemVendorList @extends Record
@property {ItemVendor[]} itemVendor
@property {boolean} replaceAll
*/
/*
@class SiteCategory @extends Record
@property {RecordRef} website
@property {String} itemId
@property {RecordRef} parentCategory
@property {RecordRef} categoryListLayout
@property {RecordRef} itemListLayout
@property {RecordRef} relatedItemsListLayout
@property {RecordRef} correlatedItemsListLayout
@property {boolean} isOnline
@property {boolean} isInactive
@property {String} description
@property {String} storeDetailedDescription
@property {RecordRef} storeDisplayThumbnail
@property {RecordRef} storeDisplayImage
@property {String} pageTitle
@property {String} metaTagHtml
@property {boolean} excludeFromSitemap
@property {String} urlComponent
@property {SitemapPriority} sitemapPriority
@property {String} searchKeywords
@property {SiteCategoryPresentationItemList} presentationItemList
@property {SiteCategoryTranslationList} translationsList
@property {String} internalId
@property {String} externalId
*/
/*
@class SiteCategoryList @extends Record
@property {SiteCategory[]} siteCategory
@property {boolean} replaceAll
*/
/*
@class ProductFeedList @extends Record
@property {ItemProductFeed[]} productFeed
*/
/*
@class ItemMember @extends Record
@property {String} memberDescr
@property {float} componentYield
@property {float} bomQuantity
@property {float} quantity
@property {String} memberUnit
@property {VsoeDeferral} vsoeDeferral
@property {VsoePermitDiscount} vsoePermitDiscount
@property {boolean} vsoeDelivered
@property {RecordRef} taxSchedule
@property {String} taxcode
@property {RecordRef} item
@property {float} taxrate
@property {dateTime} effectiveDate
@property {dateTime} obsoleteDate
@property {RecordRef} effectiveRevision
@property {RecordRef} obsoleteRevision
@property {integer} lineNumber
@property {String} memberKey
*/
/*
@class ItemMemberList @extends Record
@property {ItemMember[]} itemMember
@property {boolean} replaceAll
*/
/*
@class InventoryItem @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {String} purchaseDescription
@property {boolean} copyDescription
@property {RecordRef} expenseAccount
@property {dateTime} dateConvertedToInv
@property {ItemType} originalItemType
@property {ItemSubType} originalItemSubtype
@property {RecordRef} cogsAccount
@property {RecordRef} intercoCogsAccount
@property {String} salesDescription
@property {InventoryItemFraudRisk} fraudRisk
@property {boolean} includeChildren
@property {RecordRef} incomeAccount
@property {RecordRef} intercoIncomeAccount
@property {RecordRef} taxSchedule
@property {RecordRef} dropshipExpenseAccount
@property {boolean} deferRevRec
@property {boolean} isTaxable
@property {ItemMatrixType} matrixType
@property {RecordRef} assetAccount
@property {boolean} matchBillToReceipt
@property {RecordRef} billQtyVarianceAcct
@property {RecordRef} billPriceVarianceAcct
@property {RecordRef} billExchRateVarianceAcct
@property {RecordRef} gainLossAccount
@property {float} shippingCost
@property {String} shippingCostUnits
@property {float} handlingCost
@property {String} handlingCostUnits
@property {float} weight
@property {ItemWeightUnit} weightUnit
@property {String} weightUnits
@property {String} costingMethodDisplay
@property {RecordRef} unitsType
@property {RecordRef} stockUnit
@property {RecordRef} purchaseUnit
@property {RecordRef} saleUnit
@property {RecordRef} issueProduct
@property {RecordRef} billingSchedule
@property {boolean} trackLandedCost
@property {boolean} isDropShipItem
@property {boolean} isSpecialOrderItem
@property {String} stockDescription
@property {RecordRef} deferredRevenueAccount
@property {boolean} producer
@property {String} manufacturer
@property {RecordRef} revRecSchedule
@property {String} mpn
@property {boolean} multManufactureAddr
@property {String} manufacturerAddr1
@property {String} manufacturerCity
@property {String} manufacturerState
@property {String} manufacturerZip
@property {Country} countryOfManufacture
@property {boolean} roundUpAsComponent
@property {float} purchaseOrderQuantity
@property {float} purchaseOrderAmount
@property {float} purchaseOrderQuantityDiff
@property {float} receiptQuantity
@property {float} receiptAmount
@property {float} receiptQuantityDiff
@property {RecordRef} defaultItemShipMethod
@property {ItemCarrier} itemCarrier
@property {RecordRefList} itemShipMethodList
@property {String} manufacturerTaxId
@property {String} scheduleBNumber
@property {integer} scheduleBQuantity
@property {ScheduleBCode} scheduleBCode
@property {String} manufacturerTariff
@property {ItemPreferenceCriterion} preferenceCriterion
@property {integer} minimumQuantity
@property {boolean} enforceMinQtyInternally
@property {String} minimumQuantityUnits
@property {RecordRef} softDescriptor
@property {RecordRef} shipPackage
@property {boolean} shipIndividually
@property {RecordRef} costCategory
@property {boolean} pricesIncludeTax
@property {RecordRef} purchasePriceVarianceAcct
@property {RecordRef} quantityPricingSchedule
@property {String} reorderPointUnits
@property {boolean} useMarginalRates
@property {String} preferredStockLevelUnits
@property {ItemCostEstimateType} costEstimateType
@property {float} costEstimate
@property {float} transferPrice
@property {ItemOverallQuantityPricingType} overallQuantityPricingType
@property {RecordRef} pricingGroup
@property {float} vsoePrice
@property {VsoeSopGroup} vsoeSopGroup
@property {String} costEstimateUnits
@property {VsoeDeferral} vsoeDeferral
@property {VsoePermitDiscount} vsoePermitDiscount
@property {boolean} vsoeDelivered
@property {RecordRef} preferredLocation
@property {integer} reorderMultiple
@property {float} cost
@property {dateTime} lastInvtCountDate
@property {dateTime} nextInvtCountDate
@property {integer} invtCountInterval
@property {ItemInvtClassification} invtClassification
@property {String} costUnits
@property {float} totalValue
@property {float} averageCost
@property {boolean} useBins
@property {String} quantityReorderUnits
@property {integer} leadTime
@property {boolean} autoLeadTime
@property {float} lastPurchasePrice
@property {boolean} autoPreferredStockLevel
@property {float} preferredStockLevelDays
@property {float} safetyStockLevel
@property {integer} safetyStockLevelDays
@property {integer} backwardConsumptionDays
@property {boolean} seasonalDemand
@property {String} safetyStockLevelUnits
@property {float} demandModifier
@property {RecordRef} distributionNetwork
@property {RecordRef} distributionCategory
@property {boolean} autoReorderPoint
@property {String} storeDisplayName
@property {RecordRef} storeDisplayThumbnail
@property {RecordRef} storeDisplayImage
@property {String} storeDescription
@property {String} storeDetailedDescription
@property {RecordRef} storeItemTemplate
@property {String} pageTitle
@property {String} metaTagHtml
@property {boolean} excludeFromSitemap
@property {SitemapPriority} sitemapPriority
@property {String} searchKeywords
@property {boolean} isDonationItem
@property {boolean} showDefaultDonationAmount
@property {float} maxDonationAmount
@property {boolean} dontShowPrice
@property {String} noPriceMessage
@property {String} outOfStockMessage
@property {boolean} onSpecial
@property {ItemOutOfStockBehavior} outOfStockBehavior
@property {String} relatedItemsDescription
@property {String} specialsDescription
@property {String} featuredDescription
@property {String} shoppingDotComCategory
@property {integer} shopzillaCategoryId
@property {String} nexTagCategory
@property {String} urlComponent
@property {RecordRef} customForm
@property {String} itemId
@property {String} upcCode
@property {String} displayName
@property {String} vendorName
@property {RecordRef} parent
@property {boolean} isOnline
@property {boolean} isHazmatItem
@property {String} hazmatId
@property {String} hazmatShippingName
@property {String} hazmatHazardClass
@property {HazmatPackingGroup} hazmatPackingGroup
@property {String} hazmatItemUnits
@property {float} hazmatItemUnitsQty
@property {boolean} isGcoCompliant
@property {boolean} offerSupport
@property {boolean} isInactive
@property {boolean} availableToPartners
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {ItemCostingMethod} costingMethod
@property {String} currency
@property {float} preferredStockLevel
@property {PricingMatrix} pricingMatrix
@property {ItemAccountingBookDetailList} accountingBookDetailList
@property {RecordRef} purchaseTaxCode
@property {float} defaultReturnCost
@property {RecordRef} supplyReplenishmentMethod
@property {RecordRef} alternateDemandSourceItem
@property {float} fixedLotSize
@property {PeriodicLotSizeType} periodicLotSizeType
@property {RecordRef} supplyType
@property {integer} demandTimeFence
@property {integer} supplyTimeFence
@property {integer} rescheduleInDays
@property {integer} rescheduleOutDays
@property {integer} periodicLotSizeDays
@property {RecordRef} supplyLotSizingMethod
@property {integer} forwardConsumptionDays
@property {RecordRef} demandSource
@property {float} quantityBackOrdered
@property {float} quantityCommitted
@property {float} quantityAvailable
@property {float} quantityOnHand
@property {float} onHandValueMli
@property {float} quantityOnOrder
@property {float} rate
@property {float} reorderPoint
@property {String} quantityCommittedUnits
@property {RecordRef} salesTaxCode
@property {String} quantityAvailableUnits
@property {String} quantityOnHandUnits
@property {RecordRef} vendor
@property {String} quantityOnOrderUnits
@property {ProductFeedList} productFeedList
@property {RecordRefList} subsidiaryList
@property {ItemOptionsList} itemOptionsList
@property {ItemVendorList} itemVendorList
@property {SiteCategoryList} siteCategoryList
@property {TranslationList} translationsList
@property {InventoryItemBinNumberList} binNumberList
@property {InventoryItemLocationsList} locationsList
@property {MatrixOptionList} matrixOptionList
@property {PresentationItemList} presentationItemList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class MatrixOptionList @extends Record
@property {SelectCustomFieldRef[]} matrixOption
*/
/*
@class InventoryItemBinNumber @extends Record
@property {RecordRef} binNumber
@property {String} onHand
@property {String} onHandAvail
@property {String} location
@property {boolean} preferredBin
*/
/*
@class InventoryItemBinNumberList @extends Record
@property {InventoryItemBinNumber[]} binNumber
@property {boolean} replaceAll
*/
/*
@class InventoryItemLocations @extends Record
@property {String} location
@property {float} quantityOnHand
@property {float} onHandValueMli
@property {float} averageCostMli
@property {float} lastPurchasePriceMli
@property {float} reorderPoint
@property {float} preferredStockLevel
@property {integer} leadTime
@property {float} defaultReturnCost
@property {float} safetyStockLevel
@property {float} cost
@property {RecordRef} inventoryCostTemplate
@property {float} buildTime
@property {dateTime} lastInvtCountDate
@property {dateTime} nextInvtCountDate
@property {boolean} isWip
@property {integer} invtCountInterval
@property {ItemInvtClassification} invtClassification
@property {float} costingLotSize
@property {float} quantityOnOrder
@property {float} quantityCommitted
@property {float} quantityAvailable
@property {float} quantityBackOrdered
@property {RecordRef} locationId
@property {RecordRef} supplyReplenishmentMethod
@property {RecordRef} alternateDemandSourceItem
@property {float} fixedLotSize
@property {PeriodicLotSizeType} periodicLotSizeType
@property {integer} periodicLotSizeDays
@property {RecordRef} supplyType
@property {RecordRef} supplyLotSizingMethod
@property {RecordRef} demandSource
@property {integer} backwardConsumptionDays
@property {integer} forwardConsumptionDays
@property {integer} demandTimeFence
@property {integer} supplyTimeFence
@property {integer} rescheduleInDays
@property {integer} rescheduleOutDays
*/
/*
@class InventoryItemLocationsList @extends Record
@property {InventoryItemLocations[]} locations
@property {boolean} replaceAll
*/
/*
@class PresentationItemList @extends Record
@property {PresentationItem[]} presentationItem
@property {boolean} replaceAll
*/
/*
@class DescriptionItem @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {String} description
@property {boolean} includeChildren
@property {RecordRef} customForm
@property {String} itemId
@property {RecordRef} issueProduct
@property {boolean} isInactive
@property {boolean} availableToPartners
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRefList} subsidiaryList
@property {TranslationList} translationsList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class DiscountItem @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {String} description
@property {boolean} nonPosting
@property {RecordRef} account
@property {boolean} includeChildren
@property {String} rate
@property {boolean} isPreTax
@property {RecordRef} customForm
@property {String} itemId
@property {RecordRef} issueProduct
@property {String} upcCode
@property {String} displayName
@property {String} vendorName
@property {RecordRef} parent
@property {boolean} isInactive
@property {boolean} availableToPartners
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRefList} subsidiaryList
@property {RecordRef} taxSchedule
@property {RecordRef} deferredRevenueAccount
@property {RecordRef} expenseAccount
@property {RecordRef} incomeAccount
@property {RecordRef} revRecSchedule
@property {RecordRef} salesTaxCode
@property {TranslationList} translationsList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class DownloadItem @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {String} salesDescription
@property {RecordRef} quantityPricingSchedule
@property {RecordRef} deferredRevenueAccount
@property {boolean} onSpecial
@property {String} itemId
@property {String} upcCode
@property {String} displayName
@property {RecordRef} parent
@property {boolean} isOnline
@property {boolean} isGcoCompliant
@property {boolean} offerSupport
@property {boolean} isInactive
@property {boolean} availableToPartners
@property {RecordRefList} subsidiaryList
@property {RecordRef} department
@property {boolean} includeChildren
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} incomeAccount
@property {integer} numOfAllowedDownloads
@property {integer} daysBeforeExpiration
@property {boolean} immediateDownload
@property {boolean} isTaxable
@property {RecordRef} issueProduct
@property {RecordRef} taxSchedule
@property {ItemCostEstimateType} costEstimateType
@property {float} costEstimate
@property {RecordRef} billingSchedule
@property {boolean} isFulfillable
@property {boolean} useMarginalRates
@property {ItemOverallQuantityPricingType} overallQuantityPricingType
@property {RecordRef} pricingGroup
@property {RecordRef} revRecSchedule
@property {float} vsoePrice
@property {VsoeSopGroup} vsoeSopGroup
@property {VsoeDeferral} vsoeDeferral
@property {VsoePermitDiscount} vsoePermitDiscount
@property {boolean} vsoeDelivered
@property {boolean} deferRevRec
@property {String} storeDisplayName
@property {RecordRef} storeDisplayThumbnail
@property {RecordRef} storeDisplayImage
@property {String} featuredDescription
@property {String} storeDescription
@property {String} storeDetailedDescription
@property {RecordRef} storeItemTemplate
@property {String} pageTitle
@property {String} metaTagHtml
@property {boolean} excludeFromSitemap
@property {SitemapPriority} sitemapPriority
@property {String} searchKeywords
@property {boolean} isDonationItem
@property {boolean} showDefaultDonationAmount
@property {float} maxDonationAmount
@property {boolean} dontShowPrice
@property {String} noPriceMessage
@property {String} outOfStockMessage
@property {ItemOutOfStockBehavior} outOfStockBehavior
@property {String} relatedItemsDescription
@property {String} specialsDescription
@property {PricingMatrix} pricingMatrix
@property {ItemAccountingBookDetailList} accountingBookDetailList
@property {SiteCategoryList} siteCategoryList
@property {PresentationItemList} presentationItemList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class MarkupItem @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {String} description
@property {boolean} nonPosting
@property {RecordRef} account
@property {boolean} includeChildren
@property {String} rate
@property {boolean} isPreTax
@property {RecordRef} customForm
@property {String} itemId
@property {RecordRef} issueProduct
@property {String} upcCode
@property {String} displayName
@property {String} vendorName
@property {RecordRef} parent
@property {boolean} isInactive
@property {boolean} availableToPartners
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRefList} subsidiaryList
@property {RecordRef} taxSchedule
@property {RecordRef} deferredRevenueAccount
@property {RecordRef} expenseAccount
@property {RecordRef} incomeAccount
@property {RecordRef} revRecSchedule
@property {RecordRef} salesTaxCode
@property {TranslationList} translationsList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class PaymentItem @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {String} description
@property {RecordRef} paymentMethod
@property {boolean} undepFunds
@property {boolean} includeChildren
@property {RecordRef} issueProduct
@property {RecordRef} account
@property {RecordRef} customForm
@property {String} itemId
@property {String} displayName
@property {boolean} isInactive
@property {boolean} availableToPartners
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRefList} subsidiaryList
@property {TranslationList} translationsList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class SubtotalItem @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {String} displayName
@property {RecordRef} issueProduct
@property {String} description
@property {boolean} includeChildren
@property {RecordRef} customForm
@property {String} itemId
@property {boolean} isInactive
@property {boolean} availableToPartners
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRefList} subsidiaryList
@property {TranslationList} translationsList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class NonInventoryPurchaseItem @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {String} purchaseDescription
@property {float} cost
@property {String} costUnits
@property {RecordRef} expenseAccount
@property {RecordRef} issueProduct
@property {boolean} isTaxable
@property {ItemMatrixType} matrixType
@property {RecordRef} unitsType
@property {RecordRef} purchaseUnit
@property {RecordRef} customForm
@property {String} itemId
@property {String} upcCode
@property {String} displayName
@property {boolean} includeChildren
@property {String} vendorName
@property {RecordRef} parent
@property {boolean} isInactive
@property {boolean} availableToPartners
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRefList} subsidiaryList
@property {RecordRef} taxSchedule
@property {RecordRef} deferralAccount
@property {RecordRef} amortizationTemplate
@property {String} residual
@property {integer} amortizationPeriod
@property {boolean} isFulfillable
@property {boolean} generateAccruals
@property {ItemAccountingBookDetailList} accountingBookDetailList
@property {RecordRef} costCategory
@property {float} purchaseOrderQuantity
@property {float} purchaseOrderAmount
@property {float} purchaseOrderQuantityDiff
@property {float} receiptQuantity
@property {float} receiptAmount
@property {float} receiptQuantityDiff
@property {String} currency
@property {ItemOptionsList} itemOptionsList
@property {MatrixOptionList} matrixOptionList
@property {ItemVendorList} itemVendorList
@property {RecordRef} purchaseTaxCode
@property {RecordRef} salesTaxCode
@property {TranslationList} translationsList
@property {RecordRef} vendor
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class NonInventorySaleItem @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {String} salesDescription
@property {boolean} includeChildren
@property {RecordRef} incomeAccount
@property {boolean} isTaxable
@property {ItemMatrixType} matrixType
@property {RecordRef} taxSchedule
@property {float} shippingCost
@property {String} shippingCostUnits
@property {float} handlingCost
@property {String} handlingCostUnits
@property {ItemCostEstimateType} costEstimateType
@property {float} costEstimate
@property {float} weight
@property {ItemWeightUnit} weightUnit
@property {String} weightUnits
@property {String} costEstimateUnits
@property {RecordRef} unitsType
@property {RecordRef} saleUnit
@property {RecordRef} issueProduct
@property {RecordRef} billingSchedule
@property {RecordRef} deferredRevenueAccount
@property {RecordRef} revRecSchedule
@property {String} stockDescription
@property {boolean} isHazmatItem
@property {String} hazmatId
@property {String} hazmatShippingName
@property {String} hazmatHazardClass
@property {HazmatPackingGroup} hazmatPackingGroup
@property {String} hazmatItemUnits
@property {float} hazmatItemUnitsQty
@property {boolean} producer
@property {String} manufacturer
@property {String} mpn
@property {boolean} multManufactureAddr
@property {String} manufacturerAddr1
@property {String} manufacturerCity
@property {String} manufacturerState
@property {String} manufacturerZip
@property {Country} countryOfManufacture
@property {String} manufacturerTaxId
@property {String} scheduleBNumber
@property {integer} scheduleBQuantity
@property {ScheduleBCode} scheduleBCode
@property {String} manufacturerTariff
@property {ItemPreferenceCriterion} preferenceCriterion
@property {integer} minimumQuantity
@property {boolean} enforceMinQtyInternally
@property {String} softDescriptor
@property {RecordRef} shipPackage
@property {boolean} shipIndividually
@property {boolean} isFulfillable
@property {RecordRef} costCategory
@property {boolean} pricesIncludeTax
@property {RecordRef} quantityPricingSchedule
@property {boolean} useMarginalRates
@property {ItemOverallQuantityPricingType} overallQuantityPricingType
@property {RecordRef} pricingGroup
@property {String} minimumQuantityUnits
@property {float} vsoePrice
@property {VsoeSopGroup} vsoeSopGroup
@property {VsoeDeferral} vsoeDeferral
@property {VsoePermitDiscount} vsoePermitDiscount
@property {boolean} vsoeDelivered
@property {boolean} deferRevRec
@property {String} storeDisplayName
@property {RecordRef} storeDisplayThumbnail
@property {RecordRef} storeDisplayImage
@property {String} storeDescription
@property {String} storeDetailedDescription
@property {RecordRef} storeItemTemplate
@property {String} pageTitle
@property {String} metaTagHtml
@property {boolean} excludeFromSitemap
@property {SitemapPriority} sitemapPriority
@property {String} searchKeywords
@property {boolean} isDonationItem
@property {boolean} showDefaultDonationAmount
@property {float} maxDonationAmount
@property {boolean} dontShowPrice
@property {String} noPriceMessage
@property {String} outOfStockMessage
@property {boolean} onSpecial
@property {ItemOutOfStockBehavior} outOfStockBehavior
@property {String} relatedItemsDescription
@property {String} specialsDescription
@property {String} featuredDescription
@property {String} shoppingDotComCategory
@property {integer} shopzillaCategoryId
@property {String} nexTagCategory
@property {ProductFeedList} productFeedList
@property {String} urlComponent
@property {RecordRef} customForm
@property {String} itemId
@property {String} upcCode
@property {String} displayName
@property {RecordRef} parent
@property {boolean} isOnline
@property {boolean} isGcoCompliant
@property {boolean} offerSupport
@property {boolean} isInactive
@property {boolean} availableToPartners
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} defaultItemShipMethod
@property {ItemCarrier} itemCarrier
@property {RecordRefList} itemShipMethodList
@property {RecordRefList} subsidiaryList
@property {ItemOptionsList} itemOptionsList
@property {MatrixOptionList} matrixOptionList
@property {PricingMatrix} pricingMatrix
@property {ItemAccountingBookDetailList} accountingBookDetailList
@property {RecordRef} purchaseTaxCode
@property {float} rate
@property {RecordRef} salesTaxCode
@property {SiteCategoryList} siteCategoryList
@property {TranslationList} translationsList
@property {PresentationItemList} presentationItemList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class NonInventoryResaleItem @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {String} purchaseDescription
@property {boolean} copyDescription
@property {float} cost
@property {String} costUnits
@property {RecordRef} expenseAccount
@property {RecordRef} intercoExpenseAccount
@property {String} salesDescription
@property {boolean} includeChildren
@property {RecordRef} incomeAccount
@property {RecordRef} intercoIncomeAccount
@property {boolean} isTaxable
@property {ItemMatrixType} matrixType
@property {RecordRef} taxSchedule
@property {RecordRef} dropshipExpenseAccount
@property {boolean} deferRevRec
@property {boolean} isDropShipItem
@property {boolean} isSpecialOrderItem
@property {float} shippingCost
@property {String} shippingCostUnits
@property {float} handlingCost
@property {String} handlingCostUnits
@property {ItemCostEstimateType} costEstimateType
@property {float} costEstimate
@property {float} weight
@property {ItemWeightUnit} weightUnit
@property {String} weightUnits
@property {String} costEstimateUnits
@property {RecordRef} unitsType
@property {RecordRef} purchaseUnit
@property {RecordRef} saleUnit
@property {RecordRef} issueProduct
@property {RecordRef} billingSchedule
@property {RecordRef} deferredRevenueAccount
@property {RecordRef} revRecSchedule
@property {RecordRef} deferralAccount
@property {RecordRef} amortizationTemplate
@property {String} residual
@property {integer} amortizationPeriod
@property {String} stockDescription
@property {boolean} producer
@property {String} manufacturer
@property {String} mpn
@property {boolean} multManufactureAddr
@property {String} manufacturerAddr1
@property {String} manufacturerCity
@property {String} manufacturerState
@property {String} manufacturerZip
@property {Country} countryOfManufacture
@property {float} purchaseOrderQuantity
@property {float} purchaseOrderAmount
@property {float} purchaseOrderQuantityDiff
@property {float} receiptQuantity
@property {float} receiptAmount
@property {float} receiptQuantityDiff
@property {String} manufacturerTaxId
@property {String} scheduleBNumber
@property {integer} scheduleBQuantity
@property {ScheduleBCode} scheduleBCode
@property {String} manufacturerTariff
@property {ItemPreferenceCriterion} preferenceCriterion
@property {integer} minimumQuantity
@property {boolean} enforceMinQtyInternally
@property {String} softDescriptor
@property {RecordRef} shipPackage
@property {boolean} shipIndividually
@property {boolean} isFulfillable
@property {boolean} generateAccruals
@property {RecordRef} costCategory
@property {boolean} pricesIncludeTax
@property {RecordRef} quantityPricingSchedule
@property {boolean} useMarginalRates
@property {ItemOverallQuantityPricingType} overallQuantityPricingType
@property {RecordRef} pricingGroup
@property {String} minimumQuantityUnits
@property {float} vsoePrice
@property {VsoeSopGroup} vsoeSopGroup
@property {VsoeDeferral} vsoeDeferral
@property {VsoePermitDiscount} vsoePermitDiscount
@property {boolean} vsoeDelivered
@property {String} storeDisplayName
@property {RecordRef} storeDisplayThumbnail
@property {RecordRef} storeDisplayImage
@property {String} storeDescription
@property {String} storeDetailedDescription
@property {RecordRef} storeItemTemplate
@property {String} pageTitle
@property {String} metaTagHtml
@property {boolean} excludeFromSitemap
@property {SitemapPriority} sitemapPriority
@property {String} searchKeywords
@property {boolean} isDonationItem
@property {boolean} showDefaultDonationAmount
@property {float} maxDonationAmount
@property {boolean} dontShowPrice
@property {String} noPriceMessage
@property {String} outOfStockMessage
@property {boolean} onSpecial
@property {ItemOutOfStockBehavior} outOfStockBehavior
@property {String} relatedItemsDescription
@property {String} specialsDescription
@property {String} featuredDescription
@property {String} shoppingDotComCategory
@property {integer} shopzillaCategoryId
@property {String} nexTagCategory
@property {ProductFeedList} productFeedList
@property {String} urlComponent
@property {RecordRef} customForm
@property {String} itemId
@property {String} upcCode
@property {String} displayName
@property {String} vendorName
@property {RecordRef} parent
@property {boolean} isOnline
@property {boolean} isHazmatItem
@property {String} hazmatId
@property {String} hazmatShippingName
@property {String} hazmatHazardClass
@property {HazmatPackingGroup} hazmatPackingGroup
@property {String} hazmatItemUnits
@property {float} hazmatItemUnitsQty
@property {boolean} isGcoCompliant
@property {boolean} offerSupport
@property {boolean} isInactive
@property {boolean} availableToPartners
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} defaultItemShipMethod
@property {ItemCarrier} itemCarrier
@property {RecordRefList} itemShipMethodList
@property {RecordRefList} subsidiaryList
@property {String} currency
@property {ItemOptionsList} itemOptionsList
@property {MatrixOptionList} matrixOptionList
@property {ItemVendorList} itemVendorList
@property {PricingMatrix} pricingMatrix
@property {ItemAccountingBookDetailList} accountingBookDetailList
@property {RecordRef} purchaseTaxCode
@property {float} rate
@property {RecordRef} salesTaxCode
@property {SiteCategoryList} siteCategoryList
@property {TranslationList} translationsList
@property {RecordRef} vendor
@property {PresentationItemList} presentationItemList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class OtherChargeResaleItem @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {String} purchaseDescription
@property {boolean} manufacturingChargeItem
@property {float} cost
@property {String} costUnits
@property {RecordRef} expenseAccount
@property {RecordRef} intercoExpenseAccount
@property {String} salesDescription
@property {boolean} includeChildren
@property {RecordRef} incomeAccount
@property {RecordRef} intercoIncomeAccount
@property {boolean} isTaxable
@property {ItemMatrixType} matrixType
@property {RecordRef} taxSchedule
@property {ItemCostEstimateType} costEstimateType
@property {float} costEstimate
@property {RecordRef} unitsType
@property {RecordRef} purchaseUnit
@property {RecordRef} saleUnit
@property {String} costEstimateUnits
@property {RecordRef} issueProduct
@property {RecordRef} billingSchedule
@property {RecordRef} deferredRevenueAccount
@property {RecordRef} revRecSchedule
@property {RecordRef} deferralAccount
@property {RecordRef} amortizationTemplate
@property {String} residual
@property {boolean} deferRevRec
@property {integer} amortizationPeriod
@property {integer} minimumQuantity
@property {String} minimumQuantityUnits
@property {boolean} enforceMinQtyInternally
@property {String} softDescriptor
@property {boolean} isFulfillable
@property {boolean} generateAccruals
@property {RecordRef} costCategory
@property {float} purchaseOrderQuantity
@property {float} purchaseOrderAmount
@property {float} purchaseOrderQuantityDiff
@property {float} receiptQuantity
@property {float} receiptAmount
@property {float} receiptQuantityDiff
@property {boolean} pricesIncludeTax
@property {RecordRef} quantityPricingSchedule
@property {boolean} useMarginalRates
@property {ItemOverallQuantityPricingType} overallQuantityPricingType
@property {RecordRef} pricingGroup
@property {RecordRef} customForm
@property {String} itemId
@property {String} upcCode
@property {String} displayName
@property {String} vendorName
@property {RecordRef} parent
@property {boolean} isOnline
@property {boolean} isGcoCompliant
@property {boolean} offerSupport
@property {boolean} isInactive
@property {boolean} availableToPartners
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRefList} subsidiaryList
@property {float} vsoePrice
@property {VsoeSopGroup} vsoeSopGroup
@property {VsoeDeferral} vsoeDeferral
@property {VsoePermitDiscount} vsoePermitDiscount
@property {boolean} vsoeDelivered
@property {String} currency
@property {ItemOptionsList} itemOptionsList
@property {MatrixOptionList} matrixOptionList
@property {ItemVendorList} itemVendorList
@property {PricingMatrix} pricingMatrix
@property {ItemAccountingBookDetailList} accountingBookDetailList
@property {RecordRef} purchaseTaxCode
@property {float} rate
@property {RecordRef} salesTaxCode
@property {TranslationList} translationsList
@property {RecordRef} vendor
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class OtherChargePurchaseItem @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {String} purchaseDescription
@property {boolean} manufacturingChargeItem
@property {float} cost
@property {String} costUnits
@property {RecordRef} expenseAccount
@property {boolean} isTaxable
@property {ItemMatrixType} matrixType
@property {RecordRef} unitsType
@property {RecordRef} purchaseUnit
@property {boolean} includeChildren
@property {RecordRef} issueProduct
@property {RecordRef} customForm
@property {String} itemId
@property {String} upcCode
@property {String} displayName
@property {String} vendorName
@property {RecordRef} parent
@property {boolean} isInactive
@property {boolean} availableToPartners
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRefList} subsidiaryList
@property {RecordRef} location
@property {RecordRef} taxSchedule
@property {RecordRef} deferralAccount
@property {RecordRef} amortizationTemplate
@property {String} residual
@property {integer} amortizationPeriod
@property {boolean} isFulfillable
@property {boolean} generateAccruals
@property {ItemAccountingBookDetailList} accountingBookDetailList
@property {RecordRef} costCategory
@property {ItemOverheadType} overheadType
@property {float} purchaseOrderQuantity
@property {float} purchaseOrderAmount
@property {float} purchaseOrderQuantityDiff
@property {float} receiptQuantity
@property {float} receiptAmount
@property {float} receiptQuantityDiff
@property {String} currency
@property {ItemOptionsList} itemOptionsList
@property {MatrixOptionList} matrixOptionList
@property {ItemVendorList} itemVendorList
@property {RecordRef} purchaseTaxCode
@property {RecordRef} salesTaxCode
@property {TranslationList} translationsList
@property {RecordRef} vendor
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class ServiceResaleItem @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {String} purchaseDescription
@property {boolean} manufacturingChargeItem
@property {float} cost
@property {String} costUnits
@property {RecordRef} expenseAccount
@property {RecordRef} intercoExpenseAccount
@property {String} salesDescription
@property {boolean} includeChildren
@property {RecordRef} incomeAccount
@property {RecordRef} intercoIncomeAccount
@property {RecordRef} taxSchedule
@property {ItemMatrixType} matrixType
@property {boolean} isTaxable
@property {ItemCostEstimateType} costEstimateType
@property {float} costEstimate
@property {RecordRef} unitsType
@property {RecordRef} purchaseUnit
@property {RecordRef} saleUnit
@property {String} costEstimateUnits
@property {RecordRef} issueProduct
@property {RecordRef} billingSchedule
@property {RecordRef} deferredRevenueAccount
@property {RecordRef} revRecSchedule
@property {RecordRef} deferralAccount
@property {RecordRef} amortizationTemplate
@property {String} residual
@property {boolean} deferRevRec
@property {integer} amortizationPeriod
@property {integer} minimumQuantity
@property {boolean} enforceMinQtyInternally
@property {String} softDescriptor
@property {boolean} pricesIncludeTax
@property {RecordRef} quantityPricingSchedule
@property {boolean} useMarginalRates
@property {ItemOverallQuantityPricingType} overallQuantityPricingType
@property {boolean} isFulfillable
@property {boolean} generateAccruals
@property {RecordRef} costCategory
@property {float} purchaseOrderQuantity
@property {float} purchaseOrderAmount
@property {float} purchaseOrderQuantityDiff
@property {float} receiptQuantity
@property {float} receiptAmount
@property {float} receiptQuantityDiff
@property {RecordRef} pricingGroup
@property {String} minimumQuantityUnits
@property {float} vsoePrice
@property {VsoeSopGroup} vsoeSopGroup
@property {VsoeDeferral} vsoeDeferral
@property {VsoePermitDiscount} vsoePermitDiscount
@property {boolean} vsoeDelivered
@property {boolean} createJob
@property {String} storeDisplayName
@property {RecordRef} storeDisplayThumbnail
@property {RecordRef} storeDisplayImage
@property {String} storeDescription
@property {String} storeDetailedDescription
@property {RecordRef} storeItemTemplate
@property {String} pageTitle
@property {String} urlComponent
@property {String} metaTagHtml
@property {boolean} excludeFromSitemap
@property {SitemapPriority} sitemapPriority
@property {String} searchKeywords
@property {boolean} isDonationItem
@property {boolean} showDefaultDonationAmount
@property {float} maxDonationAmount
@property {boolean} dontShowPrice
@property {String} noPriceMessage
@property {String} outOfStockMessage
@property {boolean} onSpecial
@property {ItemOutOfStockBehavior} outOfStockBehavior
@property {String} relatedItemsDescription
@property {String} specialsDescription
@property {ServiceItemTaskTemplatesList} itemTaskTemplatesList
@property {String} featuredDescription
@property {RecordRef} customForm
@property {String} itemId
@property {String} upcCode
@property {String} displayName
@property {String} vendorName
@property {RecordRef} parent
@property {boolean} isOnline
@property {boolean} isGcoCompliant
@property {boolean} offerSupport
@property {boolean} isInactive
@property {boolean} availableToPartners
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRefList} subsidiaryList
@property {String} currency
@property {BillingRatesMatrix} billingRatesMatrix
@property {ItemAccountingBookDetailList} accountingBookDetailList
@property {ItemOptionsList} itemOptionsList
@property {MatrixOptionList} matrixOptionList
@property {ItemVendorList} itemVendorList
@property {PricingMatrix} pricingMatrix
@property {RecordRef} purchaseTaxCode
@property {float} rate
@property {RecordRef} salesTaxCode
@property {SiteCategoryList} siteCategoryList
@property {TranslationList} translationsList
@property {RecordRef} vendor
@property {PresentationItemList} presentationItemList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class ServicePurchaseItem @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {String} purchaseDescription
@property {boolean} manufacturingChargeItem
@property {float} cost
@property {String} costUnits
@property {RecordRef} issueProduct
@property {boolean} includeChildren
@property {RecordRef} expenseAccount
@property {boolean} isTaxable
@property {ItemMatrixType} matrixType
@property {RecordRef} unitsType
@property {RecordRef} purchaseUnit
@property {RecordRef} customForm
@property {String} itemId
@property {String} upcCode
@property {String} displayName
@property {String} vendorName
@property {RecordRef} parent
@property {boolean} isInactive
@property {boolean} availableToPartners
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRefList} subsidiaryList
@property {RecordRef} taxSchedule
@property {RecordRef} deferralAccount
@property {RecordRef} amortizationTemplate
@property {String} residual
@property {integer} amortizationPeriod
@property {boolean} isFulfillable
@property {boolean} generateAccruals
@property {ItemAccountingBookDetailList} accountingBookDetailList
@property {RecordRef} costCategory
@property {float} purchaseOrderQuantity
@property {float} purchaseOrderAmount
@property {float} purchaseOrderQuantityDiff
@property {float} receiptQuantity
@property {float} receiptAmount
@property {float} receiptQuantityDiff
@property {String} currency
@property {ItemOptionsList} itemOptionsList
@property {MatrixOptionList} matrixOptionList
@property {ItemVendorList} itemVendorList
@property {RecordRef} purchaseTaxCode
@property {RecordRef} salesTaxCode
@property {TranslationList} translationsList
@property {RecordRef} vendor
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class ServiceSaleItem @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {String} salesDescription
@property {boolean} includeChildren
@property {RecordRef} incomeAccount
@property {boolean} isTaxable
@property {ItemMatrixType} matrixType
@property {RecordRef} taxSchedule
@property {ItemCostEstimateType} costEstimateType
@property {float} costEstimate
@property {RecordRef} unitsType
@property {RecordRef} saleUnit
@property {RecordRef} issueProduct
@property {String} costEstimateUnits
@property {RecordRef} billingSchedule
@property {RecordRef} deferredRevenueAccount
@property {RecordRef} revRecSchedule
@property {integer} minimumQuantity
@property {boolean} enforceMinQtyInternally
@property {String} softDescriptor
@property {boolean} pricesIncludeTax
@property {RecordRef} quantityPricingSchedule
@property {boolean} useMarginalRates
@property {ItemOverallQuantityPricingType} overallQuantityPricingType
@property {boolean} isFulfillable
@property {RecordRef} costCategory
@property {RecordRef} pricingGroup
@property {String} minimumQuantityUnits
@property {float} vsoePrice
@property {VsoeSopGroup} vsoeSopGroup
@property {VsoeDeferral} vsoeDeferral
@property {VsoePermitDiscount} vsoePermitDiscount
@property {boolean} vsoeDelivered
@property {boolean} deferRevRec
@property {boolean} createJob
@property {String} storeDisplayName
@property {RecordRef} storeDisplayThumbnail
@property {RecordRef} storeDisplayImage
@property {String} storeDescription
@property {String} storeDetailedDescription
@property {RecordRef} storeItemTemplate
@property {String} pageTitle
@property {String} urlComponent
@property {String} metaTagHtml
@property {boolean} excludeFromSitemap
@property {SitemapPriority} sitemapPriority
@property {String} searchKeywords
@property {boolean} isDonationItem
@property {boolean} showDefaultDonationAmount
@property {float} maxDonationAmount
@property {boolean} dontShowPrice
@property {String} noPriceMessage
@property {String} outOfStockMessage
@property {boolean} onSpecial
@property {ItemOutOfStockBehavior} outOfStockBehavior
@property {String} relatedItemsDescription
@property {String} specialsDescription
@property {ServiceItemTaskTemplatesList} itemTaskTemplatesList
@property {String} featuredDescription
@property {RecordRef} customForm
@property {String} itemId
@property {String} upcCode
@property {String} displayName
@property {RecordRef} parent
@property {boolean} isOnline
@property {boolean} isGcoCompliant
@property {boolean} offerSupport
@property {boolean} isInactive
@property {boolean} availableToPartners
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRefList} subsidiaryList
@property {BillingRatesMatrix} billingRatesMatrix
@property {ItemAccountingBookDetailList} accountingBookDetailList
@property {ItemOptionsList} itemOptionsList
@property {MatrixOptionList} matrixOptionList
@property {PricingMatrix} pricingMatrix
@property {RecordRef} purchaseTaxCode
@property {float} rate
@property {RecordRef} salesTaxCode
@property {SiteCategoryList} siteCategoryList
@property {TranslationList} translationsList
@property {PresentationItemList} presentationItemList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class OtherChargeSaleItem @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {String} salesDescription
@property {boolean} includeChildren
@property {RecordRef} incomeAccount
@property {boolean} isTaxable
@property {ItemMatrixType} matrixType
@property {RecordRef} taxSchedule
@property {ItemCostEstimateType} costEstimateType
@property {float} costEstimate
@property {RecordRef} unitsType
@property {RecordRef} saleUnit
@property {RecordRef} issueProduct
@property {String} costEstimateUnits
@property {RecordRef} billingSchedule
@property {RecordRef} deferredRevenueAccount
@property {RecordRef} revRecSchedule
@property {integer} minimumQuantity
@property {String} minimumQuantityUnits
@property {boolean} enforceMinQtyInternally
@property {String} softDescriptor
@property {boolean} isFulfillable
@property {RecordRef} costCategory
@property {boolean} pricesIncludeTax
@property {RecordRef} quantityPricingSchedule
@property {boolean} useMarginalRates
@property {ItemOverallQuantityPricingType} overallQuantityPricingType
@property {RecordRef} pricingGroup
@property {RecordRef} customForm
@property {String} itemId
@property {String} upcCode
@property {String} displayName
@property {RecordRef} parent
@property {boolean} isOnline
@property {boolean} isGcoCompliant
@property {boolean} offerSupport
@property {boolean} isInactive
@property {boolean} availableToPartners
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {float} vsoePrice
@property {VsoeSopGroup} vsoeSopGroup
@property {VsoeDeferral} vsoeDeferral
@property {VsoePermitDiscount} vsoePermitDiscount
@property {boolean} vsoeDelivered
@property {boolean} deferRevRec
@property {RecordRefList} subsidiaryList
@property {ItemOptionsList} itemOptionsList
@property {MatrixOptionList} matrixOptionList
@property {PricingMatrix} pricingMatrix
@property {ItemAccountingBookDetailList} accountingBookDetailList
@property {RecordRef} purchaseTaxCode
@property {float} rate
@property {RecordRef} salesTaxCode
@property {TranslationList} translationsList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class Currency @extends Record
@property {String} name
@property {String} symbol
@property {boolean} isBaseCurrency
@property {boolean} isInactive
@property {boolean} overrideCurrencyFormat
@property {String} displaySymbol
@property {CurrencySymbolPlacement} symbolPlacement
@property {CurrencyLocale} locale
@property {String} formatSample
@property {float} exchangeRate
@property {CurrencyFxRateUpdateTimezone} fxRateUpdateTimezone
@property {boolean} inclInFxRateUpdates
@property {CurrencyCurrencyPrecision} currencyPrecision
@property {String} internalId
@property {String} externalId
*/
/*
@class ExpenseCategory @extends Record
@property {RecordRef} customForm
@property {String} name
@property {String} description
@property {RecordRef} expenseAcct
@property {boolean} isInactive
@property {boolean} rateRequired
@property {float} defaultRate
@property {ExpenseCategoryRatesList} ratesList
@property {TranslationList} translationsList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class Account @extends Record
@property {AccountType} acctType
@property {RecordRef} unitsType
@property {RecordRef} unit
@property {String} acctNumber
@property {String} acctName
@property {boolean} includeChildren
@property {RecordRef} currency
@property {String} exchangeRate
@property {ConsolidatedRate} generalRate
@property {RecordRef} parent
@property {ConsolidatedRate} cashFlowRate
@property {RecordRef} billableExpensesAcct
@property {RecordRef} deferralAcct
@property {String} description
@property {integer} curDocNum
@property {boolean} isInactive
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {boolean} inventory
@property {boolean} eliminate
@property {RecordRefList} subsidiaryList
@property {RecordRef} category1099misc
@property {float} openingBalance
@property {dateTime} tranDate
@property {boolean} revalue
@property {AccountTranslationList} translationsList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class AccountTranslationList @extends Record
@property {ClassTranslation[]} translation
@property {boolean} replaceAll
*/
/*
@class AccountSearch @extends SearchRecord
@property {AccountSearchBasic} basic
@property {EmployeeSearchBasic} userJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class AccountSearchAdvanced @extends SearchRecord
@property {AccountSearch} criteria
@property {AccountSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class AccountSearchRow @extends SearchRow
@property {AccountSearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class Department @extends Record
@property {String} name
@property {boolean} includeChildren
@property {RecordRef} parent
@property {boolean} isInactive
@property {ClassTranslationList} classTranslationList
@property {RecordRefList} subsidiaryList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class DepartmentSearch @extends SearchRecord
@property {DepartmentSearchBasic} basic
@property {EmployeeSearchBasic} userJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class DepartmentSearchAdvanced @extends SearchRecord
@property {DepartmentSearch} criteria
@property {DepartmentSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class DepartmentSearchRow @extends SearchRow
@property {DepartmentSearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class Classification @extends Record
@property {String} name
@property {boolean} includeChildren
@property {RecordRef} parent
@property {boolean} isInactive
@property {ClassTranslationList} classTranslationList
@property {RecordRefList} subsidiaryList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class ClassificationSearch @extends SearchRecord
@property {ClassificationSearchBasic} basic
@property {EmployeeSearchBasic} userJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class ClassificationSearchAdvanced @extends SearchRecord
@property {ClassificationSearch} criteria
@property {ClassificationSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class ClassificationSearchRow @extends SearchRow
@property {ClassificationSearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class Location @extends Record
@property {String} name
@property {RecordRef} parent
@property {boolean} includeChildren
@property {RecordRefList} subsidiaryList
@property {boolean} isInactive
@property {String} tranPrefix
@property {Address} mainAddress
@property {Address} returnAddress
@property {RecordRef} logo
@property {boolean} makeInventoryAvailable
@property {boolean} makeInventoryAvailableStore
@property {ClassTranslationList} classTranslationList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class LocationSearch @extends SearchRecord
@property {LocationSearchBasic} basic
@property {AddressSearchBasic} addressJoin
@property {AddressSearchBasic} returnAddressJoin
@property {EmployeeSearchBasic} userJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class LocationSearchAdvanced @extends SearchRecord
@property {LocationSearch} criteria
@property {LocationSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class LocationSearchRow @extends SearchRow
@property {LocationSearchRowBasic} basic
@property {AddressSearchRowBasic} addressJoin
@property {AddressSearchRowBasic} returnAddressJoin
@property {EmployeeSearchRowBasic} userJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class UnitsType @extends Record
@property {String} name
@property {boolean} isInactive
@property {UnitsTypeUomList} uomList
@property {String} internalId
@property {String} externalId
*/
/*
@class UnitsTypeUom @extends Record
@property {String} internalId
@property {String} unitName
@property {String} pluralName
@property {String} abbreviation
@property {String} pluralAbbreviation
@property {float} conversionRate
@property {boolean} baseUnit
*/
/*
@class UnitsTypeUomList @extends Record
@property {UnitsTypeUom[]} uom
@property {boolean} replaceAll
*/
/*
@class ItemSearch @extends SearchRecord
@property {ItemSearchBasic} basic
@property {BinSearchBasic} binNumberJoin
@property {ItemBinNumberSearchBasic} binOnHandJoin
@property {ItemSearchBasic} correlatedItemJoin
@property {ItemRevisionSearchBasic} effectiveRevisionJoin
@property {FileSearchBasic} fileJoin
@property {InventoryDetailSearchBasic} inventoryDetailJoin
@property {LocationSearchBasic} inventoryLocationJoin
@property {InventoryNumberSearchBasic} inventoryNumberJoin
@property {InventoryNumberBinSearchBasic} inventoryNumberBinOnHandJoin
@property {ItemSearchBasic} memberItemJoin
@property {ItemRevisionSearchBasic} obsoleteRevisionJoin
@property {ItemSearchBasic} parentJoin
@property {LocationSearchBasic} preferredLocationJoin
@property {VendorSearchBasic} preferredVendorJoin
@property {PricingSearchBasic} pricingJoin
@property {CustomerSearchBasic} shopperJoin
@property {TransactionSearchBasic} transactionJoin
@property {EmployeeSearchBasic} userJoin
@property {NoteSearchBasic} userNotesJoin
@property {VendorSearchBasic} vendorJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class ItemSearchAdvanced @extends SearchRecord
@property {ItemSearch} criteria
@property {ItemSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class ItemSearchRow @extends SearchRow
@property {ItemSearchRowBasic} basic
@property {BinSearchRowBasic} binNumberJoin
@property {ItemBinNumberSearchRowBasic} binOnHandJoin
@property {ItemSearchRowBasic} correlatedItemJoin
@property {ItemRevisionSearchRowBasic} effectiveRevisionJoin
@property {FileSearchRowBasic} fileJoin
@property {InventoryDetailSearchRowBasic} inventoryDetailJoin
@property {LocationSearchRowBasic} inventoryLocationJoin
@property {InventoryNumberSearchRowBasic} inventoryNumberJoin
@property {InventoryNumberBinSearchRowBasic} inventoryNumberBinOnHandJoin
@property {ItemSearchRowBasic} memberItemJoin
@property {ItemRevisionSearchRowBasic} obsoleteRevisionJoin
@property {ItemSearchRowBasic} parentJoin
@property {LocationSearchRowBasic} preferredLocationJoin
@property {VendorSearchRowBasic} preferredVendorJoin
@property {PricingSearchRowBasic} pricingJoin
@property {CustomerSearchRowBasic} shopperJoin
@property {TransactionSearchRowBasic} transactionJoin
@property {EmployeeSearchRowBasic} userJoin
@property {NoteSearchRowBasic} userNotesJoin
@property {VendorSearchRowBasic} vendorJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class ContactRole @extends Record
@property {String} name
@property {String} description
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class Bin @extends Record
@property {String} binNumber
@property {RecordRef} location
@property {String} memo
@property {boolean} isInactive
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class BinSearch @extends SearchRecord
@property {BinSearchBasic} basic
@property {EmployeeSearchBasic} userJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class BinSearchAdvanced @extends SearchRecord
@property {BinSearch} criteria
@property {BinSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class BinSearchRow @extends SearchRow
@property {BinSearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class SalesTaxItem @extends Record
@property {String} itemId
@property {String} displayName
@property {String} description
@property {String} rate
@property {RecordRef} taxType
@property {RecordRef} taxAgency
@property {RecordRef} purchaseAccount
@property {RecordRef} saleAccount
@property {boolean} isInactive
@property {dateTime} effectiveFrom
@property {dateTime} validUntil
@property {RecordRefList} subsidiaryList
@property {boolean} includeChildren
@property {boolean} eccode
@property {boolean} reverseCharge
@property {RecordRef} parent
@property {boolean} service
@property {boolean} exempt
@property {boolean} isDefault
@property {boolean} excludeFromTaxReports
@property {SalesTaxItemAvailable} available
@property {boolean} export
@property {RecordRef} taxAccount
@property {String} county
@property {String} city
@property {String} state
@property {String} zip
@property {RecordRef} nexusCountry
@property {String} internalId
@property {String} externalId
*/
/*
@class TaxGroup @extends Record
@property {String} itemId
@property {String} description
@property {String} state
@property {RecordRefList} subsidiaryList
@property {RecordRef} taxitem1
@property {String} unitprice1
@property {RecordRef} taxitem2
@property {String} unitprice2
@property {boolean} piggyback
@property {boolean} isInactive
@property {float} rate
@property {RecordRef} taxType
@property {boolean} includeChildren
@property {String} county
@property {String} city
@property {String} zip
@property {RecordRef} nexusCountry
@property {boolean} isDefault
@property {TaxGroupTaxItemList} taxItemList
@property {String} internalId
@property {String} externalId
*/
/*
@class TaxGroupTaxItem @extends Record
@property {RecordRef} taxName
@property {float} rate
@property {float} basis
@property {String} taxType
*/
/*
@class TaxGroupTaxItemList @extends Record
@property {TaxGroupTaxItem[]} taxItem
@property {boolean} replaceAll
*/
/*
@class TaxType @extends Record
@property {String} name
@property {String} description
@property {TaxTypeNexusesTaxList} nexusesTaxList
@property {String} internalId
@property {String} externalId
*/
/*
@class TaxTypeNexusesTax @extends Record
@property {RecordRef} nexus
@property {String} description
@property {RecordRef} saleTaxAcct
@property {RecordRef} purchTaxAcct
*/
/*
@class TaxTypeNexusesTaxList @extends Record
@property {TaxTypeNexusesTax[]} nexusesTax
@property {boolean} replaceAll
*/
/*
@class SerializedInventoryItem @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {String} itemId
@property {String} upcCode
@property {String} displayName
@property {ItemMatrixType} matrixType
@property {boolean} includeChildren
@property {String} vendorName
@property {RecordRef} parent
@property {boolean} isOnline
@property {boolean} isHazmatItem
@property {String} hazmatId
@property {String} hazmatShippingName
@property {String} hazmatHazardClass
@property {HazmatPackingGroup} hazmatPackingGroup
@property {String} hazmatItemUnits
@property {float} hazmatItemUnitsQty
@property {boolean} isGcoCompliant
@property {boolean} offerSupport
@property {boolean} isInactive
@property {boolean} availableToPartners
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {ItemCostingMethod} costingMethod
@property {RecordRefList} subsidiaryList
@property {String} purchaseDescription
@property {boolean} copyDescription
@property {RecordRef} issueProduct
@property {String} currency
@property {RecordRef} cogsAccount
@property {RecordRef} intercoCogsAccount
@property {RecordRef} vendor
@property {String} salesDescription
@property {dateTime} lastInvtCountDate
@property {dateTime} nextInvtCountDate
@property {integer} invtCountInterval
@property {ItemInvtClassification} invtClassification
@property {RecordRef} incomeAccount
@property {RecordRef} intercoIncomeAccount
@property {boolean} isTaxable
@property {RecordRef} taxSchedule
@property {RecordRef} dropshipExpenseAccount
@property {RecordRef} assetAccount
@property {boolean} matchBillToReceipt
@property {RecordRef} billQtyVarianceAcct
@property {RecordRef} billPriceVarianceAcct
@property {RecordRef} billExchRateVarianceAcct
@property {RecordRef} gainLossAccount
@property {float} shippingCost
@property {float} handlingCost
@property {float} weight
@property {String} costingMethodDisplay
@property {String} shippingCostUnits
@property {String} handlingCostUnits
@property {RecordRef} unitsType
@property {RecordRef} stockUnit
@property {RecordRef} purchaseUnit
@property {RecordRef} saleUnit
@property {String} minimumQuantityUnits
@property {String} safetyStockLevelUnits
@property {RecordRef} billingSchedule
@property {boolean} trackLandedCost
@property {boolean} isDropShipItem
@property {boolean} isSpecialOrderItem
@property {String} stockDescription
@property {RecordRef} deferredRevenueAccount
@property {boolean} producer
@property {String} manufacturer
@property {RecordRef} revRecSchedule
@property {String} mpn
@property {boolean} multManufactureAddr
@property {String} manufacturerAddr1
@property {String} manufacturerCity
@property {String} manufacturerState
@property {String} manufacturerZip
@property {Country} countryOfManufacture
@property {RecordRef} defaultItemShipMethod
@property {ItemCarrier} itemCarrier
@property {boolean} roundUpAsComponent
@property {float} purchaseOrderQuantity
@property {float} purchaseOrderAmount
@property {float} purchaseOrderQuantityDiff
@property {float} receiptQuantity
@property {float} receiptAmount
@property {float} receiptQuantityDiff
@property {RecordRefList} itemShipMethodList
@property {String} manufacturerTaxId
@property {String} scheduleBNumber
@property {integer} scheduleBQuantity
@property {ScheduleBCode} scheduleBCode
@property {String} manufacturerTariff
@property {ItemPreferenceCriterion} preferenceCriterion
@property {integer} minimumQuantity
@property {boolean} enforceMinQtyInternally
@property {RecordRef} shipPackage
@property {boolean} shipIndividually
@property {RecordRef} softDescriptor
@property {RecordRef} costCategory
@property {boolean} pricesIncludeTax
@property {RecordRef} quantityPricingSchedule
@property {boolean} useMarginalRates
@property {ItemCostEstimateType} costEstimateType
@property {float} costEstimate
@property {float} transferPrice
@property {ItemOverallQuantityPricingType} overallQuantityPricingType
@property {RecordRef} pricingGroup
@property {RecordRef} preferredLocation
@property {float} vsoePrice
@property {VsoeSopGroup} vsoeSopGroup
@property {VsoeDeferral} vsoeDeferral
@property {VsoePermitDiscount} vsoePermitDiscount
@property {boolean} vsoeDelivered
@property {float} cost
@property {String} costUnits
@property {String} quantityReorderUnits
@property {integer} reorderMultiple
@property {float} totalValue
@property {boolean} useBins
@property {integer} leadTime
@property {boolean} autoLeadTime
@property {boolean} autoReorderPoint
@property {boolean} autoPreferredStockLevel
@property {float} preferredStockLevelDays
@property {float} averageCost
@property {float} safetyStockLevel
@property {float} lastPurchasePrice
@property {integer} safetyStockLevelDays
@property {integer} backwardConsumptionDays
@property {boolean} seasonalDemand
@property {float} demandModifier
@property {String} storeDisplayName
@property {RecordRef} storeDisplayThumbnail
@property {ItemWeightUnit} weightUnit
@property {String} weightUnits
@property {RecordRef} storeDisplayImage
@property {String} storeDescription
@property {String} storeDetailedDescription
@property {RecordRef} storeItemTemplate
@property {String} pageTitle
@property {String} metaTagHtml
@property {boolean} excludeFromSitemap
@property {SitemapPriority} sitemapPriority
@property {String} searchKeywords
@property {boolean} isDonationItem
@property {boolean} showDefaultDonationAmount
@property {float} maxDonationAmount
@property {String} shoppingDotComCategory
@property {integer} shopzillaCategoryId
@property {String} nexTagCategory
@property {float} quantityOnHand
@property {String} quantityOnHandUnits
@property {float} onHandValueMli
@property {String} serialNumbers
@property {float} reorderPoint
@property {float} preferredStockLevel
@property {String} reorderPointUnits
@property {float} defaultReturnCost
@property {RecordRef} supplyReplenishmentMethod
@property {RecordRef} alternateDemandSourceItem
@property {float} fixedLotSize
@property {PeriodicLotSizeType} periodicLotSizeType
@property {RecordRef} supplyType
@property {integer} demandTimeFence
@property {integer} supplyTimeFence
@property {integer} rescheduleInDays
@property {integer} rescheduleOutDays
@property {integer} periodicLotSizeDays
@property {RecordRef} supplyLotSizingMethod
@property {integer} forwardConsumptionDays
@property {RecordRef} demandSource
@property {float} quantityOnOrder
@property {String} preferredStockLevelUnits
@property {float} quantityCommitted
@property {float} quantityAvailable
@property {float} quantityBackOrdered
@property {RecordRef} purchaseTaxCode
@property {RecordRef} purchasePriceVarianceAcct
@property {float} rate
@property {RecordRef} salesTaxCode
@property {boolean} onSpecial
@property {boolean} dontShowPrice
@property {String} noPriceMessage
@property {String} outOfStockMessage
@property {String} specialsDescription
@property {ItemOutOfStockBehavior} outOfStockBehavior
@property {String} relatedItemsDescription
@property {String} featuredDescription
@property {ProductFeedList} productFeedList
@property {String} urlComponent
@property {ItemOptionsList} itemOptionsList
@property {MatrixOptionList} matrixOptionList
@property {ItemVendorList} itemVendorList
@property {PricingMatrix} pricingMatrix
@property {ItemAccountingBookDetailList} accountingBookDetailList
@property {RecordRefList} itemNumberOptionsList
@property {SerializedInventoryItemNumbersList} numbersList
@property {InventoryItemBinNumberList} binNumberList
@property {SiteCategoryList} siteCategoryList
@property {SerializedInventoryItemLocationsList} locationsList
@property {TranslationList} translationsList
@property {PresentationItemList} presentationItemList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class SerializedInventoryItemLocations @extends Record
@property {String} location
@property {float} quantityOnHand
@property {float} onHandValueMli
@property {String} serialNumbers
@property {float} averageCostMli
@property {float} lastPurchasePriceMli
@property {float} reorderPoint
@property {float} preferredStockLevel
@property {integer} leadTime
@property {float} defaultReturnCost
@property {boolean} isWip
@property {float} safetyStockLevel
@property {float} cost
@property {RecordRef} inventoryCostTemplate
@property {float} buildTime
@property {dateTime} lastInvtCountDate
@property {dateTime} nextInvtCountDate
@property {integer} invtCountInterval
@property {ItemInvtClassification} invtClassification
@property {float} costingLotSize
@property {float} quantityOnOrder
@property {float} quantityCommitted
@property {float} quantityAvailable
@property {float} quantityBackOrdered
@property {RecordRef} locationId
@property {RecordRef} supplyReplenishmentMethod
@property {RecordRef} alternateDemandSourceItem
@property {float} fixedLotSize
@property {PeriodicLotSizeType} periodicLotSizeType
@property {integer} periodicLotSizeDays
@property {RecordRef} supplyType
@property {RecordRef} supplyLotSizingMethod
@property {RecordRef} demandSource
@property {integer} backwardConsumptionDays
@property {integer} forwardConsumptionDays
@property {integer} demandTimeFence
@property {integer} supplyTimeFence
@property {integer} rescheduleInDays
@property {integer} rescheduleOutDays
*/
/*
@class SerializedInventoryItemLocationsList @extends Record
@property {SerializedInventoryItemLocations[]} locations
@property {boolean} replaceAll
*/
/*
@class SerializedInventoryItemNumbers @extends Record
@property {RecordRef} serialNumber
*/
/*
@class SerializedInventoryItemNumbersList @extends Record
@property {SerializedInventoryItemNumbers[]} numbers
@property {boolean} replaceAll
*/
/*
@class LotNumberedInventoryItem @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {String} itemId
@property {String} upcCode
@property {String} displayName
@property {ItemMatrixType} matrixType
@property {boolean} includeChildren
@property {String} vendorName
@property {RecordRef} parent
@property {boolean} isOnline
@property {boolean} isHazmatItem
@property {String} hazmatId
@property {String} hazmatShippingName
@property {String} hazmatHazardClass
@property {HazmatPackingGroup} hazmatPackingGroup
@property {String} hazmatItemUnits
@property {float} hazmatItemUnitsQty
@property {boolean} isGcoCompliant
@property {boolean} offerSupport
@property {boolean} isInactive
@property {boolean} availableToPartners
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {ItemCostingMethod} costingMethod
@property {RecordRefList} subsidiaryList
@property {String} purchaseDescription
@property {boolean} copyDescription
@property {String} currency
@property {RecordRef} cogsAccount
@property {RecordRef} intercoCogsAccount
@property {RecordRef} vendor
@property {String} salesDescription
@property {RecordRef} incomeAccount
@property {RecordRef} intercoIncomeAccount
@property {RecordRef} issueProduct
@property {RecordRef} taxSchedule
@property {RecordRef} dropshipExpenseAccount
@property {boolean} isTaxable
@property {RecordRef} assetAccount
@property {boolean} matchBillToReceipt
@property {RecordRef} billQtyVarianceAcct
@property {RecordRef} billPriceVarianceAcct
@property {RecordRef} billExchRateVarianceAcct
@property {RecordRef} gainLossAccount
@property {float} shippingCost
@property {float} handlingCost
@property {float} weight
@property {String} costingMethodDisplay
@property {String} shippingCostUnits
@property {String} handlingCostUnits
@property {RecordRef} unitsType
@property {RecordRef} stockUnit
@property {RecordRef} purchaseUnit
@property {RecordRef} saleUnit
@property {String} minimumQuantityUnits
@property {String} safetyStockLevelUnits
@property {RecordRef} billingSchedule
@property {boolean} trackLandedCost
@property {boolean} isDropShipItem
@property {boolean} isSpecialOrderItem
@property {String} stockDescription
@property {RecordRef} deferredRevenueAccount
@property {boolean} producer
@property {String} manufacturer
@property {RecordRef} revRecSchedule
@property {String} mpn
@property {boolean} multManufactureAddr
@property {String} manufacturerAddr1
@property {String} manufacturerCity
@property {String} manufacturerState
@property {String} manufacturerZip
@property {Country} countryOfManufacture
@property {RecordRef} defaultItemShipMethod
@property {ItemCarrier} itemCarrier
@property {boolean} roundUpAsComponent
@property {float} purchaseOrderQuantity
@property {float} purchaseOrderAmount
@property {float} purchaseOrderQuantityDiff
@property {float} receiptQuantity
@property {float} receiptAmount
@property {float} receiptQuantityDiff
@property {RecordRefList} itemShipMethodList
@property {String} manufacturerTaxId
@property {String} scheduleBNumber
@property {integer} scheduleBQuantity
@property {ScheduleBCode} scheduleBCode
@property {String} manufacturerTariff
@property {ItemPreferenceCriterion} preferenceCriterion
@property {integer} minimumQuantity
@property {boolean} enforceMinQtyInternally
@property {RecordRef} shipPackage
@property {boolean} shipIndividually
@property {RecordRef} softDescriptor
@property {RecordRef} costCategory
@property {boolean} pricesIncludeTax
@property {RecordRef} purchasePriceVarianceAcct
@property {RecordRef} quantityPricingSchedule
@property {boolean} useMarginalRates
@property {ItemCostEstimateType} costEstimateType
@property {float} costEstimate
@property {float} transferPrice
@property {ItemOverallQuantityPricingType} overallQuantityPricingType
@property {RecordRef} pricingGroup
@property {RecordRef} preferredLocation
@property {float} vsoePrice
@property {VsoeSopGroup} vsoeSopGroup
@property {VsoeDeferral} vsoeDeferral
@property {VsoePermitDiscount} vsoePermitDiscount
@property {boolean} vsoeDelivered
@property {float} cost
@property {String} costUnits
@property {integer} reorderMultiple
@property {String} quantityReorderUnits
@property {float} totalValue
@property {boolean} useBins
@property {float} averageCost
@property {integer} leadTime
@property {boolean} autoLeadTime
@property {float} lastPurchasePrice
@property {boolean} autoReorderPoint
@property {boolean} autoPreferredStockLevel
@property {float} preferredStockLevelDays
@property {float} safetyStockLevel
@property {integer} safetyStockLevelDays
@property {integer} backwardConsumptionDays
@property {boolean} seasonalDemand
@property {float} demandModifier
@property {String} storeDisplayName
@property {RecordRef} storeDisplayThumbnail
@property {ItemWeightUnit} weightUnit
@property {String} weightUnits
@property {RecordRef} storeDisplayImage
@property {String} storeDescription
@property {String} storeDetailedDescription
@property {RecordRef} storeItemTemplate
@property {String} pageTitle
@property {String} metaTagHtml
@property {boolean} excludeFromSitemap
@property {SitemapPriority} sitemapPriority
@property {String} searchKeywords
@property {boolean} isDonationItem
@property {boolean} showDefaultDonationAmount
@property {float} maxDonationAmount
@property {String} shoppingDotComCategory
@property {integer} shopzillaCategoryId
@property {String} nexTagCategory
@property {float} quantityOnHand
@property {String} quantityOnHandUnits
@property {dateTime} expirationDate
@property {dateTime} lastInvtCountDate
@property {dateTime} nextInvtCountDate
@property {integer} invtCountInterval
@property {ItemInvtClassification} invtClassification
@property {float} onHandValueMli
@property {String} serialNumbers
@property {float} reorderPoint
@property {float} preferredStockLevel
@property {String} reorderPointUnits
@property {float} defaultReturnCost
@property {RecordRef} supplyReplenishmentMethod
@property {RecordRef} alternateDemandSourceItem
@property {float} fixedLotSize
@property {PeriodicLotSizeType} periodicLotSizeType
@property {RecordRef} supplyType
@property {integer} demandTimeFence
@property {integer} supplyTimeFence
@property {integer} rescheduleInDays
@property {integer} rescheduleOutDays
@property {integer} periodicLotSizeDays
@property {RecordRef} supplyLotSizingMethod
@property {integer} forwardConsumptionDays
@property {RecordRef} demandSource
@property {float} quantityOnOrder
@property {String} preferredStockLevelUnits
@property {float} quantityCommitted
@property {float} quantityAvailable
@property {float} quantityBackOrdered
@property {RecordRef} purchaseTaxCode
@property {float} rate
@property {RecordRef} salesTaxCode
@property {boolean} dontShowPrice
@property {String} noPriceMessage
@property {String} outOfStockMessage
@property {boolean} onSpecial
@property {ItemOutOfStockBehavior} outOfStockBehavior
@property {String} specialsDescription
@property {String} relatedItemsDescription
@property {String} featuredDescription
@property {ProductFeedList} productFeedList
@property {String} urlComponent
@property {ItemOptionsList} itemOptionsList
@property {MatrixOptionList} matrixOptionList
@property {ItemVendorList} itemVendorList
@property {PricingMatrix} pricingMatrix
@property {ItemAccountingBookDetailList} accountingBookDetailList
@property {RecordRefList} itemNumberOptionsList
@property {LotNumberedInventoryItemNumbersList} numbersList
@property {InventoryItemBinNumberList} binNumberList
@property {SiteCategoryList} siteCategoryList
@property {LotNumberedInventoryItemLocationsList} locationsList
@property {TranslationList} translationsList
@property {PresentationItemList} presentationItemList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class LotNumberedInventoryItemLocations @extends Record
@property {String} location
@property {float} quantityOnHand
@property {float} onHandValueMli
@property {String} serialNumbers
@property {dateTime} expirationDate
@property {float} averageCostMli
@property {float} lastPurchasePriceMli
@property {float} reorderPoint
@property {float} preferredStockLevel
@property {integer} leadTime
@property {float} defaultReturnCost
@property {float} safetyStockLevel
@property {float} cost
@property {RecordRef} inventoryCostTemplate
@property {float} buildTime
@property {dateTime} lastInvtCountDate
@property {dateTime} nextInvtCountDate
@property {boolean} isWip
@property {integer} invtCountInterval
@property {ItemInvtClassification} invtClassification
@property {float} costingLotSize
@property {float} quantityOnOrder
@property {float} quantityCommitted
@property {float} quantityAvailable
@property {float} quantityBackOrdered
@property {RecordRef} locationId
@property {RecordRef} locationlookup
@property {String} location_display
@property {RecordRef} supplyReplenishmentMethod
@property {RecordRef} alternateDemandSourceItem
@property {float} fixedLotSize
@property {PeriodicLotSizeType} periodicLotSizeType
@property {integer} periodicLotSizeDays
@property {RecordRef} supplyType
@property {RecordRef} supplyLotSizingMethod
@property {RecordRef} demandSource
@property {integer} backwardConsumptionDays
@property {integer} forwardConsumptionDays
@property {integer} demandTimeFence
@property {integer} supplyTimeFence
@property {integer} rescheduleInDays
@property {integer} rescheduleOutDays
*/
/*
@class LotNumberedInventoryItemLocationsList @extends Record
@property {LotNumberedInventoryItemLocations[]} locations
@property {boolean} replaceAll
*/
/*
@class LotNumberedInventoryItemNumbers @extends Record
@property {RecordRef} serialNumber
@property {float} quantityOnHand
@property {dateTime} expirationDate
*/
/*
@class LotNumberedInventoryItemNumbersList @extends Record
@property {LotNumberedInventoryItemNumbers[]} numbers
@property {boolean} replaceAll
*/
/*
@class GiftCertificateItem @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {String} itemId
@property {String} upcCode
@property {String} displayName
@property {boolean} includeChildren
@property {RecordRef} parent
@property {boolean} isOnline
@property {boolean} isGcoCompliant
@property {boolean} offerSupport
@property {boolean} isInactive
@property {boolean} availableToPartners
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRefList} subsidiaryList
@property {String} salesDescription
@property {RecordRef} incomeAccount
@property {RecordRef} liabilityAccount
@property {integer} daysBeforeExpiration
@property {boolean} isTaxable
@property {float} rate
@property {String} urlComponent
@property {RecordRef} salesTaxCode
@property {boolean} pricesIncludeTax
@property {RecordRef} taxSchedule
@property {float} costEstimate
@property {ItemCostEstimateType} costEstimateType
@property {RecordRef} billingSchedule
@property {RecordRef} issueProduct
@property {boolean} isFulfillable
@property {String} storeDisplayName
@property {RecordRef} storeDisplayThumbnail
@property {RecordRef} storeDisplayImage
@property {String} storeDescription
@property {String} storeDetailedDescription
@property {RecordRef} storeItemTemplate
@property {String} pageTitle
@property {String} metaTagHtml
@property {boolean} excludeFromSitemap
@property {SitemapPriority} sitemapPriority
@property {String} searchKeywords
@property {boolean} isDonationItem
@property {boolean} showDefaultDonationAmount
@property {float} maxDonationAmount
@property {boolean} dontShowPrice
@property {String} noPriceMessage
@property {String} outOfStockMessage
@property {boolean} onSpecial
@property {ItemOutOfStockBehavior} outOfStockBehavior
@property {String} specialsDescription
@property {String} featuredDescription
@property {String} relatedItemsDescription
@property {PricingMatrix} pricingMatrix
@property {GiftCertificateItemAuthCodesList} authCodesList
@property {SiteCategoryList} siteCategoryList
@property {TranslationList} translationsList
@property {ItemOptionsList} itemOptionsList
@property {PresentationItemList} presentationItemList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class GiftCertificateItemAuthCodes @extends Record
@property {String} authCode
@property {boolean} used
*/
/*
@class GiftCertificateItemAuthCodesList @extends Record
@property {GiftCertificateItemAuthCodes[]} authCodes
@property {boolean} replaceAll
*/
/*
@class Subsidiary @extends Record
@property {String} name
@property {RecordRef} parent
@property {boolean} isInactive
@property {boolean} showSubsidiaryName
@property {String} url
@property {RecordRef} logo
@property {String} tranPrefix
@property {RecordRef} pageLogo
@property {String} state
@property {Country} country
@property {Address} mainAddress
@property {Address} shippingAddress
@property {Address} returnAddress
@property {String} legalName
@property {boolean} isElimination
@property {RecordRef} fiscalCalendar
@property {RecordRef} taxFiscalCalendar
@property {boolean} allowPayroll
@property {String} email
@property {RecordRef} currency
@property {float} purchaseOrderQuantity
@property {float} purchaseOrderAmount
@property {float} purchaseOrderQuantityDiff
@property {float} receiptQuantity
@property {float} receiptAmount
@property {float} receiptQuantityDiff
@property {String} fax
@property {String} edition
@property {String} federalIdNumber
@property {String} addrLanguage
@property {String} nonConsol
@property {String} consol
@property {String} state1TaxNumber
@property {String} ssnOrTin
@property {RecordRef} interCoAccount
@property {SubsidiaryNexusList} nexusList
@property {SubsidiaryAccountingBookDetailList} accountingBookDetailList
@property {RecordRef} checkLayout
@property {String} inboundEmail
@property {ClassTranslationList} classTranslationList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class SubsidiaryNexus @extends Record
@property {RecordRef} nexusId
@property {String} country
*/
/*
@class SubsidiaryNexusList @extends Record
@property {SubsidiaryNexus[]} nexus
@property {boolean} replaceAll
*/
/*
@class SubsidiarySearch @extends SearchRecord
@property {SubsidiarySearchBasic} basic
@property {AddressSearchBasic} addressJoin
@property {AccountSearchBasic} defaultAdvanceToApplyAccountJoin
@property {AddressSearchBasic} returnAddressJoin
@property {AddressSearchBasic} shippingAddressJoin
@property {EmployeeSearchBasic} userJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class SubsidiarySearchAdvanced @extends SearchRecord
@property {SubsidiarySearch} criteria
@property {SubsidiarySearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class SubsidiarySearchRow @extends SearchRow
@property {SubsidiarySearchRowBasic} basic
@property {AddressSearchRowBasic} addressJoin
@property {AccountSearchRowBasic} defaultAdvanceToApplyAccountJoin
@property {AddressSearchRowBasic} returnAddressJoin
@property {AddressSearchRowBasic} shippingAddressJoin
@property {EmployeeSearchRowBasic} userJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class GiftCertificate @extends Record
@property {String} giftCertCode
@property {String} sender
@property {String} name
@property {String} email
@property {String} message
@property {dateTime} expirationDate
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {float} originalAmount
@property {float} amountRemaining
@property {String} internalId
*/
/*
@class GiftCertificateSearch @extends SearchRecord
@property {GiftCertificateSearchBasic} basic
@property {EmployeeSearchBasic} userJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class GiftCertificateSearchAdvanced @extends SearchRecord
@property {GiftCertificateSearch} criteria
@property {GiftCertificateSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class GiftCertificateSearchRow @extends SearchRow
@property {GiftCertificateSearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class PartnerCategory @extends Record
@property {String} name
@property {RecordRef} parent
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class VendorCategory @extends Record
@property {String} name
@property {boolean} isTaxAgency
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class KitItem @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {String} itemId
@property {String} upcCode
@property {String} displayName
@property {RecordRef} parent
@property {boolean} printItems
@property {boolean} isOnline
@property {boolean} isGcoCompliant
@property {boolean} offerSupport
@property {boolean} isInactive
@property {boolean} availableToPartners
@property {RecordRef} department
@property {RecordRefList} subsidiaryList
@property {RecordRef} class
@property {boolean} includeChildren
@property {RecordRef} location
@property {String} description
@property {RecordRef} incomeAccount
@property {RecordRef} taxSchedule
@property {float} shippingCost
@property {float} handlingCost
@property {boolean} isTaxable
@property {boolean} deferRevRec
@property {RecordRef} salesTaxCode
@property {float} weight
@property {RecordRef} weightUnit
@property {float} rate
@property {RecordRef} billingSchedule
@property {RecordRef} deferredRevenueAccount
@property {RecordRef} revRecSchedule
@property {String} stockDescription
@property {boolean} producer
@property {String} manufacturer
@property {String} mpn
@property {boolean} multManufactureAddr
@property {String} manufactureraddr1
@property {String} manufacturerCity
@property {String} manufacturerState
@property {String} manufacturerZip
@property {Country} countryOfManufacture
@property {RecordRef} defaultItemShipMethod
@property {ItemCarrier} itemCarrier
@property {RecordRefList} itemShipMethodList
@property {String} manufacturerTaxId
@property {String} scheduleBNumber
@property {integer} scheduleBQuantity
@property {RecordRef} scheduleBCode
@property {String} manufacturerTariff
@property {ItemPreferenceCriterion} preferenceCriterion
@property {RecordRef} issueProduct
@property {integer} minimumQuantity
@property {boolean} enforceMinQtyInternally
@property {RecordRef} softDescriptor
@property {boolean} isFulfillable
@property {boolean} pricesIncludeTax
@property {RecordRef} quantityPricingSchedule
@property {boolean} useMarginalRates
@property {ItemCostEstimateType} costEstimateType
@property {boolean} isHazmatItem
@property {String} hazmatId
@property {String} hazmatShippingName
@property {String} hazmatHazardClass
@property {HazmatPackingGroup} hazmatPackingGroup
@property {String} hazmatItemUnits
@property {float} hazmatItemUnitsQty
@property {float} costEstimate
@property {ItemOverallQuantityPricingType} overallQuantityPricingType
@property {RecordRef} pricingGroup
@property {float} vsoePrice
@property {VsoeSopGroup} vsoeSopGroup
@property {VsoeDeferral} vsoeDeferral
@property {VsoePermitDiscount} vsoePermitDiscount
@property {boolean} vsoeDelivered
@property {boolean} shipIndividually
@property {RecordRef} shipPackage
@property {String} storeDisplayName
@property {RecordRef} storeDisplayThumbnail
@property {String} outOfStockMessage
@property {RecordRef} storeDisplayImage
@property {String} storeDescription
@property {String} storeDetailedDescription
@property {RecordRef} storeItemTemplate
@property {String} pageTitle
@property {String} urlComponent
@property {String} metaTagHtml
@property {boolean} excludeFromSitemap
@property {SitemapPriority} sitemapPriority
@property {String} searchKeywords
@property {ItemOptionsList} itemOptionsList
@property {boolean} isDonationItem
@property {boolean} showDefaultDonationAmount
@property {float} maxDonationAmount
@property {boolean} dontShowPrice
@property {String} noPriceMessage
@property {String} shoppingDotComCategory
@property {integer} shopzillaCategoryId
@property {ItemOutOfStockBehavior} outOfStockBehavior
@property {String} nexTagCategory
@property {ProductFeedList} productFeedList
@property {String} relatedItemsDescription
@property {boolean} onSpecial
@property {String} specialsDescription
@property {String} featuredDescription
@property {PricingMatrix} pricingMatrix
@property {SiteCategoryList} siteCategoryList
@property {ItemMemberList} memberList
@property {ItemAccountingBookDetailList} accountingBookDetailList
@property {TranslationList} translationsList
@property {PresentationItemList} presentationItemList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class AssemblyItem @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {String} itemId
@property {String} upcCode
@property {String} displayName
@property {String} vendorName
@property {RecordRef} parent
@property {boolean} printItems
@property {boolean} isOnline
@property {boolean} isGcoCompliant
@property {boolean} offerSupport
@property {boolean} isInactive
@property {boolean} availableToPartners
@property {RecordRefList} subsidiaryList
@property {RecordRef} department
@property {boolean} includeChildren
@property {RecordRef} class
@property {RecordRef} location
@property {String} description
@property {RecordRef} cogsAccount
@property {RecordRef} incomeAccount
@property {RecordRef} intercoIncomeAccount
@property {RecordRef} assetAccount
@property {boolean} matchBillToReceipt
@property {RecordRef} billQtyVarianceAcct
@property {RecordRef} billPriceVarianceAcct
@property {RecordRef} billExchRateVarianceAcct
@property {RecordRef} gainLossAccount
@property {RecordRef} salesTaxCode
@property {boolean} useComponentYield
@property {RecordRef} wipVarianceAcct
@property {RecordRef} purchaseTaxCode
@property {RecordRef} scrapAcct
@property {RecordRef} taxSchedule
@property {RecordRef} wipAcct
@property {float} shippingCost
@property {float} handlingCost
@property {float} weight
@property {ItemWeightUnit} weightUnit
@property {boolean} isTaxable
@property {ItemCostingMethod} costingMethod
@property {float} rate
@property {String} costingMethodDisplay
@property {RecordRef} unitsType
@property {RecordRef} stockUnit
@property {RecordRef} purchaseUnit
@property {RecordRef} saleUnit
@property {boolean} trackLandedCost
@property {RecordRef} billingSchedule
@property {RecordRef} deferredRevenueAccount
@property {RecordRef} revRecSchedule
@property {String} stockDescription
@property {boolean} producer
@property {String} manufacturer
@property {String} mpn
@property {boolean} multManufactureAddr
@property {String} manufactureraddr1
@property {String} manufacturerCity
@property {String} manufacturerState
@property {String} manufacturerZip
@property {Country} countryOfManufacture
@property {AssemblyItemEffectiveBomControl} effectiveBomControl
@property {String} defaultRevision
@property {boolean} roundUpAsComponent
@property {float} purchaseOrderQuantity
@property {float} purchaseOrderAmount
@property {float} purchaseOrderQuantityDiff
@property {float} receiptQuantity
@property {float} receiptAmount
@property {float} receiptQuantityDiff
@property {RecordRef} defaultItemShipMethod
@property {ItemCarrier} itemCarrier
@property {RecordRefList} itemShipMethodList
@property {String} manufacturerTaxId
@property {String} scheduleBNumber
@property {integer} scheduleBQuantity
@property {RecordRef} scheduleBCode
@property {String} manufacturerTariff
@property {ItemPreferenceCriterion} preferenceCriterion
@property {RecordRef} issueProduct
@property {integer} minimumQuantity
@property {dateTime} lastInvtCountDate
@property {dateTime} nextInvtCountDate
@property {integer} invtCountInterval
@property {ItemInvtClassification} invtClassification
@property {boolean} enforceMinQtyInternally
@property {RecordRef} softDescriptor
@property {boolean} isSpecialWorkOrderItem
@property {RecordRef} costCategory
@property {boolean} pricesIncludeTax
@property {RecordRef} prodQtyVarianceAcct
@property {RecordRef} prodPriceVarianceAcct
@property {RecordRef} purchasePriceVarianceAcct
@property {RecordRef} quantityPricingSchedule
@property {boolean} buildEntireAssembly
@property {float} quantityOnHand
@property {boolean} useMarginalRates
@property {ItemCostEstimateType} costEstimateType
@property {boolean} isHazmatItem
@property {String} hazmatId
@property {String} hazmatShippingName
@property {String} hazmatHazardClass
@property {HazmatPackingGroup} hazmatPackingGroup
@property {String} hazmatItemUnits
@property {float} hazmatItemUnitsQty
@property {float} costEstimate
@property {float} transferPrice
@property {ItemOverallQuantityPricingType} overallQuantityPricingType
@property {RecordRef} pricingGroup
@property {RecordRef} intercoCogsAccount
@property {float} vsoePrice
@property {VsoeSopGroup} vsoeSopGroup
@property {VsoeDeferral} vsoeDeferral
@property {VsoePermitDiscount} vsoePermitDiscount
@property {boolean} vsoeDelivered
@property {RecordRef} unbuildVarianceAccount
@property {boolean} deferRevRec
@property {RecordRef} dropshipExpenseAccount
@property {RecordRef} preferredLocation
@property {float} totalValue
@property {boolean} useBins
@property {float} averageCost
@property {integer} leadTime
@property {boolean} autoLeadTime
@property {integer} buildTime
@property {float} lastPurchasePrice
@property {String} purchaseDescription
@property {float} safetyStockLevel
@property {integer} safetyStockLevelDays
@property {boolean} seasonalDemand
@property {integer} reorderMultiple
@property {float} cost
@property {float} reorderPoint
@property {float} demandModifier
@property {RecordRef} distributionNetwork
@property {RecordRef} distributionCategory
@property {float} preferredStockLevel
@property {boolean} autoReorderPoint
@property {boolean} autoPreferredStockLevel
@property {float} preferredStockLevelDays
@property {float} quantityCommitted
@property {boolean} shipIndividually
@property {float} quantityAvailable
@property {RecordRef} shipPackage
@property {float} quantityBackOrdered
@property {String} storeDisplayName
@property {float} defaultReturnCost
@property {RecordRef} supplyReplenishmentMethod
@property {RecordRef} alternateDemandSourceItem
@property {float} fixedLotSize
@property {RecordRef} supplyType
@property {integer} demandTimeFence
@property {integer} supplyTimeFence
@property {integer} rescheduleInDays
@property {integer} rescheduleOutDays
@property {RecordRef} supplyLotSizingMethod
@property {RecordRef} demandSource
@property {float} quantityOnOrder
@property {RecordRef} storeDisplayThumbnail
@property {RecordRef} storeDisplayImage
@property {String} storeDescription
@property {String} storeDetailedDescription
@property {RecordRef} storeItemTemplate
@property {String} pageTitle
@property {String} urlComponent
@property {String} metaTagHtml
@property {boolean} excludeFromSitemap
@property {SitemapPriority} sitemapPriority
@property {String} searchKeywords
@property {boolean} isDonationItem
@property {boolean} showDefaultDonationAmount
@property {float} maxDonationAmount
@property {boolean} dontShowPrice
@property {String} noPriceMessage
@property {String} outOfStockMessage
@property {String} shoppingDotComCategory
@property {ItemOutOfStockBehavior} outOfStockBehavior
@property {integer} shopzillaCategoryId
@property {String} nexTagCategory
@property {ProductFeedList} productFeedList
@property {String} relatedItemsDescription
@property {boolean} onSpecial
@property {String} specialsDescription
@property {String} featuredDescription
@property {ItemOptionsList} itemOptionsList
@property {RecordRefList} itemNumberOptionsList
@property {ItemVendorList} itemVendorList
@property {PricingMatrix} pricingMatrix
@property {ItemMemberList} memberList
@property {ItemAccountingBookDetailList} accountingBookDetailList
@property {InventoryItemLocationsList} locationsList
@property {SiteCategoryList} siteCategoryList
@property {InventoryItemBinNumberList} binNumberList
@property {TranslationList} translationsList
@property {PresentationItemList} presentationItemList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class SerializedAssemblyItem @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {String} itemId
@property {String} upcCode
@property {String} displayName
@property {String} vendorName
@property {RecordRef} parent
@property {boolean} printItems
@property {boolean} isOnline
@property {dateTime} lastInvtCountDate
@property {dateTime} nextInvtCountDate
@property {integer} invtCountInterval
@property {ItemInvtClassification} invtClassification
@property {boolean} isGcoCompliant
@property {boolean} offerSupport
@property {boolean} useComponentYield
@property {boolean} isInactive
@property {RecordRefList} subsidiaryList
@property {boolean} availableToPartners
@property {boolean} includeChildren
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {String} description
@property {RecordRef} cogsAccount
@property {RecordRef} incomeAccount
@property {RecordRef} intercoIncomeAccount
@property {RecordRef} assetAccount
@property {boolean} matchBillToReceipt
@property {RecordRef} billQtyVarianceAcct
@property {RecordRef} billPriceVarianceAcct
@property {RecordRef} billExchRateVarianceAcct
@property {RecordRef} gainLossAccount
@property {RecordRef} salesTaxCode
@property {RecordRef} costCategory
@property {RecordRef} purchaseTaxCode
@property {RecordRef} prodQtyVarianceAcct
@property {RecordRef} prodPriceVarianceAcct
@property {RecordRef} purchasePriceVarianceAcct
@property {RecordRef} wipVarianceAcct
@property {RecordRef} taxSchedule
@property {RecordRef} scrapAcct
@property {float} shippingCost
@property {RecordRef} wipAcct
@property {String} shippingCostUnits
@property {float} handlingCost
@property {float} weight
@property {String} handlingCostUnits
@property {ItemWeightUnit} weightUnit
@property {String} weightUnits
@property {ItemCostingMethod} costingMethod
@property {boolean} isTaxable
@property {String} costingMethodDisplay
@property {float} rate
@property {RecordRef} unitsType
@property {RecordRef} stockUnit
@property {RecordRef} purchaseUnit
@property {RecordRef} saleUnit
@property {boolean} trackLandedCost
@property {RecordRef} billingSchedule
@property {RecordRef} deferredRevenueAccount
@property {RecordRef} revRecSchedule
@property {String} stockDescription
@property {boolean} producer
@property {String} manufacturer
@property {String} mpn
@property {boolean} multManufactureAddr
@property {String} manufactureraddr1
@property {String} manufacturerCity
@property {String} manufacturerState
@property {String} manufacturerZip
@property {Country} countryOfManufacture
@property {AssemblyItemEffectiveBomControl} effectiveBomControl
@property {String} minimumQuantityUnits
@property {String} defaultRevision
@property {RecordRef} defaultItemShipMethod
@property {ItemCarrier} itemCarrier
@property {boolean} roundUpAsComponent
@property {float} purchaseOrderQuantity
@property {float} purchaseOrderAmount
@property {float} purchaseOrderQuantityDiff
@property {float} receiptQuantity
@property {float} receiptAmount
@property {float} receiptQuantityDiff
@property {RecordRefList} itemShipMethodList
@property {String} manufacturerTaxId
@property {String} scheduleBNumber
@property {integer} scheduleBQuantity
@property {RecordRef} scheduleBCode
@property {String} manufacturerTariff
@property {ItemPreferenceCriterion} preferenceCriterion
@property {RecordRef} issueProduct
@property {integer} minimumQuantity
@property {boolean} enforceMinQtyInternally
@property {RecordRef} softDescriptor
@property {boolean} isSpecialWorkOrderItem
@property {boolean} pricesIncludeTax
@property {RecordRef} quantityPricingSchedule
@property {boolean} buildEntireAssembly
@property {float} quantityOnHand
@property {String} quantityOnHandUnits
@property {boolean} useMarginalRates
@property {integer} reorderMultiple
@property {float} cost
@property {ItemCostEstimateType} costEstimateType
@property {boolean} isHazmatItem
@property {String} hazmatId
@property {String} hazmatShippingName
@property {String} hazmatHazardClass
@property {HazmatPackingGroup} hazmatPackingGroup
@property {String} hazmatItemUnits
@property {float} hazmatItemUnitsQty
@property {float} costEstimate
@property {float} transferPrice
@property {ItemOverallQuantityPricingType} overallQuantityPricingType
@property {RecordRef} pricingGroup
@property {RecordRef} intercoCogsAccount
@property {float} vsoePrice
@property {VsoeSopGroup} vsoeSopGroup
@property {VsoeDeferral} vsoeDeferral
@property {VsoePermitDiscount} vsoePermitDiscount
@property {boolean} vsoeDelivered
@property {RecordRef} unbuildVarianceAccount
@property {RecordRef} dropshipExpenseAccount
@property {RecordRef} preferredLocation
@property {float} totalValue
@property {boolean} useBins
@property {float} averageCost
@property {float} lastPurchasePrice
@property {String} purchaseDescription
@property {integer} leadTime
@property {boolean} autoLeadTime
@property {integer} buildTime
@property {float} safetyStockLevel
@property {String} safetyStockLevelUnits
@property {integer} safetyStockLevelDays
@property {boolean} seasonalDemand
@property {String} serialNumbers
@property {float} reorderPoint
@property {String} reorderPointUnits
@property {float} preferredStockLevel
@property {String} preferredStockLevelUnits
@property {float} demandModifier
@property {boolean} autoReorderPoint
@property {boolean} autoPreferredStockLevel
@property {float} preferredStockLevelDays
@property {float} defaultReturnCost
@property {RecordRef} supplyReplenishmentMethod
@property {RecordRef} alternateDemandSourceItem
@property {float} fixedLotSize
@property {RecordRef} supplyType
@property {integer} demandTimeFence
@property {integer} supplyTimeFence
@property {integer} rescheduleInDays
@property {integer} rescheduleOutDays
@property {RecordRef} supplyLotSizingMethod
@property {RecordRef} demandSource
@property {boolean} shipIndividually
@property {float} quantityCommitted
@property {float} quantityAvailable
@property {float} quantityBackOrdered
@property {float} quantityOnOrder
@property {RecordRef} shipPackage
@property {String} storeDisplayName
@property {RecordRef} storeDisplayThumbnail
@property {RecordRef} storeDisplayImage
@property {String} storeDescription
@property {String} storeDetailedDescription
@property {RecordRef} storeItemTemplate
@property {String} pageTitle
@property {String} metaTagHtml
@property {boolean} excludeFromSitemap
@property {SitemapPriority} sitemapPriority
@property {String} urlComponent
@property {String} searchKeywords
@property {boolean} isDonationItem
@property {boolean} showDefaultDonationAmount
@property {float} maxDonationAmount
@property {boolean} dontShowPrice
@property {String} noPriceMessage
@property {String} shoppingDotComCategory
@property {integer} shopzillaCategoryId
@property {String} outOfStockMessage
@property {String} nexTagCategory
@property {ItemOutOfStockBehavior} outOfStockBehavior
@property {ProductFeedList} productFeedList
@property {String} relatedItemsDescription
@property {boolean} onSpecial
@property {String} specialsDescription
@property {String} featuredDescription
@property {ItemOptionsList} itemOptionsList
@property {RecordRefList} itemNumberOptionsList
@property {ItemVendorList} itemVendorList
@property {PricingMatrix} pricingMatrix
@property {ItemMemberList} memberList
@property {ItemAccountingBookDetailList} accountingBookDetailList
@property {SerializedInventoryItemLocationsList} locationsList
@property {SiteCategoryList} siteCategoryList
@property {InventoryItemBinNumberList} binNumberList
@property {SerializedInventoryItemNumbersList} numbersList
@property {TranslationList} translationsList
@property {PresentationItemList} presentationItemList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class LotNumberedAssemblyItem @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {String} itemId
@property {String} upcCode
@property {String} displayName
@property {String} vendorName
@property {RecordRef} parent
@property {boolean} printItems
@property {boolean} isOnline
@property {boolean} isGcoCompliant
@property {boolean} offerSupport
@property {boolean} useComponentYield
@property {boolean} isInactive
@property {boolean} availableToPartners
@property {RecordRefList} subsidiaryList
@property {RecordRef} department
@property {boolean} includeChildren
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} costCategory
@property {String} description
@property {RecordRef} cogsAccount
@property {RecordRef} incomeAccount
@property {RecordRef} intercoIncomeAccount
@property {RecordRef} assetAccount
@property {boolean} matchBillToReceipt
@property {RecordRef} billQtyVarianceAcct
@property {RecordRef} billPriceVarianceAcct
@property {RecordRef} billExchRateVarianceAcct
@property {RecordRef} gainLossAccount
@property {RecordRef} salesTaxCode
@property {RecordRef} purchaseTaxCode
@property {RecordRef} prodQtyVarianceAcct
@property {RecordRef} prodPriceVarianceAcct
@property {RecordRef} purchasePriceVarianceAcct
@property {RecordRef} wipVarianceAcct
@property {RecordRef} taxSchedule
@property {RecordRef} scrapAcct
@property {float} shippingCost
@property {RecordRef} wipAcct
@property {float} handlingCost
@property {float} weight
@property {ItemWeightUnit} weightUnit
@property {ItemCostingMethod} costingMethod
@property {boolean} isTaxable
@property {String} costingMethodDisplay
@property {float} rate
@property {RecordRef} unitsType
@property {RecordRef} stockUnit
@property {RecordRef} purchaseUnit
@property {RecordRef} saleUnit
@property {boolean} trackLandedCost
@property {RecordRef} billingSchedule
@property {RecordRef} deferredRevenueAccount
@property {RecordRef} revRecSchedule
@property {String} stockDescription
@property {boolean} producer
@property {String} manufacturer
@property {String} mpn
@property {boolean} multManufactureAddr
@property {String} manufactureraddr1
@property {String} manufacturerCity
@property {String} manufacturerState
@property {String} manufacturerZip
@property {Country} countryOfManufacture
@property {AssemblyItemEffectiveBomControl} effectiveBomControl
@property {String} manufacturerTaxId
@property {String} defaultRevision
@property {RecordRef} defaultItemShipMethod
@property {ItemCarrier} itemCarrier
@property {boolean} roundUpAsComponent
@property {float} purchaseOrderQuantity
@property {float} purchaseOrderAmount
@property {float} purchaseOrderQuantityDiff
@property {float} receiptQuantity
@property {float} receiptAmount
@property {float} receiptQuantityDiff
@property {RecordRefList} itemShipMethodList
@property {String} scheduleBNumber
@property {integer} scheduleBQuantity
@property {RecordRef} scheduleBCode
@property {String} manufacturerTariff
@property {ItemPreferenceCriterion} preferenceCriterion
@property {RecordRef} issueProduct
@property {integer} minimumQuantity
@property {boolean} enforceMinQtyInternally
@property {RecordRef} softDescriptor
@property {boolean} isSpecialWorkOrderItem
@property {boolean} pricesIncludeTax
@property {RecordRef} quantityPricingSchedule
@property {boolean} buildEntireAssembly
@property {float} quantityOnHand
@property {boolean} useMarginalRates
@property {integer} reorderMultiple
@property {float} cost
@property {ItemCostEstimateType} costEstimateType
@property {boolean} isHazmatItem
@property {String} hazmatId
@property {String} hazmatShippingName
@property {String} hazmatHazardClass
@property {HazmatPackingGroup} hazmatPackingGroup
@property {String} hazmatItemUnits
@property {float} hazmatItemUnitsQty
@property {float} costEstimate
@property {float} transferPrice
@property {ItemOverallQuantityPricingType} overallQuantityPricingType
@property {RecordRef} pricingGroup
@property {RecordRef} intercoCogsAccount
@property {float} vsoePrice
@property {VsoeSopGroup} vsoeSopGroup
@property {VsoeDeferral} vsoeDeferral
@property {VsoePermitDiscount} vsoePermitDiscount
@property {boolean} vsoeDelivered
@property {RecordRef} unbuildVarianceAccount
@property {RecordRef} dropshipExpenseAccount
@property {RecordRef} preferredLocation
@property {float} totalValue
@property {boolean} useBins
@property {float} averageCost
@property {float} lastPurchasePrice
@property {String} purchaseDescription
@property {integer} leadTime
@property {boolean} autoLeadTime
@property {integer} buildTime
@property {float} safetyStockLevel
@property {integer} safetyStockLevelDays
@property {boolean} seasonalDemand
@property {String} serialNumbers
@property {float} reorderPoint
@property {float} preferredStockLevel
@property {dateTime} expirationDate
@property {dateTime} lastInvtCountDate
@property {dateTime} nextInvtCountDate
@property {integer} invtCountInterval
@property {ItemInvtClassification} invtClassification
@property {float} demandModifier
@property {boolean} autoReorderPoint
@property {boolean} autoPreferredStockLevel
@property {float} preferredStockLevelDays
@property {boolean} shipIndividually
@property {RecordRef} shipPackage
@property {float} defaultReturnCost
@property {RecordRef} supplyReplenishmentMethod
@property {RecordRef} alternateDemandSourceItem
@property {float} fixedLotSize
@property {RecordRef} supplyType
@property {integer} demandTimeFence
@property {integer} supplyTimeFence
@property {integer} rescheduleInDays
@property {integer} rescheduleOutDays
@property {RecordRef} supplyLotSizingMethod
@property {RecordRef} demandSource
@property {float} quantityCommitted
@property {float} quantityAvailable
@property {float} quantityBackOrdered
@property {float} quantityOnOrder
@property {String} storeDisplayName
@property {RecordRef} storeDisplayThumbnail
@property {RecordRef} storeDisplayImage
@property {String} storeDescription
@property {String} storeDetailedDescription
@property {RecordRef} storeItemTemplate
@property {String} pageTitle
@property {String} metaTagHtml
@property {boolean} excludeFromSitemap
@property {SitemapPriority} sitemapPriority
@property {String} urlComponent
@property {String} searchKeywords
@property {boolean} isDonationItem
@property {boolean} showDefaultDonationAmount
@property {float} maxDonationAmount
@property {boolean} dontShowPrice
@property {String} noPriceMessage
@property {String} outOfStockMessage
@property {String} shoppingDotComCategory
@property {ItemOutOfStockBehavior} outOfStockBehavior
@property {integer} shopzillaCategoryId
@property {String} nexTagCategory
@property {ProductFeedList} productFeedList
@property {String} relatedItemsDescription
@property {boolean} onSpecial
@property {String} specialsDescription
@property {String} featuredDescription
@property {ItemOptionsList} itemOptionsList
@property {RecordRefList} itemNumberOptionsList
@property {ItemVendorList} itemVendorList
@property {PricingMatrix} pricingMatrix
@property {ItemMemberList} memberList
@property {ItemAccountingBookDetailList} accountingBookDetailList
@property {LotNumberedInventoryItemLocationsList} locationsList
@property {SiteCategoryList} siteCategoryList
@property {InventoryItemBinNumberList} binNumberList
@property {LotNumberedInventoryItemNumbersList} numbersList
@property {TranslationList} translationsList
@property {PresentationItemList} presentationItemList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class ServiceItemTaskTemplates @extends Record
@property {String} taskName
@property {integer} taskStartOffset
@property {Duration} taskDuration
*/
/*
@class ServiceItemTaskTemplatesList @extends Record
@property {ServiceItemTaskTemplates[]} taskTemplates
@property {boolean} replaceAll
*/
/*
@class State @extends Record
@property {Country} country
@property {String} fullName
@property {String} shortname
@property {String} internalId
*/
/*
@class AccountingPeriod @extends Record
@property {String} periodName
@property {RecordRef} parent
@property {dateTime} startDate
@property {dateTime} endDate
@property {RecordRef} fiscalCalendar
@property {dateTime} closedOnDate
@property {boolean} isAdjust
@property {AccountingPeriodFiscalCalendarsList} fiscalCalendarsList
@property {boolean} isQuarter
@property {boolean} isYear
@property {boolean} closed
@property {boolean} apLocked
@property {boolean} arLocked
@property {boolean} payrollLocked
@property {boolean} allLocked
@property {boolean} allowNonGLChanges
@property {String} internalId
*/
/*
@class BudgetCategory @extends Record
@property {String} name
@property {boolean} budgetType
@property {boolean} isInactive
@property {String} internalId
*/
/*
@class AccountingPeriodSearch @extends SearchRecord
@property {AccountingPeriodSearchBasic} basic
@property {EmployeeSearchBasic} userJoin
@property {NoteSearchBasic} userNotesJoin
*/
/*
@class AccountingPeriodSearchAdvanced @extends SearchRecord
@property {AccountingPeriodSearch} criteria
@property {AccountingPeriodSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class AccountingPeriodSearchRow @extends SearchRow
@property {AccountingPeriodSearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
@property {NoteSearchRowBasic} userNotesJoin
*/
/*
@class ContactCategorySearch @extends SearchRecord
@property {ContactCategorySearchBasic} basic
@property {EmployeeSearchBasic} userJoin
*/
/*
@class ContactCategorySearchAdvanced @extends SearchRecord
@property {ContactCategorySearch} criteria
@property {ContactCategorySearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class ContactCategorySearchRow @extends SearchRow
@property {ContactCategorySearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class ContactRoleSearch @extends SearchRecord
@property {ContactRoleSearchBasic} basic
@property {EmployeeSearchBasic} userJoin
*/
/*
@class ContactRoleSearchAdvanced @extends SearchRecord
@property {ContactRoleSearch} criteria
@property {ContactRoleSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class ContactRoleSearchRow @extends SearchRow
@property {ContactRoleSearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class CustomerCategorySearch @extends SearchRecord
@property {CustomerCategorySearchBasic} basic
@property {EmployeeSearchBasic} userJoin
*/
/*
@class CustomerCategorySearchAdvanced @extends SearchRecord
@property {CustomerCategorySearch} criteria
@property {CustomerCategorySearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class CustomerCategorySearchRow @extends SearchRow
@property {CustomerCategorySearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class ExpenseCategorySearch @extends SearchRecord
@property {ExpenseCategorySearchBasic} basic
@property {EmployeeSearchBasic} userJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class ExpenseCategorySearchAdvanced @extends SearchRecord
@property {ExpenseCategorySearch} criteria
@property {ExpenseCategorySearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class ExpenseCategorySearchRow @extends SearchRow
@property {ExpenseCategorySearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class NoteTypeSearch @extends SearchRecord
@property {NoteTypeSearchBasic} basic
@property {EmployeeSearchBasic} userJoin
*/
/*
@class NoteTypeSearchAdvanced @extends SearchRecord
@property {NoteTypeSearch} criteria
@property {NoteTypeSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class NoteTypeSearchRow @extends SearchRow
@property {NoteTypeSearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class PartnerCategorySearch @extends SearchRecord
@property {PartnerCategorySearchBasic} basic
@property {EmployeeSearchBasic} userJoin
*/
/*
@class PartnerCategorySearchAdvanced @extends SearchRecord
@property {PartnerCategorySearch} criteria
@property {PartnerCategorySearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class PartnerCategorySearchRow @extends SearchRow
@property {PartnerCategorySearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class PaymentMethodSearch @extends SearchRecord
@property {PaymentMethodSearchBasic} basic
@property {EmployeeSearchBasic} userJoin
*/
/*
@class PaymentMethodSearchAdvanced @extends SearchRecord
@property {PaymentMethodSearch} criteria
@property {PaymentMethodSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class PaymentMethodSearchRow @extends SearchRow
@property {PaymentMethodSearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class PriceLevelSearch @extends SearchRecord
@property {PriceLevelSearchBasic} basic
@property {EmployeeSearchBasic} userJoin
*/
/*
@class PriceLevelSearchAdvanced @extends SearchRecord
@property {PriceLevelSearch} criteria
@property {PriceLevelSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class PriceLevelSearchRow @extends SearchRow
@property {PriceLevelSearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class SalesRoleSearch @extends SearchRecord
@property {SalesRoleSearchBasic} basic
@property {EmployeeSearchBasic} userJoin
*/
/*
@class SalesRoleSearchAdvanced @extends SearchRecord
@property {SalesRoleSearch} criteria
@property {SalesRoleSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class SalesRoleSearchRow @extends SearchRow
@property {SalesRoleSearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class TermSearch @extends SearchRecord
@property {TermSearchBasic} basic
@property {EmployeeSearchBasic} userJoin
*/
/*
@class TermSearchAdvanced @extends SearchRecord
@property {TermSearch} criteria
@property {TermSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class TermSearchRow @extends SearchRow
@property {TermSearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class VendorCategorySearch @extends SearchRecord
@property {VendorCategorySearchBasic} basic
@property {EmployeeSearchBasic} userJoin
*/
/*
@class VendorCategorySearchAdvanced @extends SearchRecord
@property {VendorCategorySearch} criteria
@property {VendorCategorySearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class VendorCategorySearchRow @extends SearchRow
@property {VendorCategorySearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class WinLossReasonSearch @extends SearchRecord
@property {WinLossReasonSearchBasic} basic
@property {EmployeeSearchBasic} userJoin
*/
/*
@class WinLossReasonSearchAdvanced @extends SearchRecord
@property {WinLossReasonSearch} criteria
@property {WinLossReasonSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class WinLossReasonSearchRow @extends SearchRow
@property {WinLossReasonSearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class UnitsTypeSearch @extends SearchRecord
@property {UnitsTypeSearchBasic} basic
@property {EmployeeSearchBasic} userJoin
*/
/*
@class UnitsTypeSearchAdvanced @extends SearchRecord
@property {UnitsTypeSearch} criteria
@property {UnitsTypeSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class UnitsTypeSearchRow @extends SearchRow
@property {UnitsTypeSearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class PricingGroup @extends Record
@property {String} name
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class PricingGroupSearch @extends SearchRecord
@property {PricingGroupSearchBasic} basic
@property {EmployeeSearchBasic} userJoin
*/
/*
@class PricingGroupSearchAdvanced @extends SearchRecord
@property {PricingGroupSearch} criteria
@property {PricingGroupSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class PricingGroupSearchRow @extends SearchRow
@property {PricingGroupSearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class InventoryNumber @extends Record
@property {String} inventoryNumber
@property {RecordRef} item
@property {String} status
@property {String} units
@property {dateTime} expirationDate
@property {String} memo
@property {InventoryNumberLocationsList} locationsList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class InventoryNumberLocations @extends Record
@property {String} location
@property {float} quantityOnHand
@property {float} quantityAvailable
@property {float} quantityOnOrder
@property {float} quantityInTransit
*/
/*
@class InventoryNumberLocationsList @extends Record
@property {InventoryNumberLocations[]} locations
@property {boolean} replaceAll
*/
/*
@class InventoryNumberSearch @extends SearchRecord
@property {InventoryNumberSearchBasic} basic
@property {ItemSearchBasic} itemJoin
@property {EmployeeSearchBasic} userJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class InventoryNumberSearchAdvanced @extends SearchRecord
@property {InventoryNumberSearch} criteria
@property {InventoryNumberSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class InventoryNumberSearchRow @extends SearchRow
@property {InventoryNumberSearchRowBasic} basic
@property {ItemSearchRowBasic} itemJoin
@property {EmployeeSearchRowBasic} userJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class RevRecSchedule @extends Record
@property {String} name
@property {RevRecScheduleAmortizationType} amortizationType
@property {RevRecScheduleRecurrenceType} recurrenceType
@property {RevRecScheduleRecogIntervalSrc} recogIntervalSrc
@property {integer} amortizationPeriod
@property {integer} periodOffset
@property {integer} revRecOffset
@property {float} initialAmount
@property {boolean} isInactive
@property {RevRecScheduleRecurrenceList} recurrenceList
@property {String} internalId
@property {String} externalId
*/
/*
@class RevRecScheduleRecurrence @extends Record
@property {RecordRef} incomeaccount
@property {integer} periodOffset
@property {String} recamount
*/
/*
@class RevRecScheduleRecurrenceList @extends Record
@property {RevRecScheduleRecurrence[]} revRecScheduleRecurrence
@property {boolean} replaceAll
*/
/*
@class RevRecTemplate @extends Record
@property {String} name
@property {RevRecScheduleAmortizationType} amortizationType
@property {RevRecScheduleRecurrenceType} recurrenceType
@property {RevRecScheduleRecogIntervalSrc} recogIntervalSrc
@property {integer} amortizationPeriod
@property {integer} periodOffset
@property {integer} revRecOffset
@property {float} initialAmount
@property {boolean} isInactive
@property {RevRecTemplateRecurrenceList} recurrenceList
@property {String} internalId
@property {String} externalId
*/
/*
@class RevRecTemplateRecurrence @extends Record
@property {RecordRef} incomeaccount
@property {integer} periodOffset
@property {String} recamount
*/
/*
@class RevRecTemplateRecurrenceList @extends Record
@property {RevRecTemplateRecurrence[]} revRecTemplateRecurrence
@property {boolean} replaceAll
*/
/*
@class RevRecScheduleSearch @extends SearchRecord
@property {RevRecScheduleSearchBasic} basic
@property {TransactionSearchBasic} appliedToTransactionJoin
@property {CustomerSearchBasic} customerJoin
@property {ItemSearchBasic} itemJoin
@property {TransactionSearchBasic} transactionJoin
@property {EmployeeSearchBasic} userJoin
*/
/*
@class RevRecScheduleSearchAdvanced @extends SearchRecord
@property {RevRecScheduleSearch} criteria
@property {RevRecScheduleSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class RevRecScheduleSearchRow @extends SearchRow
@property {RevRecScheduleSearchRowBasic} basic
@property {TransactionSearchRowBasic} appliedToTransactionJoin
@property {CustomerSearchRowBasic} customerJoin
@property {ItemSearchRowBasic} itemJoin
@property {TransactionSearchRowBasic} transactionJoin
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class RevRecTemplateSearch @extends SearchRecord
@property {RevRecTemplateSearchBasic} basic
@property {EmployeeSearchBasic} userJoin
*/
/*
@class RevRecTemplateSearchAdvanced @extends SearchRecord
@property {RevRecTemplateSearch} criteria
@property {RevRecTemplateSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class RevRecTemplateSearchRow @extends SearchRow
@property {RevRecTemplateSearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class CostCategory @extends Record
@property {String} name
@property {RecordRef} account
@property {CostCategoryItemCostType} itemCostType
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class Nexus @extends Record
@property {Country} country
@property {RecordRef} state
@property {RecordRef} taxAgency
@property {RecordRef} taxAgencyPst
@property {RecordRef} taxCode
@property {String} description
@property {String} internalId
@property {String} externalId
*/
/*
@class NexusSearch @extends SearchRecord
@property {NexusSearchBasic} basic
@property {EmployeeSearchBasic} userJoin
*/
/*
@class NexusSearchAdvanced @extends SearchRecord
@property {NexusSearch} criteria
@property {NexusSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class NexusSearchRow @extends SearchRow
@property {NexusSearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class CustomerMessage @extends Record
@property {String} name
@property {String} description
@property {boolean} preferred
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class OtherNameCategory @extends Record
@property {String} name
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class OtherNameCategorySearch @extends SearchRecord
@property {OtherNameCategorySearchBasic} basic
@property {EmployeeSearchBasic} userJoin
*/
/*
@class OtherNameCategorySearchAdvanced @extends SearchRecord
@property {OtherNameCategorySearch} criteria
@property {OtherNameCategorySearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class OtherNameCategorySearchRow @extends SearchRow
@property {OtherNameCategorySearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class CustomerMessageSearch @extends SearchRecord
@property {CustomerMessageSearchBasic} basic
@property {EmployeeSearchBasic} userJoin
*/
/*
@class CustomerMessageSearchAdvanced @extends SearchRecord
@property {CustomerMessageSearch} criteria
@property {CustomerMessageSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class CustomerMessageSearchRow @extends SearchRow
@property {CustomerMessageSearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class ItemGroup @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {boolean} includeStartEndLines
@property {boolean} isVsoeBundle
@property {RecordRef} defaultItemShipMethod
@property {boolean} availableToPartners
@property {boolean} isInactive
@property {String} itemId
@property {String} upcCode
@property {String} displayName
@property {String} vendorName
@property {RecordRef} issueProduct
@property {RecordRef} parent
@property {String} description
@property {RecordRefList} subsidiaryList
@property {boolean} includeChildren
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {ItemCarrier} itemCarrier
@property {RecordRefList} itemShipMethodList
@property {boolean} printItems
@property {ItemMemberList} memberList
@property {TranslationList} translationsList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class CurrencyRate_core @extends Record
@property {RecordRef} baseCurrency
@property {RecordRef} fromCurrency
@property {float} exchangeRate
@property {dateTime} effectiveDate
*/
/*
@class CurrencyRateSearch @extends SearchRecord
@property {CurrencyRateSearchBasic} basic
@property {EmployeeSearchBasic} userJoin
*/
/*
@class CurrencyRateSearchAdvanced @extends SearchRecord
@property {CurrencyRateSearch} criteria
@property {CurrencyRateSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class CurrencyRateSearchRow @extends SearchRow
@property {CurrencyRateSearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class ItemRevision @extends Record
@property {RecordRef} item
@property {String} name
@property {dateTime} effectiveDate
@property {dateTime} obsoleteDate
@property {String} memo
@property {boolean} inactive
@property {String} internalId
@property {String} externalId
*/
/*
@class ItemRevisionSearch @extends SearchRecord
@property {ItemRevisionSearchBasic} basic
@property {ItemSearchBasic} itemJoin
@property {EmployeeSearchBasic} userJoin
*/
/*
@class ItemRevisionSearchAdvanced @extends SearchRecord
@property {ItemRevisionSearch} criteria
@property {ItemRevisionSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class ItemRevisionSearchRow @extends SearchRow
@property {ItemRevisionSearchRowBasic} basic
@property {ItemSearchRowBasic} itemJoin
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class AccountingPeriodFiscalCalendars @extends SearchRow
@property {RecordRef} fiscalCalendar
@property {RecordRef} parent
*/
/*
@class AccountingPeriodFiscalCalendarsList @extends SearchRow
@property {AccountingPeriodFiscalCalendars[]} accountingPeriodFiscalCalendars
@property {boolean} replaceAll
*/
/*
@class TaxAcct @extends Record
@property {String} name
@property {String} description
@property {RecordRef} nexus
@property {Country} country
@property {TaxAcctType} taxAcctType
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class ExpenseCategoryRates @extends Record
@property {RecordRef} subsidiary
@property {RecordRef} currency
@property {float} defaultRate
*/
/*
@class ExpenseCategoryRatesList @extends Record
@property {ExpenseCategoryRates[]} expenseCategoryRates
@property {boolean} replaceAll
*/
/*
@class BillingSchedule @extends Record
@property {BillingScheduleType} scheduleType
@property {String} name
@property {RecordRef} project
@property {String} initialAmount
@property {RecordRef} initialTerms
@property {BillingScheduleFrequency} frequency
@property {RecurrenceDowMaskList} recurrenceDowMaskList
@property {BillingScheduleRecurrenceMode} yearMode
@property {BillingScheduleYearDowim} yearDowim
@property {BillingScheduleYearDow} yearDow
@property {BillingScheduleYearDowimMonth} yearDowimMonth
@property {BillingScheduleYearMonth} yearMonth
@property {integer} yearDom
@property {BillingScheduleRecurrenceMode} monthMode
@property {BillingScheduleMonthDowim} monthDowim
@property {BillingScheduleMonthDow} monthDow
@property {integer} monthDom
@property {integer} dayPeriod
@property {BillingScheduleRepeatEvery} repeatEvery
@property {boolean} billForActuals
@property {integer} numberRemaining
@property {boolean} inArrears
@property {RecordRef} recurrenceTerms
@property {boolean} isPublic
@property {boolean} applyToSubtotal
@property {RecordRef} transaction
@property {boolean} isInactive
@property {dateTime} seriesStartDate
@property {BillingScheduleRecurrenceList} recurrenceList
@property {BillingScheduleMilestoneList} milestoneList
@property {String} internalId
@property {String} externalId
*/
/*
@class BillingScheduleMilestone @extends Record
@property {integer} milestoneId
@property {float} milestoneAmount
@property {RecordRef} milestoneTerms
@property {RecordRef} projectTask
@property {dateTime} milestoneDate
@property {boolean} milestoneCompleted
@property {dateTime} milestoneActualCompletionDate
@property {String} comments
*/
/*
@class BillingScheduleMilestoneList @extends Record
@property {BillingScheduleMilestone[]} billingScheduleMilestone
@property {boolean} replaceAll
*/
/*
@class BillingScheduleRecurrence @extends Record
@property {integer} recurrenceId
@property {integer} count
@property {BillingScheduleRecurrenceRecurrenceUnits} units
@property {boolean} relativeToPrevious
@property {dateTime} recurrenceDate
@property {float} amount
@property {RecordRef} paymentTerms
*/
/*
@class BillingScheduleRecurrenceList @extends Record
@property {BillingScheduleRecurrence[]} billingScheduleRecurrence
@property {boolean} replaceAll
*/
/*
@class BillingScheduleSearch @extends SearchRecord
@property {BillingScheduleSearchBasic} basic
*/
/*
@class BillingScheduleSearchAdvanced @extends SearchRecord
@property {BillingScheduleSearch} criteria
@property {BillingScheduleSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class BillingScheduleSearchRow @extends SearchRow
@property {BillingScheduleSearchRowBasic} basic
*/
/*
@class GlobalAccountMapping @extends Record
@property {RecordRef} customForm
@property {dateTime} effectiveDate
@property {dateTime} endDate
@property {RecordRef} accountingBook
@property {RecordRef} subsidiary
@property {RecordRef} sourceAccount
@property {RecordRef} class
@property {RecordRef} department
@property {RecordRef} location
@property {RecordRef} destinationAccount
@property {BaseRef} customDimension
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class GlobalAccountMappingSearch @extends SearchRecord
@property {GlobalAccountMappingSearchBasic} basic
@property {ClassificationSearchBasic} classJoin
@property {DepartmentSearchBasic} departmentJoin
@property {AccountSearchBasic} destinationAccountJoin
@property {LocationSearchBasic} locationJoin
@property {AccountSearchBasic} sourceAccountJoin
@property {SubsidiarySearchBasic} subsidiaryJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class GlobalAccountMappingSearchAdvanced @extends SearchRecord
@property {GlobalAccountMappingSearch} criteria
@property {GlobalAccountMappingSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class GlobalAccountMappingSearchRow @extends SearchRow
@property {GlobalAccountMappingSearchRowBasic} basic
@property {ClassificationSearchRowBasic} classJoin
@property {DepartmentSearchRowBasic} departmentJoin
@property {AccountSearchRowBasic} destinationAccountJoin
@property {LocationSearchRowBasic} locationJoin
@property {AccountSearchRowBasic} sourceAccountJoin
@property {SubsidiarySearchRowBasic} subsidiaryJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class ItemAccountMapping @extends Record
@property {RecordRef} customForm
@property {dateTime} effectiveDate
@property {dateTime} endDate
@property {RecordRef} accountingBook
@property {RecordRef} subsidiary
@property {ItemAccountMappingItemAccount} itemAccount
@property {RecordRef} sourceAccount
@property {RecordRef} class
@property {RecordRef} department
@property {RecordRef} location
@property {RecordRef} destinationAccount
@property {BaseRef} customDimension
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class ItemAccountMappingSearch @extends SearchRecord
@property {ItemAccountMappingSearchBasic} basic
@property {ClassificationSearchBasic} classJoin
@property {DepartmentSearchBasic} departmentJoin
@property {AccountSearchBasic} destinationAccountJoin
@property {LocationSearchBasic} locationJoin
@property {AccountSearchBasic} sourceAccountJoin
@property {SubsidiarySearchBasic} subsidiaryJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class ItemAccountMappingSearchAdvanced @extends SearchRecord
@property {ItemAccountMappingSearch} criteria
@property {ItemAccountMappingSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class ItemAccountMappingSearchRow @extends SearchRow
@property {ItemAccountMappingSearchRowBasic} basic
@property {ClassificationSearchRowBasic} classJoin
@property {DepartmentSearchRowBasic} departmentJoin
@property {AccountSearchRowBasic} destinationAccountJoin
@property {LocationSearchRowBasic} locationJoin
@property {AccountSearchRowBasic} sourceAccountJoin
@property {SubsidiarySearchRowBasic} subsidiaryJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class ItemAccountingBookDetail @extends SearchRow
@property {RecordRef} accountingBook
@property {RecordRef} revRecSchedule
@property {boolean} sameAsPrimaryRevRec
@property {RecordRef} amortizationTemplate
@property {boolean} sameAsPrimaryAmortization
*/
/*
@class ItemAccountingBookDetailList @extends SearchRow
@property {ItemAccountingBookDetail[]} itemAccountingBookDetail
@property {boolean} replaceAll
*/
/*
@class SubsidiaryAccountingBookDetail @extends SearchRow
@property {RecordRef} accountingBook
@property {RecordRef} currency
@property {AccountingBookStatus} bookStatus
*/
/*
@class SubsidiaryAccountingBookDetailList @extends SearchRow
@property {SubsidiaryAccountingBookDetail[]} subsidiaryAccountingBookDetail
@property {boolean} replaceAll
*/
/*
@class PaymentMethodVisuals @extends SearchRow
@property {String} flags
@property {String} location
*/
/*
@class PaymentMethodVisualsList @extends SearchRow
@property {PaymentMethodVisuals[]} paymentMethodVisuals
@property {boolean} replaceAll
*/
/*
@class SalesOrderItemCommitInventory @extends SearchRow
*/
/*
@class SalesOrderItemCreatePo @extends SearchRow
*/
/*
@class SalesOrderOrderStatus @extends SearchRow
*/
/*
@class ItemFulfillmentExportTypeUps @extends SearchRow
*/
/*
@class ItemFulfillmentLicenseExceptionUps @extends SearchRow
*/
/*
@class ItemFulfillmentMethodOfTransportUps @extends SearchRow
*/
/*
@class ItemFulfillmentThirdPartyTypeUps @extends SearchRow
*/
/*
@class ItemFulfillmentPackageUpsCodMethodUps @extends SearchRow
*/
/*
@class ItemFulfillmentPackageUpsDeliveryConfUps @extends SearchRow
*/
/*
@class ItemFulfillmentPackageUpsPackagingUps @extends SearchRow
*/
/*
@class ItemFulfillmentPackageUspsDeliveryConfUsps @extends SearchRow
*/
/*
@class ItemFulfillmentPackageUspsPackagingUsps @extends SearchRow
*/
/*
@class ItemFulfillmentB13AFilingOptionFedEx @extends SearchRow
*/
/*
@class ItemFulfillmentHomeDeliveryTypeFedEx @extends SearchRow
*/
/*
@class ItemFulfillmentThirdPartyTypeFedEx @extends SearchRow
*/
/*
@class ItemFulfillmentPackageFedExAdmPackageTypeFedEx @extends SearchRow
*/
/*
@class ItemFulfillmentPackageFedExCodMethodFedEx @extends SearchRow
*/
/*
@class ItemFulfillmentPackageFedExDeliveryConfFedEx @extends SearchRow
*/
/*
@class ItemFulfillmentPackageFedExPackagingFedEx @extends SearchRow
*/
/*
@class ItemFulfillmentPackageFedExSignatureOptionsFedEx @extends SearchRow
*/
/*
@class ItemFulfillmentTermsOfSaleFedEx @extends SearchRow
*/
/*
@class ItemFulfillmentShipStatus @extends SearchRow
*/
/*
@class OpportunityStatus @extends SearchRow
*/
/*
@class TransactionType @extends SearchRow
*/
/*
@class TransactionStatus @extends SearchRow
*/
/*
@class TransactionPaymentEventResult @extends SearchRow
*/
/*
@class TransactionPaymentEventType @extends SearchRow
*/
/*
@class TransactionPaymentEventHoldReason @extends SearchRow
*/
/*
@class ItemFulfillmentPackageFedExCodFreightTypeFedEx @extends SearchRow
*/
/*
@class TransactionLinkType @extends SearchRow
*/
/*
@class ForecastType @extends SearchRow
*/
/*
@class TransactionLineType @extends SearchRow
*/
/*
@class TransactionApprovalStatus @extends SearchRow
*/
/*
@class ItemFulfillmentPackageFedExPriorityAlertTypeFedEx @extends SearchRow
*/
/*
@class ItemFulfillmentHazmatTypeFedEx @extends SearchRow
*/
/*
@class ItemFulfillmentAncillaryEndorsementFedEx @extends SearchRow
*/
/*
@class ItemFulfillmentAccessibilityTypeFedEx @extends SearchRow
*/
/*
@class TransactionChargeType @extends SearchRow
*/
/*
@class AccountingTransactionRevCommitStatus @extends SearchRow
*/
/*
@class AccountingTransactionRevenueStatus @extends SearchRow
*/
/*
@class Opportunity @extends Record
@property {RecordRef} customForm
@property {RecordRef} currency
@property {float} estimatedBudget
@property {RecordRef} entity
@property {RecordRef} job
@property {String} title
@property {String} tranId
@property {String} source
@property {RecordRef} salesRep
@property {String} contribPct
@property {RecordRef} partner
@property {RecordRef} salesGroup
@property {boolean} syncSalesTeams
@property {RecordRef} leadSource
@property {RecordRef} entityStatus
@property {float} probability
@property {dateTime} tranDate
@property {dateTime} expectedCloseDate
@property {integer} daysOpen
@property {RecordRef} forecastType
@property {String} currencyName
@property {float} exchangeRate
@property {float} projectedTotal
@property {float} rangeLow
@property {float} rangeHigh
@property {float} projAltSalesAmt
@property {float} altSalesRangeLow
@property {float} altSalesRangeHigh
@property {float} weightedTotal
@property {String} actionItem
@property {RecordRef} winLossReason
@property {String} memo
@property {float} taxTotal
@property {boolean} isBudgetApproved
@property {float} tax2Total
@property {RecordRef} salesReadiness
@property {float} totalCostEstimate
@property {RecordRef} buyingTimeFrame
@property {float} estGrossProfit
@property {RecordRef} buyingReason
@property {float} estGrossProfitPercent
@property {Address} billingAddress
@property {RecordRef} billAddressList
@property {Address} shippingAddress
@property {boolean} shipIsResidential
@property {RecordRef} shipAddressList
@property {RecordRef} class
@property {dateTime} closeDate
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} department
@property {RecordRef} location
@property {RecordRef} subsidiary
@property {String} status
@property {String} vatRegNum
@property {boolean} syncPartnerTeams
@property {OpportunitySalesTeamList} salesTeamList
@property {OpportunityPartnersList} partnersList
@property {OpportunityItemList} itemList
@property {OpportunityCompetitorsList} competitorsList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class OpportunitySalesTeam @extends Record
@property {RecordRef} employee
@property {RecordRef} salesRole
@property {boolean} isPrimary
@property {float} contribution
*/
/*
@class OpportunitySalesTeamList @extends Record
@property {OpportunitySalesTeam[]} salesTeam
@property {boolean} replaceAll
*/
/*
@class OpportunityItem @extends Record
@property {RecordRef} job
@property {RecordRef} item
@property {integer} line
@property {float} quantityAvailable
@property {float} quantityOnHand
@property {float} quantity
@property {RecordRef} units
@property {String} description
@property {RecordRef} price
@property {String} rate
@property {float} amount
@property {float} altSalesAmt
@property {integer} revRecTermInMonths
@property {CustomFieldList} options
@property {boolean} fromJob
@property {RecordRef} department
@property {boolean} isEstimate
@property {RecordRef} location
@property {RecordRef} class
@property {ItemCostEstimateType} costEstimateType
@property {float} costEstimate
@property {float} grossAmt
@property {float} tax1Amt
@property {RecordRef} taxCode
@property {float} taxRate1
@property {float} taxRate2
@property {dateTime} expectedShipDate
@property {CustomFieldList} customFieldList
*/
/*
@class OpportunityItemList @extends Record
@property {OpportunityItem[]} item
@property {boolean} replaceAll
*/
/*
@class OpportunityCompetitors @extends Record
@property {RecordRef} competitor
@property {String} url
@property {String} notes
@property {String} strategy
@property {boolean} winner
*/
/*
@class OpportunityCompetitorsList @extends Record
@property {OpportunityCompetitors[]} competitors
@property {boolean} replaceAll
*/
/*
@class OpportunitySearch @extends SearchRecord
@property {OpportunitySearchBasic} basic
@property {TransactionSearchBasic} actualJoin
@property {PhoneCallSearchBasic} callJoin
@property {CustomerSearchBasic} customerJoin
@property {ContactSearchBasic} decisionMakerJoin
@property {TransactionSearchBasic} estimateJoin
@property {CalendarEventSearchBasic} eventJoin
@property {FileSearchBasic} fileJoin
@property {ItemSearchBasic} itemJoin
@property {CampaignSearchBasic} leadSourceJoin
@property {MessageSearchBasic} messagesJoin
@property {TransactionSearchBasic} orderJoin
@property {OriginatingLeadSearchBasic} originatingLeadJoin
@property {PartnerSearchBasic} partnerJoin
@property {EmployeeSearchBasic} salesRepJoin
@property {TaskSearchBasic} taskJoin
@property {NoteSearchBasic} userNotesJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class OpportunitySearchAdvanced @extends SearchRecord
@property {OpportunitySearch} criteria
@property {OpportunitySearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class OpportunitySearchRow @extends SearchRow
@property {OpportunitySearchRowBasic} basic
@property {TransactionSearchRowBasic} actualJoin
@property {PhoneCallSearchRowBasic} callJoin
@property {CustomerSearchRowBasic} customerJoin
@property {ContactSearchRowBasic} decisionMakerJoin
@property {TransactionSearchRowBasic} estimateJoin
@property {CalendarEventSearchRowBasic} eventJoin
@property {FileSearchRowBasic} fileJoin
@property {ItemSearchRowBasic} itemJoin
@property {CampaignSearchRowBasic} leadSourceJoin
@property {MessageSearchRowBasic} messagesJoin
@property {TransactionSearchRowBasic} orderJoin
@property {OriginatingLeadSearchRowBasic} originatingLeadJoin
@property {PartnerSearchRowBasic} partnerJoin
@property {EmployeeSearchRowBasic} salesRepJoin
@property {TaskSearchRowBasic} taskJoin
@property {NoteSearchRowBasic} userNotesJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class OpportunityPartnersList @extends SearchRow
@property {Partners[]} partners
@property {boolean} replaceAll
*/
/*
@class SalesOrder @extends Record
@property {dateTime} createdDate
@property {RecordRef} customForm
@property {RecordRef} entity
@property {RecordRef} job
@property {RecordRef} currency
@property {RecordRef} drAccount
@property {RecordRef} fxAccount
@property {dateTime} tranDate
@property {String} tranId
@property {String} source
@property {RecordRef} createdFrom
@property {SalesOrderOrderStatus} orderStatus
@property {RecordRef} opportunity
@property {RecordRef} salesRep
@property {String} contribPct
@property {RecordRef} partner
@property {RecordRef} salesGroup
@property {boolean} syncSalesTeams
@property {RecordRef} leadSource
@property {dateTime} startDate
@property {dateTime} endDate
@property {String} otherRefNum
@property {String} memo
@property {dateTime} salesEffectiveDate
@property {boolean} excludeCommission
@property {float} totalCostEstimate
@property {float} estGrossProfit
@property {float} estGrossProfitPercent
@property {float} exchangeRate
@property {RecordRef} promoCode
@property {String} currencyName
@property {RecordRef} discountItem
@property {String} discountRate
@property {boolean} isTaxable
@property {RecordRef} taxItem
@property {float} taxRate
@property {boolean} toBePrinted
@property {boolean} toBeEmailed
@property {String} email
@property {boolean} toBeFaxed
@property {String} fax
@property {RecordRef} messageSel
@property {String} message
@property {Address} billingAddress
@property {RecordRef} billAddressList
@property {Address} shippingAddress
@property {boolean} shipIsResidential
@property {RecordRef} shipAddressList
@property {String} fob
@property {dateTime} shipDate
@property {dateTime} actualShipDate
@property {RecordRef} shipMethod
@property {float} shippingCost
@property {float} shippingTax1Rate
@property {boolean} isMultiShipTo
@property {String} shippingTax2Rate
@property {RecordRef} shippingTaxCode
@property {RecordRef} handlingTaxCode
@property {float} handlingTax1Rate
@property {String} handlingTax2Rate
@property {float} handlingCost
@property {String} trackingNumbers
@property {String} linkedTrackingNumbers
@property {boolean} shipComplete
@property {RecordRef} paymentMethod
@property {String} shopperIpAddress
@property {boolean} saveOnAuthDecline
@property {RecordRef} creditCard
@property {RevenueStatus} revenueStatus
@property {float} recognizedRevenue
@property {float} deferredRevenue
@property {boolean} revRecOnRevCommitment
@property {RevenueCommitStatus} revCommitStatus
@property {String} ccNumber
@property {dateTime} ccExpireDate
@property {String} ccName
@property {String} ccStreet
@property {String} ccZipCode
@property {String} payPalStatus
@property {RecordRef} creditCardProcessor
@property {String} payPalTranId
@property {boolean} ccApproved
@property {boolean} getAuth
@property {String} authCode
@property {AvsMatchCode} ccAvsStreetMatch
@property {AvsMatchCode} ccAvsZipMatch
@property {boolean} isRecurringPayment
@property {AvsMatchCode} ccSecurityCodeMatch
@property {float} altSalesTotal
@property {boolean} ignoreAvs
@property {TransactionPaymentEventResult} paymentEventResult
@property {TransactionPaymentEventHoldReason} paymentEventHoldReason
@property {TransactionPaymentEventType} paymentEventType
@property {dateTime} paymentEventDate
@property {String} paymentEventUpdatedBy
@property {float} subTotal
@property {float} discountTotal
@property {float} taxTotal
@property {float} altShippingCost
@property {float} altHandlingCost
@property {float} total
@property {RecordRef} revRecSchedule
@property {dateTime} revRecStartDate
@property {dateTime} revRecEndDate
@property {String} paypalAuthId
@property {float} balance
@property {boolean} paypalProcess
@property {RecordRef} billingSchedule
@property {String} ccSecurityCode
@property {String} threeDStatusCode
@property {RecordRef} class
@property {RecordRef} department
@property {RecordRef} subsidiary
@property {RecordRef} intercoTransaction
@property {IntercoStatus} intercoStatus
@property {String} debitCardIssueNo
@property {dateTime} lastModifiedDate
@property {RecordRef} location
@property {String} pnRefNum
@property {String} status
@property {float} tax2Total
@property {RecordRef} terms
@property {dateTime} validFrom
@property {String} vatRegNum
@property {float} giftCertApplied
@property {boolean} tranIsVsoeBundle
@property {boolean} vsoeAutoCalc
@property {boolean} syncPartnerTeams
@property {SalesOrderSalesTeamList} salesTeamList
@property {SalesOrderPartnersList} partnersList
@property {GiftCertRedemptionList} giftCertRedemptionList
@property {SalesOrderItemList} itemList
@property {SalesOrderShipGroupList} shipGroupList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class SalesOrderSalesTeam @extends Record
@property {RecordRef} employee
@property {RecordRef} salesRole
@property {boolean} isPrimary
@property {float} contribution
*/
/*
@class SalesOrderSalesTeamList @extends Record
@property {SalesOrderSalesTeam[]} salesTeam
@property {boolean} replaceAll
*/
/*
@class SalesOrderItem @extends Record
@property {RecordRef} job
@property {RecordRef} item
@property {float} quantityAvailable
@property {boolean} expandItemGroup
@property {float} quantityOnHand
@property {float} quantity
@property {RecordRef} units
@property {InventoryDetail} inventoryDetail
@property {String} description
@property {RecordRef} price
@property {String} rate
@property {String} serialNumbers
@property {float} amount
@property {boolean} isTaxable
@property {SalesOrderItemCommitInventory} commitInventory
@property {float} orderPriority
@property {String} licenseCode
@property {CustomFieldList} options
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {SalesOrderItemCreatePo} createPo
@property {RecordRef} createdPo
@property {float} altSalesAmt
@property {boolean} createWo
@property {RecordRef} poVendor
@property {String} poCurrency
@property {float} poRate
@property {RecordRef} revRecSchedule
@property {dateTime} revRecStartDate
@property {integer} revRecTermInMonths
@property {dateTime} revRecEndDate
@property {boolean} deferRevRec
@property {boolean} isClosed
@property {RecordRef} catchUpPeriod
@property {RecordRef} billingSchedule
@property {boolean} fromJob
@property {float} grossAmt
@property {boolean} excludeFromRateRequest
@property {boolean} isEstimate
@property {integer} line
@property {float} percentComplete
@property {ItemCostEstimateType} costEstimateType
@property {float} costEstimate
@property {float} quantityBackOrdered
@property {float} quantityBilled
@property {float} quantityCommitted
@property {float} quantityFulfilled
@property {float} quantityPacked
@property {float} quantityPicked
@property {float} tax1Amt
@property {RecordRef} taxCode
@property {float} taxRate1
@property {float} taxRate2
@property {String} giftCertFrom
@property {String} giftCertRecipientName
@property {String} giftCertRecipientEmail
@property {String} giftCertMessage
@property {String} giftCertNumber
@property {integer} shipGroup
@property {boolean} itemIsFulfilled
@property {RecordRef} shipAddress
@property {RecordRef} shipMethod
@property {VsoeSopGroup} vsoeSopGroup
@property {boolean} vsoeIsEstimate
@property {float} vsoePrice
@property {float} vsoeAmount
@property {float} vsoeAllocation
@property {VsoeDeferral} vsoeDeferral
@property {VsoePermitDiscount} vsoePermitDiscount
@property {boolean} vsoeDelivered
@property {dateTime} expectedShipDate
@property {RecordRef} chargeType
@property {CustomFieldList} customFieldList
*/
/*
@class SalesOrderItemList @extends Record
@property {SalesOrderItem[]} item
@property {boolean} replaceAll
*/
/*
@class SalesOrderPartnersList @extends Record
@property {Partners[]} partners
@property {boolean} replaceAll
*/
/*
@class SalesOrderShipGroupList @extends Record
@property {TransactionShipGroup[]} shipGroup
@property {boolean} replaceAll
*/
/*
@class TransactionSearch @extends SearchRecord
@property {TransactionSearchBasic} basic
@property {AccountSearchBasic} accountJoin
@property {AccountingPeriodSearchBasic} accountingPeriodJoin
@property {AccountingTransactionSearchBasic} accountingTransactionJoin
@property {AccountSearchBasic} advanceToApplyAccountJoin
@property {TransactionSearchBasic} appliedToTransactionJoin
@property {TransactionSearchBasic} applyingTransactionJoin
@property {AddressSearchBasic} billingAddressJoin
@property {TransactionSearchBasic} billingTransactionJoin
@property {BinSearchBasic} binNumberJoin
@property {PhoneCallSearchBasic} callJoin
@property {SupportCaseSearchBasic} caseJoin
@property {ClassificationSearchBasic} classJoin
@property {TransactionSearchBasic} cogsPurchaseJoin
@property {TransactionSearchBasic} cogsSaleJoin
@property {ContactSearchBasic} contactPrimaryJoin
@property {TransactionSearchBasic} createdFromJoin
@property {CustomerSearchBasic} customerJoin
@property {CustomerSearchBasic} customerMainJoin
@property {DepartmentSearchBasic} departmentJoin
@property {TransactionSearchBasic} depositTransactionJoin
@property {EmployeeSearchBasic} employeeJoin
@property {CalendarEventSearchBasic} eventJoin
@property {ExpenseCategorySearchBasic} expenseCategoryJoin
@property {FileSearchBasic} fileJoin
@property {LocationSearchBasic} fromLocationJoin
@property {TransactionSearchBasic} fulfillingTransactionJoin
@property {InventoryDetailSearchBasic} inventoryDetailJoin
@property {ItemSearchBasic} itemJoin
@property {InventoryNumberSearchBasic} itemNumberJoin
@property {JobSearchBasic} jobJoin
@property {JobSearchBasic} jobMainJoin
@property {CampaignSearchBasic} leadSourceJoin
@property {LocationSearchBasic} locationJoin
@property {ManufacturingOperationTaskSearchBasic} manufacturingOperationTaskJoin
@property {MessageSearchBasic} messagesJoin
@property {OpportunitySearchBasic} opportunityJoin
@property {TransactionSearchBasic} paidTransactionJoin
@property {PartnerSearchBasic} partnerJoin
@property {TransactionSearchBasic} payingTransactionJoin
@property {PayrollItemSearchBasic} payrollItemJoin
@property {TransactionSearchBasic} purchaseOrderJoin
@property {EmployeeSearchBasic} requestorJoin
@property {TransactionSearchBasic} revCommittingTransactionJoin
@property {ItemRevisionSearchBasic} revisionJoin
@property {RevRecScheduleSearchBasic} revRecScheduleJoin
@property {TransactionSearchBasic} rgPostingTransactionJoin
@property {TransactionSearchBasic} salesOrderJoin
@property {EmployeeSearchBasic} salesRepJoin
@property {AddressSearchBasic} shippingAddressJoin
@property {SubsidiarySearchBasic} subsidiaryJoin
@property {TaskSearchBasic} taskJoin
@property {LocationSearchBasic} toLocationJoin
@property {EmployeeSearchBasic} userJoin
@property {NoteSearchBasic} userNotesJoin
@property {VendorSearchBasic} vendorJoin
@property {VendorSearchBasic} vendorLineJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class TransactionSearchAdvanced @extends SearchRecord
@property {TransactionSearch} criteria
@property {TransactionSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class TransactionSearchRow @extends SearchRow
@property {TransactionSearchRowBasic} basic
@property {AccountSearchRowBasic} accountJoin
@property {AccountingPeriodSearchRowBasic} accountingPeriodJoin
@property {AccountingTransactionSearchRowBasic} accountingTransactionJoin
@property {AccountSearchRowBasic} advanceToApplyAccountJoin
@property {TransactionSearchRowBasic} appliedToTransactionJoin
@property {TransactionSearchRowBasic} applyingTransactionJoin
@property {AddressSearchRowBasic} billingAddressJoin
@property {TransactionSearchRowBasic} billingTransactionJoin
@property {BinSearchRowBasic} binNumberJoin
@property {PhoneCallSearchRowBasic} callJoin
@property {SupportCaseSearchRowBasic} caseJoin
@property {ClassificationSearchRowBasic} classJoin
@property {TransactionSearchRowBasic} cogsPurchaseJoin
@property {TransactionSearchRowBasic} cogsSaleJoin
@property {ContactSearchRowBasic} contactPrimaryJoin
@property {TransactionSearchRowBasic} createdFromJoin
@property {CustomerSearchRowBasic} customerJoin
@property {CustomerSearchRowBasic} customerMainJoin
@property {DepartmentSearchRowBasic} departmentJoin
@property {TransactionSearchRowBasic} depositTransactionJoin
@property {EmployeeSearchRowBasic} employeeJoin
@property {CalendarEventSearchRowBasic} eventJoin
@property {ExpenseCategorySearchRowBasic} expenseCategoryJoin
@property {FileSearchRowBasic} fileJoin
@property {LocationSearchRowBasic} fromLocationJoin
@property {TransactionSearchRowBasic} fulfillingTransactionJoin
@property {InventoryDetailSearchRowBasic} inventoryDetailJoin
@property {ItemSearchRowBasic} itemJoin
@property {InventoryNumberSearchRowBasic} itemNumberJoin
@property {JobSearchRowBasic} jobJoin
@property {JobSearchRowBasic} jobMainJoin
@property {CampaignSearchRowBasic} leadSourceJoin
@property {LocationSearchRowBasic} locationJoin
@property {ManufacturingOperationTaskSearchRowBasic} manufacturingOperationTaskJoin
@property {MessageSearchRowBasic} messagesJoin
@property {OpportunitySearchRowBasic} opportunityJoin
@property {TransactionSearchRowBasic} paidTransactionJoin
@property {PartnerSearchRowBasic} partnerJoin
@property {TransactionSearchRowBasic} payingTransactionJoin
@property {PayrollItemSearchRowBasic} payrollItemJoin
@property {TransactionSearchRowBasic} purchaseOrderJoin
@property {EmployeeSearchRowBasic} requestorJoin
@property {TransactionSearchRowBasic} revCommittingTransactionJoin
@property {ItemRevisionSearchRowBasic} revisionJoin
@property {RevRecScheduleSearchRowBasic} revRecScheduleJoin
@property {TransactionSearchRowBasic} rgPostingTransactionJoin
@property {TransactionSearchRowBasic} salesOrderJoin
@property {EmployeeSearchRowBasic} salesRepJoin
@property {AddressSearchRowBasic} shippingAddressJoin
@property {SubsidiarySearchRowBasic} subsidiaryJoin
@property {TaskSearchRowBasic} taskJoin
@property {LocationSearchRowBasic} toLocationJoin
@property {EmployeeSearchRowBasic} userJoin
@property {NoteSearchRowBasic} userNotesJoin
@property {VendorSearchRowBasic} vendorJoin
@property {VendorSearchRowBasic} vendorLineJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class ItemFulfillment @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {RecordRef} postingPeriod
@property {RecordRef} entity
@property {RecordRef} createdFrom
@property {integer} createdFromShipGroup
@property {RecordRef} partner
@property {Address} shippingAddress
@property {dateTime} pickedDate
@property {dateTime} packedDate
@property {dateTime} shippedDate
@property {boolean} shipIsResidential
@property {RecordRef} shipAddressList
@property {ItemFulfillmentShipStatus} shipStatus
@property {boolean} saturdayDeliveryUps
@property {boolean} sendShipNotifyEmailUps
@property {boolean} sendBackupEmailUps
@property {String} shipNotifyEmailAddressUps
@property {String} shipNotifyEmailAddress2Ups
@property {String} backupEmailAddressUps
@property {String} shipNotifyEmailMessageUps
@property {String} thirdPartyAcctUps
@property {String} thirdPartyZipcodeUps
@property {Country} thirdPartyCountryUps
@property {ItemFulfillmentThirdPartyTypeUps} thirdPartyTypeUps
@property {boolean} partiesToTransactionUps
@property {ItemFulfillmentExportTypeUps} exportTypeUps
@property {ItemFulfillmentMethodOfTransportUps} methodOfTransportUps
@property {String} carrierIdUps
@property {String} entryNumberUps
@property {String} inbondCodeUps
@property {boolean} isRoutedExportTransactionUps
@property {String} licenseNumberUps
@property {dateTime} licenseDateUps
@property {ItemFulfillmentLicenseExceptionUps} licenseExceptionUps
@property {String} eccNumberUps
@property {String} recipientTaxIdUps
@property {dateTime} blanketStartDateUps
@property {dateTime} blanketEndDateUps
@property {float} shipmentWeightUps
@property {boolean} saturdayDeliveryFedEx
@property {boolean} saturdayPickupFedex
@property {boolean} sendShipNotifyEmailFedEx
@property {boolean} sendBackupEmailFedEx
@property {boolean} signatureHomeDeliveryFedEx
@property {String} shipNotifyEmailAddressFedEx
@property {String} backupEmailAddressFedEx
@property {dateTime} shipDateFedEx
@property {ItemFulfillmentHomeDeliveryTypeFedEx} homeDeliveryTypeFedEx
@property {dateTime} homeDeliveryDateFedEx
@property {String} bookingConfirmationNumFedEx
@property {String} intlExemptionNumFedEx
@property {ItemFulfillmentB13AFilingOptionFedEx} b13aFilingOptionFedEx
@property {String} b13aStatementDataFedEx
@property {String} thirdPartyAcctFedEx
@property {Country} thirdPartyCountryFedEx
@property {ItemFulfillmentThirdPartyTypeFedEx} thirdPartyTypeFedEx
@property {float} shipmentWeightFedEx
@property {ItemFulfillmentTermsOfSaleFedEx} termsOfSaleFedEx
@property {float} termsFreightChargeFedEx
@property {float} termsInsuranceChargeFedEx
@property {boolean} insideDeliveryFedEx
@property {boolean} insidePickupFedEx
@property {ItemFulfillmentAncillaryEndorsementFedEx} ancillaryEndorsementFedEx
@property {boolean} holdAtLocationFedEx
@property {String} halPhoneFedEx
@property {String} halAddr1FedEx
@property {String} halAddr2FedEx
@property {String} halAddr3FedEx
@property {String} halCityFedEx
@property {String} halZipFedEx
@property {String} halStateFedEx
@property {String} halCountryFedEx
@property {ItemFulfillmentHazmatTypeFedEx} hazmatTypeFedEx
@property {ItemFulfillmentAccessibilityTypeFedEx} accessibilityTypeFedEx
@property {boolean} isCargoAircraftOnlyFedEx
@property {dateTime} tranDate
@property {String} tranId
@property {RecordRef} shipMethod
@property {boolean} generateIntegratedShipperLabel
@property {float} shippingCost
@property {float} handlingCost
@property {String} memo
@property {RecordRef} transferLocation
@property {ItemFulfillmentPackageList} packageList
@property {ItemFulfillmentPackageUpsList} packageUpsList
@property {ItemFulfillmentPackageUspsList} packageUspsList
@property {ItemFulfillmentPackageFedExList} packageFedExList
@property {ItemFulfillmentItemList} itemList
@property {ItemFulfillmentShipGroupList} shipGroupList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class ItemFulfillmentItem @extends Record
@property {String} jobName
@property {boolean} itemReceive
@property {String} itemName
@property {String} description
@property {RecordRef} location
@property {float} onHand
@property {float} quantity
@property {String} unitsDisplay
@property {String} createPo
@property {InventoryDetail} inventoryDetail
@property {String} binNumbers
@property {String} serialNumbers
@property {String} poNum
@property {RecordRef} item
@property {integer} orderLine
@property {float} quantityRemaining
@property {CustomFieldList} options
@property {integer} shipGroup
@property {boolean} itemIsFulfilled
@property {RecordRef} shipAddress
@property {RecordRef} shipMethod
@property {CustomFieldList} customFieldList
*/
/*
@class ItemFulfillmentItemList @extends Record
@property {ItemFulfillmentItem[]} item
@property {boolean} replaceAll
*/
/*
@class ItemFulfillmentPackage @extends Record
@property {float} packageWeight
@property {String} packageDescr
@property {String} packageTrackingNumber
*/
/*
@class ItemFulfillmentPackageList @extends Record
@property {ItemFulfillmentPackage[]} package
@property {boolean} replaceAll
*/
/*
@class ItemFulfillmentPackageUps @extends Record
@property {float} packageWeightUps
@property {String} packageDescrUps
@property {String} packageTrackingNumberUps
@property {ItemFulfillmentPackageUpsPackagingUps} packagingUps
@property {boolean} useInsuredValueUps
@property {float} insuredValueUps
@property {String} reference1Ups
@property {String} reference2Ups
@property {integer} packageLengthUps
@property {integer} packageWidthUps
@property {integer} packageHeightUps
@property {boolean} additionalHandlingUps
@property {boolean} useCodUps
@property {float} codAmountUps
@property {ItemFulfillmentPackageUpsCodMethodUps} codMethodUps
@property {ItemFulfillmentPackageUpsDeliveryConfUps} deliveryConfUps
*/
/*
@class ItemFulfillmentPackageUpsList @extends Record
@property {ItemFulfillmentPackageUps[]} packageUps
@property {boolean} replaceAll
*/
/*
@class ItemFulfillmentPackageUsps @extends Record
@property {float} packageWeightUsps
@property {String} packageDescrUsps
@property {String} packageTrackingNumberUsps
@property {ItemFulfillmentPackageUspsPackagingUsps} packagingUsps
@property {boolean} useInsuredValueUsps
@property {float} insuredValueUsps
@property {String} reference1Usps
@property {String} reference2Usps
@property {integer} packageLengthUsps
@property {integer} packageWidthUsps
@property {integer} packageHeightUsps
@property {ItemFulfillmentPackageUspsDeliveryConfUsps} deliveryConfUsps
*/
/*
@class ItemFulfillmentPackageUspsList @extends Record
@property {ItemFulfillmentPackageUsps[]} packageUsps
@property {boolean} replaceAll
*/
/*
@class ItemFulfillmentPackageFedEx @extends Record
@property {float} packageWeightFedEx
@property {float} dryIceWeightFedEx
@property {String} packageTrackingNumberFedEx
@property {ItemFulfillmentPackageFedExPackagingFedEx} packagingFedEx
@property {ItemFulfillmentPackageFedExAdmPackageTypeFedEx} admPackageTypeFedEx
@property {boolean} isNonStandardContainerFedEx
@property {boolean} isAlcoholFedEx
@property {boolean} isNonHazLithiumFedEx
@property {float} insuredValueFedEx
@property {boolean} useInsuredValueFedEx
@property {String} reference1FedEx
@property {ItemFulfillmentPackageFedExPriorityAlertTypeFedEx} priorityAlertTypeFedEx
@property {String} priorityAlertContentFedEx
@property {integer} packageLengthFedEx
@property {integer} packageWidthFedEx
@property {integer} packageHeightFedEx
@property {boolean} useCodFedEx
@property {float} codAmountFedEx
@property {ItemFulfillmentPackageFedExCodMethodFedEx} codMethodFedEx
@property {ItemFulfillmentPackageFedExCodFreightTypeFedEx} codFreightTypeFedEx
@property {ItemFulfillmentPackageFedExDeliveryConfFedEx} deliveryConfFedEx
@property {ItemFulfillmentPackageFedExSignatureOptionsFedEx} signatureOptionsFedEx
@property {String} signatureReleaseFedEx
@property {String} authorizationNumberFedEx
*/
/*
@class ItemFulfillmentPackageFedExList @extends Record
@property {ItemFulfillmentPackageFedEx[]} packageFedEx
@property {boolean} replaceAll
*/
/*
@class ItemFulfillmentShipGroupList @extends Record
@property {TransactionShipGroup[]} shipGroup
@property {boolean} replaceAll
*/
/*
@class Invoice @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {RecordRef} nextApprover
@property {RecordRef} entity
@property {dateTime} tranDate
@property {String} tranId
@property {String} source
@property {RecordRef} createdFrom
@property {RecordRef} postingPeriod
@property {RecordRef} opportunity
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} terms
@property {RecordRef} location
@property {RecordRef} subsidiary
@property {RecordRef} currency
@property {dateTime} dueDate
@property {dateTime} discountDate
@property {float} discountAmount
@property {RecordRef} salesRep
@property {String} contribPct
@property {RecordRef} partner
@property {RecordRef} leadSource
@property {dateTime} startDate
@property {dateTime} endDate
@property {String} otherRefNum
@property {String} memo
@property {dateTime} salesEffectiveDate
@property {boolean} excludeCommission
@property {float} totalCostEstimate
@property {float} estGrossProfit
@property {float} estGrossProfitPercent
@property {RecordRef} revRecSchedule
@property {dateTime} revRecStartDate
@property {dateTime} revRecEndDate
@property {float} amountPaid
@property {float} amountRemaining
@property {float} balance
@property {RecordRef} account
@property {String} onCreditHold
@property {float} exchangeRate
@property {String} currencyName
@property {RecordRef} promoCode
@property {RecordRef} discountItem
@property {String} discountRate
@property {boolean} isTaxable
@property {RecordRef} taxItem
@property {float} taxRate
@property {boolean} toBePrinted
@property {boolean} toBeEmailed
@property {boolean} toBeFaxed
@property {String} fax
@property {RecordRef} messageSel
@property {String} message
@property {Address} billingAddress
@property {RecordRef} billAddressList
@property {Address} shippingAddress
@property {boolean} shipIsResidential
@property {RecordRef} shipAddressList
@property {String} fob
@property {dateTime} shipDate
@property {RecordRef} shipMethod
@property {float} shippingCost
@property {float} shippingTax1Rate
@property {String} shippingTax2Rate
@property {RecordRef} shippingTaxCode
@property {RecordRef} handlingTaxCode
@property {float} handlingTax1Rate
@property {float} handlingCost
@property {String} handlingTax2Rate
@property {String} trackingNumbers
@property {String} linkedTrackingNumbers
@property {RecordRef} salesGroup
@property {float} subTotal
@property {RevenueStatus} revenueStatus
@property {float} recognizedRevenue
@property {float} deferredRevenue
@property {boolean} revRecOnRevCommitment
@property {boolean} syncSalesTeams
@property {float} discountTotal
@property {float} taxTotal
@property {float} altShippingCost
@property {float} altHandlingCost
@property {float} total
@property {String} status
@property {RecordRef} job
@property {RecordRef} billingSchedule
@property {String} email
@property {float} tax2Total
@property {String} vatRegNum
@property {RecordRef} expCostDiscount
@property {RecordRef} itemCostDiscount
@property {RecordRef} timeDiscount
@property {String} expCostDiscRate
@property {String} itemCostDiscRate
@property {String} timeDiscRate
@property {float} expCostDiscAmount
@property {float} expCostTaxRate1
@property {float} expCostTaxRate2
@property {float} itemCostDiscAmount
@property {RecordRef} expCostTaxCode
@property {float} expCostDiscTax1Amt
@property {float} itemCostTaxRate1
@property {float} timeDiscAmount
@property {RecordRef} itemCostTaxCode
@property {boolean} expCostDiscTaxable
@property {boolean} itemCostDiscTaxable
@property {float} itemCostTaxRate2
@property {float} itemCostDiscTax1Amt
@property {boolean} itemCostDiscPrint
@property {boolean} timeDiscTaxable
@property {float} timeTaxRate1
@property {boolean} expCostDiscPrint
@property {RecordRef} timeTaxCode
@property {boolean} timeDiscPrint
@property {float} giftCertApplied
@property {float} timeDiscTax1Amt
@property {boolean} tranIsVsoeBundle
@property {float} timeTaxRate2
@property {boolean} vsoeAutoCalc
@property {boolean} syncPartnerTeams
@property {InvoiceSalesTeamList} salesTeamList
@property {InvoicePartnersList} partnersList
@property {InvoiceItemList} itemList
@property {InvoiceItemCostList} itemCostList
@property {GiftCertRedemptionList} giftCertRedemptionList
@property {InvoiceExpCostList} expCostList
@property {InvoiceTimeList} timeList
@property {InvoiceShipGroupList} shipGroupList
@property {RecordRef} approvalStatus
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class InvoiceSalesTeam @extends Record
@property {RecordRef} employee
@property {RecordRef} salesRole
@property {boolean} isPrimary
@property {float} contribution
*/
/*
@class InvoiceSalesTeamList @extends Record
@property {InvoiceSalesTeam[]} salesTeam
@property {boolean} replaceAll
*/
/*
@class InvoiceItem @extends Record
@property {RecordRef} job
@property {RecordRef} item
@property {integer} line
@property {String} description
@property {float} amount
@property {boolean} isTaxable
@property {CustomFieldList} options
@property {boolean} deferRevRec
@property {float} quantity
@property {float} currentPercent
@property {RecordRef} units
@property {InventoryDetail} inventoryDetail
@property {String} serialNumbers
@property {String} binNumbers
@property {RecordRef} price
@property {String} rate
@property {float} percentComplete
@property {float} quantityOnHand
@property {float} quantityAvailable
@property {float} quantityOrdered
@property {float} quantityRemaining
@property {float} quantityFulfilled
@property {float} amountOrdered
@property {RecordRef} department
@property {integer} orderLine
@property {String} licenseCode
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} revRecSchedule
@property {dateTime} revRecStartDate
@property {dateTime} revRecEndDate
@property {float} grossAmt
@property {ItemCostEstimateType} costEstimateType
@property {float} costEstimate
@property {boolean} excludeFromRateRequest
@property {RecordRef} catchUpPeriod
@property {float} tax1Amt
@property {RecordRef} taxCode
@property {float} taxRate1
@property {float} taxRate2
@property {String} giftCertFrom
@property {String} giftCertRecipientName
@property {String} giftCertRecipientEmail
@property {String} giftCertMessage
@property {String} giftCertNumber
@property {integer} shipGroup
@property {boolean} itemIsFulfilled
@property {RecordRef} shipAddress
@property {RecordRef} shipMethod
@property {VsoeSopGroup} vsoeSopGroup
@property {boolean} vsoeIsEstimate
@property {float} vsoePrice
@property {float} vsoeAmount
@property {float} vsoeAllocation
@property {VsoeDeferral} vsoeDeferral
@property {VsoePermitDiscount} vsoePermitDiscount
@property {boolean} vsoeDelivered
@property {RecordRef} chargeType
@property {RecordRefList} chargesList
@property {CustomFieldList} customFieldList
*/
/*
@class InvoiceItemList @extends Record
@property {InvoiceItem[]} item
@property {boolean} replaceAll
*/
/*
@class InvoiceItemCost @extends Record
@property {boolean} apply
@property {integer} doc
@property {integer} line
@property {dateTime} billedDate
@property {String} itemDisp
@property {String} memo
@property {String} jobDisp
@property {String} department
@property {String} class
@property {String} location
@property {String} unitDisp
@property {CustomFieldList} options
@property {String} itemCostCount
@property {String} quantity
@property {String} serialNumbers
@property {float} cost
@property {float} amount
@property {RecordRef} revRecSchedule
@property {dateTime} revRecStartDate
@property {dateTime} revRecEndDate
@property {float} grossAmt
@property {float} tax1Amt
@property {RecordRef} taxCode
@property {float} taxRate1
@property {float} taxRate2
*/
/*
@class InvoiceItemCostList @extends Record
@property {InvoiceItemCost[]} itemCost
@property {boolean} replaceAll
*/
/*
@class InvoiceExpCost @extends Record
@property {boolean} apply
@property {integer} doc
@property {integer} line
@property {dateTime} billedDate
@property {String} jobDisp
@property {String} employeeDisp
@property {String} categoryDisp
@property {String} memo
@property {String} department
@property {String} class
@property {String} location
@property {float} originalAmount
@property {float} amount
@property {String} taxableDisp
@property {RecordRef} revRecSchedule
@property {dateTime} revRecStartDate
@property {dateTime} revRecEndDate
@property {float} grossAmt
@property {float} tax1Amt
@property {RecordRef} taxCode
@property {float} taxRate1
@property {float} taxRate2
*/
/*
@class InvoiceExpCostList @extends Record
@property {InvoiceExpCost[]} expCost
@property {boolean} replaceAll
*/
/*
@class InvoiceTime @extends Record
@property {boolean} apply
@property {integer} doc
@property {integer} line
@property {dateTime} billedDate
@property {String} employeeDisp
@property {String} itemDisp
@property {String} jobDisp
@property {String} department
@property {String} class
@property {String} location
@property {String} quantity
@property {float} rate
@property {String} unitDisp
@property {float} amount
@property {String} memo
@property {RecordRef} revRecSchedule
@property {dateTime} revRecStartDate
@property {dateTime} revRecEndDate
@property {float} grossAmt
@property {float} tax1Amt
@property {RecordRef} taxCode
@property {float} taxRate1
@property {float} taxRate2
*/
/*
@class InvoiceTimeList @extends Record
@property {InvoiceTime[]} time
@property {boolean} replaceAll
*/
/*
@class InvoicePartnersList @extends Record
@property {Partners[]} partners
@property {boolean} replaceAll
*/
/*
@class InvoiceShipGroupList @extends Record
@property {TransactionShipGroup[]} shipGroup
@property {boolean} replaceAll
*/
/*
@class CashSale @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {RecordRef} entity
@property {dateTime} tranDate
@property {String} tranId
@property {String} source
@property {RecordRef} postingPeriod
@property {RecordRef} createdFrom
@property {RecordRef} opportunity
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} subsidiary
@property {RecordRef} salesRep
@property {String} contribPct
@property {RecordRef} partner
@property {RecordRef} leadSource
@property {dateTime} startDate
@property {dateTime} endDate
@property {String} otherRefNum
@property {String} memo
@property {dateTime} salesEffectiveDate
@property {boolean} excludeCommission
@property {RecordRef} revRecSchedule
@property {boolean} undepFunds
@property {RecordRef} currency
@property {RecordRef} account
@property {dateTime} revRecStartDate
@property {dateTime} revRecEndDate
@property {float} totalCostEstimate
@property {float} estGrossProfit
@property {float} estGrossProfitPercent
@property {float} exchangeRate
@property {String} currencyName
@property {RecordRef} promoCode
@property {RecordRef} discountItem
@property {String} discountRate
@property {boolean} isTaxable
@property {RecordRef} taxItem
@property {float} taxRate
@property {boolean} toBePrinted
@property {boolean} toBeEmailed
@property {boolean} toBeFaxed
@property {String} fax
@property {RecordRef} messageSel
@property {String} message
@property {Address} billingAddress
@property {RecordRef} billAddressList
@property {Address} shippingAddress
@property {boolean} shipIsResidential
@property {RecordRef} shipAddressList
@property {String} fob
@property {dateTime} shipDate
@property {RecordRef} shipMethod
@property {float} shippingCost
@property {float} shippingTax1Rate
@property {String} shippingTax2Rate
@property {RecordRef} shippingTaxCode
@property {RecordRef} handlingTaxCode
@property {float} handlingTax1Rate
@property {float} handlingCost
@property {String} handlingTax2Rate
@property {String} linkedTrackingNumbers
@property {String} trackingNumbers
@property {RecordRef} salesGroup
@property {RevenueStatus} revenueStatus
@property {float} recognizedRevenue
@property {float} deferredRevenue
@property {boolean} revRecOnRevCommitment
@property {boolean} syncSalesTeams
@property {RecordRef} paymentMethod
@property {String} payPalStatus
@property {RecordRef} creditCard
@property {String} ccNumber
@property {dateTime} ccExpireDate
@property {String} ccName
@property {String} ccStreet
@property {String} ccZipCode
@property {RecordRef} creditCardProcessor
@property {boolean} ccApproved
@property {String} authCode
@property {AvsMatchCode} ccAvsStreetMatch
@property {AvsMatchCode} ccAvsZipMatch
@property {boolean} isRecurringPayment
@property {String} payPalTranId
@property {float} subTotal
@property {boolean} ccIsPurchaseCardBin
@property {boolean} ignoreAvs
@property {boolean} ccProcessAsPurchaseCard
@property {RecordRef} itemCostDiscount
@property {String} itemCostDiscRate
@property {float} itemCostDiscAmount
@property {float} itemCostTaxRate1
@property {float} itemCostTaxRate2
@property {boolean} itemCostDiscTaxable
@property {RecordRef} itemCostTaxCode
@property {float} itemCostDiscTax1Amt
@property {boolean} itemCostDiscPrint
@property {RecordRef} expCostDiscount
@property {String} expCostDiscRate
@property {float} expCostDiscAmount
@property {boolean} expCostDiscTaxable
@property {boolean} expCostDiscprint
@property {float} expCostTaxRate1
@property {RecordRef} timeDiscount
@property {RecordRef} expCostTaxCode
@property {String} timeDiscRate
@property {float} expCostTaxRate2
@property {float} expCostDiscTax1Amt
@property {float} timeDiscAmount
@property {boolean} timeDiscTaxable
@property {boolean} timeDiscPrint
@property {float} discountTotal
@property {float} taxTotal
@property {float} timeTaxRate1
@property {float} altShippingCost
@property {RecordRef} timeTaxCode
@property {float} altHandlingCost
@property {float} total
@property {float} timeDiscTax1Amt
@property {String} ccSecurityCode
@property {float} timeTaxRate2
@property {AvsMatchCode} ccSecurityCodeMatch
@property {boolean} chargeIt
@property {String} debitCardIssueNo
@property {String} threeDStatusCode
@property {String} pnRefNum
@property {String} paypalAuthId
@property {String} status
@property {boolean} paypalProcess
@property {RecordRef} job
@property {RecordRef} billingSchedule
@property {String} email
@property {float} tax2Total
@property {dateTime} validFrom
@property {String} vatRegNum
@property {float} giftCertApplied
@property {boolean} tranIsVsoeBundle
@property {boolean} vsoeAutoCalc
@property {boolean} syncPartnerTeams
@property {CashSaleSalesTeamList} salesTeamList
@property {CashSalePartnersList} partnersList
@property {CashSaleItemList} itemList
@property {CashSaleItemCostList} itemCostList
@property {GiftCertRedemptionList} giftCertRedemptionList
@property {CashSaleExpCostList} expCostList
@property {CashSaleTimeList} timeList
@property {CashSaleShipGroupList} shipGroupList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class CashSaleSalesTeam @extends Record
@property {RecordRef} employee
@property {RecordRef} salesRole
@property {boolean} isPrimary
@property {float} contribution
*/
/*
@class CashSaleSalesTeamList @extends Record
@property {CashSaleSalesTeam[]} salesTeam
@property {boolean} replaceAll
*/
/*
@class CashSaleItem @extends Record
@property {RecordRef} job
@property {RecordRef} item
@property {integer} line
@property {float} quantityAvailable
@property {float} quantityOnHand
@property {float} quantityFulfilled
@property {float} quantity
@property {RecordRef} units
@property {InventoryDetail} inventoryDetail
@property {String} serialNumbers
@property {String} binNumbers
@property {String} description
@property {RecordRef} price
@property {String} rate
@property {float} amount
@property {integer} orderLine
@property {String} licenseCode
@property {boolean} isTaxable
@property {CustomFieldList} options
@property {boolean} deferRevRec
@property {float} currentPercent
@property {RecordRef} department
@property {float} percentComplete
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} revRecSchedule
@property {dateTime} revRecStartDate
@property {dateTime} revRecEndDate
@property {float} grossAmt
@property {ItemCostEstimateType} costEstimateType
@property {boolean} excludeFromRateRequest
@property {RecordRef} catchUpPeriod
@property {float} costEstimate
@property {float} amountOrdered
@property {float} tax1Amt
@property {float} quantityOrdered
@property {float} quantityRemaining
@property {RecordRef} taxCode
@property {float} taxRate1
@property {float} taxRate2
@property {String} giftCertFrom
@property {String} giftCertRecipientName
@property {String} giftCertRecipientEmail
@property {String} giftCertMessage
@property {String} giftCertNumber
@property {integer} shipGroup
@property {boolean} itemIsFulfilled
@property {RecordRef} shipAddress
@property {RecordRef} shipMethod
@property {VsoeSopGroup} vsoeSopGroup
@property {boolean} vsoeIsEstimate
@property {float} vsoePrice
@property {float} vsoeAmount
@property {float} vsoeAllocation
@property {VsoeDeferral} vsoeDeferral
@property {VsoePermitDiscount} vsoePermitDiscount
@property {boolean} vsoeDelivered
@property {RecordRef} chargeType
@property {RecordRefList} chargesList
@property {CustomFieldList} customFieldList
*/
/*
@class CashSaleItemList @extends Record
@property {CashSaleItem[]} item
@property {boolean} replaceAll
*/
/*
@class CashSaleItemCost @extends Record
@property {boolean} apply
@property {integer} doc
@property {integer} line
@property {dateTime} billedDate
@property {String} itemDisp
@property {String} memo
@property {String} jobDisp
@property {String} department
@property {String} class
@property {String} location
@property {String} unitDisp
@property {CustomFieldList} options
@property {String} itemCostCount
@property {String} quantity
@property {String} serialNumbers
@property {float} cost
@property {float} amount
@property {RecordRef} revRecSchedule
@property {dateTime} revRecStartDate
@property {dateTime} revRecEndDate
@property {float} grossAmt
@property {float} tax1Amt
@property {RecordRef} taxCode
@property {float} taxRate1
@property {float} taxRate2
*/
/*
@class CashSaleItemCostList @extends Record
@property {CashSaleItemCost[]} itemCost
@property {boolean} replaceAll
*/
/*
@class CashSaleExpCost @extends Record
@property {boolean} apply
@property {integer} doc
@property {integer} line
@property {dateTime} billedDate
@property {String} jobDisp
@property {String} employeeDisp
@property {String} categoryDisp
@property {String} memo
@property {String} department
@property {String} class
@property {String} location
@property {float} originalAmount
@property {float} amount
@property {String} taxableDisp
@property {RecordRef} revRecSchedule
@property {dateTime} revRecStartDate
@property {dateTime} revRecEndDate
@property {float} grossAmt
@property {float} tax1Amt
@property {RecordRef} taxCode
@property {float} taxRate1
@property {float} taxRate2
*/
/*
@class CashSaleExpCostList @extends Record
@property {CashSaleExpCost[]} expCost
@property {boolean} replaceAll
*/
/*
@class CashSaleTime @extends Record
@property {boolean} apply
@property {integer} doc
@property {integer} line
@property {dateTime} billedDate
@property {String} employeeDisp
@property {String} itemDisp
@property {String} jobDisp
@property {String} department
@property {String} class
@property {String} location
@property {String} quantity
@property {float} rate
@property {String} unitDisp
@property {float} amount
@property {String} memo
@property {RecordRef} revRecSchedule
@property {dateTime} revRecStartDate
@property {dateTime} revRecEndDate
@property {float} grossAmt
@property {float} tax1Amt
@property {RecordRef} taxCode
@property {float} taxRate1
@property {float} taxRate2
*/
/*
@class CashSaleTimeList @extends Record
@property {CashSaleTime[]} time
@property {boolean} replaceAll
*/
/*
@class CashSalePartnersList @extends Record
@property {Partners[]} partners
@property {boolean} replaceAll
*/
/*
@class CashSaleShipGroupList @extends Record
@property {TransactionShipGroup[]} shipGroup
@property {boolean} replaceAll
*/
/*
@class Estimate @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} entity
@property {RecordRef} job
@property {dateTime} tranDate
@property {String} tranId
@property {String} source
@property {RecordRef} customForm
@property {RecordRef} currency
@property {String} title
@property {RecordRef} entityStatus
@property {float} probability
@property {boolean} includeInForecast
@property {RecordRef} forecastType
@property {RecordRef} opportunity
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} terms
@property {dateTime} dueDate
@property {RecordRef} location
@property {RecordRef} subsidiary
@property {RecordRef} billingSchedule
@property {String} status
@property {RecordRef} salesRep
@property {RecordRef} partner
@property {String} contribPct
@property {RecordRef} leadSource
@property {dateTime} expectedCloseDate
@property {String} otherRefNum
@property {String} memo
@property {dateTime} endDate
@property {dateTime} startDate
@property {float} totalCostEstimate
@property {float} estGrossProfit
@property {float} estGrossProfitPercent
@property {RecordRef} createdFrom
@property {float} exchangeRate
@property {String} currencyName
@property {RecordRef} promoCode
@property {RecordRef} discountItem
@property {String} discountRate
@property {boolean} isTaxable
@property {RecordRef} taxItem
@property {float} taxRate
@property {String} vatRegNum
@property {boolean} toBePrinted
@property {boolean} toBeEmailed
@property {String} email
@property {boolean} toBeFaxed
@property {String} fax
@property {boolean} visibleToCustomer
@property {RecordRef} messageSel
@property {String} message
@property {Address} billingAddress
@property {RecordRef} billAddressList
@property {Address} shippingAddress
@property {boolean} shipIsResidential
@property {RecordRef} shipAddressList
@property {String} fob
@property {dateTime} shipDate
@property {RecordRef} shipMethod
@property {float} shippingCost
@property {float} shippingTax1Rate
@property {RecordRef} shippingTaxCode
@property {String} shippingTax2Rate
@property {RecordRef} handlingTaxCode
@property {float} handlingTax1Rate
@property {float} handlingCost
@property {String} trackingNumbers
@property {String} handlingTax2Rate
@property {String} linkedTrackingNumbers
@property {RecordRef} salesGroup
@property {boolean} syncSalesTeams
@property {float} altSalesTotal
@property {float} subTotal
@property {float} discountTotal
@property {float} taxTotal
@property {float} altShippingCost
@property {float} altHandlingCost
@property {float} total
@property {float} tax2Total
@property {EstimateItemList} itemList
@property {EstimateSalesTeamList} salesTeamList
@property {boolean} syncPartnerTeams
@property {EstimatePartnersList} partnersList
@property {EstimateShipGroupList} shipGroupList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class EstimateItem @extends Record
@property {RecordRef} job
@property {RecordRef} item
@property {integer} line
@property {boolean} expandItemGroup
@property {float} quantityAvailable
@property {float} quantityOnHand
@property {float} quantity
@property {RecordRef} units
@property {String} description
@property {String} serialNumbers
@property {RecordRef} price
@property {String} rate
@property {float} amount
@property {CustomFieldList} options
@property {integer} revRecTermInMonths
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {boolean} isTaxable
@property {float} altSalesAmt
@property {boolean} fromJob
@property {float} grossAmt
@property {boolean} isEstimate
@property {float} tax1Amt
@property {RecordRef} taxCode
@property {ItemCostEstimateType} costEstimateType
@property {float} costEstimate
@property {boolean} excludeFromRateRequest
@property {float} taxRate1
@property {float} taxRate2
@property {integer} shipGroup
@property {boolean} itemIsFulfilled
@property {RecordRef} shipAddress
@property {RecordRef} shipMethod
@property {dateTime} expectedShipDate
@property {RecordRef} chargeType
@property {CustomFieldList} customFieldList
*/
/*
@class EstimateItemList @extends Record
@property {EstimateItem[]} item
@property {boolean} replaceAll
*/
/*
@class EstimateSalesTeam @extends Record
@property {RecordRef} employee
@property {RecordRef} salesRole
@property {boolean} isPrimary
@property {float} contribution
*/
/*
@class EstimateSalesTeamList @extends Record
@property {EstimateSalesTeam[]} salesTeam
@property {boolean} replaceAll
*/
/*
@class EstimatePartnersList @extends Record
@property {Partners[]} partners
@property {boolean} replaceAll
*/
/*
@class EstimateShipGroupList @extends Record
@property {TransactionShipGroup[]} shipGroup
@property {boolean} replaceAll
*/
/*
@class GiftCertRedemption @extends Record
@property {RecordRef} authCode
@property {float} authCodeApplied
@property {float} authCodeAmtRemaining
@property {float} giftCertAvailable
*/
/*
@class GiftCertRedemptionList @extends Record
@property {GiftCertRedemption[]} giftCertRedemption
@property {boolean} replaceAll
*/
/*
@class TransactionShipGroup @extends Record
@property {integer} id
@property {boolean} isFulfilled
@property {float} weight
@property {RecordRef} sourceAddressRef
@property {String} sourceAddress
@property {RecordRef} destinationAddressRef
@property {String} destinationAddress
@property {RecordRef} shippingMethodRef
@property {String} shippingMethod
@property {boolean} isHandlingTaxable
@property {RecordRef} handlingTaxCode
@property {String} handlingTaxRate
@property {String} handlingTax2Rate
@property {float} handlingRate
@property {float} handlingTaxAmt
@property {float} handlingTax2Amt
@property {boolean} isShippingTaxable
@property {RecordRef} shippingTaxCode
@property {String} shippingTaxRate
@property {String} shippingTax2Rate
@property {float} shippingRate
@property {float} shippingTaxAmt
@property {float} shippingTax2Amt
*/
/*
@class AccountingTransactionSearch @extends SearchRecord
@property {AccountingTransactionSearchBasic} basic
@property {AccountSearchBasic} accountJoin
@property {RevRecScheduleSearchBasic} revRecScheduleJoin
@property {TransactionSearchBasic} transactionJoin
*/
/*
@class AccountingTransactionSearchAdvanced @extends SearchRecord
@property {AccountingTransactionSearch} criteria
@property {AccountingTransactionSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class AccountingTransactionSearchRow @extends SearchRow
@property {AccountingTransactionSearchRowBasic} basic
@property {AccountSearchRowBasic} accountJoin
@property {RevRecScheduleSearchRowBasic} revRecScheduleJoin
@property {TransactionSearchRowBasic} transactionJoin
*/
/*
@class PurchaseOrderOrderStatus @extends SearchRow
*/
/*
@class TransactionBillVarianceStatus @extends SearchRow
*/
/*
@class VendorReturnAuthorizationOrderStatus @extends SearchRow
*/
/*
@class PurchLandedCostList @extends SearchRow
@property {LandedCostSummary[]} landedCost
@property {boolean} replaceAll
*/
/*
@class VendorBill @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {RecordRef} account
@property {RecordRef} entity
@property {RecordRef} subsidiary
@property {RecordRef} approvalStatus
@property {RecordRef} nextApprover
@property {String} vatRegNum
@property {RecordRef} postingPeriod
@property {dateTime} tranDate
@property {String} currencyName
@property {float} exchangeRate
@property {RecordRef} terms
@property {dateTime} dueDate
@property {dateTime} discountDate
@property {String} tranId
@property {float} userTotal
@property {float} discountAmount
@property {float} taxTotal
@property {boolean} paymentHold
@property {String} memo
@property {float} tax2Total
@property {float} creditLimit
@property {RecordRef} currency
@property {RecordRef} class
@property {RecordRef} department
@property {RecordRef} location
@property {String} status
@property {LandedCostMethod} landedCostMethod
@property {boolean} landedCostPerLine
@property {String} transactionNumber
@property {VendorBillExpenseList} expenseList
@property {VendorBillItemList} itemList
@property {PurchLandedCostList} landedCostsList
@property {CustomFieldList} customFieldList
@property {RecordRefList} purchaseOrderList
@property {String} internalId
@property {String} externalId
*/
/*
@class VendorBillExpense @extends Record
@property {integer} orderDoc
@property {integer} orderLine
@property {integer} line
@property {RecordRef} category
@property {RecordRef} account
@property {float} amount
@property {float} tax1Amt
@property {String} memo
@property {float} grossAmt
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} customer
@property {boolean} isBillable
@property {RecordRef} taxCode
@property {float} taxRate1
@property {float} taxRate2
@property {RecordRef} amortizationSched
@property {dateTime} amortizStartDate
@property {dateTime} amortizationEndDate
@property {String} amortizationResidual
@property {CustomFieldList} customFieldList
*/
/*
@class VendorBillExpenseList @extends Record
@property {VendorBillExpense[]} expense
@property {boolean} replaceAll
*/
/*
@class VendorBillItem @extends Record
@property {RecordRef} item
@property {String} vendorName
@property {integer} line
@property {integer} orderDoc
@property {integer} orderLine
@property {float} quantity
@property {RecordRef} units
@property {InventoryDetail} inventoryDetail
@property {String} description
@property {String} serialNumbers
@property {String} binNumbers
@property {dateTime} expirationDate
@property {RecordRef} taxCode
@property {float} taxRate1
@property {float} taxRate2
@property {float} grossAmt
@property {float} tax1Amt
@property {String} rate
@property {float} amount
@property {CustomFieldList} options
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} customer
@property {RecordRef} landedCostCategory
@property {boolean} isBillable
@property {TransactionBillVarianceStatus} billVarianceStatus
@property {RecordRefList} billreceiptsList
@property {RecordRef} amortizationSched
@property {dateTime} amortizStartDate
@property {dateTime} amortizationEndDate
@property {String} amortizationResidual
@property {LandedCost} landedCost
@property {CustomFieldList} customFieldList
*/
/*
@class VendorBillItemList @extends Record
@property {VendorBillItem[]} item
@property {boolean} replaceAll
*/
/*
@class PurchaseOrder @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {RecordRef} entity
@property {RecordRef} purchaseContract
@property {String} vatRegNum
@property {RecordRef} employee
@property {boolean} supervisorApproval
@property {dateTime} tranDate
@property {String} tranId
@property {RecordRef} createdFrom
@property {RecordRef} terms
@property {dateTime} dueDate
@property {String} otherRefNum
@property {String} memo
@property {RecordRef} approvalStatus
@property {float} exchangeRate
@property {RecordRef} nextApprover
@property {String} source
@property {String} currencyName
@property {boolean} toBePrinted
@property {boolean} toBeEmailed
@property {String} email
@property {boolean} toBeFaxed
@property {String} fax
@property {String} message
@property {Address} billingAddress
@property {RecordRef} billAddressList
@property {RecordRef} currency
@property {RecordRef} shipTo
@property {float} subTotal
@property {float} taxTotal
@property {float} tax2Total
@property {Address} shippingAddress
@property {boolean} shipIsResidential
@property {RecordRef} shipAddressList
@property {String} fob
@property {dateTime} shipDate
@property {RecordRef} shipMethod
@property {String} trackingNumbers
@property {String} linkedTrackingNumbers
@property {float} total
@property {RecordRef} class
@property {RecordRef} department
@property {RecordRef} location
@property {RecordRef} subsidiary
@property {RecordRef} intercoTransaction
@property {IntercoStatus} intercoStatus
@property {String} status
@property {PurchaseOrderOrderStatus} orderStatus
@property {PurchaseOrderItemList} itemList
@property {PurchaseOrderExpenseList} expenseList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class PurchaseOrderExpense @extends Record
@property {integer} line
@property {RecordRef} category
@property {RecordRefList} linkedOrderList
@property {RecordRef} account
@property {float} amount
@property {String} memo
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} customer
@property {boolean} isClosed
@property {boolean} isBillable
@property {RecordRef} createdFrom
@property {RecordRef} taxCode
@property {float} taxRate1
@property {float} taxRate2
@property {float} tax1Amt
@property {float} grossAmt
@property {CustomFieldList} customFieldList
*/
/*
@class PurchaseOrderExpenseList @extends Record
@property {PurchaseOrderExpense[]} expense
@property {boolean} replaceAll
*/
/*
@class PurchaseOrderItem @extends Record
@property {RecordRef} item
@property {integer} line
@property {String} vendorName
@property {float} quantityReceived
@property {float} quantityBilled
@property {float} quantityAvailable
@property {float} quantityOnHand
@property {RecordRef} taxCode
@property {float} taxRate1
@property {float} taxRate2
@property {float} quantity
@property {float} tax1Amt
@property {float} grossAmt
@property {RecordRef} units
@property {InventoryDetail} inventoryDetail
@property {String} serialNumbers
@property {String} description
@property {RecordRef} purchaseContract
@property {String} rate
@property {float} amount
@property {CustomFieldList} options
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} landedCostCategory
@property {RecordRef} customer
@property {boolean} isBillable
@property {TransactionBillVarianceStatus} billVarianceStatus
@property {boolean} matchBillToReceipt
@property {dateTime} expectedReceiptDate
@property {boolean} isClosed
@property {RecordRef} createdFrom
@property {RecordRefList} linkedOrderList
@property {CustomFieldList} customFieldList
*/
/*
@class PurchaseOrderItemList @extends Record
@property {PurchaseOrderItem[]} item
@property {boolean} replaceAll
*/
/*
@class ItemReceipt @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {float} exchangeRate
@property {RecordRef} entity
@property {String} currencyName
@property {RecordRef} subsidiary
@property {RecordRef} createdFrom
@property {dateTime} tranDate
@property {RecordRef} partner
@property {RecordRef} postingPeriod
@property {String} tranId
@property {String} memo
@property {RecordRef} currency
@property {LandedCostMethod} landedCostMethod
@property {boolean} landedCostPerLine
@property {ItemReceiptItemList} itemList
@property {ItemReceiptExpenseList} expenseList
@property {PurchLandedCostList} landedCostsList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class ItemReceiptItem @extends Record
@property {boolean} itemReceive
@property {String} jobName
@property {RecordRef} item
@property {integer} orderLine
@property {integer} line
@property {String} itemName
@property {String} description
@property {RecordRef} location
@property {float} onHand
@property {float} quantityRemaining
@property {float} quantity
@property {String} unitsDisplay
@property {float} unitCostOverride
@property {InventoryDetail} inventoryDetail
@property {String} serialNumbers
@property {String} binNumbers
@property {dateTime} expirationDate
@property {String} rate
@property {String} currency
@property {boolean} restock
@property {TransactionBillVarianceStatus} billVarianceStatus
@property {boolean} isDropShipment
@property {CustomFieldList} options
@property {LandedCost} landedCost
@property {CustomFieldList} customFieldList
*/
/*
@class ItemReceiptItemList @extends Record
@property {ItemReceiptItem[]} item
@property {boolean} replaceAll
*/
/*
@class ItemReceiptExpense @extends Record
@property {boolean} markReceived
@property {integer} orderLine
@property {integer} line
@property {String} account
@property {String} memo
@property {float} amount
@property {CustomFieldList} customFieldList
*/
/*
@class ItemReceiptExpenseList @extends Record
@property {ItemReceiptExpense[]} expense
@property {boolean} replaceAll
*/
/*
@class VendorPayment @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {RecordRef} account
@property {float} balance
@property {RecordRef} apAcct
@property {RecordRef} entity
@property {String} address
@property {dateTime} tranDate
@property {RecordRef} voidJournal
@property {RecordRef} postingPeriod
@property {String} currencyName
@property {float} exchangeRate
@property {boolean} toAch
@property {boolean} toBePrinted
@property {boolean} printVoucher
@property {String} tranId
@property {float} total
@property {RecordRef} currency
@property {RecordRef} department
@property {String} memo
@property {RecordRef} subsidiary
@property {RecordRef} class
@property {RecordRef} location
@property {String} status
@property {String} transactionNumber
@property {VendorPaymentApplyList} applyList
@property {VendorPaymentCreditList} creditList
@property {boolean} billPay
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class VendorPaymentApply @extends Record
@property {boolean} apply
@property {integer} doc
@property {integer} line
@property {String} job
@property {dateTime} applyDate
@property {String} type
@property {String} refNum
@property {float} total
@property {float} due
@property {String} currency
@property {dateTime} discDate
@property {float} discAmt
@property {float} disc
@property {float} amount
*/
/*
@class VendorPaymentApplyList @extends Record
@property {VendorPaymentApply[]} apply
@property {boolean} replaceAll
*/
/*
@class VendorPaymentCredit @extends Record
@property {boolean} apply
@property {integer} doc
@property {integer} line
@property {dateTime} creditDate
@property {String} type
@property {String} refNum
@property {String} appliedTo
@property {float} total
@property {float} due
@property {String} currency
@property {float} amount
*/
/*
@class VendorPaymentCreditList @extends Record
@property {VendorPaymentCredit[]} credit
@property {boolean} replaceAll
*/
/*
@class VendorCredit @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {RecordRef} account
@property {float} unApplied
@property {boolean} autoApply
@property {float} applied
@property {String} transactionNumber
@property {String} tranId
@property {RecordRef} createdFrom
@property {RecordRef} entity
@property {float} total
@property {float} userTotal
@property {RecordRef} currency
@property {String} currencyName
@property {dateTime} tranDate
@property {float} exchangeRate
@property {RecordRef} postingPeriod
@property {String} memo
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} subsidiary
@property {VendorCreditExpenseList} expenseList
@property {VendorCreditItemList} itemList
@property {VendorCreditApplyList} applyList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class VendorCreditExpense @extends Record
@property {integer} orderLine
@property {integer} line
@property {RecordRef} category
@property {RecordRef} account
@property {float} amount
@property {RecordRef} taxCode
@property {float} taxRate1
@property {float} taxRate2
@property {float} tax1Amt
@property {float} grossAmt
@property {String} memo
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} customer
@property {boolean} isBillable
@property {RecordRef} amortizationSched
@property {dateTime} amortizStartDate
@property {dateTime} amortizationEndDate
@property {String} amortizationResidual
@property {CustomFieldList} customFieldList
*/
/*
@class VendorCreditExpenseList @extends Record
@property {VendorCreditExpense[]} expense
@property {boolean} replaceAll
*/
/*
@class VendorCreditItem @extends Record
@property {RecordRef} item
@property {String} vendorName
@property {integer} line
@property {integer} orderLine
@property {float} quantity
@property {RecordRef} units
@property {InventoryDetail} inventoryDetail
@property {RecordRefList} serialNumbersList
@property {String} description
@property {String} rate
@property {float} amount
@property {String} binNumbers
@property {RecordRef} taxCode
@property {float} taxRate1
@property {float} taxRate2
@property {float} grossAmt
@property {float} tax1Amt
@property {CustomFieldList} options
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} customer
@property {boolean} isBillable
@property {RecordRef} amortizationSched
@property {dateTime} amortizStartDate
@property {dateTime} amortizationEndDate
@property {String} amortizationResidual
@property {CustomFieldList} customFieldList
*/
/*
@class VendorCreditItemList @extends Record
@property {VendorCreditItem[]} item
@property {boolean} replaceAll
*/
/*
@class VendorCreditApply @extends Record
@property {boolean} apply
@property {dateTime} applyDate
@property {integer} doc
@property {integer} line
@property {String} type
@property {String} refNum
@property {float} total
@property {float} due
@property {String} currency
@property {float} amount
*/
/*
@class VendorCreditApplyList @extends Record
@property {VendorCreditApply[]} apply
@property {boolean} replaceAll
*/
/*
@class VendorReturnAuthorization @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {String} tranId
@property {RecordRef} createdFrom
@property {RecordRef} entity
@property {VendorReturnAuthorizationOrderStatus} orderStatus
@property {dateTime} tranDate
@property {float} userTotal
@property {RecordRef} currency
@property {String} currencyName
@property {String} memo
@property {float} exchangeRate
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} subsidiary
@property {RecordRef} intercoTransaction
@property {IntercoStatus} intercoStatus
@property {VendorReturnAuthorizationExpenseList} expenseList
@property {VendorReturnAuthorizationItemList} itemList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class VendorReturnAuthorizationExpense @extends Record
@property {integer} orderLine
@property {integer} line
@property {RecordRef} category
@property {RecordRef} account
@property {float} amount
@property {RecordRef} taxCode
@property {float} taxRate1
@property {float} taxRate2
@property {float} tax1Amt
@property {float} grossAmt
@property {String} memo
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} customer
@property {boolean} isBillable
@property {RecordRef} amortizationSched
@property {dateTime} amortizStartDate
@property {dateTime} amortizationEndDate
@property {String} amortizationResidual
@property {CustomFieldList} customFieldList
*/
/*
@class VendorReturnAuthorizationExpenseList @extends Record
@property {VendorReturnAuthorizationExpense[]} expense
@property {boolean} replaceAll
*/
/*
@class VendorReturnAuthorizationItem @extends Record
@property {RecordRef} item
@property {String} vendorName
@property {integer} line
@property {integer} orderLine
@property {float} quantity
@property {RecordRef} units
@property {InventoryDetail} inventoryDetail
@property {RecordRefList} serialNumbersList
@property {String} description
@property {String} binNumbers
@property {String} rate
@property {float} amount
@property {RecordRef} taxCode
@property {float} taxRate1
@property {float} taxRate2
@property {float} grossAmt
@property {float} tax1Amt
@property {CustomFieldList} options
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} customer
@property {boolean} isBillable
@property {boolean} isClosed
@property {RecordRef} amortizationSched
@property {boolean} isDropShipment
@property {dateTime} amortizStartDate
@property {dateTime} amortizationEndDate
@property {String} amortizationResidual
@property {CustomFieldList} customFieldList
*/
/*
@class VendorReturnAuthorizationItemList @extends Record
@property {VendorReturnAuthorizationItem[]} item
@property {boolean} replaceAll
*/
/*
@class PurchaseRequisition @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {String} source
@property {float} subTotal
@property {String} currencyName
@property {float} exchangeRate
@property {String} vatRegNum
@property {RecordRef} nexus
@property {RecordRef} taxRegNum
@property {boolean} taxRegOverride
@property {float} estimatedTotal
@property {String} status
@property {RecordRef} currency
@property {RecordRef} entity
@property {dateTime} dueDate
@property {dateTime} tranDate
@property {String} tranId
@property {String} memo
@property {RecordRef} approvalStatus
@property {RecordRef} nextApprover
@property {float} taxTotal
@property {float} tax2Total
@property {RecordRef} subsidiary
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {float} total
@property {PurchaseRequisitionItemList} itemList
@property {PurchaseRequisitionExpenseList} expenseList
@property {PurchaseRequisitionAccountingBookDetailList} accountingBookDetailList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class PurchaseRequisitionExpense @extends Record
@property {integer} line
@property {RecordRef} category
@property {RecordRef} location
@property {boolean} isClosed
@property {RecordRef} account
@property {RecordRef} poVendor
@property {float} estimatedAmount
@property {float} amount
@property {String} memo
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} customer
@property {RecordRefList} linkedOrderList
@property {String} linkedOrderStatus
@property {boolean} isBillable
*/
/*
@class PurchaseRequisitionExpenseList @extends Record
@property {PurchaseRequisitionExpense[]} purchaseRequisitionExpense
@property {boolean} replaceAll
*/
/*
@class PurchaseRequisitionItem @extends Record
@property {integer} line
@property {RecordRef} item
@property {String} vendorName
@property {RecordRef} poVendor
@property {float} quantity
@property {RecordRef} units
@property {String} serialNumbers
@property {InventoryDetail} inventoryDetail
@property {String} description
@property {float} estimatedRate
@property {float} estimatedAmount
@property {String} rate
@property {float} amount
@property {RecordRef} taxCode
@property {float} taxRate1
@property {float} taxRate2
@property {float} grossAmt
@property {CustomFieldList} options
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} customer
@property {boolean} isBillable
@property {RecordRefList} linkedOrderList
@property {String} linkedOrderStatus
@property {dateTime} expectedReceiptDate
@property {boolean} isClosed
@property {boolean} expandItemGroup
*/
/*
@class PurchaseRequisitionItemList @extends Record
@property {PurchaseRequisitionItem[]} purchaseRequisitionItem
@property {boolean} replaceAll
*/
/*
@class PurchaseRequisitionAccountingBookDetail @extends Record
@property {RecordRef} accountingBook
@property {RecordRef} currency
@property {float} exchangeRate
*/
/*
@class PurchaseRequisitionAccountingBookDetailList @extends Record
@property {PurchaseRequisitionAccountingBookDetail[]} purchaseRequisitionAccountingBookDetail
@property {boolean} replaceAll
*/
/*
@class ReturnAuthorizationOrderStatus @extends Record
*/
/*
@class ChargeStage @extends Record
*/
/*
@class ChargeUse @extends Record
*/
/*
@class CashRefund @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {RecordRef} entity
@property {String} vatRegNum
@property {dateTime} tranDate
@property {String} tranId
@property {String} source
@property {RecordRef} createdFrom
@property {RecordRef} postingPeriod
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} leadSource
@property {RecordRef} subsidiary
@property {RecordRef} salesRep
@property {RecordRef} partner
@property {String} contribPct
@property {String} otherRefNum
@property {String} memo
@property {dateTime} salesEffectiveDate
@property {boolean} refundCheck
@property {boolean} toPrint2
@property {boolean} excludeCommission
@property {float} totalCostEstimate
@property {float} estGrossProfit
@property {float} estGrossProfitPercent
@property {RecordRef} account
@property {RecordRef} currency
@property {float} exchangeRate
@property {String} currencyName
@property {RecordRef} promoCode
@property {RecordRef} discountItem
@property {String} discountRate
@property {boolean} isTaxable
@property {RecordRef} taxItem
@property {float} taxRate
@property {boolean} toBePrinted
@property {boolean} toBeEmailed
@property {String} email
@property {boolean} toBeFaxed
@property {String} fax
@property {RecordRef} messageSel
@property {String} message
@property {Address} billingAddress
@property {RecordRef} billAddressList
@property {RecordRef} shipMethod
@property {RecordRef} shippingTaxCode
@property {float} shippingTax1Rate
@property {String} shippingTax2Rate
@property {float} shippingCost
@property {RecordRef} handlingTaxCode
@property {float} handlingTax1Rate
@property {String} handlingTax2Rate
@property {float} handlingCost
@property {RecordRef} salesGroup
@property {boolean} syncSalesTeams
@property {RecordRef} paymentMethod
@property {RevenueStatus} revenueStatus
@property {float} recognizedRevenue
@property {float} deferredRevenue
@property {boolean} revRecOnRevCommitment
@property {RecordRef} creditCard
@property {boolean} chargeIt
@property {String} ccNumber
@property {dateTime} ccExpireDate
@property {String} ccName
@property {String} ccStreet
@property {String} ccZipCode
@property {boolean} ccApproved
@property {RecordRef} creditCardProcessor
@property {String} debitCardIssueNo
@property {String} pnRefNum
@property {dateTime} validFrom
@property {String} payPalTranId
@property {float} subTotal
@property {boolean} ccIsPurchaseCardBin
@property {float} discountTotal
@property {boolean} ccProcessAsPurchaseCard
@property {float} taxTotal
@property {float} tax2Total
@property {float} altShippingCost
@property {String} payPalStatus
@property {float} altHandlingCost
@property {float} total
@property {String} payPalAuthId
@property {String} status
@property {RecordRef} job
@property {RecordRef} giftCert
@property {float} giftCertTotal
@property {float} giftCertApplied
@property {float} giftCertAvailable
@property {boolean} tranIsVsoeBundle
@property {boolean} payPalProcess
@property {boolean} vsoeAutoCalc
@property {boolean} syncPartnerTeams
@property {CashRefundItemList} itemList
@property {CashRefundSalesTeamList} salesTeamList
@property {CashRefundPartnersList} partnersList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class CashRefundItem @extends Record
@property {RecordRef} job
@property {RecordRef} item
@property {integer} line
@property {integer} orderLine
@property {float} quantity
@property {RecordRef} units
@property {InventoryDetail} inventoryDetail
@property {String} binNumbers
@property {String} serialNumbers
@property {String} description
@property {RecordRef} price
@property {String} rate
@property {float} amount
@property {RecordRef} taxCode
@property {String} taxRate1
@property {String} taxRate2
@property {float} tax1Amt
@property {float} grossAmt
@property {boolean} isTaxable
@property {CustomFieldList} options
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} revRecSchedule
@property {dateTime} revRecStartDate
@property {dateTime} revRecEndDate
@property {RecordRef} catchUpPeriod
@property {boolean} deferRevRec
@property {String} giftCertFrom
@property {ItemCostEstimateType} costEstimateType
@property {float} costEstimate
@property {String} giftCertRecipientName
@property {String} giftCertRecipientEmail
@property {String} giftCertMessage
@property {String} giftCertNumber
@property {VsoeSopGroup} vsoeSopGroup
@property {boolean} vsoeIsEstimate
@property {float} vsoePrice
@property {float} vsoeAmount
@property {float} vsoeAllocation
@property {VsoeDeferral} vsoeDeferral
@property {VsoePermitDiscount} vsoePermitDiscount
@property {boolean} vsoeDelivered
@property {RecordRef} chargeType
@property {RecordRefList} chargesList
@property {CustomFieldList} customFieldList
*/
/*
@class CashRefundItemList @extends Record
@property {CashRefundItem[]} item
@property {boolean} replaceAll
*/
/*
@class CashRefundSalesTeam @extends Record
@property {RecordRef} employee
@property {RecordRef} salesRole
@property {boolean} isPrimary
@property {float} contribution
*/
/*
@class CashRefundSalesTeamList @extends Record
@property {CashRefundSalesTeam[]} salesTeam
@property {boolean} replaceAll
*/
/*
@class CashRefundPartnersList @extends Record
@property {Partners[]} partners
@property {boolean} replaceAll
*/
/*
@class CustomerPayment @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {RecordRef} arAcct
@property {RecordRef} customer
@property {float} balance
@property {float} pending
@property {RecordRef} currency
@property {float} payment
@property {boolean} autoApply
@property {dateTime} tranDate
@property {String} tranId
@property {RecordRef} postingPeriod
@property {RecordRef} paymentMethod
@property {boolean} ccIsPurchaseCardBin
@property {String} memo
@property {boolean} ccProcessAsPurchaseCard
@property {String} checkNum
@property {String} currencyName
@property {float} exchangeRate
@property {RecordRef} creditCard
@property {boolean} chargeIt
@property {String} ccNumber
@property {dateTime} ccExpireDate
@property {String} ccName
@property {String} ccStreet
@property {String} ccZipCode
@property {boolean} ccApproved
@property {String} authCode
@property {AvsMatchCode} ccAvsStreetMatch
@property {AvsMatchCode} ccAvsZipMatch
@property {boolean} isRecurringPayment
@property {String} ccSecurityCode
@property {boolean} ignoreAvs
@property {AvsMatchCode} ccSecurityCodeMatch
@property {String} threeDStatusCode
@property {String} pnRefNum
@property {RecordRef} creditCardProcessor
@property {String} debitCardIssueNo
@property {dateTime} validFrom
@property {boolean} undepFunds
@property {RecordRef} account
@property {float} total
@property {RecordRef} subsidiary
@property {float} applied
@property {float} unapplied
@property {RecordRef} class
@property {RecordRef} department
@property {RecordRef} location
@property {String} status
@property {CustomerPaymentApplyList} applyList
@property {CustomerPaymentCreditList} creditList
@property {CustomerPaymentDepositList} depositList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class CustomerPaymentApply @extends Record
@property {boolean} apply
@property {integer} doc
@property {integer} line
@property {dateTime} applyDate
@property {String} job
@property {String} type
@property {String} refNum
@property {float} total
@property {float} due
@property {String} currency
@property {dateTime} discDate
@property {float} discAmt
@property {float} disc
@property {float} amount
*/
/*
@class CustomerPaymentApplyList @extends Record
@property {CustomerPaymentApply[]} apply
@property {boolean} replaceAll
*/
/*
@class CustomerPaymentCredit @extends Record
@property {boolean} apply
@property {integer} doc
@property {integer} line
@property {dateTime} creditDate
@property {String} type
@property {String} refNum
@property {String} appliedTo
@property {float} total
@property {float} due
@property {String} currency
@property {float} amount
*/
/*
@class CustomerPaymentCreditList @extends Record
@property {CustomerPaymentCredit[]} credit
@property {boolean} replaceAll
*/
/*
@class CustomerPaymentDeposit @extends Record
@property {boolean} apply
@property {integer} doc
@property {integer} line
@property {dateTime} depositDate
@property {String} refNum
@property {float} total
@property {float} remaining
@property {String} currency
@property {float} amount
*/
/*
@class CustomerPaymentDepositList @extends Record
@property {CustomerPaymentDeposit[]} deposit
@property {boolean} replaceAll
*/
/*
@class ReturnAuthorization @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {RecordRef} currency
@property {RecordRef} entity
@property {String} vatRegNum
@property {dateTime} tranDate
@property {String} tranId
@property {String} source
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} subsidiary
@property {RecordRef} intercoTransaction
@property {IntercoStatus} intercoStatus
@property {RecordRef} job
@property {RecordRef} partner
@property {String} otherRefNum
@property {RecordRef} leadSource
@property {String} memo
@property {RecordRef} drAccount
@property {RecordRef} fxAccount
@property {dateTime} salesEffectiveDate
@property {RecordRef} createdFrom
@property {RecordRef} revRecSchedule
@property {float} totalCostEstimate
@property {float} estGrossProfit
@property {float} estGrossProfitPercent
@property {dateTime} revRecStartDate
@property {dateTime} revRecEndDate
@property {boolean} excludeCommission
@property {float} exchangeRate
@property {String} currencyName
@property {RecordRef} discountItem
@property {String} discountRate
@property {RecordRef} taxItem
@property {float} taxRate
@property {boolean} toBePrinted
@property {boolean} toBeEmailed
@property {boolean} toBeFaxed
@property {RecordRef} messageSel
@property {String} message
@property {Address} billingAddress
@property {RecordRef} billAddressList
@property {RecordRef} shipAddressList
@property {String} shipAddress
@property {RecordRef} salesGroup
@property {boolean} syncSalesTeams
@property {RevenueStatus} revenueStatus
@property {float} recognizedRevenue
@property {float} deferredRevenue
@property {boolean} revRecOnRevCommitment
@property {RevenueCommitStatus} revCommitStatus
@property {RecordRef} paymentMethod
@property {RecordRef} creditCard
@property {String} ccNumber
@property {float} altSalesTotal
@property {dateTime} ccExpireDate
@property {String} ccName
@property {String} ccStreet
@property {String} ccZipCode
@property {boolean} ccApproved
@property {String} pnRefNum
@property {float} subTotal
@property {float} discountTotal
@property {float} total
@property {RecordRef} creditCardProcessor
@property {String} payPalAuthId
@property {boolean} payPalProcess
@property {String} email
@property {String} fax
@property {String} debitCardIssueNo
@property {boolean} isTaxable
@property {RecordRef} promoCode
@property {String} status
@property {float} taxTotal
@property {float} tax2Total
@property {dateTime} validFrom
@property {ReturnAuthorizationOrderStatus} orderStatus
@property {RecordRef} salesRep
@property {RecordRef} giftCert
@property {String} contribPct
@property {float} giftCertTotal
@property {float} giftCertApplied
@property {float} giftCertAvailable
@property {boolean} tranIsVsoeBundle
@property {boolean} vsoeAutoCalc
@property {boolean} syncPartnerTeams
@property {ReturnAuthorizationItemList} itemList
@property {ReturnAuthorizationSalesTeamList} salesTeamList
@property {ReturnAuthorizationPartnersList} partnersList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class ReturnAuthorizationItem @extends Record
@property {RecordRef} job
@property {RecordRef} item
@property {integer} orderLine
@property {integer} line
@property {float} quantity
@property {float} quantityReceived
@property {float} quantityBilled
@property {RecordRef} units
@property {InventoryDetail} inventoryDetail
@property {String} description
@property {String} serialNumbers
@property {RecordRef} price
@property {String} rate
@property {float} amount
@property {CustomFieldList} options
@property {integer} revRecTermInMonths
@property {boolean} deferRevRec
@property {boolean} isClosed
@property {boolean} isDropShipment
@property {RecordRef} catchUpPeriod
@property {RecordRef} department
@property {ItemCostEstimateType} costEstimateType
@property {float} costEstimate
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} revRecSchedule
@property {dateTime} revRecStartDate
@property {dateTime} revRecEndDate
@property {RecordRef} taxCode
@property {float} taxRate1
@property {float} taxRate2
@property {float} tax1Amt
@property {float} grossAmt
@property {boolean} isTaxable
@property {String} giftCertFrom
@property {String} giftCertRecipientName
@property {String} giftCertRecipientEmail
@property {String} giftCertMessage
@property {String} giftCertNumber
@property {VsoeSopGroup} vsoeSopGroup
@property {boolean} vsoeIsEstimate
@property {float} vsoePrice
@property {float} vsoeAmount
@property {float} altSalesAmt
@property {float} vsoeAllocation
@property {VsoeDeferral} vsoeDeferral
@property {VsoePermitDiscount} vsoePermitDiscount
@property {boolean} vsoeDelivered
@property {CustomFieldList} customFieldList
*/
/*
@class ReturnAuthorizationItemList @extends Record
@property {ReturnAuthorizationItem[]} item
@property {boolean} replaceAll
*/
/*
@class ReturnAuthorizationSalesTeam @extends Record
@property {RecordRef} employee
@property {RecordRef} salesRole
@property {boolean} isPrimary
@property {float} contribution
*/
/*
@class ReturnAuthorizationSalesTeamList @extends Record
@property {ReturnAuthorizationSalesTeam[]} salesTeam
@property {boolean} replaceAll
*/
/*
@class ReturnAuthorizationPartnersList @extends Record
@property {Partners[]} partners
@property {boolean} replaceAll
*/
/*
@class CreditMemo @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {RecordRef} currency
@property {RecordRef} entity
@property {String} vatRegNum
@property {dateTime} tranDate
@property {String} tranId
@property {RecordRef} createdFrom
@property {RecordRef} postingPeriod
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} subsidiary
@property {RecordRef} job
@property {RecordRef} salesRep
@property {RecordRef} partner
@property {String} contribPct
@property {String} otherRefNum
@property {String} memo
@property {boolean} excludeCommission
@property {RecordRef} leadSource
@property {float} balance
@property {RecordRef} account
@property {float} exchangeRate
@property {String} onCreditHold
@property {float} amountPaid
@property {dateTime} salesEffectiveDate
@property {float} totalCostEstimate
@property {float} estGrossProfit
@property {float} estGrossProfitPercent
@property {String} currencyName
@property {RecordRef} promoCode
@property {float} amountRemaining
@property {RecordRef} discountItem
@property {String} source
@property {String} discountRate
@property {boolean} isTaxable
@property {RecordRef} taxItem
@property {float} taxRate
@property {float} unapplied
@property {boolean} autoApply
@property {float} applied
@property {boolean} toBePrinted
@property {boolean} toBeEmailed
@property {String} email
@property {boolean} toBeFaxed
@property {String} fax
@property {RecordRef} messageSel
@property {String} message
@property {Address} billingAddress
@property {RecordRef} billAddressList
@property {RecordRef} shipMethod
@property {float} shippingCost
@property {float} shippingTax1Rate
@property {RecordRef} shippingTaxCode
@property {RecordRef} handlingTaxCode
@property {String} shippingTax2Rate
@property {float} handlingTax1Rate
@property {String} handlingTax2Rate
@property {float} handlingCost
@property {float} subTotal
@property {float} discountTotal
@property {RevenueStatus} revenueStatus
@property {float} recognizedRevenue
@property {float} deferredRevenue
@property {boolean} revRecOnRevCommitment
@property {float} taxTotal
@property {float} tax2Total
@property {float} altShippingCost
@property {float} altHandlingCost
@property {float} total
@property {RecordRef} salesGroup
@property {boolean} syncSalesTeams
@property {String} status
@property {RecordRef} giftCert
@property {float} giftCertTotal
@property {float} giftCertApplied
@property {float} giftCertAvailable
@property {boolean} tranIsVsoeBundle
@property {boolean} vsoeAutoCalc
@property {boolean} syncPartnerTeams
@property {CreditMemoSalesTeamList} salesTeamList
@property {CreditMemoItemList} itemList
@property {CreditMemoPartnersList} partnersList
@property {CreditMemoApplyList} applyList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class CreditMemoSalesTeam @extends Record
@property {RecordRef} employee
@property {RecordRef} salesRole
@property {boolean} isPrimary
@property {float} contribution
*/
/*
@class CreditMemoSalesTeamList @extends Record
@property {CreditMemoSalesTeam[]} salesTeam
@property {boolean} replaceAll
*/
/*
@class CreditMemoItem @extends Record
@property {RecordRef} job
@property {RecordRef} item
@property {integer} orderLine
@property {integer} line
@property {float} quantity
@property {String} description
@property {String} binNumbers
@property {RecordRef} price
@property {String} rate
@property {float} amount
@property {boolean} isTaxable
@property {CustomFieldList} options
@property {RecordRef} taxCode
@property {float} taxRate1
@property {float} taxRate2
@property {float} tax1Amt
@property {float} grossAmt
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {ItemCostEstimateType} costEstimateType
@property {float} costEstimate
@property {RecordRef} revRecSchedule
@property {dateTime} revRecStartDate
@property {integer} revRecTermInMonths
@property {dateTime} revRecEndDate
@property {RecordRef} units
@property {InventoryDetail} inventoryDetail
@property {String} serialNumbers
@property {boolean} deferRevRec
@property {String} giftCertFrom
@property {String} giftCertRecipientName
@property {String} giftCertRecipientEmail
@property {String} giftCertMessage
@property {String} giftCertNumber
@property {VsoeSopGroup} vsoeSopGroup
@property {boolean} vsoeIsEstimate
@property {float} vsoePrice
@property {float} vsoeAmount
@property {float} vsoeAllocation
@property {VsoeDeferral} vsoeDeferral
@property {VsoePermitDiscount} vsoePermitDiscount
@property {boolean} vsoeDelivered
@property {RecordRef} catchUpPeriod
@property {RecordRef} chargeType
@property {RecordRefList} chargesList
@property {CustomFieldList} customFieldList
*/
/*
@class CreditMemoItemList @extends Record
@property {CreditMemoItem[]} item
@property {boolean} replaceAll
*/
/*
@class CreditMemoApply @extends Record
@property {boolean} apply
@property {integer} doc
@property {dateTime} applyDate
@property {String} job
@property {String} type
@property {String} refNum
@property {float} total
@property {float} due
@property {String} currency
@property {float} amount
@property {integer} line
*/
/*
@class CreditMemoApplyList @extends Record
@property {CreditMemoApply[]} apply
@property {boolean} replaceAll
*/
/*
@class CreditMemoPartnersList @extends Record
@property {Partners[]} partners
@property {boolean} replaceAll
*/
/*
@class CustomerRefund @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {String} status
@property {String} transactionNumber
@property {RecordRef} customer
@property {RecordRef} customForm
@property {float} balance
@property {RecordRef} arAcct
@property {String} currencyName
@property {float} exchangeRate
@property {String} address
@property {float} total
@property {RecordRef} currency
@property {dateTime} tranDate
@property {RecordRef} voidJournal
@property {RecordRef} postingPeriod
@property {String} memo
@property {RecordRef} paymentMethod
@property {RecordRef} account
@property {boolean} toBePrinted
@property {String} tranId
@property {String} debitCardIssueNo
@property {RecordRef} creditCardProcessor
@property {boolean} chargeIt
@property {String} pnRefNum
@property {dateTime} validFrom
@property {RecordRef} subsidiary
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} creditCard
@property {boolean} ccIsPurchaseCardBin
@property {String} ccNumber
@property {boolean} ccProcessAsPurchaseCard
@property {dateTime} ccExpireDate
@property {String} ccName
@property {String} ccStreet
@property {String} ccZipCode
@property {boolean} ccApproved
@property {CustomerRefundApplyList} applyList
@property {CustomerRefundDepositList} depositList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class CustomerRefundApply @extends Record
@property {boolean} apply
@property {integer} doc
@property {integer} line
@property {dateTime} applyDate
@property {String} type
@property {String} refNum
@property {float} total
@property {float} due
@property {String} currency
@property {float} amount
*/
/*
@class CustomerRefundApplyList @extends Record
@property {CustomerRefundApply[]} apply
@property {boolean} replaceAll
*/
/*
@class CustomerRefundDeposit @extends Record
@property {boolean} apply
@property {integer} doc
@property {integer} line
@property {dateTime} depositDate
@property {String} refNum
@property {float} total
@property {float} remaining
@property {String} currency
@property {float} amount
*/
/*
@class CustomerRefundDepositList @extends Record
@property {CustomerRefundDeposit[]} customerRefundDeposit
@property {boolean} replaceAll
*/
/*
@class CustomerDeposit @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {String} status
@property {RecordRef} customer
@property {RecordRef} salesOrder
@property {RecordRef} customForm
@property {float} payment
@property {RecordRef} currency
@property {dateTime} tranDate
@property {RecordRef} postingPeriod
@property {RecordRef} paymentMethod
@property {boolean} ccIsPurchaseCardBin
@property {String} memo
@property {boolean} ccProcessAsPurchaseCard
@property {String} currencyName
@property {float} exchangeRate
@property {String} checkNum
@property {RecordRef} creditCardProcessor
@property {RecordRef} creditCard
@property {String} ccSecurityCode
@property {String} ccNumber
@property {RecordRef} subsidiary
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {dateTime} ccExpireDate
@property {String} debitCardIssueNo
@property {dateTime} validFrom
@property {String} ccName
@property {String} ccStreet
@property {String} ccZipCode
@property {boolean} chargeIt
@property {boolean} ccApproved
@property {String} pnRefNum
@property {String} authCode
@property {AvsMatchCode} ccAvsStreetMatch
@property {String} softDescriptor
@property {AvsMatchCode} ccAvsZipMatch
@property {boolean} isRecurringPayment
@property {AvsMatchCode} ccSecurityCodeMatch
@property {String} threeDStatusCode
@property {boolean} ignoreAvs
@property {RecordRef} account
@property {boolean} undepFunds
@property {CustomerDepositApplyList} applyList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class CustomerDepositApply @extends Record
@property {integer} doc
@property {integer} line
@property {boolean} apply
@property {dateTime} applyDate
@property {String} type
@property {String} refNum
@property {float} total
@property {float} amount
@property {String} job
*/
/*
@class CustomerDepositApplyList @extends Record
@property {CustomerDepositApply[]} customerDepositApply
@property {boolean} replaceAll
*/
/*
@class DepositApplication @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {String} arAcct
@property {String} status
@property {RecordRef} customer
@property {dateTime} tranDate
@property {RecordRef} postingPeriod
@property {RecordRef} deposit
@property {dateTime} depDate
@property {RecordRef} currency
@property {float} exchangeRate
@property {String} memo
@property {RecordRef} subsidiary
@property {float} total
@property {RecordRef} department
@property {float} applied
@property {RecordRef} class
@property {float} unapplied
@property {RecordRef} location
@property {String} tranId
@property {DepositApplicationApplyList} applyList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class DepositApplicationApply @extends Record
@property {integer} doc
@property {integer} line
@property {boolean} apply
@property {dateTime} applyDate
@property {String} job
@property {String} type
@property {String} refNum
@property {float} total
@property {float} due
@property {String} currency
@property {float} amount
*/
/*
@class DepositApplicationApplyList @extends Record
@property {DepositApplicationApply[]} apply
@property {boolean} replaceAll
*/
/*
@class Charge @extends Record
@property {RecordRef} customForm
@property {RecordRef} salesOrder
@property {RecordRef} billTo
@property {ChargeStage} stage
@property {dateTime} chargeDate
@property {ChargeUse} use
@property {RecordRef} chargeType
@property {RecordRef} projectTask
@property {String} description
@property {dateTime} createdDate
@property {RecordRef} timeRecord
@property {String} rate
@property {float} quantity
@property {float} amount
@property {RecordRef} billingItem
@property {RecordRef} currency
@property {RecordRef} transaction
@property {RecordRef} transactionLine
@property {RecordRef} class
@property {RecordRef} department
@property {RecordRef} location
@property {RecordRef} salesOrderLine
@property {RecordRef} invoice
@property {RecordRef} invoiceLine
@property {RecordRef} rule
@property {String} runId
@property {String} internalId
@property {String} externalId
*/
/*
@class ChargeSearch @extends SearchRecord
@property {ChargeSearchBasic} basic
@property {TransactionSearchBasic} invoiceJoin
@property {JobSearchBasic} jobJoin
@property {TransactionSearchBasic} salesOrderJoin
@property {TimeBillSearchBasic} timeJoin
@property {TransactionSearchBasic} transactionJoin
@property {EmployeeSearchBasic} userJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class ChargeSearchAdvanced @extends SearchRecord
@property {ChargeSearch} criteria
@property {ChargeSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class ChargeSearchRow @extends SearchRow
@property {ChargeSearchRowBasic} basic
@property {TransactionSearchRowBasic} invoiceJoin
@property {JobSearchRowBasic} jobJoin
@property {TransactionSearchRowBasic} salesOrderJoin
@property {TimeBillSearchRowBasic} timeJoin
@property {TransactionSearchRowBasic} transactionJoin
@property {EmployeeSearchRowBasic} userJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class BudgetBudgetType @extends SearchRow
*/
/*
@class Budget @extends Record
@property {RecordRef} year
@property {RecordRef} customer
@property {RecordRef} item
@property {RecordRef} class
@property {RecordRef} department
@property {RecordRef} location
@property {RecordRef} account
@property {RecordRef} subsidiary
@property {RecordRef} category
@property {BudgetBudgetType} budgetType
@property {RecordRef} currency
@property {float} periodAmount1
@property {float} periodAmount2
@property {float} periodAmount3
@property {float} periodAmount4
@property {float} periodAmount5
@property {float} periodAmount6
@property {float} periodAmount7
@property {float} periodAmount8
@property {float} periodAmount9
@property {float} periodAmount10
@property {float} periodAmount11
@property {float} periodAmount12
@property {float} amount
@property {String} internalId
*/
/*
@class BudgetSearch @extends SearchRecord
@property {BudgetSearchBasic} basic
*/
/*
@class BudgetSearchAdvanced @extends SearchRecord
@property {BudgetSearch} criteria
@property {BudgetSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class BudgetSearchRow @extends SearchRow
@property {BudgetSearchRowBasic} basic
*/
/*
@class CheckLandedCostList @extends SearchRow
@property {LandedCostSummary[]} landedCost
@property {boolean} replaceAll
*/
/*
@class Check @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {String} status
@property {RecordRef} customForm
@property {RecordRef} account
@property {float} balance
@property {RecordRef} entity
@property {String} address
@property {RecordRef} subsidiary
@property {RecordRef} postingPeriod
@property {dateTime} tranDate
@property {RecordRef} currency
@property {RecordRef} voidJournal
@property {float} exchangeRate
@property {boolean} toBePrinted
@property {String} tranId
@property {String} memo
@property {RecordRef} department
@property {float} taxTotal
@property {RecordRef} class
@property {float} tax2Total
@property {RecordRef} location
@property {float} userTotal
@property {LandedCostMethod} landedCostMethod
@property {boolean} landedCostPerLine
@property {String} transactionNumber
@property {CheckExpenseList} expenseList
@property {CheckItemList} itemList
@property {CheckLandedCostList} landedCostsList
@property {boolean} billPay
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class CheckExpense @extends Record
@property {integer} line
@property {RecordRef} category
@property {RecordRef} account
@property {float} amount
@property {String} memo
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} customer
@property {boolean} isBillable
@property {RecordRef} taxCode
@property {float} taxRate1
@property {float} tax1Amt
@property {float} taxRate2
@property {float} grossAmt
@property {CustomFieldList} customFieldList
*/
/*
@class CheckExpenseList @extends Record
@property {CheckExpense[]} expense
@property {boolean} replaceAll
*/
/*
@class CheckItem @extends Record
@property {RecordRef} item
@property {String} vendorName
@property {integer} line
@property {float} quantity
@property {RecordRef} units
@property {InventoryDetail} inventoryDetail
@property {String} description
@property {String} binNumbers
@property {String} serialNumbers
@property {dateTime} expirationDate
@property {String} rate
@property {RecordRef} taxCode
@property {float} amount
@property {CustomFieldList} options
@property {float} taxRate1
@property {float} taxRate2
@property {RecordRef} department
@property {float} grossAmt
@property {RecordRef} class
@property {float} tax1Amt
@property {RecordRef} location
@property {RecordRef} customer
@property {boolean} isBillable
@property {LandedCost} landedCost
@property {CustomFieldList} customFieldList
*/
/*
@class CheckItemList @extends Record
@property {CheckItem[]} item
@property {boolean} replaceAll
*/
/*
@class Deposit @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {String} currencyName
@property {String} tranId
@property {RecordRef} account
@property {float} total
@property {float} exchangeRate
@property {dateTime} tranDate
@property {RecordRef} postingPeriod
@property {String} memo
@property {boolean} toBePrinted
@property {RecordRef} subsidiary
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {DepositPaymentList} paymentList
@property {DepositOtherList} otherList
@property {DepositCashBackList} cashBackList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class DepositPayment @extends Record
@property {boolean} deposit
@property {integer} id
@property {dateTime} docDate
@property {String} type
@property {String} docNumber
@property {String} memo
@property {RecordRef} paymentMethod
@property {String} refNum
@property {RecordRef} entity
@property {RecordRef} currency
@property {float} transactionAmount
@property {float} paymentAmount
*/
/*
@class DepositPaymentList @extends Record
@property {DepositPayment[]} depositPayment
@property {boolean} replaceAll
*/
/*
@class DepositCashBack @extends Record
@property {float} amount
@property {RecordRef} account
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {String} memo
*/
/*
@class DepositCashBackList @extends Record
@property {DepositCashBack[]} depositCashBack
@property {boolean} replaceAll
*/
/*
@class DepositOther @extends Record
@property {RecordRef} entity
@property {float} amount
@property {RecordRef} account
@property {RecordRef} paymentMethod
@property {String} refNum
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {String} memo
*/
/*
@class DepositOtherList @extends Record
@property {DepositOther[]} depositOther
@property {boolean} replaceAll
*/
/*
@class TransferOrderItemCommitInventory @extends Record
*/
/*
@class TransferOrderOrderStatus @extends Record
*/
/*
@class WorkOrderItemItemCreatePo @extends Record
*/
/*
@class WorkOrderItemItemCommitInventory @extends Record
*/
/*
@class WorkOrderOrderStatus @extends Record
*/
/*
@class WorkOrderSchedulingMethod @extends Record
*/
/*
@class InventoryAdjustment @extends Record
@property {RecordRef} postingPeriod
@property {dateTime} tranDate
@property {dateTime} createdDate
@property {String} tranId
@property {dateTime} lastModifiedDate
@property {RecordRef} subsidiary
@property {RecordRef} account
@property {RecordRef} customForm
@property {float} estimatedTotalValue
@property {RecordRef} customer
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} adjLocation
@property {RecordRef} location
@property {String} memo
@property {InventoryAdjustmentInventoryList} inventoryList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class InventoryAdjustmentInventory @extends Record
@property {RecordRef} item
@property {integer} line
@property {InventoryDetail} inventoryDetail
@property {String} description
@property {RecordRef} location
@property {RecordRef} units
@property {float} quantityOnHand
@property {float} currentValue
@property {float} adjustQtyBy
@property {String} binNumbers
@property {String} serialNumbers
@property {float} newQuantity
@property {float} unitCost
@property {float} foreignCurrencyUnitCost
@property {String} memo
@property {String} currency
@property {dateTime} expirationDate
@property {float} exchangeRate
*/
/*
@class InventoryAdjustmentInventoryList @extends Record
@property {InventoryAdjustmentInventory[]} inventory
@property {boolean} replaceAll
*/
/*
@class AssemblyBuild @extends Record
@property {dateTime} createdDate
@property {dateTime} expirationDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {RecordRef} createdFrom
@property {dateTime} tranDate
@property {RecordRef} postingPeriod
@property {String} tranId
@property {RecordRef} item
@property {float} buildable
@property {float} quantity
@property {RecordRef} units
@property {float} total
@property {InventoryDetail} inventoryDetail
@property {String} serialNumbers
@property {String} binNumbers
@property {RecordRef} subsidiary
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} revision
@property {String} memo
@property {AssemblyComponentList} componentList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class AssemblyUnbuild @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {dateTime} tranDate
@property {RecordRef} postingPeriod
@property {String} tranId
@property {RecordRef} item
@property {float} built
@property {float} quantity
@property {RecordRef} units
@property {float} total
@property {String} serialNumbers
@property {InventoryDetail} inventoryDetail
@property {String} binNumbers
@property {RecordRef} subsidiary
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {String} memo
@property {AssemblyComponentList} componentList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class AssemblyComponent @extends Record
@property {RecordRef} item
@property {float} quantity
@property {float} quantityOnHand
@property {InventoryDetail} componentInventoryDetail
@property {String} componentNumbers
@property {String} binNumbers
*/
/*
@class AssemblyComponentList @extends Record
@property {AssemblyComponent[]} component
@property {boolean} replaceAll
*/
/*
@class TransferOrder @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {float} shippingCost
@property {float} subTotal
@property {String} status
@property {Address} shippingAddress
@property {boolean} shipIsResidential
@property {RecordRef} shipAddressList
@property {String} fob
@property {dateTime} tranDate
@property {String} tranId
@property {String} source
@property {TransferOrderOrderStatus} orderStatus
@property {RecordRef} subsidiary
@property {RecordRef} employee
@property {boolean} firmed
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} transferLocation
@property {String} memo
@property {dateTime} shipDate
@property {RecordRef} shipMethod
@property {String} trackingNumbers
@property {String} linkedTrackingNumbers
@property {boolean} shipComplete
@property {float} altShippingCost
@property {float} shippingTax1Rate
@property {float} shippingTax2Rate
@property {float} handlingTax1Rate
@property {float} handlingTax2Rate
@property {RecordRef} shippingTaxCode
@property {RecordRef} handlingTaxCode
@property {float} total
@property {TransferOrderItemList} itemList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class TransferOrderItem @extends Record
@property {RecordRef} item
@property {integer} line
@property {float} quantityAvailable
@property {float} quantityOnHand
@property {float} quantityBackOrdered
@property {float} quantityCommitted
@property {float} quantityFulfilled
@property {float} quantityPacked
@property {float} quantityPicked
@property {float} quantityReceived
@property {float} quantity
@property {float} rate
@property {RecordRef} units
@property {float} amount
@property {String} description
@property {InventoryDetail} inventoryDetail
@property {String} serialNumbers
@property {TransferOrderItemCommitInventory} commitInventory
@property {float} orderPriority
@property {CustomFieldList} options
@property {boolean} isClosed
@property {RecordRef} department
@property {RecordRef} class
@property {float} lastPurchasePrice
@property {float} averageCost
@property {dateTime} expectedShipDate
@property {dateTime} expectedReceiptDate
@property {CustomFieldList} customFieldList
*/
/*
@class TransferOrderItemList @extends Record
@property {TransferOrderItem[]} item
@property {boolean} replaceAll
*/
/*
@class InterCompanyTransferOrder @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {float} shippingCost
@property {float} subTotal
@property {String} status
@property {Address} shippingAddress
@property {boolean} shipIsResidential
@property {RecordRef} shipAddressList
@property {String} fob
@property {dateTime} tranDate
@property {String} tranId
@property {String} source
@property {TransferOrderOrderStatus} orderStatus
@property {RecordRef} subsidiary
@property {RecordRef} toSubsidiary
@property {RecordRef} employee
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} transferLocation
@property {String} memo
@property {dateTime} shipDate
@property {RecordRef} shipMethod
@property {String} trackingNumbers
@property {String} linkedTrackingNumbers
@property {boolean} shipComplete
@property {float} altShippingCost
@property {float} shippingTax1Rate
@property {float} handlingTax1Rate
@property {float} shippingTax2Rate
@property {float} handlingTax2Rate
@property {RecordRef} shippingTaxCode
@property {RecordRef} handlingTaxCode
@property {float} total
@property {InterCompanyTransferOrderItemList} itemList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class InterCompanyTransferOrderItem @extends Record
@property {RecordRef} item
@property {integer} line
@property {float} quantityAvailable
@property {float} quantityOnHand
@property {float} quantityBackOrdered
@property {float} quantityCommitted
@property {float} quantityFulfilled
@property {float} quantityReceived
@property {float} quantity
@property {float} rate
@property {RecordRef} units
@property {float} amount
@property {String} description
@property {InventoryDetail} inventoryDetail
@property {TransferOrderItemCommitInventory} commitInventory
@property {CustomFieldList} options
@property {RecordRef} department
@property {RecordRef} class
@property {float} lastPurchasePrice
@property {float} averageCost
@property {CustomFieldList} customFieldList
*/
/*
@class InterCompanyTransferOrderItemList @extends Record
@property {InterCompanyTransferOrderItem[]} item
@property {boolean} replaceAll
*/
/*
@class WorkOrder @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {RecordRef} manufacturingRouting
@property {boolean} autoCalculateLag
@property {String} status
@property {String} tranId
@property {RecordRef} entity
@property {RecordRef} job
@property {RecordRef} assemblyItem
@property {boolean} expandAssembly
@property {boolean} isWip
@property {float} quantity
@property {RecordRef} units
@property {dateTime} tranDate
@property {WorkOrderOrderStatus} orderStatus
@property {boolean} firmed
@property {String} memo
@property {RecordRef} department
@property {RecordRef} class
@property {WorkOrderItemList} itemList
@property {RecordRef} location
@property {WorkOrderSchedulingMethod} schedulingMethod
@property {SalesTeamList} salesTeamList
@property {PartnersList} partnersList
@property {RecordRef} createdFrom
@property {String} sourceTransactionId
@property {integer} sourceTransactionLine
@property {boolean} specialOrder
@property {float} buildable
@property {CustomFieldList} options
@property {float} built
@property {dateTime} startDate
@property {dateTime} endDate
@property {RecordRef} revision
@property {RecordRef} subsidiary
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class WorkOrderItem @extends Record
@property {integer} line
@property {RecordRef} item
@property {integer} operationSequenceNumber
@property {float} componentYield
@property {float} bomQuantity
@property {float} quantityCommitted
@property {float} quantityBackOrdered
@property {float} quantityAvailable
@property {float} averageCost
@property {float} lastPurchasePrice
@property {float} quantityOnHand
@property {float} quantity
@property {RecordRef} units
@property {InventoryDetail} inventoryDetail
@property {String} serialNumbers
@property {float} orderPriority
@property {CustomFieldList} options
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} poVendor
@property {float} poRate
@property {float} percentComplete
@property {float} contribution
@property {String} description
@property {WorkOrderItemItemCommitInventory} commit
@property {WorkOrderItemItemCreatePo} createPo
@property {boolean} createWo
@property {dateTime} plannedIssueDate
@property {CustomFieldList} customFieldList
*/
/*
@class WorkOrderItemList @extends Record
@property {WorkOrderItem[]} item
@property {boolean} replaceAll
*/
/*
@class SalesTeamList @extends Record
@property {CustomerSalesTeam[]} salesTeam
@property {boolean} replaceAll
*/
/*
@class PartnersList @extends Record
@property {Partners[]} partners
@property {boolean} replaceAll
*/
/*
@class InventoryTransfer @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {dateTime} tranDate
@property {RecordRef} postingPeriod
@property {String} tranId
@property {String} memo
@property {RecordRef} location
@property {RecordRef} transferLocation
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} subsidiary
@property {InventoryTransferInventoryList} inventoryList
@property {String} internalId
@property {String} externalId
*/
/*
@class InventoryTransferInventory @extends Record
@property {integer} line
@property {RecordRef} item
@property {String} description
@property {RecordRef} units
@property {float} quantityOnHand
@property {float} adjustQtyBy
@property {String} serialNumbers
@property {String} fromBinNumbers
@property {String} toBinNumbers
@property {InventoryDetail} inventoryDetail
*/
/*
@class InventoryTransferInventoryList @extends Record
@property {InventoryTransferInventory[]} inventory
@property {boolean} replaceAll
*/
/*
@class BinTransfer @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {dateTime} tranDate
@property {String} memo
@property {RecordRef} location
@property {BinTransferInventoryList} inventoryList
@property {RecordRef} subsidiary
@property {String} tranId
@property {String} internalId
@property {String} externalId
*/
/*
@class BinTransferInventory @extends Record
@property {integer} line
@property {RecordRef} item
@property {String} description
@property {String} preferredBin
@property {float} quantity
@property {String} itemUnitsLabel
@property {InventoryDetail} inventoryDetail
@property {String} fromBins
@property {String} toBins
*/
/*
@class BinTransferInventoryList @extends Record
@property {BinTransferInventory[]} inventory
@property {boolean} replaceAll
*/
/*
@class BinWorksheet @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {dateTime} tranDate
@property {String} memo
@property {RecordRef} location
@property {String} tranId
@property {BinWorksheetItemList} itemList
@property {String} internalId
@property {String} externalId
*/
/*
@class BinWorksheetItem @extends Record
@property {RecordRef} item
@property {String} itemName
@property {String} description
@property {float} quantity
@property {String} itemOnHand
@property {String} itemUnitsLabel
@property {InventoryDetail} inventoryDetail
@property {String} itemBins
@property {String} itemBinNumbers
@property {String} itemBinList
@property {String} itemPreferBin
@property {String} itemBlank
*/
/*
@class BinWorksheetItemList @extends Record
@property {BinWorksheetItem[]} item
@property {boolean} replaceAll
*/
/*
@class WorkOrderIssue @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {String} tranId
@property {RecordRef} item
@property {RecordRef} createdFrom
@property {dateTime} tranDate
@property {RecordRef} postingPeriod
@property {String} memo
@property {RecordRef} subsidiary
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} revision
@property {RecordRef} manufacturingRouting
@property {RecordRef} startOperation
@property {RecordRef} endOperation
@property {WorkOrderIssueComponentList} componentList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class WorkOrderIssueComponent @extends Record
@property {RecordRef} item
@property {integer} operationSequenceNumber
@property {float} quantity
@property {InventoryDetail} componentInventoryDetail
@property {integer} lineNumber
*/
/*
@class WorkOrderIssueComponentList @extends Record
@property {WorkOrderIssueComponent[]} workOrderIssueComponent
@property {boolean} replaceAll
*/
/*
@class WorkOrderCompletion @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {String} tranId
@property {RecordRef} item
@property {float} quantity
@property {float} scrapQuantity
@property {RecordRef} units
@property {boolean} isBackflush
@property {float} orderQuantity
@property {float} total
@property {RecordRef} createdFrom
@property {InventoryDetail} inventoryDetail
@property {dateTime} tranDate
@property {RecordRef} postingPeriod
@property {String} memo
@property {RecordRef} subsidiary
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} revision
@property {RecordRef} startOperation
@property {RecordRef} endOperation
@property {float} completedQuantity
@property {RecordRef} manufacturingRouting
@property {WorkOrderCompletionComponentList} componentList
@property {WorkOrderCompletionOperationList} operationList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class WorkOrderCompletionComponent @extends Record
@property {RecordRef} item
@property {integer} operationSequenceNumber
@property {float} quantityPer
@property {float} quantity
@property {InventoryDetail} componentInventoryDetail
@property {integer} lineNumber
*/
/*
@class WorkOrderCompletionComponentList @extends Record
@property {WorkOrderCompletionComponent[]} workOrderCompletionComponent
@property {boolean} replaceAll
*/
/*
@class WorkOrderClose @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {String} tranId
@property {RecordRef} item
@property {float} quantity
@property {float} orderQuantity
@property {float} scrapQuantity
@property {RecordRef} createdFrom
@property {dateTime} tranDate
@property {RecordRef} postingPeriod
@property {String} memo
@property {RecordRef} subsidiary
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} revision
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class WorkOrderCompletionOperation @extends Record
@property {integer} operationSequence
@property {String} operationName
@property {String} workCenter
@property {integer} machineResources
@property {integer} laborResources
@property {float} inputQuantity
@property {float} quantityRemaining
@property {float} predecessorCompletedQuantity
@property {float} completedQuantity
@property {boolean} recordSetup
@property {float} machineSetupTime
@property {float} laborSetupTime
@property {float} machineRunTime
@property {float} laborRunTime
*/
/*
@class WorkOrderCompletionOperationList @extends Record
@property {WorkOrderCompletionOperation[]} workOrderCompletionOperation
@property {boolean} replaceAll
*/
/*
@class InventoryCostRevaluation @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {RecordRef} subsidiary
@property {dateTime} tranDate
@property {RecordRef} postingPeriod
@property {String} tranId
@property {RecordRef} account
@property {RecordRef} item
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {String} memo
@property {float} total
@property {float} inventoryValue
@property {float} unitCost
@property {InventoryCostRevaluationCostComponentList} costComponentList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class InventoryCostRevaluationCostComponent @extends Record
@property {float} cost
@property {RecordRef} componentItem
@property {float} quantity
@property {RecordRef} units
@property {RecordRef} costCategory
*/
/*
@class InventoryCostRevaluationCostComponentList @extends Record
@property {InventoryCostRevaluationCostComponent[]} costComponent
@property {boolean} replaceAll
*/
/*
@class JournalEntry @extends Record
@property {RecordRef} postingPeriod
@property {dateTime} tranDate
@property {RecordRef} currency
@property {float} exchangeRate
@property {String} tranId
@property {dateTime} reversalDate
@property {boolean} reversalDefer
@property {RecordRef} parentExpenseAlloc
@property {boolean} isBookSpecific
@property {RecordRef} accountingBook
@property {String} reversalEntry
@property {RecordRef} createdFrom
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} subsidiary
@property {RecordRef} toSubsidiary
@property {boolean} approved
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {JournalEntryLineList} lineList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class JournalEntryLine @extends Record
@property {RecordRef} account
@property {float} debit
@property {float} credit
@property {RecordRef} taxCode
@property {String} memo
@property {float} taxRate1
@property {RecordRef} entity
@property {float} grossAmt
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {boolean} eliminate
@property {RecordRef} schedule
@property {dateTime} startDate
@property {dateTime} endDate
@property {String} residual
@property {RecordRef} scheduleNum
@property {float} tax1Amt
@property {RecordRef} tax1Acct
@property {CustomFieldList} customFieldList
*/
/*
@class JournalEntryLineList @extends Record
@property {JournalEntryLine[]} line
@property {boolean} replaceAll
*/
/*
@class InterCompanyJournalEntry @extends Record
@property {RecordRef} postingPeriod
@property {RecordRef} customForm
@property {dateTime} tranDate
@property {RecordRef} currency
@property {float} exchangeRate
@property {String} tranId
@property {dateTime} reversalDate
@property {boolean} reversalDefer
@property {RecordRef} parentExpenseAlloc
@property {boolean} isBookSpecific
@property {RecordRef} accountingBook
@property {String} reversalEntry
@property {RecordRef} createdFrom
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} subsidiary
@property {RecordRef} toSubsidiary
@property {boolean} approved
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {InterCompanyJournalEntryLineList} lineList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class InterCompanyJournalEntryLine @extends Record
@property {RecordRef} lineSubsidiary
@property {RecordRef} account
@property {float} debit
@property {float} credit
@property {RecordRef} taxCode
@property {String} memo
@property {float} taxRate1
@property {RecordRef} entity
@property {float} grossAmt
@property {RecordRef} schedule
@property {RecordRef} department
@property {dateTime} startDate
@property {RecordRef} class
@property {dateTime} endDate
@property {RecordRef} location
@property {boolean} eliminate
@property {String} residual
@property {RecordRef} amortizationSched
@property {RecordRef} scheduleNum
@property {dateTime} amortizStartDate
@property {dateTime} amortizationEndDate
@property {String} amortizationResidual
@property {float} tax1Amt
@property {RecordRef} tax1Acct
@property {CustomFieldList} customFieldList
*/
/*
@class InterCompanyJournalEntryLineList @extends Record
@property {InterCompanyJournalEntryLine[]} line
@property {boolean} replaceAll
*/
/*
@class StatisticalJournalEntry @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {String} tranId
@property {RecordRef} parentExpenseAlloc
@property {boolean} approved
@property {dateTime} tranDate
@property {RecordRef} postingPeriod
@property {dateTime} reversalDate
@property {boolean} reversalDefer
@property {RecordRef} subsidiary
@property {RecordRef} unitsType
@property {StatisticalJournalEntryLineList} lineList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class StatisticalJournalEntryLine @extends Record
@property {RecordRef} account
@property {RecordRef} location
@property {RecordRef} scheduleNum
@property {float} debit
@property {String} memo
@property {RecordRef} entity
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} lineUnit
@property {String} previewDebit
@property {CustomFieldList} customFieldList
*/
/*
@class StatisticalJournalEntryLineList @extends Record
@property {StatisticalJournalEntryLine[]} statisticalJournalEntryLine
@property {boolean} replaceAll
*/
/*
@class CustomizationFieldType @extends Record
*/
/*
@class CustomizationDynamicDefault @extends Record
*/
/*
@class CustomizationDisplayType @extends Record
*/
/*
@class CustomizationFilterCompareType @extends Record
*/
/*
@class CustomRecordTypePermissionsPermittedLevel @extends Record
*/
/*
@class CustomRecordTypePermissionsRestriction @extends Record
*/
/*
@class ItemCustomFieldItemSubType @extends Record
*/
/*
@class CustomizationAccessLevel @extends Record
*/
/*
@class CustomizationSearchLevel @extends Record
*/
/*
@class CustomRecordTypeAccessType @extends Record
*/
/*
@class CustomRecord @extends Record
@property {String} customRecordId
@property {RecordRef} customForm
@property {boolean} isInactive
@property {String} disclaimer
@property {dateTime} created
@property {dateTime} lastModified
@property {String} name
@property {boolean} autoName
@property {String} altName
@property {RecordRef} owner
@property {RecordRef} recType
@property {boolean} enableNumbering
@property {String} numberingPrefix
@property {String} numberingSuffix
@property {integer} numberingMinDigits
@property {String} description
@property {integer} numberingInit
@property {integer} numberingCurrentNumber
@property {boolean} allowNumberingOverride
@property {boolean} isNumberingUpdateable
@property {CustomRecordTranslationsList} translationsList
@property {boolean} includeName
@property {boolean} showId
@property {boolean} showCreationDate
@property {boolean} showCreationDateOnList
@property {boolean} showLastModified
@property {boolean} showLastModifiedOnList
@property {boolean} showOwner
@property {boolean} showOwnerOnList
@property {boolean} showOwnerAllowChange
@property {boolean} usePermissions
@property {boolean} allowAttachments
@property {boolean} showNotes
@property {boolean} enablEmailMerge
@property {boolean} isOrdered
@property {boolean} allowInlineEditing
@property {boolean} isAvailableOffline
@property {boolean} allowQuickSearch
@property {String} recordName
@property {String} scriptId
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class CustomRecordSearch @extends SearchRecord
@property {CustomRecordSearchBasic} basic
@property {FileSearchBasic} fileJoin
@property {MessageSearchBasic} messagesJoin
@property {EmployeeSearchBasic} ownerJoin
@property {EmployeeSearchBasic} userJoin
@property {NoteSearchBasic} userNotesJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class CustomRecordSearchAdvanced @extends SearchRecord
@property {CustomRecordSearch} criteria
@property {CustomRecordSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class CustomRecordSearchRow @extends SearchRow
@property {CustomRecordSearchRowBasic} basic
@property {FileSearchRowBasic} fileJoin
@property {MessageSearchRowBasic} messagesJoin
@property {EmployeeSearchRowBasic} ownerJoin
@property {EmployeeSearchRowBasic} userJoin
@property {NoteSearchRowBasic} userNotesJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class CustomList @extends Record
@property {String} name
@property {RecordRef} owner
@property {boolean} isOrdered
@property {String} description
@property {boolean} isMatrixOption
@property {String} scriptId
@property {boolean} convertToCustomRecord
@property {boolean} isInactive
@property {CustomListCustomValueList} customValueList
@property {CustomListTranslationsList} translationsList
@property {String} internalId
*/
/*
@class CustomListCustomValue @extends Record
@property {String} value
@property {String} abbreviation
@property {boolean} isInactive
@property {integer} valueId
@property {LanguageValueList} valueLanguageValueList
*/
/*
@class CustomListCustomValueList @extends Record
@property {CustomListCustomValue[]} customValue
@property {boolean} replaceAll
*/
/*
@class CustomListTranslations @extends Record
@property {Language} locale
@property {String} localeDescription
@property {String} name
*/
/*
@class CustomListTranslationsList @extends Record
@property {CustomListTranslations[]} translations
@property {boolean} replaceAll
*/
/*
@class CustomRecordType @extends Record
@property {String} recordName
@property {boolean} includeName
@property {boolean} showId
@property {boolean} showCreationDate
@property {boolean} showCreationDateOnList
@property {boolean} showLastModified
@property {boolean} showLastModifiedOnList
@property {boolean} showOwner
@property {boolean} showOwnerOnList
@property {boolean} showOwnerAllowChange
@property {CustomRecordTypeAccessType} accessType
@property {boolean} allowAttachments
@property {boolean} showNotes
@property {boolean} enableMailMerge
@property {boolean} isOrdered
@property {boolean} isAvailableOffline
@property {boolean} allowQuickSearch
@property {boolean} enableDle
@property {boolean} enableNameTranslation
@property {boolean} isInactive
@property {String} disclaimer
@property {boolean} enableNumbering
@property {String} numberingPrefix
@property {String} numberingSuffix
@property {integer} numberingMinDigits
@property {integer} numberingInit
@property {integer} numberingCurrentNumber
@property {boolean} allowNumberingOverride
@property {boolean} isNumberingUpdateable
@property {RecordRef} owner
@property {String} description
@property {CustomRecordTypeTabsList} tabsList
@property {CustomRecordTypeSublistsList} sublistsList
@property {CustomRecordTypeFormsList} formsList
@property {CustomRecordTypeOnlineFormsList} onlineFormsList
@property {CustomRecordTypePermissionsList} permissionsList
@property {CustomRecordTypeLinksList} linksList
@property {CustomRecordTypeManagersList} managersList
@property {CustomRecordTypeChildrenList} childrenList
@property {CustomRecordTypeParentsList} parentsList
@property {CustomRecordTypeTranslationsList} translationsList
@property {String} scriptId
@property {CustomRecordTypeFieldList} customFieldList
@property {String} internalId
*/
/*
@class CustomRecordTypeFieldList @extends Record
@property {CustomRecordCustomField[]} customField
@property {boolean} replaceAll
*/
/*
@class CustomRecordTypeTabs @extends Record
@property {String} tabTitle
@property {RecordRef} tabParent
@property {LanguageValueList} tabTitleLanguageValueList
*/
/*
@class CustomRecordTypeTabsList @extends Record
@property {CustomRecordTypeTabs[]} tabs
@property {boolean} replaceAll
*/
/*
@class CustomRecordTypeForms @extends Record
@property {String} formEdit
@property {String} formName
@property {boolean} formPref
*/
/*
@class CustomRecordTypeFormsList @extends Record
@property {CustomRecordTypeForms[]} forms
@property {boolean} replaceAll
*/
/*
@class CustomRecordTypeOnlineForms @extends Record
@property {String} onlineFormName
@property {String} isOnline
@property {String} templateName
*/
/*
@class CustomRecordTypeOnlineFormsList @extends Record
@property {CustomRecordTypeOnlineForms[]} onlineForms
@property {boolean} replaceAll
*/
/*
@class CustomRecordTypePermissions @extends Record
@property {RecordRef} permittedRole
@property {CustomRecordTypePermissionsPermittedLevel} permittedLevel
@property {CustomRecordTypePermissionsRestriction} restriction
@property {RecordRef} defaultForm
@property {boolean} restrictForm
@property {RecordRef} searchForm
@property {RecordRef} searchResults
@property {RecordRef} listView
@property {boolean} listViewRestricted
@property {RecordRef} dashboardView
@property {boolean} restrictDashboardView
@property {RecordRef} sublistView
@property {boolean} restrictSublistView
*/
/*
@class CustomRecordTypePermissionsList @extends Record
@property {CustomRecordTypePermissions[]} permissions
@property {boolean} replaceAll
*/
/*
@class CustomRecordTypeLinks @extends Record
@property {RecordRef} linkCenter
@property {RecordRef} linkSection
@property {String} linkLabel
*/
/*
@class CustomRecordTypeLinksList @extends Record
@property {CustomRecordTypeLinks[]} links
@property {boolean} replaceAll
*/
/*
@class CustomRecordTypeManagers @extends Record
@property {RecordRef} managerEmp
*/
/*
@class CustomRecordTypeManagersList @extends Record
@property {CustomRecordTypeManagers[]} managers
@property {boolean} replaceAll
*/
/*
@class CustomRecordTypeChildren @extends Record
@property {String} childDescr
@property {RecordRef} childTab
*/
/*
@class CustomRecordTypeChildrenList @extends Record
@property {CustomRecordTypeChildren[]} children
@property {boolean} replaceAll
*/
/*
@class CustomRecordTypeParents @extends Record
@property {String} childDescr
*/
/*
@class CustomRecordTypeParentsList @extends Record
@property {CustomRecordTypeParents[]} parents
@property {boolean} replaceAll
*/
/*
@class CustomRecordTypeTranslations @extends Record
@property {Language} locale
@property {String} localeDescription
@property {String} name
*/
/*
@class CustomRecordTypeTranslationsList @extends Record
@property {CustomRecordTypeTranslations[]} translations
@property {boolean} replaceAll
*/
/*
@class CustomRecordTypeSublists @extends Record
@property {RecordRef} recordSearch
@property {String} recordDescr
@property {LanguageValueList} recordDescrLanguageValueList
@property {RecordRef} recordTab
@property {String} recordId
*/
/*
@class CustomRecordTypeSublistsList @extends Record
@property {CustomRecordTypeSublists[]} sublists
@property {boolean} replaceAll
*/
/*
@class CustomFieldType @extends Record
@property {CustomizationFieldType} fieldType
@property {String} scriptId
*/
/*
@class EntityCustomField @extends CustomFieldType
@property {String} label
@property {RecordRef} owner
@property {String} description
@property {RecordRef} selectRecordType
@property {boolean} storeValue
@property {boolean} showInList
@property {boolean} globalSearch
@property {boolean} isParent
@property {RecordRef} insertBefore
@property {boolean} availableToSso
@property {RecordRef} subtab
@property {CustomizationDisplayType} displayType
@property {integer} displayWidth
@property {integer} displayHeight
@property {String} help
@property {RecordRef} parentSubtab
@property {String} linkText
@property {boolean} isMandatory
@property {boolean} checkSpelling
@property {integer} maxLength
@property {float} minValue
@property {float} maxValue
@property {boolean} defaultChecked
@property {String} defaultValue
@property {boolean} isFormula
@property {RecordRef} defaultSelection
@property {CustomizationDynamicDefault} dynamicDefault
@property {RecordRef} searchDefault
@property {RecordRef} searchCompareField
@property {RecordRef} sourceList
@property {RecordRef} sourceFrom
@property {RecordRef} sourceFilterBy
@property {boolean} appliesToCustomer
@property {boolean} appliesToProject
@property {boolean} appliesToVendor
@property {boolean} appliesToEmployee
@property {boolean} appliesToOtherName
@property {boolean} appliesToContact
@property {boolean} appliesToPartner
@property {boolean} appliesToWebSite
@property {boolean} appliesToGroup
@property {boolean} availableExternally
@property {EntityCustomFieldFilterList} filterList
@property {CustomizationAccessLevel} accessLevel
@property {boolean} appliesToStatement
@property {CustomizationSearchLevel} searchLevel
@property {boolean} appliesToPriceList
@property {CustomFieldRoleAccessList} roleAccessList
@property {CustomFieldDepartmentAccessList} deptAccessList
@property {CustomFieldSubAccessList} subAccessList
@property {CustomFieldTranslationsList} translationsList
@property {String} internalId
*/
/*
@class EntityCustomFieldFilter @extends CustomFieldType
@property {RecordRef} fldFilter
@property {boolean} fldFilterChecked
@property {CustomizationFilterCompareType} fldFilterCompareType
@property {String} fldFilterVal
@property {FldFilterSelList} fldFilterSelList
@property {boolean} fldFilterNotNull
*/
/*
@class EntityCustomFieldFilterList @extends CustomFieldType
@property {EntityCustomFieldFilter[]} filter
@property {boolean} replaceAll
*/
/*
@class FldFilterSelList @extends CustomFieldType
@property {RecordRef[]} fldFilterSel
*/
/*
@class CrmCustomField @extends CustomFieldType
@property {String} label
@property {RecordRef} owner
@property {String} description
@property {RecordRef} selectRecordType
@property {boolean} storeValue
@property {boolean} showInList
@property {boolean} globalSearch
@property {boolean} isParent
@property {RecordRef} insertBefore
@property {RecordRef} subtab
@property {CustomizationDisplayType} displayType
@property {integer} displayWidth
@property {integer} displayHeight
@property {String} help
@property {RecordRef} parentSubtab
@property {String} linkText
@property {boolean} isMandatory
@property {boolean} checkSpelling
@property {integer} maxLength
@property {float} minValue
@property {float} maxValue
@property {boolean} defaultChecked
@property {String} defaultValue
@property {boolean} isFormula
@property {RecordRef} defaultSelection
@property {CustomizationDynamicDefault} dynamicDefault
@property {RecordRef} searchDefault
@property {RecordRef} searchCompareField
@property {RecordRef} sourceList
@property {RecordRef} sourceFrom
@property {RecordRef} sourceFilterBy
@property {boolean} appliesToTask
@property {boolean} appliesToMfgProjectTask
@property {boolean} appliesToProjectTask
@property {boolean} appliesToPhoneCall
@property {boolean} appliesToEvent
@property {boolean} appliesToCase
@property {boolean} appliesToCampaign
@property {boolean} appliesPerKeyword
@property {boolean} appliesToSolution
@property {boolean} appliesToIssue
@property {boolean} availableExternally
@property {boolean} availableToSso
@property {boolean} showIssueChanges
@property {CrmCustomFieldFilterList} filterList
@property {CustomizationAccessLevel} accessLevel
@property {CustomizationSearchLevel} searchLevel
@property {CustomFieldRoleAccessList} roleAccessList
@property {CustomFieldDepartmentAccessList} deptAccessList
@property {CustomFieldSubAccessList} subAccessList
@property {CustomFieldTranslationsList} translationsList
@property {String} internalId
*/
/*
@class CrmCustomFieldFilter @extends CustomFieldType
@property {RecordRef} fldFilter
@property {boolean} fldFilterChecked
@property {CustomizationFilterCompareType} fldFilterCompareType
@property {String} fldFilterVal
@property {FldFilterSelList} fldFilterSelList
@property {boolean} fldFilterNotNull
*/
/*
@class CrmCustomFieldFilterList @extends CustomFieldType
@property {CrmCustomFieldFilter[]} filter
@property {boolean} replaceAll
*/
/*
@class OtherCustomField @extends CustomFieldType
@property {RecordRef} recType
@property {String} label
@property {RecordRef} owner
@property {String} description
@property {RecordRef} selectRecordType
@property {boolean} storeValue
@property {boolean} showInList
@property {RecordRef} insertBefore
@property {CustomizationDisplayType} displayType
@property {integer} displayWidth
@property {integer} displayHeight
@property {String} help
@property {String} linkText
@property {boolean} isMandatory
@property {boolean} checkSpelling
@property {integer} maxLength
@property {float} minValue
@property {float} maxValue
@property {boolean} defaultChecked
@property {String} defaultValue
@property {boolean} isFormula
@property {RecordRef} defaultSelection
@property {CustomizationDynamicDefault} dynamicDefault
@property {RecordRef} searchDefault
@property {RecordRef} searchCompareField
@property {RecordRef} sourceList
@property {RecordRef} sourceFrom
@property {RecordRef} sourceFilterBy
@property {OtherCustomFieldFilterList} filterList
@property {CustomizationAccessLevel} accessLevel
@property {CustomizationSearchLevel} searchLevel
@property {CustomFieldRoleAccessList} roleAccessList
@property {CustomFieldDepartmentAccessList} deptAccessList
@property {CustomFieldSubAccessList} subAccessList
@property {CustomFieldTranslationsList} translationsList
@property {String} internalId
*/
/*
@class OtherCustomFieldFilter @extends CustomFieldType
@property {RecordRef} fldFilter
@property {boolean} fldFilterChecked
@property {CustomizationFilterCompareType} fldFilterCompareType
@property {String} fldFilterVal
@property {FldFilterSelList} fldFilterSelList
@property {boolean} fldFilterNotNull
*/
/*
@class OtherCustomFieldFilterList @extends CustomFieldType
@property {OtherCustomFieldFilter[]} filter
@property {boolean} replaceAll
*/
/*
@class ItemCustomField @extends CustomFieldType
@property {String} label
@property {RecordRef} owner
@property {boolean} itemMatrix
@property {String} description
@property {RecordRef} selectRecordType
@property {boolean} storeValue
@property {boolean} showInList
@property {boolean} globalSearch
@property {boolean} isParent
@property {RecordRef} insertBefore
@property {RecordRef} subtab
@property {CustomizationDisplayType} displayType
@property {integer} displayWidth
@property {integer} displayHeight
@property {String} help
@property {RecordRef} parentSubtab
@property {String} linkText
@property {boolean} isMandatory
@property {boolean} checkSpelling
@property {integer} maxLength
@property {float} minValue
@property {float} maxValue
@property {boolean} defaultChecked
@property {String} defaultValue
@property {boolean} isFormula
@property {RecordRef} defaultSelection
@property {CustomizationDynamicDefault} dynamicDefault
@property {RecordRef} searchDefault
@property {RecordRef} searchCompareField
@property {RecordRef} sourceList
@property {RecordRef} sourceFrom
@property {RecordRef} sourceFilterBy
@property {boolean} appliesToInventory
@property {boolean} appliesToNonInventory
@property {boolean} appliesToService
@property {boolean} appliesToOtherCharge
@property {boolean} appliesToGroup
@property {boolean} appliesToKit
@property {boolean} appliesToItemAssembly
@property {boolean} availableToSso
@property {ItemCustomFieldItemSubType} itemSubType
@property {ItemCustomFieldFilterList} filterList
@property {boolean} appliesToPriceList
@property {CustomizationAccessLevel} accessLevel
@property {CustomizationSearchLevel} searchLevel
@property {CustomFieldRoleAccessList} roleAccessList
@property {CustomFieldDepartmentAccessList} deptAccessList
@property {CustomFieldSubAccessList} subAccessList
@property {CustomFieldTranslationsList} translationsList
@property {String} internalId
*/
/*
@class ItemCustomFieldFilter @extends CustomFieldType
@property {RecordRef} fldFilter
@property {boolean} fldFilterChecked
@property {CustomizationFilterCompareType} fldFilterCompareType
@property {String} fldFilterVal
@property {FldFilterSelList} fldFilterSelList
@property {boolean} fldFilterNotNull
*/
/*
@class ItemCustomFieldFilterList @extends CustomFieldType
@property {ItemCustomFieldFilter[]} filter
@property {boolean} replaceAll
*/
/*
@class TransactionBodyCustomField @extends CustomFieldType
@property {String} label
@property {RecordRef} owner
@property {String} description
@property {RecordRef} selectRecordType
@property {boolean} storeValue
@property {boolean} showInList
@property {boolean} globalSearch
@property {boolean} isParent
@property {RecordRef} insertBefore
@property {RecordRef} subtab
@property {boolean} availableToSso
@property {CustomizationDisplayType} displayType
@property {integer} displayWidth
@property {integer} displayHeight
@property {String} help
@property {RecordRef} parentSubtab
@property {String} linkText
@property {boolean} isMandatory
@property {boolean} checkSpelling
@property {integer} maxLength
@property {float} minValue
@property {float} maxValue
@property {boolean} defaultChecked
@property {String} defaultValue
@property {boolean} isFormula
@property {RecordRef} defaultSelection
@property {CustomizationDynamicDefault} dynamicDefault
@property {RecordRef} searchDefault
@property {RecordRef} searchCompareField
@property {RecordRef} sourceList
@property {RecordRef} sourceFrom
@property {RecordRef} sourceFilterBy
@property {boolean} bodyPurchase
@property {boolean} bodySale
@property {boolean} bodyOpportunity
@property {boolean} bodyJournal
@property {boolean} bodyExpenseReport
@property {boolean} bodyStore
@property {boolean} bodyTransferOrder
@property {boolean} bodyItemReceipt
@property {boolean} bodyItemReceiptOrder
@property {boolean} bodyItemFulfillment
@property {boolean} bodyItemFulfillmentOrder
@property {boolean} bodyInventoryAdjustment
@property {boolean} bodyBTegata
@property {boolean} bodyAssemblyBuild
@property {boolean} bodyPrintFlag
@property {boolean} bodyPickingTicket
@property {boolean} bodyPrintPackingSlip
@property {boolean} bodyCustomerPayment
@property {boolean} bodyVendorPayment
@property {boolean} bodyDeposit
@property {boolean} bodyBom
@property {boolean} bodyPrintStatement
@property {TransactionBodyCustomFieldFilterList} filterList
@property {CustomizationAccessLevel} accessLevel
@property {CustomizationSearchLevel} searchLevel
@property {CustomFieldRoleAccessList} roleAccessList
@property {CustomFieldDepartmentAccessList} deptAccessList
@property {CustomFieldSubAccessList} subAccessList
@property {CustomFieldTranslationsList} translationsList
@property {String} internalId
*/
/*
@class TransactionBodyCustomFieldFilter @extends CustomFieldType
@property {RecordRef} fldFilter
@property {boolean} fldFilterChecked
@property {CustomizationFilterCompareType} fldFilterCompareType
@property {String} fldFilterVal
@property {FldFilterSelList} fldFilterSelList
@property {boolean} fldFilterNotNull
*/
/*
@class TransactionBodyCustomFieldFilterList @extends CustomFieldType
@property {TransactionBodyCustomFieldFilter[]} filter
@property {boolean} replaceAll
*/
/*
@class TransactionColumnCustomField @extends CustomFieldType
@property {String} label
@property {RecordRef} owner
@property {String} description
@property {RecordRef} selectRecordType
@property {boolean} storeValue
@property {RecordRef} insertBefore
@property {boolean} availableToSso
@property {CustomizationDisplayType} displayType
@property {integer} displayWidth
@property {integer} displayHeight
@property {String} help
@property {String} linkText
@property {boolean} isMandatory
@property {integer} maxLength
@property {float} minValue
@property {float} maxValue
@property {boolean} defaultChecked
@property {String} defaultValue
@property {boolean} isFormula
@property {RecordRef} defaultSelection
@property {CustomizationDynamicDefault} dynamicDefault
@property {RecordRef} sourceList
@property {RecordRef} sourceFrom
@property {RecordRef} sourceFilterBy
@property {boolean} colExpense
@property {boolean} colPurchase
@property {boolean} colSale
@property {boolean} colOpportunity
@property {boolean} colStore
@property {boolean} colStoreHidden
@property {boolean} colJournal
@property {boolean} colBuild
@property {boolean} colExpenseReport
@property {boolean} colTime
@property {boolean} colTransferOrder
@property {boolean} colTimeGroup
@property {boolean} colItemReceipt
@property {boolean} colItemReceiptOrder
@property {boolean} colItemFulfillment
@property {boolean} colItemFulfillmentOrder
@property {boolean} colPrintFlag
@property {boolean} colPickingTicket
@property {boolean} colPackingSlip
@property {boolean} colReturnForm
@property {boolean} colStoreWithGroups
@property {boolean} colGroupOnInvoices
@property {boolean} colKitItem
@property {TransactionColumnCustomFieldFilterList} filterList
@property {CustomizationAccessLevel} accessLevel
@property {CustomizationSearchLevel} searchLevel
@property {CustomFieldRoleAccessList} roleAccessList
@property {CustomFieldDepartmentAccessList} deptAccessList
@property {CustomFieldSubAccessList} subAccessList
@property {CustomFieldTranslationsList} translationsList
@property {String} internalId
*/
/*
@class TransactionColumnCustomFieldFilter @extends CustomFieldType
@property {RecordRef} fldFilter
@property {boolean} fldFilterChecked
@property {CustomizationFilterCompareType} fldFilterCompareType
@property {String} fldFilterVal
@property {FldFilterSelList} fldFilterSelList
@property {boolean} fldFilterNotNull
*/
/*
@class TransactionColumnCustomFieldFilterList @extends CustomFieldType
@property {TransactionColumnCustomFieldFilter[]} filter
@property {boolean} replaceAll
*/
/*
@class ItemOptionCustomField @extends CustomFieldType
@property {String} label
@property {RecordRef} owner
@property {String} description
@property {RecordRef} selectRecordType
@property {boolean} storeValue
@property {RecordRef} insertBefore
@property {CustomizationDisplayType} displayType
@property {integer} displayWidth
@property {integer} displayHeight
@property {String} help
@property {String} linkText
@property {boolean} isMandatory
@property {integer} maxLength
@property {float} minValue
@property {float} maxValue
@property {boolean} defaultChecked
@property {String} defaultValue
@property {boolean} isFormula
@property {RecordRef} defaultSelection
@property {CustomizationDynamicDefault} dynamicDefault
@property {RecordRef} searchDefault
@property {RecordRef} searchCompareField
@property {RecordRef} sourceList
@property {RecordRef} sourceFrom
@property {RecordRef} sourceFilterBy
@property {boolean} colPurchase
@property {boolean} colSale
@property {boolean} colOpportunity
@property {boolean} colStore
@property {boolean} colStoreHidden
@property {boolean} colTransferOrder
@property {boolean} colAllItems
@property {ItemsList} itemsList
@property {boolean} colKitItem
@property {ItemOptionCustomFieldFilterList} filterList
@property {String} colOptionLabel
@property {CustomizationAccessLevel} accessLevel
@property {CustomizationSearchLevel} searchLevel
@property {CustomFieldRoleAccessList} roleAccessList
@property {CustomFieldDepartmentAccessList} deptAccessList
@property {CustomFieldSubAccessList} subAccessList
@property {CustomFieldTranslationsList} translationsList
@property {String} internalId
*/
/*
@class ItemsList @extends CustomFieldType
@property {RecordRef[]} items
*/
/*
@class ItemOptionCustomFieldFilter @extends CustomFieldType
@property {RecordRef} fldFilter
@property {boolean} fldFilterChecked
@property {CustomizationFilterCompareType} fldFilterCompareType
@property {String} fldFilterVal
@property {FldFilterSelList} fldFilterSelList
@property {boolean} fldFilterNotNull
*/
/*
@class ItemOptionCustomFieldFilterList @extends CustomFieldType
@property {ItemOptionCustomFieldFilter[]} filter
@property {boolean} replaceAll
*/
/*
@class CustomRecordCustomField @extends CustomFieldType
@property {String} label
@property {RecordRef} owner
@property {String} description
@property {RecordRef} selectRecordType
@property {boolean} storeValue
@property {boolean} showInList
@property {boolean} globalSearch
@property {boolean} isParent
@property {RecordRef} insertBefore
@property {RecordRef} subtab
@property {CustomizationDisplayType} displayType
@property {integer} displayWidth
@property {integer} displayHeight
@property {String} help
@property {RecordRef} parentSubtab
@property {String} linkText
@property {boolean} isMandatory
@property {boolean} checkSpelling
@property {integer} maxLength
@property {float} minValue
@property {float} maxValue
@property {boolean} defaultChecked
@property {String} defaultValue
@property {boolean} isFormula
@property {RecordRef} defaultSelection
@property {CustomizationDynamicDefault} dynamicDefault
@property {RecordRef} searchDefault
@property {RecordRef} searchCompareField
@property {RecordRef} sourceList
@property {RecordRef} sourceFrom
@property {RecordRef} sourcefilterby
@property {String} recType
@property {boolean} roleRestrict
@property {CustomRecordCustomFieldFilterList} filterList
@property {CustomizationAccessLevel} accessLevel
@property {CustomizationSearchLevel} searchLevel
@property {CustomFieldRoleAccessList} roleAccessList
@property {CustomFieldDepartmentAccessList} deptAccessList
@property {CustomFieldSubAccessList} subAccessList
@property {CustomFieldTranslationsList} translationsList
@property {String} internalId
*/
/*
@class CustomRecordCustomFieldFilter @extends CustomFieldType
@property {RecordRef} fldFilter
@property {boolean} fldFilterChecked
@property {CustomizationFilterCompareType} fldFilterCompareType
@property {String} fldFilterVal
@property {FldFilterSelList} fldFilterSelList
@property {boolean} fldFilterNotNull
*/
/*
@class CustomRecordCustomFieldFilterList @extends CustomFieldType
@property {CustomRecordCustomFieldFilter[]} filter
@property {boolean} replaceAll
*/
/*
@class CustomFieldRoleAccess @extends CustomFieldType
@property {RecordRef} role
@property {CustomizationAccessLevel} accessLevel
@property {CustomizationSearchLevel} searchLevel
*/
/*
@class CustomFieldRoleAccessList @extends CustomFieldType
@property {CustomFieldRoleAccess[]} roleAccess
@property {boolean} replaceAll
*/
/*
@class CustomFieldDepartmentAccess @extends CustomFieldType
@property {RecordRef} dept
@property {CustomizationAccessLevel} accessLevel
@property {CustomizationSearchLevel} searchLevel
*/
/*
@class CustomFieldDepartmentAccessList @extends CustomFieldType
@property {CustomFieldDepartmentAccess[]} deptAccess
@property {boolean} replaceAll
*/
/*
@class CustomFieldSubAccess @extends CustomFieldType
@property {RecordRef} sub
@property {CustomizationAccessLevel} accessLevel
@property {CustomizationSearchLevel} searchLevel
*/
/*
@class CustomFieldSubAccessList @extends CustomFieldType
@property {CustomFieldSubAccess[]} subAccess
@property {boolean} replaceAll
*/
/*
@class LanguageValue @extends CustomFieldType
@property {Language} locale
@property {String} value
*/
/*
@class LanguageValueList @extends CustomFieldType
@property {LanguageValue[]} languageValue
@property {boolean} replaceAll
*/
/*
@class CustomFieldTranslations @extends CustomFieldType
@property {Language} locale
@property {String} localeDescription
@property {String} label
@property {String} help
*/
/*
@class CustomFieldTranslationsList @extends CustomFieldType
@property {CustomFieldTranslations[]} translations
@property {boolean} replaceAll
*/
/*
@class ItemNumberCustomField @extends CustomFieldType
@property {String} label
@property {RecordRef} owner
@property {String} description
@property {RecordRef} selectRecordType
@property {boolean} storeValue
@property {boolean} showInList
@property {RecordRef} insertBefore
@property {CustomizationDisplayType} displayType
@property {integer} displayWidth
@property {integer} displayHeight
@property {String} help
@property {String} linkText
@property {boolean} isMandatory
@property {boolean} checkSpelling
@property {integer} maxLength
@property {float} minValue
@property {float} maxValue
@property {boolean} defaultChecked
@property {String} defaultValue
@property {boolean} isFormula
@property {RecordRef} defaultSelection
@property {CustomizationDynamicDefault} dynamicDefault
@property {RecordRef} searchDefault
@property {RecordRef} searchCompareField
@property {RecordRef} sourceList
@property {RecordRef} sourceFrom
@property {RecordRef} sourceFilterBy
@property {CustomizationAccessLevel} accessLevel
@property {CustomizationSearchLevel} searchLevel
@property {ItemNumberCustomFieldFilterList} filterList
@property {CustomFieldRoleAccessList} roleAccessList
@property {CustomFieldDepartmentAccessList} deptAccessList
@property {boolean} appliesToAllItems
@property {boolean} appliesToSerialized
@property {boolean} appliesToLots
@property {boolean} appliesToGiftCerts
@property {RecordRefList} itemsList
@property {CustomFieldTranslationsList} translationsList
@property {String} internalId
*/
/*
@class ItemNumberCustomFieldFilter @extends CustomFieldType
@property {RecordRef} fldFilter
@property {boolean} fldFilterChecked
@property {CustomizationFilterCompareType} fldFilterCompareType
@property {String} fldFilterVal
@property {boolean} fldFilterNotNull
@property {boolean} fldfilterNull
@property {RecordRef} fldCompareField
*/
/*
@class ItemNumberCustomFieldFilterList @extends CustomFieldType
@property {ItemNumberCustomFieldFilter[]} filter
@property {boolean} replaceAll
*/
/*
@class CustomListSearch @extends SearchRecord
@property {CustomListSearchBasic} basic
@property {EmployeeSearchBasic} userJoin
*/
/*
@class CustomListSearchAdvanced @extends SearchRecord
@property {CustomListSearch} criteria
@property {CustomListSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class CustomListSearchRow @extends SearchRow
@property {CustomListSearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class AppDefinition @extends Record
@property {String} name
@property {String} description
@property {AppDefinitionPackagesList} packagesList
@property {String} internalId
@property {String} externalId
*/
/*
@class AppDefinitionPackages @extends Record
*/
/*
@class AppDefinitionPackagesList @extends Record
@property {AppDefinitionPackages[]} packages
@property {boolean} replaceAll
*/
/*
@class AppDefinitionSearch @extends SearchRecord
@property {AppDefinitionSearchBasic} basic
@property {AppPackageSearchBasic} appPackageJoin
@property {EmployeeSearchBasic} creatorJoin
@property {EmployeeSearchBasic} userJoin
*/
/*
@class AppDefinitionSearchAdvanced @extends SearchRecord
@property {AppDefinitionSearch} criteria
@property {AppDefinitionSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class AppDefinitionSearchRow @extends SearchRow
@property {AppDefinitionSearchRowBasic} basic
@property {AppPackageSearchRowBasic} appPackageJoin
@property {EmployeeSearchRowBasic} creatorJoin
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class AppPackage @extends Record
@property {RecordRef} appDefinition
@property {String} version
@property {RecordRef} packageFile
@property {RecordRef} bundle
@property {String} description
@property {String} internalId
@property {String} externalId
*/
/*
@class AppPackageSearch @extends SearchRecord
@property {AppPackageSearchBasic} basic
@property {AppDefinitionSearchBasic} appDefinitionJoin
@property {EmployeeSearchBasic} creatorJoin
@property {FileSearchBasic} packageFileJoin
@property {EmployeeSearchBasic} userJoin
*/
/*
@class AppPackageSearchAdvanced @extends SearchRecord
@property {AppPackageSearch} criteria
@property {AppPackageSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class AppPackageSearchRow @extends SearchRow
@property {AppPackageSearchRowBasic} basic
@property {AppDefinitionSearchRowBasic} appDefinitionJoin
@property {EmployeeSearchRowBasic} creatorJoin
@property {FileSearchRowBasic} packageFileJoin
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class CustomRecordTranslations @extends SearchRow
@property {Language} locale
@property {String} language
@property {String} label
*/
/*
@class CustomRecordTranslationsList @extends SearchRow
@property {CustomRecordTranslations[]} customRecordTranslations
@property {boolean} replaceAll
*/
/*
@class CustomTransaction @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {RecordRef} tranType
@property {String} tranId
@property {float} total
@property {RecordRef} currency
@property {RecordRef} voidJournal
@property {float} exchangeRate
@property {dateTime} tranDate
@property {RecordRef} postingPeriod
@property {String} memo
@property {RecordRef} tranStatus
@property {RecordRef} subsidiary
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {CustomTransactionLineList} lineList
@property {CustomTransactionAccountingBookDetailList} accountingBookDetailList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class CustomTransactionLine @extends Record
@property {RecordRef} account
@property {integer} line
@property {float} debit
@property {float} credit
@property {float} amount
@property {String} memo
@property {RecordRef} entity
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {CustomFieldList} customFieldList
*/
/*
@class CustomTransactionLineList @extends Record
@property {CustomTransactionLine[]} customTransactionLine
@property {boolean} replaceAll
*/
/*
@class CustomTransactionAccountingBookDetail @extends Record
@property {RecordRef} accountingBook
@property {RecordRef} currency
@property {float} exchangeRate
*/
/*
@class CustomTransactionAccountingBookDetailList @extends Record
@property {CustomTransactionAccountingBookDetail[]} customTransactionAccountingBookDetail
@property {boolean} replaceAll
*/
/*
@class EmployeePayFrequency @extends Record
*/
/*
@class EmployeeUseTimeData @extends Record
*/
/*
@class EmployeeCommissionPaymentPreference @extends Record
*/
/*
@class Gender @extends Record
*/
/*
@class EmployeeAccruedTimeAccrualMethod @extends Record
*/
/*
@class EmployeeDirectDepositAccountStatus @extends Record
*/
/*
@class PayrollItemItemTypeNoHierarchy @extends Record
*/
/*
@class Employee @extends Record
@property {RecordRef} customForm
@property {RecordRef} template
@property {String} entityId
@property {String} salutation
@property {String} firstName
@property {String} middleName
@property {String} lastName
@property {String} altName
@property {String} phone
@property {String} fax
@property {String} email
@property {String} defaultAddress
@property {boolean} isInactive
@property {String} phoneticName
@property {dateTime} lastModifiedDate
@property {dateTime} dateCreated
@property {String} initials
@property {String} officePhone
@property {String} homePhone
@property {String} mobilePhone
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {RecordRef} subsidiary
@property {RecordRef} billingClass
@property {String} accountNumber
@property {String} comments
@property {GlobalSubscriptionStatus} globalSubscriptionStatus
@property {RecordRef} image
@property {EmployeePayFrequency} payFrequency
@property {dateTime} lastPaidDate
@property {RecordRef} currency
@property {EmployeeUseTimeData} useTimeData
@property {boolean} usePerquest
@property {RecordRef} workplace
@property {String} adpId
@property {boolean} directDeposit
@property {float} expenseLimit
@property {float} purchaseOrderLimit
@property {float} purchaseOrderApprovalLimit
@property {String} socialSecurityNumber
@property {RecordRef} supervisor
@property {RecordRef} approver
@property {float} approvalLimit
@property {RecordRef} timeApprover
@property {RecordRef} employeeType
@property {boolean} isSalesRep
@property {RecordRef} salesRole
@property {boolean} isSupportRep
@property {boolean} isJobResource
@property {float} laborCost
@property {dateTime} birthDate
@property {dateTime} hireDate
@property {dateTime} releaseDate
@property {dateTime} lastReviewDate
@property {dateTime} nextReviewDate
@property {String} title
@property {RecordRef} employeeStatus
@property {String} jobDescription
@property {RecordRef} maritalStatus
@property {RecordRef} ethnicity
@property {Gender} gender
@property {RecordRef} purchaseOrderApprover
@property {RecordRef} workCalendar
@property {boolean} giveAccess
@property {boolean} concurrentWebServicesUser
@property {boolean} sendEmail
@property {boolean} hasOfflineAccess
@property {String} password
@property {String} password2
@property {boolean} requirePwdChange
@property {boolean} inheritIPRules
@property {String} IPAddressRule
@property {EmployeeCommissionPaymentPreference} commissionPaymentPreference
@property {boolean} billPay
@property {boolean} eligibleForCommission
@property {EmployeeSubscriptionsList} subscriptionsList
@property {EmployeeAddressbookList} addressbookList
@property {EmployeeRolesList} rolesList
@property {EmployeeHrEducationList} hrEducationList
@property {EmployeeAccruedTimeList} accruedTimeList
@property {EmployeeDirectDepositList} directDepositList
@property {EmployeeCompanyContributionList} companyContributionList
@property {EmployeeEarningList} earningList
@property {EmployeeEmergencyContactList} emergencyContactList
@property {EmployeeDeductionList} deductionList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class EmployeeSubscriptions @extends Record
@property {String} subscribed
@property {String} subscription
@property {dateTime} lastModifiedDate
*/
/*
@class EmployeeSubscriptionsList @extends Record
@property {EmployeeSubscriptions[]} subscriptions
@property {boolean} replaceAll
*/
/*
@class EmployeeAddressbook @extends Record
@property {boolean} defaultShipping
@property {boolean} defaultBilling
@property {String} label
@property {Address} addressbookAddress
@property {String} internalId
*/
/*
@class EmployeeAddressbookList @extends Record
@property {EmployeeAddressbook[]} addressbook
@property {boolean} replaceAll
*/
/*
@class EmployeeRoles @extends Record
@property {RecordRef} selectedRole
*/
/*
@class EmployeeRolesList @extends Record
@property {EmployeeRoles[]} roles
@property {boolean} replaceAll
*/
/*
@class EmployeeSearch @extends SearchRecord
@property {EmployeeSearchBasic} basic
@property {CampaignSearchBasic} campaignResponseJoin
@property {DepartmentSearchBasic} departmentJoin
@property {FileSearchBasic} fileJoin
@property {LocationSearchBasic} locationJoin
@property {MessageSearchBasic} messagesJoin
@property {MessageSearchBasic} messagesFromJoin
@property {MessageSearchBasic} messagesToJoin
@property {ResourceAllocationSearchBasic} resourceAllocationJoin
@property {SubsidiarySearchBasic} subsidiaryJoin
@property {TimeBillSearchBasic} timeJoin
@property {TransactionSearchBasic} transactionJoin
@property {EmployeeSearchBasic} userJoin
@property {NoteSearchBasic} userNotesJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class EmployeeSearchAdvanced @extends SearchRecord
@property {EmployeeSearch} criteria
@property {EmployeeSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class EmployeeSearchRow @extends SearchRow
@property {EmployeeSearchRowBasic} basic
@property {CampaignSearchRowBasic} campaignResponseJoin
@property {DepartmentSearchRowBasic} departmentJoin
@property {FileSearchRowBasic} fileJoin
@property {LocationSearchRowBasic} locationJoin
@property {MessageSearchRowBasic} messagesJoin
@property {MessageSearchRowBasic} messagesFromJoin
@property {MessageSearchRowBasic} messagesToJoin
@property {ResourceAllocationSearchRowBasic} resourceAllocationJoin
@property {SubsidiarySearchRowBasic} subsidiaryJoin
@property {TimeBillSearchRowBasic} timeJoin
@property {TransactionSearchRowBasic} transactionJoin
@property {EmployeeSearchRowBasic} userJoin
@property {NoteSearchRowBasic} userNotesJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class EmployeeEmergencyContact @extends SearchRow
@property {integer} id
@property {String} contact
@property {String} relationship
@property {String} address
@property {String} phone
*/
/*
@class EmployeeEmergencyContactList @extends SearchRow
@property {EmployeeEmergencyContact[]} employeeEmergencyContact
@property {boolean} replaceAll
*/
/*
@class EmployeeHrEducation @extends SearchRow
@property {RecordRef} education
@property {String} degree
@property {dateTime} degreeDate
*/
/*
@class EmployeeHrEducationList @extends SearchRow
@property {EmployeeHrEducation[]} employeeHrEducation
@property {boolean} replaceAll
*/
/*
@class EmployeeAccruedTime @extends SearchRow
@property {RecordRef} payrollItem
@property {float} accruedHours
@property {float} accrualRate
@property {float} monetaryRate
@property {boolean} resetAccruedHoursAtYearEnd
@property {EmployeeAccruedTimeAccrualMethod} accrualMethod
@property {float} maximumAccruedHours
@property {boolean} inactive
@property {dateTime} effectiveDate
@property {dateTime} expirationDate
*/
/*
@class EmployeeAccruedTimeList @extends SearchRow
@property {EmployeeAccruedTime[]} employeeAccruedTime
@property {boolean} replaceAll
*/
/*
@class EmployeeDeduction @extends SearchRow
@property {RecordRef} payrollItem
@property {String} rate
@property {float} limit
@property {boolean} inactive
@property {dateTime} effectiveDate
@property {dateTime} expirationDate
*/
/*
@class EmployeeDeductionList @extends SearchRow
@property {EmployeeDeduction[]} employeeDeduction
@property {boolean} replaceAll
*/
/*
@class EmployeeCompanyContribution @extends SearchRow
@property {RecordRef} payrollItem
@property {String} rate
@property {float} limit
@property {boolean} inactive
@property {dateTime} effectiveDate
@property {dateTime} expirationDate
*/
/*
@class EmployeeCompanyContributionList @extends SearchRow
@property {EmployeeCompanyContribution[]} employeeCompanyContribution
@property {boolean} replaceAll
*/
/*
@class EmployeeEarning @extends SearchRow
@property {RecordRef} payrollItem
@property {String} payRate
@property {boolean} primaryEarning
@property {float} defaultHours
@property {boolean} inactive
@property {boolean} defaultEarning
@property {dateTime} effectiveDate
@property {dateTime} expirationDate
*/
/*
@class EmployeeEarningList @extends SearchRow
@property {EmployeeEarning[]} employeeEarning
@property {boolean} replaceAll
*/
/*
@class EmployeeDirectDeposit @extends SearchRow
@property {integer} id
@property {boolean} netAccount
@property {boolean} savingsAccount
@property {boolean} accountPrenoted
@property {EmployeeDirectDepositAccountStatus} accountStatus
@property {String} bankName
@property {String} bankId
@property {String} bankNumber
@property {String} bankRoutingNumber
@property {String} bankAccountNumber
@property {float} amount
@property {boolean} inactive
*/
/*
@class EmployeeDirectDepositList @extends SearchRow
@property {EmployeeDirectDeposit[]} employeeDirectDeposit
@property {boolean} replaceAll
*/
/*
@class PayrollItem @extends Record
@property {RecordRef} subsidiary
@property {RecordRef} itemType
@property {String} name
@property {RecordRef} vendor
@property {RecordRef} expenseAccount
@property {RecordRef} liabilityAccount
@property {boolean} employeePaid
@property {boolean} inactive
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class PayrollItemSearch @extends SearchRecord
@property {PayrollItemSearchBasic} basic
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class PayrollItemSearchAdvanced @extends SearchRecord
@property {PayrollItemSearch} criteria
@property {PayrollItemSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class PayrollItemSearchRow @extends SearchRow
@property {PayrollItemSearchRowBasic} basic
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class MediaType @extends SearchRow
*/
/*
@class FileAttachFrom @extends SearchRow
*/
/*
@class FileEncoding @extends SearchRow
*/
/*
@class TextFileEncoding @extends SearchRow
*/
/*
@class FolderFolderType @extends SearchRow
*/
/*
@class SiteCategory_accounting @extends SearchRow
@property {RecordRef} website
@property {RecordRef} category
@property {boolean} isDefault
@property {String} categoryDescription
*/
/*
@class SiteCategoryTranslation @extends SearchRow
@property {Language} locale
@property {String} language
@property {String} displayName
@property {String} description
@property {String} storeDetailedDescription
@property {String} pageTitle
*/
/*
@class SiteCategoryTranslationList @extends SearchRow
@property {SiteCategoryTranslation[]} translation
@property {boolean} replaceAll
*/
/*
@class SiteCategoryPresentationItemList @extends SearchRow
@property {PresentationItem[]} presentationItem
@property {boolean} replaceAll
*/
/*
@class SiteCategorySearch @extends SearchRecord
@property {SiteCategorySearchBasic} basic
@property {CustomerSearchBasic} shopperJoin
@property {EmployeeSearchBasic} userJoin
*/
/*
@class SiteCategorySearchAdvanced @extends SearchRecord
@property {SiteCategorySearch} criteria
@property {SiteCategorySearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class SiteCategorySearchRow @extends SearchRow
@property {SiteCategorySearchRowBasic} basic
@property {CustomerSearchRowBasic} shopperJoin
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class TimeBillTimeType @extends SearchRow
*/
/*
@class TimeBill @extends Record
@property {RecordRef} customForm
@property {RecordRef} employee
@property {dateTime} tranDate
@property {RecordRef} customer
@property {RecordRef} caseTaskEvent
@property {boolean} isBillable
@property {RecordRef} payrollItem
@property {boolean} paidExternally
@property {RecordRef} workplace
@property {RecordRef} item
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {Duration} hours
@property {RecordRef} price
@property {TimeBillTimeType} timeType
@property {float} rate
@property {boolean} overrideRate
@property {RecordRef} temporaryLocalJurisdiction
@property {RecordRef} temporaryStateJurisdiction
@property {String} memo
@property {RecordRef} subsidiary
@property {boolean} supervisorApproval
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {String} status
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class TimeBillSearch @extends SearchRecord
@property {TimeBillSearchBasic} basic
@property {PhoneCallSearchBasic} callJoin
@property {SupportCaseSearchBasic} caseJoin
@property {ClassificationSearchBasic} classJoin
@property {CustomerSearchBasic} customerJoin
@property {DepartmentSearchBasic} departmentJoin
@property {EmployeeSearchBasic} employeeJoin
@property {CalendarEventSearchBasic} eventJoin
@property {ItemSearchBasic} itemJoin
@property {JobSearchBasic} jobJoin
@property {LocationSearchBasic} locationJoin
@property {ProjectTaskSearchBasic} projectTaskJoin
@property {ProjectTaskAssignmentSearchBasic} projectTaskAssignmentJoin
@property {ResourceAllocationSearchBasic} resourceAllocationJoin
@property {TaskSearchBasic} taskJoin
@property {EmployeeSearchBasic} userJoin
@property {VendorSearchBasic} vendorJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class TimeBillSearchAdvanced @extends SearchRecord
@property {TimeBillSearch} criteria
@property {TimeBillSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class TimeBillSearchRow @extends SearchRow
@property {TimeBillSearchRowBasic} basic
@property {PhoneCallSearchRowBasic} callJoin
@property {SupportCaseSearchRowBasic} caseJoin
@property {ClassificationSearchRowBasic} classJoin
@property {CustomerSearchRowBasic} customerJoin
@property {DepartmentSearchRowBasic} departmentJoin
@property {EmployeeSearchRowBasic} employeeJoin
@property {CalendarEventSearchRowBasic} eventJoin
@property {ItemSearchRowBasic} itemJoin
@property {JobSearchRowBasic} jobJoin
@property {LocationSearchRowBasic} locationJoin
@property {ProjectTaskSearchRowBasic} projectTaskJoin
@property {ProjectTaskAssignmentSearchRowBasic} projectTaskAssignmentJoin
@property {ResourceAllocationSearchRowBasic} resourceAllocationJoin
@property {TaskSearchRowBasic} taskJoin
@property {EmployeeSearchRowBasic} userJoin
@property {VendorSearchRowBasic} vendorJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class ExpenseReport @extends Record
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {String} status
@property {RecordRef} customForm
@property {RecordRef} account
@property {RecordRef} entity
@property {RecordRef} subsidiary
@property {String} tranId
@property {RecordRef} postingPeriod
@property {dateTime} tranDate
@property {dateTime} dueDate
@property {RecordRef} approvalStatus
@property {float} total
@property {RecordRef} nextApprover
@property {float} advance
@property {float} tax1Amt
@property {float} amount
@property {String} memo
@property {boolean} complete
@property {boolean} supervisorApproval
@property {boolean} accountingApproval
@property {boolean} useMultiCurrency
@property {float} tax2Amt
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {ExpenseReportExpenseList} expenseList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class ExpenseReportExpense @extends Record
@property {integer} line
@property {dateTime} expenseDate
@property {RecordRef} category
@property {float} quantity
@property {float} rate
@property {float} foreignAmount
@property {RecordRef} currency
@property {float} exchangeRate
@property {float} amount
@property {RecordRef} taxCode
@property {String} memo
@property {float} taxRate1
@property {float} tax1Amt
@property {RecordRef} department
@property {float} grossAmt
@property {float} taxRate2
@property {RecordRef} class
@property {RecordRef} customer
@property {RecordRef} location
@property {boolean} isBillable
@property {RecordRef} expMediaItem
@property {boolean} isNonReimbursable
@property {boolean} receipt
@property {integer} refNumber
@property {CustomFieldList} customFieldList
*/
/*
@class ExpenseReportExpenseList @extends Record
@property {ExpenseReportExpense[]} expense
@property {boolean} replaceAll
*/
/*
@class PaycheckJournal @extends Record
@property {RecordRef} subsidiary
@property {RecordRef} currency
@property {float} exchangeRate
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customForm
@property {String} tranId
@property {RecordRef} employee
@property {dateTime} tranDate
@property {RecordRef} postingPeriod
@property {RecordRef} account
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {PaycheckJournalCompanyContributionList} companyContributionList
@property {PaycheckJournalDeductionList} deductionList
@property {PaycheckJournalEmployeeTaxList} employeeTaxList
@property {PaycheckJournalCompanyTaxList} companyTaxList
@property {PaycheckJournalEarningList} earningList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class PaycheckJournalCompanyTax @extends Record
@property {integer} id
@property {RecordRef} payrollItem
@property {float} amount
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {CustomFieldList} customFieldList
*/
/*
@class PaycheckJournalCompanyTaxList @extends Record
@property {PaycheckJournalCompanyTax[]} paycheckJournalCompanyTax
@property {boolean} replaceAll
*/
/*
@class PaycheckJournalDeduction @extends Record
@property {integer} id
@property {RecordRef} payrollItem
@property {float} amount
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {CustomFieldList} customFieldList
*/
/*
@class PaycheckJournalDeductionList @extends Record
@property {PaycheckJournalDeduction[]} paycheckJournalDeduction
@property {boolean} replaceAll
*/
/*
@class PaycheckJournalCompanyContribution @extends Record
@property {integer} id
@property {RecordRef} payrollItem
@property {float} amount
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {CustomFieldList} customFieldList
*/
/*
@class PaycheckJournalCompanyContributionList @extends Record
@property {PaycheckJournalCompanyContribution[]} paycheckJournalCompanyContribution
@property {boolean} replaceAll
*/
/*
@class PaycheckJournalEarning @extends Record
@property {integer} id
@property {RecordRef} payrollItem
@property {float} hours
@property {float} amount
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {CustomFieldList} customFieldList
*/
/*
@class PaycheckJournalEarningList @extends Record
@property {PaycheckJournalEarning[]} paycheckJournalEarning
@property {boolean} replaceAll
*/
/*
@class PaycheckJournalEmployeeTax @extends Record
@property {integer} id
@property {RecordRef} payrollItem
@property {float} amount
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {CustomFieldList} customFieldList
*/
/*
@class PaycheckJournalEmployeeTaxList @extends Record
@property {PaycheckJournalEmployeeTax[]} paycheckJournalEmployeeTax
@property {boolean} replaceAll
*/
/*
@class TimeEntry @extends Record
@property {Duration} hours
@property {dateTime} createdDate
@property {dateTime} lastModifiedDate
@property {RecordRef} customer
@property {RecordRef} caseTaskEvent
@property {RecordRef} item
@property {boolean} isBillable
@property {RecordRef} payrollItem
@property {boolean} paidExternally
@property {RecordRef} price
@property {float} rate
@property {boolean} overrideRate
@property {String} memo
@property {RecordRef} department
@property {RecordRef} class
@property {RecordRef} location
@property {String} billingClass
@property {RecordRef} subsidiary
@property {RecordRef} approvalStatus
@property {TimeBillTimeType} timeType
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class TimeSheet @extends Record
@property {RecordRef} customForm
@property {RecordRef} employee
@property {dateTime} startDate
@property {dateTime} endDate
@property {Duration} totalHours
@property {RecordRef} approvalStatus
@property {RecordRef} subsidiary
@property {TimeSheetTimeGridList} timeGridList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class TimeSheetTimeGrid @extends Record
@property {TimeEntry} sunday
@property {TimeEntry} monday
@property {TimeEntry} tuesday
@property {TimeEntry} wednesday
@property {TimeEntry} thursday
@property {TimeEntry} friday
@property {TimeEntry} saturday
*/
/*
@class TimeSheetTimeGridList @extends Record
@property {TimeSheetTimeGrid[]} timeSheetTimeGrid
@property {boolean} replaceAll
*/
/*
@class TimeEntrySearch @extends SearchRecord
@property {TimeEntrySearchBasic} basic
@property {PhoneCallSearchBasic} callJoin
@property {SupportCaseSearchBasic} caseJoin
@property {ClassificationSearchBasic} classJoin
@property {CustomerSearchBasic} customerJoin
@property {DepartmentSearchBasic} departmentJoin
@property {EmployeeSearchBasic} employeeJoin
@property {CalendarEventSearchBasic} eventJoin
@property {ItemSearchBasic} itemJoin
@property {JobSearchBasic} jobJoin
@property {LocationSearchBasic} locationJoin
@property {ProjectTaskSearchBasic} projectTaskJoin
@property {ProjectTaskAssignmentSearchBasic} projectTaskAssignmentJoin
@property {ResourceAllocationSearchBasic} resourceAllocationJoin
@property {TaskSearchBasic} taskJoin
@property {TimeSheetSearchBasic} timeSheetJoin
@property {EmployeeSearchBasic} userJoin
@property {VendorSearchBasic} vendorJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class TimeEntrySearchAdvanced @extends SearchRecord
@property {TimeEntrySearch} criteria
@property {TimeEntrySearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class TimeEntrySearchRow @extends SearchRow
@property {TimeEntrySearchRowBasic} basic
@property {PhoneCallSearchRowBasic} callJoin
@property {SupportCaseSearchRowBasic} caseJoin
@property {ClassificationSearchRowBasic} classJoin
@property {CustomerSearchRowBasic} customerJoin
@property {DepartmentSearchRowBasic} departmentJoin
@property {EmployeeSearchRowBasic} employeeJoin
@property {CalendarEventSearchRowBasic} eventJoin
@property {ItemSearchRowBasic} itemJoin
@property {JobSearchRowBasic} jobJoin
@property {LocationSearchRowBasic} locationJoin
@property {ProjectTaskSearchRowBasic} projectTaskJoin
@property {ProjectTaskAssignmentSearchRowBasic} projectTaskAssignmentJoin
@property {ResourceAllocationSearchRowBasic} resourceAllocationJoin
@property {TaskSearchRowBasic} taskJoin
@property {TimeSheetSearchRowBasic} timeSheetJoin
@property {EmployeeSearchRowBasic} userJoin
@property {VendorSearchRowBasic} vendorJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class TimeSheetSearch @extends SearchRecord
@property {TimeSheetSearchBasic} basic
@property {EmployeeSearchBasic} employeeJoin
@property {TimeEntrySearchBasic} timeEntryJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class TimeSheetSearchAdvanced @extends SearchRecord
@property {TimeSheetSearch} criteria
@property {TimeSheetSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class TimeSheetSearchRow @extends SearchRow
@property {TimeSheetSearchRowBasic} basic
@property {EmployeeSearchRowBasic} employeeJoin
@property {TimeEntrySearchRowBasic} timeEntryJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class CampaignCampaignDirectMailStatus @extends SearchRow
*/
/*
@class CampaignCampaignEmailStatus @extends SearchRow
*/
/*
@class CampaignCampaignEventStatus @extends SearchRow
*/
/*
@class CampaignChannelEventType @extends SearchRow
*/
/*
@class CampaignResponseResponse @extends SearchRow
*/
/*
@class CampaignCampaignEventType @extends SearchRow
*/
/*
@class CampaignResponse @extends Record
@property {RecordRef} entity
@property {RecordRef} leadSource
@property {RecordRef} campaignEvent
@property {dateTime} campaignResponseDate
@property {String} channel
@property {CampaignResponseResponse} response
@property {String} note
@property {CampaignResponseResponsesList} responsesList
@property {String} internalId
@property {String} externalId
*/
/*
@class CampaignStatus @extends Record
*/
/*
@class PromotionCodeApplyDiscountTo @extends Record
*/
/*
@class CampaignResponseCategory @extends Record
*/
/*
@class PromotionCodeUseType @extends Record
*/
/*
@class Campaign @extends Record
@property {RecordRef} customForm
@property {String} campaignId
@property {String} title
@property {RecordRef} category
@property {RecordRef} owner
@property {dateTime} startDate
@property {dateTime} endDate
@property {String} url
@property {float} baseCost
@property {float} cost
@property {float} expectedRevenue
@property {String} message
@property {boolean} isInactive
@property {boolean} local
@property {float} totalRevenue
@property {float} roi
@property {float} profit
@property {float} costPerCustomer
@property {float} convCostPerCustomer
@property {integer} conversions
@property {integer} leadsGenerated
@property {integer} uniqueVisitors
@property {RecordRef} vertical
@property {RecordRef} audience
@property {RecordRef} offer
@property {RecordRef} promotionCode
@property {RecordRefList} itemList
@property {RecordRef} family
@property {RecordRef} searchEngine
@property {String} keyword
@property {CampaignEmailList} campaignEmailList
@property {CampaignDirectMailList} campaignDirectMailList
@property {CampaignEventList} campaignEventList
@property {CampaignEventResponseList} eventResponseList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class CampaignEmail @extends Record
@property {String} internalId
@property {RecordRef} campaignGroup
@property {RecordRef} template
@property {String} description
@property {RecordRef} subscription
@property {RecordRef} channel
@property {float} cost
@property {CampaignCampaignEmailStatus} status
@property {dateTime} dateScheduled
@property {RecordRef} promoCode
@property {CustomFieldList} customFieldList
*/
/*
@class CampaignEmailList @extends Record
@property {CampaignEmail[]} campaignEmail
@property {boolean} replaceAll
*/
/*
@class CampaignDirectMail @extends Record
@property {String} internalId
@property {RecordRef} campaignGroup
@property {RecordRef} template
@property {String} description
@property {RecordRef} subscription
@property {RecordRef} channel
@property {float} cost
@property {CampaignCampaignDirectMailStatus} status
@property {dateTime} dateScheduled
@property {RecordRef} promoCode
@property {CustomFieldList} customFieldList
*/
/*
@class CampaignDirectMailList @extends Record
@property {CampaignDirectMail[]} campaignDirectMail
@property {boolean} replaceAll
*/
/*
@class CampaignEvent @extends Record
@property {String} internalId
@property {RecordRef} campaignGroup
@property {String} description
@property {RecordRef} subscription
@property {RecordRef} channel
@property {float} cost
@property {CampaignCampaignEventStatus} status
@property {dateTime} dateScheduled
@property {RecordRef} promoCode
@property {CustomFieldList} customFieldList
*/
/*
@class CampaignEventList @extends Record
@property {CampaignEvent[]} campaignEvent
@property {boolean} replaceAll
*/
/*
@class CampaignEventResponse @extends Record
@property {String} name
@property {String} type
@property {dateTime} dateSent
@property {float} sent
@property {float} opened
@property {float} openedRatio
@property {float} clickedThru
@property {float} clickedThruRatio
@property {integer} responded
@property {float} respondedRatio
@property {integer} unsubscribed
@property {float} unsubscribedRatio
@property {integer} bounced
@property {float} bouncedRatio
*/
/*
@class CampaignEventResponseList @extends Record
@property {CampaignEventResponse[]} eventResponse
@property {boolean} replaceAll
*/
/*
@class CampaignSearch @extends SearchRecord
@property {CampaignSearchBasic} basic
@property {EntitySearchBasic} campaignRecipientJoin
@property {FileSearchBasic} fileJoin
@property {MessageSearchBasic} messagesJoin
@property {OriginatingLeadSearchBasic} originatingLeadJoin
@property {PromotionCodeSearchBasic} promotionCodeJoin
@property {TransactionSearchBasic} transactionJoin
@property {EmployeeSearchBasic} userJoin
@property {NoteSearchBasic} userNotesJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class CampaignSearchAdvanced @extends SearchRecord
@property {CampaignSearch} criteria
@property {CampaignSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class CampaignSearchRow @extends SearchRow
@property {CampaignSearchRowBasic} basic
@property {EntitySearchRowBasic} campaignRecipientJoin
@property {FileSearchRowBasic} fileJoin
@property {MessageSearchRowBasic} messagesJoin
@property {OriginatingLeadSearchRowBasic} originatingLeadJoin
@property {PromotionCodeSearchRowBasic} promotionCodeJoin
@property {TransactionSearchRowBasic} transactionJoin
@property {EmployeeSearchRowBasic} userJoin
@property {NoteSearchRowBasic} userNotesJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class CampaignCategory @extends Record
@property {String} name
@property {RecordRef} parent
@property {RecordRef} leadSource
@property {String} description
@property {boolean} isexternal
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class CampaignAudience @extends Record
@property {String} name
@property {String} description
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class CampaignFamily @extends Record
@property {String} name
@property {String} description
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class CampaignSearchEngine @extends Record
@property {String} name
@property {String} description
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class CampaignChannel @extends Record
@property {String} name
@property {CampaignChannelEventType} eventType
@property {String} description
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class CampaignOffer @extends Record
@property {String} name
@property {String} description
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class CampaignResponse_marketingTypes @extends Record
*/
/*
@class CampaignResponseResponses @extends Record
@property {String} response
@property {String} responseDate
@property {String} author
@property {String} note
*/
/*
@class CampaignResponseResponsesList @extends Record
@property {CampaignResponseResponses[]} responses
@property {boolean} replaceAll
*/
/*
@class CampaignVertical @extends Record
@property {String} name
@property {String} description
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class CampaignSubscription @extends Record
@property {String} name
@property {String} description
@property {boolean} subscribedByDefault
@property {boolean} unsubscribed
@property {String} externalName
@property {String} externalDescription
@property {boolean} isInactive
@property {String} internalId
@property {String} externalId
*/
/*
@class PromotionCode @extends Record
@property {RecordRef} implementation
@property {RecordRef} customForm
@property {PromotionCodeUseType} useType
@property {boolean} displayLineDiscounts
@property {String} code
@property {String} codePattern
@property {integer} numberToGenerate
@property {String} description
@property {RecordRefList} locationList
@property {boolean} isInactive
@property {RecordRef} discount
@property {String} rate
@property {boolean} discountType
@property {PromotionCodeApplyDiscountTo} applyDiscountTo
@property {RecordRef} freeShipMethod
@property {float} minimumOrderAmount
@property {dateTime} startDate
@property {dateTime} endDate
@property {boolean} isPublic
@property {PromotionCodeCurrencyList} currencyList
@property {boolean} excludeItems
@property {String} name
@property {PromotionCodeItemsList} itemsList
@property {PromotionCodePartnersList} partnersList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class PromotionCodePartners @extends Record
@property {RecordRef} partner
@property {String} code
*/
/*
@class PromotionCodePartnersList @extends Record
@property {PromotionCodePartners[]} partners
@property {boolean} replaceAll
*/
/*
@class PromotionCodeItems @extends Record
@property {RecordRef} item
*/
/*
@class PromotionCodeItemsList @extends Record
@property {PromotionCodeItems[]} items
@property {boolean} replaceAll
*/
/*
@class PromotionCodeSearch @extends SearchRecord
@property {PromotionCodeSearchBasic} basic
@property {EmployeeSearchBasic} userJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class PromotionCodeSearchAdvanced @extends SearchRecord
@property {PromotionCodeSearch} criteria
@property {PromotionCodeSearchRow} columns
@property {String} savedSearchScriptId
@property {String} savedSearchId
*/
/*
@class PromotionCodeSearchRow @extends SearchRow
@property {PromotionCodeSearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class PromotionCodeCurrency @extends SearchRow
@property {RecordRef} currency
@property {float} minimumOrderAmount
*/
/*
@class PromotionCodeCurrencyList @extends SearchRow
@property {PromotionCodeCurrency[]} currency
@property {boolean} replaceAll
*/
/*
@class CouponCode @extends Record
@property {RecordRef} promotion
@property {String} code
@property {RecordRef} recipient
@property {dateTime} dateSent
@property {boolean} used
@property {integer} useCount
@property {String} internalId
@property {String} externalId
*/
/*
@class CouponCodeSearch @extends SearchRecord
@property {CouponCodeSearchBasic} basic
@property {EmployeeSearchBasic} userJoin
*/
/*
@class CouponCodeSearchAdvanced @extends SearchRecord
@property {CouponCodeSearch} criteria
@property {CouponCodeSearchRow} columns
@property {String} savedSearchScriptId
@property {String} savedSearchId
*/
/*
@class CouponCodeSearchRow @extends SearchRow
@property {CouponCodeSearchRowBasic} basic
@property {EmployeeSearchRowBasic} userJoin
*/
/*
@class DemandPlanCalendarType @extends SearchRow
*/
/*
@class DemandPlanMonth @extends SearchRow
*/
/*
@class DayOfTheWeek @extends SearchRow
*/
/*
@class ItemDemandPlanProjectionMethod @extends SearchRow
*/
/*
@class ItemSupplyPlanOrderType @extends SearchRow
*/
/*
@class ItemDemandPlan @extends Record
@property {RecordRef} customForm
@property {RecordRef} subsidiary
@property {RecordRef} location
@property {RecordRef} item
@property {RecordRef} units
@property {String} memo
@property {integer} year
@property {DemandPlanMonth} month
@property {dateTime} startDate
@property {dateTime} endDate
@property {DemandPlanCalendarType} demandPlanCalendarType
@property {DemandPlanMatrix} demandPlanMatrix
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class DemandPlan @extends Record
@property {dateTime} startDate
@property {dateTime} endDate
@property {float} calculatedQuantity
@property {PeriodDemandPlanList} periodDemandPlanList
*/
/*
@class DemandPlanMatrix @extends Record
@property {DemandPlan[]} demandPlan
@property {boolean} replaceAll
*/
/*
@class PeriodDemandPlanList @extends Record
@property {PeriodDemandPlan[]} periodDemandPlan
*/
/*
@class PeriodDemandPlan @extends Record
@property {float} quantity
@property {DayOfTheWeek} dayOfTheWeek
*/
/*
@class ItemDemandPlanSearch @extends SearchRecord
@property {ItemDemandPlanSearchBasic} basic
@property {ItemSearchBasic} itemJoin
@property {ItemSearchBasic} lastAlternateSourceItemJoin
@property {LocationSearchBasic} locationJoin
@property {EmployeeSearchBasic} userJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class ItemDemandPlanSearchAdvanced @extends SearchRecord
@property {ItemDemandPlanSearch} criteria
@property {ItemDemandPlanSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class ItemDemandPlanSearchRow @extends SearchRow
@property {ItemDemandPlanSearchRowBasic} basic
@property {ItemSearchRowBasic} itemJoin
@property {ItemSearchRowBasic} lastAlternateSourceItemJoin
@property {LocationSearchRowBasic} locationJoin
@property {EmployeeSearchRowBasic} userJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class ItemSupplyPlan @extends Record
@property {RecordRef} customForm
@property {RecordRef} subsidiary
@property {RecordRef} location
@property {RecordRef} item
@property {RecordRef} units
@property {String} memo
@property {ItemSupplyPlanOrderList} orderList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class ItemSupplyPlanOrder @extends Record
@property {integer} orderLineId
@property {dateTime} orderDate
@property {dateTime} receiptDate
@property {RecordRef} sourceLocation
@property {float} quantity
@property {boolean} orderCreated
@property {ItemSupplyPlanOrderType} orderType
*/
/*
@class ItemSupplyPlanOrderList @extends Record
@property {ItemSupplyPlanOrder[]} itemSupplyPlanOrder
@property {boolean} replaceAll
*/
/*
@class ItemSupplyPlanSearch @extends SearchRecord
@property {ItemSupplyPlanSearchBasic} basic
@property {ItemSearchBasic} itemJoin
@property {LocationSearchBasic} locationJoin
@property {EmployeeSearchBasic} userJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class ItemSupplyPlanSearchAdvanced @extends SearchRecord
@property {ItemSupplyPlanSearch} criteria
@property {ItemSupplyPlanSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class ItemSupplyPlanSearchRow @extends SearchRow
@property {ItemSupplyPlanSearchRowBasic} basic
@property {ItemSearchRowBasic} itemJoin
@property {LocationSearchRowBasic} locationJoin
@property {EmployeeSearchRowBasic} userJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class ManufacturingOperationTaskStatus @extends SearchRow
*/
/*
@class ManufacturingOperationTaskPredecessorPredecessorType @extends SearchRow
*/
/*
@class ManufacturingLagType @extends SearchRow
*/
/*
@class ManufacturingCostTemplate @extends Record
@property {RecordRef} customForm
@property {RecordRef} subsidiary
@property {String} name
@property {String} memo
@property {boolean} isInactive
@property {ManufacturingCostDetailList} costDetailList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class ManufacturingCostDetail @extends Record
@property {RecordRef} costCategory
@property {RecordRef} item
@property {float} fixedRate
@property {float} runRate
*/
/*
@class ManufacturingCostDetailList @extends Record
@property {ManufacturingCostDetail[]} manufacturingCostDetail
@property {boolean} replaceAll
*/
/*
@class ManufacturingCostTemplateSearch @extends SearchRecord
@property {ManufacturingCostTemplateSearchBasic} basic
@property {ItemSearchBasic} itemJoin
@property {EmployeeSearchBasic} userJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class ManufacturingCostTemplateSearchAdvanced @extends SearchRecord
@property {ManufacturingCostTemplateSearch} criteria
@property {ManufacturingCostTemplateSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class ManufacturingCostTemplateSearchRow @extends SearchRow
@property {ManufacturingCostTemplateSearchRowBasic} basic
@property {ItemSearchRowBasic} itemJoin
@property {EmployeeSearchRowBasic} userJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class ManufacturingRouting @extends Record
@property {RecordRef} customForm
@property {RecordRef} subsidiary
@property {RecordRef} item
@property {RecordRefList} locationList
@property {String} name
@property {String} memo
@property {boolean} isDefault
@property {boolean} isInactive
@property {boolean} autoCalculateLag
@property {ManufacturingRoutingRoutingStepList} routingStepList
@property {ManufacturingRoutingRoutingComponentList} routingComponentList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class ManufacturingRoutingRoutingStep @extends Record
@property {integer} operationSequence
@property {String} operationName
@property {RecordRef} manufacturingWorkCenter
@property {integer} machineResources
@property {integer} laborResources
@property {RecordRef} manufacturingCostTemplate
@property {float} setupTime
@property {float} runRate
@property {ManufacturingLagType} lagType
@property {integer} lagAmount
@property {String} lagUnits
*/
/*
@class ManufacturingRoutingRoutingStepList @extends Record
@property {ManufacturingRoutingRoutingStep[]} manufacturingRoutingRoutingStep
@property {boolean} replaceAll
*/
/*
@class ManufacturingRoutingSearch @extends SearchRecord
@property {ManufacturingRoutingSearchBasic} basic
@property {ItemSearchBasic} itemJoin
@property {LocationSearchBasic} locationJoin
@property {ManufacturingCostTemplateSearchBasic} manufacturingCostTemplateJoin
@property {EntityGroupSearchBasic} manufacturingWorkCenterJoin
@property {EmployeeSearchBasic} userJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class ManufacturingRoutingSearchAdvanced @extends SearchRecord
@property {ManufacturingRoutingSearch} criteria
@property {ManufacturingRoutingSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class ManufacturingRoutingSearchRow @extends SearchRow
@property {ManufacturingRoutingSearchRowBasic} basic
@property {ItemSearchRowBasic} itemJoin
@property {LocationSearchRowBasic} locationJoin
@property {ManufacturingCostTemplateSearchRowBasic} manufacturingCostTemplateJoin
@property {EntityGroupSearchRowBasic} manufacturingWorkCenterJoin
@property {EmployeeSearchRowBasic} userJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class ManufacturingOperationTask @extends Record
@property {RecordRef} customForm
@property {RecordRef} manufacturingWorkCenter
@property {RecordRef} manufacturingCostTemplate
@property {String} title
@property {integer} operationSequence
@property {RecordRef} workOrder
@property {RecordRef} order
@property {ManufacturingOperationTaskStatus} status
@property {String} message
@property {float} estimatedWork
@property {float} actualWork
@property {float} remainingWork
@property {float} inputQuantity
@property {float} completedQuantity
@property {float} setupTime
@property {float} runRate
@property {dateTime} startDate
@property {dateTime} endDate
@property {boolean} autoCalculateLag
@property {integer} machineResources
@property {integer} laborResources
@property {ManufacturingCostDetailList} costDetailList
@property {ManufacturingOperationTaskPredecessorList} predecessorList
@property {CustomFieldList} customFieldList
@property {String} internalId
@property {String} externalId
*/
/*
@class ManufacturingOperationTaskSearch @extends SearchRecord
@property {ManufacturingOperationTaskSearchBasic} basic
@property {ManufacturingOperationTaskSearchBasic} predecessorJoin
@property {EmployeeSearchBasic} userJoin
@property {TransactionSearchBasic} workOrderJoin
@property {CustomSearchJoin[]} customSearchJoin
*/
/*
@class ManufacturingOperationTaskSearchAdvanced @extends SearchRecord
@property {ManufacturingOperationTaskSearch} criteria
@property {ManufacturingOperationTaskSearchRow} columns
@property {String} savedSearchId
@property {String} savedSearchScriptId
*/
/*
@class ManufacturingOperationTaskSearchRow @extends SearchRow
@property {ManufacturingOperationTaskSearchRowBasic} basic
@property {ManufacturingOperationTaskSearchRowBasic} predecessorJoin
@property {EmployeeSearchRowBasic} userJoin
@property {TransactionSearchRowBasic} workOrderJoin
@property {CustomSearchRowBasic[]} customSearchJoin
*/
/*
@class ManufacturingOperationTaskPredecessor @extends SearchRow
@property {RecordRef} task
@property {ManufacturingOperationTaskPredecessorPredecessorType} type
@property {dateTime} startDate
@property {dateTime} endDate
@property {ManufacturingLagType} lagType
@property {integer} lagAmount
@property {String} lagUnits
*/
/*
@class ManufacturingOperationTaskPredecessorList @extends SearchRow
@property {ManufacturingOperationTaskPredecessor[]} manufacturingOperationTaskPredecessor
@property {boolean} replaceAll
*/
/*
@class ManufacturingRoutingRoutingComponent @extends SearchRow
@property {String} itemName
@property {String} description
@property {float} yield
@property {float} bomQuantity
@property {float} quantity
@property {String} units
@property {RecordRef} operationDisplayText
@property {integer} operationSequenceNumber
@property {String} component
@property {String} item
*/
/*
@class ManufacturingRoutingRoutingComponentList @extends SearchRow
@property {ManufacturingRoutingRoutingComponent[]} manufacturingRoutingRoutingComponent
@property {boolean} replaceAll
*/
/*
@class NetSuiteService @extends NSPHPClient
*/