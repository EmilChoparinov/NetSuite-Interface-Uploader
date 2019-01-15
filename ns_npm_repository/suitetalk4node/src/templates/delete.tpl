<SOAP-ENV:Envelope {{> _namespaces}}>
    <SOAP-ENV:Header>
        {{> _passport }}
    </SOAP-ENV:Header>
    <SOAP-ENV:Body>
        <nsmessages:delete>
            <nsmessages:baseRef xsi:type="nscore:RecordRef" type="{{recordType}}" internalId="{{internalId}}"/>
        </nsmessages:delete>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>