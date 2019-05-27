const axios = require('axios')

module.exports =  async( packageName, callback ) => {
	try {
		const url = `https://api.npms.io/v2/package/${ packageName }`;
    const response = await axios.get( url );
    // const response = await Got( url );
    const data = response ? response.data.collected.metadata : null
    const github = response ? response.data.collected.github : null
    const npm = response ? response.data.collected.npm : null
    const source = response ? response.data.collected.source : null
    const stars = github ? github.starsCount : 'n/a'
    const openIssues = github ? github.issues.openCount : 'n/a'
    console.log('url', url)
    console.log(data)
    console.log('github', github)
		// const downloads = JSON.parse( body ).downloads;
    const downloads = `
    <ul class="package list">
    <li class="text-capitalize">${data.name || null}</li>
    <li>Description ${data.description || null}</li>
    <li>Version ${data.version || null}</li>
    <li>Stars Count ${stars}</li>
    <li>Open issues ${openIssues}</li>
    </ul>
    `
    callback( null, downloads);
	}
	catch( error ){
		callback( error );
	}
}
