<SOAP-ENV:Envelope {{> _namespaces}}>
	<SOAP-ENV:Header>
		{{> _passport }}
	</SOAP-ENV:Header>
	<SOAP-ENV:Body>
		<nsmessages:addList>
			{{#each records}}
				{{addRecord this}}
			{{/each}}			
		</nsmessages:addList>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>
