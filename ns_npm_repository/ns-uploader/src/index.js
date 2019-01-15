var Tool = require('./main'); 

// Heads up - here it is defined which implementation to use
// require('./impl_add_update'); 
// require('./impl_upsertList'); 
require('./impl_upsertList2');

require('./filecabinet-util'); 

module.exports = Tool; 
