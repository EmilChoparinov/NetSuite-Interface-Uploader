<SOAP-ENV:Envelope {{> _namespaces}}>
    <SOAP-ENV:Header>
        {{> _passport }}
    </SOAP-ENV:Header>
    <SOAP-ENV:Body>
        <nsmessages:get>
            <nsmessages:baseRef xsi:type="nscore:RecordRef" type="{{recordType}}" internalId="{{internalId}}"/>
        </nsmessages:get>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>