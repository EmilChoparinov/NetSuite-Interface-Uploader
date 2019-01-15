<SOAP-ENV:Envelope {{> _namespaces}}>
	<SOAP-ENV:Header>
		{{> _passport }}
	</SOAP-ENV:Header>
	<SOAP-ENV:Body>
		<nsmessages:deleteList>
			{{#each records}}
				{{baseRef this}}
			{{/each}}			
		</nsmessages:deleteList>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>
