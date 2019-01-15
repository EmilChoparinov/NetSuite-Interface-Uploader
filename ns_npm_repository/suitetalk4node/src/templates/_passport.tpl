<nsmessages:passport>
	{{#if credentials.email}}<nscore:email>{{credentials.email}}</nscore:email>{{/if}}
	{{#if credentials.password}}<nscore:password>{{credentials.password}}</nscore:password>{{/if}}
	{{#if credentials.account}}<nscore:account>{{credentials.account}}</nscore:account>{{/if}}
	{{#if credentials.roleId}}<nscore:role internalId="{{credentials.roleId}}"/>{{/if}}
</nsmessages:passport>

{{#if credentials.applicationId}}
<nsmessages:applicationInfo>
	<nscore:applicationId>{{credentials.applicationId}}</nscore:applicationId>
</nsmessages:applicationInfo>
{{/if}}
