<SOAP-ENV:Envelope {{> _namespaces}}>
	<SOAP-ENV:Header>
		{{> _passport }}
	</SOAP-ENV:Header>
	<SOAP-ENV:Body>
		<nsmessages:upsertList>
			{{#each records}}
				{{addRecord this}}
			{{/each}}			
		</nsmessages:upsertList>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>
