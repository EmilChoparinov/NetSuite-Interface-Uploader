<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope {{> _namespaces}}>
	<SOAP-ENV:Header>
		{{> _passport }}
		{{> _searchPreferences}}
	</SOAP-ENV:Header>
	<SOAP-ENV:Body>
		<nsmessages:search>
			<nsmessages:searchRecord xsi:type="{{recordNamespace}}:{{RecordType}}Search">

				<basic xsi:type="nscommon:{{RecordType}}SearchBasic">
					{{searchBasicFilterPrint filters}}
				</basic>

				{{#each joins }}
				<{{recordType}}Join xsi:type="nscommon:{{RecordType}}SearchBasic">
					{{searchBasicFilterPrint filters}}
				</{{recordType}}Join>
				{{/each}}

			</nsmessages:searchRecord>
		</nsmessages:search>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>