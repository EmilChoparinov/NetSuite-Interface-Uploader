<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope {{> _namespaces}}>
    <SOAP-ENV:Header>
        {{> _passport }}
    </SOAP-ENV:Header>
    <SOAP-ENV:Body>
        <nsmessages:getCustomizationId>
            <customizationType getCustomizationType="{{getCustomizationType}}"/>
            <includeInactives>{{#if includeInactives}}true{{else}}false{{/if}}</includeInactives>
        </nsmessages:getCustomizationId>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>