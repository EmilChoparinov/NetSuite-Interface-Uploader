<SOAP-ENV:Envelope {{> _namespaces}}>
	<SOAP-ENV:Header>
		{{> _passport }}
	</SOAP-ENV:Header>
	<SOAP-ENV:Body>
		<nsmessages:initializeList>
			{{#each records}}
				{{initializeRecord this}}
			{{/each}}			
		</nsmessages:initializeList>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>
