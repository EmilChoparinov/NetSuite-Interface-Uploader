<SOAP-ENV:Envelope {{> _namespaces}}>
    <SOAP-ENV:Header>
        {{> _passport }}
    </SOAP-ENV:Header>
    <SOAP-ENV:Body>
        <nsmessages:getAll>
            <nsmessages:record recordType="{{recordType}}"/>
        </nsmessages:getAll>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>