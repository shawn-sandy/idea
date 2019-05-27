const Got = require("got")

module.exports =  async( packageName, callback ) => {
	try {
		const url = `https://api.npms.io/v2/package/${ packageName }`;
    const { body } = await Got( url );
    console.log(body)
    console.log('url', url)
		// const downloads = JSON.parse( body ).downloads;
		const downloads = `data here`
    callback( null, downloads);
	}
	catch( error ){
		callback( error );
	}
}
