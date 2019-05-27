const Got = require("got")

module.exports =  async( packageName, callback ) => {
	try {
		const url = `https://api.npmjs.org/downloads/point/last-week/${ packageName }`;
    const { body } = await Got( url );
    console.log(body)
    console.log('url', url)
		// const downloads = JSON.parse( body ).downloads;
		const downloads = `
    <div>${ JSON.parse( body ).package }</div>
    <div>${ JSON.parse( body ).downloads }</div>
    <div>${ JSON.parse( body ).start }</div>
    `
    callback( null, downloads);
	}
	catch( error ){
		callback( error );
	}
}
