<SOAP-ENV:Envelope {{> _namespaces}}>
	<SOAP-ENV:Header>
		{{> _passport }}
	</SOAP-ENV:Header>
	<SOAP-ENV:Body>
		<nsmessages:add>
			{{addRecord this}}
		</nsmessages:add>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>
