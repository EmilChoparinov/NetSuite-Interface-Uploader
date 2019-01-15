<SOAP-ENV:Envelope {{> _namespaces}}>
	<SOAP-ENV:Header>
		{{> _passport }}
	</SOAP-ENV:Header>
	<SOAP-ENV:Body>
		<nsmessages:initialize>
			{{initializeRecord this}}
		</nsmessages:initialize>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>
