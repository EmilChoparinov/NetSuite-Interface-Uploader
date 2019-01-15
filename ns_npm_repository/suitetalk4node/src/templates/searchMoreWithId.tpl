<?xml version="1.0" encoding="UTF-8"?>

<SOAP-ENV:Envelope {{> _namespaces}}>
    <SOAP-ENV:Header>
        {{> _passport }}
        {{> _searchPreferences}}
    </SOAP-ENV:Header>
    <SOAP-ENV:Body>
        <nsmessages:searchMoreWithId>
            <nscore:searchId>{{id}}</nscore:searchId>
            <nscore:pageIndex>{{page}}</nscore:pageIndex>
        </nsmessages:searchMoreWithId>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>