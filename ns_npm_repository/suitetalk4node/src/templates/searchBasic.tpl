<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope {{> _namespaces}}>
	<SOAP-ENV:Header>
		{{> _passport }}
		{{> _searchPreferences}}
	</SOAP-ENV:Header>
	<SOAP-ENV:Body>
		<nsmessages:search>
			<nsmessages:searchRecord xsi:type="nscommon:{{RecordType}}SearchBasic">
				{{searchBasicFilterPrint filters}}
			</nsmessages:searchRecord>
		</nsmessages:search>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>