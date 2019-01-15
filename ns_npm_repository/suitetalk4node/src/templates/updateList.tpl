<SOAP-ENV:Envelope {{> _namespaces}}>
	<SOAP-ENV:Header>
		{{> _passport }}
	</SOAP-ENV:Header>
	<SOAP-ENV:Body>
		<nsmessages:updateList>
			{{#each records}}
				{{addRecord this}}
			{{/each}}			
		</nsmessages:updateList>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>
