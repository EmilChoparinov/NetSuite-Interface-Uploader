<SOAP-ENV:Envelope {{> _namespaces}}>
	<SOAP-ENV:Header>
		{{> _passport }}
	</SOAP-ENV:Header>
	<SOAP-ENV:Body>
		<nsmessages:update>
			{{addRecord this}}
		</nsmessages:update>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>
