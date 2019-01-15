<SOAP-ENV:Envelope {{> _namespaces}}>
	<SOAP-ENV:Header>
		{{> _passport }}
	</SOAP-ENV:Header>
	<SOAP-ENV:Body>
		<nsmessages:upsert>
			{{addRecord this}}
		</nsmessages:upsert>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>
