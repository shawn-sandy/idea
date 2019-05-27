const Got = require("got")
const axios = require('axios')

module.exports =  async( packageName, callback ) => {
	try {
		const url = `https://api.npms.io/v2/package/${ packageName }`;
    const response = await axios.get( url );
    // const response = await Got( url );
    console.log('url', url)
    console.log(response.data.collected.metadata.description)
		// const downloads = JSON.parse( body ).downloads;
		const downloads = `${response.data.collected.metadata.description}`
    callback( null, downloads);
	}
	catch( error ){
		callback( error );
	}
}
